'use client';
import Link from 'next/link';
import { CurrencySwitcher } from '@/components/currency/CurrencySwitcher';

// Standalone ZEUS Growth Bundle landing-page header: Zeus logo, Get Started,
// and the currency switcher only. The site-wide nav (Products / Solution /
// Pricing / Download / Contact Sales / Login) and its mega-menus are omitted —
// this is a single marketing page, so those links have no destination here.
export function ZeusHeader() {
  return (
    <header className="bg-white border-b border-[var(--border-subtle)] sticky top-0" style={{ zIndex: 9999 }}>
      <div className="header-container max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-extrabold tracking-tight text-[var(--text-primary)]"
          style={{ fontSize: '30px', lineHeight: 1 }}
          aria-label="Zeus home"
        >
          Zeus
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="btn-dark inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm min-h-[44px]"
          >
            Get Started
          </a>
          <CurrencySwitcher />
        </div>
      </div>
    </header>
  );
}
