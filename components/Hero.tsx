'use client';

import { useEffect, useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

const GRID_COLS = 4;
const GRID_STEP = 104; // tile (92px) + gap (12px)
const ICON_GRID_BASE_DELAY_MS = 500;
const ICON_TILE_STEP_MS = 60;
const SCALE_OUT_MS = 280;
const SCALE_PAUSE_MS = 120;
const SCALE_IN_MS = 280;

function slotPosition(slot: number) {
  return {
    x: (slot % GRID_COLS) * GRID_STEP,
    y: Math.floor(slot / GRID_COLS) * GRID_STEP,
  };
}

function pickRandomDistinct<T>(arr: T[], count: number): T[] {
  const pool = arr.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// The 12 icons, in reading order, with the grid slot (0-15) each starts on.
// Slots 2, 5, 7, 13 start empty — the ambient shuffle moves icons into them.
const ICONS: { slot: number; src: string; alt: string }[] = [
  { slot: 0, src: '/assets/icons/search.jpg', alt: '' },
  { slot: 1, src: '/assets/icons/layered-pages.png', alt: '' },
  { slot: 3, src: '/assets/icons/cube.jpg', alt: '' },
  { slot: 4, src: '/assets/icons/k-icon.jpg', alt: '' },
  { slot: 6, src: '/assets/icons/padlock.jpg', alt: '' },
  { slot: 8, src: '/assets/icons/envelope.jpg', alt: '' },
  { slot: 9, src: '/assets/icons/p-icon.jpg', alt: '' },
  { slot: 10, src: '/assets/icons/document.jpg', alt: '' },
  { slot: 11, src: '/assets/icons/video.jpg', alt: '' },
  { slot: 12, src: '/assets/icons/chat-bubbles.jpg', alt: '' },
  { slot: 14, src: '/assets/icons/ai-sparkle.jpg', alt: '' },
  { slot: 15, src: '/assets/icons/people-check.jpg', alt: '' },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const iconGridOuterRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  useEffect(() => {
    const gridOuter = iconGridOuterRef.current;
    if (!gridOuter) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const iconTiles = Array.from(gridOuter.querySelectorAll<HTMLElement>('.icon-grid .icon-tile'));
    const iconMovers = Array.from(gridOuter.querySelectorAll<HTMLElement>('.icon-mover'));
    if (!iconTiles.length) return;

    function placeMover(mover: HTMLElement, slot: number) {
      const pos = slotPosition(slot);
      mover.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      mover.setAttribute('data-slot', String(slot));
    }

    const occupiedSlots = new Map<number, HTMLElement>();
    iconMovers.forEach((mover) => {
      const slot = Number(mover.getAttribute('data-slot'));
      occupiedSlots.set(slot, mover);
      placeMover(mover, slot);
    });
    const emptySlots: number[] = [];
    for (let s = 0; s < iconTiles.length; s++) {
      if (!occupiedSlots.has(s)) emptySlots.push(s);
    }

    if (prefersReducedMotion) {
      iconTiles.forEach((el) => el.classList.add('is-revealed'));
      iconMovers.forEach((mover) => {
        const visual = mover.querySelector<HTMLElement>('.icon-visual');
        if (visual) visual.classList.add('is-revealed');
      });
      // Ambient shuffle never starts under reduced motion: settle instantly, stay put.
      return;
    }

    let shuffleTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let shuffleRunning = false;
    let gridInView = true;
    let phase1Settled = false;
    let settleTimeoutId: ReturnType<typeof setTimeout> | undefined;

    // ---- Phase 1: reveal all 16 tiles (and whichever icon rides on top of
    // each) in a shuffled order, one turn each. ICON_GRID_BASE_DELAY_MS lines
    // up with the slot the grid used to occupy in the hero's own stagger.
    const shuffledSlots = iconTiles.map((_, slot) => slot);
    for (let i = shuffledSlots.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSlots[i], shuffledSlots[j]] = [shuffledSlots[j], shuffledSlots[i]];
    }
    const slotDelay = new Map<number, number>();
    shuffledSlots.forEach((slot, orderIndex) => {
      slotDelay.set(slot, ICON_GRID_BASE_DELAY_MS + orderIndex * ICON_TILE_STEP_MS);
    });

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        iconTiles.forEach((el, slot) => {
          el.style.setProperty('--tile-delay', slotDelay.get(slot) + 'ms');
          el.classList.add('is-revealed');
        });
        iconMovers.forEach((mover) => {
          const slot = Number(mover.getAttribute('data-slot'));
          const visual = mover.querySelector<HTMLElement>('.icon-visual');
          if (!visual) return;
          visual.style.setProperty('--tile-delay', slotDelay.get(slot) + 'ms');
          visual.classList.add('is-revealed');
        });
      });
    });

    // ---- Phase 2: ambient shuffle loop. Starts a couple seconds after
    // Phase 1 settles, moves 1-2 icons at a time into currently-empty slots
    // every 3-4s, and pauses/resumes as the grid scrolls out of / back into view.
    const phase1TotalMs = ICON_GRID_BASE_DELAY_MS + shuffledSlots.length * ICON_TILE_STEP_MS + 400;

    function scaleOutThenIn(mover: HTMLElement, toSlot: number) {
      const visual = mover.querySelector<HTMLElement>('.icon-visual');
      if (!visual) {
        placeMover(mover, toSlot);
        return;
      }

      visual.style.transition = `opacity ${SCALE_OUT_MS}ms ease-in, transform ${SCALE_OUT_MS}ms ease-in`;
      visual.style.opacity = '0';
      visual.style.transform = 'scale(0.6)';

      setTimeout(() => {
        placeMover(mover, toSlot); // instant — happens while fully invisible
        setTimeout(() => {
          visual.style.transition = `opacity ${SCALE_IN_MS}ms var(--ease-out), transform ${SCALE_IN_MS}ms var(--ease-out)`;
          visual.style.opacity = '1';
          visual.style.transform = 'scale(1)';
        }, SCALE_PAUSE_MS);
      }, SCALE_OUT_MS);
    }

    function shuffleStep() {
      const currentlyOccupied = Array.from(occupiedSlots.keys());
      let moveCount = Math.random() < 0.65 ? 1 : 2;
      moveCount = Math.min(moveCount, emptySlots.length, currentlyOccupied.length);
      if (moveCount < 1) return;

      const sources = pickRandomDistinct(currentlyOccupied, moveCount);
      const destinations = pickRandomDistinct(emptySlots, moveCount);

      sources.forEach((fromSlot, i) => {
        const toSlot = destinations[i];
        const mover = occupiedSlots.get(fromSlot)!;

        occupiedSlots.delete(fromSlot);
        occupiedSlots.set(toSlot, mover);
        emptySlots.splice(emptySlots.indexOf(toSlot), 1);
        emptySlots.push(fromSlot);

        scaleOutThenIn(mover, toSlot);
      });
    }

    function nextShuffleDelayMs() {
      return 3000 + Math.random() * 1000; // every 3-4s
    }

    function scheduleShuffle(delay: number) {
      clearTimeout(shuffleTimeoutId);
      shuffleTimeoutId = setTimeout(() => {
        shuffleStep();
        scheduleShuffle(nextShuffleDelayMs());
      }, delay);
    }

    function startShuffle() {
      if (shuffleRunning) return;
      shuffleRunning = true;
      scheduleShuffle(nextShuffleDelayMs());
    }

    function stopShuffle() {
      shuffleRunning = false;
      clearTimeout(shuffleTimeoutId);
    }

    settleTimeoutId = setTimeout(() => {
      phase1Settled = true;
      if (gridInView) startShuffle();
    }, phase1TotalMs + 2000);

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          gridInView = entry.isIntersecting;
          if (gridInView) {
            if (phase1Settled) startShuffle();
          } else {
            stopShuffle();
          }
        });
      },
      { threshold: 0.1 }
    );
    gridObserver.observe(gridOuter);

    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(settleTimeoutId);
      clearTimeout(shuffleTimeoutId);
      gridObserver.disconnect();
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2L4.5 13.5H11L10 22L19.5 9.5H13L14 2Z" />
            </svg>
            20+ Apps · One Login · One Price
          </div>

          <h1 className="font-bold leading-[1.1] tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 3.2vw + 1rem, 3rem)' }} data-reveal-load>
            {/* Default arrangement — mobile through laptop (below 1440px), unchanged */}
            <span className="hero-heading-line hero-heading-line--default block text-[var(--text-primary)]">Your whole business, in one place.</span>
            <span className="hero-heading-line hero-heading-line--default block text-[var(--color-brand)]">Get everything for <Price amount={1} /></span>

            {/* Wide-screen arrangement (1440px+) — different line breaks per design request */}
            <span className="hero-heading-line hero-heading-line--wide block text-[var(--text-primary)]">Your whole business,</span>
            <span className="hero-heading-line hero-heading-line--wide block text-[var(--text-primary)]">in one place. <span className="text-[var(--color-brand)]">Get everything</span></span>
            <span className="hero-heading-line hero-heading-line--wide block text-[var(--color-brand)]">for <Price amount={1} /></span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.0625rem' }} data-reveal-load>
            Mail, CRM, Docs, Meet, Books, a password manager and eleven more — every app your business runs on, under one login. Your first month is <Price amount={1} />. Full stop.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={1} />/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              See how it works
            </a>
          </div>

          <ul className="flex flex-wrap items-center gap-6 list-none m-0 p-0" data-reveal-load>
            <li className="trust-item flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 9H21" strokeLinecap="round" />
                <path d="M8 3V6M16 3V6" strokeLinecap="round" />
              </svg>
              14-day free trial
            </li>
            <li className="trust-item flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 2L4 5V11C4 16 7.5 19.5 12 21C16.5 19.5 20 16 20 11V5L12 2Z" strokeLinejoin="round" />
              </svg>
              No credit card required
            </li>
            <li className="trust-item flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
              </svg>
              Cancel anytime
            </li>
          </ul>
        </div>

        {/* Right column: icon grid */}
        <div
          ref={iconGridOuterRef}
          className="icon-grid-outer p-6 lg:p-8"
          role="img"
          aria-label="Grid of icons representing Snaarp's suite of business apps: search, documents, cube, calendar, security, mail, presentations, notes, video meetings, chat, AI, and team collaboration"
        >
          <div className="icon-grid">
            {/* 16 static background slots (row 1..4, reading order). These
                never move — they're the "cells" the icons below sit on top
                of and relocate between during the ambient shuffle. */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="icon-tile" />
            ))}

            {/* The 12 icons: absolutely positioned on top of the slots above
                via transform, so the shuffle can move them between tiles
                (data-slot = 0-15, reading order) without ever re-mounting or
                touching layout. */}
            <div className="icon-grid-movers" aria-hidden="true">
              {ICONS.map((icon) => (
                <div key={icon.slot} className="icon-mover" data-slot={icon.slot}>
                  <img className="icon-visual" src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
