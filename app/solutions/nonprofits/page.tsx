import type { Metadata } from 'next';
import { Users, BookOpen, FileText, GraduationCap } from 'lucide-react';
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
  SnippetDonorCrmVisual,
  SnippetGrantDocVisual,
  SnippetElearnVisual,
  StepTrackDonorsVisual,
  StepWriteGrantVisual,
  StepBooksVisual,
  DonorTrackingVisual,
  VolunteerTrainingVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Nonprofits - Run lean. Do more. | Snaarp',
  description:
    'Donor relationships, grant reporting, and volunteer training - without paying enterprise prices for enterprise tools.',
};

const CHECK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
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
    eyebrow: 'WE TRACK EVERY SUPPORTER',
    title: (
      <>
        Donor history, giving patterns, <span style={{ color: '#8B85A0', fontWeight: 500 }}>one record.</span>
      </>
    ),
    visual: <SnippetDonorCrmVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE WRITE THE GRANT',
    title: (
      <>
        Grant applications, <span style={{ color: '#8B85A0', fontWeight: 500 }}>done without the deadline panic.</span>
      </>
    ),
    visual: <SnippetGrantDocVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE TRAIN VOLUNTEERS',
    title: (
      <>
        Onboard new helpers <span style={{ color: '#8B85A0', fontWeight: 500 }}>without pulling staff off their real work.</span>
      </>
    ),
    visual: <SnippetElearnVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track donors, relationships, and giving history in one place.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'Books', desc: 'Keep the books audit-ready without hiring an accountant.', href: '/', tint: 'amber', icon: { kind: 'lucide', Icon: BookOpen }, external: true },
  { name: 'Document', desc: 'Write grants, reports, and board docs together in real time.', href: '/products/docs', tint: 'teal', icon: { kind: 'lucide', Icon: FileText }, external: false },
  { name: 'ELearn', desc: 'Train volunteers and track completion, no separate LMS.', href: '/', tint: 'rose', icon: { kind: 'lucide', Icon: GraduationCap }, external: true },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Track donors', desc: 'Every supporter - monthly givers, one-time donors, corporate partners - lives in one record with their full giving history.', visual: <StepTrackDonorsVisual /> },
  { number: '02', title: 'Write the grant', desc: 'Draft grant applications collaboratively, track progress, and never miss a deadline with shared Documents.', visual: <StepWriteGrantVisual /> },
  { number: '03', title: 'Keep the books ready', desc: 'Income, expenses, and donor receipts stay organized in Books - ready for your next audit or board report.', visual: <StepBooksVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Donor view',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every supporter relationship, actually tracked',
    desc: 'See a donor\u2019s full history in one place - giving patterns, communication, notes. No more piecing it together from spreadsheets before a board meeting.',
    visual: <DonorTrackingVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Self-serve training',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Volunteers trained without pulling staff off their real work',
    desc: 'Build onboarding courses once, assign them to new volunteers, and track who has completed what - no classroom time required.',
    visual: <VolunteerTrainingVisual />,
    mockSide: 'left',
  },
];

const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "We are a team of four. Being able to run donor tracking, grant writing, and volunteer onboarding without hiring for any of it made a real difference.",
    initials: 'EM',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Eleanor Mason',
    role: 'Programme Director',
  },
  {
    quote: "The books stay audit-ready all year now. Before Snaarp we were scrambling every March to get the numbers in order for the board.",
    initials: 'JK',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'James Kim',
    role: 'Finance Lead',
  },
  {
    quote: "New volunteers used to take three weeks to get up to speed. With ELearn they are ready in four days, and we can see exactly where each one is.",
    initials: 'SR',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'Sarah Reeves',
    role: 'Volunteer Coordinator',
  },
];

export default function NonprofitsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="More mission, less overhead"
          heading={
            <>
              Run lean. Do{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                more.
              </span>
            </>
          }
          lede="Donor relationships, grant reporting, and volunteer training - without paying enterprise prices for enterprise tools. Built for teams where every pound needs to go further."
          ctas={heroCtas}
          trustIcon={CHECK_ICON}
          trustText="GDPR compliant \u00b7 No credit card required"
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
          heading="How Nonprofits Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What nonprofit teams say"
          heading="Do more with less. Every day."
          testimonials={testimonials}
          todoNote="TODO \u00b7 real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
