import { RevealSection } from '@/components/reveal/RevealSection';
import type { LucideIcon } from 'lucide-react';

export interface StatDecorative {
  number: string;
  label: string;
  Icon: LucideIcon;
  accent?: 'mint' | 'amber' | 'rose' | 'teal';
}

interface StatsRowDecorativeProps {
  stats: StatDecorative[];
  className?: string;
}

// Generic 3-up stat row where each stat sits inside its own card with a
// faint decorative dot-grid pattern and small icon behind the numeral,
// instead of the plain <StatsRow> text-only treatment. Reusable across
// product pages that want a more illustrated stats moment.
export function StatsRowDecorative({ stats, className }: StatsRowDecorativeProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 ${className ?? ''}`}>
      <RevealSection className="sec-stats-row-deco">
        {stats.map((stat, i) => (
          <div
            key={`${stat.number}-${i}`}
            className="sec-stat-deco-card"
            data-accent={stat.accent}
            data-reveal
            data-reveal-group="stats-row-deco"
            data-reveal-batch="stats-row-deco-items"
          >
            <span className="sec-stat-deco-pattern" aria-hidden="true" />
            <span className="sec-stat-deco-icon" aria-hidden="true">
              <stat.Icon size={20} strokeWidth={1.8} />
            </span>
            <p className="sec-stat-deco-number">{stat.number}</p>
            <p className="sec-stat-deco-label">{stat.label}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}
