import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

export interface Step {
  title: string;
  desc: string;
}

interface StepsSectionProps {
  heading: string;
  steps: Step[];
  ctaLabel?: ReactNode;
  ctaHref?: string;
  className?: string;
}

// Generic 3-numbered-step section with a connecting line and an optional CTA below.
export function StepsSection({ heading, steps, ctaLabel, ctaHref = '#', className }: StepsSectionProps) {
  return (
    <section className={`bento-section py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="bento-heading mb-4" data-reveal data-reveal-group="steps-section">
            {heading}
          </h2>
        </div>

        <div className="sec-steps-grid">
          {steps.map((step, i) => (
            <div key={step.title} className="sec-step-card" data-reveal data-reveal-group="steps-section" data-reveal-batch="steps-section-cards">
              <div className="sec-step-number" aria-hidden="true">{i + 1}</div>
              <h3 className="sec-step-title">{step.title}</h3>
              <p className="sec-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {ctaLabel && (
          <div className="sec-steps-cta-wrap" data-reveal data-reveal-group="steps-section">
            <a href={ctaHref} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
              {ctaLabel}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </RevealSection>
    </section>
  );
}
