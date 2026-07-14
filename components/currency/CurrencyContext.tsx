'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { COUNTRIES, FALLBACK_RATES, type CountryOption } from './countries';
import { fetchLiveRates, getCachedOrFallbackRates, type RatesTable } from './exchangeRates';

const STORAGE_KEY = 'snaarp_country_code';

interface CurrencyContextValue {
  country: CountryOption;
  countries: CountryOption[];
  setCountryCode: (code: string) => void;
  ratesUpdatedAt: number | null;
  convert: (amountInGBP: number) => number;
  format: (amountInGBP: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function formatAmount(amount: number, country: CountryOption): string {
  const rounded = Math.round(amount * 100) / 100;
  const hasDecimals = !Number.isInteger(rounded);
  const number = rounded.toLocaleString(country.locale, {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return `${country.symbol}${number}`;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [countryCode, setCountryCodeState] = useState('GLOBAL');
  const [rates, setRates] = useState<RatesTable>(FALLBACK_RATES);
  const [ratesUpdatedAt, setRatesUpdatedAt] = useState<number | null>(null);

  useEffect(() => {
    // Reads from localStorage (client-only) after mount so the server-rendered
    // GBP/default markup matches the client's first paint, then syncs to the
    // visitor's saved selection — avoids a hydration mismatch.
    const savedCode = window.localStorage.getItem(STORAGE_KEY);
    if (savedCode && COUNTRIES.some((c) => c.code === savedCode)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCountryCodeState(savedCode);
    }

    const { rates: cachedRates, fetchedAt } = getCachedOrFallbackRates();
    setRates(cachedRates);
    setRatesUpdatedAt(fetchedAt);

    fetchLiveRates().then((result) => {
      if (result) {
        setRates(result.rates);
        setRatesUpdatedAt(result.fetchedAt);
      }
    });
  }, []);

  const setCountryCode = (code: string) => {
    setCountryCodeState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Storage unavailable — selection just won't persist across reloads.
    }
  };

  const country = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  const value = useMemo<CurrencyContextValue>(() => {
    const rate = rates[country.currency] ?? 1;
    return {
      country,
      countries: COUNTRIES,
      setCountryCode,
      ratesUpdatedAt,
      convert: (amountInGBP: number) => amountInGBP * rate,
      format: (amountInGBP: number) => formatAmount(amountInGBP * rate, country),
    };
  }, [country, rates, ratesUpdatedAt]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within a CurrencyProvider');
  return ctx;
}
