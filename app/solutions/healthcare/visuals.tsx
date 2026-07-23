// Bespoke UI-snippet mockups for the Healthcare solution page,
// ported 1:1 from the standalone design bundle.

'use client';

function PersonIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="rgba(255,255,255,.92)">
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
    </svg>
  );
}

// ── Snippet card 1 — Lock vault entry with masked password ──
export function SnippetVaultVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Vault · Lock</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '8px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase' }}>Records DB · admin</div>
        <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[...Array(6)].map((_, i) => <span key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B4AEC6' }} />)}
          </span>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
          </span>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Encrypted</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Staff ID badge with Verified check ──
export function SnippetBadgeVisual() {
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
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>Dr. A. Okafor</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Staff ID · Cardiology</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Kalender with booked appointment slot ──
export function SnippetKalenderVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>March</span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#B4356B', letterSpacing: '.03em' }}>Kalender</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '6px' }}>
        {[...Array(5)].map((_, i) => <span key={i} style={{ height: '16px', borderRadius: '5px', background: '#fff', border: '1px solid #F0EDF7' }} />)}
      </div>
      {/* Booked slot */}
      <div style={{ marginTop: '11px', borderRadius: '12px', background: '#fff', border: '1px solid #F7D3DD', padding: '10px 12px', boxShadow: '0 14px 26px -14px rgba(225,29,116,.35)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: '#FEF0F4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#B4356B', letterSpacing: '.04em' }}>THU</span>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#B4356B', lineHeight: '1' }}>18</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Follow-up · J. Reyes</div>
          <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '2px' }}>3:00 – 3:30 PM</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
    </div>
  );
}

// ── Step 01 — Verify (Digital ID Card badge) ──
export function StepVerifyVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '130px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 12px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', marginBottom: '10px' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.04em' }}>Digital ID Card</span>
        </div>
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PersonIcon size={22} />
        </div>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730', marginTop: '9px' }}>Dr. A. Okafor</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Identity verified</div>
      </div>
    </div>
  );
}

// ── Step 02 — Control access (Lock vault + access log) ──
export function StepControlAccessVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Records DB</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Lock</span>
      </div>
      {/* Masked credential */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[...Array(5)].map((_, i) => <span key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B4AEC6' }} />)}
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
      </div>
      {/* Access log */}
      <div style={{ marginTop: '10px' }}>
        <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '7px' }}>Access log</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Dr. Okafor · viewed</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>09:12</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>N. Patel · edited</span>
            <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>10:41</span>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Step 03 — Schedule & share (Kalender + Document permissions) ──
export function StepScheduleShareVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Kalender booking */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#B4356B', textTransform: 'uppercase' }}>Kalender</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ height: '11px', borderRadius: '4px', background: '#fff', border: '1px solid #F0EDF7' }} />
          <span style={{ height: '11px', borderRadius: '4px', background: '#FEF0F4', border: '1.5px solid #F7B9CC', display: 'flex', alignItems: 'center', padding: '0 5px' }}>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#B4356B' }}>Thu 3:00 ✓</span>
          </span>
          <span style={{ height: '11px', borderRadius: '4px', background: '#fff', border: '1px solid #F0EDF7' }} />
        </div>
      </div>
      {/* Permissioned Document */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>Document</span>
        <div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#EEEAF8', marginTop: '8px' }} />
        <div style={{ height: '4px', width: '60%', borderRadius: '2px', background: '#EEEAF8', marginTop: '5px' }} />
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 6px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#0E9384', flex: 1 }}>Care team · edit</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 6px', borderRadius: '6px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#8B85A0', flex: 1 }}>Reception · view</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — Digital ID Card → Lock vault unlocked ──
export function VerifiedAccessVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px' }}>
          {/* Digital ID Card badge */}
          <div style={{ flex: 1, borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '15px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em', marginBottom: '11px' }}>Digital ID Card</div>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PersonIcon size={24} />
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>Dr. A. Okafor</div>
            <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '1px' }}>Cardiology · verified</div>
          </div>
          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </span>
          </div>
          {/* Lock vault entry unlocked */}
          <div style={{ flex: 1, borderRadius: '14px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 16px 30px -18px rgba(124,58,237,.4)', padding: '15px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Lock</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>Unlocked</span>
            </div>
            <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase' }}>Records DB</div>
            <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#B4AEC6' }} />)}
              </span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>✓ logged</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Kalender booking widget ──
export function BookingWidgetVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(251,123,162,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#FEF0F4', border: '1px solid #F7D3DD', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Book an appointment</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Kalender · Dr. A. Okafor</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#FEF0F4', border: '1px solid #F7D3DD', fontSize: '10px', fontWeight: 700, color: '#B4356B' }}>This week</span>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '9px 0', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#A79FBE' }}>TUE</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B1730' }}>16</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '9px 0', borderRadius: '11px', background: '#FEF0F4', border: '1.5px solid #F7B9CC', boxShadow: '0 12px 22px -12px rgba(225,29,116,.4)' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#B4356B' }}>THU</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#B4356B' }}>18</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '9px 0', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#A79FBE' }}>FRI</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B1730' }}>19</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
            <span style={{ textAlign: 'center', padding: '9px 0', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', fontSize: '11px', fontWeight: 600, color: '#8B85A0' }}>9:30</span>
            <span style={{ textAlign: 'center', padding: '9px 0', borderRadius: '10px', background: '#fff', border: '1.5px solid #E11D74', fontSize: '11px', fontWeight: 700, color: '#B4356B', boxShadow: '0 10px 20px -12px rgba(225,29,116,.45)' }}>3:00</span>
            <span style={{ textAlign: 'center', padding: '9px 0', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', fontSize: '11px', fontWeight: 600, color: '#8B85A0' }}>4:15</span>
          </div>
          <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '12px', background: '#E11D74', boxShadow: '0 14px 26px -12px rgba(225,29,116,.5)' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Confirm Thu · 3:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
