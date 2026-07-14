'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRICING_PLANS } from './plans';
import { PricingCard } from './PricingCard';

const PAGE_SIZE = 4;
const TOTAL_PAGES = Math.ceil(PRICING_PLANS.length / PAGE_SIZE);

export function PricingPlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const visiblePlans = PRICING_PLANS.slice(start, start + PAGE_SIZE);
  const rangeEnd = Math.min(start + PAGE_SIZE, PRICING_PLANS.length);

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
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billingCycle === 'yearly'}
            className={`pricing-toggle-btn${billingCycle === 'yearly' ? ' is-active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="pricing-carousel">
        {page > 0 && (
          <button
            type="button"
            className="pricing-nav-btn pricing-nav-btn-prev"
            aria-label="Show previous plans"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
        )}

        <div className="pricing-grid">
          {visiblePlans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        {page < TOTAL_PAGES - 1 && (
          <button
            type="button"
            className="pricing-nav-btn pricing-nav-btn-next"
            aria-label="Show more plans"
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="pricing-page-indicator" data-reveal>
        {start + 1}&ndash;{rangeEnd} of {PRICING_PLANS.length} plans
      </p>

      <p className="pricing-custom-cta" data-reveal>
        Need a custom solution? <a href="#">Contact our sales team</a>
      </p>
    </section>
  );
}
