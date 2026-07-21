'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useEsignatureReveal } from './useEsignatureReveal';

interface EsignatureRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useEsignatureReveal for a server-rendered
// section, mirroring components/lock/LockRevealSection.tsx's role for the
// Lock page. Takes a style prop (rather than only className) because this
// page ports the original bundle's inline styles directly instead of
// translating them into utility classes.
export function EsignatureRevealSection({ className, style, children, reveal, revealDelay }: EsignatureRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEsignatureReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-esignature-reveal={reveal ? '' : undefined}
      data-esignature-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
