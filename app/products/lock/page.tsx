import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LockHero } from '@/components/lock/LockHero';
import { LockTrustBar } from '@/components/lock/LockTrustBar';
import { LockStatsRow } from '@/components/lock/LockStatsRow';
import { LockSteps } from '@/components/lock/LockSteps';
import { LockBentoGrid } from '@/components/lock/LockBentoGrid';
import { LockAltVaultZeroExposure } from '@/components/lock/LockAltVaultZeroExposure';
import { LockAltGrantRevoke } from '@/components/lock/LockAltGrantRevoke';
import { LockTestimonials } from '@/components/lock/LockTestimonials';
import { LockFAQ } from '@/components/lock/LockFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'Lock — Every password, locked down and shared safely | Snaarp',
  description:
    'One secure vault for your team’s passwords, logins, and shared credentials — encrypted end-to-end, with secure sharing, a built-in password generator, breach monitoring, and full access logs.',
};

export default function LockProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="lock-page">
        <LockHero />
        <LockTrustBar />
        <LockStatsRow />
        <LockSteps />
        <LockBentoGrid />
        <LockAltVaultZeroExposure />
        <LockAltGrantRevoke />
        <LockTestimonials />
        <LockFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
