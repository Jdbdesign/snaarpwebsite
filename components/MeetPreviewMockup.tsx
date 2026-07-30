'use client';

import { useState } from 'react';
import { HelpCircle, Settings, Info, Users, Mic, MicOff, Video, VideoOff, MonitorUp, Hand, MoreHorizontal, PhoneOff, MessageSquare, Send, X } from 'lucide-react';

type Participant = { initials: string; name: string; bg: string; micOff: boolean; cameraOn: boolean; speaking: boolean };

const INITIAL_PARTICIPANTS: Participant[] = [
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', micOff: false, cameraOn: true, speaking: true },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', micOff: true, cameraOn: false, speaking: false },
  { initials: 'DT', name: 'Design Team', bg: '#E11D74', micOff: false, cameraOn: false, speaking: false },
  { initials: 'MC', name: 'Mike Chen', bg: '#D97706', micOff: true, cameraOn: false, speaking: false },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', micOff: false, cameraOn: true, speaking: false },
  { initials: 'AM', name: 'You', bg: '#7C3AED', micOff: false, cameraOn: true, speaking: false },
];

const CHAT_MESSAGES = [
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', text: 'Can everyone see my screen?', time: '23:12' },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', text: 'Yes, looks good!', time: '23:13' },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', text: 'Slide 4 numbers need updating', time: '23:18' },
];

export function MeetPreviewMockup() {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [panel, setPanel] = useState<'none' | 'chat' | 'participants'>('none');
  const [chatBadge, setChatBadge] = useState(2);
  const [chatMessages, setChatMessages] = useState(CHAT_MESSAGES);
  const [chatInput, setChatInput] = useState('');

  const participants = INITIAL_PARTICIPANTS.map((p) =>
    p.name === 'You' ? { ...p, micOff: !micOn, cameraOn } : p
  );

  const togglePanel = (p: 'chat' | 'participants') => {
    if (panel === p) { setPanel('none'); return; }
    setPanel(p);
    if (p === 'chat') setChatBadge(0);
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages((m) => [...m, { initials: 'AM', name: 'You', bg: '#7C3AED', text: chatInput.trim(), time: 'Now' }]);
    setChatInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1a1a1a', position: 'relative' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Q3 Strategy Sync</div>
          <div style={{ fontSize: '9.5px', color: '#999' }}>23:41</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={14} style={{ color: '#888' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', fontSize: '10px', color: '#ccc' }}>
            <Users size={10} /> 6
          </div>
          <HelpCircle size={14} style={{ color: '#888' }} />
          <Settings size={14} style={{ color: '#888' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>
      </div>

      {/* Main content area */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Screen share view */}
          {screenSharing ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '4px 12px' }}>
              {/* Participant strip */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                {participants.filter((p) => p.name !== 'You').slice(0, 4).map((p) => (
                  <div key={p.name} style={{ width: '50px', height: '36px', borderRadius: '6px', background: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.initials}</div>
                  </div>
                ))}
              </div>
              {/* Shared content */}
              <div style={{ flex: 1, borderRadius: '8px', background: '#fff', position: 'relative', padding: '20px 24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '12px', background: '#7C3AED', fontSize: '9px', fontWeight: 600, color: '#fff' }}>
                  You are presenting
                  <span onClick={() => setScreenSharing(false)} style={{ cursor: 'pointer', opacity: 0.8 }}>· Stop sharing</span>
                </div>
                {/* Placeholder slide content */}
                <div style={{ marginTop: '28px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Q3 Revenue Growth</h3>
                  <div style={{ width: '40px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginBottom: '12px' }} />
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '80px' }}>
                    {[42, 58, 51, 74, 82].map((h, i) => (
                      <div key={i} style={{ width: '24px', height: `${h}%`, background: ['#7C3AED', '#0D9488', '#D97706', '#E11D74', '#7C3AED'][i], borderRadius: '3px 3px 0 0' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Normal video grid */
            <div style={{ flex: 1, padding: '4px 12px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '6px' }}>
              {participants.map((p) => (
                <div key={p.name} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: p.speaking ? '2px solid #7C3AED' : '2px solid transparent', background: p.cameraOn ? `linear-gradient(135deg, ${p.bg}22, ${p.bg}44)` : '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: p.cameraOn ? '36px' : '42px', height: p.cameraOn ? '36px' : '42px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: p.cameraOn ? '11px' : '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: p.cameraOn ? 0.7 : 1 }}>{p.initials}</div>
                  {/* Hand raised */}
                  {p.name === 'You' && handRaised && (
                    <div style={{ position: 'absolute', top: '6px', left: '8px', fontSize: '14px', animation: 'fadeScaleIn 0.2s ease-out' }}>✋</div>
                  )}
                  <div style={{ position: 'absolute', bottom: '6px', left: '8px', fontSize: '9px', fontWeight: 500, color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '4px' }}>{p.name}</div>
                  <div style={{ position: 'absolute', bottom: '6px', right: '8px', width: '18px', height: '18px', borderRadius: '50%', background: p.micOff ? 'rgba(239,68,68,0.8)' : 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.micOff ? <MicOff size={9} style={{ color: '#fff' }} /> : <Mic size={9} style={{ color: '#fff' }} />}
                  </div>
                  {p.speaking && <div style={{ position: 'absolute', inset: 0, borderRadius: '10px', boxShadow: 'inset 0 0 0 2px rgba(124,58,237,0.3)' }} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat panel */}
        {panel === 'chat' && (
          <div style={{ width: '200px', background: '#222', borderLeft: '1px solid #333', display: 'flex', flexDirection: 'column', animation: 'slideInRight 0.2s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid #333' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Chat</span>
              <X size={12} onClick={() => setPanel('none')} style={{ color: '#888', cursor: 'pointer' }} />
            </div>
            <div style={{ flex: 1, padding: '8px 10px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chatMessages.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: m.bg, color: '#fff', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{m.initials}</div>
                  <div>
                    <div style={{ fontSize: '8.5px', color: '#888' }}><span style={{ fontWeight: 600, color: '#ccc' }}>{m.name}</span> · {m.time}</div>
                    <p style={{ margin: '2px 0 0', fontSize: '9px', color: '#ddd', lineHeight: 1.4 }}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '8px 10px', borderTop: '1px solid #333', display: 'flex', gap: '6px' }}>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendChat()} placeholder="Message..." style={{ flex: 1, padding: '6px 10px', borderRadius: '14px', border: '1px solid #444', background: '#2a2a2a', fontSize: '9px', color: '#fff', outline: 'none' }} />
              <div onClick={sendChat} style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={10} style={{ color: '#fff' }} />
              </div>
            </div>
          </div>
        )}

        {/* Participants panel */}
        {panel === 'participants' && (
          <div style={{ width: '200px', background: '#222', borderLeft: '1px solid #333', display: 'flex', flexDirection: 'column', animation: 'slideInRight 0.2s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid #333' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>Participants (6)</span>
              <X size={12} onClick={() => setPanel('none')} style={{ color: '#888', cursor: 'pointer' }} />
            </div>
            <div style={{ padding: '6px 10px', borderBottom: '1px solid #333' }}>
              <span style={{ fontSize: '9px', color: '#7C3AED', fontWeight: 600, cursor: 'pointer' }}>Mute all</span>
            </div>
            <div style={{ flex: 1, padding: '8px 10px', overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {participants.map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.initials}</div>
                  <span style={{ flex: 1, fontSize: '9.5px', color: '#ddd', fontWeight: p.name === 'You' ? 600 : 400 }}>{p.name}</span>
                  {p.micOff ? <MicOff size={10} style={{ color: '#EF4444' }} /> : <Mic size={10} style={{ color: '#888' }} />}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom control bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', gap: '8px' }}>
        {/* Main controls pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '24px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <ControlBtn active={micOn} danger={!micOn} onClick={() => setMicOn((v) => !v)}>
            {micOn ? <Mic size={14} /> : <MicOff size={14} />}
          </ControlBtn>
          <ControlBtn active={cameraOn} danger={!cameraOn} onClick={() => setCameraOn((v) => !v)}>
            {cameraOn ? <Video size={14} /> : <VideoOff size={14} />}
          </ControlBtn>
          <ControlBtn active={screenSharing} onClick={() => setScreenSharing((v) => !v)}>
            <MonitorUp size={14} />
          </ControlBtn>
          <ControlBtn active={handRaised} onClick={() => setHandRaised((v) => !v)}>
            <Hand size={14} />
          </ControlBtn>
          <ControlBtn><MoreHorizontal size={14} /></ControlBtn>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
            <PhoneOff size={15} style={{ color: '#fff' }} />
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => togglePanel('chat')}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: panel === 'chat' ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={14} style={{ color: panel === 'chat' ? '#C4B5FD' : '#ccc' }} />
            </div>
            {chatBadge > 0 && (
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', minWidth: '14px', height: '14px', borderRadius: '7px', background: '#7C3AED', color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px', transition: 'opacity 0.15s' }}>{chatBadge}</span>
            )}
          </div>
          <div onClick={() => togglePanel('participants')} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '7px 10px', borderRadius: '16px', background: panel === 'participants' ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.1)', fontSize: '10px', color: panel === 'participants' ? '#C4B5FD' : '#ccc', cursor: 'pointer' }}>
            <Users size={12} /> 6
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlBtn({ children, active, danger, onClick }: { children: React.ReactNode; active?: boolean; danger?: boolean; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{
      width: '36px', height: '36px', borderRadius: '50%',
      background: danger ? 'rgba(239,68,68,0.3)' : active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: danger ? '#FCA5A5' : active ? '#fff' : '#888',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background 0.15s, color 0.15s',
    }}>
      {children}
    </div>
  );
}
