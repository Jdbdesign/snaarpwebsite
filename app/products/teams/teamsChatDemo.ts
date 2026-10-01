// Continuous, self-running "Product Team" chat demo for the Snaarp Teams
// hero mockup. Driven entirely by DOM mutation on a loop — no hover, no user
// input. It appends messages (text, emoji, file cards, voice notes), shows
// typing indicators, reacts to messages, and when a file is "shared" it also
// prepends it into the Shared Files panel. The message list and shared-files
// list are capped so the mockup's fixed width/height never changes.
//
// Everything is scoped to the hero canvas (tpl 70) so the second (features)
// chat mockup is untouched. Returns a cleanup function.

type Dir = 'in' | 'out';
type Member = { name: string; avatar: string };

const MEMBERS: Record<string, Member> = {
  sarah: { name: 'Sarah Johnson', avatar: '/assets/teams/sarah-johnson.png' },
  daniel: { name: 'Daniel Okafor', avatar: '/assets/teams/daniel-okafor.png' },
  amira: { name: 'Amira Hassan', avatar: '/assets/teams/amira-hassan.png' },
  you: { name: 'You', avatar: '/assets/teams/you.png' },
};

type FileSpec = { name: string; size: string; icon: string; fg: string; bg: string };

// A looping script of chat beats. Each beat is one scripted action.
type Beat =
  | { t: 'msg'; who: keyof typeof MEMBERS; text: string; after: number }
  | { t: 'file'; who: keyof typeof MEMBERS; file: FileSpec; after: number }
  | { t: 'voice'; who: keyof typeof MEMBERS; secs: string; after: number }
  | { t: 'react'; emoji: string; after: number }
  | { t: 'typing'; who: keyof typeof MEMBERS; ms: number; after: number };

const SCRIPT: Beat[] = [
  { t: 'typing', who: 'sarah', ms: 1100, after: 400 },
  { t: 'msg', who: 'sarah', text: 'Morning team! Ready for the product sync? 🚀', after: 700 },
  { t: 'msg', who: 'daniel', text: 'Yep — just finished the latest mockups.', after: 1600 },
  { t: 'file', who: 'daniel', file: { name: 'Mockups-v3.fig', size: '6.2 MB', icon: 'draw', fg: 'rgb(168, 85, 247)', bg: 'rgb(243, 236, 255)' }, after: 1500 },
  { t: 'react', emoji: '🔥', after: 1200 },
  { t: 'typing', who: 'amira', ms: 1000, after: 500 },
  { t: 'msg', who: 'amira', text: 'These look amazing. Dropping the spec too.', after: 700 },
  { t: 'file', who: 'amira', file: { name: 'Product-Spec.pdf', size: '3.1 MB', icon: 'picture_as_pdf', fg: 'rgb(229, 72, 77)', bg: 'rgb(253, 236, 236)' }, after: 1500 },
  { t: 'voice', who: 'you', secs: '0:12', after: 1500 },
  { t: 'react', emoji: '👍', after: 1100 },
  { t: 'typing', who: 'sarah', ms: 1000, after: 500 },
  { t: 'msg', who: 'sarah', text: 'Perfect. Let’s lock scope and ship Friday ✅', after: 700 },
  { t: 'file', who: 'you', file: { name: 'Launch-Checklist.xlsx', size: '1.4 MB', icon: 'table_chart', fg: 'rgb(22, 163, 74)', bg: 'rgb(231, 248, 238)' }, after: 1600 },
  { t: 'msg', who: 'daniel', text: 'On it. Updating the board now.', after: 1500 },
  { t: 'react', emoji: '🎉', after: 1200 },
];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function startTeamsChatDemo(canvas: HTMLElement): () => void {
  const list = canvas.querySelector<HTMLElement>('[data-dc-tpl="134"]');
  const input = canvas.querySelector<HTMLInputElement>('[data-dc-tpl="193"]');
  const firstFile = canvas.querySelector<HTMLElement>('[data-dc-tpl="249"]');
  const filesList = firstFile?.parentElement ?? null;
  if (!list) return () => {};

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return () => {};

  const MAX_MSGS = 5;
  const MAX_FILES = 5;
  let cancelled = false;
  const timers: number[] = [];
  const wait = (ms: number) =>
    new Promise<void>((res) => { timers.push(window.setTimeout(res, ms)); });

  const clock = () => {
    // walk a plausible HH:MM forward so timestamps feel live
    const base = 10 * 60 + 24; // 10:24
    const m = (base + tick) % (24 * 60);
    const hh = Math.floor(m / 60), mm = m % 60;
    return `${hh}:${String(mm).padStart(2, '0')}`;
  };
  let tick = 8;

  const scrollDown = () => { list.scrollTop = list.scrollHeight; };

  const trim = () => {
    while (list.children.length > MAX_MSGS) list.removeChild(list.firstElementChild!);
  };

  const rowShell = (m: Member, time: string, inner: string) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:11px;';
    row.style.animation = 'tmchat-in 0.3s ease both';
    row.innerHTML =
      `<img src="${m.avatar}" alt="${esc(m.name)}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;flex:0 0 auto;display:block;">` +
      `<div style="flex:1 1 0%;min-width:0;">` +
      `<div style="display:flex;align-items:baseline;gap:8px;"><span style="font-size:13px;font-weight:700;">${esc(m.name)}</span><span style="font-size:11px;color:rgb(138,145,171);">${time}</span></div>` +
      inner +
      `</div>`;
    return row;
  };

  const addText = (who: keyof typeof MEMBERS, text: string) => {
    const m = MEMBERS[who];
    const inner = `<div style="margin-top:3px;font-size:12.5px;line-height:1.5;color:rgb(42,49,80);overflow-wrap:anywhere;">${esc(text)}</div>`;
    const row = rowShell(m, clock(), inner);
    list.appendChild(row); trim(); scrollDown();
    return row;
  };

  const addFileMsg = (who: keyof typeof MEMBERS, f: FileSpec) => {
    const m = MEMBERS[who];
    const card =
      `<button style="margin-top:8px;width:210px;height:50px;border-radius:10px;border:1px solid rgb(234,238,247);background:rgb(255,255,255);display:flex;align-items:center;gap:10px;padding:0 10px;cursor:pointer;text-align:left;box-shadow:rgba(20,40,120,0.25) 0px 4px 12px -8px;">` +
      `<span style="width:30px;height:30px;border-radius:7px;background:${f.bg};display:grid;place-items:center;flex:0 0 auto;"><span style="font-family:'Material Symbols Rounded';font-size:18px;line-height:1;color:${f.fg};">${f.icon}</span></span>` +
      `<span style="display:flex;flex-direction:column;gap:2px;min-width:0;"><span style="font-size:12px;font-weight:700;color:rgb(11,20,55);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(f.name)}</span><span style="font-size:10.5px;color:rgb(138,145,171);">${f.size}</span></span>` +
      `<span style="margin-left:auto;font-family:'Material Symbols Rounded';font-size:17px;line-height:1;color:rgb(138,145,171);">download</span>` +
      `</button>`;
    const row = rowShell(m, clock(), card);
    list.appendChild(row); trim(); scrollDown();
    addSharedFile(f);
  };

  const addVoice = (who: keyof typeof MEMBERS, secs: string) => {
    const m = MEMBERS[who];
    const bars = Array.from({ length: 22 }, (_, i) => {
      const h = 5 + Math.round(10 * Math.abs(Math.sin(i * 1.1)));
      return `<span style="width:2px;height:${h}px;border-radius:1px;background:rgb(124,58,237);opacity:0.75;"></span>`;
    }).join('');
    const bubble =
      `<div style="margin-top:8px;width:210px;height:40px;border-radius:10px;border:1px solid rgb(234,238,247);background:rgb(248,246,255);display:flex;align-items:center;gap:9px;padding:0 11px;">` +
      `<span style="font-family:'Material Symbols Rounded';font-size:20px;line-height:1;color:rgb(124,58,237);">play_arrow</span>` +
      `<span style="display:flex;align-items:center;gap:2px;flex:1 1 0%;height:20px;overflow:hidden;">${bars}</span>` +
      `<span style="font-size:10.5px;color:rgb(107,115,144);font-variant-numeric:tabular-nums;">${secs}</span>` +
      `</div>`;
    const row = rowShell(m, clock(), bubble);
    list.appendChild(row); trim(); scrollDown();
  };

  // Add an emoji reaction chip to the most recent message row.
  const addReaction = (emoji: string) => {
    const body = list.lastElementChild?.children?.[1] as HTMLElement | undefined;
    if (!body) return;
    let bar = body.querySelector<HTMLElement>('.tmchat-reacts');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'tmchat-reacts';
      bar.style.cssText = 'margin-top:7px;display:flex;gap:6px;';
      body.appendChild(bar);
    }
    const chip = document.createElement('span');
    chip.style.cssText = 'height:24px;border-radius:12px;border:1px solid rgb(217,208,255);background:rgb(244,241,255);display:inline-flex;align-items:center;gap:4px;padding:0 8px;font-size:11.5px;font-weight:600;color:rgb(79,87,117);';
    chip.style.animation = 'tmchat-pop 0.3s ease both';
    chip.innerHTML = `<span>${emoji}</span><span>1</span>`;
    bar.appendChild(chip);
    scrollDown();
  };

  const addTyping = (who: keyof typeof MEMBERS) => {
    const m = MEMBERS[who];
    const dots = `<span class="tmchat-typing" style="margin-top:4px;display:inline-flex;align-items:center;gap:3px;height:22px;padding:0 10px;border-radius:11px;background:rgb(240,241,248);">` +
      `<span></span><span></span><span></span></span>`;
    const row = rowShell(m, clock(), dots);
    row.setAttribute('data-typing', '1');
    list.appendChild(row); trim(); scrollDown();
    return row;
  };

  const addSharedFile = (f: FileSpec) => {
    if (!filesList) return;
    const btn = document.createElement('button');
    btn.style.cssText = 'height:52px;border-radius:10px;border:1px solid rgb(238,241,248);background:rgb(255,255,255);display:flex;align-items:center;gap:10px;padding:0 10px;cursor:pointer;text-align:left;';
    btn.style.animation = 'tmchat-in 0.35s ease both';
    btn.innerHTML =
      `<span style="width:30px;height:30px;border-radius:7px;background:${f.bg};display:grid;place-items:center;flex:0 0 auto;"><span style="font-family:'Material Symbols Rounded';font-size:17px;line-height:1;color:${f.fg};">${f.icon}</span></span>` +
      `<span style="display:flex;flex-direction:column;gap:2px;min-width:0;"><span style="font-size:12px;font-weight:700;color:rgb(11,20,55);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(f.name)}</span><span style="font-size:10.5px;color:rgb(138,145,171);">${f.size}</span></span>`;
    filesList.insertBefore(btn, filesList.firstChild);
    while (filesList.children.length > MAX_FILES) filesList.removeChild(filesList.lastElementChild!);
  };

  // Simulate the composer "typing" the outgoing message before it sends.
  const typeInComposer = async (text: string) => {
    if (!input) return;
    for (let i = 1; i <= text.length && !cancelled; i++) {
      input.setAttribute('value', text.slice(0, i));
      input.value = text.slice(0, i);
      await wait(28);
    }
    await wait(220);
    input.setAttribute('value', '');
    input.value = '';
  };

  const run = async () => {
    await wait(900);
    while (!cancelled) {
      for (const beat of SCRIPT) {
        if (cancelled) return;
        if (beat.t === 'typing') {
          const row = addTyping(beat.who);
          await wait(beat.ms);
          row.remove();
        } else if (beat.t === 'msg') {
          if (beat.who === 'you') await typeInComposer(beat.text);
          tick += 1;
          addText(beat.who, beat.text);
        } else if (beat.t === 'file') {
          tick += 1;
          addFileMsg(beat.who, beat.file);
        } else if (beat.t === 'voice') {
          tick += 1;
          addVoice(beat.who, beat.secs);
        } else if (beat.t === 'react') {
          addReaction(beat.emoji);
        }
        await wait(beat.after);
      }
      // brief pause, then clear back to a clean slate and loop again
      await wait(1600);
      if (cancelled) return;
      while (list.children.length > 1) list.removeChild(list.firstElementChild!);
      await wait(600);
    }
  };
  run();

  return () => {
    cancelled = true;
    timers.forEach((t) => clearTimeout(t));
  };
}
