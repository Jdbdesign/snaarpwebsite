// High-fidelity mobile phone screen for CRM Download page.
// Shows: deal pipeline view with cards in stages.

import { AVATARS } from '../avatarPaths';

export function CrmPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Pipeline</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[7px] font-bold text-[#7C3AED]">£189k</span>
          <span className="text-[6px] text-[#8B85A0]">total</span>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        {/* Stage: Discovery */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] font-bold text-[#3B82F6] uppercase tracking-wider">Discovery</span>
            <span className="text-[6px] text-[#8B85A0]">2 deals</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                <img src={AVATARS.amaraChen} alt="" className="w-full h-full object-cover" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[7px] font-bold text-[#1B1730] truncate">Globex Ltd</div>
                <div className="text-[6px] text-[#8B85A0]">£28k · Amara</div>
              </div>
            </div>
            <div className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                <img src={AVATARS.jacob} alt="" className="w-full h-full object-cover" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[7px] font-bold text-[#1B1730] truncate">Wonka Inc</div>
                <div className="text-[6px] text-[#8B85A0]">£64k · Jacob</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage: Proposal */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] font-bold text-[#D97706] uppercase tracking-wider">Proposal</span>
            <span className="text-[6px] text-[#8B85A0]">1 deal</span>
          </div>
          <div className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
            <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
              <img src={AVATARS.sofiaReyes} alt="" className="w-full h-full object-cover" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[7px] font-bold text-[#1B1730] truncate">Stark Industries</div>
              <div className="text-[6px] text-[#8B85A0]">£51k · Sofia</div>
            </div>
          </div>
        </div>

        {/* Stage: Closed Won */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] font-bold text-[#0E9384] uppercase tracking-wider">Closed Won</span>
            <span className="text-[6px] text-[#8B85A0]">1 deal</span>
          </div>
          <div className="rounded-lg bg-[#ECFDF9] border border-[#CDF5EE] p-2 flex items-center gap-2">
            <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
              <img src={AVATARS.jacob} alt="" className="w-full h-full object-cover" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[7px] font-bold text-[#1B1730] truncate">Acme Corp</div>
              <div className="text-[6px] text-[#0E9384]">£42k · Won ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
