// High-fidelity mobile phone screen for Sendrit Download page.
// Shows: an active email sequence with step status indicators.

export function SendritPhoneScreen() {
  return (
    <div className="sendrit-phone-screen">
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
        <span className="text-[9px] font-bold text-[#1B1730]">Sequences</span>
        <span className="flex items-center gap-1 rounded-full bg-[#ECFDF9] border border-[#CDF5EE] px-2 py-0.5 text-[6.5px] font-bold text-[#0E9384]">
          3 active
        </span>
      </div>

      {/* Active sequence card */}
      <div className="mx-3 mt-2.5 rounded-xl bg-white border border-[#F0EEF6] p-3 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-bold text-[#1B1730]">Q3 Outbound - VPs</span>
          <span className="rounded-full bg-[#0E9384] px-1.5 py-0.5 text-[5.5px] font-bold text-white">Live</span>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-3 mb-2.5 pb-2 border-b border-[#F0EEF6]">
          {[
            { label: 'Sent', value: '342' },
            { label: 'Opened', value: '58%' },
            { label: 'Replied', value: '12%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[9px] font-extrabold text-[#7C3AED]">{stat.value}</div>
              <div className="text-[5.5px] font-semibold text-[#8B85A0]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sequence steps */}
        <div className="flex flex-col gap-1.5">
          {[
            { step: '1', label: 'Initial outreach', status: 'sent', statusColor: '#0E9384' },
            { step: '2', label: 'Follow-up (3 days)', status: 'sent', statusColor: '#0E9384' },
            { step: '3', label: 'Value prop email', status: 'scheduled', statusColor: '#D97706' },
            { step: '4', label: 'Final nudge', status: 'draft', statusColor: '#8B85A0' },
          ].map((s) => (
            <div key={s.step} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-[#FBFAFE] border border-[#F0EDF7]">
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-bold text-white" style={{ background: s.statusColor }}>{s.step}</span>
              <span className="text-[7px] font-semibold text-[#1B1730] flex-1">{s.label}</span>
              <span className="text-[5.5px] font-bold uppercase" style={{ color: s.statusColor }}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other sequences */}
      <div className="mx-3 mt-2 flex flex-col gap-1">
        {[
          { name: 'Warm re-engagement', contacts: '86', status: 'Live' },
          { name: 'Post-demo nurture', contacts: '24', status: 'Paused' },
        ].map((seq) => (
          <div key={seq.name} className="flex items-center justify-between px-2.5 py-2 rounded-lg border border-[#F0EEF6]">
            <div>
              <div className="text-[7px] font-bold text-[#1B1730]">{seq.name}</div>
              <div className="text-[6px] text-[#8B85A0]">{seq.contacts} contacts</div>
            </div>
            <span className="text-[5.5px] font-bold" style={{ color: seq.status === 'Live' ? '#0E9384' : '#8B85A0' }}>{seq.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
