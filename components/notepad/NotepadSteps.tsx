import { NotepadRevealSection } from './NotepadRevealSection';
import { Price } from '@/components/currency/Price';

export function NotepadSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-notepad-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="notepad-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1: start a note */}
          <div data-notepad-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', overflow: 'hidden' }}>
              <div style={{ width: '60px', height: '50px', borderRadius: '9px', background: '#fff', border: '1.5px dashed #C9BEEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ width: '34px', height: '22px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}></span>
                <span style={{ width: '34px', height: '22px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}></span>
              </div>
            </div>
            <h3 className="notepad-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Start a note</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Blank note, checklist, or quick sketch.</p>
          </div>
          {/* step 2: type, tick, or pin */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '9px', overflow: 'hidden', padding: '0 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{ flex: 1, height: '5px', borderRadius: '3px', background: '#EDE9FE' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', border: '1.5px solid #D9D2EC' }}></span><span style={{ flex: 1, height: '5px', borderRadius: '3px', background: '#F1EFF7' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', marginTop: '2px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: '700', color: '#0E9384' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="#0E9384" stroke="none"><path d="M9.5 2 12 8l6 .5-4.5 4 1.5 6-5.5-3.5L4.5 18l1.5-6L1.5 8.5 7.5 8Z"></path></svg>Pinned</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}></span>
                <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#FFEFF2', border: '1px solid #FBD5DD' }}></span>
              </div>
            </div>
            <h3 className="notepad-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Type, tick, or pin</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Write freely, check off items, pin what matters.</p>
          </div>
          {/* step 3: find it anywhere */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', overflow: 'hidden', padding: '0 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '8px 12px', borderRadius: '999px', background: '#FBFAFE', border: '1px solid #EDEBF2' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span style={{ fontSize: '11px', color: '#B4AEC6' }}>trip</span></div>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA' }}><span style={{ width: '6px', height: '6px', borderRadius: '2px', background: '#7C3AED' }}></span><span style={{ height: '5px', flex: 1, borderRadius: '2px', background: '#D9CEF3' }}></span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6' }}><span style={{ width: '6px', height: '6px', borderRadius: '2px', background: '#CFC7DF' }}></span><span style={{ height: '5px', width: '64%', borderRadius: '2px', background: '#EFEDF6' }}></span></div>
              </div>
            </div>
            <h3 className="notepad-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Find it anywhere</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Search or browse from any device, instantly.</p>
          </div>
        </div>
        <div data-notepad-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
