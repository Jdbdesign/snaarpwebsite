import { RevealSection } from '@/components/reveal/RevealSection';

export function WhyMail() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
      <RevealSection>
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="why-mail">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            Why Snaarp Mail
          </div>

          <h2 className="why-mail-heading" data-reveal data-reveal-group="why-mail">
            <span className="block">Empower Your Team with</span>
            <span className="block"><span className="why-mail-heading-accent">Next-Gen</span> 📧 Email</span>
          </h2>
        </div>

        {/* 3-card grid */}
        <div className="why-mail-grid">
          <div className="why-mail-card" data-reveal data-reveal-group="why-mail" data-reveal-batch="why-mail-cards">
            <div className="why-mail-icon-badge" aria-hidden="true"><span className="why-mail-icon-at">@</span></div>
            <h3 className="why-mail-card-title">Unlimited Addresses for Every Department</h3>
            <p className="why-mail-card-desc">Stop paying per inbox. Instantly set up dedicated mailboxes like sales@, support@, or billing@ with zero restrictions.</p>
            <div className="why-mail-card-img-wrap why-mail-card-img-wrap-lg">
              <img src="/Unlimited Addresses for Every Department.png" alt="Sample dedicated mailbox addresses: hello@yourbrand.com, sarah@yourbrand.com, and support@yourbrand.com" className="why-mail-card-img why-mail-card-img-lg" loading="lazy" />
            </div>
          </div>

          <div className="why-mail-card" data-reveal data-reveal-group="why-mail" data-reveal-batch="why-mail-cards">
            <div className="why-mail-icon-badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3 className="why-mail-card-title">Predictable, Fair Pricing</h3>
            <p className="why-mail-card-desc">Forget confusing per-user fees. Pay one simple, transparent monthly rate that covers everyone in your organization.</p>
            <div className="why-mail-card-img-wrap why-mail-card-img-wrap-lg">
              <img src="/Predictable, Fair Pricing.png" alt="Credit cards and coins representing one simple monthly rate" className="why-mail-card-img why-mail-card-img-lg" loading="lazy" />
            </div>
          </div>

          <div className="why-mail-card" data-reveal data-reveal-group="why-mail" data-reveal-batch="why-mail-cards">
            <div className="why-mail-icon-badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="12" x2="2" y2="12" />
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                <line x1="6" y1="16" x2="6.01" y2="16" />
                <line x1="10" y1="16" x2="10.01" y2="16" />
              </svg>
            </div>
            <h3 className="why-mail-card-title">Storage That Scales Alongside Your Business</h3>
            <p className="why-mail-card-desc">Start with exactly what you need today and seamlessly upgrade your capacity as your team grows—without disrupting your workflow.</p>
            <div className="why-mail-card-img-wrap-overflow">
              <img src="/assets/images/Storage That Scales Alongside Your Business2.png" alt="Upward arrows chart with an Upgrade Plan button" className="why-mail-card-img why-mail-card-img-lg" loading="lazy" />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
