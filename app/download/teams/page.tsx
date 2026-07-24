import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { TeamsPhoneScreen } from '@/components/download/teams/TeamsPhoneScreen';
import { TeamsWebMockup } from '@/components/download/teams/TeamsWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Create a channel" / "Start talking" / "Everyone stays in
// sync" flow on the Teams product page (components/teams/TeamsHero.tsx +
// app/products/teams/page.tsx STEPS), reworded slightly to match this
// page's step-title convention (short imperative titles, per Mail/Meet).
const TEAMS_DOWNLOAD_STEPS = [
  {
    title: 'Create a Channel',
    desc: 'Set one up for a project, a team, or a topic — public or private, ready in seconds.',
  },
  {
    title: 'Invite Your Team',
    desc: 'Add teammates so everyone can post updates, share files, and thread replies without cluttering the feed.',
  },
  {
    title: 'Start the Conversation',
    desc: 'New teammates scroll back through unlimited history to get context instantly — nothing gets lost.',
  },
];

export const metadata: Metadata = {
  title: 'Download Snaarp Teams — iOS, Android, Web & Desktop | Snaarp',
  description:
    'The Snaarp Teams app brings channels, threads, and file sharing to iOS, Android, Windows, and Mac — so group chat never turns into inbox chaos.',
};

export default function TeamsDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Group Chat That' },
            { text: 'Stays Organized,' },
            { text: 'Not Overwhelming', accent: true },
          ]}
          subtext="Snaarp Teams brings channels, threads, and file sharing into one searchable place — so your team's conversations stay out of your inbox and never turn into a to-do list you can't keep up with."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/teams' }}
          webMockup={<TeamsWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <TeamsPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Teams app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: 'iOS app',
              desc: 'Stay on top of every channel and thread — download Snaarp Teams for iPhone and iPad.',
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <TeamsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: 'Android App',
              desc: 'Never miss a channel update — download Snaarp Teams for Android and reply on the go.',
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <TeamsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Teams ships a native Windows/macOS installer (ProductsMegaMenu's
            platforms: ['ios', 'android', 'web', 'windows', 'macos'] for
            Teams), same full desktop story as Mail and Meet — unlike
            Kalender/Contacts' Mobile+Web-only pages, this renders the full
            3-card Windows/macOS/Web grid. CTAs are placeholder hrefs ("#")
            until real installers ship, same convention as Mail's and Meet's
            Desktop sections. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Get the full Teams experience from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: 'Windows',
              desc: 'Native desktop notifications for every channel and mention, built for Windows 10 and 11.',
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: 'macOS',
              desc: 'A dedicated menu-bar app for channels and threads, without keeping a browser tab open.',
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: 'Web app',
              desc: 'No install needed — sign in at snaarp.com to jump into any channel straight from your browser.',
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/teams' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={TEAMS_DOWNLOAD_STEPS} />

        {/* Every claim below is backed by the Teams product page
            (app/products/teams/page.tsx): unlimited channels/history and
            "1 app — chat, files, and channels in one place" are named STATS,
            and "search everything" / "channels, not chaos" are named
            features. No claim here is stronger than what that page already
            establishes, so no COPY FLAG is needed. Scope is deliberately
            kept to chat/channels — no video-calling capability is implied
            anywhere on this page; that's Meet's product (Teams' own product
            page notes a channel can "jump into" a Meet call, but this
            Download page doesn't repeat that crossover to avoid implying
            Teams handles video itself). */}
        <DownloadFinalCTA
          eyebrow="Start Chatting"
          headline="Keep every channel, thread, and file in one place your team actually checks."
          subtext="Join thousands of teams already using Snaarp Teams to keep conversations organized, searchable, and out of their inboxes."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Snaarpteams', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
