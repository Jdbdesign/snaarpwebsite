// High-fidelity web app mockup for Books Download page.
// Shows: dashboard with recent invoices list, total revenue figure,
// a mini chart, and a "New Invoice" button.

export function BooksWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/books/invoices</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Invoices</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>June 2026</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          New Invoice
        </span>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
        <div style={{ padding: '10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
          <div style={{ fontSize: '6.5px', color: '#8B85A0', marginBottom: '2px' }}>Revenue (Jun)</div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>£18,420</div>
          <div style={{ fontSize: '6px', color: '#0E9384', fontWeight: 600, marginTop: '2px' }}>+12% vs May</div>
        </div>
        <div style={{ padding: '10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
          <div style={{ fontSize: '6.5px', color: '#8B85A0', marginBottom: '2px' }}>Outstanding</div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#DC2626' }}>£10,400</div>
          <div style={{ fontSize: '6px', color: '#DC2626', fontWeight: 600, marginTop: '2px' }}>2 overdue</div>
        </div>
        <div style={{ padding: '10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
          <div style={{ fontSize: '6.5px', color: '#8B85A0', marginBottom: '2px' }}>Invoices Sent</div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>14</div>
          <div style={{ fontSize: '6px', color: '#8B85A0', fontWeight: 600, marginTop: '2px' }}>This month</div>
        </div>
        <div style={{ padding: '10px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
          <div style={{ fontSize: '6.5px', color: '#8B85A0', marginBottom: '2px' }}>Avg. Pay Time</div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>7 days</div>
          <div style={{ fontSize: '6px', color: '#0E9384', fontWeight: 600, marginTop: '2px' }}>-2 days vs avg</div>
        </div>
      </div>

      {/* Mini chart */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #F0EEF6' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '40px' }}>
          {[35, 48, 62, 40, 75, 58, 82, 90, 68, 78, 85, 92].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: i === 11 ? '#7C3AED' : '#E6DEFA' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>Jan</span>
          <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>Mar</span>
          <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>May</span>
          <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>Jul</span>
          <span style={{ fontSize: '5.5px', color: '#A79FBE' }}>Sep</span>
          <span style={{ fontSize: '5.5px', color: '#7C3AED', fontWeight: 700 }}>Dec</span>
        </div>
      </div>

      {/* Invoice table */}
      <div style={{ padding: '10px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.8fr', gap: '8px', padding: '6px 0', borderBottom: '1px solid #F0EEF6' }}>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Client</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Invoice</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Amount</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Status</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0', textTransform: 'uppercase' as const }}>Date</span>
        </div>
        {[
          { client: 'Acme Corporation', invoice: 'INV-0042', amount: '£5,200', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'Jun 12' },
          { client: 'Globex Ltd', invoice: 'INV-0041', amount: '£8,750', status: 'Overdue', statusColor: '#DC2626', statusBg: '#FEF2F2', date: 'Jun 5' },
          { client: 'Initech', invoice: 'INV-0040', amount: '£2,100', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'May 28' },
          { client: 'Wayne Enterprises', invoice: 'INV-0039', amount: '£12,400', status: 'Draft', statusColor: '#8B85A0', statusBg: '#F7F6FA', date: 'May 22' },
          { client: 'Stark Industries', invoice: 'INV-0038', amount: '£4,320', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'May 15' },
        ].map((row) => (
          <div key={row.invoice} style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.8fr', gap: '8px', padding: '7px 0', borderBottom: '1px solid #F7F6FA', alignItems: 'center' }}>
            <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#1B1730' }}>{row.client}</span>
            <span style={{ fontSize: '7px', color: '#5B5670' }}>{row.invoice}</span>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#1B1730' }}>{row.amount}</span>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: row.statusBg, fontSize: '6.5px', fontWeight: 700, color: row.statusColor, width: 'fit-content' }}>{row.status}</span>
            <span style={{ fontSize: '6.5px', color: '#8B85A0' }}>{row.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
