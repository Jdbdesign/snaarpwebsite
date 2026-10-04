// Auto-playing "Don't Start With a Blank Page" demo for the Snaarp Document
// page (section tpl 208). In the standalone bundle the AI card is interactive:
// you click a suggestion row (tpl 226: "Create a sales proposal…", "Turn these
// meeting notes into a report", …) and it drops that request into the "Ask
// Snaarp AI anything…" bar (tpl 258) and drafts. Here we reproduce that flow
// AUTOMATICALLY on a continuous loop — no clicks:
//   1. highlight each suggestion row in turn (as if selected),
//   2. type that suggestion into the AI input (typewriter),
//   3. pulse the send button / sparkle for a brief "drafting…" beat,
//   4. clear and advance to the next suggestion, forever.
//
// Only highlight/opacity + the input value change on existing nodes — nothing
// is added or removed, so the card never changes size or reflows (the real
// bundle injects a result card on click; we deliberately do NOT, to keep the
// structure untouched and the layout height-safe). Pauses on hover and when the
// tab is hidden; honors prefers-reduced-motion. Returns a cleanup function.

const SECTION_TPL = '208';
const ROW_TPL = '226'; // suggestion rows
const INPUT_TPL = '258'; // "Ask Snaarp AI anything…" input
const SEND_TPL = '259'; // send button

export function startDocsBlankDemo(root: HTMLElement): () => void {
  const section = root.querySelector<HTMLElement>(`[data-dc-tpl="${SECTION_TPL}"]`);
  if (!section) return () => {};

  const rows = Array.from(section.querySelectorAll<HTMLElement>(`[data-dc-tpl="${ROW_TPL}"]`));
  const input = section.querySelector<HTMLInputElement>(`[data-dc-tpl="${INPUT_TPL}"]`);
  const send = section.querySelector<HTMLElement>(`[data-dc-tpl="${SEND_TPL}"]`);
  if (!rows.length || !input) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Capture each row's resting style so we can highlight then restore it.
  const rowRest = rows.map((r) => ({
    bg: r.style.background || 'rgb(255, 255, 255)',
    border: r.style.borderColor || 'rgb(237, 232, 245)',
  }));
  const ACTIVE_BG = 'rgb(246, 240, 255)';
  const ACTIVE_BORDER = 'rgb(206, 180, 250)';

  rows.forEach((r) => { r.style.transition = 'background .25s ease, border-color .25s ease, transform .2s ease'; });
  if (send) send.style.transition = 'transform .2s ease, box-shadow .2s ease';

  const prompts = rows.map((r) => r.querySelector('.sc-interp')?.textContent?.trim() || r.textContent?.trim() || '');

  if (reduce) {
    rows[0].style.background = ACTIVE_BG;
    rows[0].style.borderColor = ACTIVE_BORDER;
    input.value = prompts[0];
    return () => {};
  }

  let paused = false;
  let timers: number[] = [];
  const clearAll = () => { timers.forEach((t) => clearTimeout(t)); timers = []; };
  const after = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };

  const restoreRows = () => rows.forEach((r, i) => { r.style.background = rowRest[i].bg; r.style.borderColor = rowRest[i].border; r.style.transform = 'none'; });

  const typeInto = (text: string, speed: number, done: () => void) => {
    let i = 0;
    const step = () => { if (paused) return; i++; input.value = text.slice(0, i); if (i < text.length) after(speed, step); else done(); };
    step();
  };
  const clearInput = (done: () => void) => {
    const step = () => { if (paused) return; const v = input.value; if (!v) { done(); return; } input.value = v.slice(0, -1); after(16, step); };
    step();
  };

  let idx = 0;
  const runStep = () => {
    if (paused) return;
    restoreRows();
    const row = rows[idx % rows.length];
    // 1) highlight the active suggestion
    row.style.background = ACTIVE_BG;
    row.style.borderColor = ACTIVE_BORDER;
    row.style.transform = 'translateX(2px)';
    // 2) type it into the AI bar
    after(420, () => {
      if (paused) return;
      typeInto(prompts[idx % prompts.length], 34, () => {
        if (paused) return;
        // 3) "drafting" pulse on the send button
        if (send) {
          send.style.transform = 'scale(1.12)';
          send.style.boxShadow = 'rgba(124, 58, 237, 0.6) 0px 6px 16px -4px';
          after(500, () => { if (send) { send.style.transform = 'scale(1)'; send.style.boxShadow = ''; } });
        }
        // 4) hold, clear, advance
        after(1500, () => {
          if (paused) return;
          clearInput(() => {
            if (paused) return;
            row.style.background = rowRest[idx % rows.length].bg;
            row.style.borderColor = rowRest[idx % rows.length].border;
            row.style.transform = 'none';
            idx = (idx + 1) % rows.length;
            after(500, runStep);
          });
        });
      });
    });
  };

  after(1000, runStep);

  const reset = () => { clearAll(); restoreRows(); input.value = ''; if (send) { send.style.transform = 'scale(1)'; send.style.boxShadow = ''; } };
  const onEnter = () => { paused = true; reset(); };
  const onLeave = () => { if (!paused) return; paused = false; after(500, runStep); };
  section.addEventListener('mouseenter', onEnter);
  section.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; clearAll(); }
    else if (paused) { paused = false; reset(); paused = false; after(500, runStep); }
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
