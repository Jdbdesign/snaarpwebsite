'use client';

import { Fragment, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRICING_PLANS } from './plans';
import { COMPARE_CATEGORIES, type CompareCell } from './compareFeatures';
import { Price } from '@/components/currency/Price';

function CompareCellContent({ cell }: { cell: CompareCell }) {
  switch (cell.kind) {
    case 'check':
      return <Check size={18} aria-hidden="true" className="compare-check" />;
    case 'cross':
      return <X size={16} aria-hidden="true" className="compare-cross" />;
    case 'price':
      return <span className="compare-value"><Price amount={cell.amount} /></span>;
    case 'text':
    default:
      return <span className="compare-value">{cell.value}</span>;
  }
}

export function ComparePlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section className="compare-section max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="pricing-heading mb-4" data-reveal>
          Compare All Features
        </h2>
        <p className="pricing-subtext" data-reveal>
          See exactly what&apos;s included in each plan.
        </p>
      </div>

      <div className="compare-scroll" data-reveal>
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col" className="compare-col-feature">
                Features
              </th>
              {PRICING_PLANS.map((plan) => (
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
            {COMPARE_CATEGORIES.map((category) => (
              <Fragment key={category.name}>
                <tr className="compare-category-row">
                  <th scope="colgroup" colSpan={PRICING_PLANS.length + 1}>
                    {category.name}
                  </th>
                </tr>
                {category.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="compare-col-feature">
                      {row.label}
                    </th>
                    {row.cells.map((cell, index) => (
                      <td key={PRICING_PLANS[index].slug} className={PRICING_PLANS[index].popular ? 'is-popular' : undefined}>
                        <div className="compare-cell">
                          <CompareCellContent cell={cell} />
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
  );
}
