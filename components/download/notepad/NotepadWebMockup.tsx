// High-fidelity web app mockup for Notepad Download page.
// Shows: sidebar with notes list, main editor with rich note content,
// formatting toolbar, and search.

export function NotepadWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/notepad</div>
      </div>

      {/* App content */}
      <div style={{ display: 'flex', minHeight: '320px' }}>
        {/* Sidebar - notes list */}
        <div style={{ width: '130px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '10px', display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 8px', borderRadius: '7px', background: '#F7F6FA', border: '1px solid #F0EEF6', marginBottom: '6px' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
            <span style={{ fontSize: '7px', fontWeight: 500, color: '#A79FBE' }}>Search notes...</span>
          </div>

          {/* Note items */}
          {[
            { title: 'Meeting prep', preview: 'Review Q3 numbers, prep deck...', active: true, pinned: true },
            { title: 'Product ideas', preview: 'Offline mode for Document...', active: false, pinned: false },
            { title: 'Call notes - Devon', preview: 'Consolidate three tools...', active: false, pinned: false },
            { title: 'Links to save', preview: 'figma.com/file/q3-rebrand...', active: false, pinned: false },
            { title: 'Sprint retro', preview: 'What went well: shipping...', active: false, pinned: false },
          ].map((note) => (
            <div key={note.title} style={{ padding: '6px 8px', borderRadius: '8px', background: note.active ? '#F3EFFF' : 'transparent', border: note.active ? '1px solid #E6DEFA' : '1px solid transparent', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ fontSize: '7.5px', fontWeight: 700, color: note.active ? '#7C3AED' : '#1B1730' }}>{note.title}</span>
                {note.pinned && <svg width="6" height="6" viewBox="0 0 24 24" fill="#7C3AED" stroke="none"><circle cx="12" cy="12" r="4" /></svg>}
              </div>
              <span style={{ fontSize: '6.5px', color: '#8B85A0', display: 'block', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{note.preview}</span>
            </div>
          ))}
        </div>

        {/* Main editor */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column' as const }}>
          {/* Editor toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid #F0EEF6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {['B', 'I', 'U'].map((l) => (
                <span key={l} style={{ width: '18px', height: '18px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: l === 'B' ? 800 : 600, color: '#5B5670', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>{l}</span>
              ))}
              <span style={{ width: '1px', height: '12px', background: '#F0EEF6', margin: '0 2px' }} />
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '7px', fontWeight: 600, color: '#0E9384' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Synced
            </span>
          </div>

          {/* Note title */}
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B1730', marginBottom: '10px' }}>Meeting prep</div>

          {/* Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', marginBottom: '12px' }}>
            {[
              { text: 'Review Q3 numbers before the call', done: true },
              { text: 'Prep slide deck intro - keep it to 3 mins', done: true },
              { text: 'Email agenda to team by 4pm', done: false },
              { text: 'Book meeting room (floor 3)', done: false },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', border: item.done ? '1.5px solid #0E9384' : '1.5px solid #DDD8E8', background: item.done ? '#ECFDF9' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  {item.done && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                </span>
                <span style={{ fontSize: '8.5px', color: item.done ? '#8B85A0' : '#1B1730', fontWeight: item.done ? 500 : 600, textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Free-form text */}
          <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730', marginBottom: '5px' }}>Notes</div>
          <p style={{ fontSize: '8px', lineHeight: 1.6, color: '#5B5670', margin: 0 }}>
            Devon mentioned they want a single dashboard view across CRM + Sheets. Worth flagging to product. Also: Sofia has the design spec for the onboarding improvements - grab it before Friday standup.
          </p>
        </div>
      </div>
    </div>
  );
}
