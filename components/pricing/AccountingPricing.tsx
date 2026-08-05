'use client';

import { Fragment, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

const ANNUAL_DISCOUNT = 0.2;
type Plan = { name: string; slug: string; monthlyPrice: number; storageLabel: string; segment: string; popular: boolean; addonsIcons: { src: string; name: string }[]; features: string[] };

const PLANS: Plan[] = [
  {
    name: 'Essential', slug: 'essential', monthlyPrice: 12,
    storageLabel: '1 entity', segment: 'Small businesses', popular: false,
    addonsIcons: [
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
    ],
    features: ['1 business entity', 'Invoicing & expenses', 'Bank reconciliation', 'Basic reports (P&L, balance sheet)', 'VAT returns', 'Accountant access'],
  },
  {
    name: 'Growth', slug: 'growth', monthlyPrice: 29,
    storageLabel: '2 entities', segment: 'Growing teams', popular: true,
    addonsIcons: [
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
    ],
    features: ['2 business entities', 'Invoicing & expenses', 'Bank reconciliation', 'Full financial reports', 'VAT returns', 'Payroll (up to 10)', 'Multi-currency', 'Accountant access', 'Budgeting'],
  },
  {
    name: 'Enterprise', slug: 'enterprise', monthlyPrice: 59,
    storageLabel: 'Unlimited entities', segment: 'Larger organisations', popular: false,
    addonsIcons: [
      { src: '/assets/icons/envelope.jpg', name: 'Mail' },
      { src: '/assets/icons/search.jpg', name: 'Contacts' },
      { src: '/assets/icons/logos/snaarpme.svg', name: 'SnaarpMe' },
      { src: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
      { src: '/assets/icons/cube.jpg', name: 'Drive' },
      { src: '/assets/icons/apps-lock.jpg', name: 'Lock' },
      { src: '/assets/icons/apps-meet.jpg', name: 'Meet' },
      { src: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit' },
      { src: '/assets/icons/logos/zeus.svg', name: 'Zeus' },
    ],
    features: ['Unlimited entities', 'Invoicing & expenses', 'Bank reconciliation', 'Full financial reports', 'VAT returns', 'Payroll (unlimited)', 'Multi-currency', 'Accountant access', 'Budgeting', 'Revenue forecasting', 'Audit trail', 'API access'],
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
    { label: 'Business entities', cells: [text('1'), text('2'), text('Unlimited')] },
    { label: 'Invoicing & expenses', cells: [check, check, check] },
    { label: 'Bank reconciliation', cells: [check, check, check] },
    { label: 'VAT returns', cells: [check, check, check] },
  ]},
  { name: 'Accounting', rows: [
    { label: 'Profit & loss', cells: [check, check, check] },
    { label: 'Balance sheet', cells: [check, check, check] },
    { label: 'Cash flow statement', cells: [cross, check, check] },
    { label: 'Budgeting', cells: [cross, check, check] },
    { label: 'Revenue forecasting', cells: [cross, cross, check] },
    { label: 'Multi-currency', cells: [cross, check, check] },
  ]},
  { name: 'Payroll', rows: [
    { label: 'Payroll included', cells: [cross, check, check] },
    { label: 'Employees', cells: [text('\u2014'), text('Up to 10'), text('Unlimited')] },
    { label: 'Tax withholding', cells: [cross, check, check] },
    { label: 'Payslips', cells: [cross, check, check] },
  ]},
  { name: 'Admin & Support', rows: [
    { label: 'Accountant access', cells: [check, check, check] },
    { label: 'Audit trail', cells: [cross, cross, check] },
    { label: 'API access', cells: [cross, cross, check] },
    { label: 'Priority support', cells: [cross, check, check] },
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

export function AccountingPricing({ billingCycle = 'monthly' }: { billingCycle?: 'monthly' | 'yearly' }) {
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
