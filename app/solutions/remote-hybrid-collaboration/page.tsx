import type { Metadata } from 'next';
import { Video, Users, FileText, HardDrive } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SolutionHero, type SolutionCta, type SolutionSnippetCard } from '@/components/solutions/SolutionHero';
import { SolutionTrustStrip } from '@/components/solutions/SolutionTrustStrip';
import { SolutionAppChips, type SolutionAppChip } from '@/components/solutions/SolutionAppChips';
import { SolutionHowItWorks, type SolutionStep } from '@/components/solutions/SolutionHowItWorks';
import { SolutionFeatureRows, type SolutionFeatureRow } from '@/components/solutions/SolutionFeatureRows';
import { SolutionTestimonial, type SolutionTestimonialItem } from '@/components/solutions/SolutionTestimonial';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Price } from '@/components/currency/Price';
import {
  SnippetMeetVisual,
  SnippetChatVisual,
  SnippetDocCursorsVisual,
  StepConnectVisual,
  StepCollaborateVisual,
  StepKeepTogetherVisual,
  ConversationFlowVisual,
  LiveDocVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Remote & Hybrid Collaboration — Work together, wherever you are | Snaarp',
  description:
    'Meet, chat, and co-edit in real time. One workspace for distributed teams — no tab-switching, no version confusion.',
};

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const CALENDAR_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2.5"></rect>
    <path d="M16 2v4M8 2v4M3 10h18"></path>
  </svg>
);

const heroCtas: SolutionCta[] = [
  { label: <>Start for <Price amount={2} />/month</>, href: '/pricing', variant: 'primary' },
  { label: 'Book a Call', href: '#', variant: 'secondary', icon: CALENDAR_ICON },
];

const snippetCards: SolutionSnippetCard[] = [
  {
    eyebrow: 'WE MAKE IT EASY',
    title: (
      <>
        One click, and you&apos;re <span style={{ color: '#8B85A0', fontWeight: 500 }}>face to face.</span>
      </>
    ),
    visual: <SnippetMeetVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE KEEP YOU IN SYNC',
    title: (
      <>
        A message away, <span style={{ color: '#8B85A0', fontWeight: 500 }}>not a scheduled call away.</span>
      </>
    ),
    visual: <SnippetChatVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE WORK TOGETHER, LIVE',
    title: (
      <>
        Same doc, same time, <span style={{ color: '#8B85A0', fontWeight: 500 }}>no version confusion.</span>
      </>
    ),
    visual: <SnippetDocCursorsVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'Meet', desc: 'Video calls that start in one click from any conversation.', href: '/products/meet', tint: 'violet', icon: { kind: 'lucide', Icon: Video }, external: false },
  { name: 'Teams', desc: 'Channels and DMs that keep context with the work.', href: '/products/teams', tint: 'amber', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'Document', desc: 'Real-time co-editing with live cursors and comments.', href: '/products/docs', tint: 'teal', icon: { kind: 'lucide', Icon: FileText }, external: false },
  { name: 'Work Drive', desc: 'One folder for every file your team touches.', href: '/products/work-drive', tint: 'rose', icon: { kind: 'lucide', Icon: HardDrive }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Connect', desc: 'Start in a Teams channel, then jump straight into a Meet call — no link hunting, no calendar invite needed.', visual: <StepConnectVisual /> },
  { number: '02', title: 'Collaborate', desc: 'Co-edit a Document with live cursors and inline comments, so everyone sees the same thing in real time.', visual: <StepCollaborateVisual /> },
  { number: '03', title: 'Keep everything together', desc: 'Recordings, documents, and chat exports land in one Work Drive folder — nothing gets lost across apps.', visual: <StepKeepTogetherVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'In the flow',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'From a chat to a call, without losing the thread',
    desc: 'A conversation in Teams becomes a face-to-face call in Meet with one click — and the chat history stays right there when you hang up.',
    visual: <ConversationFlowVisual />,
    mockSide: 'right',
  },
  {
    tag: 'One version',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: "Everyone\u2019s looking at the same version, always",
    desc: 'Two cursors, one document, zero confusion. Edits sync instantly and every save lands in Work Drive automatically.',
    visual: <LiveDocVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "Half our team is remote and it genuinely doesn\u2019t feel like it anymore. We jump from chat to call to doc without thinking about it.",
    initials: 'SR',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Sophie R.',
    role: 'Product Lead',
  },
  {
    quote: "We used to lose 10 minutes every meeting just finding the right doc version. Now everyone\u2019s in the same file before the call even starts.",
    initials: 'JM',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'James M.',
    role: 'Engineering Manager',
  },
  {
    quote: "The fact that recordings and docs land in the same Work Drive folder automatically saves us from the \u2018where did that go?\u2019 question every week.",
    initials: 'AN',
    avatarBg: '#FFF1F2',
    avatarColor: '#E11D48',
    name: 'Ava N.',
    role: 'Operations Director',
  },
];

export default function RemoteHybridCollaborationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Same room, different cities"
          heading={
            <>
              Work together,{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                wherever
              </span>{' '}
              you are.
            </>
          }
          lede="Meeting, chatting, and editing together shouldn't require five tabs and a calendar invite. One workspace, wherever your team happens to be."
          ctas={heroCtas}
          trustIcon={CHECK_ICON}
          trustText="GDPR compliant · No credit card required"
          snippetCards={snippetCards}
        />

        <SolutionTrustStrip
          label="Works with the tools you already use"
          logos={['Google', 'Slack', 'Dropbox', 'Microsoft', 'Zoom', 'Salesforce', 'Okta']}
        />

        <SolutionAppChips
          eyebrow="Built from apps you already know"
          heading="This solution is four Snaarp apps, working as one."
          apps={appChips}
        />

        <SolutionHowItWorks
          eyebrow="The flow"
          heading="How Remote & Hybrid Collaboration Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What distributed teams say"
          heading="Collaboration that doesn't care about time zones."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
