import { NotepadRevealSection } from './NotepadRevealSection';

export function NotepadStatsRow() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '80px', paddingBottom: '80px' }}>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {/* Instant (light) */}
        <div data-notepad-reveal="" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <div className="notepad-stat-title" style={{ marginTop: '20px', color: '#1B1730' }}>Instant</div>
          <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Notes save the moment you stop typing.</p>
        </div>
        {/* Searchable (dark) */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="90" style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }}></div>
          <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>
          <div className="notepad-stat-title" style={{ position: 'relative', color: '#fff', marginTop: '20px' }}>Searchable</div>
          <p className="notepad-card-desc" style={{ position: 'relative', margin: '8px 0 0', color: '#B7B1C9' }}>Find any note in seconds.</p>
        </div>
        {/* 0 min (violet gradient) */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }}></div>
          <div className="notepad-stat-number-lg" style={{ position: 'relative', color: '#fff' }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
          <p className="notepad-card-desc" style={{ position: 'relative', margin: '10px 0 0', color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
        </div>
        {/* 1 place (light, note stack) */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="270" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '56px', height: '50px' }}>
            <div style={{ position: 'absolute', left: '8px', top: 0, width: '36px', height: '30px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FBEBC6', transform: 'rotate(-8deg)' }}></div>
            <div style={{ position: 'absolute', left: '14px', top: '3px', width: '36px', height: '30px', borderRadius: '6px', background: '#FFEFF2', border: '1px solid #FBD5DD', transform: 'rotate(7deg)' }}></div>
            <div style={{ position: 'absolute', left: '10px', top: '7px', width: '36px', height: '32px', borderRadius: '6px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', flexDirection: 'column', gap: '3px', padding: '7px', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}>
              <span style={{ height: '3px', width: '70%', borderRadius: '2px', background: '#E6DEFA' }}></span>
              <span style={{ height: '2px', width: '100%', borderRadius: '1px', background: '#F1EFF7' }}></span>
              <span style={{ height: '2px', width: '85%', borderRadius: '1px', background: '#F1EFF7' }}></span>
            </div>
          </div>
          <div className="notepad-stat-title" style={{ marginTop: '18px', color: '#1B1730' }}>1 place</div>
          <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Notes live alongside Mail, Drive &amp; the Stack.</p>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
