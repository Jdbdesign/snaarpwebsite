'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './meet.css';
import './meet-animations.css';
import {
  MEET_HERO_TEXTCOL,
  MEET_HERO_MOCK,
  MEET_AFTER_HERO,
} from './meetHtml';
import { startMeetFaq } from './meetFaq';

// The Snaarp Meet hero is reconstructed in JSX (the row shell only) so the
// video-call mockup canvas sits top-aligned and fills the right column the way
// the Books/Lock/PDF heroes do. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash (already normalized
// to a purple tint, matching the Snaarp brand).
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(900px 520px at 82% 20%, rgba(124, 58, 237, 0.09), rgba(124, 58, 237, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 4vw, 48px) clamp(20px, 4vw, 48px) clamp(36px, 4vw, 52px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px 52px',
};

export default function MeetPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll. Runs in a layout
  // effect so tags are applied BEFORE useScrollReveal scans. Skips
  // display:contents wrappers and the mockup canvas (tpl 68).
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('meet-pop');
    };

    const MOCK_TPLS = ['68'];
    const inMockup = (el: Element) => MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `meet-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature cards (tpl 249) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="249"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'meet-features', batch: 'features', pop: true });
    });

    // 3) FAQ items (tpl 540) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="540"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'meet-faq', batch: 'faq', pop: true });
    });
  }, []);

  // FAQ accordion (plain DOM controller over the injected markup).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return startMeetFaq(root);
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-meet-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Meet">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="43" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="meet-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: MEET_HERO_TEXTCOL }} />
                {/* Right: video-call mockup canvas (balanced HTML). The injected
                    root is tpl 67 — its inline max-width is overridden in CSS
                    (the .meet-hero-mockcol recipe targets tpl 67). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: MEET_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: MEET_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
