import {
  ArrowRight,
  Search,
  ShieldCheck,
  Send,
  MessageSquare,
  FileSignature,
  Receipt,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

type Accent = 'brand' | 'mint' | 'amber';

interface WorkflowStep {
  label: string;
  caption: string;
  Icon: LucideIcon;
  accent: Accent;
}

const STEPS: WorkflowStep[] = [
  { label: 'Find', caption: 'Zeus finds new prospects', Icon: Search, accent: 'brand' },
  { label: 'Verify', caption: 'Zeus finds new prospects', Icon: ShieldCheck, accent: 'mint' },
  { label: 'Engage', caption: 'Sendrit sends personalized emails', Icon: Send, accent: 'amber' },
  { label: 'Convert', caption: 'CRM tracks conversations', Icon: MessageSquare, accent: 'brand' },
  { label: 'Close', caption: 'DocSign closes the deals', Icon: FileSignature, accent: 'mint' },
  { label: 'Bills', caption: 'Books sends the invoice', Icon: Receipt, accent: 'brand' },
];

// Time it takes the traveling gradient to cross one segment of the line
// between two circles. 5 segments across 6 steps -> ~3.6s full pass,
// inside the 3-4s "energetic, not sluggish" target. Every animated
// element shares one 5000ms (3600ms travel + 1400ms pause) infinite
// CSS animation — see the WORKFLOW CONNECTED SECTION comment in
// globals.css for how the per-step delay keeps them all in phase
// across loops without any JS-driven timer.
const STEP_DELAY_MS = 720;

export function WorkflowConnected() {
  return (
    <section className="workflow-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="workflow-grid">
          <div className="workflow-copy" data-reveal data-reveal-group="workflow">
            <h2 className="workflow-heading">
              <span>One Platform.</span>
              <span>Every Workflow</span>
              <span>Connected.</span>
            </h2>
            <p className="workflow-subtext">
              From prospecting to payment, every step is connected across your business.
            </p>
            <a href="#" className="workflow-link">
              See How It Works
              <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

          <div className="workflow-visual" data-reveal data-reveal-group="workflow">
            <div className="workflow-steps">
              <div className="workflow-line" aria-hidden="true">
                <span className="workflow-line-base" />
                <span className="workflow-line-progress" />
              </div>

              {STEPS.map((step, index) => {
                const delay = `${index * STEP_DELAY_MS}ms`;
                return (
                  <div className="workflow-step" key={step.label}>
                    <span className="workflow-step-circle" data-accent={step.accent} style={{ animationDelay: delay }}>
                      <step.Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="workflow-step-label" style={{ animationDelay: delay }}>
                      {step.label}
                    </span>
                    <span className="workflow-step-caption" style={{ animationDelay: delay }}>
                      {step.caption}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="workflow-ai-card">
              <span className="workflow-ai-icon" aria-hidden="true">
                <Sparkles size={17} strokeWidth={2} />
              </span>
              <div className="workflow-ai-copy">
                <p className="workflow-ai-title">AI connects everything</p>
                <p className="workflow-ai-caption">
                  Neo understands your data and helps your team take action at every step.
                </p>
              </div>
              <a href="#" className="workflow-ai-cta">
                Meet Neo AI
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
