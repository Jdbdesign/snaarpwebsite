// High-fidelity mobile phone screen for Project Management Download page.
// Shows: task list with checkboxes, assignees, and priority indicators.

import { AVATARS } from '../avatarPaths';

export function ProjectManagementPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Sprint 14</span>
        <div className="flex items-center gap-1">
          <span className="text-[7px] font-bold text-[#7C3AED]">8/12</span>
          <span className="text-[5.5px] text-[#8B85A0]">done</span>
        </div>
      </div>

      {/* Task list */}
      <div className="px-3 pt-2.5 flex flex-col gap-1.5">
        {[
          { title: 'Implement auth flow', done: false, priority: 'High', priorityColor: '#DC2626', avatar: AVATARS.jacob, due: 'Jun 14' },
          { title: 'Migrate database schema', done: false, priority: 'High', priorityColor: '#DC2626', avatar: AVATARS.marcusWebb, due: 'Jun 15' },
          { title: 'Setup CI pipeline', done: false, priority: 'High', priorityColor: '#DC2626', avatar: AVATARS.marcusWebb, due: 'Jun 16' },
          { title: 'Design settings page', done: false, priority: 'Medium', priorityColor: '#D97706', avatar: AVATARS.arlo, due: 'Jun 18' },
          { title: 'Onboarding flow redesign', done: false, priority: 'Medium', priorityColor: '#D97706', avatar: AVATARS.sofiaReyes, due: 'Jun 13' },
          { title: 'Landing page copy', done: true, priority: 'Medium', priorityColor: '#D97706', avatar: AVATARS.sofiaReyes, due: 'Jun 11' },
          { title: 'Setup staging env', done: true, priority: 'High', priorityColor: '#DC2626', avatar: AVATARS.jacob, due: 'Jun 10' },
        ].map((task) => (
          <div key={task.title} className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center gap-2">
            <span className={`w-3.5 h-3.5 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 ${task.done ? 'bg-[#0E9384] border-[#0E9384]' : 'border-[#E6DEFA]'}`}>
              {task.done && (
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              )}
            </span>
            <div className="flex-1 min-w-0">
              <div className={`text-[7px] font-bold text-[#1B1730] truncate ${task.done ? 'line-through opacity-50' : ''}`}>{task.title}</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[5px] font-bold px-1 py-0.5 rounded" style={{ color: task.priorityColor, background: task.priorityColor + '15' }}>{task.priority}</span>
                <span className="text-[5.5px] text-[#8B85A0]">{task.due}</span>
              </div>
            </div>
            <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
              <img src={task.avatar} alt="" className="w-full h-full object-cover" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
