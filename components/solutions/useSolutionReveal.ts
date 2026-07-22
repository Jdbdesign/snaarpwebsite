'use client';

import { useEffect, type RefObject } from 'react';

// Scroll-reveal shared by every Solution page (/solutions/*). Ported 1:1 from
// the Sales Pipeline & Outreach standalone design bundle's own setupReveal()
// — kept separate from the site's shared hooks/useScrollReveal.ts because the
// timing/threshold differ (see the comment in globals.css above the
// .solution-page [data-solution-reveal] rules). Same rationale as
// components/lock/useLockReveal.ts and components/esignature/useEsignatureReveal.ts.
// Future Solution pages (Customer Onboarding, Team Onboarding & Training,
// etc.) reuse this hook rather than each getting their own copy, since it's
// the Solution template's own baked-in reveal behavior, not one-off per page.
export function useSolutionReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(container.querySelectorAll<HTMLElement>('[data-solution-reveal]'));
    if (container.hasAttribute('data-solution-reveal')) els.unshift(container);
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => el.classList.add('solution-is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-solution-reveal-delay') || '0', 10);
          setTimeout(() => {
            target.classList.add('solution-is-revealed');
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
