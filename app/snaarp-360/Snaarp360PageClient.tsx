'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './snaarp-360.css';
import './snaarp-360-animations.css';
import {
  S360_HERO_BG,
  S360_HERO_CONTENT,
  S360_HERO_FORM,
  S360_AFTER_HERO,
} from './snaarp360Html';
import { startSnaarp360Demos } from './snaarp360Demos';

// Snaarp 360 is a standalone marketing landing page. The hero is reconstructed
// in JSX (the section + decorative background layers + the row shell) so the
// content column and sign-up form stay top-aligned and the row goes full-bleed
// cleanly on large screens. The content column, the form, and every section
// after the hero are injected as balanced HTML through display:contents
// wrappers so they lay out exactly as authored (brand violet normalized to
// Snaarp purple).
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'linear-gradient(rgb(245, 241, 255) 0%, rgb(251, 250, 255) 60%, rgb(255, 255, 255) 100%)',
};

export default function Snaarp360PageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected content with the shared [data-reveal] attributes so it
  // animates in on scroll. Runs in a layout effect so tags are applied BEFORE
  // useScrollReveal scans.
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
      if (opts?.pop) el.classList.add('s360-pop');
    };

    // Section headings — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `s360-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => tag(h, { group }));
    });
  }, []);

  // Continuous, height-safe looping demos over the injected markup (built in
  // snaarp360Demos). Pure DOM controllers that never change layout size, so the
  // page never glitches or jumps. They pause on hover / off-screen and clean up
  // on unmount.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stops = startSnaarp360Demos(root);
    return () => stops.forEach((stop) => stop());
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-360-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp 360">
          <div style={{ minHeight: '100vh', background: 'rgb(255, 255, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (section + bg layers + row shell reconstructed) ── */}
            <section data-dc-tpl="69" id="top" data-screen-label="Hero" style={heroSectionStyle}>
              {/* Decorative background wash layers (balanced HTML) */}
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: S360_HERO_BG }} />
              <div className="s360-hero-row" data-dc-tpl="74">
                {/* Left: hero content column (balanced HTML, root tpl 75) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: S360_HERO_CONTENT }} />
                {/* Right: sign-up form column (balanced HTML, root tpl 286) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: S360_HERO_FORM }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML, Logos..CTA) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: S360_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
