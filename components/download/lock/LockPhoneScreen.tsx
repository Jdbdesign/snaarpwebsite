// High-fidelity mobile phone screen for Lock Download page.
// Shows: vault list with credential entries and biometric unlock indicator.

export function LockPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Lock Vault</span>
        <div className="flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          <span className="text-[6.5px] font-bold text-[#0E9384]">Biometric</span>
        </div>
      </div>

      {/* Vault entries */}
      <div className="px-3 pt-2.5 flex flex-col gap-1.5">
        {[
          { name: 'Slack', user: 'team@snaarp.com', icon: '💬', folder: 'Work', time: '2 min ago' },
          { name: 'GitHub', user: 'dev@snaarp.com', icon: '🐙', folder: 'Work', time: '1h ago' },
          { name: 'AWS Console', user: 'admin@snaarp.com', icon: '☁️', folder: 'Work', time: '3h ago' },
          { name: 'Netflix', user: 'jacob@gmail.com', icon: '🎬', folder: 'Personal', time: 'Yesterday' },
          { name: 'Gmail', user: 'jacob.smith@gmail.com', icon: '📧', folder: 'Personal', time: '2d ago' },
          { name: 'Shared WiFi', user: 'Office-5G', icon: '📶', folder: 'Shared', time: '5d ago' },
        ].map((entry) => (
          <div key={entry.name} className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-[#F7F6FA] flex items-center justify-center text-[9px]">{entry.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[7.5px] font-bold text-[#1B1730]">{entry.name}</span>
                <span className="text-[5.5px] text-[#A79FBE]">{entry.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[6px] text-[#8B85A0]">{entry.user}</span>
                <span className="text-[5px] font-semibold px-1 py-0.5 rounded bg-[#F7F6FA] text-[#8B85A0]">{entry.folder}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
