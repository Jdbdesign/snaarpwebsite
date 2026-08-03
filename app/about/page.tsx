import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { AboutReveal } from './AboutReveal';
import './about.css';

export const metadata: Metadata = {
  title: 'About Us — Snaarp',
  description:
    'We got tired of the subscription sprawl too. One login, one price, every app your business actually runs on.',
};

const CHECKLIST = [
  'One login, every app',
  '£2/month to start, no per-app pricing',
  'No enterprise sales calls required',
  'Built on the same design system, top to bottom',
  'New apps ship into the Stack you already pay for',
  'Cancel anytime, no lock-in',
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="about-page">
        <HeroSection />
        <ApproachSection />
        <MilestonesSection />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   SECTION 1 · HERO
   ═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow-1" />
      <div className="about-hero-glow-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="about-hero-grid">
          {/* Copy column */}
          <AboutReveal>
            <span className="about-badge">
              <span className="about-badge-dot" />ABOUT US
            </span>

            <h1>
              We got tired of the <span className="accent">subscription sprawl</span> too.
            </h1>

            <p className="about-hero-sub">
              Every business we knew was paying for a dozen different tools that barely talked to
              each other. Snaarp started as a simple question: what if it was just... one thing?
              One login, one price, every app your business actually runs on.
            </p>

            <div className="about-cta-row">
              <a href="/pricing" className="about-btn-primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="/#products" className="about-btn-secondary">
                Explore the Apps
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="about-stats-row">
              <div>
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">apps in one Stack</div>
              </div>
              <div className="about-stat-divider" />
              <div>
                <div className="about-stat-number">£2</div>
                <div className="about-stat-label" style={{ maxWidth: 130 }}>starting price per user, per month</div>
              </div>
              <div className="about-stat-divider" />
              <div>
                <div className="about-stat-number">1</div>
                <div className="about-stat-label">login for everything</div>
              </div>
            </div>
          </AboutReveal>

          {/* Hero visual — composite mockup fan */}
          <AboutReveal delay={140} className="about-hero-visual">
            <div className="about-mockup-grid">
              <MailMockup />
              <DocumentMiniMockup />
              <KalenderMockup />
              <CRMMockup />

              {/* Centre badge */}
              <div className="about-centre-badge">
                <span style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 12px -4px rgba(124,58,237,.6)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></svg>
                </span>
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>One login</div>
                  <div style={{ fontSize: '9.5px', color: '#8B85A0' }}>for all 20+ apps</div>
                </div>
              </div>
            </div>
          </AboutReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   SECTION 2 · WHY WE BUILT IT THIS WAY
   ═══════════════════════════════════════════════════════════════════ */
function ApproachSection() {
  return (
    <section className="about-approach-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="about-approach-grid">
          {/* Document mockup */}
          <AboutReveal>
            <DocumentFullMockup />
          </AboutReveal>

          {/* Copy + checklist */}
          <AboutReveal delay={100}>
            <span className="about-badge">
              <span className="about-badge-dot" />OUR APPROACH
            </span>

            <h2>Built like we actually have to use it every day.</h2>

            <p>
              We&apos;re not a giant suite bolted together through acquisitions. Every app in the
              Stack is built to the same design system, the same login, and the same price —
              because that&apos;s what we wanted to use ourselves, and couldn&apos;t find.
            </p>

            <div className="about-checklist">
              {CHECKLIST.map((item) => (
                <div key={item} className="about-check-item">
                  <span className="about-check-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 13 10 18 19 7" /></svg>
                  </span>
                  <span className="about-check-text">{item}</span>
                </div>
              ))}
            </div>
          </AboutReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   SECTION 3 · MILESTONES (no dates — deliberate placeholders)
   ═══════════════════════════════════════════════════════════════════ */
function MilestonesSection() {
  return (
    <section className="about-milestones-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AboutReveal>
          <div className="about-milestones-header">
            <div>
              <span className="about-badge">
                <span className="about-badge-dot" />MILESTONES
              </span>
              <h2>Our journey: from one problem to one Stack.</h2>
            </div>
            <p>Every milestone here is a point where we added something we were missing ourselves, not a feature request from a spreadsheet.</p>
          </div>
        </AboutReveal>

        <div className="about-milestones-grid">
          <AboutReveal>
            <MilestoneCard
              number="01"
              iconBg="#F3EFFF"
              iconBorder="#E6DEFA"
              icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3" /><path d="M12 18v3" /><path d="M5 12H2" /><path d="M22 12h-3" /><circle cx="12" cy="12" r="4" /></svg>}
              title="Started with a question"
              desc="We were paying for six tools that didn't sync. We started building the one we actually wanted."
            />
          </AboutReveal>
          <AboutReveal delay={80}>
            <MilestoneCard
              number="02"
              iconBg="#FEECEF"
              iconBorder="#F9D8DE"
              icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><polyline points="3 7 12 13.5 21 7" /></svg>}
              title="First apps shipped"
              desc="Mail, Contacts, and Teams — the core of how a team actually communicates."
            />
          </AboutReveal>
          <AboutReveal delay={160}>
            <MilestoneCard
              number="03"
              iconBg="#F3EFFF"
              iconBorder="#E6DEFA"
              icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>}
              title="Grow Revenue joins the Stack"
              desc="CRM, Zeus, and Sendrit — because sales shouldn't need a separate subscription."
            />
          </AboutReveal>

          <AboutReveal>
            <MilestoneCard
              number="04"
              iconBg="#ECFDF9"
              iconBorder="#CDF5EE"
              icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.5 3.6v5c0 4.6-3.1 7.9-7.5 9.4-4.4-1.5-7.5-4.8-7.5-9.4v-5L12 3Z" /><polyline points="9 12 11 14 15 10" /></svg>}
              title="Secure &amp; Sign joins the Stack"
              desc="PDF Reader, eSignature, and Doc Sign — paperwork that moves itself."
            />
          </AboutReveal>
          <AboutReveal delay={80}>
            <MilestoneCard
              number="05"
              iconBg="#FEF6E7"
              iconBorder="#FBEBC6"
              icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" /></svg>}
              title="20+ apps, one login"
              desc="Every category covered — Communicate, Create & Store, Grow Revenue, Secure & Sign, Run the Business."
            />
          </AboutReveal>
          <AboutReveal delay={160}>
            <div className="about-milestone-card--dark">
              <div className="about-milestone-glow" />
              <div className="about-milestone-card-top" style={{ position: 'relative' }}>
                <span className="about-milestone-icon" style={{ background: 'rgba(255,255,255,.09)', border: '1px solid rgba(255,255,255,.16)' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </span>
                <span className="about-milestone-number">06</span>
              </div>
              <h3>Still building</h3>
              <p>New apps still ship straight into the Stack everyone&apos;s already paying for.</p>
            </div>
          </AboutReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

function MilestoneCard({ number, iconBg, iconBorder, icon, title, desc }: {
  number: string; iconBg: string; iconBorder: string;
  icon: React.ReactNode; title: string; desc: string;
}) {
  return (
    <div className="about-milestone-card">
      <div className="about-milestone-card-top">
        <span className="about-milestone-icon" style={{ background: iconBg, border: `1px solid ${iconBorder}` }}>
          {icon}
        </span>
        <span className="about-milestone-number">{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}


/* ─── MAIL inbox mockup ─── */
function MailMockup() {
  return (
    <div className="about-mockup-card" style={{ transform: 'rotate(-2.4deg) translateY(6px)' }}>
      <div className="about-mockup-card-header">
        <span style={{ width: 22, height: 22, borderRadius: 7, background: '#FEECEF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><polyline points="3 7 12 13.5 21 7" /></svg>
        </span>
        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Inbox</span>
        <span style={{ marginLeft: 'auto', padding: '2px 7px', borderRadius: 999, background: '#F5F3FF', fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>3 new</span>
      </div>
      <div style={{ padding: '8px 9px', display: 'flex', flexDirection: 'column', gap: 5, background: '#fff' }}>
        <MailRow initials="NB" bgColor="#EDE9FE" textColor="#7C3AED" name="Northbank Ltd" subject="Re: Renewal quote — happy to proceed" time="09:14" unread />
        <MailRow initials="AS" bgColor="#D5F5EF" textColor="#0E9384" name="Ade Salako" subject="Offsite doc is ready for review" time="08:52" />
        <MailRow initials="MK" bgColor="#FEE2EC" textColor="#E11D74" name="Mia Kowalska" subject="Invoice #2214 paid" time="Tue" />
      </div>
    </div>
  );
}

function MailRow({ initials, bgColor, textColor, name, subject, time, unread }: {
  initials: string; bgColor: string; textColor: string;
  name: string; subject: string; time: string; unread?: boolean;
}) {
  return (
    <div style={{ display: 'flex', gap: 8, padding: '8px 9px', borderRadius: 10, ...(unread ? { background: '#FBFAFE', border: '1px solid #F2F0F9' } : {}) }}>
      <span style={{ flex: 'none', width: 22, height: 22, borderRadius: '50%', background: bgColor, color: textColor, fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{initials}</span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: '10px', fontWeight: unread ? 700 : 600, color: unread ? '#1B1730' : '#3B3550' }}>{name}</span>
          {unread && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED' }} />}
          <span style={{ marginLeft: 'auto', fontSize: '8.5px', color: '#B4AEC6' }}>{time}</span>
        </div>
        <div style={{ fontSize: '9.5px', color: unread ? '#5B5670' : '#8B85A0', marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{subject}</div>
      </div>
    </div>
  );
}


/* ─── DOCUMENT mini mockup (hero grid) ─── */
function DocumentMiniMockup() {
  return (
    <div className="about-mockup-card" style={{ transform: 'rotate(2deg) translateY(30px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 13px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FB7185' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FBBF24' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399' }} />
        <span style={{ marginLeft: 6, fontSize: '10px', fontWeight: 600, color: '#8B85A0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Q3_Team_Offsite.docx</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '7.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>AS</span>
          <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '7.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: -6 }}>MK</span>
        </span>
      </div>
      <div style={{ position: 'relative', padding: '14px 15px 16px', background: '#fff', minHeight: 150 }}>
        <div className="about-cursor-mini">
          <span style={{ display: 'block', width: 2, height: 13, background: '#0E9384', borderRadius: 1 }} />
          <span style={{ position: 'absolute', left: 3, top: -2, whiteSpace: 'nowrap', padding: '2px 5px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '7.5px', fontWeight: 600 }}>Ade</span>
        </div>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '-.01em', color: '#211C36' }}>Q3 Team Offsite</div>
        <div style={{ fontSize: '8.5px', color: '#B4AEC6', marginTop: 3 }}>Draft · shared with 4</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
          {[96, 88, 72, 92, 60].map((w, i) => (
            <div key={i} style={{ height: 7, width: `${w}%`, borderRadius: 3, background: w === 72 ? '#EDE9FE' : '#F1EFF7' }} />
          ))}
        </div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="about-type-in">
            <span style={{ fontSize: '9.5px', color: '#3B3550' }}>Coffee tasting on day two</span>
          </div>
          <span className="about-caret-blink" style={{ height: 11 }} />
          <span style={{ fontSize: '8px', color: '#B4AEC6' }}>Mia is typing…</span>
        </div>
      </div>
    </div>
  );
}


/* ─── KALENDER booking widget mockup ─── */
function KalenderMockup() {
  const days = [
    { day: 'MON', num: '14', selected: false },
    { day: 'TUE', num: '15', selected: true },
    { day: 'WED', num: '16', selected: false },
    { day: 'THU', num: '17', selected: false },
    { day: 'FRI', num: '18', selected: false },
  ];
  return (
    <div className="about-mockup-card" style={{ transform: 'rotate(1.6deg) translateY(-6px)' }}>
      <div className="about-mockup-card-header">
        <span style={{ width: 22, height: 22, borderRadius: 7, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2.5" /><line x1="3" y1="9.5" x2="21" y2="9.5" /><line x1="8" y1="2.5" x2="8" y2="6" /><line x1="16" y1="2.5" x2="16" y2="6" /></svg>
        </span>
        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Book a call</span>
        <span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 600, color: '#8B85A0' }}>30 min</span>
      </div>
      <div style={{ padding: '12px 13px 14px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 5 }}>
          {days.map((d) => (
            <div key={d.day} style={{ textAlign: 'center', padding: '7px 0', borderRadius: 9, ...(d.selected ? { background: '#7C3AED', boxShadow: '0 8px 16px -8px rgba(124,58,237,.7)' } : { background: '#FBFAFE', border: '1px solid #F2F0F9' }) }}>
              <div style={{ fontSize: '7.5px', color: d.selected ? '#DDD0FC' : '#B4AEC6', fontWeight: 600 }}>{d.day}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: d.selected ? '#fff' : '#3B3550', marginTop: 2 }}>{d.num}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 11px', borderRadius: 10, border: '1px solid #F2F0F9', background: '#FBFAFE' }}><span style={{ fontSize: '10px', fontWeight: 600, color: '#3B3550' }}>09:30</span><span style={{ fontSize: '8.5px', color: '#B4AEC6' }}>Free</span></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 11px', borderRadius: 10, border: '1px solid #DDD0FC', background: '#F5F3FF' }}><span style={{ fontSize: '10px', fontWeight: 700, color: '#6D28D9' }}>10:00</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '8.5px', fontWeight: 600, color: '#7C3AED' }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED' }} />Selected</span></div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 11px', borderRadius: 10, border: '1px solid #F2F0F9', background: '#FBFAFE' }}><span style={{ fontSize: '10px', fontWeight: 600, color: '#3B3550' }}>11:15</span><span style={{ fontSize: '8.5px', color: '#B4AEC6' }}>Free</span></div>
        </div>
        <div style={{ marginTop: 10, textAlign: 'center', padding: 9, borderRadius: 999, background: '#1B1730', color: '#fff', fontSize: '10px', fontWeight: 600 }}>Confirm booking</div>
      </div>
    </div>
  );
}


/* ─── CRM pipeline mockup ─── */
function CRMMockup() {
  return (
    <div className="about-mockup-card" style={{ transform: 'rotate(-1.6deg) translateY(18px)' }}>
      <div className="about-mockup-card-header">
        <span style={{ width: 22, height: 22, borderRadius: 7, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="7" y2="6" /><line x1="3" y1="12" x2="7" y2="12" /><line x1="3" y1="18" x2="7" y2="18" /><rect x="10" y="4" width="11" height="4" rx="1" /><rect x="10" y="10" width="11" height="4" rx="1" /><rect x="10" y="16" width="7" height="4" rx="1" /></svg>
        </span>
        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Sales pipeline</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '9px', fontWeight: 600, color: '#0E9384' }}>
          <span className="about-live-pulse" />Updated
        </span>
      </div>
      <div style={{ padding: 11, background: '#FBFAFE' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
          <PipelineColumn label="New" color="#7C3AED" count="2" deals={[{ name: 'Harlow & Co', amount: '£6,400', initials: 'JT', bg: '#EDE9FE', fg: '#7C3AED' }, { name: 'Vellum Studio', amount: '£2,150', initials: 'AS', bg: '#D5F5EF', fg: '#0E9384' }]} />
          <PipelineColumn label="Proposal" color="#E11D74" count="1" deals={[{ name: 'Northbank Ltd', amount: '£18,900', initials: 'MK', bg: '#FEE2EC', fg: '#E11D74' }]} />
          <PipelineColumn label="Won" color="#0E9384" count="1" deals={[{ name: 'Perch Dental', amount: '£9,300', initials: 'RO', bg: '#FEF3C7', fg: '#B45309' }]} />
        </div>
      </div>
    </div>
  );
}

function PipelineColumn({ label, color, count, deals }: {
  label: string; color: string; count: string;
  deals: { name: string; amount: string; initials: string; bg: string; fg: string }[];
}) {
  return (
    <div style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid #F0EEF6', borderRadius: 11, padding: '8px 7px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '0 1px 1px' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
        <span style={{ fontSize: '8px', fontWeight: 700, color }}>{label}</span>
        <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#B4AEC6' }}>{count}</span>
      </div>
      {deals.map((d) => (
        <div key={d.name} style={{ background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 9, padding: '7px 8px' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#1B1730', lineHeight: 1.25 }}>{d.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#211C36' }}>{d.amount}</span>
            <span style={{ width: 15, height: 15, borderRadius: '50%', background: d.bg, color: d.fg, fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{d.initials}</span>
          </div>
        </div>
      ))}
    </div>
  );
}


/* ─── DOCUMENT full mockup (section 2) ─── */
function DocumentFullMockup() {
  return (
    <div className="about-doc-mockup-wrapper">
      <div className="about-doc-mockup-shadow" />
      <div className="about-doc-mockup">
        {/* Window bar */}
        <div className="about-doc-mockup-bar">
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FB7185' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FBBF24' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#34D399' }} />
          <span style={{ marginLeft: 10, fontSize: '12.5px', fontWeight: 600, color: '#8B85A0' }}>Onboarding_Playbook.docx</span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>You</span>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: -7 }}>AS</span>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: -7 }}>MK</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '10.5px', fontWeight: 600, color: '#0E9384' }}>
              <span className="about-live-pulse" />Saved
            </span>
          </span>
        </div>

        {/* Toolbar */}
        <div className="about-doc-toolbar">
          <span style={{ width: 26, height: 26, borderRadius: 8, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, fontFamily: 'Georgia,serif', color: '#7C3AED' }}>B</span>
          <span style={{ width: 26, height: 26, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontWeight: 600, fontSize: 13, fontFamily: 'Georgia,serif', color: '#8B85A0' }}>i</span>
          <span style={{ width: 26, height: 26, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'underline', fontWeight: 600, fontSize: 13, fontFamily: 'Georgia,serif', color: '#8B85A0' }}>U</span>
          <span style={{ width: 1, height: 18, background: '#EFEDF6', margin: '0 2px' }} />
          <span style={{ width: 26, height: 26, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B85A0' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3" /><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" /></svg>
          </span>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B45309' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </span>
          <span style={{ marginLeft: 'auto', fontSize: '10.5px', color: '#8B85A0', fontWeight: 500 }}>2 people editing</span>
        </div>

        {/* Body */}
        <div className="about-doc-body">
          {/* Animated cursors */}
          <div className="about-cursor-ade">
            <span style={{ display: 'block', width: 2, height: 16, background: '#0E9384', borderRadius: 1 }} />
            <span style={{ position: 'absolute', left: 3, top: -2, whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: 600 }}>Ade</span>
          </div>
          <div className="about-cursor-mia">
            <span style={{ display: 'block', width: 2, height: 16, background: '#E11D74', borderRadius: 1 }} />
            <span style={{ position: 'absolute', left: 3, top: -2, whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: 600 }}>Mia</span>
          </div>

          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.01em', color: '#211C36' }}>Customer onboarding playbook</div>
          <div style={{ fontSize: '9.5px', color: '#B4AEC6', marginTop: 3, letterSpacing: '.02em' }}>Draft · owned by you · shared with 6</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
            {[97, 90, 78].map((w, i) => (
              <div key={i} style={{ height: 8, width: `${w}%`, borderRadius: 3, background: w === 78 ? '#EDE9FE' : '#F1EFF7' }} />
            ))}
          </div>

          {/* Highlighted line + margin comment */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 14 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'inline-block', padding: '2px 5px', borderRadius: 4, background: '#FDE68A' }}>
                <span style={{ fontSize: '11.5px', color: '#3B3550' }}>Day one: every new account gets a shared Stack folder.</span>
              </div>
              {/* Comment bubble */}
              <div style={{ margin: '10px 0 0 6px', background: '#fff', border: '1px solid #EDEBF2', borderRadius: 12, boxShadow: '0 14px 30px -16px rgba(37,22,84,.34)', padding: '11px 13px', maxWidth: 290 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 19, height: 19, borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MK</span>
                  <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#211C36' }}>Mia Kowalska</span>
                  <span style={{ fontSize: '8.5px', color: '#B4AEC6' }}>just now</span>
                </div>
                <p style={{ margin: '8px 0 0', fontSize: '10.5px', lineHeight: 1.5, color: '#5B5670' }}>Can this be automatic when the deal moves to Won? Would save us a step.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
                  <span style={{ padding: '5px 11px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 600 }}>Reply</span>
                  <span style={{ fontSize: '9px', fontWeight: 600, color: '#8B85A0' }}>Resolve</span>
                </div>
              </div>
            </div>
            <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50% 50% 50% 3px', background: '#FBBF24', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(180,83,9,.5)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
            {[93, 66].map((w, i) => (
              <div key={i} style={{ height: 8, width: `${w}%`, borderRadius: 3, background: '#F1EFF7' }} />
            ))}
          </div>

          {/* Typing indicator */}
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9BEEE', flexShrink: 0 }} />
            <div className="about-type-in">
              <span style={{ fontSize: '11px', color: '#3B3550' }}>…and the welcome email sends itself</span>
            </div>
            <span className="about-caret-blink" />
            <span style={{ fontSize: '9px', color: '#B4AEC6', marginLeft: 2 }}>Ade is typing…</span>
          </div>
        </div>
      </div>

      {/* Floating badge below mockup */}
      <div className="about-float-badge">
        <span style={{ width: 30, height: 30, borderRadius: 9, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        </span>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Same login, same Stack</div>
          <div style={{ fontSize: '9px', color: '#8B85A0' }}>Document · Work Drive · CRM</div>
        </div>
      </div>
    </div>
  );
}
