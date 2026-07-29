'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Clock, Plus, Calendar, CalendarCheck, CalendarClock, GitBranch, FileInput, BarChart3, Settings, HelpCircle, Link, ToggleRight, ToggleLeft, X, CheckCircle, Video, Copy, Check } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const SIDEBAR_NAV = [
  { label: 'Event Types', active: true, Icon: Calendar },
  { label: 'Meetings', active: false, Icon: CalendarCheck },
  { label: 'Availability', active: false, Icon: CalendarClock },
  { label: 'Workflows', active: false, Icon: GitBranch },
  { label: 'Routing Forms', active: false, Icon: FileInput },
  { label: 'Analytics', active: false, Icon: BarChart3 },
];

const EVENT_TYPES_BASE = [
  { title: '30 Min Meeting', color: '#7C3AED', duration: '30 min', active: true },
  { title: 'Product Demo', color: '#0E9384', duration: '45 min', active: true },
  { title: 'Discovery Call', color: '#F59E0B', duration: '15 min', active: false },
];

const SCHEDULE = [
  { initials: 'SJ', color: '#7C3AED', name: 'Sarah Jenkins', title: 'Product Demo Call', status: 'Confirmed', statusColor: '#22c55e', statusBg: '#ECFDF5', time: '10:00 AM', detail: 'Google Meet · Discussing Q3 roadmap walkthrough...' },
  { initials: 'AR', color: '#0E9384', name: 'Alex Rivera', title: 'Onboarding Sync', status: 'Confirmed', statusColor: '#22c55e', statusBg: '#ECFDF5', time: '11:30 AM', detail: 'Zoom · Kickoff call for new account setup...' },
  { initials: 'DT', color: '#E11D48', name: 'Design Team', title: 'Weekly Design Review', status: 'New', statusColor: '#3b82f6', statusBg: '#EFF6FF', time: '01:00 PM', detail: 'Snaarp Meet · Reviewing latest prototype feedback...' },
  { initials: 'CS', color: '#1E293B', name: 'Cloud Services', title: 'Infrastructure Check-in', status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB', time: '02:15 PM', detail: 'Google Meet · Awaiting confirmation from vendor...' },
  { initials: 'MK', color: '#F59E0B', name: 'Mike Chen', title: 'Client Presentation', status: 'Confirmed', statusColor: '#22c55e', statusBg: '#ECFDF5', time: '03:30 PM', detail: 'Zoom · Investor pitch dry run, slides 4-8...' },
  { initials: 'LP', color: '#EC4899', name: 'Lisa Park', title: 'Discovery Call', status: 'New', statusColor: '#3b82f6', statusBg: '#EFF6FF', time: '04:45 PM', detail: 'Snaarp Meet · Intro call with prospective client...' },
];

const DURATIONS = ['15 min', '30 min', '45 min', '60 min'];
const COLORS = ['#7C3AED', '#0E9384', '#F59E0B', '#EC4899'];

type MeView = 'base' | 'newEvent' | 'meetingDetail';

export function MePreviewMockup() {
  const [view, setView] = useState<MeView>('base');
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [eventTypes, setEventTypes] = useState(EVENT_TYPES_BASE);
  const [selectedDuration, setSelectedDuration] = useState('30 min');
  const [selectedColor, setSelectedColor] = useState('#7C3AED');
  const [copied, setCopied] = useState(false);
  const [showCopyCoachmark, setShowCopyCoachmark] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStep1(true), 600);
    return () => clearTimeout(t);
  }, []);

  function handleOpenNewEvent() {
    setShowStep1(false);
    setTimeout(() => setView('newEvent'), 180);
  }

  function handleCreateEvent() {
    setEventTypes([...eventTypes, { title: 'Strategy Call', color: selectedColor, duration: selectedDuration, active: true }]);
    setView('base');
    setToastMsg('Event type created');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setShowStep2(true), 400);
    }, 2000);
  }

  function handleOpenMeetingDetail() {
    setShowStep2(false);
    setTimeout(() => {
      setView('meetingDetail');
      setTimeout(() => setShowCopyCoachmark(true), 400);
    }, 180);
  }

  function handleCopyLink() {
    setShowCopyCoachmark(false);
    try { navigator.clipboard.writeText('meet.snaarp.com/product-demo-sj4x9'); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleCloseMeeting() {
    setView('base');
    setCopied(false);
    setShowCopyCoachmark(false);
  }

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      {/* Toast */}
      {showToast && (
        <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 200, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}>
          <CheckCircle size={14} style={{ color: '#22c55e' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#166534' }}>{toastMsg}</span>
        </div>
      )}

      {/* Step 1 Coachmark — New Event Type */}
      <Coachmark
        visible={showStep1 && view === 'base'}
        title="Create an Event Type"
        subtitle="Set up a meeting type others can book with you"
        onNext={handleOpenNewEvent}
        top="50px"
        left="110px"
        arrowSide="left"
      />

      {/* Step 2 Coachmark — View Meeting */}
      <Coachmark
        visible={showStep2 && view === 'base'}
        title="View Meeting Details"
        subtitle="See attendees, notes, and share the meeting link"
        onNext={handleOpenMeetingDetail}
        top="218px"
        left="320px"
        arrowSide="left"
      />

      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        <div onClick={handleOpenNewEvent} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9.5px', fontWeight: 600, marginBottom: '14px', width: 'fit-content', cursor: 'pointer' }}>
          <Plus size={12} />
          <span>New Event Type</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {SIDEBAR_NAV.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px' }}>
              <item.Icon size={12} />
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '8px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Calendars</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7C3AED' }} />
            <span>My Calendar</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} />
            <span>Search meetings...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>Active</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Event Types section */}
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Event Types</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {eventTypes.map((event, i) => (
              <div key={i} style={{ flex: '1 1 28%', minWidth: '0', padding: '7px 8px', borderRadius: '8px', border: '1px solid #f0f0f0', background: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '4px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '2px', background: event.color }} />
                  <span style={{ fontSize: '8.5px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{event.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#888', fontSize: '8px' }}>
                    <Clock size={8} />
                    <span>{event.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {event.active ? <ToggleRight size={12} style={{ color: '#7C3AED' }} /> : <ToggleLeft size={12} style={{ color: '#d0d0d0' }} />}
                    <Link size={8} style={{ color: '#999' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>Today&apos;s Schedule</span>
            <span style={{ fontSize: '9px', color: '#999' }}>6 meetings</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {SCHEDULE.map((meeting, i) => (
              <div key={i} onClick={i === 0 ? handleOpenMeetingDetail : undefined} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', padding: '9px 12px', borderBottom: '1px solid #f8f8f8', cursor: i === 0 ? 'pointer' : 'default' }}>
                <div style={{ width: '28px', height: '28px', minWidth: '28px', borderRadius: '50%', background: meeting.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>
                  {meeting.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1px' }}>
                    <span style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '10.5px' }}>{meeting.name}</span>
                    <span style={{ fontSize: '7px', fontWeight: 800, padding: '1px 5px', borderRadius: '8px', background: meeting.statusBg, color: meeting.statusColor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{meeting.status}</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '10.5px', color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{meeting.title}</div>
                  <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{meeting.detail}</div>
                </div>
                <span style={{ fontSize: '9px', color: '#999', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '2px' }}>{meeting.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* New Event Type Modal */}
        {view === 'newEvent' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '320px', maxHeight: '420px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '14px', border: '1px solid #e0e0e0', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>New Event Type</span>
              <div onClick={() => setView('base')} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
            </div>

            <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
              {/* Event name */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Event name</div>
                <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Strategy Call</div>
              </div>

              {/* Duration */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Duration</div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {DURATIONS.map((d) => (
                    <div key={d} onClick={() => setSelectedDuration(d)} style={{ padding: '4px 10px', borderRadius: '14px', fontSize: '9px', fontWeight: 600, cursor: 'pointer', background: selectedDuration === d ? '#7C3AED' : '#fff', color: selectedDuration === d ? '#fff' : '#555', border: selectedDuration === d ? '1px solid #7C3AED' : '1px solid #e8e8e8' }}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Location</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
                  <Video size={11} style={{ color: '#7C3AED' }} />
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>Google Meet</span>
                  <ChevronDown size={10} style={{ marginLeft: 'auto', color: '#999' }} />
                </div>
              </div>

              {/* Color tag */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Color tag</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {COLORS.map((c) => (
                    <div key={c} onClick={() => setSelectedColor(c)} style={{ width: '20px', height: '20px', borderRadius: '50%', background: c, cursor: 'pointer', border: selectedColor === c ? '2.5px solid #1a1a1a' : '2px solid transparent', boxShadow: selectedColor === c ? '0 0 0 2px #fff inset' : 'none' }} />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Description</div>
                <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', lineHeight: '1.4' }}>A focused call to align on next steps.</div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', padding: '10px 14px', borderTop: '1px solid #f0f0f0' }}>
              <button onClick={() => setView('base')} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
              <button onClick={handleCreateEvent} style={{ padding: '5px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Create Event Type</button>
            </div>
          </div>
          </div>
        )}

        {/* Meeting Detail Modal */}
        {view === 'meetingDetail' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '320px', maxHeight: '380px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '14px', border: '1px solid #e0e0e0', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Product Demo Call</span>
                <span style={{ fontSize: '7px', fontWeight: 800, padding: '2px 6px', borderRadius: '8px', background: '#ECFDF5', color: '#22c55e', textTransform: 'uppercase' }}>Confirmed</span>
              </div>
              <div onClick={handleCloseMeeting} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
            </div>

            <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Date/time */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={13} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '10.5px', color: '#1a1a1a' }}>Today · 10:00 AM – 10:30 AM</span>
              </div>

              {/* Attendee */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '8px', fontWeight: 700 }}>SJ</div>
                <div>
                  <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1a1a' }}>Sarah Jenkins</div>
                  <div style={{ fontSize: '9px', color: '#888' }}>s.jenkins@acme.com</div>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Video size={13} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '10.5px', color: '#1a1a1a' }}>Google Meet</span>
              </div>

              {/* Meeting link */}
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Meeting link</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
                  <span style={{ fontSize: '9.5px', color: '#555', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>meet.snaarp.com/product-demo-sj4x9</span>
                  <div onClick={handleCopyLink} style={{ cursor: 'pointer', color: copied ? '#22c55e' : '#7C3AED', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span style={{ fontSize: '8px', fontWeight: 600 }}>{copied ? 'Copied' : 'Copy'}</span>
                  </div>
                </div>
                {/* Copy link coachmark */}
                <Coachmark
                  visible={showCopyCoachmark && !copied}
                  title="Copy Meeting Link"
                  subtitle="Share this link with attendees to join the meeting"
                  onNext={handleCopyLink}
                  top="-110px"
                  left="60px"
                  arrowSide="bottom"
                />
              </div>

              {/* Notes */}
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Notes</div>
                <div style={{ fontSize: '9.5px', color: '#555', lineHeight: '1.4' }}>Discussing Q3 roadmap walkthrough and next steps.</div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px 14px', borderTop: '1px solid #f0f0f0' }}>
              <button onClick={handleCloseMeeting} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', fontWeight: 500, cursor: 'pointer' }}>Close</button>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
