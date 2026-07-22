// Bespoke UI-snippet mockups for the Customer Onboarding solution page,
// ported 1:1 (markup, colors, shadows) from the standalone design bundle.
// These are specific to this page's content, unlike the section shells in
// components/solutions/*, which are reusable across future Solution pages.

function CheckIcon({ stroke, size = 12, strokeWidth = '2.6' }: { stroke: string; size?: number; strokeWidth?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}

// ── Snippet card 1 — welcome email preview ──
export function SnippetWelcomeEmailVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: '6px', width: '64px', borderRadius: '3px', background: '#E4DFF2' }} />
          <div style={{ height: '5px', width: '42px', borderRadius: '3px', background: '#EEEAF8', marginTop: '4px' }} />
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#0E9384' }} />
          <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#0E9384', letterSpacing: '.02em' }}>Sent</span>
        </span>
      </div>
      <div style={{ marginTop: '12px', borderRadius: '11px', background: '#fff', border: '1px solid #EFEDF6', padding: '11px 12px', boxShadow: '0 10px 22px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730', lineHeight: 1.35 }}>
          Welcome to <span style={{ color: '#7C3AED' }}>[Company]</span> — here&apos;s what happens next
        </div>
        <div style={{ height: '5px', width: '100%', borderRadius: '3px', background: '#EEEAF8', marginTop: '10px' }} />
        <div style={{ height: '5px', width: '82%', borderRadius: '3px', background: '#EEEAF8', marginTop: '6px' }} />
        <div style={{ height: '5px', width: '64%', borderRadius: '3px', background: '#EEEAF8', marginTop: '6px' }} />
      </div>
    </div>
  );
}

// ── Snippet card 2 — kickoff calendar with booked slot ──
export function SnippetKickoffCalendarVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>March</span>
        <span style={{ display: 'inline-flex', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E4DFF2' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CDF5EE' }} />
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '6px' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ height: '16px', borderRadius: '5px', background: '#fff', border: '1px solid #F0EDF7' }} />
        ))}
      </div>
      <div style={{ marginTop: '11px', borderRadius: '12px', background: '#fff', border: '1px solid #CDF5EE', padding: '10px 12px', boxShadow: '0 14px 26px -14px rgba(14,147,132,.4)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: '#ECFDF9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '7px', fontWeight: 800, color: '#0E9384', letterSpacing: '.04em' }}>TUE</span>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#0E9384', lineHeight: 1 }}>14</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Kickoff call</div>
          <div style={{ fontSize: '9px', color: '#8B85A0', marginTop: '2px' }}>10:00 – 10:30 AM</div>
        </div>
        <CheckIcon stroke="#0E9384" size={14} strokeWidth="3" />
      </div>
    </div>
  );
}

// ── Snippet card 3 — onboarding progress ring + checklist ──
export function SnippetProgressVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ position: 'relative', width: '66px', height: '66px', flexShrink: 0 }}>
        <svg width="66" height="66" viewBox="0 0 66 66" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="33" cy="33" r="28" fill="none" stroke="#EDE7FA" strokeWidth="8" />
          <circle cx="33" cy="33" r="28" fill="none" stroke="#7C3AED" strokeWidth="8" strokeLinecap="round" strokeDasharray="175.9" strokeDashoffset="52.8" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '16px', fontWeight: 800, color: '#1B1730', lineHeight: 1 }}>70%</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#A79FBE', letterSpacing: '.04em' }}>DONE</span>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckIcon stroke="#fff" size={9} strokeWidth="3.6" />
          </span>
          <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#E4DFF2' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckIcon stroke="#fff" size={9} strokeWidth="3.6" />
          </span>
          <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#E4DFF2' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #D9CEF7', background: '#fff' }} />
          <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#EEEAF8' }} />
        </div>
      </div>
    </div>
  );
}

// ── Step 01 — Welcome (deal closed in CRM → welcome sequence dispatched by Mail) ──
export function StepWelcomeVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CheckIcon stroke="#fff" size={11} strokeWidth="3.2" />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>Deal closed · Acme Corp</div>
        </div>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384', letterSpacing: '.04em' }}>CRM</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
      </div>
      <div style={{ borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 6-10 7L2 6"></path>
              </svg>
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#1B1730' }}>Welcome sequence</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Mail · auto</span>
        </div>
        <div style={{ height: '5px', width: '90%', borderRadius: '3px', background: '#EEEAF8', marginTop: '10px' }} />
        <div style={{ height: '5px', width: '68%', borderRadius: '3px', background: '#EEEAF8', marginTop: '6px' }} />
      </div>
    </>
  );
}

// ── Step 02 — Kick off (Kalender self-serve booking) ──
export function StepKickoffVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Pick a kickoff time</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384', letterSpacing: '.03em' }}>Kalender</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, color: '#5B5670' }}>Tue · 10:00 AM</span>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #E4DFF2' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: '10px', background: '#F3EFFF', border: '1.5px solid #C4B5FD', boxShadow: '0 10px 20px -12px rgba(124,58,237,.4)' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: '#5B21B6' }}>Tue · 2:00 PM</span>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckIcon stroke="#fff" size={8} strokeWidth="4" />
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 11px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, color: '#5B5670' }}>Wed · 11:30 AM</span>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid #E4DFF2' }} />
        </div>
      </div>
    </>
  );
}

// ── Step 03 — Track (shared onboarding plan checklist, CRM + Document) ──
export function StepTrackVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>Onboarding plan</span>
        <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>CRM · Document</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckIcon stroke="#fff" size={10} strokeWidth="3.4" />
          </span>
          <div style={{ flex: 1, fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Account created</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckIcon stroke="#fff" size={10} strokeWidth="3.4" />
          </span>
          <div style={{ flex: 1, fontSize: '10px', fontWeight: 600, color: '#9B95AC', textDecoration: 'line-through' }}>Kickoff call booked</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '9px', background: '#F3EFFF', border: '1px dashed #D9CEF7' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #C4B5FD', background: '#fff' }} />
          <div style={{ flex: 1, fontSize: '10px', fontWeight: 700, color: '#5B21B6' }}>Data imported</div>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#8B6FD1' }}>In progress</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #E4DFF2', background: '#fff' }} />
          <div style={{ flex: 1, fontSize: '10px', fontWeight: 600, color: '#5B5670' }}>Team invited</div>
        </div>
      </div>
    </>
  );
}

// ── Feature row 1 — automated onboarding sequence timeline ──
export function OnboardingSequenceVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12), 0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Onboarding sequence</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED' }} />Automated
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* welcome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 6-10 7L2 6"></path>
              </svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Welcome email</div>
              <div style={{ fontSize: '10.5px', color: '#8B85A0' }}>Sent the moment the deal closed</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
              <CheckIcon stroke="#0E9384" size={9} strokeWidth="3.4" />Sent
            </span>
          </div>
          <div style={{ height: '18px', width: '2px', background: '#CDF5EE', marginLeft: '16px' }} />
          {/* kickoff invite */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2.5"></rect>
                <path d="M16 2v4M8 2v4M3 10h18"></path>
              </svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Kickoff invite</div>
              <div style={{ fontSize: '10.5px', color: '#8B85A0' }}>Booking link, sent day one</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
              <CheckIcon stroke="#0E9384" size={9} strokeWidth="3.4" />Sent
            </span>
          </div>
          <div style={{ height: '18px', width: '2px', background: '#E4DFF2', marginLeft: '16px' }} />
          {/* day-3 follow-up */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 7v5l3 2"></path>
              </svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Day-3 follow-up</div>
              <div style={{ fontSize: '10.5px', color: '#8B85A0' }}>Queued automatically</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '9.5px', fontWeight: 700, color: '#7C3AED' }}>Scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — shared onboarding status card (CRM progress + Document link) ──
export function OnboardingStatusVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(20,184,166,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12), 0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)">
              <circle cx="12" cy="8.5" r="4"></circle>
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z"></path>
            </svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Acme Corp</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Onboarding · started 2 days ago</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>On track</span>
        </div>
        <div style={{ padding: '22px 22px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '9px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Onboarding progress</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#7C3AED' }}>70%</span>
          </div>
          <div style={{ height: '9px', borderRadius: '999px', background: '#EDE7FA', overflow: 'hidden' }}>
            <div style={{ width: '70%', height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
              <CheckIcon stroke="#0E9384" size={9} strokeWidth="3.4" />Welcome
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
              <CheckIcon stroke="#0E9384" size={9} strokeWidth="3.4" />Kickoff
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7', fontSize: '9.5px', fontWeight: 700, color: '#8B85A0' }}>Setup</span>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '11px', padding: '12px 13px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <path d="M14 2v6h6M9 13h6M9 17h4"></path>
              </svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>Onboarding plan.doc</div>
              <div style={{ fontSize: '10px', color: '#8B85A0' }}>Shared · 4 people have access</div>
            </div>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C0B8D4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
