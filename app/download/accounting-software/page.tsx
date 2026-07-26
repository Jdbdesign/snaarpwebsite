import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { AccountingSoftwarePhoneScreen } from '@/components/download/accounting-software/AccountingSoftwarePhoneScreen';
import { AccountingSoftwareWebMockup } from '@/components/download/accounting-software/AccountingSoftwareWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const ACCOUNTING_DOWNLOAD_STEPS = [
  {
    title: "Connect Your Accounts",
    desc: "Link your bank accounts and payment processors - transactions flow in automatically, no manual entry.",
  },
  {
    title: "Categorize Automatically",
    desc: "Smart rules assign each transaction to the right account - review the few it isn sure about.",
  },
  {
    title: "Run Reports Instantly",
    desc: "Generate P&L, balance sheet, and cash flow reports in one click - always current, always accurate.",
  },
];

export const metadata: Metadata = {
  title: "Download Accounting Software - Web App | Snaarp",
  description:
    'Full accounting and financial reporting without the accountant\u2019s price tag. Connect accounts, categorize automatically, and run reports instantly.',
};

export default function AccountingSoftwareDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Full Accounting. Without' },
            { text: "the accountant's" },
            { text: 'Price Tag.', accent: true },
          ]}
          subtext="Connect your bank accounts, let transactions categorize themselves, and run financial reports in one click - P&L, balance sheet, and cash flow, always current."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<AccountingSoftwareWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <AccountingSoftwarePhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Accounting Software is Web only. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Accounting Software from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to manage transactions, run reports, and reconcile accounts - works alongside Books for invoicing.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={ACCOUNTING_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Reporting"
          headline="Stop paying someone to sort your numbers."
          subtext="Bank feeds, auto-categorization, and real-time reports - accounting that handles itself. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Accounting', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
