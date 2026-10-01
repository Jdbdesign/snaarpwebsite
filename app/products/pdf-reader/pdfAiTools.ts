// AI Tools section (tpl 386) — a gentle looping spotlight that walks each AI
// capability card so the section demonstrates itself. Cards also respond to
// real hover (CSS); the loop pauses while the pointer is over the grid and
// resumes on leave. Honors prefers-reduced-motion (no auto-spotlight).
// Returns a cleanup function.

export function startPdfAiTools(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="389"]'));
  if (cards.length < 2 || reduce) return () => {};

  let idx = 0;
  let paused = false;
  const lit = (i: number) => cards.forEach((c, j) => c.classList.toggle('pdf-ai-on', j === i));
  const step = () => { if (paused) return; idx = (idx + 1) % cards.length; lit(idx); };

  const onEnter = () => { paused = true; cards.forEach((c) => c.classList.remove('pdf-ai-on')); };
  const onLeave = () => { paused = false; };
  cards.forEach((c) => {
    c.addEventListener('mouseenter', onEnter);
    c.addEventListener('mouseleave', onLeave);
  });

  lit(0);
  const id = window.setInterval(step, 1800);

  return () => {
    window.clearInterval(id);
    cards.forEach((c) => {
      c.removeEventListener('mouseenter', onEnter);
      c.removeEventListener('mouseleave', onLeave);
      c.classList.remove('pdf-ai-on');
    });
  };
}
