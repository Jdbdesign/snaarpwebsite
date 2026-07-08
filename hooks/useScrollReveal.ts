'use client';

import { useEffect, type RefObject } from 'react';

// ===================== SCROLL REVEAL SYSTEM =====================
// Reusable, site-wide entrance animation — ported from the original
// vanilla-JS IIFE, scoped to a single container's subtree instead of the
// whole `document`. Every section's data-reveal-group name is unique and
// self-contained to that section, so scoping per-container produces
// identical results to the original single global scan.
//
//   data-reveal        — animates once, the first time it scrolls into view.
//   data-reveal-group  — elements sharing a group name are sequenced
//                        together in document order (eyebrow, then
//                        headline, then subtext, ...), independent of
//                        which DOM parent they live in.
//   data-reveal-batch  — consecutive elements in a group sharing the same
//                        batch name are treated as ONE step in the
//                        sequence, but cascade among themselves with a
//                        stagger capped so a big grid doesn't take forever
//                        to finish (card grids, stat rows).
//   data-reveal-delay  — explicit millisecond override, for the rare
//                        layout (e.g. a phone mockup flanked by cards
//                        placed via CSS grid columns) where visual "lead"
//                        order doesn't match DOM order.
const SLOT_STEP_MS = 100;
const BATCH_CAP_MS = 500;

function computeDelays(elements: HTMLElement[]): Map<HTMLElement, number> {
  const delays = new Map<HTMLElement, number>();
  let slot = 0;
  let i = 0;
  while (i < elements.length) {
    const el = elements[i];
    if (el.hasAttribute('data-reveal-delay')) {
      delays.set(el, Number(el.getAttribute('data-reveal-delay')));
      i++;
      continue;
    }
    const batchId = el.getAttribute('data-reveal-batch');
    if (batchId) {
      const batch = [el];
      i++;
      while (
        i < elements.length &&
        elements[i].getAttribute('data-reveal-batch') === batchId &&
        !elements[i].hasAttribute('data-reveal-delay')
      ) {
        batch.push(elements[i]);
        i++;
      }
      const base = slot * SLOT_STEP_MS;
      const innerStep = batch.length > 1 ? Math.min(SLOT_STEP_MS, BATCH_CAP_MS / (batch.length - 1)) : 0;
      batch.forEach((bEl, idx) => {
        delays.set(bEl, Math.round(base + idx * innerStep));
      });
      slot += 1;
    } else {
      delays.set(el, slot * SLOT_STEP_MS);
      slot += 1;
      i++;
    }
  }
  return delays;
}

export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasIO = 'IntersectionObserver' in window;

    const scrollElements = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!scrollElements.length) return;

    if (prefersReducedMotion || !hasIO) {
      scrollElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // Group by explicit data-reveal-group name; anything left ungrouped
    // falls back to grouping by its literal DOM parent (safety net).
    const namedGroups = new Map<string, HTMLElement[]>();
    const parentGroups = new Map<Element | null, HTMLElement[]>();
    scrollElements.forEach((el) => {
      const groupName = el.getAttribute('data-reveal-group');
      if (groupName) {
        if (!namedGroups.has(groupName)) namedGroups.set(groupName, []);
        namedGroups.get(groupName)!.push(el);
      } else {
        const parent = el.parentElement;
        if (!parentGroups.has(parent)) parentGroups.set(parent, []);
        parentGroups.get(parent)!.push(el);
      }
    });

    const delayForEl = new Map<HTMLElement, number>();
    namedGroups.forEach((els) => {
      computeDelays(els).forEach((d, el) => delayForEl.set(el, d));
    });
    parentGroups.forEach((els) => {
      computeDelays(els).forEach((d, el) => delayForEl.set(el, d));
    });

    const pending = new Set(scrollElements);

    function reveal(el: HTMLElement) {
      if (!pending.has(el)) return;
      el.style.setProperty('--reveal-delay', (delayForEl.get(el) || 0) + 'ms');
      el.classList.add('is-revealed');
      pending.delete(el);
      observer.unobserve(el);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        });
      },
      {
        threshold: 0,
        // Shrinks the viewport's bottom edge by 15%, so an element is
        // considered "entered" once it's roughly 15% into the viewport
        // rather than only once fully visible.
        rootMargin: '0px 0px -15% 0px',
      }
    );

    scrollElements.forEach((el) => observer.observe(el));

    // Safety net: elements near the very end of the page can sit inside
    // that shrunk bottom-15% strip permanently once the user reaches max
    // scroll — there's no further scrolling that would bring them into
    // the "entered" zone. Reveal whatever's left the moment we detect
    // we're at (or already loaded at) the true bottom of the page.
    function checkAtBottom() {
      if (!pending.size) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) pending.forEach(reveal);
    }

    let rafId = 0;
    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkAtBottom);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    checkAtBottom();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef]);
}

// ---- data-reveal-load: animates once, automatically, on mount. Used only
// for the hero, which is visible before any scrolling happens so an
// IntersectionObserver would fire immediately (or never) instead of
// feeling like an intentional entrance.
export function useLoadReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const loadElements = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal-load]'));
    if (!loadElements.length) return;

    if (prefersReducedMotion) {
      loadElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const heroDelays = computeDelays(loadElements);
    // Double rAF guarantees the browser has painted the hidden state at
    // least once before we flip to revealed, so the transition actually
    // plays instead of the element just appearing already-visible.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        loadElements.forEach((el) => {
          el.style.setProperty('--reveal-delay', heroDelays.get(el) + 'ms');
          el.classList.add('is-revealed');
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [containerRef]);
}
