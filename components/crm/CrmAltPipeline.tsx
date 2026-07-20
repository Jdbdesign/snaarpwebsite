import { CrmRevealSection } from './CrmRevealSection';

export function CrmAltPipeline() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* static kanban mock (left) */}
        <div data-crm-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="7" y2="6"></line><line x1="3" y1="12" x2="7" y2="12"></line><rect x="10" y="4" width="11" height="4" rx="1"></rect><rect x="10" y="10" width="11" height="4" rx="1"></rect></svg></span>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Pipeline · Q4</span>
              <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 600, color: '#8B85A0' }}>£44,000</span>
            </div>
            <div style={{ padding: '18px', display: 'flex', gap: '10px', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '180px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 2px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>New</span></div>
                <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '9px', padding: '9px' }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Loop &amp; Co</div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}><span style={{ fontSize: '9.5px', fontWeight: 700, color: '#211C36' }}>£2,800</span><span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SP</span></div></div>
              </div>
              <div style={{ flex: 1, background: '#F3F0FB', border: '1.5px dashed #C9BEEE', borderRadius: '11px', padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '180px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 2px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B45309' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#B45309' }}>Contacted</span></div>
                <div style={{ height: '44px', borderRadius: '9px', border: '1.5px dashed #C9BEEE', background: 'rgba(255,255,255,.5)' }}></div>
              </div>
              <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '180px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 2px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>Won</span></div>
                <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '9px', padding: '9px' }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Blue Sky</div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}><span style={{ fontSize: '9.5px', fontWeight: 700, color: '#211C36' }}>£6,400</span><span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>RM</span></div></div>
              </div>
              {/* card mid-drag */}
              <div style={{ position: 'absolute', left: '37%', top: '74px', width: '118px', background: '#fff', border: '1.5px solid #7C3AED', borderRadius: '10px', padding: '9px 10px', boxShadow: '0 22px 40px -12px rgba(124,58,237,.5)', transform: 'rotate(-5deg)', zIndex: 5 }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Meridian Labs</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}><span style={{ fontSize: '9.5px', fontWeight: 700, color: '#211C36' }}>£9,500</span><span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-crm-reveal="" data-crm-reveal-delay="120">
          <h2 className="crm-row-heading" style={{ margin: 0, color: '#1B1730' }}>Your pipeline, always up to date.</h2>
          <p className="crm-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Move deals through your stages with a drag — the board reflects exactly where everything stands, right now.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9h14M5 15h14M9 5l-4 4 4 4M15 11l4 4-4 4"></path></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>Drag deals between stages.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Push a deal forward the moment it moves — no forms, no menus.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>Value, close date, and owner at a glance.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>The essentials sit right on the card — no need to open it.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>Filter by stage, owner, or value.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Narrow the board to just the deals you care about right now.</p></div>
            </div>
          </div>
        </div>
      </CrmRevealSection>
    </section>
  );
}
