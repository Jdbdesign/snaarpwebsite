'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { usePdfReaderReveal } from './usePdfReaderReveal';

interface PdfReaderRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up usePdfReaderReveal for a server-rendered
// section, mirroring components/sheets/SheetsRevealSection.tsx's role for
// the Sheets page. Takes a style prop (rather than only className) because
// this page ports the original bundle's inline styles directly instead of
// translating them into utility classes.
export function PdfReaderRevealSection({ className, style, children, reveal, revealDelay }: PdfReaderRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  usePdfReaderReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-pdf-reveal={reveal ? '' : undefined}
      data-pdf-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
