// Hero deck demo for the Snaarp Slides page.
//
// The hero mockup canvas (tpl 69) is a static presentation-editor artboard: a
// large slide stage (tpl 70) and a rail of 10 slide thumbnails (tpl 111). This
// controller gives it a continuous, LOOPING sense of life by sweeping an
// "active slide" highlight across the thumbnails, as if someone is paging
// through the deck.
//
// HEIGHT-SAFE BY DESIGN: it only ever changes `outline`, `box-shadow` and
// `transform` on a thumbnail — none of which affect layout flow — so neither
// the canvas nor the document height ever changes and the page cannot glitch
// or jump (verified by measuring doc/canvas height across every thumbnail).
// No element is added, removed, or resized; the thumbnail rail is never
// scrolled. The loop pauses while the pointer is over the canvas so a visitor
// can inspect it, and resumes on leave. Honors prefers-reduced-motion (a single
// static highlight, no cycling). Returns a cleanup fn.

const ACTIVE_OUTLINE = '2.5px solid rgb(124, 58, 237)';
const ACTIVE_SHADOW = 'rgba(124, 58, 237, 0.42) 0px 8px 22px -8px';
const STEP_MS = 1400;

export function startSlidesHeroDemo(root: HTMLElement): () => void {
  const canvas = root.querySelector<HTMLElement>('[data-dc-tpl="69"]');
  if (!canvas) return () => {};

  const thumbs = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="111"]'));
  if (thumbs.length < 2) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Remember each thumbnail's base box-shadow so we can restore it cleanly.
  const baseShadow = thumbs.map((t) => t.style.boxShadow || '');

  thumbs.forEach((t) => {
    t.style.transition =
      'outline-color .35s ease, box-shadow .35s ease, transform .35s ease';
    t.style.outline = '2.5px solid rgba(124, 58, 237, 0)';
    t.style.outlineOffset = '2px';
  });

  const activate = (idx: number) => {
    thumbs.forEach((t, i) => {
      if (i === idx) {
        t.style.outline = ACTIVE_OUTLINE;
        t.style.boxShadow = ACTIVE_SHADOW;
        t.style.transform = 'scale(1.025)';
      } else {
        t.style.outline = '2.5px solid rgba(124, 58, 237, 0)';
        t.style.boxShadow = baseShadow[i];
        t.style.transform = 'scale(1)';
      }
    });
  };

  let current = 0;
  activate(0);

  if (reduce) {
    // No cycling under reduced motion — leave slide 0 highlighted.
    return () => {
      thumbs.forEach((t, i) => {
        t.style.outline = '';
        t.style.outlineOffset = '';
        t.style.boxShadow = baseShadow[i];
        t.style.transform = '';
        t.style.transition = '';
      });
    };
  }

  let timer = 0;
  let paused = false;

  const tick = () => {
    if (!paused) {
      current = (current + 1) % thumbs.length;
      activate(current);
    }
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

  const onEnter = () => {
    paused = true;
  };
  const onLeave = () => {
    paused = false;
  };
  // Clicking a thumbnail jumps the highlight there and keeps cycling from it.
  const onThumbClick = (i: number) => () => {
    current = i;
    activate(i);
  };

  canvas.addEventListener('pointerenter', onEnter);
  canvas.addEventListener('pointerleave', onLeave);
  const thumbHandlers = thumbs.map((t, i) => {
    const h = onThumbClick(i);
    t.addEventListener('click', h);
    return () => t.removeEventListener('click', h);
  });

  // Pause when the hero scrolls out of view (saves work, nothing to see).
  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? start() : stop()));
      },
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
    thumbHandlers.forEach((off) => off());
    thumbs.forEach((t, i) => {
      t.style.outline = '';
      t.style.outlineOffset = '';
      t.style.boxShadow = baseShadow[i];
      t.style.transform = '';
      t.style.transition = '';
    });
  };
}
