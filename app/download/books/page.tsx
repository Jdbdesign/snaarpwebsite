import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { BooksPhoneScreen } from '@/components/download/books/BooksPhoneScreen';
import { BooksWebMockup } from '@/components/download/books/BooksWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const BOOKS_DOWNLOAD_STEPS = [
  {
    title: "Create an Invoice",
    desc: "Pick a client, add line items, set payment terms - your invoice is branded and ready to send in under a minute.",
  },
  {
    title: "Send to Client",
    desc: "Deliver by email with a one-click pay link - the client pays online, you get notified instantly.",
  },
  {
    title: "Track Payment",
    desc: "See who paid, who has late, and what's outstanding - automatic reminders chase the overdue ones for you.",
  },
];

export const metadata: Metadata = {
  title: "Download Books - Web App | Snaarp",
  description:
    'Invoicing and bookkeeping that handles itself. Create invoices, send them to clients, and track payments - all in one place.',
};

export default function BooksDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Invoice, Track,' },
            { text: 'Get Paid. All in' },
            { text: 'One Place.', accent: true },
          ]}
          subtext="Create professional invoices, send them with a one-click pay link, and track every payment from sent to received - automatic reminders chase the late ones for you."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<BooksWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <BooksPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Books is Web only. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Books from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to create invoices, track payments, and manage your bookkeeping - works alongside CRM and Accounting.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={BOOKS_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Invoicing"
          headline="Stop chasing payments in your inbox."
          subtext="Professional invoices with one-click pay links and automatic reminders - get paid faster without the follow-up. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Books', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
