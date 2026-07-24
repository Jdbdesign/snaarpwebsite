import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { ContactsPhoneScreen } from '@/components/download/contacts/ContactsPhoneScreen';
import { ContactsWebMockup } from '@/components/download/contacts/ContactsWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Save a contact / it syncs instantly / stay organized" flow
// already described on the Contacts product page (app/products/contacts/page.tsx),
// reworded for the Download page's numbered-step format rather than invented fresh.
const CONTACTS_DOWNLOAD_STEPS = [
  {
    title: 'Import Your Contacts',
    desc: 'Bring in your existing address book, or let Snaarp save people automatically the first time you email or meet with them.',
  },
  {
    title: 'Sync Across the Stack',
    desc: 'Every saved contact instantly shows up in Mail, Meet, and CRM — no exporting, no re-typing.',
  },
  {
    title: 'Start Reaching Out',
    desc: 'Search, tag, and group your contacts, then reach out from whichever app you’re already in.',
  },
];

export const metadata: Metadata = {
  title: 'Download Snaarp Contacts — iOS, Android & Web | Snaarp',
  description:
    'The Snaarp Contacts app brings one shared address book to iOS, Android, and the web — save a contact once and find it everywhere you work.',
};

export default function ContactsDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'One Shared' },
            { text: 'Address Book,' },
            { text: 'Everywhere You Work', accent: true },
          ]}
          subtext="Save a contact once in Snaarp Contacts and it's already there in Mail, Meet, and CRM — every contact synced and in reach, without hunting across apps."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/contacts' }}
          webMockup={<ContactsWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <ContactsPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Contacts app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: 'iOS app',
              desc: 'Every contact you’ve saved, right in your pocket — download the Snaarp Contacts app for iPhone and iPad.',
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <ContactsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: 'Android App',
              desc: 'Find anyone in your address book in seconds — download the Snaarp Contacts app for Android.',
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <ContactsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Contacts has no native Windows/macOS installer — same Mobile +
            Web only pattern established on Kalender's Download page — this
            renders a single "Web app" card instead of a Windows/macOS/Web
            trio, matching ProductsMegaMenu's `platforms: ['ios', 'android',
            'web']` for Contacts (and the Download nav dropdown's derived
            platform columns). CTA is a placeholder href ("#") pattern for
            the store links; the web card CTA points at the real product page. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full Contacts experience from your browser."
          cards={[
            {
              key: 'web',
              title: 'Web app',
              desc: 'No install needed — sign in at snaarp.com to search, tag, and manage every contact straight from your browser.',
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/contacts' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={CONTACTS_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Organizing"
          headline="Stop keeping three different contact lists."
          subtext="Join thousands of teams already using Snaarp Contacts to save every person once and find them everywhere they work."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Snaarp Contacts', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
