'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ProductsMegaMenu } from '@/components/ProductsMegaMenu';
import { SolutionMegaMenu } from '@/components/SolutionMegaMenu';
import { DownloadMegaMenu } from '@/components/DownloadMegaMenu';
import { CurrencySwitcher } from '@/components/currency/CurrencySwitcher';

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const solutionTriggerRef = useRef<HTMLButtonElement>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const downloadTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="bg-white border-b border-[var(--border-subtle)] sticky top-0 z-50">
      <div className="header-container max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
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
                  onClick={() => {
                    setIsProductsOpen((open) => !open);
                    setIsSolutionOpen(false);
                    setIsDownloadOpen(false);
                  }}
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
              <li>
                <button
                  ref={solutionTriggerRef}
                  type="button"
                  className="nav-link inline-flex items-center gap-1 min-h-[44px]"
                  aria-haspopup="true"
                  aria-expanded={isSolutionOpen}
                  onClick={() => {
                    setIsSolutionOpen((open) => !open);
                    setIsProductsOpen(false);
                    setIsDownloadOpen(false);
                  }}
                >
                  Solution
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`nav-chevron${isSolutionOpen ? ' nav-chevron-open' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li><Link href="/pricing" className="nav-link">Pricing</Link></li>
              <li>
                <button
                  ref={downloadTriggerRef}
                  type="button"
                  className="nav-link inline-flex items-center gap-1 min-h-[44px]"
                  aria-haspopup="true"
                  aria-expanded={isDownloadOpen}
                  onClick={() => {
                    setIsDownloadOpen((open) => !open);
                    setIsProductsOpen(false);
                    setIsSolutionOpen(false);
                  }}
                >
                  Download
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`nav-chevron${isDownloadOpen ? ' nav-chevron-open' : ''}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li><a href="#" className="nav-link">Contact Sales</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="nav-link hidden sm:inline">Login</a>
          <a href="#" className="btn-dark inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm min-h-[44px]">
            Get Started
          </a>
          <CurrencySwitcher />
        </div>
      </div>

      <ProductsMegaMenu
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        triggerRef={triggerRef}
      />
      <SolutionMegaMenu
        isOpen={isSolutionOpen}
        onClose={() => setIsSolutionOpen(false)}
        triggerRef={solutionTriggerRef}
      />
      <DownloadMegaMenu
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        triggerRef={downloadTriggerRef}
      />
    </header>
  );
}
