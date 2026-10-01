// Continuous, self-running "Ask Snaarp AI × Sheet" demo for the Sheets
// hero mockup. Driven entirely by DOM mutation on a loop — no hover, no
// user input. The AI panel poses questions, the spreadsheet reacts (cell
// reference + formula bar update, relevant cells highlight), and the AI
// answers — showing how Snaarp AI works with Snaarp Sheet.
//
// Scoped to the hero canvas (tpl 76) so the second AI panel (AI Formulas
// section) is untouched. Preserves the mockup's fixed size (chat turns are
// capped, highlights are restored). Returns a cleanup function.

const ease = 'cubic-bezier(0.22,1,0.36,1)';
const PURPLE = 'rgb(124, 58, 237)';
const GREEN = 'rgb(18, 161, 80)';

// One scripted "ask": the AI question, the cell/formula it drives on the
// sheet, which data cells to highlight, and the AI's short answer lines.
type Ask = {
  q: string;
  ref: string;       // cell reference box, e.g. "E7"
  formula: string;   // formula bar text
  // highlight: list of [rowIndex (0 = header row 1), colLetter] data cells
  cells: Array<[number, string]>;
  tint: string;      // highlight colour
  answer: string;    // AI reply intro
  bullets?: Array<[string, string]>; // [label, value] rows (value in green/purple)
};

const COLS = ['A', 'B', 'C', 'D', 'E'];

const SCRIPT: Ask[] = [
  {
    q: 'Which region grew the fastest this quarter?',
    ref: 'E7', formula: '=(D7-C7)/C7',
    cells: [[7, 'A'], [7, 'C'], [7, 'D'], [7, 'E']],
    tint: 'rgba(124,58,237,0.14)',
    answer: 'Singapore (Training) grew the fastest:',
    bullets: [['Singapore', '+62%  (£42,000 → £68,000)']],
  },
  {
    q: 'What are total Q3 sales?',
    ref: 'D13', formula: '=SUM(D2:D12)',
    cells: [[2, 'D'], [3, 'D'], [4, 'D'], [5, 'D'], [6, 'D'], [7, 'D']],
    tint: 'rgba(18,161,80,0.14)',
    answer: 'Total Q3 sales across all regions:',
    bullets: [['Q3 total', '£822,000'], ['vs Q2', '+24% growth']],
  },
  {
    q: 'Flag any regions that declined.',
    ref: 'E12', formula: '=FILTER(A2:A12, E2:E12<0)',
    cells: [[11, 'A'], [11, 'E']],
    tint: 'rgba(239,68,68,0.14)',
    answer: 'One region declined this quarter:',
    bullets: [['Abuja', '−4%  (£26,000 → £25,000)']],
  },
  {
    q: 'What is the average growth rate?',
    ref: 'E13', formula: '=AVERAGE(E2:E12)',
    cells: [[2, 'E'], [4, 'E'], [6, 'E'], [8, 'E'], [10, 'E']],
    tint: 'rgba(124,58,237,0.14)',
    answer: 'Average growth across all regions:',
    bullets: [['Avg. change', '+18.4%'], ['Trend', 'Strong upward']],
  },
];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function startSheetsAiDemo(canvas: HTMLElement): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return () => {};

  const chat = canvas.querySelector<HTMLElement>('[data-dc-tpl="187"]');
  const input = canvas.querySelector<HTMLInputElement>('[data-dc-tpl="226"]');
  const refBox = canvas.querySelector<HTMLElement>('[data-dc-tpl="108"] .sc-interp')
    || canvas.querySelector<HTMLElement>('[data-dc-tpl="108"]');
  const formulaBar = canvas.querySelector<HTMLInputElement>('[data-dc-tpl="110"]');
  const rows = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="118"]'));
  if (!chat || rows.length < 2) return () => {};

  // Build a [rowIndex][colLetter] -> cell element map. Row 0 is the header
  // (Region/Product/...). Each row's children: [row-number span, then data
  // cells tpl 121]. Data cells are the tpl-121 elements in document order.
  const cellAt = (rowIdx: number, col: string): HTMLElement | null => {
    const row = rows[rowIdx];
    if (!row) return null;
    const dataCells = Array.from(row.querySelectorAll<HTMLElement>('[data-dc-tpl="121"]'));
    const ci = COLS.indexOf(col);
    return dataCells[ci] || null;
  };

  let cancelled = false;
  const timers: number[] = [];
  const wait = (ms: number) => new Promise<void>((r) => { timers.push(window.setTimeout(r, ms)); });

  const MAX_TURNS = 4;
  const trim = () => { while (chat.children.length > MAX_TURNS) chat.removeChild(chat.firstElementChild!); };
  const scrollDown = () => { chat.scrollTop = chat.scrollHeight; };

  const addUser = (text: string) => {
    const turn = document.createElement('div');
    turn.style.cssText = 'display:flex;flex-direction:column;gap:9px;';
    turn.style.animation = `tmai-in 0.3s ${ease} both`;
    turn.innerHTML = `<div style="margin-left:22px;background:rgb(243,244,251);border:1px solid rgb(236,238,247);border-radius:10px 10px 2px;padding:9px 11px;font-size:11.5px;line-height:1.45;color:rgb(42,49,80);">${esc(text)}</div>`;
    chat.appendChild(turn); trim(); scrollDown();
  };

  const addTyping = () => {
    const turn = document.createElement('div');
    turn.style.cssText = 'display:flex;flex-direction:column;gap:9px;';
    turn.innerHTML = `<span class="tmai-typing" style="align-self:flex-start;display:inline-flex;align-items:center;gap:3px;height:22px;padding:0 10px;border-radius:11px;background:rgb(240,241,248);"><span></span><span></span><span></span></span>`;
    chat.appendChild(turn); trim(); scrollDown();
    return turn;
  };

  const addAnswer = (a: Ask) => {
    const turn = document.createElement('div');
    turn.style.cssText = 'display:flex;flex-direction:column;gap:9px;';
    turn.style.animation = `tmai-in 0.3s ${ease} both`;
    const bullets = (a.bullets || [])
      .map(([label, val]) =>
        `<button style="display:flex;gap:8px;text-align:left;border:none;background:transparent;padding:3px 4px;margin:0 -4px;border-radius:6px;cursor:pointer;font-family:inherit;align-items:center;">` +
        `<span style="width:7px;height:7px;border-radius:50%;background:${PURPLE};flex:0 0 auto;"></span>` +
        `<span style="display:flex;flex-direction:column;gap:1px;"><span style="font-size:11.5px;font-weight:700;color:rgb(11,20,55);">${esc(label)}</span><span style="font-size:10.5px;color:rgb(107,115,144);"><b style="color:${GREEN};">${esc(val)}</b></span></span>` +
        `</button>`)
      .join('');
    turn.innerHTML =
      `<div style="display:flex;gap:7px;align-items:flex-start;">` +
      `<span style="width:20px;height:20px;border-radius:50%;background:linear-gradient(145deg,rgb(99,102,241),${PURPLE});display:grid;place-items:center;flex:0 0 auto;"><span style="font-family:'Material Symbols Rounded';font-size:12px;color:#fff;">auto_awesome</span></span>` +
      `<div style="display:flex;flex-direction:column;gap:5px;min-width:0;"><div style="font-size:11.5px;line-height:1.5;color:rgb(42,49,80);">${esc(a.answer)}</div>${bullets}</div>` +
      `</div>`;
    chat.appendChild(turn); trim(); scrollDown();
  };

  // Type the question into the AI composer, char by char.
  const typeQuestion = async (text: string) => {
    if (!input) return;
    for (let i = 1; i <= text.length && !cancelled; i++) {
      input.setAttribute('value', text.slice(0, i));
      input.value = text.slice(0, i);
      await wait(22);
    }
    await wait(260);
    input.setAttribute('value', ''); input.value = '';
  };

  // Apply the sheet reaction: ref box, formula bar, cell highlights.
  const applied: Array<{ el: HTMLElement; bg: string; bs: string }> = [];
  const clearHighlights = () => {
    applied.forEach(({ el, bg, bs }) => { el.style.background = bg; el.style.boxShadow = bs; });
    applied.length = 0;
  };
  const runOnSheet = (a: Ask) => {
    if (refBox) refBox.textContent = a.ref;
    if (formulaBar) { formulaBar.setAttribute('value', a.formula); formulaBar.value = a.formula; }
    clearHighlights();
    a.cells.forEach(([r, c], i) => {
      const el = cellAt(r, c);
      if (!el) return;
      applied.push({ el, bg: el.style.background, bs: el.style.boxShadow });
      timers.push(window.setTimeout(() => {
        el.style.transition = `background 0.3s ${ease}, box-shadow 0.3s ${ease}`;
        el.style.background = a.tint;
        el.style.boxShadow = `inset 0 0 0 1px ${PURPLE}`;
      }, i * 70));
    });
  };

  const run = async () => {
    await wait(900);
    let idx = 0;
    while (!cancelled) {
      const a = SCRIPT[idx % SCRIPT.length];
      await typeQuestion(a.q);
      if (cancelled) return;
      addUser(a.q);
      runOnSheet(a);
      await wait(600);
      const typing = addTyping();
      await wait(1100);
      if (cancelled) return;
      typing.remove();
      addAnswer(a);
      await wait(3600);
      clearHighlights();
      idx += 1;
      await wait(500);
    }
  };
  run();

  return () => {
    cancelled = true;
    timers.forEach(clearTimeout);
    clearHighlights();
  };
}
