// High-fidelity web app mockup for ID Card Download page.
// Shows: admin dashboard with staff directory, card templates, access levels,
// and a rendered digital ID card preview.

import { AVATARS } from '../avatarPaths';

export function IdCardWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/id-card/admin</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Staff Directory</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 600, color: '#0E9384' }}>24 active</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Issue Card
        </span>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', minHeight: '300px' }}>
        {/* Staff table */}
        <div style={{ flex: 1, padding: '12px 16px' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.8fr', gap: '8px', padding: '6px 0', borderBottom: '1px solid #F0EEF6' }}>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Employee</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Department</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Access</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Status</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Expires</span>
          </div>

          {[
            { name: 'Jacob Smith', role: 'Senior Engineer', dept: 'Engineering', access: 'Level 3', status: 'Active', expires: 'Dec 2026', avatar: AVATARS.jacob },
            { name: 'Amara Chen', role: 'Finance Lead', dept: 'Finance', access: 'Level 2', status: 'Active', expires: 'Mar 2027', avatar: AVATARS.amaraChen },
            { name: 'Sofia Reyes', role: 'Legal Counsel', dept: 'Legal', access: 'Level 3', status: 'Active', expires: 'Nov 2026', avatar: AVATARS.sofiaReyes },
            { name: 'Arlo Davis', role: 'Designer', dept: 'Product', access: 'Level 2', status: 'Active', expires: 'Jan 2027', avatar: AVATARS.arlo },
            { name: 'Priya Nair', role: 'Support Lead', dept: 'Support', access: 'Level 1', status: 'Expiring', expires: 'Jul 2026', avatar: AVATARS.priyaNair },
            { name: 'Marcus Webb', role: 'DevOps', dept: 'Engineering', access: 'Level 3', status: 'Active', expires: 'Sep 2026', avatar: AVATARS.marcusWebb },
          ].map((emp) => (
            <div key={emp.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.8fr', gap: '8px', padding: '7px 0', borderBottom: '1px solid #F7F6FA', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={emp.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </span>
                <div>
                  <div style={{ fontSize: '7.5px', fontWeight: 700, color: '#1B1730' }}>{emp.name}</div>
                  <div style={{ fontSize: '5.5px', color: '#8B85A0' }}>{emp.role}</div>
                </div>
              </div>
              <span style={{ fontSize: '7px', color: '#5B5670' }}>{emp.dept}</span>
              <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#7C3AED', padding: '2px 5px', borderRadius: '4px', background: '#F3EFFF', width: 'fit-content' }}>{emp.access}</span>
              <span style={{ fontSize: '6.5px', fontWeight: 700, padding: '2px 5px', borderRadius: '4px', background: emp.status === 'Active' ? '#ECFDF9' : '#FEF6E7', color: emp.status === 'Active' ? '#0E9384' : '#D97706', width: 'fit-content' }}>{emp.status}</span>
              <span style={{ fontSize: '6.5px', color: '#8B85A0' }}>{emp.expires}</span>
            </div>
          ))}
        </div>

        {/* Card preview */}
        <div style={{ width: '145px', padding: '14px 12px', borderLeft: '1px solid #F0EEF6', background: '#FBFAFE', display: 'flex', flexDirection: 'column' as const, alignItems: 'center' }}>
          <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '10px' }}>Card Preview</span>
          <div style={{ width: '110px', borderRadius: '10px', background: 'linear-gradient(135deg, #7C3AED, #4C1D95)', padding: '12px', textAlign: 'center' as const }}>
            <div style={{ fontSize: '5.5px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '.08em', marginBottom: '6px' }}>Snaarp Technologies</div>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', margin: '0 auto 6px', border: '1.5px solid rgba(255,255,255,0.4)', overflow: 'hidden' }}>
              <img src={AVATARS.jacob} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#fff' }}>Jacob Smith</div>
            <div style={{ fontSize: '5.5px', color: 'rgba(255,255,255,0.8)' }}>Senior Engineer</div>
            <div style={{ fontSize: '5px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Engineering &middot; Level 3</div>
            {/* QR code mini */}
            <div style={{ width: '30px', height: '30px', borderRadius: '4px', background: '#fff', margin: '8px auto 0', padding: '3px' }}>
              <div style={{ width: '100%', height: '100%', background: '#1B1730', borderRadius: '2px' }} />
            </div>
            <div style={{ fontSize: '4.5px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>EMP-2847</div>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column' as const, gap: '4px', width: '100%' }}>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#8B85A0' }}>Template: Engineering</span>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#8B85A0' }}>Colour: Purple</span>
          </div>
        </div>
      </div>
    </div>
  );
}
