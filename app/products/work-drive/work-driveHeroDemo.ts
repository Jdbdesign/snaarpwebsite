// Auto-playing hero file-manager demo for the Snaarp Work Drive page.
//
// The standalone bundle's hero mockup is a working mini file-manager: a user
// clicks the sidebar nav (My Drive / Shared with me / Recent / Favourites /
// Trash) to switch views, and a grid/list toggle to change layout. Here we
// reproduce that interaction but drive it AUTOMATICALLY on a continuous loop —
// no clicks needed. A plain DOM controller:
//   1. cycles the sidebar nav, swapping the main panel (tpl 91) with the
//      pre-captured, colour-normalized markup for each view,
//   2. moves the active-nav highlight on the sidebar to match,
//   3. toggles list -> grid -> list on the My Drive view to show both layouts,
//   4. shows a soft "cursor" dot gliding to each nav before it activates, so
//      the automation reads as a guided tour.
// Pauses while the tab is hidden and when the user actually hovers/clicks the
// mockup (so manual exploration still works), resuming the loop afterwards.
// Honors prefers-reduced-motion (no cursor glide, gentler cross-fade).
// Returns a cleanup function.

import { DRIVE_VIEWS, type DriveViewState } from './work-driveViews';

const NAV_TPL = '79'; // sidebar nav buttons (class scp3), in order
const MAIN_TPL = '91'; // main content panel (sibling of the sidebar)
const CANVAS_TPL = '72'; // hero mockup canvas root (never transform it)

type Step = { viewIndex: number; mode: 'list' | 'grid'; hold: number };

// Loop plan: walk each nav view in list mode; on My Drive also flip to grid.
const STEPS: Step[] = [
  { viewIndex: 0, mode: 'list', hold: 2600 }, // My Drive (list)
  { viewIndex: 0, mode: 'grid', hold: 2200 }, // My Drive (grid)
  { viewIndex: 1, mode: 'list', hold: 2400 }, // Shared with me
  { viewIndex: 2, mode: 'list', hold: 2600 }, // Recent
  { viewIndex: 3, mode: 'list', hold: 2400 }, // Favourites
  { viewIndex: 4, mode: 'list', hold: 2200 }, // Trash
];

export function startDriveHeroDemo(root: HTMLElement): () => void {
  const canvas = root.querySelector<HTMLElement>(`[data-dc-tpl="${CANVAS_TPL}"]`);
  if (!canvas) return () => {};

  const navButtons = Array.from(
    canvas.querySelectorAll<HTMLElement>(`[data-dc-tpl="${NAV_TPL}"]`),
  ).slice(0, DRIVE_VIEWS.length);
  if (navButtons.length < DRIVE_VIEWS.length) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Resolve the card (parent of the sidebar + main panel) so we can swap the
  // main panel in place and re-find it afterwards.
  const firstMain = canvas.querySelector<HTMLElement>(`[data-dc-tpl="${MAIN_TPL}"]`);
  const card = firstMain?.parentElement;
  if (!firstMain || !card) return () => {};

  // Capture the active/inactive sidebar nav styles from the initial markup so
  // we can move the highlight without hard-coding colours. Nav 0 (My Drive) is
  // active at start.
  const activeBg = navButtons[0].style.background || 'rgb(239, 230, 255)';
  const activeColor = navButtons[0].style.color || 'rgb(110, 26, 255)';
  const activeWeight = navButtons[0].style.fontWeight || '700';
  const idleBg = 'transparent';
  const idleColor = navButtons[1]?.style.color || 'rgb(56, 42, 80)';
  const idleWeight = navButtons[1]?.style.fontWeight || '500';
  // The leading icon inside each nav button (tpl 80) recolours when active.
  const activeIcon = 'rgb(110, 26, 255)';
  const idleIcon = 'rgb(122, 129, 156)';

  const setNavActive = (index: number) => {
    navButtons.forEach((btn, i) => {
      const on = i === index;
      btn.style.background = on ? activeBg : idleBg;
      btn.style.color = on ? activeColor : idleColor;
      btn.style.fontWeight = on ? activeWeight : idleWeight;
      const icon = btn.querySelector<HTMLElement>('[data-dc-tpl="80"]');
      if (icon) icon.style.color = on ? activeIcon : idleIcon;
    });
  };

  // Build a soft guided-tour cursor dot that glides to a nav button.
  let cursor: HTMLElement | null = null;
  if (!reduce) {
    cursor = document.createElement('div');
    cursor.setAttribute('aria-hidden', 'true');
    cursor.style.cssText =
      'position:absolute;z-index:40;width:22px;height:22px;border-radius:50%;' +
      'background:radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(124,58,237,0.65) 60%, rgba(124,58,237,0.25));' +
      'box-shadow:0 6px 16px -4px rgba(124,58,237,0.6);pointer-events:none;opacity:0;' +
      'transform:translate(-50%,-50%);transition:left .55s cubic-bezier(.4,0,.2,1),top .55s cubic-bezier(.4,0,.2,1),opacity .3s ease;';
    // position relative to the canvas
    if (getComputedStyle(canvas).position === 'static') canvas.style.position = 'relative';
    canvas.appendChild(cursor);
  }

  const glideCursorTo = (target: HTMLElement) => {
    if (!cursor) return;
    const cRect = canvas.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    // account for the canvas zoom so coordinates land correctly
    const zoom = parseFloat(getComputedStyle(canvas).zoom || '1') || 1;
    const x = (tRect.left - cRect.left) / zoom + tRect.width / zoom / 2;
    const y = (tRect.top - cRect.top) / zoom + tRect.height / zoom / 2;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor.style.opacity = '1';
  };

  // Swap the main panel markup for a given view + mode with a quick cross-fade.
  const applyView = (view: DriveViewState, mode: 'list' | 'grid') => {
    const current = card.querySelector<HTMLElement>(`[data-dc-tpl="${MAIN_TPL}"]`);
    if (!current) return;
    const html = mode === 'grid' ? view.grid : view.list;
    const temp = document.createElement('div');
    temp.innerHTML = html.trim();
    const next = temp.firstElementChild as HTMLElement | null;
    if (!next) return;

    if (reduce) {
      current.replaceWith(next);
      return;
    }
    next.style.transition = 'opacity .32s ease';
    next.style.opacity = '0';
    current.replaceWith(next);
    // next frame -> fade in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.style.opacity = '1';
      });
    });
  };

  let stepIdx = 0;
  let paused = false;
  let timers: number[] = [];
  const clearTimers = () => {
    timers.forEach((t) => window.clearTimeout(t));
    timers = [];
  };
  const after = (ms: number, fn: () => void) => {
    const t = window.setTimeout(fn, ms);
    timers.push(t);
  };

  const runStep = () => {
    if (paused) return;
    const step = STEPS[stepIdx % STEPS.length];
    const view = DRIVE_VIEWS[step.viewIndex];

    // glide the cursor to the target nav, then activate + swap.
    glideCursorTo(navButtons[step.viewIndex]);
    after(reduce ? 0 : 560, () => {
      if (paused) return;
      setNavActive(step.viewIndex);
      applyView(view, step.mode);
      if (cursor) after(500, () => { if (cursor) cursor.style.opacity = '0'; });
      // schedule next
      after(step.hold, () => {
        if (paused) return;
        stepIdx = (stepIdx + 1) % STEPS.length;
        runStep();
      });
    });
  };

  // Start after a short beat so the hero settles.
  after(900, runStep);

  // Pause on hover (let the user explore), resume on leave.
  const onEnter = () => { paused = true; clearTimers(); if (cursor) cursor.style.opacity = '0'; };
  const onLeave = () => {
    if (!paused) return;
    paused = false;
    after(600, runStep);
  };
  canvas.addEventListener('mouseenter', onEnter);
  canvas.addEventListener('mouseleave', onLeave);

  // Pause when tab hidden.
  const onVis = () => {
    if (document.hidden) { paused = true; clearTimers(); }
    else if (paused) { paused = false; after(400, runStep); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    clearTimers();
    canvas.removeEventListener('mouseenter', onEnter);
    canvas.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
    if (cursor) cursor.remove();
  };
}
