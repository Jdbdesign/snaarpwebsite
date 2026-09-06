'use client';

import { useState } from 'react';
import { PanelLeft, LayoutGrid, LayoutDashboard, Users, Mail, FileText, BarChart3, UsersRound, Plug, Send, Globe, CalendarClock, Ban, CreditCard, UserCog, Settings, UserPlus, ChevronUp, Eye, MousePointerClick, Import, Zap, X, Plus, Search, Upload, Check, CheckCircle2, AlertCircle, Loader2, ShieldCheck, ArrowLeft, Download, Code2, Sparkles, Columns3, Heading, Pilcrow, Image as ImageIcon, Menu as MenuIcon, SquareMousePointer, ChevronDown, List as ListIcon, Minus, RefreshCw, Activity, TrendingUp } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV_MAIN = [
  { label: 'Dashboard', Icon: LayoutDashboard },
  { label: 'Contacts', Icon: Users },
  { label: 'Campaigns', Icon: Mail },
  { label: 'Templates', Icon: FileText },
  { label: 'Analytics', Icon: BarChart3 },
  { label: 'Team', Icon: UsersRound },
  { label: 'Integrations', Icon: Plug },
];
const NAV_ADVANCED = [
  { label: 'Manage Senders', Icon: Send },
  { label: 'Domain Configuration', Icon: Globe },
  { label: 'Advanced Scheduling', Icon: CalendarClock },
  { label: 'Unsubscribe Management', Icon: Ban },
];

const STAT_CARDS = [
  { label: 'Total Campaigns', value: '48', sub: '+2 from last month', Icon: Mail },
  { label: 'Total Contacts', value: '12,480', sub: '+180 from last month', Icon: UsersRound },
  { label: 'Open Rate', value: '42.6%', sub: '+2.1% from last month', Icon: Eye },
  { label: 'Click Rate', value: '18.3%', sub: '+0.5% from last month', Icon: MousePointerClick },
];

const BAR_DATA = [
  { m: 'Apr', v: 62 }, { m: 'May', v: 78 }, { m: 'Jun', v: 55 }, { m: 'Jul', v: 90 }, { m: 'Aug', v: 72 }, { m: 'Sep', v: 84 },
];

const CAMPAIGN_TYPES = [
  { label: 'Newsletter', pct: 35, color: '#7C3AED' },
  { label: 'Promotional', pct: 25, color: '#2563eb' },
  { label: 'Welcome Series', pct: 20, color: '#10b981' },
  { label: 'Product Updates', pct: 15, color: '#f59e0b' },
  { label: 'Others', pct: 5, color: '#ef4444' },
];

const OPEN_TREND = [38, 41, 39, 44, 42, 46, 43, 48];
const CLICK_TREND = [14, 16, 15, 18, 17, 19, 18, 21];

const QUICK_ACTIONS = [
  { label: 'Import Contacts', Icon: Import, color: '#7C3AED' },
  { label: 'Create Campaign', Icon: Mail, color: '#2563eb' },
  { label: 'Design Template', Icon: FileText, color: '#10b981' },
  { label: 'Setup Automation', Icon: Zap, color: '#f59e0b' },
];

const RECENT_CAMPAIGNS = [
  { name: 'September Newsletter', sent: '4,210', open: '46.2%', click: '19.4%', status: 'Sent', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { name: 'Autumn Sale Promo', sent: '8,940', open: '38.7%', click: '22.1%', status: 'Sent', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { name: 'Welcome Series #3', sent: '1,120', open: '54.9%', click: '27.6%', status: 'Sending', statusColor: '#f59e0b', statusBg: '#FFFBEB' },
  { name: 'Product Update v2.4', sent: '6,530', open: '41.3%', click: '16.8%', status: 'Scheduled', statusColor: '#3b82f6', statusBg: '#EFF6FF' },
];

function donutSegments() {
  const r = 42, c = 2 * Math.PI * r;
  let offset = 0;
  return CAMPAIGN_TYPES.map((t) => {
    const len = (t.pct / 100) * c;
    const seg = { color: t.color, dash: `${len} ${c - len}`, offset: -offset };
    offset += len;
    return seg;
  });
}

function LineTrend() {
  const w = 460, h = 150, pad = 10;
  const max = 60;
  const toPts = (arr: number[]) => arr.map((v, i) => {
    const x = pad + (i / (arr.length - 1)) * (w - pad * 2);
    const y = h - pad - (v / max) * (h - pad * 2);
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '150px' }} preserveAspectRatio="none">
      <polyline points={toPts(OPEN_TREND)} fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={toPts(CLICK_TREND)} fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SendritPreviewMockup() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [showInvite, setShowInvite] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [tour, setTour] = useState(1); // 1 = welcome, 2 = Invite User pointer, 0 = done
  // Contacts / groups
  type Contact = { name: string; email: string; company: string; status: 'valid' | 'invalid' };
  type Group = { name: string; desc: string; color: string; contacts: Contact[] };
  const [showGroupsModal, setShowGroupsModal] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [groupName, setGroupName] = useState('');
  const [groupDesc, setGroupDesc] = useState('');
  const [groupColor, setGroupColor] = useState('#8B5CF6');
  const [openGroupIdx, setOpenGroupIdx] = useState<number | null>(null);

  // Import wizard
  const [showImport, setShowImport] = useState(false);
  const [importStep, setImportStep] = useState(1); // 1=Upload, 2=Map, 3=Import, 4=Validate
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [importProgress, setImportProgress] = useState(0);
  const [validating, setValidating] = useState(false);
  const [validateDone, setValidateDone] = useState(false);

  // Sample parsed rows (fictional)
  const SAMPLE_ROWS: Contact[] = [
    { name: 'Amara Okafor', email: 'amara.okafor@brightlane.com', company: 'Brightlane', status: 'valid' },
    { name: 'Diego Ramirez', email: 'diego.ramirez@nova-tech.io', company: 'Nova Tech', status: 'valid' },
    { name: 'Sofia Lindqvist', email: 'sofia.l@harborworks.se', company: 'Harbor Works', status: 'valid' },
    { name: 'Marcus Webb', email: 'marcus.webb@@invalid', company: 'Webb Media', status: 'invalid' },
    { name: 'Priya Nair', email: 'priya.nair@cloudpeak.co', company: 'CloudPeak', status: 'valid' },
    { name: 'Tom Fischer', email: 'tom.fischer[at]dresden.de', company: 'Dresden Labs', status: 'invalid' },
    { name: 'Lena Moretti', email: 'lena.moretti@vistagroup.it', company: 'Vista Group', status: 'valid' },
    { name: 'Kwame Mensah', email: 'kwame.mensah@accralink.gh', company: 'AccraLink', status: 'valid' },
  ];
  const validCount = SAMPLE_ROWS.filter((r) => r.status === 'valid').length;
  const invalidCount = SAMPLE_ROWS.length - validCount;

  function createGroup() {
    if (!groupName.trim()) return;
    setGroups((prev) => [...prev, { name: groupName.trim(), desc: groupDesc.trim(), color: groupColor, contacts: [] }]);
    setGroupName(''); setGroupDesc(''); setGroupColor('#8B5CF6');
    setShowCreateGroup(false);
    setShowGroupsModal(false);
    if (tour === 5 || tour === 55) setTour(6);
  }

  function openImport() {
    // ensure at least one group exists to import into
    if (groups.length === 0) {
      setGroups([{ name: 'Imported Contacts', desc: 'Contacts imported from file', color: '#8B5CF6', contacts: [] }]);
    }
    setImportStep(1); setUploadedFile(null); setImportProgress(0); setValidating(false); setValidateDone(false);
    setShowImport(true);
  }

  function startImportProgress() {
    setImportStep(3); setImportProgress(0);
    const iv = setInterval(() => {
      setImportProgress((p) => {
        if (p >= 100) { clearInterval(iv); setTimeout(() => setImportStep(4), 400); return 100; }
        return p + 10;
      });
    }, 120);
  }

  function runValidation() {
    setValidating(true);
    setTimeout(() => {
      setValidating(false);
      setValidateDone(true);
      // import only valid contacts into the first group
      setGroups((prev) => prev.map((g, i) => i === 0 ? { ...g, contacts: [...g.contacts, ...SAMPLE_ROWS.filter((r) => r.status === 'valid')] } : g));
      setTour((t) => (t === 10 ? 11 : t));
    }, 1600);
  }

  // Campaign builder
  const [showCampaign, setShowCampaign] = useState(false);
  const [campStep, setCampStep] = useState(1); // 1=Basic, 2=Recipients, 3=Content, 4=Review
  const [showVarMenu, setShowVarMenu] = useState(false);
  const [campName, setCampName] = useState('');
  const [campSubject, setCampSubject] = useState('');
  const [campFromName, setCampFromName] = useState('');
  const [campFromEmail, setCampFromEmail] = useState('');
  const [recipientType, setRecipientType] = useState('All Contacts');
  const [contentType, setContentType] = useState('HTML Email');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [previewMode, setPreviewMode] = useState<'web' | 'mobile'>('web');

  const VARIABLES = [
    { label: 'First Name', token: '{{firstName}}', desc: "Contact's first name", ex: 'John' },
    { label: 'Last Name', token: '{{lastName}}', desc: "Contact's last name", ex: 'Doe' },
    { label: 'Full Name', token: '{{fullName}}', desc: "Contact's full name", ex: 'John Doe' },
    { label: 'Email', token: '{{email}}', desc: "Contact's email address", ex: 'john@example.com' },
    { label: 'Company', token: '{{company}}', desc: "Contact's company", ex: 'Acme Inc' },
  ];
  const SAVED_TEMPLATES = [
    { name: 'Product Launch', desc: 'Announce a new product with a bold hero.', color: '#7C3AED' },
    { name: 'Monthly Newsletter', desc: 'Clean multi-section newsletter layout.', color: '#0d9488' },
    { name: 'Welcome Email', desc: 'Warm onboarding message for new signups.', color: '#f59e0b' },
  ];

  function openCampaign() {
    setCampStep(1); setCampName(''); setCampSubject(''); setCampFromName(''); setCampFromEmail('');
    setRecipientType('All Contacts'); setContentType('HTML Email'); setSelectedTemplate(null); setPreviewMode('web');
    setShowCampaign(true);
  }

  function recipientCount() {
    if (recipientType === 'All Contacts') return groups.reduce((n, g) => n + g.contacts.length, 0);
    const g = groups.find((gr) => gr.name === recipientType);
    return g ? g.contacts.length : 0;
  }

  // Templates
  const [showTemplateBuilder, setShowTemplateBuilder] = useState(false);
  const [templateFilter, setTemplateFilter] = useState('All');
  const [templateName, setTemplateName] = useState('New Visual Template');

  // Analytics
  const [analyticsTab, setAnalyticsTab] = useState('Overview');
  const ANALYTICS_TOP = [
    { label: 'Total Sent (30d)', value: '48,920', sub: 'Across 42 campaigns', Icon: Mail, color: '#2563eb' },
    { label: 'Avg Open Rate', value: '46.2%', sub: '22,601 total opens', Icon: Eye, color: '#059669' },
    { label: 'Avg Click Rate', value: '18.7%', sub: '9,148 total clicks', Icon: MousePointerClick, color: '#7C3AED' },
    { label: 'Avg Bounce Rate', value: '1.4%', sub: '685 total bounces', Icon: AlertCircle, color: '#f59e0b' },
  ];
  const ANALYTICS_OVERVIEW = [
    { label: 'Total Campaigns', value: '42', sub: '38 active campaigns', Icon: UsersRound, color: '#7C3AED' },
    { label: 'Total Emails Sent', value: '186,540', sub: 'Across all campaigns', Icon: Send, color: '#2563eb' },
    { label: 'Avg Open Rate', value: '44.8%', sub: 'Average across campaigns', Icon: Eye, color: '#059669' },
    { label: 'Avg Click Rate', value: '17.3%', sub: 'Average across campaigns', Icon: MousePointerClick, color: '#ec4899' },
  ];
  const PERF_OVERVIEW = [
    { label: 'Delivered', pct: 98.6, color: '#2563eb' },
    { label: 'Opened', pct: 46.2, color: '#059669' },
    { label: 'Clicked', pct: 18.7, color: '#7C3AED' },
    { label: 'Bounced', pct: 1.4, color: '#f59e0b' },
  ];
  const TOP_CAMPAIGNS = [
    { name: 'September Newsletter', open: '54.9%', sent: '4,210', color: '#7C3AED' },
    { name: 'Autumn Sale Promo', open: '48.7%', sent: '8,940', color: '#0d9488' },
    { name: 'Welcome Series #3', open: '46.2%', sent: '1,120', color: '#2563eb' },
    { name: 'Product Update v2.4', open: '41.3%', sent: '6,530', color: '#ec4899' },
  ];
  const LIVE_FEED = [
    { who: 'amara.okafor@brightlane.com', action: 'opened', campaign: 'September Newsletter', time: '2s ago', color: '#059669' },
    { who: 'diego.ramirez@nova-tech.io', action: 'clicked', campaign: 'Autumn Sale Promo', time: '9s ago', color: '#7C3AED' },
    { who: 'priya.nair@cloudpeak.co', action: 'opened', campaign: 'Welcome Series #3', time: '21s ago', color: '#059669' },
    { who: 'lena.moretti@vistagroup.it', action: 'delivered', campaign: 'Product Update v2.4', time: '34s ago', color: '#2563eb' },
    { who: 'kwame.mensah@accralink.gh', action: 'clicked', campaign: 'September Newsletter', time: '48s ago', color: '#7C3AED' },
  ];
  const segs = donutSegments();

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f7f8fa', position: 'relative' }}>
      {/* Step 1 — Dashboard welcome */}
      {tour === 1 && activeNav === 'Dashboard' && (
        <div style={{ position: 'absolute', top: '210px', left: '50%', transform: 'translateX(-30px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Welcome to SendRit"
            subtitle="Your email marketing hub — track performance, manage contacts, and send campaigns."
            onNext={() => setTour(2)}
            top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Step 2 — Invite User pointer */}
      {tour === 2 && activeNav === 'Dashboard' && (
        <div style={{ position: 'absolute', top: '130px', right: '230px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Invite your team"
            subtitle="Click Invite User to add teammates to your SendRit workspace."
            onNext={() => { setShowInvite(true); setTour(3); }}
            top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: '166px', flexShrink: 0, background: '#fff', borderRight: '1px solid #f0f0f0', padding: '14px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ marginBottom: '16px', paddingLeft: '4px' }}>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' }}>SendRit</div>
          <div style={{ fontSize: '8px', color: '#999' }}>Email Marketing App</div>
        </div>

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '6px', paddingLeft: '4px' }}>Main</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '14px' }}>
          {NAV_MAIN.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => { setActiveNav(item.label); setOpenGroupIdx(null); setShowCampaign(false); setShowTemplateBuilder(false); }} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '8px', background: active ? '#1a1a1a' : 'transparent', color: active ? '#fff' : '#555', fontWeight: active ? 600 : 500, fontSize: '10.5px', cursor: 'pointer' }}>
                <item.Icon size={13} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '6px', paddingLeft: '4px' }}>Advanced Features</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '14px' }}>
          {NAV_ADVANCED.map((item) => (
            <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '10.5px', cursor: 'pointer' }}>
              <item.Icon size={13} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '6px', paddingLeft: '4px' }}>Billing &amp; Credits</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '10.5px', marginBottom: '14px', cursor: 'pointer' }}>
          <CreditCard size={13} /> <span>Credits</span>
        </div>

        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '6px', paddingLeft: '4px' }}>Settings &amp; Support</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '10.5px', cursor: 'pointer' }}><UserCog size={13} /> <span>Profile Settings</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 9px', borderRadius: '8px', color: '#555', fontWeight: 500, fontSize: '10.5px', cursor: 'pointer' }}><Settings size={13} /> <span>Settings</span></div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>DM</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>David Miller</div>
            <div style={{ fontSize: '8px', color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>david.miller@snaarp.com</div>
          </div>
          <ChevronUp size={12} style={{ color: '#bbb', marginLeft: 'auto', flexShrink: 0 }} />
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 20px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
          <PanelLeft size={15} style={{ color: '#888' }} />
          <span style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 500 }}>Dashboard</span>
          {activeNav !== 'Dashboard' && <><span style={{ color: '#ccc', fontSize: '11px' }}>›</span><span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a' }}>{activeNav}</span></>}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto', color: '#888' }}>
            <LayoutGrid size={15} />
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>DM</div>
          </div>
        </div>

        {/* Scrollable content - Dashboard */}
        {activeNav === 'Dashboard' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
          {/* Hero */}
          <div style={{ background: '#141824', borderRadius: '14px', padding: '18px 22px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Dashboard</div>
              <div style={{ fontSize: '11px', color: '#aaa' }}>Welcome back! Here&apos;s an overview of your email marketing performance.</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
              <button onClick={() => { setShowInvite(true); if (tour === 2) setTour(3); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><UserPlus size={11} /> Invite User</button>
              <button onClick={() => setShowBulk(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', background: 'transparent', color: '#fff', border: '1px solid #444', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><UsersRound size={11} /> Bulk Invite</button>
            </div>
          </div>

          {/* Credit cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '16px' }}>
            <div style={{ borderRadius: '14px', padding: '16px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Email Credits</span>
                <CreditCard size={14} style={{ opacity: 0.9 }} />
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>24,600</div>
              <div style={{ fontSize: '9.5px', opacity: 0.9, marginBottom: '12px' }}>Credits available for sending emails</div>
              <div style={{ display: 'inline-block', padding: '5px 11px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', fontSize: '9px', fontWeight: 600 }}>Purchase More Credits</div>
            </div>
            <div style={{ borderRadius: '14px', padding: '16px', background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Validation Balance</span>
                <span style={{ opacity: 0.9 }}>✓</span>
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>8,150</div>
              <div style={{ fontSize: '9.5px', opacity: 0.9, marginBottom: '12px' }}>Credits available for email validation</div>
              <div style={{ display: 'inline-block', padding: '5px 11px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', fontSize: '9px', fontWeight: 600 }}>Purchase More Validation Credits</div>
            </div>
            <div style={{ borderRadius: '14px', padding: '16px', background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Zeus Credits</span>
                <Zap size={14} style={{ opacity: 0.9 }} />
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>1,920</div>
              <div style={{ fontSize: '9.5px', opacity: 0.9, marginBottom: '12px' }}>Connected · AI credits available</div>
              <div style={{ display: 'inline-block', padding: '5px 11px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', fontSize: '9px', fontWeight: 600 }}>Manage Zeus</div>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '16px' }}>
            {STAT_CARDS.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', color: '#888' }}>{s.label}</span>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><s.Icon size={12} style={{ color: '#888' }} /></div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', marginBottom: '3px' }}>{s.value}</div>
                <div style={{ fontSize: '9px', color: '#22c55e', fontWeight: 600 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: '14px', marginBottom: '16px' }}>
            {/* Monthly Email Performance - bar chart */}
            <div style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)', borderRadius: '14px', border: '1px solid #e8e6f5', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                <BarChart3 size={14} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Monthly Email Performance</span>
              </div>
              <div style={{ fontSize: '10px', color: '#7C3AED', marginBottom: '18px' }}>Track your email campaigns over the last 6 months</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '210px', gap: '14px', padding: '0 6px' }}>
                {BAR_DATA.map((b) => (
                  <div key={b.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>{b.v}k</div>
                    <div style={{ width: '100%', maxWidth: '34px', height: `${b.v * 1.9}px`, borderRadius: '6px 6px 0 0', background: 'linear-gradient(180deg, #a855f7 0%, #7C3AED 100%)' }} />
                    <div style={{ fontSize: '9px', color: '#888' }}>{b.m}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Types - donut */}
            <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 100%)', borderRadius: '14px', border: '1px solid #f3e8f5', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                <BarChart3 size={14} style={{ color: '#ec4899' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Campaign Types</span>
              </div>
              <div style={{ fontSize: '10px', color: '#888', marginBottom: '10px' }}>Distribution of your campaign types</div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                <svg viewBox="0 0 100 100" style={{ width: '120px', height: '120px', transform: 'rotate(-90deg)' }}>
                  {segs.map((s, i) => (
                    <circle key={i} cx="50" cy="50" r="42" fill="none" stroke={s.color} strokeWidth="14" strokeDasharray={s.dash} strokeDashoffset={s.offset} />
                  ))}
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {CAMPAIGN_TYPES.map((t) => (
                  <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.color }} />
                    <span style={{ fontSize: '10px', color: '#555', flex: 1 }}>{t.label}</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>{t.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: '14px', marginBottom: '16px' }}>
            {/* Performance Trends - line graph */}
            <div style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 100%)', borderRadius: '14px', border: '1px solid #d6f2e6', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                <BarChart3 size={14} style={{ color: '#10b981' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Performance Trends</span>
              </div>
              <div style={{ fontSize: '10px', color: '#0d9488', marginBottom: '14px' }}>Weekly open and click rates over the last month</div>
              <LineTrend />
              <div style={{ display: 'flex', gap: '16px', marginTop: '10px', paddingLeft: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9.5px', color: '#555' }}><span style={{ width: '14px', height: '3px', borderRadius: '2px', background: '#10b981' }} /> Open rate</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9.5px', color: '#555' }}><span style={{ width: '14px', height: '3px', borderRadius: '2px', background: '#0ea5e9' }} /> Click rate</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)', borderRadius: '14px', border: '1px solid #f5e8d6', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                <Send size={13} style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Quick Actions</span>
              </div>
              <div style={{ fontSize: '10px', color: '#b45309', marginBottom: '14px' }}>Get started with these common tasks</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {QUICK_ACTIONS.map((q) => (
                  <div key={q.label} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 13px', borderRadius: '10px', background: q.color, color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
                    <q.Icon size={13} /> {q.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Campaigns */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Mail size={13} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Recent Campaigns</span>
              </div>
              <button style={{ marginLeft: 'auto', padding: '5px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '14px' }}>Your latest email campaigns and their performance</div>

            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '8px', padding: '0 4px 8px', borderBottom: '1px solid #f0f0f0', fontSize: '9px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <span>Campaign</span><span>Sent</span><span>Open Rate</span><span>Click Rate</span><span>Status</span>
            </div>
            {RECENT_CAMPAIGNS.map((c) => (
              <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '8px', padding: '10px 4px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10.5px' }}>
                <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{c.name}</span>
                <span style={{ color: '#555' }}>{c.sent}</span>
                <span style={{ color: '#555' }}>{c.open}</span>
                <span style={{ color: '#555' }}>{c.click}</span>
                <span><span style={{ fontSize: '8px', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', background: c.statusBg, color: c.statusColor, textTransform: 'uppercase' }}>{c.status}</span></span>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Contacts view */}
        {activeNav === 'Contacts' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Contact Groups</div>
              <div style={{ fontSize: '11px', color: '#888' }}>Organize your contacts into groups for targeted campaigns.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <div style={{ position: 'relative' }}>
                <button onClick={() => { openImport(); if (tour === 6) setTour(7); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Upload size={11} /> Import Contacts</button>
                {tour === 6 && (
                  <div style={{ position: 'absolute', top: '44px', left: '50%', transform: 'translateX(-30px)', zIndex: 9999 }}>
                    <Coachmark visible title="Import your contacts" subtitle="Now upload contacts into your group. Click Import Contacts to bring them in." onNext={() => { openImport(); setTour(7); }} top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next" />
                  </div>
                )}
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Import size={11} /> Import from Zeus</button>
              <button onClick={() => setShowCreateGroup(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Plus size={11} /> Create New Group</button>
              <button onClick={() => setShowGroupsModal(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Settings size={11} /> Manage Groups</button>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {[
              { label: 'Total Contacts', value: String(groups.reduce((n, g) => n + g.contacts.length, 0)), Icon: UsersRound, accent: '#3b82f6' },
              { label: 'Subscribed', value: String(groups.reduce((n, g) => n + g.contacts.length, 0)), Icon: UsersRound, accent: '#10b981' },
              { label: 'Unsubscribed', value: '0', Icon: UsersRound, accent: '#f59e0b' },
              { label: 'Groups', value: String(groups.length), Icon: FileText, accent: '#7C3AED' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', borderLeft: `3px solid ${s.accent}`, padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', color: '#888' }}>{s.label}</span>
                  <s.Icon size={13} style={{ color: s.accent }} />
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#1a1a1a', color: '#fff', borderRadius: '16px', fontSize: '10px', fontWeight: 600 }}><Search size={11} /> Search Prospects</div>
          </div>

          {/* Groups grid or empty state */}
          {groups.length === 0 ? (
            <div style={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '14px', padding: '46px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>No groups yet</div>
              <div style={{ fontSize: '11.5px', color: '#999', marginBottom: '18px' }}>Create your first group to organize your contacts.</div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={() => { setShowCreateGroup(true); if (tour === 4) setTour(5); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> Create Group</button>
                {tour === 4 && (
                  <div style={{ position: 'absolute', top: '46px', left: '50%', transform: 'translateX(-30px)', zIndex: 9999 }}>
                    <Coachmark visible title="Create a group" subtitle="Groups organize your contacts so you can target them in campaigns. Click Create Group." onNext={() => { setShowCreateGroup(true); setTour(5); }} top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next" />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
              {groups.map((g, i) => (
                <div key={i} onClick={() => setOpenGroupIdx(i)} style={{ background: '#fff', border: '1px solid #f0f0f0', borderTop: `3px solid ${g.color}`, borderRadius: '12px', padding: '14px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: `${g.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UsersRound size={13} style={{ color: g.color }} /></div>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{g.name}</span>
                  </div>
                  <div style={{ fontSize: '9.5px', color: '#999', lineHeight: 1.5, minHeight: '28px' }}>{g.desc || 'No description'}</div>
                  <div style={{ fontSize: '9px', color: '#bbb', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #f5f5f5' }}>{g.contacts.length} contacts</div>
                </div>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Campaigns list view */}
        {activeNav === 'Campaigns' && !showCampaign && (
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
            {['All Campaigns', 'Sent', 'Draft', 'Scheduled'].map((t, i) => (
              <div key={t} style={{ flex: 1, textAlign: 'center', padding: '11px', fontSize: '11px', fontWeight: 600, color: i === 0 ? '#1a1a1a' : '#999', borderBottom: i === 0 ? '2px solid #1a1a1a' : '2px solid transparent', cursor: 'pointer' }}>{t}</div>
            ))}
          </div>

          <div style={{ padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Email Campaigns</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Create, manage, and track your email marketing campaigns</div>
              </div>
              <button onClick={openCampaign} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}><Plus size={13} /> Create Campaign</button>
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
              {[
                { label: 'Total Campaigns', value: '0', Icon: Mail, accent: '#7C3AED' },
                { label: 'Total Recipients', value: '0', Icon: UsersRound, accent: '#10b981' },
                { label: 'Avg. Open Rate', value: '0.0%', Icon: BarChart3, accent: '#f59e0b' },
                { label: 'Scheduled', value: '0', Icon: CalendarClock, accent: '#7C3AED' },
              ].map((s) => (
                <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', color: '#888' }}>{s.label}</span>
                    <s.Icon size={14} style={{ color: s.accent }} />
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#fff', border: '1px solid #f0f0f0', borderRadius: '12px', marginBottom: '18px', color: '#aaa', fontSize: '11px' }}>
              <Search size={13} /> Search campaigns...
            </div>

            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Campaign List</div>
            <div style={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '14px', padding: '44px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Mail size={30} style={{ color: '#d5d5d5', marginBottom: '12px' }} />
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>No campaigns yet</div>
              <div style={{ fontSize: '11.5px', color: '#999', marginBottom: '18px' }}>Create your first email campaign to get started</div>
              <button onClick={openCampaign} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> Create Your First Campaign</button>
            </div>
          </div>
        </div>
        )}

        {/* Campaign builder wizard */}
        {activeNav === 'Campaigns' && showCampaign && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px', background: 'linear-gradient(180deg, #f6f7fb 0%, #fafafa 120px)' }}>
          <div onClick={() => setShowCampaign(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#1a1a1a', fontSize: '11px', fontWeight: 500, cursor: 'pointer', marginBottom: '12px' }}><ArrowLeft size={14} /> Back to Campaigns</div>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>Create New Campaign</div>
            <div style={{ fontSize: '11px', color: '#888' }}>Set up your email marketing campaign step by step</div>
          </div>

          {/* Stepper */}
          <div style={{ background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)', border: '1px solid #e8e6f5', borderRadius: '14px', padding: '16px 20px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#555' }}>Step {campStep} of 4</span>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED', background: '#EDE9FE', padding: '2px 8px', borderRadius: '10px' }}>{campStep * 25}% Complete</span>
            </div>
            <div style={{ height: '5px', borderRadius: '4px', background: '#e5e2f2', overflow: 'hidden', marginBottom: '14px' }}>
              <div style={{ height: '100%', width: `${campStep * 25}%`, background: campStep === 4 ? '#10b981' : '#1a1a1a', borderRadius: '4px', transition: 'width 0.3s' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {[{ n: '1. Basic Info', s: 'Campaign details' }, { n: '2. Recipients', s: 'Target audience' }, { n: '3. Content', s: 'Email content' }, { n: '4. Review', s: 'Final review' }].map((st, i) => {
                const step = i + 1; const done = campStep > step; const cur = campStep === step;
                return (
                  <div key={st.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: done ? '#10b981' : cur ? '#1a1a1a' : '#e5e5e5', color: done || cur ? '#fff' : '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}>
                      {done ? <Check size={13} strokeWidth={3} /> : step}
                    </div>
                    <span style={{ fontSize: '9.5px', fontWeight: 600, color: cur ? '#1a1a1a' : '#888' }}>{st.n}</span>
                    <span style={{ fontSize: '8px', color: '#aaa' }}>{st.s}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step card */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', overflow: 'hidden' }}>
            {/* Card header */}
            <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>{campStep === 4 ? <Check size={15} /> : campStep}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{['Campaign Details', 'Target Audience', 'Email Content', 'Review Your Campaign'][campStep - 1]}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>{['Let\u2019s start with the basic information about your campaign', 'Choose who will receive this campaign', 'Choose a template or create your own content with HTML and personalization', 'Review all details before sending'][campStep - 1]}</div>
              </div>
            </div>

            <div style={{ padding: '20px' }}>
              {/* STEP 1 — Basic Info */}
              {campStep === 1 && (
                <>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Campaign Name <span style={{ color: '#ef4444' }}>*</span></div>
                  <input value={campName} onChange={(e) => setCampName(e.target.value)} placeholder="Enter campaign name" style={{ width: '100%', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }} />

                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Email Subject <span style={{ color: '#ef4444' }}>*</span></div>
                  <div style={{ position: 'relative', marginBottom: '8px' }}>
                    <div onClick={() => setShowVarMenu((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', color: '#555', cursor: 'pointer' }}>
                      <Plus size={12} /> Insert Variable <ChevronUp size={12} style={{ marginLeft: 'auto', transform: showVarMenu ? 'none' : 'rotate(180deg)', color: '#999' }} />
                    </div>
                    {showVarMenu && (
                      <div style={{ position: 'absolute', top: '44px', left: 0, width: '260px', background: '#fff', borderRadius: '12px', boxShadow: '0 12px 36px -10px rgba(0,0,0,0.25)', border: '1px solid #eee', padding: '12px', zIndex: 50 }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Personalization Variables</div>
                        <div style={{ fontSize: '9px', color: '#7C3AED', marginBottom: '10px' }}>Click on a variable to insert it into your content</div>
                        <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.06em', color: '#aaa', marginBottom: '8px' }}>STANDARD FIELDS</div>
                        {VARIABLES.map((v) => (
                          <div key={v.token} onClick={() => { setCampSubject((s) => s + v.token); setShowVarMenu(false); }} style={{ display: 'flex', gap: '8px', padding: '7px 6px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Mail size={12} style={{ color: '#7C3AED', marginTop: '2px', flexShrink: 0 }} />
                            <div>
                              <div style={{ fontSize: '10.5px', color: '#1a1a1a' }}><b>{v.label}</b> <span style={{ color: '#7C3AED', fontWeight: 600 }}>{v.token}</span></div>
                              <div style={{ fontSize: '8.5px', color: '#888' }}>{v.desc}</div>
                              <div style={{ fontSize: '8.5px', color: '#bbb' }}>Example: {v.ex}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input value={campSubject} onChange={(e) => setCampSubject(e.target.value)} placeholder="Enter email subject line (e.g., Hello {{firstName}}!)" style={{ width: '100%', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', marginBottom: '16px' }} />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>From Name <span style={{ color: '#ef4444' }}>*</span></div>
                      <input value={campFromName} onChange={(e) => setCampFromName(e.target.value)} placeholder="Your name or company" style={{ width: '100%', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>From Email <span style={{ color: '#ef4444' }}>*</span></div>
                      <input value={campFromEmail} onChange={(e) => setCampFromEmail(e.target.value)} placeholder="sender@yourcompany.com" style={{ width: '100%', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', marginBottom: '8px' }} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '10px', color: '#555', cursor: 'pointer' }}><Settings size={12} /> Manage Senders (0 selected)</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Reply-To Email <span style={{ color: '#999', fontWeight: 400 }}>(Optional)</span></div>
                  <input placeholder="replies@yourcompany.com" style={{ width: '100%', padding: '10px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box' }} />
                  <div style={{ fontSize: '9px', color: '#aaa', marginTop: '5px' }}>If set, recipients&apos; replies will go to this address instead of the sender email</div>
                </>
              )}

              {/* STEP 2 — Recipients */}
              {campStep === 2 && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Recipient Type</div>
                    <select value={recipientType} onChange={(e) => setRecipientType(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '11px', color: '#1a1a1a', outline: 'none', marginBottom: '12px', background: '#fff' }}>
                      <option>All Contacts</option>
                      {groups.map((g) => <option key={g.name}>{g.name}</option>)}
                    </select>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 12px', background: '#f3efff', borderRadius: '10px', fontSize: '10px', color: '#555' }}>
                      <UsersRound size={13} style={{ color: '#7C3AED' }} />
                      {recipientType === 'All Contacts' ? 'This campaign will be sent to all subscribed contacts in your account.' : `This campaign will be sent to the "${recipientType}" group.`}
                    </div>
                  </div>
                  <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Recipients: <span style={{ color: '#7C3AED' }}>{recipientCount()}</span></div>
                    <div style={{ fontSize: '9.5px', color: '#888', marginBottom: '5px' }}>Includes:</div>
                    <div style={{ fontSize: '10px', color: '#555' }}>{recipientCount() === 0 ? 'No contacts selected' : `${recipientCount()} contacts from ${recipientType}`}</div>
                  </div>
                </div>
              )}

              {/* STEP 3 — Content */}
              {campStep === 3 && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {/* Editor */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Email Editor <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} /></div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Email Content Type <span style={{ color: '#ef4444' }}>*</span></div>
                    <select value={contentType} onChange={(e) => { setContentType(e.target.value); setSelectedTemplate(null); }} style={{ padding: '7px 11px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '11px', color: '#1a1a1a', outline: 'none', marginBottom: '4px', background: '#fff' }}>
                      <option>HTML Email</option>
                      <option>Plain Text Email</option>
                      <option>Use Saved Template</option>
                    </select>
                    <div style={{ fontSize: '9px', color: '#999', marginBottom: '14px' }}>Choose the format for your email content. You can use either HTML OR plain text, but not both together.</div>

                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Subject Line <span style={{ color: '#ef4444' }}>*</span></div>
                    <input value={campSubject} onChange={(e) => setCampSubject(e.target.value)} placeholder="{{firstName}}" style={{ width: '100%', padding: '9px 12px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '8px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', marginBottom: '3px' }} />
                    <div style={{ fontSize: '9px', color: '#999', marginBottom: '14px' }}>This will appear in the recipient&apos;s inbox</div>

                    {contentType === 'HTML Email' && (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                          <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>HTML Content <span style={{ color: '#ef4444' }}>*</span></span>
                          <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: '#f0f0f0', borderRadius: '12px', fontSize: '9px', fontWeight: 600, color: '#555', cursor: 'pointer' }}><Plus size={10} /> Insert Variable</div>
                        </div>
                        <textarea placeholder="Paste your email HTML content..." rows={6} style={{ width: '100%', padding: '11px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'monospace' }} />
                        <div style={{ background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: '10px', padding: '12px', marginTop: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700, color: '#2563eb', marginBottom: '8px' }}><Code2 size={12} /> HTML Best Practices</div>
                          {['Use inline styles for better email client compatibility', 'Test your email in different clients before sending', 'Keep your HTML simple and avoid complex CSS', 'Include alt text for images'].map((t) => (
                            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#2563eb', marginBottom: '4px' }}><CheckCircle2 size={10} /> {t}</div>
                          ))}
                        </div>
                      </>
                    )}

                    {contentType === 'Plain Text Email' && (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                          <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Plain Text Content <span style={{ color: '#ef4444' }}>*</span></span>
                          <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', background: '#f0f0f0', borderRadius: '12px', fontSize: '9px', fontWeight: 600, color: '#555', cursor: 'pointer' }}><Plus size={10} /> Insert Variable</div>
                        </div>
                        <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 10px', borderBottom: '1px solid #f0f0f0', color: '#888', fontSize: '11px' }}>
                            <span style={{ fontWeight: 700 }}>B</span><span style={{ fontStyle: 'italic' }}>I</span><span style={{ textDecoration: 'underline' }}>U</span><span>•</span><span>1.</span><span>🔗</span>
                          </div>
                          <textarea placeholder="Enter your plain text email content..." rows={6} style={{ width: '100%', padding: '11px', border: 'none', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
                        </div>
                        <div style={{ fontSize: '9px', color: '#999', marginTop: '8px' }}>Use variables like {'{{firstName}}'} for personalization.</div>
                      </>
                    )}

                    {contentType === 'Use Saved Template' && (
                      <>
                        <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '8px' }}>Select Template <span style={{ color: '#ef4444' }}>*</span></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {SAVED_TEMPLATES.map((t, i) => {
                            const active = selectedTemplate === i;
                            return (
                              <div key={t.name} onClick={() => setSelectedTemplate(i)} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px', borderRadius: '10px', border: active ? '1.5px solid #7C3AED' : '1px solid #eee', background: active ? '#faf7ff' : '#fff', cursor: 'pointer' }}>
                                <div style={{ width: '34px', height: '40px', borderRadius: '5px', background: `${t.color}22`, borderTop: `4px solid ${t.color}`, flexShrink: 0 }} />
                                <div style={{ flex: 1 }}>
                                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>{t.name}</div>
                                  <div style={{ fontSize: '9px', color: '#888' }}>{t.desc}</div>
                                </div>
                                {active && <CheckCircle2 size={15} style={{ color: '#7C3AED' }} />}
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Live preview */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Live Preview <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} /></div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                        <div onClick={() => setPreviewMode('web')} style={{ padding: '5px', borderRadius: '6px', cursor: 'pointer', background: previewMode === 'web' ? '#f3efff' : 'transparent', color: previewMode === 'web' ? '#7C3AED' : '#aaa', display: 'flex' }}><LayoutGrid size={13} /></div>
                        <div onClick={() => setPreviewMode('mobile')} style={{ padding: '5px', borderRadius: '6px', cursor: 'pointer', background: previewMode === 'mobile' ? '#f3efff' : 'transparent', color: previewMode === 'mobile' ? '#7C3AED' : '#aaa', display: 'flex' }}><PanelLeft size={13} /></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: previewMode === 'mobile' ? '240px' : '100%', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', background: '#f9fafb' }}>
                        <div style={{ padding: '12px 14px', borderBottom: '1px solid #f0f0f0', fontSize: '9.5px', color: '#555', lineHeight: 1.7 }}>
                          <div>From: <b style={{ color: '#1a1a1a' }}>{campFromName || 'Snaarp'}</b> &lt;{campFromEmail || 'yinka@snaarp.com'}&gt;</div>
                          <div style={{ color: '#999' }}>To: No recipients selected yet</div>
                          <div style={{ color: '#999', fontSize: '8.5px' }}>Each recipient will see their own email address</div>
                          <div>Subject: <b style={{ color: '#1a1a1a' }}>{campSubject || '{{firstName}}'}</b></div>
                        </div>
                        <div style={{ padding: '20px 14px', minHeight: '90px' }}>
                          {contentType === 'Use Saved Template' && selectedTemplate !== null ? (
                            <div>
                              <div style={{ height: '10px', width: '60%', borderRadius: '3px', background: SAVED_TEMPLATES[selectedTemplate].color, marginBottom: '8px' }} />
                              {[100, 90, 95, 70].map((w, i) => <div key={i} style={{ height: '6px', width: `${w}%`, borderRadius: '3px', background: '#e5e7eb', marginBottom: '6px' }} />)}
                            </div>
                          ) : (
                            <div style={{ fontSize: '10px', color: '#aaa' }}>Your email content will appear here...</div>
                          )}
                        </div>
                        <div style={{ padding: '10px 14px', background: '#eff6ff', fontSize: '8.5px', color: '#2563eb' }}>• Variables like {'{{firstName}}'} will be replaced with actual data when sent</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4 — Review */}
              {campStep === 4 && (
                <div>
                  <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', borderRadius: '12px', padding: '16px 18px', marginBottom: '14px', position: 'relative' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Campaign Summary</div>
                    <span style={{ position: 'absolute', top: '16px', right: '18px', fontSize: '8px', fontWeight: 700, padding: '3px 9px', borderRadius: '10px', background: '#10b981', color: '#fff' }}>Ready to Send</span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', fontSize: '10px', color: 'rgba(255,255,255,0.9)' }}>
                      <div><div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8.5px' }}>Campaign Name</div>{campName || 'Untitled Campaign'}</div>
                      <div><div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8.5px' }}>Subject Line</div>{campSubject || '{{firstName}}'}</div>
                      <div><div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8.5px' }}>From</div>{(campFromName || 'Snaarp')} &lt;{campFromEmail || 'yinka@snaarp.com'}&gt;</div>
                      <div><div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8.5px' }}>Recipients</div>{recipientType}</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ border: '1px solid #dbeafe', background: '#eff6ff', borderRadius: '10px', padding: '12px' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#2563eb' }}>{recipientCount()}</div><div style={{ fontSize: '9px', color: '#2563eb' }}>Total Recipients</div></div>
                    <div style={{ border: '1px solid #f3e8f5', background: '#faf5ff', borderRadius: '10px', padding: '12px' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#7C3AED' }}>{recipientType === 'All Contacts' ? 0 : 1}</div><div style={{ fontSize: '9px', color: '#7C3AED' }}>Groups Selected</div></div>
                    <div style={{ border: '1px solid #A7F3D0', background: '#ECFDF5', borderRadius: '10px', padding: '12px' }}><div style={{ fontSize: '20px', fontWeight: 800, color: '#059669' }}>100%</div><div style={{ fontSize: '9px', color: '#059669' }}>Campaign Ready</div></div>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', borderRadius: '12px', padding: '16px 18px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Ready to Send?</div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button style={{ flex: 1, padding: '10px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Send Test</button>
                      <button style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Save Draft</button>
                      <button style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Schedule</button>
                      <button style={{ flex: 1, padding: '10px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Send Now</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer nav */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px', borderTop: '1px solid #f0f0f0' }}>
              <button onClick={() => setCampStep((s) => Math.max(1, s - 1))} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>‹ Previous</button>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><FileText size={12} /> Save Draft</button>
                {campStep < 4 && <button onClick={() => setCampStep((s) => Math.min(4, s + 1))} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 20px', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Next ›</button>}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Templates view */}
        {activeNav === 'Templates' && !showTemplateBuilder && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Templates</div>
              <div style={{ fontSize: '11px', color: '#888' }}>0 templates in your library</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Sparkles size={12} style={{ color: '#7C3AED' }} /> Generate with AI</button>
              <button onClick={() => setShowTemplateBuilder(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> New Template</button>
            </div>
          </div>

          {/* Category chips */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {[{ l: 'All', Icon: LayoutGrid }, { l: 'Custom', Icon: Sparkles }, { l: 'Newsletter', Icon: Mail }, { l: 'Promotional', Icon: Send }, { l: 'Welcome', Icon: UsersRound }, { l: 'Transactional', Icon: FileText }].map((c) => {
              const active = templateFilter === c.l;
              return (
                <div key={c.l} onClick={() => setTemplateFilter(c.l)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', borderRadius: '16px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer', background: active ? '#1a1a1a' : '#fff', color: active ? '#fff' : '#666', border: active ? 'none' : '1px solid #eee' }}>
                  <c.Icon size={11} /> {c.l}
                </div>
              );
            })}
          </div>

          {/* Search + sort */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#fff', border: '1px solid #f0f0f0', borderRadius: '20px', color: '#aaa', fontSize: '11px' }}><Search size={13} /> Search templates...</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '9px 12px', background: '#fff', border: '1px solid #eee', borderRadius: '18px', fontSize: '10.5px', color: '#555', fontWeight: 600 }}>Last Updated <ChevronDown size={12} /></div>
            <div style={{ display: 'flex', gap: '2px', padding: '3px', background: '#1a1a1a', borderRadius: '9px' }}>
              <div style={{ padding: '5px', borderRadius: '6px', background: '#333', color: '#fff', display: 'flex' }}><LayoutGrid size={13} /></div>
              <div style={{ padding: '5px', borderRadius: '6px', color: '#888', display: 'flex' }}><ListIcon size={13} /></div>
            </div>
          </div>

          {/* Empty state */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '48px 22px' }}>
            <div style={{ width: '58px', height: '58px', borderRadius: '14px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}><Mail size={26} style={{ color: '#2563eb' }} /></div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>Start building your library</div>
            <div style={{ fontSize: '11.5px', color: '#999', marginBottom: '18px' }}>Create your first email template to get started</div>
            <button onClick={() => setShowTemplateBuilder(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> Create Template</button>
          </div>
        </div>
        )}

        {/* Template visual builder */}
        {activeNav === 'Templates' && showTemplateBuilder && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Builder top bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 18px', borderBottom: '1px solid #f0f0f0' }}>
            <div onClick={() => setShowTemplateBuilder(false)} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#1a1a1a', fontSize: '11px', fontWeight: 500, cursor: 'pointer' }}><ArrowLeft size={14} /> Back</div>
            <input value={templateName} onChange={(e) => setTemplateName(e.target.value)} style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', border: '1px solid transparent', borderRadius: '6px', padding: '4px 8px', outline: 'none', width: '160px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10.5px', color: '#888', cursor: 'pointer' }}>Details <ChevronDown size={12} /></div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
              <button onClick={() => setShowTemplateBuilder(false)} style={{ padding: '7px 16px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => setShowTemplateBuilder(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><FileText size={12} /> Save</button>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Canvas */}
            <div style={{ flex: 1, background: '#f4f4f6', padding: '20px', overflowY: 'auto', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'inline-flex', gap: '4px', padding: '4px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
                  <div style={{ padding: '4px 8px', borderRadius: '6px', background: '#f0f0f0', color: '#555', display: 'flex' }}><LayoutGrid size={13} /></div>
                  <div style={{ padding: '4px 8px', borderRadius: '6px', color: '#aaa', display: 'flex', marginLeft: 'auto' }}><Eye size={13} /></div>
                </div>
              </div>
              <div style={{ maxWidth: '520px', margin: '0 auto', minHeight: '380px', background: 'repeating-conic-gradient(#f0f0f2 0% 25%, #f7f7f9 0% 50%) 50% / 16px 16px', borderRadius: '8px', padding: '14px' }}>
                <div style={{ border: '1.5px dashed #a5c8f0', background: '#eef5fd', borderRadius: '8px', padding: '26px', textAlign: 'center', fontSize: '11px', color: '#3b82f6', fontWeight: 500 }}>No content here. Drag content from right.</div>
              </div>
            </div>

            {/* Right panel with tabs */}
            <div style={{ width: '210px', flexShrink: 0, borderLeft: '1px solid #f0f0f0', display: 'flex' }}>
              <div style={{ flex: 1, padding: '14px 12px', overflowY: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[{ Icon: Columns3, l: 'Columns' }, { Icon: SquareMousePointer, l: 'Button' }, { Icon: Minus, l: 'Divider' }, { Icon: Heading, l: 'Heading' }, { Icon: Pilcrow, l: 'Paragraph' }, { Icon: ImageIcon, l: 'Image' }, { Icon: UsersRound, l: 'Social' }, { Icon: MenuIcon, l: 'Menu' }, { Icon: Code2, l: 'HTML' }].map((c) => (
                    <div key={c.l} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'grab', background: '#fff' }}>
                      <c.Icon size={17} style={{ color: '#555' }} />
                      <span style={{ fontSize: '8.5px', color: '#666', fontWeight: 500 }}>{c.l}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Vertical tab rail */}
              <div style={{ width: '42px', flexShrink: 0, borderLeft: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: '14px' }}>
                {[{ Icon: Columns3, l: 'Content', active: true }, { Icon: LayoutGrid, l: 'Blocks' }, { Icon: FileText, l: 'Body' }].map((t) => (
                  <div key={t.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: t.active ? '#7C3AED' : '#aaa', cursor: 'pointer' }}>
                    <t.Icon size={15} />
                    <span style={{ fontSize: '7px', fontWeight: 600 }}>{t.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Analytics view */}
        {activeNav === 'Analytics' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Analytics Dashboard</div>
              <div style={{ fontSize: '11px', color: '#888' }}>Comprehensive email marketing analytics with real-time insights and campaign comparisons.</div>
            </div>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 14px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}><RefreshCw size={12} /> Refresh Data</button>
          </div>

          {/* Top stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '16px' }}>
            {ANALYTICS_TOP.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#888', marginBottom: '8px' }}><s.Icon size={12} style={{ color: s.color }} /> {s.label}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: s.color, marginBottom: '3px' }}>{s.value}</div>
                <div style={{ fontSize: '9px', color: '#999' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '18px', borderBottom: '1px solid #f0f0f0', marginBottom: '16px', overflowX: 'auto' }}>
            {[{ l: 'Overview', Icon: BarChart3 }, { l: 'Campaign', Icon: TrendingUp }, { l: 'Performance', Icon: Activity }, { l: 'Timeline', Icon: CalendarClock }, { l: 'Compare', Icon: Columns3 }, { l: 'Advanced', Icon: Sparkles }, { l: 'Events', Icon: ListIcon }].map((t) => {
              const active = analyticsTab === t.l;
              return (
                <div key={t.l} onClick={() => setAnalyticsTab(t.l)} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 0', fontSize: '11px', fontWeight: active ? 600 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap' }}><t.Icon size={12} /> {t.l}</div>
              );
            })}
          </div>

          {/* Overview stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '16px' }}>
            {ANALYTICS_OVERVIEW.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#888', marginBottom: '8px' }}><s.Icon size={12} style={{ color: s.color }} /> {s.label}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: s.color, marginBottom: '3px' }}>{s.value}</div>
                <div style={{ fontSize: '9px', color: '#999' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Performance Overview + Top Campaigns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}><TrendingUp size={13} style={{ color: '#7C3AED' }} /> Performance Overview</div>
              <div style={{ fontSize: '10px', color: '#888', marginBottom: '16px' }}>Average performance rates across all campaigns</div>
              {PERF_OVERVIEW.map((p) => (
                <div key={p.label} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '5px' }}><span style={{ color: '#555' }}>{p.label}</span><span style={{ fontWeight: 700, color: '#1a1a1a' }}>{p.pct}%</span></div>
                  <div style={{ height: '7px', borderRadius: '4px', background: '#f0f0f0', overflow: 'hidden' }}><div style={{ height: '100%', width: `${p.pct}%`, background: p.color, borderRadius: '4px' }} /></div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}><BarChart3 size={13} style={{ color: '#ec4899' }} /> Top Performing Campaigns</div>
              <div style={{ fontSize: '10px', color: '#888', marginBottom: '14px' }}>Campaigns with the highest open rates</div>
              {TOP_CAMPAIGNS.map((c, i) => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: i < TOP_CAMPAIGNS.length - 1 ? '1px solid #f8f8f8' : 'none' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: `${c.color}22`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                    <div style={{ fontSize: '9px', color: '#999' }}>{c.sent} sent</div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#059669' }}>{c.open}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Monitoring */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}><Activity size={13} style={{ color: '#7C3AED' }} /> Real-time Monitoring</div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '14px' }}>Live analytics and activity monitoring</div>

            <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '12px 14px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#059669', fontWeight: 600 }}><span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} /> Live</div>
              <div style={{ fontSize: '10px', color: '#555' }}>Campaign: <b style={{ color: '#1a1a1a' }}>All campaigns</b></div>
              <div style={{ fontSize: '10px', color: '#555' }}>Refresh: <b style={{ color: '#1a1a1a' }}>30s</b></div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#7C3AED', fontWeight: 600, marginLeft: 'auto', cursor: 'pointer' }}><RefreshCw size={11} /> Refresh</div>
              <span style={{ fontSize: '9px', color: '#aaa' }}>Last update: 2s ago</span>
            </div>

            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Live Activity Feed</div>
            <div style={{ fontSize: '9.5px', color: '#888', marginBottom: '10px' }}>Recent email events across all campaigns</div>
            <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
              {LIVE_FEED.map((e, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '9px 12px', borderBottom: i < LIVE_FEED.length - 1 ? '1px solid #f8f8f8' : 'none' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: e.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '10px', color: '#1a1a1a', flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><b>{e.who}</b> <span style={{ color: e.color, fontWeight: 600 }}>{e.action}</span> · {e.campaign}</span>
                  <span style={{ fontSize: '9px', color: '#aaa', flexShrink: 0 }}>{e.time}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '9.5px', color: '#059669', fontWeight: 600, marginTop: '10px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} /> Real-time updates enabled</div>
          </div>

          {/* Recent Activity Summary */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}><BarChart3 size={13} style={{ color: '#2563eb' }} /> Recent Activity Summary</div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '14px' }}>Latest email events across all campaigns</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {[{ l: 'Emails Opened', v: '1,284', c: '#059669' }, { l: 'Links Clicked', v: '512', c: '#7C3AED' }, { l: 'New Subscribers', v: '96', c: '#2563eb' }, { l: 'Unsubscribes', v: '7', c: '#f59e0b' }].map((s) => (
                <div key={s.l} style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: s.c }}>{s.v}</div>
                  <div style={{ fontSize: '9px', color: '#888' }}>{s.l}</div>
                  <div style={{ fontSize: '8px', color: '#bbb', marginTop: '2px' }}>last 24 hours</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Other nav placeholders */}
        {activeNav !== 'Dashboard' && activeNav !== 'Contacts' && activeNav !== 'Campaigns' && activeNav !== 'Templates' && activeNav !== 'Analytics' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '22px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{activeNav}</div>
            <div style={{ fontSize: '11px', color: '#999' }}>This section is coming soon.</div>
          </div>
        )}
      </div>

      {/* Group detail view (contacts table) */}
      {activeNav === 'Contacts' && openGroupIdx !== null && groups[openGroupIdx] && (
        <div style={{ position: 'absolute', inset: 0, background: '#fff', zIndex: 80, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 20px', borderBottom: '1px solid #f0f0f0' }}>
            <div onClick={() => setOpenGroupIdx(null)} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7C3AED', fontSize: '11px', fontWeight: 500, cursor: 'pointer' }}><ArrowLeft size={14} /> Back</div>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${groups[openGroupIdx].color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '6px' }}><UsersRound size={14} style={{ color: groups[openGroupIdx].color }} /></div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>{groups[openGroupIdx].name}</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>{groups[openGroupIdx].contacts.length} contacts · {groups[openGroupIdx].desc || 'No description'}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', background: '#f4f4f5', borderRadius: '16px', fontSize: '10px', color: '#999', width: '160px' }}><Search size={12} /> Search contacts...</div>
              <button onClick={openImport} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}><Upload size={11} /> Import</button>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {groups[openGroupIdx].contacts.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: '#999' }}>
                <UsersRound size={28} style={{ color: '#d5d5d5', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>No contacts yet</div>
                <div style={{ fontSize: '11px' }}>Import contacts to fill this group.</div>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 1.4fr 1.8fr 1.2fr 0.9fr', gap: '8px', padding: '10px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em', position: 'sticky', top: 0, background: '#fff' }}>
                  <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ccc', borderRadius: '3px' }} /></span>
                  <span>Name</span><span>Email</span><span>Company</span><span>Status</span>
                </div>
                {groups[openGroupIdx].contacts.map((c, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '30px 1.4fr 1.8fr 1.2fr 0.9fr', gap: '8px', padding: '11px 20px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10.5px' }}>
                    <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ddd', borderRadius: '3px' }} /></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: ['#7C3AED', '#0d9488', '#2563eb', '#ec4899', '#f59e0b'][i % 5], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, flexShrink: 0 }}>{c.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
                      <span style={{ fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                    </span>
                    <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.email}</span>
                    <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.company}</span>
                    <span><span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '8px', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', background: '#ECFDF5', color: '#059669', textTransform: 'uppercase' }}><CheckCircle2 size={9} /> Valid</span></span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* Import Contacts wizard */}
      {showImport && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', zIndex: 130 }}>
          <div style={{ width: '540px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -16px rgba(0,0,0,0.35)', display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '16px 22px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}><Import size={16} style={{ color: '#7C3AED' }} /> Import Contacts</div>
              <X size={16} onClick={() => setShowImport(false)} style={{ marginLeft: 'auto', color: '#bbb', cursor: 'pointer' }} />
            </div>
            <div style={{ fontSize: '11px', color: '#888', padding: '2px 22px 14px' }}>Upload and import your contact list</div>

            {/* Stepper */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 22px 18px' }}>
              {['Upload', 'Map', 'Import', 'Validate'].map((label, i) => {
                const step = i + 1;
                const done = importStep > step;
                const current = importStep === step;
                return (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? 1 : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: done ? '#7C3AED' : current ? '#EDE9FE' : '#f0f0f0', color: done ? '#fff' : current ? '#7C3AED' : '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, border: current ? '1.5px solid #7C3AED' : 'none' }}>
                        {done ? <Check size={11} strokeWidth={3} /> : step}
                      </div>
                      <span style={{ fontSize: '8px', color: current ? '#7C3AED' : '#aaa', fontWeight: current ? 600 : 500 }}>{label}</span>
                    </div>
                    {i < 3 && <div style={{ flex: 1, height: '2px', background: importStep > step ? '#7C3AED' : '#f0f0f0', margin: '0 6px', marginBottom: '14px' }} />}
                  </div>
                );
              })}
            </div>

            {/* Step body */}
            <div style={{ flex: 1, overflow: 'visible', padding: '0 22px' }}>
              {/* Step 1 — Upload */}
              {importStep === 1 && (
                <>
                  <div onClick={() => { setUploadedFile('contacts.csv'); if (tour === 7) setTour(8); }} style={{ position: 'relative', border: '1.5px dashed #dcdce0', borderRadius: '12px', padding: '30px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                    {tour === 7 && (
                      <div style={{ position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                        <Coachmark visible title="Choose a file" subtitle="Select a CSV or Excel file with your contacts. Click Choose File." onNext={() => { setUploadedFile('contacts.csv'); setTour(8); }} top="0" left="0" arrowSide="bottom" arrowOffset="110px" buttonLabel="Next" />
                      </div>
                    )}
                    {uploadedFile ? (
                      <>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><CheckCircle2 size={22} style={{ color: '#059669' }} /></div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>{uploadedFile}</div>
                        <div style={{ fontSize: '10px', color: '#888' }}>{SAMPLE_ROWS.length} rows detected · click to replace</div>
                      </>
                    ) : (
                      <>
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><Upload size={20} style={{ color: '#7C3AED' }} /></div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Upload Your File</div>
                        <div style={{ fontSize: '11px', color: '#999', marginBottom: '3px' }}>Drag and drop or click to browse</div>
                        <div style={{ fontSize: '9.5px', color: '#bbb', marginBottom: '14px' }}>Supports CSV, Excel (XLSX, XLS) · Max 50MB</div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: '#2563eb', color: '#fff', borderRadius: '10px', fontSize: '11px', fontWeight: 600 }}><Upload size={13} /> Choose File</div>
                      </>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10.5px', color: '#555', fontWeight: 600, margin: '14px 0', cursor: 'pointer' }}><Download size={13} /> Download Sample Template</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '6px' }}>
                    {[{ Icon: Zap, c: '#2563eb', t: 'Fast Processing' }, { Icon: ShieldCheck, c: '#059669', t: 'Email Validation' }, { Icon: CheckCircle2, c: '#ec4899', t: 'Accurate Results' }].map((f) => (
                      <div key={f.t} style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
                        <f.Icon size={16} style={{ color: f.c }} />
                        <span style={{ fontSize: '9.5px', color: '#555', fontWeight: 600 }}>{f.t}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Step 2 — Map */}
              {importStep === 2 && (
                <>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Map your columns</div>
                  <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '14px' }}>Match the columns from your file to SendRit fields.</div>
                  {[{ col: 'Full Name', field: 'Name' }, { col: 'Email Address', field: 'Email' }, { col: 'Company', field: 'Company' }].map((m) => (
                    <div key={m.col} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ flex: 1, padding: '8px 11px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}>{m.col}</div>
                      <ArrowLeft size={13} style={{ color: '#bbb', transform: 'rotate(180deg)' }} />
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 11px', border: '1.5px solid #7C3AED', borderRadius: '8px', fontSize: '10.5px', color: '#1a1a1a', fontWeight: 600 }}><CheckCircle2 size={12} style={{ color: '#7C3AED' }} /> {m.field}</div>
                    </div>
                  ))}
                  <div style={{ fontSize: '10px', color: '#888', marginTop: '12px', padding: '10px 12px', background: '#f7f7f8', borderRadius: '8px' }}>Preview: <b style={{ color: '#1a1a1a' }}>{SAMPLE_ROWS.length}</b> rows ready to import.</div>
                </>
              )}

              {/* Step 3 — Import progress */}
              {importStep === 3 && (
                <div style={{ padding: '30px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Importing contacts…</div>
                  <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '22px' }}>Processing {SAMPLE_ROWS.length} rows from {uploadedFile}</div>
                  <div style={{ height: '10px', borderRadius: '6px', background: '#f0f0f0', overflow: 'hidden', marginBottom: '10px' }}>
                    <div style={{ height: '100%', width: `${importProgress}%`, background: 'linear-gradient(90deg, #7C3AED, #a855f7)', borderRadius: '6px', transition: 'width 0.12s linear' }} />
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#7C3AED' }}>{importProgress}%</div>
                </div>
              )}

              {/* Step 4 — Validate */}
              {importStep === 4 && (
                <div style={{ paddingBottom: '6px' }}>
                  {!validateDone ? (
                    <div style={{ padding: '20px 10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Validate email addresses</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '20px' }}>We&apos;ll check every email and only import the valid ones.</div>
                      {validating ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '10px 0' }}>
                          <Loader2 size={30} style={{ color: '#7C3AED', animation: 'sr-spin 0.8s linear infinite' }} />
                          <span style={{ fontSize: '11px', color: '#555' }}>Validating {SAMPLE_ROWS.length} emails…</span>
                        </div>
                      ) : (
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                          <button onClick={runValidation} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer' }}><ShieldCheck size={14} /> Validate Emails</button>
                          {tour === 10 && (
                            <div style={{ position: 'absolute', top: '52px', left: '50%', transform: 'translateX(-30px)', zIndex: 9999 }}>
                              <Coachmark visible title="Validate emails" subtitle="Click Validate Emails — we'll check each address and import only the valid ones." onNext={runValidation} top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                        <div style={{ flex: 1, padding: '12px', borderRadius: '10px', background: '#ECFDF5', border: '1px solid #A7F3D0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#059669', fontWeight: 700 }}><CheckCircle2 size={13} /> Valid</div>
                          <div style={{ fontSize: '20px', fontWeight: 800, color: '#059669', marginTop: '4px' }}>{validCount}</div>
                        </div>
                        <div style={{ flex: 1, padding: '12px', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#dc2626', fontWeight: 700 }}><AlertCircle size={13} /> Invalid</div>
                          <div style={{ fontSize: '20px', fontWeight: 800, color: '#dc2626', marginTop: '4px' }}>{invalidCount}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>Invalid emails skipped — only {validCount} valid contacts will be imported:</div>
                      <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
                        {SAMPLE_ROWS.map((r, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderBottom: '1px solid #f8f8f8', fontSize: '10px' }}>
                            {r.status === 'valid' ? <CheckCircle2 size={12} style={{ color: '#059669', flexShrink: 0 }} /> : <AlertCircle size={12} style={{ color: '#dc2626', flexShrink: 0 }} />}
                            <span style={{ color: '#1a1a1a', fontWeight: 600, width: '96px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</span>
                            <span style={{ color: r.status === 'valid' ? '#555' : '#dc2626', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: r.status === 'invalid' ? 'line-through' : 'none' }}>{r.email}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 22px', borderTop: '1px solid #f0f0f0' }}>
              {importStep > 1 && importStep < 3 && (
                <button onClick={() => setImportStep(importStep - 1)} style={{ padding: '8px 16px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Back</button>
              )}
              <button onClick={() => setShowImport(false)} style={{ padding: '8px 16px', background: '#fff', color: '#888', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}>Cancel</button>
              {importStep === 1 && (
                <div style={{ position: 'relative' }}>
                  <button onClick={() => { setImportStep(2); if (tour === 8) setTour(9); }} disabled={!uploadedFile} style={{ padding: '8px 20px', background: uploadedFile ? '#7C3AED' : '#c9b8f0', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: uploadedFile ? 'pointer' : 'default' }}>Next</button>
                  {tour === 8 && (
                    <div style={{ position: 'absolute', bottom: '44px', right: '0', zIndex: 9999 }}>
                      <Coachmark visible title="Continue" subtitle="Your file is ready. Click Next to map the columns." onNext={() => { setImportStep(2); setTour(9); }} top="0" left="0" arrowSide="bottom" arrowOffset="180px" buttonLabel="Next" />
                    </div>
                  )}
                </div>
              )}
              {importStep === 2 && (
                <div style={{ position: 'relative' }}>
                  <button onClick={() => { startImportProgress(); if (tour === 9) setTour(10); }} style={{ padding: '8px 20px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Import</button>
                  {tour === 9 && (
                    <div style={{ position: 'absolute', bottom: '44px', right: '0', zIndex: 9999 }}>
                      <Coachmark visible title="Import contacts" subtitle="Columns look good. Click Import to start bringing in your contacts." onNext={() => { startImportProgress(); setTour(10); }} top="0" left="0" arrowSide="bottom" arrowOffset="180px" buttonLabel="Next" />
                    </div>
                  )}
                </div>
              )}
              {importStep === 4 && validateDone && (
                <div style={{ position: 'relative' }}>
                  <button onClick={() => { setShowImport(false); setTour(0); }} style={{ padding: '8px 20px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Done · View Group</button>
                  {tour === 11 && (
                    <div style={{ position: 'absolute', bottom: '44px', right: '0', zIndex: 9999 }}>
                      <Coachmark visible title="All set!" subtitle="Your valid contacts are imported. Click Done · View Group to finish." onNext={() => { setShowImport(false); setTour(0); }} top="0" left="0" arrowSide="bottom" arrowOffset="180px" buttonLabel="Next" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Groups modal */}
      {showGroupsModal && !showCreateGroup && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 100 }}>
          <div style={{ width: '360px', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}><UsersRound size={14} /> Contact Groups</div>
                <div style={{ fontSize: '10px', color: '#888' }}>Organize your contacts into groups for targeted campaigns</div>
              </div>
              <button onClick={() => setShowCreateGroup(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}><Plus size={11} /> New Group</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 0' }}>
              <UsersRound size={28} style={{ color: '#c9c9c9', marginBottom: '12px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>No groups yet</div>
              <div style={{ fontSize: '10.5px', color: '#999', marginBottom: '16px' }}>Create your first group to organize your contacts.</div>
              <button onClick={() => setShowCreateGroup(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><Plus size={13} /> Create Group</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button onClick={() => setShowGroupsModal(false)} style={{ padding: '7px 16px', background: '#fff', color: '#555', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Create New Group modal */}
      {showCreateGroup && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', zIndex: 110 }}>
          <div style={{ width: '320px', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px', position: 'relative' }}>
            <div onClick={() => setShowCreateGroup(false)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Create New Group</div>
            <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '16px' }}>Create a new group to organize your contacts.</div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Group Name *</div>
            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Enter group name" style={{ width: '100%', padding: '8px 11px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '11px', color: '#1a1a1a', outline: 'none', boxSizing: 'border-box', marginBottom: '14px' }} />

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Description</div>
            <textarea value={groupDesc} onChange={(e) => setGroupDesc(e.target.value)} placeholder="Optional description for this group" rows={2} style={{ width: '100%', padding: '8px 11px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '11px', color: '#1a1a1a', outline: 'none', boxSizing: 'border-box', marginBottom: '14px', resize: 'none', fontFamily: 'inherit' }} />

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Group Color</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['#8B5CF6', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#ef4444', '#1a1a1a'].map((c) => (
                  <div key={c} onClick={() => setGroupColor(c)} style={{ width: '22px', height: '22px', borderRadius: '6px', background: c, cursor: 'pointer', boxShadow: groupColor === c ? '0 0 0 2px #fff, 0 0 0 4px #7C3AED' : 'none' }} />
                ))}
              </div>
              <span style={{ fontSize: '10px', color: '#888' }}>{groupColor}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowCreateGroup(false)} style={{ padding: '8px 16px', background: '#fff', color: '#555', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={createGroup} disabled={!groupName.trim()} style={{ padding: '8px 18px', background: groupName.trim() ? '#7C3AED' : '#c9b8f0', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: groupName.trim() ? 'pointer' : 'default' }}>Create Group</button>
            </div>
          </div>

          {/* Step 5 — coachmark beside the Create New Group modal */}
          {tour === 5 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(190px, -90px)', zIndex: 9999 }}>
              <Coachmark visible title="Name your group" subtitle="Give the group a name, optional description, and a color, then click Create Group." onNext={() => setTour(55)} top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Got it" />
            </div>
          )}
        </div>
      )}

      {/* Invite Team Member modal */}
      {showInvite && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 100 }}>
          <div style={{ width: '320px', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px', position: 'relative' }}>
            <div onClick={() => setShowInvite(false)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>Invite Team Member</div>
            <div style={{ fontSize: '10.5px', color: '#888', lineHeight: 1.5, marginBottom: '16px' }}>Send an invitation email to add a new team member to SendRit.</div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Email Address</div>
            <div style={{ padding: '9px 12px', border: '1.5px solid #7C3AED', borderRadius: '9px', fontSize: '11px', color: '#aaa', marginBottom: '10px', boxShadow: '0 0 0 3px rgba(124,58,237,0.12)' }}>teammate@example.com</div>
            <div style={{ fontSize: '9.5px', color: '#999', lineHeight: 1.5, marginBottom: '20px' }}>They will join as a regular team member with full access to campaigns and contacts</div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowInvite(false)} style={{ padding: '8px 16px', background: '#fff', color: '#555', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { setShowInvite(false); setTour(4); setActiveNav('Contacts'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><UserPlus size={12} /> Send Invitation</button>
            </div>
          </div>

          {/* Step 3 — coachmark beside the invite modal */}
          {tour === 3 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(190px, -60px)', zIndex: 9999 }}>
              <Coachmark
                visible
                title="Send an invitation"
                subtitle="Enter a teammate's email and send them an invite to join your workspace."
                onNext={() => { setShowInvite(false); setTour(4); setActiveNav('Contacts'); }}
                top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
              />
            </div>
          )}
        </div>
      )}

      {/* Invite Multiple Team Members (Bulk) modal */}
      {showBulk && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 100 }}>
          <div style={{ width: '340px', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px', position: 'relative' }}>
            <div onClick={() => setShowBulk(false)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>Invite Multiple Team Members</div>
            <div style={{ fontSize: '10.5px', color: '#888', lineHeight: 1.5, marginBottom: '16px' }}>Invite multiple users at once. Enter one email per line (max 100).</div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Email Addresses</div>
            <div style={{ padding: '10px 12px', border: '1.5px solid #7C3AED', borderRadius: '9px', fontSize: '11px', color: '#aaa', lineHeight: 1.6, marginBottom: '10px', minHeight: '58px', boxShadow: '0 0 0 3px rgba(124,58,237,0.12)' }}>
              teammate1@example.com teammate2@example.com<br />teammate3@example.com
            </div>
            <div style={{ fontSize: '9.5px', color: '#999', lineHeight: 1.5, marginBottom: '20px' }}>Enter one email per line, or separate with commas/spaces. All users will be invited as regular team members.</div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowBulk(false)} style={{ padding: '8px 16px', background: '#fff', color: '#555', border: 'none', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => setShowBulk(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}><UsersRound size={12} /> Send Invitations</button>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes sr-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
