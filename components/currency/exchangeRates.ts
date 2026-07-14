import { BASE_CURRENCY, FALLBACK_RATES, type CurrencyCode } from './countries';

const CACHE_KEY = 'snaarp_exchange_rates_v1';
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours
const RATES_ENDPOINT = `https://open.er-api.com/v6/latest/${BASE_CURRENCY}`;

export type RatesTable = Record<CurrencyCode, number>;

interface CachedRates {
  rates: RatesTable;
  fetchedAt: number;
}

function readCache(): CachedRates | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CachedRates;
  } catch {
    return null;
  }
}

function writeCache(rates: RatesTable, fetchedAt: number) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ rates, fetchedAt }));
  } catch {
    // Storage unavailable (private mode, quota, etc.) — safe to ignore.
  }
}

// Returns the fallback table immediately, then resolves live rates in the
// background once fetched (or from a fresh-enough cache). Callers should
// render with the fallback first and swap in `fetchLiveRates`'s result.
export function getCachedOrFallbackRates(): { rates: RatesTable; fetchedAt: number | null } {
  const cached = readCache();
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return { rates: cached.rates, fetchedAt: cached.fetchedAt };
  }
  return { rates: FALLBACK_RATES, fetchedAt: null };
}

export async function fetchLiveRates(): Promise<{ rates: RatesTable; fetchedAt: number } | null> {
  const cached = readCache();
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached;
  }

  try {
    const res = await fetch(RATES_ENDPOINT, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Exchange rate API responded ${res.status}`);
    const data = await res.json();
    const liveRates = data?.rates as Record<string, number> | undefined;
    if (!liveRates) throw new Error('Exchange rate API response missing rates');

    const merged: RatesTable = { ...FALLBACK_RATES };
    (Object.keys(merged) as CurrencyCode[]).forEach((code) => {
      if (typeof liveRates[code] === 'number' && liveRates[code] > 0) {
        merged[code] = liveRates[code];
      }
    });

    const fetchedAt = Date.now();
    writeCache(merged, fetchedAt);
    return { rates: merged, fetchedAt };
  } catch {
    // Network failure, CORS block, rate limit, etc. — the caller keeps using
    // the fallback/cached table, so pricing never breaks.
    return null;
  }
}
