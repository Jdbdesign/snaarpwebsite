'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './presentation.css';
import './presentation-animations.css';
import {
  SLIDES_HERO_TEXTCOL,
  SLIDES_HERO_MOCK,
  SLIDES_AFTER_HERO,
} from './presentationHtml';
import { startSlidesHeroDemo } from './slidesHeroDemo';
import { startSlidesFaq } from './presentationFaq';

// The Snaarp Slides hero is reconstructed in JSX (the row shell only) so the
// deck mockup canvas sits top-aligned and fills the right column the way the
// Books/PDF heroes do — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background is the bundle's soft radial wash, normalized to the
// Snaarp purple family.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(700px 520px at 88% 6%, rgba(150, 120, 255, 0.16) 0%, rgba(150, 120, 255, 0) 70%), radial-gradient(520px 420px at 70% 40%, rgba(176, 152, 255, 0.14) 0%, rgba(176, 152, 255, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(30px, 4vw, 44px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px',
};

export default function PresentationPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (useScrollReveal). Runs in a layout effect so tags are
  // applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvas (tpl 69), which holds
  // frozen, zoom-scaled art with its own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (
      el: Element | null,
      opts?: { group?: string; batch?: string; pop?: boolean }
    ) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('presentation-pop');
    };

    const MOCK_TPLS = ['69'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `slides-sec-${si}`;
      section
        .querySelectorAll<HTMLElement>('h1, h2, h3')
        .forEach((h) => {
          if (!inMockup(h)) tag(h, { group });
        });
    });

    // 2) Template thumbnail cards (tpl 268) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="268"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'slides-templates', batch: 'templates', pop: true });
    });

    // 3) Ecosystem app tiles (tpl 327) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="327"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'slides-ecosystem', batch: 'ecosystem', pop: true });
    });

    // 4) FAQ items (tpl 370) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="370"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'slides-faq', batch: 'faq', pop: true });
    });
  }, []);

  // Continuous, height-safe looping demos over the injected markup: the hero
  // deck canvas auto-advances its slide thumbnails, and the FAQ auto-cycles
  // open items. Both are pure DOM controllers that never change layout size
  // (no element is added/removed, no height-affecting style is toggled), so
  // the page never glitches or jumps. They pause on real user interaction and
  // clean themselves up on unmount.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = [
      startSlidesHeroDemo(root),
      startSlidesFaq(root),
    ];
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-presentation-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Slides">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="43" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="presentation-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML, root tpl 45) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SLIDES_HERO_TEXTCOL }} />
                {/* Right: deck mockup canvas (balanced HTML). The injected root
                    is tpl 68 — it becomes the flex child directly; its inline
                    margin-left / max-width are overridden in CSS (the
                    .presentation-hero-mockcol recipe targets tpl 68). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SLIDES_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML, from section 203) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SLIDES_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
