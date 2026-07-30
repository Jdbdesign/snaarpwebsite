'use client';

import { useRef } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

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

          <h1 className="home-hero-heading font-bold leading-[1.1] tracking-tight mb-6" data-reveal-load>
            <span className="hero-heading-line hero-heading-line--default block text-[var(--text-primary)]">Stop paying ten bills for one team.</span>
            <span className="hero-heading-line hero-heading-line--default block text-[var(--color-brand)]">Get everything for <Price amount={2} /></span>

            <span className="hero-heading-line hero-heading-line--wide block text-[var(--text-primary)]">Stop paying ten bills for one team.</span>
            <span className="hero-heading-line hero-heading-line--wide block text-[var(--color-brand)]">Get everything for <Price amount={2} /></span>
          </h1>

          <p className="hero-body-text text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" data-reveal-load>
            Mail, CRM, Docs, Meet, Books, a password manager and eleven more — every app your business runs on, under one login. Your first month is <Price amount={2} />. Full stop.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={2} />/month
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

        {/* Right column: Product Walkthrough Video */}
        <div className="hidden lg:flex justify-center items-center" data-reveal-load>
          <div className="hero-video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/product-walkthrough-poster.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/videos/product-walkthrough.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
