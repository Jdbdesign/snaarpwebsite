import { DocsRevealSection } from './DocsRevealSection';

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders ported from the standalone bundle.
const TESTIMONIALS = [
  {
    quote: '"We stopped emailing \'final_v3_ACTUAL.docx\' around. Everyone\'s just in the same doc now."',
    initials: 'RM',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Rowan M.',
    role: 'Content Lead',
  },
  {
    quote: '"Comments and suggestions right in the margin means feedback doesn\'t get lost in a Teams thread."',
    initials: 'SB',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Sam B.',
    role: 'Product Manager',
  },
  {
    quote: '"Version history saved us more than once when someone deleted a whole section by accident."',
    initials: 'NK',
    avatarBg: '#FDE6C9',
    avatarColor: '#B45309',
    name: 'Nadia K.',
    role: 'Team Lead',
  },
];

export function DocsTestimonials() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <DocsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-docs-reveal="" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
          <h2 className="docs-faq-heading" style={{ margin: '12px 0 0', color: '#1B1730' }}>One doc, one source of truth.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-docs-reveal=""
              data-docs-reveal-delay={i * 100 || undefined}
              style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z"></path></svg>
              <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: '500', color: '#211C36', margin: '16px 0 0' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: t.avatarColor, fontSize: '14px' }}>{t.initials}</div>
                <div><div style={{ fontWeight: '600', fontSize: '14.5px', color: '#1B1730' }}>{t.name}</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>{t.role}</div></div>
              </div>
              <span style={{ position: 'absolute', bottom: '12px', right: '14px', fontSize: '9px', fontWeight: '600', letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO · real quote</span>
            </div>
          ))}
        </div>
      </DocsRevealSection>
    </section>
  );
}
