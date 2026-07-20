import { PresentationRevealSection } from './PresentationRevealSection';
import { Price } from '@/components/currency/Price';

export function PresentationSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <PresentationRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-presentation-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="presentation-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1: start a deck */}
          <div data-presentation-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', overflow: 'hidden' }}>
              <div style={{ width: '66px', height: '46px', borderRadius: '7px', background: '#fff', border: '1.5px dashed #C9BEEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ width: '66px', height: '46px', borderRadius: '7px', background: '#fff', border: '1px solid #ECE9F5', boxShadow: '0 10px 22px -12px rgba(37,22,84,.34)', display: 'flex', flexDirection: 'column', gap: '4px', padding: '9px 9px' }}><div style={{ height: '4px', width: '64%', borderRadius: '2px', background: '#EDE9FE' }}></div><div style={{ height: '3px', width: '100%', borderRadius: '2px', background: '#F1EFF7' }}></div><div style={{ height: '3px', width: '88%', borderRadius: '2px', background: '#F1EFF7' }}></div></div>
            </div>
            <h3 className="presentation-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Start a deck</h3>
            <p className="presentation-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Blank canvas or a pre-built template.</p>
          </div>
          {/* step 2: invite your team */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '11px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>You</span>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-8px' }}>AS</span>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-8px' }}>MK</span>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#F5F3FF', color: '#7C3AED', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #C9BEEE', marginLeft: '-8px' }}>+</span>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #EDE9FE', fontSize: '10.5px', fontWeight: '600', color: '#7C3AED' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>Copy share link</span>
            </div>
            <h3 className="presentation-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Invite your team</h3>
            <p className="presentation-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Share a link, build it out together.</p>
          </div>
          {/* step 3: present anywhere */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#1B1730', border: '1px solid #2A2545', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '76%', height: '64%', borderRadius: '8px', background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 16px', gap: '6px', boxShadow: '0 12px 26px -12px rgba(0,0,0,.5)' }}>
                <div style={{ height: '6px', width: '58%', borderRadius: '3px', background: 'rgba(255,255,255,.9)' }}></div>
                <div style={{ height: '4px', width: '88%', borderRadius: '2px', background: 'rgba(255,255,255,.5)' }}></div>
              </div>
              <div style={{ position: 'absolute', bottom: '9px', right: '10px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.24)', fontSize: '9px', fontWeight: '600', color: '#fff' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>Present</div>
            </div>
            <h3 className="presentation-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Present, anywhere</h3>
            <p className="presentation-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Full-screen present mode, on any device.</p>
          </div>
        </div>
        <div data-presentation-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </PresentationRevealSection>
    </section>
  );
}
