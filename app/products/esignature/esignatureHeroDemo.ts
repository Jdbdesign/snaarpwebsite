// Auto-playing hero e-signature demo for the Snaarp Sign page.
//
// In the standalone bundle the hero mockup is an interactive signature setup:
// you click a signer card (tpl 104, "Recipient 1-4") to select who you're
// placing fields for, and the active card highlights while the "Placing fields
// for Recipient N" label (tpl 136) updates. Here we reproduce that flow
// AUTOMATICALLY on a continuous loop — no clicks:
//   cycle the active signer card every ~2.2s, moving the highlight + the
//   "active" badge (tpl 111) and updating the placing-fields label.
//
// Only border/background/text and the position of one small "active" badge
// change on existing nodes — nothing is added or removed, so the mockup card
// never changes size or reflows. Pauses on hover and when the tab is hidden;
// honors prefers-reduced-motion (static first-signer state). Returns cleanup.

const CANVAS_TPL = '67'; // hero mock canvas (never transform it)
const CARD_TPL = '104'; // signer cards
const NAME_ROW_TPL = '105'; // the name row inside a card (badge gets appended here)
const BADGE_TPL = '111'; // the "active" badge
const LABEL_SEL = '.sc-interp'; // "Placing fields for Recipient N" leaf

const ACTIVE_BORDER = 'rgb(187, 148, 255)';
const ACTIVE_BG = 'rgb(249, 246, 255)';
const IDLE_BORDER = 'rgb(236, 232, 244)';
const IDLE_BG = 'rgb(255, 255, 255)';

export function startEsignatureHeroDemo(root: HTMLElement): () => void {
  const canvas = root.querySelector<HTMLElement>(`[data-dc-tpl="${CANVAS_TPL}"]`);
  if (!canvas) return () => {};

  const cards = Array.from(canvas.querySelectorAll<HTMLElement>(`[data-dc-tpl="${CARD_TPL}"]`));
  if (cards.length < 2) return () => {};

  const badge = canvas.querySelector<HTMLElement>(`[data-dc-tpl="${BADGE_TPL}"]`);
  // the "Placing fields for Recipient N" label — find the leaf whose text starts with it
  const label = Array.from(canvas.querySelectorAll<HTMLElement>(LABEL_SEL)).find((el) =>
    /^Placing fields for/.test(el.textContent || ''),
  );

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((c) => { c.style.transition = 'border-color .25s ease, background-color .25s ease'; });

  const nameRowOf = (card: HTMLElement) =>
    card.querySelector<HTMLElement>(`[data-dc-tpl="${NAME_ROW_TPL}"]`) || card.firstElementChild as HTMLElement;

  const setActive = (idx: number) => {
    cards.forEach((c, i) => {
      const on = i === idx;
      c.style.borderColor = on ? ACTIVE_BORDER : IDLE_BORDER;
      c.style.background = on ? ACTIVE_BG : IDLE_BG;
    });
    // move the single "active" badge into the active card's name row
    if (badge) {
      const row = nameRowOf(cards[idx]);
      if (row && badge.parentElement !== row) row.appendChild(badge);
    }
    // update the placing-fields label
    if (label) label.textContent = `Placing fields for Recipient ${idx + 1}`;
  };

  if (reduce) { setActive(0); return () => {}; }

  let idx = 0;
  let paused = false;
  let timer = 0;
  const stopTimer = () => { if (timer) { window.clearTimeout(timer); timer = 0; } };
  const tick = () => {
    if (paused) return;
    idx = (idx + 1) % cards.length;
    setActive(idx);
    timer = window.setTimeout(tick, 2200);
  };

  setActive(0);
  timer = window.setTimeout(tick, 2200);

  const onEnter = () => { paused = true; stopTimer(); };
  const onLeave = () => { if (!paused) return; paused = false; timer = window.setTimeout(tick, 1500); };
  canvas.addEventListener('mouseenter', onEnter);
  canvas.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; stopTimer(); }
    else if (paused) { paused = false; timer = window.setTimeout(tick, 1200); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    stopTimer();
    canvas.removeEventListener('mouseenter', onEnter);
    canvas.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}
