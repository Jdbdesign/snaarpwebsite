// High-fidelity web app mockup for Accounting Software Download page.
// Shows: P&L statement with revenue/expenses/net figures, account categories,
// date range selector, and an export button.

export function AccountingSoftwareWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/accounting/reports</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Profit & Loss</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Jan 1 \u2013 Jun 30, 2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 10px', borderRadius: '7px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
            Change dates
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Export
          </span>
        </div>
      </div>

      {/* Summary boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '14px 16px', borderBottom: '1px solid #F0EEF6' }}>
        <div style={{ padding: '12px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <div style={{ fontSize: '6.5px', fontWeight: 600, color: '#0E9384', marginBottom: '2px' }}>Total Revenue</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#0E9384' }}>£142,680</div>
        </div>
        <div style={{ padding: '12px', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA' }}>
          <div style={{ fontSize: '6.5px', fontWeight: 600, color: '#DC2626', marginBottom: '2px' }}>Total Expenses</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#DC2626' }}>£98,240</div>
        </div>
        <div style={{ padding: '12px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <div style={{ fontSize: '6.5px', fontWeight: 600, color: '#7C3AED', marginBottom: '2px' }}>Net Profit</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>£44,440</div>
        </div>
      </div>

      {/* P&L detail */}
      <div style={{ padding: '12px 16px' }}>
        {/* Revenue section */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #CDF5EE' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384' }}>Revenue</span>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384' }}>£142,680</span>
          </div>
          {[
            { name: 'Subscription Revenue', amount: '£108,400' },
            { name: 'Professional Services', amount: '£24,280' },
            { name: 'One-time Licences', amount: '£10,000' },
          ].map((item) => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 8px' }}>
              <span style={{ fontSize: '7px', color: '#5B5670' }}>{item.name}</span>
              <span style={{ fontSize: '7px', fontWeight: 700, color: '#1B1730' }}>{item.amount}</span>
            </div>
          ))}
        </div>

        {/* Expenses section */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #FECACA' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#DC2626' }}>Expenses</span>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#DC2626' }}>£98,240</span>
          </div>
          {[
            { name: 'Payroll & Benefits', amount: '£62,000' },
            { name: 'Software & Infrastructure', amount: '£18,400' },
            { name: 'Marketing & Advertising', amount: '£12,840' },
            { name: 'Office & Admin', amount: '£5,000' },
          ].map((item) => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 8px' }}>
              <span style={{ fontSize: '7px', color: '#5B5670' }}>{item.name}</span>
              <span style={{ fontSize: '7px', fontWeight: 700, color: '#1B1730' }}>{item.amount}</span>
            </div>
          ))}
        </div>

        {/* Net line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderTop: '2px solid #E6DEFA' }}>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED' }}>Net Profit</span>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED' }}>£44,440</span>
        </div>
      </div>
    </div>
  );
}
