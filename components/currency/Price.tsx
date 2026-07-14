'use client';

import { useCurrency } from './CurrencyContext';

// Renders a GBP base amount converted to the visitor's selected currency.
// Usage: <Price amount={1} /> instead of a literal "£1".
export function Price({ amount }: { amount: number }) {
  const { format } = useCurrency();
  return <>{format(amount)}</>;
}
