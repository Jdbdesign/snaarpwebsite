// Auto-playing "Send Large Files Without Limits" demo for the Snaarp Work Drive
// page (the card in the "More Than Storage" section, tpl 233).
//
// The standalone bundle animates an upload here and lets the user toggle expiry
// dates / password protection. Those bundle toggles CHANGE THE CARD HEIGHT
// (expiry chips collapse, a password field appears) which would make the page
// jump. Per the brief, this reproduction must NOT alter layout height or
// glitch — so we drive only height-safe, colour/width-based animations on a
// continuous loop:
//   1. the upload progress bar (tpl 251 width + tpl 249 percent text) climbs
//      smoothly, flips to a brief "Uploaded ✓ secure link ready" state WITHOUT
//      adding any element, then resets and repeats;
//   2. the expiry chips (tpl 268: 24 hours / 7 days / 30 days) rotate their
//      active highlight — a pure colour swap, no reflow.
// Nothing is added to or removed from the DOM, so the card's measured height is
// constant across the whole loop. Pauses on hover and when the tab is hidden;
// honours prefers-reduced-motion (holds a static "ready" state).
// Returns a cleanup function.

const CARD_TPL = '233';
const BAR_TPL = '251'; // the filled progress bar (width %)
const PCT_TPL = '249'; // the "87%" text (its .sc-interp)
const LABEL_TPL = '248'; // the "Uploading…" text (its .sc-interp)
const CHIP_TPL = '268'; // expiry chips: 24 hours / 7 days / 30 days

const ACTIVE = 'rgb(110, 26, 255)';
const ACTIVE_BG = 'rgb(244, 238, 255)';
const IDLE_BORDER = 'rgb(234, 227, 245)';
const IDLE_BG = 'rgb(255, 255, 255)';
const IDLE_COLOR = 'rgb(56, 42, 80)';

export function startDriveShareDemo(root: HTMLElement): () => void {
  const card = root.querySelector<HTMLElement>(`[data-dc-tpl="${CARD_TPL}"]`);
  if (!card) return () => {};

  const bar = card.querySelector<HTMLElement>(`[data-dc-tpl="${BAR_TPL}"]`);
  const pctEl =
    card.querySelector<HTMLElement>(`[data-dc-tpl="${PCT_TPL}"] .sc-interp`) ||
    card.querySelector<HTMLElement>(`[data-dc-tpl="${PCT_TPL}"]`);
  const labelEl =
    card.querySelector<HTMLElement>(`[data-dc-tpl="${LABEL_TPL}"] .sc-interp`) ||
    card.querySelector<HTMLElement>(`[data-dc-tpl="${LABEL_TPL}"]`);
  const chips = Array.from(card.querySelectorAll<HTMLElement>(`[data-dc-tpl="${CHIP_TPL}"]`));
  if (!bar || !pctEl || !labelEl) return () => {};

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Make the bar transition smooth without jumps.
  bar.style.transition = 'width .25s linear';

  const setChip = (index: number) => {
    chips.forEach((c, i) => {
      const on = i === index;
      c.style.borderColor = on ? ACTIVE : IDLE_BORDER;
      c.style.background = on ? ACTIVE_BG : IDLE_BG;
      c.style.color = on ? ACTIVE : IDLE_COLOR;
    });
  };

  let paused = false;
  let raf = 0;
  let timers: number[] = [];
  const clearAll = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    timers.forEach((t) => clearTimeout(t));
    timers = [];
  };
  const after = (ms: number, fn: () => void) => {
    const t = window.setTimeout(fn, ms);
    timers.push(t);
  };

  // Height-safe "Uploaded" state: only text + colour change, no new nodes.
  const applyUploaded = () => {
    bar.style.width = '100%';
    pctEl.textContent = 'Done';
    (pctEl as HTMLElement).style.color = 'rgb(34, 160, 90)';
    labelEl.textContent = 'Uploaded · secure link ready';
  };
  const applyUploading = (pct: number) => {
    bar.style.width = pct.toFixed(1) + '%';
    pctEl.textContent = Math.round(pct) + '%';
    (pctEl as HTMLElement).style.color = ACTIVE;
    labelEl.textContent = 'Uploading…';
  };

  if (reduce) {
    // Static, representative end state — no motion.
    applyUploaded();
    setChip(1); // 7 days
    return () => {};
  }

  // One full cycle: climb 8% -> 100% over ~4.2s, hold "Uploaded" ~1.6s, reset.
  let chipIdx = 1; // start on "7 days" to match the captured static state
  setChip(chipIdx);

  const runCycle = () => {
    if (paused) return;
    const start = performance.now();
    const from = 8;
    const to = 100;
    const dur = 4200;

    const tick = (now: number) => {
      if (paused) return;
      const t = Math.min(1, (now - start) / dur);
      // ease-out so it decelerates near the end, like a real upload
      const eased = 1 - Math.pow(1 - t, 1.8);
      const pct = from + (to - from) * eased;
      applyUploading(pct);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        applyUploaded();
        // advance the expiry chip highlight each completed upload
        chipIdx = (chipIdx + 1) % Math.max(1, chips.length);
        setChip(chipIdx);
        after(1600, () => {
          if (paused) return;
          // reset instantly (no transition) to avoid a backwards sweep
          bar.style.transition = 'none';
          applyUploading(from);
          // restore transition next frame, then run again
          requestAnimationFrame(() => {
            bar.style.transition = 'width .25s linear';
            after(500, runCycle);
          });
        });
      }
    };
    raf = requestAnimationFrame(tick);
  };

  after(1000, runCycle);

  const onEnter = () => { paused = true; clearAll(); };
  const onLeave = () => { if (!paused) return; paused = false; bar.style.transition = 'width .25s linear'; after(500, runCycle); };
  card.addEventListener('mouseenter', onEnter);
  card.addEventListener('mouseleave', onLeave);

  const onVis = () => {
    if (document.hidden) { paused = true; clearAll(); }
    else if (paused) { paused = false; after(400, runCycle); }
  };
  document.addEventListener('visibilitychange', onVis);

  return () => {
    paused = true;
    clearAll();
    card.removeEventListener('mouseenter', onEnter);
    card.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('visibilitychange', onVis);
  };
}
