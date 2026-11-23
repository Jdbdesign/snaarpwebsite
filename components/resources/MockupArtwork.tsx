import React from 'react';
import {
  BookOpen,
  Code2,
  Layers,
  Lock,
  Mail,
  Play,
  Rocket,
  Users,
  Video,
} from 'lucide-react';

export const Hero3DShowcase: React.FC = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center select-none">
      <img
        src="/assets/resources/images/snaarp_dashboard_neon_tablet.png"
        alt="Snaarp Dashboard Neon Tablet on glowing pedestal with 3D app icons"
        width={1536}
        height={1024}
        className="relative z-10 h-auto w-full max-w-[540px] drop-shadow-[0_25px_35px_rgba(124,58,237,0.25)] transition-transform duration-500 hover:scale-[1.02]"
      />
    </div>
  );
};

export const FeaturedLaptopGraphic: React.FC = () => {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-end select-none">
      {/* Tilted Laptop Screen */}
      <div className="relative w-[300px] sm:w-[330px]">
        <div
          className="rounded-xl border border-white/25 bg-gradient-to-b from-slate-100 to-white p-2.5 shadow-[0_24px_45px_rgba(10,4,30,0.65)]"
          style={{
            transform: 'perspective(850px) rotateY(-14deg) rotateX(4deg)',
          }}
        >
          {/* Laptop Browser Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            </div>
            <div className="h-2 w-24 rounded-full bg-slate-100" />
          </div>

          <div className="mt-2 grid grid-cols-12 gap-2">
            {/* Sidebar */}
            <div className="col-span-3 space-y-1.5 rounded-lg bg-slate-50 p-1.5">
              <div className="h-2 w-full rounded bg-violet-600" />
              <div className="h-1.5 w-4/5 rounded bg-slate-200" />
              <div className="h-1.5 w-3/4 rounded bg-slate-200" />
              <div className="h-1.5 w-full rounded bg-slate-200" />
              <div className="h-1.5 w-2/3 rounded bg-slate-200" />
            </div>

            {/* 4 Core App Tiles: Mail, CRM, Meet, Lock */}
            <div className="col-span-9 grid grid-cols-2 gap-2">
              {[
                { label: 'Mail', Icon: Mail },
                { label: 'CRM', Icon: Users },
                { label: 'Meet', Icon: Video },
                { label: 'Lock', Icon: Lock },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center rounded-lg border border-violet-100 bg-violet-50/55 py-2.5"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-xs">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="mt-1 text-[10px] font-semibold text-[#110D2B]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Laptop Base Lip */}
        <div
          className="mx-auto -mt-1 h-3 w-[96%] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg"
          style={{
            transform: 'perspective(850px) rotateY(-14deg)',
          }}
        />
      </div>
    </div>
  );
};

export const BlogIsometricCubes: React.FC = () => (
  <svg
    viewBox="0 0 360 150"
    className="h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bgCube" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F1FF" />
        <stop offset="100%" stopColor="#E4D8FE" />
      </linearGradient>
      <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4B5FD" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="leftFace" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="rightFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#5B21B6" />
      </linearGradient>
    </defs>
    <rect width="360" height="150" fill="url(#bgCube)" />
    <path d="M0 120 Q110 85 220 115 T360 95 L360 150 L0 150 Z" fill="#DDD6FE" opacity="0.55" />
    {[
      { x: 180, y: 22 },
      { x: 140, y: 44 },
      { x: 220, y: 44 },
      { x: 180, y: 66 },
      { x: 140, y: 88 },
      { x: 220, y: 88 },
    ].map((c, idx) => (
      <g key={idx} transform={`translate(${c.x}, ${c.y})`}>
        <polygon points="0,0 32,-18 64,0 32,18" fill="url(#topFace)" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1" />
        <polygon points="0,0 32,18 32,54 0,36" fill="url(#leftFace)" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1" />
        <polygon points="32,18 64,0 64,36 32,54" fill="url(#rightFace)" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />
      </g>
    ))}
  </svg>
);

export const BlogGlassGear: React.FC = () => (
  <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="bgGear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5F1FF" />
        <stop offset="100%" stopColor="#E6DCFE" />
      </linearGradient>
      <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4B5FD" />
        <stop offset="55%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <rect width="360" height="150" fill="url(#bgGear)" />
    <path d="M0 110 Q90 140 190 95 T360 110 L360 150 L0 150 Z" fill="#D8B4FE" opacity="0.45" />
    <ellipse cx="182" cy="126" rx="52" ry="10" fill="#6D28D9" opacity="0.22" />
    <g transform="translate(180,72) rotate(-14)">
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="-11"
          y="-54"
          width="22"
          height="20"
          rx="5"
          fill="url(#gearGrad)"
          stroke="#FFFFFF"
          strokeOpacity="0.65"
          transform={`rotate(${i * 45})`}
        />
      ))}
      <circle cx="0" cy="0" r="38" fill="url(#gearGrad)" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="18" fill="#F3EEFF" stroke="#FFFFFF" strokeWidth="1.5" />
    </g>
  </svg>
);

export const BlogShieldLock: React.FC = () => (
  <svg viewBox="0 0 360 150" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="bgShield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4F0FF" />
        <stop offset="100%" stopColor="#E2D5FE" />
      </linearGradient>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DDD6FE" />
        <stop offset="45%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#5B21B6" />
      </linearGradient>
    </defs>
    <rect width="360" height="150" fill="url(#bgShield)" />
    <path d="M0 115 Q120 75 240 115 T360 90 L360 150 L0 150 Z" fill="#C4B5FD" opacity="0.45" />
    <ellipse cx="180" cy="128" rx="44" ry="9" fill="#5B21B6" opacity="0.22" />
    <g transform="translate(180,74) rotate(-8)">
      <path
        d="M0,-50 L40,-34 L36,12 C34,34 16,46 0,54 C-16,46 -34,34 -36,12 L-40,-34 Z"
        fill="url(#shieldGrad)"
        stroke="#FFFFFF"
        strokeOpacity="0.75"
        strokeWidth="2"
      />
      <path
        d="M-11,-4 L-11,-13 A11,11 0 0,1 11,-13 L11,-4"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="-15" y="-4" width="30" height="24" rx="6" fill="#FFFFFF" fillOpacity="0.92" />
      <circle cx="0" cy="7" r="3" fill="#6D28D9" />
    </g>
  </svg>
);

export const PlaybooksStackGraphic: React.FC = () => {
  return (
    <div className="relative flex h-full min-h-[190px] items-center justify-end pr-2 select-none">
      {/* Back Card: Growth Playbook */}
      <div
        className="absolute right-2 top-3 h-40 w-28 rounded-2xl border border-white/25 bg-gradient-to-b from-purple-400/35 to-violet-700/45 p-3 text-white backdrop-blur-md"
        style={{ transform: 'rotate(12deg)' }}
      >
        <div className="mt-10 text-center text-[11px] font-semibold leading-tight text-white/90">
          Growth Playbook
        </div>
      </div>

      {/* Middle Card: Sales Playbook */}
      <div
        className="absolute right-14 top-2 h-42 w-30 rounded-2xl border border-white/35 bg-gradient-to-b from-violet-300/45 to-violet-700/60 p-3 text-white backdrop-blur-md"
        style={{ transform: 'rotate(6deg)' }}
      >
        <div className="mt-10 text-center text-xs font-semibold leading-tight text-white">
          Sales Playbook
        </div>
      </div>

      {/* Front Card: Onboarding Playbook */}
      <div
        className="relative z-10 mr-24 flex h-44 w-34 flex-col items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-b from-white via-violet-50 to-violet-200 p-4 text-center shadow-[0_20px_40px_rgba(12,4,36,0.5)]"
        style={{ transform: 'rotate(-5deg)' }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
          <Rocket className="h-6 w-6" />
        </div>
        <div className="mt-3 text-xs font-bold leading-tight text-[#110D2B]">
          Onboarding Playbook
        </div>
      </div>
    </div>
  );
};

export const BottomGrowthBarsGraphic: React.FC = () => {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full max-w-[260px]" aria-hidden="true">
      <defs>
        <linearGradient id="barGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="arrowGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <path d="M0 120 Q80 90 150 115 T260 80 L260 150 L0 150 Z" fill="#A855F7" opacity="0.22" />
      <rect x="42" y="96" width="28" height="44" rx="4" fill="url(#barGlow)" stroke="#FFFFFF" strokeOpacity="0.45" />
      <rect x="78" y="76" width="28" height="64" rx="4" fill="url(#barGlow)" stroke="#FFFFFF" strokeOpacity="0.55" />
      <rect x="114" y="56" width="28" height="84" rx="4" fill="url(#barGlow)" stroke="#FFFFFF" strokeOpacity="0.65" />
      <rect x="150" y="34" width="28" height="106" rx="4" fill="url(#barGlow)" stroke="#FFFFFF" strokeOpacity="0.75" />
      <path
        d="M28,112 Q105,86 184,22"
        fill="none"
        stroke="url(#arrowGlow)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <polygon points="196,12 172,18 186,36" fill="#FFFFFF" />
    </svg>
  );
};

export const HeroBlogCardsGraphic: React.FC = () => {
  return (
    <div className="relative mx-auto flex h-[280px] w-full max-w-[460px] items-center justify-center select-none sm:h-[310px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-full bg-radial from-violet-400/35 via-purple-300/15 to-transparent blur-2xl"
      />

      {/* Back Right Card */}
      <div
        className="absolute right-2 top-16 h-40 w-36 rounded-2xl border border-white/60 bg-gradient-to-br from-violet-300/45 to-purple-500/45 p-4 shadow-xl backdrop-blur-md"
        style={{ transform: 'perspective(900px) rotateY(-18deg) rotateZ(4deg)' }}
      >
        <div className="mt-6 space-y-2.5">
          <div className="h-2.5 w-full rounded-full bg-white/55" />
          <div className="h-2.5 w-4/5 rounded-full bg-white/45" />
          <div className="h-2.5 w-3/5 rounded-full bg-white/35" />
        </div>
      </div>

      {/* Middle Card */}
      <div
        className="absolute right-20 top-10 h-48 w-44 rounded-2xl border border-white/70 bg-gradient-to-br from-violet-400/55 via-purple-500/50 to-indigo-600/55 p-4 shadow-2xl backdrop-blur-md"
        style={{ transform: 'perspective(900px) rotateY(-16deg) rotateZ(2deg)' }}
      >
        <div className="mt-10 space-y-3">
          <div className="h-3 w-full rounded-full bg-white/65" />
          <div className="h-3 w-5/6 rounded-full bg-white/55" />
          <div className="h-3 w-3/4 rounded-full bg-white/45" />
        </div>
      </div>

      {/* Front Hero Glass Image Card */}
      <div
        className="relative z-10 -ml-16 mt-2 h-56 w-56 rounded-3xl border-2 border-white/80 bg-gradient-to-br from-violet-300/65 via-purple-400/55 to-violet-600/65 p-5 shadow-[0_26px_50px_-12px_rgba(91,33,182,0.4)] backdrop-blur-lg"
        style={{ transform: 'perspective(950px) rotateY(-15deg) rotateX(4deg) rotateZ(-4deg)' }}
      >
        {/* Inner landscape placeholder icon */}
        <div className="flex h-28 w-full items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-b from-white/55 to-violet-200/40 shadow-inner">
          <svg viewBox="0 0 80 60" className="h-14 w-20" aria-hidden="true">
            <circle cx="58" cy="16" r="7" fill="#FFFFFF" fillOpacity="0.95" />
            <path d="M10 50 L32 22 L48 40 L58 29 L72 50 Z" fill="#FFFFFF" fillOpacity="0.9" />
          </svg>
        </div>

        {/* Frosted text lines */}
        <div className="mt-4 space-y-2.5">
          <div className="h-3 w-full rounded-full bg-white/80" />
          <div className="h-2.5 w-4/5 rounded-full bg-white/65" />
          <div className="h-2.5 w-3/5 rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
};

export const NewsletterGlassEnvelope: React.FC = () => {
  return (
    <svg
      viewBox="0 0 120 96"
      className="h-24 w-28 drop-shadow-[0_12px_20px_rgba(109,40,217,0.22)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="envBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="envFlap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <g transform="translate(10,14) rotate(-8)">
        <rect
          x="6"
          y="10"
          width="88"
          height="58"
          rx="12"
          fill="url(#envBody)"
          stroke="#FFFFFF"
          strokeOpacity="0.85"
          strokeWidth="2"
        />
        <path
          d="M8,16 L50,46 L92,16"
          fill="url(#envFlap)"
          stroke="#FFFFFF"
          strokeOpacity="0.9"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const HeroWebinarLaptopGraphic: React.FC = () => {
  return (
    <div className="relative mx-auto flex h-[280px] w-full max-w-[490px] items-center justify-center select-none sm:h-[320px]">
      {/* Ambient purple waves & glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-radial from-violet-400/35 via-purple-300/20 to-transparent blur-2xl"
      />

      {/* Tilted 3D Laptop */}
      <div className="relative z-10 w-[320px] sm:w-[375px]">
        {/* Screen Lid */}
        <div
          className="rounded-2xl border-[3px] border-violet-500/80 bg-gradient-to-br from-white via-violet-50/95 to-purple-100/90 p-3.5 shadow-[0_24px_50px_-10px_rgba(91,33,182,0.4)]"
          style={{
            transform: 'perspective(950px) rotateY(-13deg) rotateX(5deg) rotateZ(-1.5deg)',
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-violet-100 pb-2">
            <span className="text-[12px] font-extrabold tracking-tight text-[#110D2B]">
              Snaarp
            </span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-violet-300" />
              <span className="h-2 w-2 rounded-full bg-violet-200" />
            </div>
          </div>

          {/* Inner Layout */}
          <div className="mt-2.5 grid grid-cols-12 gap-3">
            {/* Left Mini Nav Bars */}
            <div className="col-span-3 space-y-2 py-1">
              <div className="h-2 w-full rounded-full bg-violet-400/80" />
              <div className="h-2 w-4/5 rounded-full bg-violet-300/70" />
              <div className="h-2 w-full rounded-full bg-violet-300/60" />
              <div className="h-2 w-3/4 rounded-full bg-violet-300/60" />
              <div className="h-2 w-5/6 rounded-full bg-violet-300/50" />
              <div className="h-2 w-2/3 rounded-full bg-violet-300/40" />
            </div>

            {/* Right Video Player Stage */}
            <div className="col-span-9 flex flex-col justify-between rounded-xl bg-gradient-to-br from-violet-100/80 to-purple-200/70 p-3">
              <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9] shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-xs">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-3/5 rounded-full bg-[#7C3AED]" />
                  <div className="h-2 flex-1 rounded-full bg-violet-300/70" />
                </div>
                <div className="h-1.5 w-2/5 rounded-full bg-violet-300/70" />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Keyboard Base */}
        <div
          className="mx-auto -mt-1.5 h-4 w-[104%] -translate-x-2 rounded-b-2xl border-t border-white/80 bg-gradient-to-b from-violet-200 via-purple-300 to-violet-500 shadow-[0_18px_35px_rgba(76,29,149,0.4)]"
          style={{
            transform: 'perspective(950px) rotateY(-13deg)',
          }}
        />
      </div>

      {/* Floating Top-Right ((•)) LIVE Pill */}
      <div
        aria-hidden="true"
        className="absolute right-3 top-3 z-20 flex items-center gap-2 rounded-2xl border border-white/75 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#9333EA] px-4 py-2 text-white shadow-[0_16px_32px_rgba(109,40,217,0.45)] backdrop-blur-md"
        style={{ transform: 'rotate(-5deg)' }}
      >
        <span className="flex items-center justify-center text-xs font-bold">
          ((•))
        </span>
        <span className="text-base font-extrabold tracking-wide">LIVE</span>
      </div>

      {/* Floating Left Calendar Glass Tile */}
      <div
        aria-hidden="true"
        className="absolute bottom-14 left-2 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/75 bg-gradient-to-br from-violet-500/85 to-purple-700/95 text-white shadow-[0_16px_32px_rgba(109,40,217,0.45)] backdrop-blur-md"
        style={{ transform: 'rotate(-10deg)' }}
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="2">
          <rect x="3" y="4" width="18" height="17" rx="3" />
          <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
          <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <circle cx="8.5" cy="13.5" r="1" fill="currentColor" />
          <circle cx="12" cy="13.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="13.5" r="1" fill="currentColor" />
          <circle cx="8.5" cy="17" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Bottom-Right Users Glass Tile */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-2 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/75 bg-gradient-to-br from-purple-500/85 to-violet-700/95 text-white shadow-[0_16px_32px_rgba(109,40,217,0.45)] backdrop-blur-md"
        style={{ transform: 'rotate(8deg)' }}
      >
        <Users className="h-8 w-8" />
      </div>
    </div>
  );
};

export const NeverMissSessionCalendarGraphic: React.FC = () => {
  return (
    <div className="relative flex h-32 w-40 items-center justify-center select-none">
      {/* Tilted 3D Frosted Calendar Block */}
      <div
        className="relative h-28 w-32 rounded-3xl border-2 border-white/75 bg-gradient-to-br from-white/95 via-violet-100/95 to-purple-300/90 p-3.5 shadow-[0_20px_40px_rgba(15,5,40,0.45)]"
        style={{
          transform: 'perspective(650px) rotateY(16deg) rotateX(8deg) rotateZ(-10deg)',
        }}
      >
        {/* Top Binder Rings */}
        <div className=" -mt-6 flex justify-around px-3">
          <span className="h-5 w-2.5 rounded-full border border-white bg-gradient-to-b from-violet-200 to-violet-500 shadow-sm" />
          <span className="h-5 w-2.5 rounded-full border border-white bg-gradient-to-b from-violet-200 to-violet-500 shadow-sm" />
        </div>

        {/* Calendar Grid Squares */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="h-3.5 rounded-md bg-violet-400/50" />
          <span className="h-3.5 rounded-md bg-violet-400/50" />
          <span className="h-3.5 rounded-md bg-violet-400/50" />
          <span className="h-3.5 rounded-md bg-violet-400/45" />
          <span className="h-3.5 rounded-md bg-violet-400/45" />
          <span className="h-3.5 rounded-md bg-violet-400/35" />
        </div>

        {/* Glowing Checkmark Badge */}
        <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white shadow-lg">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};


