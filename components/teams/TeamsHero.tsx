'use client';

import { useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';

// Mock data for the original diagram visual, kept alongside the commented
// JSX below in case the hero visual reverts from the static image.
// const CHAOS_BUBBLES = [
//   { text: '@Dele can you check this?', indent: 0, rot: -3 },
//   { text: 'meeting moved to 3pm', indent: 28, rot: 2 },
//   { text: 'invoice-final-v2.pdf', indent: 10, rot: -2 },
//   { text: 'lol yes', indent: 44, rot: 4 },
//   { text: 'anyone seen the brief?', indent: 4, rot: -4 },
// ];
//
// const CHANNELS = [
//   { name: 'general', active: false },
//   { name: 'design', active: true },
//   { name: 'launch', active: false },
// ];

export function TeamsHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Communicate &middot; Teams
          </div>

          <h1 className="teams-hero-heading mb-6" data-reveal-load>
            <span className="block text-[var(--text-primary)]">Team chat that stays</span>
            <span className="block text-[var(--color-brand)]">organized, not overwhelming.</span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.0625rem' }} data-reveal-load>
            Channels for every project, threads that don&rsquo;t get lost, and files that stay attached to the conversation they came from.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for £1/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              See how it works
            </a>
          </div>

          <p className="trust-item" data-reveal-load>
            GDPR compliant &middot; No credit card required
          </p>
        </div>

        {/* Right column visual — replaced with a static image export; see
            the commented block below for the original "scattered messages"
            -> "organized channels" diagram markup. */}
        {/* <div data-reveal-load>
          <div className="teams-hero-diagram">
            <div className="teams-hero-diagram-card">
              <p className="teams-hero-diagram-card-label">Your Scattered Messages</p>
              <div className="teams-chaos-cloud" aria-hidden="true">
                {CHAOS_BUBBLES.map((b) => (
                  <span
                    key={b.text}
                    className="teams-chaos-bubble"
                    style={{ marginLeft: b.indent, transform: `rotate(${b.rot}deg)` }}
                  >
                    {b.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="teams-hero-diagram-center" aria-hidden="true">
              <svg className="teams-hero-diagram-arrow" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 7h17M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="teams-hero-diagram-icon">
                <img src="/assets/icons/chat-bubbles.jpg" alt="" />
              </span>
            </div>

            <div className="teams-hero-diagram-card">
              <p className="teams-hero-diagram-card-label">Organized in Channels</p>
              <ul className="teams-hero-diagram-channels">
                {CHANNELS.map((ch) => (
                  <li key={ch.name} className={ch.active ? 'is-active' : ''}>
                    <span aria-hidden="true">#</span> {ch.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
        <div data-reveal-load className="teams-hero-photo-visual">
          <img
            src="/assets/images/teams-hero-collage.png"
            alt="Team members' avatars in a shared chat, with a message composer ready to send"
            className="teams-hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
