// Bespoke UI-snippet mockups for the Financial Services solution page,
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

// ── Snippet card 1 — Lock vault entry with masked credential ──
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
        <div style={{ fontSize: '8px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase' }}>Client portfolio DB · admin</div>
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
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PersonIcon size={24} />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>M. Halvorsen</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Staff ID · Wealth</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — CRM client record with portfolio value ──
export function SnippetCrmClientVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Client · CRM</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#fff' }}>DA</span>
          </span>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', lineHeight: '1.1' }}>Devon Ashford</div>
            <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '2px' }}>Client · since 2021</div>
          </div>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Portfolio value</span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED' }}>£1.24M</span>
        </div>
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
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730', marginTop: '9px' }}>M. Halvorsen</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>Identity verified</div>
      </div>
    </div>
  );
}

// ── Step 02 — Track the relationship (CRM client + meeting history) ──
export function StepCrmTrackVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
        <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#fff' }}>DA</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', lineHeight: '1.1' }}>Devon Ashford</div>
          <div style={{ fontSize: '8px', color: '#8B85A0' }}>Client · CRM</div>
        </div>
        <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED' }}>£1.24M</span>
      </div>
      <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '7px' }}>Meeting history</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Portfolio review</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Apr 3</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Onboarding call</span>
          <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Jan 12</span>
        </div>
      </div>
    </>
  );
}

// ── Step 03 — Get it on record (eSignature disclosure timeline) ──
export function StepEsignatureVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Disclosure</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#D97706', letterSpacing: '.03em' }}>eSignature</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '4px' }}>
        {[
          { label: 'Sent to client', time: 'Mon 09:14', filled: false },
          { label: 'Viewed', time: 'Mon 14:02', filled: false },
          { label: 'Signed', time: 'Tue 08:47', filled: true },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: item.filled ? '#0E9384' : '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={item.filled ? '#fff' : '#0E9384'} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: item.filled ? '#0E9384' : '#1B1730' }}>{item.label}</div>
              <div style={{ fontSize: '7.5px', color: '#A79FBE' }}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </>
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
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>M. Halvorsen</div>
            <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '1px' }}>Wealth · verified</div>
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
            <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', textTransform: 'uppercase' }}>Client portfolio DB</div>
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

// ── Feature row 2 — CRM client record with meeting history + linked docs ──
export function ClientRecordVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(251,191,36,.12))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#fff' }}>DA</span>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Devon Ashford</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Client since 2021 · CRM</div>
          </div>
          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#A79FBE' }}>Portfolio</span>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>£1.24M</span>
          </span>
        </div>
        <div style={{ padding: '20px', display: 'flex', gap: '18px' }}>
          {/* Meeting history */}
          <div style={{ flex: 1.1 }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '12px' }}>Meeting history</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {[
                { label: 'Portfolio review', date: 'Apr 3 · 45 min' },
                { label: 'Rebalance call', date: 'Feb 20 · 30 min' },
                { label: 'Onboarding call', date: 'Jan 12 · 60 min' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  </span>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>{m.label}</div>
                    <div style={{ fontSize: '8px', color: '#A79FBE' }}>{m.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Linked documents */}
          <div style={{ flex: 0.9, borderLeft: '1px solid #F0EEF6', paddingLeft: '16px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '12px' }}>Linked docs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Advisory agmt', 'Risk profile', 'Disclosure'].map((doc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                  <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670', flex: 1 }}>{doc}</span>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
