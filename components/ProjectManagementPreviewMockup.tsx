'use client';

import { useState } from 'react';
import {
  LayoutGrid,
  FolderKanban,
  Repeat,
  CheckSquare,
  PenSquare,
  FileText,
  Zap,
  Users,
  Plug,
  BarChart3,
  Settings,
  Search,
  Filter,
  Plus,
  ClipboardList,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  Folder,
  ChevronDown,
  Grid3x3,
  List as ListIcon,
  X,
  Rocket,
  LineChart,
  Target,
  Laptop2,
  Globe,
  Wrench,
  CircleDot,
  Bug,
  Calendar,
} from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV_WORKSPACE = [
  { label: 'Dashboard', Icon: LayoutGrid },
  { label: 'Projects', Icon: FolderKanban },
  { label: 'Sprints', Icon: Repeat },
  { label: 'Tasks', Icon: CheckSquare },
  { label: 'Whiteboards', Icon: PenSquare },
  { label: 'Docs', Icon: FileText },
];

const NAV_MANAGE = [
  { label: 'Automations', Icon: Zap },
  { label: 'Team', Icon: Users },
  { label: 'Integration', Icon: Plug },
];

const NAV_INSIGHTS = [
  { label: 'Reports', Icon: BarChart3 },
  { label: 'Settings', Icon: Settings },
];

// September 2026 — Sep 1 falls on Tuesday, so the grid opens with two blank
// leading cells (Sun/Mon). Day 14 is "today" per the reference screenshot.
const CALENDAR_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const CALENDAR_CELLS: (number | null)[] = [
  null, null, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, null, null, null,
];
const TODAY = 14;

const STATS = [
  { label: 'To-do', value: '0', Icon: ClipboardList, color: '#7C3AED', bg: '#F3EFFF' },
  { label: 'Total Projects', value: '0', Icon: FolderKanban, color: '#2563eb', bg: '#EFF6FF' },
  { label: 'Assigned Tasks', value: '0', Icon: CheckCircle2, color: '#059669', bg: '#ECFDF5' },
  { label: 'Completed', value: '0', Icon: TrendingUp, color: '#d97706', bg: '#FFFBEB' },
  { label: 'Overdue', value: '0', Icon: AlertCircle, color: '#dc2626', bg: '#FEF2F2' },
];

const TEMPLATE_CATEGORIES = ['All', 'Software/IT', 'Marketing/Sales', 'Construction', 'Manufacturing', 'Pharma', 'HR', 'Others'];

const TEMPLATES = [
  { Icon: FileText, iconBg: '#EEF2FF', iconColor: '#6366f1', title: 'Blank Project', desc: 'Start from scratch with a clean slate.', tasks: null as number | null, badge: null as string | null, predefinedTasks: [] as string[] },
  { Icon: Rocket, iconBg: '#FFF1F2', iconColor: '#e11d48', title: 'Explore Snaarp Projects!', desc: 'With this template, you can get a kick start of Snaarp Projects.', tasks: 5, badge: 'Others', predefinedTasks: ['Create your first project', 'Add team members', 'Set up task statuses', 'Create milestones', 'Explore reports'] },
  { Icon: LineChart, iconBg: '#EEF2FF', iconColor: '#6366f1', title: 'Digital Marketing', desc: 'Monitor the development of your marketing strategy as well as SEO, branding, design, and progress toward you…', tasks: 9, badge: 'Marketing/Sales', predefinedTasks: ['Define target audience', 'Set marketing goals', 'Plan content calendar', 'Design campaign creative', 'Launch ad campaign', 'Track SEO rankings', 'Monitor social engagement', 'Review analytics', 'Optimize budget'] },
  { Icon: Target, iconBg: '#FEF2F2', iconColor: '#dc2626', title: 'Customer Acquisition Strategy', desc: 'Analyzing market trends and customer insights to craft data-driven strategies for growth and competitive…', tasks: 7, badge: 'Marketing/Sales', predefinedTasks: ['Research target market', 'Analyze competitors', 'Define acquisition channels', 'Build outreach sequence', 'Launch pilot campaign', 'Track conversion funnel', 'Review CAC & ROI'] },
  { Icon: Laptop2, iconBg: '#EFF6FF', iconColor: '#2563eb', title: 'Software Development', desc: 'With our pre-defined template, managing and monitoring your software development project will be…', tasks: 11, badge: 'Software/IT', predefinedTasks: ['Gather requirements', 'Define architecture', 'Set up repository', 'Design database schema', 'Build core features', 'Write unit tests', 'Set up CI/CD', 'Conduct code review', 'QA testing', 'Fix bugs', 'Deploy to production'] },
  { Icon: Rocket, iconBg: '#FFF1F2', iconColor: '#e11d48', title: 'Product Launch Plan', desc: 'Strategizing and executing a comprehensive plan to introduce a new product to the market effectively and…', tasks: 8, badge: 'Software/IT', predefinedTasks: ['Define launch goals', 'Finalize product positioning', 'Prepare marketing assets', 'Brief sales team', 'Set up landing page', 'Schedule launch campaign', 'Coordinate PR outreach', 'Track launch metrics'] },
  { Icon: Globe, iconBg: '#ECFEFF', iconColor: '#0891b2', title: 'Website Development', desc: "Your website's pages should be carefully planned, designed, and built for a smooth launch.", tasks: null as number | null, badge: 'Software/IT', predefinedTasks: [] as string[] },
  { Icon: Wrench, iconBg: '#F5F3FF', iconColor: '#7C3AED', title: 'IT Support Project', desc: 'Customize this IT support project template to meet your team’s ticketing and response needs.', tasks: null as number | null, badge: 'Software/IT', predefinedTasks: [] as string[] },
];

const STATUS_WORKFLOW = [
  { label: 'To Do', color: '#555', bg: '#f4f5f7' },
  { label: 'In Progress', color: '#2563eb', bg: '#EFF6FF' },
  { label: 'Done', color: '#059669', bg: '#ECFDF5' },
  { label: 'Closed', color: '#888', bg: '#f0f0f2' },
];

const SPRINT_FILTERS = ['All', 'Active', 'Planning', 'Completed', 'Cancelled'];

const SAMPLE_SPRINT = {
  name: 'Authentication & Onboarding',
  goal: 'Ship secure login, signup, and session handling for the new workspace.',
  startDate: 'Sep 15, 2026',
  endDate: 'Sep 29, 2026',
  points: 40,
};

const SAMPLE_TASK = {
  title: 'Design the login screen',
  priority: 'High',
  priorityColor: '#dc2626',
  priorityBg: '#FEF2F2',
  dueDate: 'Sep 20, 2026',
};

export function ProjectManagementPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [tour, setTour] = useState(1); // 1=dashboard, 2=projects, 3=template gallery, 4=template detail, 5=project created,
                                        // 6=sprints page, 7=new sprint modal, 8=sprint created, 9=tasks page, 10=create task modal,
                                        // 11=task created (Done -> onEnd, hands off to Books on the showcase rail), 0=done
  const [showProjects, setShowProjects] = useState(false);
  const [showSprints, setShowSprints] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateCategory, setTemplateCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [createdProjects, setCreatedProjects] = useState<typeof TEMPLATES>([]);
  const [showNewSprintModal, setShowNewSprintModal] = useState(false);
  const [createdSprints, setCreatedSprints] = useState<(typeof SAMPLE_SPRINT & { project: string })[]>([]);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [createdTasks, setCreatedTasks] = useState<(typeof SAMPLE_TASK & { project: string })[]>([]);

  const finishTour = () => {
    setTour(0);
    onEnd?.();
  };

  const closeAllModals = () => {
    setShowTemplateModal(false);
    setSelectedTemplate(null);
    setShowNewSprintModal(false);
    setShowCreateTaskModal(false);
  };

  const goDashboard = () => {
    setActiveNav('Dashboard');
    setShowProjects(false);
    setShowSprints(false);
    setShowTasks(false);
    closeAllModals();
  };

  const goProjects = () => {
    setActiveNav('Projects');
    setShowProjects(true);
    setShowSprints(false);
    setShowTasks(false);
    closeAllModals();
    if (tour === 1) setTour(2);
  };

  const goSprints = () => {
    setActiveNav('Sprints');
    setShowProjects(false);
    setShowSprints(true);
    setShowTasks(false);
    closeAllModals();
    if (tour === 5) setTour(6);
  };

  const goTasksPage = () => {
    setActiveNav('Tasks');
    setShowProjects(false);
    setShowSprints(false);
    setShowTasks(true);
    closeAllModals();
    if (tour === 8) setTour(9);
  };

  const openTemplateModal = () => {
    setShowTemplateModal(true);
    if (tour === 2) setTour(3);
  };

  const closeTemplateModal = () => {
    setShowTemplateModal(false);
    setSelectedTemplate(null);
  };

  const openTemplateDetail = (index: number) => {
    setSelectedTemplate(index);
    if (tour === 3) setTour(4);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate !== null) {
      setCreatedProjects((prev) => [...prev, TEMPLATES[selectedTemplate]]);
    }
    closeTemplateModal();
    if (tour === 4) setTour(5);
  };

  const openNewSprintModal = () => {
    setShowNewSprintModal(true);
    if (tour === 6) setTour(7);
  };

  const closeNewSprintModal = () => setShowNewSprintModal(false);

  const handleCreateSprint = () => {
    const project = createdProjects[0]?.title ?? 'Explore Snaarp Projects!';
    setCreatedSprints((prev) => [...prev, { ...SAMPLE_SPRINT, project }]);
    closeNewSprintModal();
    if (tour === 7) setTour(8);
  };

  const openCreateTaskModal = () => {
    setShowCreateTaskModal(true);
    if (tour === 9) setTour(10);
  };

  const closeCreateTaskModal = () => setShowCreateTaskModal(false);

  const handleCreateTask = () => {
    const project = createdProjects[0]?.title ?? 'Explore Snaarp Projects!';
    setCreatedTasks((prev) => [...prev, { ...SAMPLE_TASK, project }]);
    closeCreateTaskModal();
    if (tour === 10) setTour(11);
  };

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f4f5f7', position: 'relative' }}>
      {/* Sidebar */}
      <div style={{ width: '158px', flexShrink: 0, background: '#fff', borderRight: '1px solid #eef0f2', padding: '12px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', paddingLeft: '2px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '7px', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/assets/icons/rail-project-management.svg" alt="Project Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' }}>Projects</span>
        </div>

        <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', padding: '0 10px', marginBottom: '6px' }}>WORKSPACE</div>
        {NAV_WORKSPACE.map((item) => {
          const active = activeNav === item.label;
          return (
            <div
              key={item.label}
              onClick={() => {
                if (item.label === 'Dashboard') goDashboard();
                else if (item.label === 'Projects') goProjects();
                else if (item.label === 'Sprints') goSprints();
                else if (item.label === 'Tasks') goTasksPage();
                else setActiveNav(item.label);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}
            >
              <item.Icon size={14} /> <span>{item.label}</span>
            </div>
          );
        })}

        <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', padding: '0 10px', margin: '14px 0 6px' }}>MANAGE</div>
        {NAV_MANAGE.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
            <item.Icon size={14} /> <span>{item.label}</span>
          </div>
        ))}

        <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', padding: '0 10px', margin: '14px 0 6px' }}>INSIGHTS</div>
        {NAV_INSIGHTS.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
            <item.Icon size={14} /> <span>{item.label}</span>
          </div>
        ))}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 8px', borderTop: '1px solid #eef0f2' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>M</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Maya Chen</span>
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', background: '#F3EFFF', borderRadius: '5px', padding: '1.5px 5px' }}>Owner</span>
            </div>
            <div style={{ fontSize: '9px', color: '#999', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>maya.chen@snaarp.com</div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 26px', borderBottom: '1px solid #eef0f2', flexShrink: 0 }}>
          <div style={{ flex: 1, maxWidth: '320px', display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '9px', padding: '7px 12px' }}>
            <Search size={13} style={{ color: '#999' }} />
            <span style={{ fontSize: '10.5px', color: '#999' }}>Search tasks, projects...</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', borderRadius: '8px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 600, color: '#555', cursor: 'pointer' }}>
              <Filter size={12} /> Filter
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#7C3AED', fontSize: '10.5px', fontWeight: 600, color: '#fff', cursor: 'pointer' }}>
              <Plus size={12} /> Add Task
            </div>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>M</div>
          </div>
        </div>

        <div style={{ position: 'relative', flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '22px 26px' }}>
        {!showProjects && !showSprints && !showTasks && (
        <>
          <div style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>Hello Maya, Welcome Back</div>
          <div style={{ fontSize: '11px', color: '#888', marginBottom: '20px' }}>Here&apos;s what&apos;s happening across your workspace today.</div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '18px' }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#777' }}>{s.label}</span>
                  <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <s.Icon size={13} style={{ color: s.color }} />
                  </div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Critical Projects + Team Status */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px', minHeight: '230px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700 }}>Critical Projects</span>
                <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#7C3AED', fontWeight: 600, cursor: 'pointer' }}>See All</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Folder size={22} style={{ color: '#bbb' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#999' }}>No projects yet</span>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '14px' }}>Team Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>M</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>maya.chen@snaarp.com</div>
                  <div style={{ fontSize: '9.5px', color: '#999' }}>Owner</div>
                </div>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
              </div>
              <div style={{ borderTop: '1px solid #eef0f2', paddingTop: '12px', display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#555' }}>Team Progress</span>
                <span style={{ marginLeft: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a' }}>0%</span>
              </div>
              <div style={{ height: '6px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '0%', borderRadius: '4px', background: '#7C3AED' }} />
              </div>
            </div>
          </div>

          {/* Calendar View */}
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '18px', marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700 }}>Calendar View</span>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 600, color: '#555', border: '1px solid #eef0f2', borderRadius: '7px', padding: '5px 9px' }}>2026 <ChevronDown size={10} /></span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: 600, color: '#555', border: '1px solid #eef0f2', borderRadius: '7px', padding: '5px 9px' }}>Sep <ChevronDown size={10} /></span>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#7C3AED', border: '1px solid #7C3AED', borderRadius: '7px', padding: '5px 10px', cursor: 'pointer' }}>Today</span>
              </div>
            </div>
            <div style={{ border: '1px solid #eef0f2', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: '#f9fafb', borderBottom: '1px solid #eef0f2' }}>
                {CALENDAR_WEEKDAYS.map((d) => (
                  <div key={d} style={{ padding: '9px 0', textAlign: 'center', fontSize: '9.5px', fontWeight: 700, color: '#999' }}>{d}</div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {CALENDAR_CELLS.map((day, i) => {
                  const isToday = day === TODAY;
                  return (
                    <div key={i} style={{ height: '52px', borderRight: (i + 1) % 7 === 0 ? 'none' : '1px solid #f2f3f5', borderBottom: i < CALENDAR_CELLS.length - 7 ? '1px solid #f2f3f5' : 'none', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '6px' }}>
                      {day !== null && (
                        <span style={{
                          width: '20px', height: '20px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', fontWeight: isToday ? 700 : 500, color: isToday ? '#fff' : '#555', background: isToday ? '#7C3AED' : 'transparent',
                        }}>{day}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coach mark — explains the Dashboard, then hands off to Projects */}
          {tour === 1 && (
            <div style={{ position: 'absolute', top: '160px', left: '400px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Your Project Management Hub"
                subtitle="Track projects, tasks and team progress at a glance. Let's take a look at Projects next."
                onNext={goProjects}
                arrowSide="top"
                arrowOffset="30px"
                buttonLabel="Next"
              />
            </div>
          )}
        </>
        )}

        {showProjects && (
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>Projects</span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '8px', padding: '3px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', borderRadius: '6px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600 }}><Grid3x3 size={12} /> Grid</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', borderRadius: '6px', color: '#666', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><ListIcon size={12} /> List</span>
              </div>
              <div onClick={openTemplateModal} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={12} /> New Project
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#555', background: '#fff', border: '1px solid #eef0f2', borderRadius: '7px', padding: '5px 10px' }}>{createdProjects.length} Total</span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#555', background: '#fff', border: '1px solid #eef0f2', borderRadius: '7px', padding: '5px 10px' }}>{createdProjects.length} Active</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderRadius: '8px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 600, color: '#555', cursor: 'pointer', flexShrink: 0 }}>
              <Filter size={12} /> Filter
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '9px', padding: '8px 12px' }}>
              <Search size={13} style={{ color: '#999' }} />
              <span style={{ fontSize: '10.5px', color: '#999' }}>Search projects...</span>
            </div>
          </div>

          {createdProjects.length === 0 ? (
          <div style={{ position: 'relative', background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', minHeight: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FolderKanban size={24} style={{ color: '#bbb' }} />
            </div>
            <span style={{ fontSize: '11.5px', color: '#999' }}>No projects yet.</span>
            <div onClick={openTemplateModal} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '9px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>
              <Plus size={13} /> Create Project
            </div>

            {/* Coach mark — left of the Create Project button */}
            {tour === 2 && (
              <div style={{ position: 'absolute', top: '150px', left: '190px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Start Your First Project"
                  subtitle="Create a project from a template, or start from a blank canvas to organize your team's work."
                  onNext={openTemplateModal}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
          ) : (
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
              {createdProjects.map((p, i) => (
                <div key={`${p.title}-${i}`} style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <p.Icon size={14} style={{ color: p.iconColor }} />
                    </div>
                    <span style={{ marginLeft: 'auto', fontSize: '8.5px', fontWeight: 700, color: '#059669', background: '#ECFDF5', borderRadius: '5px', padding: '2px 7px' }}>Active</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{p.title}</div>
                  <div style={{ fontSize: '9.5px', color: '#888', marginBottom: '8px' }}>0 of {p.predefinedTasks.length || p.tasks || 0} tasks complete</div>
                  <div style={{ height: '5px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '0%', borderRadius: '4px', background: '#7C3AED' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Coach mark — points at the newly created project card */}
            {tour === 5 && (
              <div style={{ position: 'absolute', top: '150px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Your Project is Ready"
                  subtitle="The project was created from your template with its tasks and status workflow. Let's set up a sprint for it next."
                  onNext={goSprints}
                  arrowSide="top"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}
        </div>
        )}

        {showSprints && (
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Repeat size={15} style={{ color: '#7C3AED' }} />
            </div>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a' }}>Sprints</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>{createdSprints.length} sprints total</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '8px', padding: '3px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', borderRadius: '6px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600 }}><ListIcon size={12} /> List</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', borderRadius: '6px', color: '#666', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Grid3x3 size={12} /> Board</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', borderRadius: '8px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 600, color: '#555', cursor: 'pointer' }}>
                <Filter size={12} /> Filter
              </div>
              <div onClick={openNewSprintModal} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
                <Plus size={12} /> New Sprint
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', borderBottom: '1px solid #eef0f2', marginBottom: '16px' }}>
            {['Sprints', 'Calendar', 'Goals', 'Time Tracking'].map((t) => {
              const active = t === 'Sprints';
              return (
                <div key={t} style={{ paddingBottom: '9px', fontSize: '10.5px', fontWeight: active ? 700 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer' }}>{t}</div>
              );
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '16px' }}>
            {[
              { label: 'Total Sprints', value: createdSprints.length, Icon: Repeat, color: '#7C3AED' },
              { label: 'Active Sprint', value: createdSprints.length, Icon: CircleDot, color: '#059669' },
              { label: 'Completed', value: 0, Icon: CheckCircle2, color: '#2563eb' },
              { label: 'Avg Velocity', value: 0, Icon: TrendingUp, color: '#d97706' },
              { label: 'Points Delivered', value: 0, Icon: Zap, color: '#dc2626' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '14px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#777', marginBottom: '10px' }}>{s.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <s.Icon size={13} style={{ color: s.color }} />
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            {SPRINT_FILTERS.map((f) => (
              <span key={f} style={{ fontSize: '10px', fontWeight: 700, color: f === 'All' ? '#fff' : '#555', background: f === 'All' ? '#1a1a1a' : '#fff', border: '1px solid #eef0f2', borderRadius: '7px', padding: '5px 10px', cursor: 'pointer' }}>
                {f === 'All' ? createdSprints.length : 0} {f}
              </span>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '9px', padding: '7px 12px', width: '180px' }}>
              <Search size={12} style={{ color: '#999' }} />
              <span style={{ fontSize: '10px', color: '#999' }}>Search sprints...</span>
            </div>
          </div>

          {createdSprints.length === 0 ? (
          <div style={{ position: 'relative', background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Repeat size={22} style={{ color: '#bbb' }} />
            </div>
            <span style={{ fontSize: '11.5px', color: '#999' }}>No sprints match filters.</span>

            {/* Coach mark — beside the New Sprint button */}
          </div>
          ) : (
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {createdSprints.map((s, i) => (
              <div key={`${s.name}-${i}`} style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a1a1a' }}>{s.name}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '8.5px', fontWeight: 700, color: '#059669', background: '#ECFDF5', borderRadius: '5px', padding: '2px 7px' }}>Active</span>
                </div>
                <div style={{ fontSize: '10px', color: '#888', marginBottom: '10px' }}>{s.goal}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '9.5px', color: '#666' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={11} style={{ color: '#999' }} /> {s.startDate} – {s.endDate}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><TrendingUp size={11} style={{ color: '#999' }} /> {s.points} pts</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FolderKanban size={11} style={{ color: '#999' }} /> {s.project}</span>
                </div>
              </div>
            ))}

            {/* Coach mark — points at the newly created sprint, then hands off to Tasks */}
            {tour === 8 && (
              <div style={{ position: 'absolute', top: '90px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Sprint Created"
                  subtitle="Your sprint is live with its goal and dates set. Next, let's look at Tasks so your team can start logging work."
                  onNext={goTasksPage}
                  arrowSide="top"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* Coach mark — beside the New Sprint button */}
          {tour === 6 && (
            <div style={{ position: 'absolute', top: '46px', left: '750px', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Plan Your First Sprint"
                subtitle="Break your project into a time-boxed sprint with a goal, dates, and a story point budget."
                onNext={openNewSprintModal}
                arrowSide="top"
                arrowOffset="200px"
                buttonLabel="Next"
              />
            </div>
          )}
        </div>
        )}

        {showTasks && (
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckSquare size={15} style={{ color: '#7C3AED' }} />
            </div>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#1a1a1a' }}>Work Items</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>{createdTasks.length} tasks · 0 issues · 0 bugs</div>
            </div>
            <div onClick={openCreateTaskModal} style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
              <Plus size={12} /> Add Task
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '9px', padding: '10px 14px', marginBottom: '14px' }}>
            <FolderKanban size={13} style={{ color: '#999' }} />
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#999' }}>Project:</span>
            <span style={{ fontSize: '10.5px', color: '#bbb' }}>Select a project</span>
          </div>

          <div style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '9px', padding: '12px 14px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#555' }}>Overall Progress</span>
              <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#999' }}>0 of {createdTasks.length} completed · 0%</span>
            </div>
            <div style={{ height: '6px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '0%', borderRadius: '4px', background: '#7C3AED' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 12px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600 }}><CheckSquare size={12} /> Tasks ({createdTasks.length})</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 12px', borderRadius: '8px', color: '#666', fontSize: '10.5px', fontWeight: 600, border: '1px solid #eef0f2' }}><AlertCircle size={12} /> Issues (0)</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 12px', borderRadius: '8px', color: '#666', fontSize: '10.5px', fontWeight: 600, border: '1px solid #eef0f2' }}><Bug size={12} /> Bugs (0)</span>
          </div>

          <div style={{ display: 'flex', gap: '14px', borderBottom: '1px solid #eef0f2', marginBottom: '16px' }}>
            {['List View', 'Board', 'Gantt', 'Calendar'].map((t) => {
              const active = t === 'List View';
              return (
                <div key={t} style={{ paddingBottom: '9px', fontSize: '10.5px', fontWeight: active ? 700 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer' }}>{t}</div>
              );
            })}
          </div>

          {createdTasks.length === 0 ? (
          <div style={{ position: 'relative', background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', minHeight: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1.5px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckSquare size={22} style={{ color: '#bbb' }} />
            </div>
            <span style={{ fontSize: '11.5px', color: '#999' }}>No tasks yet. Create your first task to get started.</span>
            <div onClick={openCreateTaskModal} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '9px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>
              <Plus size={13} /> Create Task
            </div>

            {/* Coach mark — beside the Create Task button */}
            {tour === 9 && (
              <div style={{ position: 'absolute', top: '150px', left: '190px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Log Your First Task"
                  subtitle="Every task belongs to a project — pick one, then describe the work to be done."
                  onNext={openCreateTaskModal}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
          ) : (
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {createdTasks.map((t, i) => (
                <div key={`${t.title}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', padding: '12px 14px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '4px', border: '1.5px solid #ddd', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>{t.title}</span>
                  <span style={{ fontSize: '9.5px', color: '#999' }}>{t.project}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '8.5px', fontWeight: 700, color: t.priorityColor, background: t.priorityBg, borderRadius: '5px', padding: '2px 7px' }}>{t.priority}</span>
                  <span style={{ fontSize: '9.5px', color: '#999' }}>{t.dueDate}</span>
                </div>
              ))}
            </div>

            {/* Coach mark — points at the newly created task, final step of the tour */}
            {tour === 11 && (
              <div style={{ position: 'absolute', top: '60px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Task Logged"
                  subtitle="Your task is on the board, linked to its project. That's the core of Project Management covered — let's check out Snaarp Books next."
                  onNext={finishTour}
                  arrowSide="top"
                  arrowOffset="30px"
                  buttonLabel="Done"
                />
              </div>
            )}
          </div>
          )}
        </div>
        )}
        </div>

        {/* Template Gallery modal */}
        {showTemplateModal && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,20,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '14px', width: '560px', maxHeight: '460px', overflowY: 'auto', padding: '20px 22px', position: 'relative', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.25)' }}>
              <div onClick={closeTemplateModal} style={{ position: 'absolute', top: '14px', right: '14px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', cursor: 'pointer', color: '#999' }}>
                <X size={14} />
              </div>

              {selectedTemplate === null ? (
              <>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '4px' }}>Template Gallery</div>
                <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '14px' }}>Choose a template to get started quickly, or start from scratch.</div>

                <div style={{ display: 'flex', gap: '14px', borderBottom: '1px solid #eef0f2', marginBottom: '12px', flexWrap: 'wrap' }}>
                  {TEMPLATE_CATEGORIES.map((c) => {
                    const active = c === templateCategory;
                    return (
                      <div key={c} onClick={() => setTemplateCategory(c)} style={{ paddingBottom: '8px', fontSize: '10.5px', fontWeight: active ? 700 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}>{c}</div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f5f7', border: '1px solid #eef0f2', borderRadius: '9px', padding: '8px 12px', marginBottom: '14px' }}>
                  <Search size={12} style={{ color: '#999' }} />
                  <span style={{ fontSize: '10px', color: '#999' }}>Search templates...</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {TEMPLATES.map((t, i) => (
                    <div key={t.title} onClick={() => openTemplateDetail(i)} style={{ border: '1px solid #eef0f2', borderRadius: '10px', padding: '12px', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: t.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <t.Icon size={13} style={{ color: t.iconColor }} />
                        </div>
                        {t.badge && <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#555', background: '#f4f5f7', borderRadius: '5px', padding: '2px 6px' }}>{t.badge}</span>}
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>{t.title}</div>
                      <div style={{ fontSize: '9.5px', color: '#888', lineHeight: '1.4', marginBottom: '8px' }}>{t.desc}</div>
                      {t.tasks !== null && <span style={{ fontSize: '8.5px', fontWeight: 600, color: '#7C3AED', background: '#F3EFFF', borderRadius: '5px', padding: '2px 7px' }}>{t.tasks} tasks</span>}
                    </div>
                  ))}
                </div>
              </>
              ) : (
              <>
                <div onClick={() => setSelectedTemplate(null)} style={{ fontSize: '10.5px', fontWeight: 600, color: '#999', marginBottom: '14px', cursor: 'pointer' }}>&larr; Back to templates</div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: TEMPLATES[selectedTemplate].iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {(() => { const DIcon = TEMPLATES[selectedTemplate].Icon; return <DIcon size={17} style={{ color: TEMPLATES[selectedTemplate].iconColor }} />; })()}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>{TEMPLATES[selectedTemplate].title}</div>
                    {TEMPLATES[selectedTemplate].badge && <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#555', background: '#f4f5f7', borderRadius: '5px', padding: '2px 6px' }}>{TEMPLATES[selectedTemplate].badge}</span>}
                  </div>
                </div>

                <div style={{ fontSize: '10.5px', color: '#888', lineHeight: '1.5', marginBottom: '18px' }}>{TEMPLATES[selectedTemplate].desc}</div>

                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>PROJECT NAME *</div>
                <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '11px', fontWeight: 600, color: '#1a1a1a', background: '#fafafa', marginBottom: '18px' }}>{TEMPLATES[selectedTemplate].title}</div>

                {TEMPLATES[selectedTemplate].predefinedTasks.length > 0 && (
                <>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '8px' }}>PREDEFINED TASKS ({TEMPLATES[selectedTemplate].predefinedTasks.length})</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                    {TEMPLATES[selectedTemplate].predefinedTasks.map((task) => (
                      <div key={task} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f9fafb', border: '1px solid #f0f0f2', borderRadius: '8px', padding: '8px 10px', fontSize: '10.5px', fontWeight: 600, color: '#333' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED', flexShrink: 0 }} />
                        {task}
                      </div>
                    ))}
                  </div>
                </>
                )}

                <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '8px' }}>STATUS WORKFLOW</div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  {STATUS_WORKFLOW.map((s) => (
                    <span key={s.label} style={{ fontSize: '9.5px', fontWeight: 700, color: s.color, background: s.bg, borderRadius: '6px', padding: '5px 10px' }}>{s.label}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', borderTop: '1px solid #eef0f2', paddingTop: '14px' }}>
                  <div onClick={closeTemplateModal} style={{ padding: '8px 18px', borderRadius: '9px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 700, color: '#555', cursor: 'pointer' }}>Cancel</div>
                  <div onClick={handleUseTemplate} style={{ padding: '8px 18px', borderRadius: '9px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700, cursor: 'pointer' }}>Use Template</div>
                </div>
              </>
              )}
            </div>

            {/* Coach mark — explains the Template Gallery modal, sibling of the panel so the scrollable panel can't clip it */}
            {tour === 3 && (
              <div style={{ position: 'absolute', top: '160px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Start From a Template"
                  subtitle="Pick a ready-made template to jump-start your project, or choose Blank Project to start from scratch."
                  onNext={() => openTemplateDetail(1)}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}

            {/* Coach mark — explains the Template Detail modal */}
            {tour === 4 && (
              <div style={{ position: 'absolute', top: '160px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Set Up Your Project"
                  subtitle="Review the predefined tasks and status workflow, then use this template to create a project your team can fill in and run with."
                  onNext={handleUseTemplate}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
        )}

        {/* New Sprint modal */}
        {showNewSprintModal && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,20,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '14px', width: '520px', maxHeight: '460px', overflowY: 'auto', padding: '20px 22px', position: 'relative', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.25)' }}>
              <div onClick={closeNewSprintModal} style={{ position: 'absolute', top: '14px', right: '14px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', cursor: 'pointer', color: '#999' }}>
                <X size={14} />
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '4px' }}>New Sprint</div>
              <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '18px' }}>Plan and launch a new development sprint.</div>

              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>SPRINT NAME *</div>
              <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb', marginBottom: '14px' }}>e.g. Authentication &amp; Onboarding</div>

              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>SPRINT GOAL</div>
              <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb', marginBottom: '14px', minHeight: '46px' }}>Describe the main objective...</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>START DATE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb' }}><Calendar size={12} style={{ color: '#ccc' }} /> Select date</div>
                </div>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>END DATE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb' }}><Calendar size={12} style={{ color: '#ccc' }} /> Select date</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>STORY POINT CAPACITY</div>
                  <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb' }}>e.g. 40</div>
                </div>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>PROJECT</div>
                  <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: createdProjects[0] ? '#1a1a1a' : '#bbb' }}>{createdProjects[0]?.title ?? 'Select a project'}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', borderTop: '1px solid #eef0f2', paddingTop: '14px' }}>
                <div onClick={closeNewSprintModal} style={{ padding: '8px 18px', borderRadius: '9px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 700, color: '#555', cursor: 'pointer' }}>Cancel</div>
                <div onClick={handleCreateSprint} style={{ padding: '8px 18px', borderRadius: '9px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700, cursor: 'pointer' }}>Create Sprint</div>
              </div>
            </div>

            {/* Coach mark — explains the New Sprint modal */}
            {tour === 7 && (
              <div style={{ position: 'absolute', top: '160px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Set Sprint Details"
                  subtitle="Name the sprint, set its goal and dates, and link it to a project — then create it to start tracking work."
                  onNext={handleCreateSprint}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
        )}

        {/* Create Task modal */}
        {showCreateTaskModal && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,15,20,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '14px', width: '480px', maxHeight: '460px', overflowY: 'auto', padding: '20px 22px', position: 'relative', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.25)' }}>
              <div onClick={closeCreateTaskModal} style={{ position: 'absolute', top: '14px', right: '14px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', cursor: 'pointer', color: '#999' }}>
                <X size={14} />
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '4px' }}>Create Task</div>
              <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '18px' }}>Add a task to a project so your team can start work.</div>

              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>PROJECT *</div>
              <div style={{ border: createdProjects[0] ? '1px solid #7C3AED' : '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: createdProjects[0] ? '#1a1a1a' : '#bbb', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FolderKanban size={12} style={{ color: createdProjects[0] ? '#7C3AED' : '#ccc' }} /> {createdProjects[0]?.title ?? 'Select a project'}
              </div>

              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>TASK NAME *</div>
              <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb', marginBottom: '14px' }}>e.g. Design the login screen</div>

              <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>DESCRIPTION</div>
              <div style={{ border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb', marginBottom: '14px', minHeight: '46px' }}>Describe what needs to be done...</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>PRIORITY</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {['Low', 'Medium', 'High'].map((p) => (
                      <span key={p} style={{ fontSize: '9.5px', fontWeight: 700, color: p === 'High' ? '#dc2626' : '#888', background: p === 'High' ? '#FEF2F2' : '#f4f5f7', borderRadius: '6px', padding: '6px 10px' }}>{p}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#aaa', letterSpacing: '0.04em', marginBottom: '7px' }}>DUE DATE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #eef0f2', borderRadius: '9px', padding: '9px 12px', fontSize: '10.5px', color: '#bbb' }}><Calendar size={12} style={{ color: '#ccc' }} /> Select date</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', borderTop: '1px solid #eef0f2', paddingTop: '14px' }}>
                <div onClick={closeCreateTaskModal} style={{ padding: '8px 18px', borderRadius: '9px', border: '1px solid #eef0f2', fontSize: '10.5px', fontWeight: 700, color: '#555', cursor: 'pointer' }}>Cancel</div>
                <div onClick={handleCreateTask} style={{ padding: '8px 18px', borderRadius: '9px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 700, cursor: 'pointer' }}>Create Task</div>
              </div>
            </div>

            {/* Coach mark — explains the Create Task modal */}
            {tour === 10 && (
              <div style={{ position: 'absolute', top: '160px', left: '30px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Log the Work"
                  subtitle="Every task starts with a project — pick which one this belongs to, then name it, set a priority, and create it."
                  onNext={handleCreateTask}
                  arrowSide="right"
                  arrowOffset="30px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
