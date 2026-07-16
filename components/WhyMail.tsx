'use client';

import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ITEMS = [
  {
    title: 'Unlimited Addresses for Every Department',
    desc: 'Stop paying per inbox. Instantly set up dedicated mailboxes like sales@, support@, or billing@ with zero restrictions.',
    image: '/Unlimited Addresses for Every Department.svg',
    icon: (
      <span className="why-mail-icon-at" aria-hidden="true">@</span>
    ),
  },
  {
    title: 'Predictable, Fair Pricing',
    desc: 'Forget confusing per-user fees. Pay one simple, transparent monthly rate that covers everyone in your organization.',
    image: '/Predictable, Fair Pricing.svg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Storage That Scales Alongside Your Business',
    desc: 'Start with exactly what you need today and seamlessly upgrade your capacity as your team grows—without disrupting your workflow.',
    image: '/Storage That Scales Alongside Your Business.svg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="22" y1="12" x2="2" y2="12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" y1="16" x2="6.01" y2="16" />
        <line x1="10" y1="16" x2="10.01" y2="16" />
      </svg>
    ),
  },
];

export function WhyMail() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ITEMS[activeIndex];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
      <div ref={containerRef}>
        {/* Header row: badge + heading on the left, supporting copy on the right */}
        <div className="why-mail-top">
          <div className="why-mail-top-left">
            <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="why-mail">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              Why Snaarp Mail
            </div>

            <h2 className="why-mail-heading" data-reveal data-reveal-group="why-mail">
              <span className="block">Empower Your Team</span>
              <span className="block">with <span className="why-mail-heading-accent">Next-Gen</span> Email</span>
            </h2>
          </div>

          <p className="why-mail-top-desc" data-reveal data-reveal-group="why-mail">
            One inbox system for the whole team — unlimited addresses, fair pricing, and storage that just keeps up.
          </p>
        </div>

        {/* Illustration + accordion */}
        <div className="why-mail-body">
          <div className="why-mail-illustration-wrap" data-reveal data-reveal-group="why-mail">
            <img
              src={active.image}
              alt={active.title}
              className="why-mail-illustration-img"
              loading="lazy"
            />
          </div>

          <div className="why-mail-accordion" data-reveal data-reveal-group="why-mail">
            {ITEMS.map((item, index) => (
              <div
                key={item.title}
                className={`why-mail-accordion-item${index === activeIndex ? ' is-active' : ''}`}
              >
                <span className="why-mail-accordion-bar" aria-hidden="true" />
                <button
                  type="button"
                  className="why-mail-accordion-content"
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={index === activeIndex}
                >
                  <span className="why-mail-accordion-row">
                    <span className="why-mail-accordion-icon">{item.icon}</span>
                    <span className="why-mail-accordion-title">{item.title}</span>
                  </span>
                  <p className="why-mail-accordion-desc">{item.desc}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
