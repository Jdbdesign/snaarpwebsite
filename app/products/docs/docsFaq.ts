// FAQ accordion for the Snaarp Document page (tpl 458 item / 459 button /
// 460 chevron / 462 answer panel). The standalone bundle expands one answer at
// a time on click; the static capture only kept the first answer in the DOM,
// so this controller injects the remaining answers (from the Q->A map extracted
// headless from the bundle) and wires an exclusive-open accordion with smooth
// height + chevron animation. Honors prefers-reduced-motion. Returns cleanup.

const ANSWERS: Record<string, string> = {
  'What is Snaarp Doc?':
    'Snaarp Doc is a document editor for business. Write, edit and collaborate on proposals, reports, contracts and notes, with AI built in and every file saved to Snaarp Drive.',
  'Does Snaarp Doc include AI?':
    'Yes. Snaarp AI can draft from a prompt, improve or shorten text, fix grammar, change tone, translate and turn paragraphs into bullet points — right inside your document.',
  'Can multiple people work on the same document?':
    'Yes. Your team can edit at the same time, leave comments and suggestions, tag colleagues with @mentions and see every change as it happens.',
  'Are templates available?':
    'Choose from ready-made templates for proposals, project plans, meeting notes, contracts, policies, reports and more, then make them your own.',
  'Where are my documents stored?':
    'Every document saves automatically to Snaarp Drive, organised in folders, with full version history and access from any device.',
  'Can I import documents from other formats?':
    'Yes. Import Word (.docx), PDF, RTF and plain text files, and export to .docx or PDF whenever you need to.',
  'Is my data secure?':
    'Documents are encrypted in transit and at rest, with permissions, link controls and an audit history that keep business content private.',
  'Does Snaarp Doc work with other Snaarp apps?':
    'Snaarp Doc connects with Mail, Teams, Meet, Drive, CRM and Sheets, so your documents flow wherever your work happens.',
};

const PANEL_STYLE =
  'padding: 0px 22px; font-size: 14.5px; line-height: 1.6; color: rgb(91, 99, 128); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

export function startDocsFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="458"]'));
  if (!items.length) return () => {};

  type Item = { wrap: HTMLElement; btn: HTMLElement; chev: HTMLElement; panel: HTMLElement };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="459"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="460"]');
    const q =
      btn?.querySelector('.sc-interp')?.textContent?.trim() ||
      btn?.textContent?.trim() ||
      '';
    if (!btn || !chev) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="462"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '462');
      panel.setAttribute('style', PANEL_STYLE);
      const span = document.createElement('span');
      span.textContent = ANSWERS[q] || '';
      panel.appendChild(span);
      wrap.appendChild(panel);
    } else {
      panel.setAttribute('style', PANEL_STYLE);
    }
    built.push({ wrap, btn, chev, panel });
  });

  const setOpen = (it: Item, open: boolean, animate = true) => {
    it.chev.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    it.wrap.style.borderColor = open ? 'rgb(197, 166, 250)' : 'rgb(230, 234, 244)';
    const t = it.panel;
    if (!animate || reduce) {
      t.style.height = open ? 'auto' : '0px';
      t.style.opacity = open ? '1' : '0';
      t.style.paddingBottom = open ? '18px' : '0px';
      return;
    }
    if (open) {
      t.style.paddingBottom = '18px';
      t.style.opacity = '1';
      t.style.height = t.scrollHeight + 'px';
      window.setTimeout(() => { if (t.style.height !== '0px') t.style.height = 'auto'; }, 300);
    } else {
      t.style.height = t.scrollHeight + 'px';
      requestAnimationFrame(() => {
        t.style.height = '0px';
        t.style.opacity = '0';
        t.style.paddingBottom = '0px';
      });
    }
  };

  let openIdx = 0;
  built.forEach((it, i) => setOpen(it, i === 0, false));

  const handlers: Array<() => void> = [];
  built.forEach((it, i) => {
    const onClick = () => {
      if (openIdx === i) {
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

  return () => handlers.forEach((off) => off());
}
