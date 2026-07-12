import { ArrowRight, Check, GitMerge, RefreshCw, Search, Tags, UsersRound } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

interface ContactsWhyBentoProps {
  headline: string;
  ctaLabel: string;
  ctaHref?: string;
  className?: string;
}

// Contacts-only replacement for the generic <IconGrid2x2> on this section —
// four equal icon+text cards read as one repeated shape, so this trades
// that for an asymmetric bento: one tall "hero" cell (auto-sync, the core
// value prop) with a small sync diagram, plus three smaller supporting
// cells each carrying its own mini illustration instead of just an icon.
// Bespoke to Contacts because the illustrations are hand-built per feature;
// <IconGrid2x2> stays untouched for the Teams page.
export function ContactsWhyBento({ headline, ctaLabel, ctaHref = '#', className }: ContactsWhyBentoProps) {
  return (
    <section className={`py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="sec-icons-heading" data-reveal data-reveal-group="contacts-why-bento">
            {headline}
          </h2>
        </div>

        <div className="contacts-why-bento">
          {/* Hero cell — auto-sync across the Stack. Animates in on its own
              step, ahead of the three supporting cells. */}
          <div
            className="contacts-why-cell contacts-why-cell--hero"
            data-accent="mint"
            data-reveal
            data-reveal-group="contacts-why-bento"
          >
            <div>
              <span className="contacts-why-icon" aria-hidden="true">
                <RefreshCw size={20} strokeWidth={1.8} />
              </span>
              <h3 className="contacts-why-title">Auto-sync across the Stack</h3>
              <p className="contacts-why-desc">Update a contact once, everywhere that contact appears.</p>
            </div>

            <div className="contacts-why-sync-diagram" aria-hidden="true">
              <svg className="contacts-why-sync-lines" viewBox="0 0 100 70" preserveAspectRatio="none">
                <path d="M50 38 L20 20" />
                <path d="M50 38 L80 20" />
                <path d="M50 38 L50 62" />
              </svg>
              <span className="contacts-why-sync-app contacts-why-sync-app--mail">
                <img src="/assets/icons/envelope.jpg" alt="" />
              </span>
              <span className="contacts-why-sync-app contacts-why-sync-app--meet">
                <img src="/assets/icons/apps-meet.jpg" alt="" />
              </span>
              <span className="contacts-why-sync-app contacts-why-sync-app--crm">
                <UsersRound size={13} strokeWidth={2.4} />
              </span>
              <div className="contacts-why-sync-card">
                <span className="contacts-why-sync-card-avatar" />
                <span className="contacts-why-sync-card-lines">
                  <span />
                  <span />
                </span>
                <span className="contacts-why-sync-pulse" />
                <span className="contacts-why-sync-card-check">
                  <Check size={9} strokeWidth={3.2} />
                </span>
              </div>
            </div>
          </div>

          {/* Supporting cells — batched so they stagger in together, just
              after the hero cell settles. */}
          <div
            className="contacts-why-cell contacts-why-cell--dedupe"
            data-accent="amber"
            data-reveal
            data-reveal-group="contacts-why-bento"
            data-reveal-batch="contacts-why-supporting"
          >
            <div>
              <span className="contacts-why-icon" aria-hidden="true">
                <GitMerge size={18} strokeWidth={1.8} />
              </span>
              <h3 className="contacts-why-title">Smart dedupe</h3>
              <p className="contacts-why-desc">Merges duplicate entries automatically, with a review step.</p>
            </div>

            <div className="contacts-why-dedupe-visual" aria-hidden="true">
              <div className="contacts-why-dedupe-stack">
                <span className="contacts-why-dedupe-chip contacts-why-dedupe-chip--back" />
                <span className="contacts-why-dedupe-chip contacts-why-dedupe-chip--front" />
              </div>
              <ArrowRight size={13} strokeWidth={2.4} className="contacts-why-dedupe-arrow" />
              <span className="contacts-why-dedupe-result">
                <Check size={11} strokeWidth={3} />
              </span>
            </div>
          </div>

          <div
            className="contacts-why-cell contacts-why-cell--tags"
            data-accent="rose"
            data-reveal
            data-reveal-group="contacts-why-bento"
            data-reveal-batch="contacts-why-supporting"
          >
            <div>
              <span className="contacts-why-icon" aria-hidden="true">
                <Tags size={18} strokeWidth={1.8} />
              </span>
              <h3 className="contacts-why-title">Tags & groups</h3>
              <p className="contacts-why-desc">Organize by team, client, or project.</p>
            </div>

            <div className="contacts-why-tags-visual" aria-hidden="true">
              <span className="contacts-why-tag-chip contacts-why-tag-chip--1">Client</span>
              <span className="contacts-why-tag-chip contacts-why-tag-chip--2">VIP</span>
              <span className="contacts-why-tag-chip contacts-why-tag-chip--3">Team</span>
            </div>
          </div>

          <div
            className="contacts-why-cell contacts-why-cell--search"
            data-accent="teal"
            data-reveal
            data-reveal-group="contacts-why-bento"
            data-reveal-batch="contacts-why-supporting"
          >
            <div>
              <span className="contacts-why-icon" aria-hidden="true">
                <Search size={18} strokeWidth={1.8} />
              </span>
              <h3 className="contacts-why-title">Search everywhere</h3>
              <p className="contacts-why-desc">Name, company, tag, or a note — search covers every field.</p>
            </div>

            <div className="contacts-why-search-visual" aria-hidden="true">
              <div className="contacts-why-search-bar">
                <Search size={11} strokeWidth={2.2} />
                <span>priya</span>
              </div>
              <div className="contacts-why-search-result">
                <span className="contacts-why-search-result-avatar">PK</span>
                <span className="contacts-why-search-result-text">
                  <strong>Pri</strong>ya Kapoor
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10" data-reveal data-reveal-group="contacts-why-bento">
          <a href={ctaHref} className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
            {ctaLabel}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
