import { Price } from '@/components/currency/Price';
import { LockRevealSection } from './LockRevealSection';

export function LockSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-lock-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="lock-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1 : Create your vault */}
          <div data-lock-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 20px' }}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: '6px', width: '60%', borderRadius: '3px', background: '#E4DFF2' }} />
                    <div style={{ height: '5px', width: '40%', borderRadius: '3px', background: '#F1EFF7', marginTop: '6px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EDEBF2', fontFamily: 'ui-monospace,monospace', fontSize: '12px', letterSpacing: '.15em', color: '#7C3AED' }}>
                  &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;<span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 700, color: '#0E9384', letterSpacing: 0, fontFamily: 'Poppins' }}>Strong</span>
                </div>
              </div>
            </div>
            <h3 className="lock-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Create your vault</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Set a master password, encrypted end-to-end.</p>
          </div>
          {/* step 2 : Add your logins */}
          <div data-lock-reveal="" data-lock-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', overflow: 'hidden', padding: '0 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EDEBF2' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#EDE9FE', color: '#7C3AED', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fi</span>
                <div style={{ flex: 1 }}><div style={{ height: '5px', width: '55%', borderRadius: '3px', background: '#E4DFF2' }} /></div>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '11px', color: '#B4AEC6' }}>&bull;&bull;&bull;&bull;&bull;&bull;</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '9px', background: '#F5F3FF', border: '1.5px solid #7C3AED' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#D5F5EF', color: '#0E9384', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>St</span>
                <div style={{ flex: 1 }}><div style={{ height: '5px', width: '70%', borderRadius: '3px', background: '#D9CEF3' }} /></div>
                <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </span>
              </div>
            </div>
            <h3 className="lock-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Add your logins</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Save passwords, notes, and secure fields.</p>
          </div>
          {/* step 3 : Share what's needed */}
          <div data-lock-reveal="" data-lock-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', overflow: 'hidden', padding: '0 18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>You</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.04em' }}>ACCESS</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <span style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  TK
                  <span style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                </span>
              </div>
            </div>
            <h3 className="lock-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Share what&apos;s needed</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Grant access without ever exposing the password itself.</p>
          </div>
        </div>
        <div data-lock-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>
            Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </LockRevealSection>
    </section>
  );
}
