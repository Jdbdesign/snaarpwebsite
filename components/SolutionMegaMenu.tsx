'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import {
  TrendingUp,
  UserPlus,
  GraduationCap,
  FileCheck,
  Wallet,
  Video,
  Briefcase,
  Landmark,
  HeartPulse,
  HandHeart,
  Building2,
  ShoppingBag,
  ShieldCheck,
  FileLock2,
  Fingerprint,
  Scale,
  type LucideIcon,
} from 'lucide-react';

interface SolutionItem {
  title: string;
  desc: string;
  Icon: LucideIcon;
  /** Only set once a Solution page actually exists for this item — the rest
   * stay non-interactive rather than linking to a route that doesn't exist
   * yet (same rationale as the Zeus/Sendrit app-chip fallback on the Sales
   * Pipeline & Outreach page itself). */
  href?: string;
}

interface SolutionTab {
  id: string;
  label: string;
  items: SolutionItem[];
}

const TABS: SolutionTab[] = [
  {
    id: 'use-case',
    label: 'By Use Case',
    items: [
      { title: 'Sales Pipeline & Outreach', desc: 'CRM, outreach, and e-signatures working together to close deals.', Icon: TrendingUp, href: '/solutions/sales-pipeline-outreach' },
      { title: 'Customer Onboarding', desc: 'Bring new customers on board without a dozen disconnected emails.', Icon: UserPlus, href: '/solutions/customer-onboarding' },
      { title: 'Team Onboarding & Training', desc: 'Get new hires set up, trained, and access-verified from day one.', Icon: GraduationCap, href: '/solutions/team-onboarding-training' },
      { title: 'Document & Contract Approval', desc: 'Route, sign, and approve paperwork without the inbox chase.', Icon: FileCheck, href: '/solutions/document-contract-approval' },
      { title: 'Financial Operations', desc: 'Invoice, reconcile, and report without stitching tools together.', Icon: Wallet },
      { title: 'Remote & Hybrid Collaboration', desc: "Meet, chat, and co-edit like your team's in the same room.", Icon: Video },
    ],
  },
  {
    id: 'industry',
    label: 'By Industry',
    items: [
      { title: 'Professional Services', desc: 'Client work, invoicing, and communication in one place.', Icon: Briefcase },
      { title: 'Financial Services', desc: 'Built for teams that handle sensitive financial data daily.', Icon: Landmark },
      { title: 'Healthcare', desc: 'Secure records and communication for patient-facing teams.', Icon: HeartPulse },
      { title: 'Nonprofits', desc: 'Enterprise-grade tools at a price that fits a nonprofit budget.', Icon: HandHeart },
      { title: 'Real Estate', desc: 'Manage clients, contracts, and communication from one login.', Icon: Building2 },
      { title: 'Retail & Ecommerce', desc: 'Run the business side while you focus on customers.', Icon: ShoppingBag },
    ],
  },
  {
    id: 'compliance',
    label: 'By Compliance',
    // RISK FLAG (product/legal sign-off needed before launch): "SOC 2-Aligned",
    // "GDPR", and "Industry Regulations" below are specific, checkable
    // compliance/certification claims, not general marketing copy. Do not
    // ship as-is without confirming actual certification/alignment status —
    // if any of these are in progress rather than complete, reword to
    // "working toward X" instead of implying it's already achieved.
    items: [
      { title: 'GDPR & Data Privacy', desc: 'EU data residency and privacy controls built in, not bolted on.', Icon: ShieldCheck },
      { title: 'SOC 2-Aligned Security', desc: 'Access logs, encryption, and identity controls ready for audit.', Icon: FileLock2 },
      { title: 'Zero Trust Access Control', desc: 'Every login, device, and file access verified, every time.', Icon: Fingerprint },
      { title: 'Industry Regulations', desc: 'Built with the controls regulated industries need to say yes.', Icon: Scale },
    ],
  },
];

// Reuses TABS (the same data the sidebar/item-grid render from) as the
// route-to-tab lookup, rather than maintaining a second mapping that could
// drift out of sync with it — same rationale as ProductsMegaMenu's
// findCategoryIdForPath.
function findTabIdForPath(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  return TABS.find((tab) => tab.items.some((item) => item.href === pathname))?.id;
}

interface SolutionMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function SolutionMegaMenu({ isOpen, onClose, triggerRef }: SolutionMegaMenuProps) {
  const pathname = usePathname();
  // Falls back to the first tab on non-solution pages (home, pricing, etc.)
  // where there's no "current solution" to reflect.
  const currentTabId = findTabIdForPath(pathname) ?? TABS[0].id;
  const [activeTabId, setActiveTabId] = useState(currentTabId);
  const activeTab = TABS.find((t) => t.id === activeTabId) ?? TABS[0];

  // Re-sync the sidebar to the current page's tab every time the menu
  // (re)opens, so it reflects where the user is rather than remembering
  // whichever tab was last clicked — same rationale as ProductsMegaMenu's
  // category re-sync.
  useEffect(() => {
    if (!isOpen) return;
    setActiveTabId(currentTabId);
  }, [isOpen, currentTabId]);

  const panelRef = useRef<HTMLDivElement>(null);
  // Same trigger-anchored positioning approach as ProductsMegaMenu — the
  // panel's left edge tracks the "Solution" trigger's left edge rather than
  // using a fixed offset, since the trigger's position shifts with the
  // header's own responsive padding.
  const [panelLeft, setPanelLeft] = useState(0);

  useLayoutEffect(() => {
    if (!isOpen) return;

    function updatePosition() {
      const trigger = triggerRef.current;
      if (!trigger) return;
      setPanelLeft(trigger.getBoundingClientRect().left);
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        triggerRef.current?.focus();
      }
    }
    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      onClose();
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isOpen, onClose, triggerRef]);

  return (
    <div className={`mega-menu${isOpen ? ' mega-menu-open' : ''}`} inert={!isOpen}>
      <div className="mega-menu-inner" style={{ paddingLeft: panelLeft, paddingRight: 'var(--space-6)' }}>
        <div className="mega-menu-card" ref={panelRef}>
          <span className="mega-menu-notch" aria-hidden="true" />

          {/* Column 1: tab sidebar */}
          <div className="mega-menu-categories">
            <p className="mega-menu-categories-label">Solution</p>
            <ul className="mega-menu-categories-list">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={`solution-tab-btn${tab.id === activeTabId ? ' is-active' : ''}`}
                    aria-current={tab.id === activeTabId}
                    onClick={() => setActiveTabId(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: item grid for the active tab */}
          <div className="mega-menu-apps" key={activeTab.id}>
            {activeTab.items.map((item) => {
              const isCurrentPage = Boolean(item.href) && item.href === pathname;
              const content = (
                <>
                  <span className="solution-menu-item-icon">
                    <item.Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="mega-menu-app-text">
                    <span className="mega-menu-app-title">{item.title}</span>
                    <span className="mega-menu-app-desc">{item.desc}</span>
                  </span>
                </>
              );
              return item.href ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`solution-menu-item${isCurrentPage ? ' is-active' : ''}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                  onClick={onClose}
                >
                  {content}
                </Link>
              ) : (
                <div key={item.title} className="solution-menu-item">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Column 3: static promo panel — same across all three tabs */}
          <div className="mega-menu-promo">
            <div className="mega-menu-promo-media solution-menu-promo-media" style={{ overflow: 'hidden' }}>
              <img src="/assets/images/2150917190.jpg" alt="Growing teams collaborating" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <div className="mega-menu-promo-text">
              <p className="mega-menu-promo-title">Built for Growing Teams</p>
              <p className="mega-menu-promo-desc">From solo founders to full teams, the Stack scales with you.</p>
              <a href="#" className="mega-menu-promo-cta" onClick={onClose}>
                Explore Tools
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
