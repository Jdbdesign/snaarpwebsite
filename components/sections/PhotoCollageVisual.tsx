import type { ReactNode } from 'react';

export type CollageAccent = 'brand' | 'mint' | 'amber' | 'rose' | 'teal';

export interface CollagePhoto {
  src: string;
  alt: string;
  accent: CollageAccent;
}

interface PhotoCollageVisualProps {
  /** Exactly 3 photos: [large/top-left, top-right, bottom-overlap]. */
  photos: [CollagePhoto, CollagePhoto, CollagePhoto];
  /** Small floating card overlapping the collage — keeps it tied to the product. */
  badge: ReactNode;
  className?: string;
}

// Organic 3-photo collage — staggered, differently-tinted blocks with a
// couple of decorative accents and one floating product badge. Built as a
// generic, reusable hero visual (not Contacts-specific) so other product
// pages can adopt the same treatment with their own photos/badge later.
export function PhotoCollageVisual({ photos, badge, className }: PhotoCollageVisualProps) {
  const [large, topRight, bottom] = photos;

  return (
    <div className={`photo-collage ${className ?? ''}`}>
      <span className="photo-collage-dot photo-collage-dot-a" data-accent={topRight.accent} aria-hidden="true" />
      <span className="photo-collage-dot photo-collage-dot-b" data-accent={bottom.accent} aria-hidden="true" />
      <SparkleIcon className="photo-collage-sparkle photo-collage-sparkle-a" accent={large.accent} />
      <SparkleIcon className="photo-collage-sparkle photo-collage-sparkle-b" accent={topRight.accent} />

      <div className="photo-collage-photo photo-collage-photo-large" data-accent={large.accent}>
        <img src={large.src} alt={large.alt} loading="lazy" />
      </div>
      <div className="photo-collage-photo photo-collage-photo-top-right" data-accent={topRight.accent}>
        <img src={topRight.src} alt={topRight.alt} loading="lazy" />
      </div>
      <div className="photo-collage-photo photo-collage-photo-bottom" data-accent={bottom.accent}>
        <img src={bottom.src} alt={bottom.alt} loading="lazy" />
      </div>

      <div className="photo-collage-badge">{badge}</div>
    </div>
  );
}

function SparkleIcon({ className, accent }: { className: string; accent: CollageAccent }) {
  return (
    <svg
      className={className}
      data-accent={accent}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 0C9 4.5 9 9 0 9c9 0 9 4.5 9 9 0-4.5 0-9 9-9-9 0-9-4.5-9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}
