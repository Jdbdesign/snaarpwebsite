'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ProductsMegaMenu } from '@/components/ProductsMegaMenu';
import { SolutionMegaMenu } from '@/components/SolutionMegaMenu';
import { DownloadMegaMenu } from '@/components/DownloadMegaMenu';
import { LoginMegaMenu } from '@/components/LoginMegaMenu';
import { CurrencySwitcher } from '@/components/currency/CurrencySwitcher';

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const solutionTriggerRef = useRef<HTMLButtonElement>(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const downloadTriggerRef = useRef<HTMLButtonElement>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginTriggerRef = useRef<HTMLButtonElement>(null);
  // Set only by the 'snaarp:open-products-menu' event below — apps elsewhere
  // on the site (e.g. the homepage's ExploreByCategory rows) that don't have
  // a dedicated product page yet dispatch this to pop the Products menu open
  // pre-scrolled to their category, instead of routing to a dead link.
  const [forceCategoryId, setForceCategoryId] = useState<string | null>(null);

  useEffect(() => {
    function onOpenProductsMenu(e: Event) {
      const detail = (e as CustomEvent<{ categoryId?: string }>).detail;
      setForceCategoryId(detail?.categoryId ?? null);
      setIsProductsOpen(true);
      setIsSolutionOpen(false);
      setIsDownloadOpen(false);
      setIsLoginOpen(false);
    }
    window.addEventListener('snaarp:open-products-menu', onOpenProductsMenu);
    return () => window.removeEventListener('snaarp:open-products-menu', onOpenProductsMenu);
  }, []);

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
                    setForceCategoryId(null);
                    setIsSolutionOpen(false);
                    setIsDownloadOpen(false);
                    setIsLoginOpen(false);
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
                    setIsLoginOpen(false);
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
                    setIsLoginOpen(false);
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
              <li><a href="/contact" className="nav-link">Contact Sales</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button
            ref={loginTriggerRef}
            type="button"
            className="nav-link hidden sm:inline-flex items-center gap-1 min-h-[44px]"
            aria-haspopup="true"
            aria-expanded={isLoginOpen}
            onClick={() => {
              setIsLoginOpen((open) => !open);
              setIsProductsOpen(false);
              setIsSolutionOpen(false);
              setIsDownloadOpen(false);
            }}
          >
            Login
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              aria-hidden="true"
              className={`nav-chevron${isLoginOpen ? ' nav-chevron-open' : ''}`}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
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
        forceCategoryId={forceCategoryId}
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
      <LoginMegaMenu
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        triggerRef={loginTriggerRef}
      />
    </header>
  );
}
