import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AppsToExplore } from '@/components/AppsToExplore';
import { WhyMail } from '@/components/WhyMail';
import { BuiltForModernBusinesses } from '@/components/BuiltForModernBusinesses';
import { StatsBlock } from '@/components/StatsBlock';
import { BuiltToReplace } from '@/components/BuiltToReplace';
import { SnaarpStack } from '@/components/SnaarpStack';
import { WhoUsesSnaarpMail } from '@/components/WhoUsesSnaarpMail';
import { BusinessMovesFast } from '@/components/BusinessMovesFast';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AppsToExplore />
        <WhyMail />
        <BuiltForModernBusinesses />
        <StatsBlock />
        <BuiltToReplace />
        <SnaarpStack />
        <WhoUsesSnaarpMail />
        <BusinessMovesFast />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
