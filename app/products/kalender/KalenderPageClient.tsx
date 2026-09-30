'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './kalender.css';
import './kalender-animations.css';
import {
  KALENDER_HERO_TEXTCOL,
  KALENDER_HERO_MOCK,
  KALENDER_AFTER_HERO,
} from './kalenderHtml';

// The SnaarpMe hero is reconstructed in JSX (the row shell only) so the
// mockup canvas sits top-aligned and fills the right column the way the
// Books hero does — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas,
// and every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash, shifted from
// the source's light-blue tint to a purple tint to match the Snaarp brand.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(520px 520px at 72% 30%, rgb(237, 230, 255) 0%, rgba(237, 230, 255, 0) 66%), radial-gradient(700px 400px at 0% 100%, rgb(245, 241, 255) 0%, rgba(245, 241, 255, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(32px, 4vw, 48px) clamp(20px, 4vw, 48px) clamp(36px, 4vw, 48px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '40px',
};

export default function KalenderPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the
  // global reveal system (globals.css + useScrollReveal). Runs in a layout
  // effect so tags are applied BEFORE useScrollReveal scans for
  // [data-reveal]. Skips display:contents wrappers and the static mockup
  // canvases (tpl 70/198/313/377/446), which hold frozen, zoom-scaled art.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('kl-pop');
    };

    const MOCK_TPLS = ['70', '198', '313', '377', '446'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `kl-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature-icon cards (tpl 180) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="180"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'kl-features', batch: 'features', pop: true });
    });

    // 3) "Perfect for" use-case cards (tpl 293) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="293"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'kl-usecases', batch: 'usecases', pop: true });
    });

    // 4) Integration platform tiles (tpl 267) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="267"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'kl-integrations', batch: 'integrations', pop: true });
    });

    // 5) FAQ items (tpl 562) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="562"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'kl-faq', batch: 'faq', pop: true });
    });
  }, []);

  // Micro-interactions for the "Know Where Your Time Goes" analytics card
  // (mockup canvas tpl 314). The card is excluded from the shared scroll-
  // reveal system (it's a frozen, zoom-scaled canvas), so it gets its own
  // lightweight IntersectionObserver here: when it scrolls into view we add
  // `kl-analytics-live`, which drives a one-shot entrance animation defined
  // in kalender-animations.css — the bars grow up from the baseline in a
  // staggered sweep, the donut wipes in, and the stat tiles pop. Hover
  // polish (bar highlight, donut lift, stat-tile raise) is pure CSS. We
  // only add a class + per-bar index var; we never transform the canvas.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    // Both analytics mockups: the "Know Where Your Time Goes" card (canvas
    // tpl 314, bars tpl 332) and the "Powerful Analytics" card (canvas
    // tpl 377, bars tpl 394). Each gets a staggered per-bar index and its
    // own reveal→loop trigger.
    const cards = [
      { canvas: '314', bar: '332' },
      { canvas: '377', bar: '394' },
    ]
      .map((c) => ({ el: root.querySelector<HTMLElement>(`[data-dc-tpl="${c.canvas}"]`), bar: c.bar }))
      .filter((c): c is { el: HTMLElement; bar: string } => !!c.el);
    if (!cards.length) return;

    cards.forEach(({ el, bar }) => {
      el.querySelectorAll<HTMLElement>(`[data-dc-tpl="${bar}"]`).forEach((b, i) => {
        b.style.setProperty('--kl-bar-i', String(i));
      });
    });

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      cards.forEach(({ el }) => el.classList.add('kl-analytics-live'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('kl-analytics-live');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.35 }
    );
    cards.forEach(({ el }) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-kalender-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Me">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="43" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="kalender-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: KALENDER_HERO_TEXTCOL }} />
                {/* Right: booking mockup canvas (balanced HTML). The injected
                    root is tpl 69 — it becomes the flex child directly; its
                    inline margin-left:auto / max-width are overridden in CSS
                    (the .kalender-hero-mockcol recipe targets tpl 69). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: KALENDER_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: KALENDER_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
