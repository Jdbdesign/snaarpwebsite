// Auto-playing Data Room demo for the Snaarp Work Drive page (the file-manager
// mockup in the "A Secure Data Room When It Matters Most." section, tpl 289).
//
// In the standalone bundle each folder row has an access badge (tpl 332) that
// cycles Restricted -> Investors -> Board only on click, letting you "set
// permissions". We reproduce that AUTOMATICALLY on a continuous loop: the demo
// walks down the folder rows, flipping each row's access badge to the next
// level with a brief row highlight, so it reads as an admin granting access
// across the data room, then keeps looping.
//
// Height-safe by construction: it only changes the badge icon / label / colour
// and a transient row background — no element is added or removed, and the
// badge sits in a fixed-width (104px) cell, so nothing reflows. Pauses on hover
// and when the tab is hidden; honours prefers-reduced-motion (static state).
// Returns a cleanup function.

const SECTION_TPL = '286';
const ROW_TPL = '325'; // folder rows
const BADGE_TPL = '332'; // access badge button
const BADGE_ICON_TPL = '333'; // icon span inside the badge

interface AccessLevel {
  icon: string;
  label: string;
  color: string;
  bg: string;
}

// Three access levels the bundle cycles through, with the source "Investors"
// blue normalized to the Snaarp purple family to match the rest of the page.
const LEVELS: AccessLevel[] = [
  { icon: 'lock', label: 'Restricted', color: 'rgb(91, 99, 128)', bg: 'rgb(241, 243, 249)' },
  { icon: 'group', label: 'Investors', color: 'rgb(124, 58, 237)', bg: 'rgb(239, 235, 255)' },
  { icon: 'shield_person', label: 'Board only', color: 'rgb(124, 58, 237)', bg: 'rgb(241, 236, 255)' },
];

export function startDriveDataRoomDemo(root: HTMLElement): () => void {
  const section = root.querySelector<HTMLElement>(`[data-dc-tpl="${SECTION_TPL}"]`);
  if (!section) return () => {};

  const rows = Array.from(section.querySelectorAll<HTMLElement>(`[data-dc-tpl="${ROW_TPL}"]`));
  if (!rows.length) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  type RowCtl = { row: HTMLElement; badge: HTMLElement; iconText: HTMLElement; labelText: HTMLElement; level: number };
  const ctls: RowCtl[] = [];

  rows.forEach((row) => {
    const badge = row.querySelector<HTMLElement>(`[data-dc-tpl="${BADGE_TPL}"]`);
    if (!badge) return;
    const iconText = badge.querySelector<HTMLElement>(`[data-dc-tpl="${BADGE_ICON_TPL}"] .sc-interp`);
    // the label is the badge's own direct .sc-interp (not the one inside the icon span)
    const labelText = Array.from(badge.querySelectorAll<HTMLElement>(':scope > .sc-interp')).pop() || null;
    if (!iconText || !labelText) return;
    // ensure smooth colour transitions
    badge.style.transition = 'background-color .3s ease, color .3s ease';
    row.style.transition = 'background-color .3s ease';
    ctls.push({ row, badge, iconText, labelText, level: 0 });
  });
  if (!ctls.length) return () => {};

  const applyLevel = (c: RowCtl, levelIdx: number) => {
    const lv = LEVELS[levelIdx];
    c.level = levelIdx;
    c.badge.style.background = lv.bg;
    c.badge.style.color = lv.color;
    c.iconText.textContent = lv.icon;
    c.labelText.textContent = lv.label;
  };

  if (reduce) {
    // Static, representative mix of access levels — no motion.
    ctls.forEach((c, i) => applyLevel(c, i % LEVELS.length));
    return () => {};
  }

  let rowIdx = 0;
  let paused = false;
  let timers: number[] = [];
  const clearTimers = () => { timers.forEach((t) => clearTimeout(t)); timers = []; };
  const after = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };

  const step = () => {
    if (paused) return;
    const c = ctls[rowIdx % ctls.length];
    // highlight the active row briefly
    c.row.style.background = 'rgb(249, 247, 254)';
    // bump this row's access to the next level
    applyLevel(c, (c.level + 1) % LEVELS.length);
    after(650, () => { if (!paused) c.row.style.background = 'transparent'; });
    after(1400, () => {
      if (paused) return;
      rowIdx = (rowIdx + 1) % ctls.length;
      step();
    });
  };

  after(1000, step);

  const onEnter = () => { paused = true; clearTimers(); ctls.forEach((c) => (c.row.style.background = 'transparent')); };
  const onLeave = () => { if (!paused) return; paused = false; after(500, step); };
  section.addEventListener('mouseenter', onEnter);
  section.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; clearTimers(); }
    else if (paused) { paused = false; after(400, step); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    clearTimers();
    section.removeEventListener('mouseenter', onEnter);
    section.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}
