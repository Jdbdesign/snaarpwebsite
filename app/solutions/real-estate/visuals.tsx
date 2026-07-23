// Bespoke UI-snippet mockups for the Real Estate solution page,
// ported 1:1 from the standalone design bundle.

'use client';

// ── Snippet card 1 — CRM client record (Maya Rivera, Buyer) ──
export function SnippetCrmClientVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>CRM · Contact</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>MR</span>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Maya Rivera</div>
            <div style={{ fontSize: '8px', color: '#8B85A0' }}>Buyer · Active</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>2-bed · Riverside</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>£420k</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Kalender viewing slot ──
export function SnippetKalenderViewingVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>June</span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#B4356B', letterSpacing: '.03em' }}>Kalender</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '6px' }}>
        {[...Array(5)].map((_, i) => <span key={i} style={{ height: '16px', borderRadius: '5px', background: '#fff', border: '1px solid #F0EDF7' }} />)}
      </div>
      {/* Booked viewing slot */}
      <div style={{ marginTop: '11px', borderRadius: '12px', background: '#fff', border: '1px solid #F7D3DD', padding: '10px 12px', boxShadow: '0 14px 26px -14px rgba(225,29,116,.35)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: '#FEF0F4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#B4356B', letterSpacing: '.04em' }}>SAT</span>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#B4356B', lineHeight: '1' }}>14</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Viewing · 12 Riverside</div>
          <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '2px' }}>11:00 – 11:30 AM</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
    </div>
  );
}

// ── Snippet card 3 — eSignature field with "Signed ✓" badge ──
export function SnippetEsignatureVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>eSignature</span>
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        {/* Signature line area */}
        <div style={{ height: '4px', width: '70%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '8px' }} />
        <div style={{ height: '4px', width: '50%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '14px' }} />
        {/* Handwriting SVG path */}
        <div style={{ position: 'relative', height: '32px', borderBottom: '1.5px dashed #E4DFF2' }}>
          <svg width="100%" height="32" viewBox="0 0 160 32" fill="none" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path d="M8 24c4-8 10-16 18-14s6 14 14 12 10-14 18-12 4 14 12 12 12-16 20-14 4 14 12 12 10-14 18-12 6 12 14 12" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
          </svg>
        </div>
        <div style={{ fontSize: '8px', color: '#A79FBE', marginTop: '6px' }}>Maya Rivera · Buyer</div>
      </div>
    </div>
  );
}

// ── Step 01 — CRM new contact with property interest + budget ──
export function StepCrmContactVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#fff' }}>MR</span>
        </div>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Maya Rivera</div>
          <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>New contact · Buyer</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#8B85A0' }}>Interest</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>2-bed · Riverside</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#8B85A0' }}>Budget</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>£400k – £450k</span>
        </div>
      </div>
    </div>
  );
}

// ── Step 02 — Kalender booking widget (Fri/Sat/Sun + time slots) ──
export function StepKalenderBookingVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#B4356B', textTransform: 'uppercase' }}>Kalender</span>
        <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#8B85A0' }}>Book viewing</span>
      </div>
      {/* Day picker */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
        <div style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <div style={{ fontSize: '7px', fontWeight: 700, color: '#A79FBE' }}>FRI</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#1B1730' }}>13</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: '8px', background: '#FEF0F4', border: '1.5px solid #F7B9CC', boxShadow: '0 8px 16px -8px rgba(225,29,116,.4)' }}>
          <div style={{ fontSize: '7px', fontWeight: 700, color: '#B4356B' }}>SAT</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#B4356B' }}>14</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', padding: '6px 0', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <div style={{ fontSize: '7px', fontWeight: 700, color: '#A79FBE' }}>SUN</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#1B1730' }}>15</div>
        </div>
      </div>
      {/* Time slots */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '5px' }}>
        <span style={{ textAlign: 'center', padding: '6px 0', borderRadius: '7px', background: '#FBFAFE', border: '1px solid #F0EDF7', fontSize: '8.5px', fontWeight: 600, color: '#8B85A0' }}>10:00</span>
        <span style={{ textAlign: 'center', padding: '6px 0', borderRadius: '7px', background: '#fff', border: '1.5px solid #E11D74', fontSize: '8.5px', fontWeight: 700, color: '#B4356B', boxShadow: '0 8px 14px -8px rgba(225,29,116,.4)' }}>11:00</span>
        <span style={{ textAlign: 'center', padding: '6px 0', borderRadius: '7px', background: '#FBFAFE', border: '1px solid #F0EDF7', fontSize: '8.5px', fontWeight: 600, color: '#8B85A0' }}>14:30</span>
      </div>
    </div>
  );
}

// ── Step 03 — eSignature offer letter with signature + status badge ──
export function StepEsignatureOfferVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#B45309', textTransform: 'uppercase' }}>eSignature</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 7px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Status · Signed</span>
      </div>
      {/* Document lines */}
      <div style={{ flex: 1, borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6', padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730' }}>Offer Letter — 12 Riverside</div>
        <div style={{ height: '3px', width: '80%', borderRadius: '2px', background: '#EEEAF8' }} />
        <div style={{ height: '3px', width: '60%', borderRadius: '2px', background: '#EEEAF8' }} />
        <div style={{ height: '3px', width: '70%', borderRadius: '2px', background: '#EEEAF8' }} />
        {/* Signature */}
        <div style={{ marginTop: 'auto', borderTop: '1.5px dashed #E4DFF2', paddingTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <svg width="60" height="16" viewBox="0 0 60 16" fill="none">
            <path d="M4 12c2-4 5-8 9-7s3 7 7 6 5-7 9-6 2 7 6 6 6-8 10-7 2 7 6 6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
          </svg>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — CRM pipeline board (3 columns: Viewing/Offer/Closed) ──
export function PipelineBoardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Pipeline</span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#7C3AED', letterSpacing: '.03em' }}>CRM</span>
        </div>
        {/* 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          {/* Viewing column */}
          <div style={{ borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '8px' }}>Viewing</div>
            <div style={{ borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6', padding: '8px', marginBottom: '6px' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>12 Riverside</div>
              <div style={{ fontSize: '7px', color: '#8B85A0', marginTop: '2px' }}>Maya R. · £420k</div>
            </div>
            <div style={{ borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6', padding: '8px' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>7 Park Lane</div>
              <div style={{ fontSize: '7px', color: '#8B85A0', marginTop: '2px' }}>J. Chen · £380k</div>
            </div>
          </div>
          {/* Offer column */}
          <div style={{ borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#B45309', textTransform: 'uppercase', marginBottom: '8px' }}>Offer</div>
            <div style={{ borderRadius: '9px', background: '#fff', border: '1px solid #FBEBC6', padding: '8px', boxShadow: '0 8px 16px -10px rgba(180,83,9,.2)' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>4 Queen St</div>
              <div style={{ fontSize: '7px', color: '#8B85A0', marginTop: '2px' }}>S. Obi · £510k</div>
            </div>
          </div>
          {/* Closed column */}
          <div style={{ borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#0E9384', textTransform: 'uppercase', marginBottom: '8px' }}>Closed</div>
            <div style={{ borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE', padding: '8px' }}>
              <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>21 Mill Rd</div>
              <div style={{ fontSize: '7px', color: '#0E9384', marginTop: '2px' }}>A. Patel · £395k ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Document with signature + signed badge + status timeline ──
export function DocumentSignedVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(180,83,9,.10),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          {/* Document with signature */}
          <div style={{ flex: 1.2, borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Tenancy Agreement</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 7px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '7.5px', fontWeight: 700, color: '#0E9384' }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Signed
              </span>
            </div>
            {/* Doc lines */}
            <div style={{ height: '3.5px', width: '90%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '5px' }} />
            <div style={{ height: '3.5px', width: '70%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '5px' }} />
            <div style={{ height: '3.5px', width: '80%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '12px' }} />
            {/* Signature field */}
            <div style={{ borderTop: '1.5px dashed #E4DFF2', paddingTop: '8px' }}>
              <svg width="80" height="18" viewBox="0 0 80 18" fill="none">
                <path d="M4 14c3-5 7-10 12-9s4 9 9 8 7-9 12-8 3 9 8 8 8-10 13-9 3 9 8 8" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
              </svg>
              <div style={{ fontSize: '7.5px', color: '#A79FBE', marginTop: '3px' }}>Maya Rivera · Buyer</div>
            </div>
          </div>
          {/* Status timeline */}
          <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' }}>Timeline</div>
            {[
              { label: 'Sent', time: 'Mon 10:15', done: true },
              { label: 'Viewed', time: 'Mon 14:22', done: true },
              { label: 'Signed', time: 'Tue 09:03', done: true },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: item.done ? '#ECFDF9' : '#FBFAFE', border: item.done ? '1px solid #CDF5EE' : '1px solid #F0EDF7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.done && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>{item.label}</div>
                  <div style={{ fontSize: '7px', color: '#8B85A0' }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
