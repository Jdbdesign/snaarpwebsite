import { SheetsRevealSection } from './SheetsRevealSection';
import { StackTrustBar } from '@/components/sections/StackTrustBar';

const APPS = [
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/apps-document.png', name: 'Snaarp Doc' },
];

export function SheetsTrustBar() {
  return <StackTrustBar Wrapper={SheetsRevealSection} apps={APPS} />;
}
