import { RevealSection } from '@/components/reveal/RevealSection';

export interface Stat {
  number: string;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
  className?: string;
}

// Generic 3-up stat row — reusable across product pages.
export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 ${className ?? ''}`}>
      <RevealSection className="sec-stats-row">
        {stats.map((stat, i) => (
          <div key={`${stat.number}-${i}`} data-reveal data-reveal-group="stats-row" data-reveal-batch="stats-row-items">
            <p className="sec-stat-number">{stat.number}</p>
            <p className="sec-stat-label">{stat.label}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}
