// High-fidelity mobile phone screen for Doc Sign Download page.
// Shows: approval request card with approve/reject buttons and status.

import { AVATARS } from '../avatarPaths';

export function DocSignPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Approval Request</span>
        <span className="text-[7px] font-bold text-[#D97706]">In Review</span>
      </div>

      {/* Request card */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        <div className="rounded-xl bg-[#F7F6FA] border border-[#F0EEF6] p-3">
          <div className="text-[8px] font-bold text-[#1B1730] mb-1">Expense Policy Update</div>
          <div className="text-[6px] text-[#8B85A0] mb-2">Submitted by Amara · 2 hours ago</div>

          {/* Stage indicator */}
          <div className="flex items-center gap-1 mb-2">
            <span className="w-3 h-3 rounded-full bg-[#0E9384] flex items-center justify-center">
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <div className="flex-1 h-[2px] bg-[#0E9384]" />
            <span className="w-3 h-3 rounded-full bg-[#7C3AED] flex items-center justify-center">
              <span className="w-[4px] h-[4px] rounded-full bg-white" />
            </span>
            <div className="flex-1 h-[2px] bg-[#F0EEF6]" />
            <span className="w-3 h-3 rounded-full bg-[#F7F6FA] border-2 border-[#F0EEF6]" />
          </div>
          <div className="flex items-center justify-between text-[5.5px] text-[#8B85A0]">
            <span>Draft</span>
            <span className="text-[#7C3AED] font-bold">Review</span>
            <span>Approved</span>
          </div>
        </div>

        {/* Approver list */}
        <div>
          <span className="text-[7px] font-bold text-[#5B5670] uppercase tracking-wider mb-1.5 block">Approvers</span>
          <div className="flex flex-col gap-1">
            {[
              { name: 'Amara Chen', status: 'Approved', avatar: AVATARS.amaraChen, color: '#0E9384' },
              { name: 'Jacob Smith', status: 'Approved', avatar: AVATARS.jacob, color: '#0E9384' },
              { name: 'Sofia Reyes', status: 'Pending', avatar: AVATARS.sofiaReyes, color: '#D97706' },
            ].map((approver) => (
              <div key={approver.name} className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                  <img src={approver.avatar} alt="" className="w-full h-full object-cover" />
                </span>
                <span className="text-[7px] font-semibold text-[#1B1730] flex-1">{approver.name}</span>
                <span className="text-[6px] font-bold" style={{ color: approver.color }}>{approver.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 py-2 rounded-lg bg-[#0E9384] text-center">
            <span className="text-[7px] font-bold text-white">Approve</span>
          </div>
          <div className="flex-1 py-2 rounded-lg bg-white border border-[#F0EEF6] text-center">
            <span className="text-[7px] font-bold text-[#DC2626]">Request Changes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
