'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { usePmReveal } from './usePmReveal';

interface PmRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  reveal?: boolean;
  revealDelay?: number;
}

export function PmRevealSection({ className, style, children, reveal, revealDelay }: PmRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  usePmReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-pm-reveal={reveal ? '' : undefined}
      data-pm-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
