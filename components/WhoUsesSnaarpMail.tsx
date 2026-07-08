import { RevealSection } from '@/components/reveal/RevealSection';

export function WhoUsesSnaarpMail() {
  return (
    <section className="who-uses-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-0">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
            Who Uses Snaarp Mail
          </div>

          <h2 className="who-uses-heading mb-4" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="100">
            <span className="block">Business Email That Scales With Your</span>
            <span className="block who-uses-heading-accent">Growing Team</span>
          </h2>

          <p className="who-uses-subtext" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="200">See how teams across different sectors use Snaarp Mail to communicate faster and stay organized.</p>
        </div>

        {/* Phone + surrounding cards. The phone leads (delay 300) and the four
            cards follow just after (400-670) — hand-tuned via data-reveal-delay
            because CSS grid-column placement (not DOM order) controls their
            visual position, so automatic DOM-order sequencing can't infer it. */}
        <div className="who-uses-stage">
          <div className="who-uses-cards who-uses-cards-left">
            <div className="who-uses-card" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="400">
              <div className="who-uses-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="who-uses-card-title">Handle high-volume support</h3>
              <p className="who-uses-card-desc">Keep your customers happy and your team organized, no matter how busy the inbox gets.</p>
            </div>

            <div className="who-uses-card" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="490">
              <div className="who-uses-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="who-uses-card-title">Scale seats instantly</h3>
              <p className="who-uses-card-desc">Add or remove team members in seconds without any admin headaches.</p>
            </div>
          </div>

          <div className="who-uses-phone-wrap" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="300">
            <img src="/Who Uses Snaarp mail.png" alt="Snaarp Mail inbox on a phone showing the Primary tab with unread messages and category labels like Promotions and Updates" className="who-uses-phone-img" />
          </div>

          <div className="who-uses-cards who-uses-cards-right">
            <div className="who-uses-card" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="580">
              <div className="who-uses-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10L12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </div>
              <h3 className="who-uses-card-title">Manage multiple client accounts</h3>
              <p className="who-uses-card-desc">Juggle different brands and projects smoothly without ever crossing your wires.</p>
            </div>

            <div className="who-uses-card" data-reveal data-reveal-group="who-uses-main" data-reveal-delay="670">
              <div className="who-uses-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                </svg>
              </div>
              <h3 className="who-uses-card-title">Secure document sharing</h3>
              <p className="who-uses-card-desc">Exchange sensitive files and contracts with total peace of mind.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Stats bar */}
      <div className="who-uses-stats-bar pt-6 pb-12 lg:pt-8 lg:pb-14">
        <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="who-uses-stats-grid">
            <div data-reveal data-reveal-group="who-uses-stats" data-reveal-batch="who-uses-stats-items">
              <p className="who-uses-stat-number">99.9%</p>
              <p className="who-uses-stat-label">Uptime SLA</p>
            </div>
            <div data-reveal data-reveal-group="who-uses-stats" data-reveal-batch="who-uses-stats-items">
              <p className="who-uses-stat-number">50GB</p>
              <p className="who-uses-stat-label">Per User Storage</p>
            </div>
            <div data-reveal data-reveal-group="who-uses-stats" data-reveal-batch="who-uses-stats-items">
              <p className="who-uses-stat-number">256-bit</p>
              <p className="who-uses-stat-label">Per User Storage</p>
            </div>
            <div data-reveal data-reveal-group="who-uses-stats" data-reveal-batch="who-uses-stats-items">
              <p className="who-uses-stat-number">24/7</p>
              <p className="who-uses-stat-label">Support</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
