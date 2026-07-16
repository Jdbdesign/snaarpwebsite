'use client';

import { useEffect, useRef, useState } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

// Ambient looping showcase video, positioned directly above "Elevate Your
// Inbox" (BuiltForModernBusinesses). The <source> is only mounted once the
// card scrolls near the viewport, so the file never competes with the
// homepage's initial load; under prefers-reduced-motion it never mounts at
// all and the poster frame is shown instead.
export function IconShowcaseSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;
    // A <source> added after mount isn't picked up automatically —
    // re-run resource selection, then start the (muted) autoplay loop.
    video.load();
    video.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <section className="icon-showcase-section py-16 lg:py-24">
      <RevealSection className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          className="icon-showcase-card"
          data-reveal
          data-reveal-group="icon-showcase"
          ref={cardRef}
          aria-hidden="true"
        >
          <video
            ref={videoRef}
            className="icon-showcase-video"
            poster="/assets/images/icon-showcase-poster.jpg"
            muted
            loop
            playsInline
            preload="none"
          >
            {shouldLoad && <source src="/assets/videos/snaarp-icon-showcase.mp4" type="video/mp4" />}
          </video>
        </div>
      </RevealSection>
    </section>
  );
}
