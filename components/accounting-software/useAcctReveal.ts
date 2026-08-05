'use client';

import { useEffect, type RefObject } from 'react';

export function useAcctReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(container.querySelectorAll<HTMLElement>('[data-acct-reveal]'));
    if (container.hasAttribute('data-acct-reveal')) els.unshift(container);
    if (!els.length) return;

    if (reduce) {
      els.forEach((el) => el.classList.add('acct-is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-acct-reveal-delay') || '0', 10);
          setTimeout(() => { target.classList.add('acct-is-revealed'); }, delay);
          io.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [containerRef]);
}
