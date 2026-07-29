'use client';

import { Search, ChevronDown, ChevronLeft, ChevronRight, Plus, Calendar, Settings, HelpCircle } from 'lucide-react';

// March 2026 starts on Sunday (day 0). 31 days.
// Grid: row 1 = Mar 1-7, row 2 = Mar 8-14, row 3 = Mar 15-21, row 4 = Mar 22-28, row 5 = Mar 29-31 + Apr 1-4
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const GRID: { day: number; currentMonth: boolean }[][] = [
  [{ day: 1, currentMonth: true }, { day: 2, currentMonth: true }, { day: 3, currentMonth: true }, { day: 4, currentMonth: true }, { day: 5, currentMonth: true }, { day: 6, currentMonth: true }, { day: 7, currentMonth: true }],
  [{ day: 8, currentMonth: true }, { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true }, { day: 13, currentMonth: true }, { day: 14, currentMonth: true }],
  [{ day: 15, currentMonth: true }, { day: 16, currentMonth: true }, { day: 17, currentMonth: true }, { day: 18, currentMonth: true }, { day: 19, currentMonth: true }, { day: 20, currentMonth: true }, { day: 21, currentMonth: true }],
  [{ day: 22, currentMonth: true }, { day: 23, currentMonth: true }, { day: 24, currentMonth: true }, { day: 25, currentMonth: true }, { day: 26, currentMonth: true }, { day: 27, currentMonth: true }, { day: 28, currentMonth: true }],
  [{ day: 29, currentMonth: true }, { day: 30, currentMonth: true }, { day: 31, currentMonth: true }, { day: 1, currentMonth: false }, { day: 2, currentMonth: false }, { day: 3, currentMonth: false }, { day: 4, currentMonth: false }],
];

const TODAY = 17; // March 17

// Events placed on specific days: { day, title, color }
const EVENTS: Record<number, { title: string; color: string }[]> = {
  3: [{ title: 'Product Demo', color: '#7C3AED' }],
  5: [{ title: 'Dentist Appt', color: '#0E9384' }],
  9: [{ title: 'Team Standup', color: '#F59E0B' }],
  12: [{ title: 'Client Call', color: '#7C3AED' }],
  16: [{ title: 'Team Standup', color: '#F59E0B' }],
  17: [{ title: 'Design Review', color: '#7C3AED' }],
  20: [{ title: 'Birthday — Alex', color: '#0E9384' }],
  23: [{ title: 'Team Standup', color: '#F59E0B' }],
  25: [{ title: 'Q3 Planning', color: '#F59E0B' }, { title: 'Client Call', color: '#7C3AED' }],
  28: [{ title: 'Design Review', color: '#7C3AED' }],
};

const SIDEBAR_NAV = [
  { label: 'Month', active: true },
  { label: 'Week', active: false },
  { label: 'Day', active: false },
  { label: 'Schedule', active: false },
];

const CALENDARS = [
  { label: 'Work', color: '#7C3AED' },
  { label: 'Personal', color: '#0E9384' },
  { label: 'Team Events', color: '#F59E0B' },
];

export function KalenderPreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: '120px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        {/* Create Event button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9px', fontWeight: 600, marginBottom: '14px', width: 'fit-content' }}>
          <Plus size={11} />
          <span>Create Event</span>
        </div>

        {/* Mini month label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 8px', background: '#f9f9f9', borderRadius: '8px', marginBottom: '12px' }}>
          <Calendar size={11} style={{ color: '#7C3AED' }} />
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#555' }}>March 2026</span>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: 'auto' }}>
          {SIDEBAR_NAV.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px' }}>
              <Calendar size={11} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* My Calendars */}
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
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          {/* Month label + nav arrows */}
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

        {/* Calendar grid */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '6px 8px' }}>
          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0' }}>
            {DAYS.map((d) => (
              <div key={d} style={{ textAlign: 'center', fontSize: '8.5px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 0', borderBottom: '1px solid #f0f0f0' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Date rows */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: `repeat(${GRID.length}, 1fr)`, gap: '0' }}>
            {GRID.flat().map((cell, i) => {
              const events = cell.currentMonth ? (EVENTS[cell.day] || []) : [];
              const isToday = cell.currentMonth && cell.day === TODAY;
              return (
                <div key={i} style={{ borderRight: '1px solid #f5f5f5', borderBottom: '1px solid #f5f5f5', padding: '3px 4px', display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden', minHeight: '0' }}>
                  {/* Date number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <span style={{
                      fontSize: '9px',
                      fontWeight: isToday ? 700 : 500,
                      color: !cell.currentMonth ? '#ccc' : isToday ? '#fff' : '#555',
                      background: isToday ? '#7C3AED' : 'transparent',
                      borderRadius: '50%',
                      width: isToday ? '18px' : 'auto',
                      height: isToday ? '18px' : 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {cell.day}
                    </span>
                  </div>
                  {/* Event chips */}
                  {events.slice(0, 2).map((ev, ei) => (
                    <div key={ei} style={{ fontSize: '7px', fontWeight: 600, color: '#fff', background: ev.color, borderRadius: '3px', padding: '1px 4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {ev.title}
                    </div>
                  ))}
                  {events.length > 2 && (
                    <div style={{ fontSize: '6.5px', color: '#999' }}>+{events.length - 2} more</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
