import type { Metadata } from 'next';
import { RefreshCcw, UsersRound, Share2, UserPlus, Eye, Bookmark, Users, Rss, Briefcase } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BusinessCardHero } from '@/components/business-card/BusinessCardHero';
import { BusinessCardFAQ } from '@/components/business-card/BusinessCardFAQ';
import { BusinessCardSteps } from '@/components/business-card/BusinessCardSteps';
import { BusinessCardFeatureRow } from '@/components/business-card/BusinessCardFeatureRow';
import { UpdateOnceVisual, AnalyticsVisual, TapShareCollageVisual } from '@/components/business-card/BusinessCardRowVisuals';
import { BusinessCardBentoGrid } from '@/components/business-card/BusinessCardBentoGrid';
import { BusinessCardFortune500 } from '@/components/business-card/BusinessCardFortune500';
import { AppLogoStrip } from '@/components/sections/AppLogoStrip';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Price } from '@/components/currency/Price';

export const metadata: Metadata = {
  title: 'Business Card — Your card updates the instant you do | Snaarp',
  description:
    'Change your title, number, or company and every card you’ve ever shared updates automatically — no reprinting, no handing out outdated info.',
};

const STACK_APPS = [
  { name: 'Snaarp Contacts', icon: { kind: 'img' as const, src: '/assets/icons/search.jpg' } },
  { name: 'Snaarp Mail', icon: { kind: 'img' as const, src: '/assets/icons/envelope.jpg' } },
  { name: 'Meet', icon: { kind: 'img' as const, src: '/assets/icons/apps-meet.jpg' } },
  { name: 'CRM', icon: { kind: 'lucide' as const, Icon: UsersRound } },
];

export default function BusinessCardProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <BusinessCardHero />

        <AppLogoStrip label="Works Across the Stack" apps={STACK_APPS} className="sec-alt-bg py-12 lg:py-16" />

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <img
            src="/assets/images/business-card-stats-bento.png"
            alt="£0 spent reprinting cards when your info changes. 1 tap to share your card, by link, QR, or NFC. Always up to date, everywhere you've shared it — scans and saves tracked in real time, 128+."
            className="w-full h-auto rounded-[1.5rem]"
          />
        </section>

        <BusinessCardSteps ctaLabel={<>Start for <Price amount={2} />/month</>} />

        <BusinessCardFeatureRow
          eyebrow="Always Current"
          headline="Stop reprinting business cards."
          subtext="A new title or number used to mean a box of outdated cardstock. Now it means updating one card that's already in everyone's pocket."
          align="stretch"
          items={[
            { icon: <RefreshCcw size={24} strokeWidth={1.5} />, title: 'Update once, everywhere.', desc: 'Change your info and every card you’ve ever shared reflects it — no reprint run.' },
            { icon: <Share2 size={24} strokeWidth={1.5} />, title: 'Share your way.', desc: 'Link, QR code, or NFC tap — whatever’s fastest in the moment.' },
            { icon: <UserPlus size={24} strokeWidth={1.5} />, title: 'Auto-saves to their Contacts.', desc: 'When someone scans or taps your card, your details land straight in their address book.' },
          ]}
          visual={<UpdateOnceVisual />}
        />

        <BusinessCardFeatureRow
          eyebrow="Know who's checking you out"
          headline="Card Analytics."
          subtext="Stop wondering what happens after you share your card. Get actionable insights into how your network interacts with your profile."
          reverse
          className="sec-alt-bg"
          items={[
            { icon: <Eye size={24} strokeWidth={1.5} />, title: 'Track every view.', desc: 'See exactly how many times your card has been viewed and track engagement spikes over time.' },
            { icon: <Bookmark size={24} strokeWidth={1.5} />, title: 'Monitor contact saves.', desc: 'Know instantly when someone saves your contact details directly to their address book.' },
            { icon: <Share2 size={24} strokeWidth={1.5} />, title: 'Measure forward sharing.', desc: 'See how often your connections are passing your card along to others in their network.' },
          ]}
          visual={<AnalyticsVisual />}
        />

        <BusinessCardFeatureRow
          eyebrow="Built for"
          headline="One card, every meeting."
          items={[
            { icon: <Users size={24} strokeWidth={1.5} />, title: 'Sales teams look sharp.', desc: 'A polished, always-current card for every rep, no design requests to marketing.' },
            { icon: <Rss size={24} strokeWidth={1.5} className="rotate-45" />, title: 'Conference and event regulars.', desc: 'Tap and share in seconds — no fumbling for cardstock in a crowded room.' },
            { icon: <Briefcase size={24} strokeWidth={1.5} />, title: 'Founders and freelancers.', desc: 'One professional card that grows with you, without a reprint every time something changes.' },
          ]}
          visual={<TapShareCollageVisual />}
        />

        <BusinessCardBentoGrid />

        <BusinessCardFortune500 />

        <BusinessCardFAQ />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
