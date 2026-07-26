// High-fidelity web app mockup for VerifyRit Download page.
// Shows: bulk email list upload, verification results with percentages,
// progress bar, and export button.

export function VerifyritWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/verifyrit/dashboard</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Email Verification</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 600, color: '#0E9384' }}>2,847 verified</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            Upload List
          </span>
        </div>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
        {[
          { label: 'Total emails', value: '3,200', color: '#1B1730' },
          { label: 'Valid', value: '2,451', color: '#0E9384' },
          { label: 'Invalid', value: '396', color: '#DC2626' },
          { label: 'Risky', value: '241', color: '#D97706' },
          { label: 'Processing', value: '112', color: '#7C3AED' },
        ].map((stat) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: stat.color }}>{stat.value}</span>
            <span style={{ fontSize: '7px', fontWeight: 500, color: '#8B85A0' }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Verification progress</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#7C3AED' }}>96.5%</span>
        </div>
        <div style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#F3EFFF' }}>
          <div style={{ width: '96.5%', height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #7C3AED, #A78BFA)' }} />
        </div>
      </div>

      {/* Results table */}
      <div style={{ padding: '12px 16px' }}>
        {/* Table header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '8px', padding: '6px 0', borderBottom: '1px solid #F0EEF6' }}>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Email</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Status</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Reason</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Score</span>
        </div>

        {/* Table rows */}
        {[
          { email: 'sarah.jones@acmecorp.io', status: 'Valid', reason: 'Deliverable', score: '98', statusColor: '#0E9384', statusBg: '#ECFDF9' },
          { email: 'info@globex-ltd.com', status: 'Valid', reason: 'Deliverable', score: '95', statusColor: '#0E9384', statusBg: '#ECFDF9' },
          { email: 'noreply@defunct-domain.xyz', status: 'Invalid', reason: 'Domain expired', score: '0', statusColor: '#DC2626', statusBg: '#FEF2F2' },
          { email: 'j.smith@hotmail.com', status: 'Risky', reason: 'Catch-all domain', score: '62', statusColor: '#D97706', statusBg: '#FEF6E7' },
          { email: 'marketing@startupco.io', status: 'Valid', reason: 'Deliverable', score: '91', statusColor: '#0E9384', statusBg: '#ECFDF9' },
          { email: 'bounce@old-server.net', status: 'Invalid', reason: 'Mailbox full', score: '12', statusColor: '#DC2626', statusBg: '#FEF2F2' },
          { email: 'ceo@enterprise.com', status: 'Risky', reason: 'Role-based', score: '55', statusColor: '#D97706', statusBg: '#FEF6E7' },
        ].map((row) => (
          <div key={row.email} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '8px', padding: '7px 0', borderBottom: '1px solid #F7F6FA', alignItems: 'center' }}>
            <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#1B1730' }}>{row.email}</span>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: row.statusBg, fontSize: '6.5px', fontWeight: 700, color: row.statusColor, width: 'fit-content' }}>{row.status}</span>
            <span style={{ fontSize: '6.5px', fontWeight: 500, color: '#5B5670' }}>{row.reason}</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: row.statusColor }}>{row.score}</span>
          </div>
        ))}

        {/* Export button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 14px', borderRadius: '8px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Export Clean List
          </span>
        </div>
      </div>
    </div>
  );
}
