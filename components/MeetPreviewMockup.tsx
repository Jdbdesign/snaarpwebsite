'use client';

import { HelpCircle, Settings, Info, Users, Mic, MicOff, Video, MonitorUp, Hand, MoreHorizontal, PhoneOff, MessageSquare } from 'lucide-react';

const PARTICIPANTS = [
  { initials: 'SJ', name: 'Sarah Jenkins', bg: '#7C3AED', micOff: false, cameraOn: true, speaking: true },
  { initials: 'AR', name: 'Alex Rivera', bg: '#0D9488', micOff: true, cameraOn: false, speaking: false },
  { initials: 'DT', name: 'Design Team', bg: '#E11D74', micOff: false, cameraOn: false, speaking: false },
  { initials: 'MC', name: 'Mike Chen', bg: '#D97706', micOff: true, cameraOn: false, speaking: false },
  { initials: 'LP', name: 'Lisa Park', bg: '#2563EB', micOff: false, cameraOn: true, speaking: false },
  { initials: 'AM', name: 'You', bg: '#7C3AED', micOff: false, cameraOn: true, speaking: false },
];

export function MeetPreviewMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#1a1a1a' }}>

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

      {/* Video grid */}
      <div style={{ flex: 1, padding: '4px 12px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '6px' }}>
        {PARTICIPANTS.map((p) => (
          <div
            key={p.name}
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              border: p.speaking ? '2px solid #7C3AED' : '2px solid transparent',
              background: p.cameraOn
                ? `linear-gradient(135deg, ${p.bg}22, ${p.bg}44)`
                : '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Avatar */}
            <div style={{
              width: p.cameraOn ? '36px' : '42px',
              height: p.cameraOn ? '36px' : '42px',
              borderRadius: '50%',
              background: p.bg,
              color: '#fff',
              fontSize: p.cameraOn ? '11px' : '13px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: p.cameraOn ? 0.7 : 1,
            }}>
              {p.initials}
            </div>

            {/* Name label */}
            <div style={{
              position: 'absolute',
              bottom: '6px',
              left: '8px',
              fontSize: '9px',
              fontWeight: 500,
              color: '#fff',
              background: 'rgba(0,0,0,0.5)',
              padding: '2px 6px',
              borderRadius: '4px',
            }}>
              {p.name}
            </div>

            {/* Mic status */}
            <div style={{
              position: 'absolute',
              bottom: '6px',
              right: '8px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: p.micOff ? 'rgba(239,68,68,0.8)' : 'rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {p.micOff ? <MicOff size={9} style={{ color: '#fff' }} /> : <Mic size={9} style={{ color: '#fff' }} />}
            </div>

            {/* Speaking indicator ring animation placeholder */}
            {p.speaking && (
              <div style={{ position: 'absolute', inset: 0, borderRadius: '10px', boxShadow: 'inset 0 0 0 2px rgba(124,58,237,0.3)' }} />
            )}
          </div>
        ))}
      </div>

      {/* Bottom control bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', gap: '8px' }}>
        {/* Side buttons - Chat */}
        <div style={{ position: 'relative', marginRight: '8px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={14} style={{ color: '#ccc' }} />
          </div>
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', minWidth: '14px', height: '14px', borderRadius: '7px', background: '#7C3AED', color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px' }}>2</span>
        </div>

        {/* Main controls pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '24px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <ControlBtn active><Mic size={14} /></ControlBtn>
          <ControlBtn active><Video size={14} /></ControlBtn>
          <ControlBtn><MonitorUp size={14} /></ControlBtn>
          <ControlBtn><Hand size={14} /></ControlBtn>
          <ControlBtn><MoreHorizontal size={14} /></ControlBtn>
          {/* Leave call */}
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
            <PhoneOff size={15} style={{ color: '#fff' }} />
          </div>
        </div>

        {/* Side buttons - Participants */}
        <div style={{ marginLeft: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '7px 10px', borderRadius: '16px', background: 'rgba(255,255,255,0.1)', fontSize: '10px', color: '#ccc' }}>
            <Users size={12} /> 6
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlBtn({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div style={{
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: active ? '#fff' : '#888',
      cursor: 'default',
    }}>
      {children}
    </div>
  );
}
