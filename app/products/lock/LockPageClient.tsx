'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './lock.css';
import './lock-animations.css';
import {
  LOCK_HERO_TEXTCOL,
  LOCK_HERO_MOCK,
  LOCK_AFTER_HERO,
} from './lockHtml';

// The Snaarp Lock hero is reconstructed in JSX (the row shell only) so the
// vault mockup canvas sits top-aligned and fills the right column the way
// the Books hero does — the standalone bundle centred it, which left an
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
    'radial-gradient(620px 520px at 78% 42%, rgb(236, 230, 255) 0%, rgba(236, 230, 255, 0) 70%), radial-gradient(500px 360px at 100% 0%, rgb(241, 235, 255) 0%, rgba(241, 235, 255, 0) 70%), radial-gradient(600px 380px at 0% 100%, rgb(243, 241, 255) 0%, rgba(243, 241, 255, 0) 70%), rgb(251, 250, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(32px, 4vw, 44px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px',
};

export default function LockPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvases (tpl 71/353/468), which
  // hold frozen, zoom-scaled art with their own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('lk-pop');
    };

    const MOCK_TPLS = ['71', '353', '468'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `lk-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature cards (tpl 259) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="259"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'lk-features', batch: 'features', pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-lock-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Lock">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 250, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="46" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="lock-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: LOCK_HERO_TEXTCOL }} />
                {/* Right: vault mockup canvas (balanced HTML). The injected root
                    is tpl 70 — it becomes the flex child directly; its inline
                    margin-left:auto / max-width are overridden in CSS (the
                    .lock-hero-mockcol recipe targets tpl 70). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: LOCK_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: LOCK_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
