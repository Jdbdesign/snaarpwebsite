import { DocsRevealSection } from './DocsRevealSection';

export function DocsBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <DocsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-docs-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a doc should do</span>
          <h2 className="docs-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>Write, edit, and track — all in one place.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG: Real-time co-editing */}
          <div data-docs-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: '600', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="docs-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Real-time co-editing</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Multiple people, one doc, zero conflicts. Every cursor and keystroke shows up instantly.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '206px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', position: 'relative', overflow: 'hidden', padding: '26px 28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#EAE6F4' }}></div>
                <div style={{ height: '8px', width: '86%', borderRadius: '3px', background: '#EAE6F4' }}></div>
                <div style={{ position: 'relative', height: '11px', width: '92%', borderRadius: '3px', background: '#EAE6F4', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '3px', animation: 'docs-hl-sweep-loop 6s ease-in-out infinite' }}></div></div>
                <div style={{ height: '8px', width: '78%', borderRadius: '3px', background: '#EAE6F4' }}></div>
                <div style={{ height: '8px', width: '88%', borderRadius: '3px', background: '#EAE6F4' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '28px', top: '30px', pointerEvents: 'none', animation: 'docs-glide-a 9s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Ade</span></div>
              <div style={{ position: 'absolute', left: '28px', top: '30px', pointerEvents: 'none', animation: 'docs-glide-b 11s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Mia</span></div>
            </div>
          </div>

          {/* Comments & suggestions */}
          <div data-docs-reveal="" data-docs-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Comments &amp; suggestions</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Leave feedback in the margin without ever touching the text.</p>
            </div>
            <div style={{ width: '150px', flexShrink: 0, background: '#FBFAFE', border: '1px solid #F0EEF7', borderRadius: '13px', padding: '16px 15px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <div style={{ height: '6px', width: '100%', borderRadius: '2px', background: '#EAE6F4' }}></div>
                <div style={{ position: 'relative', height: '9px', width: '82%', borderRadius: '2px', background: '#EAE6F4', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '2px', animation: 'docs-hl-sweep-loop 6s ease-in-out infinite' }}></div></div>
                <div style={{ height: '6px', width: '92%', borderRadius: '2px', background: '#EAE6F4' }}></div>
              </div>
              <div style={{ position: 'absolute', right: '-10px', top: '26px', width: '26px', height: '26px', borderRadius: '50% 50% 50% 3px', background: '#FBBF24', boxShadow: '0 8px 16px -6px rgba(180,83,9,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'docs-comment-pop 6s ease-in-out infinite' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
            </div>
          </div>

          {/* Rich formatting */}
          <div data-docs-reveal="" data-docs-reveal-delay="200" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Rich formatting</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Headings, tables, images, and embedded links — all built in.</p>
            </div>
            <div style={{ width: '150px', flexShrink: 0, background: '#FBFAFE', border: '1px solid #F0EEF7', borderRadius: '13px', padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '11px', color: '#7C3AED', fontFamily: 'Georgia,serif' }}>B</span>
                <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontWeight: 600, fontSize: '11px', color: '#8B85A0', fontFamily: 'Georgia,serif' }}>i</span>
                <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#8B85A0', textDecoration: 'underline', fontFamily: 'Georgia,serif' }}>U</span>
              </div>
              <div style={{ height: '9px', width: '70%', borderRadius: '3px', background: '#E4DFF2' }}></div>
              <div style={{ height: '6px', width: '100%', borderRadius: '2px', background: '#EFEDF6' }}></div>
              <div style={{ height: '6px', width: '90%', borderRadius: '2px', background: '#EFEDF6' }}></div>
            </div>
          </div>

          {/* Version history */}
          <div data-docs-reveal="" data-docs-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', animation: 'docs-audit-in 6s ease-in-out infinite' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff' }}></span></span>
                <span style={{ fontSize: '10.5px', color: '#211C36', fontWeight: '600' }}>Current version</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>now</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', animation: 'docs-audit-in 6s ease-in-out infinite', animationDelay: '1.4s' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#E9E4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B4AEC6' }}></span></span>
                <span style={{ fontSize: '10.5px', color: '#5B5670', fontWeight: '500' }}>Ade edited Budget</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>12:40</span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Version history</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Every change saved — restore any point in time.</p>
          </div>

          {/* Templates */}
          <div data-docs-reveal="" data-docs-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '52px', borderRadius: '7px', background: '#FBFAFE', border: '1px solid #EDE9FE', display: 'flex', flexDirection: 'column', gap: '3px', padding: '8px 7px' }}><div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#EDE9FE' }}></div><div style={{ height: '3px', width: '100%', borderRadius: '2px', background: '#F1EFF7' }}></div><div style={{ height: '3px', width: '90%', borderRadius: '2px', background: '#F1EFF7' }}></div></div>
              <div style={{ width: '40px', height: '52px', borderRadius: '7px', background: '#FBFAFE', border: '1px solid #CDF5EE', display: 'flex', flexDirection: 'column', gap: '3px', padding: '8px 7px' }}><div style={{ height: '4px', width: '60%', borderRadius: '2px', background: '#CDF5EE' }}></div><div style={{ height: '3px', width: '100%', borderRadius: '2px', background: '#F1EFF7' }}></div><div style={{ height: '3px', width: '80%', borderRadius: '2px', background: '#F1EFF7' }}></div></div>
              <div style={{ width: '40px', height: '52px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Templates</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Start from a blank page or a pre-built layout.</p>
          </div>

          {/* Auto-save to Work Drive */}
          <div data-docs-reveal="" data-docs-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '66px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6.5 19Z"></path></svg>
                <span style={{ position: 'absolute', width: '22px', height: '22px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'docs-saved-pulse 3s ease-in-out infinite' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Auto-save to Work Drive</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Nothing to manually export or upload — ever.</p>
          </div>
        </div>
        <div data-docs-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </DocsRevealSection>
    </section>
  );
}
