// FAQ accordion for the Snaarp Slides page (tpl 370 item / 371 button /
// 372 chevron / 374 answer panel). The standalone bundle expands one answer at
// a time on click. The static capture only kept the first answer in the DOM,
// so this controller injects the remaining answers (Q->A map extracted from the
// bundle) and wires an exclusive-open accordion with smooth height + chevron
// animation.
//
// It is CLICK-DRIVEN, not auto-looping: opening an item changes the document
// height, so auto-cycling it would make the page jump. The user drives it, so
// the layout only moves in direct response to their own click. Honors
// prefers-reduced-motion (instant open/close). Returns a cleanup fn.

const ANSWERS: Record<string, string> = {
  'What is Snaarp Slides?':
    'Snaarp Slides is the AI presentation app in the Snaarp workspace. Create slides from a prompt, a document or your data, refine the design, collaborate with your team and present — all in one place.',
  'Can AI create a presentation for me?':
    'Yes. Describe what you need and Snaarp AI drafts the storyline, writes the headlines, picks layouts and builds the charts.',
  'Can I turn a document into a presentation?':
    'Upload a Word file, PDF or Snaarp Doc and Snaarp AI turns it into a structured deck — keeping your key points, figures and section order.',
  'Can I use data from Snaarp Sheet?':
    'Yes. Connect a Snaarp Sheet or upload an .xlsx or .csv file and Snaarp builds charts and key-number slides. Linked charts update when the data changes.',
  'Can several people work on the same presentation?':
    'Yes. Invite teammates to edit or view, see who’s on which slide in real time, leave comments and keep every version in history.',
  'Are there templates available?':
    'Hundreds — investor pitches, sales decks, project updates, training, reports and more. Every template works with any theme and can be filled in by AI.',
  'Where are my presentations stored?':
    'Securely in Snaarp Drive, encrypted at rest and in transit, with version history and access controls you manage.',
  'Does Snaarp Slides work with other Snaarp apps?':
    'Yes. Present live in Snaarp Meet, share through Snaarp Mail and Teams, pull files from Snaarp Drive and add customer insights from Snaarp CRM.',
};

const PANEL_STYLE =
  'padding: 0px 20px; font-size: 14.5px; line-height: 1.6; color: rgb(91, 96, 128); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

const OPEN_BORDER = 'rgb(201, 169, 255)';
const CLOSED_BORDER = 'rgb(237, 233, 244)';

export function startSlidesFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="370"]'));
  if (!items.length) return () => {};

  type Item = {
    wrap: HTMLElement;
    btn: HTMLElement;
    chev: HTMLElement;
    panel: HTMLElement;
  };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="371"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="372"]');
    const q =
      wrap.querySelector<HTMLElement>('[data-dc-tpl="371"] .sc-interp')?.textContent?.trim() || '';
    if (!btn || !chev) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="374"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '374');
      panel.setAttribute('style', PANEL_STYLE);
      const span = document.createElement('span');
      span.className = 'sc-interp';
      span.textContent = ANSWERS[q] || '';
      panel.appendChild(span);
      wrap.appendChild(panel);
    } else {
      // normalize the pre-existing (open) panel to the animatable style
      panel.setAttribute('style', PANEL_STYLE);
    }
    built.push({ wrap, btn, chev, panel });
  });

  const setOpen = (it: Item, open: boolean, animate = true) => {
    it.chev.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    it.wrap.style.borderColor = open ? OPEN_BORDER : CLOSED_BORDER;
    const target = it.panel;
    if (!animate || reduce) {
      target.style.height = open ? 'auto' : '0px';
      target.style.opacity = open ? '1' : '0';
      target.style.paddingBottom = open ? '18px' : '0px';
      return;
    }
    if (open) {
      target.style.paddingBottom = '18px';
      target.style.opacity = '1';
      target.style.height = target.scrollHeight + 'px';
      window.setTimeout(() => {
        if (target.style.height !== '0px') target.style.height = 'auto';
      }, 300);
    } else {
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
