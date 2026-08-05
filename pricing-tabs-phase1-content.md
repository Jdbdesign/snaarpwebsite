# Pricing Page — Per-Product Tabs (Phase 1: Tab Bar Only)

**Reference used:** Proton for Business pricing page (tab bar at the top: Workspace / Mail / Drive / Meet / VPN / Pass / Lumo AI, each swapping the plan cards and comparison table below it). Snaarp's existing pricing page (already built) becomes the "Workspace" tab's content; this phase adds the tab bar and wires "Workspace" as the default/active tab. Individual product tabs are scoped for a later phase — this phase is the tab bar and switching mechanism only, per your instruction.

---

## Why this needs a different tab structure than Proton's

Proton has 6-7 products, so a flat row of tabs fits. Snaarp has 27+ apps — a flat row won't fit or scale. Structure:

- **"Workspace" tab** — first, default/active, shows the existing bundled pricing (Starter/Growth/Business/Scale/Enterprise/Corporate/Ultra tiers + full comparison table) exactly as already built. This represents "the whole Stack."
- **Individual product tabs** — grouped by the same 5 categories used everywhere else on the site (Communicate, Create & Store, Grow Revenue, Secure & Sign, Run the Business), not a flat alphabetical list. Within the tab bar, this can render as either:
  - A horizontally scrollable strip of pill tabs, with a subtle category-group label or divider between groups, OR
  - A "Workspace" pill plus a single "Browse by App ▾" dropdown/mega-menu-style selector (reusing the same category-grouped structure as the Products mega menu) that opens to reveal all products, letting the person pick one which then becomes the active tab.
  - Recommend the dropdown approach given the app count — a 27-item scrollable pill row will feel cluttered and won't match the clean, minimal tab bar in the reference. Build the dropdown version unless there's a strong reason the scrollable-strip version fits the existing design system better — use your judgment, but note which you chose and why in your build report.

## Tab list (real Snaarp apps, grouped — use exactly this list, not a placeholder)

**Workspace** (default/active tab — the whole Stack)

**Communicate:** Mail, Contacts, Teams, Kalender, Business Card, Meet

**Create & Store:** Work Drive, Sheets, PDF Reader, Document, Presentation, Notepad

**Grow Revenue:** CRM, Zeus, Sendrit, VerifyRit, Warmer, Neo

**Secure & Sign:** eSignature, Doc Sign, Lock, Digital ID Card *(PDF Reader is cross-listed with Create & Store — see the taxonomy-conflict flag already raised elsewhere in this project; don't duplicate the tab, just note the cross-listing in a code comment if relevant)*

**Run the Business:** Books, Accounting Software, Project Management, ELearn

## Phase 1 scope — what to actually build right now

1. Build the tab bar / dropdown selector UI itself, with "Workspace" as the default active state showing the existing pricing content unchanged.
2. For every individual product tab, build the tab/selection mechanism to work correctly (clicking an app switches the active tab state), but the CONTENT area for each individual product tab can render a simple "Pricing for [App Name] — coming soon" placeholder state for now. Do not attempt to build real per-app pricing tiers yet — that's explicitly a later phase per your instruction.
3. Keep the Monthly/Yearly toggle and currency selector from the existing Workspace pricing UI, positioned consistently with the reference (top-right, near the tab bar) — but note that these controls may only be meaningfully wired for the Workspace tab in this phase, since individual product pricing doesn't exist yet. Flag in your build report whether these controls should hide/disable on placeholder tabs or stay visible but inert.

## Open items / assumptions flagged

- **Tab-bar pattern choice (scrollable pills vs. dropdown):** flagged above — recommend the dropdown given app count, but this is a real design decision, not just implementation detail. Worth confirming before Claude Code builds it, or letting Claude Code propose both and you pick.
- **Bundling logic ("some products inside another product if they work together"):** you mentioned wanting bundling relationships between products (e.g. maybe Books bundled into Accounting Software's tier, or Zeus/Sendrit/VerifyRit bundled as a "sales suite" tab) — this wasn't specified in enough detail to scope yet. This phase treats every app as its own standalone tab; bundling relationships are a separate decision for when per-app pricing actually gets built. Flag this explicitly so it's not forgotten.
- **Zeus, Sendrit, VerifyRit, Warmer, Neo, Directory** don't have dedicated product pages yet (same gap flagged on several Solution pages) — their pricing tabs will eventually need real content once/if those product pages exist.
