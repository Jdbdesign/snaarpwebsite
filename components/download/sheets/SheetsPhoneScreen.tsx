// High-fidelity mobile phone screen for Sheets Download page.
// Shows: a compact spreadsheet view with header row, data rows, and a formula bar.

export function SheetsPhoneScreen() {
  return (
    <div className="sheets-phone-screen">
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
        <span className="text-[9px] font-bold text-[#1B1730]">Q3 Pipeline.sheet</span>
        <span className="flex items-center gap-1 rounded-full bg-[#ECFDF9] border border-[#CDF5EE] px-1.5 py-0.5 text-[6.5px] font-bold text-[#0E9384]">
          <span className="w-1 h-1 rounded-full bg-[#14B8A6]" />
          Synced
        </span>
      </div>

      {/* Formula bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-[#F0EEF6] bg-[#FBFAFE]">
        <span className="text-[8px] font-bold text-[#B4AEC6] italic" style={{ fontFamily: 'Georgia, serif' }}>fx</span>
        <span className="text-[7px] font-mono text-[#5B5670]">=SUM(<span className="text-[#7C3AED]">D2:D6</span>)</span>
      </div>

      {/* Spreadsheet grid */}
      <div className="px-2 pt-1.5">
        {/* Column headers */}
        <div className="grid grid-cols-[20px_1fr_50px_50px] gap-0 text-[6.5px] font-bold text-[#A79FBE] border-b border-[#F0EEF6]">
          <span className="py-1 text-center" />
          <span className="py-1 px-1.5">Account</span>
          <span className="py-1 px-1.5">Stage</span>
          <span className="py-1 px-1.5 text-right">Value</span>
        </div>

        {/* Data rows */}
        {[
          { n: '1', account: 'Acme Corp', stage: 'Closed', value: '£42k', stageColor: '#0E9384' },
          { n: '2', account: 'Globex Ltd', stage: 'Proposal', value: '£28k', stageColor: '#D97706' },
          { n: '3', account: 'Initech', stage: 'Negotiation', value: '£35k', stageColor: '#7C3AED' },
          { n: '4', account: 'Soylent', stage: 'Closed', value: '£19k', stageColor: '#0E9384' },
          { n: '5', account: 'Wonka Inc', stage: 'Discovery', value: '£64k', stageColor: '#3B82F6' },
          { n: '6', account: 'Stark Ind', stage: 'Proposal', value: '£51k', stageColor: '#D97706' },
        ].map((row) => (
          <div key={row.n} className="grid grid-cols-[20px_1fr_50px_50px] gap-0 text-[7px] border-b border-[#F7F6FA]">
            <span className="py-1.5 text-center text-[#B4AEC6] font-semibold">{row.n}</span>
            <span className="py-1.5 px-1.5 font-semibold text-[#1B1730] truncate">{row.account}</span>
            <span className="py-1.5 px-1.5 font-semibold" style={{ color: row.stageColor }}>{row.stage}</span>
            <span className="py-1.5 px-1.5 text-right font-bold text-[#1B1730]">{row.value}</span>
          </div>
        ))}

        {/* Total row */}
        <div className="grid grid-cols-[20px_1fr_50px_50px] gap-0 text-[7px] bg-[#F3EFFF] rounded-b-lg mt-0.5">
          <span className="py-1.5 text-center text-[#B4AEC6] font-semibold">7</span>
          <span className="py-1.5 px-1.5 font-bold text-[#7C3AED]">Total</span>
          <span className="py-1.5 px-1.5" />
          <span className="py-1.5 px-1.5 text-right font-extrabold text-[#7C3AED]">£239k</span>
        </div>
      </div>
    </div>
  );
}
