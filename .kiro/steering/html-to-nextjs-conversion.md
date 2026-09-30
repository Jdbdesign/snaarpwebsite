# Standalone HTML → Next.js product page conversion

Read this BEFORE converting any standalone product bundle (e.g. a
`Snaarp *.html` self-unpacking file) into a Next.js product page. This is
the exact procedure that produced the SnaarpMe (`/products/kalender`) page
first-time-right. Follow it in order. The Books page
(`app/products/books/`) is the canonical reference — mirror its structure.

## Golden rules (the mistakes to never repeat)

- **Use Books as the structural reference, not Mail.** Mail needed many
  correction cycles; Books + this recipe did not.
- **Never take full-page screenshots** — the IDE errors on them. Use small
  clipped regions (height ≤ 720px) or a text/DOM measurement script.
- **Get large-screen / desktop / laptop responsiveness right first**, before
  anything else, using the hero recipe below.
- **Normalize the brand color to Snaarp purple `rgb(124,58,237)` / `#7C3AED`**
  unless the user says otherwise. Verify zero source-brand color remains.
- **Windows / pwsh**: use `;` not `&&`, `$env:` vars, never `cd`
  (use the `cwd` parameter).

## File structure to produce (mirror Books exactly)

For a product routed at `/products/<route>` create, in `app/products/<route>/`:

1. `<route>Html.ts` — the rendered bundle body, split into a few balanced
   HTML string consts (hero text column, hero mockup, everything-after-hero).
   Drop the bundle's own `<header>`/`<footer>` (shared ones are used).
2. `<route>.css` — auto-generated: `@font-face` blocks copied from the
   reference page's css + base styles + the responsive recipe below. Scope
   every rule under a page class, e.g. `.snaarp-<route>-page`.
3. `<route>-animations.css` — hand-authored hover polish + reveal accents,
   scoped under `.snaarp-<route>-page`, targeting stable `data-dc-tpl`
   numbers or `scp*` behaviour classes. Kept separate so regenerating the
   main css won't wipe it.
4. `<Route>PageClient.tsx` — `'use client'`, reconstructs the hero ROW SHELL
   in JSX (for alignment) and injects everything else as balanced HTML via
   `display:contents` wrappers; tags `[data-reveal]` in a `useLayoutEffect`;
   calls `useScrollReveal(rootRef)`; imports both css files.
5. `page.tsx` — `Header` + `<main id="main-content">` + `<Route>PageClient` +
   `Footer` + `metadata` (title + description).

Delete any old hand-built `components/<route>/*` implementation it replaces
(after confirming nothing else imports it — comments referencing it are fine).

## Procedure

1. **Locate the route.** Map the product to its href in
   `components/ProductsMegaMenu.tsx`. Do NOT invent a new folder.
2. **Render the bundle headless** (puppeteer) to resolve runtime bindings;
   save the rendered `<body>` to a temp file. Extract every `blob:` image to
   `public/assets/<route>/` with descriptive names; replace the blob URLs
   positionally in the HTML with `/assets/<route>/<name>.png`.
3. **Map the sections** by their `<section>` `data-dc-tpl` numbers, and note
   the mockup canvas tpls (they are `zoom`-scaled, static art).
4. **Normalize colors** in a build script: replace every source-brand color
   (rgb, rgba, hex, and lighter/darker variants) with the purple family.
   Verify 0 source-brand values remain and all blobs were replaced.
5. **Split into the HTML consts** with balanced tags; verify each const's
   tags balance.
6. **Build the css**: fonts + base + the hero recipe below + a heading size
   ramp for the hero `<h1>` + the mockup-canvas zoom ramp.
7. **Build the animations css** and the **PageClient** and **page.tsx**.
8. **Verify** (see checklist).
9. **Clean up ALL temp files** (`_*.mjs`, `_*.png`, `_*.html`, `_*.css`,
   temp image folders) before committing.
10. **Branch → commit specific files → push → open PR.** Push to a new
    `feature/<product>-product-page` branch, never to main. Let the user merge.

## The hero alignment recipe (the key to first-time-right)

Reconstruct only the hero ROW in JSX; inject the text column and mockup as
balanced HTML. The row and mock column must use:

- Row: `align-items: flex-start` (NOT center); `max-width:1280px`,
  `margin:0 auto`, wrapping flex, gap ~40–48px.
- Mock column: `flex: 1 1 560px`, `min-width:0`, `max-width: ~900px`,
  `margin-left: 0` (NOT `auto` — that leaves a wide-screen gap). If the
  injected mock root already carries inline `margin-left:auto`/`max-width`,
  override it in css by targeting its `data-dc-tpl` under the row.
- Container full-bleed at ≥1440 (`max-width:none`, larger side padding e.g.
  130px); tighter padding (20px) at ≤640.
- Mockup canvas: keep the bundle's `zoom`, then ramp it per breakpoint
  (e.g. `1` at ≥1440, ~0.86 desktop, ~0.82 at 1024–1439).
- Hero `<h1>` font-size ramp (e.g. 72px ≥1440, 56px desktop, 44px ≤640).

## Animations / reveal rules

- Base transition + hover lift/shadow on interactive types: hero CTAs,
  feature cards, use-case cards, integration tiles, final-CTA button,
  FAQ items, "view all" links — via their `data-dc-tpl`/`scp*` selectors.
- **Exclude every mockup canvas** from hover and reveal (guard with an
  `inMockup()` check on the canvas tpls). Never transform a `zoom`-scaled
  canvas or a `display:contents` wrapper.
- Reveal tagging in `useLayoutEffect` BEFORE `useScrollReveal` scans: group
  headings per section; batch card grids; add the `.<prefix>-pop` class for
  springy scale-in. Include a `prefers-reduced-motion` block.

## Verification checklist (must pass before commit)

- `npx tsc --noEmit -p tsconfig.json` → exit 0.
- Dev server (`npm run dev`, port 3000) compiles clean; `GET /products/<route>`
  → 200, no console/hydration errors. If a cold start 404s all product
  routes: stop, `Remove-Item -Recurse -Force .next`, restart.
- Rendered HTML contains the hero heading/tagline, all assets resolve, and
  **0 source-brand color** remains.
- Clipped hero screenshots at 1920 / 1280 (height ≤ 720, never fullPage):
  mock top-aligned and filling the right column, no wrap/gap on wide/desktop.
  Expected responsive stacking at ~1024 is fine.
