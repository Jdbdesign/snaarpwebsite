'use client';

import { useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

// Mock data for the original phone-mockup illustration, kept alongside the
// commented JSX below in case the hero visual reverts from the static image.
// Fixed (not random) "on/off" pattern for the mock QR glyph — Math.random()
// here would cause a hydration mismatch between server and client render.
// const QR_CELLS = [
//   1, 1, 0, 1, 1,
//   1, 0, 0, 0, 1,
//   0, 0, 1, 0, 1,
//   1, 0, 0, 1, 0,
//   1, 1, 0, 1, 1,
// ];

export function BusinessCardHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
              <path d="M6 15h4" />
            </svg>
            Communicate &middot; Business Card
          </div>

          <h1 className="bcard-hero-heading mb-6" data-reveal-load>
            <span className="block text-[var(--text-primary)]">Your card updates</span>
            <span className="block text-[var(--color-brand)]">the instant you do.</span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.125rem' }} data-reveal-load>
            Change your title, number, or company and every card you&rsquo;ve ever shared updates automatically &mdash; no reprinting, no handing out outdated info.
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

        {/* Right column visual — replaced with a static image export; see
            the commented block below for the original CSS phone-mockup
            markup. */}
        {/* <div data-reveal-load>
          <div className="bcard-hero-visual">
            <div className="bcard-hero-phone">
              <div className="bcard-hero-phone-screen">
                <div className="bcard-hero-card-top">
                  <span className="bcard-hero-avatar" aria-hidden="true">AM</span>
                  <span className="bcard-hero-qr" aria-hidden="true">
                    {QR_CELLS.map((on, i) => (
                      <span key={i} className={on ? '' : 'off'} />
                    ))}
                  </span>
                </div>

                <p className="bcard-hero-name">Alex Morgan</p>
                <p className="bcard-hero-title">Head of Partnerships</p>
                <p className="bcard-hero-company">Northwind Studio</p>

                <div className="bcard-hero-divider" aria-hidden="true" />

                <div className="bcard-hero-contact-row">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  alex@northwindstudio.co
                </div>
                <div className="bcard-hero-contact-row">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +44 7700 900123
                </div>

                <div className="bcard-hero-footer" aria-hidden="true">
                  <span className="bcard-hero-share-hint">Tap to share</span>
                </div>
              </div>

              <span className="bcard-hero-live-badge" aria-hidden="true">
                <span className="bcard-hero-live-dot" />
                Last updated: just now
              </span>

              <div className="bcard-hero-nfc" aria-hidden="true">
                <span className="bcard-hero-nfc-ring" />
                <span className="bcard-hero-nfc-ring" />
                <span className="bcard-hero-nfc-ring" />
              </div>
            </div>
          </div>
        </div> */}
        <div data-reveal-load className="bcard-hero-visual">
          <img
            src="/assets/images/business-card-hero-phone.png"
            alt="A digital business card on a phone screen for Matthew Bradley, Realtor, with a QR code and a Save Contact button"
            className="bcard-hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
