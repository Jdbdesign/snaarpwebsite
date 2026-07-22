// Bespoke UI-snippet mockups for the Sales Pipeline & Outreach solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.
// These are specific to this page's content, unlike the section shells in
// components/solutions/*, which are reusable across future Solution pages.

function CheckIcon({ stroke, size = 12 }: { stroke: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}

// ── Snippet card 1 — pipeline (kanban card mid-drag) ──
export function SnippetPipelineVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '16px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: '10px', height: '100%' }}>
        <div style={{ flex: 1, borderRadius: '11px', background: '#fff', border: '1px dashed #E4DFF2', padding: '9px 8px' }}>
          <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Contacted</div>
        </div>
        <div style={{ flex: 1, borderRadius: '11px', background: '#F3EFFF', border: '1px dashed #D9CEF7', padding: '9px 8px' }}>
          <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.08em', color: '#8B6FD1', textTransform: 'uppercase' }}>Negotiating</div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: '44px', left: '50%', transform: 'translateX(-52%) rotate(-4deg)', width: '128px', borderRadius: '12px', background: '#fff', border: '1px solid #ECE7F7', padding: '11px 12px', boxShadow: '0 18px 30px -12px rgba(124,58,237,.42)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', width: '52px', borderRadius: '3px', background: '#E4DFF2' }} />
            <div style={{ height: '5px', width: '34px', borderRadius: '3px', background: '#EEEAF8', marginTop: '4px' }} />
          </div>
        </div>
        <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>£24,000</span>
          <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
          </span>
        </div>
      </div>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="#1B1730" strokeWidth="1.4" style={{ position: 'absolute', top: '104px', left: 'calc(50% + 30px)', filter: 'drop-shadow(0 3px 5px rgba(0,0,0,.25))' }}>
        <path d="M18 11.5V9a1.5 1.5 0 0 0-3 0V8a1.5 1.5 0 0 0-3 0v-.5a1.5 1.5 0 0 0-3 0V6a1.5 1.5 0 0 0-3 0v7l-1.6-1.7a1.6 1.6 0 0 0-2.3 2.2l3.4 4a5 5 0 0 0 4 2h2.5a5 5 0 0 0 5-5z"></path>
      </svg>
    </div>
  );
}

// ── Snippet card 2 — outreach (chat bubble) ──
export function SnippetOutreachVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '16px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#14B8A6)', flexShrink: 0 }} />
        <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '4px 14px 14px 14px', padding: '10px 12px', boxShadow: '0 10px 22px -14px rgba(37,22,84,.3)' }}>
          <p style={{ margin: 0, fontSize: '11.5px', lineHeight: 1.5, color: '#3C3654' }}>Hey — following up on our chat, does Thursday work?</p>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '14px', right: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 11px', borderRadius: '999px', background: '#fff', border: '1px solid #CDF5EE', boxShadow: '0 10px 20px -12px rgba(14,147,132,.4)' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6' }} />
        <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>Sent automatically</span>
      </div>
    </div>
  );
}

// ── Snippet card 3 — signed (bar chart + Signed badge) ──
export function SnippetSignedVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '16px', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '9px' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100%' }}>
        <span style={{ flex: 1, height: '38%', borderRadius: '6px 6px 3px 3px', background: '#E4DFF2', transformOrigin: 'bottom' }} />
        <span style={{ flex: 1, height: '56%', borderRadius: '6px 6px 3px 3px', background: '#D3C5F5', transformOrigin: 'bottom' }} />
        <span style={{ flex: 1, height: '72%', borderRadius: '6px 6px 3px 3px', background: '#B79DF0', transformOrigin: 'bottom' }} />
        <span style={{ flex: 1, height: '92%', borderRadius: '6px 6px 3px 3px', background: 'linear-gradient(180deg,#7C3AED,#6D28D9)', transformOrigin: 'bottom', boxShadow: '0 12px 22px -10px rgba(124,58,237,.6)' }} />
      </div>
      <span style={{ position: 'absolute', top: '14px', right: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <CheckIcon stroke="#0E9384" />
        <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#0E9384', letterSpacing: '.02em' }}>Signed</span>
      </span>
    </div>
  );
}

// ── Step 01 — Find (new prospects list) ──
export function StepFindVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>New prospects</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED' }} />+3 new
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 9px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', width: '64px', borderRadius: '3px', background: '#E4DFF2' }} />
            <div style={{ height: '5px', width: '40px', borderRadius: '3px', background: '#EEEAF8', marginTop: '4px' }} />
          </div>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>98% fit</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 9px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#14B8A6)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', width: '52px', borderRadius: '3px', background: '#E4DFF2' }} />
            <div style={{ height: '5px', width: '34px', borderRadius: '3px', background: '#EEEAF8', marginTop: '4px' }} />
          </div>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>94% fit</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 9px', borderRadius: '10px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EDE7FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', width: '58px', borderRadius: '3px', background: '#DDD0F5' }} />
          </div>
        </div>
      </div>
    </>
  );
}

// ── Step 02 — Engage (outreach sequence timeline) ──
export function StepEngageVisual() {
  return (
    <div style={{ padding: '0 1px' }}>
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', marginBottom: '14px' }}>Outreach sequence</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#EDEBF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path></svg>
          </span>
          <div style={{ flex: 1 }}><div style={{ fontSize: '10.5px', fontWeight: 600, color: '#5B5670' }}>Sent</div></div>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#8B85A0' }}>Mon</span>
        </div>
        <div style={{ height: '14px', width: '1px', background: '#E4DFF2', marginLeft: '12px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </span>
          <div style={{ flex: 1 }}><div style={{ fontSize: '10.5px', fontWeight: 600, color: '#5B5670' }}>Opened</div></div>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#B45309' }}>Tue</span>
        </div>
        <div style={{ height: '14px', width: '1px', background: '#CDF5EE', marginLeft: '12px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10l4 4v3"></path><path d="m14 19 3 3 5-5"></path></svg>
          </span>
          <div style={{ flex: 1 }}><div style={{ fontSize: '10.5px', fontWeight: 700, color: '#0E9384' }}>Replied</div></div>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>Wed</span>
        </div>
      </div>
    </div>
  );
}

// ── Step 03 — Close (pipeline columns + signed deal card) ──
export function StepCloseVisual() {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', height: '100%' }}>
        <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px dashed #E4DFF2', padding: '9px 8px' }}>
          <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' }}>Negotiating</div>
        </div>
        <div style={{ flex: 1, borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', padding: '9px 8px' }}>
          <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '.06em', color: '#0E9384', textTransform: 'uppercase' }}>Won</div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '130px', borderRadius: '12px', background: '#fff', border: '1px solid #CDF5EE', padding: '11px 12px', boxShadow: '0 18px 30px -14px rgba(14,147,132,.45)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>£24,000</span>
          <span style={{ width: '18px', height: '18px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
          </span>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#F3EFFF' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13 8.5 3.5 2 2l1.5 6.5L13 18"></path></svg>
          <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED' }}>Signed</span>
        </div>
      </div>
    </>
  );
}

// ── Feature row 1 — Pipeline board mockup ──
export function PipelineBoardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12), 0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Pipeline</span>
          <span style={{ display: 'inline-flex', gap: '5px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#F3EFFF' }} />
            <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#F5F3FF' }} />
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>Lead <span style={{ color: '#C7C2D6' }}>3</span></div>
            <div style={{ borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
              <div style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#E4DFF2' }} />
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#5B5670' }}>£8,400</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)' }} />
              </div>
            </div>
            <div style={{ borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
              <div style={{ height: '6px', width: '55%', borderRadius: '3px', background: '#E4DFF2' }} />
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#5B5670' }}>£3,200</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#FBBF24,#F59E0B)' }} />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.08em', color: '#8B6FD1', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>Negotiating <span style={{ color: '#C7B8ED' }}>2</span></div>
            <div style={{ borderRadius: '11px', background: '#F3EFFF', border: '1px solid #E1D6F8', padding: '10px' }}>
              <div style={{ height: '6px', width: '64%', borderRadius: '3px', background: '#D3C5F5' }} />
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#5B21B6' }}>£24,000</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#5EEAD4,#14B8A6)' }} />
              </div>
            </div>
            <div style={{ height: '44px', borderRadius: '11px', border: '1px dashed #D9CEF7', background: 'rgba(243,239,255,.5)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.08em', color: '#0E9384', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>Won <span style={{ color: '#8FD9CE' }}>1</span></div>
            <div style={{ borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', padding: '10px' }}>
              <div style={{ height: '6px', width: '60%', borderRadius: '3px', background: '#B7ECDF' }} />
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>£17,500</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckIcon stroke="#fff" size={9} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '96px', left: '34%', width: '120px', borderRadius: '12px', background: '#fff', border: '1px solid #ECE7F7', padding: '11px 12px', boxShadow: '0 22px 36px -14px rgba(124,58,237,.45)', transform: 'rotate(-4deg)' }}>
          <div style={{ height: '6px', width: '66px', borderRadius: '3px', background: '#E4DFF2' }} />
          <div style={{ marginTop: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>£12,000</span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Signature request mockup ──
export function SignatureRequestVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12), 0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13 8.5 3.5 2 2l1.5 6.5L13 18"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Signature request</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Acme Corp · Master Services Agreement</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />Signed
          </span>
        </div>
        <div style={{ padding: '22px 22px 24px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ width: '74px', height: '96px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #EFEDF6', padding: '11px 9px', flexShrink: 0 }}>
              <div style={{ height: '4px', width: '80%', borderRadius: '2px', background: '#E4DFF2' }} />
              <div style={{ height: '4px', width: '65%', borderRadius: '2px', background: '#EEEAF8', marginTop: '5px' }} />
              <div style={{ height: '4px', width: '72%', borderRadius: '2px', background: '#EEEAF8', marginTop: '5px' }} />
              <div style={{ marginTop: '14px', height: '14px', width: '46px', borderRadius: '3px', background: '#EDE7FA', borderBottom: '1.5px solid #C4B5FD' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#0E9384" size={11} /></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730' }}>Sent to signer</div></div>
                <span style={{ fontSize: '9.5px', color: '#8B85A0', fontWeight: 600 }}>09:12</span>
              </div>
              <div style={{ height: '12px', width: '2px', background: '#CDF5EE', marginLeft: '10px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#0E9384" size={11} /></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730' }}>Viewed</div></div>
                <span style={{ fontSize: '9.5px', color: '#8B85A0', fontWeight: 600 }}>10:47</span>
              </div>
              <div style={{ height: '12px', width: '2px', background: '#CDF5EE', marginLeft: '10px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)' }}><CheckIcon stroke="#fff" size={11} /></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: '11.5px', fontWeight: 700, color: '#0E9384' }}>Signed &amp; returned</div></div>
                <span style={{ fontSize: '9.5px', color: '#0E9384', fontWeight: 700 }}>11:03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
