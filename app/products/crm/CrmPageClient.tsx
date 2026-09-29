'use client';

import { useLayoutEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './crm.css';
import './crm-animations.css';
import { CRM_HERO_DECO, CRM_HERO_TEXTCOL, CRM_AFTER_HERO } from './crmHtml';
import { CrmDashboardDemo } from '@/components/CrmDashboardDemo';

// The standalone "Snaarp CRM Website.html" bundle was headless-rendered so all
// of its runtime {{ }} template bindings + initial state resolved to static
// markup, then normalized (brand color, stripped runtime-only attributes). The
// full body is injected here through a display:contents wrapper so it lays out
// exactly as authored; the shared Header/Footer come from page.tsx. A layout
// effect tags headings / cards with the site's [data-reveal] system so the page
// animates in on scroll like the other product pages.
export default function CrmPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('crm-pop');
    };

    // 1) Per-section headings/eyebrows sequence together.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `crm-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => tag(h, { group }));
    });

    // 2) Sizeable rounded leaf cards across sections — springy pop-in, grouped
    //    by nearest section. Skip wrappers that contain other tagged cards so
    //    only leaf cards animate (never a grid wrapper that would hide its kids).
    const CARD_RADII = ['24px', '22px', '20px', '18px', '16px', '14px'];
    const sel = CARD_RADII.map((r) => `section [style*="border-radius: ${r}"]`).join(', ');
    const sections = Array.from(root.querySelectorAll('section'));
    root.querySelectorAll<HTMLElement>(sel).forEach((c) => {
      if (c.hasAttribute('data-reveal')) return;
      if (c.querySelector('[data-reveal]')) return;
      const r = c.getBoundingClientRect();
      if (r.width < 150 || r.height < 60) return;
      const sec = c.closest('section');
      const idx = sec ? sections.indexOf(sec) : 0;
      tag(c, { group: `crm-cards-${idx}`, batch: `cards-${idx}`, pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-crm-page">
      {/* ── Hero (reconstructed so the live CRM demo sits in the mock canvas) ── */}
      <section data-screen-label="Hero" style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(760px 560px at 76% 40%, rgb(237, 231, 255) 0%, rgba(237, 231, 255, 0) 62%), radial-gradient(600px 420px at 0% 100%, rgb(242, 239, 255) 0%, rgba(242, 239, 255, 0) 70%), rgb(250, 250, 254)' }}>
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: CRM_HERO_DECO }} />
        <div className="crm-hero-row" style={{ position: 'relative', maxWidth: '1280px', margin: '0px auto', padding: 'clamp(28px, 4vw, 40px) clamp(20px, 4vw, 48px) clamp(40px, 5vw, 56px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          {/* Left text column (balanced HTML) */}
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: CRM_HERO_TEXTCOL }} />
          {/* Right: interactive CRM dashboard demo */}
          <div data-dc-tpl="67" style={{ flex: '1 1 560px', minWidth: 0, maxWidth: '820px', marginLeft: 'auto' }}>
            <div data-dc-tpl="68" style={{ position: 'relative', width: '840px', height: '540px', zoom: 0.771 }}>
              <CrmDashboardDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ── Every section after the hero (balanced HTML) ── */}
      <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: CRM_AFTER_HERO }} />
    </div>
  );
}
