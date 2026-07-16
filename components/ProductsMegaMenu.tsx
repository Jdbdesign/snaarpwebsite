'use client';

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import {
  Contact,
  FileType,
  NotebookPen,
  UsersRound,
  Zap,
  ShieldCheck,
  Shield,
  PenLine,
  FileCheck,
  BadgeCheck,
  BookOpen,
  Calculator,
  Kanban,
  GraduationCap,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { Price } from '@/components/currency/Price';

type AppIcon = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

interface ProductApp {
  name: string;
  desc: string;
  icon: AppIcon;
  href?: string;
}

interface ProductCategory {
  id: string;
  label: string;
  apps: ProductApp[];
}

// Icons marked `img` reuse the exact assets already shipped for the
// "Apps to Explore" rotator (components/AppsToExplore.tsx) — do not swap
// these for Lucide icons. Icons marked `lucide` are placeholders until a
// matching custom mark exists in a SnaarpLogos asset folder (none present
// in this repo yet).
const CATEGORIES: ProductCategory[] = [
  {
    id: 'communicate',
    label: 'Communicate',
    apps: [
      { name: 'Snaarp Mail', desc: 'Business email on your own domain', icon: { kind: 'img', src: '/assets/icons/envelope.jpg' }, href: '/products/mail' },
      { name: 'Kalender', desc: 'Shared calendars & booking links', icon: { kind: 'img', src: '/assets/icons/apps-kalender.jpg' }, href: '/products/kalender' },
      { name: 'Contacts', desc: 'One shared address book', icon: { kind: 'img', src: '/assets/icons/search.jpg' }, href: '/products/contacts' },
      { name: 'Meet', desc: 'Video calls, screen share & recording', icon: { kind: 'img', src: '/assets/icons/apps-meet.jpg' }, href: '/products/meet' },
      { name: 'Teams', desc: 'Group chat & channels', icon: { kind: 'img', src: '/assets/icons/chat-bubbles.jpg' }, href: '/products/teams' },
      { name: 'AI Compose', desc: 'AI drafting across every app', icon: { kind: 'img', src: '/assets/icons/ai-sparkle.jpg' }, href: '/products/ai-compose' },
      { name: 'Business Card', desc: 'Digital business card sharing', icon: { kind: 'lucide', Icon: Contact }, href: '/products/business-card' },
    ],
  },
  {
    id: 'create-store',
    label: 'Create & Store',
    apps: [
      { name: 'Work Drive', desc: 'Shared file storage', icon: { kind: 'img', src: '/assets/icons/cube.jpg' }, href: '/products/work-drive' },
      { name: 'Document', desc: 'Real-time co-editing docs', icon: { kind: 'img', src: '/assets/icons/apps-document.png' } },
      { name: 'Sheet', desc: 'Collaborative spreadsheets', icon: { kind: 'img', src: '/assets/icons/apps-sheet.jpg' }, href: '/products/sheets' },
      { name: 'Presentation', desc: 'Build & present decks', icon: { kind: 'img', src: '/assets/icons/p-icon.jpg' } },
      { name: 'PDF Reader', desc: 'View, annotate & merge PDFs', icon: { kind: 'lucide', Icon: FileType }, href: '/products/pdf-reader' },
      { name: 'NotePad', desc: 'Notes & reminders, synced', icon: { kind: 'lucide', Icon: NotebookPen } },
    ],
  },
  {
    id: 'grow-revenue',
    label: 'Grow Revenue',
    apps: [
      { name: 'CRM', desc: 'Pipeline & deal tracking', icon: { kind: 'lucide', Icon: UsersRound } },
      { name: 'Zeus Contacts', desc: 'Enriched lead data', icon: { kind: 'lucide', Icon: Zap } },
      { name: 'Sendrit', desc: 'Outbound email sequences', icon: { kind: 'img', src: '/assets/icons/apps-sendrit.jpg' } },
      { name: 'VerifyRit', desc: 'Email verification', icon: { kind: 'lucide', Icon: ShieldCheck } },
    ],
  },
  {
    id: 'secure-sign',
    label: 'Secure & Sign',
    apps: [
      { name: 'Lock', desc: 'Shared password manager', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' } },
      { name: 'VPN', desc: 'Secure remote access', icon: { kind: 'lucide', Icon: Shield } },
      { name: 'eSignature', desc: 'External contract signing', icon: { kind: 'lucide', Icon: PenLine } },
      { name: 'Doc Sign', desc: 'Internal document approval', icon: { kind: 'lucide', Icon: FileCheck } },
      { name: 'ID Card', desc: 'Digital staff ID & access', icon: { kind: 'lucide', Icon: BadgeCheck } },
    ],
  },
  {
    id: 'run-business',
    label: 'Run the Business',
    apps: [
      { name: 'Books', desc: 'Invoicing & bookkeeping', icon: { kind: 'lucide', Icon: BookOpen } },
      { name: 'Accounting Software', desc: 'Full accounting & reporting', icon: { kind: 'lucide', Icon: Calculator } },
      { name: 'Project Management', desc: 'Sprints, tasks & tracking', icon: { kind: 'lucide', Icon: Kanban } },
      { name: 'Elearn', desc: 'Team training & onboarding', icon: { kind: 'lucide', Icon: GraduationCap } },
      { name: 'Neo AI', desc: 'Cross-app AI assistant', icon: { kind: 'lucide', Icon: BrainCircuit } },
    ],
  },
];

// Reuses CATEGORIES (the same data the sidebar/app-grid render from) as the
// route-to-category lookup, rather than maintaining a second mapping that
// could drift out of sync with it.
function findCategoryIdForPath(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  return CATEGORIES.find((cat) => cat.apps.some((app) => app.href === pathname))?.id;
}

function AppIconView({ icon }: { icon: AppIcon }) {
  if (icon.kind === 'img') {
    return <img src={icon.src} alt="" aria-hidden="true" className="mega-app-icon-img" />;
  }
  const { Icon } = icon;
  return <Icon size={20} strokeWidth={1.75} className="mega-app-icon-lucide" aria-hidden="true" />;
}

interface ProductsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function ProductsMegaMenu({ isOpen, onClose, triggerRef }: ProductsMegaMenuProps) {
  const pathname = usePathname();
  // Falls back to the first category on non-product pages (home, pricing,
  // etc.) where there's no "current product" to reflect.
  const currentCategoryId = findCategoryIdForPath(pathname) ?? CATEGORIES[0].id;
  const [activeCategoryId, setActiveCategoryId] = useState(currentCategoryId);
  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];

  // Re-sync the sidebar to the current page's category every time the menu
  // opens, so it reflects where the user is rather than remembering
  // whichever category was last clicked.
  useEffect(() => {
    if (!isOpen) return;
    setActiveCategoryId(currentCategoryId);
  }, [isOpen, currentCategoryId]);

  const panelRef = useRef<HTMLDivElement>(null);
  // Left offset (px, from the viewport edge) that anchors the panel's left
  // edge to the "Products" trigger's left edge, recalculated whenever the
  // menu opens or the viewport changes — the trigger's position shifts with
  // the header's own responsive padding, so this can't be a fixed value.
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
      // Scoped to just the visible panel and the trigger button — not a
      // wrapper that also spans the empty space beside the panel, which
      // would otherwise swallow clicks that should count as "outside".
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

          {/* Column 1: category sidebar */}
          <div className="mega-menu-categories">
            <p className="mega-menu-categories-label">Product Categories</p>
            <ul className="mega-menu-categories-list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`mega-menu-category-btn${cat.id === activeCategoryId ? ' is-active' : ''}`}
                    aria-current={cat.id === activeCategoryId}
                    onClick={() => setActiveCategoryId(cat.id)}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: app grid for the active category */}
          <div className="mega-menu-apps" key={activeCategory.id}>
            {activeCategory.apps.map((app) => {
              const isCurrentPage = Boolean(app.href) && app.href === pathname;
              return (
                <a
                  key={app.name}
                  href={app.href ?? '#'}
                  className={`mega-menu-app${isCurrentPage ? ' is-active' : ''}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                  onClick={onClose}
                >
                  <span className="mega-app-icon">
                    <AppIconView icon={app.icon} />
                  </span>
                  <span className="mega-menu-app-text">
                    <span className="mega-menu-app-title">{app.name}</span>
                    <span className="mega-menu-app-desc">{app.desc}</span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Column 3: promo panel */}
          <div className="mega-menu-promo">
            <div className="mega-menu-promo-media">
              {/* Placeholder gradient — swap for a real office/team photo or product video still */}
              <button type="button" className="mega-menu-promo-play" aria-label="Play video">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="mega-menu-promo-text">
              <p className="mega-menu-promo-title">One Login. Every App.</p>
              <p className="mega-menu-promo-desc">27 tools built into a single Stack — starting from <Price amount={1} />.</p>
              <a href="#" className="mega-menu-promo-cta" onClick={onClose}>
                Get Started
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
