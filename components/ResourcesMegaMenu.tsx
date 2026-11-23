'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import {
  Layers,
  BookOpen,
  Video,
  PlayCircle,
  type LucideIcon,
} from 'lucide-react';

export interface ResourceMenuItem {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}

export const RESOURCES_ITEMS: ResourceMenuItem[] = [
  {
    title: 'Resources Hub',
    description: 'Guides, tutorials, templates, and insights',
    href: '/resources',
    Icon: Layers,
  },
  {
    title: 'Blog',
    description: 'Insights, updates, and practical tips',
    href: '/resources/blog',
    Icon: BookOpen,
  },
  {
    title: 'Webinars',
    description: 'Live and on-demand expert sessions',
    href: '/resources/webinars',
    Icon: Video,
  },
  {
    title: 'Video Tutorials & Demos',
    description: 'Short, practical walkthroughs',
    href: '/resources/demos',
    Icon: PlayCircle,
  },
];

interface ResourcesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function ResourcesMegaMenu({ isOpen, onClose, triggerRef }: ResourcesMegaMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelLeft, setPanelLeft] = useState(0);

  useLayoutEffect(() => {
    if (!isOpen) return;

    function updatePosition() {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      setPanelLeft(rect.left);
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
        <div
          ref={panelRef}
          className="relative w-full max-w-[360px] rounded-2xl border border-[#EFEFF5] bg-white p-3 shadow-2xl"
          style={{ background: '#ffffff' }}
        >
          <span className="mega-menu-notch" aria-hidden="true" style={{ left: 24 }} />

          <div className="space-y-1">
            {RESOURCES_ITEMS.map((item) => {
              const Icon = item.Icon;
              const isActive = pathname === item.href || (item.href !== '/resources' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors cursor-pointer ${
                    isActive ? 'bg-[#F5F1FF]' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F3EEFF] text-[#7C3AED]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold ${isActive ? 'text-[#7C3AED]' : 'text-[#110D2B]'}`}>
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[11px] text-slate-500">{item.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
