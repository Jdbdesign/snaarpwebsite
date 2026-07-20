import { CrmRevealSection } from './CrmRevealSection';
import { StackTrustBar } from '@/components/sections/StackTrustBar';

const APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/apps-kalender.jpg', name: 'Snaarp Kalender' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
];

export function CrmTrustBar() {
  return <StackTrustBar Wrapper={CrmRevealSection} apps={APPS} />;
}
