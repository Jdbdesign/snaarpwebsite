// Continuous, height-safe looping demos for the Snaarp 360 landing page.
//
// Two controllers, both of which only ever change text or non-layout style
// properties on fixed-size containers — so neither the section nor the document
// height changes, and the page never glitches or jumps:
//
//   1) startStatsCountUp — the Stats section numbers (tpl 503) count up from 0
//      to their targets when the section scrolls into view, and re-run each
//      time it re-enters. The numbers use `font-variant-numeric: tabular-nums`
//      and sit centered in fixed columns, so the digits never shift siblings.
//
//   2) startAppsLoop — sweeps an "active" highlight across the 15 application
//      cards (tpl 376), as if someone is browsing the app suite. Only
//      background/border/box-shadow change on fixed-size cards.
//
// Both honor prefers-reduced-motion and clean themselves up on unmount.

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- 1) Stats count-up -------------------------------------------------
function startStatsCountUp(root: HTMLElement): () => void {
  const nums = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="503"] .sc-interp'));
  if (!nums.length) return () => {};

  // Target spec per stat, matched to the bundle's original values.
  // [target, suffix, decimals, useGrouping]
  const SPECS: Array<[number, string, number, boolean]> = [
    [10000, '+', 0, true],   // Businesses trust Snaarp
    [500000, '+', 0, true],  // Users worldwide
    [190, '+', 0, false],    // Countries
    [99.9, '%', 1, false],   // Uptime and secure
  ];

  const format = (v: number, spec: [number, string, number, boolean]) => {
    const [, suffix, decimals, group] = spec;
    const n = decimals ? v.toFixed(decimals) : Math.round(v).toString();
    const withGroup = group ? Number(n).toLocaleString('en-GB') : n;
    return (decimals ? v.toFixed(decimals) : withGroup) + suffix;
  };

  const setFinal = () => nums.forEach((el, i) => { if (SPECS[i]) el.textContent = format(SPECS[i][0], SPECS[i]); });

  if (reduceMotion()) { setFinal(); return () => {}; }

  let raf = 0;
  let running = false;

  const run = () => {
    if (running) return;
    running = true;
    const DURATION = 1600;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const k = ease(t);
      nums.forEach((el, i) => {
        const spec = SPECS[i];
        if (!spec) return;
        el.textContent = format(spec[0] * k, spec);
      });
      if (t < 1) raf = requestAnimationFrame(step);
      else running = false;
    };
    raf = requestAnimationFrame(step);
  };

  // reset to 0 so a re-entry animates again
  const reset = () => nums.forEach((el, i) => { if (SPECS[i]) el.textContent = format(0, SPECS[i]); });
  reset();

  const section = nums[0].closest('section') || root;
  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) run();
        else { if (!running) reset(); } // re-arm when it leaves view
      }),
      { threshold: 0.35 }
    );
    io.observe(section);
  } else {
    setFinal();
  }

  return () => {
    cancelAnimationFrame(raf);
    io?.disconnect();
  };
}

// ---- 2) Applications active-highlight loop -----------------------------
function startAppsLoop(root: HTMLElement): () => void {
  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="376"]'));
  if (cards.length < 2) return () => {};

  const INACTIVE_BG = 'rgb(255, 255, 255)';
  const INACTIVE_BORDER = '1px solid rgb(238, 233, 246)';
  const ACTIVE_BG = 'rgb(250, 247, 255)';
  const ACTIVE_BORDER = '1px solid rgb(124, 58, 237)';
  const ACTIVE_SHADOW = 'rgba(124, 58, 237, 0.26) 0px 12px 26px -14px';
  const STEP_MS = 1100;

  // capture base shadow to restore
  const baseShadow = cards.map((c) => c.style.boxShadow || '');
  cards.forEach((c) => {
    c.style.transition = 'background-color .35s ease, border-color .35s ease, box-shadow .35s ease';
  });

  const activate = (idx: number) => {
    cards.forEach((c, i) => {
      if (i === idx) {
        c.style.background = ACTIVE_BG;
        c.style.border = ACTIVE_BORDER;
        c.style.boxShadow = ACTIVE_SHADOW;
      } else {
        c.style.background = INACTIVE_BG;
        c.style.border = INACTIVE_BORDER;
        c.style.boxShadow = baseShadow[i];
      }
    });
  };

  let current = 0;
  activate(0);

  if (reduceMotion()) {
    return () => cards.forEach((c, i) => {
      c.style.transition = ''; c.style.background = ''; c.style.border = ''; c.style.boxShadow = baseShadow[i];
    });
  }

  let timer = 0;
  let paused = false;
  const tick = () => { if (paused) return; current = (current + 1) % cards.length; activate(current); };
  const start = () => { if (!timer) timer = window.setInterval(tick, STEP_MS); };
  const stop = () => { if (timer) { window.clearInterval(timer); timer = 0; } };

  const grid = cards[0].parentElement || root;
  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; };
  grid.addEventListener('pointerenter', onEnter);
  grid.addEventListener('pointerleave', onLeave);
  const cardHandlers = cards.map((c, i) => {
    const h = () => { current = i; activate(i); };
    c.addEventListener('click', h);
    return () => c.removeEventListener('click', h);
  });

  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.1 }
    );
    io.observe(grid);
  } else start();

  return () => {
    stop();
    io?.disconnect();
    grid.removeEventListener('pointerenter', onEnter);
    grid.removeEventListener('pointerleave', onLeave);
    cardHandlers.forEach((off) => off());
    cards.forEach((c, i) => {
      c.style.transition = ''; c.style.background = ''; c.style.border = ''; c.style.boxShadow = baseShadow[i];
    });
  };
}

export function startSnaarp360Demos(root: HTMLElement): Array<() => void> {
  return [startStatsCountUp(root), startAppsLoop(root)];
}
