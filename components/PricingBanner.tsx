import { ArrowRight, Check } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

const CHECKLIST = ['No per-app fees', 'No tiered lock-in', 'No surprises'];

export function PricingBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="pricing-banner-card">
        <RevealSection className="pricing-banner-grid">
          <div className="pricing-banner-copy" data-reveal data-reveal-group="pricing-banner">
            <h2 className="pricing-banner-heading">
              <span className="pricing-banner-heading-line">All apps.</span>
              <span className="pricing-banner-heading-accent">One price.</span>
              <span className="pricing-banner-heading-line">Unlimited possibilities.</span>
            </h2>
            <p className="pricing-banner-subtext">
              Get the entire Snaarp Business Suite for just <Price amount={2} /> per user per month.
            </p>
            <ul className="pricing-banner-checklist">
              {CHECKLIST.map((item) => (
                <li key={item} className="pricing-banner-checklist-item">
                  <span className="pricing-banner-check" aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-banner-price-card" data-reveal data-reveal-group="pricing-banner">
            <p className="pricing-banner-price-eyebrow">The Entire Business Suite</p>
            <div className="pricing-banner-price-row">
              <span className="pricing-banner-price-amount"><Price amount={2} /></span>
              <span className="pricing-banner-price-period">
                per user
                <br />
                per month
              </span>
            </div>
            <a href="#" className="pricing-banner-cta">
              Start Free for 14 Days
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <p className="pricing-banner-price-note">No credit card required</p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
