'use client';

import { useState } from 'react';
import { PdfReaderRevealSection } from './PdfReaderRevealSection';
import { Price } from '@/components/currency/Price';
import { SignatureFlowProvider, SignatureFlowFields, SignatureFlowStatus, SignatureFlowButton } from './SignatureFlow';

type Tool = 'highlight' | 'comment' | 'draw' | 'sign';

interface Para {
  id: string;
  text: string;
}

const DOC_PARAS: Para[] = [
  { id: 'c1', text: '1. Services. Snaarp provides the Client access to the Snaarp app suite, including PDF Reader, for the subscription term.' },
  { id: 'c2', text: '2. Fees. The Client agrees to the £1 / month introductory rate, billed monthly until cancelled.' },
  { id: 'c3', text: '3. Term. This Agreement begins on the effective date and renews automatically each calendar month.' },
  { id: 'c4', text: "4. Confidentiality. Each party will protect the other party's confidential information disclosed under this Agreement." },
];

const TOOL_HINTS: Record<Tool, string> = {
  highlight: 'Highlight tool — click a clause',
  comment: 'Comment tool — click a clause to add a note',
  draw: 'Draw tool — click a clause to underline',
  sign: 'Sign tool — click the signature field',
};

// Toolbar button style — ported 1:1 from the standalone bundle's tb(id) helper.
function toolButtonStyle(active: boolean) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '34px',
    height: '34px',
    borderRadius: '9px',
    cursor: 'pointer',
    transition: 'all .15s',
    fontFamily: 'inherit',
    border: `1px solid ${active ? '#DDD1F7' : '#F0EEF6'}`,
    background: active ? '#F5F3FF' : '#fff',
    color: active ? '#7C3AED' : '#8B85A0',
    boxShadow: active ? '0 4px 10px -6px rgba(124,58,237,.5)' : 'none',
  } as const;
}

export function PdfReaderHero() {
  const [tool, setTool] = useState<Tool>('highlight');
  const [highlighted, setHighlighted] = useState<Record<string, boolean>>({});
  const [underlined, setUnderlined] = useState<Record<string, boolean>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [openComment, setOpenComment] = useState<string | null>(null);
  const [signatureResetKey, setSignatureResetKey] = useState(0);

  function clickPara(id: string) {
    if (tool === 'highlight') {
      setHighlighted((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'draw') {
      setUnderlined((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'comment') {
      if (comments[id]) {
        setOpenComment((cur) => (cur === id ? null : id));
      } else {
        setComments((s) => ({ ...s, [id]: 'Confirmed — good to sign.' }));
        setOpenComment(id);
      }
    }
  }

  function togglePin(id: string) {
    setOpenComment((cur) => (cur === id ? null : id));
  }

  function removeComment(id: string) {
    setComments((s) => {
      const next = { ...s };
      delete next[id];
      return next;
    });
    setOpenComment((cur) => (cur === id ? null : cur));
  }

  function clearAll() {
    setTool('highlight');
    setHighlighted({});
    setUnderlined({});
    setComments({});
    setOpenComment(null);
    setSignatureResetKey((k) => k + 1);
  }

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }}></div>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.06fr)', gap: '60px', alignItems: 'center', position: 'relative' }}>
        <div data-pdf-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: '600', fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span>Secure &amp; Sign · PDF Reader
          </span>
          <h1 className="pdf-reader-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>One PDF Reader.<br /><span style={{ color: '#7C3AED' }}>Every signature, sorted.</span></h1>
          <p className="pdf-reader-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '498px' }}>View, mark up, and legally sign any PDF — without leaving the Stack. Open attachments straight from Mail, files from Work Drive, or drag one in. No install, no separate signing tool.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for <Price amount={1} />/month</a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: '500' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR compliant · No credit card required
          </div>
        </div>

        {/* HERO VISUAL: interactive PDF viewer */}
        <div data-pdf-reveal="" data-pdf-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(37,22,84,.35)' }}>
              {/* window bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FB7185' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FBBF24' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#34D399' }}></span>
                <span style={{ marginLeft: '10px', fontSize: '12.5px', fontWeight: '600', color: '#8B85A0' }}>Service_Agreement.pdf</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '600', color: '#B4AEC6' }}>Page 3 / 4</span>
              </div>

              {/* interactive annotation toolbar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 14px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
                <button type="button" onClick={() => setTool('highlight')} title="Highlight" style={toolButtonStyle(tool === 'highlight')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                </button>
                <button type="button" onClick={() => setTool('comment')} title="Comment" style={toolButtonStyle(tool === 'comment')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>
                <button type="button" onClick={() => setTool('draw')} title="Draw / underline" style={toolButtonStyle(tool === 'draw')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                </button>
                <button type="button" onClick={() => setTool('sign')} title="Sign" style={toolButtonStyle(tool === 'sign')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></path><path d="M4 15s2-3 5-3 4 2 6 1 3-4 5-4"></path></svg>
                </button>
                <span style={{ marginLeft: 'auto', fontSize: '10.5px', color: '#8B85A0', fontWeight: '500', textAlign: 'right', maxWidth: '200px' }}>{TOOL_HINTS[tool]}</span>
              </div>

              {/* document body + action footer share one signature-flow state machine */}
              <SignatureFlowProvider resetKey={signatureResetKey}>
              <div style={{ padding: '22px 26px 18px', background: '#fff' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '.03em', color: '#211C36' }}>SERVICE AGREEMENT</div>
                <div style={{ fontSize: '9.5px', color: '#B4AEC6', marginTop: '3px', letterSpacing: '.02em' }}>Effective 1 July 2026 · Snaarp Ltd &amp; Client</div>

                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {DOC_PARAS.map((p) => {
                    const hi = !!highlighted[p.id];
                    const un = !!underlined[p.id];
                    const hasCom = !!comments[p.id];
                    const open = openComment === p.id;
                    return (
                      <div key={p.id} style={{ padding: '1px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <p
                            onClick={() => clickPara(p.id)}
                            className={`pdf-reader-para${hi ? ' is-hi' : ''}${un ? ' is-underlined' : ''}`}
                            style={{ flex: 1, margin: 0, fontSize: '11.5px', lineHeight: 1.55, color: '#3B3550', padding: '4px 8px', borderRadius: '6px', transition: 'background .15s', cursor: tool === 'sign' ? 'default' : 'pointer' }}
                          >
                            {p.text}
                          </p>
                          {hasCom && (
                            <button
                              type="button"
                              onClick={() => togglePin(p.id)}
                              style={{ flexShrink: 0, width: '22px', height: '22px', marginTop: '2px', borderRadius: '50% 50% 50% 3px', border: 'none', cursor: 'pointer', background: open ? '#B45309' : '#FBBF24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 12px -5px rgba(180,83,9,.55)' }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </button>
                          )}
                        </div>
                        {open && (
                          <div style={{ margin: '5px 0 7px 8px', background: '#fff', border: '1px solid #EDEBF2', borderRadius: '11px', boxShadow: '0 12px 26px -14px rgba(37,22,84,.3)', padding: '10px 12px', maxWidth: '300px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                              <span style={{ width: '19px', height: '19px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>You</span>
                              <span style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>You</span>
                              <span style={{ fontSize: '8.5px', color: '#B4AEC6' }}>just now</span>
                              <button type="button" onClick={() => removeComment(p.id)} title="Delete comment" style={{ marginLeft: 'auto', border: 'none', background: 'none', cursor: 'pointer', color: '#B4AEC6', fontSize: '15px', lineHeight: 1, padding: '0 2px', fontFamily: 'inherit' }}>×</button>
                            </div>
                            <p style={{ margin: '7px 0 0', fontSize: '10.5px', lineHeight: 1.45, color: '#5B5670' }}>{comments[p.id]}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <SignatureFlowFields />
              </div>

              {/* action footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderTop: '1px solid #F0EEF6', background: '#FBFAFE', position: 'relative' }}>
                <SignatureFlowStatus />
                <span style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                  <button type="button" onClick={clearAll} style={{ padding: '8px 15px', borderRadius: '999px', border: '1px solid #E4DFF2', background: '#fff', color: '#5B5670', fontSize: '12px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>Clear</button>
                  <SignatureFlowButton />
                </span>
              </div>
              </SignatureFlowProvider>
            </div>
          </div>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
