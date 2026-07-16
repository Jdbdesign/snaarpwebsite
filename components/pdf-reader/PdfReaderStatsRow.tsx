import { PdfReaderRevealSection } from './PdfReaderRevealSection';

// Same "plain divided grid, big value + small label, no card chrome"
// layout as AI Compose's stat row (components/ai-compose/AIComposePage.tsx,
// the "Seconds / Every app / 0" section) — ported to this page's
// inline-style convention instead of AI Compose's Tailwind theme classes,
// replacing the previous 4-card bento treatment (icons, shadows, dark/
// gradient variants) with this cleaner look, per request.
const STATS = [
  { value: 'Any device', desc: 'Open, annotate, and sign from desktop or mobile.' },
  { value: 'Legally binding', desc: 'Every signature is timestamped and audit-tracked.' },
  { value: '0 min', desc: 'Setup time — no install required.' },
  { value: '1 place', desc: 'For every PDF from Mail or Work Drive.' },
];

export function PdfReaderStatsRow() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #F0EEF6', borderBottom: '1px solid #F0EEF6' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            data-pdf-reveal=""
            data-pdf-reveal-delay={i * 90}
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderLeft: i > 0 ? '1px solid #F0EEF6' : 'none',
            }}
          >
            <div style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.01em', color: '#7C3AED' }}>{stat.value}</div>
            <p className="pdf-reader-card-desc" style={{ margin: '10px 0 0', color: '#5B5670' }}>{stat.desc}</p>
          </div>
        ))}
      </PdfReaderRevealSection>
    </section>
  );
}
