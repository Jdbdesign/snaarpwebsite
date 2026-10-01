'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './sheets.css';
import './sheets-animations.css';
import {
  SHEETS_HERO_TEXTCOL,
  SHEETS_HERO_MOCK,
  SHEETS_AFTER_HERO,
} from './sheetsHtml';

// The Snaarp Sheet hero is reconstructed in JSX (the row shell only) so the
// spreadsheet mockup canvas sits top-aligned and fills the right column the
// way the Books hero does — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash, shifted from the
// source's blue tint to a purple tint to match the Snaarp brand.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(560px 480px at 74% 40%, rgb(237, 231, 255) 0%, rgba(237, 231, 255, 0) 68%), radial-gradient(420px 300px at 96% 6%, rgb(230, 247, 239) 0%, rgba(230, 247, 239, 0) 70%), radial-gradient(700px 400px at 0% 100%, rgb(244, 241, 255) 0%, rgba(244, 241, 255, 0) 70%), rgb(251, 252, 255)',
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

export default function SheetsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvases (tpl 76/258/311/406),
  // which hold frozen, zoom-scaled art with their own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('sh-pop');
    };

    const MOCK_TPLS = ['76', '258', '311', '406'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `sh-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature cards (tpl 235) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="235"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'sh-features', batch: 'features', pop: true });
    });

    // 3) Ecosystem app tiles (tpl 503) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="503"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'sh-apps', batch: 'apps', pop: true });
    });

    // 4) FAQ items (tpl 536) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="536"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'sh-faq', batch: 'faq', pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-sheets-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Sheet">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="48" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="sheets-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SHEETS_HERO_TEXTCOL }} />
                {/* Right: spreadsheet mockup canvas (balanced HTML). The injected
                    root is tpl 75 — it becomes the flex child directly; its inline
                    margin-left:auto / max-width are overridden in CSS (the
                    .sheets-hero-mockcol recipe targets tpl 75). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SHEETS_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SHEETS_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
