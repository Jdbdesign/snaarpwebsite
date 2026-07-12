import { QrCode } from 'lucide-react';

// The one illustrated tile mixed into the otherwise-photographic photo
// strip — a "scan to save" moment, sized to drop into <PhotoStrip>'s
// illustration slot.
export function BusinessCardScanIllustration() {
  return (
    <div className="bcard-scan-tile">
      <QrCode size={36} strokeWidth={1.5} aria-hidden="true" />
      <span className="bcard-scan-line" aria-hidden="true" />
      <p className="bcard-scan-label">Scan to save</p>
    </div>
  );
}
