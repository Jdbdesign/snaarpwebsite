'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './docs.css';
import './docs-animations.css';
import {
  DOCS_HERO_TEXTCOL,
  DOCS_HERO_MOCK,
  DOCS_AFTER_HERO,
} from './docsHtml';
import { startDocsFaq } from './docsFaq';
import { startDocsHeroDemo } from './docsHeroDemo';
import { startDocsBlankDemo } from './docsBlankDemo';
import { startDocsCollabDemo } from './docsCollabDemo';

// The Snaarp Document hero is reconstructed in JSX (the row shell only) so the
// document-editor mockup canvas sits top-aligned and fills the right column the
// way the Books/Lock/PDF/Work-Drive heroes do — the standalone bundle centred
// it, which left an awkward gap on wide screens. The left text column, the
// mockup canvas, and every section after the hero are injected as balanced HTML
// through display:contents wrappers so they lay out exactly as authored.
//
// The hero background mirrors the bundle's soft radial wash, with the source
// brand blue normalized to the Snaarp purple family.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  background:
    'radial-gradient(900px 560px at 85% 10%, rgba(170, 120, 255, 0.13), rgba(170, 120, 255, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 4vw, 44px) clamp(20px, 4vw, 48px) clamp(30px, 4vw, 44px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px 40px',
};

export default function DocsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips the
  // mockup canvas (tpl 69), which holds frozen, zoom-scaled art.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (
      el: Element | null,
      opts?: { group?: string; batch?: string; pop?: boolean },
    ) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('docs-pop');
    };

    const MOCK_TPLS = ['69'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `docs-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => {
        if (!inMockup(h)) tag(h, { group });
      });
    });

    // 2) Feature cards (tpl 203) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="203"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'docs-features', batch: 'features', pop: true });
    });

    // 3) FAQ items (tpl 458) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="458"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'docs-faq', batch: 'faq', pop: true });
    });
  }, []);

  // FAQ accordion over the injected markup (exclusive-open, smooth height).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = [
      startDocsFaq(root),
      startDocsHeroDemo(root),
      startDocsBlankDemo(root),
      startDocsCollabDemo(root),
    ];
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-docs-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Doc">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="43" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="docs-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DOCS_HERO_TEXTCOL }} />
                {/* Right: document-editor mockup canvas (balanced HTML). The injected
                    root is tpl 68 — it becomes the flex child directly; its inline
                    max-width is overridden in CSS (the .docs-hero-mockcol recipe
                    targets tpl 68 under the row) so it fills the right column. */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DOCS_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DOCS_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
