'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { useAcctReveal } from './useAcctReveal';

interface Props {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  reveal?: boolean;
  revealDelay?: number;
}

export function AcctRevealSection({ className, style, children, reveal, revealDelay }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useAcctReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      data-acct-reveal={reveal ? '' : undefined}
      data-acct-reveal-delay={reveal && revealDelay ? revealDelay : undefined}
    >
      {children}
    </div>
  );
}
