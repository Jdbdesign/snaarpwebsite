// High-fidelity web app mockup for Document Download page.
// Shows: toolbar, formatted document with heading/paragraphs/bullet list,
// two collaborator cursors with name pills, and a comment bubble in the margin.

import { AVATARS } from '../avatarPaths';

export function DocumentWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/docs/q4-launch-plan</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Formatting controls */}
          {['B', 'I', 'U'].map((l) => (
            <span key={l} style={{ width: '20px', height: '20px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: l === 'B' ? 800 : 600, color: '#5B5670', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>{l}</span>
          ))}
          <span style={{ width: '1px', height: '14px', background: '#F0EEF6', margin: '0 4px' }} />
          {/* Heading dropdown */}
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '5px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>
            Heading 1
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </span>
          <span style={{ width: '1px', height: '14px', background: '#F0EEF6', margin: '0 4px' }} />
          {/* List + link */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Collaborator avatars */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff' }}>
              <img src={AVATARS.amaraChen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff', marginLeft: '-6px' }}>
              <img src={AVATARS.arlo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
          </div>
          {/* Saved indicator */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '8px', fontWeight: 600, color: '#0E9384' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Saved
          </span>
        </div>
      </div>

      {/* Document content */}
      <div style={{ padding: '20px 24px', position: 'relative' as const }}>
        {/* Title */}
        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1B1730', marginBottom: '12px', letterSpacing: '-.02em' }}>Q4 Launch Plan</div>

        {/* Paragraph 1 with collaborator cursor */}
        <div style={{ position: 'relative' as const, marginBottom: '10px' }}>
          <p style={{ fontSize: '9.5px', lineHeight: 1.7, color: '#5B5670', margin: 0 }}>
            The campaign launches on October 14 with a coordinated push across email, social, and paid channels. The landing page goes live one week earlier for early sign-ups and waitlist captures.
          </p>
          {/* Amara cursor (rose) */}
          <span style={{ position: 'absolute' as const, top: '4px', left: '198px', width: '1.5px', height: '12px', background: '#E11D74', borderRadius: '1px' }} />
          <span style={{ position: 'absolute' as const, top: '1px', left: '194px', background: '#E11D74', borderRadius: '3px', padding: '1px 4px', fontSize: '6px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' as const }}>Amara</span>
        </div>

        {/* Paragraph 2 with Arlo cursor */}
        <div style={{ position: 'relative' as const, marginBottom: '10px' }}>
          <p style={{ fontSize: '9.5px', lineHeight: 1.7, color: '#5B5670', margin: 0 }}>
            Creative assets are due by September 28. The design team will deliver final variants for A/B testing by October 1.
          </p>
          {/* Arlo cursor (blue) */}
          <span style={{ position: 'absolute' as const, top: '4px', left: '86px', width: '1.5px', height: '12px', background: '#3B82F6', borderRadius: '1px' }} />
          <span style={{ position: 'absolute' as const, top: '1px', left: '82px', background: '#3B82F6', borderRadius: '3px', padding: '1px 4px', fontSize: '6px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' as const }}>Arlo</span>
        </div>

        {/* Bullet list */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '5px', marginLeft: '10px', marginBottom: '12px' }}>
          {['Email sequence finalized', 'Landing page copy approved', 'Social assets in review', 'Paid budget confirmed'].map((item) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#5B5670' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#7C3AED', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>

        {/* Comment bubble in margin */}
        <div style={{ position: 'absolute' as const, top: '48px', right: '12px', width: '110px', borderRadius: '10px', background: '#FEF6E7', border: '1px solid #FBEBC6', padding: '8px 10px', boxShadow: '0 4px 12px -4px rgba(146,64,14,.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src={AVATARS.arlo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#92400E' }}>Arlo</span>
            <span style={{ fontSize: '6px', color: '#B45309', marginLeft: 'auto' }}>2m ago</span>
          </div>
          <p style={{ fontSize: '7.5px', lineHeight: 1.4, color: '#92400E', margin: 0 }}>"Should we move this up a week? The design team has bandwidth."</p>
        </div>

        {/* Highlighted phrase (what the comment points to) */}
        <span style={{ position: 'absolute' as const, top: '50px', left: '137px', width: '80px', height: '11px', background: 'rgba(251,191,36,.2)', borderRadius: '2px' }} />
      </div>
    </div>
  );
}
