// High-fidelity web app mockup for Presentation Download page.
// Shows: slide editor with a dark canvas slide, toolbar, slide filmstrip sidebar,
// collaborator cursors, and a "Present" button.

import { AVATARS } from '../avatarPaths';

export function PresentationWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/presentation/q3-offsite</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Q3 Team Offsite</span>
          <span style={{ fontSize: '8px', color: '#8B85A0' }}>· 5 slides</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Collaborators */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff' }}>
              <img src={AVATARS.jacob} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff', marginLeft: '-6px' }}>
              <img src={AVATARS.amaraChen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
          </div>
          {/* Present button */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Present
          </span>
        </div>
      </div>

      {/* Editor area */}
      <div style={{ display: 'flex', minHeight: '220px' }}>
        {/* Slide filmstrip sidebar */}
        <div style={{ width: '68px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '10px 8px', display: 'flex', flexDirection: 'column' as const, gap: '6px', background: '#FBFAFE' }}>
          {[
            { n: 1, bg: '#1B1730', active: true },
            { n: 2, bg: '#0F766E', active: false },
            { n: 3, bg: '#92400E', active: false },
            { n: 4, bg: '#9D174D', active: false },
            { n: 5, bg: '#1B1730', active: false },
          ].map((slide) => (
            <div key={slide.n} style={{ borderRadius: '6px', overflow: 'hidden', border: slide.active ? '2px solid #7C3AED' : '1px solid #F0EEF6', position: 'relative' as const }}>
              <div style={{ height: '30px', background: slide.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '5px', fontWeight: 700, color: '#fff' }}>Slide {slide.n}</span>
              </div>
              <span style={{ position: 'absolute' as const, bottom: '2px', left: '3px', fontSize: '5px', fontWeight: 700, color: slide.active ? '#7C3AED' : '#A79FBE' }}>{slide.n}</span>
            </div>
          ))}
        </div>

        {/* Main canvas */}
        <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', background: '#F7F6FA' }}>
          {/* Slide canvas */}
          <div style={{ width: '100%', maxWidth: '280px', aspectRatio: '16/10', borderRadius: '12px', background: 'linear-gradient(135deg, #1B1730, #2D2650)', padding: '20px', textAlign: 'center' as const, position: 'relative' as const, boxShadow: '0 16px 40px -16px rgba(27,23,48,.5)' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#fff', marginTop: '12px' }}>Q3 Team Offsite</div>
            <div style={{ fontSize: '9px', color: '#C4B5FD', marginTop: '6px' }}>Two days · Lisbon · 15–16 September</div>

            {/* Collaborator cursor (Amara) */}
            <span style={{ position: 'absolute' as const, top: '28px', right: '34px', width: '1.5px', height: '14px', background: '#E11D74', borderRadius: '1px' }} />
            <span style={{ position: 'absolute' as const, top: '25px', right: '26px', background: '#E11D74', borderRadius: '3px', padding: '1px 4px', fontSize: '5.5px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' as const }}>Amara</span>

            {/* Decorative accent bar */}
            <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'center', gap: '4px' }}>
              <span style={{ width: '20px', height: '2.5px', borderRadius: '2px', background: '#7C3AED' }} />
              <span style={{ width: '20px', height: '2.5px', borderRadius: '2px', background: '#5B5670' }} />
              <span style={{ width: '20px', height: '2.5px', borderRadius: '2px', background: '#5B5670' }} />
            </div>
          </div>

          {/* Editing toolbar below canvas */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
            {['Text', 'Shape', 'Image'].map((tool) => (
              <span key={tool} style={{ padding: '4px 10px', borderRadius: '6px', background: '#fff', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>{tool}</span>
            ))}
            <span style={{ padding: '4px 10px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Template</span>
          </div>
        </div>
      </div>
    </div>
  );
}
