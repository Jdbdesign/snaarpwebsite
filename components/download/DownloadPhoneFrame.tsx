import type { ReactNode } from 'react';

interface DownloadPhoneFrameProps {
  children: ReactNode;
  /** 'lg' for the hero's overlapping phone, 'sm' for the smaller mobile-apps
   * card phones — same chrome, just a different scale so it reads cleanly
   * at each size rather than being shrunk via a CSS transform. */
  size?: 'lg' | 'sm';
  className?: string;
}

/** Reusable phone chrome (notch, side buttons, rounded bezel) that any
 * product's Download hero or Mobile apps section can drop screen content
 * into via `children` — keeps the device frame consistent across every
 * future per-product Download page without re-implementing the bezel. */
export function DownloadPhoneFrame({ children, size = 'lg', className = '' }: DownloadPhoneFrameProps) {
  return (
    <div className={`download-phone-frame download-phone-frame--${size} ${className}`.trim()}>
      <span className="download-phone-notch" aria-hidden="true" />
      <div className="download-phone-screen">{children}</div>
      <span className="download-phone-side-btn download-phone-side-btn--power" aria-hidden="true" />
      <span className="download-phone-side-btn download-phone-side-btn--vol-up" aria-hidden="true" />
      <span className="download-phone-side-btn download-phone-side-btn--vol-down" aria-hidden="true" />
    </div>
  );
}
