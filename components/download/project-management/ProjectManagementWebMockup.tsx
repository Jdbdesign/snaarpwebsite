// High-fidelity web app mockup for Project Management Download page.
// Shows: kanban board with columns, task cards with assignee avatars,
// priority tags, and due dates.

import { AVATARS } from '../avatarPaths';

export function ProjectManagementWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/projects/sprint-14</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Sprint 14</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>Jun 10 \u2013 Jun 24</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>12 tasks</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
            Add Task
          </span>
        </div>
      </div>

      {/* Kanban board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '14px 14px', minHeight: '300px' }}>
        {/* To Do */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B85A0' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#8B85A0', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>To Do</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>4</span>
          </div>
          {[
            { title: 'Setup CI pipeline', priority: 'High', priorityColor: '#DC2626', priorityBg: '#FEF2F2', assignee: AVATARS.marcusWebb, due: 'Jun 16' },
            { title: 'Design settings page', priority: 'Medium', priorityColor: '#D97706', priorityBg: '#FEF6E7', assignee: AVATARS.arlo, due: 'Jun 18' },
            { title: 'Write API docs', priority: 'Low', priorityColor: '#3B82F6', priorityBg: '#EFF6FF', assignee: AVATARS.priyaNair, due: 'Jun 20' },
          ].map((task) => (
            <div key={task.title} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', marginBottom: '6px' }}>{task.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: task.priorityBg, fontSize: '6px', fontWeight: 600, color: task.priorityColor }}>{task.priority}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '6px', color: '#8B85A0' }}>{task.due}</span>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={task.assignee} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In Progress */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>In Progress</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>3</span>
          </div>
          {[
            { title: 'Implement auth flow', priority: 'High', priorityColor: '#DC2626', priorityBg: '#FEF2F2', assignee: AVATARS.jacob, due: 'Jun 14' },
            { title: 'Migrate database schema', priority: 'High', priorityColor: '#DC2626', priorityBg: '#FEF2F2', assignee: AVATARS.marcusWebb, due: 'Jun 15' },
          ].map((task) => (
            <div key={task.title} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', marginBottom: '6px' }}>{task.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: task.priorityBg, fontSize: '6px', fontWeight: 600, color: task.priorityColor }}>{task.priority}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '6px', color: '#8B85A0' }}>{task.due}</span>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={task.assignee} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Review</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>2</span>
          </div>
          {[
            { title: 'Onboarding flow redesign', priority: 'Medium', priorityColor: '#D97706', priorityBg: '#FEF6E7', assignee: AVATARS.sofiaReyes, due: 'Jun 13' },
            { title: 'Performance audit', priority: 'Low', priorityColor: '#3B82F6', priorityBg: '#EFF6FF', assignee: AVATARS.amaraChen, due: 'Jun 14' },
          ].map((task) => (
            <div key={task.title} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', marginBottom: '6px' }}>{task.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: task.priorityBg, fontSize: '6px', fontWeight: 600, color: task.priorityColor }}>{task.priority}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '6px', color: '#8B85A0' }}>{task.due}</span>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={task.assignee} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Done */}
        <div style={{ borderRadius: '12px', background: '#F0FDF9', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#0E9384', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Done</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>3</span>
          </div>
          {[
            { title: 'Landing page copy', priority: 'Medium', assignee: AVATARS.sofiaReyes, due: 'Jun 11' },
            { title: 'Setup staging env', priority: 'High', assignee: AVATARS.jacob, due: 'Jun 10' },
          ].map((task) => (
            <div key={task.title} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #CDF5EE', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(14,147,132,.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', textDecoration: 'line-through' }}>{task.title}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '6px', color: '#8B85A0' }}>{task.due}</span>
                <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                  <img src={task.assignee} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
