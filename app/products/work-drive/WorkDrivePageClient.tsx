'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './work-drive.css';
import './work-drive-animations.css';
import {
  DRIVE_HERO_TEXTCOL,
  DRIVE_HERO_MOCK,
  DRIVE_AFTER_HERO,
} from './work-driveHtml';
import { startDriveFaq } from './work-driveFaq';
import { startDriveHeroDemo } from './work-driveHeroDemo';
import { startDriveShareDemo } from './work-driveShareDemo';
import { startDriveDataRoomDemo } from './work-driveDataRoomDemo';

// The Snaarp Work Drive hero is reconstructed in JSX (the row shell only) so the
// file-manager mockup canvas sits top-aligned and fills the right column the
// way the Books/Lock/PDF heroes do — the standalone bundle centred it, which
// left an awkward gap on wide screens. The left text column, the mockup canvas,
// and every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background mirrors the bundle's soft radial wash, with the source
// brand blue normalized to the Snaarp purple family.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  background:
    'radial-gradient(900px 560px at 85% 10%, rgba(150, 120, 255, 0.13), rgba(150, 120, 255, 0) 70%), radial-gradient(600px 400px at 0% 100%, rgba(124, 58, 237, 0.05), rgba(124, 58, 237, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 4vw, 44px) clamp(20px, 4vw, 48px) clamp(36px, 4vw, 52px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px 40px',
};

export default function WorkDrivePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips the
  // mockup canvas (tpl 72), which holds frozen, zoom-scaled art.
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
      if (opts?.pop) el.classList.add('wd-pop');
    };

    const MOCK_TPLS = ['72'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `wd-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => {
        if (!inMockup(h)) tag(h, { group });
      });
    });

    // 2) Feature cards (tpl 213) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="213"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'wd-features', batch: 'features', pop: true });
    });

    // 3) FAQ items (tpl 490) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="490"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'wd-faq', batch: 'faq', pop: true });
    });
  }, []);

  // FAQ accordion + the auto-playing hero file-manager demo. Both are plain DOM
  // controllers over the injected markup; they clean themselves up on unmount.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = [
      startDriveFaq(root),
      startDriveHeroDemo(root),
      startDriveShareDemo(root),
      startDriveDataRoomDemo(root),
    ];
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-work-drive-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Drive">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="44" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="wd-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DRIVE_HERO_TEXTCOL }} />
                {/* Right: file-manager mockup canvas (balanced HTML). The injected
                    root is tpl 71 — it becomes the flex child directly; its inline
                    max-width is overridden in CSS (the .wd-hero-mockcol recipe
                    targets tpl 71 under the row) so it fills the right column. */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DRIVE_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: DRIVE_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
