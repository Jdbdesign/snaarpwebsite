// Continuous, self-running "living dashboard" demo for the Sheets
// "Turn Numbers Into a Clearer Story" marketing-dashboard mockup
// (canvas tpl 311). Clean, seamless loops — no hover, no number jitter.
//
//   • Revenue Trend line re-draws with a sweeping stroke + fill fade, and
//     a glowing dot travels along the points.
//   • Sales-by-Region donut rotates slowly (centre total stays upright),
//     and the legend rows highlight one-by-one in sync.
//   • The 4 KPI stat cards cycle a soft "active" highlight across them.
//   • The Q1 / H1 / YTD period pills cycle their active state.
//
// Scoped to the dashboard canvas passed in; preserves its fixed size
// (only toggles classes / transforms, nothing structural). Returns cleanup.

const ease = 'cubic-bezier(0.22,1,0.36,1)';

export function startSheetsDashboardDemo(canvas: HTMLElement): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return () => {};

  let cancelled = false;
  const timers: number[] = [];
  const intervals: number[] = [];
  const every = (ms: number, fn: () => void) => { intervals.push(window.setInterval(fn, ms)); };
  const after = (ms: number, fn: () => void) => { timers.push(window.setTimeout(fn, ms)); };

  /* ── Revenue Trend line: sweeping re-draw + travelling glow dot ── */
  const line = canvas.querySelector<SVGPolylineElement>('[data-dc-tpl="344"]');
  const fill = canvas.querySelector<SVGPolygonElement>('[data-dc-tpl="343"]');
  const dots = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="347"]'))
    .filter((d) => d.closest('[data-dc-tpl="337"]')); // only the Revenue Trend dots
  if (line) {
    const len = line.getTotalLength();
    line.style.strokeDasharray = String(len);
    const draw = () => {
      if (cancelled) return;
      line.style.transition = 'none';
      line.style.strokeDashoffset = String(len);
      if (fill) { fill.style.transition = 'none'; (fill.style as any).opacity = '0'; }
      requestAnimationFrame(() => requestAnimationFrame(() => {
        line.style.transition = `stroke-dashoffset 2s ${ease}`;
        line.style.strokeDashoffset = '0';
        if (fill) { fill.style.transition = 'opacity 1.8s ease'; (fill.style as any).opacity = '1'; }
      }));
      // travelling glow dot: pulse each marker in sequence as the sweep passes
      dots.forEach((dot, i) => {
        after(200 + i * (2000 / Math.max(1, dots.length)), () => {
          if (cancelled) return;
          const prevBg = dot.style.boxShadow;
          dot.style.transition = `transform 0.3s ${ease}, box-shadow 0.3s ${ease}`;
          dot.style.transform = 'scale(1.9)';
          dot.style.boxShadow = 'rgb(124,58,237) 0 0 0 1px, rgba(124,58,237,0.45) 0 0 0 5px';
          after(360, () => { dot.style.transform = 'scale(1)'; dot.style.boxShadow = prevBg || 'rgb(124,58,237) 0 0 0 1px'; });
        });
      });
    };
    draw();
    every(6000, draw);
  }

  /* ── Donut: gentle breathing + a soft glowing ring pulse (no spin, so
     the segments stay data-honest and the centre total never moves) ── */
  const donut = canvas.querySelector<HTMLElement>('[data-dc-tpl="357"]');
  if (donut) {
    donut.style.animation = `shdash-donut 4.5s ${ease} infinite`;
  }

  /* ── Legend rows: highlight one-by-one in a gentle cycle ── */
  const legend = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="364"]'));
  if (legend.length) {
    let li = 0;
    const cycleLegend = () => {
      if (cancelled) return;
      legend.forEach((row, i) => {
        row.style.transition = `background 0.35s ${ease}, transform 0.35s ${ease}`;
        row.style.background = i === li ? 'rgb(245,243,255)' : 'transparent';
        row.style.transform = i === li ? 'translateX(2px)' : 'translateX(0)';
      });
      li = (li + 1) % legend.length;
    };
    cycleLegend();
    every(1100, cycleLegend);
  }

  /* ── KPI stat cards: cycle a soft active highlight across the four ── */
  const cards = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="324"]'));
  if (cards.length) {
    let ci = 0;
    const cycleCards = () => {
      if (cancelled) return;
      cards.forEach((card, i) => {
        const on = i === ci;
        card.style.transition = `border-color 0.4s ${ease}, background 0.4s ${ease}, transform 0.4s ${ease}, box-shadow 0.4s ${ease}`;
        card.style.borderColor = on ? 'rgb(124,58,237)' : 'rgb(238,240,246)';
        card.style.background = on ? 'rgb(247,247,255)' : 'rgb(255,255,255)';
        card.style.transform = on ? 'translateY(-2px)' : 'translateY(0)';
        card.style.boxShadow = on ? 'rgba(124,58,237,0.22) 0px 12px 24px -14px' : 'none';
      });
      ci = (ci + 1) % cards.length;
    };
    cycleCards();
    every(2000, cycleCards);
  }

  /* ── Period pills (Q1 / H1 / YTD): cycle the active one ── */
  const pills = Array.from(canvas.querySelectorAll<HTMLElement>('[data-dc-tpl="319"]'));
  if (pills.length) {
    let pi = pills.length - 1; // starts on YTD (the authored active)
    const cyclePills = () => {
      if (cancelled) return;
      pills.forEach((p, i) => {
        const on = i === pi;
        p.style.transition = `background 0.3s ${ease}, color 0.3s ${ease}, box-shadow 0.3s ${ease}`;
        p.style.background = on ? 'rgb(255,255,255)' : 'transparent';
        p.style.color = on ? 'rgb(11,20,55)' : 'rgb(107,115,144)';
        p.style.boxShadow = on ? 'rgba(20,30,80,0.15) 0px 1px 3px' : 'none';
      });
      pi = (pi + 1) % pills.length;
    };
    every(4000, cyclePills);
  }

  return () => {
    cancelled = true;
    timers.forEach(clearTimeout);
    intervals.forEach(clearInterval);
  };
}
