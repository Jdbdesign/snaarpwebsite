import { PdfReaderRevealSection } from './PdfReaderRevealSection';

export function PdfReaderAltAnnotate() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* annotation mock (left) */}
        <div data-pdf-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(251,191,36,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '11px 15px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #EDE9FE', animation: 'pdf-reader-tool-active 2.8s ease-in-out infinite' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg></span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13 2 2l3.5 14.5L13 18z"></path></svg></span>
              <span style={{ marginLeft: 'auto', fontSize: '11.5px', fontWeight: '600', color: '#8B85A0' }}>Proposal_Q3.pdf</span>
            </div>
            <div style={{ position: 'relative', padding: '32px 34px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#211C36', letterSpacing: '.02em' }}>3. SCOPE OF WORK</div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '8px', width: '96%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ position: 'relative', height: '12px', width: '88%', borderRadius: '3px', background: '#F1EFF7', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '3px', animation: 'pdf-reader-hl-sweep-loop 7s ease-in-out infinite' }}></div></div>
                <div style={{ height: '8px', width: '92%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                {/* underline annotation */}
                <div style={{ position: 'relative', height: '8px', width: '64%', borderRadius: '3px', background: '#F1EFF7' }}><div style={{ position: 'absolute', left: 0, bottom: '-4px', height: '2px', width: '100%', background: '#7C3AED', borderRadius: '2px', transformOrigin: 'left', animation: 'pdf-reader-hl-sweep-loop 7s ease-in-out infinite', animationDelay: '1s' }}></div></div>
                <div style={{ height: '8px', width: '80%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              </div>
              {/* margin comment */}
              <div style={{ position: 'absolute', right: '20px', top: '66px', width: '160px', background: '#fff', border: '1px solid #EDEBF2', borderRadius: '12px', boxShadow: '0 16px 32px -12px rgba(37,22,84,.32)', padding: '11px 12px', animation: 'pdf-reader-comment-pop 7s ease-in-out infinite' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '19px', height: '19px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AS</span>
                  <span style={{ fontSize: '10px', fontWeight: '600', color: '#211C36' }}>Ade S.</span>
                  <span style={{ marginLeft: 'auto', fontSize: '8.5px', color: '#B4AEC6' }}>now</span>
                </div>
                <p style={{ margin: '6px 0 0', fontSize: '10px', lineHeight: 1.45, color: '#5B5670' }}>Can we tighten this deliverable?</p>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-pdf-reveal="" data-pdf-reveal-delay="120">
          <h2 className="pdf-reader-row-heading" style={{ margin: 0, color: '#1B1730' }}>Annotate without leaving the page.</h2>
          <p className="pdf-reader-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Read, mark up, and discuss a document in the same window — no downloading, no separate markup app, no emailing versions back and forth.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>Highlight &amp; underline key passages.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Mark up the parts that matter so nothing gets missed on review.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>Sticky-note comments anyone can see.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Leave a note on the doc instead of a side thread in chat.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>Freehand drawing and shapes.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Circle a figure or sketch a quick mark by hand for fast feedback.</p></div>
            </div>
          </div>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
