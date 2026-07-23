// Bespoke UI-snippet mockups for the Remote & Hybrid Collaboration solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.

'use client';

function PersonIcon({ fill = 'rgba(255,255,255,.92)', size = 24 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
    </svg>
  );
}

// ── Snippet card 1 — Meet video call tile with participants + controls ──
export function SnippetMeetVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '12px', background: '#1B1730', overflow: 'hidden', boxShadow: '0 18px 34px -16px rgba(37,22,84,.34)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* Top bar: LIVE badge + timer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px 4px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: 'rgba(239,68,68,.9)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff' }} />
            <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#fff', letterSpacing: '.05em' }}>LIVE</span>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>02:14</span>
        </div>
        {/* Participant tiles */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', padding: '6px 8px' }}>
          <div style={{ borderRadius: '10px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <PersonIcon size={24} />
            <span style={{ position: 'absolute', bottom: '5px', left: '7px', fontSize: '8px', fontWeight: 700, color: '#fff' }}>Maya</span>
          </div>
          <div style={{ borderRadius: '10px', background: 'linear-gradient(135deg,#0E9384,#0D9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <PersonIcon size={24} />
            <span style={{ position: 'absolute', bottom: '5px', left: '7px', fontSize: '8px', fontWeight: 700, color: '#fff' }}>Devon</span>
          </div>
        </div>
        {/* Call controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '7px 0 9px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
          </span>
          <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.6 11.6 3.4-1.7v4.2l-3.4-1.7"/><rect x="2" y="7" width="14" height="10" rx="2"/></svg>
          </span>
          <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="23" y1="1" x2="1" y2="23"/></svg>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Chat bubbles with typing indicator ──
export function SnippetChatVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
      {/* Incoming message (grey bubble with avatar) */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <PersonIcon fill="#8B85A0" size={11} />
        </span>
        <div style={{ padding: '7px 12px', borderRadius: '14px 14px 14px 4px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 2px 6px -2px rgba(37,22,84,.06)' }}>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#1B1730' }}>Can you take a look at the deck?</span>
        </div>
      </div>
      {/* Outgoing reply (teal bubble, right-aligned) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ padding: '7px 12px', borderRadius: '14px 14px 4px 14px', background: 'linear-gradient(135deg,#0E9384,#0D9488)' }}>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#fff' }}>On it — one sec :)</span>
        </div>
      </div>
      {/* Typing indicator with teal avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#0E9384)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <PersonIcon size={11} />
        </span>
        <div style={{ padding: '8px 14px', borderRadius: '14px 14px 14px 4px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 2px 6px -2px rgba(37,22,84,.06)', display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span className="sc-typing-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A79FBE', animationDelay: '0ms' }} />
          <span className="sc-typing-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A79FBE', animationDelay: '160ms' }} />
          <span className="sc-typing-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A79FBE', animationDelay: '320ms' }} />
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Document with two live cursors and floating name tags ──
export function SnippetDocCursorsVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ borderRadius: '10px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 16px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)', position: 'relative' }}>
        {/* Document lines with floating cursor labels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {/* Line 1 */}
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div style={{ height: '6px', width: '100%', borderRadius: '3px', background: '#E4DFF2' }} />
            {/* Maya label - floating top right area */}
            <span style={{ position: 'absolute', right: '0', top: '-10px', display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '4px', background: '#7C3AED' }}>
              <span style={{ fontSize: '7px', fontWeight: 700, color: '#fff' }}>Maya</span>
            </span>
          </div>
          {/* Line 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ height: '6px', width: '85%', borderRadius: '3px', background: '#EEEAF8' }} />
          </div>
          {/* Line 3 */}
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#E4DFF2' }} />
            {/* Devon label - floating mid-right */}
            <span style={{ position: 'absolute', right: '20%', top: '-10px', display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '4px', background: '#0E9384' }}>
              <span style={{ fontSize: '7px', fontWeight: 700, color: '#fff' }}>Devon</span>
            </span>
          </div>
          {/* Line 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ height: '6px', width: '90%', borderRadius: '3px', background: '#EEEAF8' }} />
          </div>
          {/* Line 5 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ height: '6px', width: '60%', borderRadius: '3px', background: '#E4DFF2' }} />
          </div>
        </div>
        {/* Blinking cursors */}
        <span className="sc-blink-cursor" style={{ position: 'absolute', top: '18px', right: '20px', width: '2px', height: '14px', background: '#7C3AED', borderRadius: '1px' }} />
        <span className="sc-blink-cursor" style={{ position: 'absolute', top: '44px', right: '46px', width: '2px', height: '14px', background: '#0E9384', borderRadius: '1px', animationDelay: '500ms' }} />
      </div>
    </div>
  );
}

// ── Step 01 — Connect: Teams channel -> Jump into Meet ──
export function StepConnectVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Teams channel</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Teams</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <PersonIcon size={12} />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Let&apos;s sync on the proposal</div>
          </div>
        </div>
        <div style={{ padding: '9px 12px', borderRadius: '10px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15.6 11.6 3.4-1.7v4.2l-3.4-1.7" /><rect x="2" y="7" width="14" height="10" rx="2" />
          </svg>
          <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#fff' }}>Jump into Meet</span>
        </div>
      </div>
    </>
  );
}

// ── Step 02 — Collaborate: co-edit Document with live cursors + comments ──
export function StepCollaborateVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Co-editing</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Document</span>
      </div>
      <div style={{ padding: '10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ height: '5px', width: '48px', borderRadius: '3px', background: '#E4DFF2' }} />
            <span className="sc-blink-cursor" style={{ width: '2px', height: '11px', background: '#7C3AED', borderRadius: '1px' }} />
            <div style={{ height: '5px', width: '28px', borderRadius: '3px', background: '#E4DFF2' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ height: '5px', width: '30px', borderRadius: '3px', background: '#EEEAF8' }} />
            <span className="sc-blink-cursor" style={{ width: '2px', height: '11px', background: '#0E9384', borderRadius: '1px', animationDelay: '500ms' }} />
            <div style={{ height: '5px', width: '40px', borderRadius: '3px', background: '#EEEAF8' }} />
          </div>
        </div>
        {/* Comment bubble */}
        <div style={{ marginTop: '10px', padding: '6px 9px', borderRadius: '8px', background: '#fff', border: '1px solid #ECE7F7', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <PersonIcon size={9} />
          </span>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Great point — let&apos;s expand this</span>
        </div>
      </div>
    </>
  );
}

// ── Step 03 — Keep everything together: Work Drive folder ──
export function StepKeepTogetherVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Project folder</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#E11D48', letterSpacing: '.03em' }}>Work Drive</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m15.6 11.6 3.4-1.7v4.2l-3.4-1.7" /><rect x="2" y="7" width="14" height="10" rx="2" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Sprint Planning Recording.mp4</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Proposal v3.docx</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Chat thread export.pdf</span>
        </div>
      </div>
    </>
  );
}

// ── Feature row 1 — Teams+Meet conversation flow ──
export function ConversationFlowVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Design Review</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>Teams</span>
        </div>
        {/* Chat thread */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <PersonIcon size={12} />
            </span>
            <div style={{ padding: '7px 10px', borderRadius: '10px 10px 10px 4px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#1B1730' }}>Can we walk through the mockups?</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#0E9384)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <PersonIcon size={12} />
            </span>
            <div style={{ padding: '7px 10px', borderRadius: '10px 10px 10px 4px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#1B1730' }}>Sure — starting a call now</span>
            </div>
          </div>
        </div>
        {/* Meet handoff */}
        <div style={{ padding: '12px 14px', borderRadius: '14px', background: 'linear-gradient(135deg,#1B1730,#2D2644)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PersonIcon size={14} />
            </span>
            <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg,#0E9384,#0D9488)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PersonIcon size={14} />
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>Meet · Design Review</div>
            <div style={{ fontSize: '8.5px', color: 'rgba(255,255,255,.6)', marginTop: '2px' }}>In progress · 2 participants</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '3px 7px', borderRadius: '999px', background: 'rgba(239,68,68,.9)' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
            <span style={{ fontSize: '7px', fontWeight: 800, color: '#fff' }}>LIVE</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Document with live cursors + Work Drive save badge ──
export function LiveDocVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        {/* Header bar */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FBFAFE' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            </span>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Q3 Proposal</div>
              <div style={{ fontSize: '9.5px', color: '#8B85A0' }}>2 editors active</div>
            </div>
          </div>
          {/* Collaborator avatars */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>
              <PersonIcon size={12} />
            </span>
            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#0E9384)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-6px' }}>
              <PersonIcon size={12} />
            </span>
          </div>
        </div>
        {/* Document body with cursors */}
        <div style={{ padding: '20px 22px 18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ height: '6px', width: '90px', borderRadius: '3px', background: '#E4DFF2' }} />
              <span className="sc-blink-cursor" style={{ width: '2px', height: '14px', background: '#7C3AED', borderRadius: '1px' }} />
              <div style={{ height: '6px', width: '50px', borderRadius: '3px', background: '#E4DFF2' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ height: '6px', width: '60px', borderRadius: '3px', background: '#EEEAF8' }} />
              <div style={{ height: '6px', width: '70px', borderRadius: '3px', background: '#EEEAF8' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ height: '6px', width: '45px', borderRadius: '3px', background: '#E4DFF2' }} />
              <span className="sc-blink-cursor" style={{ width: '2px', height: '14px', background: '#0E9384', borderRadius: '1px', animationDelay: '500ms' }} />
              <div style={{ height: '6px', width: '80px', borderRadius: '3px', background: '#E4DFF2' }} />
            </div>
            <div style={{ height: '6px', width: '110px', borderRadius: '3px', background: '#EEEAF8' }} />
          </div>
          {/* Work Drive save badge */}
          <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#FFF1F2', border: '1px solid #FECDD3' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#E11D48' }}>Saved to Work Drive</span>
          </div>
        </div>
      </div>
    </div>
  );
}
