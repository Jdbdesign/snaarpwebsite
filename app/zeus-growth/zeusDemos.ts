// Continuous, height-safe looping demos for the ZEUS Growth Bundle page.
//
// Two controllers, both of which only change text or non-layout style on
// fixed-size containers — so neither section nor document height ever changes
// and the page never jumps:
//
//   1) startLeadRowSweep — sweeps a highlight down the 8 rows of the lead-list
//      preview table (tpl 444), as if browsing live B2B leads. Only
//      background-color changes on fixed-height rows.
//
//   2) startPossibilitiesCountUp — the funnel numbers in the "Imagine the
//      Possibilities" section (tpl 253) count up when scrolled into view
//      (tabular numbers in fixed columns, so no reflow), re-arming on re-entry.
//
// Both honor prefers-reduced-motion and clean up on unmount.

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- 1) Lead-list row sweep (tpl 444) ----------------------------------
function startLeadRowSweep(root: HTMLElement): () => void {
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="444"]'));
  if (rows.length < 2) return () => {};

  const ACTIVE = 'rgba(124, 58, 237, 0.12)';
  const baseBg = rows.map((r) => r.style.backgroundColor || '');
  rows.forEach((r) => { r.style.transition = 'background-color .3s ease'; });

  const activate = (idx: number) => {
    rows.forEach((r, i) => { r.style.backgroundColor = i === idx ? ACTIVE : baseBg[i]; });
  };

  let current = 0;
  activate(0);
  if (reduceMotion()) {
    return () => rows.forEach((r, i) => { r.style.transition = ''; r.style.backgroundColor = baseBg[i]; });
  }

  let timer = 0, paused = false;
  const tick = () => { if (paused) return; current = (current + 1) % rows.length; activate(current); };
  const start = () => { if (!timer) timer = window.setInterval(tick, 1100); };
  const stop = () => { if (timer) { window.clearInterval(timer); timer = 0; } };

  const container = rows[0].parentElement || root;
  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; };
  container.addEventListener('pointerenter', onEnter);
  container.addEventListener('pointerleave', onLeave);

  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { threshold: 0.1 });
    io.observe(container);
  } else start();

  return () => {
    stop(); io?.disconnect();
    container.removeEventListener('pointerenter', onEnter);
    container.removeEventListener('pointerleave', onLeave);
    rows.forEach((r, i) => { r.style.transition = ''; r.style.backgroundColor = baseBg[i]; });
  };
}

// ---- 2) Possibilities funnel count-up ----------------------------------
function startPossibilitiesCountUp(root: HTMLElement): () => void {
  // Find the Possibilities section and its numeric spans. We animate any span
  // whose text is a plain formatted number (optionally with %, +, or currency),
  // from 0 to its parsed target. Non-numeric labels are left untouched.
  const section = Array.from(root.querySelectorAll<HTMLElement>('section'))
    .find((s) => s.getAttribute('data-screen-label') === 'Possibilities');
  if (!section) return () => {};

  type Target = { el: HTMLElement; value: number; prefix: string; suffix: string; group: boolean };
  const targets: Target[] = [];
  section.querySelectorAll<HTMLElement>('*').forEach((el) => {
    if (el.children.length) return;
    const raw = (el.textContent || '').trim();
    const m = raw.match(/^([£$€]?)([\d,]+(?:\.\d+)?)(%|\+)?$/);
    if (!m) return;
    const value = parseFloat(m[2].replace(/,/g, ''));
    if (!isFinite(value) || value < 2) return; // skip tiny values like "1", "5"
    targets.push({ el, value, prefix: m[1], suffix: m[3] || '', group: /,/.test(m[2]) });
  });
  if (!targets.length) return () => {};

  const fmt = (t: Target, v: number) =>
    t.prefix + (t.group ? Math.round(v).toLocaleString('en-GB') : Math.round(v).toString()) + t.suffix;
  const setFinal = () => targets.forEach((t) => (t.el.textContent = fmt(t, t.value)));
  if (reduceMotion()) { setFinal(); return () => {}; }

  const originals = targets.map((t) => t.el.textContent);
  const reset = () => targets.forEach((t) => (t.el.textContent = fmt(t, 0)));

  let raf = 0, running = false;
  const run = () => {
    if (running) return; running = true;
    const DUR = 1400, start = performance.now();
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);
    const step = (now: number) => {
      const k = ease(Math.min(1, (now - start) / DUR));
      targets.forEach((t) => (t.el.textContent = fmt(t, t.value * k)));
      if (k < 1) raf = requestAnimationFrame(step); else running = false;
    };
    raf = requestAnimationFrame(step);
  };

  reset();
  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) run(); else if (!running) reset(); }), { threshold: 0.3 });
    io.observe(section);
  } else setFinal();

  return () => {
    cancelAnimationFrame(raf); io?.disconnect();
    targets.forEach((t, i) => { t.el.textContent = originals[i]; });
  };
}

// ---- 3) Laptop dashboard fit ------------------------------------------
// The dashboard canvas (tpl 389) is a fixed 960x600 artboard inside the fluid
// laptop screen (tpl 388). Scale it to exactly fill the screen's current width
// (screenWidth / 960) on load and whenever the layout resizes, so it fills at
// every viewport and the UI scales proportionally (not oversized on desktop).
// Height-safe: the screen has a fixed aspect-ratio box and clips overflow, so
// scaling the inner canvas never changes any element's box size.
function startDashboardFit(root: HTMLElement): () => void {
  const screen = root.querySelector<HTMLElement>('[data-dc-tpl="388"]');
  const canvas = screen?.querySelector<HTMLElement>('[data-dc-tpl="389"]');
  if (!screen || !canvas) return () => {};

  const BASE_W = 960;
  canvas.style.transformOrigin = '0 0';
  canvas.style.left = '0px';
  canvas.style.top = '0px';

  const fit = () => {
    const w = screen.clientWidth;
    if (!w) return;
    canvas.style.transform = `scale(${(w / BASE_W).toFixed(5)})`;
  };
  fit();

  let ro: ResizeObserver | null = null;
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => fit());
    ro.observe(screen);
  }
  const onResize = () => fit();
  window.addEventListener('resize', onResize);
  // run once more after fonts/layout settle
  const t = window.setTimeout(fit, 300);

  return () => {
    ro?.disconnect();
    window.removeEventListener('resize', onResize);
    window.clearTimeout(t);
  };
}

export function startZeusDemos(root: HTMLElement): Array<() => void> {
  return [startLeadRowSweep(root), startPossibilitiesCountUp(root), startDashboardFit(root)];
}
