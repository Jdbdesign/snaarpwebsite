import type { Metadata } from 'next';
import { BadgeCheck, PenLine } from 'lucide-react';
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
  SnippetAccessLogVisual,
  SnippetIdCardVisual,
  SnippetDpaVisual,
  StepControlAccessVisual,
  StepVerifyIdentityVisual,
  StepDocumentSignVisual,
  AccessControlVisual,
  ConsentRecordVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'GDPR & Data Privacy - Privacy controls built in, not bolted on | Snaarp',
  description:
    'EU data residency, consent management, and privacy controls built into every app in the Stack - designed for teams that take data protection seriously.',
};

// DELIBERATE: Lock icon (not check) + "Encrypted end-to-end" trust line.
// This page deliberately does NOT make any GDPR certification claims.
// Everything is framed as "built with privacy controls" and "designed for
// GDPR readiness" — privacy by design, not certification language.
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
    eyebrow: 'WE CONTROL ACCESS',
    title: (
      <>
        Who sees what, <span style={{ color: '#8B85A0', fontWeight: 500 }}>logged and enforced.</span>
      </>
    ),
    visual: <SnippetAccessLogVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE VERIFY IDENTITY',
    title: (
      <>
        Every login tied to <span style={{ color: '#8B85A0', fontWeight: 500 }}>a verified person.</span>
      </>
    ),
    visual: <SnippetIdCardVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE TRACK CONSENT',
    title: (
      <>
        Data processing agreements, <span style={{ color: '#8B85A0', fontWeight: 500 }}>signed and on record.</span>
      </>
    ),
    visual: <SnippetDpaVisual />,
    tilt: 'tiltRight',
  },
];

// ID Card does NOT have a product page — uses external:true and href '/'.
// Lock, eSignature, and Document DO have pages.
const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'Encrypted vault for credentials, keys, and sensitive access tokens.', href: '/products/lock', tint: 'violet', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' }, external: false },
  { name: 'ID Card', desc: 'Verified identity for every team member who touches personal data.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: BadgeCheck }, external: true },
  { name: 'eSignature', desc: 'Get DPAs and consent forms signed, tracked, and on record.', href: '/products/esignature', tint: 'amber', icon: { kind: 'lucide', Icon: PenLine }, external: false },
  { name: 'Document', desc: 'Write privacy policies and DPIAs collaboratively, version-controlled.', href: '/products/docs', tint: 'rose', icon: { kind: 'img', src: '/assets/icons/apps-document.png' }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Control access', desc: 'Lock down who can see what with role-based access, encrypted credentials, and a full audit log of every access event.', visual: <StepControlAccessVisual /> },
  { number: '02', title: 'Verify identity', desc: 'Every team member who handles personal data has a verified digital identity tied to their access \u2014 no shared logins, no ambiguity.', visual: <StepVerifyIdentityVisual /> },
  { number: '03', title: 'Document and sign', desc: 'Data Processing Agreements, privacy policies, and consent records are written in Document, signed in eSignature, and stored with full version history.', visual: <StepDocumentSignVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Access control',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every access point logged, every credential encrypted',
    desc: 'No shared passwords, no untracked access \u2014 every login ties back to a verified identity, with a full audit trail of who accessed what and when.',
    visual: <AccessControlVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Consent on record',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Data processing agreements that track themselves',
    desc: 'Send DPAs for signature, watch them get signed, and store every version \u2014 when an auditor asks, the answer is one click away.',
    visual: <ConsentRecordVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'When an auditor asked who accessed what and when, we pulled the full log in thirty seconds. That used to take us two days of digging.',
    initials: 'RK',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'R. Kapoor',
    role: 'Data Protection Officer',
  },
  {
    quote: 'Getting DPAs signed used to mean weeks of chasing. Now they are tracked end-to-end and we know the moment they are done.',
    initials: 'NS',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'N. Singh',
    role: 'Head of Compliance',
  },
  {
    quote: 'No more shared logins. Every access point ties back to a real person with a verified identity \u2014 exactly what the regulation asks for.',
    initials: 'LC',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'L. Chen',
    role: 'IT Security Lead',
  },
];

export default function GdprDataPrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for privacy-first teams"
          heading={
            <>
              Privacy controls built in, not{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                bolted on.
              </span>
            </>
          }
          lede="EU data residency, consent management, access controls, and audit logs built into every app in the Stack &mdash; so your team stays GDPR-ready without bolting a separate compliance tool onto every workflow."
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
          heading="How GDPR & Data Privacy Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What privacy-conscious teams say"
          heading="Privacy controls that work with you, not against you."
          testimonials={testimonials}
          todoNote="TODO \u2014 real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
