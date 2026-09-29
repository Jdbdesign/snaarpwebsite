'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
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

    // 2) Feature-icon strip cells (tpl 220 / .scpc) — staggered batch.
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="220"]').forEach((c) => tag(c, { group: 'ml-iconstrip', batch: 'iconstrip', pop: true }));

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

  // Pricing card slider — drag through the 5 real Snaarp Mail plans, updating
  // the plan name, seat count, monthly price and the per-mailbox rate live.
  // The rate note keeps the "£0.50 / mailbox" headline honest: it's the
  // price ÷ included users for that plan, shown next to the real monthly cost.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const slider = root.querySelector<HTMLInputElement>('[data-mail-plan-slider]');
    if (!slider) return;

    // From the official Snaarp Mail pricing (monthly): 5 plans.
    const PLANS = [
      { name: 'Starter', users: 10, price: 5, storage: '10 GB' },
      { name: 'Growth', users: 25, price: 25, storage: '100 GB' },
      { name: 'Business', users: 25, price: 50, storage: '600 GB' },
      { name: 'Scale', users: 50, price: 100, storage: '2.5 TB' },
      { name: 'Enterprise', users: 100, price: 200, storage: '5 TB' },
    ];

    const nameEl = root.querySelector<HTMLElement>('[data-mail-plan-name]');
    const usersEl = root.querySelector<HTMLElement>('[data-mail-plan-users]');
    const priceEl = root.querySelector<HTMLElement>('[data-mail-plan-price]');
    const noteEl = root.querySelector<HTMLElement>('[data-mail-plan-note]');
    // The small "X GB · Y users" line under the slider.
    const metaEl = root.querySelector<HTMLElement>('[data-mail-plan-meta]');

    const render = () => {
      const p = PLANS[Math.max(0, Math.min(PLANS.length - 1, Number(slider.value)))];
      if (!p) return;
      const perMailbox = p.price / p.users; // e.g. 5/10 = 0.50
      const perStr = perMailbox < 1 ? `£${perMailbox.toFixed(2)}` : `£${perMailbox % 1 === 0 ? perMailbox : perMailbox.toFixed(2)}`;
      if (nameEl) nameEl.textContent = p.name;
      if (usersEl) usersEl.textContent = `${p.users} users`;
      if (priceEl) priceEl.textContent = `£${p.price}`;
      if (noteEl) noteEl.textContent = `= ${perStr} / mailbox`;
      if (metaEl) metaEl.textContent = `${p.storage} · ${p.users} users`;
    };

    render();
    slider.addEventListener('input', render);
    return () => slider.removeEventListener('input', render);
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
