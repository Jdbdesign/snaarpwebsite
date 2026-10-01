'use client';

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from 'react';
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

  // "How it works" step player. The standalone bundle auto-advances through
  // the 3 steps, filling each step's progress bar, highlighting the active
  // step, and swapping the phone screen to match. That behaviour is JS-driven,
  // so it is lost in a static capture — this effect restores it against the
  // injected markup markers ([data-lk-step] / [data-lk-circle] / [data-lk-title]
  // / [data-lk-bar] on the buttons; [data-lk-screen] panels inside the phone).
  // Steps are also clickable, and the player pauses when off-screen or when the
  // user prefers reduced motion.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const buttons = Array.from(
      root.querySelectorAll<HTMLButtonElement>('button[data-lk-step]'),
    ).sort((a, b) => Number(a.dataset.lkStep) - Number(b.dataset.lkStep));
    const screens = Array.from(
      root.querySelectorAll<HTMLElement>('[data-lk-screen]'),
    ).sort((a, b) => Number(a.dataset.lkScreen) - Number(b.dataset.lkScreen));
    if (buttons.length < 2 || screens.length < 2) return;

    const n = Math.min(buttons.length, screens.length);
    const STEP_MS = 3200; // dwell per step (matches the bundle's cadence)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const circleOf = (b: HTMLElement) => b.querySelector<HTMLElement>('[data-lk-circle]');
    const titleOf = (b: HTMLElement) => b.querySelector<HTMLElement>('[data-lk-title]');
    const barOf = (b: HTMLElement) => b.querySelector<HTMLElement>('[data-lk-bar]');

    let active = -1;
    let barTimer: number | undefined;

    const render = (idx: number) => {
      buttons.forEach((b, i) => {
        const on = i === idx;
        const past = i < idx;
        const circle = circleOf(b);
        const title = titleOf(b);
        const bar = barOf(b);
        if (circle) {
          circle.style.background = on || past ? 'rgb(124, 58, 237)' : 'rgb(239, 235, 255)';
          circle.style.color = on || past ? 'rgb(255, 255, 255)' : 'rgb(124, 58, 237)';
          circle.style.boxShadow = on ? 'rgb(228, 220, 255) 0px 0px 0px 5px' : 'none';
        }
        if (title) title.style.color = on ? 'rgb(124, 58, 237)' : 'rgb(14, 18, 56)';
        if (bar) {
          // Active bar animates 0 -> 100 over the dwell; others reflect progress.
          bar.style.transition = 'none';
          bar.style.width = past ? '100%' : '0%';
          if (on && !reduce) {
            // next frame: enable the fill transition and run it to 100%.
            window.requestAnimationFrame(() => {
              bar.style.transition = `width ${STEP_MS}ms linear`;
              bar.style.width = '100%';
            });
          } else if (on) {
            bar.style.width = '100%';
          }
        }
      });
      screens.forEach((s, i) => {
        s.style.display = i === idx ? 'flex' : 'none';
        if (i === idx && !reduce) {
          s.style.animation = 'none';
          window.requestAnimationFrame(() => {
            s.style.animation = 'lkRise 0.32s ease';
          });
        }
      });
    };

    const go = (idx: number) => {
      active = ((idx % n) + n) % n;
      render(active);
    };

    go(0);

    if (!reduce) {
      barTimer = window.setInterval(() => go(active + 1), STEP_MS);
    }

    const onClick = (e: Event) => {
      const btn = (e.currentTarget as HTMLElement);
      const idx = Number(btn.dataset.lkStep);
      if (Number.isNaN(idx)) return;
      if (barTimer) window.clearInterval(barTimer);
      go(idx);
      if (!reduce) barTimer = window.setInterval(() => go(active + 1), STEP_MS);
    };
    buttons.forEach((b) => b.addEventListener('click', onClick));

    return () => {
      if (barTimer) window.clearInterval(barTimer);
      buttons.forEach((b) => b.removeEventListener('click', onClick));
    };
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
