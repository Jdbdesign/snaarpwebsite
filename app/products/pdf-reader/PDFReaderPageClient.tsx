'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './pdf-reader.css';
import './pdf-reader-animations.css';
import {
  PDF_HERO_TEXTCOL,
  PDF_HERO_MOCK,
  PDF_AFTER_HERO,
} from './pdf-readerHtml';

// The Snaarp PDF hero is reconstructed in JSX (the row shell only) so the
// PDF-editor mockup canvas sits top-aligned and fills the right column the way
// the Books/Lock heroes do — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash (already a purple
// tint, matching the Snaarp brand).
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(640px 520px at 80% 30%, rgb(236, 230, 255) 0%, rgba(236, 230, 255, 0) 70%), radial-gradient(520px 380px at 100% 0%, rgb(237, 230, 255) 0%, rgba(237, 230, 255, 0) 70%), radial-gradient(600px 380px at 0% 100%, rgb(243, 241, 255) 0%, rgba(243, 241, 255, 0) 70%), rgb(251, 250, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 4vw, 48px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '32px',
};

export default function PDFReaderPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvas (tpl 64), which holds
  // frozen, zoom-scaled art with its own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('pdf-pop');
    };

    const MOCK_TPLS = ['64'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `pdf-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature cards (tpl 249) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="249"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'pdf-features', batch: 'features', pop: true });
    });

    // 3) FAQ items (tpl 544) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="544"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'pdf-faq', batch: 'faq', pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-pdf-reader-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp PDF">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 250, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="41" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="pdf-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PDF_HERO_TEXTCOL }} />
                {/* Right: PDF-editor mockup canvas (balanced HTML). The injected
                    root is tpl 63 — it becomes the flex child directly; its inline
                    margin-left:auto / max-width are overridden in CSS (the
                    .pdf-hero-mockcol recipe targets tpl 63). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PDF_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PDF_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
