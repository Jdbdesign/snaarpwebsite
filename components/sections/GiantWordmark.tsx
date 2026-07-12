import { RevealSection } from '@/components/reveal/RevealSection';

interface GiantWordmarkProps {
  word?: string;
  className?: string;
}

// Full-bleed oversized closing wordmark, sitting directly below the footer
// on the same dark background — the final "brand moment" of the page.
export function GiantWordmark({ word = 'SNAARP', className }: GiantWordmarkProps) {
  return (
    <section className={`sec-giant-wordmark ${className ?? ''}`} aria-hidden="true">
      <RevealSection>
        <span className="sec-giant-wordmark-text" data-reveal data-reveal-group="giant-wordmark">
          {word}
        </span>
      </RevealSection>
    </section>
  );
}
