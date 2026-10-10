// Hero HR-dashboard demo for the Snaarp Workforce page.
//
// The hero mockup canvas (tpl 74) is a static HR-dashboard artboard with a
// left sidebar of 15 nav items (tpl 113, class scp1): Dashboard, People,
// Attendance, Leave, Time Tracking, Payroll, Recruitment, Performance,
// Learning, Expenses, HR Cases, Announcements, Reports, Settings... This
// controller gives the mockup a continuous, LOOPING sense of life by sweeping
// the "active" highlight down the sidebar, as if someone is navigating the app.
//
// HEIGHT-SAFE BY DESIGN: it only changes `background` and `color` on fixed
// 23px-tall nav buttons — never a layout-affecting property, never font-weight
// (which could reflow width). So neither the canvas nor the document height
// ever changes and the page cannot glitch or jump (verified by measuring
// doc/canvas height across every item). No element is added, removed, or
// resized; the sidebar is never scrolled. The loop pauses while the pointer is
// over the canvas and when the hero scrolls out of view, and honors
// prefers-reduced-motion (a single static highlight, no cycling).
// Returns a cleanup fn.

const ACTIVE_BG = 'rgb(241, 236, 255)';   // light purple pill (already normalized)
const ACTIVE_COLOR = 'rgb(124, 58, 237)'; // Snaarp purple
const INACTIVE_BG = 'transparent';
const INACTIVE_COLOR = 'rgb(75, 72, 104)';
const STEP_MS = 1300;

export function startWorkforceHeroDemo(root: HTMLElement): () => void {
  const canvas = root.querySelector<HTMLElement>('[data-dc-tpl="74"]');
  if (!canvas) return () => {};

  const items = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="113"]'));
  if (items.length < 2) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Smooth the bg/color change; keep font-weight fixed so width never reflows.
  items.forEach((it) => {
    it.style.transition = 'background-color .3s ease, color .3s ease';
  });

  const activate = (idx: number) => {
    items.forEach((it, i) => {
      if (i === idx) {
        it.style.background = ACTIVE_BG;
        it.style.color = ACTIVE_COLOR;
      } else {
        it.style.background = INACTIVE_BG;
        it.style.color = INACTIVE_COLOR;
      }
    });
  };

  let current = 0;
  activate(0);

  if (reduce) {
    return () => {
      items.forEach((it) => {
        it.style.transition = '';
      });
    };
  }

  let timer = 0;
  let paused = false;

  const tick = () => {
    if (paused) return;
    current = (current + 1) % items.length;
    activate(current);
  };

  const start = () => {
    if (timer) return;
    timer = window.setInterval(tick, STEP_MS);
  };
  const stop = () => {
    if (!timer) return;
    window.clearInterval(timer);
    timer = 0;
  };

  const onEnter = () => { paused = true; };
  const onLeave = () => { paused = false; };
  // Clicking a nav item jumps the highlight there and keeps cycling from it.
  const itemHandlers = items.map((it, i) => {
    const h = () => { current = i; activate(i); };
    it.addEventListener('click', h);
    return () => it.removeEventListener('click', h);
  });

  canvas.addEventListener('pointerenter', onEnter);
  canvas.addEventListener('pointerleave', onLeave);

  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.1 }
    );
    io.observe(canvas);
  } else {
    start();
  }

  return () => {
    stop();
    io?.disconnect();
    canvas.removeEventListener('pointerenter', onEnter);
    canvas.removeEventListener('pointerleave', onLeave);
    itemHandlers.forEach((off) => off());
    items.forEach((it) => {
      it.style.transition = '';
    });
  };
}
