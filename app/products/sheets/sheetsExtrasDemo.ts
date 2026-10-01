// Continuous, self-running demos for the two remaining Sheets mockups,
// completing the page-wide interaction set. No hover, size-preserving.
//
//   • AI Formulas card (canvas tpl 258): the "Ask Snaarp AI" panel cycles
//     through preset chips (Commission / Growth % / Average / Clean names),
//     retyping the prompt and swapping the generated formula to match —
//     a seamless "AI writes different formulas" loop.
//   • Every-Device phone (canvas tpl 406): the mini bar chart cycles its
//     active (highlighted) bar, and the "Synced · just now" badge pulses.
//
// Each is scoped to its canvas and started independently. Returns cleanup.

const ease = 'cubic-bezier(0.22,1,0.36,1)';
const PURPLE = 'rgb(124, 58, 237)';

/* ───────────────── AI Formulas card (tpl 258) ───────────────── */
export function startSheetsFormulaDemo(canvas: HTMLElement): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const chips = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="276"]'));
  const prompt = canvas.querySelector<HTMLTextAreaElement>('[data-dc-tpl="278"]');
  const code = canvas.querySelector<HTMLElement>('[data-dc-tpl="284"] .sc-interp')
    || canvas.querySelector<HTMLElement>('[data-dc-tpl="284"]');
  if (chips.length < 4 || !prompt || !code) return () => {};

  const PRESETS = [
    { prompt: 'Create a formula to calculate commission at 7.5% if sales is in column B.', formula: '=B2 * 7.5%' },
    { prompt: 'Calculate the growth % between Q2 and Q3 for each region.', formula: '=(D2-C2)/C2' },
    { prompt: "What's the average of the Q3 sales column?", formula: '=AVERAGE(D2:D12)' },
    { prompt: 'Clean up and capitalise the names in column A.', formula: '=PROPER(TRIM(A2))' },
  ];

  let cancelled = false;
  const timers: number[] = [];
  const wait = (ms: number) => new Promise<void>((r) => { timers.push(window.setTimeout(r, ms)); });

  const setActiveChip = (idx: number) => {
    chips.forEach((c, i) => {
      const on = i === idx;
      c.style.transition = `background 0.3s ${ease}, border-color 0.3s ${ease}, color 0.3s ${ease}`;
      c.style.background = on ? 'rgb(238,238,255)' : 'rgb(255,255,255)';
      c.style.borderColor = on ? PURPLE : 'rgb(225,227,245)';
      c.style.color = on ? PURPLE : 'rgb(75,82,112)';
    });
  };

  const typeInto = async (el: HTMLTextAreaElement, text: string) => {
    for (let i = 1; i <= text.length && !cancelled; i++) { el.value = text.slice(0, i); await wait(16); }
  };

  const run = async () => {
    await wait(1000);
    let idx = 0;
    while (!cancelled) {
      const p = PRESETS[idx % PRESETS.length];
      setActiveChip(idx % chips.length);
      // clear + retype the prompt
      prompt.value = '';
      await wait(250);
      await typeInto(prompt, p.prompt);
      if (cancelled) return;
      await wait(500);
      // "generate": fade the formula out, swap, fade in
      const codeWrap = code.parentElement || code;
      codeWrap.style.transition = `opacity 0.25s ${ease}`;
      (codeWrap.style as any).opacity = '0.3';
      await wait(260);
      code.textContent = p.formula;
      (codeWrap.style as any).opacity = '1';
      await wait(3400);
      idx += 1;
    }
  };
  run();
  return () => { cancelled = true; timers.forEach(clearTimeout); };
}

/* ───────────────── Every-Device phone chart (tpl 406) ───────────────── */
export function startSheetsDeviceDemo(canvas: HTMLElement): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const bars = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="488"]'));
  const labels = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="487"]'));
  const syncIcon = canvas.querySelector<HTMLElement>('[data-dc-tpl="410"]');
  if (bars.length < 2) return () => {};

  let cancelled = false;
  const intervals: number[] = [];
  const every = (ms: number, fn: () => void) => { intervals.push(window.setInterval(fn, ms)); };

  let bi = 0;
  const cycleBar = () => {
    if (cancelled) return;
    bars.forEach((bar, i) => {
      const on = i === bi;
      bar.style.transition = `background 0.4s ${ease}, filter 0.4s ${ease}`;
      bar.style.background = on ? PURPLE : 'rgb(165,229,192)';
      bar.style.filter = on ? 'drop-shadow(rgba(124,58,237,0.5) 0 4px 8px)' : 'none';
      const lbl = labels[i];
      if (lbl) { lbl.style.transition = `color 0.4s ${ease}`; lbl.style.color = on ? PURPLE : 'rgb(75,82,112)'; }
    });
    bi = (bi + 1) % bars.length;
  };
  cycleBar();
  every(1400, cycleBar);

  // "Synced · just now" badge: a gentle periodic pulse on the cloud icon.
  if (syncIcon) {
    every(3200, () => {
      if (cancelled) return;
      syncIcon.style.transition = `transform 0.3s ${ease}`;
      syncIcon.style.transform = 'scale(1.3)';
      window.setTimeout(() => { syncIcon.style.transform = 'scale(1)'; }, 320);
    });
  }

  return () => { cancelled = true; intervals.forEach(clearInterval); };
}
