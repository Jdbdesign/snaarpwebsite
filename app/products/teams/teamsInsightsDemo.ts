// Continuous, self-running micro-interactions for the Teams "Insights /
// Mobile / Sync" section (tpl 390). Three independent loops, all driven by
// DOM mutation / class toggles — no hover, no user input. Everything is
// scoped inside the section element passed in and preserves each card's
// fixed size. Returns a cleanup function.
//
//   • Analytics card: the line chart re-draws, the donut slowly rotates
//     (centre label counter-rotates to stay upright) and the stat numbers
//     tick between plausible values.
//   • Mobile card: the phone screen cycles through Chat → Video meeting →
//     File sharing → Push notifications UIs, in sync with the "explore"
//     list highlight on the right.
//   • Cross-Device card: the device tabs cycle their "active" highlight and
//     the "Type on your iPhone 15…" field types + clears on a loop.

const ease = 'cubic-bezier(0.22,1,0.36,1)';

type Timer = number;

export function startTeamsInsightsDemo(section: HTMLElement): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return () => {};

  let cancelled = false;
  const timers: Timer[] = [];
  const intervals: Timer[] = [];
  const wait = (ms: number) => new Promise<void>((r) => { timers.push(window.setTimeout(r, ms)); });
  const every = (ms: number, fn: () => void) => { intervals.push(window.setInterval(fn, ms)); };

  /* ───────────────── Analytics card (tpl 392) ───────────────── */
  const analytics = () => {
    // Line chart: animate stroke-dasharray draw + a gentle re-draw loop.
    const line = section.querySelector<SVGPathElement>('[data-dc-tpl="427"]');
    const fill = section.querySelector<SVGPathElement>('[data-dc-tpl="426"]');
    if (line) {
      const len = line.getTotalLength();
      line.style.strokeDasharray = String(len);
      const draw = () => {
        line.style.transition = 'none';
        line.style.strokeDashoffset = String(len);
        if (fill) { fill.style.transition = 'none'; fill.style.opacity = '0'; }
        // next frame -> animate in
        requestAnimationFrame(() => requestAnimationFrame(() => {
          line.style.transition = `stroke-dashoffset 1.5s ${ease}`;
          line.style.strokeDashoffset = '0';
          if (fill) { fill.style.transition = 'opacity 1.4s ease'; fill.style.opacity = '1'; }
        }));
      };
      draw();
      every(6000, () => { if (!cancelled) draw(); });
    }

    // Donut (tpl 439) slow rotate; centre label (tpl 440) counter-rotates.
    const donut = section.querySelector<HTMLElement>('[data-dc-tpl="439"]');
    const donutLabel = section.querySelector<HTMLElement>('[data-dc-tpl="440"]');
    if (donut) {
      donut.style.animation = 'tmins-spin 20s linear infinite';
      if (donutLabel) donutLabel.style.animation = 'tmins-spin-rev 20s linear infinite';
    }

    // Stat numbers (tpl 411) are left static — no rolling/jitter.
  };

  /* ───────────────── Mobile card (tpl 454) ───────────────── */
  const mobile = () => {
    const screen = section.querySelector<HTMLElement>('[data-dc-tpl="462"]');
    const chatUI = section.querySelector<HTMLElement>('[data-dc-tpl="464"]');
    const tabs = Array.from(section.querySelectorAll<HTMLElement>('[data-dc-tpl="591"]'));
    if (!screen || !chatUI || tabs.length < 4) return;

    // Keep the original chat UI node to restore for the first tab.
    const statusBar = section.querySelector<HTMLElement>('[data-dc-tpl="569"]');
    const notch = section.querySelector<HTMLElement>('[data-dc-tpl="581"]');
    const homebar = section.querySelector<HTMLElement>('[data-dc-tpl="583"]');
    const gloss = section.querySelector<HTMLElement>('[data-dc-tpl="584"]');

    // A dynamic layer that sits where the chat UI is (inset:34px 0 0).
    const layer = document.createElement('div');
    layer.style.cssText = 'position:absolute;inset:34px 0 0;display:flex;flex-direction:column;';
    screen.appendChild(layer);

    const PURPLE = 'rgb(124,58,237)';
    const header = (title: string, icon: string) =>
      `<div style="height:40px;flex:0 0 auto;display:flex;align-items:center;gap:6px;padding:0 10px 0 8px;border-bottom:1px solid rgb(240,242,248);">` +
      `<span style="width:24px;height:24px;border-radius:7px;background:linear-gradient(145deg,rgb(139,92,246),${PURPLE});color:#fff;display:grid;place-items:center;font-weight:800;font-size:12px;flex:0 0 auto;font-family:'Material Symbols Rounded';">${icon}</span>` +
      `<span style="font-size:11px;font-weight:800;">${title}</span></div>`;

    const avatars = ['/assets/teams/sarah-johnson.png', '/assets/teams/daniel-okafor.png', '/assets/teams/amira-hassan.png', '/assets/teams/you.png'];

    const screens: Record<string, string> = {
      // CHAT
      chat:
        header('product', '#') +
        `<div style="flex:1 1 0%;min-height:0;display:flex;flex-direction:column;justify-content:flex-end;gap:7px;padding:8px 9px;">` +
        [['Sarah', 'The new design looks great! 👏', 'rgb(225,29,72)', 0, 'in'],
         ['Daniel', 'This is excellent. Reviewing now.', 'rgb(14,165,233)', 1, 'in'],
         ['You', 'Great — shipping Friday ✅', '', 3, 'out']]
          .map((m: any) => m[4] === 'out'
            ? `<div style="align-self:flex-end;max-width:80%;"><div style="background:${PURPLE};color:#fff;border-radius:12px 12px 3px;padding:6px 8px;font-size:9px;line-height:1.4;">${m[1]}</div></div>`
            : `<div style="display:flex;gap:5px;align-items:flex-end;max-width:88%;"><img src="${avatars[m[3]]}" style="width:18px;height:18px;border-radius:50%;object-fit:cover;flex:0 0 auto;"><div style="background:rgb(241,243,249);border-radius:12px 12px 12px 3px;padding:5px 8px;font-size:9px;line-height:1.4;color:rgb(30,37,69);"><div style="font-size:7.5px;font-weight:800;color:${m[2]};margin-bottom:1px;">${m[0]}</div>${m[1]}</div></div>`)
          .join('') +
        `</div>` +
        `<div style="flex:0 0 auto;display:flex;align-items:center;gap:5px;padding:6px 8px 16px;border-top:1px solid rgb(240,242,248);"><span style="width:22px;height:22px;border-radius:50%;background:rgb(242,245,252);color:${PURPLE};display:grid;place-items:center;font-family:'Material Symbols Rounded';font-size:14px;">add</span><span style="flex:1;height:24px;border-radius:12px;border:1px solid rgb(230,234,244);"></span><span style="width:24px;height:24px;border-radius:50%;background:${PURPLE};color:#fff;display:grid;place-items:center;font-family:'Material Symbols Rounded';font-size:13px;">mic</span></div>`,
      // VIDEO MEETING
      video:
        header('product · call', 'videocam') +
        `<div style="flex:1 1 0%;min-height:0;background:rgb(10,12,22);padding:7px;display:flex;flex-direction:column;gap:5px;">` +
        `<div style="flex:1 1 0%;border-radius:10px;overflow:hidden;position:relative;background:rgb(20,24,40);">` +
        `<video src="/assets/teams/speaker-video.mp4" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;"></video>` +
        `<span style="position:absolute;left:6px;top:6px;display:flex;align-items:center;gap:4px;height:15px;padding:0 6px;border-radius:5px;background:rgba(10,14,30,0.6);color:#fff;font-size:7px;font-weight:700;"><span style="width:5px;height:5px;border-radius:50%;background:rgb(74,222,128);"></span>LIVE</span></div>` +
        `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;height:44px;flex:0 0 auto;">` +
        avatars.slice(0, 3).map((a) => `<div style="border-radius:8px;overflow:hidden;background:rgb(27,34,56);"><img src="${a}" style="width:100%;height:100%;object-fit:cover;"></div>`).join('') +
        `</div>` +
        `<div style="height:30px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;gap:7px;">` +
        ['mic', 'videocam', 'present_to_all'].map((i) => `<span style="width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,0.12);color:#fff;display:grid;place-items:center;font-family:'Material Symbols Rounded';font-size:14px;">${i}</span>`).join('') +
        `<span style="width:26px;height:26px;border-radius:50%;background:rgb(239,68,68);color:#fff;display:grid;place-items:center;font-family:'Material Symbols Rounded';font-size:14px;">call_end</span>` +
        `</div></div>`,
      // FILE SHARING
      files:
        header('product · files', 'folder_copy') +
        `<div style="flex:1 1 0%;min-height:0;display:flex;flex-direction:column;gap:6px;padding:9px;">` +
        [['picture_as_pdf', 'rgb(229,72,77)', 'rgb(253,236,236)', 'Product-Spec.pdf', '3.1 MB'],
         ['draw', 'rgb(168,85,247)', 'rgb(243,236,255)', 'Mockups-v3.fig', '6.2 MB'],
         ['table_chart', 'rgb(22,163,74)', 'rgb(231,248,238)', 'Launch-Plan.xlsx', '2.2 MB'],
         ['slideshow', 'rgb(249,115,22)', 'rgb(255,241,230)', 'Roadmap.pptx', '4.1 MB']]
          .map((f: any) => `<div style="display:flex;align-items:center;gap:8px;height:40px;border-radius:9px;border:1px solid rgb(238,241,248);padding:0 9px;"><span style="width:26px;height:26px;border-radius:7px;background:${f[2]};display:grid;place-items:center;flex:0 0 auto;"><span style="font-family:'Material Symbols Rounded';font-size:15px;color:${f[1]};">${f[0]}</span></span><span style="display:flex;flex-direction:column;min-width:0;"><span style="font-size:9px;font-weight:700;color:rgb(11,20,55);">${f[3]}</span><span style="font-size:7.5px;color:rgb(138,145,171);">${f[4]}</span></span><span style="margin-left:auto;font-family:'Material Symbols Rounded';font-size:14px;color:rgb(138,145,171);">download</span></div>`)
          .join('') +
        `</div>`,
      // PUSH NOTIFICATIONS
      notif:
        header('Notifications', 'notifications_active') +
        `<div style="flex:1 1 0%;min-height:0;display:flex;flex-direction:column;gap:7px;padding:9px;">` +
        [['/assets/teams/sarah-johnson.png', 'Sarah', 'mentioned you in #product', 'now'],
         ['/assets/teams/daniel-okafor.png', 'Daniel', 'shared Mockups-v3.fig', '2m'],
         ['/assets/teams/amira-hassan.png', 'Amira', 'started a video meeting', '5m']]
          .map((n: any) => `<div style="display:flex;gap:7px;align-items:flex-start;border-radius:10px;background:rgb(248,247,255);border:1px solid rgb(238,241,248);padding:7px 8px;"><img src="${n[0]}" style="width:20px;height:20px;border-radius:50%;object-fit:cover;flex:0 0 auto;"><div style="min-width:0;flex:1;"><div style="font-size:9px;line-height:1.35;color:rgb(30,37,69);"><b>${n[1]}</b> ${n[2]}</div></div><span style="font-size:7px;color:rgb(154,161,185);flex:0 0 auto;">${n[3]}</span></div>`)
          .join('') +
        `</div>`,
    };

    const order: Array<keyof typeof screens> = ['chat', 'video', 'files', 'notif'];
    let idx = 0;

    // Hide the original authored chat UI; our layer takes over.
    chatUI.style.display = 'none';

    const show = (key: keyof typeof screens) => {
      layer.style.transition = 'none';
      layer.style.opacity = '0';
      layer.style.transform = 'translateX(10px)';
      layer.innerHTML = screens[key];
      requestAnimationFrame(() => requestAnimationFrame(() => {
        layer.style.transition = `opacity 0.4s ${ease}, transform 0.4s ${ease}`;
        layer.style.opacity = '1';
        layer.style.transform = 'translateX(0)';
      }));
      // sync the explore-list highlight
      tabs.forEach((t, i) => {
        const active = i === order.indexOf(key);
        t.style.border = active ? '1px solid rgb(157,184,255)' : '1px solid rgb(238,241,248)';
        t.style.background = active ? 'rgb(247,249,255)' : 'rgb(255,255,255)';
        t.style.boxShadow = active ? 'rgba(124,58,237,0.55) 0px 10px 22px -14px' : 'none';
      });
    };

    // keep status bar / notch / home / gloss on top of our layer
    [statusBar, notch, homebar, gloss].forEach((el) => { if (el) screen.appendChild(el); });

    show('chat');
    every(3200, () => {
      if (cancelled) return;
      idx = (idx + 1) % order.length;
      show(order[idx]);
    });
  };

  /* ───────────────── Cross-Device card (tpl 605 + tabs) ───────────────── */
  const sync = () => {
    const tabs = Array.from(section.querySelectorAll<HTMLElement>('[data-dc-tpl="663"]'));
    const input = section.querySelector<HTMLInputElement>('[data-dc-tpl="671"]');
    // device frames: laptop tpl607, tablet tpl637, phone tpl651
    const frames = ['607', '637', '651'].map((t) => section.querySelector<HTMLElement>(`[data-dc-tpl="${t}"]`));
    if (tabs.length < 3) return;

    const phrases = ['Type on your iPhone 15…', 'Replying from mobile…', 'Synced across devices ✓', 'Pick up on desktop…'];
    let di = 2; // current active device (mobile) to start

    const setActive = (i: number) => {
      tabs.forEach((t, k) => {
        const on = k === i;
        t.style.border = on ? '1.5px solid rgb(124,58,237)' : '1.5px solid rgb(230,234,244)';
        t.style.background = on ? 'rgb(244,247,255)' : 'rgb(255,255,255)';
        const iconTile = t.children[0] as HTMLElement | undefined;
        if (iconTile) {
          iconTile.style.background = on ? 'rgb(124,58,237)' : 'rgb(238,243,255)';
          const glyph = iconTile.firstElementChild as HTMLElement | undefined;
          if (glyph) glyph.style.color = on ? '#fff' : 'rgb(124,58,237)';
        }
        const sub = t.querySelector<HTMLElement>('[data-dc-tpl="668"]');
        if (sub) sub.style.color = on ? 'rgb(124,58,237)' : 'rgb(22,163,74)';
      });
      // emphasize the matching device frame with a brand ring
      frames.forEach((f, k) => {
        if (!f) return;
        f.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        f.style.transform = k === i ? 'translateY(-2px)' : 'translateY(0)';
      });
    };

    const typeField = async (text: string) => {
      if (!input) return;
      for (let i = 1; i <= text.length && !cancelled; i++) {
        input.setAttribute('placeholder', text.slice(0, i));
        await wait(45);
      }
      await wait(1400);
    };

    setActive(2);
    const loop = async () => {
      while (!cancelled) {
        await typeField(phrases[di % phrases.length]);
        if (cancelled) return;
        di = (di + 1) % 3;        // cycle Desktop/Tablet/Mobile
        setActive(di);
        await wait(400);
      }
    };
    loop();
  };

  analytics();
  mobile();
  sync();

  return () => {
    cancelled = true;
    timers.forEach(clearTimeout);
    intervals.forEach(clearInterval);
  };
}
