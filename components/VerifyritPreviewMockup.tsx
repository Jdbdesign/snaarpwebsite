'use client';

import { useState } from 'react';
import { LayoutDashboard, MailCheck, CreditCard, TrendingUp, BarChart3, KeyRound, Receipt, UsersRound, Settings, Grid3x3, Bell, Sparkles, Eye, ShoppingCart, Plug, Activity, Target, CheckCircle2, AlertCircle, Info, XCircle, Upload, ListChecks, Mail, Link2, Zap, Send, RefreshCw, Check, ShieldCheck, Search, ChevronDown, Download, Trash2, Loader2 } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV = [
  { label: 'Dashboard', Icon: LayoutDashboard },
  { label: 'Email Validation', Icon: MailCheck },
  { label: 'Credits', Icon: CreditCard },
  { label: 'Validation Results', Icon: TrendingUp },
  { label: 'Analytics', Icon: BarChart3 },
  { label: 'API Access', Icon: KeyRound },
  { label: 'Billing', Icon: Receipt },
  { label: 'Team', Icon: UsersRound },
  { label: 'Settings', Icon: Settings },
];

const STATS = [
  { label: 'Available Credits', value: '48,200', delta: '5.2%', up: false, Icon: CreditCard, accent: '#7C3AED' },
  { label: 'Total Validations', value: '12,450', delta: '12.5%', up: true, Icon: MailCheck, accent: '#2563eb' },
  { label: 'Success Rate', value: '98.2%', delta: '0.8%', up: true, Icon: Target, accent: '#059669' },
  { label: 'Active Jobs', value: '0', delta: null, up: true, Icon: Activity, accent: '#7C3AED' },
];

const QUICK_ACTIONS = [
  { title: 'Enhanced Validation', sub: 'AI-powered validation with intelligence features', Icon: Sparkles, color: '#7C3AED' },
  { title: 'View Results', sub: 'Check your validation results and history', Icon: Eye, color: '#059669' },
  { title: 'Buy Credits', sub: 'Purchase more validation credits', Icon: ShoppingCart, color: '#2563eb' },
  { title: 'API Access', sub: 'Manage API keys and documentation', Icon: Plug, color: '#7C3AED' },
];

// Validation Trend — last 7 days data points (validations per day)
const TREND = [
  { d: 'Mon', v: 1420 },
  { d: 'Tue', v: 1980 },
  { d: 'Wed', v: 1650 },
  { d: 'Thu', v: 2410 },
  { d: 'Fri', v: 2180 },
  { d: 'Sat', v: 1290 },
  { d: 'Sun', v: 2560 },
];

const BREAKDOWN = [
  { label: 'Valid', value: 8500, max: 8500, color: '#10b981' },
  { label: 'Invalid', value: 2200, max: 8500, color: '#ef4444' },
  { label: 'Risky', value: 1200, max: 8500, color: '#f59e0b' },
  { label: 'Catch-all', value: 550, max: 8500, color: '#6b7280' },
];

const ACTIVITY = [
  { title: 'Bulk validation completed', tag: 'SUCCESS', tagColor: '#059669', tagBg: '#ECFDF5', desc: 'customer_list_2024.csv · 5,000 emails processed', time: '2 minutes ago', Icon: CheckCircle2, iconColor: '#10b981' },
  { title: 'Credits purchased', tag: 'SUCCESS', tagColor: '#059669', tagBg: '#ECFDF5', desc: '10,000 credits added to your account', time: '1 hour ago', Icon: CreditCard, iconColor: '#10b981' },
  { title: 'API validation spike', tag: 'INFO', tagColor: '#2563eb', tagBg: '#EFF6FF', desc: '500+ validations in the last hour', time: '2 hours ago', Icon: Info, iconColor: '#2563eb' },
  { title: 'Bulk validation failed', tag: 'ERROR', tagColor: '#dc2626', tagBg: '#FEF2F2', desc: 'invalid_format.xlsx · File format error', time: '3 hours ago', Icon: XCircle, iconColor: '#ef4444' },
  { title: 'Team member invited', tag: 'INFO', tagColor: '#2563eb', tagBg: '#EFF6FF', desc: 'john.doe@company.com invited as Editor', time: '1 day ago', Icon: UsersRound, iconColor: '#2563eb' },
];

function buildTrendPaths(points: { d: string; v: number }[], w: number, h: number, pad: number) {
  const values = points.map((p) => p.v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const coords = points.map((p, i) => {
    const x = pad + (innerW * i) / (points.length - 1);
    const y = pad + innerH - ((p.v - min) / range) * innerH;
    return { x, y };
  });
  const line = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`).join(' ');
  const area = `${line} L ${coords[coords.length - 1].x.toFixed(1)} ${(h - pad).toFixed(1)} L ${coords[0].x.toFixed(1)} ${(h - pad).toFixed(1)} Z`;
  return { coords, line, area };
}

const VALIDATION_TABS = [
  { label: 'File Upload', Icon: Upload },
  { label: 'Paste Email List', Icon: ListChecks },
  { label: 'Single Email', Icon: Mail },
  { label: 'Integration', Icon: Link2 },
];

const ENHANCED_FEATURES = [
  { label: 'TYPO DETECTION & CORRECTION', color: '#2563eb', bg: '#EFF6FF' },
  { label: 'NAME EXTRACTION', color: '#059669', bg: '#ECFDF5' },
  { label: 'DOMAIN INTELLIGENCE', color: '#d97706', bg: '#FFFBEB' },
  { label: 'FREE EMAIL DETECTION', color: '#0d9488', bg: '#ECFEFF' },
  { label: 'SMTP PROVIDER ANALYSIS', color: '#7C3AED', bg: '#F5F3FF' },
];

const INTEGRATIONS = [
  { name: 'Sendrit', desc: 'Bulk email platform', Icon: Send, color: '#2563eb' },
  { name: 'Mailchimp', desc: 'Email marketing and audience management', Icon: Mail, color: '#f59e0b' },
  { name: 'Mailgun', desc: 'Transactional email and mailing lists', Icon: Send, color: '#ef4444' },
  { name: 'Mailjet', desc: 'Email delivery and marketing platform', Icon: Mail, color: '#7C3AED' },
  { name: 'Elastic Email', desc: 'Email delivery and marketing automation', Icon: Send, color: '#7C3AED' },
  { name: 'Campaign Monitor', desc: 'Email marketing for designers and agencies', Icon: Mail, color: '#2563eb' },
  { name: 'ActiveCampaign', desc: 'Marketing automation and CRM', Icon: UsersRound, color: '#2563eb' },
  { name: 'Zoho CRM', desc: 'Customer relationship management', Icon: Grid3x3, color: '#ef4444' },
  { name: 'Reply.io', desc: 'Sales engagement and outreach', Icon: TrendingUp, color: '#059669' },
];

type Plan = { tier: string; credits: string; price: string; per: string; features: string[] };
const PLANS: Plan[] = [
  { tier: 'Starter', credits: '10,000', price: '$67.41', per: '$0.0067/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access'] },
  { tier: 'Essential', credits: '50,000', price: '$202.24', per: '$0.0040/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access'] },
  { tier: 'Essential', credits: '100,000', price: '$337.06', per: '$0.0034/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access'] },
  { tier: 'Essential', credits: '1,000,000', price: '$1,348.25', per: '$0.0013/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access'] },
  { tier: 'Premium', credits: '2,500,000', price: '$3,370.63', per: '$0.0013/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access', 'Priority support', 'Dedicated account manager'] },
  { tier: 'Premium', credits: '5,000,000', price: '$5,393.00', per: '$0.0011/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access', 'Priority support', 'Dedicated account manager'] },
  { tier: 'Premium', credits: '10,000,000', price: '$10,786.00', per: '$0.0011/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access', 'Priority support', 'Dedicated account manager'] },
  { tier: 'Premium', credits: '25,000,000', price: '$20,223.75', per: '$0.0008/credit', features: ['Credits never expire', 'Only charged for valid/invalid results', 'Bulk CSV upload', 'API access', 'Priority support', 'Dedicated account manager'] },
];

// Analytics — monthly trends (Oct–Sep)
const ANALYTICS_MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const ANALYTICS_VOLUME = [3200, 4100, 3800, 5200, 6100, 5600, 6900, 7400, 6800, 8100, 8800, 9600];
const ANALYTICS_JOBS = [8, 11, 9, 14, 17, 15, 19, 22, 20, 25, 27, 31];

const ANALYTICS_DIST = [
  { label: 'Valid', value: 24680, color: '#10b981' },
  { label: 'Invalid', value: 6120, color: '#ef4444' },
  { label: 'Risky', value: 3450, color: '#f59e0b' },
  { label: 'Disposable', value: 1280, color: '#7C3AED' },
  { label: 'Role', value: 940, color: '#2563eb' },
  { label: 'Catch-all', value: 530, color: '#6b7280' },
];

type Job = { file: string; status: 'Completed' | 'Processing' | 'Failed'; emails: number; progress: number; created: string };
const VALIDATION_JOBS: Job[] = [
  { file: 'customer_list_2024.csv', status: 'Completed', emails: 5000, progress: 100, created: 'Feb 14, 2026 · 10:24 AM' },
  { file: 'newsletter_subscribers.xlsx', status: 'Completed', emails: 12400, progress: 100, created: 'Feb 13, 2026 · 4:12 PM' },
  { file: 'webinar_signups.csv', status: 'Processing', emails: 3200, progress: 62, created: 'Feb 14, 2026 · 11:02 AM' },
  { file: 'sales_leads_q1.csv', status: 'Completed', emails: 8900, progress: 100, created: 'Feb 12, 2026 · 9:38 AM' },
  { file: 'event_attendees.xlsx', status: 'Processing', emails: 1540, progress: 28, created: 'Feb 14, 2026 · 11:15 AM' },
  { file: 'invalid_format.xlsx', status: 'Failed', emails: 0, progress: 0, created: 'Feb 8, 2026 · 2:19 PM' },
  { file: 'partner_contacts.csv', status: 'Completed', emails: 2650, progress: 100, created: 'Feb 10, 2026 · 1:47 PM' },
];

const RESULT_DIST = [
  { label: 'Valid', value: 24680, color: '#10b981' },
  { label: 'Invalid', value: 6120, color: '#ef4444' },
  { label: 'Risky', value: 3450, color: '#f59e0b' },
  { label: 'Disposable', value: 1280, color: '#7C3AED' },
  { label: 'Role', value: 940, color: '#2563eb' },
];

type Txn = { type: 'Purchase' | 'Usage' | 'Refund' | 'Bonus'; title: string; desc: string; amount: string; positive: boolean; date: string };
const TRANSACTIONS: Txn[] = [
  { type: 'Usage', title: 'Bulk validation', desc: 'customer_list_2024.csv · 5,000 emails', amount: '-5,000', positive: false, date: 'Feb 14, 2026 · 10:24 AM' },
  { type: 'Purchase', title: 'Credit purchase', desc: 'Essential plan · Stripe', amount: '+50,000', positive: true, date: 'Feb 12, 2026 · 3:08 PM' },
  { type: 'Usage', title: 'Single email validation', desc: 'Enhanced mode · 1 email', amount: '-1', positive: false, date: 'Feb 11, 2026 · 9:47 AM' },
  { type: 'Bonus', title: 'Welcome bonus', desc: 'New account credit', amount: '+2,000', positive: true, date: 'Feb 10, 2026 · 8:15 AM' },
  { type: 'Usage', title: 'API validation batch', desc: 'API key · 1,240 emails', amount: '-1,240', positive: false, date: 'Feb 9, 2026 · 6:32 PM' },
  { type: 'Refund', title: 'Credit refund', desc: 'Failed job · invalid_format.xlsx', amount: '+320', positive: true, date: 'Feb 8, 2026 · 2:19 PM' },
  { type: 'Purchase', title: 'Credit purchase', desc: 'Starter plan · Paystack', amount: '+10,000', positive: true, date: 'Feb 5, 2026 · 11:03 AM' },
];

export function VerifyritPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [tour, setTour] = useState(1); // 1 = welcome coachmark, 0 = done
  const [valTab, setValTab] = useState('File Upload');
  const [enhanced, setEnhanced] = useState(true);
  const [fastMode, setFastMode] = useState(false);
  const [creditsTab, setCreditsTab] = useState('Buy Credit');
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [payMethod, setPayMethod] = useState<'stripe' | 'paystack'>('stripe');
  const [txnFilter, setTxnFilter] = useState('All');
  const visibleTxns = TRANSACTIONS.filter((t) => txnFilter === 'All' || t.type === txnFilter);
  const [jobStatusFilter, setJobStatusFilter] = useState('All Status');
  const visibleJobs = VALIDATION_JOBS.filter((j) => jobStatusFilter === 'All Status' || j.status === jobStatusFilter);
  const jobsCompleted = VALIDATION_JOBS.filter((j) => j.status === 'Completed').length;
  const jobsProcessing = VALIDATION_JOBS.filter((j) => j.status === 'Processing').length;
  const jobsTotalEmails = VALIDATION_JOBS.reduce((n, j) => n + j.emails, 0);
  const distMax = Math.max(...RESULT_DIST.map((d) => d.value));

  const CHART_W = 560, CHART_H = 190, PAD = 22;
  const { coords, line, area } = buildTrendPaths(TREND, CHART_W, CHART_H, PAD);

  // Analytics monthly charts
  const A_W = 520, A_H = 200, A_PAD = 26;
  const volPts = ANALYTICS_MONTHS.map((d, i) => ({ d, v: ANALYTICS_VOLUME[i] }));
  const jobPts = ANALYTICS_MONTHS.map((d, i) => ({ d, v: ANALYTICS_JOBS[i] }));
  const vol = buildTrendPaths(volPts, A_W, A_H, A_PAD);
  const job = buildTrendPaths(jobPts, A_W, A_H, A_PAD);
  const anTotalValidations = ANALYTICS_VOLUME.reduce((n, v) => n + v, 0);
  const anTotalJobs = ANALYTICS_JOBS.reduce((n, v) => n + v, 0);
  const anDistMax = Math.max(...ANALYTICS_DIST.map((d) => d.value));
  const anDistTotal = ANALYTICS_DIST.reduce((n, d) => n + d.value, 0);
  const anValid = ANALYTICS_DIST[0].value;
  const anInvalid = ANALYTICS_DIST[1].value;
  const anRisky = ANALYTICS_DIST[2].value;
  const anSuccessRate = ((anValid / anDistTotal) * 100).toFixed(1);

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f7f8fa', position: 'relative' }}>
      {/* Walkthrough — Step 1: welcome card modal (first screen) */}
      {tour === 1 && activeNav === 'Dashboard' && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Welcome to VerifyRit"
            subtitle="Your email validation hub — verify lists, track accuracy, and keep your sender reputation clean."
            onNext={() => { setActiveNav('Email Validation'); setValTab('File Upload'); setTour(2); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Steps 2-5: Email Validation tabs (cards anchored under the tab row) */}
      {activeNav === 'Email Validation' && tour >= 2 && tour <= 5 && (
        <div style={{ position: 'absolute', top: '218px', left: `${[206, 300, 438, 548][tour - 2]}px`, zIndex: 9999 }}>
          <Coachmark
            visible
            title={['Upload a file', 'Paste an email list', 'Validate a single email', 'Connect integrations'][tour - 2]}
            subtitle={[
              'Drag & drop or choose a CSV/Excel file to validate emails in bulk. Click Next.',
              'Paste emails separated by commas or new lines to verify them fast. Click Next.',
              'Check one address instantly with AI-powered enhanced validation. Click Next.',
              'Connect your marketing platforms to verify contacts directly from your lists.',
            ][tour - 2]}
            onNext={() => {
              const tabs = ['File Upload', 'Paste Email List', 'Single Email', 'Integration'];
              if (tour < 5) { setValTab(tabs[tour - 1]); setTour(tour + 1); }
              else { setActiveNav('Credits'); setCreditsTab('Buy Credit'); setTour(6); }
            }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Steps 6-7: Credits sub-tabs (cards under the Buy Credit / Overview toggle) */}
      {activeNav === 'Credits' && (tour === 6 || tour === 7) && (
        <div style={{ position: 'absolute', top: '150px', left: `${tour === 6 ? 200 : 260}px`, zIndex: 9999 }}>
          <Coachmark
            visible
            title={tour === 6 ? 'Buy more credits' : 'Track your usage'}
            subtitle={tour === 6
              ? 'Pick a credit package and pay securely with Stripe or Paystack. Click Next.'
              : 'See your balance, monthly usage, and full transaction history here. Click Next.'}
            onNext={() => {
              if (tour === 6) { setCreditsTab('Overview'); setTour(7); }
              else { setActiveNav('Validation Results'); setTour(8); }
            }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 8: Validation Results (card on the left) */}
      {activeNav === 'Validation Results' && tour === 8 && (
        <div style={{ position: 'absolute', top: '150px', left: '196px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Manage your results"
            subtitle="Review every validation job, track progress, and export clean lists. Click Next."
            onNext={() => { setActiveNav('Analytics'); setTour(9); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 9: Analytics (final) */}
      {activeNav === 'Analytics' && tour === 9 && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Dig into analytics"
            subtitle="Track validation trends, success rates, and performance over time. That wraps up VerifyRit!"
            onNext={() => { setTour(0); onEnd?.(); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Done"
          />
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: '164px', flexShrink: 0, background: '#fff', borderRight: '1px solid #f0f0f0', padding: '14px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', paddingLeft: '4px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MailCheck size={13} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' }}>VerifyRit</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {NAV.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer' }}>
                <item.Icon size={14} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '11px 20px', borderBottom: '1px solid #f0f0f0', background: '#fff' }}>
          <span style={{ fontSize: '11px', color: '#888' }}>Snaarp <span style={{ color: '#1a1a1a', fontWeight: 600 }}>VerifyRit</span></span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 11px', borderRadius: '14px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', fontSize: '9px', fontWeight: 700 }}>48,200 CREDITS</span>
            <Grid3x3 size={15} style={{ color: '#aaa' }} />
            <Bell size={15} style={{ color: '#aaa' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>D</div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1a1a1a' }}>daniel.carter@snaarp.com</div>
                <div style={{ fontSize: '8px', color: '#aaa' }}>User</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable content — Dashboard */}
        {activeNav === 'Dashboard' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>Dashboard Overview</div>
          <div style={{ fontSize: '11px', color: '#888', marginBottom: '18px' }}>Welcome back! Here&apos;s what&apos;s happening with your email validation.</div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', color: '#888' }}>{s.label}</span>
                  <s.Icon size={14} style={{ color: s.accent }} />
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
                {s.delta && (
                  <div style={{ fontSize: '9px', fontWeight: 600, color: s.up ? '#059669' : '#dc2626', marginTop: '3px' }}>{s.up ? '↑' : '↓'} {s.delta}</div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Quick Actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {QUICK_ACTIONS.map((q) => (
              <div key={q.title} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px', cursor: 'pointer' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: `${q.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '9px' }}>
                  <q.Icon size={13} style={{ color: q.color }} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>{q.title}</div>
                <div style={{ fontSize: '9px', color: '#999', lineHeight: 1.4 }}>{q.sub}</div>
              </div>
            ))}
          </div>

          {/* Validation Trend + Credit Usage */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '14px', marginBottom: '18px' }}>
            {/* Validation Trend chart */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Validation Trend (Last 7 Days)</div>
              <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} style={{ width: '100%', height: 'auto', display: 'block' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vr-trend-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* gridlines */}
                {[0, 1, 2, 3].map((i) => {
                  const y = PAD + ((CHART_H - PAD * 2) * i) / 3;
                  return <line key={i} x1={PAD} y1={y} x2={CHART_W - PAD} y2={y} stroke="#f0f0f0" strokeWidth={1} />;
                })}
                {/* area + line */}
                <path d={area} fill="url(#vr-trend-fill)" />
                <path d={line} fill="none" stroke="#7C3AED" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                {/* points */}
                {coords.map((c, i) => (
                  <circle key={i} cx={c.x} cy={c.y} r={3.5} fill="#fff" stroke="#7C3AED" strokeWidth={2} />
                ))}
              </svg>
              {/* x-axis labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 6px', marginTop: '6px' }}>
                {TREND.map((p) => (
                  <span key={p.d} style={{ fontSize: '8.5px', color: '#aaa', fontWeight: 600 }}>{p.d}</span>
                ))}
              </div>
              <div style={{ fontSize: '9px', color: '#7C3AED', fontWeight: 600, marginTop: '6px' }}>7 data points</div>
            </div>

            {/* Credit Usage */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Credit Usage</div>
              {[
                { label: 'Today', value: 420, max: 3000 },
                { label: 'This Week', value: 2800, max: 3000 },
                { label: 'This Month', value: 9600, max: 12000 },
              ].map((c) => (
                <div key={c.label} style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '10px', color: '#555' }}>{c.label}</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>{c.value.toLocaleString()}</span>
                  </div>
                  <div style={{ height: '5px', borderRadius: '4px', background: '#f0eef8', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(100, (c.value / c.max) * 100)}%`, borderRadius: '4px', background: 'linear-gradient(90deg, #7C3AED, #a855f7)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Validation Results Breakdown */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px', marginBottom: '18px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Validation Results Breakdown (Last 30 Days)</div>
            {BREAKDOWN.map((b) => (
              <div key={b.label} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: b.color }}>{b.label}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>{b.value.toLocaleString()}</span>
                </div>
                <div style={{ height: '7px', borderRadius: '4px', background: '#f4f4f6', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(b.value / b.max) * 100}%`, borderRadius: '4px', background: b.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Job Status Overview */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px', marginBottom: '18px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>Job Status Overview</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { label: 'Completed', value: 0, color: '#10b981', Icon: CheckCircle2 },
                { label: 'Processing', value: 0, color: '#f59e0b', Icon: AlertCircle },
                { label: 'Failed', value: 0, color: '#ef4444', Icon: XCircle },
              ].map((j) => (
                <div key={j.label}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10px', fontWeight: 600, color: '#666', marginBottom: '6px' }}>
                    <j.Icon size={12} style={{ color: j.color }} /> {j.label}
                  </div>
                  <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 800, color: j.color, marginBottom: '8px' }}>{j.value}</div>
                  <div style={{ height: '5px', borderRadius: '4px', background: '#f0f0f0', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '6%', borderRadius: '4px', background: j.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Recent Activity</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: 'auto', fontSize: '10px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>View All <TrendingUp size={11} /></span>
            </div>
            {ACTIVITY.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', padding: '9px 0', borderBottom: i < ACTIVITY.length - 1 ? '1px solid #f6f6f8' : 'none' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: `${a.iconColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <a.Icon size={13} style={{ color: a.iconColor }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a' }}>{a.title}</span>
                    <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.04em', padding: '2px 6px', borderRadius: '5px', color: a.tagColor, background: a.tagBg }}>{a.tag}</span>
                  </div>
                  <div style={{ fontSize: '9.5px', color: '#888' }}>{a.desc}</div>
                  <div style={{ fontSize: '8.5px', color: '#bbb', marginTop: '2px' }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Scrollable content — Email Validation */}
        {activeNav === 'Email Validation' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Welcome banner */}
          <div style={{ position: 'relative', borderRadius: '14px', padding: '18px 22px', marginBottom: '18px', background: 'linear-gradient(120deg, #0d9488 0%, #14b8a6 55%, #2dd4bf 100%)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-10px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '5px' }}><Sparkles size={16} /> Welcome back, Yinka!</div>
              <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.92)', lineHeight: 1.5, maxWidth: '360px' }}>Upload a file, paste a list, or validate a single address — clean your email lists in seconds.</div>
            </div>
          </div>

          {/* Tabbed card */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', overflow: 'hidden' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '18px', padding: '0 20px', borderBottom: '1px solid #f0f0f0' }}>
              {VALIDATION_TABS.map((t, ti) => {
                const active = valTab === t.label;
                return (
                  <div key={t.label} onClick={() => { setValTab(t.label); if (tour >= 2 && tour <= 5) setTour(ti + 2); }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '13px 2px', fontSize: '11px', fontWeight: 600, color: active ? '#1a1a1a' : '#999', borderBottom: active ? '2px solid #1a1a1a' : '2px solid transparent', cursor: 'pointer' }}>
                    <t.Icon size={13} /> {t.label}
                  </div>
                );
              })}
            </div>

            <div style={{ padding: '18px 20px' }}>
              {/* TAB — File Upload */}
              {valTab === 'File Upload' && (
                <>
                  <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '14px' }}>Upload your CSV or Excel file to start bulk email validation. After upload, you&apos;ll configure column mappings in a popup window.</div>
                  <div style={{ border: '1.5px dashed #dcdce0', borderRadius: '12px', background: '#fafafa', padding: '36px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0eef8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}><Upload size={18} style={{ color: '#7C3AED' }} /></div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Drag &amp; drop files here</div>
                    <div style={{ fontSize: '10px', color: '#7C3AED', marginBottom: '3px' }}>or click to select files</div>
                    <div style={{ fontSize: '9px', color: '#aaa', marginBottom: '14px' }}>Supports CSV and XLSX files up to 100 MB</div>
                    <div style={{ padding: '8px 16px', border: '1px solid #e0d9f5', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', background: '#fff', cursor: 'pointer' }}>Choose Files</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '10px', background: '#e9e9ee', color: '#aaa', fontSize: '10.5px', fontWeight: 600 }}><Zap size={12} /> Start verification</div>
                  </div>
                </>
              )}

              {/* TAB — Paste Email List */}
              {valTab === 'Paste Email List' && (
                <>
                  <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '14px' }}>Enter an email address and hit comma, Enter or Return. Once you entered all emails, you want to verify, click <b style={{ color: '#1a1a1a' }}>&quot;Start Verification&quot;</b></div>
                  <textarea placeholder="E.g. elemer@gmail.com, vandor@gmail.com" rows={8} style={{ width: '100%', padding: '13px', background: '#fafafa', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit', color: '#1a1a1a' }} />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '10px', background: '#e9e9ee', color: '#aaa', fontSize: '10.5px', fontWeight: 600 }}><Zap size={12} /> Start verification</div>
                  </div>
                </>
              )}

              {/* TAB — Single Email */}
              {valTab === 'Single Email' && (
                <>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '7px' }}>Email Address</div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                    <input placeholder="Enter email address to validate" style={{ flex: 1, padding: '10px 12px', background: '#fafafa', border: '1px solid #eee', borderRadius: '10px', fontSize: '11px', outline: 'none', boxSizing: 'border-box' }} />
                    <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', borderRadius: '10px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><MailCheck size={12} /> Validate</button>
                  </div>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '10px' }}>
                    <span onClick={() => setEnhanced((v) => !v)} style={{ width: '15px', height: '15px', borderRadius: '4px', background: enhanced ? '#7C3AED' : '#fff', border: enhanced ? 'none' : '1.5px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{enhanced && <CheckCircle2 size={11} style={{ color: '#fff' }} />}</span>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>Enhanced Validation with AI Intelligence</span>
                    <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.04em', padding: '2px 6px', borderRadius: '5px', color: '#7C3AED', background: '#F5F3FF' }}>NEW</span>
                  </label>

                  {enhanced && (
                    <div style={{ paddingLeft: '23px', marginBottom: '12px' }}>
                      <div style={{ fontSize: '9px', color: '#999', marginBottom: '7px' }}>Enhanced Features include:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {ENHANCED_FEATURES.map((f) => (
                          <span key={f.label} style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.03em', padding: '3px 7px', borderRadius: '5px', color: f.color, background: f.bg }}>{f.label}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '12px' }}>
                    <span onClick={() => setFastMode((v) => !v)} style={{ width: '15px', height: '15px', borderRadius: '4px', background: fastMode ? '#7C3AED' : '#fff', border: fastMode ? 'none' : '1.5px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{fastMode && <CheckCircle2 size={11} style={{ color: '#fff' }} />}</span>
                    <span style={{ fontSize: '10.5px', color: '#555' }}>Fast Mode (Skip SMTP verification for quicker results)</span>
                  </label>

                  <div style={{ fontSize: '9.5px', color: '#888', marginBottom: '4px' }}>Cost: 1 credit per validation. You have 48,200 credits remaining.</div>
                  <div style={{ fontSize: '9.5px', color: '#7C3AED', lineHeight: 1.5 }}>Enhanced mode includes AI-powered typo detection, name extraction, domain intelligence, free email detection, and SMTP provider analysis for comprehensive validation.</div>
                </>
              )}

              {/* TAB — Integration */}
              {valTab === 'Integration' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>Integrations</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                      <span style={{ fontSize: '8px', fontWeight: 700, padding: '3px 9px', borderRadius: '10px', color: '#059669', background: '#ECFDF5' }}>0 CONNECTED</span>
                      <span style={{ fontSize: '8px', fontWeight: 700, padding: '3px 9px', borderRadius: '10px', color: '#7C3AED', background: '#F5F3FF' }}>39 AVAILABLE</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '14px' }}>Connect your email marketing platforms to verify contacts directly from your lists.</div>

                  {/* Filter chips */}
                  <div style={{ border: '1px solid #f0f0f0', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: 600, color: '#2563eb', border: '1px solid #cfe0fd', background: '#EFF6FF' }}><Link2 size={11} /> All Platforms</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: 600, color: '#666' }}><CheckCircle2 size={11} /> Connected (0)</span>
                    </div>

                    {/* Platform grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                      {INTEGRATIONS.map((it) => (
                        <div key={it.name} style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', marginBottom: '10px' }}>
                            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: `${it.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><it.Icon size={13} style={{ color: it.color }} /></div>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a' }}>{it.name}</div>
                              <div style={{ fontSize: '8.5px', color: '#999', lineHeight: 1.35 }}>{it.desc}</div>
                            </div>
                            <span style={{ fontSize: '7px', fontWeight: 700, color: '#aaa', whiteSpace: 'nowrap' }}>NOT CONNECTED</span>
                          </div>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 12px', borderRadius: '14px', background: '#2563eb', color: '#fff', fontSize: '9px', fontWeight: 600, cursor: 'pointer' }}><Link2 size={10} /> Connect</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        )}

        {/* Scrollable content — Credits */}
        {activeNav === 'Credits' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>Credits</div>
              <div style={{ fontSize: '11px', color: '#888' }}>Track your usage, manage balance, and top up when needed.</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginLeft: 'auto', fontSize: '10.5px', fontWeight: 600, color: '#555', cursor: 'pointer' }}><RefreshCw size={12} /> Refresh Balance</span>
          </div>

          {/* Sub-tabs */}
          <div style={{ display: 'inline-flex', gap: '6px', padding: '3px', background: '#eef0f3', borderRadius: '10px', marginBottom: '16px' }}>
            {['Buy Credit', 'Overview'].map((t) => {
              const active = creditsTab === t;
              return (
                <div key={t} onClick={() => { setCreditsTab(t); if (tour === 6 && t === 'Overview') setTour(7); if (tour === 7 && t === 'Buy Credit') setTour(6); }} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer', background: active ? '#fff' : 'transparent', color: active ? '#7C3AED' : '#888', boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none' }}>{t}</div>
              );
            })}
          </div>

          {/* BUY CREDIT */}
          {creditsTab === 'Buy Credit' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '16px', alignItems: 'start' }}>
              {/* Plans */}
              <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Select a Plan</div>
                <div style={{ fontSize: '10px', color: '#999', marginBottom: '14px' }}>Pick the credit package that fits your needs</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {PLANS.map((p, i) => {
                    const active = selectedPlan === i;
                    return (
                      <div key={i} onClick={() => setSelectedPlan(i)} style={{ borderRadius: '12px', border: active ? '1.5px solid #7C3AED' : '1px solid #eee', background: active ? '#f7f4ff' : '#fff', padding: '14px', cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                          <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: active ? 'none' : '1.5px solid #d5d5d5', background: active ? '#7C3AED' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{active && <Check size={10} style={{ color: '#fff' }} strokeWidth={3} />}</span>
                        </div>
                        <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>{p.tier}</div>
                        <div style={{ textAlign: 'center', fontSize: '17px', fontWeight: 800, color: '#7C3AED' }}>{p.credits}</div>
                        <div style={{ textAlign: 'center', fontSize: '8.5px', color: '#aaa', marginBottom: '8px' }}>credits</div>
                        <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 800, color: '#1a1a1a' }}>{p.price}</div>
                        <div style={{ textAlign: 'center', fontSize: '8px', color: '#aaa', marginBottom: '10px' }}>{p.per}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', borderTop: '1px solid #f2f2f2', paddingTop: '10px' }}>
                          {p.features.map((f) => (
                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8px', color: '#666' }}><Check size={9} style={{ color: '#10b981', flexShrink: 0 }} strokeWidth={3} /> {f}</div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '14px 16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Payment Method</div>
                  <div onClick={() => setPayMethod('stripe')} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '10px', border: payMethod === 'stripe' ? '1.5px solid #635bff' : '1px solid #eee', background: payMethod === 'stripe' ? '#f5f4ff' : '#fff', marginBottom: '8px', cursor: 'pointer' }}>
                    <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: payMethod === 'stripe' ? 'none' : '1.5px solid #ccc', background: payMethod === 'stripe' ? '#635bff' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{payMethod === 'stripe' && <Check size={9} style={{ color: '#fff' }} strokeWidth={3} />}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#635bff' }}>stripe</span>
                    <span style={{ fontSize: '7px', fontWeight: 700, color: '#888', marginLeft: 'auto' }}>INTERNATIONAL</span>
                  </div>
                  <div onClick={() => setPayMethod('paystack')} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '10px', border: payMethod === 'paystack' ? '1.5px solid #0ba4db' : '1px solid #eee', background: payMethod === 'paystack' ? '#eefaff' : '#fff', cursor: 'pointer' }}>
                    <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: payMethod === 'paystack' ? 'none' : '1.5px solid #ccc', background: payMethod === 'paystack' ? '#0ba4db' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{payMethod === 'paystack' && <Check size={9} style={{ color: '#fff' }} strokeWidth={3} />}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#0ba4db' }}>paystack</span>
                    <span style={{ fontSize: '7px', fontWeight: 700, color: '#888', marginLeft: 'auto' }}>NAIRA</span>
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '14px 16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Order Summary</div>
                  {[
                    { l: 'Plan', v: PLANS[selectedPlan].tier },
                    { l: 'Credits', v: PLANS[selectedPlan].credits },
                    { l: 'Total Credits', v: PLANS[selectedPlan].credits },
                  ].map((r) => (
                    <div key={r.l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '9px', fontSize: '10px' }}>
                      <span style={{ color: '#888' }}>{r.l}</span>
                      <span style={{ fontWeight: 700, color: '#1a1a1a' }}>{r.v}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderTop: '1px solid #f2f2f2', paddingTop: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Total</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: '#7C3AED' }}>{PLANS[selectedPlan].price}</div>
                      <div style={{ fontSize: '8px', color: '#aaa' }}>{PLANS[selectedPlan].per.replace('/credit', ' per credit')}</div>
                    </div>
                  </div>
                </div>

                <button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '11px', borderRadius: '12px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}><CreditCard size={13} /> Pay {PLANS[selectedPlan].price}</button>

                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 700, color: '#059669', marginBottom: '7px' }}><ShieldCheck size={12} /> Secure Payment</div>
                  <div style={{ fontSize: '8.5px', color: '#999', lineHeight: 1.5, marginBottom: '8px' }}>Your payment is encrypted and processed securely. We never store your card details. Credits are added once payment is confirmed by the provider.</div>
                  <div style={{ fontSize: '8.5px', color: '#bbb', lineHeight: 1.5 }}>Credits do not expire and are non-refundable. By purchasing you agree to our Terms of Service.</div>
                </div>
              </div>
            </div>
          )}

          {/* OVERVIEW */}
          {creditsTab === 'Overview' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '16px' }}>
                {/* Available credits */}
                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>AVAILABLE CREDITS</span>
                    <CreditCard size={14} style={{ color: '#7C3AED' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
                      <svg viewBox="0 0 48 48" style={{ width: '48px', height: '48px' }}>
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#f0eef8" strokeWidth="5" />
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" strokeDasharray="93.6 126" transform="rotate(-90 24 24)" />
                      </svg>
                      <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>74%</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>48,200</div>
                      <div style={{ fontSize: '9px', color: '#999' }}>credits available</div>
                    </div>
                  </div>
                </div>

                {/* Usage this month */}
                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>USAGE THIS MONTH</span>
                    <BarChart3 size={14} style={{ color: '#7C3AED' }} />
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>9,600</div>
                  <div style={{ fontSize: '9px', color: '#999', marginBottom: '12px' }}>credits consumed</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderTop: '1px solid #f2f2f2', paddingTop: '10px' }}>
                    <div><div style={{ fontSize: '8.5px', color: '#aaa', marginBottom: '3px' }}>Today</div><div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>420</div></div>
                    <div><div style={{ fontSize: '8.5px', color: '#aaa', marginBottom: '3px' }}>This Week</div><div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>2,800</div></div>
                  </div>
                </div>

                {/* Insights */}
                <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa' }}>INSIGHTS</span>
                    <Activity size={14} style={{ color: '#059669' }} />
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>320</div>
                  <div style={{ fontSize: '9px', color: '#999', marginBottom: '12px' }}>avg. credits/day</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f2f2f2', paddingTop: '10px' }}>
                    <div><div style={{ fontSize: '8.5px', color: '#aaa', marginBottom: '3px' }}>Peak Day</div><div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Thu, Feb 14</div></div>
                    <span style={{ fontSize: '8px', fontWeight: 700, padding: '3px 9px', borderRadius: '10px', color: '#0d9488', background: '#ECFEFF' }}>2,410 CREDITS</span>
                  </div>
                </div>
              </div>

              {/* Transaction history */}
              <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Transaction History</div>
                    <div style={{ fontSize: '9px', color: '#999' }}>{TRANSACTIONS.length} total transactions</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', marginLeft: 'auto' }}>
                    {['All', 'Purchase', 'Usage', 'Refund', 'Bonus'].map((f) => {
                      const active = txnFilter === f;
                      return (
                        <span key={f} onClick={() => setTxnFilter(f)} style={{ fontSize: '9px', fontWeight: 600, padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', color: active ? '#fff' : '#888', background: active ? '#2563eb' : 'transparent' }}>{f}</span>
                      );
                    })}
                  </div>
                </div>
                {visibleTxns.length === 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 0', color: '#bbb' }}>
                    <Activity size={26} style={{ color: '#d5d5d5', marginBottom: '10px' }} />
                    <div style={{ fontSize: '11px', color: '#7C3AED', fontWeight: 500 }}>No {txnFilter.toLowerCase()} transactions yet.</div>
                  </div>
                ) : (
                  <div>
                    {visibleTxns.map((t, i) => {
                      const meta = {
                        Purchase: { Icon: ShoppingCart, color: '#2563eb', bg: '#EFF6FF' },
                        Usage: { Icon: MailCheck, color: '#7C3AED', bg: '#F5F3FF' },
                        Refund: { Icon: RefreshCw, color: '#059669', bg: '#ECFDF5' },
                        Bonus: { Icon: Sparkles, color: '#d97706', bg: '#FFFBEB' },
                      }[t.type];
                      return (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 0', borderBottom: i < visibleTxns.length - 1 ? '1px solid #f6f6f8' : 'none' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: meta.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><meta.Icon size={13} style={{ color: meta.color }} /></div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                              <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#1a1a1a' }}>{t.title}</span>
                              <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.03em', padding: '2px 6px', borderRadius: '5px', color: meta.color, background: meta.bg }}>{t.type.toUpperCase()}</span>
                            </div>
                            <div style={{ fontSize: '9px', color: '#888', marginTop: '2px' }}>{t.desc}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: t.positive ? '#059669' : '#1a1a1a' }}>{t.amount}</div>
                            <div style={{ fontSize: '8px', color: '#bbb', marginTop: '2px' }}>{t.date}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        )}

        {/* Scrollable content — Validation Results */}
        {activeNav === 'Validation Results' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>Validation Results</div>
              <div style={{ fontSize: '11px', color: '#888' }}>View and manage your email validation history and results.</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginLeft: 'auto', padding: '7px 14px', border: '1px solid #e0d9f5', borderRadius: '18px', fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}><RefreshCw size={12} /> Refresh</span>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {[
              { label: 'Total Jobs', value: VALIDATION_JOBS.length.toString(), sub: 'All time', color: '#1a1a1a' },
              { label: 'Completed', value: jobsCompleted.toString(), sub: `${Math.round((jobsCompleted / VALIDATION_JOBS.length) * 100)}%`, color: '#059669' },
              { label: 'Processing', value: jobsProcessing.toString(), sub: 'Currently active', color: '#2563eb' },
              { label: 'Total Emails', value: jobsTotalEmails.toLocaleString(), sub: 'Processed', color: '#1a1a1a' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ fontSize: '10px', color: '#888', marginBottom: '8px' }}>{s.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '9px', color: '#999', marginTop: '3px' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Trend chart + Result distribution */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '14px', marginBottom: '18px' }}>
            {/* Validation Trend chart */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Validation Trend (Last 7 Days)</div>
              <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} style={{ width: '100%', height: 'auto', display: 'block' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vr-vres-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => {
                  const y = PAD + ((CHART_H - PAD * 2) * i) / 3;
                  return <line key={i} x1={PAD} y1={y} x2={CHART_W - PAD} y2={y} stroke="#f0f0f0" strokeWidth={1} />;
                })}
                <path d={area} fill="url(#vr-vres-fill)" />
                <path d={line} fill="none" stroke="#7C3AED" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                {coords.map((c, i) => (
                  <circle key={i} cx={c.x} cy={c.y} r={3.5} fill="#fff" stroke="#7C3AED" strokeWidth={2} />
                ))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 6px', marginTop: '6px' }}>
                {TREND.map((p) => (
                  <span key={p.d} style={{ fontSize: '8.5px', color: '#aaa', fontWeight: 600 }}>{p.d}</span>
                ))}
              </div>
              <div style={{ fontSize: '9px', color: '#7C3AED', fontWeight: 600, marginTop: '6px' }}>7 data points</div>
            </div>

            {/* Result Distribution */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Result Distribution</div>
                  <div style={{ fontSize: '8.5px', color: '#aaa' }}>Last updated: 11:24:32 AM</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginLeft: 'auto', padding: '5px 11px', border: '1px solid #e0d9f5', borderRadius: '16px', fontSize: '9.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}><RefreshCw size={10} /> Refresh</span>
              </div>
              <div style={{ marginTop: '10px' }}>
                {RESULT_DIST.map((d) => (
                  <div key={d.label} style={{ marginBottom: '11px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>{d.label}</span>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>{d.value.toLocaleString()}</span>
                    </div>
                    <div style={{ height: '7px', borderRadius: '4px', background: '#f4f4f6', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(d.value / distMax) * 100}%`, borderRadius: '4px', background: d.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search + filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', border: '1px solid #f0f0f0', borderRadius: '12px', padding: '10px 14px', marginBottom: '14px' }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa', fontSize: '11px' }}><Search size={13} /> Search by filename...</div>
            <div style={{ position: 'relative' }}>
              <select value={jobStatusFilter} onChange={(e) => setJobStatusFilter(e.target.value)} style={{ appearance: 'none', padding: '7px 26px 7px 12px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', color: '#555', background: '#fff', cursor: 'pointer', fontWeight: 600 }}>
                <option>All Status</option><option>Completed</option><option>Processing</option><option>Failed</option>
              </select>
              <ChevronDown size={12} style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
            </div>
            <div style={{ position: 'relative' }}>
              <select style={{ appearance: 'none', padding: '7px 26px 7px 12px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', color: '#555', background: '#fff', cursor: 'pointer', fontWeight: 600 }}>
                <option>All Time</option><option>Today</option><option>This Week</option><option>This Month</option>
              </select>
              <ChevronDown size={12} style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Jobs table */}
          <div style={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1.4fr 1.5fr 1fr', gap: '8px', padding: '11px 18px', borderBottom: '1px solid #f0f0f0', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <span>Filename</span><span>Status</span><span>Emails</span><span>Progress</span><span>Created</span><span>Actions</span>
            </div>
            {visibleJobs.map((j) => {
              const st = {
                Completed: { color: '#059669', bg: '#ECFDF5', Icon: CheckCircle2 },
                Processing: { color: '#2563eb', bg: '#EFF6FF', Icon: Loader2 },
                Failed: { color: '#dc2626', bg: '#FEF2F2', Icon: XCircle },
              }[j.status];
              return (
                <div key={j.file} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1.4fr 1.5fr 1fr', gap: '8px', padding: '12px 18px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#f3efff', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><MailCheck size={12} /></span>
                    <span style={{ fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{j.file}</span>
                  </span>
                  <span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}><st.Icon size={9} /> {j.status}</span>
                  </span>
                  <span style={{ color: '#555', fontWeight: 600 }}>{j.emails.toLocaleString()}</span>
                  <span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <div style={{ flex: 1, height: '5px', borderRadius: '4px', background: '#f0f0f0', overflow: 'hidden', maxWidth: '80px' }}>
                        <div style={{ height: '100%', width: `${j.progress}%`, borderRadius: '4px', background: st.color }} />
                      </div>
                      <span style={{ fontSize: '9px', color: '#888', fontWeight: 600 }}>{j.progress}%</span>
                    </div>
                  </span>
                  <span style={{ color: '#888', fontSize: '9px' }}>{j.created}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#aaa' }}>
                    <Eye size={13} style={{ cursor: 'pointer' }} />
                    <Download size={13} style={{ cursor: 'pointer' }} />
                    <Trash2 size={13} style={{ cursor: 'pointer' }} />
                  </span>
                </div>
              );
            })}
            {visibleJobs.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '44px 0', color: '#bbb' }}>
                <Activity size={30} style={{ color: '#d5d5d5', marginBottom: '10px' }} />
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#666', marginBottom: '4px' }}>No validation jobs found</div>
                <div style={{ fontSize: '10.5px', color: '#999' }}>Start by uploading a file or validating emails.</div>
              </div>
            )}
          </div>
        </div>
        )}

        {/* Scrollable content — Analytics */}
        {activeNav === 'Analytics' && (
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 20px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>Validation Analytics</div>
              <div style={{ fontSize: '11px', color: '#888' }}>Detailed insights into your email validation performance and trends.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '7px 26px 7px 12px', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', color: '#555', background: '#fff', cursor: 'pointer', fontWeight: 600 }}>
                  <option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option><option>Last 12 months</option>
                </select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '9px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', border: '1px solid #e0d9f5', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}><RefreshCw size={11} /> Refresh</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 12px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Download size={11} /> Export</span>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {[
              { label: 'Total Validations', value: anTotalValidations.toLocaleString(), Icon: Mail, accent: '#7C3AED' },
              { label: 'Success Rate', value: `${anSuccessRate}%`, Icon: Target, accent: '#059669' },
              { label: 'Total Jobs', value: anTotalJobs.toString(), Icon: Activity, accent: '#7C3AED' },
              { label: 'Completion Rate', value: '94.6%', Icon: CheckCircle2, accent: '#7C3AED' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: '12px', border: '1px solid #f0f0f0', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10px', color: '#888' }}>{s.label}</span>
                  <s.Icon size={14} style={{ color: s.accent }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a' }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Two monthly trend charts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
            {/* Validation Volume Trend */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}><TrendingUp size={13} style={{ color: '#2563eb' }} /> Validation Volume Trend</div>
              <svg viewBox={`0 0 ${A_W} ${A_H}`} style={{ width: '100%', height: 'auto', display: 'block' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vr-vol-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => {
                  const y = A_PAD + ((A_H - A_PAD * 2) * i) / 3;
                  return <line key={i} x1={A_PAD} y1={y} x2={A_W - A_PAD} y2={y} stroke="#f0f0f0" strokeWidth={1} />;
                })}
                <path d={vol.area} fill="url(#vr-vol-fill)" />
                <path d={vol.line} fill="none" stroke="#2563eb" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                {vol.coords.map((c, i) => (<circle key={i} cx={c.x} cy={c.y} r={2.6} fill="#fff" stroke="#2563eb" strokeWidth={1.6} />))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px', marginTop: '6px' }}>
                {ANALYTICS_MONTHS.map((m) => (<span key={m} style={{ fontSize: '7px', color: '#aaa', fontWeight: 600, transform: 'rotate(-35deg)', transformOrigin: 'center' }}>{m}</span>))}
              </div>
            </div>

            {/* Jobs Trend */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}><Activity size={13} style={{ color: '#059669' }} /> Jobs Trend</div>
              <svg viewBox={`0 0 ${A_W} ${A_H}`} style={{ width: '100%', height: 'auto', display: 'block' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="vr-job-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.20" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map((i) => {
                  const y = A_PAD + ((A_H - A_PAD * 2) * i) / 3;
                  return <line key={i} x1={A_PAD} y1={y} x2={A_W - A_PAD} y2={y} stroke="#f0f0f0" strokeWidth={1} />;
                })}
                <path d={job.area} fill="url(#vr-job-fill)" />
                <path d={job.line} fill="none" stroke="#059669" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                {job.coords.map((c, i) => (<circle key={i} cx={c.x} cy={c.y} r={2.6} fill="#fff" stroke="#059669" strokeWidth={1.6} />))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px', marginTop: '6px' }}>
                {ANALYTICS_MONTHS.map((m) => (<span key={m} style={{ fontSize: '7px', color: '#aaa', fontWeight: 600, transform: 'rotate(-35deg)', transformOrigin: 'center' }}>{m}</span>))}
              </div>
            </div>
          </div>

          {/* Validation Results Distribution */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px', marginBottom: '18px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Validation Results Distribution</div>
            {ANALYTICS_DIST.map((d) => (
              <div key={d.label} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>{d.label}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>{d.value.toLocaleString()}</span>
                </div>
                <div style={{ height: '7px', borderRadius: '4px', background: '#f4f4f6', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(d.value / anDistMax) * 100}%`, borderRadius: '4px', background: d.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Three detail cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '18px' }}>
            {/* Validation Breakdown */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}><BarChart3 size={13} style={{ color: '#7C3AED' }} /> Validation Breakdown</div>
              {[
                { label: 'Valid Emails', value: anValid, pct: ((anValid / anDistTotal) * 100).toFixed(1) + '%', color: '#10b981', Icon: CheckCircle2 },
                { label: 'Invalid Emails', value: anInvalid, pct: ((anInvalid / anDistTotal) * 100).toFixed(1) + '%', color: '#ef4444', Icon: XCircle },
                { label: 'Risky Emails', value: anRisky, pct: ((anRisky / anDistTotal) * 100).toFixed(1) + '%', color: '#f59e0b', Icon: AlertCircle },
              ].map((r) => (
                <div key={r.label} style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '5px' }}>
                    <r.Icon size={12} style={{ color: r.color }} />
                    <span style={{ fontSize: '10px', color: '#555' }}>{r.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 800, color: '#1a1a1a' }}>{r.value.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '8px', color: '#aaa', marginBottom: '4px' }}>{r.pct}</div>
                  <div style={{ height: '5px', borderRadius: '4px', background: '#f4f4f6', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: r.pct, borderRadius: '4px', background: r.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Metrics */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}><AlertCircle size={13} style={{ color: '#2563eb' }} /> Performance Metrics</div>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '9px', color: '#999', marginBottom: '3px' }}>Avg Processing Time</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>842ms</div>
                <div style={{ fontSize: '8.5px', color: '#059669', fontWeight: 600 }}>▲ 6% vs last period</div>
              </div>
              <div style={{ marginBottom: '16px', borderTop: '1px solid #f2f2f2', paddingTop: '12px' }}>
                <div style={{ fontSize: '9px', color: '#999', marginBottom: '3px' }}>Disposable Detected</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{ANALYTICS_DIST[3].value.toLocaleString()}</div>
                <div style={{ fontSize: '8.5px', color: '#999' }}>{((ANALYTICS_DIST[3].value / anDistTotal) * 100).toFixed(1)}% of total</div>
              </div>
              <div style={{ borderTop: '1px solid #f2f2f2', paddingTop: '12px' }}>
                <div style={{ fontSize: '9px', color: '#999', marginBottom: '3px' }}>Role Accounts</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>{ANALYTICS_DIST[4].value.toLocaleString()}</div>
                <div style={{ fontSize: '8.5px', color: '#999' }}>{((ANALYTICS_DIST[4].value / anDistTotal) * 100).toFixed(1)}% of total</div>
              </div>
            </div>

            {/* Job Status Breakdown */}
            <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}><Activity size={13} style={{ color: '#7C3AED' }} /> Job Status Breakdown</div>
              {[
                { label: 'COMPLETED', value: 198, pct: '90.4%', color: '#059669', bg: '#ECFDF5' },
                { label: 'PROCESSING', value: 12, pct: '5.5%', color: '#2563eb', bg: '#EFF6FF' },
                { label: 'PENDING', value: 6, pct: '2.7%', color: '#d97706', bg: '#FFFBEB' },
                { label: 'FAILED', value: 3, pct: '1.4%', color: '#dc2626', bg: '#FEF2F2' },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.04em', padding: '3px 8px', borderRadius: '5px', color: r.color, background: r.bg }}>{r.label}</span>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#1a1a1a' }}>{r.value}</div>
                    <div style={{ fontSize: '8px', color: '#aaa' }}>{r.pct}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights & Recommendations */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}><TrendingUp size={13} style={{ color: '#7C3AED' }} /> Insights &amp; Recommendations</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 14px', borderRadius: '10px', background: '#ECFDF5', marginBottom: '10px' }}>
              <CheckCircle2 size={15} style={{ color: '#059669', flexShrink: 0, marginTop: '1px' }} />
              <div>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#065f46', marginBottom: '2px' }}>Validation Performance</div>
                <div style={{ fontSize: '9.5px', color: '#047857', lineHeight: 1.5 }}>Your validation success rate of {anSuccessRate}% shows good email list quality.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 14px', borderRadius: '10px', background: '#EFF6FF' }}>
              <Info size={15} style={{ color: '#2563eb', flexShrink: 0, marginTop: '1px' }} />
              <div>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1e40af', marginBottom: '2px' }}>Job Completion</div>
                <div style={{ fontSize: '9.5px', color: '#1d4ed8', lineHeight: 1.5 }}>94.6% of your jobs completed successfully. Consider reviewing failed jobs for optimization opportunities.</div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Placeholder for other nav items */}
        {activeNav !== 'Dashboard' && activeNav !== 'Email Validation' && activeNav !== 'Credits' && activeNav !== 'Validation Results' && activeNav !== 'Analytics' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#bbb', gap: '10px' }}>
          <MailCheck size={30} style={{ color: '#d5d5d5' }} />
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#888' }}>{activeNav}</div>
        </div>
        )}
      </div>
    </div>
  );
}
