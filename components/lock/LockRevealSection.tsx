'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useLockReveal } from './useLockReveal';

interface LockRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useLockReveal for a server-rendered
// section, mirroring components/pdf-reader/PdfReaderRevealSection.tsx's
// role for the PDF Reader page. Takes a style prop (rather than only
// className) because this page ports the original bundle's inline styles
// directly instead of translating them into utility classes.
export function LockRevealSection({ className, style, children, reveal, revealDelay }: LockRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useLockReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-lock-reveal={reveal ? '' : undefined}
      data-lock-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
