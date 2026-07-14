'use client';

import {
  Search,
  ChevronDown,
  LifeBuoy,
  Settings,
  Inbox,
  Star,
  Send,
  Clock,
  FileText,
  ChevronUp,
  TrendingUp,
  CalendarCheck,
  Mail,
  Shield,
  Trash2,
  Folder,
  FolderClosed,
  Contact,
  Plus,
  RefreshCw,
  MoreVertical,
  Check,
  CheckCheck,
  Paperclip,
  type LucideIcon,
} from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

const PRIMARY_NAV: { Icon: LucideIcon; label: string; count?: number; active?: boolean }[] = [
  { Icon: Inbox, label: 'Inbox', count: 999 },
  { Icon: Star, label: 'Starred' },
  { Icon: Send, label: 'Sent', active: true },
  { Icon: Clock, label: 'Snoozed' },
  { Icon: FileText, label: 'Draft', count: 10 },
];

const MORE_NAV: { Icon: LucideIcon; label: string }[] = [
  { Icon: TrendingUp, label: 'Important' },
  { Icon: CalendarCheck, label: 'Scheduled' },
  { Icon: Mail, label: 'All Mail' },
  { Icon: Shield, label: 'Spam' },
  { Icon: Trash2, label: 'Trash' },
  { Icon: Folder, label: 'Categories' },
  { Icon: Settings, label: 'Manage subscriptions' },
  { Icon: Contact, label: 'Manage labels' },
];

const DELIVERY_LEGEND = [
  { Icon: Check, label: 'Not Delivered', tone: 'muted' as const },
  { Icon: CheckCheck, label: 'Delivered, Not Opened', tone: 'muted' as const },
  { Icon: CheckCheck, label: 'Opened', tone: 'opened' as const },
];

type EmailRow = {
  to: string;
  subject: string;
  preview: string;
  date: string;
  attachment?: boolean;
  delivery: 'not-delivered' | 'opened';
};

const EMAIL_ROWS: EmailRow[] = [
  { to: 'Sarah', subject: 'CLAUDE FIRST WEBSITE CREATION FOR AREOS', preview: 'Hello io Kindly find the Aero video in this email. Re', attachment: true, delivery: 'opened', date: 'May 21' },
  { to: 'Alex', subject: 'ANAARTY VIDEOS', preview: 'Hello io Kindly find the attached snaarp video in this email.', attachment: true, delivery: 'opened', date: 'May 21' },
  { to: 'Michael', subject: 'SINCINT PRICING', preview: 'Hello io Kindly find the attached Sencint pricing flows designs to this email.', delivery: 'opened', date: 'May 21' },
  { to: 'Jessica', subject: 'Update on Product Pages', preview: 'Hello io Kindly find the attached product pages designs to this email.', attachment: true, delivery: 'opened', date: 'May 21' },
  { to: 'David', subject: 'Update on Product Pages and Mega Dropdown Development', preview: 'Hello io Kindly find the attached prod', attachment: true, delivery: 'opened', date: 'May 21' },
  { to: 'Sarah', subject: 'VerilyIt homepage pricing page and the billing dashboard UI', preview: 'Hello io Kindly find the attached Verily', attachment: true, delivery: 'not-delivered', date: 'May 21' },
  { to: 'Alex', subject: 'SNAARP HOME PAGE Sample - Snaarp Modal video au...', preview: 'Hello io Kindly find the attached snaarp ho', attachment: true, delivery: 'opened', date: 'May 21' },
  { to: 'Michael', subject: 'SNAARP HOME PAGE AND STARTUP DASHBOARD', preview: 'Hello io Kindly find the attached snaarp home pa', delivery: 'opened', date: 'May 20' },
  { to: 'opn +1', subject: 'UGPCE Page SCREENS', preview: 'Hello io Kindly find the attached folders and link containing the remaining sc', attachment: true, delivery: 'opened', date: 'May 20' },
  { to: 'api', subject: 'Super admin Portal', preview: 'Hello io Kindly find the link https://www.figma.com/design/6ypGNSJOGYB7cbX..', delivery: 'not-delivered', date: 'May 20' },
  { to: 'opn +1', subject: 'UGPCE Folders for the Profile flow and billing dashboard UI', preview: 'Hello io Kindly find the attached UGPCI', attachment: true, delivery: 'opened', date: 'May 20' },
  { to: 'opn +1', subject: 'UGPCE Folders for Withdraw Fund. Add new bank account and funding wallet flow', preview: 'Hello io Kindly', attachment: true, delivery: 'opened', date: 'May 20' },
  { to: 'Jessica', subject: 'NEW PROJECT ASSETS', preview: "Hi Victor, I've uploaded the latest branding assets for the new project...", attachment: true, delivery: 'opened', date: 'May 19' },
  { to: 'David', subject: 'WEEKLY STATUS UPDATE', preview: "Please find the summary of this week's progress and next steps...", delivery: 'opened', date: 'May 19' },
  { to: 'Sarah', subject: 'FEEDBACK ON DASHBOARD V2', preview: 'The client had some thoughts on the color palette used in the...', attachment: true, delivery: 'not-delivered', date: 'May 18' },
  { to: 'Alex', subject: 'INVOICE FOR APRIL SERVICES', preview: 'Attached is the invoice for the design services provided in April...', attachment: true, delivery: 'opened', date: 'May 18' },
  { to: 'Michael', subject: 'MEETING NOTES: PRODUCT STRATEGY', preview: 'Here are the notes from our session this morning regarding', delivery: 'opened', date: 'May 17' },
];

export function MailDashboardPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
      <RevealSection>
        <div className="mail-dashboard-frame" data-reveal data-reveal-group="mail-dashboard">
          {/* Sidebar */}
          <aside className="mail-dashboard-sidebar">
            <p className="mail-dashboard-logo">Snaarp</p>

            <button type="button" className="mail-dashboard-compose">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
              Compose
            </button>

            <nav className="mail-dashboard-nav">
              {PRIMARY_NAV.map(({ Icon, label, count, active }) => (
                <span key={label} className={`mail-dashboard-nav-item${active ? ' is-active' : ''}`}>
                  <Icon size={17} aria-hidden="true" />
                  <span className="mail-dashboard-nav-label">{label}</span>
                  {count !== undefined && <span className="mail-dashboard-nav-count">{count}</span>}
                </span>
              ))}

              <span className="mail-dashboard-nav-collapse">
                <ChevronUp size={15} aria-hidden="true" />
                Less
              </span>

              {MORE_NAV.map(({ Icon, label }) => (
                <span key={label} className="mail-dashboard-nav-item">
                  <Icon size={17} aria-hidden="true" />
                  <span className="mail-dashboard-nav-label">{label}</span>
                </span>
              ))}
            </nav>

            <div className="mail-dashboard-labels">
              <p className="mail-dashboard-labels-heading">
                Labels
                <Plus size={15} aria-hidden="true" />
              </p>
              <span className="mail-dashboard-nav-item">
                <FolderClosed size={17} className="mail-dashboard-label-icon" aria-hidden="true" />
                <span className="mail-dashboard-nav-label">All Mail</span>
                <span className="mail-dashboard-nav-count">14</span>
              </span>
            </div>
          </aside>

          {/* Main panel */}
          <div className="mail-dashboard-main">
            <div className="mail-dashboard-topbar">
              <label className="mail-dashboard-search">
                <Search size={16} aria-hidden="true" />
                <input type="text" placeholder="Search email..." readOnly />
              </label>

              <div className="mail-dashboard-topbar-right">
                <span className="mail-dashboard-status-pill">
                  <span className="mail-dashboard-status-dot" />
                  Active
                  <ChevronDown size={14} aria-hidden="true" />
                </span>
                <button type="button" className="mail-dashboard-icon-btn" aria-label="Support">
                  <LifeBuoy size={17} aria-hidden="true" />
                </button>
                <button type="button" className="mail-dashboard-icon-btn" aria-label="Settings">
                  <Settings size={17} aria-hidden="true" />
                </button>
                <span className="mail-dashboard-avatar">AM</span>
              </div>
            </div>

            <div className="mail-dashboard-toolbar">
              <span className="mail-dashboard-toolbar-select">
                <input type="checkbox" aria-label="Select all" />
                <ChevronDown size={13} aria-hidden="true" />
              </span>
              <RefreshCw size={15} className="mail-dashboard-toolbar-icon" aria-hidden="true" />
              <MoreVertical size={15} className="mail-dashboard-toolbar-icon" aria-hidden="true" />
              <span className="mail-dashboard-pagination">1&ndash;12 of 12</span>
            </div>

            <div className="mail-dashboard-legend">
              <span className="mail-dashboard-legend-title">Delivery:</span>
              {DELIVERY_LEGEND.map(({ Icon, label, tone }) => (
                <span key={label} className={`mail-dashboard-legend-item is-${tone}`}>
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mail-dashboard-list">
              {EMAIL_ROWS.map((row, i) => (
                <div className="mail-dashboard-row" key={i}>
                  <input type="checkbox" className="mail-dashboard-row-check" aria-label={`Select email to ${row.to}`} />
                  <Star size={15} className="mail-dashboard-row-star" aria-hidden="true" />
                  <span className="mail-dashboard-row-to">To: {row.to}</span>
                  {row.delivery === 'opened' ? (
                    <CheckCheck size={15} className="mail-dashboard-row-delivery is-opened" aria-hidden="true" />
                  ) : (
                    <Check size={15} className="mail-dashboard-row-delivery is-muted" aria-hidden="true" />
                  )}
                  <span className="mail-dashboard-row-text">
                    <span className="mail-dashboard-row-subject">{row.subject}</span>
                    {' – '}
                    <span className="mail-dashboard-row-preview">{row.preview}</span>
                  </span>
                  {row.attachment && <Paperclip size={14} className="mail-dashboard-row-attachment" aria-hidden="true" />}
                  <span className="mail-dashboard-row-date">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
