'use client';

import { useState } from 'react';
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

type AppIcon = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

interface ProductApp {
  name: string;
  desc: string;
  icon: AppIcon;
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
      { name: 'Snaarp Mail', desc: 'Business email on your own domain', icon: { kind: 'img', src: '/assets/icons/envelope.jpg' } },
      { name: 'Kalender', desc: 'Shared calendars & booking links', icon: { kind: 'img', src: '/assets/icons/apps-kalender.jpg' } },
      { name: 'Contacts', desc: 'One shared address book', icon: { kind: 'img', src: '/assets/icons/search.jpg' } },
      { name: 'Meet', desc: 'Video calls, screen share & recording', icon: { kind: 'img', src: '/assets/icons/apps-meet.jpg' } },
      { name: 'Teams', desc: 'Group chat & channels', icon: { kind: 'img', src: '/assets/icons/chat-bubbles.jpg' } },
      { name: 'AI Compose', desc: 'AI drafting across every app', icon: { kind: 'img', src: '/assets/icons/ai-sparkle.jpg' } },
      { name: 'Business Card', desc: 'Digital business card sharing', icon: { kind: 'lucide', Icon: Contact } },
    ],
  },
  {
    id: 'create-store',
    label: 'Create & Store',
    apps: [
      { name: 'Work Drive', desc: 'Shared file storage', icon: { kind: 'img', src: '/assets/icons/cube.jpg' } },
      { name: 'Document', desc: 'Real-time co-editing docs', icon: { kind: 'img', src: '/assets/icons/apps-document.png' } },
      { name: 'Sheet', desc: 'Collaborative spreadsheets', icon: { kind: 'img', src: '/assets/icons/apps-sheet.jpg' } },
      { name: 'Presentation', desc: 'Build & present decks', icon: { kind: 'img', src: '/assets/icons/p-icon.jpg' } },
      { name: 'PDF Reader', desc: 'View, annotate & merge PDFs', icon: { kind: 'lucide', Icon: FileType } },
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

function AppIconView({ icon }: { icon: AppIcon }) {
  if (icon.kind === 'img') {
    return <img src={icon.src} alt="" aria-hidden="true" className="mega-app-icon-img" />;
  }
  const { Icon } = icon;
  return <Icon size={20} strokeWidth={1.75} className="mega-app-icon-lucide" aria-hidden="true" />;
}

export function ProductsMegaMenu({ isOpen, onNavigate }: { isOpen: boolean; onNavigate: () => void }) {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES[0].id);
  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];

  return (
    <div className={`mega-menu${isOpen ? ' mega-menu-open' : ''}`} inert={!isOpen}>
      <div className="mega-menu-inner max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mega-menu-card">
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
            {activeCategory.apps.map((app) => (
              <a key={app.name} href="#" className="mega-menu-app" onClick={onNavigate}>
                <span className="mega-app-icon">
                  <AppIconView icon={app.icon} />
                </span>
                <span className="mega-menu-app-text">
                  <span className="mega-menu-app-title">{app.name}</span>
                  <span className="mega-menu-app-desc">{app.desc}</span>
                </span>
              </a>
            ))}
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
              <p className="mega-menu-promo-desc">27 tools built into a single Stack — starting from £1.</p>
              <a href="#" className="mega-menu-promo-cta" onClick={onNavigate}>
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
