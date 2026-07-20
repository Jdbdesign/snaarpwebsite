import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustedToolsBar } from '@/components/TrustedToolsBar';
import { AppsToExplore } from '@/components/AppsToExplore';
// import { WhyMail } from '@/components/WhyMail';
import { IconShowcaseSection } from '@/components/IconShowcaseSection';
import { IconShowcaseFeatures } from '@/components/IconShowcaseFeatures';
// import { BuiltForModernBusinesses } from '@/components/BuiltForModernBusinesses';
import { EverythingYouNeed } from '@/components/EverythingYouNeed';
import { PricingBanner } from '@/components/PricingBanner';
import { WorkflowConnected } from '@/components/WorkflowConnected';
import { BuiltToReplace } from '@/components/BuiltToReplace';
import { TrustedByForward } from '@/components/TrustedByForward';
import { SimplePlanCTA } from '@/components/SimplePlanCTA';
import { SnaarpStack } from '@/components/SnaarpStack';
import { FAQ } from '@/components/FAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustedToolsBar />
        <AppsToExplore />
        {/* <WhyMail /> */}
        <IconShowcaseSection />
        <IconShowcaseFeatures />
        {/* <BuiltForModernBusinesses /> */}
        <EverythingYouNeed />
        <PricingBanner />
        <WorkflowConnected />
        <BuiltToReplace />
        <TrustedByForward />
        <SimplePlanCTA />
        <SnaarpStack />
        <FAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
