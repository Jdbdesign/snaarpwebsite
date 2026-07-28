// Bespoke UI-snippet mockups for the GDPR & Data Privacy solution page,
// following the same inline-style pattern as healthcare/visuals.tsx.

'use client';

function PersonIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="rgba(255,255,255,.92)">
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
    </svg>
  );
}

// ── Snippet card 1 — Data Access Log (Lock vault-style) ──
export function SnippetAccessLogVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Data Access Log</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '11px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>R. Kapoor · viewed</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:14</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>N. Singh · exported</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>10:41</span>
          </div>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Encrypted</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — ID Card badge with Verified check (Data Controller) ──
export function SnippetIdCardVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '118px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 12px', boxShadow: '0 16px 30px -16px rgba(37,22,84,.34)', textAlign: 'center', position: 'relative' }}>
        {/* Verified check */}
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PersonIcon size={24} />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>Dr. R. Kapoor</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Data Controller</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — eSignature DPA with Signed badge ──
export function SnippetDpaVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>eSignature</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Data Processing Agreement</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '3px' }}>Between Snaarp Ltd. &amp; Client</div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
          </div>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>12 Jan 2025</span>
        </div>
      </div>
    </div>
  );
}

// ── Step 01 — Control access (Lock access log) ──
export function StepControlAccessVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Access Log</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Lock</span>
      </div>
      {/* Access entries */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>R. Kapoor · viewed Patient DB</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:14</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>N. Singh · exported Report</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>10:41</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Encrypted</span>
      </div>
    </>
  );
}

// ── Step 02 — Verify identity (ID Card badge) ──
export function StepVerifyIdentityVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '130px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 12px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', marginBottom: '10px' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.04em' }}>ID Card</span>
        </div>
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PersonIcon size={22} />
        </div>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730', marginTop: '9px' }}>R. Kapoor</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Identity verified</div>
      </div>
    </div>
  );
}

// ── Step 03 — Document and sign (split view: Document + eSignature) ──
export function StepDocumentSignVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Document side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#7C3AED', textTransform: 'uppercase' }}>Document</span>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', marginTop: '7px' }}>DPA v3.1</div>
        <div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#EEEAF8', marginTop: '8px' }} />
        <div style={{ height: '4px', width: '60%', borderRadius: '2px', background: '#EEEAF8', marginTop: '5px' }} />
        <div style={{ height: '4px', width: '70%', borderRadius: '2px', background: '#EEEAF8', marginTop: '5px' }} />
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 7px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#7C3AED' }}>v3.1 · latest</span>
        </div>
      </div>
      {/* eSignature side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>eSignature</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Sent · 10 Jan</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Viewed · 11 Jan</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Signed · 12 Jan</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — Access control (Lock vault with access log) ──
export function AccessControlVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Access Vault</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>Encrypted</span>
        </div>
        {/* Masked credential */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase' }}>Customer DB · admin</div>
            <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', gap: '3px' }}>
              {[...Array(6)].map((_, i) => <span key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B4AEC6' }} />)}
            </div>
          </div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
        </div>
        {/* Access log */}
        <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '8px' }}>Audit trail</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>R. Kapoor · viewed Customer DB</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>09:14</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>N. Singh · exported Analytics</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>10:41</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>L. Chen · rotated credentials</span>
            <span style={{ fontSize: '8px', color: '#A79FBE' }}>11:02</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Consent on record (eSignature DPA with timeline) ──
export function ConsentRecordVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(14,147,132,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Data Processing Agreement</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>eSignature · Snaarp Ltd.</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
        </div>
        {/* Body */}
        <div style={{ padding: '20px' }}>
          {/* Signature field */}
          <div style={{ padding: '14px', borderRadius: '12px', border: '1.5px dashed #CDF5EE', background: '#F9FFFE', marginBottom: '16px' }}>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: '6px' }}>Signed by</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0E9384', fontStyle: 'italic' }}>R. Kapoor</div>
            <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '3px' }}>Data Protection Officer · 12 Jan 2025</div>
          </div>
          {/* Timeline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', marginTop: '4px' }}>Sent</span>
              <span style={{ fontSize: '7px', color: '#A79FBE' }}>10 Jan</span>
            </div>
            <div style={{ flex: 0.6, height: '1.5px', background: '#CDF5EE' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', marginTop: '4px' }}>Viewed</span>
              <span style={{ fontSize: '7px', color: '#A79FBE' }}>11 Jan</span>
            </div>
            <div style={{ flex: 0.6, height: '1.5px', background: '#CDF5EE' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', marginTop: '4px' }}>Signed</span>
              <span style={{ fontSize: '7px', color: '#A79FBE' }}>12 Jan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
