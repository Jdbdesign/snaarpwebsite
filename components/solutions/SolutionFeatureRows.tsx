import type { ReactNode } from 'react';
import { SolutionRevealSection } from './SolutionRevealSection';

export interface SolutionFeatureRow {
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  heading: string;
  desc: string;
  visual: ReactNode;
  /** Which side the mock/visual sits on for this row (rows alternate). */
  mockSide: 'left' | 'right';
}

interface SolutionFeatureRowsProps {
  rows: SolutionFeatureRow[];
}

export function SolutionFeatureRows({ rows }: SolutionFeatureRowsProps) {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '88px', paddingBottom: '88px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
        {rows.map((row) => {
          const mockFirst = row.mockSide === 'left';

          const text = (
            <SolutionRevealSection reveal revealDelay={mockFirst ? 120 : 0} key="text">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 13px', borderRadius: '999px', background: row.tagBg, border: `1px solid ${row.tagBorder}`, fontSize: '11.5px', fontWeight: 600, color: row.tagColor }}>{row.tag}</span>
              <h2 className="solution-row-heading" style={{ margin: '18px 0 0', color: '#1B1730' }}>{row.heading}</h2>
              <p className="solution-row-desc" style={{ margin: '16px 0 0', color: '#5B5670' }}>{row.desc}</p>
            </SolutionRevealSection>
          );

          const visual = (
            <SolutionRevealSection reveal revealDelay={mockFirst ? 0 : 120} style={{ position: 'relative' }} key="visual">
              {row.visual}
            </SolutionRevealSection>
          );

          return (
            <div
              key={row.heading}
              style={{
                display: 'grid',
                gridTemplateColumns: mockFirst ? '1.08fr 1fr' : '1fr 1.08fr',
                gap: '70px',
                alignItems: 'center',
              }}
            >
              {mockFirst ? [visual, text] : [text, visual]}
            </div>
          );
        })}
      </div>
    </section>
  );
}
