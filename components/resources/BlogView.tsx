'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Bookmark,
  Check,
  Copy,
  Database,
  Flame,
  Layers,
  LayoutGrid,
  Mail,
  Search,
  Shield,
  Sparkles,
  Star,
} from 'lucide-react';
import { BLOG_ARTICLES } from './resourcesData';
import { BlogArticle, BlogCategory } from './types';
import { EditorialArtwork } from './EditorialArtwork';
import { NewsletterGlassEnvelope } from './MockupArtwork';
import { TrialModal } from './TrialModal';

interface BlogViewProps {
  selectedArticleId?: string | null;
  onSelectArticle?: (id: string | null) => void;
  onOpenTrialModal?: (mode: 'trial' | 'demo') => void;
}

const CATEGORY_PILLS: {
  label: BlogCategory;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { label: 'All', icon: LayoutGrid },
  { label: 'Stack Consolidation', icon: Layers },
  { label: 'AI & Productivity', icon: Sparkles },
  { label: 'Sales & Outbound', icon: BarChart2 },
  { label: 'Finance & Ops', icon: Database },
  { label: 'Security & IT', icon: Shield },
];

const FEATURED_SLIDES = [
  {
    id: 'ai-search-innovations',
    badge: 'FEATURED INSIGHT',
    title: 'AI Search Innovations: How New Algorithms Are Redefining Query Understanding',
    description:
      'Recent advancements in AI-driven search algorithms are changing how users find information online, promising personalized results, higher accuracy, and faster discovery.',
    image: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
  },
  {
    id: 'stack-consolidation-math',
    badge: 'FEATURED INSIGHT',
    title: 'Why Growing Teams Are Ditching Twelve SaaS Invoices for One Unified Subscription',
    description:
      'Per-seat software sprawl silently taxes fast-moving companies twice: once on the corporate card, and again in lost context between disconnected apps.',
    image: '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
  },
  {
    id: 'generative-ai-marketing',
    badge: 'FEATURED INSIGHT',
    title: "Generative AI's Role in Revolutionizing Digital Marketing Strategies",
    description:
      'As businesses pivot towards digital-first strategies, generative AI emerges as a driving force behind targeted campaigns and faster content creation.',
    image: '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
  },
];

const LATEST_CARD_ARTICLES = [
  {
    id: 'stack-consolidation-math',
    category: 'Stack Consolidation' as BlogCategory,
    readTime: '6 min read',
    title: 'Why Growing Teams Are Ditching Twelve SaaS Invoices for One Unified Subscription',
    excerpt:
      'Per-seat software sprawl silently taxes fast-moving companies twice: once on the corporate card, and again in lost context...',
    author: 'Amara Okafor',
    initials: 'AO',
    avatarBg: 'bg-violet-700',
    image: '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
    popularity: 98,
    pick: true,
  },
  {
    id: 'generative-ai-marketing',
    category: 'Sales & Outbound' as BlogCategory,
    readTime: '4 min read',
    title: "Generative AI's Role in Revolutionizing Digital Marketing Strategies",
    excerpt:
      'As businesses pivot towards digital-first strategies, generative AI emerges as a driving force behind targeted campaigns...',
    author: 'Emma Rodriguez',
    initials: 'ER',
    avatarBg: 'bg-indigo-700',
    image: '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
    popularity: 92,
    pick: true,
  },
  {
    id: 'unified-crm-books',
    category: 'Finance & Ops' as BlogCategory,
    readTime: '5 min read',
    title: 'Closing the Gap Between Sales Pipeline and Invoicing with CRM + Books',
    excerpt:
      'Stop letting won deals sit in limbo waiting for manual finance handoffs. See how linking Snaarp CRM and Snaarp Books...',
    author: 'Tunde Adeyemi',
    initials: 'TA',
    avatarBg: 'bg-slate-800',
    image: '/assets/resources/images/customer_team_collab_1795231338317.jpg',
    popularity: 89,
    pick: false,
  },
  {
    id: 'ai-search-innovations',
    category: 'AI & Productivity' as BlogCategory,
    readTime: '4 min read',
    title: 'AI Search Innovations: How New Algorithms Are Redefining Query Understanding',
    excerpt:
      'Recent advancements in AI-driven search algorithms are changing how users find information online, promising personalized results...',
    author: 'Maria Chen',
    initials: 'MC',
    avatarBg: 'bg-purple-700',
    image: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
    popularity: 95,
    pick: true,
  },
  {
    id: 'ai-content-moderation',
    category: 'Security & IT' as BlogCategory,
    readTime: '3 min read',
    title: 'AI-Driven Content Moderation: The New Frontier for Safe Teams',
    excerpt:
      'As digital channels increasingly rely on AI for content governance, operations teams examine implications for brand safety...',
    author: 'Maria Chen',
    initials: 'MC',
    avatarBg: 'bg-slate-900',
    image: '/assets/resources/images/blog_content_moderation_1795231337940.jpg',
    popularity: 84,
    pick: false,
  },
  {
    id: 'zero-trust-snaarp-lock',
    category: 'Security & IT' as BlogCategory,
    readTime: '5 min read',
    title: 'Zero-Trust Credential Hygiene: Securing Shared Vendor Logins in Under 20 Minutes',
    excerpt:
      'Shared spreadsheets of team passwords are an audit disaster waiting to happen. Learn how Snaarp Lock and Identity enforce access...',
    author: 'David Lindqvist',
    initials: 'DL',
    avatarBg: 'bg-violet-900',
    image: '/assets/resources/images/blog_ai_search_1795231338427.jpg',
    popularity: 87,
    pick: true,
  },
];

const TOPIC_CARDS: {
  category: Exclude<BlogCategory, 'All'>;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { category: 'Stack Consolidation', count: '24 articles', icon: Layers },
  { category: 'AI & Productivity', count: '32 articles', icon: Sparkles },
  { category: 'Sales & Outbound', count: '18 articles', icon: BarChart2 },
  { category: 'Finance & Ops', count: '14 articles', icon: Database },
  { category: 'Security & IT', count: '20 articles', icon: Shield },
];

export const BlogView: React.FC<BlogViewProps> = ({
  selectedArticleId: controlledArticleId,
  onSelectArticle,
  onOpenTrialModal,
}) => {
  const [internalArticleId, setInternalArticleId] = useState<string | null>(controlledArticleId || null);
  const [localModalMode, setLocalModalMode] = useState<'trial' | 'demo' | null>(null);
  const selectedArticleId = internalArticleId;

  const handleSelectArticle = (id: string | null) => {
    setInternalArticleId(id);
    if (onSelectArticle) onSelectArticle(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (mode: 'trial' | 'demo') => {
    if (onOpenTrialModal) onOpenTrialModal(mode);
    else setLocalModalMode(mode);
  };
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');
  const [sortMode, setSortMode] = useState<'Latest' | 'Most Popular' | "Editor's Picks">('Latest');
  const [query, setQuery] = useState('');
  const [slideIdx, setSlideIdx] = useState(0);
  const [savedIds, setSavedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const toggleSave = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSavedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedArticle: BlogArticle | undefined = useMemo(
    () => BLOG_ARTICLES.find((a) => a.id === selectedArticleId),
    [selectedArticleId]
  );

  const visibleCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = LATEST_CARD_ARTICLES.filter((item) => {
      const catMatch = activeCategory === 'All' || item.category === activeCategory;
      const qMatch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q);
      return catMatch && qMatch;
    });

    if (sortMode === 'Most Popular') {
      list = [...list].sort((a, b) => b.popularity - a.popularity);
    } else if (sortMode === "Editor's Picks") {
      const picks = list.filter((i) => i.pick);
      if (picks.length > 0) list = picks;
    }

    // Match mockup's crisp 3-card row when in default All + Latest state
    if (activeCategory === 'All' && !q && sortMode === 'Latest') {
      return list.slice(0, 3);
    }
    return list;
  }, [activeCategory, query, sortMode]);

  const handleCopyLink = (id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  // Full Article Reader View when an article is opened
  if (selectedArticle) {
    const related = BLOG_ARTICLES.filter((a) => a.id !== selectedArticle.id).slice(0, 3);
    return (
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-12">
        <button
          type="button"
          onClick={() => handleSelectArticle(null)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#7C3AED] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog & Insights</span>
        </button>

        <header className="mt-6 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] text-slate-500 font-medium">
            <span className="font-semibold text-[#7C3AED]">{selectedArticle.category}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{selectedArticle.readTime}</span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.08] tracking-tight text-[#110D2B]">
            {selectedArticle.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-[19px] leading-relaxed text-slate-600">
            {selectedArticle.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm sm:text-[15px]">
              <span className="font-semibold text-[#110D2B]">{selectedArticle.author}</span>
              <span className="mx-2 text-slate-300">·</span>
              <span className="text-slate-500">{selectedArticle.authorRole}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleSave(selectedArticle.id)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Bookmark
                  className={`h-3.5 w-3.5 ${
                    savedIds[selectedArticle.id]
                      ? 'fill-[#7C3AED] text-[#7C3AED]'
                      : 'text-slate-500'
                  }`}
                />
                <span>{savedIds[selectedArticle.id] ? 'Saved' : 'Save'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleCopyLink(selectedArticle.id)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                {copiedId === selectedArticle.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Link copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-slate-500" />
                    <span>Copy link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <EditorialArtwork
            variant={selectedArticle.artworkVariant}
            alt={selectedArticle.title}
            className="h-64 sm:h-80"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-slate-500 uppercase">
                  Key Takeaways
                </h2>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-700">
                  {selectedArticle.keyTakeaways.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7C3AED]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-5">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#110D2B]">
                  See Snaarp in your workflow
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                  Consolidate email, CRM, Drive, Books, and Lock under one fixed team plan.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('trial')}
                  className="mt-4 w-full rounded-lg bg-[#7C3AED] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                >
                  Start 14-days Free Trial
                </button>
              </div>
            </div>
          </aside>

          <article className="space-y-8 lg:col-span-8">
            {selectedArticle.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4">
                <h2 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#110D2B]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base sm:text-[17px] leading-[1.65] text-slate-700">
                    {p}
                  </p>
                ))}
                {section.callout && (
                  <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-5">
                    <div className="text-sm font-bold text-[#6D28D9]">
                      {section.callout.title}
                    </div>
                    <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-slate-800">
                      {section.callout.body}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#110D2B]">Continue Reading</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectArticle(item.id)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left hover:border-violet-400 hover:shadow-md transition-all cursor-pointer"
              >
                <EditorialArtwork variant={item.artworkVariant} alt={item.title} className="h-32 w-full" />
                <div className="p-4">
                  <div className="text-xs font-medium text-[#7C3AED]">
                    {item.category} · {item.readTime}
                  </div>
                  <h3 className="mt-1.5 text-sm sm:text-[15.5px] font-bold leading-snug text-[#110D2B]">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-[#7C3AED]">
                    <span>Read post</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        {localModalMode && (
          <TrialModal
            mode={localModalMode}
            onClose={() => setLocalModalMode(null)}
          />
        )}
      </div>
    );
  }

  const currentSlide = FEATURED_SLIDES[slideIdx];

  return (
    <div className="min-h-screen bg-[#FAF8FF] pb-14 text-[#110D2B]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-8 pt-10 lg:pb-10 lg:pt-12">
        {/* Unified Hero Background: Abstract Lavender Document Cards Banner */}
        <img
          src="/assets/resources/images/abstract_lavender_document_cards_banner.png"
          alt="Blog & Insights"
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
            <div className="relative z-10 lg:col-span-6 max-w-none lg:max-w-[580px] xl:max-w-[640px]">
              <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-[#7C3AED] uppercase">
                SNAARP EDITORIAL
              </p>
              <h1 className="mt-2.5 text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] xl:text-[68px] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#110D2B]">
                Blog & Insights
              </h1>
              <p className="mt-3 max-w-[520px] text-[15px] sm:text-[16.5px] lg:text-[18px] leading-[1.55] text-[#555070]">
                Deep dives on software consolidation, AI search & moderation, B2B revenue operations, and practical security for modern teams.
              </p>

              {/* Pill Search Input */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex max-w-[490px] items-center rounded-full border border-[#E6E2F6] bg-white p-1.5 pl-4 shadow-[0_14px_30px_-10px_rgba(76,29,149,0.14)] focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-[#7C3AED]/20 transition-all"
              >
                <Search className="h-4 w-4 text-slate-400 shrink-0" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, or insights..."
                  aria-label="Search articles, topics, or insights"
                  className="ml-3 w-full bg-transparent text-sm sm:text-[15px] lg:text-[16px] font-medium text-[#110D2B] placeholder:text-[#8E89A6] border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
                  style={{ outline: 'none' }}
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Right Spacer (document cards are embedded in the background) */}
            <div className="hidden lg:block lg:col-span-6 min-h-[360px] lg:min-h-[400px] xl:min-h-[440px]" />
          </div>

          {/* CATEGORY FILTER PILLS ROW */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-2.5">
            {CATEGORY_PILLS.map((pill) => {
              const Icon = pill.icon;
              const active = activeCategory === pill.label;
              return (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => setActiveCategory(pill.label)}
                  className={`inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-[13.5px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_10px_24px_-6px_rgba(124,58,237,0.5)]'
                      : 'border border-[#E6E2F6] bg-white/95 text-[#110D2B] hover:border-[#C4B5FD] hover:text-[#7C3AED]'
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${
                      active ? 'text-white' : 'text-[#7C3AED]'
                    }`}
                  />
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-8">

        {/* MAIN ASYMMETRIC CONTENT GRID */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT 8 COLUMNS: Featured Insight + Latest Articles */}
          <div className="space-y-8 lg:col-span-8">
            {/* Featured Insight Banner */}
            <div className="relative min-h-[340px] overflow-hidden rounded-3xl bg-[#0C091E] text-white shadow-xl">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#0C091E] via-[#0C091E]/85 to-transparent"
              />

              <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between p-7 sm:p-9">
                <div className="max-w-[430px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED]/90 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-white">
                    <Star className="h-3 w-3" />
                    <span>{currentSlide.badge}</span>
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-[1.15] tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-200/95">
                    {currentSlide.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectArticle(currentSlide.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#110D2B] hover:bg-violet-50 transition-colors cursor-pointer"
                  >
                    <span>Read the Full Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  {/* Carousel Dots */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    {FEATURED_SLIDES.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        aria-label={`Featured slide ${idx + 1}`}
                        onClick={() => setSlideIdx(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          slideIdx === idx
                            ? 'w-2 bg-white'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Carousel Prev / Next */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous featured insight"
                      onClick={() =>
                        setSlideIdx(
                          (slideIdx - 1 + FEATURED_SLIDES.length) %
                            FEATURED_SLIDES.length
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#110D2B] hover:bg-violet-50 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next featured insight"
                      onClick={() =>
                        setSlideIdx((slideIdx + 1) % FEATURED_SLIDES.length)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#110D2B] hover:bg-violet-50 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Articles Section */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-[#110D2B]">
                  Latest Articles
                </h2>

                {/* Segmented Sort Control */}
                <div className="flex items-center rounded-xl border border-[#E6E2F6] bg-white p-1 shadow-xs">
                  {(['Latest', 'Most Popular', "Editor's Picks"] as const).map(
                    (mode) => {
                      const active = sortMode === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setSortMode(mode)}
                          className={`rounded-lg px-3 py-1.5 text-xs sm:text-[13px] font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                            active
                              ? 'bg-[#7C3AED] text-white'
                              : 'text-[#555070] hover:text-[#110D2B]'
                          }`}
                        >
                          {mode}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {visibleCards.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-[#E6E2F6] bg-white p-8 text-center">
                  <p className="text-sm font-medium text-[#110D2B]">
                    No articles match "{query}".
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('All');
                      setQuery('');
                      setSortMode('Latest');
                    }}
                    className="mt-2 text-xs font-semibold text-[#7C3AED] hover:underline cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {visibleCards.map((card) => {
                    const isSaved = Boolean(savedIds[card.id]);
                    return (
                      <article
                        key={card.id}
                        onClick={() => handleSelectArticle(card.id)}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-[#ECE8FA] bg-white shadow-[0_10px_25px_-12px_rgba(30,27,75,0.1)] transition-all hover:-translate-y-0.5 hover:border-[#C4B5FD] hover:shadow-lg cursor-pointer"
                      >
                        <div className="h-36 overflow-hidden bg-slate-900">
                          <img
                            src={card.image}
                            alt={card.title}
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-4">
                          <div>
                            <div className="flex items-center justify-between gap-2 text-xs font-medium">
                              <div className="truncate">
                                <span className="font-semibold text-[#7C3AED]">
                                  {card.category}
                                </span>
                                <span className="mx-1.5 text-slate-400">·</span>
                                <span className="text-[#6B6685] tabular-nums">
                                  {card.readTime}
                                </span>
                              </div>
                              <button
                                type="button"
                                aria-label="Save article"
                                onClick={(e) => toggleSave(card.id, e)}
                                className="text-slate-400 hover:text-[#7C3AED] cursor-pointer"
                              >
                                <Bookmark
                                  className={`h-3.5 w-3.5 ${
                                    isSaved ? 'fill-[#7C3AED] text-[#7C3AED]' : ''
                                  }`}
                                />
                              </button>
                            </div>

                            <h3 className="mt-2 text-base sm:text-[17px] font-bold leading-snug text-[#110D2B] group-hover:text-[#7C3AED] transition-colors">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[#6B6685] line-clamp-3">
                              {card.excerpt}
                            </p>
                          </div>

                          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${card.avatarBg}`}
                              >
                                {card.initials}
                              </span>
                              <span className="truncate text-xs font-medium text-[#4E4A67]">
                                {card.author}
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-semibold text-[#7C3AED] shrink-0">
                              <span>Read More</span>
                              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Trending This Week + Get Insights in Your Inbox */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Trending This Week Card */}
            <div className="rounded-3xl border border-[#ECE8FA] bg-white/95 p-5 shadow-[0_12px_28px_-12px_rgba(30,27,75,0.08)]">
              <div className="flex items-center gap-2">
                <Flame className="h-4.5 w-4.5 fill-[#7C3AED] text-[#7C3AED]" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#110D2B]">
                  Trending This Week
                </h2>
              </div>

              <div className="mt-4 divide-y divide-[#F1EFF8]">
                {[
                  {
                    id: 'stack-consolidation-math',
                    title:
                      'Why Growing Teams Are Ditching Twelve SaaS Invoices for One Unified Subscription',
                    readTime: '6 min read',
                    image:
                      '/assets/resources/images/blog_stack_consolidation_1795231339107.jpg',
                  },
                  {
                    id: 'generative-ai-marketing',
                    title:
                      "Generative AI's Role in Revolutionizing Digital Marketing Strategies",
                    readTime: '4 min read',
                    image:
                      '/assets/resources/images/blog_generative_marketing_1795231340105.jpg',
                  },
                  {
                    id: 'ai-content-moderation',
                    title:
                      'AI-Driven Content Moderation: The New Frontier for Safe Teams',
                    readTime: '3 min read',
                    image:
                      '/assets/resources/images/blog_content_moderation_1795231337940.jpg',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectArticle(item.id)}
                    className="group flex w-full items-center gap-3 py-3.5 text-left cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="h-14 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[13.5px] sm:text-sm font-bold leading-snug text-[#110D2B] line-clamp-3 group-hover:text-[#7C3AED] transition-colors">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs text-[#7B7696] tabular-nums font-medium">
                        {item.readTime}
                      </div>
                    </div>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4F0FF] text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Get Insights in Your Inbox Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#E5DCFA] bg-gradient-to-br from-[#F4EEFF] via-[#F8F5FF] to-[#ECE3FE] p-6 shadow-[0_12px_28px_-12px_rgba(109,40,217,0.14)]">
              <div className="pointer-events-none absolute -right-2 -top-2">
                <NewsletterGlassEnvelope />
              </div>

              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#7C3AED] shadow-xs">
                  <Mail className="h-4.5 w-4.5" />
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-extrabold text-[#110D2B]">
                  Get Insights in Your Inbox
                </h3>
                <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-[#555070]">
                  Join 10,000+ business leaders who get our latest articles, guides, and product updates weekly.
                </p>

                {newsletterSubscribed ? (
                  <div className="mt-5 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>You're subscribed to weekly insights.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="mt-5 flex items-center rounded-full border border-[#E6E2F6] bg-white p-1 pl-4 shadow-xs focus-within:border-[#7C3AED] focus-within:ring-2 focus-within:ring-[#7C3AED]/20 transition-all"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-label="Enter your email for weekly insights"
                      className="w-full min-w-0 bg-transparent text-sm text-[#110D2B] placeholder:text-[#8E89A6] border-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
                      style={{ outline: 'none' }}
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-colors cursor-pointer"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* EXPLORE BY TOPIC BOTTOM STRIP */}
        <div className="mt-14 grid grid-cols-1 items-center gap-5 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight text-[#110D2B]">
              Explore by Topic
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[#555070]">
              Find the insights most relevant to your goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:col-span-10 lg:grid-cols-5">
            {TOPIC_CARDS.map((topic) => {
              const Icon = topic.icon;
              const isSelected = activeCategory === topic.category;
              return (
                <button
                  key={topic.category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(topic.category);
                    window.scrollTo({ top: 340, behavior: 'smooth' });
                  }}
                  className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 cursor-pointer ${
                    isSelected
                      ? 'border-[#7C3AED] bg-white ring-1 ring-[#7C3AED] shadow-md'
                      : 'border-[#EAE4FA] bg-white/75 hover:border-[#C4B5FD] hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3EEFF] text-[#7C3AED]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="mt-3 text-sm sm:text-[14.5px] font-bold leading-snug text-[#110D2B]">
                      {topic.category}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-[#6B6685]">
                    <span className="tabular-nums font-medium">{topic.count}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#7C3AED] shadow-xs group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        {localModalMode && (
          <TrialModal
            mode={localModalMode}
            onClose={() => setLocalModalMode(null)}
          />
        )}
      </div>
      {localModalMode && (
        <TrialModal
          mode={localModalMode}
          onClose={() => setLocalModalMode(null)}
        />
      )}
    </div>
  );
};
