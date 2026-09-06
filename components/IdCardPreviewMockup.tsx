'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Coachmark } from '@/components/Coachmark';
import { Home, IdCard, CreditCard, Mail, Image as ImageIcon, Users, Calendar, BarChart3, ChevronDown, LayoutGrid, PanelLeft, ArrowRight, PlayCircle, HelpCircle, Plus, ChevronRight, User, Briefcase, Building2, Check, ImageIcon as ImgIcon, Search, Info, Copy } from 'lucide-react';

function LayoutThumb({ layout }: { layout: typeof DESIGN_LAYOUTS[number] }) {
  if (layout.style === 'gradient') {
    return <div style={{ height: '38px', borderRadius: '8px', background: layout.bg }} />;
  }
  // wave-style thumbnails: light/dark surface with an avatar and a wave band
  const dark = layout.key === 'Midnight';
  return (
    <div style={{ height: '38px', borderRadius: '8px', background: layout.bg, border: layout.bg === '#ffffff' ? '1px solid #eee' : 'none', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: dark ? '#e5e5e5' : '#c9c9c9' }} />
      <svg viewBox="0 0 100 16" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '14px' }}>
        <path d="M0 16 L0 6 Q25 16 50 7 Q75 -1 100 8 L100 16 Z" fill={layout.accent} />
      </svg>
    </div>
  );
}

function BizStyleThumb({ style }: { style: typeof BIZ_STYLES[number] }) {
  const accent = style.accent || '#7C3AED';
  const line = (w: string, dark = false) => (
    <div style={{ height: '3px', width: w, borderRadius: '2px', background: dark ? '#555' : '#333' }} />
  );
  const base: CSSProperties = { height: '64px', borderRadius: '10px', background: style.bg, border: style.bg === '#ffffff' ? '1px solid #eee' : 'none', position: 'relative', overflow: 'hidden' };

  switch (style.variant) {
    case 'profileLeft':
      return (
        <div style={{ ...base, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }} />
        </div>
      );
    case 'darkAvatar':
      return (
        <div style={{ ...base, display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>{line('60%', true)}{line('40%', true)}</div>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#e5e5e5' }} />
        </div>
      );
    case 'sideBand':
      return (
        <div style={{ ...base, display: 'flex' }}>
          <div style={{ width: '14px', background: accent }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center', padding: '0 10px' }}>{line('55%')}{line('35%')}</div>
        </div>
      );
    case 'topBand':
      return (
        <div style={{ ...base }}>
          <div style={{ height: '10px', background: accent }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px 12px' }}>{line('55%')}{line('35%')}</div>
        </div>
      );
    case 'diagonal':
      return (
        <div style={{ ...base, background: '#fff', border: '1px solid #eee' }}>
          <div style={{ position: 'absolute', inset: 0, background: accent, clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        </div>
      );
    case 'linesAvatar':
      return (
        <div style={{ ...base, display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>{line('60%')}{line('40%')}</div>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#d9d2f2' }} />
        </div>
      );
    case 'waveBottom':
      return (
        <div style={{ ...base }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '12px 12px' }}>{line('55%')}{line('35%')}</div>
          <svg viewBox="0 0 100 18" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '16px' }}>
            <path d="M0 18 L0 8 Q25 18 50 9 Q75 0 100 10 L100 18 Z" fill={accent} />
          </svg>
        </div>
      );
    case 'lines':
    default:
      return (
        <div style={{ ...base, display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>{line('50%')}{line('30%')}</div>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#d9d9d9' }} />
        </div>
      );
  }
}

function SigThumb({ variant, active }: { variant: string; active: boolean }) {
  const bar = (w: string) => <div style={{ height: '2.5px', width: w, borderRadius: '2px', background: '#c9ccd2' }} />;
  const box: CSSProperties = { height: '46px', borderRadius: '9px', border: active ? '1.5px solid #7C3AED' : '1px solid #ececec', background: active ? '#f6f1ff' : '#fafafa', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 9px', overflow: 'hidden' };

  const lines = (n: number, widths: string[]) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>{widths.slice(0, n).map((w, i) => <div key={i}>{bar(w)}</div>)}</div>
  );

  switch (variant) {
    case 'photoLeftLines':
    case 'photoLeftBold':
      return <div style={box}><div style={{ width: '14px', height: '20px', borderRadius: '4px', background: '#7C3AED' }} />{lines(2, ['70%', '45%'])}</div>;
    case 'dotLeft':
      return <div style={box}><div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#7C3AED' }} />{lines(2, ['65%', '40%'])}</div>;
    case 'boxLeftLines':
    case 'boxCenter':
      return <div style={box}><div style={{ width: '13px', height: '13px', borderRadius: '3px', background: '#cfd3da' }} />{lines(2, ['60%', '38%'])}</div>;
    case 'circleLeft':
    case 'circleOutline':
      return <div style={box}><div style={{ width: '16px', height: '16px', borderRadius: '50%', background: variant === 'circleOutline' ? 'transparent' : '#d7d9de', border: variant === 'circleOutline' ? '2px solid #cfd3da' : 'none' }} />{lines(2, ['62%', '42%'])}</div>;
    case 'circleRight':
      return <div style={box}>{lines(2, ['62%', '42%'])}<div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#d7d9de' }} /></div>;
    case 'darkBar':
    case 'darkPanel':
      return <div style={{ ...box, background: active ? '#f6f1ff' : '#fafafa' }}><div style={{ flex: 1, height: '20px', borderRadius: '4px', background: '#1a1a1a', display: 'flex', alignItems: 'center', paddingLeft: '6px' }}><div style={{ height: '2.5px', width: '40%', background: '#666', borderRadius: '2px' }} /></div></div>;
    case 'boxRight':
    case 'dashRight':
      return <div style={box}>{lines(2, ['60%', '38%'])}<div style={{ width: '13px', height: '13px', borderRadius: '3px', background: '#cfd3da' }} /></div>;
    case 'linesWide':
    case 'linesStacked':
    case 'linesCompact':
    case 'barCenter':
      return <div style={{ ...box, justifyContent: 'center' }}>{lines(2, ['70%', '45%'])}</div>;
    case 'linesRight':
      return <div style={{ ...box, textAlign: 'right' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1, alignItems: 'flex-end' }}>{bar('60%')}{bar('40%')}</div></div>;
    case 'linesTwoCol':
      return <div style={box}>{lines(2, ['45%', '30%'])}{lines(2, ['45%', '30%'])}</div>;
    default:
      return <div style={{ ...box, justifyContent: 'center' }}>{lines(2, ['65%', '42%'])}</div>;
  }
}

const CARD_TYPES = [
  { key: 'Personal', Icon: User, iconBg: '#EDE9FE', iconColor: '#7C3AED', desc: 'Name, photo, email, phone, social links' },
  { key: 'Work', Icon: Briefcase, iconBg: '#E0F2FE', iconColor: '#0284C7', desc: 'Name, title, company, department, email' },
  { key: 'Business', Icon: Building2, iconBg: '#1a1a1a', iconColor: '#fff', desc: 'Profile, about me, address, social links' },
];

const CARD_TABS = ['Card', 'Display', 'Information', 'Fields'];

const DESIGN_LAYOUTS = [
  { key: 'Classic', bg: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)', style: 'gradient' },
  { key: 'Flat', bg: '#4f46e5', style: 'gradient' },
  { key: 'Modern', bg: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)', style: 'gradient' },
  { key: 'Sleek', bg: '#1a1a1a', style: 'gradient' },
  { key: 'Blend', bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', style: 'gradient' },
  { key: 'Wave', bg: '#ffffff', style: 'wave', accent: '#7C3AED' },
  { key: 'Midnight', bg: '#141824', style: 'wave', accent: '#e5e5e5' },
  { key: 'Mist', bg: '#ffffff', style: 'wave', accent: '#c4b5fd' },
  { key: 'Purple', bg: '#7C3AED', style: 'wave', accent: '#ffffff' },
  { key: 'Off Wave', bg: '#ffffff', style: 'waveDark', accent: '#1a1a1a' },
];

const ACCENT_COLORS = ['#7C3AED', '#a78bfa', '#3b82f6', '#2563eb', '#14b8a6', '#059669', '#d97706', '#ea580c', '#ec4899', '#e11d48', '#1a1a1a'];

// Business card landscape styles
const BIZ_STYLES = [
  { key: 'profile', variant: 'profileLeft', bg: '#7C3AED' },
  { key: 'Portrait', variant: 'lines', bg: '#ffffff', accent: '#7C3AED' },
  { key: 'Midnight', variant: 'darkAvatar', bg: '#141824', accent: '#e5e5e5' },
  { key: 'ID Roll', variant: 'sideBand', bg: '#ffffff', accent: '#7C3AED' },
  { key: 'Orbit', variant: 'topBand', bg: '#ffffff', accent: '#7C3AED' },
  { key: 'Hex', variant: 'lines', bg: '#ffffff', accent: '#7C3AED' },
  { key: 'Split', variant: 'diagonal', bg: '#7C3AED' },
  { key: 'Minimal', variant: 'linesAvatar', bg: '#ffffff', accent: '#7C3AED' },
  { key: 'Wave', variant: 'waveBottom', bg: '#ffffff', accent: '#7C3AED' },
];
const BACKGROUND_COLORS = ['#ffffff', '#f3f4f6', '#1a1a1a', '#0b1220', '#7C3AED', '#0d9488', '#dc2626'];

// Email signature style thumbnails (17 layout variants)
const SIG_STYLES = [
  'photoLeftLines', 'linesStacked', 'dotLeft', 'boxLeftLines', 'linesWide',
  'linesRight', 'circleLeft', 'darkBar', 'circleRight', 'boxRight',
  'circleOutline', 'linesCompact', 'linesTwoCol', 'photoLeftBold', 'dashRight',
  'barCenter', 'boxCenter', 'darkPanel',
];
const SIG_MAIL_APPS = ['Apple', 'Gmail', 'Other', 'Outlook'];
const SIG_OS = ['Web', 'Mac', 'Mobile', 'Windows'];
const SIG_STEPS = [
  'Copy your signature.',
  'Open Mail > Settings > Signatures.',
  "Click '+' to create a new signature.",
];

const FIELD_GROUPS = [
  { group: 'MOST POPULAR', items: [
    { label: 'Website', color: '#7C3AED' }, { label: 'Link', color: '#3b82f6' }, { label: 'Instagram', color: '#e1306c' }, { label: 'Email', color: '#059669' }, { label: 'Phone', color: '#7C3AED' }, { label: 'LinkedIn', color: '#0a66c2' }, { label: 'Facebook', color: '#1877f2' },
  ]},
  { group: 'SOCIAL', items: [
    { label: 'X.com', color: '#1a1a1a' }, { label: 'Facebook', color: '#1877f2' }, { label: 'Instagram', color: '#e1306c' }, { label: 'Snapchat', color: '#fffc00' }, { label: 'LinkedIn', color: '#0a66c2' }, { label: 'Pinterest', color: '#e60023' }, { label: 'Threads', color: '#1a1a1a' }, { label: 'TikTok', color: '#1a1a1a' }, { label: 'King', color: '#7C3AED' },
  ]},
  { group: 'COMMUNICATION', items: [
    { label: 'WhatsApp', color: '#25d366' }, { label: 'Telegram', color: '#229ed9' }, { label: 'Discord', color: '#5865f2' }, { label: 'WeChat', color: '#07c160' }, { label: 'Line', color: '#00c300' }, { label: 'Signal', color: '#3a76f0' }, { label: 'Email', color: '#059669' }, { label: 'Phone', color: '#7C3AED' },
  ]},
  { group: 'CONFERENCING', items: [
    { label: 'Zoom', color: '#2d8cff' }, { label: 'Teams', color: '#6264a7' }, { label: 'Meet', color: '#00897b' }, { label: 'Skype', color: '#00aff0' }, { label: 'Webex', color: '#00bceb' },
  ]},
  { group: 'VIDEO', items: [
    { label: 'YouTube', color: '#ff0000' }, { label: 'Vimeo', color: '#1ab7ea' }, { label: 'TikTok', color: '#1a1a1a' }, { label: 'Twitch', color: '#9146ff' }, { label: 'Brightcove', color: '#d97706' },
  ]},
  { group: 'MUSIC', items: [
    { label: 'Spotify', color: '#1db954' }, { label: 'Apple Music', color: '#fa243c' }, { label: 'SoundCloud', color: '#ff5500' },
  ]},
  { group: 'DESIGN', items: [
    { label: 'Behance', color: '#1769ff' }, { label: 'Dribbble', color: '#ea4c89' },
  ]},
  { group: 'GAMING', items: [
    { label: 'PSN', color: '#003791' }, { label: 'Xbox Live', color: '#107c10' }, { label: 'Nintendo', color: '#e60012' }, { label: 'Twitch', color: '#9146ff' },
  ]},
  { group: 'OTHER', items: [
    { label: 'Website', color: '#7C3AED' }, { label: 'Link', color: '#3b82f6' }, { label: 'GitHub', color: '#1a1a1a' }, { label: 'Calendly', color: '#006bff' }, { label: 'PDF', color: '#dc2626' }, { label: 'Patreon', color: '#ff424d' }, { label: 'Bookings', color: '#0d9488' }, { label: 'Note', color: '#d97706' }, { label: 'Yelp', color: '#d32323' }, { label: 'Address', color: '#7C3AED' }, { label: 'Important Date', color: '#059669' },
  ]},
];

const SIDEBAR_CREATE = [
  { label: 'Home', Icon: Home },
  { label: 'ID Cards', Icon: IdCard },
  { label: 'Business Card', Icon: CreditCard },
  { label: 'Email Signatures', Icon: Mail },
  { label: 'Backgrounds', Icon: ImageIcon },
];

const SIDEBAR_NETWORK = [
  { label: 'Contacts', Icon: Users },
  { label: 'Events', Icon: Calendar },
];

const SIDEBAR_INSIGHTS = [
  { label: 'Analytics', Icon: BarChart3 },
];

const QUICK_ACTIONS = [
  { label: 'Customize Your Card', Icon: IdCard, badge: null },
  { label: 'Create an Email Signature', Icon: Mail, badge: null },
  { label: 'Get the Mobile App', Icon: CreditCard, badge: null },
  { label: 'Invite Your Team', Icon: Users, badge: 'Popular' },
];

const GETTING_STARTED = [
  { step: '1', title: 'Create your card', desc: 'Add your details and choose a design that represents you.' },
  { step: '2', title: 'Share it anywhere', desc: 'Send via QR code, email, NFC, or text message.' },
  { step: '3', title: 'Grow your network', desc: 'Track views, manage contacts, and stay connected.' },
];

export function IdCardPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [activeNav, setActiveNav] = useState('Home');
  const [introStep, setIntroStep] = useState(1); // 1 = Home welcome, 2 = New Card pointer, 0 = done
  const [tabTour, setTabTour] = useState(0); // 0 = off, 1=Card, 2=Display, 3=Information, 4=Fields
  const [bizStep, setBizStep] = useState(0); // 0 = off, 1 = New Business Card pointer
  const [bizTabTour, setBizTabTour] = useState(0); // 0 = off, 1=Card, 2=Display, 3=Information, 4=Fields
  const [sigTour, setSigTour] = useState(0); // 0 = off, 1 = intro, 2 = copy pointer
  const [showNewCard, setShowNewCard] = useState(false);
  const [cardTab, setCardTab] = useState('Card');
  const [cardType, setCardType] = useState('Personal');
  const [design, setDesign] = useState('Classic');
  const [accent, setAccent] = useState('#7C3AED');
  const [bgColor, setBgColor] = useState('Auto');
  // Business Card flow
  const [showNewBiz, setShowNewBiz] = useState(false);
  const [bizTab, setBizTab] = useState('Card');
  const [bizType, setBizType] = useState('Business');
  const [bizStyle, setBizStyle] = useState('profile');
  const [bizAccent, setBizAccent] = useState('#7C3AED');
  const [bizBg, setBizBg] = useState('Auto');
  // Email Signatures
  const [sigStyle, setSigStyle] = useState(0);
  const [sigMailApp, setSigMailApp] = useState('Apple');
  const [sigOs, setSigOs] = useState('Web');
  const [sigCopied, setSigCopied] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#fafafa', position: 'relative' }}>
      {/* Step 1 — Home welcome coachmark */}
      {introStep === 1 && activeNav === 'Home' && (
        <div style={{ position: 'absolute', top: '90px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Welcome to OneCardX"
            subtitle="Create digital ID and business cards, then share them anywhere. Explore the sidebar to get started."
            onNext={() => { setActiveNav('ID Cards'); setShowNewCard(false); setIntroStep(2); }}
            top="0"
            left="0"
            arrowSide="top"
            arrowOffset="110px"
            buttonLabel="Next"
          />
        </div>
      )}

      {/* Step 2 — New Card pointer coachmark */}
      {introStep === 2 && activeNav === 'ID Cards' && !showNewCard && (
        <div style={{ position: 'absolute', top: '200px', left: '50%', transform: 'translateX(150px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Create your first card"
            subtitle="Click New Card to start building your digital ID card."
            onNext={() => { setIntroStep(0); setShowNewCard(true); setCardTab('Card'); setTabTour(1); }}
            top="0"
            left="0"
            arrowSide="left"
            arrowOffset="24px"
            buttonLabel="Next"
          />
        </div>
      )}
      {/* Sidebar */}
      <div style={{ width: '190px', flexShrink: 0, background: '#fff', borderRight: '1px solid #f0f0f0', padding: '14px 12px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <PanelLeft size={16} style={{ color: '#555' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginLeft: '2px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <IdCard size={15} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>One card <span style={{ color: '#7C3AED' }}>x</span></span>
          </div>
        </div>

        {/* CREATE */}
        <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#aaa', marginBottom: '8px' }}>CREATE</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
          {SIDEBAR_CREATE.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => { setActiveNav(item.label); setShowNewCard(false); setShowNewBiz(false); }} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '7px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer' }}>
                {active && <span style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', borderRadius: '3px', background: '#7C3AED' }} />}
                <item.Icon size={14} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* NETWORK */}
        <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#aaa', marginBottom: '8px' }}>NETWORK</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
          {SIDEBAR_NETWORK.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '7px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer' }}>
                {active && <span style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', borderRadius: '3px', background: '#7C3AED' }} />}
                <item.Icon size={14} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* INSIGHTS */}
        <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#aaa', marginBottom: '8px' }}>INSIGHTS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {SIDEBAR_INSIGHTS.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '7px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: 'pointer' }}>
                {active && <span style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', borderRadius: '3px', background: '#7C3AED' }} />}
                <item.Icon size={14} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 22px', borderBottom: '1px solid #f0f0f0', background: '#fff' }}>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>{activeNav}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: 'auto' }}>
            <LayoutGrid size={16} style={{ color: '#888' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={13} style={{ color: '#888' }} />
              </div>
              <div style={{ lineHeight: 1.3 }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#1a1a1a' }}>David Miller</div>
                <div style={{ fontSize: '9px', color: '#999' }}>david.miller@snaarp.com</div>
              </div>
              <ChevronDown size={13} style={{ color: '#999' }} />
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        {activeNav === 'Home' && (
        <div style={{ flex: 1, overflow: 'hidden', padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Welcome card */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '20px 22px' }}>
            <div style={{ fontSize: '19px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Welcome to OneCardX</div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>Turn every introduction into a chance to grow.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600 }}>
                <PlayCircle size={13} /> Onboarding Playlist <ArrowRight size={11} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600 }}>
                <HelpCircle size={13} /> Help Center <ArrowRight size={11} />
              </div>
            </div>
          </div>

          {/* Two-column row */}
          <div style={{ display: 'flex', gap: '18px' }}>
            {/* Quick Actions */}
            <div style={{ flex: 1, background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '18px 20px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Quick Actions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {QUICK_ACTIONS.map((qa) => (
                  <div key={qa.label} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 4px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#f3efff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <qa.Icon size={15} style={{ color: '#7C3AED' }} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#333', flex: 1 }}>{qa.label}</span>
                    {qa.badge && <span style={{ fontSize: '9px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px', background: '#f3efff', color: '#7C3AED' }}>{qa.badge}</span>}
                    <ArrowRight size={13} style={{ color: '#7C3AED' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Digital business cards promo */}
            <div style={{ flex: 1, borderRadius: '14px', border: '1px solid #ece5fb', padding: '18px 20px', background: 'linear-gradient(135deg, #faf7ff 0%, #f3edfd 100%)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.06em', color: '#7C3AED', marginBottom: '10px' }}>DIGITAL BUSINESS CARDS</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Your First Impression Starts Here</div>
              <div style={{ fontSize: '11.5px', color: '#666', lineHeight: 1.5, marginBottom: '20px' }}>Choose a color, add a photo, and add extra information to make your card stand out.</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600 }}>
                  Customize your card <ArrowRight size={11} />
                </div>
                <div style={{ width: '68px', height: '58px', borderRadius: '12px', background: '#ddd0f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IdCard size={26} style={{ color: '#1a1a1a' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #f0f0f0', padding: '18px 20px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '14px' }}>Getting Started</div>
            <div style={{ display: 'flex', gap: '14px' }}>
              {GETTING_STARTED.map((g) => (
                <div key={g.step} style={{ flex: 1, border: '1px solid #f0f0f0', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#f3efff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED', fontSize: '11px', fontWeight: 700, marginBottom: '10px' }}>{g.step}</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', marginBottom: '5px' }}>{g.title}</div>
                  <div style={{ fontSize: '10.5px', color: '#888', lineHeight: 1.5 }}>{g.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* ID Cards view - empty state */}
        {activeNav === 'ID Cards' && !showNewCard && (
          <div style={{ flex: 1, overflow: 'hidden', padding: '48px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Welcome to your ID cards</div>
            <div style={{ fontSize: '12.5px', color: '#666', marginBottom: '26px' }}>Create your first digital business card to get started.</div>

            <div onClick={() => { setShowNewCard(true); setCardTab('Card'); setIntroStep(0); setTabTour(1); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 24px', background: '#7C3AED', color: '#fff', borderRadius: '24px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 16px -6px rgba(124,58,237,0.5)' }}>
              <Plus size={15} /> New Card
            </div>
            <div style={{ fontSize: '11.5px', color: '#999', marginTop: '16px' }}>Or create a new card from scratch!</div>

            <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #ede7fc 0%, #e4d9fb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', marginBottom: '18px' }}>
              <CreditCard size={34} style={{ color: '#7C3AED' }} />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>No cards yet</div>
            <div style={{ fontSize: '11.5px', color: '#999', lineHeight: 1.6 }}>Create your first card to start sharing your contact info digitally.<br />It only takes a minute!</div>
          </div>
        )}

        {/* ID Cards view - New Card editor */}
        {activeNav === 'ID Cards' && showNewCard && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '12px 22px', borderBottom: '1px solid #f0f0f0', fontSize: '11.5px', color: '#888' }}>
              <span onClick={() => setShowNewCard(false)} style={{ cursor: 'pointer' }}>ID Cards</span>
              <ChevronRight size={13} style={{ color: '#ccc' }} />
              <span style={{ color: '#1a1a1a', fontWeight: 600 }}>New Card</span>
            </div>

            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Card preview panel */}
              <div style={{ width: '260px', flexShrink: 0, padding: '22px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <div style={{ width: '190px', background: '#fff', borderRadius: '14px', border: '1px solid #eee', boxShadow: '0 8px 24px -10px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
                  {/* Photo placeholder */}
                  <div style={{ height: '150px', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <ImgIcon size={44} style={{ color: '#c4c8cf' }} strokeWidth={1.5} />
                    {/* Purple wave */}
                    <svg viewBox="0 0 190 26" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '26px', display: 'block' }}>
                      <path d="M0 26 L0 10 Q47 26 95 12 Q143 0 190 14 L190 26 Z" fill="#7C3AED" />
                    </svg>
                  </div>
                  {/* Name */}
                  <div style={{ padding: '16px 16px 40px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>David Miller</div>
                  </div>
                </div>
              </div>

              {/* Editor panel */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderLeft: '1px solid #f0f0f0' }}>
                {/* Tabs */}
                <div style={{ display: 'flex', gap: '22px', padding: '0 22px', borderBottom: '1px solid #f0f0f0' }}>
                  {CARD_TABS.map((t) => {
                    const active = cardTab === t;
                    return (
                      <div key={t} onClick={() => setCardTab(t)} style={{ padding: '14px 0', fontSize: '12px', fontWeight: active ? 600 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer' }}>{t}</div>
                    );
                  })}
                </div>

                {/* Tab tour coachmarks — positioned below the tab bar so titles stay visible */}
                {tabTour === 1 && (
                  <div style={{ position: 'absolute', top: '150px', left: '440px', zIndex: 9999 }}>
                    <Coachmark visible title="Card tab" subtitle="Pick the card type — Personal, Work, or Business. Each shows different fields." onNext={() => { setCardTab('Display'); setTabTour(2); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {tabTour === 2 && (
                  <div style={{ position: 'absolute', top: '150px', left: '540px', zIndex: 9999 }}>
                    <Coachmark visible title="Display tab" subtitle="Choose a layout, profile photo, and colors to style your card." onNext={() => { setCardTab('Information'); setTabTour(3); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {tabTour === 3 && (
                  <div style={{ position: 'absolute', top: '150px', left: '600px', zIndex: 9999 }}>
                    <Coachmark visible title="Information tab" subtitle="Fill in your personal and work details shown on the card." onNext={() => { setCardTab('Fields'); setTabTour(4); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {tabTour === 4 && (
                  <div style={{ position: 'absolute', top: '150px', left: '660px', zIndex: 9999 }}>
                    <Coachmark visible title="Fields tab" subtitle="Add extra fields like links, socials, and contact methods to your card." onNext={() => { setTabTour(0); setShowNewCard(false); setActiveNav('Business Card'); setShowNewBiz(false); setBizStep(1); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}

                {/* Tab body */}
                <div style={{ flex: 1, overflow: 'hidden', padding: '20px 22px' }}>
                  {cardTab === 'Card' && (
                    <>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Card Type</div>
                      <div style={{ fontSize: '11px', color: '#888', marginBottom: '18px' }}>Choose the type of card. Personal, Work, and Business cards display different fields.</div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {CARD_TYPES.map((ct) => {
                          const active = cardType === ct.key;
                          return (
                            <div key={ct.key} onClick={() => setCardType(ct.key)} style={{ position: 'relative', flex: 1, padding: '16px 14px', borderRadius: '12px', border: active ? '1.5px solid #7C3AED' : '1px solid #eee', background: active ? 'linear-gradient(160deg, #faf7ff 0%, #f3edfd 100%)' : '#fff', cursor: 'pointer', textAlign: 'center' }}>
                              {active && (
                                <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Check size={10} style={{ color: '#fff' }} strokeWidth={3} />
                                </div>
                              )}
                              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: ct.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                                <ct.Icon size={16} style={{ color: ct.iconColor }} />
                              </div>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{ct.key}</div>
                              <div style={{ fontSize: '10px', color: '#888', lineHeight: 1.5 }}>{ct.desc}</div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {cardTab === 'Display' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      {/* Design */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Design</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '12px' }}>Choose the layout used for this ID card.</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '22px' }}>
                        {DESIGN_LAYOUTS.map((l) => {
                          const active = design === l.key;
                          return (
                            <div key={l.key} onClick={() => setDesign(l.key)} style={{ position: 'relative', padding: '5px', borderRadius: '11px', border: active ? '1.5px solid #7C3AED' : '1px solid #eee', background: active ? '#faf7ff' : '#fff', cursor: 'pointer' }}>
                              {active && (
                                <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '15px', height: '15px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                  <Check size={9} style={{ color: '#fff' }} strokeWidth={3} />
                                </div>
                              )}
                              <LayoutThumb layout={l} />
                              <div style={{ fontSize: '8px', color: '#888', textAlign: 'center', marginTop: '4px' }}>{l.key}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Profile Photo */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Profile Photo</span>
                        <span style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '0.06em', padding: '2px 6px', borderRadius: '6px', background: '#ECFDF5', color: '#059669' }}>PRO</span>
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Pick which image to show on the card, or upload your own.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <User size={14} style={{ color: '#aaa' }} />
                        </div>
                        <div style={{ padding: '6px 14px', borderRadius: '18px', border: '1px solid #e5e5e5', fontSize: '11px', fontWeight: 500, color: '#333', cursor: 'pointer' }}>Add Photo or Video</div>
                        <span style={{ fontSize: '11px', color: '#888', cursor: 'pointer' }}>Remove</span>
                      </div>
                      <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '18px', border: '1px solid #e5e5e5', fontSize: '11px', fontWeight: 500, color: '#333', cursor: 'pointer', marginBottom: '6px' }}>Add ID image</div>
                      <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '22px' }}>Your ID image is saved to your account and can be used on any card.</div>

                      {/* Accent Color */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Accent Color</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Sets accents, buttons, icons, waves, and decorative details.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', flexWrap: 'wrap' }}>
                        {ACCENT_COLORS.map((c) => {
                          const active = accent === c;
                          return (
                            <div key={c} onClick={() => setAccent(c)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: c, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: active ? '2px solid #fff' : 'none', boxShadow: active ? '0 0 0 2px #7C3AED' : 'none' }}>
                              {active && <Check size={11} style={{ color: '#fff' }} strokeWidth={3} />}
                            </div>
                          );
                        })}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '16px', border: '1px solid #e5e5e5', cursor: 'pointer' }}>
                          <span style={{ width: '13px', height: '13px', borderRadius: '3px', background: 'linear-gradient(135deg,#a855f7,#6d28d9)' }} />
                          <span style={{ fontSize: '10.5px', color: '#333' }}>Custom</span>
                        </div>
                      </div>

                      {/* Background Color */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Background Color</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Use the style default, or replace previously fixed card surfaces with your own color.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', flexWrap: 'wrap' }}>
                        <div onClick={() => setBgColor('Auto')} style={{ padding: '4px 14px', borderRadius: '16px', border: bgColor === 'Auto' ? '1.5px solid #7C3AED' : '1px solid #e5e5e5', fontSize: '10.5px', fontWeight: 600, color: bgColor === 'Auto' ? '#7C3AED' : '#555', cursor: 'pointer' }}>Auto</div>
                        {BACKGROUND_COLORS.map((c) => {
                          const active = bgColor === c;
                          return (
                            <div key={c} onClick={() => setBgColor(c)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: c, border: c === '#ffffff' ? '1px solid #e5e5e5' : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: active ? '0 0 0 2px #7C3AED' : 'none' }}>
                              {active && <Check size={11} style={{ color: c === '#ffffff' || c === '#f3f4f6' ? '#7C3AED' : '#fff' }} strokeWidth={3} />}
                            </div>
                          );
                        })}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '16px', border: '1px solid #e5e5e5', cursor: 'pointer' }}>
                          <span style={{ width: '13px', height: '13px', borderRadius: '3px', background: 'linear-gradient(135deg,#a855f7,#6d28d9)' }} />
                          <span style={{ fontSize: '10.5px', color: '#333' }}>Custom</span>
                        </div>
                      </div>

                      {/* Font Color */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Font Color</div>
                      <div style={{ fontSize: '10.5px', color: '#888' }}>Use automatic contrast, or select the text color used throughout the card.</div>
                    </div>
                  )}
                  {cardTab === 'Information' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      {/* Personal Card banner */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', background: '#faf7ff', borderRadius: '8px', marginBottom: '18px' }}>
                        <span style={{ width: '3px', height: '14px', borderRadius: '3px', background: '#7C3AED' }} />
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', flex: 1 }}>Personal Card</span>
                        <span style={{ fontSize: '10px', color: '#aaa' }}>Personal details emphasized</span>
                      </div>

                      {/* Personal section */}
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Personal</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginBottom: '24px' }}>
                        {[
                          { label: 'Prefix', ph: 'Dr., Mr., Ms.', val: '' },
                          { label: 'First Name', ph: '', val: 'David' },
                          { label: 'Middle Name', ph: 'Middle name', val: '' },
                          { label: 'Last Name', ph: '', val: 'Miller' },
                          { label: 'Suffix', ph: 'Jr., Sr., III', val: '' },
                          { label: 'Preferred Name', ph: 'Nickname', val: '' },
                          { label: 'Pronouns', ph: 'he/him, she/her', val: '' },
                          { label: 'Maiden Name', ph: 'Maiden name', val: '' },
                        ].map((f) => (
                          <div key={f.label}>
                            <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>{f.label}</div>
                            <div style={{ fontSize: '11.5px', color: f.val ? '#1a1a1a' : '#c4c4c4', fontWeight: f.val ? 500 : 400, borderBottom: '1px solid #eee', paddingBottom: '6px' }}>{f.val || f.ph}</div>
                          </div>
                        ))}
                      </div>

                      {/* Work section */}
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Work (optional)</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px' }}>
                        <div>
                          <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>Title</div>
                          <div style={{ fontSize: '11.5px', color: '#c4c4c4', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Job title</div>
                        </div>
                        <div />
                        <div>
                          <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>Company</div>
                          <div style={{ fontSize: '11.5px', color: '#c4c4c4', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Company</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {cardTab === 'Fields' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      {/* Search */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 12px', background: '#f7f7f8', borderRadius: '8px', marginBottom: '16px' }}>
                        <Search size={13} style={{ color: '#aaa' }} />
                        <span style={{ fontSize: '11px', color: '#aaa' }}>Search</span>
                      </div>

                      {/* Additional Fields header */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Additional Fields</span>
                        <Info size={11} style={{ color: '#bbb' }} />
                      </div>
                      <div style={{ fontSize: '10px', color: '#999', marginBottom: '14px' }}>Click the field you want to add to your card.</div>

                      {FIELD_GROUPS.map((g) => (
                        <div key={g.group} style={{ marginBottom: '14px' }}>
                          <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.06em', color: '#aaa', marginBottom: '7px' }}>{g.group}</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                            {g.items.map((it, idx) => (
                              <div key={`${g.group}-${it.label}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 11px', borderRadius: '14px', border: '1px solid #ececec', fontSize: '10.5px', color: '#333', cursor: 'pointer', background: '#fff' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: it.color, flexShrink: 0 }} />
                                {it.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', padding: '12px 22px', borderTop: '1px solid #f0f0f0' }}>
                  <button onClick={() => setShowNewCard(false)} style={{ padding: '7px 18px', background: '#fff', color: '#555', border: 'none', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                  <button onClick={() => setShowNewCard(false)} style={{ padding: '7px 22px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Business Card - empty state */}
        {activeNav === 'Business Card' && !showNewBiz && (
          <div style={{ flex: 1, overflow: 'hidden', padding: '56px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Welcome to your business cards</div>
            <div style={{ fontSize: '12.5px', color: '#666', marginBottom: '26px' }}>Create a business card to share your profile, bio, and locations.</div>

            <div onClick={() => { setShowNewBiz(true); setBizTab('Card'); setBizStep(0); setBizTabTour(1); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 24px', background: '#7C3AED', color: '#fff', borderRadius: '24px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 16px -6px rgba(124,58,237,0.5)' }}>
              <Plus size={15} /> New Business Card
            </div>

            <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #ede7fc 0%, #e4d9fb 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px', marginBottom: '18px' }}>
              <CreditCard size={34} style={{ color: '#7C3AED' }} />
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>No business cards yet</div>
            <div style={{ fontSize: '11.5px', color: '#999', lineHeight: 1.6 }}>Create your first business card to start sharing your profile digitally.</div>

            {/* New Business Card pointer coachmark */}
            {bizStep === 1 && (
              <div style={{ position: 'absolute', top: '185px', left: '50%', transform: 'translateX(240px)', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Create a business card"
                  subtitle="Click New Business Card to build your shareable business card."
                  onNext={() => { setBizStep(0); setShowNewBiz(true); setBizTab('Card'); setBizTabTour(1); }}
                  top="0"
                  left="0"
                  arrowSide="left"
                  arrowOffset="24px"
                  buttonLabel="Next"
                />
              </div>
            )}
          </div>
        )}

        {/* Business Card - New editor */}
        {activeNav === 'Business Card' && showNewBiz && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '12px 22px', borderBottom: '1px solid #f0f0f0', fontSize: '11.5px', color: '#888' }}>
              <span onClick={() => setShowNewBiz(false)} style={{ cursor: 'pointer' }}>Business Card</span>
              <ChevronRight size={13} style={{ color: '#ccc' }} />
              <span style={{ color: '#1a1a1a', fontWeight: 600 }}>New Business Card</span>
            </div>

            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Card preview panel */}
              <div style={{ width: '260px', flexShrink: 0, padding: '22px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <div style={{ width: '190px', background: '#fff', borderRadius: '14px', border: '1px solid #eee', boxShadow: '0 8px 24px -10px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
                  <div style={{ height: '120px', background: '#efe8fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#d7c8f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <User size={20} style={{ color: '#7C3AED' }} />
                    </div>
                  </div>
                  <div style={{ padding: '16px 16px 34px', textAlign: 'left' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>David Miller</div>
                  </div>
                </div>
              </div>

              {/* Editor panel */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderLeft: '1px solid #f0f0f0' }}>
                {/* Tabs */}
                <div style={{ display: 'flex', gap: '22px', padding: '0 22px', borderBottom: '1px solid #f0f0f0' }}>
                  {CARD_TABS.map((t) => {
                    const active = bizTab === t;
                    return (
                      <div key={t} onClick={() => setBizTab(t)} style={{ padding: '14px 0', fontSize: '12px', fontWeight: active ? 600 : 500, color: active ? '#7C3AED' : '#888', borderBottom: active ? '2px solid #7C3AED' : '2px solid transparent', cursor: 'pointer' }}>{t}</div>
                    );
                  })}
                </div>

                {/* Business Card tab tour coachmarks — below the tab bar so titles stay visible */}
                {bizTabTour === 1 && (
                  <div style={{ position: 'absolute', top: '150px', left: '470px', zIndex: 9999 }}>
                    <Coachmark visible title="Card tab" subtitle="Pick the card type — Personal, Work, or Business. Each shows different fields." onNext={() => { setBizTab('Display'); setBizTabTour(2); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {bizTabTour === 2 && (
                  <div style={{ position: 'absolute', top: '150px', left: '540px', zIndex: 9999 }}>
                    <Coachmark visible title="Display tab" subtitle="Choose a layout, profile photo, and colors to style your business card." onNext={() => { setBizTab('Information'); setBizTabTour(3); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {bizTabTour === 3 && (
                  <div style={{ position: 'absolute', top: '150px', left: '600px', zIndex: 9999 }}>
                    <Coachmark visible title="Information tab" subtitle="Fill in your personal, work, and business profile details." onNext={() => { setBizTab('Fields'); setBizTabTour(4); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}
                {bizTabTour === 4 && (
                  <div style={{ position: 'absolute', top: '150px', left: '660px', zIndex: 9999 }}>
                    <Coachmark visible title="Fields tab" subtitle="Add extra fields like links, socials, and contact methods to your card." onNext={() => { setBizTabTour(0); setShowNewBiz(false); setActiveNav('Email Signatures'); setSigTour(1); }} top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
                  </div>
                )}

                {/* Tab body */}
                <div style={{ flex: 1, overflow: 'hidden', padding: '20px 22px' }}>
                  {/* CARD TAB */}
                  {bizTab === 'Card' && (
                    <>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Card Type</div>
                      <div style={{ fontSize: '11px', color: '#888', marginBottom: '18px' }}>Choose the type of card. Personal, Work, and Business cards display different fields.</div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {CARD_TYPES.map((ct) => {
                          const active = bizType === ct.key;
                          return (
                            <div key={ct.key} onClick={() => setBizType(ct.key)} style={{ position: 'relative', flex: 1, padding: '16px 14px', borderRadius: '12px', border: active ? '1.5px solid #1a1a1a' : '1px solid #eee', background: '#fff', cursor: 'pointer', textAlign: 'center' }}>
                              {active && (
                                <div style={{ position: 'absolute', top: '10px', right: '10px', width: '16px', height: '16px', borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Check size={10} style={{ color: '#fff' }} strokeWidth={3} />
                                </div>
                              )}
                              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: ct.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                                <ct.Icon size={16} style={{ color: ct.iconColor }} />
                              </div>
                              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{ct.key}</div>
                              <div style={{ fontSize: '10px', color: '#888', lineHeight: 1.5 }}>{ct.desc}</div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* DISPLAY TAB */}
                  {bizTab === 'Display' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Business Card Style</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '12px' }}>Choose the landscape layout used for the business card.</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '22px' }}>
                        {BIZ_STYLES.map((s) => {
                          const active = bizStyle === s.key;
                          return (
                            <div key={s.key} onClick={() => setBizStyle(s.key)} style={{ position: 'relative', padding: '5px', borderRadius: '12px', border: active ? '1.5px solid #7C3AED' : '1px solid #eee', background: active ? '#faf7ff' : '#fff', cursor: 'pointer' }}>
                              {active && (
                                <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '15px', height: '15px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                  <Check size={9} style={{ color: '#fff' }} strokeWidth={3} />
                                </div>
                              )}
                              <BizStyleThumb style={s} />
                              <div style={{ fontSize: '8px', color: '#888', textAlign: 'center', marginTop: '4px' }}>{s.key}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Profile Photo */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Profile Photo</span>
                        <span style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '0.06em', padding: '2px 6px', borderRadius: '6px', background: '#ECFDF5', color: '#059669' }}>PRO</span>
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Pick which image to show on the card, or upload your own.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <User size={14} style={{ color: '#aaa' }} />
                        </div>
                        <div style={{ padding: '6px 14px', borderRadius: '18px', border: '1px solid #e5e5e5', fontSize: '11px', fontWeight: 500, color: '#333', cursor: 'pointer' }}>Add Photo or Video</div>
                      </div>
                      <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '18px', border: '1px solid #e5e5e5', fontSize: '11px', fontWeight: 500, color: '#333', cursor: 'pointer', marginBottom: '6px' }}>Add ID Image</div>
                      <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '22px' }}>Your ID image is saved to your account and can be used on any card.</div>

                      {/* Accent Color */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Accent Color</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Sets accents, buttons, icons, waves, and decorative details.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px', flexWrap: 'wrap' }}>
                        {ACCENT_COLORS.map((c) => {
                          const active = bizAccent === c;
                          return (
                            <div key={c} onClick={() => setBizAccent(c)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: c, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: active ? '0 0 0 2px #7C3AED' : 'none' }}>
                              {active && <Check size={11} style={{ color: '#fff' }} strokeWidth={3} />}
                            </div>
                          );
                        })}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '16px', border: '1px solid #e5e5e5', cursor: 'pointer' }}>
                          <span style={{ width: '13px', height: '13px', borderRadius: '3px', background: 'linear-gradient(135deg,#a855f7,#6d28d9)' }} />
                          <span style={{ fontSize: '10.5px', color: '#333' }}>Custom</span>
                        </div>
                      </div>

                      {/* Background Color */}
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>Background Color</div>
                      <div style={{ fontSize: '10.5px', color: '#888', marginBottom: '10px' }}>Use the style default, or replace previously fixed card surfaces with your own color.</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <div onClick={() => setBizBg('Auto')} style={{ padding: '4px 14px', borderRadius: '16px', border: bizBg === 'Auto' ? '1.5px solid #7C3AED' : '1px solid #e5e5e5', fontSize: '10.5px', fontWeight: 600, color: bizBg === 'Auto' ? '#7C3AED' : '#555', cursor: 'pointer' }}>Auto</div>
                        {BACKGROUND_COLORS.map((c) => {
                          const active = bizBg === c;
                          return (
                            <div key={c} onClick={() => setBizBg(c)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: c, border: c === '#ffffff' ? '1px solid #e5e5e5' : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: active ? '0 0 0 2px #7C3AED' : 'none' }}>
                              {active && <Check size={11} style={{ color: c === '#ffffff' || c === '#f3f4f6' ? '#7C3AED' : '#fff' }} strokeWidth={3} />}
                            </div>
                          );
                        })}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '16px', border: '1px solid #e5e5e5', cursor: 'pointer' }}>
                          <span style={{ width: '13px', height: '13px', borderRadius: '3px', background: 'linear-gradient(135deg,#a855f7,#6d28d9)' }} />
                          <span style={{ fontSize: '10.5px', color: '#333' }}>Custom</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* INFORMATION TAB */}
                  {bizTab === 'Information' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', background: '#faf7ff', borderRadius: '8px', marginBottom: '18px' }}>
                        <span style={{ width: '3px', height: '14px', borderRadius: '3px', background: '#7C3AED' }} />
                        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', flex: 1 }}>Business Card</span>
                        <span style={{ fontSize: '10px', color: '#aaa' }}>Profile, about me, and address</span>
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Personal</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginBottom: '24px' }}>
                        {[
                          { label: 'Prefix', ph: 'Dr., Mr., Ms.', val: '' },
                          { label: 'First Name', ph: '', val: 'David' },
                          { label: 'Middle Name', ph: 'Middle name', val: '' },
                          { label: 'Last Name', ph: '', val: 'Miller' },
                          { label: 'Suffix', ph: 'Jr., Sr., III', val: '' },
                          { label: 'Preferred Name', ph: 'Nickname', val: '' },
                          { label: 'Pronouns', ph: 'he/him, she/her', val: '' },
                        ].map((f) => (
                          <div key={f.label}>
                            <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>{f.label}</div>
                            <div style={{ fontSize: '11.5px', color: f.val ? '#1a1a1a' : '#c4c4c4', fontWeight: f.val ? 500 : 400, borderBottom: '1px solid #eee', paddingBottom: '6px' }}>{f.val || f.ph}</div>
                          </div>
                        ))}
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Work (optional)</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px', marginBottom: '24px' }}>
                        <div>
                          <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>Title</div>
                          <div style={{ fontSize: '11.5px', color: '#c4c4c4', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Job title</div>
                        </div>
                        <div />
                        <div>
                          <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>Company</div>
                          <div style={{ fontSize: '11.5px', color: '#c4c4c4', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Company</div>
                        </div>
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Business profile</div>
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>Address</div>
                        <div style={{ fontSize: '11.5px', color: '#c4c4c4', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>Dubai, London, Lagos</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '5px' }}>About me</div>
                        <div style={{ fontSize: '11px', color: '#c4c4c4', border: '1px solid #eee', borderRadius: '8px', padding: '10px 12px', minHeight: '44px' }}>A short bio that appears on your business card.</div>
                      </div>
                    </div>
                  )}

                  {/* FIELDS TAB */}
                  {bizTab === 'Fields' && (
                    <div style={{ height: '100%', overflowY: 'auto', paddingRight: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '8px 12px', background: '#f7f7f8', borderRadius: '8px', marginBottom: '16px' }}>
                        <Search size={13} style={{ color: '#aaa' }} />
                        <span style={{ fontSize: '11px', color: '#aaa' }}>Search</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Additional Fields</span>
                        <Info size={11} style={{ color: '#bbb' }} />
                      </div>
                      <div style={{ fontSize: '10px', color: '#999', marginBottom: '14px' }}>Click the field you want to add to your card.</div>
                      {FIELD_GROUPS.map((g) => (
                        <div key={g.group} style={{ marginBottom: '14px' }}>
                          <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.06em', color: '#aaa', marginBottom: '7px' }}>{g.group}</div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                            {g.items.map((it, idx) => (
                              <div key={`biz-${g.group}-${it.label}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 11px', borderRadius: '14px', border: '1px solid #ececec', fontSize: '10.5px', color: '#333', cursor: 'pointer', background: '#fff' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: it.color, flexShrink: 0 }} />
                                {it.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', padding: '12px 22px', borderTop: '1px solid #f0f0f0' }}>
                  <button onClick={() => setShowNewBiz(false)} style={{ padding: '7px 18px', background: '#fff', color: '#555', border: 'none', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                  <button onClick={() => setShowNewBiz(false)} style={{ padding: '7px 22px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Email Signatures view */}
        {activeNav === 'Email Signatures' && (
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Preview panel */}
            <div style={{ flex: 1, borderRight: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '22px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ width: '76px', height: '116px', borderRadius: '10px', background: '#7C3AED', display: 'flex', alignItems: 'flex-end', padding: '10px' }}>
                  <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Your Name</span>
                </div>
                <div style={{ width: '76px', height: '116px', borderRadius: '10px', background: '#7C3AED' }} />
              </div>
            </div>

            {/* Controls panel */}
            <div style={{ width: '400px', flexShrink: 0, overflowY: 'auto', padding: '20px 22px' }}>
              {/* Card */}
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Card</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '20px' }}>
                <span style={{ width: '3px', height: '13px', borderRadius: '3px', background: '#7C3AED' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#1a1a1a', flex: 1 }}>Personal</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>Change</span>
              </div>

              {/* Style */}
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Style</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '22px' }}>
                {SIG_STYLES.map((v, i) => (
                  <div key={`${v}-${i}`} onClick={() => setSigStyle(i)} style={{ cursor: 'pointer' }}>
                    <SigThumb variant={v} active={sigStyle === i} />
                  </div>
                ))}
              </div>

              {/* Platform */}
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Platform</div>
              <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.06em', color: '#aaa', marginBottom: '7px' }}>MAIL APP</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {SIG_MAIL_APPS.map((m) => {
                  const active = sigMailApp === m;
                  return (
                    <div key={m} onClick={() => setSigMailApp(m)} style={{ padding: '5px 15px', borderRadius: '16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', color: active ? '#7C3AED' : '#555', border: active ? '1.5px solid #7C3AED' : '1px solid #e5e5e5', background: active ? '#faf7ff' : '#fff' }}>{m}</div>
                  );
                })}
              </div>
              <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.06em', color: '#aaa', marginBottom: '7px' }}>OS</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '22px', flexWrap: 'wrap' }}>
                {SIG_OS.map((o) => {
                  const active = sigOs === o;
                  return (
                    <div key={o} onClick={() => setSigOs(o)} style={{ padding: '5px 15px', borderRadius: '16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', color: active ? '#7C3AED' : '#555', border: active ? '1.5px solid #7C3AED' : '1px solid #e5e5e5', background: active ? '#faf7ff' : '#fff' }}>{o}</div>
                  );
                })}
              </div>

              {/* Apply */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>Apply</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '12px', background: '#f3efff', fontSize: '9.5px', fontWeight: 600, color: '#7C3AED' }}>
                    {sigMailApp} <ChevronRight size={9} /> {sigOs}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  {SIG_STEPS.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#f3efff', color: '#7C3AED', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ fontSize: '11px', color: '#555' }}>{s}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => { setSigCopied(true); setTimeout(() => setSigCopied(false), 1800); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>
                  {sigCopied ? <Check size={13} /> : <Copy size={13} />} {sigCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Step 1 — Email Signatures intro */}
            {sigTour === 1 && (
              <div style={{ position: 'absolute', top: '160px', left: '150px', zIndex: 9999 }}>
                <Coachmark visible title="Email Signatures" subtitle="Design a branded email signature, then pick your style, mail app, and platform." onNext={() => setSigTour(2)} top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next" />
              </div>
            )}

            {/* Step 2 — Copy button pointer */}
            {sigTour === 2 && (
              <div style={{ position: 'absolute', bottom: '160px', left: '840px', zIndex: 9999 }}>
                <Coachmark visible title="Copy your signature" subtitle="Click Copy, then paste it into your email client's signature settings." onNext={() => { setSigTour(0); if (onEnd) onEnd(); }} top="0" left="0" arrowSide="right" arrowOffset="90px" buttonLabel="Done" />
              </div>
            )}
          </div>
        )}

        {/* Placeholder for other nav items */}
        {activeNav !== 'Home' && activeNav !== 'ID Cards' && activeNav !== 'Business Card' && activeNav !== 'Email Signatures' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '22px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{activeNav}</div>
            <div style={{ fontSize: '11.5px', color: '#999' }}>This section is coming soon.</div>
          </div>
        )}
      </div>
    </div>
  );
}
