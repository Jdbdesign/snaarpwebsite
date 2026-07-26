// High-fidelity web app mockup for Elearn Download page.
// Shows: course dashboard with course cards (thumbnails, progress bars,
// duration), enrolled count, and a "Create Course" button.

import { AVATARS } from '../avatarPaths';

export function ElearnWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/elearn/courses</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Courses</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>8 active</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>142 enrolled</span>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          Create Course
        </span>
      </div>

      {/* Course grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '14px 16px' }}>
        {[
          { title: 'Company Onboarding', lessons: '12 lessons', duration: '2h 45m', enrolled: 24, progress: 100, color: '#0E9384', thumb: '🎓' },
          { title: 'Security Awareness', lessons: '8 lessons', duration: '1h 30m', enrolled: 38, progress: 72, color: '#7C3AED', thumb: '🔒' },
          { title: 'Sales Playbook', lessons: '10 lessons', duration: '2h 10m', enrolled: 16, progress: 45, color: '#D97706', thumb: '📈' },
          { title: 'Product Training Q3', lessons: '6 lessons', duration: '1h 15m', enrolled: 32, progress: 28, color: '#3B82F6', thumb: '🚀' },
          { title: 'Remote Work Policy', lessons: '5 lessons', duration: '55m', enrolled: 42, progress: 88, color: '#0E9384', thumb: '🏠' },
          { title: 'Leadership Fundamentals', lessons: '15 lessons', duration: '3h 20m', enrolled: 8, progress: 12, color: '#DC2626', thumb: '👔' },
        ].map((course) => (
          <div key={course.title} style={{ borderRadius: '12px', background: '#fff', border: '1px solid #F0EEF6', overflow: 'hidden', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
            {/* Thumbnail */}
            <div style={{ height: '50px', background: course.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '20px' }}>{course.thumb}</span>
            </div>
            {/* Info */}
            <div style={{ padding: '10px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#1B1730', marginBottom: '3px' }}>{course.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <span style={{ fontSize: '6px', color: '#8B85A0' }}>{course.lessons}</span>
                <span style={{ fontSize: '6px', color: '#8B85A0' }}>{course.duration}</span>
              </div>
              {/* Progress bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: '#F0EEF6' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', borderRadius: '2px', background: course.color }} />
                </div>
                <span style={{ fontSize: '6px', fontWeight: 700, color: course.color }}>{course.progress}%</span>
              </div>
              {/* Enrolled */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <div style={{ display: 'flex' }}>
                  {[AVATARS.jacob, AVATARS.sofiaReyes, AVATARS.arlo].slice(0, Math.min(3, Math.ceil(course.enrolled / 10))).map((av, i) => (
                    <span key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', overflow: 'hidden', marginLeft: i > 0 ? '-4px' : '0', border: '1px solid #fff' }}>
                      <img src={av} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: '6px', color: '#8B85A0' }}>{course.enrolled} enrolled</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
