import { RevealSection } from '@/components/reveal/RevealSection';

export function MeetWhyBento() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-12">
          <p className="meet-why-eyebrow" data-reveal data-reveal-group="meet-why-top">Why Snaarpmeet</p>
          <h2 className="meet-why-heading" data-reveal data-reveal-group="meet-why-top">
            Everything Snaarp Meet does. Built for teams who actually{' '}
            <span className="meet-why-heading-accent">need to move fast.</span>
          </h2>
        </div>

        <div className="meet-why-grid">
          <div className="meet-why-card" data-reveal data-reveal-group="meet-why-grid" data-reveal-batch="meet-why-grid-cells">
            <h3 className="meet-why-card-title">Join from any browser, in seconds</h3>
            <p className="meet-why-card-desc">
              No installs, no plugins, no waiting-room friction. Share a link and your whole team is in &mdash; on any device.
            </p>
            <a href="#" className="btn-outline meet-why-cta inline-flex items-center justify-center rounded-full">
              See How It Works
            </a>
            <div className="meet-why-stats">
              <div className="meet-why-stat">
                <p className="meet-why-stat-value">&lt;2s</p>
                <p className="meet-why-stat-label">Average join time</p>
              </div>
              <div className="meet-why-stat">
                <p className="meet-why-stat-value">
                  0 <span className="meet-why-stat-value--accent">apps</span>
                </p>
                <p className="meet-why-stat-label">Downloads required</p>
              </div>
            </div>
          </div>

          <div className="meet-why-photo-card" data-reveal data-reveal-group="meet-why-grid" data-reveal-batch="meet-why-grid-cells">
            <img
              src="/assets/images/meet-why-open-link.png"
              alt="A person casually raising a hand on a Snaarpmeet video call, captioned Open a link. You're in."
            />
          </div>

          <div className="meet-why-photo-card" data-reveal data-reveal-group="meet-why-grid" data-reveal-batch="meet-why-grid-cells">
            <img
              src="/assets/images/meet-why-notes-inbox.png"
              alt="A person at a desk with a Snaarpmeet AI call on screen, captioned Notes in your inbox before you stand up."
            />
          </div>

          <div className="meet-why-card" data-reveal data-reveal-group="meet-why-grid" data-reveal-batch="meet-why-grid-cells">
            <h3 className="meet-why-card-title">AI that captures every decision</h3>
            <p className="meet-why-card-desc">
              Snaarpmeet listens, transcribes, and summarises &mdash; action items and key quotes delivered the moment your call ends. Encrypted end-to-end, processed ephemerally.
            </p>
            <a href="#" className="btn-outline meet-why-cta inline-flex items-center justify-center rounded-full">
              Explore AI Notes
            </a>
            <div className="meet-why-stats">
              <div className="meet-why-stat">
                <p className="meet-why-stat-value">40+</p>
                <p className="meet-why-stat-label">Languages supported</p>
              </div>
              <div className="meet-why-stat">
                <p className="meet-why-stat-value meet-why-stat-value--accent">99.97 %</p>
                <p className="meet-why-stat-label">Uptime guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
