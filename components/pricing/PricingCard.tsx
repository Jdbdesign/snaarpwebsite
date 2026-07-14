'use client';

import { Check } from 'lucide-react';
import { ANNUAL_DISCOUNT, type PricingPlan } from './plans';
import { Price } from '@/components/currency/Price';

type BillingCycle = 'monthly' | 'yearly';

const ICON_CELL = 37;

export function PricingCard({ plan, billingCycle }: { plan: PricingPlan; billingCycle: BillingCycle }) {
  const isYearly = billingCycle === 'yearly';
  const displayPrice = isYearly ? plan.monthlyPrice * (1 - ANNUAL_DISCOUNT) : plan.monthlyPrice;
  const totalForYear = plan.monthlyPrice * 12 * (isYearly ? 1 - ANNUAL_DISCOUNT : 1);
  const iconCols = plan.addonsIconWidth / ICON_CELL;

  return (
    <div className={`pricing-card${plan.popular ? ' pricing-card-popular' : ''}`}>
      {plan.popular && <span className="pricing-card-badge">Most Popular</span>}

      <p className="pricing-card-eyebrow">{plan.name}</p>

      <div className="pricing-card-price-row">
        <span className="pricing-card-price"><Price amount={displayPrice} /></span>
        <span className="pricing-card-price-suffix">/month</span>
      </div>
      <p className="pricing-card-billed">Billed {isYearly ? 'annually' : 'monthly'}.</p>
      <p className="pricing-card-total">
        Total for 12 months: <strong><Price amount={totalForYear} /></strong>
      </p>
      <p className="pricing-card-save">Save 20%</p>

      <p className="pricing-card-segment">
        {plan.storageLabel} &middot; {plan.segment}
      </p>

      <div
        className="pricing-card-addons-wrap"
        style={{
          width: plan.addonsIconWidth,
          maxWidth: '100%',
          aspectRatio: `${plan.addonsIconWidth} / ${plan.addonsIconHeight}`,
        }}
      >
        <img
          src={plan.addonsIcon}
          alt={`${plan.name} plan add-ons`}
          width={plan.addonsIconWidth}
          height={plan.addonsIconHeight}
          className="pricing-card-addons"
        />
        {plan.addonsIconNames.map((iconName, index) => {
          const col = index % iconCols;
          const row = Math.floor(index / iconCols);
          return (
            <span
              key={iconName}
              className="pricing-icon-hotspot"
              style={{
                left: `${((col * ICON_CELL) / plan.addonsIconWidth) * 100}%`,
                top: `${((row * ICON_CELL) / plan.addonsIconHeight) * 100}%`,
                width: `${(ICON_CELL / plan.addonsIconWidth) * 100}%`,
                height: `${(ICON_CELL / plan.addonsIconHeight) * 100}%`,
              }}
            >
              <span className="pricing-icon-tooltip">{iconName}</span>
            </span>
          );
        })}
      </div>

      <ul className="pricing-card-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} aria-hidden="true" className="pricing-card-check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`pricing-card-cta${plan.popular ? ' btn-primary' : ' btn-outline'}`}
      >
        Get Started
      </a>
    </div>
  );
}
