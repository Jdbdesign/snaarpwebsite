import type { Metadata } from 'next';
import { Lock, BadgeCheck, Users, PenLine } from 'lucide-react';
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
  SnippetVaultVisual,
  SnippetBadgeVisual,
  SnippetCrmClientVisual,
  StepVerifyVisual,
  StepCrmTrackVisual,
  StepEsignatureVisual,
  VerifiedAccessVisual,
  ClientRecordVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Financial Services — Handle client money with care | Snaarp',
  description:
    'Secure access, verified identity, and client relationships that stay organized — built for firms where a client\u2019s trust is the whole business.',
};

// DELIBERATE: Lock icon (not check) + "Encrypted end-to-end" trust line.
// This page deliberately does NOT use the standard "GDPR compliant" trust line
// or any financial-regulation/certification language. See compliance-language
// caution in the standalone design bundle's banner comment.
const LOCK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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
    eyebrow: 'WE KEEP IT CONTROLLED',
    title: (
      <>
        Sensitive client data, <span style={{ color: '#8B85A0', fontWeight: 500 }}>locked down by default.</span>
      </>
    ),
    visual: <SnippetVaultVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: "WE VERIFY WHO'S ACCESSING WHAT",
    title: (
      <>
        Every login tied to <span style={{ color: '#8B85A0', fontWeight: 500 }}>a verified identity.</span>
      </>
    ),
    visual: <SnippetBadgeVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE KEEP CLIENTS ORGANIZED',
    title: (
      <>
        Every client relationship, <span style={{ color: '#8B85A0', fontWeight: 500 }}>one record.</span>
      </>
    ),
    visual: <SnippetCrmClientVisual />,
    tilt: 'tiltRight',
  },
];

// All 4 apps have real product pages. Digital ID Card does NOT have a dedicated
// route (/products/digital-id-card doesn't exist) — uses external:true.
// CRM → /products/crm (real), eSignature → /products/esignature (real),
// Lock → /products/lock (real).
const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'A secure, encrypted vault for shared credentials and access.', href: '/products/lock', tint: 'violet', icon: { kind: 'lucide', Icon: Lock }, external: false },
  { name: 'Digital ID Card', desc: 'Verified staff identity for every login and access point.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: BadgeCheck }, external: true },
  { name: 'CRM', desc: 'Track every client relationship, from first meeting to renewal.', href: '/products/crm', tint: 'amber', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'eSignature', desc: 'Get agreements and disclosures signed, tracked, and on record.', href: '/products/esignature', tint: 'rose', icon: { kind: 'lucide', Icon: PenLine }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Verify', desc: "Every staff member\u2019s identity is verified before they can access anything sensitive.", visual: <StepVerifyVisual /> },
  { number: '02', title: 'Track the relationship', desc: "Every client relationship \u2014 meetings, notes, portfolio details \u2014 lives in one record, not scattered across inboxes.", visual: <StepCrmTrackVisual /> },
  { number: '03', title: 'Get it on record', desc: "Agreements and disclosures go out through eSignature, tracked to a completed, on-record signature.", visual: <StepEsignatureVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Verified access',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Access, verified every time',
    desc: "No shared logins, no guessing who accessed what \u2014 every access point ties back to a verified identity, with a full log.",
    visual: <VerifiedAccessVisual />,
    mockSide: 'right',
  },
  {
    tag: 'One record',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every client relationship, actually organized',
    desc: "See a client\u2019s full history in one place \u2014 no more piecing it together from old emails before a call.",
    visual: <ClientRecordVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "Clients trust us with a lot. Being able to show exactly who accessed what, and when, made that conversation a lot easier.",
    initials: 'MH',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'M. Halvorsen',
    role: 'Managing Partner',
  },
  {
    quote: "We stopped using shared logins the week Lock came in. Now every access ties back to an actual person \u2014 exactly what our compliance team needed.",
    initials: 'RL',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'R. Liu',
    role: 'Head of Operations',
  },
  {
    quote: "Getting disclosures signed used to take days of chasing. Now it\u2019s tracked end-to-end and we know the moment it\u2019s done.",
    initials: 'DA',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'D. Ashford',
    role: 'Client Adviser',
  },
];

export default function FinancialServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for client trust"
          heading={
            <>
              Handle client money with{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                care.
              </span>
            </>
          }
          lede="Secure access, verified identity, and client relationships that don't live in three different spreadsheets. Built for firms where a client's trust is the whole business."
          ctas={heroCtas}
          trustIcon={LOCK_ICON}
          trustText="Encrypted end-to-end · No credit card required"
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
          heading="How Financial Services Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What financial teams say"
          heading="Access control that actually works in practice."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
