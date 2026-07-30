import { RevealSection } from '@/components/reveal/RevealSection';

export function ChannelsTable() {
  return (
    <section className="contact-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="contact-channels-layout">
          {/* Left: table */}
          <div data-reveal>
            <p className="contact-eyebrow">What to expect</p>
            <h2 className="contact-section-heading">Channels and response targets</h2>
            <p className="contact-section-sub" style={{ maxWidth: 520 }}>
              Support is included on every plan — including the &pound;1 one. Higher plans get faster targets and more channels, not permission to talk to us.
            </p>

            <div className="contact-table-wrap">
              <div className="contact-table-header">
                <span>Plan</span><span>Channels</span><span>First response</span>
              </div>
              <div className="contact-table-row">
                <span className="contact-table-plan">Starter &middot; &pound;1/mo</span>
                <span>Email &middot; Help centre</span>
                <span>1 working day</span>
              </div>
              <div className="contact-table-row">
                <span className="contact-table-plan">Growth</span>
                <span>Email &middot; Live chat &middot; Onboarding call</span>
                <span>4 working hours</span>
              </div>
              <div className="contact-table-row contact-table-row--last">
                <span className="contact-table-plan">Business</span>
                <span>Everything, plus a named contact and phone</span>
                <span>2 working hours</span>
              </div>
            </div>
            <p className="contact-table-footnote">Targets apply Mon–Fri, 09:00–18:00 GMT. Plan names and targets pending sign-off.</p>
          </div>

          {/* Right: self-serve dark card */}
          <div className="contact-selfserve" data-reveal>
            <span className="contact-selfserve-badge">Often faster</span>
            <h3 className="contact-selfserve-heading">Answer it yourself in two minutes</h3>
            <p className="contact-selfserve-sub">Most of what reaches support is already written down.</p>

            <div className="contact-selfserve-links">
              <a href="#" className="contact-selfserve-link">
                <span><strong>Help centre</strong><br /><span className="contact-selfserve-link-sub">Setup, billing and per-app guides</span></span>
                <ArrowRight />
              </a>
              <a href="#" className="contact-selfserve-link">
                <span><strong>Migration guides</strong><br /><span className="contact-selfserve-link-sub">Moving off spreadsheets, Google, or a legacy CRM</span></span>
                <ArrowRight />
              </a>
              <a href="#" className="contact-selfserve-link">
                <span><strong>System status</strong><br /><span className="contact-selfserve-link-sub">Live uptime and incident history</span></span>
                <span className="contact-selfserve-status"><span className="contact-selfserve-dot" />All systems normal</span>
              </a>
              <a href="#" className="contact-selfserve-link contact-selfserve-link--last">
                <span><strong>Trust &amp; security centre</strong><br /><span className="contact-selfserve-link-sub">Sub-processors, DPA, data residency</span></span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
