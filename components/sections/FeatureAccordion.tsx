'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export interface FeatureAccordionItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface FeatureAccordionProps {
  label: string;
  items: FeatureAccordionItem[];
  intervalMs?: number;
  revealGroup: string;
  className?: string;
}

// Generic auto-advancing feature accordion: one item active at a time, its
// progress bar filling over `intervalMs` before advancing to the next (looping).
// Manual clicks interrupt and restart the timer. Pauses while scrolled out of
// view and restarts fresh when it scrolls back in. Reusable across pages —
// this component knows nothing about Kalender specifically.
export function FeatureAccordion({ label, items, intervalMs = 5500, revealGroup, className }: FeatureAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const wasInView = useRef(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Coming back into view restarts the current item's timer/bar from zero
  // rather than resuming mid-flight, so the visible fill always matches
  // however much time has actually elapsed since it became visible.
  useEffect(() => {
    if (inView && !wasInView.current) setCycle((c) => c + 1);
    wasInView.current = inView;
  }, [inView]);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const id = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, cycle, inView, reducedMotion, intervalMs, items.length]);

  const active = items[activeIndex];

  return (
    <div ref={sectionRef} className={`feature-accordion ${className ?? ''}`}>
      <div className="feature-accordion-left" data-reveal data-reveal-group={revealGroup}>
        <p className="feature-accordion-label">{label}</p>
        <ul className="feature-accordion-list">
          {items.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={item.title} className={`feature-accordion-item${isActive ? ' is-active' : ''}`}>
                <button
                  type="button"
                  className="feature-accordion-item-btn"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="feature-accordion-item-title">{item.title}</span>
                </button>
                <div className="feature-accordion-item-collapse" data-open={isActive}>
                  <div className="feature-accordion-item-collapse-inner">
                    {isActive && (
                      <div className="feature-accordion-item-body">
                        <p className="feature-accordion-item-desc">{item.description}</p>
                        <div className="feature-accordion-progress-track">
                          <div
                            key={`${activeIndex}-${cycle}`}
                            className="feature-accordion-progress-fill"
                            style={{ animationDuration: `${intervalMs}ms` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="feature-accordion-visual" data-reveal data-reveal-group={revealGroup}>
        <div className="feature-accordion-visual-frame">
          <AnimatePresence mode="sync">
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.imageAlt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="feature-accordion-visual-img"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
