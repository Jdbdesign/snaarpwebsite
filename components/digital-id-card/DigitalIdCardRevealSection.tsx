'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useDigitalIdCardReveal } from './useDigitalIdCardReveal';

interface DigitalIdCardRevealSectionProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  reveal?: boolean;
  revealDelay?: number;
}

export function DigitalIdCardRevealSection({ className, style, children, reveal, revealDelay }: DigitalIdCardRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useDigitalIdCardReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-dicard-reveal={reveal ? '' : undefined}
      data-dicard-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
