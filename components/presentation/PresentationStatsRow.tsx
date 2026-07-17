import { PresentationRevealSection } from './PresentationRevealSection';

export function PresentationStatsRow() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '80px', paddingBottom: '80px' }}>
      <PresentationRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {/* real-time (light, cursors illustration) */}
        <div data-presentation-reveal="" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', height: '52px' }}>
            <div style={{ position: 'absolute', left: '2px', top: '6px' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-1px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8px', fontWeight: '600' }}>Ade</span></div>
            <div style={{ position: 'absolute', left: '70px', top: '24px' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-1px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: '600' }}>Mia</span></div>
          </div>
          <div className="presentation-stat-title" style={{ color: '#1B1730', marginTop: '16px' }}>Real-time</div>
          <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>See every slide edit and cursor as it happens.</p>
        </div>
        {/* unlimited (dark, templates stack) */}
        <div data-presentation-reveal="" data-presentation-reveal-delay="90" style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }}></div>
          <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>
          </div>
          <div className="presentation-stat-title" style={{ position: 'relative', color: '#fff', marginTop: '20px' }}>Unlimited</div>
          <p style={{ position: 'relative', margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>Templates and themes to start from.</p>
        </div>
        {/* 0 min (violet gradient) */}
        <div data-presentation-reveal="" data-presentation-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }}></div>
          <div className="presentation-stat-number-lg" style={{ position: 'relative', color: '#fff' }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
          <p style={{ position: 'relative', margin: '10px 0 0', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
        </div>
        {/* 1 place (light, deck stack) */}
        <div data-presentation-reveal="" data-presentation-reveal-delay="270" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '56px', height: '52px' }}>
            <div style={{ position: 'absolute', left: '8px', top: 0, width: '38px', height: '26px', borderRadius: '5px', background: '#F1EEF9', border: '1px solid #E4DFF2', transform: 'rotate(-7deg)' }}></div>
            <div style={{ position: 'absolute', left: '14px', top: '5px', width: '38px', height: '26px', borderRadius: '5px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(6deg)' }}></div>
            <div style={{ position: 'absolute', left: '10px', top: '9px', width: '38px', height: '28px', borderRadius: '5px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
          </div>
          <div className="presentation-stat-title" style={{ color: '#1B1730', marginTop: '20px' }}>1 place</div>
          <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Decks live alongside Mail, Drive &amp; the Stack.</p>
        </div>
      </PresentationRevealSection>
    </section>
  );
}
