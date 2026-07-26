// High-fidelity web app mockup for Doc Sign Download page.
// Shows: approval workflow with stages, approver avatars with status checkmarks,
// comments, and a document preview.

import { AVATARS } from '../avatarPaths';

export function DocSignWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/doc-sign/request/2847</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Expense Policy Update</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FDE68A', fontSize: '8px', fontWeight: 600, color: '#D97706' }}>In Review</span>
        </div>
        <span style={{ fontSize: '7px', fontWeight: 600, color: '#8B85A0' }}>Created Jun 10, 2026</span>
      </div>

      {/* Workflow stages */}
      <div style={{ padding: '14px 16px', borderBottom: '1px solid #F0EEF6' }}>
        <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '10px', display: 'block' }}>Approval Workflow</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          {/* Stage 1: Draft - done */}
          <div style={{ flex: 1, textAlign: 'center' as const }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0E9384', margin: '0 auto 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Draft</span>
          </div>
          <div style={{ flex: 0.5, height: '2px', background: '#0E9384' }} />
          {/* Stage 2: Review - active */}
          <div style={{ flex: 1, textAlign: 'center' as const }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', margin: '0 auto 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#7C3AED' }}>Review</span>
          </div>
          <div style={{ flex: 0.5, height: '2px', background: '#F0EEF6' }} />
          {/* Stage 3: Approved - pending */}
          <div style={{ flex: 1, textAlign: 'center' as const }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F7F6FA', border: '2px solid #F0EEF6', margin: '0 auto 4px' }} />
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#8B85A0' }}>Approved</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', minHeight: '220px' }}>
        {/* Approver list */}
        <div style={{ flex: 1, padding: '14px 16px' }}>
          <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '8px', display: 'block' }}>Approvers</span>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
            {[
              { name: 'Amara Chen', role: 'Finance Lead', status: 'Approved', avatar: AVATARS.amaraChen, statusColor: '#0E9384', statusBg: '#ECFDF9' },
              { name: 'Jacob Smith', role: 'Operations', status: 'Approved', avatar: AVATARS.jacob, statusColor: '#0E9384', statusBg: '#ECFDF9' },
              { name: 'Sofia Reyes', role: 'Legal', status: 'Pending', avatar: AVATARS.sofiaReyes, statusColor: '#D97706', statusBg: '#FEF6E7' },
              { name: 'Arlo Davis', role: 'CEO', status: 'Waiting', avatar: AVATARS.arlo, statusColor: '#8B85A0', statusBg: '#F7F6FA' },
            ].map((approver) => (
              <div key={approver.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={approver.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730' }}>{approver.name}</div>
                  <div style={{ fontSize: '6px', color: '#8B85A0' }}>{approver.role}</div>
                </div>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: approver.statusBg, fontSize: '6.5px', fontWeight: 700, color: approver.statusColor }}>{approver.status}</span>
              </div>
            ))}
          </div>

          {/* Comment */}
          <div style={{ marginTop: '12px', padding: '8px 10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={AVATARS.amaraChen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#1B1730' }}>Amara Chen</span>
              <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>2 hours ago</span>
            </div>
            <div style={{ fontSize: '7px', color: '#5B5670' }}>Looks good - approved. Please update section 3.2 with the new mileage rate before final sign-off.</div>
          </div>
        </div>

        {/* Document preview */}
        <div style={{ width: '150px', padding: '14px', borderLeft: '1px solid #F0EEF6', background: '#FBFAFE' }}>
          <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '8px', display: 'block' }}>Document Preview</span>
          <div style={{ background: '#fff', border: '1px solid #F0EEF6', borderRadius: '6px', padding: '10px' }}>
            <div style={{ fontSize: '7px', fontWeight: 700, color: '#1B1730', marginBottom: '4px' }}>expense-policy-v2.pdf</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
              <div style={{ width: '100%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
              <div style={{ width: '85%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
              <div style={{ width: '92%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
              <div style={{ width: '70%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
              <div style={{ width: '100%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
              <div style={{ width: '88%', height: '2.5px', borderRadius: '1px', background: '#F0EEF6' }} />
            </div>
            <div style={{ marginTop: '6px', fontSize: '5.5px', color: '#A79FBE' }}>12 pages · 842 KB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
