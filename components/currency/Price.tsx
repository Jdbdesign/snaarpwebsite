'use client';

import { useCurrency } from './CurrencyContext';

// Renders a GBP base amount converted to the visitor's selected currency.
// Usage: <Price amount={2} /> instead of a literal "£2".
export function Price({ amount }: { amount: number }) {
  const { format } = useCurrency();
  return <>{format(amount)}</>;
}
