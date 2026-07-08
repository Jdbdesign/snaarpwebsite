import { RevealSection } from '@/components/reveal/RevealSection';

export function BusinessMovesFast() {
  return (
    <section className="moves-fast-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="moves-fast-grid">
          <div className="moves-fast-left">
            <h2 className="moves-fast-heading" data-reveal data-reveal-group="moves-fast">
              <span className="block">Business Moves Fast.</span>
              <span className="block">Your Email Should Too</span>
            </h2>
            <p className="moves-fast-copy" data-reveal data-reveal-group="moves-fast">Switch effortlessly between your desktop and phone without missing a single thread.</p>
            <div className="moves-fast-badges">
              <a href="#" aria-label="Get it on Google Play" data-reveal data-reveal-group="moves-fast" data-reveal-batch="moves-fast-badges">
                <img src="/assets/images/Google Play (1).png" alt="Get it on Google Play" className="moves-fast-badge-img" />
              </a>
              <a href="#" aria-label="Download on the App Store" data-reveal data-reveal-group="moves-fast" data-reveal-batch="moves-fast-badges">
                <img src="/assets/images/App Store.png" alt="Download on the App Store" className="moves-fast-badge-img" />
              </a>
            </div>
          </div>

          <div className="moves-fast-right">
            <img
              src="/assets/images/Get started (4).png"
              alt="Snaarp Mail shown across two overlapping phone screens: a sidebar inbox view and a message list view"
              className="moves-fast-mockup"
              data-reveal
              data-reveal-group="moves-fast"
            />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
