import { PdfReaderRevealSection } from './PdfReaderRevealSection';
import { StackTrustBar } from '@/components/sections/StackTrustBar';

const APPS = [
  { iconSrc: '/assets/icons/apps-document.png', name: 'Snaarp Doc' },
  { iconSrc: '/assets/icons/apps-meet.jpg', name: 'Snaarp Meet' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
];

export function PdfReaderTrustBar() {
  return <StackTrustBar Wrapper={PdfReaderRevealSection} apps={APPS} />;
}
