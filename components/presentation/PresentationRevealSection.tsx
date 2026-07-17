'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { usePresentationReveal } from './usePresentationReveal';

interface PresentationRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up usePresentationReveal for a
// server-rendered section, mirroring components/docs/DocsRevealSection.tsx's
// role for the Document product page. Takes a style prop (rather than only
// className) because this page ports the original bundle's inline styles
// directly instead of translating them into utility classes.
export function PresentationRevealSection({ className, style, children, reveal, revealDelay }: PresentationRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  usePresentationReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-presentation-reveal={reveal ? '' : undefined}
      data-presentation-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
