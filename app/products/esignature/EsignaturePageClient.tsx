'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './esignature.css';
import './esignature-animations.css';
import {
  SIGN_HERO_TEXTCOL,
  SIGN_HERO_MOCK,
  SIGN_AFTER_HERO,
} from './esignatureHtml';
import { startEsignatureFaq } from './esignatureFaq';
import { startEsignatureHeroDemo } from './esignatureHeroDemo';

// The Snaarp Sign hero is reconstructed in JSX (the row shell only) so the
// e-signature mockup canvas sits top-aligned and fills the right column the way
// the Books/Work-Drive/Doc heroes do. The left text column, the mockup canvas,
// and every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash (already in the
// Snaarp purple family).
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  background:
    'radial-gradient(900px 560px at 85% 10%, rgba(152, 92, 255, 0.13), rgba(152, 92, 255, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0) 70%), rgb(252, 251, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(24px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(30px, 4vw, 44px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px 40px',
};

export default function EsignaturePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips the
  // mockup canvas (tpl 67), which holds frozen, zoom-scaled art.
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
      if (opts?.pop) el.classList.add('esignature-pop');
    };

    const MOCK_TPLS = ['67'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `sign-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => {
        if (!inMockup(h)) tag(h, { group });
      });
    });

    // 2) Feature cards (tpl 328) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="328"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'sign-features', batch: 'features', pop: true });
    });

    // 3) FAQ items (tpl 424) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="424"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'sign-faq', batch: 'faq', pop: true });
    });
  }, []);

  // Plain DOM controllers over the injected markup (no structural changes).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = [startEsignatureFaq(root), startEsignatureHeroDemo(root)];
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-esignature-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Sign">
          <div style={{ minHeight: '100vh', background: 'rgb(252, 251, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="43" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="esignature-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML — tpl 45 wrapper) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SIGN_HERO_TEXTCOL }} />
                {/* Right: e-signature mockup canvas (balanced HTML). The injected
                    root is tpl 66 — its inline max-width is overridden in CSS
                    (the .esignature-hero-mockcol recipe targets tpl 66). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SIGN_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: SIGN_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
