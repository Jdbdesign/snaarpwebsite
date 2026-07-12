import { Paperclip, FileSpreadsheet, ImageIcon } from 'lucide-react';

// Three small, page-specific mock visuals passed into the generic
// <AlternatingFeatureRow> component as its `visual` slot. Kept separate from
// that component so it stays fully reusable for other product pages.

// Fixed (not random) row widths — Math.random() here would cause a
// server/client hydration mismatch.
const CHAOS_ROW_WIDTHS = ['92%', '68%', '80%', '55%', '88%', '60%', '75%', '48%'];

export function ChaosScrollVisual() {
  return (
    <div className="teams-chaos-scroll">
      <div className="teams-chaos-scroll-bar" aria-hidden="true">
        <span className="teams-chaos-scroll-dot" />
        <span className="teams-chaos-scroll-dot" />
        <span className="teams-chaos-scroll-dot" />
      </div>
      <span className="teams-chaos-scroll-badge" aria-hidden="true">247 unread</span>
      <div className="teams-chaos-scroll-rows" aria-hidden="true">
        {CHAOS_ROW_WIDTHS.map((w, i) => (
          <div key={i} className="teams-chaos-scroll-row">
            <span className="teams-chaos-scroll-avatar" />
            <span className="teams-chaos-scroll-line" style={{ width: w }} />
          </div>
        ))}
      </div>
      <div className="teams-chaos-scroll-fade" aria-hidden="true" />
    </div>
  );
}

export function FilesAttachedVisual() {
  return (
    <div className="teams-files-card">
      <div className="teams-files-message">
        <span className="teams-files-avatar" aria-hidden="true">MO</span>
        <div className="teams-files-message-body">
          <span className="teams-files-line" aria-hidden="true" />
          <span className="teams-files-line teams-files-line--short" aria-hidden="true" />
          <span className="teams-chat-file-chip">
            <Paperclip size={12} strokeWidth={2} aria-hidden="true" />
            launch-brief-v2.pdf
          </span>
        </div>
      </div>
      <div className="teams-files-tray" aria-hidden="true">
        <span className="teams-files-tray-item">
          <FileSpreadsheet size={14} strokeWidth={1.8} aria-hidden="true" />
          budget.xlsx
        </span>
        <span className="teams-files-tray-item">
          <ImageIcon size={14} strokeWidth={1.8} aria-hidden="true" />
          mockup.png
        </span>
      </div>
      <p className="teams-files-caption">3 files in <strong>#launch</strong> — all searchable later</p>
    </div>
  );
}

export function PhotoCollageVisual() {
  return (
    <div className="teams-collage">
      <div className="teams-collage-photo teams-collage-photo-back">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop"
          alt="Two colleagues reviewing a project together at a laptop"
        />
      </div>
      <div className="teams-collage-photo teams-collage-photo-front">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop"
          alt="A team member typing a message on a laptop in a bright office"
        />
      </div>
      <span className="teams-collage-badge">
        <span className="teams-collage-badge-dot" aria-hidden="true" />
        Maya is online
      </span>
    </div>
  );
}
