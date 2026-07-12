import { Check, GitMerge, Layers, Search, UsersRound } from 'lucide-react';

// Three small, page-specific mock visuals passed into the generic
// <AlternatingFeatureRow> component as its `visual` slot. Kept separate from
// that component so it stays fully reusable for other product pages.

// Same headshot on every row (before and after) so the "3 scattered copies
// -> 1 synced contact" story reads as one real person, not three abstract
// placeholders.
const AVATAR_URL = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&q=80&auto=format&fit=crop';

// "3 scattered copies -> 1 synced contact" story: three faded, slightly
// askew duplicate rows (each tagged with the app it lives in, each showing
// the slightly different version of this person that app has on file) merge
// through a connector into one polished, verified contact card. Inner
// elements fade in on their own staggered cascade (see
// .sec-alt-row-visual.is-revealed rules in globals.css) layered on top of —
// not sharing a reveal group with — the section's existing single-element
// scroll-reveal, so the right-column text sequence is untouched.
export function MergeVisual() {
  return (
    <div className="contacts-merge-scene">
      <span className="contacts-merge-glow" aria-hidden="true" />
      <span className="contacts-merge-dots" aria-hidden="true" />

      <div className="contacts-merge-before" aria-hidden="true">
        <span className="contacts-merge-found-badge">
          <Layers size={11} strokeWidth={2.5} />
          3 copies found
        </span>

        <div className="contacts-merge-chip contacts-merge-chip--1">
          <span className="contacts-merge-chip-app">
            <img src="/assets/icons/envelope.jpg" alt="" />
          </span>
          <img className="contacts-merge-chip-avatar" src={AVATAR_URL} alt="" />
          <div className="contacts-merge-chip-body">
            <p className="contacts-merge-chip-name">Jordan Micheals</p>
            <p className="contacts-merge-chip-meta">jordan@brightpath.co</p>
          </div>
        </div>

        <div className="contacts-merge-chip contacts-merge-chip--2">
          <span className="contacts-merge-chip-app">
            <img src="/assets/icons/apps-meet.jpg" alt="" />
          </span>
          <img className="contacts-merge-chip-avatar" src={AVATAR_URL} alt="" />
          <div className="contacts-merge-chip-body">
            <p className="contacts-merge-chip-name">Jordan M.</p>
            <p className="contacts-merge-chip-meta">+44 7700 900312</p>
          </div>
        </div>

        <div className="contacts-merge-chip contacts-merge-chip--3">
          <span className="contacts-merge-chip-app contacts-merge-chip-app--crm">
            <UsersRound size={12} strokeWidth={2.4} />
          </span>
          <img className="contacts-merge-chip-avatar" src={AVATAR_URL} alt="" />
          <div className="contacts-merge-chip-body">
            <p className="contacts-merge-chip-name">J. Micheals</p>
            <p className="contacts-merge-chip-meta">Brightpath Ltd · Lead</p>
          </div>
        </div>
      </div>

      <div className="contacts-merge-bridge" aria-hidden="true">
        <span className="contacts-merge-bridge-line" />
        <span className="contacts-merge-bridge-badge">
          <GitMerge size={13} strokeWidth={2.4} />
        </span>
      </div>

      <div className="contacts-merge-after">
        <div className="contacts-merge-after-card">
          <img className="contacts-merge-after-avatar" src={AVATAR_URL} alt="" aria-hidden="true" />
          <div className="contacts-merge-after-body">
            <p className="contacts-merge-after-name">Jordan Micheals</p>
            <p className="contacts-merge-after-email">jordan@brightpath.co</p>
            <div className="contacts-merge-after-tags" aria-hidden="true">
              <span className="contacts-merge-tag">Client</span>
              <span className="contacts-merge-tag contacts-merge-tag--brand">VIP</span>
            </div>
          </div>
          <span className="contacts-merge-after-check" aria-hidden="true">
            <Check size={13} strokeWidth={3} />
          </span>
        </div>

        <div className="contacts-merge-after-apps" aria-hidden="true">
          <span className="contacts-merge-after-apps-label">Synced everywhere</span>
          <span className="contacts-merge-after-app-chip">
            <img src="/assets/icons/envelope.jpg" alt="" />
          </span>
          <span className="contacts-merge-after-app-chip">
            <img src="/assets/icons/apps-meet.jpg" alt="" />
          </span>
          <span className="contacts-merge-after-app-chip contacts-merge-after-app-chip--crm">
            <UsersRound size={13} strokeWidth={2.4} />
          </span>
        </div>
      </div>
    </div>
  );
}

const SEARCH_RESULTS = [
  { initials: 'PK', name: 'Priya Kapoor', meta: 'Brightpath — Client', tag: 'VIP' },
  { initials: 'PA', name: 'Priya Adeyemi', meta: 'Northgate — Lead', tag: 'Sales' },
];

export function SearchVisual() {
  return (
    <div className="contacts-search-card">
      <div className="contacts-search-bar" aria-hidden="true">
        <Search size={15} strokeWidth={2} className="contacts-search-bar-icon" />
        <span className="contacts-search-query">priya</span>
        <span className="contacts-search-cursor" />
      </div>

      <div className="contacts-search-results" aria-hidden="true">
        {SEARCH_RESULTS.map((r) => (
          <div key={r.name} className="contacts-search-result-row">
            <span className="contacts-search-result-avatar">{r.initials}</span>
            <div className="contacts-search-result-body">
              <p className="contacts-search-result-name">{r.name}</p>
              <p className="contacts-search-result-meta">{r.meta}</p>
            </div>
            <span className="contacts-search-result-tag">{r.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactsCollageVisual() {
  return (
    <div className="contacts-collage">
      <div className="contacts-collage-photo contacts-collage-photo-back">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop"
          alt="A salesperson checking a contact's details on a laptop before a call"
        />
      </div>
      <div className="contacts-collage-photo contacts-collage-photo-front">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&auto=format&fit=crop"
          alt="A support team member looking up a customer's shared contact card"
        />
      </div>
      <span className="contacts-collage-badge">
        <span className="contacts-collage-badge-dot" aria-hidden="true" />
        Synced 2s ago
      </span>
    </div>
  );
}
