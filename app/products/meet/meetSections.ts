// Section-level interactions for the Snaarp Meet page, ported faithfully from
// the standalone bundle. These are plain DOM controllers attached at runtime
// over the already-injected markup — they add NO structure and change no
// layout, so the current implementation is untouched. Two behaviours:
//
//   1. "More Than Video" use-case list (tpl 420): click a use-case to make it
//      the active (purple-tinted) row; the floating testimonial card's
//      "Recommended for <X>" label (tpl 430) updates to match. Row 2
//      ("Sales demos") is active by default, as in the bundle.
//
//   2. "Integrations" provider tiles (tpl 449): click to toggle connected /
//      disconnected — the logo goes full-colour with a green check badge when
//      connected, grey + dimmed when not. Mirrors the bundle's connect flow.
//
// Honors prefers-reduced-motion implicitly (only colour/opacity toggles, no
// motion). Returns a cleanup function that removes all listeners.

const PURPLE = 'rgb(124, 58, 237)';
const USECASE_ACTIVE_BG = 'rgb(243, 240, 255)';

export function startMeetSections(root: HTMLElement): () => void {
  const offs: Array<() => void> = [];

  // ── 1) "More Than Video" use-case selector ──────────────────────
  const useRows = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-dc-tpl="420"]'));
  const recommended = root.querySelector<HTMLElement>('[data-dc-tpl="430"]');
  const labelOf = (b: HTMLElement) => {
    // the visible label is the last text-bearing span in the button
    const spans = b.querySelectorAll('span');
    const last = spans[spans.length - 1];
    return (last?.textContent || b.textContent || '').trim();
  };
  const setUseActive = (idx: number) => {
    useRows.forEach((b, i) => {
      const on = i === idx;
      b.style.background = on ? USECASE_ACTIVE_BG : 'transparent';
      b.style.color = on ? PURPLE : 'rgb(42, 49, 80)';
      b.style.fontWeight = on ? '700' : '500';
    });
    if (recommended) recommended.textContent = (labelOf(useRows[idx]) || '').toLowerCase();
  };
  if (useRows.length) {
    // find the currently-active row (bundle default = "Sales demos"); fall back to index 2
    let def = useRows.findIndex((b) => {
      const bg = getComputedStyle(b).backgroundColor;
      return bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
    });
    if (def < 0) def = Math.min(2, useRows.length - 1);
    setUseActive(def);
    useRows.forEach((b, i) => {
      const onClick = () => setUseActive(i);
      b.addEventListener('click', onClick);
      offs.push(() => b.removeEventListener('click', onClick));
    });
  }

  // ── 2) Integrations connect / disconnect ────────────────────────
  const tiles = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-dc-tpl="449"]'));
  const connectedTitle = (name: string) => `${name} connected — click to disconnect`;
  const connectTitle = (name: string) => `Connect ${name}`;
  const baseName = (title: string) =>
    title.replace(/ connected.*$/i, '').replace(/^Connect /i, '').trim();

  // A tile is "connected" when its logo wrapper (tpl 450) carries the purple
  // ring box-shadow OR already has a check badge (tpl 455).
  const logoWrap = (t: HTMLElement) => t.querySelector<HTMLElement>('[data-dc-tpl="450"]');
  const badge = (t: HTMLElement) => t.querySelector<HTMLElement>('[data-dc-tpl="455"]');
  const img = (t: HTMLElement) => t.querySelector<HTMLImageElement>('img');

  const ensureBadge = (wrap: HTMLElement) => {
    let b = wrap.querySelector<HTMLElement>('[data-dc-tpl="455"]');
    if (!b) {
      b = document.createElement('span');
      b.setAttribute('data-dc-tpl', '455');
      b.setAttribute('style', 'position:absolute;right:-5px;top:-5px;width:20px;height:20px;border-radius:50%;background:rgb(34,197,94);border:2px solid rgb(255,255,255);display:grid;place-items:center;');
      b.innerHTML = '<span style="font-family:&quot;Material Symbols Rounded&quot;;font-size:12px;line-height:1;color:rgb(255,255,255);">check</span>';
      wrap.appendChild(b);
    }
    return b;
  };

  const setConnected = (tile: HTMLElement, connected: boolean) => {
    const wrap = logoWrap(tile);
    const im = img(tile);
    const name = baseName(tile.getAttribute('title') || '');
    if (connected) {
      if (im) { im.style.filter = 'none'; im.style.opacity = '1'; }
      if (wrap) {
        const b = ensureBadge(wrap);
        b.style.display = 'grid';
        // soft connected ring (don't override the branded Snaarp.me gradient tile)
        if (!wrap.style.background.includes('gradient')) {
          wrap.style.boxShadow = 'rgb(232, 236, 247) 0px 0px 0px 1px, rgba(124,58,237,0.35) 0px 8px 18px -10px';
        }
      }
      tile.setAttribute('title', connectedTitle(name));
    } else {
      if (im) { im.style.filter = 'grayscale(1)'; im.style.opacity = '0.45'; }
      const b = badge(tile);
      if (b) b.style.display = 'none';
      if (wrap && !wrap.style.background.includes('gradient')) wrap.style.boxShadow = 'rgb(232, 236, 247) 0px 0px 0px 1px';
      tile.setAttribute('title', connectTitle(name));
    }
  };

  tiles.forEach((tile) => {
    const title = tile.getAttribute('title') || '';
    let connected = /connected/i.test(title);
    const onClick = () => {
      connected = !connected;
      setConnected(tile, connected);
    };
    tile.addEventListener('click', onClick);
    offs.push(() => tile.removeEventListener('click', onClick));
  });

  return () => offs.forEach((off) => off());
}
