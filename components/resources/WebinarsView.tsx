'use client';

import React, { useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  Clock,
  Layers,
  Mail,
  Play,
  PlayCircle,
  Radio,
  Search,
  User,
  Users,
  X,
  Zap,
} from 'lucide-react';
import {
  NeverMissSessionCalendarGraphic,
} from './MockupArtwork';

interface WebinarCardData {
  id: string;
  status: 'Upcoming Live' | 'On-Demand';
  badgeText: 'LIVE CLINIC' | 'ON-DEMAND';
  badgeIcon: 'calendar' | 'zap' | 'play';
  category: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  timeIcon: 'clock' | 'play';
  host: string;
  hostIcon: 'user' | 'users';
  attendeeLabel: string;
  attendeeIcon: 'users' | 'user-box' | 'play-box';
  image: string;
  highlights: string[];
  duration: string;
  ctaLabel: 'Reserve Seat' | 'Watch Replay';
}

const WEBINAR_CARDS: WebinarCardData[] = [
  {
    id: 'webinar-stack-audit',
    status: 'Upcoming Live',
    badgeText: 'LIVE CLINIC',
    badgeIcon: 'calendar',
    category: 'PLATFORM ARCHITECTURE & ROI',
    title: 'Live Clinic: Consolidating 15 Business Apps into One Fixed Team Plan',
    dateLabel: 'Thu, 03 Dec 2026',
    timeLabel: '2:00 PM WAT / 9:00 AM EST',
    timeIcon: 'clock',
    host: 'Amara Okafor',
    hostIcon: 'user',
    attendeeLabel: '340 registered',
    attendeeIcon: 'users',
    image: '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
    highlights: [
      'Live breakdown of hidden per-seat SaaS fees',
      '14-day zero-downtime migration checklist',
      'Interactive Q&A with Snaarp migration engineers',
    ],
    duration: '45 mins + Q&A',
    ctaLabel: 'Reserve Seat',
  },
  {
    id: 'webinar-outbound-engine',
    status: 'Upcoming Live',
    badgeText: 'LIVE CLINIC',
    badgeIcon: 'zap',
    category: 'SALES & OUTBOUND',
    title: 'Building a High-Deliverability Outbound Engine with Zeus Contacts & VerifyKit',
    dateLabel: 'Wed, 09 Dec 2026',
    timeLabel: '3:00 PM WAT / 10:00 AM EST',
    timeIcon: 'clock',
    host: 'Emma Rodriguez',
    hostIcon: 'user',
    attendeeLabel: '216 registered',
    attendeeIcon: 'user-box',
    image: '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
    highlights: [
      'List hygiene benchmarks with VerifyKit',
      'Sequencing best practices in Zeus Contacts',
      'Connecting Snaarp Me scheduling links to CRM stages',
    ],
    duration: '40 mins',
    ctaLabel: 'Reserve Seat',
  },
  {
    id: 'webinar-finance-ops',
    status: 'On-Demand',
    badgeText: 'ON-DEMAND',
    badgeIcon: 'play',
    category: 'FINANCE & ACCOUNTING',
    title: 'On-Demand: Deal-to-Invoice Automation with Snaarp CRM & Snaarp Books',
    dateLabel: 'Recorded Nov 2026',
    timeLabel: 'Watch anytime',
    timeIcon: 'play',
    host: 'Tunde Adeyemi',
    hostIcon: 'user',
    attendeeLabel: '1,180 views',
    attendeeIcon: 'play-box',
    image: '/assets/resources/images/customer_team_collab_1795231338317.jpg',
    highlights: [
      'Configuring automated Won-stage invoice rules',
      'Managing NGN and USD client ledgers in one view',
      'Syncing expense receipts to Snaarp Drive',
    ],
    duration: '32 mins',
    ctaLabel: 'Watch Replay',
  },
  {
    id: 'webinar-security-lock',
    status: 'On-Demand',
    badgeText: 'ON-DEMAND',
    badgeIcon: 'play',
    category: 'SECURITY & IT',
    title: 'On-Demand: Zero-Trust Passwords & Instant Offboarding with Snaarp Lock',
    dateLabel: 'Recorded Oct 2026',
    timeLabel: 'Watch anytime',
    timeIcon: 'play',
    host: 'David Lindqvist',
    hostIcon: 'users',
    attendeeLabel: '890 views',
    attendeeIcon: 'users',
    image: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
    highlights: [
      'Setting up department vaults in 15 minutes',
      'One-click employee offboarding across Workforce & Lock',
      'Rolling out verified digital IDs and email signatures',
    ],
    duration: '28 mins',
    ctaLabel: 'Watch Replay',
  },
];

export const WebinarsView: React.FC = () => {
  const [filter, setFilter] = useState<'All Sessions' | 'Upcoming Live' | 'On-Demand'>(
    'All Sessions'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeWebinar, setActiveWebinar] = useState<WebinarCardData | null>(null);
  const [registeredIds, setRegisteredIds] = useState<Record<string, boolean>>({});
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const gridRef = useRef<HTMLDivElement | null>(null);

  const filteredSessions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return WEBINAR_CARDS.filter((session) => {
      const statusMatch =
        filter === 'All Sessions' ? true : session.status === filter;
      const queryMatch =
        !q ||
        session.title.toLowerCase().includes(q) ||
        session.category.toLowerCase().includes(q) ||
        session.host.toLowerCase().includes(q) ||
        session.highlights.some((h) => h.toLowerCase().includes(q));
      return statusMatch && queryMatch;
    });
  }, [filter, searchQuery]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !workEmail.includes('@')) {
      setFormError('Please enter your full name and a valid work email.');
      return;
    }
    if (activeWebinar) {
      setRegisteredIds((prev) => ({ ...prev, [activeWebinar.id]: true }));
      setFormError('');
    }
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail.trim() || !notifyEmail.includes('@')) return;
    setNotifySuccess(true);
    setNotifyEmail('');
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] pb-14 text-[#110D2B]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-10 pt-10 lg:pb-12 lg:pt-12">
        {/* Unified Hero Background: Lavender Live Streaming Laptop Banner */}
        <img
          src="/assets/resources/images/lavender_live_streaming_laptop_banner.png"
          alt="Webinars & Live Clinics"
          role="presentation"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Adaptive contrast overlay for mobile and tablet readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent xl:hidden"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                WEBINARS & LIVE CLINICS
              </p>
              <h1 className="mt-2.5 text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] xl:text-[68px] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#110D2B]">
                Workshops & On-Demand
                <br />
                <span className="text-[#7C3AED]">Masterclasses</span>
              </h1>
              <p className="mt-3.5 max-w-[500px] text-[15px] sm:text-[16.5px] lg:text-[18px] leading-[1.55] text-[#555070]">
                Join live implementation clinics with Snaarp platform architects or stream recorded walkthroughs at your own pace.
              </p>

              {/* Dual Hero Pill Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => {
                    setFilter('All Sessions');
                    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2D0E6D] via-[#4C1D95] to-[#5B21B6] px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(76,29,149,0.55)] hover:opacity-95 transition-opacity cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                  <span>Explore Webinars</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFilter('On-Demand');
                    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E4DDF7] bg-white px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#110D2B] shadow-xs hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors cursor-pointer"
                >
                  <PlayCircle className="h-4 w-4 text-[#110D2B]" />
                  <span>Watch On-Demand</span>
                </button>
              </div>
            </div>

            {/* Right column spacer allowing the banner artwork to shine through */}
            <div className="hidden lg:block lg:col-span-6 min-h-[380px] lg:min-h-[420px] xl:min-h-[480px]" />
          </div>

          {/* 4-COLUMN VALUE PROPOSITION BAR */}
          <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-[#ECE6FA] bg-white/95 px-6 py-5 shadow-[0_14px_34px_-12px_rgba(30,27,75,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Calendar,
              title: 'Live & On-Demand',
              subtitle: 'Choose what fits your schedule',
            },
            {
              icon: Layers,
              title: 'Expert-led Sessions',
              subtitle: 'Learn from Snaarp specialists',
            },
            {
              icon: Zap,
              title: 'Practical, Hands-on',
              subtitle: 'Real use cases & implementation',
            },
            {
              icon: Award,
              title: 'Get Results Faster',
              subtitle: 'Turn insights into action',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'lg:border-l lg:border-[#F0ECFA] lg:pl-5' : ''
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F0FF] text-[#7C3AED]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-[15px] font-bold text-[#110D2B]">
                    {item.title}
                  </div>
                  <div className="text-xs sm:text-[12.5px] text-[#6B6685]">{item.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* MAIN CONTENT AREA */}
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-8">
      {/* FILTER TABS & SEARCH BAR */}
        <div
          ref={gridRef}
          className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setFilter('All Sessions')}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                filter === 'All Sessions'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_10px_22px_-6px_rgba(124,58,237,0.55)]'
                  : 'border border-[#E5DFF6] bg-white text-[#110D2B] hover:border-[#7C3AED]'
              }`}
            >
              All Sessions
            </button>

            <button
              type="button"
              onClick={() => setFilter('Upcoming Live')}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                filter === 'Upcoming Live'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_10px_22px_-6px_rgba(124,58,237,0.55)]'
                  : 'border border-[#E5DFF6] bg-white text-[#110D2B] hover:border-[#7C3AED]'
              }`}
            >
              <Radio
                className={`h-3.5 w-3.5 ${
                  filter === 'Upcoming Live' ? 'text-white' : 'text-[#7C3AED]'
                }`}
              />
              <span>Upcoming Live</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('On-Demand')}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                filter === 'On-Demand'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_10px_22px_-6px_rgba(124,58,237,0.55)]'
                  : 'border border-[#E5DFF6] bg-white text-[#110D2B] hover:border-[#7C3AED]'
              }`}
            >
              <PlayCircle
                className={`h-3.5 w-3.5 ${
                  filter === 'On-Demand' ? 'text-white' : 'text-[#7C3AED]'
                }`}
              />
              <span>On-Demand</span>
            </button>
          </div>

          <div className="flex items-center rounded-full border border-[#E5DFF6] bg-white px-4 py-2 shadow-xs sm:w-80 focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-[#7C3AED]/20 transition-all">
            <Search className="h-4 w-4 text-slate-400 shrink-0" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search webinars, topics, or speakers..."
              aria-label="Search webinars, topics, or speakers"
              className="ml-2.5 w-full bg-transparent text-xs sm:text-sm font-medium text-[#110D2B] placeholder:text-[#8E89A6] border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
              style={{ outline: 'none' }}
            />
          </div>
        </div>

        {/* 2x2 WEBINAR CARDS GRID */}
        {filteredSessions.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-[#ECE6FA] bg-white p-10 text-center">
            <p className="text-sm font-semibold text-[#110D2B]">
              No sessions match "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('All Sessions');
                setSearchQuery('');
              }}
              className="mt-2 text-xs font-bold text-[#7C3AED] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredSessions.map((session) => {
              const isRegistered = Boolean(registeredIds[session.id]);
              return (
                <article
                  key={session.id}
                  className="group grid grid-cols-1 gap-5 rounded-3xl border border-[#ECE6FA] bg-white p-4 shadow-[0_12px_30px_-14px_rgba(30,27,75,0.08)] transition-all hover:border-[#C4B5FD] hover:shadow-lg sm:grid-cols-12 sm:p-5"
                >
                  {/* Left Image Container with Top-Left Pill & Bottom-Left Badge */}
                  <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 sm:col-span-5">
                    <img
                      src={session.image}
                      alt={session.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/20"
                    />

                    {/* Top-Left Status Badge */}
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-3.5 py-1 text-[11px] font-bold tracking-wider text-white shadow-md uppercase">
                      {session.badgeIcon === 'calendar' && (
                        <Calendar className="h-3 w-3" />
                      )}
                      {session.badgeIcon === 'zap' && (
                        <Zap className="h-3 w-3 fill-white" />
                      )}
                      {session.badgeIcon === 'play' && (
                        <Play className="h-2.5 w-2.5 fill-white" />
                      )}
                      <span>{session.badgeText}</span>
                    </div>

                    {/* Bottom-Left Attendee / Views Badge */}
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-xs tabular-nums">
                      {session.attendeeIcon === 'users' && (
                        <Users className="h-3.5 w-3.5 text-slate-200" />
                      )}
                      {session.attendeeIcon === 'user-box' && (
                        <User className="h-3.5 w-3.5 text-slate-200" />
                      )}
                      {session.attendeeIcon === 'play-box' && (
                        <PlayCircle className="h-3.5 w-3.5 text-slate-200" />
                      )}
                      <span>{session.attendeeLabel}</span>
                    </div>
                  </div>

                  {/* Right Content Column */}
                  <div className="flex flex-col justify-between sm:col-span-7">
                    <div>
                      <p className="text-xs font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                        {session.category}
                      </p>
                      <h2 className="mt-1.5 text-base sm:text-[18px] font-extrabold leading-snug text-[#110D2B]">
                        {session.title}
                      </h2>

                      {/* 3 Metadata Rows */}
                      <div className="mt-3 space-y-1.5 text-xs sm:text-[13px] text-[#4E4A67]">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                          <span>{session.dateLabel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {session.timeIcon === 'clock' ? (
                            <Clock className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                          ) : (
                            <PlayCircle className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                          )}
                          <span>{session.timeLabel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {session.hostIcon === 'user' ? (
                            <User className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                          ) : (
                            <Users className="h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                          )}
                          <span>{session.host}</span>
                        </div>
                      </div>

                      {/* 3 Checkmark Highlights */}
                      <ul className="mt-3.5 space-y-1.5 border-t border-[#F1EFF8] pt-3 text-xs sm:text-[12.5px] text-[#4E4A67]">
                        {session.highlights.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer: Duration & Action Pill */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#F1EFF8] pt-3">
                      <span className="text-xs font-medium text-[#6B6685] tabular-nums">
                        {session.duration}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormError('');
                          setActiveWebinar(session);
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-full px-4.5 py-2 text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                          isRegistered
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_8px_18px_-6px_rgba(124,58,237,0.6)] hover:opacity-95'
                        }`}
                      >
                        {isRegistered ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            <span>
                              {session.status === 'Upcoming Live'
                                ? 'Seat Reserved'
                                : 'Replay Ready'}
                            </span>
                          </>
                        ) : (
                          <>
                            <Play className="h-3 w-3 fill-white" />
                            <span>{session.ctaLabel}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* BOTTOM BANNER: NEVER MISS A SESSION */}
        <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6D28D9] via-[#3B1284] to-[#5B18C8] px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -bottom-16 h-52 w-64 rounded-full bg-violet-400/25 blur-2xl"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Left 3D Frosted Calendar Illustration */}
            <div className="flex items-center justify-center lg:col-span-3">
              <NeverMissSessionCalendarGraphic />
            </div>

            {/* Center Copy with Vertical Divider */}
            <div className="lg:col-span-5 lg:border-l lg:border-white/20 lg:pl-7">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight">
                Never Miss a Session
              </h2>
              <p className="mt-2 text-sm sm:text-[15.5px] lg:text-[17px] leading-relaxed text-violet-100/90">
                Get notified about upcoming webinars, live clinics, and new on-demand masterclasses.
              </p>
            </div>

            {/* Right Email Pill Form */}
            <div className="lg:col-span-4">
              {notifySuccess ? (
                <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-xs sm:text-sm font-bold text-emerald-700">
                  <Check className="h-4 w-4 shrink-0" />
                  <span>You're on the invite list for upcoming clinics.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNotifySubmit}
                  className="flex items-center rounded-full bg-white p-1.5 pl-4 shadow-lg focus-within:ring-2 focus-within:ring-[#7C3AED]/20 transition-all"
                >
                  <Mail className="h-4 w-4 text-[#7C3AED] shrink-0" />
                  <input
                    type="email"
                    required
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Enter your email to get webinar notifications"
                    className="ml-2.5 w-full min-w-0 bg-transparent text-sm text-[#110D2B] placeholder:text-[#7B7696] border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
                    style={{ outline: 'none' }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to webinar alerts"
                    className="flex h-9 w-11 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Seat Reservation / Replay Modal */}
      {activeWebinar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="webinar-modal-title"
        >
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs sm:text-[13px] font-bold text-[#7C3AED]">
                  {activeWebinar.badgeText} · {activeWebinar.category}
                </p>
                <h3
                  id="webinar-modal-title"
                  className="mt-1 text-xl sm:text-2xl font-bold text-[#110D2B]"
                >
                  {activeWebinar.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWebinar(null)}
                aria-label="Close modal"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {registeredIds[activeWebinar.id] ? (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950">
                <div className="flex items-center gap-2 font-semibold">
                  <Check className="h-4 w-4 text-emerald-700" />
                  <span>
                    {activeWebinar.status === 'Upcoming Live'
                      ? 'Your live seat is reserved'
                      : 'On-demand masterclass unlocked'}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-emerald-800">
                  We sent the Snaarp Meet join link and workbook for{' '}
                  <strong>{activeWebinar.dateLabel}</strong> to{' '}
                  <strong>{workEmail || 'your inbox'}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveWebinar(null)}
                  className="mt-4 rounded-lg bg-emerald-800 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-900 cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs sm:text-[13px] font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#7C3AED] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-[13px] font-medium text-slate-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-[#7C3AED] focus:outline-none"
                  />
                </div>
                {formError && <p className="text-xs text-red-600">{formError}</p>}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#7C3AED] px-4 py-2.5 text-sm sm:text-[15px] font-semibold text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                >
                  {activeWebinar.ctaLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
