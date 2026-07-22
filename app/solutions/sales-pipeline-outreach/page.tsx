import type { Metadata } from 'next';
import { UsersRound, Zap, PenLine } from 'lucide-react';
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
  SnippetPipelineVisual,
  SnippetOutreachVisual,
  SnippetSignedVisual,
  StepFindVisual,
  StepEngageVisual,
  StepCloseVisual,
  PipelineBoardVisual,
  SignatureRequestVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Sales Pipeline & Outreach — A sales pipeline that works like a closer | Snaarp',
  description:
    'Great sales teams deserve a system that does it all — from finding the right leads to getting the contract signed, without switching apps in between.',
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
        Drag a deal forward. <span style={{ color: '#8B85A0', fontWeight: 500 }}>That&apos;s it.</span>
      </>
    ),
    visual: <SnippetPipelineVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE LISTEN TO YOU',
    title: (
      <>
        Personalized outreach, <span style={{ color: '#8B85A0', fontWeight: 500 }}>sent automatically.</span>
      </>
    ),
    visual: <SnippetOutreachVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE GIVE YOU RESULTS',
    title: (
      <>
        Watch deals close, <span style={{ color: '#8B85A0', fontWeight: 500 }}>not stall.</span>
      </>
    ),
    visual: <SnippetSignedVisual />,
    tilt: 'tiltRight',
  },
];

// Zeus and Sendrit have no dedicated product page yet, so their chips link
// to the homepage rather than a dead /products route or anchor — see the
// migration decision recorded in the PR description.
//
// Icons mirror the ones already assigned in the Products mega menu
// (components/ProductsMegaMenu.tsx) — Sendrit has a real shipped logo,
// the rest use Lucide placeholders until matching marks exist.
const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track every deal from first contact to close.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: UsersRound }, external: false },
  { name: 'Zeus', desc: 'Find and qualify new prospects automatically.', href: '/', tint: 'amber', icon: { kind: 'lucide', Icon: Zap }, external: true },
  { name: 'Sendrit', desc: 'Send outbound sequences that land in the inbox.', href: '/', tint: 'teal', icon: { kind: 'img', src: '/assets/icons/apps-sendrit.jpg' }, external: true },
  { name: 'eSignature', desc: 'Get contracts signed without leaving the deal.', href: '/products/esignature', tint: 'rose', icon: { kind: 'lucide', Icon: PenLine }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Find', desc: 'Zeus finds new prospects that match your ideal customer profile, automatically.', visual: <StepFindVisual /> },
  { number: '02', title: 'Engage', desc: 'Sendrit sends personalized sequences and tells you the moment someone replies.', visual: <StepEngageVisual /> },
  { number: '03', title: 'Close', desc: 'CRM tracks the deal, eSignature gets it signed — no handoff, no lost context.', visual: <StepCloseVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Pipeline',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Never lose a lead to a messy inbox',
    desc: 'Every prospect, every email, every reply — tracked automatically against the right deal. Nothing falls through email.',
    visual: <PipelineBoardVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Close',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'From first email to signed contract, in one flow',
    desc: "Send the contract the moment a deal's ready, and see it get signed without leaving the pipeline view.",
    visual: <SignatureRequestVisual />,
    mockSide: 'left',
  },
];

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders, following the same disclosure pattern as
// components/crm/CrmTestimonials.tsx.
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "We've scaled to hundreds of new deals a month — the pipeline is the only thing that keeps us sane.",
    initials: 'RM',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Rowan M.',
    role: 'Head of Sales',
  },
  {
    quote: 'Zeus finds the prospects, Sendrit reaches out, and I only see a deal once someone actually replies.',
    initials: 'SB',
    avatarBg: '#FEF6E7',
    avatarColor: '#B45309',
    name: 'Sam B.',
    role: 'SDR Team Lead',
  },
  {
    quote: 'No more chasing signatures over email — the contract goes out and comes back signed without leaving the deal.',
    initials: 'NK',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Nadia K.',
    role: 'Revenue Operations',
  },
];

export default function SalesPipelineOutreachPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="New way to sell"
          heading={
            <>
              A sales pipeline that works like a{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                closer.
              </span>
            </>
          }
          lede="Great sales teams deserve a system that does it all — from finding the right leads to getting the contract signed, without switching apps in between."
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
          heading="How Sales Pipeline & Outreach Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What sales teams say"
          heading="A pipeline the whole team actually uses."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
