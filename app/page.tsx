import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AppsToExplore } from '@/components/AppsToExplore';
// import { WhyMail } from '@/components/WhyMail';
import { IconShowcaseSection } from '@/components/IconShowcaseSection';
import { IconShowcaseFeatures } from '@/components/IconShowcaseFeatures';
import { BuiltForModernBusinesses } from '@/components/BuiltForModernBusinesses';
import { StatsBlock } from '@/components/StatsBlock';
import { BuiltToReplace } from '@/components/BuiltToReplace';
import { SnaarpStack } from '@/components/SnaarpStack';
import { BusinessEmailScales } from '@/components/BusinessEmailScales';
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
        {/* <WhyMail /> */}
        <IconShowcaseSection />
        <IconShowcaseFeatures />
        <BuiltForModernBusinesses />
        <StatsBlock />
        <BuiltToReplace />
        <SnaarpStack />
        <BusinessEmailScales />
        <BusinessMovesFast />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
