// High-fidelity web app mockup for eSignature Download page.
// Shows: document with signature fields, signer list with status,
// signature pad area, and an audit trail timeline.

import { AVATARS } from '../avatarPaths';

export function EsignatureWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/esignature/document</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Service Agreement</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FDE68A', fontSize: '8px', fontWeight: 600, color: '#D97706' }}>1 of 2 signed</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
          Send Reminder
        </span>
      </div>

      {/* Main layout */}
      <div style={{ display: 'flex', minHeight: '300px' }}>
        {/* Document area */}
        <div style={{ flex: 1, padding: '14px', borderRight: '1px solid #F0EEF6' }}>
          {/* Simulated document */}
          <div style={{ background: '#fff', border: '1px solid #F0EEF6', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px -3px rgba(37,22,84,.06)' }}>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#1B1730', marginBottom: '4px' }}>Master Service Agreement</div>
              <div style={{ fontSize: '7px', color: '#8B85A0' }}>Between Acme Corporation and Snaarp Ltd.</div>
            </div>
            {/* Document lines */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '3px', marginBottom: '12px' }}>
              <div style={{ width: '100%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
              <div style={{ width: '92%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
              <div style={{ width: '95%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
              <div style={{ width: '88%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
              <div style={{ width: '100%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
              <div style={{ width: '78%', height: '3px', borderRadius: '2px', background: '#F0EEF6' }} />
            </div>

            {/* Signature fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {/* Signed field */}
              <div style={{ border: '1.5px solid #CDF5EE', borderRadius: '8px', padding: '10px', background: '#F0FDF9' }}>
                <div style={{ fontSize: '6px', fontWeight: 600, color: '#0E9384', marginBottom: '4px' }}>Sarah Johnson (Acme Corp)</div>
                <div style={{ fontFamily: 'cursive', fontSize: '12px', color: '#0E9384', fontWeight: 600 }}>Sarah Johnson</div>
                <div style={{ fontSize: '5.5px', color: '#8B85A0', marginTop: '4px' }}>Signed · June 12, 2026 at 3:42 PM</div>
              </div>
              {/* Pending field */}
              <div style={{ border: '2px dashed #7C3AED', borderRadius: '8px', padding: '10px', background: '#F3EFFF' }}>
                <div style={{ fontSize: '6px', fontWeight: 600, color: '#7C3AED', marginBottom: '4px' }}>Jacob Smith (Snaarp Ltd)</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Click to sign</span>
                </div>
                <div style={{ fontSize: '5.5px', color: '#8B85A0', marginTop: '4px' }}>Awaiting signature</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: signers + audit trail */}
        <div style={{ width: '160px', padding: '12px', background: '#FBFAFE' }}>
          <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '8px', display: 'block' }}>Signers</span>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={AVATARS.sofiaReyes} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div>
                <div style={{ fontSize: '7px', fontWeight: 700, color: '#1B1730' }}>Sarah Johnson</div>
                <div style={{ fontSize: '5.5px', color: '#0E9384', fontWeight: 600 }}>Signed ✓</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', borderRadius: '8px', background: '#fff', border: '1px solid #F0EEF6' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={AVATARS.jacob} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div>
                <div style={{ fontSize: '7px', fontWeight: 700, color: '#1B1730' }}>Jacob Smith</div>
                <div style={{ fontSize: '5.5px', color: '#D97706', fontWeight: 600 }}>Pending</div>
              </div>
            </div>
          </div>

          <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '8px', display: 'block' }}>Audit Trail</span>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', borderLeft: '2px solid #F0EEF6', paddingLeft: '8px' }}>
            {[
              { time: 'Jun 12, 3:42 PM', action: 'Sarah signed', color: '#0E9384' },
              { time: 'Jun 12, 2:15 PM', action: 'Doc viewed by Sarah', color: '#5B5670' },
              { time: 'Jun 12, 10:00 AM', action: 'Sent to signers', color: '#7C3AED' },
              { time: 'Jun 11, 4:30 PM', action: 'Document created', color: '#5B5670' },
            ].map((event) => (
              <div key={event.time + event.action}>
                <div style={{ fontSize: '5.5px', color: '#A79FBE' }}>{event.time}</div>
                <div style={{ fontSize: '6.5px', fontWeight: 600, color: event.color }}>{event.action}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
