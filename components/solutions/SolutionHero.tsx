import type { ReactNode } from 'react';
import { SolutionRevealSection } from './SolutionRevealSection';

export interface SolutionCta {
  label: ReactNode;
  href: string;
  variant: 'primary' | 'secondary';
  icon?: ReactNode;
}

export interface SolutionSnippetCard {
  eyebrow: string;
  title: ReactNode;
  visual: ReactNode;
  /** Ticketapp-style soft-tilt layout: side cards rotate opposite ways, the
   * middle card lifts instead of rotating. The card shell + label/title
   * pattern is the reusable part; visuals are bespoke per Solution page. */
  tilt: 'tiltLeft' | 'lifted' | 'tiltRight';
}

interface SolutionHeroProps {
  badgeTag: string;
  badgeText: string;
  heading: ReactNode;
  lede: string;
  ctas: SolutionCta[];
  trustIcon: ReactNode;
  trustText: string;
  snippetCards: SolutionSnippetCard[];
}

const TILT_STYLE: Record<SolutionSnippetCard['tilt'], React.CSSProperties> = {
  tiltLeft: { transform: 'rotate(-1.4deg)', boxShadow: '0 2px 6px -2px rgba(37,22,84,.12), 0 34px 60px -34px rgba(37,22,84,.34)' },
  lifted: { transform: 'translateY(-26px)', boxShadow: '0 2px 6px -2px rgba(37,22,84,.14), 0 44px 72px -34px rgba(37,22,84,.42)' },
  tiltRight: { transform: 'rotate(1.4deg)', boxShadow: '0 2px 6px -2px rgba(37,22,84,.12), 0 34px 60px -34px rgba(37,22,84,.34)' },
};

export function SolutionHero({ badgeTag, badgeText, heading, lede, ctas, trustIcon, trustText, snippetCards }: SolutionHeroProps) {
  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#FAF8FE 46%,#F7F7F7 100%)', paddingTop: '76px', paddingBottom: '30px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-140px', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '520px', background: 'radial-gradient(ellipse at center,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '120px', right: '-80px', width: '360px', height: '360px', background: 'radial-gradient(circle,rgba(20,184,166,.08),transparent 68%)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <SolutionRevealSection reveal style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 8px', borderRadius: '999px', background: '#fff', border: '1px solid #ECE7F7', boxShadow: '0 6px 18px -10px rgba(37,22,84,.24)', fontSize: '12.5px', fontWeight: 500, color: '#5B5670' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '999px', background: '#1B1730', color: '#fff', fontSize: '11px', fontWeight: 600, letterSpacing: '.02em' }}>
                ✨ {badgeTag}
              </span>
              {badgeText}
            </span>
          </SolutionRevealSection>

          <SolutionRevealSection reveal revealDelay={80}>
            <h1 className="solution-hero-heading" style={{ margin: '26px 0 0', color: '#1B1730' }}>
              {heading}
            </h1>
          </SolutionRevealSection>

          <SolutionRevealSection reveal revealDelay={160}>
            <p className="solution-lede" style={{ color: '#5B5670', margin: '26px auto 0', maxWidth: '600px' }}>{lede}</p>
          </SolutionRevealSection>

          <SolutionRevealSection reveal revealDelay={240} style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', justifyContent: 'center', marginTop: '34px' }}>
            {ctas.map((cta, i) =>
              cta.variant === 'primary' ? (
                <a
                  key={i}
                  href={cta.href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 30px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 14px 30px -8px rgba(124,58,237,.6)' }}
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={cta.href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2', boxShadow: '0 8px 20px -14px rgba(37,22,84,.3)' }}
                >
                  {cta.icon}
                  {cta.label}
                </a>
              )
            )}
          </SolutionRevealSection>

          <SolutionRevealSection reveal revealDelay={320} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', marginTop: '24px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
            {trustIcon}
            {trustText}
          </SolutionRevealSection>
        </div>

        {/* Three soft tilted UI-snippet cards — snippet mockups are bespoke
            per solution; the card shell + label/title pattern is reusable. */}
        <div style={{ maxWidth: '1060px', margin: '56px auto 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px', alignItems: 'end', position: 'relative' }}>
          {snippetCards.map((card, i) => (
            <SolutionRevealSection
              key={card.eyebrow}
              reveal
              revealDelay={120 + i * 80}
              style={{ background: '#fff', borderRadius: '24px', padding: '22px 24px 26px', border: '1px solid #F0EEF6', ...TILT_STYLE[card.tilt] }}
            >
              {card.visual}
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', color: '#A79FBE', textTransform: 'uppercase', marginTop: '20px' }}>{card.eyebrow}</div>
              <div className="solution-snippet-title" style={{ color: '#1B1730', marginTop: '7px' }}>{card.title}</div>
            </SolutionRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
