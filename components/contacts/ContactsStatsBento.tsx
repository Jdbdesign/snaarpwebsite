import { RevealSection } from '@/components/reveal/RevealSection';

// Bento-style 4-card stats grid, replacing the plain 3-number <StatsRow> on
// the Contacts page only. Four distinct card treatments (photo overlay,
// light quote-style, dark-violet accent, black) don't map onto any
// existing single-style-per-card grid (<BentoFeatureGrid>,
// <StatsRowDecorative>), so this is a bespoke, Contacts-scoped component
// rather than an addition to the shared components/sections/ library.
export function ContactsStatsBento() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <RevealSection className="contacts-stats-bento">
        {/* Card 1: photo card, spans both rows in column 1 */}
        <div
          className="contacts-stats-bento-card contacts-stats-bento-photo"
          data-reveal
          data-reveal-group="contacts-stats-bento"
          data-reveal-batch="contacts-stats-bento-cards"
        >
          <img
            src="/assets/images/20295.jpg"
            alt=""
            aria-hidden="true"
            className="contacts-stats-bento-photo-img"
          />
          <div className="contacts-stats-bento-photo-overlay">
            <p className="contacts-stats-bento-number">1 place</p>
            <p className="contacts-stats-bento-desc">every saved contact, no duplicates across apps</p>
          </div>
        </div>

        {/* Card 2: light gray card, spans both rows in column 2 */}
        <div
          className="contacts-stats-bento-card contacts-stats-bento-gray"
          data-reveal
          data-reveal-group="contacts-stats-bento"
          data-reveal-batch="contacts-stats-bento-cards"
        >
          <div className="contacts-stats-bento-top-group">
            <p className="contacts-stats-bento-number">3 apps</p>
            <div className="contacts-stats-bento-icon-row" aria-hidden="true">
              <span className="contacts-stats-bento-icon-chip">
                <img src="/assets/icons/envelope.jpg" alt="" />
              </span>
              <span className="contacts-stats-bento-icon-chip">
                <img src="/assets/icons/apps-meet.jpg" alt="" />
              </span>
              <span className="contacts-stats-bento-icon-chip contacts-stats-bento-icon-chip--crm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
            </div>
          </div>
          <p className="contacts-stats-bento-quote">Mail, Meet, and CRM sync automatically, more coming</p>
        </div>

        {/* Column 3, top: dark violet accent card */}
        <div
          className="contacts-stats-bento-card contacts-stats-bento-violet"
          data-reveal
          data-reveal-group="contacts-stats-bento"
          data-reveal-batch="contacts-stats-bento-cards"
        >
          <p className="contacts-stats-bento-number">100%</p>
          <p className="contacts-stats-bento-desc">Matching contacts merged automatically — your list never gets messy as you grow.</p>
        </div>

        {/* Column 3, bottom: black card */}
        <div
          className="contacts-stats-bento-card contacts-stats-bento-black"
          data-reveal
          data-reveal-group="contacts-stats-bento"
          data-reveal-batch="contacts-stats-bento-cards"
        >
          <p className="contacts-stats-bento-desc">Syncs the moment you save a contact — no setup required.</p>
          <p className="contacts-stats-bento-number contacts-stats-bento-number--end">0 min</p>
        </div>
      </RevealSection>
    </section>
  );
}
