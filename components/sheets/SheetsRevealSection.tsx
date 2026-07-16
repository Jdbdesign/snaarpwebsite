'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useSheetsReveal } from './useSheetsReveal';

interface SheetsRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useSheetsReveal for a server-rendered
// section, mirroring components/reveal/RevealSection.tsx's role for the
// site's shared reveal system. Takes a style prop (rather than only
// className) because this page ports the original bundle's inline styles
// directly instead of translating them into utility classes.
export function SheetsRevealSection({ className, style, children, reveal, revealDelay }: SheetsRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useSheetsReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-sheets-reveal={reveal ? '' : undefined}
      data-sheets-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
