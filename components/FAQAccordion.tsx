'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Closes every other <details> in the list whenever one opens, so only one
// answer is ever expanded at a time.
export function FAQAccordion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLDetailsElement>('.faq-item'));

    function onToggle(this: HTMLDetailsElement) {
      if (!this.open) return;
      items.forEach((other) => {
        if (other !== this) other.open = false;
      });
    }

    items.forEach((item) => item.addEventListener('toggle', onToggle));
    return () => {
      items.forEach((item) => item.removeEventListener('toggle', onToggle));
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
