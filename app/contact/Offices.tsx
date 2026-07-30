import { RevealSection } from '@/components/reveal/RevealSection';

export function Offices() {
  return (
    <section className="contact-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="contact-offices-header" data-reveal>
          <div>
            <p className="contact-eyebrow">Where we are</p>
            <h2 className="contact-section-heading">Two offices, one time zone</h2>
          </div>
          <p className="contact-offices-note">Post is only read at the London address. For anything time-sensitive, email or call.</p>
        </div>

        <div className="contact-offices-grid" data-reveal>
          <div className="contact-office-card">
            <div className="contact-office-name">
              <span>London</span>
              <span className="contact-office-badge contact-office-badge--hq">HQ</span>
            </div>
            <address className="contact-office-address">
              42 Rivington Street<br />Shoreditch<br />London EC2A 3BN<br />United Kingdom
            </address>
            <div className="contact-office-meta">
              <span>Mon–Fri &middot; 09:00–18:00 GMT</span>
              <a href="tel:+442079460812">+44 20 7946 0812</a>
            </div>
          </div>

          <div className="contact-office-card">
            <div className="contact-office-name">
              <span>Manchester</span>
              <span className="contact-office-badge contact-office-badge--support">SUPPORT</span>
            </div>
            <address className="contact-office-address">
              Ducie House, Ducie Street<br />Piccadilly Basin<br />Manchester M1 2JW<br />United Kingdom
            </address>
            <div className="contact-office-meta">
              <span>Mon–Fri &middot; 08:00–17:00 GMT</span>
              <a href="mailto:support@snaarp.com">support@snaarp.com</a>
            </div>
          </div>

          <div className="contact-office-card contact-office-card--remote">
            <div className="contact-office-name"><span>Everyone else</span></div>
            <p className="contact-office-remote-text">
              The rest of the team is remote across the UK and EU. Data stays in EU regions regardless of where we sit.
            </p>
            <div className="contact-office-meta">
              Snaarp Ltd &middot; Registered in England &amp; Wales<br />Company no. [placeholder] &middot; VAT [placeholder]
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
