'use client';

import { useEffect, useState } from 'react';

interface CoachmarkProps {
  title: string;
  subtitle: string;
  onNext: () => void;
  visible: boolean;
  // Position of the tooltip card
  top?: string;
  left?: string;
  // Position + size of the spotlight highlight
  highlightTop?: string;
  highlightLeft?: string;
  highlightWidth?: string;
  highlightHeight?: string;
  // Arrow direction
  arrowSide?: 'left' | 'right' | 'top' | 'bottom';
  // Arrow offset position (for bottom/top: left value; for left/right: top value)
  arrowOffset?: string;
  // Custom button label (default: "Next")
  buttonLabel?: string;
}

export function Coachmark({ title, subtitle, onNext, visible, top, left, highlightTop, highlightLeft, highlightWidth, highlightHeight, arrowSide = 'left', arrowOffset, buttonLabel = 'Next' }: CoachmarkProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShow(true), 80);
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [visible]);

  if (!visible && !show) return null;

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const transition = prefersReducedMotion ? 'none' : 'opacity 200ms ease, transform 200ms ease';

  return (
    <>
      {/* Spotlight highlight behind target */}
      {false && highlightTop && (
        <div style={{
          position: 'absolute',
          top: highlightTop,
          left: highlightLeft,
          width: highlightWidth || '120px',
          height: highlightHeight || '36px',
          background: 'rgba(147, 197, 253, 0.35)',
          borderRadius: '12px',
          zIndex: 9998,
          opacity: show ? 1 : 0,
          transition,
          pointerEvents: 'none',
        }} />
      )}

      {/* Tooltip card */}
      <div style={{
        position: 'absolute',
        top: top || '0',
        left: left || '0',
        zIndex: 9999,
        opacity: show ? 1 : 0,
        transform: show ? 'scale(1)' : 'scale(0.92)',
        transition,
        pointerEvents: show ? 'auto' : 'none',
      }}>
        {/* Arrow */}
        {arrowSide === 'left' && (
          <div style={{ position: 'absolute', left: '-7px', top: arrowOffset || '20px', width: '14px', height: '14px', background: '#fff', transform: 'rotate(45deg)', boxShadow: '-2px 2px 4px rgba(0,0,0,0.05)', zIndex: -1 }} />
        )}
        {arrowSide === 'right' && (
          <div style={{ position: 'absolute', right: '-7px', top: '20px', width: '14px', height: '14px', background: '#fff', transform: 'rotate(45deg)', boxShadow: '2px -2px 4px rgba(0,0,0,0.05)', zIndex: -1 }} />
        )}
        {arrowSide === 'top' && (
          <div style={{ position: 'absolute', top: '-7px', left: arrowOffset || '30px', width: '14px', height: '14px', background: '#fff', transform: 'rotate(45deg)', boxShadow: '-2px -2px 4px rgba(0,0,0,0.05)', zIndex: -1 }} />
        )}
        {arrowSide === 'bottom' && (
          <div style={{ position: 'absolute', bottom: '-7px', left: arrowOffset || '30px', width: '14px', height: '14px', background: '#fff', transform: 'rotate(45deg)', boxShadow: '2px 2px 4px rgba(0,0,0,0.05)', zIndex: -1 }} />
        )}

        {/* Card */}
        <div style={{
          position: 'relative',
          background: '#fff',
          borderRadius: '14px',
          boxShadow: '0 8px 30px -6px rgba(0,0,0,0.15), 0 2px 8px -2px rgba(0,0,0,0.08)',
          padding: '16px 18px',
          minWidth: '210px',
          maxWidth: '250px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>{title}</div>
          <div style={{ fontSize: '11.5px', color: '#777', lineHeight: '1.45', marginBottom: '14px' }}>{subtitle}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={onNext}
              style={{
                padding: '7px 20px',
                background: '#E11D48',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
