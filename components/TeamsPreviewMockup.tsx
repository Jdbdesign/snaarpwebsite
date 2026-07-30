'use client';

import { Hash, Plus, Activity, MessageSquare, Users, Calendar, Phone, FolderOpen, Paperclip, Smile, AtSign, Send, HelpCircle, Settings, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  { icon: Activity, label: 'Activity', active: false },
  { icon: MessageSquare, label: 'Chat', active: true },
  { icon: Users, label: 'Teams', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: Phone, label: 'Calls', active: false },
  { icon: FolderOpen, label: 'Files', active: false },
];

const CHANNELS = [
  { name: 'general', badge: 3, selected: true },
  { name: 'marketing', badge: 1, selected: false },
  { name: 'product-launch', badge: 0, selected: false },
  { name: 'design-review', badge: 0, selected: false },
];

export function TeamsPreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '100%', background: '#fff' }}>

      {/* Sidebar */}
      <div style={{ width: '180px', borderRight: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        {/* Header */}
        <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Snaarp</div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '5px', width: '100%', padding: '7px 12px', borderRadius: '8px', border: 'none', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, cursor: 'default' }}>
            <Plus size={12} /> New Channel
          </button>
        </div>

        {/* Nav */}
        <div style={{ padding: '8px 8px 4px' }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 10px', borderRadius: '6px', fontSize: '10.5px',
                fontWeight: item.active ? 700 : 500,
                color: item.active ? '#7C3AED' : '#555',
                background: item.active ? '#F3EFFF' : 'transparent',
                marginBottom: '2px',
              }}
            >
              <item.icon size={13} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Channels */}
        <div style={{ padding: '10px 8px', borderTop: '1px solid #f0f0f0', marginTop: '4px' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', padding: '0 10px 6px' }}>Channels</div>
          {CHANNELS.map((ch) => (
            <div
              key={ch.name}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '6px', fontSize: '10.5px',
                fontWeight: ch.selected ? 600 : 400,
                color: ch.selected ? '#1a1a1a' : '#555',
                background: ch.selected ? '#EDE9FE' : 'transparent',
                marginBottom: '1px',
              }}
            >
              <Hash size={11} style={{ color: ch.selected ? '#7C3AED' : '#999' }} />
              <span style={{ flex: 1 }}>{ch.name}</span>
              {ch.badge > 0 && (
                <span style={{ minWidth: '16px', height: '16px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>{ch.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid #f0f0f0', gap: '12px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Hash size={13} style={{ color: '#7C3AED' }} /> general
            </div>
            <div style={{ fontSize: '9.5px', color: '#999' }}>Marketing Team · 12 members</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 12px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#999' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            Search messages...
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '12px', background: '#ECFDF5', fontSize: '10px', fontWeight: 600, color: '#166534' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} /> Active
            <ChevronDown size={10} style={{ color: '#166534' }} />
          </div>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>

        {/* Message thread */}
        <div style={{ flex: 1, padding: '14px 16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Message 1 - Sarah Jenkins */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>SJ</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Sarah Jenkins</span>
                <span style={{ color: '#999', fontSize: '9px' }}>10:24 AM</span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>Just pushed the updated Q3 deck to the Files tab, can everyone take a look before tomorrow&apos;s review?</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', padding: '5px 10px', borderRadius: '6px', background: '#F8F7FA', border: '1px solid #EDEBF5', fontSize: '9px', color: '#555' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                <span style={{ fontWeight: 500 }}>Q3_Marketing_Plan.pptx</span>
                <span style={{ color: '#aaa' }}>2.4 MB</span>
              </div>
            </div>
          </div>

          {/* Message 2 - Alex Rivera with reactions */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>AR</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Alex Rivera</span>
                <span style={{ color: '#999', fontSize: '9px' }}>10:31 AM</span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>Looks great! I left a couple of comments on slide 4.</p>
              <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '10px', background: '#F0EDFA', border: '1px solid #E6DEFA', fontSize: '9px' }}>👍 3</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '10px', background: '#FEF9C3', border: '1px solid #FDE68A', fontSize: '9px' }}>🎉 1</span>
              </div>
            </div>
          </div>

          {/* Message 3 - Design Team */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>DT</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Design Team</span>
                <span style={{ color: '#999', fontSize: '9px' }}>10:45 AM</span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>Should we sync briefly today to align on the launch visuals?</p>
            </div>
          </div>

          {/* Message 4 - Mike Chen with thread indicator */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#D97706', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>MC</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Mike Chen</span>
                <span style={{ color: '#999', fontSize: '9px' }}>11:02 AM</span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>I&apos;ve updated the timeline for the social campaigns — shifted launch week by 3 days.</p>
              <div style={{ marginTop: '4px', fontSize: '9.5px', color: '#7C3AED', fontWeight: 500, cursor: 'default' }}>3 replies</div>
            </div>
          </div>

          {/* Message 5 - Lisa Park + typing indicator */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#2563EB', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>LP</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '10.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 700, color: '#1a1a1a' }}>Lisa Park</span>
                <span style={{ color: '#999', fontSize: '9px' }}>11:15 AM</span>
              </div>
              <p style={{ margin: '3px 0 0', fontSize: '10.5px', color: '#333', lineHeight: 1.5 }}>Sounds good, I&apos;m free after 2pm</p>
            </div>
          </div>

          {/* System message - Cloud Services */}
          <div style={{ padding: '6px 12px', borderRadius: '6px', background: '#F8F9FA', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
            </div>
            <span style={{ fontSize: '10px', color: '#555' }}><strong style={{ color: '#333' }}>Cloud Services</strong> — Deployment to staging completed successfully ✅</span>
            <span style={{ fontSize: '8.5px', color: '#aaa', marginLeft: 'auto' }}>11:22 AM</span>
          </div>

          {/* Typing indicator */}
          <div style={{ fontSize: '9.5px', color: '#999', fontStyle: 'italic', paddingLeft: '34px' }}>James Wilson is typing…</div>
        </div>

        {/* Message composer */}
        <div style={{ padding: '10px 16px', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '8px 12px', borderRadius: '20px', border: '1px solid #e8e8e8', background: '#fafafa', gap: '8px' }}>
            <span style={{ flex: 1, fontSize: '10.5px', color: '#aaa' }}>Type a message...</span>
            <Paperclip size={12} style={{ color: '#999' }} />
            <Smile size={12} style={{ color: '#999' }} />
            <AtSign size={12} style={{ color: '#999' }} />
          </div>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
            <Send size={13} style={{ color: '#fff' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
