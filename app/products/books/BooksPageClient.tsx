'use client';

import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './books.css';
import './books-animations.css';
import {
  BOOKS_HERO_DECO,
  BOOKS_HERO_TEXTCOL,
  BOOKS_AFTER_HERO_PRE,
  BOOKS_EYN_TEXTCOL,
  BOOKS_EYN_SECTION_STYLE,
  BOOKS_MOBILE_TEXTCOL,
  BOOKS_MOBILE_SECTION_STYLE,
  BOOKS_AFTER_MOBILE,
  BOOKS_REPORTS1_TEXTCOL,
  BOOKS_REPORTS2_TEXTCOL,
  BOOKS_AFTER_REPORTS,
} from './booksHtml';
import { BooksAppPreviewMockup } from '@/components/BooksAppPreviewMockup';
import { BooksMobilePreviewMockup } from '@/components/BooksMobilePreviewMockup';
import { BooksDashboardPreviewMockup } from '@/components/BooksDashboardPreviewMockup';
import { BooksMobileDuoMockup } from '@/components/BooksMobileDuoMockup';
import { BooksReportsPreviewMockup } from '@/components/BooksReportsPreviewMockup';
import { BooksInvoicingMockup } from '@/components/BooksInvoicingMockup';

// The hero section is reconstructed in JSX so the animated, server-rendered
// "Snaarp Books" app-tablet demo (BooksAppPreviewMockup) sits in the mockup
// canvas — no blank flash on reload; it animates on the client. The hero's
// left text column, the decorative blobs, the phone, and every section after
// the hero are injected as balanced HTML through display:contents wrappers so
// they lay out exactly as authored.
const heroSectionStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background:
    'radial-gradient(900px 560px at 82% 30%, rgb(234, 228, 255) 0%, rgba(234, 228, 255, 0) 62%), radial-gradient(700px 420px at 0% 100%, rgb(242, 239, 255) 0%, rgba(242, 239, 255, 0) 70%), rgb(250, 250, 254)',
};
const heroRowStyle: CSSProperties = {
  position: 'relative',
  maxWidth: '1280px',
  margin: '0px auto',
  padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 48px) clamp(56px, 7vw, 88px)',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '48px',
};

// Turn an inline CSS string ("background: ...; color: ...;") into a React style object.
function parseStyle(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const idx = decl.indexOf(':');
    if (idx < 0) continue;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!prop) continue;
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = val;
  }
  return out as CSSProperties;
}

export default function BooksPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Tag injected (dangerouslySetInnerHTML) + JSX content with the site's
  // shared [data-reveal] attributes so it animates in on scroll, reusing the
  // global reveal system (globals.css + useScrollReveal). Runs in a layout
  // effect so tags are applied BEFORE useScrollReveal scans for [data-reveal].
  // Skips display:contents wrappers and the live mockup canvases (which hold
  // absolutely-positioned React demos with their own motion).
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('bk-pop');
    };

    const inMockup = (el: Element) =>
      !!el.closest('.books-hero-mock, .books-eyn-mock, .books-reports-mock, .books-seamless-mock, .books-mobile-mock');

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `bk-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => { if (!inMockup(h)) tag(h, { group }); });
    });

    // 2) Feature-icon cards (tpl 228) — staggered batch, springy pop.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="228"]').forEach((c) => tag(c, { group: 'bk-features', batch: 'features', pop: true }));

    // 3) Stat cards (tpl 493) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="493"]').forEach((c) => tag(c, { group: 'bk-stats', batch: 'stats', pop: true }));

    // 4) Integration logo tiles (tpl 500/503/507/510/514 wrappers) — batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="500"], [data-dc-tpl="503"], [data-dc-tpl="507"], [data-dc-tpl="510"], [data-dc-tpl="514"]').forEach((c) => tag(c, { group: 'bk-logos', batch: 'logos', pop: true }));

    // 5) Generic sizeable rounded leaf cards in tail sections (pricing,
    //    testimonial, CTA panels) — pop-in, grouped by nearest section.
    const CARD_RADII = ['28px', '26px', '24px', '20px', '18px', '16px'];
    const sel = CARD_RADII.map((r) => `section [style*="border-radius: ${r}"]`).join(', ');
    root.querySelectorAll<HTMLElement>(sel).forEach((c) => {
      if (inMockup(c)) return;
      if (c.hasAttribute('data-reveal')) return;
      // skip wrappers that contain other cards / already-tagged nodes
      if (c.querySelector('[data-dc-tpl="228"], [data-dc-tpl="493"], [data-reveal]')) return;
      const r = c.getBoundingClientRect();
      if (r.width < 200) return;
      const sec = c.closest('section');
      const idx = sec ? Array.from(root.querySelectorAll('section')).indexOf(sec) : 0;
      tag(c, { group: `bk-cards-${idx}`, batch: `cards-${idx}`, pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-books-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Books Website">
          <div style={{ minHeight: '100vh', background: 'rgb(250, 250, 254)', overflowX: 'hidden' }}>
            {/* ── Hero (reconstructed) ── */}
            <section data-screen-label="Hero" style={heroSectionStyle}>
              <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_HERO_DECO }} />
              <div className="books-container books-hero-row" style={heroRowStyle}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_HERO_TEXTCOL }} />
                {/* Right: tablet (interactive) + phone (static), inside the mock canvas */}
                <div className="books-hero-mockcol" style={{ flex: '1 1 520px', minWidth: 0, maxWidth: '740px', marginLeft: 'auto' }}>
                  <div className="books-hero-mock" style={{ position: 'relative', width: '740px', height: '560px' }}>
                    {/* Tablet — realistic device body: metal frame + black rim + screen */}
                    <div style={{ position: 'absolute', left: 0, top: '18px', width: '600px', height: '450px', borderRadius: '32px', padding: '4px', background: 'linear-gradient(150deg, rgb(74,74,85) 0%, rgb(26,26,32) 35%, rgb(44,44,52) 70%, rgb(16,16,20) 100%)', boxShadow: 'rgba(40,20,130,0.45) 0px 50px 90px -30px, rgba(20,10,60,0.35) 0px 20px 40px -20px' }}>
                      <div style={{ width: '100%', height: '100%', borderRadius: '29px', background: 'rgb(8,8,10)', padding: '10px' }}>
                        <BooksAppPreviewMockup />
                      </div>
                    </div>
                    {/* Phone — interactive mobile demo (renders at its own absolute position) */}
                    <BooksMobilePreviewMockup />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Sections between hero and the laptop feature section (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_AFTER_HERO_PRE }} />

            {/* ── "Everything You Need. In One Place." (reconstructed with live laptop) ── */}
            <section style={parseStyle(BOOKS_EYN_SECTION_STYLE)}>
              <div className="books-container" style={{ maxWidth: '1280px', margin: '0px auto', padding: 'clamp(56px, 7vw, 80px) clamp(20px, 4vw, 48px) 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px' }}>
                {/* Left text column (balanced HTML) */}
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_EYN_TEXTCOL }} />
                {/* Right: interactive laptop */}
                <div className="books-eyn-mockcol" style={{ flex: '1 1 560px', minWidth: 0, maxWidth: '800px', marginLeft: 'auto' }}>
                  <div className="books-eyn-mock" style={{ position: 'relative', width: '800px', height: '500px' }}>
                    {/* laptop lid — metal frame */}
                    <div style={{ position: 'absolute', left: '30px', top: 0, width: '740px', height: '470px', borderRadius: '22px 22px 8px 8px', background: 'linear-gradient(160deg, rgb(58,58,68), rgb(18,18,22) 40%, rgb(35,35,42))', padding: '2px', boxShadow: 'rgba(40,20,130,0.5) 0px 50px 90px -40px' }}>
                      {/* black rim */}
                      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '20px 20px 6px 6px', background: 'rgb(9,9,11)', padding: '14px 14px 18px' }}>
                        {/* camera dot */}
                        <span style={{ position: 'absolute', top: '5px', left: '50%', marginLeft: '-3px', width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(29,31,43)', boxShadow: 'rgb(44,47,64) 0px 0px 0px 1.5px inset', zIndex: 2 }} />
                        {/* live screen */}
                        <BooksDashboardPreviewMockup />
                      </div>
                    </div>
                    {/* laptop base / hinge */}
                    <div style={{ position: 'absolute', left: 0, top: '466px', width: '800px', height: '16px', borderRadius: '2px 2px 14px 14px', background: 'linear-gradient(rgb(230,230,236) 0%, rgb(201,201,210) 45%, rgb(165,165,176) 100%)', boxShadow: 'rgba(30,20,90,0.35) 0px 18px 30px -10px' }}>
                      <span style={{ position: 'absolute', left: '50%', top: 0, marginLeft: '-60px', width: '120px', height: '6px', borderRadius: '0px 0px 8px 8px', background: 'linear-gradient(rgb(184,184,194), rgb(212,212,219))' }} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── "Manage Your Business From Anywhere" (reconstructed with live dual phones) ── */}
            <section style={parseStyle(BOOKS_MOBILE_SECTION_STYLE)}>
              <div className="books-container" style={{ maxWidth: '1280px', margin: '0px auto', padding: '32px clamp(20px, 4vw, 48px) clamp(56px, 7vw, 80px)' }}>
                <div style={{ borderRadius: '28px', background: 'radial-gradient(600px 400px at 20% 50%, rgb(230, 222, 255), rgba(230, 222, 255, 0) 70%), linear-gradient(135deg, rgb(241, 238, 253), rgb(247, 246, 253))', border: '1px solid rgb(236, 232, 251)', padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px' }}>
                  {/* Left: dual interactive phones */}
                  <div style={{ flex: '1 1 440px', minWidth: 0, maxWidth: '580px' }}>
                    <div className="books-mobile-mock" style={{ position: 'relative', width: '580px', height: '540px', zoom: 0.929 }}>
                      <BooksMobileDuoMockup />
                    </div>
                  </div>
                  {/* Right: text column (balanced HTML) */}
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_MOBILE_TEXTCOL.trim() }} />
                </div>
              </div>
            </section>

            {/* ── Dark banner + testimonials + integrations (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_AFTER_MOBILE }} />

            {/* ── "Make Smarter Decisions" #1 — Real-time insights (live reports demo) ── */}
            <section style={{ background: 'rgb(250, 250, 254)' }}>
              <div className="books-container" style={{ maxWidth: '1280px', margin: '0px auto', padding: 'clamp(56px, 7vw, 80px) clamp(20px, 4vw, 48px) 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px' }}>
                <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_REPORTS1_TEXTCOL.trim() }} />
                <div className="books-reports-mockcol" style={{ flex: '1 1 520px', minWidth: 0, maxWidth: '700px', marginLeft: 'auto' }}>
                  <div className="books-reports-mock" style={{ position: 'relative', width: '700px', height: '440px', zoom: 0.897 }}>
                    <BooksReportsPreviewMockup />
                  </div>
                </div>
              </div>
            </section>

            {/* ── "Make Smarter Decisions" #2 — Seamless insights (live reports demo) ── */}
            <section style={{ background: 'rgb(250, 250, 254)' }}>
              <div className="books-container" style={{ maxWidth: '1280px', margin: '0px auto', padding: '16px clamp(20px, 4vw, 48px) clamp(48px, 6vw, 72px)' }}>
                <div style={{ borderRadius: '26px', background: 'linear-gradient(135deg, rgb(240, 238, 251), rgb(246, 245, 252))', border: '1px solid rgb(236, 232, 251)', padding: 'clamp(28px, 4vw, 44px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
                  <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_REPORTS2_TEXTCOL.trim() }} />
                  <div className="books-seamless-mockcol" style={{ flex: '1 1 520px', minWidth: 0, maxWidth: '720px', marginLeft: 'auto' }}>
                    <div className="books-seamless-mock" style={{ position: 'relative', width: '720px', height: '320px', zoom: 0.829 }}>
                      <BooksInvoicingMockup />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Pricing + everything after (balanced HTML) ── */}
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: BOOKS_AFTER_REPORTS }} />
          </div>
        </div>
      </div>
    </div>
  );
}
