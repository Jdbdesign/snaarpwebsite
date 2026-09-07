'use client';

import { useState, useEffect } from 'react';
import { LayoutGrid, Menu, User, CalendarCheck, CalendarDays, Clock, Target, GraduationCap, Bell, Settings, Users, Plane, Umbrella, Thermometer, Home, Cake, CalendarClock, HeartPulse, ListChecks, ClipboardList, Gift, ChevronRight, ChevronDown, ChevronLeft, Bell as BellIcon, Play, LogIn, LogOut, TrendingUp, MapPin, X, Plus, Square } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV_WORKSPACE = [
  { label: 'Dashboard', Icon: LayoutGrid },
  { label: 'My Space', Icon: User, chevron: true },
  { label: 'Attendance', Icon: CalendarCheck },
  { label: 'Leave', Icon: CalendarDays },
  { label: 'Time Tracker', Icon: Clock },
  { label: 'Goals', Icon: Target },
  { label: 'Learning Hub', Icon: GraduationCap },
  { label: 'Notifications', Icon: Bell },
];

const HIGHLIGHTS = [
  { label: 'People', value: '0', Icon: Users, color: '#7C3AED' },
  { label: 'Holiday', value: '0', Icon: Plane, color: '#2563eb' },
  { label: 'On other leave', value: '0', Icon: Umbrella, color: '#0d9488' },
  { label: 'Off sick', value: '0', Icon: Thermometer, color: '#3b82f6' },
  { label: 'Working from home', value: '0', Icon: Home, color: '#059669' },
  { label: 'Birthdays', value: '0', Icon: Cake, color: '#ec4899' },
];

const PROFILE_CARDS = [
  { tag: 'MY LEAVE', Icon: CalendarDays, iconColor: '#2563eb', value: '0 days left', sub: '0 days requested and 0 days booked', btn: 'Request leave' },
  { tag: 'MY SICKNESS', Icon: HeartPulse, iconColor: '#0d9488', value: '0.0 days taken', sub: 'In the last 12 months over 0 absences', subColor: '#dc2626', btn: 'Report new sickness' },
  { tag: 'OBJECTIVES', Icon: Target, iconColor: '#7C3AED', value: '0 objectives', sub: 'to be completed', btn: 'Add new objective' },
  { tag: 'DELIVERABLES', Icon: ListChecks, iconColor: '#059669', value: '0 deliverables', sub: 'to be completed', btn: 'Add a deliverable' },
];

const REPORTEES = [
  { initials: 'AU', name: 'Abisola User', color: '#2563eb' },
  { initials: 'AU', name: 'Admin User', color: '#7C3AED' },
  { initials: 'VU', name: 'Victor User', color: '#0d9488' },
  { initials: 'YU', name: 'Yinka User', color: '#ec4899' },
];

const MYSPACE_TABS = ['Activities', 'Feeds', 'Profile', 'Approvals', 'Leave', 'Attendance', 'Time Logs', 'Timesheets'];

const CAL_WEEKS = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

export function WorkforcePreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [tour, setTour] = useState(1); // 1=welcome,2=MySpace,3=Resignation,4=Attendance,0=done
  const [todoTab, setTodoTab] = useState('Data to-do\u2019s');
  const [myspaceOpen, setMyspaceOpen] = useState(false);
  const [myspaceTab, setMyspaceTab] = useState('Activities');
  const [attendanceTab, setAttendanceTab] = useState('Calendar');
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [elapsed, setElapsed] = useState(0); // seconds
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [showDayDetail, setShowDayDetail] = useState(false);
  const ATT_LOCATION = 'Yaba, Lagos State, Nigeria';

  useEffect(() => {
    if (!checkedIn || checkoutDone) return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [checkedIn, checkoutDone]);

  function fmtElapsed(total: number) {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const p = (n: number) => String(n).padStart(2, '0');
    return `${p(h)} : ${p(m)} : ${p(s)}`;
  }
  function nowLabel() {
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes();
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, '0')} ${ap}`;
  }
  function doCheckIn() {
    setCheckedIn(true);
    setCheckoutDone(false);
    setElapsed(0);
    setCheckInTime(nowLabel());
  }
  function doCheckOut() {
    setCheckoutDone(true);
    setCheckOutTime(nowLabel());
  }

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f4f5f7', position: 'relative' }}>
      {/* Walkthrough — Step 1: welcome card modal */}
      {tour === 1 && activeNav === 'Dashboard' && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Welcome to Workforce"
            subtitle="Your HR home base — track attendance, book leave, set goals, and manage your team in one place."
            onNext={() => { setActiveNav('My Space'); setMyspaceOpen(true); setTour(2); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 2: My Space overview */}
      {tour === 2 && activeNav === 'My Space' && (
        <div style={{ position: 'absolute', top: '150px', left: '210px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Your space"
            subtitle="See your profile, attendance timer, reportees, activity, and payslips all in one place. Click Next."
            onNext={() => { setActiveNav('Resignation'); setMyspaceOpen(true); setTour(3); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 3: Resignation */}
      {tour === 3 && activeNav === 'Resignation' && (
        <div style={{ position: 'absolute', top: '150px', left: '210px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Resign anytime"
            subtitle="Need to move on? Submit a resignation request to HR with your reason and last working day. Click Next."
            onNext={() => { setActiveNav('Attendance'); setMyspaceOpen(false); setTour(4); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 4: Attendance — start check-in */}
      {tour === 4 && activeNav === 'Attendance' && !checkedIn && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-260px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Check in daily"
            subtitle="Click Check In to start your attendance timer for the day."
            onNext={() => { doCheckIn(); setTour(5); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: '176px', flexShrink: 0, background: '#fff', borderRight: '1px solid #eef0f2', padding: '14px 12px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', paddingLeft: '2px' }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #6d28d9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={14} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#7C3AED', letterSpacing: '-0.02em' }}>Workforce</span>
          <Menu size={13} style={{ color: '#bbb', marginLeft: 'auto' }} />
        </div>

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', marginBottom: '8px', paddingLeft: '4px' }}>WORKSPACE</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {NAV_WORKSPACE.map((item) => {
            const isMySpace = item.label === 'My Space';
            const active = isMySpace ? (activeNav === 'My Space' || activeNav === 'Resignation') : activeNav === item.label;
            return (
              <div key={item.label}>
                <div
                  onClick={() => { if (isMySpace) { setMyspaceOpen((o) => !o); setActiveNav('My Space'); if (tour === 1) setTour(2); } else { setActiveNav(item.label); setMyspaceOpen(false); if (tour === 3 && item.label === 'Attendance') setTour(4); } }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer' }}
                >
                  <item.Icon size={14} />
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.chevron && (myspaceOpen ? <ChevronDown size={12} style={{ color: '#bbb' }} /> : <ChevronRight size={12} style={{ color: '#ccc' }} />)}
                </div>
                {isMySpace && myspaceOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', margin: '2px 0 2px 22px' }}>
                    {[{ l: 'Overview', nav: 'My Space' }, { l: 'Resignation', nav: 'Resignation' }].map((sub) => {
                      const subActive = activeNav === sub.nav;
                      return (
                        <div key={sub.l} onClick={() => { setActiveNav(sub.nav); if (tour === 2 && sub.nav === 'Resignation') setTour(3); }} style={{ padding: '7px 10px', borderRadius: '8px', background: subActive ? '#EDE9FE' : 'transparent', color: subActive ? '#7C3AED' : '#777', fontWeight: subActive ? 600 : 500, fontSize: '10.5px', cursor: 'pointer' }}>{sub.l}</div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', margin: '12px 0 8px', paddingLeft: '4px' }}>INSIGHTS</div>
          <div onClick={() => { setActiveNav('Settings'); setMyspaceOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '11px', cursor: 'pointer' }}>
            <Settings size={14} /> <span>Settings</span>
          </div>
        </div>

        {/* User */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 8px', borderTop: '1px solid #eef0f2', marginTop: 'auto' }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>M</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>marcus.reed@snaarp.com</div>
            <div style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.04em', color: '#aaa' }}>EMPLOYEE</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 20px', borderBottom: '1px solid #eef0f2', background: '#fff' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{activeNav === 'Resignation' ? 'My Space' : activeNav}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: 'auto', color: '#aaa' }}>
            <BellIcon size={15} />
            <LayoutGrid size={15} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8.5px', fontWeight: 700 }}>M</div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1a1a1a' }}>marcus.reed@snaarp.com</div>
                <div style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.04em', color: '#aaa' }}>EMPLOYEE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content — Dashboard */}
        {activeNav === 'Dashboard' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Greeting banner */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px 22px', marginBottom: '18px' }}>
            <div style={{ fontSize: '19px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>Good afternoon, Marcus</div>
            <div style={{ fontSize: '11px', color: '#888' }}>Monday, 7 September 2026</div>
          </div>

          {/* Company highlights */}
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Company highlights</div>
          <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '12px' }}>Take a look at your key metrics and <span style={{ color: '#7C3AED' }}>click</span> through if you need any further information</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginBottom: '20px' }}>
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h.Icon size={16} style={{ color: h.color, marginBottom: '8px' }} />
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>{h.value}</div>
                <div style={{ fontSize: '8.5px', color: '#999', marginTop: '2px' }}>{h.label}</div>
              </div>
            ))}
          </div>

          {/* Your profile */}
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Your profile</div>
          <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '12px' }}>Take a look at all your details, tasks and requests</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '20px' }}>
            {PROFILE_CARDS.map((c) => (
              <div key={c.tag} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#999', marginBottom: '10px' }}>
                  <c.Icon size={12} style={{ color: c.iconColor }} /> {c.tag}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>{c.value}</div>
                <div style={{ fontSize: '9px', color: c.subColor || '#999', lineHeight: 1.4, marginBottom: '12px', minHeight: '26px' }}>{c.sub}</div>
                <button style={{ width: '100%', padding: '8px', borderRadius: '8px', background: '#2563eb', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>{c.btn}</button>
              </div>
            ))}
          </div>

          {/* To-Do's + Next 7 days */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {/* To-Do's */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>To-Do&apos;s</div>
              <div style={{ fontSize: '10px', color: '#888', marginBottom: '12px' }}>Manage and maintain your company through this panel</div>
              <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #f0f0f0', marginBottom: '20px' }}>
                {['Data to\u2019do\u2019s', 'Leave', 'Sicknesses'].map((t, i) => {
                  const label = i === 0 ? 'Data to-do\u2019s' : t;
                  const active = todoTab === label;
                  return (
                    <div key={label} onClick={() => setTodoTab(label)} style={{ padding: '4px 2px 10px', fontSize: '10.5px', fontWeight: 600, color: active ? '#2563eb' : '#999', borderBottom: active ? '2px solid #2563eb' : '2px solid transparent', cursor: 'pointer' }}>{label}</div>
                  );
                })}
              </div>
              <div style={{ textAlign: 'center', padding: '20px 0', fontSize: '10.5px', color: '#aaa' }}>No items to action</div>
            </div>

            {/* Next 7 days */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Next 7 days</div>
              <div style={{ fontSize: '10px', color: '#888', marginBottom: '18px' }}>You have <b style={{ color: '#1a1a1a' }}>0</b> events and <b style={{ color: '#1a1a1a' }}>0</b> other items.</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '14px 0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#f4f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <ClipboardList size={22} style={{ color: '#cfd3da' }} />
                </div>
                <div style={{ fontSize: '10px', color: '#e08a2b' }}>It&apos;s so quiet! You have nothing coming up within 7 days</div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Scrollable content — My Space / Overview */}
        {activeNav === 'My Space' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Top row: profile + attendance timer + reportees */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            {/* Profile */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8f0fe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={18} /></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Marcus</div>
                  <div style={{ fontSize: '9px', color: '#888', marginTop: '3px' }}>Team Member</div>
                  <div style={{ fontSize: '9px', color: '#888' }}>General</div>
                </div>
              </div>
            </div>
            {/* Today's attendance */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '10px' }}>TODAY&apos;S ATTENDANCE</div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.06em', marginBottom: '10px' }}>00 : 00 : 00</div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 16px', borderRadius: '8px', background: '#16a34a', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Play size={11} /> Start</button>
              <div style={{ fontSize: '8.5px', color: '#aaa', marginTop: '9px' }}>Click Start to begin your attendance timer.</div>
            </div>
            {/* Reportees */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '12px' }}>REPORTEES</div>
              {REPORTEES.map((r) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: r.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, flexShrink: 0 }}>{r.initials}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>{r.name}</div>
                    <div style={{ fontSize: '8px', color: '#aaa' }}>Yet to check-in</div>
                  </div>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#e5e5e5', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Metric strip */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            {[
              { Icon: CalendarDays, color: '#2563eb', value: '\u2014', label: 'Days worked this month' },
              { Icon: Clock, color: '#0d9488', value: '\u2014', label: 'Hours this month' },
              { Icon: TrendingUp, color: '#7C3AED', value: '0', label: 'Leave days remaining' },
            ].map((m) => (
              <div key={m.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <m.Icon size={16} style={{ color: m.color }} />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>{m.value}</div>
                  <div style={{ fontSize: '9px', color: '#7C3AED' }}>{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px', marginBottom: '14px' }}>
            <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '12px' }}>ACTIVITY</div>
            <div style={{ display: 'flex', gap: '14px', borderBottom: '1px solid #f0f0f0', marginBottom: '14px', overflowX: 'auto' }}>
              {MYSPACE_TABS.map((t) => {
                const active = myspaceTab === t;
                return (
                  <div key={t} onClick={() => setMyspaceTab(t)} style={{ padding: '2px 2px 9px', fontSize: '10px', fontWeight: 600, color: active ? '#2563eb' : '#999', borderBottom: active ? '2px solid #2563eb' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>{t}</div>
                );
              })}
            </div>
            {[
              { text: 'Checked in at 9:00 AM', when: 'Today' },
              { text: 'Leave request approved', when: 'Yesterday' },
            ].map((a) => (
              <div key={a.text} style={{ display: 'flex', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid #f8f8f8', fontSize: '10px' }}>
                <span style={{ color: '#555' }}>{a.text}</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#aaa' }}>{a.when}</span>
              </div>
            ))}
          </div>

          {/* My payslips */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '10px' }}><ClipboardList size={11} /> MY PAYSLIPS</div>
            <div style={{ fontSize: '10px', color: '#e08a2b' }}>No payslips available yet.</div>
          </div>
        </div>
        )}

        {/* Scrollable content — Resignation */}
        {activeNav === 'Resignation' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '440px' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>Submit Resignation</div>
            <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '16px' }}>Submit your resignation request to HR</div>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px 20px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Reason for Resignation <span style={{ color: '#ef4444' }}>*</span></div>
              <textarea placeholder="Please provide your reason for leaving..." rows={4} style={{ width: '100%', padding: '11px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit', marginBottom: '16px' }} />
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Proposed Last Working Day <span style={{ color: '#ef4444' }}>*</span></div>
              <input type="date" style={{ width: '100%', padding: '10px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', color: '#888' }} />
              <div style={{ fontSize: '8.5px', color: '#7C3AED', marginTop: '7px' }}>Must be at least 2 weeks from today. Your notice period may vary based on company policy.</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <div style={{ padding: '9px 16px', borderRadius: '8px', background: '#9ca3af', color: '#fff', fontSize: '10.5px', fontWeight: 600 }}>Submit Resignation</div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Scrollable content — Attendance */}
        {activeNav === 'Attendance' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '12px' }}>Attendance</div>
          {/* Check-in / timer banner */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '20px', textAlign: 'center', marginBottom: '16px' }}>
            {!checkedIn ? (
              <>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '12px' }}>You have not checked in today.</div>
                <button onClick={() => { doCheckIn(); if (tour === 4) setTour(5); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', background: '#16a34a', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><LogIn size={13} /> Check In</button>
              </>
            ) : (
              <>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.08em', marginBottom: '12px', fontVariantNumeric: 'tabular-nums' }}>{fmtElapsed(elapsed)}</div>
                {!checkoutDone && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '8px', background: '#fca5a5', color: '#fff', fontSize: '10px', fontWeight: 600, marginBottom: '12px', cursor: 'pointer' }} onClick={() => { doCheckOut(); if (tour === 5) setTour(6); }}><Square size={10} fill="#fff" /> Stop</div>
                )}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  {!checkoutDone ? (
                    <button onClick={() => { doCheckOut(); if (tour === 5) setTour(6); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', background: '#dc2626', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><LogOut size={13} /> Check Out</button>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', background: '#ECFDF5', color: '#059669', fontSize: '11px', fontWeight: 600 }}>Checked out at {checkOutTime}</div>
                  )}

                  {/* Coach mark — left of Check Out (arrow on the card's left edge, pointing at the button) */}
                  {tour === 5 && !checkoutDone && (
                    <div style={{ position: 'absolute', top: '-6px', right: '280px', zIndex: 9999 }}>
                      <Coachmark visible title="Clock out when done" subtitle="Your timer is running. Click Check Out to end your work session and record it." onNext={() => { doCheckOut(); setTour(6); }} top="0" left="0" arrowSide="left" arrowOffset="34px" buttonLabel="Next" />
                    </div>
                  )}
                </div>
                {!checkoutDone ? (
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '2px', marginTop: '14px', padding: '8px 14px', border: '1px solid #eef0f2', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#555' }}><MapPin size={11} style={{ color: '#7C3AED' }} /> {ATT_LOCATION}</div>
                    <span style={{ fontSize: '9px', color: '#2563eb', cursor: 'pointer' }}>View map</span>
                  </div>
                ) : (
                  <div style={{ marginTop: '14px' }}>
                    <button onClick={doCheckIn} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', background: '#16a34a', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><LogIn size={13} /> Check In</button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '18px', borderBottom: '1px solid #eef0f2', marginBottom: '16px', position: 'relative' }}>
            {[{ l: 'Calendar', Icon: CalendarDays }, { l: 'Timeline', Icon: Clock }, { l: 'Regularization', Icon: ClipboardList }].map((t) => {
              const active = attendanceTab === t.l;
              return (
                <div key={t.l} onClick={() => { setAttendanceTab(t.l); if (tour === 7 && t.l === 'Timeline') setTour(8); if (tour === 8 && t.l === 'Regularization') setTour(9); }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 2px 10px', fontSize: '10.5px', fontWeight: 600, color: active ? '#1a1a1a' : '#999', borderBottom: active ? '2px solid #1a1a1a' : '2px solid transparent', cursor: 'pointer' }}><t.Icon size={12} /> {t.l}</div>
              );
            })}

            {/* Coach mark — under Timeline tab */}
            {tour === 8 && (
              <div style={{ position: 'absolute', top: '34px', left: '78px', zIndex: 9999 }}>
                <Coachmark visible title="See your day, hour by hour" subtitle="The Timeline shows a daily breakdown of presence, absences, weekends, and upcoming days. Click Next." onNext={() => { setAttendanceTab('Regularization'); setTour(9); }} top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next" />
              </div>
            )}
            {/* Coach mark — under Regularization tab (final) */}
            {tour === 9 && (
              <div style={{ position: 'absolute', top: '34px', left: '150px', zIndex: 9999 }}>
                <Coachmark visible title="Fix missed punches" subtitle="Use Regularization to request corrections for a missed check-in or check-out. That's Workforce!" onNext={() => { setTour(0); onEnd?.(); }} top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Done" />
              </div>
            )}
          </div>

          {attendanceTab === 'Calendar' && (
            <>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a', marginBottom: '10px' }}>Attendance Calendar</div>
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '14px' }}>
                  <ChevronLeft size={15} style={{ color: '#aaa', cursor: 'pointer' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>September 2026</span>
                  <ChevronRight size={15} style={{ color: '#888', cursor: 'pointer' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '6px' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                    <div key={d} style={{ textAlign: 'center', fontSize: '9px', fontWeight: 600, color: '#7C3AED', padding: '4px 0' }}>{d}</div>
                  ))}
                </div>
                {CAL_WEEKS.map((week, wi) => (
                  <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                    {week.map((day, di) => {
                      const isToday = day === 7;
                      const hasRecord = day === 7 && checkoutDone;
                      return (
                        <div key={di} onClick={() => { if (hasRecord) { setShowDayDetail(true); if (tour === 6) setTour(7); } }} style={{ position: 'relative', minHeight: '46px', border: isToday ? '1.5px solid #1a1a1a' : '1px solid #f4f4f6', borderRadius: '8px', padding: '6px', fontSize: '10px', fontWeight: isToday ? 700 : 500, color: day ? '#1a1a1a' : 'transparent', cursor: hasRecord ? 'pointer' : 'default' }}>
                          {day || '.'}
                          {hasRecord && <div style={{ fontSize: '7.5px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>{checkInTime}</div>}
                          {/* Coach mark — right of day 7 */}
                          {isToday && tour === 6 && (
                            <div style={{ position: 'absolute', top: '0', left: '108%', zIndex: 9999 }}>
                              <Coachmark visible title="Review that day" subtitle="Your check-in is logged on the calendar. Click this day to open your daily record. Click Next." onNext={() => { setShowDayDetail(true); setTour(7); }} top="0" left="0" arrowSide="left" arrowOffset="20px" buttonLabel="Next" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </>
          )}
          {attendanceTab === 'Timeline' && (
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Daily Breakdown</div>
              <div style={{ display: 'grid', gridTemplateColumns: '54px 1fr 60px', gap: '10px', alignItems: 'center', marginBottom: '6px', paddingLeft: '4px' }}>
                <span />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#bbb' }}><span>9AM</span><span>12PM</span><span>3PM</span><span>6PM</span></div>
                <span />
              </div>
              {[
                { d: '1 Tue', status: 'absent', color: '#dc2626' },
                { d: '2 Wed', status: 'absent', color: '#dc2626' },
                { d: '3 Thu', status: 'absent', color: '#dc2626' },
                { d: '4 Fri', status: 'absent', color: '#dc2626' },
                { d: '5 Sat', status: 'weekend', color: '#aaa' },
                { d: '6 Sun', status: 'weekend', color: '#aaa' },
                { d: '7 Mon', status: 'present', color: '#059669' },
                { d: '8 Tue', status: 'upcoming', color: '#f59e0b' },
                { d: '9 Wed', status: 'upcoming', color: '#f59e0b' },
                { d: '10 Thu', status: 'upcoming', color: '#f59e0b' },
                { d: '11 Fri', status: 'upcoming', color: '#f59e0b' },
                { d: '12 Sat', status: 'weekend', color: '#aaa' },
              ].map((row) => (
                <div key={row.d} style={{ display: 'grid', gridTemplateColumns: '54px 1fr 60px', gap: '10px', alignItems: 'center', marginBottom: '7px' }}>
                  <span style={{ fontSize: '9px', color: '#666', fontWeight: 500 }}>{row.d}</span>
                  <div style={{ height: '10px', borderRadius: '5px', background: '#f1f2f4', position: 'relative' }}>
                    {row.status === 'present' && <div style={{ position: 'absolute', left: '2%', width: '68%', top: 0, bottom: 0, borderRadius: '5px', background: 'linear-gradient(90deg, #34d399, #10b981)' }} />}
                  </div>
                  <span style={{ fontSize: '8.5px', fontWeight: 600, color: row.color, textAlign: 'right' }}>{row.status}</span>
                </div>
              ))}
            </div>
          )}
          {attendanceTab === 'Regularization' && (
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px 18px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Regularization Request</div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Date</div>
              <input placeholder="Attendance ID" style={{ width: '100%', padding: '9px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', marginBottom: '14px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Proposed Check-in Time</div>
                  <input type="datetime-local" style={{ width: '100%', padding: '9px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10px', outline: 'none', boxSizing: 'border-box', color: '#888' }} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Proposed Check-out Time</div>
                  <input type="datetime-local" style={{ width: '100%', padding: '9px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10px', outline: 'none', boxSizing: 'border-box', color: '#888' }} />
                </div>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Reason</div>
              <textarea placeholder="Explain why you need to regularize this attendance..." rows={3} style={{ width: '100%', padding: '11px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit', marginBottom: '14px' }} />
              <button style={{ padding: '8px 16px', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Submit Request</button>
              <div style={{ textAlign: 'center', fontSize: '10px', color: '#aaa', marginTop: '20px' }}>No regularization requests found.</div>
            </div>
          )}

          {/* Day detail modal */}
          {showDayDetail && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 200 }}>
              <div style={{ position: 'relative', width: '340px', background: '#fff', borderRadius: '14px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.35)', padding: '16px 18px' }}>
                <div onClick={() => setShowDayDetail(false)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Monday, Sep 7, 2026</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Clock size={12} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669' }}>{checkInTime}</span>
                  <span style={{ fontSize: '9.5px', color: '#888' }}>Check In</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px', paddingLeft: '20px', marginBottom: '10px' }}>
                  <MapPin size={11} style={{ color: '#7C3AED', marginTop: '1px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '9.5px', color: '#555' }}>{ATT_LOCATION}</div>
                    <div style={{ fontSize: '9px', color: '#2563eb', cursor: 'pointer' }}>View map</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Clock size={12} style={{ color: '#dc2626' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#dc2626' }}>{checkOutTime}</span>
                  <span style={{ fontSize: '9.5px', color: '#888' }}>Check Out</span>
                </div>

                <div style={{ background: '#f7f7f9', borderRadius: '8px', padding: '9px 11px', fontSize: '9px', color: '#666', marginBottom: '12px' }}>
                  First Check-in: <b style={{ color: '#1a1a1a' }}>{checkInTime}</b> &nbsp; Last Check-Out: <b style={{ color: '#1a1a1a' }}>{checkOutTime}</b> &nbsp; Total: <b style={{ color: '#1a1a1a' }}>0h 1m</b>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}><Plus size={12} /> Add Check-in / Check-out Entry</div>
              </div>

              {/* Coach mark — beside detail modal */}
              {tour === 7 && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(190px, -70px)', zIndex: 9999 }}>
                  <Coachmark visible title="Your daily record" subtitle="See exact check-in/out times, location, and total hours for the day. Click Next to view the Timeline." onNext={() => { setShowDayDetail(false); setAttendanceTab('Timeline'); setTour(8); }} top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next" />
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {/* Placeholder for other nav items */}
        {activeNav !== 'Dashboard' && activeNav !== 'My Space' && activeNav !== 'Resignation' && activeNav !== 'Attendance' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#bbb', gap: '10px' }}>
          <Users size={30} style={{ color: '#d5d5d5' }} />
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#888' }}>{activeNav}</div>
        </div>
        )}
      </div>
    </div>
  );
}
