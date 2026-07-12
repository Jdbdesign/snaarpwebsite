import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

// A tile is either a real photo, or (for pages that want one non-photo
// moment mixed into the strip, e.g. a QR-scan illustration) an arbitrary
// illustration node — both render inside the same rotated, overlapping card.
export type PhotoStripPhoto =
  | { src: string; alt: string }
  | { illustration: ReactNode; alt: string };

interface PhotoStripProps {
  photos: PhotoStripPhoto[];
  className?: string;
}

const ROTATIONS = [-6, -3, 0, 3, 6];

// Generic overlapping, rotated photo strip — 4-5 warm, real-feeling photos
// (or mostly photos plus one illustrated tile).
export function PhotoStrip({ photos, className }: PhotoStripProps) {
  return (
    <section className={`py-16 lg:py-20 overflow-hidden ${className ?? ''}`}>
      <RevealSection className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="sec-photo-strip">
          {photos.map((photo, i) => {
            const mid = (photos.length - 1) / 2;
            const zIndex = Math.round(10 - Math.abs(i - mid));
            const key = 'src' in photo ? photo.src : `illustration-${i}`;
            return (
              <div
                key={key}
                className="sec-photo-strip-item"
                style={{ ['--rot' as string]: `${ROTATIONS[i % ROTATIONS.length]}deg`, zIndex }}
                data-reveal
                data-reveal-group="photo-strip"
                data-reveal-batch="photo-strip-items"
              >
                {'src' in photo ? <img src={photo.src} alt={photo.alt} /> : photo.illustration}
              </div>
            );
          })}
        </div>
      </RevealSection>
    </section>
  );
}
