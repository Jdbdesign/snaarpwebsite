'use client';

import { useLayoutEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './mail.css';
import './mail-animations.css';
import { MAIL_HTML } from './mailHtml';

// The Snaarp Mail page is a static, fully server-rendered layout (every
// "mockup" — inbox, AI panel, devices, workflow diagram — was frozen into
// plain HTML by the bundler, so there are no live React demos to rebuild).
// We inject the whole page body as balanced HTML through a display:contents
// wrapper so it lays out exactly as authored, then tag elements with the
// site's shared [data-reveal] attributes so they animate in on scroll,
// reusing the global reveal system (globals.css + useScrollReveal).
export default function MailPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tag = (el: Element | null, opts?: { group?: string; batch?: string; pop?: boolean }) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      if (opts?.group) el.setAttribute('data-reveal-group', opts.group);
      if (opts?.batch) el.setAttribute('data-reveal-batch', opts.batch);
      if (opts?.pop) el.classList.add('ml-pop');
    };

    // 1) Section headings / eyebrows — sequence per section.
    root.querySelectorAll<HTMLElement>('section').forEach((section, si) => {
      const group = `ml-sec-${si}`;
      section.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((h) => tag(h, { group }));
    });

    // 2) Feature-icon strip cells (tpl 218) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="218"]').forEach((c) => tag(c, { group: 'ml-iconstrip', batch: 'iconstrip', pop: true }));

    // 3) "Complete Solution" feature cards (tpl 273) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="273"]').forEach((c) => tag(c, { group: 'ml-features', batch: 'features', pop: true }));

    // 4) Business-type photo cards (tpl 538) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="538"]').forEach((c) => tag(c, { group: 'ml-biz', batch: 'biz', pop: true }));

    // 5) Testimonial cards (tpl 547) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="547"]').forEach((c) => tag(c, { group: 'ml-testi', batch: 'testi', pop: true }));

    // 6) FAQ accordion items (tpl 567) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="567"]').forEach((c) => tag(c, { group: 'ml-faq', batch: 'faq', pop: true }));

    // 7) Generic sizeable rounded leaf cards in the remaining sections
    //    (AI assistant panel, pricing, migration, integration tiles) —
    //    pop-in, grouped by nearest section. Skip wrappers that contain
    //    other cards / already-tagged nodes so only leaf cards animate.
    const CARD_RADII = ['28px', '26px', '24px', '22px', '20px', '18px', '16px'];
    const sel = CARD_RADII.map((r) => `section [style*="border-radius: ${r}"]`).join(', ');
    root.querySelectorAll<HTMLElement>(sel).forEach((c) => {
      if (c.hasAttribute('data-reveal')) return;
      if (c.querySelector('[data-dc-tpl="273"], [data-dc-tpl="538"], [data-dc-tpl="547"], [data-dc-tpl="567"], [data-reveal]')) return;
      const r = c.getBoundingClientRect();
      if (r.width < 220) return;
      const sec = c.closest('section');
      const idx = sec ? Array.from(root.querySelectorAll('section')).indexOf(sec) : 0;
      tag(c, { group: `ml-cards-${idx}`, batch: `cards-${idx}`, pop: true });
    });
  }, []);

  useScrollReveal(rootRef);

  return (
    <div ref={rootRef} className="snaarp-mail-page">
      <div id="dc-root">
        <div className="sc-host" data-sc-name="Snaarp Email">
          <div style={{ minHeight: '100vh', background: 'rgb(250, 250, 254)', overflowX: 'hidden' }}>
            <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: MAIL_HTML }} />
          </div>
        </div>
      </div>
    </div>
  );
}
