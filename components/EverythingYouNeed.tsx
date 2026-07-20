'use client';

import { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  Wallet,
  Mail,
  ShieldCheck,
  Sparkles,
  Calendar,
  CalendarDays,
  Contact,
  Cloud,
  FileText,
  Sheet,
  Presentation,
  MessageCircle,
  Send,
  Wand2,
  Lock,
  UsersRound,
  Zap,
  Flame,
  Target,
  BookOpen,
  Receipt,
  PiggyBank,
  CreditCard,
  BarChart3,
  Phone,
  MessageSquare,
  MessagesSquare,
  Headset,
  Video,
  MonitorPlay,
  Users,
  ShieldAlert,
  Laptop,
  BrainCircuit,
  Workflow,
  LineChart,
  Cog,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  type LucideIcon,
} from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

interface SuiteApp {
  name: string;
  Icon: LucideIcon;
}

type Accent = 'brand' | 'mint' | 'amber' | 'teal' | 'rose';

interface SuiteCategory {
  id: string;
  number: string;
  label: string;
  accent: Accent;
  Icon: LucideIcon;
  desc: string;
  totalCount: number;
  apps: SuiteApp[];
  paginated?: boolean;
}

// All app-row icons use Lucide (lucide-react) for a clean, monochrome,
// consistent icon language across the whole section — same stroke weight
// and sizing scale, tinted per-category via .eyn-app-icon-chip's accent.
const WORKPLACE_APPS: SuiteApp[] = [
  { name: 'Snaarp Mail', Icon: Mail },
  { name: 'Calendar', Icon: Calendar },
  { name: 'Contacts', Icon: Contact },
  { name: 'Kalender', Icon: CalendarDays },
  { name: 'Drive', Icon: Cloud },
  { name: 'Docs', Icon: FileText },
  { name: 'Sheets', Icon: Sheet },
  { name: 'Presentations', Icon: Presentation },
  { name: 'Teams', Icon: MessageCircle },
  { name: 'Meet', Icon: Video },
  { name: 'AI Compose', Icon: Wand2 },
  { name: 'Lock', Icon: Lock },
];

const SALES_APPS: SuiteApp[] = [
  { name: 'CRM', Icon: UsersRound },
  { name: 'Zeus', Icon: Zap },
  { name: 'Sendrit', Icon: Send },
  { name: 'VerifyRit', Icon: ShieldCheck },
  { name: 'Warmer', Icon: Flame },
  { name: 'Neo', Icon: Target },
];

const FINANCE_APPS: SuiteApp[] = [
  { name: 'Snaarp Books', Icon: BookOpen },
  { name: 'Invoicing', Icon: Receipt },
  { name: 'Expenses', Icon: PiggyBank },
  { name: 'Payments', Icon: CreditCard },
  { name: 'Reports', Icon: BarChart3 },
];

const COMMS_APPS: SuiteApp[] = [
  { name: 'Voice', Icon: Phone },
  { name: 'SMS', Icon: MessageSquare },
  { name: 'Snaarp Chat', Icon: MessagesSquare },
  { name: 'AI Receptionist', Icon: Headset },
  { name: 'Screen Recorder', Icon: MonitorPlay },
];

const SECURITY_APPS: SuiteApp[] = [
  { name: 'Directory', Icon: Users },
  { name: 'Lock', Icon: Lock },
  { name: 'Bhrave', Icon: ShieldAlert },
  { name: 'Device Management', Icon: Laptop },
];

const AI_APPS: SuiteApp[] = [
  { name: 'AI Compose', Icon: Wand2 },
  { name: 'Neo AI', Icon: BrainCircuit },
  { name: 'Smart Workflows', Icon: Workflow },
  { name: 'Insights', Icon: LineChart },
  { name: 'Automation', Icon: Cog },
];

const CATEGORIES: SuiteCategory[] = [
  {
    id: 'workplace',
    number: '01',
    label: 'Workplace',
    accent: 'brand',
    Icon: Briefcase,
    desc: 'Communicate, collaborate and get work done anywhere.',
    totalCount: 12,
    apps: WORKPLACE_APPS,
    paginated: true,
  },
  {
    id: 'sales',
    number: '02',
    label: 'Sales',
    accent: 'mint',
    Icon: TrendingUp,
    desc: 'Find prospects, reach out and close more deals.',
    totalCount: SALES_APPS.length,
    apps: SALES_APPS,
  },
  {
    id: 'finance',
    number: '03',
    label: 'Finance',
    accent: 'amber',
    Icon: Wallet,
    desc: 'Manage accounting, invoices and financial reporting.',
    totalCount: FINANCE_APPS.length,
    apps: FINANCE_APPS,
  },
  {
    id: 'communications',
    number: '04',
    label: 'Communications',
    accent: 'teal',
    Icon: Mail,
    desc: 'Connect with customers anywhere, anytime.',
    totalCount: COMMS_APPS.length,
    apps: COMMS_APPS,
  },
  {
    id: 'security',
    number: '05',
    label: 'Security',
    accent: 'rose',
    Icon: ShieldCheck,
    desc: 'Secure every identity, device and file with zero trust.',
    totalCount: SECURITY_APPS.length,
    apps: SECURITY_APPS,
  },
  {
    id: 'ai',
    number: '06',
    label: 'AI',
    accent: 'brand',
    Icon: Sparkles,
    desc: 'One AI assistant across every part of your business.',
    totalCount: AI_APPS.length,
    apps: AI_APPS,
  },
];

const VISIBLE_ON_LOAD = 4;

function AppRow({ app }: { app: SuiteApp }) {
  const { Icon } = app;
  return (
    <li className="eyn-app-row">
      <span className="eyn-app-left">
        <span className="eyn-app-icon-chip" aria-hidden="true">
          <Icon size={15} strokeWidth={1.8} />
        </span>
        <span className="eyn-app-name">{app.name}</span>
      </span>
    </li>
  );
}

// Workplace-only: pages its 12 apps as two sets of 6, cross-fading between
// them. Deliberately separate from the section-level reveal-arrow in Step 3
// — this is a small, scoped control over just this card's own app list.
function WorkplaceAppList({ apps }: { apps: SuiteApp[] }) {
  const [page, setPage] = useState<0 | 1>(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const pageApps = page === 0 ? apps.slice(0, 6) : apps.slice(6, 12);

  function goToPage(next: 0 | 1) {
    if (next === page || isSwapping) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setPage(next);
      return;
    }
    setIsSwapping(true);
    window.setTimeout(() => {
      setPage(next);
      setIsSwapping(false);
    }, 200);
  }

  return (
    <>
      <div className="eyn-pagination">
        <span className="eyn-pagination-label">{page === 0 ? '1 of 2' : '2 of 2'}</span>
        <button type="button" className="eyn-pagination-btn" onClick={() => goToPage(page === 0 ? 1 : 0)}>
          {page === 0 ? (
            <>
              Next <ChevronRight size={13} strokeWidth={2} aria-hidden="true" />
            </>
          ) : (
            <>
              <ChevronLeft size={13} strokeWidth={2} aria-hidden="true" /> Back
            </>
          )}
        </button>
      </div>
      <ul className={`eyn-app-list${isSwapping ? ' is-swapping' : ''}`}>
        {pageApps.map((app) => (
          <AppRow key={app.name} app={app} />
        ))}
      </ul>
    </>
  );
}

function CategoryCard({ category, hidden }: { category: SuiteCategory; hidden?: boolean }) {
  // Security/AI cards (the "secondary" group) are permanently mounted but
  // start visibility:hidden via CSS, revealed only by the arrow-click
  // cross-fade — never by scrolling into view. Giving them [data-reveal]
  // would be wrong twice over: RevealSection's IntersectionObserver only
  // scans the DOM once on mount, and CSS visibility:hidden makes them
  // unobservable anyway, so they'd never get their .is-revealed class.
  const revealProps = hidden
    ? {}
    : { 'data-reveal': true, 'data-reveal-group': 'eyn', 'data-reveal-batch': 'eyn-cards' };
  return (
    <article className="eyn-card" data-accent={category.accent} {...revealProps}>
      <div className="eyn-card-top">
        <span className="eyn-card-count">
          {category.totalCount} {category.totalCount === 1 ? 'App' : 'Apps'}
        </span>
      </div>

      <div className="eyn-card-icon" aria-hidden="true">
        <category.Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="eyn-card-title">{category.label}</h3>
      <p className="eyn-card-desc">{category.desc}</p>

      {category.paginated ? (
        <WorkplaceAppList apps={category.apps} />
      ) : (
        <ul className="eyn-app-list">
          {category.apps.map((app) => (
            <AppRow key={app.name} app={app} />
          ))}
        </ul>
      )}

      <a href="#" className="eyn-card-explore">
        Explore {category.label}
        <span className="eyn-card-explore-arrow" aria-hidden="true">
          <ArrowRight size={14} strokeWidth={2} />
        </span>
      </a>
    </article>
  );
}

const PRIMARY_CATEGORIES = CATEGORIES.slice(0, VISIBLE_ON_LOAD);
const SECONDARY_CATEGORIES = CATEGORIES.slice(VISIBLE_ON_LOAD);

export function EverythingYouNeed() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section className="eyn-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="eyn-header">
          <h2 className="eyn-heading" data-reveal data-reveal-group="eyn">
            Everything You Need.
            <br />
            <span className="eyn-heading-accent">One Complete Suite.</span>
          </h2>
          <p className="eyn-subtext" data-reveal data-reveal-group="eyn">
            20+ business apps across 6 powerful categories, all in one place.
          </p>
        </div>

        {/* Carousel-style swap: both card groups stay mounted (stacked in the
            same grid cell via CSS) and cross-fade/slide via the .is-secondary
            class — the arrow replaces the visible 4-card group with the
            remaining 2, it never appends into a combined grid. Keeping the
            primary cards permanently mounted also avoids re-triggering their
            one-shot scroll-reveal animation on every toggle. */}
        <div className={`eyn-row${showSecondary ? ' is-secondary' : ''}`}>
          <button
            type="button"
            className={`eyn-reveal-arrow${showSecondary ? ' is-flipped' : ''}`}
            onClick={() => setShowSecondary((s) => !s)}
            aria-label={showSecondary ? 'Back to Workplace, Sales, Finance and Communications' : 'Show Security and AI'}
            aria-expanded={showSecondary}
          >
            <ArrowRight size={20} strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="eyn-grid-stage">
            <div className="eyn-grid eyn-grid-primary" aria-hidden={showSecondary}>
              {PRIMARY_CATEGORIES.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
            <div className="eyn-grid eyn-grid-secondary" aria-hidden={!showSecondary}>
              {SECONDARY_CATEGORIES.map((category) => (
                <CategoryCard key={category.id} category={category} hidden />
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
