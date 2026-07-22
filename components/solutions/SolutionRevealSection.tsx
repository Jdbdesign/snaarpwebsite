'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useSolutionReveal } from './useSolutionReveal';

interface SolutionRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useSolutionReveal for a server-rendered
// section, mirroring components/lock/LockRevealSection.tsx's role. Takes a
// style prop (rather than only className) because Solution pages port the
// original bundle's inline styles directly instead of translating them into
// utility classes.
export function SolutionRevealSection({ className, style, children, reveal, revealDelay }: SolutionRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useSolutionReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-solution-reveal={reveal ? '' : undefined}
      data-solution-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
