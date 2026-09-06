---
version: 2.1
name: Snaarp-design-system-complete
status: AUTHORITATIVE — apply directly to website, web app, iOS/Android apps,
  dashboard UI, and graphics/social assets. No separate confirmation needed.
description: >
  The complete cross-platform Snaarp design language. This file extends the
  base Snaarp-design-system with full responsive typography, favicon/logo/
  icon/app-icon sizing, and per-platform spacing systems — written so any AI
  tool (coding or design) can read ONE file and produce pixel-correct,
  on-brand output for a website, a web app/dashboard, or a native mobile app,
  with no guessing and no per-task reinvention.
read_this_first: >
  Section 0 tells you which sections apply to what you're building.
  Universal (never change by surface): colors.primary #7C3AED, Poppins
  typeface, 999px pill buttons, two-layer soft shadows, the Do's/Don'ts at
  the end. Everything else — type SIZE, spacing SCALE, icon SIZE, component
  chrome — is surface-specific. Read the surface table below before you
  build anything.
---

# Snaarp Design System — Complete Cross-Platform Reference

## 0 · How To Use This File

| Building... | Read these sections |
|---|---|
| Marketing website (Next.js) | 1, 2.1 + 2.4 (Website column), 3.2, 3.3, 4.1, 5, 6.1, 7 |
| Web app / product dashboard | 1, 2.1 + 2.4 (Web App column), 3.1, 3.4, 4.2, 5, 6.2, 7 |
| iOS / Android native app | 1, 2.1 + 2.4 (Mobile App column), 3.1, 3.5, 4.3, 5, 6.3, 7 (see mobile notes per component) |
| Favicons / browser chrome | 3.2 |
| App Store / Play Store listing | 3.5 |
| Social graphics / decks / exports | 3.3, 8 (Graphics & Social Adaptations, carried from base file) |

Rule of thumb: **tokens (color, type role names, radius names) are universal — pixel VALUES for type and spacing scale down by surface.** A `display-lg` headline is always weight 700, always Poppins, always the "biggest confident headline" role — but its exact px size is 40px on a website hero and a smaller clamp()'d value inside a dashboard panel. Never invent a new role name per surface; only the value changes, per the tables below.

---

## 1 · Foundation Tokens

```yaml
colors:
  primary: "#7C3AED"
  primary-hover: "#6D28D9"
  on-primary: "#ffffff"
  ink: "#111111"
  body: "#4B5563"
  mute: "#8A8F98"
  hairline: "#EAEAEA"
  hairline-strong: "#D4D4D8"
  canvas: "#ffffff"
  canvas-soft: "#F7F7F7"
  canvas-soft-2: "#F1F1F3"
  success: "#16A34A"
  success-soft: "#DCFCE7"
  error: "#DC2626"
  error-soft: "#FEE2E2"
  warning: "#D97706"
  warning-soft: "#FEF3C7"
  accent-mint: "#2DD4BF"
  accent-amber: "#F59E0B"
  accent-rose: "#F43F5E"
  accent-teal: "#14B8A6"
  # DO NOT USE anywhere, on any surface:
  deprecated-primary: "#6C2BDF"

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px      # standard card radius everywhere
  xl: 20px
  pill: 999px   # standard button radius everywhere
  full: 9999px

font-family:
  base: "Poppins, system-ui, -apple-system, sans-serif"
  weights-allowed: [400, 500, 600, 700]
  # iOS: bundle Poppins as a custom font — never substitute San Francisco.
  # Android: bundle Poppins — never fall back to Roboto.
```

---

## 2 · Typography System (Responsive, Cross-Platform)

### 2.1 Breakpoint Definitions (shared vocabulary — use these names everywhere)

| Token | Range | Typical device |
|---|---|---|
| `bp-mobile` | 0–599px | Phones, portrait |
| `bp-mobile-lg` | 600–767px | Large phones / small phablets |
| `bp-tablet` | 768–1023px | iPad, Android tablets |
| `bp-laptop` | 1024–1439px | Small/base laptops |
| `bp-desktop` | 1440–1919px | Standard desktop monitors |
| `bp-large` | 1920px+ | Large/wide monitors, TVs, 4K |

Native apps don't use CSS breakpoints, but use this same vocabulary for size classes: `bp-mobile`/`bp-mobile-lg` ≈ phone in portrait, `bp-tablet` ≈ iPad / Android tablet, `bp-laptop`+ doesn't apply to native mobile (that's web/web-app territory — a tablet web app can borrow `bp-tablet` values).

### 2.2 Type Role Definitions (universal roles — names never change)

| Role | Weight | Use |
|---|---|---|
| `display-xl` | 700 | Hero headline, single biggest statement on a page |
| `display-lg` | 700 | Section headline, page title |
| `display-md` | 600 | Sub-section headline, card group title |
| `display-sm` | 600 | Card title, modal title |
| `body-lg` | 400 | Lead paragraph, hero subtext |
| `body-md` | 400 | Default body copy, everywhere |
| `body-md-strong` | 600 | Emphasized inline body copy, table headers |
| `body-sm` | 400 | Secondary/meta text, form helper text |
| `caption` | 500 | Labels, timestamps, badges, column headers |
| `button-md` | 600 | Standard button / nav label |
| `button-lg` | 600 | Marketing-scale button label |

### 2.3 Fluid Scaling Formula

For web (website + web app), don't hard-switch sizes at breakpoints with a visible jump — use CSS `clamp(min, preferred, max)` so type scales continuously between `bp-mobile` and `bp-large`:

```css
/* Pattern: clamp(mobile-size, fluid-vw-formula, desktop-size) */
--display-xl: clamp(2rem, 1.1rem + 4.2vw, 3.5rem);   /* 32px → 56px */
--display-lg: clamp(1.75rem, 1.2rem + 2.5vw, 2.5rem); /* 28px → 40px */
--display-md: clamp(1.375rem, 1.1rem + 1.2vw, 1.75rem); /* 22px → 28px */
--body-lg:    clamp(1rem, 0.92rem + 0.3vw, 1.125rem);   /* 16px → 18px */
```
Body/caption/button sizes below `body-lg` stay fixed across breakpoints (16px body text should never shrink below 16px — that's an accessibility floor, see 2.6). Only display/headline roles scale fluidly.

### 2.4 Full Size Table Per Role, Per Surface, Per Breakpoint

**Website (marketing pages)** — largest, most confident scale; uses the full fluid range.

| Role | Mobile (<600) | Tablet (768–1023) | Laptop (1024–1439) | Desktop (1440–1919) | Large (1920+) |
|---|---|---|---|---|---|
| display-xl | 32px / 38px lh | 40px / 48px lh | 48px / 56px lh | 56px / 64px lh | 64px / 72px lh |
| display-lg | 28px / 34px lh | 32px / 40px lh | 36px / 44px lh | 40px / 48px lh | 44px / 52px lh |
| display-md | 22px / 28px lh | 24px / 32px lh | 26px / 34px lh | 28px / 36px lh | 30px / 38px lh |
| display-sm | 19px / 26px lh | 20px / 28px lh | 21px / 29px lh | 22px / 30px lh | 22px / 30px lh |
| body-lg | 16px / 25px lh | 17px / 26px lh | 18px / 28px lh | 18px / 28px lh | 19px / 29px lh |
| body-md | 15px / 22px lh | 16px / 24px lh | 16px / 24px lh | 16px / 24px lh | 16px / 24px lh |
| body-sm | 13px / 19px lh | 14px / 20px lh | 14px / 20px lh | 14px / 20px lh | 14px / 20px lh |
| caption | 11px / 15px lh | 12px / 16px lh | 12px / 16px lh | 12px / 16px lh | 12px / 16px lh |
| button-lg | 15px | 16px | 16px | 16px | 16px |

**Web App / Dashboard (product UI)** — one notch smaller and denser than marketing; optimized for information density and repeated scanning, not persuasion.

| Role | Mobile (<600, responsive web app) | Tablet | Laptop | Desktop | Large |
|---|---|---|---|---|---|
| display-lg (page title) | 22px / 28px lh | 24px / 30px lh | 26px / 32px lh | 28px / 34px lh | 28px / 34px lh |
| display-md (panel title) | 18px / 24px lh | 19px / 25px lh | 20px / 26px lh | 20px / 26px lh | 20px / 26px lh |
| display-sm (card/modal title) | 16px / 22px lh | 17px / 23px lh | 18px / 24px lh | 18px / 24px lh | 18px / 24px lh |
| body-md (default UI text) | 14px / 20px lh | 14px / 20px lh | 14px / 20px lh | 14px / 20px lh | 14px / 20px lh |
| body-sm (table cells, dense lists) | 13px / 18px lh | 13px / 18px lh | 13px / 18px lh | 13px / 18px lh | 13px / 18px lh |
| caption (labels, badges) | 11px / 14px lh | 11px / 14px lh | 12px / 15px lh | 12px / 15px lh | 12px / 15px lh |
| button-md | 14px | 14px | 14px | 14px | 14px |

Dashboard `display-xl` is intentionally **not used** — a product UI should never shout as loud as a marketing hero. If a dashboard needs a big number (e.g. a KPI stat), use a dedicated `stat-figure` role: 32px/40px lh, weight 700, tabular-nums, not `display-xl`.

**Mobile App (native iOS/Android)** — sizes in pt (iOS) / sp (Android), which are ≈1:1 with CSS px at standard scale. Respect the OS's own Dynamic Type (iOS) / font-scale (Android) accessibility setting — these are baseline sizes at 100% system scale, not hard caps.

| Role | Phone portrait | Phone landscape / small tablet | Tablet (iPad/Android) |
|---|---|---|---|
| display-lg (screen title) | 24pt/sp | 22pt/sp | 28pt/sp |
| display-md (section header) | 19pt/sp | 18pt/sp | 21pt/sp |
| display-sm (card/sheet title) | 17pt/sp | 16pt/sp | 18pt/sp |
| body-md (default) | 15pt/sp | 15pt/sp | 16pt/sp |
| body-sm (secondary/meta) | 13pt/sp | 13pt/sp | 14pt/sp |
| caption | 11pt/sp | 11pt/sp | 12pt/sp |
| button | 16pt/sp (min, for 44pt tap target legibility) | 16pt/sp | 16pt/sp |

### 2.5 Line Length & Measure

- Website body copy: max 65–75 characters per line (`max-width: 640–680px` on a `body-lg` paragraph column).
- Web app body copy: max 90–100 characters (denser UI, shorter reading sessions) — table/list cells are exempt, they truncate with ellipsis instead of wrapping.
- Mobile app: full device width minus screen margin (see 4.3) — don't artificially cap line length on a screen that's already narrow.

### 2.6 Accessibility Floors (non-negotiable, all surfaces)

- Body text never renders below **16px / 16pt** on website and mobile app; dashboard body-md may go to 14px because it's paired with generous line-height and short scan sessions, but never below **12px** for any readable sentence-level text anywhere (12px is caption/label-only, never a full sentence).
- Contrast: `ink` (#111111) on `canvas` (#ffffff) = 18.1:1 (AAA). `body` (#4B5563) on `canvas` = 8.4:1 (AAA). `mute` (#8A8F98) on `canvas` = 3.9:1 — **AA-large only**, never use `mute` for body-sm or caption text carrying real information; reserve it for decorative/secondary metadata next to a stronger-contrast primary label.
- Never disable native OS text-scaling (Dynamic Type / Android font scale) on mobile. Layouts must reflow, not clip, at 200% scale.

---

## 3 · Iconography & Asset Sizing

### 3.1 Product/UI Icon Sizes (base — carried from the core system)

Library: **Lucide**, 1.75px stroke weight everywhere, never mixed with filled icons in the same context.

| Size | Context |
|---|---|
| 16px | Inline icons in body text, dense list rows, FAQ chevrons |
| 20px | Inside buttons, nav items, form fields (default) |
| 24px | Feature-grid icons, section headers, app-chips |
| 32–40px | Empty states, hero focal icon, mega-menu category icons |

Container pattern: 36×36px rounded-square chip (`rounded.sm`), `#F3E8FF` background, violet icon — reuse everywhere a standalone icon appears.

### 3.2 Favicon & Browser Icon Sizing

Build the full set below once and reuse across every Snaarp property — never freehand a single favicon per micro-site.

| File | Size(s) | Format | Purpose |
|---|---|---|---|
| `favicon.ico` | 16×16, 32×32, 48×48 (multi-res in one .ico) | ICO | Legacy browser tab icon |
| `favicon-16x16.png` | 16×16 | PNG | Modern browser tab (small) |
| `favicon-32x32.png` | 32×32 | PNG | Modern browser tab (retina) |
| `favicon-96x96.png` | 96×96 | PNG | Desktop shortcuts |
| `apple-touch-icon.png` | 180×180 | PNG, no transparency (fill `canvas` or `primary`) | iOS home-screen icon when site is added |
| `apple-touch-icon-precomposed.png` | 180×180 | PNG | Older iOS fallback |
| `android-chrome-192x192.png` | 192×192 | PNG | Android home-screen / PWA icon |
| `android-chrome-512x512.png` | 512×512 | PNG | PWA splash / Play Store PWA listing |
| `maskable-icon-512x512.png` | 512×512, logo inside a safe-zone circle of 80% canvas | PNG | Android adaptive/maskable PWA icon |
| `safari-pinned-tab.svg` | vector, single color | SVG | Safari pinned-tab monochrome mark (use `primary` as the mask color) |
| `mstile-150x150.png` | 150×150 | PNG | Windows tile |
| `og-image.png` | 1200×630 | PNG/JPG | Social link-preview (not a favicon, but bundled with site meta — carried from base file's Graphics section) |

Favicon artwork rule: at 16×16, the full wordmark is illegible — use the **symbol/monogram only** (a simplified "S" mark or icon-only lockup). Since the base file flags that Snaarp currently has **no dedicated symbol mark, only a wordmark** — this is an open item: a monogram/symbol must be designed before a correct favicon can exist. Until then, a placeholder solid-violet rounded-square with a white "S" in Poppins 700 is the interim favicon, clearly marked as temporary in the asset filename (`favicon-TEMP-monogram.png`).

### 3.3 Product Logo Sizing & Clear Space

| Context | Minimum size | Clear space |
|---|---|---|
| Website nav bar | 28px height (wordmark) | 1× the cap-height of the wordmark on all sides |
| Web app header/sidebar | 24px height | 0.75× cap-height |
| Email signature | 32px height | 1× cap-height |
| Social avatar (square crop) | 512×512px source, symbol-only if a symbol mark exists, else centered wordmark on `primary` fill | N/A (fills canvas) |
| Print / deck cover | 48pt height minimum | 1.5× cap-height |
| Absolute minimum (any surface) | 16px height wordmark is the legibility floor — below that, use the favicon monogram instead, never shrink the wordmark further | — |

Never stretch, skew, recolor outside of `ink`/`on-primary`/single-color-white, or add a drop shadow to the logo itself.

### 3.4 Dashboard / Web App Icon Sizes (extends 3.1 for product-UI-specific contexts)

| Size | Context |
|---|---|
| 18px | Sidebar navigation item icon (paired with 14px `body-md` label) |
| 20px | Top bar action icons (search, notifications, settings) |
| 16px | Data-table row action icons (edit, delete, more-menu) — dense context, smaller than the 16px inline-text default even |
| 24px | Empty-state illustration accents, onboarding checklist icons |
| 40px | Empty-state hero icon (centered, no data yet) |
| 8px dot | Notification/status badge (unread indicator) — solid `error` or `primary` fill, no stroke |
| 44×44px tap zone | Any icon-only button, regardless of the glyph's visual size inside it (matches 3.1's touch-target rule) |

Sidebar icon color states: `body` default, `primary` on the active/selected nav item (paired with a light-violet `#F3E8FF` background pill behind the whole nav row, not just the icon), `mute` on a disabled/locked nav item.

### 3.5 Native Mobile App Icon Sizes

**iOS (App Icon set — all required sizes, @1x/@2x/@3x as noted):**

| Purpose | Size (px) |
|---|---|
| App Store listing | 1024×1024 |
| iPhone app icon (@3x) | 180×180 |
| iPhone app icon (@2x) | 120×120 |
| iPad Pro app icon (@2x) | 167×167 |
| iPad app icon (@2x) | 152×152 |
| iPad app icon (@1x) | 76×76 |
| Spotlight search (@3x/@2x) | 120×120 / 80×80 |
| Settings icon (@3x/@2x) | 87×87 / 58×58 |
| Notification icon (@3x/@2x) | 60×60 / 40×40 |

No transparency, no rounded corners baked into the source file — iOS applies its own corner mask automatically. Full-bleed `primary` background with the symbol mark centered (again: pending symbol-mark design per 3.2).

**Android (adaptive icon — two-layer system):**

| Purpose | Size (px) |
|---|---|
| Play Store listing | 512×512 |
| Foreground layer (safe zone: centered 66% of canvas) | 432×432 (108dp × 4x density) |
| Background layer (solid `primary` or a subtle brand pattern) | 432×432 |
| Legacy/fallback single-layer icon (pre-Android-8) | 192×192 (mipmap-xxxhdpi) down to 48×48 (mipmap-mdpi), full density set |
| Notification icon (must be a single-color white silhouette per Android system requirements) | 96×96 (xxhdpi) down to 24×24 (mdpi) |

Adaptive icon rule: keep all meaningful content inside the inner 66% "safe zone" of the foreground layer — Android crops the outer edge into circles, squircles, or other mask shapes depending on the device launcher, and content outside the safe zone gets clipped unpredictably.

---

## 4 · Spacing System — Per Platform

Base spacing scale (shared vocabulary, universal token names):

```yaml
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  section: 120px   # website marketing sections only
```

### 4.1 Website (marketing) — full range, generous whitespace

- Section vertical rhythm: `spacing.section` (120px) between major page sections on desktop, collapsing to `spacing.4xl` (64px) on tablet and `spacing.2xl` (40px) on mobile.
- Container max-width: 1280px. Side padding: 60px desktop (≥1440px), 32px tablet, 20px mobile.
- Card internal padding: `spacing.lg` (24px) standard, `spacing.3xl` (48px) for the final-CTA hero card.
- Component gaps within a section (e.g. between grid cards): `spacing.lg`–`spacing.xl` (24–32px).

### 4.2 Web App / Dashboard — denser, information-first

Never reuse the website's `section`/`5xl`/`4xl` values inside product UI — a dashboard is a working tool, not a persuasion surface.

| Token | Value | Use |
|---|---|---|
| `app-gutter` | 16px (mobile) / 24px (tablet+) | Screen-edge padding for main content area |
| `app-sidebar-width` | 240px expanded / 64px collapsed | Fixed left nav |
| `app-topbar-height` | 56px | Fixed top bar |
| `app-card-padding` | 16px (dense cards, tables) / 20px (standalone panels) | Internal card padding |
| `app-row-height` | 40px (compact table) / 48px (comfortable table) | Data table row height |
| `app-section-gap` | 24px | Between stacked panels/cards on a dashboard page |
| `app-form-field-gap` | 16px | Vertical space between stacked form fields |
| `app-inline-gap` | 8px | Space between an icon and its label, between adjacent small controls |

### 4.3 Mobile App (native) — thumb-driven, safe-area aware

| Token | Value | Use |
|---|---|---|
| `mobile-screen-margin` | 16px | Left/right edge padding on every screen |
| `mobile-section-gap` | 24px | Between stacked content blocks on a screen |
| `mobile-list-item-padding` | 12px vertical / 16px horizontal | Standard list/table row |
| `mobile-card-padding` | 16px | Internal card padding |
| `mobile-tab-bar-height` | 49pt (iOS) / 56dp (Android) + safe-area inset | Bottom tab navigation |
| `mobile-nav-bar-height` | 44pt (iOS) / 56dp (Android) + safe-area/status-bar inset | Top nav bar |
| `mobile-thumb-zone-bottom` | Bottom 40% of screen height | Place primary actions here, not top corners, for one-handed reach |

Always respect safe-area insets (notch, home indicator, punch-hole camera) — never hardcode a top/bottom padding that ignores `safeAreaInsets` on iOS or `WindowInsets` on Android.

---

## 5 · Elevation (shared system, extended for dashboard-specific layers)

Base four levels (Definition / Lift / Combined / Elevated-brand) — see core system for exact shadow values; the rule (soft, layered, never one hard drop-shadow) is universal.

**Dashboard-specific z-index/elevation stack** (top to bottom, highest wins):

| Layer | z-index | Shadow |
|---|---|---|
| Toast/alert (top-most, transient) | 500 | Elevated-brand |
| Modal / dialog | 400 | Combined |
| Dropdown / popover / mega-menu | 300 | Combined |
| Sticky top bar / sidebar | 200 | Level 1 (Definition) only — subtle, structural, not "floating" |
| Card / panel (default page content) | 100 | Combined |
| Base page background | 0 | none |

Never let two active layers share the same shadow treatment in a way that makes it ambiguous which is "on top" — a dropdown opened from a sticky top bar must visibly out-shadow the bar beneath it.

---

## 6 · Grid & Layout System

### 6.1 Website
12-column grid, 1280px container, 24px gutters. Breakpoint collapse: 12 col (desktop) → 8 col (tablet) → 4 col (mobile), gutters reduce to 16px below `bp-tablet`.

### 6.2 Web App / Dashboard
Fixed sidebar (240px) + fluid content area is the base layout ≥`bp-laptop`. Sidebar auto-collapses to icon-only (64px) at `bp-tablet`, and becomes an off-canvas drawer (triggered by a hamburger in the top bar) below `bp-tablet`. Content area itself uses a simple 12-col fluid grid for card/panel layout, no fixed max-width (dashboards should use available width, unlike marketing pages).

### 6.3 Mobile App
Single-column by default. Only introduce a 2-column grid (e.g. a grid of cards) at `bp-tablet`-equivalent widths (iPad, large Android tablets) — phones stay single-column end to end.

---

## 7 · Components

Component specs (buttons, cards, inputs, nav, signature patterns) are unchanged from the core system and apply as-is on website/web app, with mobile sizing per Section 4.3's touch targets. Do not duplicate a second component spec per surface — one component list, sized per the tables above.

---

## 8 · Machine-Readable Token Block

For AI tools that parse tokens programmatically rather than reading prose, the consolidated object below mirrors every table above. Treat this JSON as the source of truth if any prose table and this block ever disagree (prose is written for humans and is more error-prone to keep in sync).

```json
{
  "color": {
    "primary": "#7C3AED",
    "primaryHover": "#6D28D9",
    "onPrimary": "#ffffff",
    "ink": "#111111",
    "body": "#4B5563",
    "mute": "#8A8F98",
    "canvas": "#ffffff",
    "canvasSoft": "#F7F7F7",
    "deprecatedDoNotUse": "#6C2BDF"
  },
  "radius": { "xs": 4, "sm": 8, "md": 12, "lg": 16, "xl": 20, "pill": 999 },
  "typography": {
    "fontFamily": "Poppins, system-ui, -apple-system, sans-serif",
    "website": {
      "display-xl": { "mobile": 32, "tablet": 40, "laptop": 48, "desktop": 56, "large": 64 },
      "display-lg": { "mobile": 28, "tablet": 32, "laptop": 36, "desktop": 40, "large": 44 },
      "body-md": { "mobile": 15, "tablet": 16, "laptop": 16, "desktop": 16, "large": 16 }
    },
    "webApp": {
      "display-lg": { "mobile": 22, "tablet": 24, "laptop": 26, "desktop": 28, "large": 28 },
      "body-md": { "mobile": 14, "tablet": 14, "laptop": 14, "desktop": 14, "large": 14 },
      "body-sm": { "mobile": 13, "tablet": 13, "laptop": 13, "desktop": 13, "large": 13 }
    },
    "mobileApp": {
      "display-lg": { "phonePortrait": 24, "phoneLandscape": 22, "tablet": 28 },
      "body-md": { "phonePortrait": 15, "phoneLandscape": 15, "tablet": 16 }
    }
  },
  "spacing": {
    "base": { "xxs": 4, "xs": 8, "sm": 12, "md": 16, "lg": 24, "xl": 32, "2xl": 40, "3xl": 48, "4xl": 64, "5xl": 96, "section": 120 },
    "webApp": { "gutterMobile": 16, "gutterDesktop": 24, "sidebarWidth": 240, "sidebarCollapsed": 64, "topbarHeight": 56 },
    "mobileApp": { "screenMargin": 16, "sectionGap": 24, "tabBarHeightIOS": 49, "tabBarHeightAndroid": 56 }
  },
  "icons": {
    "strokeWeight": 1.75,
    "sizes": { "inline": 16, "default": 20, "feature": 24, "hero": [32, 40] },
    "dashboard": { "sidebar": 18, "topbar": 20, "tableRow": 16, "emptyState": 40, "tapZone": 44 }
  },
  "favicon": {
    "ico": [16, 32, 48],
    "appleTouchIcon": 180,
    "androidChrome": [192, 512],
    "maskable": 512,
    "ogImage": [1200, 630]
  },
  "appIcon": {
    "ios": { "appStore": 1024, "iphone3x": 180, "iphone2x": 120, "ipadPro2x": 167, "ipad2x": 152, "ipad1x": 76 },
    "android": { "playStore": 512, "adaptiveForeground": 432, "adaptiveBackground": 432, "legacyMax": 192, "legacyMin": 48 }
  },
  "breakpoints": { "mobile": 0, "mobileLg": 600, "tablet": 768, "laptop": 1024, "desktop": 1440, "large": 1920 }
}
```

---

## 9 · Do's and Don'ts (extends the core system's list)

### Do
- Treat this file's tables as the size source for every AI tool building any Snaarp surface — don't eyeball or approximate a "close enough" px value.
- Use `clamp()` for website/web-app fluid type; use fixed pt/sp per size-class for native mobile.
- Keep 16px as the absolute floor for any full-sentence body text on website and mobile app.
- Design the pending symbol/monogram mark before shipping a final favicon or app icon — the current interim monogram is explicitly temporary.
- Keep dashboard type and spacing one full notch smaller/denser than website marketing type and spacing — they are deliberately different registers, same as the existing product-page vs. Solution-page rule.

### Don't
- Don't apply website `section`/`5xl`/`4xl` spacing values inside dashboard/product UI.
- Don't use `display-xl` anywhere inside the web app — use `stat-figure` for big dashboard numbers instead.
- Don't ship an app icon or favicon with content outside the safe zones defined in 3.2/3.5 — platform masks will clip it unpredictably.
- Don't let mobile body text render below 16pt, and never disable native text-scaling accessibility settings.
- Don't mix this file's sizing tables with ad-hoc sizes from an old reference screenshot — if a reference conflicts with this file, this file wins.
