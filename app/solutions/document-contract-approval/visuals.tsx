// Bespoke UI-snippet mockups for the Document & Contract Approval solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.

function CheckIcon({ stroke, size = 11 }: { stroke: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// ── Snippet card 1 — Approval stepper (Approved → Reviewing → Next) ──
export function SnippetApprovalStepperVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px' }}>
      {/* Step: Approved */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Sarah Chen — Approved</div></div>
      </div>
      {/* Step: Reviewing (active) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2.5px solid #7C3AED', background: '#fff', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '7px', height: '7px', borderRadius: '50%', background: '#7C3AED' }} />
        </span>
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 700, color: '#5B21B6' }}>Mark Taylor — Reviewing</div></div>
      </div>
      {/* Step: Next */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff' }} />
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#5B5670' }}>Legal Team — Next</div></div>
      </div>
    </div>
  );
}


// ── Snippet card 2 — Signature field with pen stroke ──
export function SnippetSignatureVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#FDF2F8)', border: '1px solid #F5E6F0', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 16px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#8B85A0', letterSpacing: '.04em', marginBottom: '8px' }}>SIGN HERE</div>
        <div style={{ position: 'relative', height: '36px', borderBottom: '1.5px solid #E4DFF2' }}>
          {/* Pen stroke SVG */}
          <svg width="100%" height="36" viewBox="0 0 160 36" fill="none" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path d="M12 28 C 30 8, 50 30, 70 18 S 110 4, 140 22" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.85" />
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
          <span style={{ fontSize: '8px', color: '#A79FBE' }}>J. Rodriguez</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <CheckIcon stroke="#0E9384" size={8} />
            <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#0E9384' }}>Signed</span>
          </span>
        </div>
      </div>
    </div>
  );
}


// ── Snippet card 3 — Status timeline (Sent → Viewed → Signed) ──
export function SnippetStatusTimelineVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '15px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Sent</div>
        </div>
        <span style={{ fontSize: '8px', color: '#A79FBE' }}>2m ago</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Viewed</div>
        </div>
        <span style={{ fontSize: '8px', color: '#A79FBE' }}>1m ago</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>Signed</div>
        </div>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Just now</span>
      </div>
    </div>
  );
}


// ── Step 01 — Review: PDF annotation toolbar ──
export function StepReviewVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Markup &amp; comments</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>PDF Reader</span>
      </div>
      <div style={{ borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          {/* Toolbar icons */}
          <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </span>
          <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
          </span>
          <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FDE8A8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>
          </span>
        </div>
        {/* Document lines with highlight */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ height: '5px', width: '90%', borderRadius: '3px', background: '#E4DFF2' }} />
          <div style={{ height: '5px', width: '75%', borderRadius: '3px', background: '#FEF3C7' }} />
          <div style={{ height: '5px', width: '82%', borderRadius: '3px', background: '#E4DFF2' }} />
        </div>
      </div>
    </>
  );
}


// ── Step 02 — Approve: Internal approval chain ──
export function StepApproveVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Approval chain</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Doc Sign</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" size={8} /></span>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#0E9384' }}>Finance — Approved</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2.5px solid #7C3AED', background: '#fff', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED' }} />
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#5B21B6' }}>Legal — Reviewing</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff' }} />
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#5B5670' }}>CEO — Pending</span>
        </div>
      </div>
    </>
  );
}


// ── Step 03 — Sign: Recipient list with status ──
export function StepSignVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Recipients</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#E11D73', letterSpacing: '.03em' }}>eSignature</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" size={8} /></span>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#0E9384', flex: 1 }}>alex@client.co</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#FDF2F8', border: '1px solid #FDDEED' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2.5px solid #E11D73', background: '#fff', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '5px', height: '5px', borderRadius: '50%', background: '#E11D73' }} />
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#9D174D', flex: 1 }}>jordan@partner.io</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#E11D73' }}>Pending</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff' }} />
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#5B5670', flex: 1 }}>sam@vendor.com</span>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#A79FBE' }}>Queued</span>
        </div>
      </div>
    </>
  );
}


// ── Feature row 1 — Approval stepper dashboard (Visibility) ──
export function ApprovalDashboardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Vendor Agreement v2</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED' }} />In Progress
          </span>
        </div>
        {/* Approval steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckIcon stroke="#fff" size={13} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Sarah Chen</div>
              <div style={{ fontSize: '9px', color: '#0E9384' }}>Finance · Approved 2h ago</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2.5px solid #7C3AED', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#7C3AED' }} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#5B21B6' }}>Mark Taylor</div>
              <div style={{ fontSize: '9px', color: '#7C3AED' }}>Legal · Reviewing now</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#5B5670' }}>James Wright</div>
              <div style={{ fontSize: '9px', color: '#8B85A0' }}>CEO · Waiting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── Feature row 2 — Signature request timeline (Handoff) ──
export function SignatureTimelineVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Client Agreement — Signing</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Internal approval → External signature</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />2 of 3 signed
          </span>
        </div>
        <div style={{ padding: '18px 22px 22px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckIcon stroke="#fff" size={13} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Internal sign-off</div>
              <div style={{ fontSize: '9.5px', color: '#0E9384' }}>Approved · Doc Sign</div>
            </div>
            <span style={{ fontSize: '9px', color: '#A79FBE' }}>1h ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CheckIcon stroke="#fff" size={13} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>alex@client.co</div>
              <div style={{ fontSize: '9.5px', color: '#0E9384' }}>Signed · eSignature</div>
            </div>
            <span style={{ fontSize: '9px', color: '#A79FBE' }}>32m ago</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2.5px solid #E11D73', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#E11D73' }} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9D174D' }}>jordan@partner.io</div>
              <div style={{ fontSize: '9.5px', color: '#E11D73' }}>Awaiting signature</div>
            </div>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#E11D73' }}>Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
}
