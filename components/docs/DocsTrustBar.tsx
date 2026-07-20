import { DocsRevealSection } from './DocsRevealSection';
import { StackTrustBar } from '@/components/sections/StackTrustBar';

const APPS = [
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/apps-sheet.jpg', name: 'Snaarp Sheets' },
];

export function DocsTrustBar() {
  return <StackTrustBar Wrapper={DocsRevealSection} apps={APPS} />;
}
