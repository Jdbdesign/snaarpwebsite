'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './teams.css';
import './teams-animations.css';
import {
  TEAMS_HERO_TEXTCOL,
  TEAMS_HERO_MOCK,
  TEAMS_AFTER_HERO,
} from './teamsHtml';
import { startTeamsChatDemo } from './teamsChatDemo';
import { startTeamsInsightsDemo } from './teamsInsightsDemo';

// The Snaarp Teams hero is reconstructed in JSX (the row shell only) so the
// workspace mockup canvas sits top-aligned and fills the right column the
// way the Books hero does — the standalone bundle centred it, which left an
// awkward gap on wide screens. The left text column, the mockup canvas, and
// every section after the hero are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
//
// The hero background keeps the bundle's soft radial wash, shifted from the
// source's light-blue tint to a purple tint to match the Snaarp brand.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(560px 480px at 76% 34%, rgb(237, 231, 255) 0%, rgba(237, 231, 255, 0) 68%), radial-gradient(420px 300px at 92% 4%, rgb(241, 233, 255) 0%, rgba(241, 233, 255, 0) 70%), radial-gradient(700px 400px at 0% 100%, rgb(245, 241, 255) 0%, rgba(245, 241, 255, 0) 70%), rgb(251, 252, 255)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 4vw, 48px) clamp(36px, 4vw, 48px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '36px',
};

export default function TeamsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) content with the site's shared
  // [data-reveal] attributes so it animates in on scroll, reusing the global
  // reveal system (globals.css + useScrollReveal). Runs in a layout effect so
  // tags are applied BEFORE useScrollReveal scans for [data-reveal]. Skips
  // display:contents wrappers and the mockup canvases (tpl 70/279/454/605),
  // which hold frozen, zoom-scaled art with their own composition.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('tm-pop');
    };

    const MOCK_TPLS = ['70', '279', '454', '605'];
    const inMockup = (el: Element) =>
      MOCK_TPLS.some((t) => el.closest(`[data-dc-tpl="${t}"]`));

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `tm-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Benefits tiles (tpl 258) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="258"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-benefits', batch: 'benefits', pop: true });
    });

    // 3) Feature list items (tpl 270) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="270"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-features', batch: 'features', pop: true });
    });

    // 4) Integration logo tiles (tpl 371) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="371"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-integrations', batch: 'integrations', pop: true });
    });

    // 5) FAQ items (tpl 742) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="742"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-faq', batch: 'faq', pop: true });
    });

    // 6) Collaboration cards (tpl 340) — batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="340"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-collab', batch: 'collab', pop: true });
    });

    // 7) "Part of Snaarp 360" app tiles (tpl 386) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="386"]').forEach((c) => {
      if (!inMockup(c)) tag(c, { group: 'tm-apps360', batch: 'apps360', pop: true });
    });
  }, []);

  // Continuous "Product Team" chat demo inside the hero workspace mockup
  // (canvas tpl 70): messages, file uploads (which also appear in Shared
  // Files), voice notes, emoji reactions and typing indicators run on a
  // loop — no hover. Starts once the hero scrolls into view and preserves
  // the mockup's fixed size (message + file lists are capped). Scoped to the
  // hero canvas so the second (features) chat mockup is untouched.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const canvas = root.querySelector<HTMLElement>('[data-dc-tpl="70"]');
    if (!canvas) return;

    let stop: (() => void) | null = null;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !stop) {
            stop = startTeamsChatDemo(canvas);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(canvas);
    return () => { io.disconnect(); if (stop) stop(); };
  }, []);

  // Continuous micro-interactions for the "Insights / Mobile / Sync" section
  // (tpl 390): the Analytics card loops (chart redraw, donut spin, stat
  // ticks), the Mobile phone cycles its screen through Chat → Video → Files
  // → Notifications in sync with the explore list, and the Cross-Device card
  // cycles its device tabs + types into the sync field. Starts when the
  // section scrolls into view; preserves each card's fixed size.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const section = root.querySelector<HTMLElement>('[data-dc-tpl="390"]');
    if (!section) return;
    let stop: (() => void) | null = null;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !stop) {
            stop = startTeamsInsightsDemo(section);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(section);
    return () => { io.disconnect(); if (stop) stop(); };
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-teams-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Teams">
          <div style={{ minHeight: '100vh', background: 'rgb(251, 252, 255)', overflowX: 'hidden' }}>
            {/* ── Hero (row shell reconstructed for Books-style alignment) ── */}
            <section data-dc-tpl="44" data-screen-label="Hero" style={heroSectionStyle}>
              <div className="teams-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_HERO_TEXTCOL }} />
                {/* Right: workspace mockup canvas (balanced HTML). The injected
                    root is tpl 69 — it becomes the flex child directly; its
                    inline margin-left:auto / max-width are overridden in CSS
                    (the .teams-hero-mockcol recipe targets tpl 69). */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_HERO_MOCK }} />
              </div>
            </section>

            {/* ── Everything after the hero (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: TEAMS_AFTER_HERO }} />
          </div>
        </div>
      </div>
    </div>
  );
}
