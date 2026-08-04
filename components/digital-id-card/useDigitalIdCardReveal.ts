'use client';

import { useEffect, type RefObject } from 'react';

// Scroll-reveal for the Digital ID Card product page. Same approach as
// components/lock/useLockReveal.ts — uses data-dicard-reveal attribute
// and dicard-is-revealed class.
export function useDigitalIdCardReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(container.querySelectorAll<HTMLElement>('[data-dicard-reveal]'));
    if (container.hasAttribute('data-dicard-reveal')) els.unshift(container);
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => el.classList.add('dicard-is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-dicard-reveal-delay') || '0', 10);
          setTimeout(() => {
            target.classList.add('dicard-is-revealed');
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
