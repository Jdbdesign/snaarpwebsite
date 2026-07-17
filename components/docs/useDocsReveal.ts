'use client';

import { useEffect, type RefObject } from 'react';

// Scroll-reveal for the Document product page only. Ported 1:1 from the
// standalone design bundle's own setupReveal() — kept separate from the
// site's shared hooks/useScrollReveal.ts because the timing/easing differ
// (see the comment in globals.css above the .docs-page [data-docs-reveal]
// rules). Same approach as components/pdf-reader/usePdfReaderReveal.ts.
export function useDocsReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // querySelectorAll only matches descendants, so a container that is
    // itself the reveal target (the `reveal` prop case in
    // DocsRevealSection) has to be added in separately.
    const els = Array.from(container.querySelectorAll<HTMLElement>('[data-docs-reveal]'));
    if (container.hasAttribute('data-docs-reveal')) els.unshift(container);
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => el.classList.add('docs-is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-docs-reveal-delay') || '0', 10);
          setTimeout(() => {
            target.classList.add('docs-is-revealed');
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
