import { RevealSection } from '@/components/reveal/RevealSection';
import {
  Video,
  ScreenShare,
  LayoutGrid,
  FileText,
  Captions,
  BarChart3,
  CircleDot,
  Image as ImageIcon,
  Calendar,
} from 'lucide-react';

const FEATURES = [
  {
    Icon: Video,
    title: 'HD Video & Audio',
    desc: 'Up to 1080p with AI-powered noise cancellation. Studio-quality, even from a noisy café.',
  },
  {
    Icon: ScreenShare,
    title: 'Screen Sharing',
    desc: 'Share your full screen, a single app window, or a browser tab. Instant, no lag.',
  },
  {
    Icon: LayoutGrid,
    title: 'Breakout Rooms',
    desc: 'Split your team into focused sub-groups with one click. Bring them back just as fast.',
  },
  {
    Icon: FileText,
    title: 'AI Meeting Notes',
    desc: 'Snaarpmeet summarises and sends a structured recap — action items, decisions, key quotes.',
  },
  {
    Icon: Captions,
    title: 'Live Captions',
    desc: 'Real-time subtitles in 40+ languages. Everyone follows along, no matter the accent.',
  },
  {
    Icon: BarChart3,
    title: 'Polls & Reactions',
    desc: 'Keep energy high. Run instant polls, hand raises, and emoji reactions without leaving the call.',
  },
  {
    Icon: CircleDot,
    title: 'Meeting Recording',
    desc: 'Record to the cloud or download locally. Auto-chapters and searchable transcripts included.',
  },
  {
    Icon: ImageIcon,
    title: 'Custom Backgrounds',
    desc: 'Upload your own, blur the mess behind you, or pick from our curated library.',
  },
  {
    Icon: Calendar,
    title: 'Calendar Integration',
    desc: 'One-click scheduling from Google Calendar or Outlook. Links auto-generated and attached.',
  },
] as const;

export function MeetFeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-12">
          <p className="meet-features-eyebrow" data-reveal data-reveal-group="meet-features-top">Features</p>
          <h2 className="meet-features-heading" data-reveal data-reveal-group="meet-features-top">
            Every tool your meeting <span className="meet-features-heading-accent">deserves.</span>
          </h2>
        </div>

        <div className="meet-features-grid">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="meet-features-card"
              data-reveal
              data-reveal-group="meet-features-grid"
              data-reveal-batch="meet-features-grid-cells"
            >
              <span className="meet-features-icon" aria-hidden="true">
                <item.Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="meet-features-title">{item.title}</h3>
              <p className="meet-features-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
