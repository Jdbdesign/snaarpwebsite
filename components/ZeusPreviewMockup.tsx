'use client';

import { useState } from 'react';
import { Menu, LayoutGrid, Search, Users, Building2, List, Download, Plug, CreditCard, ShieldCheck, ChevronDown, ChevronUp, Zap, User, Mail, Briefcase, BarChart3, Landmark, MapPin, UsersRound, LineChart, DollarSign, Settings, Filter, Database, Code2, TrendingUp, Layers, Loader2, Lock, ChevronLeft, ChevronRight, Bookmark, X, Link as LinkedinIcon, Plus, Phone, Eye, Check, Calendar as CalendarIcon, HeartPulse, Globe } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const ZEUS_NAV = [
  { label: 'People', Icon: Users },
  { label: 'Companies', Icon: Building2 },
  { label: 'Lists', Icon: List },
  { label: 'Exports', Icon: Download },
  { label: 'Integrations', Icon: Plug },
  { label: 'Billing', Icon: CreditCard },
];

const FILTERS = [
  { label: 'Keyword', Icon: Search, open: true },
  { label: 'Name', Icon: User, open: true },
  { label: 'Lists', Icon: List },
  { label: 'Email Status', Icon: Mail },
  { label: 'Job Titles', Icon: Briefcase },
  { label: 'Company', Icon: Building2 },
  { label: 'Seniority', Icon: BarChart3 },
  { label: 'Department', Icon: Landmark },
  { label: 'Location', Icon: MapPin },
  { label: '# Employees', Icon: UsersRound },
  { label: 'Industry & Keywords', Icon: LineChart },
  { label: 'Revenue', Icon: DollarSign },
  { label: 'Technologies', Icon: Settings },
];

const QUICK_START = [
  { title: 'C-Suite Executives', sub: 'CEOs, CTOs, CFOs', Icon: User, color: '#ec4899' },
  { title: 'VP Engineering', sub: 'Tech decision makers', Icon: Code2, color: '#3b82f6' },
  { title: 'Sales Leaders', sub: 'Directors & Managers', Icon: TrendingUp, color: '#10b981' },
  { title: 'SaaS & Tech', sub: 'Technology companies', Icon: Layers, color: '#7C3AED' },
];

const COMPANY_FILTERS = [
  { label: 'Company Name', Icon: Building2, open: true },
  { label: 'Industry', Icon: BarChart3 },
  { label: 'Location', Icon: MapPin },
  { label: '# Employees', Icon: UsersRound },
  { label: 'Revenue', Icon: DollarSign },
  { label: 'Technologies', Icon: Settings },
  { label: 'Founded Year', Icon: CalendarIcon },
];

const INDUSTRY_OPTIONS = ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'SaaS', 'Retail', 'Real Estate', 'Media'];

const COMPANY_QUICK_START = [
  { title: 'SaaS & Tech', sub: 'Software companies', Icon: Code2, color: '#7C3AED' },
  { title: 'Mid-market', sub: '51–500 employees', Icon: TrendingUp, color: '#10b981' },
  { title: 'Healthcare', sub: 'Health & biotech', Icon: HeartPulse, color: '#ec4899' },
  { title: '$10M–$100M Revenue', sub: 'Growing companies', Icon: DollarSign, color: '#3b82f6' },
];

const COMPANY_RESULTS = [
  { name: 'Northgate Digital', domain: 'northgate.io', industry: 'Technology, Information and Internet', location: 'Quito, Ecuador', employees: '8' },
  { name: 'Loomis Software', domain: 'loomis-sw.com', industry: 'Information Technology and Services', location: 'Groningen, Netherlands', employees: '6' },
  { name: 'Brightpath Media', domain: 'brightpath.co', industry: 'Technology, Information and Internet', location: 'Tynaarlo, Netherlands', employees: '126' },
  { name: 'Copenhagen Cloud', domain: 'cphcloud.dk', industry: 'Technology, Information and Internet', location: 'Copenhagen, Denmark', employees: '5' },
  { name: 'Sentinel Security', domain: 'sentinel.tech', industry: 'Information Technology and Services', location: 'Tegucigalpa, Honduras', employees: '6' },
  { name: 'Connexa Labs', domain: 'connexa.com', industry: 'Technology, Information and Internet', location: 'Paris, France', employees: '6' },
  { name: 'Onewave Systems', domain: 'onewave.io', industry: 'Information Technology and Services', location: 'Denver, United States', employees: '—' },
  { name: 'Ovation IT Services', domain: 'ovation-it.com', industry: 'Information Technology and Services', location: 'Istanbul, Türkiye', employees: '31' },
  { name: 'Axion Ten', domain: 'axionten.se', industry: 'Information Technology and Services', location: 'Stockholm, Sweden', employees: '31' },
  { name: 'Cryptobyte Studio', domain: 'cryptobyte.com', industry: 'Technology, Information and Internet', location: 'Paris, France', employees: '6' },
  { name: 'Nexus8 Networks', domain: 'nexus8.io', industry: 'Information Technology and Services', location: 'Amsterdam, Netherlands', employees: '31' },
  { name: 'Bowline Cloud', domain: 'bowline.co', industry: 'Technology, Information and Internet', location: 'Randstad, Netherlands', employees: '18' },
];

const COMPANY_PEOPLE = [
  { initials: 'EH', color: '#7C3AED', name: 'Elena Hart', title: 'Chief Executive Officer' },
  { initials: 'RM', color: '#2563eb', name: 'Ravi Menon', title: 'VP of Engineering' },
  { initials: 'SC', color: '#0d9488', name: 'Sofia Chen', title: 'Head of Marketing' },
  { initials: 'TB', color: '#ec4899', name: 'Tomas Berg', title: 'Sales Director' },
];

const RESULTS = [
  { initials: 'AR', color: '#7C3AED', name: 'Aria Renner', title: 'COO', company: 'Northwind Labs', location: 'Cedar Falls, Iowa, United States' },
  { initials: 'DK', color: '#2563eb', name: 'Devon Kessler', title: 'Chief Financial Officer', company: 'Blue Harbor Group', location: 'Toronto, Canada' },
  { initials: 'MI', color: '#0d9488', name: 'Mira Iwata', title: 'COO, West Region', company: 'Everline Systems', location: 'California, United States' },
  { initials: 'LS', color: '#ec4899', name: 'Lukas Sommer', title: 'Chief Technology Officer', company: 'Helvetia Digital', location: 'Basel, Switzerland' },
  { initials: 'KN', color: '#f59e0b', name: 'Kian Novak', title: 'COO', company: 'Redwood Engineering', location: 'Portland, Oregon, United States' },
  { initials: 'ME', color: '#7C3AED', name: 'Maya Ellison', title: 'CEO', company: 'Atlas Originals', location: 'Austin, Texas, United States' },
  { initials: 'JT', color: '#2563eb', name: 'Jordan Tate', title: 'Chief Operating Officer', company: 'Meridian Inspection', location: 'Seattle, Washington, United States' },
  { initials: 'LC', color: '#0d9488', name: 'Lena Cardoso', title: 'Chief Operating Officer', company: 'Summit Field Co.', location: 'Telford, Pennsylvania, United States' },
  { initials: 'MB', color: '#ec4899', name: 'Marco Bianchi', title: 'Chief Operating Officer', company: 'Cascade Works', location: 'Enumclaw, Washington, United States' },
  { initials: 'KL', color: '#f59e0b', name: 'Kelvin Loh', title: 'Chief Executive Officer', company: 'Petra Carbon', location: 'Singapore' },
  { initials: 'JW', color: '#7C3AED', name: 'Jamie Winters', title: 'Chief Operating Officer', company: 'Metaltech Products', location: 'Lebanon, Missouri, United States' },
  { initials: 'SL', color: '#2563eb', name: 'Simone Lang', title: 'Chief Operating Officer', company: 'HYRobotics Corp.', location: 'Saint Louis, Missouri, United States' },
  { initials: 'TG', color: '#0d9488', name: 'Tomer Galil', title: 'Chief Operating Officer', company: 'Canoe Group', location: 'Haifa, Israel' },
];

export function ZeusPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('People');
  const [tour, setTour] = useState(1); // 1=C-Suite btn, 2=results, 3=detail reveal, 4=Companies SaaS&Tech, 0=done
  const [tab, setTab] = useState('Database');
  const [view, setView] = useState<'discover' | 'loading' | 'results'>('discover');
  const [searchLabel, setSearchLabel] = useState('Search people...');
  const [credits, setCredits] = useState(100);
  const [selected, setSelected] = useState<typeof RESULTS[number] | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [companyView, setCompanyView] = useState<'discover' | 'loading' | 'results'>('discover');
  const [companyLabel, setCompanyLabel] = useState('Search companies...');
  const [selectedCompany, setSelectedCompany] = useState<typeof COMPANY_RESULTS[number] | null>(null);
  const [companyPeopleLoading, setCompanyPeopleLoading] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [industrySearch, setIndustrySearch] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(['SaaS', 'Technology']);
  // Lists
  const [lists, setLists] = useState<{ name: string; type: string; members: typeof RESULTS[number][]; created: string }[]>([]);
  const [showListModal, setShowListModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [newListType, setNewListType] = useState('Static');
  const [activeListIdx, setActiveListIdx] = useState<number | null>(null);
  const [showAddPerson, setShowAddPerson] = useState(false);

  function createList() {
    const name = newListName.trim() || 'Untitled List';
    setLists((prev) => [...prev, { name, type: newListType, members: [], created: '9/5/2026' }]);
    setShowListModal(false);
    setNewListName('');
    setNewListType('Static');
  }

  function addPersonToActiveList(person: typeof RESULTS[number]) {
    if (activeListIdx === null) return;
    setLists((prev) => prev.map((l, i) => i === activeListIdx && !l.members.some((m) => m.name === person.name) ? { ...l, members: [...l.members, person] } : l));
  }

  function toggleIndustry(name: string) {
    setSelectedIndustries((prev) => prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]);
  }

  function openCompany(c: typeof COMPANY_RESULTS[number]) {
    setSelectedCompany(c);
    setCompanyPeopleLoading(true);
    setTimeout(() => setCompanyPeopleLoading(false), 1200);
  }

  function runCompanySearch(label: string) {
    setCompanyLabel(`Searching ${label}...`);
    setCompanyView('loading');
    setTimeout(() => {
      setCompanyView('results');
      setCompanyLabel(label);
    }, 1400);
  }

  function revealContact(name: string) {
    if (revealed[name] || credits <= 0) return;
    setRevealed((r) => ({ ...r, [name]: true }));
    setCredits((c) => c - 1);
  }

  function runSearch(label: string) {
    setSearchLabel(`Searching ${label}...`);
    setView('loading');
    setTimeout(() => {
      setView('results');
      setSearchLabel(label);
    }, 1400);
  }

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#fff', position: 'relative' }}>
      {/* Walkthrough — Step 1: C-Suite Executives quick start (People discover) */}
      {activeNav !== 'Companies' && activeNav !== 'Lists' && view === 'discover' && tour === 1 && (
        <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-190px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Quick start a search"
            subtitle="Click C-Suite Executives to instantly search for CEOs, CTOs, and CFOs."
            onNext={() => { runSearch('C-Suite Executives'); setTour(2); }}
            top="0" left="0" arrowSide="bottom" arrowOffset="30px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 2: Search results table */}
      {activeNav !== 'Companies' && activeNav !== 'Lists' && view === 'results' && !selected && tour === 2 && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Your search results"
            subtitle="Here are matching contacts. Click Next, or click any name to view their details."
            onNext={() => { setSelected(RESULTS[0]); setTour(3); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 3: Person detail panel — left of Reveal Contact */}
      {selected && !revealed[selected.name] && tour === 3 && (
        <div style={{ position: 'absolute', top: '150px', right: '328px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Reveal their contact"
            subtitle="Click Reveal Contact to unlock this person's email and phone for 1 credit."
            onNext={() => { revealContact(selected.name); setActiveNav('Companies'); setSelected(null); setTour(4); }}
            top="0" left="0" arrowSide="right" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 4: Companies discover — SaaS & Tech */}
      {activeNav === 'Companies' && companyView === 'discover' && tour === 4 && (
        <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-190px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Discover companies"
            subtitle="Switch to Companies anytime. Click SaaS & Tech to find software companies."
            onNext={() => { runCompanySearch('SaaS & Tech'); setTour(5); }}
            top="0" left="0" arrowSide="bottom" arrowOffset="30px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 5: Companies results table */}
      {activeNav === 'Companies' && companyView === 'results' && !selectedCompany && tour === 5 && (
        <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-120px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Company results"
            subtitle="Here are matching companies. Click Next, or click any company to view its details."
            onNext={() => { openCompany(COMPANY_RESULTS[0]); setTour(6); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 6: Company side panel */}
      {selectedCompany && tour === 6 && (
        <div style={{ position: 'absolute', top: '150px', right: '338px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Company details"
            subtitle="See the company profile and its key people here. Click Next to organize leads into Lists."
            onNext={() => { setActiveNav('Lists'); setSelectedCompany(null); setActiveListIdx(null); setSelected(null); setTour(7); }}
            top="0" left="0" arrowSide="right" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 7: Lists — under the + New List button */}
      {activeNav === 'Lists' && !showListModal && tour === 7 && (
        <div style={{ position: 'absolute', top: '54px', left: '270px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Build your lists"
            subtitle="Click + New List to group your leads into a saved list."
            onNext={() => { setShowListModal(true); setTour(8); }}
            top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 8: Create New List modal */}
      {activeNav === 'Lists' && showListModal && tour === 8 && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(180px, -60px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Create your list"
            subtitle="Name your list and pick a type. Click Next, or fill it in and hit Create List."
            onNext={() => { createList(); setTour(9); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Walkthrough — Step 9: Created list in My Lists (final) */}
      {activeNav === 'Lists' && !showListModal && lists.length > 0 && tour === 9 && (
        <div style={{ position: 'absolute', top: '62px', left: '340px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Your list is ready"
            subtitle="Here's your new list. Select it to view and manage members. That's the full Zeus tour!"
            onNext={() => { setTour(0); onEnd?.(); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Done"
          />
        </div>
      )}

      {/* Left nav */}
      <div style={{ width: '150px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '14px 10px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', paddingLeft: '2px' }}>
          <Menu size={15} style={{ color: '#888' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={12} style={{ color: '#fff' }} fill="#fff" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Zeus</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
          {ZEUS_NAV.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => { setActiveNav(item.label); setActiveListIdx(null); setSelected(null); setSelectedCompany(null); }} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 11px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11.5px', cursor: 'pointer' }}>
                <item.Icon size={14} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 11px', color: '#555', fontSize: '11.5px', fontWeight: 500, cursor: 'pointer', borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
          <ShieldCheck size={14} /> <span>Admin</span>
        </div>
      </div>

      {/* Filters column - People */}
      {activeNav !== 'Companies' && activeNav !== 'Lists' && (
      <div style={{ width: '180px', flexShrink: 0, borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top search (spans across, but here sits above filters) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>
            Filters
            {view === 'results' && <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>}
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>Clear all</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 14px' }}>
          {FILTERS.map((f) => (
            <div key={f.label} style={{ borderBottom: '1px solid #f5f5f5', paddingBottom: '8px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <f.Icon size={12} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#333', flex: 1 }}>{f.label}</span>
                {f.open ? <ChevronUp size={12} style={{ color: '#bbb' }} /> : <ChevronDown size={12} style={{ color: '#bbb' }} />}
              </div>
              {f.label === 'Keyword' && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ padding: '7px 10px', background: '#f7f7f8', border: '1px solid #eee', borderRadius: '7px', fontSize: '9.5px', color: '#aaa' }}>Search across all fields...</div>
                  <div style={{ fontSize: '8.5px', color: '#bbb', marginTop: '5px' }}>Searches name, title, and email</div>
                </div>
              )}
              {f.label === 'Name' && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ padding: '7px 10px', background: '#fff', border: '1px solid #eee', borderRadius: '7px', fontSize: '9.5px', color: '#aaa' }}>Search by name...</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f0' }}>
          <button style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>
            <Search size={13} /> Search People
          </button>
          <div style={{ fontSize: '8px', color: '#bbb', textAlign: 'center', marginTop: '7px' }}>↵ Enter or ⌘ ↵ from anywhere</div>
        </div>
      </div>
      )}

      {/* Filters column - Companies */}
      {activeNav === 'Companies' && (
      <div style={{ width: '180px', flexShrink: 0, borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>
            Filters
            {companyView === 'results' && <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>}
          </span>
          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>Clear all</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 14px' }}>
          {COMPANY_FILTERS.map((f) => {
            const isIndustry = f.label === 'Industry';
            const expanded = isIndustry ? industryOpen : !!f.open;
            const filteredIndustries = INDUSTRY_OPTIONS.filter((o) => o.toLowerCase().includes(industrySearch.toLowerCase()));
            return (
            <div key={f.label} style={{ borderBottom: '1px solid #f5f5f5', paddingBottom: '8px', marginBottom: '8px' }}>
              <div onClick={isIndustry ? () => setIndustryOpen((o) => !o) : undefined} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <f.Icon size={12} style={{ color: '#7C3AED' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#333', flex: 1 }}>{f.label}</span>
                {expanded ? <ChevronUp size={12} style={{ color: '#bbb' }} /> : <ChevronDown size={12} style={{ color: '#bbb' }} />}
              </div>
              {f.label === 'Company Name' && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ padding: '7px 10px', background: '#fff', border: '1px solid #eee', borderRadius: '7px', fontSize: '9.5px', color: '#aaa' }}>Search by name or domain...</div>
                </div>
              )}
              {isIndustry && industryOpen && (
                <div style={{ marginTop: '9px' }}>
                  {/* Selected chips */}
                  {selectedIndustries.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '8px' }}>
                      {selectedIndustries.map((s) => (
                        <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '12px', background: '#f3efff', color: '#7C3AED', fontSize: '9px', fontWeight: 600 }}>
                          {s}
                          <X size={9} style={{ cursor: 'pointer' }} onClick={() => toggleIndustry(s)} />
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Search */}
                  <div style={{ marginBottom: '8px' }}>
                    <input
                      value={industrySearch}
                      onChange={(e) => setIndustrySearch(e.target.value)}
                      placeholder="Search industries..."
                      style={{ width: '100%', padding: '7px 10px', background: '#fff', border: '1px solid #eee', borderRadius: '7px', fontSize: '9.5px', color: '#333', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  {/* Checkbox list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '120px', overflowY: 'auto' }}>
                    {filteredIndustries.map((opt) => {
                      const checked = selectedIndustries.includes(opt);
                      return (
                        <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <span onClick={() => toggleIndustry(opt)} style={{ width: '13px', height: '13px', borderRadius: '3px', border: checked ? 'none' : '1.5px solid #ccc', background: checked ? '#7C3AED' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {checked && <Check size={9} style={{ color: '#fff' }} strokeWidth={3} />}
                          </span>
                          <span onClick={() => toggleIndustry(opt)} style={{ fontSize: '10px', color: '#444' }}>{opt}</span>
                        </label>
                      );
                    })}
                    {filteredIndustries.length === 0 && (
                      <span style={{ fontSize: '9.5px', color: '#bbb' }}>No matches</span>
                    )}
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>

        <div style={{ padding: '12px 14px', borderTop: '1px solid #f0f0f0' }}>
          <button style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>
            <Search size={13} /> Search Companies
          </button>
          <div style={{ fontSize: '8px', color: '#bbb', textAlign: 'center', marginTop: '7px' }}>↵ Enter or ⌘ ↵ from anywhere</div>
        </div>
      </div>
      )}

      {/* My Lists column */}
      {activeNav === 'Lists' && (
      <div style={{ width: '180px', flexShrink: 0, borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>My Lists</span>
          <button onClick={() => { setShowListModal(true); if (tour === 7) setTour(8); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 11px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '9.5px', fontWeight: 600, cursor: 'pointer' }}>
            <Plus size={11} /> New List
          </button>
        </div>

        {lists.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', color: '#bbb' }}>
            <List size={26} style={{ color: '#d5d5d5', marginBottom: '12px' }} />
            <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#666', marginBottom: '4px' }}>No lists yet</div>
            <div style={{ fontSize: '9.5px', color: '#aaa', lineHeight: 1.5 }}>Create your first list to organize leads</div>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '4px 10px' }}>
            {lists.map((l, i) => {
              const active = activeListIdx === i;
              return (
                <div key={i} onClick={() => setActiveListIdx(i)} style={{ padding: '10px 11px', borderRadius: '9px', background: active ? '#f3efff' : 'transparent', cursor: 'pointer', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '4px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: '#7C3AED' }} />
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a' }}>{l.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9px', color: '#999' }}>
                    <span style={{ color: '#7C3AED', fontWeight: 600 }}>{l.type}</span>
                    <span>·</span>
                    <span>{l.members.length} members</span>
                    <span>·</span>
                    <span>{l.created}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      )}

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 20px', borderBottom: '1px solid #f0f0f0' }}>
          {(() => {
            const isCompanies = activeNav === 'Companies';
            const curView = isCompanies ? companyView : view;
            const curLabel = isCompanies ? companyLabel : searchLabel;
            return (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: '#f4f4f5', borderRadius: '20px', color: curView === 'discover' ? '#aaa' : '#555', fontSize: '11px', flex: 1, maxWidth: '440px' }}>
                {curView === 'loading' ? <Loader2 size={13} style={{ color: '#7C3AED', animation: 'zeus-spin 0.8s linear infinite' }} /> : <Search size={13} />}
                <span>{curLabel}</span>
              </div>
            );
          })()}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 11px', background: '#f3efff', borderRadius: '14px', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}><Zap size={11} fill="#7C3AED" /> {credits}</div>
            <LayoutGrid size={15} style={{ color: '#888' }} />
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>U</div>
          </div>
        </div>

        {/* Toolbar - People */}
        {activeNav !== 'Companies' && activeNav !== 'Lists' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '9px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '10.5px', color: '#666' }}>
          <span>Saved <b style={{ color: '#1a1a1a' }}>0</b></span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Filter size={12} /> Hide Filters</span>
          <div onClick={() => setTab('Database')} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '14px', background: tab === 'Database' ? '#1a1a1a' : 'transparent', color: tab === 'Database' ? '#fff' : '#666', fontWeight: 600, cursor: 'pointer' }}><Database size={12} /> Database</div>
          <div onClick={() => setTab('Find Email')} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '14px', background: tab === 'Find Email' ? '#1a1a1a' : 'transparent', color: tab === 'Find Email' ? '#fff' : '#666', fontWeight: 600, cursor: 'pointer' }}><Mail size={12} /> Find Email</div>
        </div>
        )}

        {/* Toolbar - Companies */}
        {activeNav === 'Companies' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '9px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '10.5px', color: '#666' }}>
          <div onClick={() => setTab('Database')} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '14px', background: tab === 'Database' ? '#1a1a1a' : 'transparent', color: tab === 'Database' ? '#fff' : '#666', fontWeight: 600, cursor: 'pointer' }}><Database size={12} /> Database</div>
          <div onClick={() => setTab('Web')} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 12px', borderRadius: '14px', background: tab === 'Web' ? '#1a1a1a' : 'transparent', color: tab === 'Web' ? '#fff' : '#666', fontWeight: 600, cursor: 'pointer' }}><Globe size={12} /> Web</div>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '4px' }}><Filter size={12} /> Hide Filters</span>
        </div>
        )}

        {/* Discovery / loading state (People) */}
        {activeNav !== 'Companies' && activeNav !== 'Lists' && (view === 'discover' || view === 'loading') && (
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px 24px' }}>
          {view === 'loading' ? (
            <>
              <Loader2 size={34} style={{ color: '#7C3AED', animation: 'zeus-spin 0.8s linear infinite', marginBottom: '16px' }} />
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>Searching contacts...</div>
              <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>Matching {searchLabel.replace('Searching ', '').replace('...', '')} across the database</div>
            </>
          ) : (
            <>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f3efff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <UsersRound size={28} style={{ color: '#7C3AED' }} />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Find your next leads</div>
              <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.6, maxWidth: '340px', marginBottom: '24px' }}>Search millions of verified contacts by name, title, company, location, and more.</div>

              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '12px' }}>QUICK START</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', maxWidth: '420px' }}>
                {QUICK_START.map((q) => (
                  <div key={q.title} onClick={() => { runSearch(q.title); if (tour === 1 && q.title === 'C-Suite Executives') setTour(2); }} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 15px', borderRadius: '12px', border: '1px solid #f0f0f0', background: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '9px', background: `${q.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <q.Icon size={14} style={{ color: q.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1a1a1a' }}>{q.title}</div>
                      <div style={{ fontSize: '9.5px', color: '#999' }}>{q.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        )}

        {/* Results table (People) */}
        {activeNav !== 'Companies' && activeNav !== 'Lists' && view === 'results' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Results toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '8px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Total <b style={{ color: '#1a1a1a' }}>2,675,152</b></span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto', fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>
                <Bookmark size={12} /> Save search
              </div>
            </div>

            {/* Table */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '26px 1.4fr 1.4fr 1.4fr 1.1fr 0.8fr 1.4fr', gap: '8px', padding: '9px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em', position: 'sticky', top: 0, background: '#fff' }}>
                <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ccc', borderRadius: '3px' }} /></span>
                <span>Name</span><span>Title</span><span>Company</span><span>Email</span><span>Phone</span><span>Location</span>
              </div>
              {RESULTS.map((r) => (
                <div key={r.name} onClick={() => { setSelected(r); if (tour === 2) setTour(3); }} style={{ display: 'grid', gridTemplateColumns: '26px 1.4fr 1.4fr 1.4fr 1.1fr 0.8fr 1.4fr', gap: '8px', padding: '9px 20px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10px', cursor: 'pointer', background: selected?.name === r.name ? '#faf8ff' : 'transparent' }}>
                  <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ddd', borderRadius: '3px' }} /></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: r.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, flexShrink: 0 }}>{r.initials}</span>
                    <span style={{ fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</span>
                  </span>
                  <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.title}</span>
                  <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.company}</span>
                  {revealed[r.name] ? (
                    <span style={{ color: '#7C3AED', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name.toLowerCase().replace(/[^a-z]/g, '.')}@{r.company.toLowerCase().replace(/[^a-z]/g, '')}.com</span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#aaa', fontStyle: 'italic' }}><Lock size={9} /> •••••@•••.com</span>
                  )}
                  <span style={{ color: revealed[r.name] ? '#555' : '#bbb', fontStyle: revealed[r.name] ? 'normal' : 'italic' }}>{revealed[r.name] ? '+1 (415) 555-0' + (100 + (r.name.length * 37) % 900) : 'Unavailable'}</span>
                  <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.location}</span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '9px 20px', borderTop: '1px solid #f0f0f0', fontSize: '10px', color: '#888' }}>
              <span>1–25 of 2,675,152</span>
              <span style={{ marginLeft: '14px' }}>Show</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '6px', padding: '3px 8px', border: '1px solid #eee', borderRadius: '6px' }}>25 <ChevronDown size={10} /></span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                <ChevronLeft size={13} style={{ color: '#ccc' }} />
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>1</span>
                <span style={{ padding: '0 5px' }}>2</span>
                <span>…</span>
                <span style={{ padding: '3px 7px', border: '1px solid #eee', borderRadius: '6px' }}>107007</span>
                <ChevronRight size={13} style={{ color: '#888' }} />
              </div>
            </div>
          </div>
        )}

        {/* Companies discover / loading state */}
        {activeNav === 'Companies' && (companyView === 'discover' || companyView === 'loading') && (
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px 24px' }}>
            {companyView === 'loading' ? (
              <>
                <Loader2 size={34} style={{ color: '#7C3AED', animation: 'zeus-spin 0.8s linear infinite', marginBottom: '16px' }} />
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>Searching companies...</div>
                <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>Matching {companyLabel.replace('Searching ', '').replace('...', '')} across the database</div>
              </>
            ) : (
              <>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f3efff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <Building2 size={26} style={{ color: '#7C3AED' }} />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Discover companies</div>
                <div style={{ fontSize: '12px', color: '#888', lineHeight: 1.6, maxWidth: '360px', marginBottom: '24px' }}>Search by industry, size, location, revenue, and technologies to find your ideal customers.</div>

                <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', color: '#bbb', marginBottom: '12px' }}>QUICK START</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', maxWidth: '420px' }}>
                  {COMPANY_QUICK_START.map((q) => (
                    <div key={q.title} onClick={() => { runCompanySearch(q.title); if (tour === 4 && q.title === 'SaaS & Tech') setTour(5); }} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 15px', borderRadius: '12px', border: '1px solid #f0f0f0', background: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '9px', background: `${q.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <q.Icon size={14} style={{ color: q.color }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1a1a1a' }}>{q.title}</div>
                        <div style={{ fontSize: '9.5px', color: '#999' }}>{q.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Companies results table */}
        {activeNav === 'Companies' && companyView === 'results' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '8px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ fontSize: '11px', color: '#666' }}><b style={{ color: '#1a1a1a' }}>167,664</b> results</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto', fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>
                <Bookmark size={12} /> Save search
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '26px 2fr 1.8fr 1.4fr 0.8fr 0.8fr', gap: '8px', padding: '9px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em', position: 'sticky', top: 0, background: '#fff' }}>
                <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ccc', borderRadius: '3px' }} /></span>
                <span>Company</span><span>Industry</span><span>Location</span><span>Employees</span><span>Revenue</span>
              </div>
              {COMPANY_RESULTS.map((c) => (
                <div key={c.name} onClick={() => { openCompany(c); if (tour === 5) setTour(6); }} style={{ display: 'grid', gridTemplateColumns: '26px 2fr 1.8fr 1.4fr 0.8fr 0.8fr', gap: '8px', padding: '10px 20px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10px', cursor: 'pointer', background: selectedCompany?.name === c.name ? '#faf8ff' : 'transparent' }}>
                  <span><span style={{ display: 'inline-block', width: '12px', height: '12px', border: '1.5px solid #ddd', borderRadius: '3px' }} /></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#f3efff', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Building2 size={11} /></span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                      <span style={{ display: 'block', fontSize: '8.5px', color: '#aaa' }}>www.{c.domain}</span>
                    </span>
                  </span>
                  <span style={{ color: '#3b82f6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.industry}</span>
                  <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.location}</span>
                  <span style={{ color: '#555' }}>{c.employees}</span>
                  <span style={{ color: '#bbb' }}>—</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', padding: '9px 20px', borderTop: '1px solid #f0f0f0', fontSize: '10px', color: '#888' }}>
              <span>51–75 of 167,664</span>
              <span style={{ marginLeft: '14px' }}>Show</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '6px', padding: '3px 8px', border: '1px solid #eee', borderRadius: '6px' }}>25 <ChevronDown size={10} /></span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                <ChevronLeft size={13} style={{ color: '#888' }} />
                <span style={{ padding: '0 5px' }}>1</span>
                <span style={{ padding: '0 5px' }}>2</span>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>3</span>
                <span style={{ padding: '0 5px' }}>4</span>
                <span>…</span>
                <span style={{ padding: '3px 7px', border: '1px solid #eee', borderRadius: '6px' }}>6707</span>
                <ChevronRight size={13} style={{ color: '#888' }} />
              </div>
            </div>
          </div>
        )}

        {/* Lists main content */}
        {activeNav === 'Lists' && activeListIdx === null && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px' }}>
            <List size={30} style={{ color: '#d5d5d5', marginBottom: '14px' }} />
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Select a list</div>
            <div style={{ fontSize: '11.5px', color: '#999' }}>Choose a list from the left to view its members</div>
          </div>
        )}

        {activeNav === 'Lists' && activeListIdx !== null && lists[activeListIdx] && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* List header */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #f0f0f0' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{lists[activeListIdx].name}</div>
                <div style={{ fontSize: '10px', color: '#999', marginTop: '2px' }}>{lists[activeListIdx].type} · {lists[activeListIdx].members.length} members</div>
              </div>
              <button onClick={() => setShowAddPerson(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 15px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}>
                <Plus size={13} /> Add People
              </button>
            </div>

            {/* Members */}
            {lists[activeListIdx].members.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px' }}>
                <UsersRound size={28} style={{ color: '#d5d5d5', marginBottom: '12px' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>No members yet</div>
                <div style={{ fontSize: '11px', color: '#999' }}>Add people to start building this list</div>
              </div>
            ) : (
              <div style={{ flex: 1, overflowY: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 1.4fr 1.4fr', gap: '8px', padding: '9px 20px', borderBottom: '1px solid #f0f0f0', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  <span>Name</span><span>Title</span><span>Company</span><span>Location</span>
                </div>
                {lists[activeListIdx].members.map((m) => (
                  <div key={m.name} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 1.4fr 1.4fr', gap: '8px', padding: '10px 20px', borderBottom: '1px solid #f8f8f8', alignItems: 'center', fontSize: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: m.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, flexShrink: 0 }}>{m.initials}</span>
                      <span style={{ fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.name}</span>
                    </span>
                    <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.title}</span>
                    <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.company}</span>
                    <span style={{ color: '#555', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.location}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact side panel */}
      {selected && (
        <>
          <div onClick={() => setSelected(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)', zIndex: 90 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '300px', background: '#fff', borderLeft: '1px solid #eee', boxShadow: '-8px 0 30px -12px rgba(0,0,0,0.15)', zIndex: 100, display: 'flex', flexDirection: 'column', padding: '18px 18px', overflowY: 'auto' }}>
            <div onClick={() => setSelected(null)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '18px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: selected.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>{selected.initials}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>{selected.name}</div>
                <div style={{ fontSize: '10.5px', color: '#888' }}>{selected.title}</div>
              </div>
            </div>

            {/* Contact info card */}
            <div style={{ border: '1px solid #eee', borderRadius: '12px', padding: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a' }}>Contact Information</span>
                {!revealed[selected.name] && <span style={{ display: 'flex', alignItems: 'center', gap: '3px', marginLeft: 'auto', fontSize: '9px', fontWeight: 600, color: '#7C3AED' }}><Zap size={9} fill="#7C3AED" /> 1 credit</span>}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '9px', fontSize: '10.5px', color: revealed[selected.name] ? '#1a1a1a' : '#aaa' }}>
                <Mail size={12} style={{ color: '#bbb' }} />
                {revealed[selected.name]
                  ? <span>{selected.name.toLowerCase().replace(/[^a-z]/g, '.')}@{selected.company.toLowerCase().replace(/[^a-z]/g, '')}.com</span>
                  : <span style={{ fontStyle: 'italic' }}>•••••••@•••.com</span>}
                <Lock size={10} style={{ color: '#ccc', marginLeft: 'auto' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '10.5px', color: revealed[selected.name] ? '#1a1a1a' : '#aaa' }}>
                <Phone size={12} style={{ color: '#bbb' }} />
                {revealed[selected.name]
                  ? <span>+1 (415) 555-0{100 + (selected.name.length * 37) % 900}</span>
                  : <span style={{ fontStyle: 'italic' }}>+• ••• ••• ••••</span>}
                <Lock size={10} style={{ color: '#ccc', marginLeft: 'auto' }} />
              </div>

              {revealed[selected.name] ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', background: '#ECFDF5', color: '#059669', borderRadius: '10px', fontSize: '11px', fontWeight: 600, marginBottom: '10px' }}>
                  <Check size={13} /> Contact revealed
                </div>
              ) : (
                <button onClick={() => { revealContact(selected.name); if (tour === 3) { setActiveNav('Companies'); setSelected(null); setTour(4); } }} style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '10px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer', marginBottom: '10px' }}>
                  <Eye size={13} /> Reveal Contact (1 credit)
                </button>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '10.5px', fontWeight: 600, color: '#0a66c2', cursor: 'pointer' }}>
                <LinkedinIcon size={12} /> View LinkedIn Profile
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px', marginBottom: '18px' }}>
              <span style={{ fontSize: '11px', color: '#888' }}>Location</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a', textAlign: 'right' }}>{selected.location}</span>
            </div>

            {/* Actions */}
            <button style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '10px', background: '#fff', color: '#333', border: '1px solid #e5e5e5', borderRadius: '10px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', marginBottom: '10px' }}>
              <Plus size={13} /> Add to List
            </button>
            <button style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '7px', padding: '10px', background: '#fff', color: '#333', border: '1px solid #e5e5e5', borderRadius: '10px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>
              <LinkedinIcon size={13} /> View LinkedIn
            </button>
          </div>
        </>
      )}

      {/* Company side panel */}
      {selectedCompany && (
        <>
          <div onClick={() => setSelectedCompany(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)', zIndex: 90 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '310px', background: '#fff', borderLeft: '1px solid #eee', boxShadow: '-8px 0 30px -12px rgba(0,0,0,0.15)', zIndex: 100, display: 'flex', flexDirection: 'column', padding: '18px', overflowY: 'auto' }}>
            <div onClick={() => setSelectedCompany(null)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#bbb' }}><X size={15} /></div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '18px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f3efff', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Building2 size={18} /></div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>{selectedCompany.name}</div>
                <div style={{ fontSize: '10px', color: '#888' }}>www.{selectedCompany.domain}</div>
              </div>
            </div>

            {/* Detail grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div style={{ background: '#f7f7f8', borderRadius: '10px', padding: '10px 12px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '5px' }}>INDUSTRY</div>
                <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>{selectedCompany.industry}</div>
              </div>
              <div style={{ background: '#f7f7f8', borderRadius: '10px', padding: '10px 12px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '5px' }}>EMPLOYEES</div>
                <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1a1a' }}>{selectedCompany.employees}</div>
              </div>
            </div>
            <div style={{ background: '#f7f7f8', borderRadius: '10px', padding: '10px 12px', marginBottom: '10px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '5px' }}>LOCATION</div>
              <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1a1a1a' }}>{selectedCompany.location}</div>
            </div>
            <div style={{ background: '#f7f7f8', borderRadius: '10px', padding: '10px 12px', marginBottom: '10px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em', color: '#aaa', marginBottom: '5px' }}>WEBSITE</div>
              <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#3b82f6' }}>https://www.{selectedCompany.domain}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: 600, color: '#0a66c2', cursor: 'pointer', marginBottom: '18px', padding: '0 2px' }}>
              <LinkedinIcon size={12} /> View on LinkedIn
            </div>

            {/* People at company */}
            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>People at {selectedCompany.name}</div>
              {companyPeopleLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f0f0f0', animation: 'zeus-pulse 1.2s ease-in-out infinite' }} />
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ height: '8px', width: '55%', borderRadius: '4px', background: '#f0f0f0', animation: 'zeus-pulse 1.2s ease-in-out infinite' }} />
                        <div style={{ height: '7px', width: '35%', borderRadius: '4px', background: '#f3f3f3', animation: 'zeus-pulse 1.2s ease-in-out infinite' }} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {COMPANY_PEOPLE.map((p) => (
                    <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 4px', cursor: 'pointer' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>{p.initials}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>{p.name}</div>
                        <div style={{ fontSize: '9.5px', color: '#999' }}>{p.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Create New List modal */}
      {showListModal && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 120 }}>
          <div style={{ width: '320px', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>Create New List</div>

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>List Name</div>
            <input
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="e.g. Tech CEOs"
              style={{ width: '100%', padding: '9px 12px', border: '1.5px solid #7C3AED', borderRadius: '9px', fontSize: '11.5px', color: '#1a1a1a', outline: 'none', boxSizing: 'border-box', marginBottom: '16px', boxShadow: '0 0 0 3px rgba(124,58,237,0.12)' }}
            />

            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Type</div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <div onClick={() => setNewListType('Static')} style={{ flex: 1, padding: '10px 12px', borderRadius: '10px', border: newListType === 'Static' ? '1.5px solid #7C3AED' : '1px solid #eee', background: newListType === 'Static' ? '#faf7ff' : '#fff', cursor: 'pointer' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Static</div>
                <div style={{ fontSize: '9px', color: '#888', lineHeight: 1.4 }}>Manually add members</div>
              </div>
              <div onClick={() => setNewListType('Dynamic')} style={{ flex: 1, padding: '10px 12px', borderRadius: '10px', border: newListType === 'Dynamic' ? '1.5px solid #7C3AED' : '1px solid #eee', background: newListType === 'Dynamic' ? '#faf7ff' : '#fff', cursor: 'pointer' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', marginBottom: '3px' }}>Dynamic</div>
                <div style={{ fontSize: '9px', color: '#888', lineHeight: 1.4 }}>Auto-updates by filters</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={() => setShowListModal(false)} style={{ padding: '8px 16px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
              <button onClick={() => { createList(); if (tour === 8) setTour(9); }} style={{ padding: '8px 18px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Create List</button>
            </div>
          </div>
        </div>
      )}

      {/* Add People modal */}
      {showAddPerson && activeListIdx !== null && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.35)', zIndex: 120 }}>
          <div style={{ width: '340px', maxHeight: '80%', background: '#fff', borderRadius: '14px', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.3)', padding: '20px 22px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Add People</span>
              <X size={15} style={{ marginLeft: 'auto', color: '#bbb', cursor: 'pointer' }} onClick={() => setShowAddPerson(false)} />
            </div>
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {RESULTS.map((p) => {
                const added = lists[activeListIdx].members.some((m) => m.name === p.name);
                return (
                  <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 6px', borderRadius: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8.5px', fontWeight: 700, flexShrink: 0 }}>{p.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>{p.name}</div>
                      <div style={{ fontSize: '9px', color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title} · {p.company}</div>
                    </div>
                    <button onClick={() => addPersonToActiveList(p)} disabled={added} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 11px', borderRadius: '14px', border: 'none', fontSize: '9.5px', fontWeight: 600, cursor: added ? 'default' : 'pointer', background: added ? '#ECFDF5' : '#f3efff', color: added ? '#059669' : '#7C3AED' }}>
                      {added ? <><Check size={11} /> Added</> : <><Plus size={11} /> Add</>}
                    </button>
                  </div>
                );
              })}
            </div>
            <button onClick={() => setShowAddPerson(false)} style={{ marginTop: '14px', padding: '9px', background: 'linear-gradient(135deg, #7C3AED 0%, #a855f7 100%)', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Done</button>
          </div>
        </div>
      )}

      <style>{`@keyframes zeus-spin { to { transform: rotate(360deg); } } @keyframes zeus-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}
