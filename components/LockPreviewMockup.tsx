'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus, Lock, Star, Eye, EyeOff, Filter, ChevronLeft, ChevronRight, Settings, HelpCircle, KeyRound, Copy, Check, X, CheckCircle, ShieldAlert, Trash2 } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const VAULT_BASE = [
  { letter: 'G', tileBg: '#EA4335', name: 'Gmail', username: 's.jenkins@••••.com', password: 'xK9#mPq2vL$w', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Work Accounts' },
  { letter: 'S', tileBg: '#7C3AED', name: 'Slack', username: 's.jenkins@••••.com', password: 'Rt7&nBz5hY@j', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Work Accounts' },
  { letter: 'A', tileBg: '#F59E0B', name: 'Amazon', username: 'sarah.j@••••.com', password: 'pass123', strength: 'Weak', strengthColor: '#F59E0B', strengthBg: '#FFFBEB', folder: 'Personal' },
  { letter: 'L', tileBg: '#3b82f6', name: 'LinkedIn', username: 's.jenkins@••••.com', password: 'Qw8$kLm4xN#p', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Work Accounts' },
  { letter: 'N', tileBg: '#E11D48', name: 'Netflix', username: 'sarahj@••••.com', password: 'Yz3!cDf7gH@b', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Personal' },
  { letter: 'C', tileBg: '#1E293B', name: 'Chase Bank', username: 'sarah.jenkins@••••.com', password: 'Mn6#pQr9sT$v', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Finance' },
  { letter: 'D', tileBg: '#3b82f6', name: 'Dropbox', username: 's.jenkins@••••.com', password: 'pass123', strength: 'Reused', strengthColor: '#E11D48', strengthBg: '#FFF1F2', folder: 'Work Accounts' },
  { letter: 'S', tileBg: '#22c55e', name: 'Spotify', username: 'sarahj@••••.com', password: 'Wv4@xYz8aB#c', strength: 'Strong', strengthColor: '#22c55e', strengthBg: '#ECFDF5', folder: 'Personal' },
];

const FOLDERS = [
  { label: 'Work Accounts', color: '#7C3AED', count: 34 },
  { label: 'Personal', color: '#0E9384', count: 41 },
  { label: 'Finance', color: '#F59E0B', count: 11 },
];

type VaultView = 'all' | 'alerts';
type ModalState = 'none' | 'addPassword' | 'detail';

function generatePassword(length: number, upper: boolean, numbers: boolean, symbols: boolean) {
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) chars += '0123456789';
  if (symbols) chars += '!@#$%&*';
  let result = '';
  for (let i = 0; i < length; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function getStrength(length: number, upper: boolean, numbers: boolean, symbols: boolean) {
  const score = (length >= 16 ? 2 : length >= 12 ? 1 : 0) + (upper ? 1 : 0) + (numbers ? 1 : 0) + (symbols ? 1 : 0);
  if (score >= 4) return { label: 'Strong', color: '#22c55e', width: '100%' };
  if (score >= 2) return { label: 'Good', color: '#F59E0B', width: '66%' };
  return { label: 'Weak', color: '#E11D48', width: '33%' };
}

export function LockPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [vault, setVault] = useState(VAULT_BASE);
  const [vaultView, setVaultView] = useState<VaultView>('all');
  const [modal, setModal] = useState<ModalState>('none');
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [showDoneCoachmark, setShowDoneCoachmark] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [revealedIdx, setRevealedIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [detailItem, setDetailItem] = useState(VAULT_BASE[0]);
  const [detailRevealed, setDetailRevealed] = useState(false);
  const [allCount, setAllCount] = useState(86);
  // Generator state
  const [genLength, setGenLength] = useState(16);
  const [genUpper, setGenUpper] = useState(true);
  const [genNumbers, setGenNumbers] = useState(true);
  const [genSymbols, setGenSymbols] = useState(true);
  const [genPassword, setGenPassword] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('Work Accounts');
  const [showSaveCoachmark, setShowSaveCoachmark] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStep1(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (modal === 'addPassword') {
      setGenPassword(generatePassword(genLength, genUpper, genNumbers, genSymbols));
    }
  }, [genLength, genUpper, genNumbers, genSymbols, modal]);

  // Auto-hide revealed password after 4s
  useEffect(() => {
    if (revealedIdx !== null) {
      const t = setTimeout(() => setRevealedIdx(null), 4000);
      return () => clearTimeout(t);
    }
  }, [revealedIdx]);

  function handleOpenAdd() {
    setShowStep1(false);
    setTimeout(() => {
      setModal('addPassword');
      setGenPassword(generatePassword(16, true, true, true));
      setTimeout(() => setShowSaveCoachmark(true), 400);
    }, 180);
  }

  function handleSave() {
    setShowSaveCoachmark(false);
    const strength = getStrength(genLength, genUpper, genNumbers, genSymbols);
    const newItem = { letter: 'F', tileBg: '#EC4899', name: 'Figma', username: 's.jenkins@acme.com', password: genPassword, strength: strength.label, strengthColor: strength.color, strengthBg: strength.label === 'Strong' ? '#ECFDF5' : strength.label === 'Good' ? '#FFFBEB' : '#FFF1F2', folder: selectedFolder };
    setVault([newItem, ...vault]);
    setAllCount(allCount + 1);
    setModal('none');
    toast('Password saved');
    setTimeout(() => setShowStep2(true), 2200);
  }

  function handleCopy(idx: number) {
    try { navigator.clipboard.writeText(vault[idx].password); } catch {}
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1800);
  }

  function handleOpenDetail(item: typeof VAULT_BASE[0]) {
    setShowStep2(false);
    setDetailItem(item);
    setDetailRevealed(false);
    setModal('detail');
    setTimeout(() => setShowStep3(true), 400);
  }

  function toast(msg: string) {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  const displayItems = vaultView === 'alerts' ? vault.filter(v => v.strength === 'Weak' || v.strength === 'Reused') : vault;
  const strength = getStrength(genLength, genUpper, genNumbers, genSymbols);

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      {/* Toast */}
      {showToast && (
        <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 200, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}>
          <CheckCircle size={14} style={{ color: '#22c55e' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#166534' }}>{toastMsg}</span>
        </div>
      )}

      {/* Step 1 Coachmark */}
      <Coachmark visible={showStep1 && modal === 'none' && !isLocked} title="Save a New Password" subtitle="Store a login and let Snaarp generate a strong password for you" onNext={handleOpenAdd} top="50px" left="110px" arrowSide="left" />

      {/* Step 2 Coachmark — View Details */}
      <Coachmark visible={showStep2 && modal === 'none' && !isLocked} title="View Details" subtitle="Click any item to see full credentials and options" onNext={() => handleOpenDetail(vault[0])} top="80px" left="300px" arrowSide="left" />

      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        <div onClick={handleOpenAdd} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 10px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9px', fontWeight: 600, marginBottom: '14px', width: 'fit-content', cursor: 'pointer' }}>
          <Plus size={11} /><span>Add Password</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {[
            { label: 'All Items', count: String(allCount), active: vaultView === 'all', alert: false },
            { label: 'Favorites', count: null, active: false, alert: false },
            { label: 'Login Credentials', count: null, active: false, alert: false },
            { label: 'Secure Notes', count: null, active: false, alert: false },
            { label: 'Payment Cards', count: null, active: false, alert: false },
            { label: 'Security Alerts', count: null, active: vaultView === 'alerts', alert: true },
          ].map((item) => (
            <div key={item.label} onClick={() => { if (item.label === 'All Items') setVaultView('all'); if (item.label === 'Security Alerts') setVaultView('alerts'); }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10px', cursor: item.label === 'All Items' || item.label === 'Security Alerts' ? 'pointer' : 'default' }}>
              <KeyRound size={11} />
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
              {item.count && <span style={{ fontSize: '8px', fontWeight: 700, background: item.active ? '#7C3AED' : '#e8e8e8', color: item.active ? '#fff' : '#888', padding: '1px 5px', borderRadius: '8px' }}>{item.count}</span>}
              {item.alert && <span style={{ fontSize: '7px', fontWeight: 800, background: '#E11D48', color: '#fff', padding: '1px 4px', borderRadius: '8px' }}>3</span>}
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}><span>Folders</span><span style={{ fontSize: '13px', color: '#aaa' }}>+</span></div>
          {FOLDERS.map((f) => (
            <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555', padding: '2px 0' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: f.color }} />
              <span style={{ flex: 1 }}>{f.label}</span>
              <span style={{ fontSize: '8px', color: '#999' }}>{f.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} /><span>Search vault...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div onClick={() => setIsLocked(!isLocked)} style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333', cursor: 'pointer' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isLocked ? '#E11D48' : '#22c55e' }} />
              <span>{isLocked ? 'Locked' : 'Unlocked'}</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Locked overlay */}
        {isLocked && (
          <div style={{ position: 'absolute', top: '40px', left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Lock size={32} style={{ color: '#7C3AED' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Vault Locked</span>
            <button onClick={() => setIsLocked(false)} style={{ padding: '6px 18px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Unlock</button>
          </div>
        )}

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
            <Filter size={12} />
            <span style={{ fontSize: '9.5px', color: '#555', fontWeight: 500 }}>{vaultView === 'alerts' ? 'Security Alerts' : 'All Items'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '9px', color: '#999' }}>1-{Math.min(8, displayItems.length)} of {vaultView === 'alerts' ? displayItems.length : allCount}</span>
            <ChevronLeft size={12} style={{ color: '#888' }} />
            <ChevronRight size={12} style={{ color: '#888' }} />
          </div>
        </div>

        {/* Alerts header */}
        {vaultView === 'alerts' && (
          <div style={{ padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#E11D48' }}>Security Alerts</div>
            <div style={{ fontSize: '9px', color: '#888' }}>{displayItems.length} items need attention</div>
          </div>
        )}

        {/* Vault list */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {displayItems.slice(0, 8).map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderBottom: '1px solid #f8f8f8' }}>
              <div onClick={() => handleOpenDetail(item)} style={{ width: '30px', height: '30px', minWidth: '30px', borderRadius: '8px', background: item.tileBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700, flexShrink: 0, cursor: 'pointer' }}>{item.letter}</div>
              <div onClick={() => handleOpenDetail(item)} style={{ flex: 1, minWidth: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ fontWeight: 600, fontSize: '11px', color: '#1a1a1a' }}>{item.name}</div>
                <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.username}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <span style={{ fontSize: '10px', color: '#bbb', letterSpacing: '1px' }}>{revealedIdx === i ? item.password : '••••••••••••'}</span>
                <div onClick={() => setRevealedIdx(revealedIdx === i ? null : i)} style={{ cursor: 'pointer', color: '#ccc' }}>{revealedIdx === i ? <EyeOff size={12} /> : <Eye size={12} />}</div>
                <div onClick={() => handleCopy(i)} style={{ cursor: 'pointer', color: copiedIdx === i ? '#22c55e' : '#ccc' }}>{copiedIdx === i ? <Check size={12} /> : <Copy size={12} />}</div>
              </div>
              <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '2px 6px', borderRadius: '8px', background: item.strengthBg, color: item.strengthColor, textTransform: 'uppercase', flexShrink: 0 }}>{item.strength}</span>
              {vaultView === 'alerts' && <button onClick={handleOpenAdd} style={{ padding: '2px 8px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '8px', fontWeight: 600, cursor: 'pointer' }}>Fix Now</button>}
            </div>
          ))}
        </div>

        {/* Add Password Modal */}
        {modal === 'addPassword' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'visible' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Add Password</span>
                <div onClick={() => setModal('none')} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
              </div>
              <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Website or app</div>
                  <div style={{ padding: '5px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Figma</div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Username / email</div>
                  <div style={{ padding: '5px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>s.jenkins@acme.com</div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Password</div>
                  <div style={{ padding: '5px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a', fontFamily: 'monospace', letterSpacing: '0.5px' }}>{genPassword || '••••••••••••'}</div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}><span>Length: {genLength}</span></div>
                  <input type="range" min="8" max="24" value={genLength} onChange={(e) => setGenLength(Number(e.target.value))} style={{ width: '100%', height: '4px', accentColor: '#7C3AED' }} />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[{ label: 'ABC', state: genUpper, set: setGenUpper }, { label: '123', state: genNumbers, set: setGenNumbers }, { label: '#$!', state: genSymbols, set: setGenSymbols }].map((t) => (
                    <div key={t.label} onClick={() => t.set(!t.state)} style={{ padding: '3px 8px', borderRadius: '10px', fontSize: '8px', fontWeight: 600, cursor: 'pointer', background: t.state ? '#7C3AED' : '#f0f0f0', color: t.state ? '#fff' : '#888' }}>{t.label}</div>
                  ))}
                </div>
                <div style={{ height: '4px', borderRadius: '2px', background: '#f0f0f0' }}><div style={{ height: '100%', borderRadius: '2px', background: strength.color, width: strength.width, transition: 'width 0.2s' }} /></div>
                <div style={{ fontSize: '8px', fontWeight: 600, color: strength.color }}>{strength.label}</div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Folder</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {FOLDERS.map((f) => (
                      <div key={f.label} onClick={() => setSelectedFolder(f.label)} style={{ padding: '3px 8px', borderRadius: '12px', fontSize: '8px', fontWeight: 600, cursor: 'pointer', background: selectedFolder === f.label ? f.color : '#fff', color: selectedFolder === f.label ? '#fff' : '#555', border: selectedFolder === f.label ? 'none' : '1px solid #e8e8e8' }}>{f.label.split(' ')[0]}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
                <Coachmark visible={showSaveCoachmark} title="Save Password" subtitle="Click to store this credential securely" onNext={handleSave} top="-120px" left="10px" arrowSide="bottom" arrowOffset="180px" />
                <button onClick={() => setModal('none')} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                <button onClick={handleSave} style={{ padding: '5px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Save Password</button>
              </div>
            </div>
          </div>
        )}

        {/* Detail Drawer */}
        {modal === 'detail' && (
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '240px', background: '#fff', borderLeft: '1px solid #e8e8e8', boxShadow: '-4px 0 20px -8px rgba(0,0,0,0.1)', zIndex: 50, display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
            <div style={{ padding: '16px 14px', textAlign: 'center', borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
              <div onClick={() => setModal('none')} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#888' }}><X size={13} /></div>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: detailItem.tileBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700, margin: '0 auto 8px' }}>{detailItem.letter}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>{detailItem.name}</div>
              <span style={{ display: 'inline-block', marginTop: '6px', fontSize: '8px', fontWeight: 700, padding: '2px 8px', borderRadius: '8px', background: detailItem.strengthBg, color: detailItem.strengthColor, textTransform: 'uppercase' }}>{detailItem.strength}</span>
            </div>
            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Username</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>{detailItem.username}</span>
                  <Copy size={10} style={{ color: '#ccc', cursor: 'pointer' }} />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Password</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', position: 'relative' }}>
                  <span style={{ fontSize: '10px', color: '#1a1a1a', fontFamily: 'monospace' }}>{detailRevealed ? detailItem.password : '••••••••••••'}</span>
                  <div onClick={() => { setDetailRevealed(!detailRevealed); setShowStep3(false); setTimeout(() => setShowDoneCoachmark(true), 800); }} style={{ cursor: 'pointer', color: '#ccc' }}>{detailRevealed ? <EyeOff size={10} /> : <Eye size={10} />}</div>
                  <Copy size={10} style={{ color: '#ccc', cursor: 'pointer' }} onClick={() => { try { navigator.clipboard.writeText(detailItem.password); } catch {} setShowStep3(false); toast('Copied'); setTimeout(() => setShowDoneCoachmark(true), 800); }} />
                  {/* Step 3 — View/Copy Password tooltip */}
                  <Coachmark visible={showStep3} title="View & Copy Password" subtitle="Reveal the password or copy it to your clipboard" onNext={() => { setDetailRevealed(true); setShowStep3(false); setTimeout(() => setShowDoneCoachmark(true), 800); }} top="30px" left="-80px" arrowSide="top" arrowOffset="150px" />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Last changed</div>
                <div style={{ fontSize: '9.5px', color: '#555' }}>Changed 3 months ago</div>
              </div>
              {(detailItem.strength === 'Weak' || detailItem.strength === 'Reused') && (
                <div style={{ padding: '8px', background: '#FFF1F2', borderRadius: '8px', border: '1px solid #FFE0E3' }}>
                  <div style={{ fontSize: '9px', color: '#E11D48', fontWeight: 600 }}>This password is {detailItem.strength.toLowerCase()} — consider generating a new one</div>
                  <button onClick={handleOpenAdd} style={{ marginTop: '6px', padding: '3px 10px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '8px', fontWeight: 600, cursor: 'pointer' }}>Generate New</button>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
              {/* Done/End coachmark */}
              <Coachmark visible={showDoneCoachmark} title="All Done!" subtitle="You have explored Snaarp Lock. Continue to the next tool." onNext={() => { setShowDoneCoachmark(false); setModal('none'); if (onEnd) onEnd(); }} top="-120px" left="20px" arrowSide="bottom" arrowOffset="140px" buttonLabel="End" />
              <button onClick={() => { setModal('none'); toast('Item deleted'); }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '9px', fontWeight: 500, color: '#555', cursor: 'pointer' }}><Trash2 size={11} /> Delete</button>
              <button onClick={() => { setShowDoneCoachmark(false); setModal('none'); if (onEnd) onEnd(); }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#7C3AED', border: 'none', borderRadius: '8px', fontSize: '9px', fontWeight: 600, color: '#fff', cursor: 'pointer' }}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
