'use client';

import { useState } from 'react';
import { DocsRevealSection } from './DocsRevealSection';
import { Price } from '@/components/currency/Price';

type Tool = 'bold' | 'italic' | 'underline' | 'highlight' | 'comment';

interface Para {
  id: string;
  text: string;
}

interface Comment {
  author: string;
  initials: string;
  text: string;
  mine: boolean;
}

const DOC_PARAS: Para[] = [
  { id: 'p1', text: 'Goal — get the whole team in one room for two days of planning, workshops, and a proper social.' },
  { id: 'p2', text: "Dates — we're looking at the week of 15 September. Add any conflicts in the table below." },
  { id: 'p3', text: 'Budget — £6,000 all-in: travel, venue, and meals for everyone attending.' },
];

const TOOL_HINTS: Record<Tool, string> = {
  bold: 'Bold tool — click a line',
  italic: 'Italic tool — click a line',
  underline: 'Underline tool — click a line',
  highlight: 'Highlight tool — click a line',
  comment: 'Comment tool — click a line to add a note',
};

// Toolbar button style — ported 1:1 from the standalone bundle's tb(id) helper.
function toolButtonStyle(active: boolean) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
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

export function DocsHero() {
  const [tool, setTool] = useState<Tool>('bold');
  const [bold, setBold] = useState<Record<string, boolean>>({});
  const [ital, setItal] = useState<Record<string, boolean>>({});
  const [und, setUnd] = useState<Record<string, boolean>>({});
  const [hi, setHi] = useState<Record<string, boolean>>({ p2: true });
  const [comments, setComments] = useState<Record<string, Comment>>({
    p2: { author: 'Ade S.', initials: 'AS', text: 'Can we do the week of the 22nd instead? The 15th clashes with the client launch.', mine: false },
  });
  const [openComment, setOpenComment] = useState<string | null>('p2');

  function clickPara(id: string) {
    if (tool === 'bold') {
      setBold((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'italic') {
      setItal((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'underline') {
      setUnd((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'highlight') {
      setHi((s) => ({ ...s, [id]: !s[id] }));
    } else if (tool === 'comment') {
      if (comments[id]) {
        setOpenComment((cur) => (cur === id ? null : id));
      } else {
        setComments((s) => ({ ...s, [id]: { author: 'You', initials: 'You', text: 'Looks good to me — happy to lock this in.', mine: true } }));
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

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }}></div>
      <DocsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.08fr)', gap: '60px', alignItems: 'center', position: 'relative' }}>
        <div data-docs-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: '600', fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span>Create &amp; Store · Document
          </span>
          <h1 className="docs-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Write together.<br /><span style={{ color: '#7C3AED' }}>See it happen live.</span></h1>
          <p className="docs-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '498px' }}>Real-time collaborative docs that live right next to everything else your team uses. No exporting, no emailing versions back and forth — just open a doc and start writing, together.</p>
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

        {/* HERO VISUAL: live collaborative document editor */}
        <div data-docs-reveal="" data-docs-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', transform: 'rotate(0deg)' }}>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 30px 60px -24px rgba(37,22,84,.22), 0 10px 24px -12px rgba(37,22,84,.12)' }}>
              {/* window bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FB7185' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FBBF24' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#34D399' }}></span>
                <span style={{ marginLeft: '10px', fontSize: '12.5px', fontWeight: '600', color: '#8B85A0' }}>Q3_Team_Offsite.docx</span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* presence */}
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>You</span>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-7px' }}>AS</span>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-7px' }}>MK</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: '600', color: '#0E9384' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', animation: 'docs-live-pulse 2.4s ease-out infinite' }}></span>Saved
                  </span>
                </span>
              </div>

              {/* interactive formatting toolbar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 14px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
                <button type="button" onClick={() => setTool('bold')} title="Bold" style={toolButtonStyle(tool === 'bold')}><span style={{ fontWeight: 800, fontSize: '13px', lineHeight: 1, fontFamily: 'Georgia,serif' }}>B</span></button>
                <button type="button" onClick={() => setTool('italic')} title="Italic" style={toolButtonStyle(tool === 'italic')}><span style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '13px', lineHeight: 1, fontFamily: 'Georgia,serif' }}>i</span></button>
                <button type="button" onClick={() => setTool('underline')} title="Underline" style={toolButtonStyle(tool === 'underline')}><span style={{ textDecoration: 'underline', fontWeight: 600, fontSize: '13px', lineHeight: 1, fontFamily: 'Georgia,serif' }}>U</span></button>
                <span style={{ width: '1px', height: '18px', background: '#EFEDF6', margin: '0 2px' }}></span>
                <button type="button" onClick={() => setTool('highlight')} title="Highlight" style={toolButtonStyle(tool === 'highlight')}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                </button>
                <button type="button" onClick={() => setTool('comment')} title="Comment" style={toolButtonStyle(tool === 'comment')}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>
                <span style={{ marginLeft: 'auto', fontSize: '10.5px', color: '#8B85A0', fontWeight: '500', textAlign: 'right', maxWidth: '180px' }}>{TOOL_HINTS[tool]}</span>
              </div>

              {/* document body */}
              <div style={{ position: 'relative', padding: '22px 26px 20px', background: '#fff' }}>
                {/* live collaborator cursors (ambient) */}
                <div style={{ position: 'absolute', left: '26px', top: '56px', zIndex: 6, pointerEvents: 'none', animation: 'docs-glide-a 10s ease-in-out infinite' }}>
                  <span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span>
                  <span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Ade</span>
                </div>
                <div style={{ position: 'absolute', left: '26px', top: '56px', zIndex: 6, pointerEvents: 'none', animation: 'docs-glide-b 12.5s ease-in-out infinite' }}>
                  <span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span>
                  <span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Mia</span>
                </div>

                <div style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '-.01em', color: '#211C36' }}>Q3 Team Offsite</div>
                <div style={{ fontSize: '9.5px', color: '#B4AEC6', marginTop: '3px', letterSpacing: '.02em' }}>Draft · owned by you · shared with 4</div>

                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {DOC_PARAS.map((p) => {
                    const b = !!bold[p.id];
                    const it = !!ital[p.id];
                    const u = !!und[p.id];
                    const h = !!hi[p.id];
                    const c = comments[p.id];
                    const open = openComment === p.id;
                    return (
                      <div key={p.id} style={{ padding: '1px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <p
                            onClick={() => clickPara(p.id)}
                            className={`docs-para${h ? ' is-hi' : ''}`}
                            style={{
                              flex: 1,
                              margin: 0,
                              fontSize: '11.5px',
                              lineHeight: 1.6,
                              color: '#3B3550',
                              padding: '4px 8px',
                              borderRadius: '6px',
                              transition: 'background .15s',
                              fontWeight: b ? 700 : 400,
                              fontStyle: it ? 'italic' : 'normal',
                              textDecoration: u ? 'underline' : 'none',
                              textDecorationColor: u ? '#7C3AED' : undefined,
                              textDecorationThickness: u ? '2px' : undefined,
                              textUnderlineOffset: u ? '3px' : undefined,
                              cursor: 'pointer',
                            }}
                          >
                            {p.text}
                          </p>
                          {c && (
                            <button
                              type="button"
                              onClick={() => togglePin(p.id)}
                              style={{ flexShrink: 0, width: '22px', height: '22px', marginTop: '2px', borderRadius: '50% 50% 50% 3px', border: 'none', cursor: 'pointer', background: open ? '#B45309' : (c.mine ? '#FBBF24' : '#0E9384'), color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 12px -5px rgba(37,22,84,.4)' }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </button>
                          )}
                        </div>
                        {open && c && (
                          <div style={{ margin: '5px 0 7px 8px', background: '#fff', border: '1px solid #EDEBF2', borderRadius: '11px', boxShadow: '0 12px 26px -14px rgba(37,22,84,.3)', padding: '10px 12px', maxWidth: '300px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                              <span style={{ width: '19px', height: '19px', borderRadius: '50%', fontSize: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.mine ? '#EDE9FE' : '#D5F5EF', color: c.mine ? '#7C3AED' : '#0E9384' }}>{c.initials}</span>
                              <span style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>{c.author}</span>
                              <span style={{ fontSize: '8.5px', color: '#B4AEC6' }}>just now</span>
                              <button type="button" onClick={() => removeComment(p.id)} title="Delete comment" style={{ marginLeft: 'auto', border: 'none', background: 'none', cursor: 'pointer', color: '#B4AEC6', fontSize: '15px', lineHeight: 1, padding: '0 2px', fontFamily: 'inherit' }}>×</button>
                            </div>
                            <p style={{ margin: '7px 0 0', fontSize: '10.5px', lineHeight: 1.45, color: '#5B5670' }}>{c.text}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* compact availability table */}
                <div style={{ marginTop: '14px', border: '1px solid #EFEDF6', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr .7fr 1.1fr', background: '#FBFAFE', borderBottom: '1px solid #F0EEF6' }}>
                    <span style={{ padding: '7px 12px', fontSize: '9.5px', fontWeight: '700', letterSpacing: '.05em', color: '#8B85A0', textTransform: 'uppercase' }}>Person</span>
                    <span style={{ padding: '7px 8px', fontSize: '9.5px', fontWeight: '700', letterSpacing: '.05em', color: '#8B85A0', textTransform: 'uppercase' }}>Free</span>
                    <span style={{ padding: '7px 8px', fontSize: '9.5px', fontWeight: '700', letterSpacing: '.05em', color: '#8B85A0', textTransform: 'uppercase' }}>Note</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr .7fr 1.1fr', borderBottom: '1px solid #F4F2FA' }}><span style={{ padding: '7px 12px', fontSize: '10.5px', color: '#3B3550' }}>You</span><span style={{ padding: '7px 8px', color: '#14B8A6', fontSize: '11px' }}>✓</span><span style={{ padding: '7px 8px', fontSize: '10px', color: '#B4AEC6' }}>—</span></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr .7fr 1.1fr', borderBottom: '1px solid #F4F2FA' }}><span style={{ padding: '7px 12px', fontSize: '10.5px', color: '#3B3550' }}>Ade S.</span><span style={{ padding: '7px 8px', color: '#14B8A6', fontSize: '11px' }}>✓</span><span style={{ padding: '7px 8px', fontSize: '10px', color: '#B4AEC6' }}>—</span></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr .7fr 1.1fr' }}><span style={{ padding: '7px 12px', fontSize: '10.5px', color: '#3B3550' }}>Mia K.</span><span style={{ padding: '7px 8px', color: '#F43F7D', fontSize: '11px' }}>✗</span><span style={{ padding: '7px 8px', fontSize: '10px', color: '#8B85A0' }}>Prefers 22nd</span></div>
                </div>

                {/* live typing line */}
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9BEEE', flexShrink: 0 }}></span>
                  <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', animation: 'docs-type-in 8.5s steps(28,end) infinite' }}>
                    <span style={{ fontSize: '11px', color: '#3B3550' }}>Coffee tasting on the second afternoon</span>
                  </div>
                  <span style={{ width: '1.5px', height: '13px', background: '#7C3AED', flexShrink: 0, animation: 'docs-caret-blink 1s steps(1) infinite' }}></span>
                  <span style={{ fontSize: '9px', color: '#B4AEC6', marginLeft: '2px' }}>Mia is typing…</span>
                </div>
              </div>
            </div>
            {/* floating side badge */}
            <div style={{ position: 'absolute', bottom: '-16px', left: '-18px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'docs-floaty 5.5s ease-in-out infinite' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></span>
              <div style={{ lineHeight: 1.2 }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#1B1730' }}>All changes saved</div><div style={{ fontSize: '9px', color: '#8B85A0' }}>to Work Drive · just now</div></div>
            </div>
          </div>
        </div>
      </DocsRevealSection>
    </section>
  );
}
