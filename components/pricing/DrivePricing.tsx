'use client';

import { Fragment, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

/* ─── Drive Plan Data (same structure as PricingCard uses) ─── */
type DrivePlan = {
  name: string;
  slug: string;
  monthlyPrice: number;
  storageLabel: string;
  segment: string;
  popular: boolean;
  addonsIconNames: string[];
  addonsIcons: { src: string; name: string }[];
  features: string[];
};

const ANNUAL_DISCOUNT = 0.2;

const DRIVE_PLANS: DrivePlan[] = [
  {
    name: 'Personal',
    slug: 'personal',
    monthlyPrice: 3,
    storageLabel: '50 GB',
    segment: '1 user',
    popular: false,
    addonsIconNames: ['Drive', 'Mail', 'Contacts', 'SnaarpMe'],
    addonsIcons: [
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
    ],
    features: ['50 GB storage', '5 GB file upload limit', 'Basic sharing links', 'Mobile & desktop sync', '30-day version history'],
  },
  {
    name: 'Pro',
    slug: 'pro',
    monthlyPrice: 12,
    storageLabel: '500 GB',
    segment: 'Up to 10 users',
    popular: true,
    addonsIconNames: ['Drive', 'Mail', 'Contacts', 'SnaarpMe', 'Teams', 'Meet', 'Lock'],
    addonsIcons: [
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
    ],
    features: ['500 GB storage', '20 GB file upload limit', 'Password-protected links', 'Mobile & desktop sync', '180-day version history', 'Team folders', 'Admin controls'],
  },
  {
    name: 'Business',
    slug: 'business',
    monthlyPrice: 25,
    storageLabel: '2 TB',
    segment: 'Unlimited users',
    popular: false,
    addonsIconNames: ['Drive', 'Mail', 'Contacts', 'SnaarpMe', 'Teams', 'Meet', 'Lock', 'Document', 'Sendrit', 'Zeus'],
    addonsIcons: [
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
      { src: '/assets/icons/apps-document.png', name: 'Document' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
      { src: '/assets/icons/logos/zeus.svg', name: 'Zeus' },
    ],
    features: ['2 TB storage', '50 GB file upload limit', 'Custom branding on links', 'Mobile & desktop sync', 'Unlimited version history', 'Team folders', 'Admin controls', 'Audit log', 'SSO integration'],
  },
];

/* ─── Compare Features for Drive ─── */
type CompareCell = { kind: 'text'; value: string } | { kind: 'check' } | { kind: 'cross' };
type CompareRow = { label: string; cells: CompareCell[] };
type CompareCategory = { name: string; rows: CompareRow[] };

const text = (v: string): CompareCell => ({ kind: 'text', value: v });
const check: CompareCell = { kind: 'check' };
const cross: CompareCell = { kind: 'cross' };

const DRIVE_COMPARE: CompareCategory[] = [
  {
    name: 'Core',
    rows: [
      { label: 'Storage space', cells: [text('50 GB'), text('500 GB'), text('2 TB')] },
      { label: 'Max file upload size', cells: [text('5 GB'), text('20 GB'), text('50 GB')] },
      { label: 'Version history', cells: [text('30 days'), text('180 days'), text('Unlimited')] },
      { label: 'Users', cells: [text('1'), text('10'), text('Unlimited')] },
    ],
  },
  {
    name: 'Sharing & Collaboration',
    rows: [
      { label: 'Shareable links', cells: [check, check, check] },
      { label: 'Password-protected links', cells: [cross, check, check] },
      { label: 'Expiring links', cells: [cross, check, check] },
      { label: 'Team folders', cells: [cross, check, check] },
      { label: 'Custom branding', cells: [cross, cross, check] },
    ],
  },
  {
    name: 'Security & Admin',
    rows: [
      { label: 'End-to-end encryption', cells: [check, check, check] },
      { label: 'Two-factor authentication', cells: [check, check, check] },
      { label: 'Admin controls', cells: [cross, check, check] },
      { label: 'Audit log', cells: [cross, cross, check] },
      { label: 'SSO integration', cells: [cross, cross, check] },
    ],
  },
  {
    name: 'Support',
    rows: [
      { label: 'Email support', cells: [check, check, check] },
      { label: 'Priority support', cells: [cross, check, check] },
      { label: 'Dedicated account manager', cells: [cross, cross, check] },
    ],
  },
];

/* ─── Drive Pricing Card (matches Mail's PricingCard exactly) ─── */
function DriveCard({ plan, billingCycle }: { plan: DrivePlan; billingCycle: 'monthly' | 'yearly' }) {
  const isYearly = billingCycle === 'yearly';
  const displayPrice = isYearly ? plan.monthlyPrice * (1 - ANNUAL_DISCOUNT) : plan.monthlyPrice;
  const totalForYear = plan.monthlyPrice * 12 * (isYearly ? 1 - ANNUAL_DISCOUNT : 1);

  return (
    <div className={`pricing-card${plan.popular ? ' pricing-card-popular' : ''}`}>
      {plan.popular && <span className="pricing-card-badge">Most Popular</span>}

      <span className="pricing-card-trial-badge">14-day free trial</span>

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

      {/* Addons icons — same visual style as Mail (circular icon grid with hover tooltips) */}
      <div className="pricing-card-addons-wrap" style={{ width: '100%', maxWidth: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {plan.addonsIcons.map((icon) => (
            <span key={icon.name} className="pricing-icon-hotspot" style={{ position: 'relative', width: 34, height: 34, cursor: 'pointer' }}>
              <img
                src={icon.src}
                alt={icon.name}
                width={34}
                height={34}
                style={{ borderRadius: '50%', border: '1.5px solid #EDEBF2', objectFit: 'cover', display: 'block' }}
              />
              <span className="pricing-icon-tooltip">{icon.name}</span>
            </span>
          ))}
        </div>
      </div>

      <ul className="pricing-card-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={16} aria-hidden="true" className="pricing-card-check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#" className={`pricing-card-cta${plan.popular ? ' btn-primary' : ' btn-outline'}`}>
        Start 14-day free trial
      </a>
    </div>
  );
}

/* ─── Main Component ─── */
export function DrivePricing({ billingCycle = 'monthly' }: { billingCycle?: 'monthly' | 'yearly' }) {
  const compareRef = useRef<HTMLDivElement>(null);
  useScrollReveal(compareRef);

  return (
    <>
      {/* Plan cards — uses same pricing-grid class as Mail */}
      <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {DRIVE_PLANS.map((plan) => (
          <DriveCard key={plan.slug} plan={plan} billingCycle={billingCycle} />
        ))}
      </div>

      <p className="pricing-custom-cta" data-reveal>
        Need a custom solution? <a href="/contact">Contact our sales team</a>
      </p>

      {/* Compare All Features — same structure as Mail's ComparePlans */}
      <section className="compare-section max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24" ref={compareRef}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="pricing-heading mb-4" data-reveal>Compare All Features</h2>
          <p className="pricing-subtext" data-reveal>See exactly what&apos;s included in each plan.</p>
        </div>

        <div className="compare-scroll" data-reveal>
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col" className="compare-col-feature">Features</th>
                {DRIVE_PLANS.map((plan) => (
                  <th scope="col" key={plan.slug} className={plan.popular ? 'is-popular' : undefined}>
                    {plan.popular && <span className="compare-popular-badge">Popular</span>}
                    <span className="compare-plan-name">{plan.name}</span>
                    <span className="compare-plan-price">
                      <Price amount={plan.monthlyPrice} />
                      <span className="compare-plan-price-suffix">/mo</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DRIVE_COMPARE.map((category) => (
                <Fragment key={category.name}>
                  <tr className="compare-category-row">
                    <th scope="colgroup" colSpan={DRIVE_PLANS.length + 1}>{category.name}</th>
                  </tr>
                  {category.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="compare-col-feature">{row.label}</th>
                      {row.cells.map((cell, i) => (
                        <td key={DRIVE_PLANS[i].slug} className={DRIVE_PLANS[i].popular ? 'is-popular' : undefined}>
                          <div className="compare-cell">
                            {cell.kind === 'check' && <Check size={18} aria-hidden="true" className="compare-check" />}
                            {cell.kind === 'cross' && <X size={16} aria-hidden="true" className="compare-cross" />}
                            {cell.kind === 'text' && <span className="compare-value">{cell.value}</span>}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
