'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Inbox, Star, Send, FileText, Tag, Trash2, Pencil, Search, Bell, Reply,
  Forward, Archive, Sparkles, CheckCircle2,
} from 'lucide-react';

const BRAND = '#7C3AED';

// Invented inbox data (not confidential).
type Mail = { ini: string; c: string; from: string; subject: string; preview: string; time: string; unread?: boolean };
const BASE: Mail[] = [
  { ini: 'MB', c: '#EA580C', from: 'Maya Brooks', subject: 'Design handoff — landing page', preview: 'The Figma file is finalised with redlines for spacing…', time: '08:47' },
  { ini: 'TS', c: '#16A34A', from: 'Tomiwa Sanni', subject: 'Re: Partnership proposal', preview: 'Thanks for sending this over. The team reviewed the deck…', time: 'Yesterday' },
  { ini: 'RC', c: '#DB2777', from: 'Rita Chen', subject: 'Onboarding checklist', preview: 'Here\u2019s the updated checklist we\u2019ll use next week…', time: 'Yesterday' },
  { ini: 'JW', c: '#0EA5E9', from: 'Jacob Wright', subject: 'Weekly product sync notes', preview: 'Notes from today\u2019s sync: we shipped the new filters…', time: 'Mon' },
];
const INCOMING: Mail = { ini: 'AO', c: '#7C3AED', from: 'Amara Okafor', subject: 'Q3 marketing plan — ready for review', preview: 'Hi, I\u2019ve pulled together the draft campaign calendar and budget for Q3. Would love your thoughts before Friday.', time: 'now', unread: true };

const REPLY_TEXT = 'Hi Amara,\n\nThis looks great — the timeline works for me. Let\u2019s lock it in. I\u2019ll send calendar invites shortly.\n\nBest,\nAlex';

type Phase = 'idle' | 'arrive' | 'openMail' | 'reading' | 'reply' | 'typing' | 'sent';

export function MailDevicesDemo({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [mails, setMails] = useState<Mail[]>(BASE);
  const [phase, setPhase] = useState<Phase>('idle');
  const [selected, setSelected] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [phoneToast, setPhoneToast] = useState(false);
  const [cur, setCur] = useState({ x: 200, y: 90 });
  const [press, setPress] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });
    const centerOf = (sel: string) => {
      const root = rootRef.current; const el = root?.querySelector<HTMLElement>(`[data-c="${sel}"]`);
      if (!root || !el) return null;
      const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
      const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
      return { x: (tb.left - rb.left + tb.width / 2) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom };
    };
    const moveTo = (sel: string, hold = 640) => new Promise<void>((resolve) => {
      const c = centerOf(sel); if (c) setCur(c);
      const t = setTimeout(resolve, hold); timers.push(t);
    });
    const clickFx = () => new Promise<void>((resolve) => { setPress(true); const a = setTimeout(() => setPress(false), 150); const b = setTimeout(resolve, 240); timers.push(a, b); });
    const tap = async (sel: string) => { await moveTo(sel); await clickFx(); };
    const type = (text: string, per = 32) => new Promise<void>((resolve) => {
      let i = 0;
      const step = () => { if (cancelled) return resolve(); i++; setReplyText(text.slice(0, i)); if (i >= text.length) return resolve(); const t = setTimeout(step, per); timers.push(t); };
      step();
    });

    const reset = () => { setMails(BASE); setPhase('idle'); setSelected(false); setReplyText(''); setPhoneToast(false); setCur({ x: 200, y: 90 }); };

    const run = async () => {
      while (!cancelled) {
        reset();
        await wait(1600); if (cancelled) return;

        // 1) New email arrives (laptop + phone toast)
        setPhase('arrive'); setMails((m) => [INCOMING, ...m]); setPhoneToast(true);
        await wait(1700); if (cancelled) return;
        setPhoneToast(false);

        // 2) Cursor clicks the new email to open it
        await tap('mail-0'); setSelected(true); setPhase('reading');
        setMails((m) => m.map((x, i) => (i === 0 ? { ...x, unread: false } : x)));
        await wait(2600); if (cancelled) return;

        // 3) Cursor clicks Reply → compose a quick reply
        await tap('reply-btn'); setPhase('reply'); await wait(700);
        setPhase('typing'); await type(REPLY_TEXT, 26); await wait(700); if (cancelled) return;

        // 4) Cursor clicks Send → sent confirmation
        await tap('send-reply'); setPhase('sent'); await wait(2400); if (cancelled) return;
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const F = 'Poppins, sans-serif';
  const unread = mails.filter((m) => m.unread).length + 3;

  return (
    <div ref={rootRef} style={{ position: 'absolute', left: 0, top: 0, width: '640px', height: '512px', fontFamily: F, color: '#1a1a2e' }}>
      {/* floating chips (kept from the original mockup look) */}
      <Chip x={148} y={0} icon={<Inbox size={13} color={BRAND} />} title="Unified inbox" sub="across all devices" />
      <Chip x={452} y={64} icon={<Tag size={13} color={BRAND} />} title="Organise with" sub="smart labels" />
      <Chip x={430} y={344} icon={<Bell size={13} color={BRAND} />} title="Real-time" sub="notifications" pulse={phase === 'arrive'} />

      {/* ── LAPTOP (scaled up independently, growing toward the bottom-left) ── */}
      <div className="mdv-laptop" style={{ position: 'absolute', left: 0, top: 40, width: 452, zIndex: 2, transformOrigin: 'bottom left' }}>
        <div style={{ borderRadius: '16px 16px 6px 6px', background: 'linear-gradient(160deg,#3a3a44,#121216 42%,#26262e)', padding: '2px', boxShadow: 'rgba(40,20,130,0.4) 0px 40px 80px -34px' }}>
          <div style={{ borderRadius: '15px 15px 5px 5px', background: '#0b0b0e', padding: '10px' }}>
            <LaptopScreen mails={mails} unread={unread} selected={selected} phase={phase} replyText={replyText} F={F} />
          </div>
        </div>
        <div style={{ width: '486px', marginLeft: '-17px', height: '12px', borderRadius: '2px 2px 12px 12px', background: 'linear-gradient(#e6e6ec,#c9c9d2 45%,#a5a5b0)', boxShadow: 'rgba(30,20,90,0.3) 0px 14px 24px -10px' }}>
          <span style={{ display: 'block', width: '120px', height: '5px', margin: '0 auto', borderRadius: '0 0 7px 7px', background: 'linear-gradient(#b8b8c2,#d4d4db)' }} />
        </div>
      </div>

      {/* ── PHONE ── */}
      <div style={{ position: 'absolute', left: 352, top: 120, width: 190, zIndex: 4 }}>
        <div style={{ borderRadius: '30px', background: '#111', padding: '7px', boxShadow: 'rgba(20,10,60,0.5) 0px 34px 60px -26px' }}>
          <div style={{ borderRadius: '24px', background: '#fff', overflow: 'hidden', position: 'relative', height: '366px' }}>
            <div style={{ height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '46px', height: '5px', borderRadius: '4px', background: '#111' }} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '2px 12px 8px', borderBottom: '1px solid #F2F1F7' }}>
              <span style={{ fontSize: '12px', fontWeight: 800 }}>Inbox</span>
              <Pencil size={12} color={BRAND} style={{ marginLeft: 'auto' }} />
            </div>
            <div>
              {mails.slice(0, 6).map((m, i) => (
                <div key={m.from + i} style={{ display: 'flex', gap: '7px', padding: '7px 11px', alignItems: 'center', background: i === 0 && m.unread ? '#F6F2FF' : '#fff', animation: i === 0 && m.unread ? 'mdv-rowin 0.4s ease' : undefined }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: m.c, color: '#fff', fontSize: '7.5px', fontWeight: 700, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{m.ini}</span>
                  <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <div style={{ fontSize: '8px', fontWeight: m.unread ? 800 : 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.from}</div>
                    <div style={{ fontSize: '7.5px', color: '#8C90A8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.subject}</div>
                  </div>
                  {m.unread && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: BRAND, flex: '0 0 auto' }} />}
                </div>
              ))}
            </div>
            {phoneToast && (
              <div style={{ position: 'absolute', left: '10px', right: '10px', top: '26px', background: '#1E1B2E', color: '#fff', borderRadius: '11px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'rgba(20,10,60,0.5) 0px 12px 24px -8px', animation: 'mdv-toast 0.4s cubic-bezier(0.22,1.4,0.5,1)', zIndex: 3 }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: BRAND, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}><Bell size={11} color="#fff" /></span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '8.5px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>New mail · Amara Okafor</div>
                  <div style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.7)' }}>Synced to all devices</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* cursor */}
      <div style={{ position: 'absolute', left: cur.x, top: cur.y, zIndex: 60, pointerEvents: 'none', transform: `translate(-2px,-1px) scale(${press ? 0.82 : 1})`, transition: 'left 0.62s cubic-bezier(0.5,0,0.2,1), top 0.62s cubic-bezier(0.5,0,0.2,1), transform 0.13s ease', filter: 'drop-shadow(0 3px 5px rgba(20,10,60,0.35))' }}>
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none"><path d="M2 2 L2 18 L6.2 14.2 L9 20.6 L11.6 19.4 L8.8 13.2 L14.4 13.2 Z" fill="#fff" stroke="#1a1a2e" strokeWidth="1.3" strokeLinejoin="round" /></svg>
      </div>

      <style>{`
        .mdv-spin { animation: mdv-spin 0.9s linear infinite; }
        @keyframes mdv-spin { to { transform: rotate(360deg); } }
        @keyframes mdv-rowin { from { opacity: 0; transform: translateY(-8px); background: #EDE7FF; } to { opacity: 1; transform: translateY(0); } }
        @keyframes mdv-toast { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes mdv-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mdv-chippulse { 0%,100% { box-shadow: rgba(124,58,237,0) 0 0 0 0, rgba(40,20,130,0.4) 0px 16px 30px -16px; } 50% { box-shadow: rgba(124,58,237,0.35) 0 0 0 7px, rgba(40,20,130,0.4) 0px 16px 30px -16px; } }
        @keyframes mdv-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
      `}</style>
    </div>
  );
}

function LaptopScreen({ mails, unread, selected, phase, replyText, F }: { mails: Mail[]; unread: number; selected: boolean; phase: Phase; replyText: string; F: string }) {
  const open = mails[0];
  return (
    <div style={{ borderRadius: '7px', background: '#fff', overflow: 'hidden', height: '272px', display: 'flex', flexDirection: 'column' }}>
      {/* top bar */}
      <div style={{ height: '28px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 10px', borderBottom: '1px solid #F2F1F7', flex: '0 0 auto' }}>
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '-0.03em' }}>snaarp</span>
        <span style={{ flex: 1, maxWidth: '160px', height: '16px', borderRadius: '5px', background: '#F5F5FA', display: 'flex', alignItems: 'center', gap: '4px', padding: '0 6px', color: '#A3A7BD', fontSize: '7.5px' }}><Search size={9} /> Search in inbox</span>
        <span style={{ marginLeft: 'auto', width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#7C4DFF,#6D28D9)', color: '#fff', fontSize: '7.5px', fontWeight: 700, display: 'grid', placeItems: 'center' }}>A</span>
      </div>
      <div style={{ flex: '1 1 0%', display: 'flex', minHeight: 0 }}>
        {/* sidebar */}
        <div style={{ width: '78px', flex: '0 0 auto', borderRight: '1px solid #F2F1F7', padding: '8px 6px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span data-c="compose" style={{ height: '19px', borderRadius: '5px', background: BRAND, color: '#fff', fontSize: '7.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}><Pencil size={8} /> Compose</span>
          {[[Inbox, 'Inbox', true], [Star, 'Starred', false], [Send, 'Sent', false], [FileText, 'Drafts', false], [Tag, 'Spam', false], [Trash2, 'Trash', false]].map(([Ic, label, active], i) => {
            const Icon = Ic as typeof Inbox;
            return (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '3px 5px', borderRadius: '5px', fontSize: '8px', fontWeight: active ? 700 : 500, color: active ? BRAND : '#5A5F7D', background: active ? '#F1EDFF' : 'transparent' }}>
                <Icon size={9} color={active ? BRAND : '#8C90A8'} /><span>{label as string}</span>
                {active && <span style={{ marginLeft: 'auto', fontSize: '6.5px', fontWeight: 700, color: BRAND, background: '#E7E0FF', borderRadius: '4px', padding: '0 3px' }}>{unread}</span>}
              </span>
            );
          })}
        </div>
        {/* email list */}
        <div style={{ width: '150px', flex: '0 0 auto', borderRight: '1px solid #F2F1F7', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '10px', padding: '6px 8px 0', borderBottom: '1px solid #F2F1F7' }}>
            {['Primary', 'Updates'].map((t, i) => (
              <span key={t} style={{ fontSize: '7.5px', paddingBottom: '5px', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? BRAND : '#8C90A8', borderBottom: i === 0 ? `2px solid ${BRAND}` : '2px solid transparent', marginBottom: '-1px' }}>{t}</span>
            ))}
          </div>
          {mails.slice(0, 6).map((m, i) => (
            <div key={m.from + i} data-c={`mail-${i}`} style={{ display: 'flex', gap: '6px', padding: '6px 8px', borderBottom: '1px solid #F7F6FB', alignItems: 'center', cursor: 'pointer', background: i === 0 && selected ? '#EDE7FF' : i === 0 && m.unread ? '#F6F2FF' : '#fff', animation: i === 0 && m.unread && phase === 'arrive' ? 'mdv-rowin 0.45s ease' : undefined }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: m.c, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{m.ini}</span>
              <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                <div style={{ fontSize: '7.5px', fontWeight: m.unread ? 800 : 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.from}</div>
                <div style={{ fontSize: '7px', color: '#8C90A8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.subject}</div>
              </div>
              {m.unread && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: BRAND, flex: '0 0 auto' }} />}
            </div>
          ))}
        </div>
        {/* reading pane */}
        <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
          {!selected ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#C4C7D6' }}>
              <Inbox size={22} /><span style={{ fontSize: '8px' }}>Select an email to read</span>
            </div>
          ) : (
            <div key="read" style={{ flex: 1, display: 'flex', flexDirection: 'column', animation: 'mdv-fade 0.3s ease', minHeight: 0 }}>
              <div style={{ padding: '8px 12px', borderBottom: '1px solid #F2F1F7', flex: '0 0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, lineHeight: 1.3 }}>{open.subject}</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', gap: '8px', color: '#B4B8C8' }}><Reply size={11} /><Forward size={11} /><Archive size={11} /><Trash2 size={11} /></span>
                </div>
                <div style={{ marginTop: '7px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: open.c, color: '#fff', fontSize: '8px', fontWeight: 700, display: 'grid', placeItems: 'center' }}>{open.ini}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                    <span style={{ fontSize: '8.5px', fontWeight: 700 }}>{open.from}</span>
                    <span style={{ fontSize: '7px', color: '#8C90A8' }}>to me · now</span>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 0%', overflow: 'hidden', padding: '9px 12px', fontSize: '8px', lineHeight: 1.6, color: '#3F4463' }}>
                {phase === 'typing' || phase === 'sent' ? (
                  <div style={{ whiteSpace: 'pre-wrap' }}>{replyText}{phase === 'typing' && replyText.length < REPLY_TEXT.length && <Caret />}</div>
                ) : (
                  <>Hi, I&rsquo;ve pulled together the draft campaign calendar and budget for Q3. Would love your thoughts before Friday.</>
                )}
              </div>
              {/* reply bar */}
              <div style={{ padding: '7px 12px', borderTop: '1px solid #F2F1F7', flex: '0 0 auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
                {phase === 'typing' || phase === 'sent' ? (
                  <span data-c="send-reply" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', height: '20px', padding: '0 12px', borderRadius: '6px', background: phase === 'sent' ? '#22C55E' : BRAND, color: '#fff', fontSize: '8px', fontWeight: 700 }}>
                    {phase === 'sent' ? <><CheckCircle2 size={10} /> Sent</> : <><Send size={9} /> Send</>}
                  </span>
                ) : (
                  <span data-c="reply-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', height: '20px', padding: '0 12px', borderRadius: '6px', background: BRAND, color: '#fff', fontSize: '8px', fontWeight: 700, cursor: 'pointer' }}>
                    <Reply size={10} /> Reply
                  </span>
                )}
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '7.5px', color: '#8C90A8' }}><Sparkles size={9} color={BRAND} /> AI reply</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Chip({ x, y, icon, title, sub, pulse }: { x: number; y: number; icon: React.ReactNode; title: string; sub: string; pulse?: boolean }) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, zIndex: 7, display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', borderRadius: '999px', padding: '6px 12px 6px 6px', boxShadow: 'rgba(40,20,130,0.4) 0px 16px 30px -16px', animation: pulse ? 'mdv-chippulse 1.1s ease infinite' : undefined }}>
      <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#F1EDFF', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{icon}</span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: BRAND }}>{title}</span>
        <span style={{ fontSize: '10px', color: '#8C90A8' }}>{sub}</span>
      </span>
    </div>
  );
}

function Caret() {
  return <span style={{ display: 'inline-block', width: '1.5px', height: '1em', background: BRAND, marginLeft: '1px', verticalAlign: 'text-bottom', animation: 'mdv-blink 1s step-end infinite' }} />;
}
