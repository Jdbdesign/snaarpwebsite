'use client';

import { useEffect, useRef, useState } from 'react';
import { useCurrency } from './CurrencyContext';

export function CurrencySwitcher() {
  const { country, countries, setCountryCode } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setIsOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isOpen]);

  return (
    <div className="currency-switcher">
      <button
        ref={triggerRef}
        type="button"
        className="nav-link inline-flex items-center gap-1 min-h-[44px]"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Select region and currency, currently ${country.name}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">{country.flag}</span>
        {country.code === 'GLOBAL' ? 'Global' : country.currency}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`nav-chevron${isOpen ? ' nav-chevron-open' : ''}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="currency-switcher-panel" ref={panelRef} role="menu">
          <p className="currency-switcher-label">Region &amp; currency</p>
          <ul className="currency-switcher-list">
            {countries.map((option) => (
              <li key={option.code}>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={option.code === country.code}
                  className={`currency-switcher-option${option.code === country.code ? ' is-active' : ''}`}
                  onClick={() => {
                    setCountryCode(option.code);
                    setIsOpen(false);
                    triggerRef.current?.focus();
                  }}
                >
                  <span aria-hidden="true">{option.flag}</span>
                  <span className="currency-switcher-option-name">{option.name}</span>
                  <span className="currency-switcher-option-code">{option.currency}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
