import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PricingPlans } from '@/components/pricing/PricingPlans';
import { ComparePlans } from '@/components/pricing/ComparePlans';
import { StepsSection } from '@/components/sections/StepsSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing — Snaarp',
  description: 'Simple pricing that scales with storage. Flexible user limits included in every plan — choose the storage tier that fits your organisation.',
};

const PRICING_STEPS = [
  {
    title: 'Pick your plan',
    desc: 'Compare storage, users, and features above, then choose the tier that fits your team today.',
  },
  {
    title: 'Create your account',
    desc: 'Sign up in minutes — no long forms, no sales calls required to get started.',
  },
  {
    title: 'Invite your team',
    desc: 'Add colleagues and start using Mail, Kalender, and Contacts right away, all in one Stack.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PricingPlans />
        <ComparePlans />
        <StepsSection heading="Get started in 3 simple steps" steps={PRICING_STEPS} ctaLabel="Get Started" ctaHref="#" />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
