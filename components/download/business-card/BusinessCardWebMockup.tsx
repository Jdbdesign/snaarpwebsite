// High-fidelity web app mockup for Business Card Download page.
// Shows: a digital card preview (avatar, name, title, company, contact icons),
// an analytics panel (view count + mini chart), and a share-method row
// (QR / Link / NFC options).

import { AVATARS } from '../avatarPaths';

export function BusinessCardWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/card/jacob-mitchell</div>
      </div>

      {/* App content */}
      <div className="ai-compose-web-mockup-body">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>My Card</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Live
          </span>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {/* Card preview */}
          <div style={{ flex: 1.1, borderRadius: '16px', background: 'linear-gradient(145deg,#FBFAFE,#F3EFFF)', border: '1px solid #E6DEFA', padding: '18px 16px', textAlign: 'center' as const }}>
            {/* Avatar */}
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', boxShadow: '0 8px 18px -6px rgba(124,58,237,.4)' }}>
              <img src={AVATARS.jacob} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>Jacob Mitchell</div>
            <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '2px' }}>Head of Design · Snaarp</div>
            {/* Contact icons row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
              {[
                <svg key="phone" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.7 12.7 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5 12.7 12.7 0 0 0 2.8.7 2 2 0 0 1 1.7 2z" /></svg>,
                <svg key="mail" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>,
                <svg key="globe" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" /></svg>,
                <svg key="linkedin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>,
              ].map((icon, i) => (
                <span key={i} style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
              ))}
            </div>
          </div>

          {/* Analytics panel */}
          <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
            <div style={{ borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '12px 14px', flex: 1 }}>
              <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' as const }}>Views this week</div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#7C3AED', marginTop: '4px' }}>128</div>
              {/* Mini bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', marginTop: '8px', height: '28px' }}>
                {[14, 22, 18, 30, 26, 20, 28].map((h, i) => (
                  <span key={i} style={{ flex: 1, height: `${h}px`, borderRadius: '3px', background: i === 3 ? '#7C3AED' : '#E6DEFA' }} />
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px 14px' }}>
              <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' as const }}>Saves</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#0E9384' }}>34</span>
                <span style={{ fontSize: '8px', fontWeight: 600, color: '#0E9384' }}>+12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Share method row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px' }}>
          {[
            { label: 'QR Code', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><path d="M14 14h2v2h-2zM20 14h2v2h-2zM14 20h2v2h-2zM20 20h2v2h-2zM17 17h2v2h-2z" /></svg> },
            { label: 'Copy Link', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg> },
            { label: 'NFC', icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8.3a8 8 0 0 1 12 0M9 11.1a4 4 0 0 1 6 0M12 14v.01" /></svg> },
          ].map((item) => (
            <span key={item.label} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 0', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '9px', fontWeight: 600, color: '#7C3AED' }}>
              {item.icon} {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
