'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ProductsMegaMenu } from '@/components/ProductsMegaMenu';

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="bg-white border-b border-[var(--border-subtle)] sticky top-0 z-50">
      <div className="px-6 lg:px-40 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--text-primary)]" aria-label="Snaarp home">
            Snaarp
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li>
                <button
                  ref={triggerRef}
                  type="button"
                  className="nav-link inline-flex items-center gap-1 min-h-[44px]"
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                  onClick={() => setIsProductsOpen((open) => !open)}
                >
                  Products
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`nav-chevron${isProductsOpen ? ' nav-chevron-open' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li><a href="#" className="nav-link">Solution</a></li>
              <li><a href="#" className="nav-link">Pricing</a></li>
              <li><a href="#" className="nav-link">Contact Sales</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="nav-link hidden sm:inline">Get App</a>
          <a href="#" className="nav-link hidden sm:inline">Login</a>
          <a href="#" className="btn-dark inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm min-h-[44px]">
            Get Started
          </a>
          <button type="button" className="nav-link inline-flex items-center gap-1 min-h-[44px]" aria-label="Select region, currently Global">
            Global
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <ProductsMegaMenu
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        triggerRef={triggerRef}
      />
    </header>
  );
}
