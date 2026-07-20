import { CrmRevealSection } from './CrmRevealSection';

export function CrmStatsRow() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '80px', paddingBottom: '80px' }}>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {/* 1 pipeline (light) */}
        <div data-crm-reveal="" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '46px' }}>
            <span style={{ width: '11px', height: '22px', borderRadius: '3px', background: '#EDE9FE' }}></span>
            <span style={{ width: '11px', height: '32px', borderRadius: '3px', background: '#D9CEF3' }}></span>
            <span style={{ width: '11px', height: '40px', borderRadius: '3px', background: '#7C3AED' }}></span>
            <span style={{ width: '11px', height: '28px', borderRadius: '3px', background: '#C9BEEE' }}></span>
          </div>
          <div style={{ fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em', color: '#1B1730', marginTop: '16px', lineHeight: 1 }}>1<span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '5px' }}>pipeline</span></div>
          <p className="crm-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Every deal, one view — no spreadsheets.</p>
        </div>
        {/* Auto-logged (dark) */}
        <div data-crm-reveal="" data-crm-reveal-delay="90" style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }}></div>
          <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
          </div>
          <div className="crm-stat-title" style={{ position: 'relative', color: '#fff', marginTop: '20px' }}>Auto-logged</div>
          <p className="crm-card-desc" style={{ position: 'relative', margin: '8px 0 0', color: '#B7B1C9' }}>Emails &amp; meetings on the right deal.</p>
        </div>
        {/* 0 min (violet gradient) */}
        <div data-crm-reveal="" data-crm-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }}></div>
          <div className="crm-stat-number-lg" style={{ position: 'relative', color: '#fff' }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
          <p className="crm-card-desc" style={{ position: 'relative', margin: '10px 0 0', color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
        </div>
        {/* 1 place (light, stack) */}
        <div data-crm-reveal="" data-crm-reveal-delay="270" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '56px', height: '50px' }}>
            <div style={{ position: 'absolute', left: '8px', top: 0, width: '36px', height: '30px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(-8deg)' }}></div>
            <div style={{ position: 'absolute', left: '14px', top: '3px', width: '36px', height: '30px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FBEBC6', transform: 'rotate(7deg)' }}></div>
            <div style={{ position: 'absolute', left: '10px', top: '7px', width: '36px', height: '32px', borderRadius: '6px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="6" y2="6"></line><line x1="3" y1="12" x2="6" y2="12"></line><rect x="9" y="4" width="10" height="4" rx="1"></rect><rect x="9" y="10" width="10" height="4" rx="1"></rect></svg></div>
          </div>
          <div className="crm-stat-title" style={{ marginTop: '18px', color: '#1B1730' }}>1 place</div>
          <p className="crm-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Lives alongside Mail, Kalender &amp; the Stack.</p>
        </div>
      </CrmRevealSection>
    </section>
  );
}
