import type { Metadata } from 'next';
import { UsersRound } from 'lucide-react';
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
  SnippetWelcomeEmailVisual,
  SnippetKickoffCalendarVisual,
  SnippetProgressVisual,
  StepWelcomeVisual,
  StepKickoffVisual,
  StepTrackVisual,
  OnboardingSequenceVisual,
  OnboardingStatusVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Customer Onboarding — Onboarding that feels like a welcome, not a checklist | Snaarp',
  description:
    'New customers decide fast whether they made the right call. Give them a smooth first week — automatically — instead of a dozen disconnected emails and a forgotten kickoff call.',
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
        One welcome email, <span style={{ color: '#8B85A0', fontWeight: 500 }}>sent the second they sign up.</span>
      </>
    ),
    visual: <SnippetWelcomeEmailVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE KEEP THEM MOVING',
    title: (
      <>
        A kickoff call, <span style={{ color: '#8B85A0', fontWeight: 500 }}>booked without the back-and-forth.</span>
      </>
    ),
    visual: <SnippetKickoffCalendarVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE SHOW YOU PROGRESS',
    title: (
      <>
        See exactly where <span style={{ color: '#8B85A0', fontWeight: 500 }}>every new customer stands.</span>
      </>
    ),
    visual: <SnippetProgressVisual />,
    tilt: 'tiltRight',
  },
];

// All four apps here have real, shipped product pages — every chip links
// to a real route, no external/fallback flag needed (unlike Sales Pipeline
// & Outreach, where Zeus/Sendrit had no pages yet). Icons mirror the ones
// already assigned in the Products mega menu (components/ProductsMegaMenu.tsx).
// Note: the "Document" app is routed as /products/docs — that's the real
// shipped route for that product (ProductsMegaMenu's Document entry), not
// /products/document.
const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track every customer’s onboarding status in one view.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: UsersRound }, external: false },
  { name: 'Mail', desc: 'Send the welcome sequence automatically.', href: '/products/mail', tint: 'amber', icon: { kind: 'img', src: '/assets/icons/envelope.jpg' }, external: false },
  { name: 'Kalender', desc: 'Let new customers book their own kickoff call.', href: '/products/kalender', tint: 'teal', icon: { kind: 'img', src: '/assets/icons/apps-kalender.jpg' }, external: false },
  { name: 'Document', desc: 'Share a living onboarding plan they can follow along.', href: '/products/docs', tint: 'rose', icon: { kind: 'img', src: '/assets/icons/apps-document.png' }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Welcome', desc: 'The moment a deal closes in CRM, Mail sends a welcome sequence automatically.', visual: <StepWelcomeVisual /> },
  { number: '02', title: 'Kick off', desc: 'Kalender lets the customer pick a kickoff time themselves — no email chain required.', visual: <StepKickoffVisual /> },
  { number: '03', title: 'Track', desc: 'CRM and Document keep a shared onboarding plan up to date, visible to your whole team.', visual: <StepTrackVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Automatic',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'First impressions that happen without you',
    desc: 'The welcome sequence, the kickoff invite, the follow-up — all triggered automatically the moment a deal closes, so nothing depends on someone remembering to send it.',
    visual: <OnboardingSequenceVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Shared',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Everyone sees the same onboarding status',
    desc: "Sales, support, and the customer all see the same plan and the same progress — no one's guessing where things stand.",
    visual: <OnboardingStatusVisual />,
    mockSide: 'left',
  },
];

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders, following the same disclosure pattern as
// components/crm/CrmTestimonials.tsx. The standalone design bundle used a
// single centered testimonial; this project's standing rule for Solution
// pages (CLAUDE.md) requires the CRM 3-card grid layout instead, so these
// are written one-per-step of the How It Works flow (Welcome/Kick off/Track).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'New customers used to fall through the cracks in their first week. Now the welcome sequence just happens the moment a deal closes.',
    initials: 'JR',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Jordan R.',
    role: 'Head of Customer Success',
  },
  {
    quote: 'Customers book their own kickoff slot the same day they sign up — no more email chains just to find a time that works.',
    initials: 'PL',
    avatarBg: '#FEF6E7',
    avatarColor: '#B45309',
    name: 'Priya L.',
    role: 'Onboarding Manager',
  },
  {
    quote: 'Sales, support, and the customer all look at the same plan now — nobody is guessing where an account actually stands.',
    initials: 'DT',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Dani T.',
    role: 'Customer Success Lead',
  },
];

export default function CustomerOnboardingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="First impressions, handled"
          heading={
            <>
              Onboarding that feels like a{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                welcome,
              </span>{' '}
              not a checklist.
            </>
          }
          lede="New customers decide fast whether they made the right call. Give them a smooth first week — automatically — instead of a dozen disconnected emails and a forgotten kickoff call."
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
          heading="How Customer Onboarding Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What customer success teams say"
          heading="Onboarding that customers actually notice."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
