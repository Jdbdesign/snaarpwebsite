import { StackTrustBar } from '@/components/sections/StackTrustBar';
import { EsignatureRevealSection } from './EsignatureRevealSection';

// The standalone design's own trust bar listed "PDF Reader / Contacts /
// Work Drive / Mail" as icon+name+description tiles — a different shape
// from the shared "Works across the stack" component every other product
// page was just unified onto (commit cfdf396). Reusing that shared
// component here instead, with the same four apps (icon+name only), same
// approach as components/lock/LockTrustBar.tsx.
const APPS = [
  { iconSrc: '/assets/icons/pdf-icon.svg', name: 'Snaarp PDF Reader' },
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
];

export function EsignatureTrustBar() {
  return <StackTrustBar Wrapper={EsignatureRevealSection} apps={APPS} />;
}
