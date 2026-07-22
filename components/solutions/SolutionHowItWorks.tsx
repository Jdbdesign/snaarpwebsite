import type { ReactNode } from 'react';
import { SolutionRevealSection } from './SolutionRevealSection';

export interface SolutionStep {
  number: string;
  title: string;
  desc: string;
  visual: ReactNode;
}

interface SolutionHowItWorksProps {
  eyebrow: string;
  heading: string;
  steps: SolutionStep[];
}

export function SolutionHowItWorks({ eyebrow, heading, steps }: SolutionHowItWorksProps) {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SolutionRevealSection reveal style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>{eyebrow}</span>
          <h2 className="solution-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>{heading}</h2>
        </SolutionRevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px' }}>
          {steps.map((step, i) => (
            <SolutionRevealSection
              key={step.number}
              reveal
              revealDelay={i * 100}
              style={{ position: 'relative', background: '#FBFAFE', borderRadius: '24px', padding: '30px 28px 32px', border: '1px solid #F0EEF7' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.14em', color: '#7C3AED' }}>STEP {step.number}</span>
                <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,#E4DFF2,transparent)' }} />
                <span style={{ fontSize: '44px', fontWeight: 700, color: '#EDE7FA', lineHeight: 1, letterSpacing: '-.04em' }}>{step.number}</span>
              </div>
              <div style={{ marginTop: '22px', height: '170px', borderRadius: '16px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px', overflow: 'hidden', boxShadow: '0 12px 26px -20px rgba(37,22,84,.3)', position: 'relative' }}>
                {step.visual}
              </div>
              <h3 className="solution-card-title" style={{ margin: '24px 0 0', color: '#1B1730' }}>{step.title}</h3>
              <p className="solution-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>{step.desc}</p>
            </SolutionRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
