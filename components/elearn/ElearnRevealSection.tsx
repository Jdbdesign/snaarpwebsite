'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useElearnReveal } from './useElearnReveal';

interface Props {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  reveal?: boolean;
  revealDelay?: number;
}

export function ElearnRevealSection({ className, style, children, reveal, revealDelay }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useElearnReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-elearn-reveal={reveal ? '' : undefined}
      data-elearn-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
