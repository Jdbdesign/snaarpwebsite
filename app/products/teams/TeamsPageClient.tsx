'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './teams.css';
import './teams-animations.css';
import {
  TEAMS_HERO_TEXTCOL,
  TEAMS_HERO_MOCK,
  TEAMS_AFTER_HERO,
} from './teamsHtml';

// The Snaarp Teams hero is reconstructed in JSX (the row shell only) so the
// workspace mockup canvas sits top-aligned and fills the right column the
// way the Books hero does — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash, shifted from the
// source's light-blue tint to a purple tint to match the Snaarp brand.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(560px 480px at 76% 34%, rgb(237, 231, 255) 0%, rgba(237, 231, 255, 0) 68%), radial-gradient(420px 300px at 92% 4%, rgb(241, 233, 255) 0%, rgba(241, 233, 255, 0) 70%), radial-gradient(700px 400px at 0% 100%, rgb(245, 241, 255) 0%, rgba(245, 241, 255, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(36px, 4vw, 48px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px',
};

export default function TeamsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvases (tpl 70/279/454/605),
  // which hold frozen, zoom-scaled art with their own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('tm-pop');
    };

    const MOCK_TPLS = ['70', '279', '454', '605'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `tm-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Benefits tiles (tpl 258) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="258"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-benefits', batch: 'benefits', pop: true });
    });

    // 3) Feature list items (tpl 270) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="270"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-features', batch: 'features', pop: true });
    });

    // 4) Integration logo tiles (tpl 371) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="371"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-integrations', batch: 'integrations', pop: true });
    });

    // 5) FAQ items (tpl 742) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="742"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-faq', batch: 'faq', pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-teams-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Teams">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="44" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="teams-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_HERO_TEXTCOL }} />
                {/* Right: workspace mockup canvas (balanced HTML). The injected
                    root is tpl 69 — it becomes the flex child directly; its
                    inline margin-left:auto / max-width are overridden in CSS
                    (the .teams-hero-mockcol recipe targets tpl 69). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
