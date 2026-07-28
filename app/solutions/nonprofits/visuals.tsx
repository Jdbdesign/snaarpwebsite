// Bespoke UI-snippet mockups for the Nonprofits solution page,
// ported 1:1 from the standalone design bundle.

'use client';

// -- Snippet card 1 -- CRM donor record (Eleanor Mason, Monthly donor) --
export function SnippetDonorCrmVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Donor - CRM</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#fff' }}>EM</span>
          </span>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', lineHeight: '1.1' }}>Eleanor Mason</div>
            <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '2px' }}>Monthly donor - 3 yrs</div>
          </div>
        </div>
        <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>$240/yr</span>
        </div>
      </div>
    </div>
  );
}

// -- Snippet card 2 -- Document grant application progress --
export function SnippetGrantDocVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Grant - Document</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          Draft ready
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', marginBottom: '8px' }}>Community Impact Grant</div>
        <div style={{ height: '6px', borderRadius: '3px', background: '#F0EEF6', overflow: 'hidden', marginBottom: '6px' }}>
          <div style={{ height: '100%', width: '72%', borderRadius: '3px', background: '#7C3AED' }} />
        </div>
        <div style={{ fontSize: '8px', color: '#8B85A0' }}>72% complete - 3 sections remaining</div>
      </div>
    </div>
  );
}

// -- Snippet card 3 -- ELearn volunteer onboarding progress --
export function SnippetElearnVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Training - ELearn</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730', marginBottom: '4px' }}>Volunteer Onboarding</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginBottom: '8px' }}>12 enrolled - 8 completed</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[...Array(12)].map((_, i) => (
            <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i < 8 ? '#0E9384' : '#F0EEF6' }} />
          ))}
        </div>
        <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>67% completion rate</div>
      </div>
    </div>
  );
}

// -- Step 01 -- Track donors (CRM mini) --
export function StepTrackDonorsVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Donor record</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>CRM</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#fff' }}>EM</span>
        </span>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Eleanor Mason</div>
          <div style={{ fontSize: '7px', color: '#8B85A0' }}>$20/mo - 3 years</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#fff' }}>JK</span>
        </span>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>James Kim</div>
          <div style={{ fontSize: '7px', color: '#8B85A0' }}>One-time - $500</div>
        </div>
      </div>
    </div>
  );
}

// -- Step 02 -- Write the grant (Document editor) --
export function StepWriteGrantVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>Document</span>
        <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#8B85A0' }}>Grant application</span>
      </div>
      <div style={{ flex: 1, borderRadius: '9px', background: '#fff', border: '1px solid #EFEDF6', padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', marginBottom: '6px' }}>Community Impact Grant 2026</div>
        <div style={{ height: '3px', width: '90%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '4px' }} />
        <div style={{ height: '3px', width: '70%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '4px' }} />
        <div style={{ height: '3px', width: '80%', borderRadius: '2px', background: '#EEEAF8', marginBottom: '8px' }} />
        <div style={{ marginTop: 'auto', height: '5px', borderRadius: '3px', background: '#F0EEF6', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '72%', borderRadius: '3px', background: '#7C3AED' }} />
        </div>
      </div>
    </div>
  );
}

// -- Step 03 -- Keep the books ready (Books invoice/summary) --
export function StepBooksVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#D97706', textTransform: 'uppercase' }}>Books</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 7px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Audit-ready</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#8B85A0' }}>Income</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>$48,200</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ fontSize: '8px', fontWeight: 600, color: '#8B85A0' }}>Expenses</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#E11D48' }}>$31,800</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px', borderRadius: '8px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Net</span>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED' }}>$16,400</span>
        </div>
      </div>
    </div>
  );
}

// -- Feature row 1 -- CRM donor record with giving history --
export function DonorTrackingVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Donor Profile</span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#7C3AED' }}>CRM</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #F0EEF6' }}>
          <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#fff' }}>EM</span>
          </span>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Eleanor Mason</div>
            <div style={{ fontSize: '9px', color: '#8B85A0' }}>Monthly donor since 2021</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
            <div style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '4px' }}>Total Given</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>$2,880</div>
          </div>
          <div style={{ flex: 1, borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '10px' }}>
            <div style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase', marginBottom: '4px' }}>Last Gift</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0E9384' }}>$20</div>
            <div style={{ fontSize: '7px', color: '#8B85A0' }}>Apr 1, 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -- Feature row 2 -- ELearn volunteer training dashboard --
export function VolunteerTrainingVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Volunteer Onboarding</span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#7C3AED' }}>ELearn</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
          <div style={{ flex: 1, borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0E9384' }}>8</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#0E9384' }}>Completed</div>
          </div>
          <div style={{ flex: 1, borderRadius: '10px', background: '#FEF6E7', border: '1px solid #FBEBC6', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#D97706' }}>4</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#D97706' }}>In Progress</div>
          </div>
          <div style={{ flex: 1, borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', padding: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#7C3AED' }}>12</div>
            <div style={{ fontSize: '7px', fontWeight: 600, color: '#7C3AED' }}>Enrolled</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {['Safeguarding Basics', 'Event Safety', 'Data Handling'].map((course, i) => (
            <div key={course} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
              <span style={{ fontSize: '8px', fontWeight: 600, color: '#1B1730', flex: 1 }}>{course}</span>
              <div style={{ width: '50px', height: '4px', borderRadius: '2px', background: '#F0EEF6', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '2px', background: i === 0 ? '#0E9384' : i === 1 ? '#D97706' : '#7C3AED', width: i === 0 ? '100%' : i === 1 ? '60%' : '30%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
