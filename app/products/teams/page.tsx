import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TeamsHero } from '@/components/teams/TeamsHero';
import { TeamsFAQ } from '@/components/teams/TeamsFAQ';
import { FilesAttachedVisual, PhotoCollageVisual } from '@/components/teams/TeamsRowVisuals';
// import { ChaosScrollVisual } from '@/components/teams/TeamsRowVisuals'; // replaced by static image, see below
import { AppLogoStrip } from '@/components/sections/AppLogoStrip';
import { StatsRow } from '@/components/sections/StatsRow';
import { DemoVideoSection } from '@/components/sections/DemoVideoSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { AlternatingFeatureRow } from '@/components/sections/AlternatingFeatureRow';
// import { IconGrid2x2 } from '@/components/sections/IconGrid2x2'; // replaced by static image, see below
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Price } from '@/components/currency/Price';

export const metadata: Metadata = {
  title: 'Teams — Team chat that stays organized | Snaarp',
  description:
    'Channels for every project, threads that don’t get lost, and files that stay attached to the conversation they came from.',
};

const STACK_APPS = [
  { name: 'Snaarp Mail', icon: { kind: 'img' as const, src: '/assets/icons/envelope.jpg' } },
  { name: 'Meet', icon: { kind: 'img' as const, src: '/assets/icons/apps-meet.jpg' } },
  { name: 'Work Drive', icon: { kind: 'img' as const, src: '/assets/icons/cube.jpg' } },
  { name: 'Contacts', icon: { kind: 'img' as const, src: '/assets/icons/search.jpg' } },
  { name: 'Kalender', icon: { kind: 'img' as const, src: '/assets/icons/apps-kalender.jpg' } },
];

const STATS = [
  { number: 'Unlimited', label: 'channels, no per-plan channel caps' },
  { number: 'Unlimited', label: 'message history, searchable from day one' },
  { number: '1 app', label: 'chat, files, and channels in one place' },
];

const STEPS = [
  { title: 'Create a channel', desc: 'Set one up for a project, a team, or a topic — public or private.' },
  { title: 'Start talking', desc: 'Post updates, share files, thread replies so side conversations don’t clutter the feed.' },
  { title: 'Everyone stays in sync', desc: 'New teammates scroll back through history to get context instantly.' },
];

// Mock data for the original icon-grid cards, kept alongside the commented
// JSX below in case this section reverts from the static image.
// const ICON_GRID_ITEMS = [
//   { Icon: Hash, title: 'Channels & threads', desc: 'One place per project, side chats stay contained.', accent: 'mint' as const },
//   { Icon: Paperclip, title: 'File sharing, built in', desc: 'Files stay attached to the conversation they came from.', accent: 'amber' as const },
//   { Icon: AtSign, title: '@Mentions & notifications', desc: 'Control what you get pinged for, channel by channel.', accent: 'rose' as const },
//   { Icon: Search, title: 'Search everything', desc: 'Messages, files, and decisions, all searchable.', accent: 'teal' as const },
// ];

export default function TeamsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TeamsHero />

        <AppLogoStrip label="Works Across the Stack" apps={STACK_APPS} className="sec-alt-bg py-12 lg:py-16" />

        <StatsRow stats={STATS} className="py-16 lg:py-20" />

        <DemoVideoSection
          headline="See Teams in action."
          subtext="A 90-second look at how channels keep every project's conversation in one searchable place."
          ctaLabel={<>Start for <Price amount={2} />/month</>}
          className="sec-alt-bg"
          videoSrc="/assets/videos/teams-chat-loop.mp4"
          videoAspectRatio="1368 / 848"
          videoScale={1.0526}
        />

        <StepsSection heading="Get started in 3 easy steps" steps={STEPS} ctaLabel={<>Start for <Price amount={2} />/month</>} />

        <AlternatingFeatureRow
          revealGroup="alt-row-chaos"
          headline="No more losing decisions in group chat scroll."
          subtext="A single group chat turns into a wall of unrelated messages fast. Channels keep the right people looking at the right things."
          items={[
            { title: 'Channels, not chaos.', desc: 'One thread per project or topic, not one endless scroll.' },
            { title: 'Threads keep side chats contained.', desc: 'Reply in a thread instead of derailing the main channel.' },
            { title: 'Unlimited history.', desc: 'Nothing disappears after 90 days — search back as far as you need.' },
          ]}
          // Replaced with a static image export — was <ChaosScrollVisual />
          visual={
            <img
              src="/assets/images/teams-chaos-scroll.png"
              alt="A cluttered group chat with mixed topics, reorganized into a clean workspace of separate channels"
              className="w-full h-auto rounded-2xl"
            />
          }
        />

        <AlternatingFeatureRow
          revealGroup="alt-row-files"
          headline="Files that stay where you left them."
          items={[
            { title: 'We see your plan and apps instantly.', desc: 'No “can you send a screenshot” back-and-forth.' },
            { title: 'Files stay attached to the conversation.', desc: 'Drop a file into a channel and it’s searchable there later — no digging.' },
            { title: 'One thread per topic.', desc: 'No duplicate conversations spread across five different chats.' },
          ]}
          visual={<FilesAttachedVisual />}
          reverse
          altBackground
        />

        <AlternatingFeatureRow
          revealGroup="alt-row-benefits"
          headline="Stay in sync, without the scroll."
          items={[
            { title: '@Mentions that actually get seen.', desc: 'Tag a person or a channel, control notifications per channel.' },
            { title: 'Search everything.', desc: 'Find a message, file, or decision from six months ago in seconds.' },
            { title: 'Presence, built in.', desc: 'See who’s online, away, or heads-down before you interrupt them.' },
          ]}
          visual={<PhotoCollageVisual />}
        />

        {/* Replaced with a static image export — see IconGrid2x2 usage above (commented) for the original card grid markup. */}
        {/* <IconGrid2x2
          headline="Why teams choose Teams"
          items={ICON_GRID_ITEMS}
          ctaLabel="See How It Works"
          className="sec-alt-bg"
        /> */}
        <section className="sec-alt-bg py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="sec-icons-heading">Why teams choose Teams</h2>
            </div>
            <div className="overflow-x-auto">
              <img
                src="/assets/images/teams-why-icon-grid.png"
                alt="Why teams choose Teams: Channels & threads, @Mentions & notifications, File sharing built in, and Search everything"
                className="h-auto rounded-2xl w-full min-w-[640px] lg:min-w-0"
              />
            </div>
            <div className="text-center mt-10">
              <a href="#" className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
                See How It Works
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <TeamsFAQ />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
