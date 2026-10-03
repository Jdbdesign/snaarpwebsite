// FAQ accordion for the Snaarp Work Drive page (tpl 490 item / 491 button /
// 492 chevron / 494 answer panel). The standalone bundle expands one answer at
// a time on click; the static capture only kept the first answer in the DOM,
// so this controller injects the remaining answers (from the Q->A map extracted
// headless from the bundle) and wires an exclusive-open accordion with smooth
// height + chevron animation. Honors prefers-reduced-motion. Returns cleanup.

const ANSWERS: Record<string, string> = {
  'What is Snaarp Drive?':
    'Snaarp Drive is secure cloud storage for business. Store, organise, share and access every file your team creates — and use it as a data room when you need extra control.',
  'How large a file can I upload and share?':
    'There’s no practical size limit. Upload and share multi-gigabyte videos, design files and archives without compression or email attachment caps.',
  'Can I share files with people outside my organisation?':
    'Yes. Send a secure link to customers, suppliers or partners, with optional expiry dates, passwords and download controls.',
  'Can I use Snaarp Drive as a data room?':
    'Yes. Create a restricted space, invite investors or advisers with view-only access, and track every view and download for due diligence, M&A or board papers.',
  'Does Snaarp Drive work with other Snaarp apps?':
    'Snaarp Drive connects with Mail, Meet, Teams, Documents, Sheets, CRM and HR, so attachments, recordings and shared files are saved in one place.',
  'Can I set permissions and expiry dates?':
    'Choose viewer, commenter or editor access for each person, set links to expire after 24 hours, 7 days or 30 days, and revoke access at any time.',
  'Can I access my files on mobile devices?':
    'Yes. Use the iOS and Android apps, the desktop apps for Windows, Mac and Linux, or any modern browser. Files stay in sync everywhere.',
  'Is my data secure?':
    'Files are encrypted in transit and at rest, backed up across secure infrastructure, and protected by admin controls and detailed audit logs.',
};

const PANEL_STYLE =
  'padding: 0px 22px; font-size: 14.5px; line-height: 1.6; color: rgb(91, 99, 128); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

export function startDriveFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="490"]'));
  if (!items.length) return () => {};

  type Item = { wrap: HTMLElement; btn: HTMLElement; chev: HTMLElement; panel: HTMLElement };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="491"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="492"]');
    const q =
      btn?.querySelector('.sc-interp')?.textContent?.trim() ||
      btn?.textContent?.trim() ||
      '';
    if (!btn || !chev) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="494"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '494');
      panel.setAttribute('style', PANEL_STYLE);
      const span = document.createElement('span');
      span.textContent = ANSWERS[q] || '';
      panel.appendChild(span);
      wrap.appendChild(panel);
    } else {
      // normalise the pre-existing (open) first panel to the animatable style
      panel.setAttribute('style', PANEL_STYLE);
    }
    built.push({ wrap, btn, chev, panel });
  });

  const setOpen = (it: Item, open: boolean, animate = true) => {
    it.chev.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    it.wrap.style.borderColor = open ? 'rgb(185, 166, 250)' : 'rgb(230, 234, 244)';
    const t = it.panel;
    if (!animate || reduce) {
      t.style.height = open ? 'auto' : '0px';
      t.style.opacity = open ? '1' : '0';
      t.style.paddingTop = open ? '0px' : '0px';
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
