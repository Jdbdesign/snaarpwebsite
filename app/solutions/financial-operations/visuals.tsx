// Bespoke UI-snippet mockups for the Financial Operations solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.

function CheckIcon({ stroke, size = 11 }: { stroke: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// ── Snippet card 1 — Invoice card with PAID stamp ──
export function SnippetInvoiceVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px 14px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.1em', color: '#A79FBE', textTransform: 'uppercase' }}>Invoice</span>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#5B5670' }}>#1042</span>
        </div>
        <div style={{ height: '5px', width: '70%', borderRadius: '3px', background: '#E4DFF2', marginTop: '11px' }} />
        <div style={{ height: '5px', width: '52%', borderRadius: '3px', background: '#EEEAF8', marginTop: '6px' }} />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '13px' }}>
          <span style={{ fontSize: '8px', color: '#8B85A0', fontWeight: 600 }}>Amount due</span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1B1730', letterSpacing: '-.02em' }}>£4,200</span>
        </div>
        {/* Paid stamp */}
        <div style={{ position: 'absolute', top: '8px', right: '10px', transform: 'rotate(-11deg)', padding: '3px 10px', border: '2px solid #0E9384', borderRadius: '7px', background: 'rgba(236,253,249,.85)' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '.08em', color: '#0E9384' }}>PAID</span>
        </div>
      </div>
    </div>
  );
}


// ── Snippet card 2 — Ledger entry with running balance ──
export function SnippetLedgerVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Ledger</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>Balance ↑</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '5px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Invoice #1042</span>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>+£4,200</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '5px', background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#E11D73" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </span>
            <span style={{ fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>Hosting</span>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#B4356B' }}>−£90</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#5B21B6' }}>Running balance</span>
        <span style={{ fontSize: '12px', fontWeight: 800, color: '#5B21B6', letterSpacing: '-.01em' }}>£18,540</span>
      </div>
    </div>
  );
}


// ── Snippet card 3 — Payroll row (Paid/Pending) ──
export function SnippetPayrollVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Payroll · March</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#fff', border: '1px solid #EFEDF6' }}>
        <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Sarah K.</div>
          <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Net £3,180</div>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>
          <CheckIcon stroke="#0E9384" size={7} />Paid
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
        <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#14B8A6)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#5B21B6' }}>Tom R.</div>
          <div style={{ fontSize: '7.5px', color: '#8B6FD1' }}>Net £2,940</div>
        </div>
        <span style={{ padding: '3px 8px', borderRadius: '999px', background: '#fff', border: '1px solid #D9CEF7', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Pending</span>
      </div>
    </div>
  );
}


// ── Step 01 — Invoice: CRM deal won -> Books auto-generates invoice ──
export function StepInvoiceVisual() {
  return (
    <>
      {/* Closed CRM deal */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" size={11} /></span>
        <div style={{ flex: 1 }}><div style={{ fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>Deal won · £4,200</div></div>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.04em' }}>CRM</span>
      </div>
      {/* Arrow */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </div>
      {/* Generated invoice */}
      <div style={{ borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg>
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Invoice #1042</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Books · auto</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
          <span style={{ fontSize: '8px', color: '#8B85A0' }}>Line items pulled from deal</span>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#1B1730' }}>£4,200</span>
        </div>
      </div>
    </>
  );
}


// ── Step 02 — Reconcile: payment received, books auto-update ──
export function StepReconcileVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Books · ledger</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />Payment received
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#8B85A0' }}>Feb balance</span>
          <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#5B5670' }}>£14,340</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            </span>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>Invoice #1042 paid</span>
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#0E9384' }}>+£4,200</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#5B21B6' }}>New balance</span>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#5B21B6' }}>£18,540</span>
        </div>
      </div>
    </>
  );
}


// ── Step 03 — Pay & report: payroll summary + P&L chart ──
export function StepPayReportVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Payroll summary */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' }}>Payroll run</span>
        <span style={{ fontSize: '15px', fontWeight: 800, color: '#1B1730', letterSpacing: '-.02em', marginTop: '6px' }}>£24,180</span>
        <span style={{ fontSize: '7.5px', color: '#8B85A0', marginTop: '1px' }}>8 people · taxes filed</span>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <CheckIcon stroke="#0E9384" size={7} />
          <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#0E9384' }}>Complete</span>
        </div>
      </div>
      {/* P&L chart */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' }}>P&amp;L</span>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '5px', marginTop: '8px' }}>
          <span style={{ flex: 1, height: '44%', borderRadius: '4px 4px 2px 2px', background: '#E4DFF2' }} />
          <span style={{ flex: 1, height: '60%', borderRadius: '4px 4px 2px 2px', background: '#D3C5F5' }} />
          <span style={{ flex: 1, height: '52%', borderRadius: '4px 4px 2px 2px', background: '#B79DF0' }} />
          <span style={{ flex: 1, height: '78%', borderRadius: '4px 4px 2px 2px', background: 'linear-gradient(180deg,#7C3AED,#6D28D9)' }} />
        </div>
        <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#0E9384', marginTop: '6px' }}>▲ 12% MoM</span>
      </div>
    </div>
  );
}


// ── Feature row 1 — CRM deal card -> generated invoice (Automatic) ──
export function DealToInvoiceVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px' }}>
          {/* CRM deal card */}
          <div style={{ flex: 1, borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>CRM</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>
                <CheckIcon stroke="#0E9384" size={8} />Won
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Acme Corp</div>
                <div style={{ fontSize: '9px', color: '#8B85A0' }}>Annual plan</div>
              </div>
            </div>
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed #E4DFF2', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '8.5px', color: '#8B85A0' }}>Platform licence</span><span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>£3,600</span></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '8.5px', color: '#8B85A0' }}>Onboarding</span><span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>£600</span></div>
            </div>
          </div>
          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </span>
          </div>
          {/* Generated invoice */}
          <div style={{ flex: 1, borderRadius: '14px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 16px 30px -18px rgba(124,58,237,.4)', padding: '15px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Books</span>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#5B5670' }}>#1042</span>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' }}>Invoice · Acme Corp</div>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '8.5px', color: '#8B85A0' }}>Platform licence</span><span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>£3,600</span></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '8.5px', color: '#8B85A0' }}>Onboarding</span><span style={{ fontSize: '9px', fontWeight: 600, color: '#5B5670' }}>£600</span></div>
            </div>
            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #F0EDF7', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Total</span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1B1730', letterSpacing: '-.02em' }}>£4,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── Feature row 2 — General ledger with income/expense + running balance (Always current) ──
export function LedgerDashboardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Books · General ledger</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Updated just now · auto-reconciled</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />In balance
          </span>
        </div>
        <div style={{ padding: '14px 20px 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 0', borderBottom: '1px solid #F4F2F9' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Invoice #1042 · Acme Corp</div><div style={{ fontSize: '10px', color: '#8B85A0' }}>Income · Mar 4</div></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0E9384' }}>+£4,200</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 0', borderBottom: '1px solid #F4F2F9' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Cloud hosting</div><div style={{ fontSize: '10px', color: '#8B85A0' }}>Expense · Mar 3</div></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#B4356B' }}>−£90</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 0' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Invoice #1041 · Lumen Ltd</div><div style={{ fontSize: '10px', color: '#8B85A0' }}>Income · Mar 1</div></div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0E9384' }}>+£2,750</span>
            </div>
          </div>
          <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 15px', borderRadius: '13px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#5B21B6' }}>Running balance</span>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#5B21B6', letterSpacing: '-.02em' }}>£18,540</span>
          </div>
        </div>
      </div>
    </div>
  );
}
