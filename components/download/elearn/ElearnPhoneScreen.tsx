// High-fidelity mobile phone screen for Elearn Download page.
// Shows: course in progress with video thumbnail, lesson list, and progress indicator.

export function ElearnPhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Security Awareness</span>
        <span className="text-[6.5px] font-bold text-[#7C3AED]">72% complete</span>
      </div>

      {/* Video thumbnail */}
      <div className="px-3 pt-2.5">
        <div className="w-full rounded-xl bg-[#1B1730] h-[70px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-transparent" />
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <div className="absolute bottom-1.5 left-2 right-2">
            <div className="w-full h-[3px] rounded-full bg-white/20">
              <div className="h-full rounded-full bg-[#7C3AED]" style={{ width: '35%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Current lesson info */}
      <div className="px-3 pt-2 pb-1">
        <div className="text-[8px] font-bold text-[#1B1730]">Lesson 6: Phishing Prevention</div>
        <div className="text-[6px] text-[#8B85A0]">Duration: 12 min &middot; Module 3 of 4</div>
      </div>

      {/* Lesson list */}
      <div className="px-3 pt-1 flex flex-col gap-1">
        {[
          { title: 'Introduction to Security', done: true, duration: '8 min' },
          { title: 'Password Best Practices', done: true, duration: '15 min' },
          { title: 'Recognizing Social Engineering', done: true, duration: '12 min' },
          { title: 'Data Handling Policies', done: true, duration: '10 min' },
          { title: 'Two-Factor Authentication', done: true, duration: '8 min' },
          { title: 'Phishing Prevention', done: false, duration: '12 min', current: true },
          { title: 'Incident Reporting', done: false, duration: '10 min' },
          { title: 'Final Assessment', done: false, duration: '15 min' },
        ].map((lesson, i) => (
          <div key={lesson.title} className={`rounded-lg p-2 flex items-center gap-2 ${lesson.current ? 'bg-[#F3EFFF] border border-[#E6DEFA]' : 'bg-white border border-[#F0EEF6]'}`}>
            <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 text-[6px] font-bold ${lesson.done ? 'bg-[#0E9384] text-white' : lesson.current ? 'bg-[#7C3AED] text-white' : 'bg-[#F7F6FA] text-[#8B85A0]'}`}>
              {lesson.done ? (
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              ) : (
                <span>{i + 1}</span>
              )}
            </span>
            <div className="flex-1 min-w-0">
              <span className={`text-[6.5px] font-semibold ${lesson.done ? 'text-[#8B85A0] line-through' : lesson.current ? 'text-[#7C3AED]' : 'text-[#1B1730]'}`}>{lesson.title}</span>
            </div>
            <span className="text-[5.5px] text-[#A79FBE]">{lesson.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
