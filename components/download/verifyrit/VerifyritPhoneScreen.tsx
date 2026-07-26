// High-fidelity mobile phone screen for VerifyRit Download page.
// Shows: verification results card with email list status.

export function VerifyritPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">VerifyRit</span>
        <span className="text-[7px] font-bold text-[#0E9384]">96.5% complete</span>
      </div>

      {/* Summary card */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        <div className="rounded-xl bg-[#F3EFFF] border border-[#E6DEFA] p-3">
          <div className="text-[7px] font-bold text-[#7C3AED] uppercase tracking-wider mb-2">Batch Results</div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[8px] font-semibold text-[#5B5670]">marketing-list-q3.csv</span>
            <span className="text-[6px] text-[#8B85A0]">3,200 emails</span>
          </div>
          {/* Progress bar */}
          <div className="w-full h-[5px] rounded-full bg-[#E6DEFA] mb-2">
            <div className="h-full rounded-full bg-[#7C3AED]" style={{ width: '96.5%' }} />
          </div>
          {/* Stats row */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-[5px] h-[5px] rounded-full bg-[#0E9384]" />
              <span className="text-[6.5px] font-semibold text-[#0E9384]">76.6% Valid</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-[5px] h-[5px] rounded-full bg-[#DC2626]" />
              <span className="text-[6.5px] font-semibold text-[#DC2626]">12.4% Invalid</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-[5px] h-[5px] rounded-full bg-[#D97706]" />
              <span className="text-[6.5px] font-semibold text-[#D97706]">7.5% Risky</span>
            </div>
          </div>
        </div>

        {/* Individual results */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] font-bold text-[#5B5670] uppercase tracking-wider">Recent Results</span>
          </div>
          <div className="flex flex-col gap-1">
            {[
              { email: 'sarah.jones@acme.io', status: 'Valid', color: '#0E9384', bg: '#ECFDF9' },
              { email: 'info@globex-ltd.com', status: 'Valid', color: '#0E9384', bg: '#ECFDF9' },
              { email: 'noreply@defunct.xyz', status: 'Invalid', color: '#DC2626', bg: '#FEF2F2' },
              { email: 'j.smith@hotmail.com', status: 'Risky', color: '#D97706', bg: '#FEF6E7' },
              { email: 'marketing@startup.io', status: 'Valid', color: '#0E9384', bg: '#ECFDF9' },
            ].map((row) => (
              <div key={row.email} className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center justify-between">
                <span className="text-[7px] font-semibold text-[#1B1730]">{row.email}</span>
                <span className="text-[6px] font-bold px-1.5 py-0.5 rounded" style={{ color: row.color, background: row.bg }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
