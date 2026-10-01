// "Edit. Annotate. Protect." section (tpl 254, #edit) — self-driving loop.
// In the standalone bundle each checklist row activates on click and the Q3
// report mockup reacts. Here the list auto-cycles from the first row onward,
// moving the "On" badge + active styling down the list, and the mockup
// demonstrates the matching capability (edit caret, highlight, redaction,
// watermark + page link, signature, AI insight). The floating note reword to
// match. Rows stay clickable (click jumps + pauses the loop ~6s). Honors
// prefers-reduced-motion (static representative state, no cycling).
//
// Returns a cleanup function.

const PURPLE = 'rgb(124, 58, 237)';
const ACTIVE_BG = 'rgb(244, 241, 255)';
const ACTIVE_FG = 'rgb(42, 28, 143)';
const IDLE_FG = 'rgb(38, 43, 76)';

type Row = {
  note: string;        // handwritten note text
  icon: string;        // material icon for the floating cursor
  cursor: [number, number]; // left/top of the cursor over the page
};

// Cursor coordinates are relative to the mock root (tpl 271). The toolbar +
// tab bar occupy the top ~95px, so keep the floating cursor over the document
// page body (y >= ~150) and clear of the right-side note card (x <= ~470).
const ROWS: Row[] = [
  { note: 'Just fix that typo…',             icon: 'edit_square',    cursor: [300, 150] },
  { note: 'Great progress! Let’s highlight this.', icon: 'ink_highlighter', cursor: [250, 240] },
  { note: 'Hide the private bits.',          icon: 'ink_eraser',     cursor: [250, 330] },
  { note: 'Stamp & number every page.',      icon: 'approval',       cursor: [430, 180] },
  { note: 'Sign, then send it off.',         icon: 'draw',           cursor: [360, 360] },
  { note: 'Let AI do the heavy lifting.',    icon: 'auto_awesome',   cursor: [300, 300] },
];

export function startPdfEditSection(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const timers = new Set<number>();
  const after = (ms: number, fn: () => void) => {
    const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
    return id;
  };

  const list = root.querySelector<HTMLElement>('[data-pdf-editlist]');
  const mock = root.querySelector<HTMLElement>('[data-pdf-editmock]');
  if (!list || !mock) return () => {};

  const rowBtns = Array.from(list.querySelectorAll<HTMLButtonElement>('[data-pdf-editrow]'))
    .sort((a, b) => Number(a.dataset.pdfEditrow) - Number(b.dataset.pdfEditrow));
  const badgeOf = (b: HTMLElement) => b.querySelector<HTMLElement>('[data-pdf-editbadge]');

  const highlight = mock.querySelector<HTMLElement>('[data-pdf-edithl]');
  const cursor = mock.querySelector<HTMLElement>('[data-pdf-editcursor]');
  const cursorIcon = mock.querySelector<HTMLElement>('[data-pdf-editcursor-icon]');
  const note = mock.querySelector<HTMLElement>('[data-pdf-editnote]');

  // ── injected overlays on the Q3 page (created once, toggled per row) ──
  const page = mock.querySelector<HTMLElement>('[data-dc-tpl="317"]'); // the white page
  const mk = (html: string, parent: HTMLElement) => {
    const d = document.createElement('div');
    d.innerHTML = html.trim();
    const el = d.firstElementChild as HTMLElement;
    parent.appendChild(el);
    return el;
  };

  const overlays = page
    ? {
        // edit caret in the title
        caret: mk(`<span style="position:absolute;left:92px;top:30px;width:2px;height:30px;background:${PURPLE};opacity:0;transition:opacity .2s;z-index:9;"></span>`, page),
        // redaction bars over the body text lines
        redact: mk(`<div style="position:absolute;left:24px;top:230px;display:flex;flex-direction:column;gap:7px;opacity:0;transition:opacity .3s;z-index:8;">
            <span style="height:9px;width:150px;background:rgb(14,18,56);border-radius:2px;"></span>
            <span style="height:9px;width:136px;background:rgb(14,18,56);border-radius:2px;"></span>
            <span style="height:9px;width:146px;background:rgb(14,18,56);border-radius:2px;"></span>
          </div>`, page),
        // watermark + page number + link
        watermark: mk(`<div style="position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;opacity:0;transition:opacity .3s;z-index:7;"><span style="transform:rotate(-30deg);font-size:36px;font-weight:800;letter-spacing:.08em;color:rgba(229,72,77,.14);border:3px solid rgba(229,72,77,.14);padding:4px 14px;border-radius:8px;">CONFIDENTIAL</span></div>`, page),
        pagefoot: mk(`<div style="position:absolute;left:24px;bottom:12px;display:flex;gap:8px;align-items:center;font-size:8px;color:rgb(138,143,173);font-weight:600;opacity:0;transition:opacity .3s;z-index:8;"><span>Page 1 of 3</span><span style="color:${PURPLE};">· snaarp.link/q3-report</span></div>`, page),
        // signature stamp
        sign: mk(`<div style="position:absolute;left:250px;top:330px;opacity:0;transform:translateY(4px);transition:opacity .28s, transform .28s;z-index:9;">
            <span style="font-family:Caveat,cursive;font-size:26px;font-weight:700;color:rgb(44,58,184);line-height:1;">V. Okafor</span>
            <div style="font-size:7px;color:rgb(18,161,80);font-weight:700;margin-top:1px;">Approved · 01 Oct 2026</div>
          </div>`, page),
        // AI insight chip
        ai: mk(`<div style="position:absolute;left:24px;top:300px;display:flex;align-items:center;gap:6px;background:rgb(246,242,255);border:1px solid rgb(230,224,255);border-radius:8px;padding:5px 8px;max-width:200px;opacity:0;transform:translateY(4px);transition:opacity .28s, transform .28s;z-index:9;">
            <span style="font-family:'Material Symbols Rounded';font-size:13px;color:${PURPLE};">auto_awesome</span>
            <span style="font-size:8px;font-weight:600;color:rgb(14,18,56);line-height:1.3;">AI: Revenue up 24%, led by EMEA growth.</span>
          </div>`, page),
      }
    : null;

  const clearOverlays = () => {
    if (!overlays) return;
    overlays.caret.style.opacity = '0';
    overlays.redact.style.opacity = '0';
    overlays.watermark.style.opacity = '0';
    overlays.pagefoot.style.opacity = '0';
    overlays.sign.style.opacity = '0';
    overlays.sign.style.transform = 'translateY(4px)';
    overlays.ai.style.opacity = '0';
    overlays.ai.style.transform = 'translateY(4px)';
    if (highlight) highlight.style.background = 'transparent';
  };

  const setActiveRow = (idx: number) => {
    rowBtns.forEach((b, i) => {
      const on = i === idx;
      b.style.background = on ? ACTIVE_BG : 'transparent';
      b.style.color = on ? ACTIVE_FG : IDLE_FG;
      b.style.fontWeight = on ? '700' : '500';
      const badge = badgeOf(b);
      if (badge) badge.style.display = on ? 'inline-block' : 'none';
    });
  };

  const applyRow = (idx: number) => {
    const r = ROWS[idx];
    setActiveRow(idx);
    clearOverlays();
    // move cursor + reword note
    if (cursor) { cursor.style.left = r.cursor[0] + 'px'; cursor.style.top = r.cursor[1] + 'px'; }
    if (cursorIcon) cursorIcon.textContent = r.icon;
    if (note) {
      note.style.opacity = '0';
      after(reduce ? 0 : 160, () => { note.textContent = r.note; note.style.opacity = '1'; });
    }
    if (!overlays) return;
    switch (idx) {
      case 0: overlays.caret.style.opacity = '1'; break;                 // Add/edit text
      case 1: if (highlight) highlight.style.background = 'rgb(255, 229, 138)'; break; // Highlight
      case 2: overlays.redact.style.opacity = '1'; break;                // Redact
      case 3: overlays.watermark.style.opacity = '1'; overlays.pagefoot.style.opacity = '1'; break; // Watermark + page/link
      case 4: overlays.sign.style.opacity = '1'; overlays.sign.style.transform = 'translateY(0)'; break; // Sign
      case 5: overlays.ai.style.opacity = '1'; overlays.ai.style.transform = 'translateY(0)'; break;     // AI
    }
  };

  // ── loop ─────────────────────────────────────────────────────────
  let idx = 0;
  let paused = false;
  let loopId = 0;
  const STEP_MS = 2600;
  const tick = () => {
    if (paused) return;
    applyRow(idx);
    idx = (idx + 1) % ROWS.length;
  };

  // ── real interaction ─────────────────────────────────────────────
  let resumeId = 0;
  const pause = () => {
    paused = true;
    if (resumeId) window.clearTimeout(resumeId);
    resumeId = window.setTimeout(() => { paused = false; }, 6000);
    timers.add(resumeId);
  };
  const onRowClick = (e: Event) => {
    const i = Number((e.currentTarget as HTMLElement).dataset.pdfEditrow);
    if (Number.isNaN(i)) return;
    pause();
    idx = i;
    applyRow(i);
    idx = (i + 1) % ROWS.length;
  };
  rowBtns.forEach((b) => b.addEventListener('click', onRowClick));

  // ── kick off ─────────────────────────────────────────────────────
  if (reduce) {
    applyRow(1); // the bundle's default "Highlight" state
  } else {
    applyRow(0); // start from the first row, as requested
    idx = 1;
    loopId = window.setInterval(tick, STEP_MS);
    timers.add(loopId);
  }

  // ── cleanup ──────────────────────────────────────────────────────
  return () => {
    paused = true;
    timers.forEach((id) => { window.clearTimeout(id); window.clearInterval(id); });
    if (loopId) window.clearInterval(loopId);
    rowBtns.forEach((b) => b.removeEventListener('click', onRowClick));
    if (overlays) Object.values(overlays).forEach((n) => n.remove());
  };
}
