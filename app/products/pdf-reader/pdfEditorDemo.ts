// Hero PDF-editor "guided tour" — a self-driving, looping demo of the toolbar.
// In the standalone bundle each tool reacts on click; a static capture loses
// that. This engine walks the toolbar on a loop: it highlights the active tool
// (as the bundle does) and visibly transforms the document to show what the
// tool does — add text, edit text, redact, highlight, sign, annotate,
// watermark, translate — then resets and repeats. Everything also responds to
// real hover/click; the loop pauses while the user interacts and resumes
// shortly after. Honors prefers-reduced-motion (shows a representative final
// state, no auto-cycling).
//
// Returns a cleanup function that stops all timers and removes injected nodes.

const PURPLE = 'rgb(124, 58, 237)';
const PURPLE_SOFT = 'rgb(239, 235, 255)';
const MUTE = 'rgb(62, 68, 102)';

const EN_TITLE = 'Business\nProposal';
const ES_TITLE = 'Propuesta\nde Negocio';
const EN_SUB = 'Innovative solutions for a brighter tomorrow.';
const ES_SUB = 'Soluciones innovadoras para un mañana mejor.';

// The scripted scene. Each beat names a toolbar tool (by its button title),
// a caption, and an `apply` that mutates the canvas. `reset` runs before every
// cycle to restore the pristine document.
type Beat = { tool: string; caption: string };
const SCENE: Beat[] = [
  { tool: 'Add Text', caption: 'Add text anywhere on the page' },
  { tool: 'Edit Text', caption: 'Edit existing text in place' },
  { tool: 'Highlight', caption: 'Highlight what matters' },
  { tool: 'Redact', caption: 'Redact sensitive information' },
  { tool: 'Sign', caption: 'Drop in your signature' },
  { tool: 'Annotate', caption: 'Leave comments & annotations' },
  { tool: 'Watermark', caption: 'Stamp a watermark' },
  { tool: 'Translate', caption: 'Translate with AI' },
];

export function startPdfEditorDemo(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const timers = new Set<number>();
  const after = (ms: number, fn: () => void) => {
    const id = window.setTimeout(() => { timers.delete(id); fn(); }, ms);
    timers.add(id);
    return id;
  };

  const canvas = root.querySelector<HTMLElement>('[data-pdf-canvas]');
  const toolbar = root.querySelector<HTMLElement>('[data-pdf-toolbar]');
  if (!canvas || !toolbar) return () => {};

  const toolBtns = Array.from(toolbar.querySelectorAll<HTMLButtonElement>('[data-dc-tpl="109"]'));
  const btnByTool = (name: string) =>
    toolBtns.find((b) => (b.getAttribute('title') || '').toLowerCase() === name.toLowerCase()) || null;

  const title = canvas.querySelector<HTMLTextAreaElement>('[data-pdf-title]');
  const subtitle = canvas.querySelector<HTMLElement>('[data-pdf-subtitle]');
  const highlight = canvas.querySelector<HTMLElement>('[data-pdf-highlight]');
  const signature = canvas.querySelector<HTMLElement>('[data-pdf-signature]');

  // ── injected overlay nodes (created once, toggled per beat) ──────
  const mk = (html: string) => {
    const d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild as HTMLElement;
  };

  // Watermark (matches the bundle: diagonal red CONFIDENTIAL at 16%).
  const watermark = mk(
    `<div data-pdf-wm style="position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;opacity:0;transition:opacity .35s ease;z-index:6;">
       <span style="transform:rotate(-32deg);font-size:40px;font-weight:800;letter-spacing:.08em;color:rgba(229,72,77,.16);border:3px solid rgba(229,72,77,.16);padding:4px 14px;border-radius:8px;">CONFIDENTIAL</span>
     </div>`,
  );
  // Redaction bars over the paragraph.
  const redaction = mk(
    `<div data-pdf-redact style="position:absolute;left:22px;top:158px;width:232px;display:flex;flex-direction:column;gap:3px;pointer-events:none;opacity:0;transition:opacity .3s ease;z-index:5;">
       <span style="height:12px;width:70%;background:rgb(14,18,56);border-radius:2px;"></span>
       <span style="height:12px;width:92%;background:rgb(14,18,56);border-radius:2px;"></span>
       <span style="height:12px;width:48%;background:rgb(14,18,56);border-radius:2px;"></span>
     </div>`,
  );
  // "Add text" caret + new text snippet.
  const addText = mk(
    `<div data-pdf-addtext style="position:absolute;left:150px;top:300px;display:flex;align-items:center;gap:2px;opacity:0;transform:translateY(4px);transition:opacity .25s ease, transform .25s ease;z-index:7;">
       <span style="font-size:10px;font-weight:700;color:rgb(14,18,56);">Approved ✓</span>
       <span data-pdf-caret style="width:1.5px;height:13px;background:${PURPLE};display:inline-block;"></span>
     </div>`,
  );
  // Annotation comment bubble.
  const annotation = mk(
    `<div data-pdf-annot style="position:absolute;right:10px;top:170px;width:120px;background:#fff;border:1px solid rgb(236,233,248);border-radius:8px 8px 8px 2px;box-shadow:rgba(90,50,200,.28) 0px 10px 24px -12px;padding:7px 9px;opacity:0;transform:translateY(6px) scale(.96);transform-origin:top right;transition:opacity .28s ease, transform .28s cubic-bezier(.22,1,.36,1);z-index:8;">
       <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px;"><span style="width:14px;height:14px;border-radius:50%;background:${PURPLE};color:#fff;font-size:7px;display:grid;place-items:center;font-weight:800;">V</span><span style="font-size:7.5px;font-weight:700;color:rgb(14,18,56);">Victor</span></div>
       <div style="font-size:8px;line-height:1.4;color:${MUTE};">Can we tighten this paragraph?</div>
     </div>`,
  );
  // "Edit text" caret inside the title.
  const titleCaret = mk(
    `<span data-pdf-titlecaret style="position:absolute;left:150px;top:24px;width:2px;height:26px;background:${PURPLE};opacity:0;transition:opacity .2s ease;z-index:7;"></span>`,
  );
  // Caption pill.
  const caption = mk(
    `<div data-pdf-caption style="position:absolute;left:10px;bottom:10px;z-index:20;display:flex;align-items:center;gap:6px;padding:5px 10px 5px 7px;border-radius:999px;background:rgba(255,255,255,.94);backdrop-filter:blur(5px);border:1px solid rgb(236,233,248);box-shadow:rgba(90,50,200,.26) 0px 8px 20px -10px;font-size:9.5px;font-weight:700;color:rgb(14,18,56);opacity:0;transform:translateY(6px);transition:opacity .3s ease, transform .3s cubic-bezier(.22,1,.36,1);">
       <span data-pdf-caption-ic style="font-family:'Material Symbols Rounded';font-size:12px;color:#fff;background:${PURPLE};width:17px;height:17px;border-radius:50%;display:grid;place-items:center;">edit</span>
       <span data-pdf-caption-tx style="white-space:nowrap;"></span>
     </div>`,
  );

  canvas.appendChild(watermark);
  canvas.appendChild(redaction);
  canvas.appendChild(addText);
  canvas.appendChild(annotation);
  canvas.appendChild(titleCaret);
  canvas.appendChild(caption);
  const captionTx = caption.querySelector<HTMLElement>('[data-pdf-caption-tx]');
  const captionIc = caption.querySelector<HTMLElement>('[data-pdf-caption-ic]');

  const TOOL_ICON: Record<string, string> = {
    'Add Text': 'edit_square', 'Edit Text': 'edit', Highlight: 'ink_highlighter',
    Redact: 'ink_eraser', Sign: 'draw', Annotate: 'chat_bubble',
    Watermark: 'approval', Translate: 'translate',
  };

  // ── state helpers ────────────────────────────────────────────────
  const setActiveTool = (name: string) => {
    toolBtns.forEach((b) => {
      const on = (b.getAttribute('title') || '').toLowerCase() === name.toLowerCase();
      b.style.background = on ? PURPLE_SOFT : 'transparent';
      b.style.color = on ? PURPLE : MUTE;
    });
  };
  const setCaption = (name: string, text: string) => {
    if (!captionTx || !captionIc) return;
    caption.style.opacity = '0';
    caption.style.transform = 'translateY(6px)';
    after(reduce ? 0 : 160, () => {
      captionIc.textContent = TOOL_ICON[name] || 'bolt';
      captionTx.textContent = text;
      caption.style.opacity = '1';
      caption.style.transform = 'translateY(0)';
    });
  };

  const resetDoc = () => {
    if (title) { title.value = EN_TITLE; title.style.background = 'transparent'; }
    if (subtitle) subtitle.textContent = EN_SUB;
    if (highlight) highlight.style.background = 'transparent';
    if (signature) signature.style.opacity = '0';
    watermark.style.opacity = '0';
    redaction.style.opacity = '0';
    addText.style.opacity = '0';
    addText.style.transform = 'translateY(4px)';
    annotation.style.opacity = '0';
    annotation.style.transform = 'translateY(6px) scale(.96)';
    titleCaret.style.opacity = '0';
  };

  const applyBeat = (b: Beat) => {
    setActiveTool(b.tool);
    setCaption(b.tool, b.caption);
    switch (b.tool) {
      case 'Add Text':
        addText.style.opacity = '1';
        addText.style.transform = 'translateY(0)';
        break;
      case 'Edit Text':
        titleCaret.style.opacity = '1';
        if (title) title.style.background = PURPLE_SOFT;
        break;
      case 'Highlight':
        if (highlight) highlight.style.background = 'rgb(213, 225, 251)';
        break;
      case 'Redact':
        redaction.style.opacity = '1';
        break;
      case 'Sign':
        if (signature) signature.style.opacity = '1';
        break;
      case 'Annotate':
        annotation.style.opacity = '1';
        annotation.style.transform = 'translateY(0) scale(1)';
        break;
      case 'Watermark':
        watermark.style.opacity = '1';
        break;
      case 'Translate':
        if (title) title.value = ES_TITLE;
        if (subtitle) subtitle.textContent = ES_SUB;
        break;
    }
  };
  // ── loop ─────────────────────────────────────────────────────────
  let paused = false;
  let idx = 0;
  let loopId = 0;
  const STEP_MS = 2600;

  const tick = () => {
    if (paused) return;
    // Reset to the pristine document before every beat so each tool
    // demonstrates its own single, clean effect (no stale highlight under a
    // redaction, etc.).
    resetDoc();
    applyBeat(SCENE[idx]);
    idx = (idx + 1) % SCENE.length;
  };

  // ── real interaction: pause the loop, react to the clicked tool ──
  let resumeId = 0;
  const pause = () => {
    paused = true;
    if (resumeId) window.clearTimeout(resumeId);
    resumeId = window.setTimeout(() => { paused = false; }, 6000);
    timers.add(resumeId);
  };
  const onToolClick = (e: Event) => {
    const btn = e.currentTarget as HTMLElement;
    const name = btn.getAttribute('title') || '';
    pause();
    resetDoc();
    const beat = SCENE.find((b) => b.tool.toLowerCase() === name.toLowerCase());
    if (beat) applyBeat(beat);
    else { setActiveTool(name); setCaption(name, name); }
  };
  toolBtns.forEach((b) => b.addEventListener('click', onToolClick));

  // ── kick off ─────────────────────────────────────────────────────
  resetDoc();
  if (reduce) {
    // representative static state: highlight + signature + caption.
    setActiveTool('Highlight');
    if (highlight) highlight.style.background = 'rgb(213, 225, 251)';
    if (signature) signature.style.opacity = '1';
    setCaption('Highlight', 'Edit, sign, redact, translate & more');
    caption.style.opacity = '1';
    caption.style.transform = 'translateY(0)';
  } else {
    tick();
    loopId = window.setInterval(tick, STEP_MS);
    timers.add(loopId);
  }

  // ── cleanup ──────────────────────────────────────────────────────
  return () => {
    paused = true;
    timers.forEach((id) => { window.clearTimeout(id); window.clearInterval(id); });
    if (loopId) window.clearInterval(loopId);
    toolBtns.forEach((b) => b.removeEventListener('click', onToolClick));
    [watermark, redaction, addText, annotation, titleCaret, caption].forEach((n) => n.remove());
    resetDoc();
  };
}
