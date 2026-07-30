import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from './ContactForm';
import { DirectLines } from './DirectLines';
import { ChannelsTable } from './ChannelsTable';
import { Offices } from './Offices';
import { ContactFAQ } from './ContactFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { RevealSection } from '@/components/reveal/RevealSection';

export const metadata: Metadata = {
  title: 'Contact Us — Snaarp',
  description:
    'Get in touch with the Snaarp team. Whether you need sales help, customer support, or partnership info — real people reply within 4 working hours.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* 1 · Hero + Form */}
        <section className="contact-hero-section">
          <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            <div className="contact-hero-grid">
              {/* Left copy */}
              <div data-reveal>
                <HeroCopy />
              </div>
              {/* Right form card */}
              <div data-reveal>
                <ContactForm />
              </div>
            </div>
          </RevealSection>
        </section>

        {/* 2 · Direct lines */}
        <DirectLines />

        {/* 3 · Channels & response targets */}
        <ChannelsTable />

        {/* 4 · Offices */}
        <Offices />

        {/* 5 · FAQ */}
        <ContactFAQ />

        {/* 6 · Final CTA */}
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ─── Hero left-column copy (server component) ─── */
function HeroCopy() {
  return (
    <div className="contact-hero-copy">
      <span className="contact-badge">
        <span className="contact-badge-label">CONTACT</span>
        Real people, Monday to Friday
      </span>

      <h1 className="contact-hero-heading">
        Tell us what you&apos;re trying to{' '}
        <span className="contact-hero-accent">fix.</span>
      </h1>

      <p className="contact-hero-sub">
        Whether you&apos;re comparing us against five other tools, stuck mid-migration,
        or just want to know if we can do the one thing your business depends on
        — send it over and a human will answer properly.
      </p>

      {/* Assurances */}
      <div className="contact-assurances">
        <Assurance
          icon={<ClockIcon />}
          iconBg="var(--color-brand-subtle)"
          iconBorder="#E6DEFA"
          title="First reply within 4 working hours"
          desc="Mon–Fri, 09:00–18:00 GMT. Anything sent overnight is answered the next morning."
        />
        <Assurance
          icon={<PersonIcon />}
          iconBg="var(--color-mint-subtle)"
          iconBorder="#CDF5EE"
          title="Answered by someone who uses the product"
          desc="No ticket-deflection bot, no scripted first response, no offshore call tree."
        />
        <Assurance
          icon={<ShieldIcon />}
          iconBg="var(--color-amber-subtle)"
          iconBorder="#FBEBC6"
          title="We won't put you on a drip campaign"
          desc="One reply to your question. Marketing email only if you tick the box."
        />
      </div>

      {/* Direct email links */}
      <div className="contact-email-strip">
        <p className="contact-email-strip-label">Rather just email us</p>
        <div className="contact-email-strip-links">
          <a href="mailto:sales@snaarp.com" className="contact-email-chip">
            <MailIcon /> sales@snaarp.com
          </a>
          <a href="mailto:support@snaarp.com" className="contact-email-chip">
            <HeadsetIcon /> support@snaarp.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Assurance row ─── */
function Assurance({ icon, iconBg, iconBorder, title, desc }: {
  icon: React.ReactNode; iconBg: string; iconBorder: string; title: string; desc: string;
}) {
  return (
    <div className="contact-assurance">
      <div className="contact-assurance-icon" style={{ background: iconBg, borderColor: iconBorder }}>
        {icon}
      </div>
      <div>
        <div className="contact-assurance-title">{title}</div>
        <div className="contact-assurance-desc">{desc}</div>
      </div>
    </div>
  );
}

/* ─── Inline SVG icons ─── */
function ClockIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7.5 3.6v5c0 4.6-3.1 7.9-7.5 9.4-4.4-1.5-7.5-4.8-7.5-9.4v-5L12 3Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2.5" /><polyline points="3.5 7 12 13 20.5 7" />
    </svg>
  );
}
function HeadsetIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-mint)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2" /><rect x="2.5" y="12" width="4" height="6" rx="2" /><rect x="17.5" y="12" width="4" height="6" rx="2" />
    </svg>
  );
}
