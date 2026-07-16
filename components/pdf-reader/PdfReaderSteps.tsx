import { PdfReaderRevealSection } from './PdfReaderRevealSection';
import { Price } from '@/components/currency/Price';

export function PdfReaderSteps() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-pdf-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
          <h2 className="pdf-reader-section-heading" style={{ margin: 0, color: '#1B1730' }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {/* step 1: open any PDF */}
          <div data-pdf-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '78px', borderRadius: '9px', background: '#fff', border: '1px solid #ECE9F5', boxShadow: '0 10px 22px -12px rgba(37,22,84,.34)', position: 'relative', display: 'flex', flexDirection: 'column', gap: '5px', padding: '12px 11px' }}>
                <div style={{ height: '5px', width: '60%', borderRadius: '2px', background: '#EDE9FE' }}></div>
                <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: '#F1EFF7' }}></div>
                <div style={{ height: '4px', width: '88%', borderRadius: '2px', background: '#F1EFF7' }}></div>
                <div style={{ height: '4px', width: '94%', borderRadius: '2px', background: '#F1EFF7' }}></div>
                <span style={{ position: 'absolute', top: '-9px', right: '-9px', padding: '2px 7px', borderRadius: '6px', background: '#C0344E', color: '#fff', fontSize: '8px', fontWeight: '700', boxShadow: '0 6px 12px -6px rgba(192,52,78,.6)' }}>PDF</span>
              </div>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 14px' }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F5F3FF', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
            </div>
            <h3 className="pdf-reader-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Open any PDF</h3>
            <p className="pdf-reader-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>From a Mail attachment, Work Drive, or drag one in directly.</p>
          </div>
          {/* step 2: mark it up */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px', padding: '0 26px', overflow: 'hidden' }}>
              <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              <div style={{ position: 'relative', height: '10px', width: '82%', borderRadius: '3px', background: '#F1EFF7', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '3px', animation: 'pdf-reader-hl-sweep-loop 5.5s ease-in-out infinite' }}></div></div>
              <div style={{ height: '8px', width: '90%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              <svg viewBox="0 0 120 30" style={{ position: 'absolute', right: '16px', bottom: '12px', width: '80px', height: '24px' }} fill="none"><path d="M4 22 C 12 4, 20 4, 24 18 C 28 28, 40 8, 52 16 C 64 24, 76 6, 92 14 C 104 20, 112 10, 116 14" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300" style={{ animation: 'pdf-reader-draw-stroke 5.5s ease-in-out infinite' }}></path></svg>
            </div>
            <h3 className="pdf-reader-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Mark it up</h3>
            <p className="pdf-reader-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Highlight, comment, draw, or fill in form fields.</p>
          </div>
          {/* step 3: sign & send */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: '700', fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
            <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <div style={{ width: '130px', height: '52px', borderRadius: '10px', border: '1.5px dashed #C9BEEE', background: '#FBFAFE', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 150 44" style={{ position: 'absolute', left: '12px', top: '6px', width: '118px', height: '34px' }} fill="none"><path d="M8 30 C 12 12, 20 10, 22 26 C 23 34, 28 34, 31 20 C 33 10, 39 12, 40 28 C 45 18, 50 8, 56 22 C 60 32, 66 20, 70 14 C 78 6, 86 22, 96 18 C 106 14, 112 26, 120 18 C 128 12, 136 22, 144 16" stroke="#211C36" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="520" style={{ animation: 'pdf-reader-sig-draw 5.5s ease-in-out infinite' }}></path></svg>
              </div>
              <span style={{ position: 'absolute', right: '16px', bottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: '600', color: '#0E9384' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-signed-pop 5.5s ease-in-out infinite' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>Signed
              </span>
            </div>
            <h3 className="pdf-reader-card-title" style={{ margin: '22px 0 0', color: '#1B1730' }}>Sign &amp; send</h3>
            <p className="pdf-reader-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Add your own signature, or request one from someone else.</p>
          </div>
        </div>
        <div data-pdf-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for <Price amount={1} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
