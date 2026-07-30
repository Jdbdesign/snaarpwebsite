'use client';

import { useState, useEffect, useRef } from 'react';
import { Hash, Plus, Activity, MessageSquare, Users, Calendar, Phone, FolderOpen, Paperclip, Smile, AtSign, Send, HelpCircle, Settings, ChevronDown, X, Video, Mic, MicOff, MonitorUp, Hand, MoreHorizontal, PhoneOff, ArrowLeft, PhoneIncoming, PhoneOutgoing, PhoneMissed } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

/* ─── Data ─── */
type Msg = { initials: string; name: string; bg: string; text: string; time: string; file?: { name: string; size: string }; reactions?: { emoji: string; count: number }[]; replies?: number };

const GENERAL_MSGS: Msg[] = [
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', text: "Just pushed the updated Q3 deck to the Files tab, can everyone take a look before tomorrow's review?", time: '10:24 AM', file: { name: 'Q3_Marketing_Plan.pptx', size: '2.4 MB' } },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', text: 'Looks great! I left a couple of comments on slide 4.', time: '10:31 AM', reactions: [{ emoji: '👍', count: 3 }, { emoji: '🎉', count: 1 }] },
  { initials: 'DT', name: 'Design Team', bg: '#E11D74', text: 'Should we sync briefly today to align on the launch visuals?', time: '10:45 AM' },
  { initials: 'MC', name: 'Mike Chen', bg: '#D97706', text: "I've updated the timeline for the social campaigns — shifted launch week by 3 days.", time: '11:02 AM', replies: 3 },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', text: "Sounds good, I'm free after 2pm", time: '11:15 AM' },
];

const MARKETING_MSGS: Msg[] = [
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', text: 'New blog post draft is ready for review — link in the shared drive.', time: '9:10 AM' },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', text: "I'll take a look this afternoon. Any deadline?", time: '9:22 AM' },
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', text: 'End of day tomorrow would be ideal.', time: '9:25 AM' },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', text: 'Also — the social assets for the campaign are uploaded to the marketing folder.', time: '10:05 AM' },
];

const LAUNCH_MSGS: Msg[] = [
  { initials: 'MC', name: 'Mike Chen', bg: '#D97706', text: 'Launch date confirmed: July 15th. All systems go.', time: 'Yesterday' },
  { initials: 'DT', name: 'Design Team', bg: '#E11D74', text: 'Landing page mockups are in Figma — please review.', time: 'Yesterday' },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', text: 'Press release draft shared with the team.', time: 'Today, 8:30 AM' },
];

const THREAD_REPLIES = [
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', text: 'Makes sense — does that affect the webinar date?', time: '11:05 AM' },
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', text: "No, webinar stays as planned.", time: '11:08 AM' },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', text: "Perfect, I'll update the calendar invites.", time: '11:12 AM' },
];

const CALL_HISTORY = [
  { name: 'Sarah Jenkins', type: 'outgoing', duration: '12 min', time: 'Today, 9:45 AM' },
  { name: 'Marketing Team', type: 'incoming', duration: '34 min', time: 'Yesterday, 2:30 PM' },
  { name: 'Alex Rivera', type: 'missed', duration: '', time: 'Yesterday, 11:00 AM' },
  { name: 'Design Sync', type: 'outgoing', duration: '8 min', time: 'Mon, 4:15 PM' },
];

type ChannelId = string;

const CHANNEL_META: Record<string, { members: number; subtitle: string }> = {
  general: { members: 12, subtitle: 'Marketing Team' },
  marketing: { members: 8, subtitle: 'Content & Social' },
  'product-launch': { members: 15, subtitle: 'Cross-functional' },
  'design-review': { members: 6, subtitle: 'Design Team' },
};

export function TeamsPreviewMockup() {
  const [activeChannel, setActiveChannel] = useState<ChannelId>('general');
  const [badges, setBadges] = useState<Record<string, number>>({ general: 3, marketing: 1 });
  const [messages, setMessages] = useState<Record<ChannelId, Msg[]>>({ general: [...GENERAL_MSGS], marketing: [...MARKETING_MSGS], 'product-launch': [...LAUNCH_MSGS], 'design-review': [] });
  const [inputVal, setInputVal] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [threadOpen, setThreadOpen] = useState(false);
  const [threadReplies, setThreadReplies] = useState([...THREAD_REPLIES]);
  const [threadReplyCount, setThreadReplyCount] = useState(3);
  const [threadInput, setThreadInput] = useState('');
  const [filePreview, setFilePreview] = useState(false);
  const [reactionState, setReactionState] = useState<Record<string, boolean>>({});
  const [reactionCounts, setReactionCounts] = useState<Record<string, number>>({ '👍': 3, '🎉': 1 });
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [view, setView] = useState<'chat' | 'calls' | 'calling' | 'incall'>('chat');
  const [navActive, setNavActive] = useState('Chat');
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [showNewGroupCoachmark, setShowNewGroupCoachmark] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const switchChannel = (ch: ChannelId) => {
    setActiveChannel(ch);
    setThreadOpen(false);
    setFilePreview(false);
    setView('chat');
    setNavActive('Chat');
    setBadges((b) => ({ ...b, [ch]: 0 }));
  };

  const sendMessage = () => {
    if (!inputVal.trim()) return;
    setShowTyping(false);
    setTimeout(() => {
      setMessages((m) => ({ ...m, [activeChannel]: [...m[activeChannel], { initials: 'AM', name: 'You', bg: '#7C3AED', text: inputVal.trim(), time: 'Just now' }] }));
      setInputVal('');
      setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }), 50);
    }, 150);
  };

  const sendThreadReply = () => {
    if (!threadInput.trim()) return;
    setThreadReplies((r) => [...r, { initials: 'AM', name: 'You', bg: '#7C3AED', text: threadInput.trim(), time: 'Just now' }]);
    setThreadReplyCount((c) => c + 1);
    setThreadInput('');
  };

  const toggleReaction = (emoji: string) => {
    setReactionState((s) => ({ ...s, [emoji]: !s[emoji] }));
    setReactionCounts((c) => ({ ...c, [emoji]: (c[emoji] || 0) + (reactionState[emoji] ? -1 : 1) }));
  };

  const addReaction = (emoji: string) => {
    if (!reactionCounts[emoji]) setReactionCounts((c) => ({ ...c, [emoji]: 1 }));
    else setReactionCounts((c) => ({ ...c, [emoji]: c[emoji] + 1 }));
    setReactionState((s) => ({ ...s, [emoji]: true }));
    setShowReactionPicker(false);
  };

  const startCall = () => {
    setView('calling');
    setTimeout(() => setView('incall'), 1500);
  };

  const endCall = () => setView('chat');

  const createGroup = () => {
    if (!newGroupName.trim()) return;
    const id = newGroupName.trim().toLowerCase().replace(/\s+/g, '-') as ChannelId;
    setMessages((m) => ({ ...m, [id]: [] }));
    setShowNewGroup(false);
    setActiveChannel(id);
    setNewGroupName('');
    setView('chat');
    setNavActive('Chat');
  };

  const goToCalls = () => { setNavActive('Calls'); setView('calls'); setThreadOpen(false); };
  const goToChat = () => { setNavActive('Chat'); setView('chat'); };

  const currentMsgs = messages[activeChannel] || [];
  const meta = CHANNEL_META[activeChannel] || { members: 3, subtitle: 'New Group' };

  return (
    <div style={{ display: 'flex', height: '100%', background: '#fff' }}>
      {/* Sidebar */}
      <div style={{ width: '180px', borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Snaarp</div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => { setShowNewGroup(true); setShowNewGroupCoachmark(false); }} style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '100%', padding: '7px 12px', borderRadius: '8px', border: 'none', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>
              <Plus size={12} /> New Group
            </button>
            {showNewGroupCoachmark && (
              <Coachmark
                visible
                title="Create a Group"
                subtitle="Start a new group chat with your team"
                onNext={() => { setShowNewGroup(true); setShowNewGroupCoachmark(false); }}
                top="40px"
                left="0px"
                arrowSide="top"
                arrowOffset="30px"
                buttonLabel="Next"
              />
            )}
          </div>
        </div>
        {/* Nav */}
        <div style={{ padding: '8px 8px 4px' }}>
          {[{ icon: Activity, label: 'Activity' }, { icon: MessageSquare, label: 'Chat' }, { icon: Users, label: 'Teams' }, { icon: Calendar, label: 'Calendar' }, { icon: Phone, label: 'Calls' }, { icon: FolderOpen, label: 'Files' }].map((item) => (
            <div key={item.label} onClick={() => item.label === 'Calls' ? goToCalls() : item.label === 'Chat' ? goToChat() : undefined}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '6px', fontSize: '10.5px', fontWeight: navActive === item.label ? 700 : 500, color: navActive === item.label ? '#7C3AED' : '#555', background: navActive === item.label ? '#F3EFFF' : 'transparent', marginBottom: '2px', cursor: item.label === 'Calls' || item.label === 'Chat' ? 'pointer' : 'default' }}>
              <item.icon size={13} />{item.label}
            </div>
          ))}
        </div>
        {/* Channels */}
        <div style={{ padding: '10px 8px', borderTop: '1px solid #f0f0f0', marginTop: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', padding: '0 10px 6px' }}>Groups</div>
          {Object.keys(messages).map((ch) => (
            <div key={ch} onClick={() => switchChannel(ch as ChannelId)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '6px', fontSize: '10.5px', fontWeight: activeChannel === ch ? 600 : 400, color: activeChannel === ch ? '#1a1a1a' : '#555', background: activeChannel === ch ? '#EDE9FE' : 'transparent', marginBottom: '1px', cursor: 'pointer' }}>
              <Hash size={11} style={{ color: activeChannel === ch ? '#7C3AED' : '#999' }} />
              <span style={{ flex: 1 }}>{ch}</span>
              {(badges[ch] || 0) > 0 && (
                <span style={{ minWidth: '16px', height: '16px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', transition: 'opacity 0.2s', opacity: 1 }}>{badges[ch]}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid #f0f0f0', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            {view === 'calls' ? (
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Call History</div>
            ) : (
              <>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '5px' }}><Hash size={13} style={{ color: '#7C3AED' }} />{activeChannel}</div>
                <div style={{ fontSize: '9.5px', color: '#999' }}>{meta.subtitle} · {meta.members} members</div>
              </>
            )}
          </div>
          {view === 'chat' && (
            <>
              <div onClick={startCall} style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Video size={12} style={{ color: '#7C3AED' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#999' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                Search messages...
              </div>
            </>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '12px', background: '#ECFDF5', fontSize: '10px', fontWeight: 600, color: '#166534' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} /> Active
          </div>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>

        {/* Calling state */}
        {view === 'calling' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', background: '#1a1a1a' }}>
            <div style={{ display: 'flex', gap: '-8px' }}>
              {['SJ', 'AR', 'MC'].map((i, idx) => (
                <div key={i} style={{ width: '36px', height: '36px', borderRadius: '50%', background: ['#7C3AED', '#0D9488', '#D97706'][idx], color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #1a1a1a', marginLeft: idx > 0 ? '-10px' : '0', animation: 'pulse 1.5s ease-in-out infinite' }}>{i}</div>
              ))}
            </div>
            <span style={{ fontSize: '12px', color: '#ccc' }}>Calling {meta.subtitle}…</span>
          </div>
        )}

        {/* In-call state */}
        {view === 'incall' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#1a1a1a' }}>
            <div style={{ flex: 1, padding: '12px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              {[{ i: 'SJ', bg: '#7C3AED' }, { i: 'AR', bg: '#0D9488' }, { i: 'MC', bg: '#D97706' }].map((p) => (
                <div key={p.i} style={{ borderRadius: '8px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.i}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '20px', background: 'rgba(255,255,255,0.08)' }}>
                <CtrlBtn><Mic size={13} /></CtrlBtn>
                <CtrlBtn><Video size={13} /></CtrlBtn>
                <CtrlBtn><MonitorUp size={13} /></CtrlBtn>
                <CtrlBtn><MoreHorizontal size={13} /></CtrlBtn>
                <div onClick={endCall} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <PhoneOff size={13} style={{ color: '#fff' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call history view */}
        {view === 'calls' && (
          <div style={{ flex: 1, padding: '14px 16px', overflow: 'hidden' }}>
            {CALL_HISTORY.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: c.type === 'missed' ? '#FEF2F2' : '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.type === 'outgoing' && <PhoneOutgoing size={11} style={{ color: '#7C3AED' }} />}
                  {c.type === 'incoming' && <PhoneIncoming size={11} style={{ color: '#7C3AED' }} />}
                  {c.type === 'missed' && <PhoneMissed size={11} style={{ color: '#EF4444' }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 600, color: c.type === 'missed' ? '#EF4444' : '#1a1a1a' }}>{c.name}</div>
                  <div style={{ fontSize: '9px', color: '#999' }}>{c.time}{c.duration && ` · ${c.duration}`}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Chat view */}
        {view === 'chat' && !threadOpen && (
          <>
            <div ref={scrollRef} style={{ flex: 1, padding: '14px 16px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {currentMsgs.length === 0 && (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '11px' }}>No messages yet — say hi 👋</div>
              )}
              {currentMsgs.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', animation: msg.time === 'Just now' ? 'slideUp 0.2s ease-out' : undefined }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: msg.bg, color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{msg.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 700, color: '#1a1a1a' }}>{msg.name}</span>
                      <span style={{ color: '#999', fontSize: '9px' }}>{msg.time}</span>
                    </div>
                    <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>{msg.text}</p>
                    {/* File attachment */}
                    {msg.file && (
                      <div onClick={() => setFilePreview(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', padding: '5px 10px', borderRadius: '6px', background: '#F8F7FA', border: '1px solid #EDEBF5', fontSize: '9px', color: '#555', cursor: 'pointer' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        <span style={{ fontWeight: 500 }}>{msg.file.name}</span>
                        <span style={{ color: '#aaa' }}>{msg.file.size}</span>
                      </div>
                    )}
                    {/* Reactions */}
                    {msg.reactions && activeChannel === 'general' && idx === 1 && (
                      <div style={{ display: 'flex', gap: '5px', marginTop: '5px', alignItems: 'center' }}>
                        {Object.entries(reactionCounts).filter(([, c]) => c > 0).map(([emoji, count]) => (
                          <span key={emoji} onClick={() => toggleReaction(emoji)} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '10px', background: reactionState[emoji] ? '#F0EDFA' : '#F8F7FA', border: `1px solid ${reactionState[emoji] ? '#C4B5FD' : '#EDEBF5'}`, fontSize: '9px', cursor: 'pointer', transition: 'all 0.15s' }}>{emoji} {count}</span>
                        ))}
                        <div style={{ position: 'relative' }}>
                          <span onClick={() => setShowReactionPicker(!showReactionPicker)} style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8F7FA', border: '1px solid #EDEBF5', fontSize: '9px', cursor: 'pointer' }}>+</span>
                          {showReactionPicker && (
                            <div style={{ position: 'absolute', bottom: '24px', left: 0, display: 'flex', gap: '4px', padding: '4px 8px', borderRadius: '8px', background: '#fff', border: '1px solid #eee', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)', zIndex: 10 }}>
                              {['👍', '🎉', '❤️', '😂', '👀'].map((e) => (
                                <span key={e} onClick={() => addReaction(e)} style={{ cursor: 'pointer', fontSize: '12px' }}>{e}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {/* Thread replies */}
                    {msg.replies && activeChannel === 'general' && idx === 3 && (
                      <div onClick={() => setThreadOpen(true)} style={{ marginTop: '4px', fontSize: '9.5px', color: '#7C3AED', fontWeight: 500, cursor: 'pointer' }}>{threadReplyCount} replies</div>
                    )}
                  </div>
                </div>
              ))}
              {/* System message */}
              {activeChannel === 'general' && (
                <div style={{ padding: '6px 12px', borderRadius: '6px', background: '#F8F9FA', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                  </div>
                  <span style={{ fontSize: '10px', color: '#555' }}><strong>Cloud Services</strong> — Deployment to staging completed ✅</span>
                  <span style={{ fontSize: '8.5px', color: '#aaa', marginLeft: 'auto' }}>11:22 AM</span>
                </div>
              )}
              {/* Typing indicator */}
              {showTyping && activeChannel === 'general' && (
                <div style={{ fontSize: '9.5px', color: '#999', fontStyle: 'italic', paddingLeft: '34px', transition: 'opacity 0.15s' }}>James Wilson is typing…</div>
              )}
            </div>
            {/* Composer */}
            <div style={{ padding: '10px 16px', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '20px', border: '1px solid #e8e8e8', background: '#fafafa', gap: '8px' }}>
                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." style={{ flex: 1, border: 'none', background: 'transparent', fontSize: '10.5px', outline: 'none', color: '#333' }} />
                <Paperclip size={12} style={{ color: '#999' }} />
                <Smile size={12} style={{ color: '#999' }} />
                <AtSign size={12} style={{ color: '#999' }} />
              </div>
              <div onClick={sendMessage} style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={13} style={{ color: '#fff' }} />
              </div>
            </div>
          </>
        )}

        {/* Thread panel */}
        {view === 'chat' && threadOpen && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderBottom: '1px solid #f0f0f0' }}>
              <ArrowLeft size={14} onClick={() => setThreadOpen(false)} style={{ cursor: 'pointer', color: '#555' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Thread</span>
              <span style={{ fontSize: '9px', color: '#999' }}>{threadReplyCount} replies</span>
            </div>
            {/* Original message */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid #f5f5f5' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#D97706', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>MC</div>
                <div>
                  <div style={{ fontSize: '10.5px' }}><span style={{ fontWeight: 700, color: '#1a1a1a' }}>Mike Chen</span> <span style={{ color: '#999', fontSize: '9px' }}>11:02 AM</span></div>
                  <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>I&apos;ve updated the timeline for the social campaigns — shifted launch week by 3 days.</p>
                </div>
              </div>
            </div>
            {/* Replies */}
            <div style={{ flex: 1, padding: '10px 16px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {threadReplies.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: r.bg, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{r.initials}</div>
                  <div>
                    <div style={{ fontSize: '10px' }}><span style={{ fontWeight: 600, color: '#1a1a1a' }}>{r.name}</span> <span style={{ color: '#999', fontSize: '8.5px' }}>{r.time}</span></div>
                    <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#333', lineHeight: 1.4 }}>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Thread composer */}
            <div style={{ padding: '10px 16px', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input value={threadInput} onChange={(e) => setThreadInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendThreadReply()} placeholder="Reply in thread..." style={{ flex: 1, padding: '8px 12px', borderRadius: '16px', border: '1px solid #e8e8e8', background: '#fafafa', fontSize: '10px', outline: 'none', color: '#333' }} />
              <div onClick={sendThreadReply} style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={11} style={{ color: '#fff' }} />
              </div>
            </div>
          </div>
        )}

        {/* File preview popover */}
        {filePreview && (
          <div style={{ position: 'absolute', top: '120px', left: '80px', width: '220px', background: '#fff', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 8px 24px -8px rgba(0,0,0,0.15)', padding: '14px', zIndex: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>File Preview</span>
              <X size={12} onClick={() => setFilePreview(false)} style={{ cursor: 'pointer', color: '#999' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>Q3_Marketing_Plan.pptx</div>
                <div style={{ fontSize: '8.5px', color: '#999' }}>2.4 MB · Shared by Sarah Jenkins</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button style={{ flex: 1, padding: '6px', borderRadius: '6px', border: '1px solid #e8e8e8', background: '#fff', fontSize: '9px', fontWeight: 600, color: '#555', cursor: 'default' }}>Download</button>
              <button style={{ flex: 1, padding: '6px', borderRadius: '6px', border: 'none', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 600, cursor: 'default' }}>Open in Presentation</button>
            </div>
          </div>
        )}

        {/* New Group modal */}
        {showNewGroup && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
            <div style={{ width: '280px', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Create New Group</span>
                <X size={14} onClick={() => setShowNewGroup(false)} style={{ color: '#999', cursor: 'pointer' }} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#555', marginBottom: '5px' }}>Group name</label>
                <input value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && createGroup()} placeholder="e.g. project-alpha" style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '11px', outline: 'none', color: '#333' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#555', marginBottom: '5px' }}>Add members</label>
                <div style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#aaa' }}>Search people...</div>
              </div>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                {['SJ', 'AR', 'MC'].map((initials, i) => (
                  <div key={initials} style={{ width: '24px', height: '24px', borderRadius: '50%', background: ['#7C3AED', '#0D9488', '#D97706'][i], color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{initials}</div>
                ))}
                <span style={{ fontSize: '9px', color: '#999', display: 'flex', alignItems: 'center' }}>+3 suggested</span>
              </div>
              <button onClick={createGroup} style={{ width: '100%', padding: '9px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 600, border: 'none', cursor: 'pointer', opacity: newGroupName.trim() ? 1 : 0.5 }}>Create Group</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CtrlBtn({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'default' }}>
      {children}
    </div>
  );
}
