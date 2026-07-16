import { RevealSection } from '@/components/reveal/RevealSection';

export function BuiltForModernBusinesses() {
  return (
    <section className="bmb-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bmb-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="bmb">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Elevate Your Inbox
          </div>

          <h2 className="bmb-heading mb-4" data-reveal data-reveal-group="bmb">
            Built For <span className="bmb-heading-accent">Modern</span> Businesses
          </h2>

          <p className="bmb-subtext" data-reveal data-reveal-group="bmb">
            Transform how your team communicates with powerful tools designed for the way you work.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bmb-grid">
          {/* Left: tall photo card */}
          <article className="bmb-card bmb-card--secure" data-reveal data-reveal-group="bmb" data-reveal-batch="bmb-cards">
            <img
              src="/assets/images/mb-secure-email.jpg"
              alt="Team of colleagues collaborating over printed analytics reports on the floor"
              className="bmb-secure-img"
              loading="lazy"
            />
            <div className="bmb-secure-overlay" aria-hidden="true" />
            <div className="bmb-secure-text">
              <h3 className="bmb-secure-title">Secure Business Email For Your Organization</h3>
              <p className="bmb-secure-desc">Get professional addresses on your custom domain with total privacy and control.</p>
            </div>
          </article>

          {/* Top-right: Integrated Drive Access */}
          <article className="bmb-card bmb-card--integrated" data-reveal data-reveal-group="bmb" data-reveal-batch="bmb-cards">
            <div className="bmb-integrated-text">
              <h3 className="bmb-card-title">Integrated Drive Access</h3>
              <p className="bmb-card-desc">Manage, store, and attach files without ever switching tabs.</p>
            </div>
            <div className="bmb-integrated-img-wrap">
              <img
                src="/assets/images/mb-integrated-drive.svg"
                alt="Snaarp storage interface showing folders and files with a storage overview"
                className="bmb-integrated-img"
                loading="lazy"
              />
            </div>
          </article>

          {/* Bottom-left: Powerful Analytics & Insights */}
          <article className="bmb-card bmb-card--analytics" data-reveal data-reveal-group="bmb" data-reveal-batch="bmb-cards">
            <div className="bmb-analytics-img-wrap">
              <img
                src="/assets/images/mb-analytics.svg"
                alt="Dashboard showing domains, organization users, and a storage overview bar"
                className="bmb-analytics-img"
                loading="lazy"
              />
            </div>
            <h3 className="bmb-card-title">Powerful Analytics &amp; Insights</h3>
            <p className="bmb-card-desc">Track performance, monitor your team, and gain actionable insights.</p>
          </article>

          {/* Bottom-right: Scalable storage tiers */}
          <article className="bmb-card bmb-card--tiers" data-reveal data-reveal-group="bmb" data-reveal-batch="bmb-cards">
            <div className="bmb-tiers-img-wrap">
              <img
                src="/assets/images/mb-storage-tiers.svg"
                alt="Bar chart of storage plan tiers from Starter to Business with an upward arrow"
                className="bmb-tiers-img"
                loading="lazy"
              />
            </div>
            <h3 className="bmb-card-title">Scalable storage tiers</h3>
            <p className="bmb-card-desc">Pay for what you need and upgrade as you grow.</p>
          </article>
        </div>
      </RevealSection>
    </section>
  );
}
