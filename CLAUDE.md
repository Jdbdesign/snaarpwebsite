# CLAUDE.md — Snaarp Website

## Solution pages — standing template

`app/solutions/sales-pipeline-outreach/page.tsx` is the **canonical reference** for every solution page. When building or editing *any* solution page (`app/solutions/**`), apply the rules below by default — even if the prompt for that page doesn't mention them. Only page-specific copy/content should differ between solution pages; the structure, components, and styling conventions below should not.

1. **Section heading size is uniform.** Every top-of-section eyebrow+H2 (How It Works, Built from apps you already know, testimonials, etc.) uses the `.solution-section-heading` CSS class (`app/globals.css`). Never introduce a smaller bespoke heading-size class for an individual section — all section headings on a solution page must read at the same size.

2. **Two-line headings wrap via container width, not `<br/>`.** When a heading should break onto exactly two (not one, not three) lines, wrap it in a container with a tuned `maxWidth` (see `SolutionHowItWorks` at 640px and `SolutionAppChips` at 950px) so the browser's natural word-wrap lands on a sensible clause/comma boundary. Don't hardcode a manual line break — tune the width instead.

3. **App chip icons use real logos with a Lucide fallback — never abstract colored squares.** In `SolutionAppChips`, each app's icon must reuse exactly what `components/ProductsMegaMenu.tsx` assigns that app: the real shipped logo (`public/assets/icons/apps-*.jpg|png`) if one exists, otherwise the same Lucide icon `ProductsMegaMenu.tsx` uses for that app. Check `ProductsMegaMenu.tsx`'s `CATEGORIES` list first before picking an icon for a new app chip.

4. **Trust strip shows real brand logos, not text.** `SolutionTrustStrip` renders actual logo images from `public/assets/trusted-tools/` (same asset set as `components/TrustedToolsBar.tsx`) for any tool name that has a shipped logo, falling back to a text chip only for names without one.

5. **Testimonials use the CRM 3-card grid layout.** `SolutionTestimonial` renders three cards (quote-mark icon, quote, avatar-initials circle, name, role, `TODO · real quote` badge) ported from `components/crm/CrmTestimonials.tsx` — never a single centered quote. Write three placeholder quotes/names/roles tailored to that solution's theme (e.g. one per stage of its "how it works" flow), and keep the `TODO · real quote` disclosure until real customer quotes exist.

Shared solution-page components live in `components/solutions/*`. When a new solution page needs something these components don't yet support, extend the shared component rather than duplicating one-off markup in the page file.

## Download pages — standing template

`app/download/mail/page.tsx` is the **canonical reference** for every product's Download page (`app/download/**`). When building or editing *any* Download page, apply the rules below by default — even if the prompt for that page doesn't mention them. Only page-specific copy/content and mockup screens should differ between Download pages; the structure, components, and styling conventions below should not.

Page structure, top to bottom: `Header` → `DownloadHero` → `DownloadMobileAppsSection` → `DownloadDesktopSection` → `StepsSection` → `DownloadFinalCTA` → `Footer`.

1. **Hero is the two-column layered-mockup layout.** `DownloadHero` (`components/download/DownloadHero.tsx`) takes `headlineLines` (array of `{ text, accent? }`, each rendering on its own line), `subtext`, `primaryCta`/`secondaryCta`, and a `webMockup` + `phoneMockup` pair — the web mockup sits behind, the phone mockup (wrapped in `DownloadPhoneFrame size="lg"`) overlaps in front. Build product-specific mockup screens as their own components (see `components/download/mail/MailWebMockup.tsx` and `MailPhoneScreen.tsx`) rather than inlining markup in the page.

2. **Mobile apps section is the two-card iOS/Android grid.** `DownloadMobileAppsSection` renders one card per platform (`platform: 'ios' | 'android'`), each with a phone mockup (`DownloadPhoneFrame size="sm"`), a platform icon (`public/assets/icons/download/ios.svg` / `android.svg` — never a Lucide icon), and a `StoreBadge` (`store: 'apple' | 'google'`) linking out to the real store listing once available.

3. **Desktop section defaults to a 3-card grid: Windows, macOS, Web app.** `DownloadDesktopSection` cards use `platform: 'windows' | 'macos' | 'web'`, which maps to the real shipped icons in `public/assets/icons/download/` (`windows.svg`, `macos.svg`, `web.svg`) — never Lucide `Monitor`/`Apple` icons. The grid is 3-up by default (`download-desktop-grid`), with a `download-desktop-grid--two` modifier only for a product that truly has no web-login option, and `download-desktop-grid--single` for a web-only product. The Web app card's CTA should point to that product's real web app/login destination (e.g. `/products/mail`), not a placeholder `#`.

4. **Section spacing: subtext always gets breathing room below it before cards/content start.** Use the section's dedicated subtext class (`.download-mobile-subtext`, `.download-desktop-subtext`, both `margin-bottom: var(--space-12)` in `app/globals.css`) rather than an ad hoc Tailwind margin utility on the `<p>` — keeps vertical rhythm identical across sections and across pages.

5. **"Get started in three steps" reuses `StepsSection`**, not a bespoke component — pass a 3-item `steps` array of `{ title, desc }` specific to that product's onboarding flow.

6. **Closing CTA is the shared dark full-bleed `DownloadFinalCTA`** (`eyebrow`, `headline`, `subtext`, `primaryCta`, `secondaryCta`) — reuses `.home-final-cta-*` styling plus `.download-final-cta-btn-outline` for the secondary button, never a one-off dark section.

7. **Placeholder CTAs use `href="#"` until real destinations exist** (store listings, installers), matching the rest of the site's not-yet-built-link convention (see `Footer.tsx`) — flag which links are still placeholders in a comment above the section, don't silently ship dead links without a note.

Shared Download-page components live in `components/download/*` (cross-product) and `components/download/<product>/*` (product-specific mockups/screens, e.g. `components/download/mail/*`). When a new Download page needs something the shared components don't yet support, extend the shared component rather than duplicating one-off markup in the page file.
