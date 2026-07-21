import { StackTrustBar } from '@/components/sections/StackTrustBar';
import { LockRevealSection } from './LockRevealSection';

// The standalone design's own trust bar listed "Directory / Device
// Management / Teams" as icon+label+description tiles — a different shape
// from, and referencing two products (Directory, Device Management) that
// don't have pages or icon assets in this project yet, unlike the shared
// "Works across the stack" component every other product page was just
// unified onto (commit cfdf396). Reusing that shared component here instead,
// with real cross-linked Snaarp apps relevant to a shared credential vault.
const APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
];

export function LockTrustBar() {
  return <StackTrustBar Wrapper={LockRevealSection} apps={APPS} />;
}
