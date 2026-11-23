'use client';

import React, { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Code2,
  Flame,
  Layers,
  Play,
  PlayCircle,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  BLOG_ARTICLES,
  PRODUCT_DEMOS,
  WEBINARS,
} from './resourcesData';
import { TrialModal } from './TrialModal';

interface ResourcesOverviewProps {
  onNavigate?: (route: string, options?: { articleId?: string; demoApp?: string }) => void;
  onOpenTrialModal?: (mode: 'trial' | 'demo') => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

const EXPLORE_CARDS = [
  {
    id: 'video-tutorials',
    title: 'Video Tutorials & Demos',
    description: 'Short, practical walkthroughs',
    icon: PlayCircle,
    route: 'demos',
  },
  {
    id: 'blog-insights',
    title: 'Blog & Insights',
    description: 'Deep dives, updates, and practical tips',
    icon: BookOpen,
    route: 'blog',
  },
  {
    id: 'webinars',
    title: 'Webinars & Live Clinics',
    description: 'Live and on-demand expert sessions',
    icon: Calendar,
    route: 'webinars',
  },
  {
    id: 'crm-tours',
    title: 'CRM & Sales Tours',
    description: 'Visual pipeline and deal workflows',
    icon: Layers,
    route: 'demos',
    demoApp: 'crm',
  },
  {
    id: 'mail-tours',
    title: 'Business Email Tours',
    description: 'AI Compose and unified inbox',
    icon: Code2,
    route: 'demos',
    demoApp: 'mail',
  },
  {
    id: 'books-tours',
    title: 'Books & Finance Tours',
    description: 'Automated invoicing and ledgers',
    icon: TrendingUp,
    route: 'demos',
    demoApp: 'books',
  },
];

const TRENDING_ITEMS = [
  {
    num: '01',
    title: 'Getting Started with Snaarp 360',
    duration: '8 min',
    route: 'demos',
    demoApp: 'crm',
  },
  {
    num: '02',
    title: 'Snaarp Mail Setup Guide',
    duration: '6 min',
    route: 'demos',
    demoApp: 'mail',
  },
  {
    num: '03',
    title: 'CRM Best Practices for Growing Teams',
    duration: '10 min',
    route: 'demos',
    demoApp: 'crm',
  },
  {
    num: '04',
    title: 'Deal-to-Invoice Automation Masterclass',
    duration: '32 min',
    route: 'webinars',
  },
];

export const ResourcesOverview: React.FC<ResourcesOverviewProps> = ({
  onNavigate,
  onOpenTrialModal,
  searchInputRef,
}) => {
  const router = useRouter();
  const [localModalMode, setLocalModalMode] = useState<'trial' | 'demo' | null>(null);
  const localSearchRef = useRef<HTMLInputElement>(null);
  const inputRef = searchInputRef ?? localSearchRef;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeExploreIndex, setActiveExploreIndex] = useState(0);

  const handleNavigate = (target: string, options?: { articleId?: string; demoApp?: string }) => {
    if (onNavigate) {
      onNavigate(target, options);
      return;
    }
    let path = target;
    if (target === 'overview' || target === 'resources') path = '/resources';
    else if (target === 'blog') path = `/resources/blog${options?.articleId ? `?articleId=${options.articleId}` : ''}`;
    else if (target === 'demos') path = `/resources/demos${options?.demoApp ? `?app=${options.demoApp}` : ''}`;
    else if (target === 'webinars') path = '/resources/webinars';

    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (mode: 'trial' | 'demo') => {
    if (onOpenTrialModal) onOpenTrialModal(mode);
    else setLocalModalMode(mode);
  };

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const items: {
      type: string;
      title: string;
      subtitle: string;
      route: string;
      articleId?: string;
      demoApp?: string;
    }[] = [];

    BLOG_ARTICLES.forEach((a) => {
      if (a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)) {
        items.push({
          type: 'Blog',
          title: a.title,
          subtitle: `${a.category} · ${a.readTime}`,
          route: 'blog',
          articleId: a.id,
        });
      }
    });
    PRODUCT_DEMOS.forEach((d) => {
      if (d.appName.toLowerCase().includes(q) || d.title.toLowerCase().includes(q)) {
        items.push({
          type: 'Demo',
          title: `${d.appName} — ${d.title}`,
          subtitle: `Replaces ${d.replaces}`,
          route: 'demos',
          demoApp: d.appId,
        });
      }
    });
    WEBINARS.forEach((w) => {
      if (w.title.toLowerCase().includes(q) || w.topic.toLowerCase().includes(q)) {
        items.push({
          type: 'Webinar',
          title: w.title,
          subtitle: w.date,
          route: 'webinars',
        });
      }
    });
    return items.slice(0, 6);
  }, [searchQuery]);

  const handlePopularClick = (tag: string) => {
    setSearchQuery(tag);
    inputRef.current?.focus();
  };

  return (
    <div className="bg-white text-[#110D2B]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-20 pt-12 lg:pb-24 lg:pt-14">
        {/* Unified Hero Background: Dashboard on Purple Glow */}
        <img
          src="/assets/resources/images/snaarp_dashboard_on_purple_glow.png"
          alt="Snaarp Dashboard on Purple Glow"
          role="presentation"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Adaptive contrast overlay for mobile and tablet readability */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-transparent xl:hidden"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Copy & Search */}
            <div className="relative z-10 lg:col-span-6 max-w-none lg:max-w-[580px] xl:max-w-[640px]">
              <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                RESOURCE CENTER
              </p>
              <h1 className="mt-3 text-[36px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#110D2B]">
                <span className="sm:whitespace-nowrap">Learn. Build. Scale</span>
                <br />
                <span>with <span className="text-[#7C3AED]">Snaarp.</span></span>
              </h1>
              <p className="mt-4 max-w-[500px] text-[15px] sm:text-[16.5px] lg:text-[18px] leading-[1.55] text-[#585374]">
                Guides, tutorials, templates, and real-world insights to help your team get the most out of Snaarp.
              </p>

              {/* Pill Search Bar */}
              <div className="relative mt-7 max-w-[500px]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchResults[0]) {
                      const first = searchResults[0];
                      setSearchQuery('');
                      handleNavigate(first.route, {
                        articleId: first.articleId,
                        demoApp: first.demoApp,
                      });
                    }
                  }}
                  className="flex items-center rounded-full border border-[#E6E2F6] bg-white p-1.5 pl-4 shadow-[0_14px_30px_-10px_rgba(76,29,149,0.14)] focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-[#7C3AED]/20 transition-all"
                >
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    ref={inputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources, guides, tutorials, or topics..."
                    aria-label="Search resources, guides, tutorials, or topics"
                    className="ml-3 w-full bg-transparent text-sm sm:text-[15px] lg:text-[16px] font-medium text-[#110D2B] placeholder:text-[#8E89A6] border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
                    style={{ outline: 'none' }}
                  />
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                {/* Live Search Results Popover */}
                {searchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl border border-[#E6E2F6] bg-white p-2 shadow-2xl">
                    {searchResults.length === 0 ? (
                      <div className="px-3 py-3 text-center text-xs text-slate-500">
                        No matches found for "{searchQuery}".
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-100">
                        {searchResults.map((res, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setSearchQuery('');
                              handleNavigate(res.route, {
                                articleId: res.articleId,
                                demoApp: res.demoApp,
                              });
                            }}
                            className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left hover:bg-[#F5F1FF] cursor-pointer"
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-[#7C3AED]">
                                {res.type}
                              </div>
                              <div className="truncate text-xs sm:text-sm font-semibold text-[#110D2B]">
                                {res.title}
                              </div>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 text-[#7C3AED] shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Popular Tags Row */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-[13px] font-semibold text-[#110D2B]">Popular:</span>
                {[
                  'Getting Started',
                  'Snaarp 360',
                  'CRM',
                  'Integrations',
                  'Security',
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handlePopularClick(tag)}
                    className="rounded-full border border-[#E4E0F5] bg-white/95 px-3.5 py-1 text-xs sm:text-[12.5px] font-medium text-[#3C375B] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Spacer (tablet and glowing pedestal are embedded in the background) */}
            <div className="hidden lg:block lg:col-span-6 min-h-[460px] xl:min-h-[540px]" />
          </div>
        </div>
      </section>

      {/* FLOATING 5-COLUMN STATS BAR */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#EFEFF6] bg-white px-6 py-5 shadow-[0_18px_40px_-14px_rgba(30,27,75,0.12)] sm:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: Users, value: '200+', label: 'Guides & Articles', route: 'blog' },
            { icon: PlayCircle, value: '80+', label: 'Video Tutorials', route: 'demos' },
            { icon: Calendar, value: '40+', label: 'Webinars & Clinics', route: 'webinars' },
            { icon: Layers, value: '20+', label: 'Interactive Demos', route: 'demos' },
            { icon: TrendingUp, value: '10K+', label: 'Teams Learning', route: 'overview' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.label}
                type="button"
                onClick={() => handleNavigate(stat.route)}
                className="flex items-center gap-3.5 text-left group cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F0FF] text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold leading-tight text-[#110D2B] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium text-[#6B6685]">{stat.label}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* EXPLORE RESOURCES 6-CARD SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
              EXPLORE RESOURCES
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#110D2B]">
              Everything you need,
              <br />
              all in one place.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous resource category"
              onClick={() =>
                setActiveExploreIndex(
                  (activeExploreIndex - 1 + EXPLORE_CARDS.length) %
                    EXPLORE_CARDS.length
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E2F5] bg-white text-[#7C3AED] hover:bg-[#F5F1FF] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next resource category"
              onClick={() =>
                setActiveExploreIndex(
                  (activeExploreIndex + 1) % EXPLORE_CARDS.length
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E2F5] bg-white text-[#7C3AED] hover:bg-[#F5F1FF] transition-colors cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {EXPLORE_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isActive = idx === activeExploreIndex;
            return (
              <button
                key={card.id}
                type="button"
                onMouseEnter={() => setActiveExploreIndex(idx)}
                onClick={() => handleNavigate(card.route, { demoApp: card.demoApp })}
                className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${
                  isActive
                    ? 'border-transparent bg-gradient-to-br from-[#5B18C8] via-[#6D28D9] to-[#8B3DFF] text-white shadow-[0_16px_32px_-10px_rgba(109,40,217,0.45)]'
                    : 'border-[#EFEFF7] bg-[#FAF9FE] text-[#110D2B] hover:border-[#D8CEF9]'
                }`}
              >
                <div>
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#EFEAFF] text-[#7C3AED]'
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-4 flex min-h-[44px] items-start text-sm sm:text-[15.5px] font-bold leading-snug">
                    {card.title}
                  </h3>
                  <p
                    className={`mt-1.5 min-h-[36px] text-xs sm:text-[13px] leading-snug ${
                      isActive ? 'text-white/85' : 'text-[#6B6685]'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="mt-3 flex justify-end">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-opacity duration-150 ${
                      isActive
                        ? 'bg-white text-[#6D28D9] opacity-100 shadow-xs'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED BENTO SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left Large Featured Guide Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#170634] p-7 text-white sm:p-8 lg:col-span-7 flex flex-col justify-between min-h-[340px]">
            {/* Background 3D Neon Laptop Image */}
            <img
              src="/assets/resources/images/neon_purple_snaarp_dashboard_laptop.png"
              alt="Test Snaarp Mail, CRM, Meet & Lock in Your Browser"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[92%_center]"
            />
            {/* Soft left gradient overlay to guarantee text legibility */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#170634] via-[#170634]/85 to-transparent sm:w-3/5"
            />

            <div className="relative z-10 flex h-full flex-col justify-between max-w-[260px] sm:max-w-[280px] lg:max-w-[290px]">
              <div>
                <span className="inline-block rounded-full border border-white/25 bg-white/15 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-white">
                  FEATURED GUIDE
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-[1.15] tracking-tight">
                  Test Snaarp Mail, CRM, Meet & Lock in Your Browser
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-violet-100/90">
                  A complete walkthrough to set up, run, and get the most out of Snaarp's core tools.
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => handleNavigate('demos', { demoApp: 'crm' })}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#110D2B] hover:bg-violet-50 transition-colors cursor-pointer shadow-md"
                >
                  <span>Read the Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Stacked Cards: Video Tutorial + Customer Story */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* Video Tutorial Card */}
            <div
              onClick={() => handleNavigate('demos', { demoApp: 'crm' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavigate('demos', { demoApp: 'crm' });
                }
              }}
              className="group grid flex-1 grid-cols-12 items-center gap-4 rounded-3xl border border-[#EFEFF7] bg-[#FAF9FE] p-5 transition-all hover:border-[#D8CEF9] hover:shadow-md cursor-pointer"
            >
              <div className="col-span-6">
                <p className="text-xs font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                  VIDEO TUTORIAL
                </p>
                <h3 className="mt-1.5 text-base sm:text-[18px] font-bold leading-snug text-[#110D2B]">
                  How to Set Up Snaarp 360 for Your Team
                </h3>
              </div>
              <div className="relative col-span-6 h-28 sm:h-32 overflow-hidden rounded-2xl bg-gradient-to-br from-[#5B18C8] via-[#7C3AED] to-[#A855F7] shadow-inner">
                <div className="absolute -left-6 top-6 h-20 w-44 rotate-12 rounded-full bg-white/15 blur-sm" />
                <div className="flex h-full items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D28D9] shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-4 w-4 fill-[#6D28D9]" />
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 rounded-full bg-[#110D2B]/80 px-2.5 py-0.5 text-xs font-semibold text-white tabular-nums">
                  8 min
                </span>
              </div>
            </div>

            {/* Customer Story Card */}
            <div
              onClick={() => handleNavigate('blog', { articleId: 'stack-consolidation-math' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavigate('blog', { articleId: 'stack-consolidation-math' });
                }
              }}
              className="group grid flex-1 grid-cols-12 items-center gap-4 rounded-3xl border border-[#EFEFF7] bg-[#FAF9FE] p-5 transition-all hover:border-[#D8CEF9] hover:shadow-md cursor-pointer"
            >
              <div className="col-span-6">
                <p className="text-xs font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                  CUSTOMER STORY
                </p>
                <h3 className="mt-1.5 text-base sm:text-[18px] font-bold leading-snug text-[#110D2B]">
                  How a Growing Team Reduced Tool Sprawl with Snaarp
                </h3>
              </div>
              <div className="relative col-span-6 h-28 sm:h-32 overflow-hidden rounded-2xl bg-[#E8DEFD]">
                <img
                  src="/assets/resources/images/smiling_man_navy_polo.png"
                  alt="Customer Case Study"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-[center_15%] transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#110D2B] shadow-sm whitespace-nowrap">
                  Case Study
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST FROM THE BLOG */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => handleNavigate('blog')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] hover:text-[#5B21B6] transition-colors cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Header Column */}
          <div className="lg:col-span-3">
            <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
              LATEST FROM THE BLOG
            </p>
            <h2 className="mt-2 text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#110D2B]">
              Insights, updates,
              <br />
              and practical tips.
            </h2>
          </div>

          {/* Right 3 Blog Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-9">
            {[
              {
                id: BLOG_ARTICLES[0].id,
                tag: 'Product',
                readTime: '5 min read',
                title:
                  'Why Growing Teams Are Ditching Twelve SaaS Invoices for One Unified Subscription',
                image: '/assets/resources/images/blog_trio_1.png',
              },
              {
                id: BLOG_ARTICLES[3].id,
                tag: 'Tips',
                readTime: '4 min read',
                title: 'Three Ways to Automate Your Outreach with Snaarp',
                image: '/assets/resources/images/blog_trio_2.png',
              },
              {
                id: BLOG_ARTICLES[5].id,
                tag: 'Security',
                readTime: '6 min read',
                title: 'Keeping Your Team and Data Secure on Snaarp',
                image: '/assets/resources/images/blog_trio_3.png',
              },
            ].map((post) => (
              <article
                key={post.title}
                onClick={() => handleNavigate('blog', { articleId: post.id })}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EFEFF7] bg-white shadow-[0_6px_20px_-8px_rgba(30,27,75,0.08)] transition-all hover:-translate-y-0.5 hover:border-[#D8CEF9] hover:shadow-md cursor-pointer"
              >
                <div className="h-36 sm:h-40 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="text-xs font-medium text-[#6B6685]">
                      <span className="font-bold text-[#7C3AED]">{post.tag}</span>
                      <span className="mx-1.5">·</span>
                      <span className="tabular-nums">{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-[15px] sm:text-[16px] font-bold leading-snug text-[#110D2B] group-hover:text-[#7C3AED] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#7C3AED]">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED COLLECTION (PLAYBOOKS) + TRENDING RESOURCES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left Dark Gradient Resource Playbooks Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#180638] p-7 text-white sm:p-8 lg:col-span-7 flex flex-col justify-between min-h-[300px]">
            {/* Background 3D Playbook Cards in Motion Image */}
            <img
              src="/assets/resources/images/purple_playbook_cards_in_motion.png"
              alt="Resource Playbooks"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
            />
            {/* Soft left gradient overlay to guarantee text legibility */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#180638] via-[#180638]/85 to-transparent sm:w-3/5"
            />

            <div className="relative z-10 flex h-full flex-col justify-between max-w-[240px] sm:max-w-[260px] lg:max-w-[275px]">
              <div>
                <span className="inline-block rounded-full border border-white/25 bg-white/15 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-white">
                  CURATED COLLECTION
                </span>
                <h2 className="mt-3.5 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Resource Playbooks
                </h2>
                <p className="mt-2.5 text-sm sm:text-[14.5px] leading-relaxed text-violet-100/90">
                  Handpicked guides, templates, and setups for common goals — from onboarding to scale.
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => handleNavigate('demos')}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#110D2B] hover:bg-violet-50 transition-colors cursor-pointer shadow-md"
                >
                  <span>Explore Playbooks</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Trending Resources Card */}
          <div className="rounded-3xl border border-[#EFEFF7] bg-white p-6 shadow-[0_8px_24px_-10px_rgba(30,27,75,0.08)] lg:col-span-5">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 fill-[#7C3AED] text-[#7C3AED]" />
              <h2 className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                TRENDING RESOURCES
              </h2>
            </div>

            <div className="mt-4 divide-y divide-[#F1EFF8]">
              {TRENDING_ITEMS.map((item) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => handleNavigate(item.route, { demoApp: item.demoApp })}
                  className="group flex w-full items-center justify-between gap-3 py-3 text-left transition-colors hover:bg-[#FAF8FF] rounded-lg px-2 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F4F0FF] text-xs font-bold text-[#7C3AED] tabular-nums">
                      {item.num}
                    </span>
                    <span className="truncate text-xs sm:text-sm font-semibold text-[#110D2B] group-hover:text-[#7C3AED] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0 text-xs text-[#7B7696]">
                    <span className="inline-flex items-center gap-1 tabular-nums font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.duration}</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#7C3AED] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONVERSION BANNER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-[#1E074D] px-6 py-8 text-white sm:px-10 sm:py-12">
          {/* Background Neon Growth Chart Banner */}
          <img
            src="/assets/resources/images/neon_growth_chart_banner.png"
            alt="Ready to simplify your business stack?"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
          />
          {/* Scrim for high text legibility on tablet & mobile */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#1E074D]/70 lg:hidden"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            {/* Left Spacer so 3D Growth Bars and Arrow are visible on lg */}
            <div className="hidden lg:block lg:col-span-5" />

            {/* Center Copy */}
            <div className="md:col-span-7 lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] font-extrabold leading-tight tracking-tight">
                Ready to simplify<br className="hidden sm:inline" /> your business stack?
              </h2>
              <p className="mt-3 text-sm sm:text-[14.5px] lg:text-[15px] leading-snug sm:leading-relaxed text-violet-100/90">
                Get the tools, guides, and support you need to set up, scale, and get real results with Snaarp.
              </p>
            </div>

            {/* Right Stacked Buttons */}
            <div className="flex flex-col gap-3 md:col-span-5 lg:col-span-3">
              <button
                type="button"
                onClick={() => handleOpenModal('trial')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#110D2B] hover:bg-violet-50 transition-colors whitespace-nowrap cursor-pointer shadow-md"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => handleOpenModal('demo')}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {localModalMode && (
        <TrialModal
          mode={localModalMode}
          onClose={() => setLocalModalMode(null)}
        />
      )}
    </div>
  );
};
