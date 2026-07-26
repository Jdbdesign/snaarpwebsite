// High-fidelity mobile phone screen for Accounting Software Download page.
// Shows: financial summary card with key figures.

export function AccountingSoftwarePhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Financial Summary</span>
        <span className="text-[6.5px] font-semibold text-[#8B85A0]">H1 2026</span>
      </div>

      {/* Summary cards */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        <div className="rounded-xl bg-[#ECFDF9] border border-[#CDF5EE] p-3">
          <div className="text-[6.5px] text-[#0E9384] font-semibold mb-1">Total Revenue</div>
          <div className="text-[14px] font-bold text-[#0E9384]">£142,680</div>
          <div className="text-[6px] text-[#0E9384] mt-0.5">+18% vs H1 2025</div>
        </div>

        <div className="rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-3">
          <div className="text-[6.5px] text-[#DC2626] font-semibold mb-1">Total Expenses</div>
          <div className="text-[14px] font-bold text-[#DC2626]">£98,240</div>
          <div className="text-[6px] text-[#DC2626] mt-0.5">+8% vs H1 2025</div>
        </div>

        <div className="rounded-xl bg-[#F3EFFF] border border-[#E6DEFA] p-3">
          <div className="text-[6.5px] text-[#7C3AED] font-semibold mb-1">Net Profit</div>
          <div className="text-[14px] font-bold text-[#7C3AED]">£44,440</div>
          <div className="text-[6px] text-[#7C3AED] mt-0.5">31.1% margin</div>
        </div>

        {/* Breakdown */}
        <div className="rounded-lg bg-white border border-[#F0EEF6] p-2.5">
          <div className="text-[6.5px] font-bold text-[#5B5670] mb-1.5">Top Expense Categories</div>
          {[
            { name: 'Payroll', amount: '£62k', pct: '63%' },
            { name: 'Software', amount: '£18.4k', pct: '19%' },
            { name: 'Marketing', amount: '£12.8k', pct: '13%' },
          ].map((cat) => (
            <div key={cat.name} className="flex items-center justify-between text-[6px] py-0.5">
              <span className="text-[#8B85A0]">{cat.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[#1B1730] font-bold">{cat.amount}</span>
                <span className="text-[#8B85A0]">{cat.pct}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
