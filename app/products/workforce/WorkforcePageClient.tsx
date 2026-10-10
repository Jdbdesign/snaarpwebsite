'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './workforce.css';
import './workforce-animations.css';
import {
  WORKFORCE_HERO_TEXTCOL,
  WORKFORCE_HERO_MOCK,
  WORKFORCE_AFTER_HERO,
} from './workforceHtml';
import { startWorkforceHeroDemo } from './workforceHeroDemo';

// The Snaarp Workforce hero is reconstructed in JSX (the row shell only) so the
// HR-dashboard mockup canvas sits top-aligned and fills the right column the
// way the Books/PDF/Doc heroes do — the standalone bundle centred it, which
// left an awkward gap on wide screens. The left text column, the mockup canvas,
// and every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background is the bundle's soft radial wash, normalized to the
// Snaarp purple family.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(720px 520px at 85% 10%, rgba(140, 110, 255, 0.14), rgba(140, 110, 255, 0) 70%), radial-gradient(520px 380px at 60% 70%, rgba(180, 160, 255, 0.12), rgba(180, 160, 255, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0) 70%), rgb(252, 251, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(24px, 3vw, 36px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '30px 36px',
};

export default function WorkforcePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (useScrollReveal). Runs in a layout effect so tags are
  // applied BEFORE useScrollReveal scans. Skips the mockup canvas (tpl 74).
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
      if (opts?.pop) el.classList.add('workforce-pop');
    };

    const MOCK_TPLS = ['74'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `wf-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => {
        if (!inMockup(h)) tag(h, { group });
      });
    });

    // 2) Feature cards (tpl 665) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="665"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'wf-features', batch: 'features', pop: true });
    });

    // 3) Ecosystem tiles (tpl 747) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="747"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'wf-ecosystem', batch: 'ecosystem', pop: true });
    });

  }, []);

  // Continuous, height-safe looping demo over the injected markup: the hero
  // HR-dashboard sidebar auto-advances its active nav item. Pure DOM controller
  // that never changes layout size (no element added/removed, no
  // height-affecting style toggled), so the page never glitches or jumps. It
  // pauses on hover and off-screen, and cleans itself up on unmount.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = [startWorkforceHeroDemo(root)];
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-workforce-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Workforce">
          <div style={{ minHeight: '100vh', background: 'rgb(252, 251, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="45" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="workforce-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML, root tpl 47) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: WORKFORCE_HERO_TEXTCOL }} />
                {/* Right: HR-dashboard mockup canvas (balanced HTML, root tpl 73).
                    Its inline margin/max-width are overridden in CSS (the
                    .workforce-hero-mockcol recipe targets tpl 73 under the row). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: WORKFORCE_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML, sections 579..CTA 802) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: WORKFORCE_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
