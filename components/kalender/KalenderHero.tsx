'use client';

import { useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

export function KalenderHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-[minmax(420px,460px)_1fr] gap-12 lg:gap-8 items-stretch">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Communicate &middot; Kalender
          </div>

          <h1 className="kalender-hero-heading mb-6" data-reveal-load>
            <span className="block text-[var(--text-primary)]">Your schedule,</span>
            <span className="block text-[var(--text-primary)]">sorted.</span>
            <span className="block text-[var(--color-brand)]">In one link.</span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.0625rem' }} data-reveal-load>
            Share one link, let people pick a time that works, and never double-book again &mdash; synced with the rest of the Stack.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={1} />/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              See how it works
            </a>
          </div>

          <p className="trust-item" data-reveal-load>
            GDPR compliant &middot; No credit card required
          </p>
        </div>

        {/* Right column: booking-page widget mockup */}
        <div data-reveal-load className="kalender-hero-visual">
          <div className="kalender-hero-visual-inner">
            <img
              src="/assets/images/kalender-hero-booking-widget.png"
              alt="A Kalender booking page showing a calendar date picker with the current day highlighted and a list of selectable meeting times, one shown ready to confirm"
              className="kalender-hero-widget-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
