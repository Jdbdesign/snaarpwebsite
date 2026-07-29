import type { Metadata } from 'next';
import { Fingerprint, ShieldCheck } from 'lucide-react';
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
  SnippetDeviceVerifyVisual,
  SnippetMfaChallengeVisual,
  SnippetSessionRevokeVisual,
  StepVerifyIdentityVisual,
  StepValidateDeviceVisual,
  StepMonitorRespondVisual,
  ContinuousVerificationVisual,
  LeastPrivilegeVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Zero Trust Access Control - Never trust, always verify | Snaarp',
  description:
    'Every login, device, and file access verified every time. Role-based permissions, device trust, and real-time threat response built into the Stack.',
};

// Lock icon + "Encrypted end-to-end" trust line (same pattern as GDPR page)
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
    eyebrow: 'WE VERIFY DEVICES',
    title: (
      <>
        Every device checked <span style={{ color: '#8B85A0', fontWeight: 500 }}>before access is granted.</span>
      </>
    ),
    visual: <SnippetDeviceVerifyVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE CHALLENGE IDENTITY',
    title: (
      <>
        Multi-factor, every time <span style={{ color: '#8B85A0', fontWeight: 500 }}>no exceptions.</span>
      </>
    ),
    visual: <SnippetMfaChallengeVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE REVOKE INSTANTLY',
    title: (
      <>
        Suspicious session? <span style={{ color: '#8B85A0', fontWeight: 500 }}>Killed in one click.</span>
      </>
    ),
    visual: <SnippetSessionRevokeVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'Encrypted credential vault with MFA enforcement and session control.', href: '/products/lock', tint: 'violet', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' }, external: false },
  { name: 'ID Card', desc: 'Verified digital identity tied to every device and login event.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: Fingerprint }, external: true },
  { name: 'Teams', desc: 'Role-based access and permission groups managed in one place.', href: '/products/teams', tint: 'amber', icon: { kind: 'lucide', Icon: ShieldCheck }, external: false },
  { name: 'Meet', desc: 'Secure meeting rooms with identity-verified entry and recording controls.', href: '/products/meet', tint: 'rose', icon: { kind: 'img', src: '/assets/icons/apps-meet.jpg' }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Verify every identity', desc: 'Every login requires biometric confirmation, a time-based MFA token, and device posture validation before access is granted.', visual: <StepVerifyIdentityVisual /> },
  { number: '02', title: 'Validate every device', desc: 'Only devices with encrypted disks, patched operating systems, and active firewalls pass the trust check. Unrecognized hardware is blocked instantly.', visual: <StepValidateDeviceVisual /> },
  { number: '03', title: 'Monitor and respond', desc: 'Unusual login patterns trigger automatic session revocation and step-up authentication. Admins are notified in real time with full context.', visual: <StepMonitorRespondVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Continuous verification',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Trust is earned on every request, not granted at login',
    desc: 'Sessions are re-evaluated continuously. A change in location, device posture, or behavior triggers step-up verification automatically, not just at the front door.',
    visual: <ContinuousVerificationVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Least privilege',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Every role gets exactly what it needs, nothing more',
    desc: 'Permissions are scoped to the minimum required for each role. Time-limited access, read-only defaults, and full audit trails ensure no one accumulates unnecessary reach.',
    visual: <LeastPrivilegeVisual />,
    mockSide: 'left',
  },
];

const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'We stopped worrying about stolen credentials the day we turned on device trust. Even if a password leaks, nothing happens without the verified device.',
    initials: 'AO',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'A. Okafor',
    role: 'Head of IT Security',
  },
  {
    quote: 'The automatic session kill when someone logs in from a new location saved us from a phishing attempt. We got the alert before the attacker got anywhere.',
    initials: 'MT',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'M. Torres',
    role: 'Security Engineer',
  },
  {
    quote: 'Role-based access cut our permission requests by 80%. Everyone gets exactly what they need on day one, no more access creep over time.',
    initials: 'JW',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'J. Williams',
    role: 'Compliance Manager',
  },
];

export default function ZeroTrustAccessControlPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for zero-trust teams"
          heading={
            <>
              Never trust, always{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                verify.
              </span>
            </>
          }
          lede="Every login, device, and file access is verified every single time. Role-based permissions, device posture checks, and real-time threat response built into every app in the Stack."
          ctas={heroCtas}
          trustIcon={LOCK_ICON}
          trustText="Encrypted end-to-end &middot; No credit card required"
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
          heading="How Zero Trust Access Control Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What security-first teams say"
          heading="Access control that protects without slowing you down."
          testimonials={testimonials}
          todoNote="TODO - real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
