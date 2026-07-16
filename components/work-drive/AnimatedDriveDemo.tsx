'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { ScreenChrome } from '@/components/work-drive/ProductVisuals';

const FOLDER_ICON_SRC = '/assets/icons/file-manager-icon.svg';

const FOLDERS = [
  { name: 'Client work', tone: 'bg-primary/8 text-primary', count: '6 files', badge: true },
  { name: 'Brand assets', tone: 'bg-primary/14 text-primary', count: '5 files' },
  { name: 'Team docs', tone: 'bg-primary/20 text-primary', count: '6 files' },
];

const ROOT_FILES = [
  { name: 'Project brief.pdf', size: '2.4 MB', icon: '/assets/icons/pdf-icon.svg' },
  { name: 'Homepage mockup.png', size: '8.1 MB', icon: '/assets/icons/file-png-color-red-icon.svg' },
];

// Contents shown for the "Client work" folder once it's opened — one of
// each provided file-type icon, so every asset in the set gets used.
const FOLDER_FILES = [
  { name: 'Sunset_shoot.jpg', size: '3.2 MB', icon: '/assets/icons/file-jpeg-color-red-icon.svg' },
  { name: 'Logo_final.png', size: '1.1 MB', icon: '/assets/icons/file-png-color-red-icon.svg' },
  { name: 'Client_contract.pdf', size: '640 KB', icon: '/assets/icons/pdf-icon.svg' },
  { name: 'Kickoff_notes.docx', size: '84 KB', icon: '/assets/icons/google-docs-icon.svg' },
  { name: 'Intro_jingle.mp3', size: '4.6 MB', icon: '/assets/icons/music-player-music-info-square-icon.svg' },
  { name: 'Walkthrough.mp4', size: '82 MB', icon: '/assets/icons/movie-videos-icon.svg' },
];

const SEARCH_PLACEHOLDERS = ['Search for a file…', "Try 'homepage mockup'", 'Find anything by name or type…'];

// Approximate anchor points (percent of the stage box) for the simulated
// cursor — decorative, tuned by eye for this card's fixed internal layout
// rather than measured live, same spirit as the fixed-coordinate
// collaborator cursors in components/sheets/SheetsAltCollab.tsx.
const CURSOR_OFFSTAGE = { left: '86%', top: '-8%' };
const CURSOR_TARGETS = {
  folder: { left: '19%', top: '46%' },
  back: { left: '11%', top: '13%' },
} as const;

type CursorTarget = keyof typeof CURSOR_TARGETS;
type ViewMode = 'all' | 'folder';

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// Same media-query hook shape as components/ai-compose/InteractiveComposeDemo.tsx's
// useReducedMotion() — kept local rather than shared, matching how each
// product page's animated demo owns its own copy.
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView] as const;
}

const ENTRANCE_ITEM_COUNT = 7; // header row, 3 folders, 2 files, storage card
const ENTRANCE_STAGGER_MS = 100;
const ENTRANCE_DURATION_MS = 550;
const ENTRANCE_TOTAL_MS = ENTRANCE_STAGGER_MS * (ENTRANCE_ITEM_COUNT - 1) + ENTRANCE_DURATION_MS;

/**
 * Self-contained animated/interactive mock file browser for the Work Drive
 * hero: once in view, staggers in, then loops a "click a folder to open it,
 * hold, click back, fade out, repeat" demo indefinitely. Reusable anywhere
 * that wants the same demo — currently only wired into WorkDrivePage's hero.
 */
export function AnimatedDriveDemo() {
  const prefersReducedMotion = useReducedMotion();
  const [stageRef, inView] = useInView<HTMLDivElement>();
  const frameContentRef = useRef<HTMLDivElement>(null);
  const [frameHeight, setFrameHeight] = useState<number | undefined>(undefined);

  // Whether the JS-driven loop has actually begun — kept separate from
  // `inView` so the very first entrance only plays once (triggered by the
  // loop itself) instead of once from a plain CSS animation and again when
  // the loop's first remount fires.
  const [started, setStarted] = useState(false);
  const [loopKey, setLoopKey] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [switching, setSwitching] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [cursorTarget, setCursorTarget] = useState<CursorTarget>('folder');
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);

  const animate = started && !prefersReducedMotion;
  const searchActive = viewMode === 'all' && !switching && !exiting;
  const [placeholder, setPlaceholder] = useState(prefersReducedMotion ? SEARCH_PLACEHOLDERS[0] : '');

  // Animated search placeholder: type out a phrase, pause, backspace, move
  // to the next one — same type/pause/backspace rhythm as AI Compose's
  // InteractiveComposeDemo prompt placeholder. Only runs on the "All files"
  // view so it doesn't compete with the folder-open moment.
  useEffect(() => {
    if (prefersReducedMotion) {
      setPlaceholder(SEARCH_PLACEHOLDERS[0]);
      return;
    }
    if (!started || !searchActive) return;
    let cancelled = false;
    (async function loop() {
      let index = 0;
      while (!cancelled) {
        const text = SEARCH_PLACEHOLDERS[index % SEARCH_PLACEHOLDERS.length];
        for (let i = 0; i <= text.length; i++) {
          if (cancelled) return;
          setPlaceholder(text.slice(0, i));
          await wait(35);
        }
        await wait(1100);
        for (let i = text.length; i >= 0; i--) {
          if (cancelled) return;
          setPlaceholder(text.slice(0, i));
          await wait(18);
        }
        await wait(300);
        index++;
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [started, searchActive, prefersReducedMotion]);

  // Main demo loop: entrance -> cursor clicks "Client work" -> folder opens
  // -> holds -> cursor clicks back -> returns to All files -> fades out ->
  // repeats. Gated on prefers-reduced-motion and on the card being in view.
  useEffect(() => {
    if (prefersReducedMotion || !inView) return;
    let cancelled = false;
    setStarted(true);

    (async function loop() {
      while (!cancelled) {
        setExiting(false);
        setViewMode('all');
        setSwitching(false);
        setCursorVisible(false);
        setCursorClicking(false);
        setCursorTarget('folder');
        setLoopKey((k) => k + 1);

        await wait(ENTRANCE_TOTAL_MS + 500);
        if (cancelled) return;

        setCursorVisible(true);
        await wait(650);
        if (cancelled) return;

        setCursorClicking(true);
        await wait(220);
        if (cancelled) return;

        setSwitching(true);
        await wait(240);
        if (cancelled) return;

        setViewMode('folder');
        setCursorVisible(false);
        setCursorClicking(false);
        setSwitching(false);
        await wait(700);
        if (cancelled) return;

        await wait(3200);
        if (cancelled) return;

        setCursorTarget('back');
        setCursorVisible(true);
        await wait(550);
        if (cancelled) return;

        setCursorClicking(true);
        await wait(220);
        if (cancelled) return;

        setSwitching(true);
        await wait(240);
        if (cancelled) return;

        setViewMode('all');
        setCursorVisible(false);
        setCursorClicking(false);
        setSwitching(false);
        await wait(900);
        if (cancelled) return;

        await wait(1400);
        if (cancelled) return;

        setExiting(true);
        await wait(500);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion, inView]);

  // Lock the frame to the "All files" view's natural height (it's the
  // taller of the two states, thanks to the storage card) so opening the
  // folder never grows/shrinks the card — re-measured per viewport width.
  useLayoutEffect(() => {
    if (viewMode !== 'all') return;
    const el = frameContentRef.current;
    if (!el) return;
    const measure = () => setFrameHeight(el.getBoundingClientRect().height);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [viewMode, loopKey]);

  const reveal = (index: number) => (animate ? { animationDelay: `${index * ENTRANCE_STAGGER_MS}ms` } : undefined);
  const cursorPos = cursorVisible ? CURSOR_TARGETS[cursorTarget] : CURSOR_OFFSTAGE;

  return (
    <ScreenChrome label="Work Drive">
      <div ref={stageRef} key={animate ? loopKey : 'static'} className={`drive-demo-stage${exiting ? ' drive-demo-fade-out' : ''}`}>
        <div className="drive-demo-frame" style={frameHeight ? { height: `${frameHeight}px` } : undefined}>
          <div ref={frameContentRef}>
            <div className={`drive-demo-view${animate ? ' drive-demo-reveal' : ''}${switching ? ' drive-demo-view-switching' : ''}`} style={reveal(0)}>
              {viewMode === 'all' ? (
                <div className="flex items-center justify-between rounded-2xl border bg-background p-4">
                  <p className="text-sm font-semibold">All files</p>
                  <div className="flex min-w-0 items-center gap-2 rounded-full bg-muted px-3 py-2 text-xs text-muted-foreground">
                    <Search className="size-4 shrink-0" />
                    <span className="truncate">{placeholder}</span>
                    {animate && <span className="drive-demo-caret" aria-hidden="true" />}
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center gap-2 rounded-2xl border bg-background p-4">
                  <ArrowLeft className="size-4 text-muted-foreground" />
                  <p className="text-sm font-semibold">Client work</p>
                </div>
              )}
            </div>

            <div key={`${animate ? loopKey : 'static'}-${viewMode}`} className={`drive-demo-view mt-4 grid gap-4 sm:grid-cols-3${switching ? ' drive-demo-view-switching' : ''}`}>
              {viewMode === 'all' ? (
                <>
                  {FOLDERS.map((folder, index) => (
                    <div
                      key={folder.name}
                      className={`${folder.tone}${animate ? ' drive-demo-reveal' : ''}${cursorClicking && cursorTarget === 'folder' && folder.badge ? ' drive-demo-card-clicked' : ''} relative min-h-32 rounded-2xl p-4`}
                      style={reveal(index + 1)}
                    >
                      <img src={FOLDER_ICON_SRC} alt="" aria-hidden="true" className="size-8" />
                      <p className="mt-8 text-sm font-semibold">{folder.name}</p>
                      <p className="text-xs text-foreground/55">{folder.count}</p>
                      {folder.badge && (
                        <span className="absolute -right-2 -top-3 flex items-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-[11px] text-background shadow-lg">
                          Shared with Teams
                        </span>
                      )}
                    </div>
                  ))}
                  {ROOT_FILES.map((file, index) => (
                    <div key={file.name} className={`rounded-2xl border bg-background p-4${animate ? ' drive-demo-reveal' : ''}`} style={reveal(index + 4)}>
                      <img src={file.icon} alt="" aria-hidden="true" className="size-7" />
                      <p className="mt-5 text-sm font-semibold">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{file.size}</p>
                    </div>
                  ))}
                  <div className={`rounded-2xl bg-foreground p-4 text-background${animate ? ' drive-demo-reveal' : ''}`} style={reveal(6)}>
                    <p className="text-xs text-background/60">Storage used</p>
                    <p className="mt-2 text-2xl font-bold">12.8 GB</p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/20">
                      <div
                        className={`drive-demo-storage-fill h-full rounded-full bg-primary${animate ? ' drive-demo-storage-animate' : ''}`}
                        style={animate ? { animationDelay: `${6 * ENTRANCE_STAGGER_MS + 100}ms` } : undefined}
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-background/60">of 20 GB shared</p>
                  </div>
                </>
              ) : (
                FOLDER_FILES.map((file, index) => (
                  <div key={file.name} className={`rounded-2xl border bg-background p-4${animate ? ' drive-demo-reveal' : ''}`} style={reveal(index)}>
                    <img src={file.icon} alt="" aria-hidden="true" className="size-7" />
                    <p className="mt-5 truncate text-sm font-semibold">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{file.size}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {animate && (
          <div
            className={`drive-demo-cursor${cursorVisible ? ' drive-demo-cursor-visible' : ''}${cursorClicking ? ' drive-demo-cursor-clicking' : ''}`}
            style={{ left: cursorPos.left, top: cursorPos.top }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#7C3AED"><path d="m3 3 7.5 18 2.5-7 7-2.5z" /></svg>
            {cursorClicking && <span className="drive-demo-click-ripple" />}
          </div>
        )}
      </div>
    </ScreenChrome>
  );
}
