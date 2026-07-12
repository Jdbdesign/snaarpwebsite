import { RevealSection } from '@/components/reveal/RevealSection';

const STEPS = [
  {
    number: '01',
    title: 'Create your meeting',
    desc: 'Sign up free and open a new room. Get a permanent link you can reuse, or generate a fresh one-time link.',
  },
  {
    number: '02',
    title: 'Invite your team',
    desc: "Copy the link or send invites from your calendar. Guests join from their browser — no account needed.",
  },
  {
    number: '03',
    title: 'Meet with clarity',
    desc: 'HD video, AI notes and collaboration tools are waiting. The summary lands in your inbox before you stand up.',
  },
];

const STATS = [
  {
    value: '99.97',
    accent: '%',
    label: 'Uptime guaranteed',
    desc: 'Enterprise-grade reliability, so your calls never drop when it matters most.',
  },
  {
    value: '40',
    accent: '+',
    label: 'Languages supported',
    desc: 'Real-time captions and transcripts that keep global teams perfectly in sync.',
  },
  {
    value: '<2',
    accent: 's',
    label: 'Average join time',
    desc: 'From link to live in under two seconds — no lobbies, no loading spinners.',
  },
];

export function MeetHowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-12">
          <p className="meet-how-eyebrow" data-reveal data-reveal-group="meet-how-top">How It Works</p>
          <h2 className="meet-how-heading" data-reveal data-reveal-group="meet-how-top">
            Up and running in <span className="meet-how-heading-accent">three clicks.</span>
          </h2>
        </div>

        <div className="meet-how-grid mb-12 lg:mb-16">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="meet-how-step"
              data-reveal
              data-reveal-group="meet-how-steps"
              data-reveal-batch="meet-how-steps-cells"
            >
              <p className="meet-how-step-number" aria-hidden="true">{step.number}</p>
              <h3 className="meet-how-step-title">{step.title}</h3>
              <p className="meet-how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="meet-stats-card" data-reveal data-reveal-group="meet-how-card">
          <p className="meet-stats-quote">
            Snaarpmeet runs HD video, <span className="meet-stats-quote-accent">AI notes</span>, and screen sharing
            right <span className="meet-stats-quote-accent">in your browser</span> — no downloads, no friction, just
            meetings that <span className="meet-stats-quote-accent">actually start on time</span>.
          </p>

          <div className="meet-stats-row">
            {STATS.map((stat) => (
              <div key={stat.label} className="meet-stats-item">
                <p className="meet-stats-value">
                  {stat.value}
                  <span className="meet-stats-value-accent">{stat.accent}</span>
                </p>
                <p className="meet-stats-label">{stat.label}</p>
                <p className="meet-stats-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
