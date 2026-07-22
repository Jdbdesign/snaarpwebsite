import type { Metadata } from 'next';
import { GraduationCap, BadgeCheck } from 'lucide-react';
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
  SnippetBadgeVisual,
  SnippetCourseVisual,
  SnippetChecklistVisual,
  StepProvisionVisual,
  StepVerifyVisual,
  StepTrainVisual,
  AccessDashboardVisual,
  TrainingDashboardVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Team Onboarding & Training — New hires who hit the ground running | Snaarp',
  description:
    "A new hire's first day shouldn't be spent waiting on IT and hunting for logins. Get them access-verified, trained, and productive — automatically.",
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
        A verified badge, <span style={{ color: '#8B85A0', fontWeight: 500 }}>active before they walk in.</span>
      </>
    ),
    visual: <SnippetBadgeVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE GET THEM TRAINED',
    title: (
      <>
        Courses assigned automatically, <span style={{ color: '#8B85A0', fontWeight: 500 }}>based on their role.</span>
      </>
    ),
    visual: <SnippetCourseVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE SHOW YOU PROGRESS',
    title: (
      <>
        See exactly where <span style={{ color: '#8B85A0', fontWeight: 500 }}>every new hire stands.</span>
      </>
    ),
    visual: <SnippetChecklistVisual />,
    tilt: 'tiltRight',
  },
];

// Directory has NO dedicated product page yet (same situation as Zeus &
// Sendrit on Sales Pipeline & Outreach). Per direction, its chip falls back
// to the Secure & Sign category of the Products mega menu rather than a dead
// route, and shows the "In the Stack" badge.
// >>> NOTE: Neither Digital ID Card nor ELearn have dedicated product pages
// yet either — they're listed in ProductsMegaMenu without hrefs. All three
// chips use the homepage fallback + "In the Stack" badge until their pages
// are built. Replace hrefs once those pages ship. <<<
// Icons mirror ProductsMegaMenu.tsx: ELearn uses GraduationCap. Directory
// and ID Card use BadgeCheck as Lucide placeholders.
const appChips: SolutionAppChip[] = [
  { name: 'Directory', desc: 'Set up identity and access before day one.', href: '/', tint: 'violet', icon: { kind: 'lucide', Icon: BadgeCheck }, external: true },
  { name: 'Digital ID Card', desc: 'A verified badge, active the moment they start.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: BadgeCheck }, external: true },
  { name: 'ELearn', desc: 'Role-based training, assigned automatically.', href: '/', tint: 'amber', icon: { kind: 'lucide', Icon: GraduationCap }, external: true },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Provision', desc: 'Directory sets up their identity and access the moment they\u2019re added to the team.', visual: <StepProvisionVisual /> },
  { number: '02', title: 'Verify', desc: 'Digital ID Card activates automatically, ready to use for building and system access.', visual: <StepVerifyVisual /> },
  { number: '03', title: 'Train', desc: 'ELearn assigns the right courses for their role, and tracks completion without anyone chasing it.', visual: <StepTrainVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Access',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Access that\u2019s ready before they are',
    desc: 'The moment someone\u2019s added to the team, their identity, access, and badge are ready \u2014 no separate IT ticket, no waiting on day one.',
    visual: <AccessDashboardVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Training',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Training that follows the role, not a generic PDF',
    desc: 'Every role gets the training it actually needs, assigned automatically \u2014 and managers can see completion without asking.',
    visual: <TrainingDashboardVisual />,
    mockSide: 'left',
  },
];

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders, following the same disclosure pattern as
// components/crm/CrmTestimonials.tsx. The standalone design bundle used a
// single centered testimonial; this project's standing rule for Solution
// pages (CLAUDE.md rule #5) requires the CRM 3-card grid layout instead,
// so these are written one-per-step of the How It Works flow
// (Provision/Verify/Train).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'New hires used to spend their first morning waiting on IT. Now their badge and training are ready before they even sit down.',
    initials: 'KM',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Kara M.',
    role: 'Head of People Ops',
  },
  {
    quote: 'We used to lose the first week to setup. Directory and Digital ID Card eliminated that entirely — access is just there on day one.',
    initials: 'TP',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Tom P.',
    role: 'IT Operations Lead',
  },
  {
    quote: 'ELearn assigns the right courses before I even meet the new hire. I just check the dashboard instead of chasing completion emails.',
    initials: 'LR',
    avatarBg: '#FEF6E7',
    avatarColor: '#B45309',
    name: 'Leah R.',
    role: 'Engineering Manager',
  },
];

export default function TeamOnboardingTrainingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Day one, sorted"
          heading={
            <>
              New hires who hit the ground{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                running.
              </span>
            </>
          }
          lede="A new hire's first day shouldn't be spent waiting on IT and hunting for logins. Get them access-verified, trained, and productive — automatically, from the moment they accept the offer."
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
          heading="This solution is three Snaarp apps, working as one."
          apps={appChips}
          columns={3}
        />

        <SolutionHowItWorks
          eyebrow="The flow"
          heading="How Team Onboarding & Training Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What people teams say"
          heading="Onboarding that actually works from day one."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
