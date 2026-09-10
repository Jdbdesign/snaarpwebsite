'use client';

import { useState } from 'react';
import { LayoutGrid, Menu, Search, BarChart3, TrendingUp, CheckSquare, Users, Mail, Package, Plug, Sparkles, LineChart, FileText, ClipboardList, Bell, Settings, ChevronRight, ChevronDown, ChevronsLeft, ArrowRight, UsersRound, GitBranch, Upload, Share2, UserPlus, X, MoreHorizontal, Plus, ChartPie, Circle, Filter, Gauge, Trophy, Flame, List, Grid3x3, Trash2, Target, AlertTriangle, DollarSign, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV_TOP = [
  { label: 'Home', Icon: LayoutGrid },
  { label: 'Dashboards', Icon: BarChart3 },
];

const NAV_CRM = [
  { label: 'Sales', Icon: TrendingUp },
  { label: 'Activities', Icon: CheckSquare },
  { label: 'Contacts', Icon: Users },
  { label: 'Email', Icon: Mail },
  { label: 'Inventory', Icon: Package },
  { label: 'Integrations', Icon: Plug },
  { label: 'AI & Journeys', Icon: Sparkles },
];

const NAV_MANAGE = [
  { label: 'Analytics', Icon: LineChart },
  { label: 'Reports', Icon: FileText },
  { label: 'My Requests', Icon: ClipboardList },
];

const SETUP_STEPS = [
  { label: 'Invite your team', Icon: UsersRound, active: true },
  { label: 'Configure your deals pipeline', Icon: GitBranch, active: false },
  { label: 'Connect your email account', Icon: Mail, active: false },
  { label: 'Migrate your existing data', Icon: Upload, active: false },
  { label: 'Set up integrations', Icon: Share2, active: false },
];

const MEMBERS = [
  { initials: 'AM', name: 'Ada Martins', email: 'ada.martins@snaarp.com', color: '#7C3AED', role: 'Admin', status: 'Active' },
  { initials: 'TB', name: 'Tunde Bello', email: 'tunde.bello@snaarp.com', color: '#2563eb', role: 'Sales Manager', status: 'Active' },
  { initials: 'CN', name: 'Chidi Nwosu', email: 'chidi.nwosu@snaarp.com', color: '#0d9488', role: 'Sales Rep', status: 'Active' },
  { initials: 'FO', name: 'Funke Ola', email: 'funke.ola@snaarp.com', color: '#ec4899', role: 'Support', status: 'Active' },
  { initials: 'KE', name: 'Kemi Eze', email: 'kemi.eze@snaarp.com', color: '#f59e0b', role: 'Marketing', status: 'Active' },
  { initials: 'SO', name: 'Sam Obi', email: 'sam.obi@snaarp.com', color: '#6366f1', role: 'Sales Rep', status: 'Pending' },
  { initials: 'RA', name: 'Rita Abah', email: 'rita.abah@snaarp.com', color: '#64748b', role: 'Viewer', status: 'Revoked' },
];

const WIDGET_TYPES = [
  { name: 'KPI Card', desc: 'Single metric with comparison', Icon: TrendingUp, color: '#7C3AED' },
  { name: 'Bar Chart', desc: 'Grouped data visualization', Icon: BarChart3, color: '#2563eb' },
  { name: 'Line Chart', desc: 'Trending data over time', Icon: LineChart, color: '#059669' },
  { name: 'Pie Chart', desc: 'Distribution breakdown', Icon: ChartPie, color: '#0d9488' },
  { name: 'Donut Chart', desc: 'Distribution with center label', Icon: Circle, color: '#ec4899' },
  { name: 'Funnel', desc: 'Conversion stages', Icon: Filter, color: '#f59e0b' },
  { name: 'Gauge', desc: 'Progress toward target', Icon: Gauge, color: '#6366f1' },
  { name: 'Table', desc: 'Tabular report data', Icon: FileText, color: '#2563eb' },
  { name: 'Leaderboard', desc: 'Ranked list', Icon: Trophy, color: '#f59e0b' },
  { name: 'Heatmap', desc: 'Activity by day & hour', Icon: Flame, color: '#dc2626' },
  { name: 'Custom Widget', desc: 'Admin-defined CRM or API widget', Icon: LayoutGrid, color: '#7C3AED' },
];

const STATS = [
  { label: 'CONTACTS', value: '0', sub: 'Total contacts' },
  { label: 'DEALS', value: '0', sub: 'Active deals' },
  { label: 'EMAILS', value: '0', sub: 'Sent this month' },
  { label: 'TASKS', value: '0', sub: 'Due today' },
];

const HEAT_HOURS = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];
const HEAT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const PIPELINE_STAGES = [
  { name: 'Qualified', color: '#2563eb', pct: 10 },
  { name: 'Meeting', color: '#7C3AED', pct: 25 },
  { name: 'Proposal', color: '#c026d3', pct: 50 },
  { name: 'Negotiation', color: '#d97706', pct: 75 },
  { name: 'Closed Won', color: '#059669', pct: 100 },
];

const FORECAST_TABS = [
  { name: 'Weighted Pipeline', Icon: TrendingUp },
  { name: 'By Rep', Icon: Users },
  { name: 'Targets', Icon: Target },
  { name: 'Pipeline Risk', Icon: AlertTriangle },
];

export function CrmPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('Home');
  const [tour, setTour] = useState(1); // 1=invite on setup, 2=team mgmt, 3=invite modal, 0=done
  const [showTeam, setShowTeam] = useState(false);
  const [teamTab, setTeamTab] = useState('Members');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [membersFilled, setMembersFilled] = useState(false);
  const [showDashboards, setShowDashboards] = useState(false);
  const [showNewDashModal, setShowNewDashModal] = useState(false);
  const [dashCreated, setDashCreated] = useState(false);
  const [showWidgetModal, setShowWidgetModal] = useState(false);
  const [widgetsAdded, setWidgetsAdded] = useState(false);
  const [showSalesProspects, setShowSalesProspects] = useState(false);
  const [salesExpanded, setSalesExpanded] = useState(false);
  const [showSalesForecasting, setShowSalesForecasting] = useState(false);
  const [forecastTab, setForecastTab] = useState('Weighted Pipeline');
  const [activitiesExpanded, setActivitiesExpanded] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showCalls, setShowCalls] = useState(false);
  const [contactsExpanded, setContactsExpanded] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);

  // Every top-level page is mutually exclusive — these helpers reset all of them
  // so the many independent sidebar entry points (Sales/Activities/Contacts are
  // each freely expandable/clickable outside the tour) can't leave two pages showing at once.
  const gotoHome = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(false); };
  const gotoTeam = () => { setShowTeam(true); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(false); };
  const gotoDashboards = () => { setShowTeam(false); setShowDashboards(true); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(false); };
  const gotoProspects = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(true); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(false); };
  const gotoForecasting = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(true); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(false); };
  const gotoTasks = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(true); setShowCalls(false); setShowContacts(false); };
  const gotoCalls = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(true); setShowContacts(false); };
  const gotoContacts = () => { setShowTeam(false); setShowDashboards(false); setShowSalesProspects(false); setShowSalesForecasting(false); setShowTasks(false); setShowAddTaskForm(false); setShowCalls(false); setShowContacts(true); };

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f4f5f7', position: 'relative' }}>
      {/* Sidebar */}
      <div style={{ width: '158px', flexShrink: 0, background: '#fff', borderRight: '1px solid #eef0f2', padding: '12px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', paddingLeft: '2px' }}>
          <Menu size={14} style={{ color: '#bbb' }} />
          <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={12} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' }}>CRM</span>
        </div>

        {NAV_TOP.map((item) => {
          const active = activeNav === item.label;
          return (
            <div key={item.label} onClick={() => { setActiveNav(item.label); if (item.label === 'Dashboards') { gotoDashboards(); } else if (item.label === 'Home') { gotoHome(); } }} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
              <item.Icon size={14} /> <span>{item.label}</span>
            </div>
          );
        })}

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', margin: '12px 0 6px', paddingLeft: '4px' }}>CRM</div>
        {NAV_CRM.map((item) => {
          if (item.label === 'Sales') {
            const salesOpen = salesExpanded || showSalesProspects || showSalesForecasting;
            return (
              <div key="Sales">
                <div onClick={() => setSalesExpanded((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: salesOpen ? '#f3efff' : 'transparent', color: salesOpen ? '#7C3AED' : '#555', fontWeight: salesOpen ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
                  <TrendingUp size={14} /> <span style={{ flex: 1 }}>Sales</span>
                  <ChevronDown size={11} style={{ color: '#ccc', transform: salesOpen ? 'none' : 'rotate(-90deg)' }} />
                </div>
                {salesOpen && (
                  <div style={{ marginBottom: '2px' }}>
                    <div onClick={() => { gotoProspects(); setActiveNav('Sales'); if (tour === 9) setTour(10); }} style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showSalesProspects ? 600 : 500, color: showSalesProspects ? '#7C3AED' : '#777', cursor: 'pointer' }}>Prospects</div>
                    <div onClick={() => { gotoForecasting(); setActiveNav('Sales'); if (tour === 10) setTour(11); }} style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showSalesForecasting ? 600 : 500, color: showSalesForecasting ? '#7C3AED' : '#777', cursor: 'pointer' }}>Forecasts</div>
                  </div>
                )}
              </div>
            );
          }
          if (item.label === 'Activities') {
            const activitiesOpen = activitiesExpanded || showTasks || showCalls;
            return (
              <div key="Activities">
                <div onClick={() => setActivitiesExpanded((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: activitiesOpen ? '#f3efff' : 'transparent', color: activitiesOpen ? '#7C3AED' : '#555', fontWeight: activitiesOpen ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
                  <CheckSquare size={14} /> <span style={{ flex: 1 }}>Activities</span>
                  <ChevronDown size={11} style={{ color: '#ccc', transform: activitiesOpen ? 'none' : 'rotate(-90deg)' }} />
                </div>
                {activitiesOpen && (
                  <div style={{ marginBottom: '2px' }}>
                    <div onClick={() => { gotoTasks(); setActiveNav('Activities'); if (tour === 11) setTour(12); }} style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showTasks ? 600 : 500, color: showTasks ? '#7C3AED' : '#777', cursor: 'pointer' }}>Tasks</div>
                    <div style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Calendar</div>
                    <div onClick={() => { gotoCalls(); setActiveNav('Activities'); if (tour === 13) setTour(14); }} style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showCalls ? 600 : 500, color: showCalls ? '#7C3AED' : '#777', cursor: 'pointer' }}>Calls</div>
                  </div>
                )}
              </div>
            );
          }
          if (item.label === 'Contacts') {
            const contactsOpen = contactsExpanded || showContacts;
            return (
              <div key="Contacts">
                <div onClick={() => setContactsExpanded((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: contactsOpen ? '#f3efff' : 'transparent', color: contactsOpen ? '#7C3AED' : '#555', fontWeight: contactsOpen ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
                  <Users size={14} /> <span style={{ flex: 1 }}>Contacts</span>
                  <ChevronDown size={11} style={{ color: '#ccc', transform: contactsOpen ? 'none' : 'rotate(-90deg)' }} />
                </div>
                {contactsOpen && (
                  <div style={{ marginBottom: '2px' }}>
                    <div onClick={() => { gotoContacts(); setActiveNav('Contacts'); if (tour === 14) setTour(15); }} style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showContacts ? 600 : 500, color: showContacts ? '#7C3AED' : '#777', cursor: 'pointer' }}>All Contacts</div>
                    <div style={{ padding: '7px 10px 7px 32px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Companies</div>
                  </div>
                )}
              </div>
            );
          }
          const active = activeNav === item.label;
          return (
            <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
              <item.Icon size={14} /> <span style={{ flex: 1 }}>{item.label}</span>
              <ChevronRight size={11} style={{ color: '#ccc' }} />
            </div>
          );
        })}

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: '#bbb', margin: '12px 0 6px', paddingLeft: '4px' }}>MANAGE</div>
        {NAV_MANAGE.map((item) => {
          const active = activeNav === item.label;
          return (
            <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
              <item.Icon size={14} /> <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 18px', borderBottom: '1px solid #eef0f2', background: '#fff' }}>
          <Menu size={15} style={{ color: '#888' }} />
          <div style={{ flex: 1, maxWidth: '520px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: '#f4f5f7', borderRadius: '18px', color: '#aaa', fontSize: '11px' }}>
            <Search size={13} /> Search contacts...
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: 'auto', color: '#aaa' }}>
            <Settings size={15} />
            <Bell size={15} />
            <LayoutGrid size={15} />
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>Y</div>
          </div>
        </div>

        {/* Scrollable content — Set up your CRM */}
        {!showTeam && !showDashboards && !showSalesProspects && !showSalesForecasting && !showTasks && !showCalls && !showContacts && (
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Set up your CRM</div>
          <div style={{ fontSize: '11px', color: '#888', marginBottom: '16px' }}>Make your CRM smarter and more interactive</div>

          {/* Setup panel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            {/* Left: checklist */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontSize: '9px', fontWeight: 600, color: '#888' }}>Setup progress</span>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>0/5</span>
              </div>
              <div style={{ height: '5px', borderRadius: '4px', background: '#f0eef8', overflow: 'hidden', marginBottom: '14px' }}>
                <div style={{ height: '100%', width: '2%', borderRadius: '4px', background: 'linear-gradient(90deg, #7C3AED, #a855f7)' }} />
              </div>
              {SETUP_STEPS.map((s) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px', borderRadius: '10px', background: s.active ? '#f3efff' : 'transparent', marginBottom: '4px', cursor: 'pointer' }}>
                  <s.Icon size={14} style={{ color: s.active ? '#7C3AED' : '#888' }} />
                  <span style={{ flex: 1, fontSize: '10.5px', fontWeight: s.active ? 600 : 500, color: s.active ? '#7C3AED' : '#555' }}>{s.label}</span>
                  {s.active && <ArrowRight size={13} style={{ color: '#7C3AED' }} />}
                </div>
              ))}
            </div>

            {/* Right: invite panel */}
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#f0eef8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <UsersRound size={22} style={{ color: '#7C3AED' }} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Invite your team</div>
              <div style={{ fontSize: '10px', color: '#888', lineHeight: 1.5, maxWidth: '260px', marginBottom: '18px' }}>Stay connected and collaborate with your team members to share sales updates from one platform.</div>
              <div style={{ position: 'relative' }}>
                <button onClick={() => { setShowTeam(true); if (tour === 1) setTour(2); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 20px', borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><UserPlus size={13} /> Invite users</button>

                {/* Coach mark — left of Invite Users */}
                {tour === 1 && !showTeam && (
                  <div style={{ position: 'absolute', top: '-4px', right: '360px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="Invite your team"
                      subtitle="Get started by inviting teammates so you can collaborate on deals and contacts together."
                      onNext={() => { setShowTeam(true); setTour(2); }}
                      top="0" left="0" arrowSide="right" arrowOffset="20px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '8px' }}>{s.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
                <div style={{ fontSize: '9px', color: '#999', marginTop: '3px' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Scrollable content — Team Management */}
        {showTeam && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Team Management</div>
              <div style={{ fontSize: '11px', color: '#888' }}>Manage members, roles, and permissions</div>
            </div>
            <button onClick={() => { setShowInviteModal(true); if (tour === 2) setTour(3); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}><UserPlus size={13} /> Invite User</button>
          </div>

          {/* Coach mark — below the Invite User button, anchored by left edge so it stays inside the card */}
          {tour === 2 && !showInviteModal && (
            <div style={{ position: 'absolute', top: '58px', left: '740px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Invite a new member"
                subtitle="Add teammates by email and assign their role. Manage members, pending invites, and roles here."
                onNext={() => { setShowInviteModal(true); setTour(3); }}
                top="0" left="0" arrowSide="top" arrowOffset="180px" buttonLabel="Next"
              />
            </div>
          )}

          {/* Tabs */}
          <div style={{ display: 'inline-flex', gap: '4px', padding: '3px', background: '#eef0f3', borderRadius: '10px', marginBottom: '14px' }}>
            {['Members', 'Pending invites', 'Roles'].map((t) => {
              const active = teamTab === t;
              return (
                <div key={t} onClick={() => setTeamTab(t)} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer', background: active ? '#fff' : 'transparent', color: active ? '#1a1a1a' : '#888', boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none' }}>{t}</div>
              );
            })}
          </div>

          {/* Table */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 0.8fr', gap: '8px', padding: '11px 18px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <span>User</span><span>Role</span><span>Status</span><span style={{ textAlign: 'right' }}>Actions</span>
            </div>
            {!membersFilled ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '48px 20px', color: '#bbb' }}>
                <Users size={28} style={{ color: '#d5d5d5', marginBottom: '10px' }} />
                <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>No team members yet</div>
                <div style={{ fontSize: '10px', color: '#aaa' }}>Invite your first teammate to get started.</div>
              </div>
            ) : (
              MEMBERS.map((m) => {
                const st = {
                  Active: { color: '#059669', bg: '#ECFDF5' },
                  Pending: { color: '#d97706', bg: '#FFFBEB' },
                  Revoked: { color: '#dc2626', bg: '#FEF2F2' },
                }[m.status] || { color: '#888', bg: '#f4f4f6' };
                return (
                  <div key={m.email} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 0.8fr', gap: '8px', padding: '11px 18px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '9px', minWidth: 0 }}>
                      <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: m.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8.5px', fontWeight: 700, flexShrink: 0 }}>{m.initials}</span>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</span>
                        <span style={{ display: 'block', fontSize: '8.5px', color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.email}</span>
                      </span>
                    </span>
                    <span style={{ color: '#555' }}>{m.role}</span>
                    <span>
                      <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}>{m.status}</span>
                    </span>
                    <span style={{ display: 'flex', justifyContent: 'flex-end', color: '#aaa' }}><MoreHorizontal size={15} style={{ cursor: 'pointer' }} /></span>
                  </div>
                );
              })
            )}
          </div>

          {/* Coach mark — over the members table (after it fills) */}
          {tour === 4 && (
            <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Your team members"
                subtitle="Track everyone's role and status here — active, pending, or revoked. Click Next to build a dashboard."
                onNext={() => { gotoDashboards(); setActiveNav('Dashboards'); setTour(5); }}
                top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
        )}

        {/* Scrollable content — Dashboards */}
        {showDashboards && (
        <div style={{ position: 'relative', flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Dashboards list column */}
          <div style={{ width: '170px', flexShrink: 0, borderRight: '1px solid #eef0f2', background: '#fff', padding: '12px 12px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <ChevronsLeft size={13} style={{ color: '#aaa' }} />
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', flex: 1 }}>Dashboards</span>
              <Plus size={13} style={{ color: '#7C3AED', cursor: 'pointer' }} onClick={() => setShowNewDashModal(true)} />
            </div>
            {dashCreated ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '8px', background: '#f3efff', color: '#7C3AED', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
                <LayoutGrid size={13} /> <span style={{ flex: 1 }}>Lead Contact</span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 6px', color: '#bbb' }}>
                <LayoutGrid size={22} style={{ color: '#d5d5d5', marginBottom: '10px' }} />
                <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '6px' }}>No dashboards yet</div>
                <div style={{ fontSize: '9.5px', color: '#7C3AED', cursor: 'pointer' }}>Create your first dashboard</div>
              </div>
            )}
          </div>

          {/* Main area */}
          {!dashCreated ? (
            /* Builder empty state */
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#f4f5f7' }}>
              <LayoutGrid size={30} style={{ color: '#cfd3da', marginBottom: '16px' }} />
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>Dashboard Builder</div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '18px' }}>Select a dashboard from the sidebar or create a new one</div>
              <div style={{ position: 'relative' }}>
                <button onClick={() => { setShowNewDashModal(true); if (tour === 5) setTour(6); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 20px', borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> New Dashboard</button>

                {/* Coach mark — right of New Dashboard */}
                {tour === 5 && !showNewDashModal && (
                  <div style={{ position: 'absolute', top: '-4px', left: '180px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="Build a dashboard"
                      subtitle="Create a new dashboard to visualize your sales, deals, and team activity. Click Next."
                      onNext={() => { setShowNewDashModal(true); setTour(6); }}
                      top="0" left="0" arrowSide="left" arrowOffset="20px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Created dashboard */
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f4f5f7' }}>
              {/* Dashboard header */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '12px 18px', background: '#fff', borderBottom: '1px solid #eef0f2' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a' }}>Lead Contact</div>
                  <div style={{ fontSize: '9px', color: '#999' }}>{widgetsAdded ? '9 widgets' : '0 widgets'} · Last updated 9/10/2026</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                  <button onClick={() => { setShowWidgetModal(true); if (tour === 7) setTour(8); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', borderRadius: '16px', background: '#fff', color: '#7C3AED', border: '1px solid #e0d9f5', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Widget</button>
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', borderRadius: '16px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><FileText size={12} /> Save</button>
                  <span style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
                  {widgetsAdded && <Trash2 size={13} style={{ color: '#dc2626', cursor: 'pointer' }} />}
                </div>

                {/* Coach mark — final-ish step, explains the live widgets */}
                {tour === 9 && (
                  <div style={{ position: 'absolute', top: '95px', left: '260px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="Your widgets, live"
                      subtitle="Every widget pulls real data straight from your pipeline — deals, activities, and contacts. Click Next to see your sales pipeline."
                      onNext={() => { gotoProspects(); setActiveNav('Sales'); setTour(10); }}
                      top="0" left="0" arrowSide="top" arrowOffset="40px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>

              {!widgetsAdded ? (
              /* Empty dashboard body */
              <div style={{ flex: 1, padding: '18px' }}>
                <div style={{ height: '100%', border: '1.5px dashed #dcdfe4', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#fff' }}>
                  <LayoutGrid size={30} style={{ color: '#cfd3da', marginBottom: '14px' }} />
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>Empty Dashboard</div>
                  <div style={{ fontSize: '11px', color: '#888', marginBottom: '18px' }}>Add widgets to build your custom dashboard</div>
                  <div style={{ position: 'relative' }}>
                    <button onClick={() => { setShowWidgetModal(true); if (tour === 7) setTour(8); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 20px', borderRadius: '20px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> Add First Widget</button>

                    {/* Coach mark — beside Add First Widget */}
                    {tour === 7 && !showWidgetModal && (
                      <div style={{ position: 'absolute', top: '-4px', left: '190px', zIndex: 9999 }}>
                        <Coachmark
                          visible
                          title="Add your first widget"
                          subtitle="Widgets are the building blocks of your dashboard. Click Next to browse the widget types."
                          onNext={() => { setShowWidgetModal(true); setTour(8); }}
                          top="0" left="0" arrowSide="left" arrowOffset="20px" buttonLabel="Next"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              ) : (
              /* Populated dashboard body — widget grid */
              <div style={{ flex: 1, padding: '18px', overflowY: 'auto', overflowX: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '14px' }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px' }}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '10px' }}>KPI CARD</div>
                      <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>0</div>
                      <div style={{ fontSize: '9px', color: '#999', marginTop: '3px' }}>KPI Card</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px', minHeight: '110px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>BAR CHART</div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c3c7ce', fontSize: '10px' }}>No data</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px', minHeight: '110px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>PIE CHART</div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c3c7ce', fontSize: '10px' }}>No data</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
                    <div style={{ padding: '14px 16px 8px', fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>TABLE</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '0 16px 8px', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid #f0f0f2' }}>
                      <span>Status</span><span>Value</span>
                    </div>
                    <div style={{ textAlign: 'center', color: '#c3c7ce', fontSize: '10px', padding: '22px 0' }}>No data</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px', minHeight: '110px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>BAR CHART</div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c3c7ce', fontSize: '10px' }}>No data</div>
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px 16px' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '12px' }}>HEATMAP</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '34px repeat(8, 1fr)', gap: '3px', alignItems: 'center' }}>
                    <div />
                    {HEAT_HOURS.map((h) => (
                      <div key={h} style={{ textAlign: 'center', fontSize: '8px', color: '#aaa' }}>{h}</div>
                    ))}
                    {HEAT_DAYS.flatMap((day) => [
                      <div key={`${day}-label`} style={{ fontSize: '8px', color: '#999' }}>{day}</div>,
                      ...HEAT_HOURS.map((_, i) => (
                        <div key={`${day}-${i}`} style={{ height: '16px', borderRadius: '3px', background: '#f0f1f3' }} />
                      )),
                    ])}
                  </div>
                </div>
              </div>
              )}
            </div>
          )}
        </div>
        )}

        {/* Scrollable content — Prospects (Sales pipeline) */}
        {showSalesProspects && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a' }}>Prospects</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '14px', background: '#f4f5f7', fontSize: '9.5px', fontWeight: 600, color: '#555' }}>Sales Pipeline <ChevronDown size={11} /></span>
              </div>
              <div style={{ fontSize: '10px', color: '#999', marginTop: '3px' }}>0 open prospects</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <div style={{ display: 'inline-flex', gap: '2px', padding: '3px', background: '#eef0f3', borderRadius: '10px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, background: '#fff', color: '#7C3AED', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}><LayoutGrid size={12} /> Kanban</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, color: '#888' }}><List size={12} /> List</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, color: '#888' }}><Grid3x3 size={12} /> Grid</span>
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', borderRadius: '18px', background: '#fff', color: '#555', border: '1px solid #e5e7eb', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Settings size={12} /> Pipelines</button>
              <button onClick={() => { if (tour === 10) { gotoForecasting(); setActiveNav('Sales'); setTour(11); } }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', borderRadius: '18px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Prospect</button>
            </div>
          </div>

          {/* Kanban columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginTop: '16px' }}>
            {PIPELINE_STAGES.map((stage) => (
              <div key={stage.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: stage.color }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a', flex: 1 }}>{stage.name}</span>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#aaa', background: '#f4f5f7', padding: '1px 7px', borderRadius: '10px' }}>0</span>
                </div>
                <div style={{ fontSize: '8.5px', color: '#aaa', marginBottom: '8px' }}>0 contacts · {stage.pct}%</div>
                <div style={{ flex: 1, minHeight: '220px', border: '1.5px dashed #dcdfe4', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '14px' }}>
                  <span style={{ fontSize: '9.5px', color: '#bbb', fontWeight: 600 }}>+ Add prospect</span>
                </div>
              </div>
            ))}
          </div>

          {/* Coach mark — hands off to Sales Forecasting */}
          {tour === 10 && (
            <div style={{ position: 'absolute', top: '90px', left: '560px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Your sales pipeline"
                subtitle="Track prospects from Qualified through Closed Won, right where your dashboard widgets get their data. Click Next to see forecasting."
                onNext={() => { gotoForecasting(); setActiveNav('Sales'); setTour(11); }}
                top="0" left="0" arrowSide="top" arrowOffset="40px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
        )}

        {/* Scrollable content — Sales Forecasting */}
        {showSalesForecasting && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Sales Forecasting</div>
          <div style={{ fontSize: '11px', color: '#888', marginBottom: '16px' }}>Weighted pipeline, per-rep forecasts, quota tracking and at-risk deals.</div>

          {/* Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #eef0f2', marginBottom: '18px' }}>
            {FORECAST_TABS.map((t) => {
              const active = forecastTab === t.name;
              return (
                <div key={t.name} onClick={() => setForecastTab(t.name)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 0 10px', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', color: active ? '#7C3AED' : '#888', fontSize: '11px', fontWeight: active ? 700 : 500, cursor: 'pointer' }}>
                  <t.Icon size={13} /> {t.name}
                </div>
              );
            })}
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '18px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '10px', fontWeight: 600, marginBottom: '10px' }}><DollarSign size={13} /> Total Pipeline</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>$0</div>
            </div>
            <div style={{ background: '#EEF2FF', borderRadius: '12px', border: '1px solid #e0d9f5', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#7C3AED', fontSize: '10px', fontWeight: 600, marginBottom: '10px' }}><TrendingUp size={13} /> Weighted Forecast</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#7C3AED' }}>$0</div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '10px', fontWeight: 600, marginBottom: '10px' }}><Target size={13} /> Quota Attainment</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>0%</div>
              <div style={{ fontSize: '9px', color: '#999', marginTop: '2px' }}>$0 of $0</div>
            </div>
          </div>

          {/* Pipeline by stage */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px', marginBottom: '18px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Pipeline by stage</div>
            {PIPELINE_STAGES.map((s) => (
              <div key={s.name} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#555', marginBottom: '5px' }}>
                  <span><span style={{ fontWeight: 700, color: '#1a1a1a' }}>{s.name}</span> · {s.pct}% · 0 deals</span>
                  <span style={{ fontWeight: 700, color: '#1a1a1a' }}>$0 → $0</span>
                </div>
                <div style={{ height: '7px', borderRadius: '4px', background: '#f0f1f3' }} />
              </div>
            ))}
            <div style={{ fontSize: '9px', color: '#aaa', marginTop: '4px' }}>Solid bar is the probability-weighted value; faded bar is total deal value.</div>
          </div>

          {/* Target vs actual */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Target vs actual</div>
            {['Month 1', 'Month 2'].map((m) => (
              <div key={m} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#555', marginBottom: '5px' }}>
                  <span>{m}</span>
                  <span style={{ fontWeight: 700, color: '#1a1a1a' }}>$0 / $0</span>
                </div>
                <div style={{ height: '7px', borderRadius: '4px', background: '#f0f1f3' }} />
              </div>
            ))}
          </div>

          {/* Coach mark — explains Sales Forecasting */}
          {tour === 11 && (
            <div style={{ position: 'absolute', top: '215px', left: '640px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Forecast your pipeline"
                subtitle="See weighted pipeline value, quota attainment, and stage-by-stage breakdowns — all calculated automatically from your deals. Click Next."
                onNext={() => { gotoTasks(); setActiveNav('Activities'); setTour(12); }}
                top="0" left="0" arrowSide="top" arrowOffset="40px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
        )}

        {/* Scrollable content — Tasks */}
        {showTasks && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Tasks</div>
              <div style={{ fontSize: '10px', color: '#999' }}>0 total tasks</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <div style={{ display: 'inline-flex', gap: '2px', padding: '3px', background: '#eef0f3', borderRadius: '10px' }}>
                <span style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, background: '#fff', color: '#7C3AED', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>List</span>
                <span style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, color: '#888' }}>Board</span>
              </div>
              <button onClick={() => { setShowAddTaskForm(true); if (tour === 12) setTour(13); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', borderRadius: '18px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Task</button>
            </div>
          </div>

          {/* Coach mark — directly under +Add Task, positioned against the page (not the button) so it can't be pushed past the right edge */}
          {tour === 12 && !showAddTaskForm && (
            <div style={{ position: 'absolute', top: '120px', left: '750px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Stay on top of tasks"
                subtitle="Create and track follow-ups, calls, and to-dos tied to your deals and contacts. Click Next to add one."
                onNext={() => { setShowAddTaskForm(true); setTour(13); }}
                top="0" left="0" arrowSide="top" arrowOffset="200px" buttonLabel="Next"
              />
            </div>
          )}

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: '#f4f5f7', borderRadius: '10px', color: '#aaa', fontSize: '10.5px' }}>
              <Search size={13} /> Search tasks...
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '9px 12px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', fontSize: '10px', color: '#555', fontWeight: 600 }}>All statuses <ChevronDown size={12} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '9px 12px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', fontSize: '10px', color: '#555', fontWeight: 600 }}>All priorities <ChevronDown size={12} /></div>
          </div>

          {/* Inline Add Task form */}
          {showAddTaskForm && (
            <div style={{ position: 'relative', background: '#fff', border: '1.5px solid #ded4fb', borderRadius: '12px', padding: '16px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input placeholder="Task title..." style={{ flex: 1, padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                <select style={{ padding: '9px 10px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10px', color: '#555' }}><option>Medium</option><option>Low</option><option>High</option></select>
                <input type="date" style={{ padding: '9px 10px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10px', color: '#888' }} />
              </div>
              <input placeholder="Description (optional)" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', marginBottom: '10px', boxSizing: 'border-box' }} />
              <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', marginBottom: '14px', boxSizing: 'border-box' }}><option>Link to contact (optional)</option></select>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button onClick={() => { gotoCalls(); setActiveNav('Activities'); if (tour === 13) setTour(14); }} style={{ padding: '9px 20px', background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Add Task</button>
                <span onClick={() => setShowAddTaskForm(false)} style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
              </div>

              {/* Coach mark — explains the Add Task form */}
              {tour === 13 && (
                <div style={{ position: 'absolute', top: '100%', left: '0', marginTop: '10px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="Add a task"
                    subtitle="Give it a title, priority, and due date — link it to a contact so it shows up on their record. Click Next."
                    onNext={() => { gotoCalls(); setActiveNav('Activities'); setTour(14); }}
                    top="0" left="0" arrowSide="top" arrowOffset="40px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          )}

          {/* Empty state */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '48px 20px', textAlign: 'center', color: '#aaa', fontSize: '11px' }}>
            No tasks yet. Create your first task!
          </div>
        </div>
        )}

        {/* Scrollable content — Calls */}
        {showCalls && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Calls</div>
              <div style={{ fontSize: '10px', color: '#999' }}>Make calls, send WhatsApp messages, and manage calling providers</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', borderRadius: '18px', background: '#fff', color: '#555', border: '1px solid #e5e7eb', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Settings size={12} /> Providers</button>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', borderRadius: '18px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Phone size={12} /> New Call</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '18px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><Phone size={15} style={{ color: '#059669' }} /></div>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Make a Call</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>Open dial pad and call via Telnyx</div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#ECFEFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><MessageCircle size={15} style={{ color: '#0d9488' }} /></div>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>SMS / WhatsApp</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>Send SMS or WhatsApp message via Telnyx</div>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><Settings size={15} style={{ color: '#2563eb' }} /></div>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Connect Provider</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>Add Twilio, WhatsApp Business, or VoIP</div>
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Recent Calls</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0', color: '#ccc' }}>
              <Phone size={26} style={{ marginBottom: '10px', color: '#d5d5d5' }} />
              <div style={{ fontSize: '10.5px', color: '#999' }}>No calls logged yet</div>
            </div>
          </div>

          {/* Coach mark — explains the Calls page */}
          {tour === 14 && (
            <div style={{ position: 'absolute', top: '175px', left: '600px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Call right from the CRM"
                subtitle="Dial out, send SMS or WhatsApp, and every call logs automatically to the contact's record. Click Next."
                onNext={() => { gotoContacts(); setActiveNav('Contacts'); setTour(15); }}
                top="0" left="0" arrowSide="top" arrowOffset="40px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
        )}

        {/* Scrollable content — Contacts (All Contacts) */}
        {showContacts && (
        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a', marginBottom: '2px' }}>Contacts</div>
              <div style={{ fontSize: '10px', color: '#999' }}>0 total contacts</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', borderRadius: '18px', background: '#fff', color: '#555', border: '1px solid #e5e7eb', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Upload size={12} /> Import</button>
              <button onClick={() => { setShowAddContactModal(true); if (tour === 15) setTour(16); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', borderRadius: '18px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Contact</button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: '#f4f5f7', borderRadius: '10px', color: '#aaa', fontSize: '10.5px' }}>
              <Search size={13} /> Search contacts...
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '9px 12px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', fontSize: '10px', color: '#555', fontWeight: 600 }}>All statuses <ChevronDown size={12} /></div>
          </div>

          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '48px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f0eef8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}><Filter size={20} style={{ color: '#7C3AED' }} /></div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>No contacts found</div>
            <div style={{ fontSize: '10px', color: '#999', marginBottom: '16px' }}>Get started by adding your first contact</div>
            <div style={{ position: 'relative' }}>
              <button onClick={() => { setShowAddContactModal(true); if (tour === 15) setTour(16); }} style={{ padding: '9px 22px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Add Contact</button>

              {/* Coach mark — beside the Add Contact button */}
              {tour === 15 && !showAddContactModal && (
                <div style={{ position: 'absolute', top: '-4px', left: '160px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="Add your first contact"
                    subtitle="Every contact keeps a full history of emails, calls, tasks, and deals in one place. Click Next."
                    onNext={() => { setShowAddContactModal(true); setTour(16); }}
                    top="0" left="0" arrowSide="left" arrowOffset="20px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        )}
      </div>

      {/* Invite Team Member modal */}
      {showInviteModal && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 200 }}>
          <div style={{ position: 'relative', width: '340px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.35)', padding: '22px 24px' }}>
            <div onClick={() => setShowInviteModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer', color: '#bbb' }}><X size={16} /></div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '18px' }}>Invite Team Member</div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Email address</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', marginBottom: '14px' }}>
              <Mail size={13} style={{ color: '#aaa' }} />
              <span style={{ fontSize: '10.5px', color: '#aaa' }}>colleague@company.com</span>
            </div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Role</div>
            <div style={{ position: 'relative', marginBottom: '10px' }}>
              <select style={{ appearance: 'none', width: '100%', padding: '10px 30px 10px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', cursor: 'pointer', boxSizing: 'border-box' }}>
                <option>Select a role</option><option>Admin</option><option>Sales Manager</option><option>Sales Rep</option><option>Viewer</option>
              </select>
              <ChevronDown size={13} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
            </div>

            <div style={{ fontSize: '9px', color: '#999', lineHeight: 1.5, marginBottom: '18px' }}>An invitation email will be sent. They&apos;ll need to create an account or sign in to join.</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => setShowInviteModal(false)} style={{ flex: 1, padding: '10px', background: '#fff', color: '#333', border: '1px solid #e5e5e5', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { setMembersFilled(true); setShowInviteModal(false); if (tour === 3) setTour(4); }} style={{ flex: 1.4, padding: '10px', background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Send Invitation</button>
            </div>
          </div>

          {/* Coach mark — beside the modal */}
          {tour === 3 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(200px, -60px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Send an invite"
                subtitle="Enter a teammate's email, pick their role, and send. Click Next to see your team populate."
                onNext={() => { setMembersFilled(true); setShowInviteModal(false); setTour(4); }}
                top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
      )}

      {/* New Dashboard modal */}
      {showNewDashModal && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 200 }}>
          <div style={{ position: 'relative', width: '320px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.35)', padding: '22px 24px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>New Dashboard</div>
            <input placeholder="Dashboard name" style={{ width: '100%', padding: '10px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => setShowNewDashModal(false)} style={{ flex: 1, padding: '10px', background: '#fff', color: '#333', border: '1px solid #e5e5e5', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { setDashCreated(true); setShowNewDashModal(false); if (tour === 6) setTour(7); }} style={{ flex: 1, padding: '10px', background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Create</button>
            </div>
          </div>

          {/* Coach mark — beside the New Dashboard modal */}
          {tour === 6 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(190px, -55px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Name your dashboard"
                subtitle="Give your dashboard a name (e.g. Lead Contact), then create it. Click Next."
                onNext={() => { setDashCreated(true); setShowNewDashModal(false); setTour(7); }}
                top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
      )}

      {/* Add Widget modal */}
      {showWidgetModal && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 200 }}>
          <div style={{ position: 'relative', width: '400px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.35)', padding: '20px 22px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Add Widget</div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '16px' }}>Choose a widget type to add to your dashboard</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {WIDGET_TYPES.map((w) => (
                <div key={w.name} onClick={() => { setWidgetsAdded(true); setShowWidgetModal(false); if (tour === 8) setTour(9); }} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', padding: '11px', border: '1px solid #eef0f2', borderRadius: '10px', cursor: 'pointer' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: `${w.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><w.Icon size={12} style={{ color: w.color }} /></div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a' }}>{w.name}</div>
                    <div style={{ fontSize: '8.5px', color: '#999', lineHeight: 1.35 }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coach mark — beside the Add Widget modal */}
          {tour === 8 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(230px, -55px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Pick a widget"
                subtitle="Choose any widget type — KPI cards, charts, tables, and more — to build your dashboard. Click Next to see it built out."
                onNext={() => { setWidgetsAdded(true); setShowWidgetModal(false); setTour(9); }}
                top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
      )}

      {/* Add Contact modal */}
      {showAddContactModal && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 200, padding: '20px' }}>
          <div style={{ position: 'relative', width: '400px', maxHeight: '100%', overflowY: 'auto', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.35)', padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Add Contact</div>
              <X size={16} style={{ color: '#bbb', cursor: 'pointer' }} onClick={() => setShowAddContactModal(false)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>First name *</div>
                <input placeholder="John" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Last name *</div>
                <input placeholder="Doe" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Email</div>
              <input placeholder="john@example.com" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Phone</div>
                <input placeholder="+1 555 123 4567" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Mobile</div>
                <input placeholder="+1 555 987 6543" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Company</div>
                <input placeholder="Acme Inc" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Job title</div>
                <input placeholder="Marketing Manager" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Source</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select source</option></select>
              </div>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Status</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Lead</option></select>
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Address</div>
              <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>City</div>
                <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Country</div>
                <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Zip Code</div>
              <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Notes</div>
              <textarea placeholder="Additional notes..." rows={2} style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid #f0f0f2', paddingTop: '14px' }}>
              <button onClick={() => setShowAddContactModal(false)} style={{ flex: 1, padding: '10px', background: '#fff', color: '#333', border: '1px solid #e5e5e5', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { setTour(0); onEnd?.(); }} style={{ flex: 1.4, padding: '10px', background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Add Contact</button>
            </div>
          </div>

          {/* Coach mark — final step, explains the Add Contact modal. Kept OUTSIDE the
              scrollable modal panel (which clips overflow) — sibling of it within the
              overlay instead, same pattern as the other modals in this file. */}
          {tour === 16 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(210px, -80px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="One record for everything"
                subtitle="Capture contact details, company, and status here — every email, call, and task tied to them shows up on this record. That's the CRM tour!"
                onNext={() => { setTour(0); onEnd?.(); }}
                top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Done"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
