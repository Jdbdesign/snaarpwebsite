import { CrmRevealSection } from './CrmRevealSection';
import { Price } from '@/components/currency/Price';

export function CrmSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-crm-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="crm-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1: add a contact or company */}
          <div data-crm-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 20px' }}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 13px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #EDEBF2' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JD</span>
                <div style={{ flex: 1 }}><div style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#E4DFF2' }}></div><div style={{ height: '5px', width: '50%', borderRadius: '3px', background: '#F1EFF7', marginTop: '6px' }}></div></div>
                <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
              </div>
            </div>
            <h3 className="crm-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Add a contact or company</h3>
            <p className="crm-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Or pull one straight from Contacts.</p>
          </div>
          {/* step 2: create a deal */}
          <div data-crm-reveal="" data-crm-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px', overflow: 'hidden', padding: '0 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Vertex Group</span><span style={{ fontSize: '13px', fontWeight: 700, color: '#0E9384' }}>£18,000</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 9px', borderRadius: '999px', background: '#FFEFF2', border: '1px solid #FBD5DD', fontSize: '9.5px', fontWeight: 700, color: '#E11D74' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E11D74' }}></span>Proposal</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 9px', borderRadius: '999px', background: '#FBFAFE', border: '1px solid #EDEBF2', fontSize: '9.5px', fontWeight: 600, color: '#8B85A0' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg>15 Oct</span>
              </div>
            </div>
            <h3 className="crm-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Create a deal</h3>
            <p className="crm-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Set a value, stage, and close date.</p>
          </div>
          {/* step 3: move it forward */}
          <div data-crm-reveal="" data-crm-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', overflow: 'hidden', padding: '0 16px' }}>
              <div style={{ flex: 1, height: '64px', borderRadius: '8px', background: '#FBFAFE', border: '1px dashed #E4DFF2' }}></div>
              <div style={{ flex: 1, height: '64px', borderRadius: '8px', background: '#F5F3FF', border: '1.5px solid #7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px -12px rgba(124,58,237,.55)', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '80%', background: '#fff', border: '1px solid #E6DEFA', borderRadius: '6px', padding: '7px 8px', boxShadow: '0 6px 14px -8px rgba(37,22,84,.3)' }}><div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#D9CEF3' }}></div><div style={{ height: '3px', width: '55%', borderRadius: '2px', background: '#EFEDF6', marginTop: '4px' }}></div></div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ flex: 1, height: '64px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}></div>
            </div>
            <h3 className="crm-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Move it forward</h3>
            <p className="crm-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Drag between stages as it progresses.</p>
          </div>
        </div>
        <div data-crm-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </CrmRevealSection>
    </section>
  );
}
