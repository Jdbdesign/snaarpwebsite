'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { CATEGORIES, AppIconView, type DownloadPlatform } from '@/components/ProductsMegaMenu';

// Flattened once at module scope — CATEGORIES is static, so there's no
// reason to re-flatten on every render. Order matches the Products mega
// menu's category order, so "Snaarp Mail" (the only shipped Download page)
// naturally lands first, matching the reference screenshot's default
// selection.
const ALL_APPS = CATEGORIES.flatMap((category) => category.apps);

// Download pages are a separate, much smaller surface than product pages —
// most apps in CATEGORIES have a /products/* page but no /download/* page
// yet. This map is the single source of truth for which products actually
// have one; everything else renders its platform links as inert (same
// non-interactive treatment SolutionMegaMenu gives items with no href),
// rather than linking to a page that doesn't exist.
const DOWNLOAD_PAGE_HREFS: Record<string, string> = {
  'Snaarp Mail': '/download/mail',
  'Kalender': '/download/kalender',
  'Contacts': '/download/contacts',
  'Meet': '/download/meet',
  'Teams': '/download/teams',
};

const PLATFORM_GROUPS: { id: 'mobile' | 'web' | 'desktop'; label: string; platforms: { key: DownloadPlatform; label: string; iconSrc: string }[] }[] = [
  {
    id: 'mobile',
    label: 'Mobile app',
    platforms: [
      { key: 'ios', label: 'iOS', iconSrc: '/assets/icons/download/ios.svg' },
      { key: 'android', label: 'Android', iconSrc: '/assets/icons/download/android.svg' },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    platforms: [{ key: 'web', label: 'Web app', iconSrc: '/assets/icons/download/web.svg' }],
  },
  {
    id: 'desktop',
    label: 'Desktop app',
    platforms: [
      { key: 'windows', label: 'Windows', iconSrc: '/assets/icons/download/windows.svg' },
      { key: 'macos', label: 'macOS', iconSrc: '/assets/icons/download/macos.svg' },
    ],
  },
];

function findAppNameForPath(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  return Object.keys(DOWNLOAD_PAGE_HREFS).find((name) => DOWNLOAD_PAGE_HREFS[name] === pathname);
}

interface DownloadMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function DownloadMegaMenu({ isOpen, onClose, triggerRef }: DownloadMegaMenuProps) {
  const pathname = usePathname();
  const currentAppName = findAppNameForPath(pathname) ?? ALL_APPS[0].name;
  const [activeAppName, setActiveAppName] = useState(currentAppName);
  const activeApp = ALL_APPS.find((app) => app.name === activeAppName) ?? ALL_APPS[0];
  const activeDownloadHref = DOWNLOAD_PAGE_HREFS[activeApp.name];

  // Re-sync to the current page's product every time the menu (re)opens —
  // same rationale as ProductsMegaMenu/SolutionMegaMenu's category re-sync.
  useEffect(() => {
    if (!isOpen) return;
    setActiveAppName(currentAppName);
  }, [isOpen, currentAppName]);

  const panelRef = useRef<HTMLDivElement>(null);
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
        <div className="mega-menu-card download-menu-card" ref={panelRef}>
          <span className="mega-menu-notch" aria-hidden="true" />

          {/* Column 1: scrollable product list */}
          <div className="mega-menu-categories download-menu-products">
            <p className="mega-menu-categories-label">Featured Products</p>
            <ul className="download-menu-products-list">
              {ALL_APPS.map((app) => (
                <li key={app.name}>
                  {DOWNLOAD_PAGE_HREFS[app.name] ? (
                    <Link
                      href={DOWNLOAD_PAGE_HREFS[app.name]}
                      className={`download-menu-product-btn${app.name === activeAppName ? ' is-active' : ''}`}
                      aria-current={app.name === activeAppName}
                      onMouseEnter={() => setActiveAppName(app.name)}
                      onFocus={() => setActiveAppName(app.name)}
                      onClick={onClose}
                    >
                      <span className="download-menu-product-icon">
                        <AppIconView icon={app.icon} />
                      </span>
                      {app.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`download-menu-product-btn${app.name === activeAppName ? ' is-active' : ''}`}
                      aria-current={app.name === activeAppName}
                      onMouseEnter={() => setActiveAppName(app.name)}
                      onFocus={() => setActiveAppName(app.name)}
                      onClick={() => setActiveAppName(app.name)}
                    >
                      <span className="download-menu-product-icon">
                        <AppIconView icon={app.icon} />
                      </span>
                      {app.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: platform columns for the selected product */}
          <div className="download-menu-platforms" key={activeApp.name}>
            {PLATFORM_GROUPS.map((group) => {
              const available = group.platforms.filter((p) => activeApp.platforms?.includes(p.key));
              if (available.length === 0) return null;
              return (
                <div className="download-menu-platform-col" key={group.id}>
                  <p className="download-menu-platform-heading">{group.label}</p>
                  {available.map(({ key, label, iconSrc }) =>
                    activeDownloadHref ? (
                      <Link key={key} href={activeDownloadHref} className="download-menu-platform-link" onClick={onClose}>
                        <img src={iconSrc} alt="" aria-hidden="true" className="download-menu-platform-icon" />
                        {label}
                      </Link>
                    ) : (
                      <span key={key} className="download-menu-platform-link is-disabled" aria-disabled="true">
                        <img src={iconSrc} alt="" aria-hidden="true" className="download-menu-platform-icon" />
                        {label}
                      </span>
                    )
                  )}
                </div>
              );
            })}
            {!activeApp.platforms?.length && (
              <p className="download-menu-platform-empty">Download options coming soon for {activeApp.name}.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
