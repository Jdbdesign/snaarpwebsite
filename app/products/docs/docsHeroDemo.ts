// Auto-playing hero AI-writing demo for the Snaarp Document page.
//
// In the standalone bundle the hero document-editor mockup is interactive: you
// type a request into the "Ask Snaarp AI" bar (tpl 146) and the highlighted
// paragraph (tpl 117) rewrites itself into an AI-improved version, with the
// sparkle/assistant chrome reacting. Here we reproduce that AUTOMATICALLY on a
// continuous loop — no clicks needed:
//   1. a prompt types into the AI bar (typewriter), cycling through a few
//      realistic requests ("Improve this paragraph", "Make it more
//      professional", "Expand this", ...),
//   2. a brief "thinking" beat (the AI sparkle pulses, paragraph highlight
//      brightens),
//   3. the paragraph rewrites to the matching AI version (typed in),
//   4. hold, then clear the prompt and restore the original paragraph, repeat.
//
// Purely text/opacity changes on existing nodes — no element is added or
// removed, so the mockup never changes size or reflows. Pauses on hover and
// when the tab is hidden; honors prefers-reduced-motion (shows a static
// improved state). Returns a cleanup function.

const CANVAS_TPL = '69'; // hero mock canvas (never transform it)
const PARA_TPL = '117'; // the highlighted paragraph
const AI_INPUT_TPL = '146'; // the "Ask Snaarp AI…" input

const ORIGINAL =
  'We are excited to propose a strategic partnership that will help your organisation achieve its goals through innovative technology, expert support and a long-term commitment to your success.';

// Each cycle: a prompt + the AI-rewritten paragraph it produces.
const CYCLES: Array<{ prompt: string; result: string }> = [
  {
    prompt: 'Improve this paragraph',
    result:
      'We’re delighted to propose a strategic partnership designed to help your organisation reach its goals faster — combining innovative technology, hands-on expert support and a long-term commitment to your success.',
  },
  {
    prompt: 'Make it more professional',
    result:
      'We would be pleased to establish a strategic partnership that enables your organisation to achieve its objectives through innovative technology, dedicated expert support and a sustained commitment to your success.',
  },
  {
    prompt: 'Make this shorter',
    result:
      'We’d love to partner with you — pairing innovative technology and expert support to help your organisation reach its goals.',
  },
];

export function startDocsHeroDemo(root: HTMLElement): () => void {
  const canvas = root.querySelector<HTMLElement>(`[data-dc-tpl="${CANVAS_TPL}"]`);
  if (!canvas) return () => {};

  const para =
    canvas.querySelector<HTMLElement>(`[data-dc-tpl="${PARA_TPL}"] .sc-interp`) ||
    canvas.querySelector<HTMLElement>(`[data-dc-tpl="${PARA_TPL}"]`);
  const paraWrap = canvas.querySelector<HTMLElement>(`[data-dc-tpl="${PARA_TPL}"]`);
  const input = canvas.querySelector<HTMLInputElement>(`[data-dc-tpl="${AI_INPUT_TPL}"]`);
  if (!para || !input || !paraWrap) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const highlightOn = paraWrap.style.background || 'rgb(230, 215, 255)';
  const highlightBright = 'rgb(217, 196, 252)';

  if (reduce) {
    // Static representative "improved" state.
    para.textContent = CYCLES[0].result;
    input.value = '';
    return () => {};
  }

  let paused = false;
  let raf = 0;
  let timers: number[] = [];
  const clearAll = () => { if (raf) cancelAnimationFrame(raf); raf = 0; timers.forEach((t) => clearTimeout(t)); timers = []; };
  const after = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };

  // Type `text` into a target (input value or element textContent) char by char.
  const typeInto = (setter: (s: string) => void, text: string, speed: number, done: () => void) => {
    let i = 0;
    const step = () => {
      if (paused) return;
      i++;
      setter(text.slice(0, i));
      if (i < text.length) after(speed, step);
      else done();
    };
    step();
  };
  // Delete current input text char by char.
  const clearInput = (done: () => void) => {
    const step = () => {
      if (paused) return;
      const v = input.value;
      if (!v) { done(); return; }
      input.value = v.slice(0, -1);
      after(22, step);
    };
    step();
  };

  let cycleIdx = 0;

  const runCycle = () => {
    if (paused) return;
    const { prompt, result } = CYCLES[cycleIdx % CYCLES.length];

    // 1) type the prompt into the AI bar
    typeInto((s) => { input.value = s; }, prompt, 46, () => {
      if (paused) return;
      // 2) "thinking" beat — brighten the paragraph highlight
      paraWrap.style.background = highlightBright;
      after(650, () => {
        if (paused) return;
        // 3) rewrite the paragraph (clear then type the AI result)
        para.textContent = '';
        typeInto((s) => { para.textContent = s; }, result, 14, () => {
          if (paused) return;
          paraWrap.style.background = highlightOn;
          // 4) hold, then reset to original and loop
          after(2200, () => {
            if (paused) return;
            clearInput(() => {
              if (paused) return;
              after(400, () => {
                if (paused) return;
                para.textContent = ORIGINAL;
                cycleIdx = (cycleIdx + 1) % CYCLES.length;
                after(700, runCycle);
              });
            });
          });
        });
      });
    });
  };

  after(1100, runCycle);

  const reset = () => { clearAll(); input.value = ''; para.textContent = ORIGINAL; paraWrap.style.background = highlightOn; };
  const onEnter = () => { paused = true; reset(); };
  const onLeave = () => { if (!paused) return; paused = false; after(500, runCycle); };
  canvas.addEventListener('mouseenter', onEnter);
  canvas.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; clearAll(); }
    else if (paused) { paused = false; reset(); paused = false; after(500, runCycle); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    clearAll();
    canvas.removeEventListener('mouseenter', onEnter);
    canvas.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}
