import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { MailPhoneScreen } from '@/components/download/mail/MailPhoneScreen';
import { MailWebMockup } from '@/components/download/mail/MailWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Same three onboarding steps already shown on the Mail product page
// (app/products/mail/page.tsx) — kept identical rather than re-worded,
// since the Download page and product page describe the same setup flow.
const MAIL_DOWNLOAD_STEPS = [
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
  title: 'Download Snaarp Mail — iOS, Android, Web & Desktop | Snaarp',
  description:
    "The Snaarp Mail app brings your full business email experience to iOS and Android — fast, secure, and built for people who can't afford to miss a message.",
};

export default function MailDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Your Business' },
            { text: 'Email, Always in' },
            { text: 'Your Pocket', accent: true },
          ]}
          subtext="The Snaarp Mail app brings your full business email experience to iOS and Android — fast, secure, and built for people who can't afford to miss a message."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/mail' }}
          webMockup={<MailWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <MailPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Mail app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: 'iOS app',
              // Fresh copy — the reference this page was built from mistakenly
              // described a competitor's ("Proton Mail") app here.
              desc: 'For secure access to your inbox, download the Snaarp Mail app for iOS.',
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <MailPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: 'Android App',
              desc: 'Keep your inbox with you — download the Snaarp Mail app for Android.',
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <MailPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* No native Windows/macOS installer exists yet, but the Download nav
            dropdown (components/DownloadMegaMenu.tsx) already presents a
            "Desktop app" column with Windows + macOS as real destinations —
            keeping native-style cards here (rather than renaming to a single
            "Web app" section) keeps the page consistent with what the nav
            promises. CTAs are placeholder hrefs ("#") until real installers
            ship, same convention as the rest of the site's not-yet-built
            links (see Footer.tsx). */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Get the full Snaarp Mail and Calendar experience from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: 'Windows',
              desc: 'Native inbox notifications and offline access, built for Windows 10 and 11.',
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: 'macOS',
              desc: 'A dedicated menu-bar app for Mail, Kalender, and Contacts on Mac.',
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: 'Web app',
              desc: 'No install needed — sign in at snaarp.com to use Mail and Kalender straight from your browser.',
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/mail' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={MAIL_DOWNLOAD_STEPS} />

        {/* COPY FLAG (needs product/legal confirmation before launch): "total
            email privacy" and "encrypted inbox" are stronger claims than
            anything on Mail's own product page (app/products/mail/page.tsx),
            which makes no encryption claim at all today. Shipped as
            requested, but this should not go live without confirming Mail's
            actual encryption implementation matches — otherwise soften to
            "secure inbox" or align the product page's copy to match. */}
        <DownloadFinalCTA
          eyebrow="Start in Minutes"
          headline="Experience total email privacy with Snaarpmail encrypted inbox."
          subtext="Join thousands of businesses already using Snaarp to save time, reduce costs, and grow faster."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Snaarpmail', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
