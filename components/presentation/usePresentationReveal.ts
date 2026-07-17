'use client';

import { useEffect, type RefObject } from 'react';

// Scroll-reveal for the Presentation product page only. Ported 1:1 from the
// standalone design bundle's own setupReveal() — kept separate from the
// site's shared hooks/useScrollReveal.ts because the timing/easing differ
// (see the comment in globals.css above the .presentation-page
// [data-presentation-reveal] rules). Same approach as
// components/docs/useDocsReveal.ts.
export function usePresentationReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // querySelectorAll only matches descendants, so a container that is
    // itself the reveal target (the `reveal` prop case in
    // PresentationRevealSection) has to be added in separately.
    const els = Array.from(container.querySelectorAll<HTMLElement>('[data-presentation-reveal]'));
    if (container.hasAttribute('data-presentation-reveal')) els.unshift(container);
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => el.classList.add('presentation-is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-presentation-reveal-delay') || '0', 10);
          setTimeout(() => {
            target.classList.add('presentation-is-revealed');
          }, delay);
          io.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [containerRef]);
}
