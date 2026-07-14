'use client';

import { useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

export function MeetHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <span className="meet-hero-live-dot" aria-hidden="true" />
            Live &middot; Communicate &middot; Meet
          </div>

          <h1 className="meet-hero-heading mb-6" data-reveal-load>
            <span className="block text-[var(--text-primary)]">Meetings your team</span>
            <span className="block text-[var(--text-primary)]">actually wants</span>
            <span className="block meet-hero-heading-accent">to show up for</span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.0625rem' }} data-reveal-load>
            HD video, screen sharing, and recording &mdash; all in your browser. No downloads. No friction.
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

        {/* Right column: hero video-call grid image, unframed */}
        <div data-reveal-load className="meet-hero-visual">
          <img
            src="/assets/images/meet-hero-video-grid.png"
            alt="An 8-person video call grid showing team members on a Meet call"
            className="meet-hero-img"
          />
        </div>
      </div>
    </section>
  );
}
