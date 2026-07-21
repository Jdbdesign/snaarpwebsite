import { Price } from '@/components/currency/Price';
import { EsignatureRevealSection } from './EsignatureRevealSection';

export function EsignatureSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-esignature-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="esignature-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1 : Upload a document */}
          <div data-esignature-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 20px' }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '13px', border: '2px dashed #C9BEEE', background: '#FBFAFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '5px 11px', borderRadius: '999px', background: '#FFEFF2', border: '1px solid #FBD5DD' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#C0344E' }}>Agreement.pdf</span>
                </div>
              </div>
            </div>
            <h3 className="esignature-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Upload a document</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Or start from a saved template.</p>
          </div>
          {/* step 2 : Place signature fields */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px', overflow: 'hidden', padding: '0 20px' }}>
              <span style={{ height: '6px', width: '80%', borderRadius: '3px', background: '#EFEDF6' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 11px', borderRadius: '9px', border: '1.5px dashed #7C3AED', background: '#F5F3FF', boxShadow: '0 10px 20px -12px rgba(124,58,237,.5)' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#7C3AED' }}>Signature field</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 600, color: '#A88FE0' }}>Signer 1</span>
              </div>
              <span style={{ height: '6px', width: '64%', borderRadius: '3px', background: '#EFEDF6' }} />
            </div>
            <h3 className="esignature-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Place signature fields</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Drag fields onto the document for each signer.</p>
          </div>
          {/* step 3 : Send & track */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', overflow: 'hidden', padding: '0 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#0E9384' }} />Signed
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PS</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '999px', background: '#FEF6E7', fontSize: '8.5px', fontWeight: 700, color: '#B45309' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#B45309' }} />Viewed
                </span>
              </div>
            </div>
            <h3 className="esignature-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Send &amp; track</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>See status update live as each person signs.</p>
          </div>
        </div>
        <div data-esignature-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>
            Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
