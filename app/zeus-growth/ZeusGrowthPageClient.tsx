'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './zeus-growth.css';
import './zeus-growth-animations.css';
import {
  ZEUS_HERO_BG,
  ZEUS_HERO_CONTENT,
  ZEUS_HERO_FORM,
  ZEUS_AFTER_HERO,
} from './zeusHtml';
import { startZeusDemos } from './zeusDemos';

// ZEUS Growth Bundle — standalone marketing landing page. The hero (dark,
// two-column: content tpl 35 + sign-up form tpl 37) is reconstructed in JSX so
// the columns stay top-aligned and the row spreads edge-to-edge. Everything is
// injected as balanced HTML via display:contents wrappers (brand blue
// normalized to Snaarp purple). The hero now carries a photographic background
// (Hero section2.jpg) under a dark purple gradient overlay — the overlay is
// opaque on the left so the headline/copy stay readable and fades toward the
// right so the photo shows through, matching the requested look. Layers are
// painted front→back: bottom light strip, left-to-right dark wash, purple glow,
// then the photo (cover), over a dark base colour.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'linear-gradient(to top, rgb(238, 244, 251) 0px, rgb(238, 244, 251) 22px, transparent 22px), ' +
    'linear-gradient(90deg, rgba(20, 8, 51, 0.86) 0%, rgba(22, 10, 56, 0.74) 30%, rgba(24, 12, 60, 0.5) 50%, rgba(26, 14, 64, 0.3) 70%, rgba(28, 16, 68, 0.2) 100%), ' +
    'radial-gradient(60% 70% at 62% 25%, rgba(120, 90, 240, 0.3), transparent 70%), ' +
    "url('/assets/zeus-growth/hero.jpg'), " +
    'linear-gradient(rgb(28, 14, 74) 0%, rgb(20, 8, 51) 100%)',
  backgroundSize: 'auto, auto, auto, cover, auto',
  backgroundPosition: 'center, center, center, center right, center',
  backgroundRepeat: 'no-repeat',
};

export default function ZeusGrowthPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

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
      if (opts?.pop) el.classList.add('zeus-pop');
    };
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `zeus-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => tag(h, { group }));
    });
  }, []);

  // Continuous, height-safe looping demos over the injected markup (built in
  // zeusDemos). Pure DOM controllers that never change layout size, pause on
  // hover / off-screen, and clean up on unmount.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = startZeusDemos(root);
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="zeus-growth-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="ZEUS Growth Bundle">
          <div style={{ minHeight: '100vh', background: 'rgb(255, 255, 255)', overflowX: 'hidden' }}>
            <section data-dc-tpl="32" data-screen-label="Hero" style={heroSectionStyle}>
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: ZEUS_HERO_BG }} />
              <div className="zeus-hero-row" data-dc-tpl="34">
                {/* Left: hero content column (balanced HTML, root tpl 35) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: ZEUS_HERO_CONTENT }} />
                {/* Right: £499 sign-up form column (balanced HTML, root tpl 108) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: ZEUS_HERO_FORM }} />
              </div>
            </section>
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: ZEUS_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
