// FAQ accordion for the Snaarp Meet page (tpl 536 grid / 540 item / 541 button
// / 542 chevron / 544 panel). The standalone bundle expands one answer at a
// time on click; the static capture only kept the first answer in the DOM, so
// this controller injects the remaining answers (from the Q->A map extracted
// from the bundle) and wires an exclusive-open accordion with smooth height +
// chevron animation. Honors prefers-reduced-motion. Returns a cleanup fn.

const ANSWERS: Record<string, string> = {
  'What is Snaarp Meet?':
    'Snaarp Meet is a video meeting platform for business — HD video and audio, screen sharing, recording, chat and unlimited meeting time, all in one simple app.',
  'Are meetings really unlimited?':
    'Yes. There are no time limits on any meeting, whether it’s a 5-minute check-in or an all-day workshop — and no extra costs for longer calls.',
  'Can I record meetings?':
    'Hit Record during any meeting to capture video, audio and shared screens. Recordings are saved to Snaarp Drive with a searchable transcript.',
  'Do people outside my company need an account?':
    'No. Guests join from a link in their browser — no download or sign-up required. You control who’s admitted from the waiting room.',
  'Can I use Snaarp Meet with Google Meet or Teams?':
    'Yes. Snaarp Meet is included, but you can choose Google Meet or Microsoft Teams as your default and still schedule everything from Snaarp.',
  'What devices are supported?':
    'Join from any modern browser, the desktop apps for Windows and macOS, or the mobile apps for iOS and Android.',
  'Is Snaarp Meet secure?':
    'Meetings are encrypted in transit, with waiting rooms, meeting locks, host controls and admin policies built for business.',
  'Do I need Snaarp.me to use Snaarp Meet?':
    'No. Snaarp Meet works on its own. Connect Snaarp.me if you want booking pages that create meeting links automatically.',
};

const PANEL_STYLE =
  'padding: 0px 22px; font-size: 14.5px; line-height: 1.6; color: rgb(91, 99, 128); text-wrap: pretty; overflow: hidden; height: 0px; opacity: 0; transition: height .28s ease, opacity .28s ease, padding .28s ease;';

export function startMeetFaq(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-dc-tpl="540"]'));
  if (!items.length) return () => {};

  type Item = { wrap: HTMLElement; btn: HTMLElement; chev: HTMLElement | null; panel: HTMLElement };
  const built: Item[] = [];

  items.forEach((wrap) => {
    const btn = wrap.querySelector<HTMLElement>('[data-dc-tpl="541"]');
    const chev = wrap.querySelector<HTMLElement>('[data-dc-tpl="542"]');
    const q = btn?.querySelector('span')?.textContent?.trim() || '';
    if (!btn) return;

    let panel = wrap.querySelector<HTMLElement>('[data-dc-tpl="544"]');
    if (!panel) {
      panel = document.createElement('div');
      panel.setAttribute('data-dc-tpl', '544');
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
    if (it.chev) it.chev.style.transform = open ? 'rotate(180deg)' : 'none';
    it.wrap.style.borderColor = open ? 'rgb(185, 204, 255)' : 'rgb(230, 234, 244)';
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

  const offs: Array<() => void> = [];
  built.forEach((it, i) => {
    const onClick = () => {
      if (openIdx === i) { setOpen(it, false); openIdx = -1; }
      else { if (openIdx >= 0 && built[openIdx]) setOpen(built[openIdx], false); setOpen(it, true); openIdx = i; }
    };
    it.btn.addEventListener('click', onClick);
    offs.push(() => it.btn.removeEventListener('click', onClick));
  });

  return () => offs.forEach((off) => off());
}
