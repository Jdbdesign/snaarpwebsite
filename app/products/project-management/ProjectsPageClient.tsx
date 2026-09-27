'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './projects.css';
import './projects-animations.css';
import {
  PROJECTS_HERO_TEXTCOL,
  PROJECTS_HERO_DECO,
  PROJECTS_BEFORE_EYN,
  PROJECTS_EYN_TEXTCOL,
  PROJECTS_BEFORE_MOB,
  PROJECTS_MOB_TEXTCOL,
  PROJECTS_MOB_FOCUS,
  PROJECTS_AFTER_MOB,
} from './projectsHtml';
import { ProjectManagementPreviewMockup } from '@/components/ProjectManagementPreviewMockup';
import { ProjectTimelinePreviewMockup } from '@/components/ProjectTimelinePreviewMockup';
import { MobileAppPreviewMockup } from '@/components/MobileAppPreviewMockup';

// Two sections of the project-management page are reconstructed in JSX so live,
// server-rendered React mockups can sit in their mockup columns (no blank flash
// on reload; they animate on the client):
//   • Hero → the animated "Hello Maya" dashboard (ProjectManagementPreviewMockup)
//   • "Everything You Need to Deliver Projects" → the interactive tabbed
//     "Project Timeline" tablet (ProjectTimelinePreviewMockup)
// The bundle's fixed inline styles are reproduced here; each surrounding text
// column / the remaining sections are injected as balanced HTML through
// display:contents wrappers so they lay out exactly as authored.
const tpl5Style: CSSProperties = { minHeight: '100vh', background: 'rgb(250, 250, 254)', overflowX: 'hidden' };
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(800px 560px at 78% 34%, rgb(236, 230, 255) 0%, rgba(236, 230, 255, 0) 62%), radial-gradient(600px 420px at 0% 100%, rgb(242, 239, 255) 0%, rgba(242, 239, 255, 0) 70%), rgb(250, 250, 254)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(32px, 4vw, 48px) clamp(20px, 4vw, 48px) clamp(48px, 6vw, 72px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '44px',
};
const eynSectionStyle: CSSProperties = {
  background: 'radial-gradient(700px 500px at 75% 45%, rgb(239, 235, 255), rgba(239, 235, 255, 0) 70%), rgb(250, 250, 254)',
};
const eynRowStyle: CSSProperties = {
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(40px, 5vw, 60px) clamp(20px, 4vw, 48px) 40px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '44px',
};
const mobSectionStyle: CSSProperties = { background: 'rgb(250, 250, 254)' };
const mobRowStyle: CSSProperties = {
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(40px, 5vw, 56px) clamp(20px, 4vw, 48px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '36px',
};

export default function ProjectsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag the injected (dangerouslySetInnerHTML) + JSX content with the site's
  // shared [data-reveal] attributes so it animates in as the user scrolls,
  // reusing the global reveal system (globals.css + useScrollReveal). Runs in
  // a layout effect so tags are applied BEFORE useScrollReveal's effect scans
  // for [data-reveal]. Careful to skip display:contents wrappers, the zoomed
  // mockup nodes, and the live React mockups (which have their own motion).
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('pj-pop');
    };

    // Skip anything inside the live mockups / zoom frames.
    const inMockup = (el: Element) => !!el.closest('.projects-hero-mock, .projects-eyn-mock, .snaarp-mobile-mockup');

    // 1) Section-level text blocks: headings, ledes, eyebrows, feature rows.
    //    Group per section (by nearest <section>) so they sequence together.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `pj-sec-${si}`;
      // Heading / eyebrow / lede / paragraph within the section's text column,
      // but NOT deep inside cards (limit to reasonably shallow content nodes).
      const heads = section.querySelectorAll<HTMLElement>('h1, h2, h3');
      heads.forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Hero text column pieces (heading already tagged) — lede, CTA row,
    //    trust bullets — as a load-style sequence via data-reveal too.
    const heroHead = root.querySelector<HTMLElement>('.projects-hero-heading');
    if (heroHead) {
      const col = heroHead.parentElement;
      if (col) {
        tag(heroHead, { group: 'pj-hero' });
        tag(col.querySelector('.projects-lede'), { group: 'pj-hero' });
        // CTA row + trust row (direct-ish children after the lede)
        col.querySelectorAll(':scope > div').forEach((d) => tag(d as HTMLElement, { group: 'pj-hero' }));
      }
    }

    // 3) Feature-icon cards grid (tpl 246) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="246"]').forEach((c) => tag(c, { group: 'pj-features', batch: 'features', pop: true }));

    // 4) Use-case tiles (tpl 361) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="361"]').forEach((c) => tag(c, { group: 'pj-usecases', batch: 'usecases', pop: true }));

    // 4b) AI + Automation prompt/action cards (.scpe) — staggered batch,
    //     grouped by their parent grid so each set sequences on its own.
    const scpeGrids = new Set<Element>();
    root.querySelectorAll<HTMLElement>('.scpe').forEach((c) => { if (c.parentElement) scpeGrids.add(c.parentElement); });
    Array.from(scpeGrids).forEach((grid, gi) => {
      grid.querySelectorAll<HTMLElement>('.scpe').forEach((c) => tag(c, { group: `pj-scpe-${gi}`, batch: `scpe-${gi}`, pop: true }));
    });

    // 5) Generic rounded panel/stat/pricing/testimonial cards in the tail
    //    sections: any element with a sizeable rounded border-radius that
    //    isn't a mockup, tagged with a pop. Grouped by nearest section.
    //    Skip elements that CONTAIN other cards (grid wrappers like tpl 244)
    //    or already-tagged batch cards, so only leaf cards animate — tagging
    //    a wrapper would briefly hide all its cards while it sits at the fold.
    const CARD_RADII = ['24px', '22px', '20px', '18px', '16px'];
    const sel = CARD_RADII.map((r) => `section [style*="border-radius: ${r}"]`).join(', ');
    root.querySelectorAll<HTMLElement>(sel).forEach((c) => {
      if (inMockup(c)) return;
      if (c.classList.contains('projects-eyn-tabletframe') || c.classList.contains('projects-hero-dashwrap')) return;
      if (c.hasAttribute('data-reveal')) return;
      // skip wrappers that contain already-tagged cards or the icon-card grid
      if (c.querySelector('[data-dc-tpl="246"], [data-dc-tpl="361"], [data-reveal]')) return;
      const r = c.getBoundingClientRect();
      if (r.width < 180) return;
      const sec = c.closest('section');
      const idx = sec ? Array.from(root.querySelectorAll('section')).indexOf(sec) : 0;
      tag(c, { group: `pj-cards-${idx}`, batch: `cards-${idx}`, pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-projects-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Projects Website">
          <div style={tpl5Style}>
            {/* ── Hero section (reconstructed) ── */}
            <section data-screen-label="Hero" style={heroSectionStyle}>
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_HERO_DECO }} />
              <div className="projects-container projects-hero-row" style={heroRowStyle}>
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_HERO_TEXTCOL }} />
                <div className="projects-hero-mockcol" style={{ flex: '1 1 560px', minWidth: 0, maxWidth: '830px', marginLeft: 'auto' }}>
                  <div className="projects-hero-mock projects-hero-dashwrap" style={{ position: 'relative', width: '980px', height: '680px' }}>
                    <ProjectManagementPreviewMockup autoplay />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Sections between the hero and the timeline section ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_BEFORE_EYN }} />

            {/* ── "Everything You Need to Deliver Projects" (reconstructed) ── */}
            <section style={eynSectionStyle}>
              <div className="projects-container" style={eynRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_EYN_TEXTCOL }} />
                {/* Right: interactive tabbed Project Timeline tablet */}
                <div className="projects-eyn-mockcol" style={{ flex: '1 1 540px', minWidth: 0, maxWidth: '760px', marginLeft: 'auto' }}>
                  <div className="projects-eyn-mock projects-eyn-tabletframe" style={{ position: 'relative', width: '760px', height: '540px' }}>
                    <ProjectTimelinePreviewMockup />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Sections between the timeline and the mobile section ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_BEFORE_MOB }} />

            {/* ── "Stay Connected Anywhere" (reconstructed) ── */}
            <section style={mobSectionStyle}>
              <div className="projects-container" style={mobRowStyle}>
                {/* Left text column + app-store badges (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_MOB_TEXTCOL }} />
                {/* Middle: interactive two-phone mobile app demo */}
                <div style={{ flex: '1 1 440px', minWidth: 0, maxWidth: '500px', margin: '0px auto' }}>
                  <div style={{ position: 'relative', width: '100%', height: '520px' }}>
                    <MobileAppPreviewMockup />
                  </div>
                </div>
                {/* Right "Focus on What Matters" panel (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_MOB_FOCUS }} />
              </div>
            </section>

            {/* ── Every section after the mobile section (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: PROJECTS_AFTER_MOB }} />
          </div>
        </div>
      </div>
    </div>
  );
}
