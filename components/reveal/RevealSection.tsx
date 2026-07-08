'use client';

import { useRef, type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealSectionProps {
  className?: string;
  children: ReactNode;
}

// Thin, generic client boundary: wraps a section's already-server-rendered
// content in a ref'd div and wires up the scroll-reveal hook. This div
// replaces a wrapper that already existed in the original markup (e.g. the
// `max-w-7xl mx-auto ...` container), so it adds zero new DOM nodes and
// doesn't disturb any grid/flex child-selector CSS.
export function RevealSection({ className, children }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
