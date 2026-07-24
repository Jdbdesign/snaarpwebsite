# Solution Dropdown — Remaining Panels + Icon Spec

**Status:** "By Use Case" panel is already built and matches this spec. "By Industry" and "By Compliance" still need to be built as the second and third tabs, using the exact same layout: 2-column item grid, each item with a Lucide icon in a small rounded square, bold title, one-line description below it. Promo panel on the right stays as already built ("Built for Growing Teams" with the building image) unless noted otherwise below.

---

## Tab 1 — By Use Case (already built — icon fix only)

The current build uses a generic placeholder icon ("A2") for every item. Replace with these Lucide icons, one per item:

| Item | Lucide icon |
|---|---|
| Sales Pipeline & Outreach | `TrendingUp` |
| Customer Onboarding | `UserPlus` |
| Team Onboarding & Training | `GraduationCap` |
| Document & Contract Approval | `FileCheck` |
| Financial Operations | `Wallet` |
| Remote & Hybrid Collaboration | `Video` |

Copy stays exactly as already built — no text changes needed here.

---

## Tab 2 — By Industry (build this tab)

Same 2-column grid layout as By Use Case. 6 items:

| Item | Description | Lucide icon |
|---|---|---|
| Professional Services | Client work, invoicing, and communication in one place. | `Briefcase` |
| Financial Services | Built for teams that handle sensitive financial data daily. | `Landmark` |
| Healthcare | Secure records and communication for patient-facing teams. | `HeartPulse` |
| Nonprofits | Enterprise-grade tools at a price that fits a nonprofit budget. | `HandHeart` |
| Real Estate | Manage clients, contracts, and communication from one login. | `Building2` |
| Retail & Ecommerce | Run the business side while you focus on customers. | `ShoppingBag` |

---

## Tab 3 — By Compliance (build this tab)

Same 2-column grid layout. 4 items — note this tab has one fewer row than the other two (4 items vs. 6), so the grid should sit at 2 rows of 2 rather than stretching to fill 3 rows:

| Item | Description | Lucide icon |
|---|---|---|
| GDPR & Data Privacy | EU data residency and privacy controls built in, not bolted on. | `ShieldCheck` |
| SOC 2-Aligned Security | Access logs, encryption, and identity controls ready for audit. | `FileLock2` |
| Zero Trust Access Control | Every login, device, and file access verified, every time. | `Fingerprint` |
| Industry Regulations | Built with the controls regulated industries need to say yes. | `Scale` |

**Copy flag — do not soften, but do not ship unconfirmed:** these four items make real, checkable claims (SOC 2, GDPR, zero trust, regulatory readiness), not general marketing language. Add a code comment on this tab specifically noting that "SOC 2-Aligned," "GDPR," and "Industry Regulations" need product/legal confirmation of actual certification or alignment status before this goes live — if certification is in progress rather than complete, the copy should read "working toward" rather than implying it's already achieved.

---

## Tab switching behavior

Clicking "By Industry" or "By Compliance" in the sidebar should swap the 2-column item grid on the right to that tab's items, exactly like "By Use Case" already behaves — same active-state styling on the sidebar label (violet text + left indicator, matching how "By Use Case" is currently styled as active in the screenshot).

## Promo panel (right side)

Keep the existing "Built for Growing Teams" panel with the building image and "Explore Tools →" link static across all three tabs — do not swap its content per tab unless you want it to. If it's easy to make it tab-aware later (e.g. a different image/message for By Compliance), that's a nice-to-have, not required for this pass.
