'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useBooksReveal } from './useBooksReveal';

interface BooksRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  reveal?: boolean;
  revealDelay?: number;
}

export function BooksRevealSection({ className, style, children, reveal, revealDelay }: BooksRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useBooksReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-books-reveal={reveal ? '' : undefined}
      data-books-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
