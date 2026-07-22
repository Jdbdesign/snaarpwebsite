// Bespoke UI-snippet mockups for the Team Onboarding & Training solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.

function CheckIcon({ stroke, size = 11 }: { stroke: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PersonIcon({ fill = 'rgba(255,255,255,.92)', size = 24 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
      <circle cx="12" cy="8.5" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
    </svg>
  );
}

// ── Snippet card 1 — verified digital ID badge ──
export function SnippetBadgeVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '118px', borderRadius: '14px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 18px 34px -16px rgba(37,22,84,.34)', overflow: 'hidden' }}>
        <div style={{ height: '26px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#fff', letterSpacing: '.1em' }}>SNAARP · STAFF</span>
        </div>
        <div style={{ padding: '12px 12px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PersonIcon size={24} />
          </span>
          <div style={{ height: '6px', width: '58px', borderRadius: '3px', background: '#E4DFF2', marginTop: '11px' }} />
          <div style={{ height: '5px', width: '38px', borderRadius: '3px', background: '#EEEAF8', marginTop: '5px' }} />
          <span style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <CheckIcon stroke="#0E9384" size={9} />
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — course card with progress bar ──
export function SnippetCourseVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative' }}>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '12px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Security Essentials</div>
            <div style={{ fontSize: '8.5px', color: '#8B85A0', marginTop: '2px' }}>Assigned · Engineering</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
          <div style={{ flex: 1, height: '7px', borderRadius: '999px', background: '#EDE7FA', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)' }} />
          </div>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED' }}>60%</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', borderRadius: '11px', background: 'rgba(255,255,255,.7)', border: '1px solid #EFEDF6', padding: '9px 11px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ height: '5px', width: '70px', borderRadius: '3px', background: '#E4DFF2' }} />
          <div style={{ height: '4px', width: '44px', borderRadius: '3px', background: '#EEEAF8', marginTop: '4px' }} />
        </div>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#A79FBE' }}>Up next</span>
      </div>
    </div>
  );
}

// ── Snippet card 3 — onboarding checklist ──
export function SnippetChecklistVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '15px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '11px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Identity provisioned</div></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#fff" /></span>
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Badge activated</div></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #C4B5FD', background: '#fff' }} />
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 700, color: '#5B21B6' }}>Training in progress</div></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff' }} />
        <div style={{ flex: 1 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#5B5670' }}>Team intro scheduled</div></div>
      </div>
    </div>
  );
}

// ── Step 01 — Provision (new identity card) ──
export function StepProvisionVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>New identity</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Directory</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PersonIcon size={16} /></span>
        <div style={{ flex: 1 }}>
          <div style={{ height: '6px', width: '66px', borderRadius: '3px', background: '#E4DFF2' }} />
          <div style={{ height: '5px', width: '44px', borderRadius: '3px', background: '#EEEAF8', marginTop: '5px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '11px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#0E9384" size={9} /></span>
          <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#5B5670' }}>Email &amp; SSO created</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#0E9384" size={9} /></span>
          <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#5B5670' }}>Access group · Engineering</div>
        </div>
      </div>
    </>
  );
}

// ── Step 02 — Verify (Digital ID Card activation) ──
export function StepVerifyVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '132px', borderRadius: '14px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 18px 34px -14px rgba(124,58,237,.4)', overflow: 'hidden' }}>
        <div style={{ height: '28px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 11px' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#fff', letterSpacing: '.1em' }}>SNAARP · STAFF</span>
          <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,.25)' }} />
        </div>
        <div style={{ padding: '13px 13px 15px', display: 'flex', alignItems: 'center', gap: '11px' }}>
          <span style={{ width: '40px', height: '40px', borderRadius: '11px', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <PersonIcon size={22} />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ height: '6px', width: '54px', borderRadius: '3px', background: '#E4DFF2' }} />
            <div style={{ height: '5px', width: '38px', borderRadius: '3px', background: '#EEEAF8', marginTop: '5px' }} />
            <span style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
              <CheckIcon stroke="#0E9384" size={8} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 03 — Train (course list with progress) ──
export function StepTrainVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Assigned courses</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>ELearn</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Security Essentials</span>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>Done</span>
          </div>
          <div style={{ height: '5px', borderRadius: '999px', background: '#EDE7FA', marginTop: '7px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: '#14B8A6' }} />
          </div>
        </div>
        <div style={{ padding: '8px 10px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#5B21B6' }}>Code of Conduct</span>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>60%</span>
          </div>
          <div style={{ height: '5px', borderRadius: '999px', background: '#EDE7FA', marginTop: '7px', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)' }} />
          </div>
        </div>
      </div>
    </>
  );
}

// ── Feature row 1 — Access provisioning dashboard ──
export function AccessDashboardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Onboarding · Alex Reyes</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10px', fontWeight: 700, color: '#0E9384' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />Ready
          </span>
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          {/* ID badge mini */}
          <div style={{ width: '112px', flexShrink: 0, borderRadius: '14px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 16px 30px -16px rgba(124,58,237,.4)', overflow: 'hidden' }}>
            <div style={{ height: '24px', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
              <span style={{ fontSize: '6.5px', fontWeight: 800, color: '#fff', letterSpacing: '.1em' }}>SNAARP · STAFF</span>
            </div>
            <div style={{ padding: '11px 11px 13px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><PersonIcon size={21} /></span>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730', marginTop: '8px' }}>Alex Reyes</div>
              <div style={{ fontSize: '7.5px', color: '#8B85A0', marginTop: '2px' }}>Engineering</div>
              <span style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
                <CheckIcon stroke="#0E9384" size={8} />
                <span style={{ fontSize: '7px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Verified</span>
              </span>
            </div>
          </div>
          {/* Access rows */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Access granted</div><div style={{ fontSize: '8px', color: '#8B85A0' }}>SSO · VPN · Repos</div></div>
              <CheckIcon stroke="#0E9384" size={12} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Badge active</div><div style={{ fontSize: '8px', color: '#8B85A0' }}>Building + systems</div></div>
              <CheckIcon stroke="#0E9384" size={12} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '11px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#fff', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              </span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '9.5px', fontWeight: 700, color: '#5B21B6' }}>Training queued</div><div style={{ fontSize: '8px', color: '#8B6FD1' }}>3 courses</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Training dashboard (course list with progress) ──
export function TrainingDashboardVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Training · Engineering</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Assigned by role · 3 courses</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>Auto-assigned</span>
        </div>
        <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon stroke="#0E9384" size={15} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Security Essentials</div>
              <div style={{ height: '6px', borderRadius: '999px', background: '#EDE7FA', marginTop: '6px', overflow: 'hidden' }}><div style={{ width: '100%', height: '100%', background: '#14B8A6' }} /></div>
            </div>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#0E9384' }}>100%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Code of Conduct</div>
              <div style={{ height: '6px', borderRadius: '999px', background: '#EDE7FA', marginTop: '6px', overflow: 'hidden' }}><div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)' }} /></div>
            </div>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED' }}>60%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#5B5670' }}>Dev Tooling 101</div>
              <div style={{ height: '6px', borderRadius: '999px', background: '#EDE7FA', marginTop: '6px', overflow: 'hidden' }}><div style={{ width: '12%', height: '100%', background: '#D3C5F5' }} /></div>
            </div>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#A79FBE' }}>Not started</span>
          </div>
        </div>
      </div>
    </div>
  );
}
