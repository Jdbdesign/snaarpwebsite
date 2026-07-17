import { DocsRevealSection } from './DocsRevealSection';
import { Price } from '@/components/currency/Price';

export function DocsFinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10" style={{ background: '#F7F7F7', paddingTop: '40px', paddingBottom: '96px' }}>
      <DocsRevealSection reveal style={{ background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', borderRadius: '28px', padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 34px 70px -30px rgba(124,58,237,.6)' }}>
        <div style={{ position: 'absolute', top: '-90px', right: '-40px', width: '340px', height: '340px', background: 'radial-gradient(circle,rgba(255,255,255,.14),transparent 68%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-120px', left: '-60px', width: '380px', height: '380px', background: 'radial-gradient(circle,rgba(20,184,166,.22),transparent 66%)', pointerEvents: 'none' }}></div>
        <span style={{ position: 'relative', fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: 'rgba(255,255,255,.72)', textTransform: 'uppercase' }}>Ready when you are</span>
        <h2 className="docs-final-cta-heading" style={{ position: 'relative', color: '#fff', margin: '16px auto 0', maxWidth: '640px' }}>One Document tool. Every app included.</h2>
        <div style={{ position: 'relative', marginTop: '34px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '16px 34px', borderRadius: '999px', background: '#fff', color: '#6D28D9', fontWeight: '700', fontSize: '16px', cursor: 'pointer', boxShadow: '0 14px 30px -10px rgba(0,0,0,.35)' }}>Start the Stack for <Price amount={1} />
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </DocsRevealSection>
    </section>
  );
}
