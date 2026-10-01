// FAQ accordion for the Snaarp PDF page (tpl 540 / 544 / 545 / 547 / 549).
// The standalone bundle expands one answer at a time on click. The static
// capture only kept the first answer in the DOM, so this controller injects
// the remaining answers (from the Q->A map extracted from the bundle) and wires
// an exclusive-open accordion with smooth height + chevron animation.
// Honors prefers-reduced-motion (instant open/close). Returns a cleanup fn.

const ANSWERS: Record<string, string> = {
  'What is Snaarp PDF?':
    'Snaarp PDF is an all-in-one PDF workspace. Edit, convert, sign, redact, translate and organise documents in your browser or on mobile — with AI built in.',
  'Can I edit an existing PDF?':
    'Yes. Change text, swap images, move elements and add links directly in the file. Snaarp keeps your original fonts and layout intact.',
  'What formats can I convert PDFs into?':
    'Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG and SVG. You can also turn Word documents, images and SVG files into PDFs.',
  'Can I redact sensitive information?':
    'Yes. Redaction permanently removes the underlying text and images rather than just covering them. AI can find names, emails and account numbers for you.',
  'Can I sign PDFs?':
    'Draw, type or upload your signature, request signatures from others and track who has signed — all from the same document.',
  'Can I translate PDFs?':
    'Translate whole documents into 40+ languages while keeping the original layout, images and formatting.',
  'Does Snaarp PDF include AI tools?':
    'Yes — summarise, translate, improve writing, extract key information, remove watermarks and turn any PDF into a presentation in seconds.',
  'Can I manage pages (reorder, delete, etc.)?':
    'Drag to reorder, rotate, delete, split, merge or insert pages. Thumbnails update instantly so you always see the final document.',
  'Is my data secure?':
    'Files are encrypted in transit and at rest with AES-256. You control sharing permissions and link expiry, and your documents are never used to train AI.',
  'Does Snaarp PDF work with other Snaarp apps?':
    'Open files from Snaarp Drive, attach them in Mail, discuss them in Teams and Meet, or turn them into Docs, Sheets and Slides.',
};

const PANEL_STYLE =
  'padding: 0px 14px; font-size: 14px; line-height: 1.6; color: rgb(74, 80, 114); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

export function startPdfFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const faq = root.querySelector<HTMLElement>('[data-pdf-faq]');
  if (!faq) return () => {};

  const items = Array.from(faq.querySelectorAll<HTMLElement>('[data-dc-tpl="544"]'));

  type Item = { wrap: HTMLElement; btn: HTMLElement; chev: HTMLElement; panel: HTMLElement; inner: HTMLElement };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="545"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="547"]');
    const q = wrap.querySelector<HTMLElement>('[data-dc-tpl="546"]')?.textContent?.trim() || '';
    if (!btn || !chev) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="549"]');
    if (!panel) {
      // create the answer panel from the Q->A map
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '549');
      panel.setAttribute('style', PANEL_STYLE);
      const span = document.createElement('span');
      span.textContent = ANSWERS[q] || '';
      panel.appendChild(span);
      wrap.appendChild(panel);
    } else {
      // normalize the pre-existing (open) panel to the animatable style
      panel.setAttribute('style', PANEL_STYLE);
    }
    built.push({ wrap, btn, chev, panel, inner: panel.firstElementChild as HTMLElement || panel });
  });

  const setOpen = (it: Item, open: boolean, animate = true) => {
    const chev = it.chev;
    chev.style.transform = open ? 'rotate(180deg)' : 'none';
    it.wrap.style.borderColor = open ? 'rgb(201, 191, 250)' : 'rgb(232, 230, 242)';
    const target = it.panel;
    if (!animate || reduce) {
      target.style.height = open ? 'auto' : '0px';
      target.style.opacity = open ? '1' : '0';
      target.style.paddingBottom = open ? '14px' : '0px';
      return;
    }
    if (open) {
      target.style.paddingBottom = '14px';
      target.style.opacity = '1';
      const h = target.scrollHeight;
      target.style.height = h + 'px';
      // after the transition, let it be auto so it reflows on resize
      window.setTimeout(() => { if (target.style.height !== '0px') target.style.height = 'auto'; }, 300);
    } else {
      // from auto -> fixed -> 0 so the transition runs
      target.style.height = target.scrollHeight + 'px';
      requestAnimationFrame(() => {
        target.style.height = '0px';
        target.style.opacity = '0';
        target.style.paddingBottom = '0px';
      });
    }
  };

  let openIdx = 0;
  built.forEach((it, i) => setOpen(it, i === 0, false));

  const handlers: Array<() => void> = [];
  built.forEach((it, i) => {
    const onClick = () => {
      if (openIdx === i) {
        // allow closing the open one
        setOpen(it, false);
        openIdx = -1;
      } else {
        if (openIdx >= 0 && built[openIdx]) setOpen(built[openIdx], false);
        setOpen(it, true);
        openIdx = i;
      }
    };
    it.btn.addEventListener('click', onClick);
    handlers.push(() => it.btn.removeEventListener('click', onClick));
  });

  return () => {
    handlers.forEach((off) => off());
  };
}
