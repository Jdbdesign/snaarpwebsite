import type { Metadata } from 'next';
import { Users, Calendar, FileText, PenLine } from 'lucide-react';
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
  SnippetCrmClientVisual,
  SnippetKalenderViewingVisual,
  SnippetEsignatureVisual,
  StepCrmContactVisual,
  StepKalenderBookingVisual,
  StepEsignatureOfferVisual,
  PipelineBoardVisual,
  DocumentSignedVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Real Estate — Clients, contracts, and keys in one place | Snaarp',
  description:
    'CRM, scheduling, documents, and e-signatures working together so you can close deals without juggling tools.',
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
    eyebrow: 'WE TRACK EVERY CLIENT',
    title: (
      <>
        Buyers, sellers, and properties <span style={{ color: '#8B85A0', fontWeight: 500 }}>linked in one view.</span>
      </>
    ),
    visual: <SnippetCrmClientVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE BOOK VIEWINGS FAST',
    title: (
      <>
        Clients pick a slot, <span style={{ color: '#8B85A0', fontWeight: 500 }}>you skip the phone tag.</span>
      </>
    ),
    visual: <SnippetKalenderViewingVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE CLOSE DEALS CLEANLY',
    title: (
      <>
        Contracts signed digitally, <span style={{ color: '#8B85A0', fontWeight: 500 }}>no printing required.</span>
      </>
    ),
    visual: <SnippetEsignatureVisual />,
    tilt: 'tiltRight',
  },
];

// All 4 apps have real product pages — external: false for all.
// Document uses /products/docs (corrected from standalone's /products/document).
const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track buyers, sellers, and property interests in one place.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'Kalender', desc: 'Let clients book viewings without the back-and-forth.', href: '/products/kalender', tint: 'rose', icon: { kind: 'lucide', Icon: Calendar }, external: false },
  { name: 'Document', desc: 'Store, share, and manage contracts and tenancy agreements.', href: '/products/docs', tint: 'amber', icon: { kind: 'lucide', Icon: FileText }, external: false },
  { name: 'eSignature', desc: 'Get offers and contracts signed without printing a thing.', href: '/products/esignature', tint: 'teal', icon: { kind: 'lucide', Icon: PenLine }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Capture the lead', desc: 'Add new contacts with property interests and budgets — every detail in one record, ready to act on.', visual: <StepCrmContactVisual /> },
  { number: '02', title: 'Book the viewing', desc: 'Clients pick a time that works for them. You see the full schedule without a single phone call.', visual: <StepKalenderBookingVisual /> },
  { number: '03', title: 'Sign and close', desc: 'Send the offer letter or tenancy agreement for signature — track it from sent to signed in real time.', visual: <StepEsignatureOfferVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Pipeline view',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every deal, at a glance',
    desc: 'See which properties are at viewing, offer, or closed stage — drag deals forward as they progress, with every client and property linked.',
    visual: <PipelineBoardVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Paperwork sorted',
    tagColor: '#B45309',
    tagBg: '#FEF6E7',
    tagBorder: '#FBEBC6',
    heading: 'Contracts that track themselves',
    desc: "Send agreements, watch them get viewed and signed, and never chase a client asking \u201Cdid you get that?\u201D again.",
    visual: <DocumentSignedVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "I used to lose track of which buyer wanted which property. Now it\u2019s all in one place and I can actually focus on selling.",
    initials: 'MR',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Maya Rivera',
    role: 'Estate Agent',
  },
  {
    quote: "Viewings used to mean 20 minutes of phone tag. Now clients just pick a slot and show up \u2014 we\u2019ve doubled our weekly bookings.",
    initials: 'JC',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'James Chen',
    role: 'Lettings Manager',
  },
  {
    quote: "Getting contracts signed used to take days of chasing. Now it\u2019s done before the client leaves the viewing.",
    initials: 'SO',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Sarah Obi',
    role: 'Branch Director',
  },
];

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for property teams"
          heading={
            <>
              Clients, contracts, and keys in one{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                place.
              </span>
            </>
          }
          lede="CRM, scheduling, documents, and e-signatures working together — so you can manage clients, book viewings, and close deals without juggling a dozen tools."
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
          heading="How Real Estate Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What property teams say"
          heading="Close deals faster, with less admin."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
