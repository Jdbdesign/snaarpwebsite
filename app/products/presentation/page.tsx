import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PresentationHero } from '@/components/presentation/PresentationHero';
import { PresentationTrustBar } from '@/components/presentation/PresentationTrustBar';
import { PresentationStatsRow } from '@/components/presentation/PresentationStatsRow';
import { PresentationSteps } from '@/components/presentation/PresentationSteps';
import { PresentationBentoGrid } from '@/components/presentation/PresentationBentoGrid';
import { PresentationAltCollaborate } from '@/components/presentation/PresentationAltCollaborate';
import { PresentationAltPresent } from '@/components/presentation/PresentationAltPresent';
import { PresentationTestimonials } from '@/components/presentation/PresentationTestimonials';
import { PresentationFAQ } from '@/components/presentation/PresentationFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'Presentation — Build the deck. Together, live. | Snaarp',
  description:
    'Slides, templates, and real-time collaboration — all in the Stack. Start from a blank canvas or a ready-made template, and watch your team build it out with you, live.',
};

export default function PresentationProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="presentation-page">
        <PresentationHero />
        <PresentationTrustBar />
        <PresentationStatsRow />
        <PresentationSteps />
        <PresentationBentoGrid />
        <PresentationAltCollaborate />
        <PresentationAltPresent />
        <PresentationTestimonials />
        <PresentationFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
