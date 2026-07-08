import { RevealSection } from '@/components/reveal/RevealSection';

export function BuiltForModernBusinesses() {
  return (
    <section className="bento-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bento-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="bento">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Elevate Your Inbox
          </div>

          <h2 className="bento-heading mb-4" data-reveal data-reveal-group="bento">
            Built For <span className="bento-heading-modern">Modern</span> Businesses
          </h2>

          <p className="bento-subtext" data-reveal data-reveal-group="bento">
            Transform how your team communicates with powerful tools designed for the way you work.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="bento-grid">
          <div className="bento-card" data-reveal data-reveal-group="bento" data-reveal-batch="bento-cards">
            <h3 className="bento-card-title">Powerful Analytics &amp; Insights</h3>
            <p className="bento-card-desc">Track performance, monitor your team, and gain actionable insights.</p>
            <div className="bento-card-img-wrap">
              <img src="/assets/images/bento-analytics.png" alt="Dashboard showing organizational user summary with active and inactive user counts" className="bento-card-img" />
            </div>
          </div>

          <div className="bento-card" data-reveal data-reveal-group="bento" data-reveal-batch="bento-cards">
            <h3 className="bento-card-title">Enterprise-Grade Security</h3>
            <p className="bento-card-desc">Advanced threat detection and encryption meeting global GDPR and HIPAA standards.</p>
            <div className="bento-card-img-wrap">
              <img src="/assets/images/bento-security.png" alt="Security standard diagram linking to AICPA SOC, GDPR, and HIPAA compliance badges" className="bento-card-img" />
            </div>
          </div>

          <div className="bento-card" data-reveal data-reveal-group="bento" data-reveal-batch="bento-cards">
            <h3 className="bento-card-title">Scalable storage tiers</h3>
            <p className="bento-card-desc">Pay for what you need and upgrade as you grow.</p>
            <div className="bento-card-img-wrap">
              <img src="/assets/images/bento-storage-tiers.png" alt="List of storage plan tiers from Starter to Scale with an upward arrow" className="bento-card-img" />
            </div>
          </div>
        </div>

        {/* Row 2: 2 cards */}
        <div className="bento-grid-row2">
          <div className="bento-card" data-reveal data-reveal-group="bento" data-reveal-batch="bento-cards">
            <h3 className="bento-card-title">Secure Business Email For Your Organization</h3>
            <p className="bento-card-desc">Get professional addresses on your custom domain with total privacy and control.</p>
            <div className="bento-card-img-wrap">
              <img src="/assets/images/bento-secure-email.png" alt="Custom email address input with sample addresses on a company domain" className="bento-card-img" />
            </div>
          </div>

          <div className="bento-card bento-card-violet" data-reveal data-reveal-group="bento" data-reveal-batch="bento-cards">
            <h3 className="bento-card-title">Integrated Drive Access</h3>
            <p className="bento-card-desc">Manage, store, and attach files without ever switching tabs.</p>
            <div className="bento-card-img-wrap">
              <img src="/assets/images/bento-drive-access.png" alt="Snaarp storage interface showing folders and files with storage usage overview" className="bento-card-img" />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
