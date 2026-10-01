// Section-level interactions for the Snaarp Lock page (everything below the
// hero). Plain DOM controllers over the injected markup markers:
//   • Features (tpl 259): a looping spotlight that walks each capability card,
//     lifting it and popping its icon; cards also react to real hover/click.
//   • Enterprise security (tpl 531): the 4 options select and swap the info
//     line (tpl 537) with a matching explanation; auto-cycles + real click.
// Honors prefers-reduced-motion. Returns a cleanup function.

const PURPLE = 'rgb(124, 58, 237)';

// Keyed by the security option's visible label -> {icon, blurb}.
const SECURITY: Record<string, { icon: string; blurb: string }> = {
  'End-to-End Encryption (256-bit)': {
    icon: 'encrypted',
    blurb:
      'Every item is encrypted with AES-256 on your device before it ever leaves — even in transit and at rest.',
  },
  'Zero-Knowledge Architecture': {
    icon: 'key',
    blurb:
      'Only you hold the keys. Snaarp Lock can never see your master password or the contents of your vault.',
  },
  'Secure Cloud Infrastructure': {
    icon: 'cloud_done',
    blurb:
      'Your encrypted vault syncs across hardened, redundant infrastructure so it is always available and safe.',
  },
  'Regular Security Audits': {
    icon: 'policy',
    blurb:
      'Independent experts audit our systems and code regularly, so protection keeps pace with new threats.',
  },
};

export function startLockSections(root: HTMLElement): () => void {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const timers = new Set<number>();
  const every = (ms: number, fn: () => void) => {
    const id = window.setInterval(fn, ms);
    timers.add(id);
    return id;
  };
  let resumeTimer = 0;

  // ── Features spotlight ─────────────────────────────────────────
  const featureCards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-dc-tpl="259"]'),
  );
  let featIdx = 0;
  let featPaused = false;

  const litFeature = (idx: number) => {
    featureCards.forEach((c, i) => c.classList.toggle('lk-feat-on', i === idx));
  };
  const stepFeature = () => {
    if (featPaused || featureCards.length === 0) return;
    featIdx = (featIdx + 1) % featureCards.length;
    litFeature(featIdx);
  };

  const onFeatureEnter = (e: Event) => {
    featPaused = true;
    const idx = featureCards.indexOf(e.currentTarget as HTMLElement);
    if (idx >= 0) {
      featIdx = idx;
      litFeature(idx);
    }
  };
  const onFeatureLeave = () => {
    featPaused = false;
  };
  featureCards.forEach((c) => {
    c.addEventListener('mouseenter', onFeatureEnter);
    c.addEventListener('mouseleave', onFeatureLeave);
    c.addEventListener('focusin', onFeatureEnter);
    c.addEventListener('focusout', onFeatureLeave);
  });

  // ── Enterprise security selector ───────────────────────────────
  const secBtns = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-dc-tpl="531"]'),
  );
  const secInfo = root.querySelector<HTMLElement>('[data-lk-secinfo]');
  const secIcon = root.querySelector<HTMLElement>('[data-lk-secicon]');
  let secIdx = 0;
  let secPaused = false;

  const labelOf = (btn: HTMLElement) =>
    (btn.querySelector('[data-dc-tpl="534"]')?.textContent || '').trim();

  const selectSecurity = (idx: number) => {
    secBtns.forEach((b, i) => {
      const on = i === idx;
      b.style.borderColor = on ? PURPLE : 'rgb(236, 233, 248)';
      b.style.background = on ? 'rgb(250, 248, 255)' : 'rgb(255, 255, 255)';
      b.classList.toggle('lk-sec-on', on);
    });
    const label = labelOf(secBtns[idx]);
    const data = SECURITY[label];
    if (data && secInfo && secIcon) {
      secInfo.style.opacity = '0';
      const id = window.setTimeout(() => {
        secInfo.textContent = data.blurb;
        secIcon.textContent = data.icon;
        secInfo.style.opacity = '1';
      }, 160);
      timers.add(id);
    }
  };
  const stepSecurity = () => {
    if (secPaused || secBtns.length === 0) return;
    secIdx = (secIdx + 1) % secBtns.length;
    selectSecurity(secIdx);
  };

  const onSecClick = (e: Event) => {
    const idx = secBtns.indexOf(e.currentTarget as HTMLButtonElement);
    if (idx < 0) return;
    secPaused = true;
    if (resumeTimer) window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      secPaused = false;
    }, 7000);
    timers.add(resumeTimer);
    secIdx = idx;
    selectSecurity(idx);
  };
  secBtns.forEach((b) => b.addEventListener('click', onSecClick));

  // ── Import "live import" demo ──────────────────────────────────
  const importGrid = root.querySelector<HTMLElement>('[data-lk-import-grid]');
  const importMsg = root.querySelector<HTMLElement>('[data-lk-import-msg]');
  const importIcon = root.querySelector<HTMLElement>('[data-lk-import-icon]');
  const importBtns = importGrid
    ? Array.from(importGrid.querySelectorAll<HTMLButtonElement>(':scope > button'))
    : [];
  // the lift/outline target is the inner .scpc tile of each button
  const tileOf = (b: HTMLElement) => b.querySelector<HTMLElement>('.scpc');
  // The brand name is the button's own direct text (the icon-tile .scpc span
  // and any Material-Symbol glyph inside it must be excluded). Collect only
  // direct child text nodes + <br>-separated text, skipping the .scpc tile.
  const nameOf = (b: HTMLElement) => {
    let out = '';
    b.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        out += node.textContent || '';
      } else if (node.nodeName === 'BR') {
        out += ' ';
      } else if (node instanceof HTMLElement && !node.classList.contains('scpc')) {
        out += node.textContent || '';
      }
    });
    return out.replace(/\s+/g, ' ').trim();
  };
  let impIdx = 0;
  let impPaused = false;
  let impBusy = false;

  const clearImport = () => {
    importBtns.forEach((b) => {
      const t = tileOf(b);
      if (t) {
        t.style.border = '2px solid transparent';
        t.style.transform = 'none';
      }
      b.style.color = 'rgb(91, 97, 128)';
    });
  };

  const runImport = (idx: number) => {
    if (!importBtns[idx]) return;
    impBusy = true;
    clearImport();
    const btn = importBtns[idx];
    const tile = tileOf(btn);
    const name = nameOf(btn);
    if (tile) {
      tile.style.border = `2px solid ${PURPLE}`;
      tile.style.transform = reduce ? 'none' : 'translateY(-4px)';
    }
    btn.style.color = PURPLE;
    if (importMsg && importIcon) {
      importIcon.textContent = 'sync';
      importIcon.classList.add('lk-spin');
      importMsg.textContent = `Importing from ${name}…`;
      const n = 40 + Math.floor(Math.random() * 220);
      const done = window.setTimeout(() => {
        importIcon.classList.remove('lk-spin');
        importIcon.textContent = 'check_circle';
        importIcon.style.color = 'rgb(18, 161, 80)';
        importMsg.textContent = `${n} items secured in your vault.`;
        const reset = window.setTimeout(() => {
          importIcon.style.color = PURPLE;
          impBusy = false;
        }, 900);
        timers.add(reset);
      }, 1200);
      timers.add(done);
    } else {
      impBusy = false;
    }
  };

  const stepImport = () => {
    if (impPaused || impBusy || importBtns.length === 0) return;
    impIdx = (impIdx + 1) % importBtns.length;
    runImport(impIdx);
  };

  const onImportClick = (e: Event) => {
    const idx = importBtns.indexOf(e.currentTarget as HTMLButtonElement);
    if (idx < 0) return;
    impPaused = true;
    if (resumeTimer) window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      impPaused = false;
    }, 8000);
    timers.add(resumeTimer);
    impIdx = idx;
    runImport(idx);
  };
  importBtns.forEach((b) => b.addEventListener('click', onImportClick));

  // ── kick off ───────────────────────────────────────────────────
  if (featureCards.length) litFeature(0);
  if (secBtns.length) selectSecurity(0);
  if (importBtns.length && !reduce) runImport(0);

  if (!reduce) {
    every(2200, stepFeature);
    every(3400, stepSecurity);
    every(2600, stepImport);
  }

  // ── cleanup ────────────────────────────────────────────────────
  return () => {
    timers.forEach((id) => {
      window.clearInterval(id);
      window.clearTimeout(id);
    });
    featureCards.forEach((c) => {
      c.removeEventListener('mouseenter', onFeatureEnter);
      c.removeEventListener('mouseleave', onFeatureLeave);
      c.removeEventListener('focusin', onFeatureEnter);
      c.removeEventListener('focusout', onFeatureLeave);
      c.classList.remove('lk-feat-on');
    });
    secBtns.forEach((b) => {
      b.removeEventListener('click', onSecClick);
      b.classList.remove('lk-sec-on');
    });
    importBtns.forEach((b) => b.removeEventListener('click', onImportClick));
    clearImport();
  };
}
