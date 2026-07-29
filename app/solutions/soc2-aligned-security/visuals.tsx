// Bespoke UI-snippet mockups for the SOC 2-Aligned Security solution page.
// Same inline-style pattern as gdpr-data-privacy/visuals.tsx.

'use client';

function ShieldLockIcon({ size = 14, color = '#7C3AED' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
    </svg>
  );
}

function ClipboardIcon({ size = 14, color = '#0E9384' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </svg>
  );
}

// ── Snippet card 1 — Audit Log (encrypted access trail) ──
export function SnippetAuditLogVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ShieldLockIcon size={11} color="#7C3AED" />
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Audit Log</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '11px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>File accessed · Work Drive</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:02</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Permission changed · Admin</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:18</span>
          </div>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <ShieldLockIcon size={8} color="#7C3AED" />
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Immutable</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Compliance Checklist Badge ──
export function SnippetComplianceCheckVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '128px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 12px', boxShadow: '0 16px 30px -16px rgba(37,22,84,.34)', textAlign: 'center', position: 'relative' }}>
        {/* Green check badge */}
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ClipboardIcon size={22} color="rgba(255,255,255,.92)" />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>SOC 2 Controls</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>5 trust principles</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Audit-Ready</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Encryption at Rest Card ──
export function SnippetEncryptionVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Encryption</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Data at Rest</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '3px' }}>AES-256 · all storage volumes</div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Encrypted</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>In Transit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 01 — Log everything (immutable audit trail) ──
export function StepLogEverythingVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldLockIcon size={12} color="#7C3AED" />
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Audit Trail</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Lock</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>User login · MFA verified</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>08:31</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>File download · Client DB</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:02</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Role changed · Editor to Admin</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:18</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
        <ShieldLockIcon size={8} color="#7C3AED" />
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Tamper-proof</span>
      </div>
    </>
  );
}

// ── Step 02 — Enforce access controls (role-based panel) ──
export function StepEnforceAccessVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '150px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 12px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(124,58,237,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', marginBottom: '10px' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#7C3AED', letterSpacing: '.04em' }}>Access Control</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Admin</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#7C3AED' }}>Full</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Member</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Limited</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Guest</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#F59E0B' }}>View only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 03 — Prove it on demand (compliance report export) ──
export function StepProveItVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Report side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#7C3AED', textTransform: 'uppercase' }}>Report</span>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', marginTop: '7px' }}>SOC 2 Evidence</div>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ height: '4px', width: '90%', borderRadius: '2px', background: '#EEEAF8' }} />
          <div style={{ height: '4px', width: '70%', borderRadius: '2px', background: '#EEEAF8' }} />
          <div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#EEEAF8' }} />
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 7px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#7C3AED' }}>Generated today</span>
        </div>
      </div>
      {/* Controls status side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>Controls</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Encryption · Pass</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Access logs · Pass</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Identity · Pass</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>All Pass</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — Immutable Audit Trail (full access dashboard) ──
export function AuditTrailVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldLockIcon size={14} color="#7C3AED" />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Security Events</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8.5px', fontWeight: 700, color: '#7C3AED' }}>Immutable</span>
        </div>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0E9384' }}>2,847</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Events logged</div>
          </div>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>100%</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Coverage</div>
          </div>
          <div style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0E9384' }}>0</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Gaps found</div>
          </div>
        </div>
        {/* Event log */}
        <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '8px' }}>Latest events</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>A. Okafor · login · MFA verified</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>2 min ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>M. Torres · file shared · encrypted</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>5 min ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>System · backup completed · verified</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>12 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — One-Click Evidence (compliance report with timeline) ──
export function EvidenceExportVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(14,147,132,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ClipboardIcon size={17} color="#0E9384" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Compliance Evidence Pack</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Auto-generated · Q2 2025</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>Ready</span>
        </div>
        {/* Body */}
        <div style={{ padding: '20px' }}>
          {/* Trust principles checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Security</span>
              <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>12 controls</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Availability</span>
              <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>8 controls</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Confidentiality</span>
              <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>9 controls</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Processing Integrity</span>
              <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>6 controls</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730' }}>Privacy</span>
              <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>10 controls</span>
            </div>
          </div>
          {/* Export button mock */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', borderRadius: '10px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', cursor: 'pointer' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff', letterSpacing: '.02em' }}>Export Evidence Pack</span>
          </div>
        </div>
      </div>
    </div>
  );
}
