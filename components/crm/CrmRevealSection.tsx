'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useCrmReveal } from './useCrmReveal';

interface CrmRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  /** Set when this wrapper div is itself the single reveal target (as in
   * the original markup), rather than just an observer-scope container for
   * several independently-revealed children. */
  reveal?: boolean;
  revealDelay?: number;
}

// Thin client boundary that wires up useCrmReveal for a server-rendered
// section, mirroring components/notepad/NotepadRevealSection.tsx's role.
// Takes a style prop (rather than only className) because this page ports
// the original bundle's inline styles directly instead of translating them
// into utility classes.
export function CrmRevealSection({ className, style, children, reveal, revealDelay }: CrmRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useCrmReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-crm-reveal={reveal ? '' : undefined}
      data-crm-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
