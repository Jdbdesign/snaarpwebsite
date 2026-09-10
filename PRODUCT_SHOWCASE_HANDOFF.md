# Product Showcase — Interactive Mockups Handoff

This document describes the "See It In Action" product showcase on the Snaarp marketing
site: how the interactive dashboard mockups are built, the conventions to follow, what is
done so far, and how to continue. It is written so another AI/dev tool can pick up the work
without re-deriving the architecture.

> Content was rephrased for clarity; it reflects the actual code in this repo.

---

## 1. What this feature is

The homepage section **"Explore how simple your workflow can be"** renders an interactive
product carousel: a vertical rail of Snaarp products on the left, and a large browser-style
"card" on the right that shows a **fake but fully interactive dashboard mockup** for the
selected product. Each mockup runs a short guided **coach-mark walkthrough** (tooltip cards
with a "Next" button) that drives the user through the product's key actions, then hands off
(`onEnd`) to the next product.

These dashboards are **state-driven marketing mockups**, NOT real routed pages. All
"navigation" inside a mockup is React `useState` view-switching. Nothing here talks to a
backend.

Primary place it renders: `app/download/sendrit/page.tsx` (dev URL:
`http://localhost:3000/download/sendrit`). It is also used in `components/SeeItInAction.tsx`.

---

## 2. Key files

| File | Role |
| --- | --- |
| `components/ProductShowcaseCard.tsx` | The carousel: the vertical rail (`PRODUCT_ICONS`) + renders one mockup by `activeIndex`. Owns the `onEnd` chaining between products. |
| `components/SeeItInAction.tsx` | Homepage section wrapper. Contains the "Explore Snaarp Tools" intro modal + responsive scaling. |
| `components/Coachmark.tsx` | Shared coach-mark tooltip card (title, subtitle, Next button, arrow). Reused by every mockup. |
| `components/*PreviewMockup.tsx` | One file per product mockup (Mail, Me, Contacts, Kalender, Lock, Drive, Sheet, Document, Teams, Presentation, Meet, IdCard, Pdf, Sendrit, Zeus, Verifyrit, Workforce, Crm, Books). |
| `public/assets/icons/rail-*.svg` | Rail logos (product favicons). |

---

## 3. The rail (`ProductShowcaseCard.tsx`)

- `PRODUCT_ICONS` is an array; each entry: `{ src, label, name, color, size, lucide, lucideIcon }`.
  - `name` = display name shown in the rail (brand purple `#7C3AED` for all).
  - `label` = internal key + tooltip.
- The rail is a **fixed-height (712px), internally scrollable** column (`.product-rail-scroll`,
  scrollbar hidden via `app/globals.css`). Adding more products scrolls within the rail
  instead of growing it.
- Rendering: `{activeIndex === N && <XPreviewMockup onEnd={() => setActiveIndex(N+1)} />}`.
  The **last** product has no `onEnd` (tour just ends).

### Current rail order (index → product)
```
0 Mail · 1 CRM · 2 Books · 3 Me · 4 ID Card · 5 PDF · 6 Workforce · 7 SendRit · 8 Zeus ·
9 VerifyRit · 10 Lock · 11 Drive · 12 Sheet · 13 Document · 14 Teams · 15 Presentation · 16 Meet
```
**This order is a deliberate priority ranking, not build order or alphabetical** — set by the
user: Mail leads, then CRM/Books/Me/ID Card/PDF/Workforce/SendRit/Zeus/VerifyRit as the
highest-priority products, with the remaining products kept in their prior relative order and
appended after. If a new product is added to the rail, ask where it ranks rather than
defaulting to appending it last.

**Contacts and Calendar are temporarily disabled (commented out, not deleted)** — both their
`PRODUCT_ICONS` entries and their `{activeIndex === N && <XPreviewMockup .../>}` render lines
are commented out in `ProductShowcaseCard.tsx`, along with their now-unused imports
(`ContactsPreviewMockup`, `KalenderPreviewMockup`). All indices below them were renumbered to
close the gap — this is *why* VerifyRit's `onEnd` now hands off directly to Lock (previously it
went to Contacts). **To re-enable them:** uncomment the two imports, the two `PRODUCT_ICONS`
entries (right after VerifyRit, their prior position), and the two render lines, then renumber
every subsequent index (Lock onward) up by 2 again, restoring VerifyRit → Contacts → Calendar →
Lock → ...

Rail display names include: "Snaarp Mail", "CRM", "Snaarp Books", "SnaarpMe", "OneCardX" (the
ID Card product — intentionally renamed), "Snaarp PDF", "Workforce", "SendRit", "Zeus",
"VerifyRit", "Snaarp Lock/Drive/Sheet/Doc/Teams/Slides/Meet". ("Snaarp Contacts" and "Calendar"
— intentionally NOT "Snaarp Calendar" — exist but are currently disabled, see above.)

**Meet is now the last product** (no `onEnd`) — previously Books was last; the priority
reorder moved Books to index 2 and pushed Meet to the end of the "remaining products" tail.
**Sheet (index 12) still has no `onEnd`** — this is a pre-existing quirk (not something either
reorder introduced): its mockup doesn't advance the carousel on completion. If a new product
is ever added after Meet, wire `onEnd={() => setActiveIndex(17)}` on the Meet render.

**IMPORTANT — reordering mechanics:** `PRODUCT_ICONS` (the rail list) and the
`{activeIndex === N && <XPreviewMockup onEnd={() => setActiveIndex(N+1)} />}` render block
MUST be kept in the exact same order — the render block has no other link to which rail icon
maps to which index besides array position. Reordering one without the other breaks the
rail-icon-click-to-mockup mapping silently (TypeScript won't catch it). Verify any reorder by
rendering the rail and reading the `title` attributes in order (matches `PRODUCT_ICONS`), plus
a screenshot to visually confirm.

Books's rail icon (`rail-books.svg`) didn't exist in `public/assets/icons/` yet — `ProductsMegaMenu.tsx`
only has a Lucide `BookOpen` icon for it, no shipped logo. Copied `Book Fav.svg` from the user's
`~/Downloads/Snaarp Product logo 2` folder instead, per the same fallback the user pointed to.

---

## 4. The Coachmark component (`components/Coachmark.tsx`)

```tsx
<Coachmark
  visible                     // boolean; controls mount + fade
  title="..."                 // bold heading
  subtitle="..."              // body text
  onNext={() => {...}}        // fired by the button
  top="0" left="0"            // usually 0/0; position via a wrapping absolute <div>
  arrowSide="left|right|top|bottom"   // which edge the little pointer sits on
  arrowOffset="24px"          // pointer position along that edge
  buttonLabel="Next"          // or "Done"
/>
```

### Positioning conventions (IMPORTANT — learned the hard way)
- Always wrap `<Coachmark>` in an **absolutely-positioned `<div>`** that sets the location;
  the Coachmark itself renders its card growing from that wrapper's origin.
- The mockup card is **clipped** (`overflow: hidden`) at ~1200px wide in the showcase.
  Coach marks that use `right: Npx` relative to a small button often **overflow the right
  edge and get cut off**. Prefer anchoring by `left:` when near the right side, OR place the
  card in open space (e.g. below/left of the target).
- The coach-mark card is ~210–250px wide. Keep `wrapperLeft + 210 < cardRightEdge`.
- Coach marks render at `zIndex: 9999`, above modal overlays (`zIndex: 200`), so they stay
  clickable over dialogs.
- Coach marks must live inside a `position: relative` ancestor (the mockup root or the
  scroll container) so absolute offsets resolve correctly.

### How to VERIFY placement (do this before saying "done")
The user cares that coach marks are fully visible. Verify with a headless screenshot:
1. Temporarily add a route `app/crmtest/page.tsx` (NOTE: folders starting with `_` are
   ignored by Next.js routing — do not name it `_crmtest`) that renders the mockup inside a
   `1200x720` bordered box.
2. Use Puppeteer (already a devDependency) to click through to the target state and
   screenshot. Click the coach-mark "Next" by matching the rose button
   (`backgroundColor` includes `225, 29, 72` = `#E11D48`) so you don't hit hidden buttons.
   Add ~500–600ms waits between clicks (Coachmark has an 80ms fade + view transitions).
3. Compute geometry: compare the coach-mark card rect against the bordered container rect;
   assert `coach.left >= container.left && coach.right <= container.right` (`inside: true`).
4. **Delete the temp route + screenshot script/images afterward.**

---

## 5. Mockup conventions (all `*PreviewMockup.tsx`)

- `'use client'`, styled with **inline `style={{}}` objects** (not Tailwind classes), fills
  `height/width: 100%`, root is `position: relative; overflow: hidden`.
- Signature: `export function XPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {}`.
- A `const [tour, setTour] = useState(1)` state machine drives the walkthrough; `0` = done.
- Each step gates a `<Coachmark>` on `tour === N` (plus the current view/tab), and the
  final step calls `setTour(0); onEnd?.();`.
- **Dual advance:** both the coach-mark `onNext` AND the real underlying control (button,
  tab, row) advance the tour, e.g.
  `onClick={() => { doThing(); if (tour === N) setTour(N+1); }}`.
- Views are conditional blocks gated on an `activeNav`/`showX` state, typically inside a
  `overflowY:auto; overflowX:hidden` scroll container.
- Brand accent is purple `#7C3AED`; status colors: green `#059669`/`#ECFDF5`,
  amber `#d97706`/`#FFFBEB`, red `#dc2626`/`#FEF2F2`, blue `#2563eb`/`#EFF6FF`.
- **Never nest a `<Coachmark>` directly inside a `<button>`** — `Coachmark` renders its own
  `<button>` for the Next/Done control, and `<button>` cannot contain `<button>` in valid HTML.
  This doesn't error at the type level; it surfaces at runtime as a React hydration error
  ("In HTML, `<button>` cannot be a descendant of `<button>`"), only once that specific
  coach-mark becomes visible (so it can sit undetected for a while). **Fix:** wrap the button
  and the coach-mark as siblings inside a `position: relative` wrapper `<div>` instead of
  putting `position: relative` on the button itself and nesting the coach-mark inside it —
  found and fixed in `MailPreviewMockup.tsx` (Send button), `PresentationPreviewMockup.tsx`
  (Share button), and `DocumentPreviewMockup.tsx` (Share button); the `Present`/`+ New`-style
  buttons elsewhere in these files already used the correct sibling-wrapper pattern, which is
  what caught the inconsistency. If a new coach-mark-on-a-button bug report comes in, grep for
  `<button` immediately followed by `<Coachmark` before the closing `</button>` across
  `components/*PreviewMockup.tsx` — that pattern is always wrong.

---

## 6. Status of each product mockup

- **Mail, Me, Contacts, Calendar, Lock, Drive, Sheet, Document, Teams, Presentation, Meet,
  ID Card, PDF** — pre-existing mockups. Header brand labels corrected to product names
  (e.g. "Snaarp Mail", "SnaarpMe", "Snaarp Contacts", "Snaarp Calendar", "Snaarp Lock",
  "Snaarp Drive", "Snaarp Teams"). Sheet/Document/Presentation/Meet show doc/meeting titles.
- **SendRit** (`SendritPreviewMockup.tsx`) — full email-marketing dashboard + multi-step tour
  (campaign wizard, templates, analytics). `onEnd` → advances carousel.
- **Zeus** (`ZeusPreviewMockup.tsx`) — lead/people search dashboard + tour (People quick-start
  → results → contact reveal → Companies → Lists → Create List). `onEnd` → advances.
- **VerifyRit** (`VerifyritPreviewMockup.tsx`) — email validation. Views: Dashboard, Email
  Validation (File Upload / Paste List / Single Email / Integration tabs), Credits
  (Buy Credit + Overview with populated transaction history), Validation Results, Analytics.
  Full tour across all of them. Real data (no zeros). `onEnd` → advances.
- **Workforce** (`WorkforcePreviewMockup.tsx`) — HR dashboard. Views: Dashboard, My Space
  (Overview + Resignation sub-nav), Attendance (interactive check-in timer → checkout →
  calendar record → day-detail modal → Timeline + Regularization tabs). Name "Marcus",
  email `marcus.reed@snaarp.com`. `onEnd` → advances (to SendRit, per the current rail order —
  see §3).
- **CRM** (`CrmPreviewMockup.tsx`) — the most recent and most complete tour. See section 7.
- **Books** (`BooksPreviewMockup.tsx`) — accounting-software dashboard. 16-step tour: Home →
  Products (empty/new/populated) → Customers (empty/new/populated) → Quotes
  (empty/new/populated) → Invoices (empty/new/populated) → Banking/Bank Accounts
  (empty/new/populated). See section 7a.

---

## 7. CRM mockup — detailed state machine (`components/CrmPreviewMockup.tsx`)

Rail index **1** (per the current priority-ranked order — see §3). Its render has
`onEnd={() => setActiveIndex(2)}` wired, handing off to Books.

### State
```
activeNav            // sidebar: 'Home' | 'Dashboards' | 'Sales' | 'Activities' | 'Contacts' | ...
tour (1..16, 0=done) // walkthrough step
showTeam             // Team Management view (under Home)
teamTab              // 'Members' | 'Pending invites' | 'Roles'
showInviteModal      // Invite Team Member modal
membersFilled        // after invite → table shows 7 members
showDashboards       // Dashboards view
showNewDashModal     // New Dashboard modal
dashCreated          // "Lead Contact" dashboard created (empty dashboard shown)
showWidgetModal      // Add Widget modal
widgetsAdded         // dashboard now shows the populated 9-widget grid (4 KPI, 2 Bar Chart, Pie Chart, Table, Heatmap)
showSalesProspects   // Sales > Prospects Kanban view
salesExpanded        // Sales sidebar item manually expanded (also true whenever Prospects or Forecasts is showing)
showSalesForecasting // Sales > Forecasts page (Weighted Pipeline / By Rep / Targets / Pipeline Risk tabs)
forecastTab          // which Forecasting tab is selected (visual only — only 'Weighted Pipeline' has real content)
activitiesExpanded   // Activities sidebar item manually expanded (also true whenever Tasks or Calls is showing)
showTasks            // Activities > Tasks page
showAddTaskForm      // inline "Add Task" form shown on the Tasks page
showCalls            // Activities > Calls page
contactsExpanded     // Contacts sidebar item manually expanded (also true whenever All Contacts is showing)
showContacts         // Contacts > All Contacts page
showAddContactModal  // Add Contact modal (final step)
```

All eight top-level pages (`showTeam`, `showDashboards`, `showSalesProspects`, `showSalesForecasting`,
`showTasks`, `showCalls`, `showContacts`, and the Setup/home page which is just "none of the above")
are mutually exclusive. Because Sales/Activities/Contacts are all independently expandable and
clickable in the sidebar regardless of tour progress (not just linear tour-driven), navigation
goes through a set of `gotoX()` helpers defined right after the `useState` calls (`gotoHome`,
`gotoTeam`, `gotoDashboards`, `gotoProspects`, `gotoForecasting`, `gotoTasks`, `gotoCalls`,
`gotoContacts`) that each reset every page flag before setting the target one true. **Always use
one of these helpers (or add a new one) when wiring a new navigation action — don't set the page
booleans directly** — otherwise it's easy to leave two pages' content rendering at once.

### Tour steps (each is a `<Coachmark>` + a real control that both advance it)
1. **Setup page**, coach left of **"Invite users"** button → opens Team Management (tour 2).
2. **Team Management**, coach below the top-right **"Invite User"** button (`left: 740px`) → opens Invite modal (tour 3).
3. **Invite Team Member modal** (Email + Role + Send Invitation/Cancel), coach beside it → **Send Invitation** fills the table with **7 members (5 Active, 1 Pending, 1 Revoked)** from the `MEMBERS` array (tour 4).
4. **Members table**, coach over the table → navigates to **Dashboards** (`gotoDashboards()`, tour 5).
5. **Dashboards / Dashboard Builder empty state**, coach right of **"New Dashboard"** (`left: 180px`) → opens New Dashboard modal (tour 6).
6. **New Dashboard modal** (name field + Cancel/Create), coach beside it → **Create** sets `dashCreated`, shows the **"Lead Contact"** empty dashboard (tour 7).
7. **Empty Dashboard** (header "Add Widget/Save/Cancel" + body "Add First Widget"), coach beside **"Add First Widget"** (`left: 190px`) → opens Add Widget modal (tour 8).
8. **Add Widget modal** — 11 widget types in a 2-col grid (`WIDGET_TYPES`), coach beside it. Clicking **any** widget card (real control) OR the coach-mark **Next** both call `setWidgetsAdded(true); setShowWidgetModal(false)` — the dashboard header updates to **"9 widgets"** and the empty dashed box is replaced by a populated grid (4 KPI Cards, Bar Chart, Pie Chart, Table, Bar Chart, Heatmap — all zero/"No data" placeholders) plus a trash icon (tour 9).
9. **Populated dashboard**, coach anchored below the header (`top: 95px, left: 260px`, `arrowSide="top"`) explaining the widgets pull live pipeline data → **Next** navigates to Sales ▸ Prospects (`gotoProspects()`, tour 10). Dual-advance alt path: expand **Sales** in the sidebar, click **Prospects**.
10. **Prospects (Sales Pipeline) Kanban** — 5 columns (`PIPELINE_STAGES`), each an empty dashed "+ Add prospect" placeholder. Coach at `top: 90px, left: 560px` → **Next** OR the real **+ Add Prospect** button both call `gotoForecasting()` (tour 11). Dual-advance alt path: click sidebar **Forecasts** (under Sales).
11. **Sales Forecasting** (`showSalesForecasting`) — tabs (`FORECAST_TABS`: Weighted Pipeline/By Rep/Targets/Pipeline Risk, only the first has real content), 3 stat cards (Total Pipeline/Weighted Forecast/Quota Attainment), "Pipeline by stage" bars, "Target vs actual" bars. Coach at `top: 215px, left: 640px` → **Next** navigates to Activities ▸ Tasks (`gotoTasks()`, tour 12). Dual-advance alt path: expand **Activities**, click **Tasks**.
12. **Tasks** (`showTasks`) — header "0 total tasks", List/Board toggle, **+Add Task** button, search + status/priority filters, empty state "No tasks yet." Coach positioned against the *page* (not nested inside the button, which clipped it off-screen — see note below) at `top: 120px, left: 750px`, arrow pointing up at the button. Clicking **+Add Task** (real control) OR coach-mark **Next** both call `setShowAddTaskForm(true)` (tour 13) — page-internal, no `gotoX()` needed.
13. **Inline Add Task form** (`showAddTaskForm`, rendered inside the Tasks page) — title/priority/due-date row, description, link-to-contact dropdown, Add Task/Cancel. Coach anchored below the form (`top: 100%, marginTop: 10px`) → its **Next** OR the real **Add Task** submit button both call `gotoCalls()` (tour 14). Dual-advance alt path: click sidebar **Calls** (under Activities).
14. **Calls** (`showCalls`) — Make a Call / SMS-WhatsApp / Connect Provider cards, "Recent Calls" empty state. Coach at `top: 175px, left: 600px` → **Next** navigates to **All Contacts** (`gotoContacts()`, tour 15). Dual-advance alt path: expand **Contacts**, click **All Contacts**.
15. **Contacts / All Contacts** (`showContacts`) — Import/Add Contact buttons, search + status filter, empty state with a centered **Add Contact** button. Coach beside that centered button (`left: 160px` relative to its own small wrapper) → clicking **either** Add Contact button (top-right or centered) OR coach-mark **Next** opens the Add Contact modal (tour 16).
16. **Add Contact modal** (`showAddContactModal`) — full contact form (name/email/phone/company/source/status/address/notes). **Final step** — coach-mark **Done**, positioned as a *sibling* of the modal panel (not nested inside it — the panel has `overflowY: auto` which clips anything positioned outside its own box, see note below), OR the real **Add Contact** submit button both call `setTour(0); onEnd?.()`.

**Two positioning gotchas hit while building steps 12 and 16** (added to the checklist in §4 above):
- A coach-mark wrapped in a small `position: relative` div around just one button, then offset with `right: 0`, is NOT reliably anchored to that button if the wrapper is a flex child near the far edge — it can render far outside the visible box. Prefer positioning against the page's own relative container with an explicit `top`/`left` pixel pair (measure the target's actual rect first if unsure), like every other coach-mark in this file.
- A coach-mark placed *inside* an element with `overflowY: 'auto'` (like a scrollable modal panel) gets clipped if its offset pushes it outside that element's own box, even though `getBoundingClientRect()` still reports "valid" coordinates — the geometry check alone won't catch this, only a screenshot will. Always place coach-marks for modal content as a sibling of the modal panel (inside the overlay `inset: 0` div), never nested inside a scrollable panel.

Sidebar: clicking **Dashboards** or **Home** now route through `gotoDashboards()` / `gotoHome()`,
which reset every page flag (this also fixed a pre-existing bug where clicking Home while in Team
Management didn't actually return to the Setup page). **Sales**, **Activities**, and **Contacts**
are each independently expandable in the sidebar (click the parent row to toggle its sub-menu)
regardless of tour progress — their sub-links (Prospects/Forecasts, Tasks/Calls, All Contacts) are
real dual-advance controls, not just tour scaffolding. Only one top-level view renders at a time
(Setup gated on none of the eight page flags being true).

---

## 7a. Books mockup (`components/BooksPreviewMockup.tsx`)

Rail index **2** (per the current priority-ranked order — see §3). Its render has
`onEnd={() => setActiveIndex(3)}` wired, handing off to SnaarpMe. Modeled after real "Snaarp
Books" accounting-software screenshots
the user provided directly (Home dashboard, Products, Customers, Quotes, Invoices, Bank
Accounts, and their "New X" forms) — this is the first mockup built from live product
screenshots rather than a Figma/description, so fidelity to those exact screens mattered more
than usual.

### State
```
activeNav        // 'Home' | 'Products' | 'Sales'
tour (1..13, 0=done)
showProducts     // Products / Active Items page
showNewItem      // New Item form (in-place, gated as showProducts && !showNewItem — NOT its own goto helper)
itemsAdded       // Active Items table shows the 5-row ITEMS sample data instead of the empty state
salesExpanded    // Sales sidebar item manually expanded (also true whenever any Sales sub-page is showing)
showCustomers    // Sales > Customers page
showNewCustomer  // New Customer form (in-place, gated as showCustomers && !showNewCustomer)
customersAdded   // Customers table shows the 7-row CUSTOMERS sample data instead of "No results found."
showQuotes       // Sales > Quotes page
showNewQuote     // New Quote form (in-place, gated as showQuotes && !showNewQuote)
quotesAdded      // Quotes page shows the 7-row QUOTES sample data instead of the "Seal the deal" empty state
showInvoices     // Sales > Invoices page
showNewInvoice   // New Invoice form (in-place, gated as showInvoices && !showNewInvoice)
invoicesAdded    // Invoices page shows the 7-row INVOICES sample data instead of the "It's time to get paid!" empty state
bankingExpanded  // Banking sidebar item manually expanded (also true whenever any Banking sub-page is showing)
showBanking      // Banking > Bank Accounts page
showNewBankAccount // Add Bank Account form (in-place, gated as showBanking && !showNewBankAccount)
bankAccountsAdded  // Bank Accounts page shows the 5-row BANK_ACCOUNTS sample data instead of the "Set Up Your Bank Accounts" empty state
```
`gotoX()` helpers (`gotoHome`, `gotoProducts`, `gotoCustomers`, `gotoQuotes`, `gotoInvoices`,
`gotoBanking`) reset every top-level page flag before setting the target — use these for
navigating **between** Home/Products/Customers/Quotes/Invoices/Banking. **The five "New X"
sub-pages (New Item, New Customer, New Quote, New Invoice, Add Bank Account) deliberately do
NOT have their own goto helper** — opening one is just `setShowNewX(true)` using the parent
page's own gate as `showParent && !showNewX` (see the gotcha below for why mixing the two
patterns breaks things). The dead `gotoNewCustomer()`/`gotoNewQuote()` helpers from an earlier
draft (see gotcha #2) have been removed entirely — they're not just unused, they're the exact
anti-pattern to avoid. Banking was added as its own expandable sidebar item (previously a
static, non-clickable label like Purchases/Accountant/Reports/Documents) using the same
`bankingOpen = bankingExpanded || showX || showNewX` derived-expansion pattern as Sales.

### Tour steps
1. **Home dashboard** — greeting ("Hello, Jordan Blake" — a placeholder name, not the real
   logged-in user's; see the note in §8 about never reusing real personal names), Dashboard/
   Getting Started/Recent Updates tabs, Total Receivables/Total Payables cards, a CSS-only
   Cash Flow chart, Projects / Bank and Credit Cards / Account Watchlist cards. Coach at
   `top: 60px, left: 380px` → **Next** navigates to Products (`gotoProducts()`, tour 2).
   Dual-advance alt path: click **Products** in the sidebar.
2. **Products / Active Items (empty)** — table with 6 columns, empty state, a page-level
   **+ New** button (solid blue `#2563eb` — distinct from the purple-gradient global "+New"
   in the top bar). Coach at `top: 35px, left: 650px`, `arrowSide: "right"`. Clicking the real
   **+ New** button OR coach-mark **Next** both open the New Item form (`setShowNewItem(true)`, tour 3).
3. **New Item form** — in-place (not a modal). Coach beside the image dropzone
   (`top: 138px, left: -160px`, relative to the dropzone's own wrapper). Clicking the real
   **Save** button OR coach-mark **Next** both call `setItemsAdded(true); setShowNewItem(false)` (tour 4).
4. **Active Items (populated)** — table shows 5 sample items (`ITEMS` array). Coach at
   `top: 150px, left: 400px` → **Next** navigates to Sales ▸ Customers (`gotoCustomers()`, tour 5).
5. **Customers (empty)** — search + "Active" filter + a page-level **+ New Customer** button
   (purple gradient, matches the global "+New" this time — Customers/Quotes forms use purple
   CTAs while Products/Items use blue, matching the reference screenshots exactly), empty state
   "No results found." Coach at `top: 35px, left: 640px`, `arrowSide: "right"`. Clicking the
   real **+ New Customer** button OR coach-mark **Next** both open the New Customer form
   (`setShowNewCustomer(true)`, tour 6).
6. **New Customer form** — in-place, matches the reference screenshot's fields (Customer
   Type, Primary Contact, Company/Display Name, Email, Phone, Customer Language, an "Other
   Details" tab row, Tax Rate/Company ID/Currency/Accounts Receivable/Opening Balance/Payment
   Terms/Enable Portal). Coach to the right of the form (`top: 0, left: 100%, marginLeft: 20px`
   relative to the form's own `maxWidth: 640px` wrapper). Clicking the real **Save** button OR
   coach-mark **Next** both call `setCustomersAdded(true); gotoCustomers()` (tour 7) — note
   this one **does** use the `gotoCustomers()` helper, since Save is a forward transition to a
   *different* top-level page, not just toggling the sub-form off.
7. **Customers (populated)** — table shows 7 sample customers (`CUSTOMERS` array; matches the
   "7 or so" the user asked for). Coach at `top: 150px, left: 400px` → **Next** navigates to
   Sales ▸ Quotes (`gotoQuotes()`, tour 8). Dual-advance alt path: click **Quotes** in the
   sidebar (under Sales).
8. **Quotes (empty)** — "Seal the deal." headline, a **Create New Quote** button, an "Import
   Quotes" link, and a life-cycle diagram (Quote → Sent to Customer → Accept/Reject → Invoice)
   matching the reference screenshot. Coach beside the Create New Quote button
   (`top: -10px, left: 100%, marginLeft: 20px`, relative to the button's own inline wrapper).
   Clicking the real button OR coach-mark **Next** both open the New Quote form
   (`setShowNewQuote(true)`, tour 9).
9. **New Quote form** — in-place, matches the reference screenshot (Customer Name*/Quote#*/
   Reference#/Quote Date*/Expiry Date/Salesperson/Subject, an Item Table with Quantity/Rate/
   Tax/Amount columns, Sub Total/Discount/Shipping Charges, Save/Cancel). Coach to the right of
   the form. Clicking the real **Save** button OR coach-mark **Next** both call
   `setQuotesAdded(true); gotoQuotes()` (tour 10).
10. **Quotes (populated)** — table shows 7 sample quotes (`QUOTES` array: Quote#, Customer
    Name, Date, Amount, Status), status pill colored per status via `QUOTE_STATUS_STYLE`
    (Accepted/Sent/Invoiced/Draft/Declined). Coach positioned *below* the table
    (`top: 430px, left: 400px`) rather than overlapping it — the Products/Customers "populated"
    coach at `top: 150px` works fine for narrower tables, but Quotes' 5-column table plus the
    longer coach-mark copy needed more room; this position was tuned by measuring the rendered
    card height so its bottom edge stays inside the 760px box floor. **Next** navigates to
    Sales ▸ Invoices (`gotoInvoices()`, tour 11). Dual-advance alt path: click **Invoices** in
    the sidebar (under Sales — now a functional link, previously a static placeholder).
11. **Invoices (empty)** — "It's time to get paid!" headline, **New Invoice** / **New Recurring
    Invoice** buttons, an "Import Invoices" link, and a life-cycle diagram (Draft → Sent →
    Unpaid → Overdue / Partially Paid → Paid) matching the reference screenshot. Coach beside
    the **New Invoice** button (`top: -10px, left: 100%, marginLeft: 20px`, relative to the
    button's own `position: relative` wrapper). Clicking the real button OR coach-mark **Next**
    both open the New Invoice form (`setShowNewInvoice(true)`, tour 12).
12. **New Invoice form** — in-place, matches the reference screenshot (Customer Name*/Invoice#*/
    Order Number/Invoice Date*+Terms+Due Date/Accounts Receivable/Salesperson/Subject, an Item
    Table, Sub Total/Discount/Shipping Charges/Adjustment/Total, Customer Notes/Attach Files,
    Save as Draft/Save and Send/Cancel). Coach to the right of the form. Clicking the real
    **Save and Send** button OR coach-mark **Next** both call
    `setInvoicesAdded(true); gotoInvoices()` (tour 13).
13. **Invoices (populated)** — table shows 7 sample invoices (`INVOICES` array: Invoice#,
    Customer Name, Invoice Date, Due Date, Amount, Status), status pill colored per status via
    `INVOICE_STATUS_STYLE` (Paid/Unpaid/Overdue/Partially Paid/Sent/Draft). Coach positioned
    below the table (`top: 460px, left: 400px`), same reasoning as step 10. **Next** navigates
    to Banking ▸ Bank Accounts (`gotoBanking()`, tour 14).
14. **Bank Accounts (empty)** — search + Status/Account Type filters, a page-level **+ Add
    Account** button (top right, blue) plus a centered **Set Up Your Bank Accounts** empty
    state with a primary **+ Add Bank Account** button. Coach beside the primary button
    (`top: -10px, left: 100%, marginLeft: 20px`, relative to the button's own inline wrapper).
    Clicking the real button OR coach-mark **Next** both open the Add Bank Account form
    (`setShowNewBankAccount(true)`, tour 15). Dual-advance alt path: click **Bank Accounts** in
    the sidebar (under Banking — now a functional link, previously a static placeholder).
15. **Add Bank Account form** — in-place, matches the reference screenshot (Account Details:
    Account Name*/Bank Name/Account Number/Routing-Sort Code/Account Type*/Currency; Financial
    Details: Opening Balance/Chart of Account (Asset)*/Description). Coach to the right of the
    form. Clicking the real **Save Account** button OR coach-mark **Next** both call
    `setBankAccountsAdded(true); gotoBanking()` (tour 16).
16. **Bank Accounts (populated)** — Total Balance/Active Accounts/Quick Actions summary cards
    above the table, which shows 5 sample accounts (`BANK_ACCOUNTS` array: Account Name, Type,
    Account #, Balance, Status), status pill via `BANK_STATUS_STYLE`. Per explicit user
    request, the sample accounts use **fictional foreign names** (Amara Whitfield, Marcus
    Lindqvist, Sofia Alvarez, Daniel Osei, Elena Petrova) rather than the real logged-in
    account name from the reference screenshot, and balances use **currency symbols** (`$`,
    `£`) rather than writing out a currency name like "Naira" as the reference screenshot did.
    Coach positioned below the table (`top: 430px, left: 400px`), same reasoning as steps 10/13.
    **Final step** — coach-mark button label is **"Done"** (per explicit user request — every
    other final coach-mark in this file uses "Next"), `onNext` calls `setTour(0); onEnd?.()`.
    (No real-button dual-advance here since this is the terminal step.)

**Positioning gotcha #1 (repeated from CRM's Tasks page, §7 note; hit again on step 2 here)**:
nesting a coach-mark in a small `position: relative` wrapper around one edge-adjacent button
and offsetting with `right: <px>` can render it far outside the visible box. Fixed by measuring
the button's actual rect and positioning against the page's own relative container instead.

**Positioning gotcha #2 (new, hit on steps 6 and 9 — New Customer/New Quote)**: the first
attempt wired opening these forms through a full `gotoNewCustomer()`/`gotoNewQuote()` helper
that reset `showCustomers`/`showQuotes` to `false`. That's wrong for this file's pattern —
Products/Customers/Quotes gate their "New X" sub-page as `showParent && !showNewX` (parent flag
stays `true` the whole time), so resetting the parent flag left **both** blocks' render
conditions simultaneously satisfiable for an instant, which doesn't crash but means the new
page's content (including its coach-mark) got appended as a normal sibling **below** the old
page's content in the DOM — and since the `Main` container clips overflow, it rendered fully
off-screen despite `getBoundingClientRect()` reporting "in bounds" numbers. A geometry check
alone didn't catch it; only a screenshot did. **Rule of thumb for this file:** a page that has
its own "New X" sub-form uses the combined gate (`showParent && !showNewX`) and plain
`setShowNewX(true)`/`setShowNewX(false)` — never a `gotoX()` helper — for opening/closing that
sub-form. Only use a `gotoX()` helper when moving *between* top-level pages.

---

## 8. Recurring user preferences (observed)

- Coach-mark cards must be **fully visible inside the mockup** — never clipped by the right
  edge, and never causing a horizontal scrollbar. Verify with a screenshot before concluding.
- The user frequently asks to nudge a card left/right — adjust the wrapper `left`/`right` px.
- Use **placeholder people/emails** (e.g. `marcus.reed@snaarp.com`, fictional member names) —
  and this cuts both ways: if the reference material for a mockup is a screenshot of someone's
  real logged-in account (as Books's was), swap their real name for a placeholder too. Never
  publish a real person's name into a public marketing demo just because it appeared in a
  reference screenshot.
- Change generic "Snaarp" brand labels to the specific product name where shown as a header.
- Keep the flow: coach-mark `Next` and the real button should BOTH advance the tour.
- **Coach-mark positioning gotcha, hit twice now (CRM Tasks page, Books Products page):**
  nesting a coach-mark inside a small `position: relative` wrapper around just one edge-adjacent
  button, then offsetting it with `right: <px>`, does NOT reliably anchor it to that button —
  it can render far outside the visible mockup entirely. Always position coach-marks against
  the page's own `position: relative` container with explicit `top`/`left` pixel values
  (measure the target element's actual rect with a quick Puppeteer script if unsure), the way
  every other coach-mark in these files already does it.

---

## 9. Dev / verification commands

```powershell
# Dev server (Windows / pwsh). Port 3000; the showcase is at /download/sendrit
npm run dev

# Type check (authoritative correctness check — always run after edits)
npx tsc --noEmit -p tsconfig.json      # expect Exit Code 0

# Smoke test the page compiles/serves
Invoke-WebRequest -Uri "http://localhost:3000/download/sendrit" -UseBasicParsing   # expect 200
```
Notes: this is a Next.js 16 (Turbopack) app on Windows/pwsh. The dev server can occasionally
wedge mid-recompile — if `localhost:3000` refuses connections, check the port
(`Get-NetTCPConnection -LocalPort 3000`) and restart the dev process.

---

## 10. Git workflow (observed pattern)

Each chunk of work is committed to a new `feature/*` branch off `main`, pushed, and the user
merges + deletes the branch on GitHub (`Jdbdesign/snaarpwebsite`). After a merge:
`git checkout main; git pull --ff-only; git branch -D <feature-branch>`.

**Uncommitted at time of writing:** the CRM mockup work (`components/CrmPreviewMockup.tsx`,
`public/assets/icons/rail-crm.svg`), the Books mockup work (`components/BooksPreviewMockup.tsx`,
`public/assets/icons/rail-books.svg`), and the rail priority reorder (§3) — all three touch
`components/ProductShowcaseCard.tsx` — plus this handoff doc are on `main` locally and NOT yet
committed. These probably want to land as one PR rather than several independent branches that
would each conflict with the others' edits to `ProductShowcaseCard.tsx`.

---

## 11. Suggested next steps / open ideas

- Widget selection now populates a fixed 9-widget demo grid regardless of which type is
  clicked (matches the guided-tour pattern used everywhere else in this mockup). If the user
  wants the *specific* widget type clicked to actually appear (vs. the canned 9), that's a
  bigger change — track selections in an array and render only those.
- The Prospects Kanban board, Forecasting tabs (only "Weighted Pipeline" has real content —
  By Rep/Targets/Pipeline Risk just switch the active tab visually), Tasks list, Calls page,
  and Contacts list are all display-only (no real drag/drop, task/call/contact records, or
  data persistence). Only build those out if asked — Phase 8-style scope creep to flag first
  per CLAUDE.md.
- Books's Products/Customers/Quotes/Invoices/Bank Accounts lists, the New Item/New Customer/New
  Quote/New Invoice/Add Bank Account forms, and the Quotes/Invoices life-cycle diagrams are all
  display-only (no real save/persistence, item table math, reconciliation, or life-cycle state
  transitions — e.g. Quotes/Invoices/Bank Accounts status pills are hardcoded per sample row,
  not derived from any workflow). Only build those
  out if asked — same Phase 8-style scope creep note as above.
- Product logos live in the user's `~/Downloads/Snaarp Product logo 2` folder; new rail icons
  are copied to `public/assets/icons/rail-*.svg`.
