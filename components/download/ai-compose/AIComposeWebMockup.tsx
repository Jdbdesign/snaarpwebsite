// High-fidelity web app mockup for AI Compose Download page.
// Shows: a compose window with recipient/subject, a prompt field with
// "Generate" button, and a generated draft with Shorter/Medium/Longer
// toggle + Copy/Insert/Regenerate actions - mirroring the product page's
// interactive demo as a static, polished screenshot.

export function AIComposeWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/mail/compose</div>
      </div>

      {/* App content */}
      <div className="ai-compose-web-mockup-body">
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>New Message</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
            AI Compose
          </span>
        </div>

        {/* To / Subject fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid #F0EEF6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#A79FBE', width: '48px' }}>To:</span>
            <span style={{ fontSize: '10px', fontWeight: 500, color: '#1B1730' }}>alex@client.io</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#A79FBE', width: '48px' }}>Subject:</span>
            <span style={{ fontSize: '10px', fontWeight: 500, color: '#1B1730' }}>Invoice follow-up</span>
          </div>
        </div>

        {/* Prompt input */}
        <div style={{ borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 16px', marginBottom: '14px' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' as const }}>WHAT SHOULD I WRITE?</span>
          <p style={{ margin: '8px 0 0', fontSize: '11px', fontWeight: 500, color: '#1B1730', lineHeight: 1.4 }}>Follow up about the invoice, keep it friendly</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '10px', fontWeight: 700, boxShadow: '0 6px 14px -4px rgba(124,58,237,.5)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
              Generate
            </span>
          </div>
        </div>

        {/* Generated draft */}
        <div style={{ borderRadius: '14px', background: '#F3EFFF', border: '1px solid #E6DEFA', padding: '16px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED', letterSpacing: '.06em' }}>DRAFT READY</span>
          </div>
          <p style={{ fontSize: '11px', lineHeight: 1.6, color: '#1B1730', margin: 0 }}>
            Hi Alex,<br /><br />
            Just a quick note to follow up on the invoice I sent last week. Let me know if you need anything else from me - happy to help.<br /><br />
            Best,<br />Grace
          </p>

          {/* Length toggle */}
          <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1px solid #E6DEFA', background: '#fff', fontSize: '9px', fontWeight: 600, color: '#8B85A0' }}>Shorter</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: '#7C3AED', fontSize: '9px', fontWeight: 700, color: '#fff' }}>Medium</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1px solid #E6DEFA', background: '#fff', fontSize: '9px', fontWeight: 600, color: '#8B85A0' }}>Longer</span>
          </div>

          {/* Action buttons */}
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '10px', fontWeight: 700 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Insert
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', border: '1px solid #E6DEFA', background: '#fff', color: '#7C3AED', fontSize: '10px', fontWeight: 600 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.5 9A9 9 0 0 0 5.6 5.6L1 10m22 4-4.6 4.4A9 9 0 0 1 3.5 15" /></svg>
              Regenerate
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', border: '1px solid #E6DEFA', background: '#fff', color: '#5B5670', fontSize: '10px', fontWeight: 600 }}>
              Copy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
