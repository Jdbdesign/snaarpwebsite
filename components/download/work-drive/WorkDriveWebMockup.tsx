// High-fidelity web app mockup for Work Drive Download page.
// Shows: sidebar (My Files, Shared with Me, Recent, folders), file list with
// realistic filenames, file-type icons, sizes, timestamps, and shared-by avatars.

import { AVATARS } from '../avatarPaths';

export function WorkDriveWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/drive</div>
      </div>

      {/* App content */}
      <div style={{ display: 'flex', minHeight: '260px' }}>
        {/* Sidebar */}
        <div style={{ width: '120px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '14px 10px', display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B1730', marginBottom: '8px' }}>Work Drive</span>
          {[
            { label: 'My Files', active: true },
            { label: 'Shared with Me', active: false },
            { label: 'Recent', active: false },
          ].map((item) => (
            <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 7px', borderRadius: '7px', background: item.active ? '#F3EFFF' : 'transparent', fontSize: '8px', fontWeight: item.active ? 700 : 500, color: item.active ? '#7C3AED' : '#5B5670' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={item.active ? '#7C3AED' : '#A79FBE'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
              {item.label}
            </span>
          ))}
          <div style={{ marginTop: '10px', borderTop: '1px solid #F0EEF6', paddingTop: '8px' }}>
            <span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' as const }}>Folders</span>
            {['Client Projects', 'Team Assets', 'Marketing'].map((f) => (
              <span key={f} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 6px', fontSize: '7.5px', fontWeight: 500, color: '#5B5670' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Main area */}
        <div style={{ flex: 1, padding: '12px 16px' }}>
          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6', flex: 1, maxWidth: '180px' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
              <span style={{ fontSize: '8px', fontWeight: 500, color: '#A79FBE' }}>Search files...</span>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700 }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
              Upload
            </span>
          </div>

          {/* File grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {[
              { name: 'Client Projects', type: 'folder', color: '#7C3AED' },
              { name: 'Team Assets', type: 'folder', color: '#7C3AED' },
              { name: 'Marketing', type: 'folder', color: '#7C3AED' },
              { name: 'Q4 Campaign Brief.pdf', type: 'pdf', color: '#E11D48', avatar: AVATARS.amaraChen },
              { name: 'Budget 2026.xlsx', type: 'sheet', color: '#0E9384', avatar: null },
              { name: 'Brand Guidelines.fig', type: 'file', color: '#D97706', avatar: AVATARS.sofiaReyes },
              { name: 'Meeting Notes.doc', type: 'doc', color: '#3B82F6', avatar: null },
              { name: 'Launch Plan v12.pdf', type: 'pdf', color: '#E11D48', avatar: AVATARS.arlo },
              { name: 'Onboarding.doc', type: 'doc', color: '#3B82F6', avatar: null },
            ].map((file) => (
              <div key={file.name} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '6px', padding: '10px 6px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EEF6', position: 'relative' as const }}>
                {/* File/folder icon */}
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: file.type === 'folder' ? '#F3EFFF' : '#fff', border: `1px solid ${file.type === 'folder' ? '#E6DEFA' : '#F0EEF6'}` }}>
                  {file.type === 'folder' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                  )}
                </span>
                {/* File name */}
                <span style={{ fontSize: '7px', fontWeight: 600, color: '#1B1730', textAlign: 'center' as const, lineHeight: 1.2, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{file.name}</span>
                {/* Shared avatar */}
                {file.avatar && (
                  <span style={{ position: 'absolute' as const, top: '4px', right: '4px', width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff' }}>
                    <img src={file.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
