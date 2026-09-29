'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Search, Settings, Grid3x3, CheckCircle2, Pencil, Sparkles, Inbox, Star,
  Send, FileText, Trash2, Tag, Paperclip, Type, Link2, Smile,
  X, Minus, Maximize2, ChevronDown,
  UploadCloud, FolderUp, FilePlus2, HardDrive,
} from 'lucide-react';

const BRAND = '#7C3AED';

// ── inbox list data (invented — not the real confidential emails) ───────
type Row = { ini: string; c: string; from: string; subject: string; preview: string; time: string; unread?: boolean };
const ROWS: Row[] = [
  { ini: 'AO', c: '#7C3AED', from: 'Amara Okafor', subject: 'Q3 marketing plan — ready for review', preview: 'Hi, I\u2019ve pulled together the draft campaign calendar and budget\u2026', time: '10:24', unread: true },
  { ini: 'DL', c: '#2563EB', from: 'Daniel Lee', subject: 'Invoice #4021 attached', preview: 'Please find attached the invoice for the August retainer\u2026', time: '09:12', unread: true },
  { ini: 'MB', c: '#EA580C', from: 'Maya Brooks', subject: 'Design handoff — Snaarp landing page', preview: 'The Figma file is finalised. I\u2019ve added redlines for spacing\u2026', time: '08:47' },
  { ini: 'TS', c: '#16A34A', from: 'Tomiwa Sanni', subject: 'Re: Partnership proposal', preview: 'Thanks for sending this over. The team reviewed the deck and\u2026', time: 'Yesterday' },
  { ini: 'RC', c: '#DB2777', from: 'Rita Chen', subject: 'Onboarding checklist for new hires', preview: 'Here\u2019s the updated checklist we\u2019ll use starting next week\u2026', time: 'Yesterday' },
  { ini: 'JW', c: '#0EA5E9', from: 'Jacob Wright', subject: 'Weekly product sync notes', preview: 'Notes from today\u2019s sync: we shipped the new inbox filters\u2026', time: 'Mon' },
  { ini: 'NL', c: '#9333EA', from: 'Nadia Lawal', subject: 'Contract renewal — Brightpath', preview: 'The renewal terms look good on our end. Could you confirm\u2026', time: 'Mon' },
];

const NAV: { label: string; Icon: typeof Inbox; count?: number; active?: boolean }[] = [
  { label: 'Inbox', Icon: Inbox, count: 4, active: true },
  { label: 'Starred', Icon: Star },
  { label: 'Sent', Icon: Send },
  { label: 'Drafts', Icon: FileText, count: 3 },
  { label: 'Spam', Icon: Tag },
  { label: 'Trash', Icon: Trash2 },
];

const TO_TEXT = 'amara.okafor@brightpath.co';
const SUBJECT_TEXT = 'Q3 campaign proposal — next steps';
const PROMPT_TEXT = 'Write a short, friendly note to Amara sharing the Q3 proposal and asking for a call next week.';
const BODY_TEXT = `Hi Amara,

Thanks again for your time this week. I\u2019ve attached the Q3 campaign proposal covering the timeline, budget and key deliverables we discussed.

I\u2019d love to walk you through it — are you free for a quick call early next week? Happy to work around your schedule.

Best regards,
Alex`;

type Phase =
  | 'idle' | 'compose' | 'panel' | 'toFilled' | 'subjectFilled'
  | 'aiOpen' | 'promptTyped' | 'generating' | 'bodyDone'
  | 'fileModal' | 'uploading' | 'attached' | 'sending' | 'sent';

export function MailComposeDemo({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [panel, setPanel] = useState(false);
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [aiOpen, setAiOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [body, setBody] = useState('');
  const [fileModal, setFileModal] = useState(false);
  const [uploadPct, setUploadPct] = useState<number | null>(null);
  const [attached, setAttached] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [cur, setCur] = useState({ x: 90, y: 70 });
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
    const type = (setter: (v: string) => void, text: string, per = 34) => new Promise<void>((resolve) => {
      let i = 0;
      const step = () => {
        if (cancelled) return resolve();
        i++; setter(text.slice(0, i));
        if (i >= text.length) return resolve();
        const t = setTimeout(step, per); timers.push(t);
      };
      step();
    });

    const reset = () => {
      setPanel(false); setTo(''); setSubject(''); setAiOpen(false); setPrompt('');
      setGenerating(false); setBody(''); setFileModal(false); setUploadPct(null);
      setAttached(false); setSending(false); setSent(false); setCur({ x: 90, y: 70 });
    };

    const run = async () => {
      while (!cancelled) {
        reset();
        await wait(1400); if (cancelled) return;

        // 1) Click Compose → panel slides up
        await tap('compose'); setPanel(true); await wait(900); if (cancelled) return;

        // 2) Fill To
        await tap('field-to'); await type(setTo, TO_TEXT, 30); await wait(500); if (cancelled) return;
        // 3) Type Subject
        await tap('field-subject'); await type(setSubject, SUBJECT_TEXT, 26); await wait(500); if (cancelled) return;

        // 4) Click AI (stars) icon → prompt box
        await tap('ai-btn'); setAiOpen(true); await wait(700); if (cancelled) return;
        // 5) Type a prompt
        await tap('ai-prompt'); await type(setPrompt, PROMPT_TEXT, 18); await wait(500); if (cancelled) return;
        // 6) Click Generate → AI writes the body
        await tap('ai-generate'); setGenerating(true); await wait(1300); if (cancelled) return;
        setGenerating(false); setAiOpen(false);
        await type(setBody, BODY_TEXT, 10); await wait(700); if (cancelled) return;

        // 7) Click attachment icon → Open a file modal
        await tap('attach-btn'); setFileModal(true); await wait(900); if (cancelled) return;
        // 8) Click Add File → upload progress
        await tap('add-file'); setUploadPct(0);
        for (let p = 0; p <= 100; p += 10) {
          if (cancelled) return; setUploadPct(p); await wait(120);
        }
        await wait(300); setFileModal(false); setAttached(true); await wait(900); if (cancelled) return;

        // 9) Click Send → sending → sent toast
        await tap('send-btn'); setSending(true); await wait(900);
        setSending(false); setPanel(false); setSent(true);
        await wait(2600); if (cancelled) return;
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const F = 'Poppins, sans-serif';

  return (
    <div ref={rootRef} style={{ position: 'absolute', left: 0, top: 0, width: '620px', height: '590px', borderRadius: '16px', background: '#fff', border: '1px solid rgb(233,231,244)', boxShadow: 'rgba(40,20,130,0.35) 0px 60px 100px -40px, rgba(20,10,60,0.18) 0px 20px 40px -24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: F, color: '#1a1a2e' }}>
      {/* top bar */}
      <div style={{ height: '44px', flex: '0 0 auto', borderBottom: '1px solid #F0EFF6', display: 'flex', alignItems: 'center', gap: '12px', padding: '0 14px' }}>
        <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.04em' }}>snaarp</span>
        <span style={{ flex: 1, maxWidth: '300px', height: '26px', borderRadius: '8px', background: '#F5F5FA', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 10px', color: '#A3A7BD', fontSize: '10px' }}><Search size={12} /> Search in inbox</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: '#8C90A8' }}>
          <Settings size={14} /><Grid3x3 size={14} />
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg,#7C4DFF,#6D28D9)', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'grid', placeItems: 'center' }}>A</span>
        </span>
      </div>

      <div style={{ flex: '1 1 0%', minHeight: 0, display: 'flex' }}>
        {/* sidebar */}
        <div style={{ width: '132px', flex: '0 0 auto', borderRight: '1px solid #F0EFF6', padding: '12px 9px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <button data-c="compose" style={{ height: '34px', border: 'none', borderRadius: '9px', background: BRAND, color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', cursor: 'pointer', marginBottom: '10px', boxShadow: 'rgba(124,58,237,0.5) 0px 8px 16px -8px', fontFamily: F }}>
            <Pencil size={13} /> Compose
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700, color: BRAND, background: '#F3EFFF', marginBottom: '2px' }}>
            <Sparkles size={13} /> Mail Agent
          </div>
          {NAV.map((n) => (
            <div key={n.label} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '8px', fontSize: '10.5px', fontWeight: n.active ? 700 : 500, color: n.active ? BRAND : '#5A5F7D', background: n.active ? '#F1EDFF' : 'transparent' }}>
              <n.Icon size={13} color={n.active ? BRAND : '#8C90A8'} /><span>{n.label}</span>
              {n.count != null && <span style={{ marginLeft: 'auto', fontSize: '8.5px', fontWeight: 700, color: n.active ? BRAND : '#8C90A8', background: n.active ? '#E7E0FF' : '#EEEDF5', borderRadius: '5px', padding: '1px 5px' }}>{n.count}</span>}
            </div>
          ))}
          <div style={{ marginTop: '10px', padding: '0 10px', fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#A3A7BD' }}>LABELS</div>
          {[['Clients', '#3B82F6'], ['Finance', '#22C55E'], ['Projects', '#F97316']].map(([l, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '5px 10px', fontSize: '10px', color: '#5A5F7D' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: c }} />{l}
            </div>
          ))}
        </div>

        {/* inbox list */}
        <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
          <div style={{ display: 'flex', gap: '18px', padding: '10px 16px 0', borderBottom: '1px solid #F0EFF6', flex: '0 0 auto' }}>
            {['Primary', 'Updates', 'Promotions', 'Social'].map((t, i) => (
              <span key={t} style={{ fontSize: '10.5px', paddingBottom: '8px', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? BRAND : '#8C90A8', borderBottom: i === 0 ? `2px solid ${BRAND}` : '2px solid transparent', marginBottom: '-1px' }}>{t}{i === 0 ? ' (4)' : ''}</span>
            ))}
          </div>
          <div style={{ flex: '1 1 0%', overflow: 'hidden' }}>
            {ROWS.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', padding: '9px 14px', borderBottom: '1px solid #F5F4F9', background: r.unread ? '#FBFAFF' : '#fff', alignItems: 'center' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: r.c, color: '#fff', fontSize: '9.5px', fontWeight: 700, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{r.ini}</span>
                <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '10.5px', fontWeight: r.unread ? 800 : 600, color: '#1a1a2e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.from}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '9px', color: r.unread ? BRAND : '#A3A7BD', whiteSpace: 'nowrap', flex: '0 0 auto' }}>{r.time}</span>
                  </div>
                  <div style={{ fontSize: '10px', fontWeight: r.unread ? 700 : 500, color: '#2A2E4D', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{r.subject}</div>
                  <div style={{ fontSize: '9.5px', color: '#8C90A8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{r.preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Compose panel (bottom-right) ── */}
      {panel && (
        <div style={{ position: 'absolute', right: '14px', bottom: '14px', width: '360px', maxHeight: '520px', background: '#fff', borderRadius: '12px 12px 0 0', boxShadow: 'rgba(20,10,60,0.32) 0px 30px 70px -18px', border: '1px solid #ECEAF6', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 30, animation: 'md-slideup 0.32s cubic-bezier(0.22,1,0.36,1)' }}>
          <div style={{ height: '34px', background: '#2A2340', color: '#fff', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '11px', fontWeight: 600, flex: '0 0 auto' }}>
            New Message
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.75)' }}><Minus size={13} /><Maximize2 size={11} /><X size={13} /></span>
          </div>
          {/* To */}
          <div data-c="field-to" style={{ padding: '8px 14px', borderBottom: '1px solid #F0EFF6', fontSize: '11px', display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            <span style={{ color: '#8C90A8', marginRight: '8px' }}>To</span>
            <span style={{ color: '#1a1a2e' }}>{to}<Caret on={panel && to.length > 0 && to.length < TO_TEXT.length} /></span>
            <span style={{ marginLeft: 'auto', color: '#A3A7BD', fontSize: '10px' }}>Cc Bcc</span>
          </div>
          {/* Subject */}
          <div data-c="field-subject" style={{ padding: '8px 14px', borderBottom: '1px solid #F0EFF6', fontSize: '11px', flex: '0 0 auto' }}>
            <span style={{ color: subject ? '#1a1a2e' : '#A3A7BD', fontWeight: subject ? 600 : 400 }}>{subject || 'Subject'}<Caret on={subject.length > 0 && subject.length < SUBJECT_TEXT.length} /></span>
          </div>
          {/* Body */}
          <div style={{ flex: '1 1 0%', minHeight: '150px', padding: '12px 14px', fontSize: '11px', lineHeight: 1.6, color: '#2A2E4D', whiteSpace: 'pre-wrap', overflow: 'hidden', position: 'relative' }}>
            {body ? (
              <>{body}<Caret on={body.length > 0 && body.length < BODY_TEXT.length} /></>
            ) : generating ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: BRAND, fontWeight: 600 }}>
                <Sparkles size={13} className="md-spin" /> Snaarp AI is writing…
              </span>
            ) : (
              <span style={{ color: '#B8BCCE' }}>Write your message, or use AI to draft it…</span>
            )}
            {/* attachment chip */}
            {attached && (
              <div style={{ marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 11px', border: '1px solid #ECEAF6', borderRadius: '9px', background: '#FAF9FE', animation: 'md-pop 0.3s cubic-bezier(0.22,1.4,0.5,1)' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#EDE7FF', display: 'grid', placeItems: 'center' }}><FileText size={13} color={BRAND} /></span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a2e' }}>Q3_Campaign_Proposal.pdf</span>
                  <span style={{ fontSize: '8.5px', color: '#8C90A8' }}>1.8 MB</span>
                </span>
                <CheckCircle2 size={14} color="#22C55E" style={{ marginLeft: '4px' }} />
              </div>
            )}
          </div>

          {/* AI prompt box */}
          {aiOpen && (
            <div style={{ margin: '0 14px 8px', border: `1.5px solid ${BRAND}`, borderRadius: '10px', padding: '10px', background: '#FAF9FE', flex: '0 0 auto', animation: 'md-pop 0.28s ease' }}>
              <div data-c="ai-prompt" style={{ fontSize: '10.5px', color: prompt ? '#2A2E4D' : '#A3A7BD', lineHeight: 1.5, minHeight: '30px' }}>
                {prompt || 'Describe what you want to write…'}<Caret on={prompt.length > 0 && prompt.length < PROMPT_TEXT.length} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#6B7090', border: '1px solid #E4E0F2', borderRadius: '7px', padding: '3px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Professional <ChevronDown size={10} /></span>
                <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#8C90A8' }}>Cancel</span>
                <span data-c="ai-generate" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700, color: '#fff', background: BRAND, borderRadius: '7px', padding: '5px 11px' }}>
                  <Sparkles size={11} /> Generate
                </span>
              </div>
            </div>
          )}

          {/* toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 14px', borderTop: '1px solid #F0EFF6', color: '#8C90A8', flex: '0 0 auto' }}>
            <button data-c="send-btn" style={{ display: 'flex', alignItems: 'center', gap: '7px', height: '30px', padding: '0 16px', border: 'none', borderRadius: '8px', background: sending ? '#9F7AEA' : BRAND, color: '#fff', fontSize: '11px', fontWeight: 700, cursor: 'pointer', fontFamily: F }}>
              {sending ? <><Sparkles size={12} className="md-spin" /> Sending…</> : <><Send size={12} /> Send</>}
            </button>
            <span data-c="ai-btn" style={{ display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '7px', background: aiOpen ? '#EDE7FF' : 'transparent', color: aiOpen ? BRAND : '#8C90A8' }}><Sparkles size={15} /></span>
            <Type size={15} />
            <span data-c="attach-btn" style={{ display: 'grid', placeItems: 'center', width: '26px', height: '26px', borderRadius: '7px', background: fileModal ? '#EDE7FF' : 'transparent', color: fileModal ? BRAND : '#8C90A8' }}><Paperclip size={15} /></span>
            <Link2 size={15} />
            <Smile size={15} />
            <Trash2 size={15} style={{ marginLeft: 'auto' }} />
          </div>
        </div>
      )}

      {/* ── "Open a file" modal ── */}
      {fileModal && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,25,0.42)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, animation: 'md-fade 0.22s ease' }}>
          <div style={{ width: '380px', background: '#fff', borderRadius: '14px', boxShadow: 'rgba(20,10,60,0.35) 0px 30px 70px -18px', padding: '18px', animation: 'md-pop 0.3s cubic-bezier(0.22,1.4,0.5,1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '14px', fontWeight: 800 }}>Open a file</span>
              <X size={15} style={{ marginLeft: 'auto', color: '#aaa' }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '11px', marginBottom: '14px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: BRAND, borderBottom: `2px solid ${BRAND}`, paddingBottom: '6px' }}><UploadCloud size={13} /> Upload</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500, color: '#8C90A8', paddingBottom: '6px' }}><HardDrive size={13} /> Drive</span>
            </div>
            {uploadPct == null ? (
              <>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div data-c="add-file" style={{ flex: 1, border: '1px solid #ECEAF6', borderRadius: '12px', padding: '18px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <FilePlus2 size={22} color={BRAND} />
                    <span style={{ fontSize: '11.5px', fontWeight: 700 }}>Add File</span>
                    <span style={{ fontSize: '9px', color: '#8C90A8' }}>Upload one or more files</span>
                  </div>
                  <div style={{ flex: 1, border: '1px solid #ECEAF6', borderRadius: '12px', padding: '18px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <FolderUp size={22} color="#8C90A8" />
                    <span style={{ fontSize: '11.5px', fontWeight: 700 }}>Add Folder</span>
                    <span style={{ fontSize: '9px', color: '#8C90A8' }}>Upload a folder as one item</span>
                  </div>
                </div>
                <div style={{ marginTop: '12px', border: '1px dashed #D8D4EA', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#A3A7BD' }}>
                  <UploadCloud size={16} />
                  <span style={{ fontSize: '9.5px' }}>Or drag and drop files here</span>
                </div>
              </>
            ) : (
              <div style={{ padding: '4px 2px 6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#EDE7FF', display: 'grid', placeItems: 'center' }}><FileText size={15} color={BRAND} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '11px', fontWeight: 700 }}>Q3_Campaign_Proposal.pdf</div>
                    <div style={{ fontSize: '9px', color: '#8C90A8' }}>{uploadPct < 100 ? `Uploading… ${uploadPct}%` : 'Upload complete'}</div>
                  </div>
                  {uploadPct >= 100 && <CheckCircle2 size={16} color="#22C55E" />}
                </div>
                <div style={{ height: '6px', borderRadius: '3px', background: '#EDEBF5', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${uploadPct}%`, background: BRAND, borderRadius: '3px', transition: 'width 0.12s linear' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Sent toast ── */}
      {sent && (
        <div style={{ position: 'absolute', left: '50%', bottom: '20px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '9px', background: '#1E1B2E', color: '#fff', borderRadius: '10px', padding: '10px 16px', fontSize: '11px', fontWeight: 600, zIndex: 55, boxShadow: 'rgba(20,10,60,0.4) 0px 16px 30px -12px', animation: 'md-toast 0.4s cubic-bezier(0.22,1.4,0.5,1)' }}>
          <CheckCircle2 size={15} color="#4ADE80" /> Message sent
        </div>
      )}

      {/* cursor */}
      <div style={{ position: 'absolute', left: cur.x, top: cur.y, zIndex: 60, pointerEvents: 'none', transform: `translate(-2px,-1px) scale(${press ? 0.82 : 1})`, transition: 'left 0.62s cubic-bezier(0.5,0,0.2,1), top 0.62s cubic-bezier(0.5,0,0.2,1), transform 0.13s ease', filter: 'drop-shadow(0 3px 5px rgba(20,10,60,0.35))' }}>
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none"><path d="M2 2 L2 18 L6.2 14.2 L9 20.6 L11.6 19.4 L8.8 13.2 L14.4 13.2 Z" fill="#fff" stroke="#1a1a2e" strokeWidth="1.3" strokeLinejoin="round" /></svg>
      </div>

      <style>{`
        @keyframes md-slideup { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes md-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes md-pop { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        @keyframes md-toast { from { opacity: 0; transform: translate(-50%, 12px); } to { opacity: 1; transform: translate(-50%, 0); } }
        .md-spin { animation: md-spin 1s linear infinite; }
        @keyframes md-spin { to { transform: rotate(360deg); } }
        @keyframes md-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
      `}</style>
    </div>
  );
}

function Caret({ on }: { on: boolean }) {
  if (!on) return null;
  return <span style={{ display: 'inline-block', width: '1.5px', height: '1em', background: BRAND, marginLeft: '1px', verticalAlign: 'text-bottom', animation: 'md-blink 1s step-end infinite' }} />;
}
