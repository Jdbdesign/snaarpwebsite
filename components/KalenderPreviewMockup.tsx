'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Plus, Calendar, Settings, HelpCircle, X, CheckCircle, Video, Users, Pencil, Trash2 } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TODAY = 17;

const GRID: { day: number; currentMonth: boolean }[][] = [
  [{ day: 1, currentMonth: true }, { day: 2, currentMonth: true }, { day: 3, currentMonth: true }, { day: 4, currentMonth: true }, { day: 5, currentMonth: true }, { day: 6, currentMonth: true }, { day: 7, currentMonth: true }],
  [{ day: 8, currentMonth: true }, { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true }, { day: 13, currentMonth: true }, { day: 14, currentMonth: true }],
  [{ day: 15, currentMonth: true }, { day: 16, currentMonth: true }, { day: 17, currentMonth: true }, { day: 18, currentMonth: true }, { day: 19, currentMonth: true }, { day: 20, currentMonth: true }, { day: 21, currentMonth: true }],
  [{ day: 22, currentMonth: true }, { day: 23, currentMonth: true }, { day: 24, currentMonth: true }, { day: 25, currentMonth: true }, { day: 26, currentMonth: true }, { day: 27, currentMonth: true }, { day: 28, currentMonth: true }],
  [{ day: 29, currentMonth: true }, { day: 30, currentMonth: true }, { day: 31, currentMonth: true }, { day: 1, currentMonth: false }, { day: 2, currentMonth: false }, { day: 3, currentMonth: false }, { day: 4, currentMonth: false }],
];

const EVENTS_BASE: Record<number, { title: string; color: string; time?: string }[]> = {
  3: [{ title: 'Product Demo', color: '#7C3AED', time: '10:00 AM' }],
  5: [{ title: 'Dentist Appt', color: '#0E9384', time: '9:00 AM' }],
  9: [{ title: 'Team Standup', color: '#F59E0B', time: '9:30 AM' }],
  12: [{ title: 'Client Call', color: '#7C3AED', time: '2:00 PM' }],
  16: [{ title: 'Team Standup', color: '#F59E0B', time: '9:30 AM' }],
  17: [{ title: 'Design Review', color: '#7C3AED', time: '2:00 PM' }],
  20: [{ title: 'Birthday — Alex', color: '#0E9384', time: '12:00 PM' }],
  23: [{ title: 'Team Standup', color: '#F59E0B', time: '9:30 AM' }],
  25: [{ title: 'Q3 Planning', color: '#F59E0B', time: '10:00 AM' }, { title: 'Client Call', color: '#7C3AED', time: '3:00 PM' }],
  28: [{ title: 'Design Review', color: '#7C3AED', time: '2:00 PM' }],
};

const SIDEBAR_VIEWS = ['Month', 'Week', 'Day', 'Schedule'];
const CALENDARS = [
  { label: 'Work', color: '#7C3AED' },
  { label: 'Personal', color: '#0E9384' },
  { label: 'Team Events', color: '#F59E0B' },
];
const CAL_COLORS = ['#7C3AED', '#0E9384', '#F59E0B'];

type CalView = 'Month' | 'Week' | 'Day' | 'Schedule';
type ModalState = 'none' | 'create' | 'detail';

export function KalenderPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [calView, setCalView] = useState<CalView>('Month');
  const [modal, setModal] = useState<ModalState>('none');
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [selectedCal, setSelectedCal] = useState('#7C3AED');
  const [events, setEvents] = useState(EVENTS_BASE);
  const [showCreateCoachmark, setShowCreateCoachmark] = useState(false);
  const [showCloseCoachmark, setShowCloseCoachmark] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStep1(true), 600);
    return () => clearTimeout(t);
  }, []);

  function handleOpenCreate() {
    setShowStep1(false);
    setTimeout(() => {
      setModal('create');
      setTimeout(() => setShowCreateCoachmark(true), 400);
    }, 180);
  }

  function handleCreateEvent() {
    const updated = { ...events };
    if (!updated[24]) updated[24] = [];
    updated[24].push({ title: 'Marketing Sync', color: selectedCal, time: '2:00 PM' });
    setEvents(updated);
    setModal('none');
    setToastMsg('Event created');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setShowStep2(true), 400);
    }, 2000);
  }

  function handleOpenDetail() {
    setShowStep2(false);
    setTimeout(() => {
      setModal('detail');
      setTimeout(() => setShowCloseCoachmark(true), 400);
    }, 180);
  }

  function handleDeleteEvent() {
    setModal('none');
    setToastMsg('Event removed');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setShowStep3(true), 400);
    }, 1800);
  }

  function handleCloseModal() {
    setModal('none');
    if (modal === 'detail') {
      setTimeout(() => setShowStep3(true), 300);
    }
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

      {/* Step 1 Coachmark — Create Event */}
      <Coachmark
        visible={showStep1 && modal === 'none'}
        title="Create an Event"
        subtitle="Add something new to your calendar in seconds"
        onNext={handleOpenCreate}
        top="50px"
        left="100px"
        arrowSide="left"
      />

      {/* Step 2 Coachmark — View Event */}
      <Coachmark
        visible={showStep2 && modal === 'none'}
        title="View Event Details"
        subtitle="Click any event to see the full details"
        onNext={handleOpenDetail}
        top="220px"
        left="300px"
        arrowSide="left"
      />

      {/* Step 3 Coachmark — Week View */}
      <Coachmark
        visible={showStep3 && modal === 'none'}
        title="Switch to Week View"
        subtitle="See your week at a glance with hourly time slots"
        onNext={() => { setShowStep3(false); if (onEnd) onEnd(); else setCalView('Week'); }}
        top="148px"
        left="100px"
        arrowSide="left"
        buttonLabel="End"
      />

      {/* Sidebar */}
      <div style={{ width: '120px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        <div onClick={handleOpenCreate} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9px', fontWeight: 600, marginBottom: '14px', width: 'fit-content', cursor: 'pointer' }}>
          <Plus size={11} />
          <span>Create Event</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 8px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '12px' }}>
          <Calendar size={11} style={{ color: '#7C3AED' }} />
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#555' }}>March 2026</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: 'auto' }}>
          {SIDEBAR_VIEWS.map((v) => (
            <div key={v} onClick={() => setCalView(v as CalView)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: calView === v ? '#f3efff' : 'transparent', color: calView === v ? '#7C3AED' : '#555', fontWeight: calView === v ? 600 : 400, fontSize: '10.5px', cursor: 'pointer' }}>
              <Calendar size={11} />
              <span>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}>My Calendars</div>
          {CALENDARS.map((cal) => (
            <div key={cal.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555', padding: '2px 0' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: cal.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span>{cal.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ChevronLeft size={14} style={{ color: '#888' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>March 2026</span>
            <ChevronRight size={14} style={{ color: '#888' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '150px', marginLeft: '8px' }}>
            <Search size={12} />
            <span>Search events...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Month View */}
        {calView === 'Month' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '6px 8px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {DAYS.map((d) => (
                <div key={d} style={{ textAlign: 'center', fontSize: '8.5px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 0', borderBottom: '1px solid #f0f0f0' }}>{d}</div>
              ))}
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: `repeat(${GRID.length}, 1fr)` }}>
              {GRID.flat().map((cell, i) => {
                const cellEvents = cell.currentMonth ? (events[cell.day] || []) : [];
                const isToday = cell.currentMonth && cell.day === TODAY;
                return (
                  <div key={i} style={{ borderRight: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5', padding: '3px 4px', display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '9px', fontWeight: isToday ? 700 : 500, color: !cell.currentMonth ? '#ccc' : isToday ? '#fff' : '#555', background: isToday ? '#7C3AED' : 'transparent', borderRadius: '50%', width: isToday ? '18px' : 'auto', height: isToday ? '18px' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cell.day}</span>
                    {cellEvents.slice(0, 2).map((ev, ei) => (
                      <div key={ei} onClick={cell.day === 17 ? handleOpenDetail : undefined} style={{ fontSize: '7px', fontWeight: 600, color: '#fff', background: ev.color, borderRadius: '3px', padding: '1px 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: cell.day === 17 ? 'pointer' : 'default' }}>{ev.title}</div>
                    ))}
                    {cellEvents.length > 2 && <div style={{ fontSize: '6.5px', color: '#999' }}>+{cellEvents.length - 2} more</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Week View */}
        {calView === 'Week' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '6px 8px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '30px repeat(7, 1fr)', borderBottom: '1px solid #f0f0f0', marginBottom: '4px' }}>
              <div />
              {['Sun 15', 'Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21'].map((d) => (
                <div key={d} style={{ textAlign: 'center', fontSize: '8px', fontWeight: 600, color: d.includes('17') ? '#7C3AED' : '#888', padding: '4px 0' }}>{d}</div>
              ))}
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '30px repeat(7, 1fr)', gridTemplateRows: 'repeat(10, 1fr)', overflow: 'hidden' }}>
              {['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'].map((t, ri) => (
                <div key={t} style={{ gridColumn: '1', gridRow: `${ri + 1}`, fontSize: '7px', color: '#999', paddingRight: '4px', textAlign: 'right', borderRight: '1px solid #f0f0f0' }}>{t}</div>
              ))}
              {/* Events */}
              <div style={{ gridColumn: '3', gridRow: '2 / 3', background: '#F59E0B', borderRadius: '4px', margin: '1px 2px', padding: '2px 4px', fontSize: '7px', fontWeight: 600, color: '#fff' }}>Team Standup</div>
              <div style={{ gridColumn: '4', gridRow: '5 / 7', background: '#7C3AED', borderRadius: '4px', margin: '1px 2px', padding: '2px 4px', fontSize: '7px', fontWeight: 600, color: '#fff' }}>Design Review</div>
              <div style={{ gridColumn: '7', gridRow: '4 / 5', background: '#0E9384', borderRadius: '4px', margin: '1px 2px', padding: '2px 4px', fontSize: '7px', fontWeight: 600, color: '#fff' }}>Birthday</div>
            </div>
          </div>
        )}

        {/* Day View */}
        {calView === 'Day' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '6px 8px', overflow: 'hidden' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#7C3AED', marginBottom: '8px' }}>Tuesday, March 17</div>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '40px 1fr', gridTemplateRows: 'repeat(10, 1fr)', overflow: 'hidden' }}>
              {['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'].map((t, ri) => (
                <div key={t} style={{ gridColumn: '1', gridRow: `${ri + 1}`, fontSize: '8px', color: '#999', paddingRight: '6px', textAlign: 'right', borderRight: '1px solid #f0f0f0', display: 'flex', alignItems: 'flex-start' }}>{t}</div>
              ))}
              <div style={{ gridColumn: '2', gridRow: '5 / 7', background: '#7C3AED', borderRadius: '6px', margin: '2px 8px', padding: '6px 8px', fontSize: '9px', fontWeight: 600, color: '#fff' }}>Design Review<br /><span style={{ fontWeight: 400, fontSize: '8px', opacity: 0.8 }}>2:00 PM – 3:00 PM</span></div>
              <div style={{ gridColumn: '2', gridRow: '2 / 3', background: '#F59E0B', borderRadius: '6px', margin: '2px 8px', padding: '6px 8px', fontSize: '9px', fontWeight: 600, color: '#fff' }}>Team Standup<br /><span style={{ fontWeight: 400, fontSize: '8px', opacity: 0.8 }}>9:30 AM – 10:00 AM</span></div>
            </div>
          </div>
        )}

        {/* Schedule View */}
        {calView === 'Schedule' && (
          <div style={{ flex: 1, padding: '10px 12px', overflow: 'hidden' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Upcoming Events</div>
            {[
              { date: 'Today, Mar 17', events: [{ title: 'Design Review', time: '2:00 PM', color: '#7C3AED', cal: 'Work' }] },
              { date: 'Wed, Mar 18', events: [] },
              { date: 'Thu, Mar 19', events: [] },
              { date: 'Fri, Mar 20', events: [{ title: 'Birthday — Alex', time: '12:00 PM', color: '#0E9384', cal: 'Personal' }] },
              { date: 'Mon, Mar 23', events: [{ title: 'Team Standup', time: '9:30 AM', color: '#F59E0B', cal: 'Team Events' }] },
              { date: 'Tue, Mar 24', events: events[24] ? events[24].map(e => ({ title: e.title, time: e.time || '', color: e.color, cal: 'Work' })) : [] },
              { date: 'Thu, Mar 25', events: [{ title: 'Q3 Planning', time: '10:00 AM', color: '#F59E0B', cal: 'Team Events' }, { title: 'Client Call', time: '3:00 PM', color: '#7C3AED', cal: 'Work' }] },
              { date: 'Fri, Mar 28', events: [{ title: 'Design Review', time: '2:00 PM', color: '#7C3AED', cal: 'Work' }] },
            ].map((group) => (
              <div key={group.date} style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>{group.date}</div>
                {group.events.length === 0 && <div style={{ fontSize: '9px', color: '#ccc', paddingLeft: '12px' }}>No events</div>}
                {group.events.map((ev, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 8px', borderRadius: '6px', marginBottom: '3px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ev.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a', flex: 1 }}>{ev.title}</span>
                    <span style={{ fontSize: '9px', color: '#888' }}>{ev.time}</span>
                    <span style={{ fontSize: '7.5px', fontWeight: 600, padding: '1px 5px', borderRadius: '6px', background: ev.color + '18', color: ev.color }}>{ev.cal}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Create Event Modal */}
        {modal === 'create' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'visible' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Create Event</span>
                <div onClick={handleCloseModal} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
              </div>
              <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Event title</div>
                  <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Marketing Sync</div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Date</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
                    <Calendar size={11} style={{ color: '#7C3AED' }} />
                    <span style={{ fontSize: '10px', color: '#1a1a1a' }}>March 24, 2026</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Start</div>
                    <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>2:00 PM</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>End</div>
                    <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>2:30 PM</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Calendar</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {CALENDARS.map((c) => (
                      <div key={c.label} onClick={() => setSelectedCal(c.color)} style={{ padding: '4px 10px', borderRadius: '14px', fontSize: '9px', fontWeight: 600, cursor: 'pointer', background: selectedCal === c.color ? c.color : '#fff', color: selectedCal === c.color ? '#fff' : '#555', border: selectedCal === c.color ? 'none' : '1px solid #e8e8e8' }}>{c.label}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Guests</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px', fontWeight: 700 }}>SJ</div>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px', fontWeight: 700 }}>AR</div>
                    <span style={{ fontSize: '9px', color: '#999', marginLeft: '4px' }}>+ Add guest</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Video size={11} style={{ color: '#7C3AED' }} />
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>Snaarp Meet</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
                <Coachmark
                  visible={showCreateCoachmark}
                  title="Create Event"
                  subtitle="Click to add this event to your calendar"
                  onNext={() => { setShowCreateCoachmark(false); handleCreateEvent(); }}
                  top="-140px"
                  left="30px"
                  arrowSide="bottom"
                  arrowOffset="180px"
                />
                <button onClick={handleCloseModal} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                <button onClick={() => { setShowCreateCoachmark(false); handleCreateEvent(); }} style={{ padding: '5px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Create Event</button>
              </div>
            </div>
          </div>
        )}

        {/* Event Detail Popover */}
        {modal === 'detail' && (
          <div style={{ position: 'absolute', top: '160px', left: '180px', width: '280px', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 24px -6px rgba(0,0,0,0.15)', border: '1px solid #e8e8e8', zIndex: 50, overflow: 'visible' }}>
            <div style={{ display: 'flex', borderRadius: '12px 12px 0 0', overflow: 'visible' }}>
              <div style={{ width: '4px', background: '#7C3AED' }} />
              <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Design Review</span>
                  <div onClick={() => { setShowCloseCoachmark(false); handleCloseModal(); }} style={{ cursor: 'pointer', color: '#888', position: 'relative' }}>
                    <X size={12} />
                    <Coachmark
                      visible={showCloseCoachmark}
                      title="Close"
                      subtitle="Close this modal to continue exploring"
                      onNext={() => { setShowCloseCoachmark(false); handleCloseModal(); }}
                      top="-20px"
                      left="30px"
                      arrowSide="left"
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={12} style={{ color: '#7C3AED' }} />
                  <span style={{ fontSize: '10px', color: '#555' }}>Tuesday, March 17 · 2:00 PM – 3:00 PM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#7C3AED' }} />
                  <span style={{ fontSize: '10px', color: '#555' }}>Work</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Video size={12} style={{ color: '#7C3AED' }} />
                  <span style={{ fontSize: '10px', color: '#555' }}>Snaarp Meet</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px', fontWeight: 700 }}>SJ</div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px', fontWeight: 700 }}>AR</div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px', fontWeight: 700 }}>DT</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '8px', borderTop: '1px solid #f0f0f0' }}>
                  <div onClick={handleCloseModal} style={{ display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer', color: '#888', fontSize: '10px' }}>
                    <Pencil size={12} /> Edit
                  </div>
                  <div onClick={handleDeleteEvent} style={{ display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer', color: '#E11D48', fontSize: '10px' }}>
                    <Trash2 size={12} /> Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
