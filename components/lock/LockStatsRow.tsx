import { LockRevealSection } from './LockRevealSection';

export function LockStatsRow() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '80px', paddingBottom: '80px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {/* End-to-end encrypted (light) */}
        <div data-lock-reveal="" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '46px', height: '46px', borderRadius: '13px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </div>
          <div className="lock-card-title" style={{ color: '#1B1730', marginTop: '18px', lineHeight: 1.15 }}>End-to-end<br />encrypted</div>
          <p className="lock-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Nobody but your team can read your vault &mdash; not even Snaarp.</p>
        </div>
        {/* Shared safely (dark) */}
        <div data-lock-reveal="" data-lock-reveal-delay="90" style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }} />
          <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '13px', background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
          </div>
          <div className="lock-card-title" style={{ position: 'relative', color: '#fff', marginTop: '18px' }}>Shared safely</div>
          <p className="lock-card-desc" style={{ position: 'relative', margin: '9px 0 0', color: '#B7B1C9' }}>Send a password without ever showing the password.</p>
        </div>
        {/* 0 min (violet gradient) */}
        <div data-lock-reveal="" data-lock-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }} />
          <div style={{ position: 'relative', fontSize: '56px', fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
          <p className="lock-card-desc" style={{ position: 'relative', margin: '10px 0 0', color: 'rgba(255,255,255,.82)' }}>Setup time &mdash; no install required.</p>
        </div>
        {/* 1 vault (light, stack) */}
        <div data-lock-reveal="" data-lock-reveal-delay="270" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '56px', height: '50px' }}>
            <div style={{ position: 'absolute', left: '8px', top: 0, width: '36px', height: '30px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(-8deg)' }} />
            <div style={{ position: 'absolute', left: '14px', top: '3px', width: '36px', height: '30px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FBEBC6', transform: 'rotate(7deg)' }} />
            <div style={{ position: 'absolute', left: '10px', top: '7px', width: '36px', height: '32px', borderRadius: '6px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
          </div>
          <div style={{ fontSize: '38px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '16px', lineHeight: 1 }}>1<span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '5px' }}>vault</span></div>
          <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Every credential in one place, not scattered across apps.</p>
        </div>
      </LockRevealSection>
    </section>
  );
}
