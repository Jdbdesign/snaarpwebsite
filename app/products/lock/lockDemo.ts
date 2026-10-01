// Hero dashboard "guided tour" — a self-driving, looping product demo that
// shows what Snaarp Lock does: generate strong passwords, tune length, switch
// password/passphrase, sync devices, count the vault, search, and navigate the
// app. It drives the markers injected in lockHtml.ts (data-lk-*). Everything
// also responds to real user hover/click; the loop pauses while the user is
// interacting and resumes shortly after. Honors prefers-reduced-motion.
//
// Returns a cleanup function that stops all timers and removes listeners.

const PURPLE = 'rgb(124, 58, 237)';
const PURPLE_SOFT = 'rgb(239, 235, 255)';
const INK = 'rgb(14, 18, 56)';
const MUTE = 'rgb(62, 68, 102)';

const LOWER = 'abcdefghijkmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const NUM = '23456789';
const SYM = '!@#$%^&*-_=+';
const WORDS = ['harbor', 'cobalt', 'ember', 'willow', 'orbit', 'pixel', 'maple', 'nova', 'quartz', 'river', 'summit', 'tiger'];

const NAV_CAPTIONS = [
  { icon: 'key', text: 'Generate strong, unique passwords instantly' },
  { icon: 'lock', text: 'Organise everything in encrypted vaults' },
  { icon: 'groups', text: 'Share securely across your team' },
  { icon: 'download', text: 'Import from any password manager in seconds' },
];

type Ctx = {
  root: HTMLElement;
  reduce: boolean;
  timers: Set<number>;
  rafs: Set<number>;
  paused: boolean;
};

function rand(set: string) {
  return set[Math.floor(Math.random() * set.length)];
}

function makePassword(len: number) {
  const all = LOWER + UPPER + NUM + SYM;
  let out = rand(LOWER) + rand(UPPER) + rand(NUM) + rand(SYM);
  for (let i = out.length; i < len; i++) out += rand(all);
  return out
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

function makePassphrase(words: number) {
  const picks: string[] = [];
  for (let i = 0; i < words; i++) picks.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
  return picks.join('-') + '-' + rand(NUM) + rand(NUM);
}

function strengthFor(len: number): { pct: number; label: string; color: string } {
  if (len <= 10) return { pct: 42, label: 'Fair', color: 'rgb(245, 158, 11)' };
  if (len <= 14) return { pct: 68, label: 'Strong', color: 'rgb(18, 161, 80)' };
  if (len <= 22) return { pct: 100, label: 'Very strong', color: 'rgb(18, 161, 80)' };
  return { pct: 100, label: 'Fortress', color: 'rgb(124, 58, 237)' };
}

export function startLockDemo(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx: Ctx = { root, reduce, timers: new Set(), rafs: new Set(), paused: false };

  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel);
  const qa = <T extends Element = HTMLElement>(sel: string) =>
    Array.from(root.querySelectorAll<T>(sel));

  const after = (ms: number, fn: () => void) => {
    const id = window.setTimeout(() => {
      ctx.timers.delete(id);
      fn();
    }, ms);
    ctx.timers.add(id);
    return id;
  };
  const every = (ms: number, fn: () => void) => {
    const id = window.setInterval(fn, ms);
    ctx.timers.add(id);
    return id;
  };

  // ── element handles ─────────────────────────────────────────────
  const pwEl = q('[data-lk-pw]');
  const strBar = q('[data-lk-strength-bar]');
  const strLabel = q('[data-lk-strength-label]');
  const lenEl = q('[data-lk-length]');
  const slider = q<HTMLInputElement>('[data-lk-slider]');
  const genBtn = q<HTMLButtonElement>('[data-lk-generate]');
  const genIcon = q('[data-lk-generate-icon]');
  const copyBtn = q<HTMLButtonElement>('[data-lk-copy]');
  const copyIcon = q('[data-lk-copy-icon]');
  const modeBtns = qa<HTMLButtonElement>('[data-lk-mode]');
  const navBtns = qa<HTMLButtonElement>('[data-lk-nav]').sort(
    (a, b) => Number(a.dataset.lkNav) - Number(b.dataset.lkNav),
  );
  const statEls = qa('[data-lk-stat]');
  const lastSync = q('[data-lk-lastsync]');
  const syncBtn = q<HTMLButtonElement>('[data-lk-sync]');
  const syncIcon = q('[data-lk-sync-icon]');
  const dash = q('[data-lk-dash]');

  let mode: 'password' | 'passphrase' = 'password';
  let len = 16;

  // ── caption bubble (narration) ─────────────────────────────────
  let caption: HTMLElement | null = null;
  if (dash) {
    caption = document.createElement('div');
    caption.className = 'lk-demo-caption';
    caption.innerHTML =
      '<span class="lk-demo-caption-ic" style="font-family:&quot;Material Symbols Rounded&quot;">bolt</span><span class="lk-demo-caption-tx"></span>';
    dash.appendChild(caption);
  }
  const captionTx = caption?.querySelector<HTMLElement>('.lk-demo-caption-tx') ?? null;
  const captionIc = caption?.querySelector<HTMLElement>('.lk-demo-caption-ic') ?? null;
  const setCaption = (icon: string, text: string) => {
    if (!caption || !captionTx || !captionIc) return;
    caption.classList.remove('is-in');
    after(140, () => {
      captionIc.textContent = icon;
      captionTx.textContent = text;
      caption!.classList.add('is-in');
    });
  };

  // ── render helpers ─────────────────────────────────────────────
  const paintPassword = (val: string) => {
    if (!pwEl) return;
    if (ctx.reduce) {
      pwEl.textContent = val;
      return;
    }
    // character shuffle-in: reveal left-to-right while scrambling the tail
    const chars = val.split('');
    let step = 0;
    const run = () => {
      if (ctx.paused && step > 0) {
        // if paused mid-animation, just finish
        pwEl.textContent = val;
        return;
      }
      const shown = chars
        .map((c, i) => (i <= step ? c : rand(LOWER + UPPER + NUM + SYM)))
        .join('');
      pwEl.textContent = shown;
      step++;
      if (step <= chars.length) {
        const id = window.requestAnimationFrame(() => {
          ctx.rafs.delete(id);
          run();
        });
        ctx.rafs.add(id);
      }
    };
    run();
  };

  const paintStrength = () => {
    const s = strengthFor(len);
    if (strBar) {
      strBar.style.width = `${s.pct}%`;
      strBar.style.background = s.color;
    }
    if (strLabel) {
      strLabel.textContent = s.label;
      strLabel.style.color = s.color;
    }
  };

  const setLength = (v: number) => {
    len = v;
    if (lenEl) lenEl.textContent = String(v);
    if (slider) slider.value = String(v);
    paintStrength();
  };

  const regenerate = () => {
    const val = mode === 'password' ? makePassword(len) : makePassphrase(Math.max(3, Math.round(len / 5)));
    paintPassword(val);
    paintStrength();
    if (genIcon && !ctx.reduce) {
      genIcon.classList.remove('lk-spin-once');
      void genIcon.offsetWidth;
      genIcon.classList.add('lk-spin-once');
    }
  };

  const setMode = (m: 'password' | 'passphrase') => {
    mode = m;
    modeBtns.forEach((b) => {
      const on = b.dataset.lkMode === m;
      b.style.background = on ? 'rgb(255, 255, 255)' : 'transparent';
      b.style.color = on ? PURPLE : 'rgb(91, 97, 128)';
      b.style.boxShadow = on ? 'rgba(14, 18, 56, 0.2) 0px 2px 6px -2px' : 'none';
    });
    regenerate();
  };

  const setNav = (idx: number) => {
    navBtns.forEach((b, i) => {
      const on = i === idx;
      b.style.background = on ? PURPLE_SOFT : 'transparent';
      b.style.color = on ? PURPLE : MUTE;
    });
    const cap = NAV_CAPTIONS[idx] ?? NAV_CAPTIONS[0];
    setCaption(cap.icon, cap.text);
  };

  const countUp = (el: HTMLElement, target: number, ms = 900) => {
    if (ctx.reduce) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(from + (target - from) * eased));
      if (t < 1) {
        const id = window.requestAnimationFrame(tick);
        ctx.rafs.add(id);
      }
    };
    const id = window.requestAnimationFrame(tick);
    ctx.rafs.add(id);
  };

  const runSync = () => {
    if (syncIcon && !ctx.reduce) {
      syncIcon.classList.remove('lk-spin');
      void syncIcon.offsetWidth;
      syncIcon.classList.add('lk-spin');
      after(1100, () => syncIcon.classList.remove('lk-spin'));
    }
    if (lastSync) {
      lastSync.textContent = 'now';
      after(1600, () => {
        if (lastSync) lastSync.textContent = '0:01';
      });
    }
  };

  const flashCopy = () => {
    if (!copyIcon || !copyBtn) return;
    copyIcon.textContent = 'check';
    copyBtn.style.color = 'rgb(18, 161, 80)';
    after(1200, () => {
      if (copyIcon) copyIcon.textContent = 'content_copy';
      if (copyBtn) copyBtn.style.color = 'rgb(91, 97, 128)';
    });
  };

  // ── the loop (a small scripted "scene" that repeats) ───────────
  // Each beat demonstrates a capability. Beats are scheduled relative to a
  // ~13s cycle. The scene is rebuilt each cycle so it loops forever.
  let cycleTimer = 0;
  const scene = () => {
    if (ctx.paused) return;
    // beat 0: Dashboard — count the vault up, strong password ready
    setNav(0);
    statEls.forEach((el) => {
      const target = Number(el.getAttribute('data-lk-stat'));
      if (!Number.isNaN(target)) countUp(el as HTMLElement, target);
    });
    setLength(16);
    setMode('password');

    // beat 1: tune the length longer -> strength climbs, regenerate
    after(2600, () => {
      if (ctx.paused) return;
      animateSlider(16, 24, () => regenerate());
    });

    // beat 2: switch to passphrase
    after(5200, () => {
      if (ctx.paused) return;
      setNav(1);
      setMode('passphrase');
    });

    // beat 3: copy it
    after(7000, () => {
      if (ctx.paused) return;
      flashCopy();
    });

    // beat 4: team sharing + sync across devices
    after(8200, () => {
      if (ctx.paused) return;
      setNav(2);
      runSync();
    });

    // beat 5: import story, back to a fresh strong password
    after(10400, () => {
      if (ctx.paused) return;
      setNav(3);
      animateSlider(24, 16, () => {
        setMode('password');
      });
    });
  };

  const animateSlider = (from: number, to: number, done?: () => void) => {
    if (ctx.reduce) {
      setLength(to);
      done?.();
      return;
    }
    const start = performance.now();
    const ms = 700;
    const tick = (now: number) => {
      if (ctx.paused) {
        setLength(to);
        done?.();
        return;
      }
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 2);
      setLength(Math.round(from + (to - from) * eased));
      if (t < 1) {
        const id = window.requestAnimationFrame(tick);
        ctx.rafs.add(id);
      } else {
        done?.();
      }
    };
    const id = window.requestAnimationFrame(tick);
    ctx.rafs.add(id);
  };

  // ── real user interaction (pause the auto-loop) ────────────────
  let resumeId = 0;
  const pauseLoop = () => {
    ctx.paused = true;
    if (resumeId) window.clearTimeout(resumeId);
    resumeId = window.setTimeout(() => {
      ctx.paused = false;
    }, 6000);
    ctx.timers.add(resumeId);
  };

  const onGenerate = () => {
    pauseLoop();
    regenerate();
  };
  const onCopy = () => {
    pauseLoop();
    flashCopy();
  };
  const onSlider = () => {
    pauseLoop();
    if (slider) setLength(Number(slider.value));
    regenerate();
  };
  const onMode = (e: Event) => {
    pauseLoop();
    const m = (e.currentTarget as HTMLElement).dataset.lkMode as 'password' | 'passphrase';
    setMode(m);
  };
  const onNav = (e: Event) => {
    pauseLoop();
    setNav(Number((e.currentTarget as HTMLElement).dataset.lkNav));
  };
  const onSync = () => {
    pauseLoop();
    runSync();
  };

  genBtn?.addEventListener('click', onGenerate);
  copyBtn?.addEventListener('click', onCopy);
  slider?.addEventListener('input', onSlider);
  modeBtns.forEach((b) => b.addEventListener('click', onMode));
  navBtns.forEach((b) => b.addEventListener('click', onNav));
  syncBtn?.addEventListener('click', onSync);

  // ── kick off ───────────────────────────────────────────────────
  setMode('password');
  regenerate();
  setNav(0);
  if (!reduce) {
    scene();
    cycleTimer = every(13000, scene);
  } else {
    // static but meaningful end-state for reduced motion
    statEls.forEach((el) => {
      const target = el.getAttribute('data-lk-stat');
      if (target) el.textContent = target;
    });
    setCaption('bolt', 'Everything you need to protect your passwords');
    if (caption) caption.classList.add('is-in');
  }

  // ── cleanup ────────────────────────────────────────────────────
  return () => {
    ctx.paused = true;
    ctx.timers.forEach((id) => {
      window.clearTimeout(id);
      window.clearInterval(id);
    });
    ctx.rafs.forEach((id) => window.cancelAnimationFrame(id));
    if (cycleTimer) window.clearInterval(cycleTimer);
    genBtn?.removeEventListener('click', onGenerate);
    copyBtn?.removeEventListener('click', onCopy);
    slider?.removeEventListener('input', onSlider);
    modeBtns.forEach((b) => b.removeEventListener('click', onMode));
    navBtns.forEach((b) => b.removeEventListener('click', onNav));
    syncBtn?.removeEventListener('click', onSync);
    caption?.remove();
  };
}
