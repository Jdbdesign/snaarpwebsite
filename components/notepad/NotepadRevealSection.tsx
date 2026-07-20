'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useNotepadReveal } from './useNotepadReveal';

interface NotepadRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useNotepadReveal for a server-rendered
// section, mirroring components/presentation/PresentationRevealSection.tsx's
// role for the Presentation product page. Takes a style prop (rather than
// only className) because this page ports the original bundle's inline
// styles directly instead of translating them into utility classes.
export function NotepadRevealSection({ className, style, children, reveal, revealDelay }: NotepadRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useNotepadReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-notepad-reveal={reveal ? '' : undefined}
      data-notepad-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
