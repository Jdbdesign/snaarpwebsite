export type CurrencyCode =
  | 'GBP'
  | 'USD'
  | 'EUR'
  | 'CAD'
  | 'AUD'
  | 'INR'
  | 'NGN'
  | 'ZAR'
  | 'AED'
  | 'JPY'
  | 'CHF'
  | 'SEK'
  | 'NOK'
  | 'SGD'
  | 'NZD'
  | 'MXN'
  | 'BRL'
  | 'CNY'
  | 'HKD'
  | 'SAR'
  | 'KES'
  | 'GHS';

export interface CountryOption {
  code: string; // ISO country code, used as the selectable id
  name: string;
  flag: string;
  currency: CurrencyCode;
  symbol: string;
  locale: string;
}

// Base currency for all prices in the codebase (plan prices, CTA copy, etc.) is GBP.
export const BASE_CURRENCY: CurrencyCode = 'GBP';

// Fallback rates (GBP -> currency), used until a live rate fetch succeeds and
// as a safety net if the live fetch fails. Approximate as of early 2026 —
// the live fetch in exchangeRates.ts keeps these current at runtime.
export const FALLBACK_RATES: Record<CurrencyCode, number> = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.17,
  CAD: 1.76,
  AUD: 1.94,
  INR: 106.5,
  NGN: 1950,
  ZAR: 23.8,
  AED: 4.66,
  JPY: 190,
  CHF: 1.13,
  SEK: 13.4,
  NOK: 13.9,
  SGD: 1.68,
  NZD: 2.1,
  MXN: 23.6,
  BRL: 7.1,
  CNY: 9.2,
  HKD: 9.9,
  SAR: 4.76,
  KES: 164,
  GHS: 18.5,
};

export const COUNTRIES: CountryOption[] = [
  { code: 'GLOBAL', name: 'Global', flag: '\u{1F310}', currency: 'GBP', symbol: '£', locale: 'en-GB' },
  { code: 'GB', name: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', currency: 'GBP', symbol: '£', locale: 'en-GB' },
  { code: 'US', name: 'United States', flag: '\u{1F1FA}\u{1F1F8}', currency: 'USD', symbol: '$', locale: 'en-US' },
  { code: 'EU', name: 'European Union', flag: '\u{1F1EA}\u{1F1FA}', currency: 'EUR', symbol: '€', locale: 'de-DE' },
  { code: 'CA', name: 'Canada', flag: '\u{1F1E8}\u{1F1E6}', currency: 'CAD', symbol: '$', locale: 'en-CA' },
  { code: 'AU', name: 'Australia', flag: '\u{1F1E6}\u{1F1FA}', currency: 'AUD', symbol: '$', locale: 'en-AU' },
  { code: 'IN', name: 'India', flag: '\u{1F1EE}\u{1F1F3}', currency: 'INR', symbol: '₹', locale: 'en-IN' },
  { code: 'NG', name: 'Nigeria', flag: '\u{1F1F3}\u{1F1EC}', currency: 'NGN', symbol: '₦', locale: 'en-NG' },
  { code: 'ZA', name: 'South Africa', flag: '\u{1F1FF}\u{1F1E6}', currency: 'ZAR', symbol: 'R', locale: 'en-ZA' },
  { code: 'AE', name: 'United Arab Emirates', flag: '\u{1F1E6}\u{1F1EA}', currency: 'AED', symbol: 'د.إ', locale: 'en-AE' },
  { code: 'JP', name: 'Japan', flag: '\u{1F1EF}\u{1F1F5}', currency: 'JPY', symbol: '¥', locale: 'ja-JP' },
  { code: 'CH', name: 'Switzerland', flag: '\u{1F1E8}\u{1F1ED}', currency: 'CHF', symbol: 'Fr', locale: 'de-CH' },
  { code: 'SE', name: 'Sweden', flag: '\u{1F1F8}\u{1F1EA}', currency: 'SEK', symbol: 'kr', locale: 'sv-SE' },
  { code: 'NO', name: 'Norway', flag: '\u{1F1F3}\u{1F1F4}', currency: 'NOK', symbol: 'kr', locale: 'nb-NO' },
  { code: 'SG', name: 'Singapore', flag: '\u{1F1F8}\u{1F1EC}', currency: 'SGD', symbol: '$', locale: 'en-SG' },
  { code: 'NZ', name: 'New Zealand', flag: '\u{1F1F3}\u{1F1FF}', currency: 'NZD', symbol: '$', locale: 'en-NZ' },
  { code: 'MX', name: 'Mexico', flag: '\u{1F1F2}\u{1F1FD}', currency: 'MXN', symbol: '$', locale: 'es-MX' },
  { code: 'BR', name: 'Brazil', flag: '\u{1F1E7}\u{1F1F7}', currency: 'BRL', symbol: 'R$', locale: 'pt-BR' },
  { code: 'CN', name: 'China', flag: '\u{1F1E8}\u{1F1F3}', currency: 'CNY', symbol: '¥', locale: 'zh-CN' },
  { code: 'HK', name: 'Hong Kong', flag: '\u{1F1ED}\u{1F1F0}', currency: 'HKD', symbol: '$', locale: 'zh-HK' },
  { code: 'SA', name: 'Saudi Arabia', flag: '\u{1F1F8}\u{1F1E6}', currency: 'SAR', symbol: 'ر.س', locale: 'ar-SA' },
  { code: 'KE', name: 'Kenya', flag: '\u{1F1F0}\u{1F1EA}', currency: 'KES', symbol: 'KSh', locale: 'en-KE' },
  { code: 'GH', name: 'Ghana', flag: '\u{1F1EC}\u{1F1ED}', currency: 'GHS', symbol: 'GH₵', locale: 'en-GH' },
];
