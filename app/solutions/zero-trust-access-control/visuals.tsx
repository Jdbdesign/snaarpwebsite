// Bespoke UI-snippet mockups for the Zero Trust Access Control solution page.
// Same inline-style pattern as gdpr-data-privacy/visuals.tsx.

'use client';

function ShieldIcon({ size = 24, color = '#7C3AED' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FingerprintIcon({ size = 14, color = '#7C3AED' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-3.3 2.7-6 6-6 1 0 2 .3 2.8.7" />
      <path d="M12 12v4" /><path d="M12 18v2" />
      <path d="M18 12a6 6 0 0 0-6-6" /><path d="M22 12a10 10 0 0 0-2-6" />
    </svg>
  );
}

// ── Snippet card 1 — Device Verification Panel ──
export function SnippetDeviceVerifyVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FingerprintIcon size={11} color="#7C3AED" />
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Device Trust</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '11px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>MacBook Pro · Trusted</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Active</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>iPhone 15 · Verified</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Active</span>
          </div>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <FingerprintIcon size={8} color="#7C3AED" />
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Zero Trust</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — MFA Challenge Badge ──
export function SnippetMfaChallengeVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '128px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 12px', boxShadow: '0 16px 30px -16px rgba(37,22,84,.34)', textAlign: 'center', position: 'relative' }}>
        {/* Shield verified */}
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(124,58,237,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.92)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>MFA Required</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Step-up authentication</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#7C3AED', letterSpacing: '.03em' }}>Verified</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Session Revocation Card ──
export function SnippetSessionRevokeVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Session Control</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Active Sessions</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '3px' }}>3 devices · 2 locations</div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#FFF1F2', border: '1px solid #FFE0E3' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#E11D48' }}>Revoke All</span>
          </div>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Instant kill-switch</span>
        </div>
      </div>
    </div>
  );
}

// ── Step 01 — Verify every identity (Fingerprint + MFA) ──
export function StepVerifyIdentityVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <FingerprintIcon size={12} color="#7C3AED" />
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Identity Check</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Lock</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Biometric verified</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Step 1</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>MFA token confirmed</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Step 2</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Device posture healthy</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Step 3</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Access Granted</span>
      </div>
    </>
  );
}

// ── Step 02 — Validate every device (Device Trust panel) ──
export function StepValidateDeviceVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '150px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 12px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', marginBottom: '10px' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.04em' }}>Device</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', padding: '0 4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>OS Patched</span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Disk Encrypted</span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Firewall Active</span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
          </div>
        </div>
        <div style={{ marginTop: '10px', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Posture: Healthy</div>
      </div>
    </div>
  );
}

// ── Step 03 — Monitor and respond (Real-time threat view) ──
export function StepMonitorRespondVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Threat detection side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#7C3AED', textTransform: 'uppercase' }}>Threat Monitor</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Unusual login · Lagos</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Session blocked</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Alert sent to admin</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 7px', borderRadius: '6px', background: '#FFF1F2', border: '1px solid #FFE0E3' }}>
          <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#E11D48' }}>1 threat blocked</span>
        </div>
      </div>
      {/* Auto-response side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>Auto Response</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Session revoked</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>MFA re-triggered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Admin notified</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Resolved</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — Continuous Verification (full access dashboard) ──
export function ContinuousVerificationVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldIcon size={14} color="#7C3AED" />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Access Dashboard</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8.5px', fontWeight: 700, color: '#7C3AED' }}>Zero Trust</span>
        </div>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0E9384' }}>142</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Verified logins</div>
          </div>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#FFF1F2', border: '1px solid #FFE0E3', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#E11D48' }}>3</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Blocked attempts</div>
          </div>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>18</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Devices trusted</div>
          </div>
        </div>
        {/* Recent verifications */}
        <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '8px' }}>Recent verifications</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>A. Okafor · MFA + device trust</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>2 min ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>M. Torres · biometric + location</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>5 min ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#FFF1F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#E11D48' }}>Unknown · blocked (unrecognized device)</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>8 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Least Privilege Access (role-based permissions grid) ──
export function LeastPrivilegeVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(14,147,132,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Role-Based Permissions</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Least privilege enforcement</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>Active</span>
        </div>
        {/* Permission grid */}
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Admin row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Admin</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Full access · audit log</div>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#7C3AED' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#7C3AED' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#7C3AED' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#7C3AED' }} />
              </div>
            </div>
            {/* Editor row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#A7F3D0,#34D399)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Editor</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Read + write · no delete</div>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#E2E0E9' }} />
              </div>
            </div>
            {/* Viewer row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#FDE68A,#F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Viewer</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Read only · time-limited</div>
              </div>
              <div style={{ display: 'flex', gap: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#F59E0B' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#E2E0E9' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#E2E0E9' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#E2E0E9' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
