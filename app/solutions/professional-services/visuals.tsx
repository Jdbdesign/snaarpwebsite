// Bespoke UI-snippet mockups for the Professional Services solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.

'use client';

function PersonInitial({ letter, size = 32, bg = 'linear-gradient(135deg,#C4B5FD,#8B5CF6)' }: { letter: string; size?: number; bg?: string }) {
  return (
    <span style={{ width: `${size}px`, height: `${size}px`, borderRadius: size > 24 ? '10px' : '8px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontSize: `${Math.round(size * 0.34)}px`, fontWeight: 800, color: '#fff' }}>{letter}</span>
    </span>
  );
}

// ── Snippet card 1 — CRM client record card ──
export function SnippetCrmRecordVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.1em', color: '#A79FBE', textTransform: 'uppercase' }}>Client · CRM</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Active</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PersonInitial letter="N" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Northwind Studio</div>
            <div style={{ fontSize: '8.5px', color: '#8B85A0' }}>Brand refresh · Q3</div>
          </div>
        </div>
        <div style={{ marginTop: '12px', paddingTop: '11px', borderTop: '1px dashed #E4DFF2', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '8px', color: '#8B85A0', fontWeight: 600 }}>Project value</span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1B1730', letterSpacing: '-.02em' }}>£12,500</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Invoice card with PAID stamp ──
export function SnippetInvoiceVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px', boxShadow: '0 14px 26px -16px rgba(37,22,84,.3)', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.1em', color: '#A79FBE', textTransform: 'uppercase' }}>Invoice</span>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#5B5670' }}>#2087</span>
        </div>
        <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '9px' }}>Northwind Studio</div>
        <div style={{ height: '5px', width: '60%', borderRadius: '3px', background: '#EEEAF8', marginTop: '8px' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '12px' }}>
          <span style={{ fontSize: '8px', color: '#8B85A0', fontWeight: 600 }}>Amount</span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1B1730', letterSpacing: '-.02em' }}>£12,500</span>
        </div>
        {/* PAID stamp */}
        <div style={{ position: 'absolute', top: '9px', right: '11px', transform: 'rotate(-11deg)', padding: '3px 10px', border: '2px solid #0E9384', borderRadius: '7px', background: 'rgba(236,253,249,.85)' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '.08em', color: '#0E9384' }}>PAID</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Document with two live cursors (You + Client) ──
export function SnippetDocCursorsVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '16px 15px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>Proposal.doc</span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Document</span>
      </div>
      <div style={{ height: '6px', width: '52%', borderRadius: '3px', background: '#DDD6EC' }} />
      <div style={{ height: '5px', width: '100%', borderRadius: '3px', background: '#EEEAF8', marginTop: '11px' }} />
      {/* Your cursor (violet) */}
      <div style={{ position: 'relative', marginTop: '7px' }}>
        <div style={{ height: '5px', width: '72%', borderRadius: '3px', background: '#EEEAF8' }} />
        <span className="sc-blink-cursor" style={{ position: 'absolute', top: '-3px', left: '72%', width: '2px', height: '12px', background: '#7C3AED' }} />
        <span style={{ position: 'absolute', top: '-15px', left: 'calc(72% + 3px)', fontSize: '7px', fontWeight: 700, color: '#fff', background: '#7C3AED', padding: '1px 5px', borderRadius: '5px 5px 5px 0', whiteSpace: 'nowrap' }}>You</span>
      </div>
      <div style={{ height: '5px', width: '84%', borderRadius: '3px', background: '#EEEAF8', marginTop: '7px' }} />
      {/* Client cursor (amber) */}
      <div style={{ position: 'relative', marginTop: '7px' }}>
        <div style={{ height: '5px', width: '44%', borderRadius: '3px', background: '#EEEAF8' }} />
        <span className="sc-blink-cursor" style={{ position: 'absolute', top: '-3px', left: '44%', width: '2px', height: '12px', background: '#F59E0B', animationDelay: '.5s' }} />
        <span style={{ position: 'absolute', top: '-15px', left: 'calc(44% + 3px)', fontSize: '7px', fontWeight: 700, color: '#fff', background: '#F59E0B', padding: '1px 5px', borderRadius: '5px 5px 5px 0', whiteSpace: 'nowrap' }}>Northwind</span>
      </div>
    </div>
  );
}

// ── Step 01 — Bring on a client (CRM new client form) ──
export function StepBringOnVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>New client</span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>CRM</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <PersonInitial letter="N" size={26} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Northwind Studio</div>
          <div style={{ fontSize: '8px', color: '#8B85A0' }}>hello@northwind.co</div>
        </div>
      </div>
      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '8.5px', color: '#8B85A0', fontWeight: 600 }}>Project</span>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#5B5670' }}>Brand refresh</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: '9px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '8.5px', color: '#5B21B6', fontWeight: 700 }}>Deal value</span>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#5B21B6' }}>£12,500</span>
        </div>
      </div>
    </>
  );
}

// ── Step 02 — Do the work, together (Document + external client comment) ──
export function StepDoWorkVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Proposal.doc</span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Document</span>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ height: '5px', width: '84%', borderRadius: '3px', background: '#EEEAF8' }} />
        <div style={{ position: 'relative', marginTop: '7px' }}>
          <div style={{ height: '5px', width: '62%', borderRadius: '3px', background: '#EEEAF8' }} />
          <span className="sc-blink-cursor" style={{ position: 'absolute', top: '-3px', left: '62%', width: '2px', height: '12px', background: '#7C3AED' }} />
          <span style={{ position: 'absolute', top: '-14px', left: 'calc(62% + 3px)', fontSize: '6.5px', fontWeight: 700, color: '#fff', background: '#7C3AED', padding: '1px 4px', borderRadius: '4px 4px 4px 0', whiteSpace: 'nowrap' }}>You</span>
        </div>
      </div>
      {/* External client comment */}
      <div style={{ marginTop: '14px', display: 'flex', alignItems: 'flex-start', gap: '7px', padding: '8px 9px', borderRadius: '10px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}>
        <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#FBBF24,#F59E0B)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#8A5A00' }}>Northwind</span>
            <span style={{ fontSize: '6.5px', fontWeight: 800, letterSpacing: '.03em', color: '#B4790C', background: '#FDF0D0', border: '1px solid #F5DFA6', padding: '0 5px', borderRadius: '999px' }}>CLIENT · NO ACCOUNT</span>
          </div>
          <div style={{ fontSize: '8px', color: '#9A6B12', lineHeight: '1.35', marginTop: '2px' }}>Love this direction — one note on page 2.</div>
        </div>
      </div>
    </>
  );
}

// ── Step 03 — Get paid (CRM -> Books invoice, Paid) ──
export function StepGetPaidVisual() {
  return (
    <>
      {/* CRM record */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
        <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#fff' }}>N</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#5B21B6' }}>Northwind · work complete</div>
        </div>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.04em' }}>CRM</span>
      </div>
      {/* Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
      {/* Generated invoice */}
      <div style={{ borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 12px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Invoice #2087</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Paid
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
          <span style={{ fontSize: '8px', color: '#8B85A0' }}>Client details pulled from CRM</span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B1730' }}>£12,500</span>
        </div>
      </div>
    </>
  );
}

// ── Feature row 1 — CRM client record with project history ──
export function ClientRecordVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <PersonInitial letter="N" size={40} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1B1730' }}>Northwind Studio</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Client since Jan 2025 · Brand refresh</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>Active</span>
        </div>
        <div style={{ padding: '18px 20px 20px' }}>
          <div style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '11px' }}>Project history</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Discovery workshop</div><div style={{ fontSize: '9.5px', color: '#8B85A0' }}>Invoice #2061 · paid</div></div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#0E9384' }}>£2,000</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Brand refresh</div><div style={{ fontSize: '9.5px', color: '#8B85A0' }}>Invoice #2087 · paid</div></div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#0E9384' }}>£12,500</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#fff', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 700, color: '#5B21B6' }}>Website build</div><div style={{ fontSize: '9.5px', color: '#8B6FD1' }}>Proposal sent</div></div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#7C3AED' }}>£18,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Client portal (Kalender booking + Document comment) ──
export function ClientPortalVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(251,123,162,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Client portal</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#FEF0F4', border: '1px solid #F7D3DD', fontSize: '9.5px', fontWeight: 700, color: '#B4356B' }}>No account needed</span>
        </div>
        <div style={{ padding: '12px 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {/* Kalender booking link */}
          <div style={{ borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Book time</span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#B4356B', letterSpacing: '.03em' }}>Kalender</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#fff', border: '1px solid #F0EDF7' }}>
                <span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Tue · 11:00</span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #E4DFF2' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#FEF0F4', border: '1.5px solid #F7B9CC', boxShadow: '0 10px 20px -12px rgba(225,29,116,.4)' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#B4356B' }}>Thu · 3:00</span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#E11D74', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '9px', background: '#fff', border: '1px solid #F0EDF7' }}>
                <span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>Fri · 9:30</span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #E4DFF2' }} />
              </div>
            </div>
          </div>
          {/* Commented Document */}
          <div style={{ borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Proposal.doc</span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Document</span>
            </div>
            <div style={{ height: '5px', width: '90%', borderRadius: '3px', background: '#EEEAF8' }} />
            <div style={{ height: '5px', width: '70%', borderRadius: '3px', background: '#EEEAF8', marginTop: '6px' }} />
            <div style={{ marginTop: '11px', display: 'flex', alignItems: 'flex-start', gap: '6px', padding: '7px 8px', borderRadius: '9px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'linear-gradient(135deg,#FBBF24,#F59E0B)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '7px', fontWeight: 700, color: '#8A5A00' }}>Northwind</div>
                <div style={{ fontSize: '7.5px', color: '#9A6B12', lineHeight: '1.3', marginTop: '1px' }}>Approved 👍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
