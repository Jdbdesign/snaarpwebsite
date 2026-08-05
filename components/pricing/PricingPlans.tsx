'use client';

import { useRef, type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRICING_PLANS } from './plans';
import { PricingCard } from './PricingCard';

export function PricingPlans({ tabBar, hidden, billingCycle, onBillingChange, driveContent }: { tabBar?: ReactNode; hidden?: boolean; billingCycle: 'monthly' | 'yearly'; onBillingChange: (cycle: 'monthly' | 'yearly') => void; driveContent?: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  // Split into two rows: first 4, then remaining 3
  const firstRow = PRICING_PLANS.slice(0, 4);
  const secondRow = PRICING_PLANS.slice(4);

  return (
    <section className="pricing-section max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-pill inline-flex items-center rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal>
          Pricing
        </span>
        <h2 className="pricing-heading mb-4" data-reveal>
          Simple Pricing That Scales
          <br />
          With Storage
        </h2>
        <p className="pricing-subtext" data-reveal>
          Flexible user limits included in every plan.
          <br />
          Choose the storage tier that fits your organisation.
        </p>
      </div>

      <div className="pricing-toggle-wrap" data-reveal>
        <div className="pricing-toggle" role="tablist" aria-label="Billing cycle">
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === 'monthly'}
            className={`pricing-toggle-btn${billingCycle === 'monthly' ? ' is-active' : ''}`}
            onClick={() => onBillingChange('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === 'yearly'}
            className={`pricing-toggle-btn${billingCycle === 'yearly' ? ' is-active' : ''}`}
            onClick={() => onBillingChange('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Product tab bar — rendered after Monthly/Yearly toggle */}
      {tabBar}

      {/* Drive content (rendered inside same section for consistent spacing) */}
      {driveContent}

      {/* First row: 4 cards */}
      {!hidden && (
        <div className="pricing-grid pricing-grid--row-1">
          {firstRow.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      )}

      {/* Second row: 3 cards */}
      {!hidden && (
        <div className="pricing-grid pricing-grid--row-2">
          {secondRow.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      )}

      {!hidden && (
        <p className="pricing-custom-cta" data-reveal>
          Need a custom solution? <a href="/contact">Contact our sales team</a>
        </p>
      )}
    </section>
  );
}
