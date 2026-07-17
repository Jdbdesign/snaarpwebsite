import { DocsRevealSection } from './DocsRevealSection';

export function DocsAltCollaborate() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <DocsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* collaboration mock (left) */}
        <div data-docs-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 15px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>AS</span>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-6px' }}>MK</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: '600', color: '#0E9384' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', animation: 'docs-live-pulse 2.4s ease-out infinite' }}></span>2 editing now</span>
              <span style={{ marginLeft: 'auto', fontSize: '11.5px', fontWeight: '600', color: '#8B85A0' }}>Marketing_Plan.docx</span>
            </div>
            <div style={{ position: 'relative', padding: '32px 34px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#211C36', letterSpacing: '.02em' }}>CAMPAIGN OVERVIEW</div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '8px', width: '96%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ position: 'relative', height: '12px', width: '88%', borderRadius: '3px', background: '#F1EFF7', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '3px', animation: 'docs-hl-sweep-loop 7s ease-in-out infinite' }}></div></div>
                <div style={{ height: '8px', width: '92%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '8px', width: '74%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '8px', width: '84%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '34px', top: '70px', pointerEvents: 'none', zIndex: 4, animation: 'docs-glide-a 9s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Ade</span></div>
              <div style={{ position: 'absolute', left: '34px', top: '70px', pointerEvents: 'none', zIndex: 4, animation: 'docs-glide-b 11s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Mia</span></div>
              {/* margin comment thread */}
              <div style={{ position: 'absolute', right: '18px', top: '60px', width: '158px', background: '#fff', border: '1px solid #EDEBF2', borderRadius: '12px', boxShadow: '0 16px 32px -12px rgba(37,22,84,.32)', padding: '11px 12px', animation: 'docs-comment-pop 7s ease-in-out infinite' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '19px', height: '19px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AS</span>
                  <span style={{ fontSize: '10px', fontWeight: '600', color: '#211C36' }}>Ade S.</span>
                  <span style={{ marginLeft: 'auto', fontSize: '8.5px', color: '#B4AEC6' }}>now</span>
                </div>
                <p style={{ margin: '6px 0 0', fontSize: '10px', lineHeight: 1.45, color: '#5B5670' }}>@Mia can you add the Q3 numbers here?</p>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-docs-reveal="" data-docs-reveal-delay="120">
          <h2 className="docs-row-heading" style={{ margin: 0, color: '#1B1730' }}>Collaborate without the chaos.</h2>
          <p className="docs-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Everyone works in the same document at the same time — no more emailing &quot;final_v3.docx&quot; and hoping you merged the right changes.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>See who&apos;s editing, and where, live.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Coloured cursors show exactly where each person is working, in real time.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>Comment and suggest, don&apos;t overwrite.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Leave feedback in the margin without changing a word of the text.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>@mention to pull someone in.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Tag a teammate directly in the doc and they&apos;ll get a nudge to jump in.</p></div>
            </div>
          </div>
        </div>
      </DocsRevealSection>
    </section>
  );
}
