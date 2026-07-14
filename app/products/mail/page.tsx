import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MailHero } from '@/components/mail/MailHero';
import { MailDashboardPreview } from '@/components/mail/MailDashboardPreview';
import { MailFeatureGrid } from '@/components/mail/MailFeatureGrid';
import { MailEntireTeam } from '@/components/mail/MailEntireTeam';
import { StepsSection } from '@/components/sections/StepsSection';
import { WhyMail } from '@/components/WhyMail';
import { MailUseCases } from '@/components/mail/MailUseCases';
import { BusinessMovesFast } from '@/components/BusinessMovesFast';
import { FinalCTA } from '@/components/FinalCTA';
import { Price } from '@/components/currency/Price';

const MAIL_STEPS = [
  {
    title: 'Connect Domain',
    desc: 'Paste your domain settings and our automated wizard handles the DNS records for you.',
  },
  {
    title: 'Invite Team',
    desc: 'Add your colleagues and assign professional addresses in bulk through the dashboard.',
  },
  {
    title: 'Start Sending',
    desc: 'Launch your new inbox and experience business communication without the bloat.',
  },
];

export const metadata: Metadata = {
  title: 'Snaarp Mail — Premium business email without the enterprise price tag | Snaarp',
  description:
    'yourname@yourcompany.com in minutes — not a support ticket. Set up your domain, invite your team, and every inbox syncs straight into Contacts and Kalender.',
};

export default function MailProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <MailHero />
        <MailDashboardPreview />
        <MailFeatureGrid />
        <StepsSection heading="Get started in three simple steps" steps={MAIL_STEPS} />
        <MailEntireTeam />
        <WhyMail />
        <MailUseCases />
        <BusinessMovesFast />

        <FinalCTA
          heading="Professional email, sorted. Every app included."
          copy="No per-inbox fees, no separate email provider to manage. Just one Stack, running your whole business."
          buttonLabel={<>Start the Stack for <Price amount={1} /></>}
        />
      </main>
      <Footer />
    </>
  );
}
