'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Star, HelpCircle, Settings, Undo2, Redo2, Printer, PaintBucket, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Link, Image, MessageSquare, ChevronDown, Minus, Plus, Check, X, Globe, Copy } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const TYPING_PHRASES = ['updated numbers pending', 'moved to Q4', 'great point!', 'needs review', 'approved'];

export function DocumentPreviewMockup() {
  // Part 1: Ambient cursor
  const [cursorPos, setCursorPos] = useState({ left: '180px', top: '106px' });
  const [typedText, setTypedText] = useState('');
  const [cursorPhraseIdx, setCursorPhraseIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const reducedMotion = useRef(false);

  // Part 2-3: Comment
  const [showCommentCoachmark, setShowCommentCoachmark] = useState(true);
  const [commentPanelOpen, setCommentPanelOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentPosted, setCommentPosted] = useState(false);
  const [commentResolved, setCommentResolved] = useState(false);

  // Part 4: Share modal
  const [shareOpen, setShareOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Part 5: Formatting
  const [boldOn, setBoldOn] = useState(false);
  const [italicOn, setItalicOn] = useState(false);
  const [underlineOn, setUnderlineOn] = useState(false);
  const [fontSize, setFontSize] = useState(11);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  // Part 6: Insert Image
  const [imageInserted, setImageInserted] = useState(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Ambient typing loop
  useEffect(() => {
    if (reducedMotion.current) return;
    const positions = [
      { left: '180px', top: '106px' },
      { left: '90px', top: '130px' },
      { left: '240px', top: '160px' },
      { left: '60px', top: '106px' },
    ];
    let posIdx = 0;
    const interval = setInterval(() => {
      if (shareOpen || commentPanelOpen || modalOpen) return;
      posIdx = (posIdx + 1) % positions.length;
      setCursorPos(positions[posIdx]);
      const phrase = TYPING_PHRASES[cursorPhraseIdx % TYPING_PHRASES.length];
      setCursorPhraseIdx((p) => p + 1);
      setIsTyping(true);
      setTypedText('');
      let charIdx = 0;
      const typeInterval = setInterval(() => {
        charIdx++;
        setTypedText(phrase.slice(0, charIdx));
        if (charIdx >= phrase.length) {
          clearInterval(typeInterval);
          setTimeout(() => { setIsTyping(false); setTypedText(''); }, 2000);
        }
      }, 40);
    }, 8000);
    return () => clearInterval(interval);
  }, [shareOpen, commentPanelOpen, modalOpen, cursorPhraseIdx]);

  const openCommentPanel = useCallback(() => {
    setShowCommentCoachmark(false);
    setCommentPanelOpen(true);
  }, []);

  const handlePostComment = () => {
    setCommentPosted(true);
    setNewComment('');
  };

  const handleResolve = () => {
    setCommentResolved(true);
    setTimeout(() => setCommentPanelOpen(false), 300);
  };

  const handleCopyLink = async () => {
    try { await navigator.clipboard.writeText('docs.snaarp.com/d/q3-marketing-plan-x92k'); } catch {}
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleInsertImage = () => {
    setImageInserted(true);
  };

  const getBlockStyle = (blockId: string) => {
    if (selectedBlock !== blockId) return {};
    return {
      fontWeight: boldOn ? 700 : undefined,
      fontStyle: italicOn ? ('italic' as const) : undefined,
      textDecoration: underlineOn ? ('underline' as const) : undefined,
      fontSize: fontSize !== 11 ? `${fontSize}px` : undefined,
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', position: 'relative' }}>
      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1px solid #f0f0f0', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Marketing Plan</span>
          <Star size={13} style={{ color: '#ccc' }} />
          <span style={{ fontSize: '10px', color: '#999', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Check size={10} style={{ color: '#22c55e' }} /> All changes saved
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', marginRight: '4px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 3 }}>SJ</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 2 }}>AR</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', zIndex: 1 }}>DT</div>
          </div>
          <button onClick={() => setShareOpen(true)} style={{ padding: '5px 12px', borderRadius: '14px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Share</button>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 14px', borderBottom: '1px solid #f0f0f0', gap: '2px', flexWrap: 'nowrap', overflow: 'hidden' }}>
        <ToolBtn><Undo2 size={12} /></ToolBtn>
        <ToolBtn><Redo2 size={12} /></ToolBtn>
        <ToolBtn><Printer size={12} /></ToolBtn>
        <ToolBtn><PaintBucket size={12} /></ToolBtn>
        <Divider />
        <DropdownBtn label="Normal text" />
        <DropdownBtn label="Poppins" />
        <DropdownBtn label={String(fontSize)} width="32px" onClick={() => setFontSize((s) => s === 11 ? 14 : s === 14 ? 18 : 11)} />
        <Divider />
        <ToolBtn active={boldOn} onClick={() => setBoldOn((v) => !v)}><Bold size={12} /></ToolBtn>
        <ToolBtn active={italicOn} onClick={() => setItalicOn((v) => !v)}><Italic size={12} /></ToolBtn>
        <ToolBtn active={underlineOn} onClick={() => setUnderlineOn((v) => !v)}><Underline size={12} /></ToolBtn>
        <ToolBtn><span style={{ width: '12px', height: '12px', display: 'inline-block', borderBottom: '3px solid #1a1a1a', borderRadius: '1px' }} /></ToolBtn>
        <ToolBtn><span style={{ width: '12px', height: '12px', display: 'inline-block', background: '#FEF08A', borderRadius: '2px' }} /></ToolBtn>
        <Divider />
        <ToolBtn><AlignLeft size={12} /></ToolBtn>
        <ToolBtn><AlignCenter size={12} /></ToolBtn>
        <ToolBtn><AlignRight size={12} /></ToolBtn>
        <ToolBtn><AlignJustify size={12} /></ToolBtn>
        <Divider />
        <ToolBtn><List size={12} /></ToolBtn>
        <ToolBtn><ListOrdered size={12} /></ToolBtn>
        <ToolBtn><Minus size={12} /></ToolBtn>
        <ToolBtn><Plus size={12} /></ToolBtn>
        <Divider />
        <ToolBtn><Link size={12} /></ToolBtn>
        <ToolBtn onClick={handleInsertImage}><Image size={12} /></ToolBtn>
        <ToolBtn onClick={openCommentPanel}><MessageSquare size={12} /></ToolBtn>
      </div>

      {/* Document canvas */}
      <div style={{ flex: 1, background: '#F8F9FA', display: 'flex', justifyContent: 'center', padding: '20px 16px', overflow: 'hidden' }}>
        <div style={{ width: '100%', maxWidth: '560px', background: '#fff', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', padding: '40px 50px', position: 'relative', fontSize: '11px', lineHeight: 1.7, color: '#333' }}>

          {/* Title */}
          <h1 onClick={() => setSelectedBlock('title')} style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px', letterSpacing: '-0.02em', cursor: 'text', outline: selectedBlock === 'title' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', ...getBlockStyle('title') }}>Q3 Marketing Plan</h1>
          <p style={{ fontSize: '9.5px', color: '#999', margin: '0 0 18px' }}>Last edited by Sarah Jenkins · 2 minutes ago</p>

          {/* Intro paragraph */}
          <p onClick={() => setSelectedBlock('p1')} style={{ margin: '0 0 12px', cursor: 'text', outline: selectedBlock === 'p1' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', padding: '2px', ...getBlockStyle('p1') }}>
            This document outlines our marketing priorities for Q3 2026, focusing on brand awareness expansion, product-led growth initiatives, and partnership development across key verticals.
          </p>
          <p onClick={() => setSelectedBlock('p2')} style={{ margin: '0 0 12px', cursor: 'text', outline: selectedBlock === 'p2' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', padding: '2px', ...getBlockStyle('p2') }}>
            Our team will coordinate cross-functional campaigns to drive qualified leads while maintaining cost efficiency across all channels.
          </p>

          {/* Collaborator cursor */}
          <div style={{ position: 'absolute', left: cursorPos.left, top: cursorPos.top, transition: reducedMotion.current ? 'none' : 'all 0.6s ease-in-out', pointerEvents: 'none' }}>
            <span style={{ display: 'block', width: '2px', height: '14px', background: '#7C3AED', borderRadius: '1px' }} />
            <span style={{ position: 'absolute', left: '-8px', top: '-13px', fontSize: '7px', fontWeight: 600, color: '#fff', background: '#7C3AED', padding: '1px 5px', borderRadius: '3px', whiteSpace: 'nowrap' }}>Sarah Jenkins</span>
            {isTyping && typedText && (
              <span style={{ position: 'absolute', left: '6px', top: '0px', fontSize: '9px', color: '#7C3AED', fontStyle: 'italic', whiteSpace: 'nowrap', opacity: 0.8 }}>{typedText}</span>
            )}
          </div>

          {/* Subheading */}
          <h2 onClick={() => setSelectedBlock('h2')} style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', margin: '20px 0 8px', cursor: 'text', outline: selectedBlock === 'h2' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', ...getBlockStyle('h2') }}>Key Objectives</h2>

          {/* Bullet list */}
          <ul onClick={() => setSelectedBlock('list')} style={{ margin: '0 0 14px', paddingLeft: '16px', cursor: 'text', outline: selectedBlock === 'list' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', ...getBlockStyle('list') }}>
            <li style={{ marginBottom: '4px' }}>Increase organic traffic by 35% through SEO and content strategy</li>
            <li style={{ marginBottom: '4px' }}>Launch product-led onboarding flow targeting mid-market accounts</li>
            <li style={{ marginBottom: '4px' }}>Establish 3 new channel partnerships in financial services</li>
            <li style={{ marginBottom: '4px' }}>Reduce CAC by 20% via improved attribution modelling</li>
          </ul>

          {/* Inserted image placeholder */}
          {imageInserted && (
            <div style={{ margin: '0 0 14px', padding: '24px', background: '#F8F9FA', border: '1px dashed #ddd', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', animation: 'fadeScaleIn 0.2s ease-out' }}>
              <Image size={20} style={{ color: '#aaa' }} />
              <span style={{ fontSize: '10px', color: '#999' }}>campaign-visual.png · 1.2 MB</span>
            </div>
          )}

          {/* Highlighted text with comment */}
          {!commentResolved && (
            <p style={{ margin: '0 0 12px', position: 'relative' }}>
              The budget allocation for Q3 will prioritise{' '}
              <span style={{ background: '#FEF9C3', padding: '1px 2px', borderRadius: '2px' }}>digital advertising spend of approximately £48,000 across paid search and social channels</span>
              , with measurable ROI targets reviewed bi-weekly.
            </p>
          )}
          {commentResolved && (
            <p style={{ margin: '0 0 12px' }}>
              The budget allocation for Q3 will prioritise digital advertising spend of approximately £48,000 across paid search and social channels, with measurable ROI targets reviewed bi-weekly.
            </p>
          )}

          {/* Margin comment / comment panel */}
          {!commentResolved && (
            <div style={{ position: 'absolute', right: '-8px', top: '290px', width: '150px', transition: 'opacity 0.3s', opacity: commentResolved ? 0 : 1 }}>
              {/* Comment bubble icon (coachmark target) */}
              <div onClick={openCommentPanel} style={{ position: 'absolute', left: '-20px', top: '6px', width: '16px', height: '16px', borderRadius: '50%', background: '#FEF9C3', border: '1px solid #FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <MessageSquare size={8} style={{ color: '#D97706' }} />
              </div>

              {/* Coachmark */}
              {showCommentCoachmark && !commentPanelOpen && (
                <Coachmark
                  visible
                  title="Leave a Comment"
                  subtitle="Give feedback right where it matters in the document"
                  onNext={openCommentPanel}
                  top="30px"
                  left="-60px"
                  arrowSide="top"
                  arrowOffset="40px"
                  buttonLabel="Next"
                />
              )}

              {/* Comment panel */}
              {commentPanelOpen ? (
                <div style={{ background: '#fff', border: '1px solid #e8e5f0', borderRadius: '10px', padding: '10px 12px', boxShadow: '0 4px 16px -4px rgba(0,0,0,0.12)', fontSize: '9px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '8px', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Comments</span>
                    <span onClick={handleResolve} style={{ fontSize: '8px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>Resolve</span>
                  </div>
                  {/* Existing comment */}
                  <div style={{ marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</div>
                      <span style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '9px' }}>Alex Rivera</span>
                      <span style={{ fontSize: '7.5px', color: '#aaa' }}>2h ago</span>
                    </div>
                    <p style={{ margin: '0', color: '#555', lineHeight: 1.4 }}>Can we get updated numbers here before Friday?</p>
                  </div>
                  {/* Posted comment */}
                  {commentPosted && (
                    <div style={{ marginBottom: '8px', background: '#F5F3FF', borderRadius: '6px', padding: '6px 8px', animation: 'fadeScaleIn 0.2s ease-out' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}>
                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
                        <span style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '9px' }}>You</span>
                        <span style={{ fontSize: '7.5px', color: '#aaa' }}>Just now</span>
                      </div>
                      <p style={{ margin: '0', color: '#555', lineHeight: 1.4 }}>Good catch — I&apos;ll get the updated figures over today</p>
                    </div>
                  )}
                  {/* Reply input */}
                  {!commentPosted && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>AM</div>
                      <input value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment..." style={{ flex: 1, border: '1px solid #e8e8e8', borderRadius: '6px', padding: '4px 8px', fontSize: '9px', outline: 'none' }} />
                    </div>
                  )}
                  {!commentPosted && (
                    <button onClick={handlePostComment} style={{ marginTop: '6px', width: '100%', padding: '5px', borderRadius: '6px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Comment</button>
                  )}
                </div>
              ) : (
                /* Static comment card (when panel not open) */
                <div style={{ background: '#fff', border: '1px solid #e8e5f0', borderRadius: '8px', padding: '8px 10px', boxShadow: '0 2px 8px -2px rgba(0,0,0,0.08)', fontSize: '9px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</div>
                    <span style={{ fontWeight: 600, color: '#1a1a1a' }}>Alex Rivera</span>
                  </div>
                  <p style={{ margin: '0 0 3px', color: '#555', lineHeight: 1.4 }}>Can we get updated numbers here before Friday?</p>
                  <span style={{ fontSize: '8px', color: '#aaa' }}>2h ago</span>
                </div>
              )}
            </div>
          )}

          <p onClick={() => setSelectedBlock('p3')} style={{ margin: '0', cursor: 'text', outline: selectedBlock === 'p3' ? '2px solid #C4B5FD' : 'none', borderRadius: '3px', padding: '2px', ...getBlockStyle('p3') }}>
            Weekly stand-ups will ensure alignment between marketing, sales, and product teams throughout the quarter.
          </p>
        </div>
      </div>

      {/* Share modal */}
      {shareOpen && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '340px', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Share &lsquo;Q3 Marketing Plan&rsquo;</span>
              <X size={14} onClick={() => setShareOpen(false)} style={{ color: '#999', cursor: 'pointer' }} />
            </div>
            {/* People input */}
            <div style={{ padding: '7px 10px', borderRadius: '8px', border: '1px solid #e8e8e8', marginBottom: '10px', fontSize: '10px', color: '#aaa' }}>Add people or groups</div>
            {/* Existing collaborators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
              {[{ initials: 'SJ', name: 'Sarah Jenkins', role: 'Editor', bg: '#7C3AED' }, { initials: 'AR', name: 'Alex Rivera', role: 'Editor', bg: '#0D9488' }, { initials: 'DT', name: 'Design Team', role: 'Commenter', bg: '#E11D74' }].map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.initials}</div>
                  <span style={{ flex: 1, fontSize: '10px', fontWeight: 500, color: '#333' }}>{p.name}</span>
                  <span style={{ fontSize: '9px', color: '#999', padding: '2px 6px', borderRadius: '4px', border: '1px solid #eee' }}>{p.role}</span>
                </div>
              ))}
            </div>
            <div style={{ height: '1px', background: '#f0f0f0', margin: '12px 0' }} />
            {/* General access */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Globe size={13} style={{ color: '#999' }} />
              <span style={{ flex: 1, fontSize: '10px', color: '#333' }}>Anyone with the link</span>
              <span style={{ fontSize: '9px', color: '#999', padding: '2px 6px', borderRadius: '4px', border: '1px solid #eee' }}>Viewer</span>
            </div>
            {/* Copy link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
              <div style={{ flex: 1, padding: '6px 10px', borderRadius: '6px', background: '#F8F9FA', border: '1px solid #e8e8e8', fontSize: '9px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>docs.snaarp.com/d/q3-marketing-plan-x92k</div>
              <button onClick={handleCopyLink} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 10px', borderRadius: '6px', background: linkCopied ? '#ECFDF5' : '#F8F9FA', border: '1px solid ' + (linkCopied ? '#A7F3D0' : '#e8e8e8'), fontSize: '9px', fontWeight: 600, color: linkCopied ? '#166534' : '#555', cursor: 'pointer' }}>
                {linkCopied ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
              </button>
            </div>
            <button onClick={() => setShareOpen(false)} style={{ width: '100%', padding: '8px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Toolbar helpers ─── */
function ToolBtn({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '4px', color: active ? '#7C3AED' : '#555',
        background: active ? '#F3EFFF' : 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {children}
    </div>
  );
}

function DropdownBtn({ label, width, onClick }: { label: string; width?: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 6px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap', width: width || 'auto' }}
    >
      {label}
      <ChevronDown size={9} style={{ color: '#999' }} />
    </div>
  );
}

function Divider() {
  return <div style={{ width: '1px', height: '18px', background: '#e8e8e8', margin: '0 4px' }} />;
}
