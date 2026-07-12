import { RevealSection } from '@/components/reveal/RevealSection';
import { Play } from 'lucide-react';

interface DemoVideoSectionProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref?: string;
  className?: string;
  /** Optional real video to autoplay/loop in place of the placeholder CSS
   *  mock below. When omitted, every page keeps today's skeleton thumbnail
   *  exactly as-is — only pages that pass this get the real embed. */
  videoSrc?: string;
  /** object-position for the <video>, in case a future video's aspect
   *  ratio doesn't match the card's 16/9 frame and needs recentering. */
  videoObjectPosition?: string;
  /** Extra zoom (CSS transform: scale) for source footage that has its own
   *  baked-in border/letterboxing that object-fit: cover can't crop away
   *  on its own — e.g. a screen recording exported with a device-mockup
   *  frame. Scales from the same anchor as videoObjectPosition. */
  videoScale?: number;
  /** Overrides the frame's default 16/9 aspect ratio to match a specific
   *  video's own shape, so object-fit: cover has nothing left to crop out
   *  of the actual footage — only videoScale's zoom (if any) still applies,
   *  and that should be sized to shave off just a baked-in border, not
   *  real content. Pass as a CSS aspect-ratio value, e.g. "1368 / 848". */
  videoAspectRatio?: string;
}

// Generic demo/video section. Pages without a real product-demo video yet
// get the placeholder CSS mock (window chrome + skeleton rows + play
// button); pages that pass `videoSrc` get a real autoplaying, looping,
// muted <video> filling the same card frame instead.
export function DemoVideoSection({
  eyebrow,
  headline,
  subtext,
  ctaLabel,
  ctaHref = '#',
  className,
  videoSrc,
  videoObjectPosition = 'center',
  videoScale = 1,
  videoAspectRatio,
}: DemoVideoSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        {eyebrow && (
          <p className="sec-demo-eyebrow" data-reveal data-reveal-group="demo-video">
            {eyebrow}
          </p>
        )}
        <h2 className="sec-demo-heading" data-reveal data-reveal-group="demo-video">
          {headline}
        </h2>
        <p className="sec-demo-subtext" data-reveal data-reveal-group="demo-video">
          {subtext}
        </p>

        <div
          className="sec-demo-thumb"
          data-reveal
          data-reveal-group="demo-video"
          style={videoAspectRatio ? { aspectRatio: videoAspectRatio } : undefined}
        >
          {videoSrc ? (
            // Real product-demo footage: ambient autoplay loop, no controls,
            // no click-to-play — the video itself is the whole thumbnail.
            <video
              className="sec-demo-video"
              src={videoSrc}
              style={{
                objectPosition: videoObjectPosition,
                transform: videoScale !== 1 ? `scale(${videoScale})` : undefined,
                transformOrigin: videoObjectPosition,
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={`${headline} — product demo video`}
            />
          ) : (
            <>
              <div className="sec-demo-thumb-chrome" aria-hidden="true">
                <span className="sec-demo-thumb-dot" />
                <span className="sec-demo-thumb-dot" />
                <span className="sec-demo-thumb-dot" />
                <span className="sec-demo-thumb-line" style={{ width: 90, marginLeft: 12 }} />
              </div>
              <div className="sec-demo-thumb-rows" aria-hidden="true">
                <span className="sec-demo-thumb-line" style={{ width: '70%' }} />
                <span className="sec-demo-thumb-line" style={{ width: '45%' }} />
                <span className="sec-demo-thumb-line" style={{ width: '55%' }} />
              </div>
              <button type="button" className="sec-demo-play" aria-label="Play product demo video">
                <Play size={26} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <a href={ctaHref} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]" data-reveal data-reveal-group="demo-video">
          {ctaLabel}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </RevealSection>
    </section>
  );
}
