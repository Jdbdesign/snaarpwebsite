import type { Metadata } from 'next';
import { Lock, BadgeCheck, FileText, Calendar } from 'lucide-react';
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
  SnippetKalenderVisual,
  StepVerifyVisual,
  StepControlAccessVisual,
  StepScheduleShareVisual,
  VerifiedAccessVisual,
  BookingWidgetVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Healthcare — Patient records, handled with care | Snaarp',
  description:
    'Secure access, verified identity, and controlled sharing — built for teams handling sensitive information every day.',
};

// DELIBERATE: Lock icon (not check) + "Encrypted end-to-end" trust line.
// This page deliberately does NOT use the standard "GDPR compliant" trust line
// or any HIPAA/certification language. See compliance-language caution in standalone.
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
        Sensitive records, <span style={{ color: '#8B85A0', fontWeight: 500 }}>locked down by default.</span>
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
    eyebrow: 'WE KEEP APPOINTMENTS MOVING',
    title: (
      <>
        Patients book their own time, <span style={{ color: '#8B85A0', fontWeight: 500 }}>without a phone tag.</span>
      </>
    ),
    visual: <SnippetKalenderVisual />,
    tilt: 'tiltRight',
  },
];

// Lock and Kalender have real product pages. Digital ID Card does NOT have a
// dedicated route (/products/digital-id-card doesn't exist) — uses external:true.
// Document uses /products/docs (real route, not /products/document from standalone).
const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'A secure, encrypted vault for shared credentials and access.', href: '/products/lock', tint: 'violet', icon: { kind: 'lucide', Icon: Lock }, external: false },
  { name: 'Digital ID Card', desc: 'Verified staff identity for every login and access point.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: BadgeCheck }, external: true },
  { name: 'Document', desc: 'Controlled, permissioned access to shared records.', href: '/products/docs', tint: 'amber', icon: { kind: 'lucide', Icon: FileText }, external: false },
  { name: 'Kalender', desc: 'Patient scheduling without the phone tag.', href: '/products/kalender', tint: 'rose', icon: { kind: 'lucide', Icon: Calendar }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Verify', desc: "Every staff member\u2019s identity is verified before they can access anything sensitive.", visual: <StepVerifyVisual /> },
  { number: '02', title: 'Control access', desc: 'Credentials and shared access stay locked down, with a full log of who accessed what, and when.', visual: <StepControlAccessVisual /> },
  { number: '03', title: 'Schedule & share', desc: 'Patients book their own appointments, and staff share records with exactly the right level of access \u2014 no more, no less.', visual: <StepScheduleShareVisual /> },
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
    tag: 'Self-serve',
    tagColor: '#B4356B',
    tagBg: '#FEF0F4',
    tagBorder: '#F7D3DD',
    heading: "Scheduling that doesn\u2019t need a phone call",
    desc: "Patients book directly, staff see the full schedule in one view, and nobody\u2019s playing phone tag to confirm an appointment.",
    visual: <BookingWidgetVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "Being able to see exactly who accessed a record and when gave us real peace of mind \u2014 not just a checkbox.",
    initials: 'AO',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Dr. A. Okafor',
    role: 'Practice Manager',
  },
  {
    quote: "We stopped using shared logins the week Lock came in. Now every access ties back to an actual person \u2014 exactly what we needed.",
    initials: 'NP',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'N. Patel',
    role: 'Head of IT',
  },
  {
    quote: "Patients love booking their own slots. We\u2019ve cut no-shows by a third since we switched to Kalender links.",
    initials: 'JR',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'J. Reyes',
    role: 'Reception Lead',
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for patient-facing teams"
          heading={
            <>
              Patient records, handled with{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                care.
              </span>
            </>
          }
          lede="Secure access, verified identity, and controlled sharing — built for teams handling sensitive information every day. Scheduling and records that stay easy to use without cutting corners on access control."
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
          heading="How Healthcare Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What care teams say"
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
