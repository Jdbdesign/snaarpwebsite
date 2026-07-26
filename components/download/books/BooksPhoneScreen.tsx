// High-fidelity mobile phone screen for Books Download page.
// Shows: invoice list with status badges and totals.

export function BooksPhoneScreen() {
  return (
    <div className="crm-phone-screen">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[8px] font-semibold text-[#5B5670]">9:41</span>
        <div className="flex items-center gap-1">
          <span className="block h-[6px] w-[14px] rounded-sm bg-[#1B1730]" />
          <span className="block h-[6px] w-[6px] rounded-full bg-[#1B1730]" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#F0EEF6]">
        <span className="text-[10px] font-bold text-[#1B1730]">Invoices</span>
        <div className="flex items-center gap-1">
          <span className="text-[7px] font-bold text-[#0E9384]">£18,420</span>
          <span className="text-[5.5px] text-[#8B85A0]">this month</span>
        </div>
      </div>

      {/* Invoice list */}
      <div className="px-3 pt-2.5 flex flex-col gap-1.5">
        {[
          { client: 'Acme Corporation', number: 'INV-0042', amount: '£5,200', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'Jun 12' },
          { client: 'Globex Ltd', number: 'INV-0041', amount: '£8,750', status: 'Overdue', statusColor: '#DC2626', statusBg: '#FEF2F2', date: 'Jun 5' },
          { client: 'Initech', number: 'INV-0040', amount: '£2,100', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'May 28' },
          { client: 'Wayne Enterprises', number: 'INV-0039', amount: '£12,400', status: 'Draft', statusColor: '#8B85A0', statusBg: '#F7F6FA', date: 'May 22' },
          { client: 'Stark Industries', number: 'INV-0038', amount: '£4,320', status: 'Paid', statusColor: '#0E9384', statusBg: '#ECFDF9', date: 'May 15' },
          { client: 'Umbrella Corp', number: 'INV-0037', amount: '£1,650', status: 'Overdue', statusColor: '#DC2626', statusBg: '#FEF2F2', date: 'May 8' },
        ].map((invoice) => (
          <div key={invoice.number} className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[7.5px] font-bold text-[#1B1730] truncate">{invoice.client}</span>
                <span className="text-[8px] font-bold text-[#1B1730]">{invoice.amount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-[#8B85A0]">{invoice.number} &middot; {invoice.date}</span>
                <span className="text-[5.5px] font-bold px-1.5 py-0.5 rounded" style={{ color: invoice.statusColor, background: invoice.statusBg }}>{invoice.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
