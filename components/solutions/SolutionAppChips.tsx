import type { LucideIcon } from 'lucide-react';
import { SolutionRevealSection } from './SolutionRevealSection';

export type SolutionAppChipIcon = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

export interface SolutionAppChip {
  name: string;
  desc: string;
  href: string;
  tint: 'violet' | 'amber' | 'teal' | 'rose';
  icon: SolutionAppChipIcon;
  /** True when this app has no dedicated product page yet — shows the
   * "In the Stack" badge instead of linking straight to a product page. */
  external: boolean;
}

interface SolutionAppChipsProps {
  eyebrow: string;
  heading: string;
  apps: SolutionAppChip[];
  /** Override the default 4-column grid when fewer apps are displayed. */
  columns?: number;
}

// `accent` colors the Lucide fallback icon; real logos (kind: 'img') carry
// their own color and ignore it.
const CHIP_TINTS: Record<SolutionAppChip['tint'], { wrap: React.CSSProperties; accent: string }> = {
  violet: { wrap: { background: '#F3EFFF', border: '1px solid #E6DEFA' }, accent: '#6D28D9' },
  amber: { wrap: { background: '#FEF6E7', border: '1px solid #FBEBC6' }, accent: '#B45309' },
  teal: { wrap: { background: '#ECFDF9', border: '1px solid #CDF5EE' }, accent: '#0F766E' },
  rose: { wrap: { background: '#FFEFF2', border: '1px solid #F7D3DD' }, accent: '#BE185D' },
};

function ChipIcon({ icon, accent }: { icon: SolutionAppChipIcon; accent: string }) {
  if (icon.kind === 'img') {
    return <img src={icon.src} alt="" aria-hidden="true" style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '6px' }} />;
  }
  const { Icon } = icon;
  return <Icon size={20} strokeWidth={1.75} color={accent} aria-hidden="true" />;
}

// "Built from apps you already know" — names the real apps that compose the
// outcome. Apps without a dedicated product page yet (external: true) still
// link somewhere real (see the chip's href) and show an "In the Stack" badge
// instead of implying a product page exists.
export function SolutionAppChips({ eyebrow, heading, apps, columns }: SolutionAppChipsProps) {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '78px', paddingBottom: '82px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ textAlign: 'center' }}>
        <SolutionRevealSection reveal style={{ maxWidth: '950px', margin: '0 auto' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>{eyebrow}</span>
          <h2 className="solution-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>{heading}</h2>
        </SolutionRevealSection>

        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: `repeat(${columns ?? 4},1fr)`, gap: '18px' }}>
          {apps.map((app, i) => {
            const tint = CHIP_TINTS[app.tint];
            return (
              <SolutionRevealSection key={app.name} reveal revealDelay={120 + i * 40}>
                <a
                  href={app.href}
                  className="solution-app-chip"
                  style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', background: '#fff', borderRadius: '18px', padding: '22px 22px 24px', color: 'inherit', height: '100%' }}
                >
                  <span style={{ width: '42px', height: '42px', borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', ...tint.wrap }}>
                    <ChipIcon icon={app.icon} accent={tint.accent} />
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                    <span style={{ fontSize: '16.5px', fontWeight: 700, letterSpacing: '-.01em', color: '#1B1730' }}>{app.name}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0B8D4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg>
                  </div>
                  <p style={{ margin: '7px 0 0', fontSize: '13px', lineHeight: 1.5, color: '#5B5670' }}>{app.desc}</p>
                </a>
              </SolutionRevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
