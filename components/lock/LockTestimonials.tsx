import { LockRevealSection } from './LockRevealSection';

// Fictional placeholder quotes — the standalone design bundle marks these
// "TODO · real quote" itself; preserved as-is pending real customer quotes.
const QUOTES = [
  {
    quote: '“We went from a shared doc full of passwords to an actual vault. Long overdue.”',
    initials: 'RM',
    name: 'Rowan M.',
    role: 'Founder',
    tint: '#EDE9FE',
    color: '#7C3AED',
  },
  {
    quote: '“Being able to revoke access the second someone leaves is the feature that sold the team.”',
    initials: 'SB',
    name: 'Sam B.',
    role: 'Ops lead',
    tint: '#D5F5EF',
    color: '#0E9384',
  },
  {
    quote: '“Nobody has to ask ‘what’s the password for X’ in a group chat anymore.”',
    initials: 'NK',
    name: 'Nadia K.',
    role: 'Engineering manager',
    tint: '#FDE6C9',
    color: '#B45309',
  },
];

export function LockTestimonials() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-lock-reveal="" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
          <h2 className="lock-band-heading" style={{ margin: '12px 0 0', color: '#1B1730' }}>Passwords, finally under control.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {QUOTES.map((t, i) => (
            <div key={t.name} data-lock-reveal="" data-lock-reveal-delay={i * 100} style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: t.color, fontSize: '14px' }}>{t.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#8B85A0' }}>{t.role}</div>
                </div>
              </div>
              <span style={{ position: 'absolute', bottom: '12px', right: '14px', fontSize: '9px', fontWeight: 600, letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO &middot; real quote</span>
            </div>
          ))}
        </div>
      </LockRevealSection>
    </section>
  );
}
