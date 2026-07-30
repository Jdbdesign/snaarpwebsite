'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { CATEGORIES, AppIconView } from '@/components/ProductsMegaMenu';

const ALL_APPS = CATEGORIES.flatMap((cat) => cat.apps);

interface LoginMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function LoginMegaMenu({ isOpen, onClose, triggerRef }: LoginMegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [mailExpanded, setMailExpanded] = useState(false);

  // Reset sub-menu when the login menu closes
  useEffect(() => {
    if (!isOpen) setMailExpanded(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { onClose(); triggerRef.current?.focus(); }
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
      <div className="mega-menu-inner" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 24, paddingLeft: 24 }}>
        <div className="mega-menu-card login-menu-card" ref={panelRef}>
          <span className="mega-menu-notch" aria-hidden="true" style={{ right: 310, left: 'auto' }} />

          <p className="login-menu-heading">Sign in to</p>

          <div className="login-menu-grid">
            {ALL_APPS.map((app) => {
              if (app.name === 'Snaarp Mail') {
                return (
                  <div key={app.name} className="login-menu-mail-wrap">
                    <button
                      type="button"
                      className={`login-menu-item login-menu-item--mail${mailExpanded ? ' is-expanded' : ''}`}
                      onClick={() => setMailExpanded((v) => !v)}
                      aria-expanded={mailExpanded}
                    >
                      <span className="login-menu-icon">
                        <AppIconView icon={app.icon} />
                      </span>
                      <span className="login-menu-name">Snaarp Mail</span>
                      <svg className="login-menu-mail-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {mailExpanded && (
                      <div className="login-menu-mail-sub">
                        <a href="#" className="login-menu-mail-option">
                          <span className="login-menu-mail-option-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="5" width="18" height="14" rx="2.5" /><polyline points="3.5 7 12 13 20.5 7" />
                            </svg>
                          </span>
                          Business Email
                        </a>
                        <a href="#" className="login-menu-mail-option">
                          <span className="login-menu-mail-option-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
                            </svg>
                          </span>
                          Admin Console
                        </a>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a key={app.name} href="#" className="login-menu-item">
                  <span className="login-menu-icon">
                    <AppIconView icon={app.icon} />
                  </span>
                  <span className="login-menu-name">{app.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
