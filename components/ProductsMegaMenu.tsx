'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import {
  // Calculator and GraduationCap were used by the now-commented-out
  // Accounting Software / Elearn entries; keep for easy restore.
  // Calculator,
  // GraduationCap,
  type LucideIcon,
} from 'lucide-react';
// Price is only used by the temporarily commented-out promo panel below.
// import { Price } from '@/components/currency/Price';

type AppIcon = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

/** Platforms a product ships a downloadable/loginable client on. Used by
 * DownloadMegaMenu (and the future per-product Download pages) to decide
 * which of the five platform slots to render — not every app has all five. */
export type DownloadPlatform = 'ios' | 'android' | 'web' | 'windows' | 'macos';

export interface ProductApp {
  name: string;
  /** Benefit-led label shown as the primary line in the Products mega menu
   * (e.g. "Business email"), with `name` shown beneath as the product name.
   * Falls back to `name` when not set. */
  title?: string;
  desc: string;
  icon: AppIcon;
  href?: string;
  /** Only set for apps that actually ship a client on these platforms.
   * Omitted (rather than an empty array) for apps that don't have a
   * Download-page story yet — DownloadMegaMenu treats "no platforms" the
   * same way SolutionMegaMenu treats "no href": rendered, but inert. */
  platforms?: DownloadPlatform[];
}

export interface ProductCategory {
  id: string;
  label: string;
  apps: ProductApp[];
}

// Icons marked `img` reuse the exact assets already shipped for the
// "Apps to Explore" rotator (components/AppsToExplore.tsx) — do not swap
// these for Lucide icons. Icons marked `lucide` are placeholders until a
// matching custom mark exists in a SnaarpLogos asset folder (none present
// in this repo yet).
export const CATEGORIES: ProductCategory[] = [
  {
    id: 'communicate',
    label: 'Communicate',
    apps: [
      { name: 'Snaarp Mail', title: 'Business email', desc: 'Business email on your own domain', icon: { kind: 'img', src: '/assets/icons/logos/mail.svg' }, href: '/products/mail', platforms: ['ios', 'android', 'web', 'windows', 'macos'] },
      { name: 'SnaarpMe', title: 'Scheduling & calendar', desc: 'Shared calendars & booking links', icon: { kind: 'img', src: '/assets/icons/logos/snaarpme.svg' }, href: '/products/kalender', platforms: ['ios', 'android', 'web'] },
      { name: 'Contacts', title: 'Address book', desc: 'One shared address book', icon: { kind: 'img', src: '/assets/icons/logos/contacts.svg' }, href: '/products/contacts', platforms: ['ios', 'android', 'web'] },
      { name: 'Meet', title: 'Video conferencing', desc: 'Video calls, screen share & recording', icon: { kind: 'img', src: '/assets/icons/logos/meet.svg' }, href: '/products/meet', platforms: ['ios', 'android', 'web', 'windows', 'macos'] },
      { name: 'Teams', title: 'Team chat', desc: 'Group chat & channels', icon: { kind: 'img', src: '/assets/icons/logos/teams.svg' }, href: '/products/teams', platforms: ['ios', 'android', 'web', 'windows', 'macos'] },
      { name: 'Thalking', title: 'Business phone', desc: 'Local UK & US numbers, calls & texts', icon: { kind: 'img', src: '/assets/icons/logos/thalking.svg' }, href: '/products/thalking', platforms: ['ios', 'android', 'web'] },
    ],
  },
  {
    id: 'create-store',
    label: 'Create & Store',
    apps: [
      { name: 'Work Drive', title: 'Cloud storage', desc: 'Shared file storage', icon: { kind: 'img', src: '/assets/icons/logos/work-drive.svg' }, href: '/products/work-drive', platforms: ['web', 'windows', 'macos'] },
      { name: 'Document', title: 'Collaborative docs', desc: 'Real-time co-editing docs', icon: { kind: 'img', src: '/assets/icons/logos/document.svg' }, href: '/products/docs', platforms: ['web', 'windows', 'macos'] },
      { name: 'Sheet', title: 'Spreadsheets', desc: 'Collaborative spreadsheets', icon: { kind: 'img', src: '/assets/icons/logos/sheet.svg' }, href: '/products/sheets', platforms: ['web', 'windows', 'macos'] },
      { name: 'Presentation', title: 'Slides & decks', desc: 'Build & present decks', icon: { kind: 'img', src: '/assets/icons/logos/presentation.svg' }, href: '/products/presentation', platforms: ['web', 'windows', 'macos'] },
      { name: 'PDF Reader', title: 'PDF editor', desc: 'View, annotate & merge PDFs', icon: { kind: 'img', src: '/assets/icons/logos/pdf-reader.svg' }, href: '/products/pdf-reader', platforms: ['web', 'windows', 'macos'] },
      // { name: 'NotePad', desc: 'Notes & reminders, synced', icon: { kind: 'img', src: '/assets/icons/logos/notepad.svg' }, href: '/products/notepad', platforms: ['ios', 'android', 'web'] },
    ],
  },
  {
    id: 'grow-revenue',
    label: 'Grow Revenue',
    apps: [
      { name: 'CRM', title: 'Sales CRM', desc: 'Pipeline & deal tracking', icon: { kind: 'img', src: '/assets/icons/logos/crm.svg' }, href: '/products/crm', platforms: ['ios', 'android', 'web'] },
      { name: 'Zeus Contacts', title: 'Lead database', desc: 'Enriched lead data', icon: { kind: 'img', src: '/assets/icons/logos/zeus.svg' }, platforms: ['web'] },
      { name: 'Sendrit', title: 'Email outreach', desc: 'Outbound email sequences', icon: { kind: 'img', src: '/assets/icons/logos/sendrit.svg' }, platforms: ['web'] },
      { name: 'VerifyRit', title: 'Email verification', desc: 'Email verification', icon: { kind: 'img', src: '/assets/icons/logos/verifyrit.svg' }, platforms: ['web'] },
    ],
  },
  {
    id: 'secure-sign',
    label: 'Secure & Sign',
    apps: [
      { name: 'Lock', title: 'Password manager', desc: 'Shared password manager', icon: { kind: 'img', src: '/assets/icons/logos/lock.svg' }, href: '/products/lock', platforms: ['ios', 'android', 'web', 'windows', 'macos'] },
      // { name: 'VPN', desc: 'Secure remote access', icon: { kind: 'lucide', Icon: Shield } },
      { name: 'eSignature', title: 'E-signatures', desc: 'External contract signing', icon: { kind: 'img', src: '/assets/icons/logos/esignature.svg' }, href: '/products/esignature', platforms: ['ios', 'android', 'web'] },
      // { name: 'Doc Sign', desc: 'Internal document approval', icon: { kind: 'img', src: '/assets/icons/logos/doc-sign.svg' }, href: '/products/doc-sign', platforms: ['ios', 'android', 'web'] },
    ],
  },
  {
    id: 'run-business',
    label: 'Run the Business',
    apps: [
      { name: 'Books', title: 'Invoicing & bookkeeping', desc: 'Invoicing & bookkeeping', icon: { kind: 'img', src: '/assets/icons/logos/books.svg' }, href: '/products/books', platforms: ['web'] },
      // { name: 'Accounting Software', desc: 'Full accounting & reporting', icon: { kind: 'lucide', Icon: Calculator }, href: '/products/accounting-software', platforms: ['web'] },
      { name: 'Project Management', title: 'Project management', desc: 'Sprints, tasks & tracking', icon: { kind: 'img', src: '/assets/icons/logos/project-management.svg' }, href: '/products/project-management', platforms: ['web'] },
      // { name: 'Elearn', desc: 'Team training & onboarding', icon: { kind: 'lucide', Icon: GraduationCap }, href: '/products/elearn', platforms: ['ios', 'android', 'web'] },
      { name: 'Business Card', title: 'Digital business card', desc: 'Digital business card sharing', icon: { kind: 'img', src: '/assets/icons/logos/business-card.svg' }, href: '/products/business-card', platforms: ['ios', 'android'] },
      { name: 'ID Card', title: 'Digital ID card', desc: 'Digital staff ID & access', icon: { kind: 'img', src: '/assets/icons/logos/id-card.svg' }, href: '/products/digital-id-card', platforms: ['ios', 'android', 'web', 'windows', 'macos'] },
      { name: 'Neo AI', title: 'AI assistant', desc: 'Cross-app AI assistant', icon: { kind: 'img', src: '/assets/icons/logos/neo-ai.svg' }, platforms: ['web'] },
    ],
  },
];

// Flattened list of every product across all categories, in category order.
// The Products mega menu now shows all products at once (no category grouping),
// so it renders from this rather than iterating CATEGORIES. CATEGORIES is kept
// intact because DownloadMegaMenu / SolutionMegaMenu still consume it.
export const ALL_PRODUCTS: ProductApp[] = CATEGORIES.flatMap((cat) => cat.apps);

export function AppIconView({ icon }: { icon: AppIcon }) {
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
  /** Set by Header in response to a 'snaarp:open-products-menu' event (dispatched
   * by app rows elsewhere on the site that don't have a dedicated product page
   * yet, e.g. the homepage's ExploreByCategory section) to force the sidebar to
   * a specific category instead of the pathname-derived one. */
  forceCategoryId?: string | null;
}

export function ProductsMegaMenu({ isOpen, onClose, triggerRef }: ProductsMegaMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

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
      <div className="mega-menu-inner mega-menu-inner--full">
        <div className="mega-menu-card mega-menu-card--full" ref={panelRef}>
          {/* All products in one grid — no categories, no scrolling */}
          <div className="mega-menu-apps mega-menu-apps--full">
            {ALL_PRODUCTS.map((app) => {
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
                    <span className="mega-menu-app-title">{app.title ?? app.name}</span>
                    <span className="mega-menu-app-desc">{app.name}</span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Promo image panel */}
          <a href="/pricing" className="mega-menu-hero" onClick={onClose}>
            <span className="mega-menu-hero-media" aria-hidden="true" />
            <span className="mega-menu-hero-overlay" aria-hidden="true" />
            <span className="mega-menu-hero-content">
              <span className="mega-menu-hero-title">Everything your business runs on, in one place</span>
              <span className="mega-menu-hero-cta">Create a free account</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
