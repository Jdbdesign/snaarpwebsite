'use client';

import { Fragment, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

const ANNUAL_DISCOUNT = 0.2;
type Plan = { name: string; slug: string; monthlyPrice: number; storageLabel: string; segment: string; popular: boolean; addonsIcons: { src: string; name: string }[]; features: string[] };

const PLANS: Plan[] = [
  {
    name: 'Solo', slug: 'solo', monthlyPrice: 7, storageLabel: '3 sequences', segment: 'Individual reps', popular: false,
    addonsIcons: [
      { src: '/assets/icons/logos/zeus.svg', name: 'Zeus' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
    ],
    features: ['3 active sequences', '500 emails per day', 'Multi-step sequences', 'Basic personalisation', 'Open & click tracking'],
  },
  {
    name: 'Team', slug: 'team', monthlyPrice: 25, storageLabel: '15 sequences', segment: 'Sales teams', popular: true,
    addonsIcons: [
      { src: '/assets/icons/logos/zeus.svg', name: 'Zeus' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
    ],
    features: ['15 active sequences', '2,000 emails per day', 'Multi-step sequences', 'Advanced personalisation', 'Open & click tracking', 'A/B testing', 'Team inbox', 'CRM integration'],
  },
  {
    name: 'Agency', slug: 'agency', monthlyPrice: 59, storageLabel: 'Unlimited sequences', segment: 'Agencies & outbound teams', popular: false,
    addonsIcons: [
      { src: '/assets/icons/logos/zeus.svg', name: 'Zeus' },
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
    ],
    features: ['Unlimited sequences', '5,000 emails per day', 'Multi-step sequences', 'Advanced personalisation', 'Open & click tracking', 'A/B testing', 'Team inbox', 'CRM integration', 'Multi-sender rotation', 'API & webhooks'],
  },
];

type CompareCell = { kind: 'text'; value: string } | { kind: 'check' } | { kind: 'cross' };
type CompareRow = { label: string; cells: CompareCell[] };
type CompareCategory = { name: string; rows: CompareRow[] };
const text = (v: string): CompareCell => ({ kind: 'text', value: v });
const check: CompareCell = { kind: 'check' };
const cross: CompareCell = { kind: 'cross' };

const COMPARE: CompareCategory[] = [
  { name: 'Core', rows: [
    { label: 'Active sequences', cells: [text('3'), text('15'), text('Unlimited')] },
    { label: 'Emails per day', cells: [text('500'), text('2,000'), text('5,000')] },
    { label: 'Multi-step sequences', cells: [check, check, check] },
    { label: 'Email tracking', cells: [check, check, check] },
  ]},
  { name: 'Outreach', rows: [
    { label: 'Basic personalisation', cells: [check, check, check] },
    { label: 'Advanced personalisation', cells: [cross, check, check] },
    { label: 'A/B testing', cells: [cross, check, check] },
    { label: 'Multi-sender rotation', cells: [cross, cross, check] },
    { label: 'Reply detection', cells: [check, check, check] },
  ]},
  { name: 'Collaboration', rows: [
    { label: 'Team inbox', cells: [cross, check, check] },
    { label: 'CRM integration', cells: [cross, check, check] },
    { label: 'API & webhooks', cells: [cross, cross, check] },
    { label: 'Shared templates', cells: [cross, check, check] },
  ]},
  { name: 'Support', rows: [
    { label: 'Email support', cells: [check, check, check] },
    { label: 'Priority support', cells: [cross, check, check] },
    { label: 'Dedicated account manager', cells: [cross, cross, check] },
  ]},
];

function PlanCard({ plan, billingCycle }: { plan: Plan; billingCycle: 'monthly' | 'yearly' }) {
  const isYearly = billingCycle === 'yearly';
  const displayPrice = isYearly ? plan.monthlyPrice * (1 - ANNUAL_DISCOUNT) : plan.monthlyPrice;
  const totalForYear = plan.monthlyPrice * 12 * (isYearly ? 1 - ANNUAL_DISCOUNT : 1);
  return (
    <div className={`pricing-card${plan.popular ? ' pricing-card-popular' : ''}`}>
      {plan.popular && <span className="pricing-card-badge">Most Popular</span>}
      <span className="pricing-card-trial-badge">14-day free trial</span>
      <p className="pricing-card-eyebrow">{plan.name}</p>
      <div className="pricing-card-price-row"><span className="pricing-card-price"><Price amount={displayPrice} /></span><span className="pricing-card-price-suffix">/month</span></div>
      <p className="pricing-card-billed">Billed {isYearly ? 'annually' : 'monthly'}.</p>
      <p className="pricing-card-total">Total for 12 months: <strong><Price amount={totalForYear} /></strong></p>
      <p className="pricing-card-save">Save 20%</p>
      <p className="pricing-card-segment">{plan.storageLabel} &middot; {plan.segment}</p>
      <div className="pricing-card-addons-wrap" style={{ width: '100%', maxWidth: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {plan.addonsIcons.map((icon, idx) => (
            <span key={`${icon.name}-${idx}`} className="pricing-icon-hotspot" style={{ position: 'relative', width: 34, height: 34, cursor: 'pointer' }}>
              <img src={icon.src} alt={icon.name} width={34} height={34} style={{ borderRadius: '50%', border: '1.5px solid #EDEBF2', objectFit: 'cover', display: 'block' }} />
              <span className="pricing-icon-tooltip">{icon.name}</span>
            </span>
          ))}
        </div>
      </div>
      <ul className="pricing-card-features">
        {plan.features.map((f) => (<li key={f}><Check size={16} aria-hidden="true" className="pricing-card-check" /><span>{f}</span></li>))}
      </ul>
      <a href="#" className={`pricing-card-cta${plan.popular ? ' btn-primary' : ' btn-outline'}`}>Start 14-day free trial</a>
    </div>
  );
}

export function ZeusPricing({ billingCycle = 'monthly' }: { billingCycle?: 'monthly' | 'yearly' }) {
  const compareRef = useRef<HTMLDivElement>(null);
  useScrollReveal(compareRef);
  return (
    <>
      <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {PLANS.map((plan) => <PlanCard key={plan.slug} plan={plan} billingCycle={billingCycle} />)}
      </div>
      <p className="pricing-custom-cta" data-reveal>Need a custom solution? <a href="/contact">Contact our sales team</a></p>
      <section className="compare-section max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24" ref={compareRef}>
        <div className="text-center max-w-2xl mx-auto mb-10"><h2 className="pricing-heading mb-4" data-reveal>Compare All Features</h2><p className="pricing-subtext" data-reveal>See exactly what&apos;s included in each plan.</p></div>
        <div className="compare-scroll" data-reveal>
          <table className="compare-table"><thead><tr><th scope="col" className="compare-col-feature">Features</th>{PLANS.map((p) => (<th scope="col" key={p.slug} className={p.popular ? 'is-popular' : undefined}>{p.popular && <span className="compare-popular-badge">Popular</span>}<span className="compare-plan-name">{p.name}</span><span className="compare-plan-price"><Price amount={p.monthlyPrice} /><span className="compare-plan-price-suffix">/mo</span></span></th>))}</tr></thead>
            <tbody>{COMPARE.map((cat) => (<Fragment key={cat.name}><tr className="compare-category-row"><th scope="colgroup" colSpan={PLANS.length + 1}>{cat.name}</th></tr>{cat.rows.map((row) => (<tr key={row.label}><th scope="row" className="compare-col-feature">{row.label}</th>{row.cells.map((cell, i) => (<td key={PLANS[i].slug} className={PLANS[i].popular ? 'is-popular' : undefined}><div className="compare-cell">{cell.kind === 'check' && <Check size={18} aria-hidden="true" className="compare-check" />}{cell.kind === 'cross' && <X size={16} aria-hidden="true" className="compare-cross" />}{cell.kind === 'text' && <span className="compare-value">{cell.value}</span>}</div></td>))}</tr>))}</Fragment>))}</tbody>
          </table>
        </div>
      </section>
    </>
  );
}
