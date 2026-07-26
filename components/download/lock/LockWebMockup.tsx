// High-fidelity web app mockup for Lock Download page.
// Shows: vault browser with folders, credential entries with masked passwords,
// site icons, last-used timestamps, and a "Generate Password" button.

export function LockWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/lock/vault</div>
      </div>

      {/* Layout: sidebar + main */}
      <div style={{ display: 'flex', minHeight: '320px' }}>
        {/* Sidebar */}
        <div style={{ width: '140px', borderRight: '1px solid #F0EEF6', padding: '12px', background: '#FBFAFE', display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '6px' }}>Folders</span>
          {[
            { name: 'All Items', count: 42, active: false },
            { name: 'Work', count: 18, active: true },
            { name: 'Personal', count: 16, active: false },
            { name: 'Shared', count: 8, active: false },
          ].map((folder) => (
            <div key={folder.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 8px', borderRadius: '6px', background: folder.active ? '#F3EFFF' : 'transparent', border: folder.active ? '1px solid #E6DEFA' : '1px solid transparent' }}>
              <span style={{ fontSize: '7.5px', fontWeight: folder.active ? 700 : 500, color: folder.active ? '#7C3AED' : '#5B5670' }}>{folder.name}</span>
              <span style={{ fontSize: '6px', fontWeight: 600, color: '#A79FBE', background: '#F7F6FA', padding: '1px 4px', borderRadius: '3px' }}>{folder.count}</span>
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: '8px', borderRadius: '8px', background: '#F3EFFF', border: '1px solid #E6DEFA', textAlign: 'center' as const }}>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#7C3AED' }}>Generate Password</span>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '12px 14px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B1730' }}>Work</span>
              <span style={{ fontSize: '7px', fontWeight: 600, color: '#8B85A0' }}>18 credentials</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '7px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
              <span style={{ fontSize: '7px', fontWeight: 500, color: '#A79FBE' }}>Search vault...</span>
            </div>
          </div>

          {/* Credential list */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
            {[
              { name: 'Slack', icon: '💬', user: 'team@snaarp.com', password: '••••••••••••', lastUsed: '2 min ago', strength: 'Strong' },
              { name: 'GitHub', icon: '🐙', user: 'dev@snaarp.com', password: '••••••••••••••', lastUsed: '1 hour ago', strength: 'Strong' },
              { name: 'AWS Console', icon: '☁️', user: 'admin@snaarp.com', password: '••••••••••••••••', lastUsed: '3 hours ago', strength: 'Strong' },
              { name: 'Figma', icon: '🎨', user: 'design@snaarp.com', password: '••••••••••', lastUsed: '5 hours ago', strength: 'Medium' },
              { name: 'Linear', icon: '📋', user: 'team@snaarp.com', password: '••••••••••••', lastUsed: 'Yesterday', strength: 'Strong' },
              { name: 'Notion', icon: '📝', user: 'team@snaarp.com', password: '••••••••', lastUsed: '2 days ago', strength: 'Weak' },
              { name: 'Vercel', icon: '▲', user: 'deploy@snaarp.com', password: '••••••••••••••', lastUsed: '3 days ago', strength: 'Strong' },
            ].map((cred) => (
              <div key={cred.name} style={{ display: 'grid', gridTemplateColumns: '24px 1.5fr 2fr 1fr 0.8fr', gap: '8px', padding: '8px 10px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6', alignItems: 'center' }}>
                <span style={{ fontSize: '11px' }}>{cred.icon}</span>
                <div>
                  <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730' }}>{cred.name}</div>
                  <div style={{ fontSize: '6.5px', color: '#8B85A0' }}>{cred.user}</div>
                </div>
                <span style={{ fontSize: '8px', fontWeight: 500, color: '#A79FBE', letterSpacing: '1px' }}>{cred.password}</span>
                <span style={{ fontSize: '6px', color: '#8B85A0' }}>{cred.lastUsed}</span>
                <span style={{ fontSize: '6px', fontWeight: 700, padding: '2px 5px', borderRadius: '4px', background: cred.strength === 'Strong' ? '#ECFDF9' : cred.strength === 'Medium' ? '#FEF6E7' : '#FEF2F2', color: cred.strength === 'Strong' ? '#0E9384' : cred.strength === 'Medium' ? '#D97706' : '#DC2626' }}>{cred.strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
