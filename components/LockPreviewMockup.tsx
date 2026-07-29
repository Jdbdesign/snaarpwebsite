'use client';

import { Search, ChevronDown, Plus, Lock, Star, CreditCard, FileText, ShieldAlert, Eye, Filter, ChevronLeft, ChevronRight, Settings, HelpCircle, KeyRound } from 'lucide-react';

const SIDEBAR_NAV = [
  { label: 'All Items', active: true, count: '86', alert: false },
  { label: 'Favorites', active: false, count: null, alert: false },
  { label: 'Login Credentials', active: false, count: null, alert: false },
  { label: 'Secure Notes', active: false, count: null, alert: false },
  { label: 'Payment Cards', active: false, count: null, alert: false },
  { label: 'Security Alerts', active: false, count: null, alert: true },
];

const FOLDERS = [
  { label: 'Work Accounts', color: '#7C3AED', count: '34' },
  { label: 'Personal', color: '#0E9384', count: '41' },
  { label: 'Finance', color: '#F59E0B', count: '11' },
];

const VAULT_ITEMS = [
  { letter: 'G', tileBg: '#EA4335', name: 'Gmail', username: 's.jenkins@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
  { letter: 'S', tileBg: '#7C3AED', name: 'Slack', username: 's.jenkins@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
  { letter: 'A', tileBg: '#F59E0B', name: 'Amazon', username: 'sarah.j@••••.com', strength: 'Weak', strengthColor: '#F59E0B', strengthBg: '#FFFBEB' },
  { letter: 'L', tileBg: '#3b82f6', name: 'LinkedIn', username: 's.jenkins@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
  { letter: 'N', tileBg: '#E11D48', name: 'Netflix', username: 'sarahj@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
  { letter: 'C', tileBg: '#1E293B', name: 'Chase Bank', username: 'sarah.jenkins@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
  { letter: 'D', tileBg: '#3b82f6', name: 'Dropbox', username: 's.jenkins@••••.com', strength: 'Reused', strengthColor: '#E11D48', strengthBg: '#FFF1F2' },
  { letter: 'S', tileBg: '#22c55e', name: 'Spotify', username: 'sarahj@••••.com', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5' },
];

export function LockPreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        {/* Add Password button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9px', fontWeight: 600, marginBottom: '14px', width: 'fit-content' }}>
          <Plus size={11} />
          <span>Add Password</span>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {SIDEBAR_NAV.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10px' }}>
              <KeyRound size={11} />
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
              {item.count && <span style={{ fontSize: '8px', fontWeight: 700, background: item.active ? '#7C3AED' : '#e8e8e8', color: item.active ? '#fff' : '#888', padding: '1px 5px', borderRadius: '8px' }}>{item.count}</span>}
              {item.alert && <span style={{ fontSize: '7px', fontWeight: 800, background: '#E11D48', color: '#fff', padding: '1px 4px', borderRadius: '8px', minWidth: '14px', textAlign: 'center' }}>3</span>}
            </div>
          ))}
        </div>

        {/* Folders */}
        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}>
            <span>Folders</span>
            <span style={{ fontSize: '13px', color: '#aaa' }}>+</span>
          </div>
          {FOLDERS.map((folder) => (
            <div key={folder.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555', padding: '2px 0' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: folder.color }} />
              <span style={{ flex: 1 }}>{folder.label}</span>
              <span style={{ fontSize: '8px', color: '#999' }}>{folder.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} />
            <span>Search vault...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>Unlocked</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
            <Filter size={12} />
            <span style={{ fontSize: '9.5px', color: '#555', fontWeight: 500 }}>All Items</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '9px', color: '#999' }}>1-8 of 86</span>
            <ChevronLeft size={12} style={{ color: '#888' }} />
            <ChevronRight size={12} style={{ color: '#888' }} />
          </div>
        </div>

        {/* Vault list */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {VAULT_ITEMS.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderBottom: '1px solid #f8f8f8' }}>
              {/* Letter tile */}
              <div style={{ width: '30px', height: '30px', minWidth: '30px', borderRadius: '8px', background: item.tileBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>
                {item.letter}
              </div>
              {/* Name + username */}
              <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontWeight: 600, fontSize: '11px', color: '#1a1a1a' }}>{item.name}</div>
                <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{item.username}</div>
              </div>
              {/* Masked password + eye */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <span style={{ fontSize: '10px', color: '#bbb', letterSpacing: '1px' }}>••••••••••••</span>
                <Eye size={12} style={{ color: '#ccc' }} />
              </div>
              {/* Strength tag */}
              <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '2px 6px', borderRadius: '8px', background: item.strengthBg, color: item.strengthColor, textTransform: 'uppercase', letterSpacing: '0.03em', flexShrink: 0 }}>{item.strength}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
