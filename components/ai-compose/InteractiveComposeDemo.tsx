'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy, RefreshCw, Sparkles, WandSparkles, X } from 'lucide-react';
import { Button } from '@/components/ai-compose/Button';

type Phase = 'idle' | 'generating' | 'result';
type Length = 'shorter' | 'medium' | 'longer';

const LENGTH_OPTIONS: { value: Length; label: string }[] = [
  { value: 'shorter', label: 'Shorter' },
  { value: 'medium', label: 'Medium' },
  { value: 'longer', label: 'Longer' },
];
const DEFAULT_LENGTH: Length = 'medium';

const EXAMPLE_PROMPTS = [
  'Follow up about the invoice, keep it friendly',
  'Ask for feedback on the proposal',
  'Politely decline the meeting request',
];

type LengthVariants = Record<Length, string[]>;

// Approach (a) from the brief: keyword-matched templates, each with a couple
// of phrasing variants per length so "Regenerate" (and switching length)
// produces something new rather than replaying the exact same draft.
// Anything that doesn't match a keyword group falls back to a generic draft,
// per the brief's "otherwise" case.
const TEMPLATE_GROUPS: { keywords: string[]; variants: LengthVariants }[] = [
  {
    keywords: ['invoice', 'bill', 'payment'],
    variants: {
      shorter: [
        'Hi Alex,\n\nJust following up on the invoice I sent last week — let me know if you need anything.\n\nBest,\nGrace',
        "Hi Alex,\n\nQuick nudge on last week's invoice — shout if you need anything from me.\n\nBest,\nGrace",
      ],
      medium: [
        'Hi Alex,\n\nJust a quick note to follow up on the invoice I sent last week. Let me know if you need anything else from me — happy to help.\n\nBest,\nGrace',
        "Hi Alex,\n\nCircling back on last week's invoice — just want to make sure it came through okay. Happy to resend or answer any questions.\n\nBest,\nGrace",
      ],
      longer: [
        "Hi Alex,\n\nHope you're doing well! Just wanted to follow up on the invoice I sent over last week — I know things get busy, so no rush, just wanted to make sure it landed on your radar. Happy to resend it or answer any questions if that's helpful. Let me know if you need anything else from me in the meantime.\n\nBest,\nGrace",
        "Hi Alex,\n\nHope your week's going well. Wanted to check in on the invoice I sent last week, since I haven't heard back yet — totally understand if it's just been a busy stretch. Happy to resend the PDF or walk through any of the line items if that'd help. Just let me know what works best on your end.\n\nBest,\nGrace",
      ],
    },
  },
  {
    keywords: ['feedback', 'proposal', 'review', 'draft'],
    variants: {
      shorter: [
        'Hi Alex,\n\nHad a chance to look over the proposal yet? Would love your thoughts whenever you can.\n\nBest,\nGrace',
        'Hi Alex,\n\nJust checking in on the proposal — any feedback when you get a sec?\n\nBest,\nGrace',
      ],
      medium: [
        "Hi Alex,\n\nWanted to check in and see if you've had a chance to look over the proposal. Any thoughts would help a lot before we move forward.\n\nBest,\nGrace",
        "Hi Alex,\n\nNo rush at all, but whenever you get a moment, I'd love your take on the proposal I sent over. Happy to hop on a call if that's easier.\n\nBest,\nGrace",
      ],
      longer: [
        "Hi Alex,\n\nHope things are going well on your end! Wanted to check in and see if you've had a chance to look over the proposal I sent last week. I know you've got a lot on your plate, so there's no rush at all — just want to make sure it's on your radar. Any thoughts or feedback would help a lot before we move things forward on our side. Happy to jump on a quick call if that's easier than typing it all out.\n\nBest,\nGrace",
        "Hi Alex,\n\nHope you're doing well! Just wanted to follow up on the proposal I shared last week and see where your head's at on it. No pressure at all if you need more time — just let me know roughly when you'll have a read on it so I can plan accordingly. Happy to walk through any part of it together if that's more useful than written notes.\n\nBest,\nGrace",
      ],
    },
  },
  {
    keywords: ['meeting', 'call', 'decline', 'reschedule', 'cancel'],
    variants: {
      shorter: [
        "Hi Alex,\n\nCan't make that meeting time, unfortunately — could we find another slot?\n\nBest,\nGrace",
        "Hi Alex,\n\nThat time doesn't work for me — mind if we reschedule?\n\nBest,\nGrace",
      ],
      medium: [
        "Hi Alex,\n\nThanks for the invite — I won't be able to make it this time. Could we find another slot, or would an async update work instead?\n\nBest,\nGrace",
        "Hi Alex,\n\nThat time doesn't quite work on my end, unfortunately. Happy to reschedule for later this week if you're open to it.\n\nBest,\nGrace",
      ],
      longer: [
        "Hi Alex,\n\nThanks so much for sending the invite over! Unfortunately that time clashes with something else on my end, so I won't be able to make it this round. Would it be possible to find another slot later in the week, or would an async update work just as well for what we need to cover? Happy to work around your calendar either way.\n\nBest,\nGrace",
        "Hi Alex,\n\nAppreciate you setting this up — I just realized that time doesn't work on my end after all, sorry for the late notice. Would you be open to pushing it a day or two, or happy to hop on a quick call whenever works for you instead? Let me know what's easiest and I'll make it work.\n\nBest,\nGrace",
      ],
    },
  },
];

const FALLBACK_VARIANTS: LengthVariants = {
  shorter: [
    'Hi Alex,\n\nQuick update from my end — let me know if you need anything.\n\nBest,\nGrace',
    'Hi Alex,\n\nJust checking in — shout if there\'s anything you need from me.\n\nBest,\nGrace',
  ],
  medium: [
    'Hi Alex,\n\nJust wanted to send a quick update on my end. Let me know if you have any questions or need anything else from me.\n\nBest,\nGrace',
    "Hi Alex,\n\nHope you're doing well — wanted to touch base and see where things stand. Happy to jump on a call if that's easier.\n\nBest,\nGrace",
  ],
  longer: [
    "Hi Alex,\n\nHope you're having a good week so far! Just wanted to send a quick update from my end and see where things stand on your side too. No rush on getting back to me — just let me know if you have any questions or need anything else, and I'm happy to help however I can.\n\nBest,\nGrace",
    "Hi Alex,\n\nHope things are going well! Wanted to touch base and see how everything's shaping up on your end. Happy to jump on a quick call if that's easier than going back and forth over email, or feel free to just reply here with any thoughts. Let me know what works best for you.\n\nBest,\nGrace",
  ],
};

function getDraft(prompt: string, length: Length, seed: number) {
  const lower = prompt.toLowerCase();
  const group = TEMPLATE_GROUPS.find((g) => g.keywords.some((k) => lower.includes(k)));
  const variants = (group ? group.variants : FALLBACK_VARIANTS)[length];
  return variants[seed % variants.length];
}

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

const GENERATE_DELAY_MS = 1200;
const TYPE_TICK_MS = 16;
const TYPE_CHARS_PER_TICK = 3;

export function InteractiveComposeDemo() {
  const prefersReducedMotion = useReducedMotion();

  const [prompt, setPrompt] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [displayPlaceholder, setDisplayPlaceholder] = useState('');
  const [length, setLength] = useState<Length>(DEFAULT_LENGTH);

  const [phase, setPhase] = useState<Phase>('idle');
  const [draftFull, setDraftFull] = useState('');
  const [typedLength, setTypedLength] = useState(0);
  const [copied, setCopied] = useState(false);
  const [insertHint, setInsertHint] = useState(false);

  const seedRef = useRef(0);
  const generateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const insertTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isTypingDone = phase === 'result' && typedLength >= draftFull.length;

  // Animated example-prompt placeholder: types out, pauses, backspaces, and
  // cycles through EXAMPLE_PROMPTS. Only runs while the field is empty and
  // unfocused, and stops the instant the visitor focuses or types.
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayPlaceholder(EXAMPLE_PROMPTS[0]);
      return;
    }
    if (isFocused || prompt.length > 0) return;

    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    (async function loop() {
      let index = 0;
      while (!cancelled) {
        const text = EXAMPLE_PROMPTS[index % EXAMPLE_PROMPTS.length];
        for (let i = 0; i <= text.length; i++) {
          if (cancelled) return;
          setDisplayPlaceholder(text.slice(0, i));
          await wait(35);
        }
        await wait(1100);
        for (let i = text.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplayPlaceholder(text.slice(0, i));
          await wait(18);
        }
        await wait(300);
        index++;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isFocused, prompt, prefersReducedMotion]);

  // Typewriter reveal of the generated draft.
  useEffect(() => {
    if (phase !== 'result' || prefersReducedMotion) return;
    if (typedLength >= draftFull.length) return;
    const id = setTimeout(() => {
      setTypedLength((n) => Math.min(n + TYPE_CHARS_PER_TICK, draftFull.length));
    }, TYPE_TICK_MS);
    return () => clearTimeout(id);
  }, [phase, typedLength, draftFull, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (generateTimeoutRef.current) clearTimeout(generateTimeoutRef.current);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      if (insertTimeoutRef.current) clearTimeout(insertTimeoutRef.current);
    };
  }, []);

  const runGenerate = useCallback(
    (targetLength: Length) => {
      if (!prompt.trim() || phase === 'generating') return;
      setCopied(false);
      setInsertHint(false);
      setPhase('generating');

      const draft = getDraft(prompt, targetLength, seedRef.current);
      if (generateTimeoutRef.current) clearTimeout(generateTimeoutRef.current);
      generateTimeoutRef.current = setTimeout(
        () => {
          setDraftFull(draft);
          setTypedLength(prefersReducedMotion ? draft.length : 0);
          setPhase('result');
        },
        prefersReducedMotion ? 150 : GENERATE_DELAY_MS
      );
    },
    [prompt, phase, prefersReducedMotion]
  );

  const handleGenerate = useCallback(() => {
    seedRef.current = 0;
    runGenerate(length);
  }, [runGenerate, length]);

  const handleRegenerate = useCallback(() => {
    seedRef.current += 1;
    runGenerate(length);
  }, [runGenerate, length]);

  const handleSelectLength = useCallback(
    (value: Length) => {
      setLength(value);
      // A draft is already showing — switching length should feel like
      // adjusting a live setting, so re-run generation immediately rather
      // than waiting for another manual Generate/Regenerate click.
      if (phase === 'result') runGenerate(value);
    },
    [phase, runGenerate]
  );

  const handleReset = useCallback(() => {
    if (generateTimeoutRef.current) clearTimeout(generateTimeoutRef.current);
    seedRef.current = 0;
    setPhase('idle');
    setPrompt('');
    setDraftFull('');
    setTypedLength(0);
    setCopied(false);
    setInsertHint(false);
    setLength(DEFAULT_LENGTH);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(draftFull);
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access can fail (permissions, insecure context) — nothing
      // to recover from here, the button simply won't flip to "Copied!".
    }
  }, [draftFull]);

  const handleInsert = useCallback(() => {
    setInsertHint(true);
    if (insertTimeoutRef.current) clearTimeout(insertTimeoutRef.current);
    insertTimeoutRef.current = setTimeout(() => setInsertHint(false), 2500);
  }, []);

  return (
    <div className="relative rounded-3xl border bg-card p-5 shadow-2xl md:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">AI Compose</span>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border bg-background p-4">
        <span className="text-xs font-semibold text-muted-foreground">WHAT SHOULD I WRITE?</span>

        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && prompt.trim() && phase !== 'generating') handleGenerate();
            }}
            aria-label="What should I write"
            className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
          />
          {!isFocused && prompt.length === 0 && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 top-0 flex items-center text-sm font-medium text-muted-foreground"
            >
              {displayPlaceholder}
              <span className="compose-demo-caret" />
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div role="group" aria-label="Draft length" className="flex items-center gap-0.5 rounded-full bg-secondary p-1">
            {LENGTH_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                aria-pressed={length === opt.value}
                onClick={() => handleSelectLength(opt.value)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  length === opt.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            className="rounded-full"
            disabled={!prompt.trim() || phase === 'generating'}
            onClick={handleGenerate}
          >
            <Sparkles data-icon="inline-start" />
            {phase === 'generating' ? 'Generating…' : 'Generate'}
          </Button>
        </div>
      </div>

      <div className="relative mt-4 h-64 overflow-y-auto rounded-2xl bg-secondary p-4 md:p-5">
        {phase === 'idle' && (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <WandSparkles className="size-5 text-primary/50" aria-hidden="true" />
            <p className="text-xs text-muted-foreground">Your draft will appear here.</p>
          </div>
        )}

        {phase === 'generating' && (
          <div aria-live="polite">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="size-4 animate-pulse" aria-hidden="true" />
              Generating…
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="h-3 w-full animate-pulse rounded-full bg-foreground/10" />
              <span className="h-3 w-5/6 animate-pulse rounded-full bg-foreground/10" />
              <span className="h-3 w-2/3 animate-pulse rounded-full bg-foreground/10" />
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <div
                className={`flex items-center gap-2 text-xs font-semibold text-primary transition-opacity duration-300 ${isTypingDone ? 'opacity-100' : 'opacity-0'}`}
                aria-live="polite"
              >
                <WandSparkles className="size-4" aria-hidden="true" />
                DRAFT READY
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-3" aria-hidden="true" />
                Try another
              </button>
            </div>

            <p className="whitespace-pre-line text-sm leading-relaxed">
              {draftFull.slice(0, typedLength)}
              {!isTypingDone && <span className="compose-demo-caret align-middle" />}
            </p>

            {isTypingDone && (
              <div className="relative mt-4 flex flex-wrap gap-2">
                <Button size="sm" className="rounded-full" onClick={handleInsert}>
                  <Check data-icon="inline-start" />
                  Insert
                </Button>
                <Button size="sm" variant="outline" className="rounded-full" onClick={handleRegenerate}>
                  <RefreshCw data-icon="inline-start" />
                  Regenerate
                </Button>
                <Button size="sm" variant="outline" className="rounded-full" onClick={handleCopy}>
                  <Copy data-icon="inline-start" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>

                {insertHint && (
                  <span
                    role="status"
                    className="absolute -top-11 left-0 max-w-full rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background shadow-lg"
                  >
                    This is where it&rsquo;d insert into your email — try Copy instead!
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
