// Auto-playing "Great Documents Are Written Together" demo for the Snaarp
// Document page (section tpl 269). In the standalone bundle the Team-Project-
// Plan editor shows a live-collaboration typing effect: the "Next step:" line
// (tpl 310) types itself out, with a blinking caret (tpl 311) and a "@Daniel"
// mention tag, then resets and types again — a continuous loop. We reproduce
// exactly that here (the bundle already loops it on its own).
//
// Only the text of tpl 310's leading .sc-interp span changes; the caret and the
// Daniel tag stay in place, and nothing is added or removed — so the editor
// card never changes size or reflows. Pauses on hover and when the tab is
// hidden; honors prefers-reduced-motion (shows the full line). Returns cleanup.

const SECTION_TPL = '269';
const LINE_TPL = '310'; // the "Next step:" paragraph

const FULL = 'Next step: share the Q4 timeline with everyone by Friday. ';

export function startDocsCollabDemo(root: HTMLElement): () => void {
  const section = root.querySelector<HTMLElement>(`[data-dc-tpl="${SECTION_TPL}"]`);
  if (!section) return () => {};
  const line = section.querySelector<HTMLElement>(`[data-dc-tpl="${LINE_TPL}"]`);
  // the leading text node is the first .sc-interp inside the paragraph
  const textSpan = line?.querySelector<HTMLElement>(':scope > .sc-interp');
  if (!line || !textSpan) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    textSpan.textContent = FULL;
    return () => {};
  }

  let paused = false;
  let timers: number[] = [];
  const clearAll = () => { timers.forEach((t) => clearTimeout(t)); timers = []; };
  const after = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };

  const typeOut = (done: () => void) => {
    let i = 0;
    const step = () => {
      if (paused) return;
      i++;
      textSpan.textContent = FULL.slice(0, i);
      if (i < FULL.length) after(55, step);
      else done();
    };
    step();
  };

  const runCycle = () => {
    if (paused) return;
    textSpan.textContent = '';
    typeOut(() => {
      if (paused) return;
      // hold the finished line, then reset and type again
      after(2600, () => {
        if (paused) return;
        textSpan.textContent = '';
        after(600, runCycle);
      });
    });
  };

  after(900, runCycle);

  const reset = () => { clearAll(); textSpan.textContent = FULL; };
  const onEnter = () => { paused = true; reset(); };
  const onLeave = () => { if (!paused) return; paused = false; after(500, runCycle); };
  section.addEventListener('mouseenter', onEnter);
  section.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; clearAll(); }
    else if (paused) { paused = false; after(500, runCycle); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    clearAll();
    section.removeEventListener('mouseenter', onEnter);
    section.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}
