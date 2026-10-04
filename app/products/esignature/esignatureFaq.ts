// FAQ accordion for the Snaarp Sign page (tpl 424 item / 425 button /
// 426 chevron / 428 answer panel). The standalone bundle expands one answer at
// a time on click; the static capture only kept the first answer in the DOM,
// so this controller injects the remaining answers (from the Q->A map extracted
// headless from the bundle) and wires an exclusive-open accordion with smooth
// height + chevron animation. Honors prefers-reduced-motion. Returns cleanup.

const ANSWERS: Record<string, string> = {
  'What is Snaarp Sign?':
    'Snaarp Sign is an e-signature app for business. Upload a document, add signers, place signature and form fields, send it for signature and track every step until it’s completed.',
  'Can multiple people sign the same document?':
    'Yes. Add as many signers as you need, give each their own fields, and choose whether they sign at the same time or one after another in a set order.',
  'What types of fields can I add?':
    'Signature, initials, name, email, phone, company, date, text, multiline text, checkboxes, radio buttons, dropdown selections and stamps — each can be marked required.',
  'Can I create reusable templates?':
    'Yes. Save any prepared document as a template with its signer roles and fields in place, then reuse it for contracts, NDAs, offer letters and approvals.',
  'Is there an audit trail?':
    'Every document has a full audit trail — when it was sent, viewed and signed, by whom, from which IP and device — plus a certificate of completion attached to the signed copy.',
  'Can I set reminders?':
    'Yes. Snaarp Sign can remind signers automatically every 1, 2, 3 or 7 days, and you can send a manual reminder at any time. You can also set documents to expire.',
  'Is my data secure?':
    'Documents are encrypted in transit and at rest, completed files are sealed against tampering, and signers can be verified with one-time codes by email or SMS.',
  'Does Snaarp Sign work with other Snaarp apps?':
    'Yes. Prepare files in Snaarp Doc or PDF, send links through Snaarp Mail, link agreements to deals in Snaarp CRM and store signed copies in Snaarp Drive automatically.',
};

const PANEL_STYLE =
  'padding: 0px 20px; font-size: 14.5px; line-height: 1.6; color: rgb(91, 96, 128); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

export function startEsignatureFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="424"]'));
  if (!items.length) return () => {};

  type Item = { wrap: HTMLElement; btn: HTMLElement; chev: HTMLElement; panel: HTMLElement };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="425"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="426"]');
    const q =
      btn?.querySelector('.sc-interp')?.textContent?.trim() ||
      btn?.textContent?.trim() ||
      '';
    if (!btn || !chev) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="428"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '428');
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
