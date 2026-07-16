import { RevealSection } from '@/components/reveal/RevealSection';

/**
 * "Business Email That Scales With Your Growing Team" — a six-cell bento grid.
 *
 * Layout is a nested grid so the left column (50 GB + Scale seats) splits
 * independently of the middle stack. Left column is a flex stack of two equal
 * cards; the right region is a grid where the phone spans the two top rows and
 * the "Synced" card spans the full width beneath it:
 *
 *   left        right region
 *   ┌───────┐   ┌────────┬────────┐
 *   │ 50 GB │   │ 5 min  │        │
 *   ├───────┤   ├────────┤ phone  │
 *   │ Scale │   │ 1 inbox│        │
 *   │       │   ├────────┴────────┤
 *   │       │   │     Synced      │
 *   └───────┘   └─────────────────┘
 */
export function BusinessEmailScales() {
  return (
    <section className="be-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-14">
          <h2 className="be-heading mb-4" data-reveal data-reveal-group="be">
            <span className="block">Business Email That Scales With</span>
            <span className="block">Your <span className="be-heading-accent">Growing Team</span></span>
          </h2>
          <p className="be-subtext" data-reveal data-reveal-group="be">
            See how teams across different sectors use Snaarp to communicate faster and stay organized.
          </p>
        </div>

        {/* Bento */}
        <div className="be-bento">
          {/* Left column: two equal stacked cards */}
          <div className="be-left" data-reveal data-reveal-group="be" data-reveal-batch="be-cards">
            <article className="be-card be-card--media">
              <div className="be-media">
                <img
                  src="/assets/images/bento-shared-space.svg"
                  alt="Snaarp Drive showing a shared storage pool with usage bars"
                  className="be-media-img"
                  loading="lazy"
                />
              </div>
              <div className="be-card-body">
                <h3 className="be-card-title">50 GB Shared Space</h3>
                <p className="be-card-desc">
                  Every teammate&apos;s inbox draws from one shared pool, so no one hits a storage wall while others have room to spare.
                </p>
              </div>
            </article>

            <article className="be-card be-card--media">
              <div className="be-media">
                <img
                  src="/assets/images/bento-scale-seats.svg"
                  alt="A Create a user button above a list of team members"
                  className="be-media-img"
                  loading="lazy"
                />
              </div>
              <div className="be-card-body">
                <h3 className="be-card-title">Scale seats instantly</h3>
                <p className="be-card-desc">
                  Add a new teammate and they&apos;re sending from @yourcompany.com in seconds — no reprovisioning, no waiting on setup.
                </p>
              </div>
            </article>
          </div>

          {/* Right region */}
          <div className="be-right">
            <article className="be-card be-card--stat be-area-fivemin" data-reveal data-reveal-group="be" data-reveal-batch="be-cards">
              <p className="be-stat-number">5 min</p>
              <p className="be-stat-label">Domain to First Email</p>
              <p className="be-card-desc">
                Connect a domain and send from @yourcompany.com the same day — no IT ticket required.
              </p>
            </article>

            <article className="be-card be-card--stat be-area-oneinbox" data-reveal data-reveal-group="be" data-reveal-batch="be-cards">
              <p className="be-stat-number">1 inbox</p>
              <p className="be-stat-label">Per Team, Per Department</p>
              <p className="be-card-desc">
                Set up shared addresses like hello@ or support@ without buying extra seats.
              </p>
            </article>

            <article className="be-card be-card--phone be-area-phone" data-reveal data-reveal-group="be" data-reveal-batch="be-cards">
              <img
                src="/assets/images/bento-mail-phone.svg"
                alt="Snaarp Mail inbox on a phone showing the Primary tab with categorized messages"
                className="be-phone-img"
                loading="lazy"
              />
            </article>

            <article className="be-card be-card--synced be-area-synced" data-reveal data-reveal-group="be" data-reveal-batch="be-cards">
              <div className="be-synced-body">
                <h3 className="be-card-title">Synced with the rest of your Stack</h3>
                <p className="be-card-desc">
                  Every email connects to Contacts, books straight into Kalender, and turns into a Teams channel in one click — no app-switching.
                </p>
              </div>
              <div className="be-synced-media">
                <img
                  src="/assets/images/bento-stack-logos.svg"
                  alt="Logos of the connected Snaarp Stack apps"
                  className="be-synced-img"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
