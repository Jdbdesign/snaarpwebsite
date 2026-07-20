'use client';

import { useState } from 'react';
import { NotepadRevealSection } from './NotepadRevealSection';

interface Note {
  title: string;
  meta: string;
  stroke: string;
  bg: string;
  border: string;
}

const NOTES: Note[] = [
  { title: 'Weekend trip — packing', meta: 'Checklist · 3 items', stroke: '#0E9384', bg: '#ECFDF9', border: '#CDF5EE' },
  { title: 'Groceries', meta: 'Checklist · 6 items', stroke: '#B45309', bg: '#FEF6E7', border: '#FBEBC6' },
  { title: 'Q3 planning notes', meta: 'Edited yesterday', stroke: '#7C3AED', bg: '#F5F3FF', border: '#E6DEFA' },
  { title: 'Gift ideas for Mum', meta: 'Pinned', stroke: '#E11D74', bg: '#FFEFF2', border: '#FBD5DD' },
  { title: 'Standup · action items', meta: 'Edited 3 days ago', stroke: '#7C3AED', bg: '#F5F3FF', border: '#E6DEFA' },
  { title: 'Book recommendations', meta: 'Edited 1 week ago', stroke: '#0E9384', bg: '#ECFDF9', border: '#CDF5EE' },
  { title: 'Wifi & passwords', meta: 'Pinned', stroke: '#B45309', bg: '#FEF6E7', border: '#FBEBC6' },
];

// Live search-filter demo: onSearch/onClear, ported 1:1 from the standalone
// bundle's Component class (state = { query: '' }, renderVals().results).
export function NotepadAltSearch() {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filtered = q ? NOTES.filter((n) => n.title.toLowerCase().includes(q)) : NOTES;
  const hasQuery = query.length > 0;
  const noResults = q.length > 0 && filtered.length === 0;
  const resultLabel = `${filtered.length} ${filtered.length === 1 ? 'note' : 'notes'}`;

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-notepad-reveal="">
          <h2 className="notepad-row-heading" style={{ margin: 0, color: '#1B1730' }}>Never dig for a note again.</h2>
          <p className="notepad-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Search runs across every note&apos;s title and content, filtering as you type. Start typing in the demo to see it. </p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Search by title or content.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Results narrow with every character — no waiting, no menus.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Synced across every device.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>The note you saved on your phone is already on your laptop.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18"></path></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Archive without losing it.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Tuck old notes away — still searchable, never gone for good.</p></div>
            </div>
          </div>
        </div>
        {/* interactive search mock (right) */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ padding: '20px 22px' }}>
              {/* search input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '13px 16px', borderRadius: '13px', background: '#FBFAFE', border: `1.5px solid ${hasQuery ? '#C9BEEE' : '#EDEBF2'}`, transition: 'border-color .18s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your notes…"
                  style={{ flex: 1, minWidth: 0, border: 'none', background: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '14.5px', color: '#211C36' }}
                />
                {hasQuery && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    title="Clear"
                    style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', border: 'none', background: '#F1EFF7', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B85A0', fontFamily: 'inherit' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '14px', padding: '0 2px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: '600', letterSpacing: '.08em', textTransform: 'uppercase', color: '#A39EB4' }}>{resultLabel}</span>
                <span style={{ fontSize: '10.5px', color: '#B4AEC6' }}>Try &ldquo;trip&rdquo; or &ldquo;gift&rdquo;</span>
              </div>
              {/* results */}
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '214px' }}>
                {filtered.map((n) => (
                  <div key={n.title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 13px', borderRadius: '12px', background: '#fff', border: '1px solid #F0EEF6', transition: 'background .15s' }}>
                    <span style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: n.bg, border: `1px solid ${n.border}` }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={n.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#1B1730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.title}</div>
                      <div style={{ fontSize: '11px', color: '#8B85A0' }}>{n.meta}</div>
                    </div>
                  </div>
                ))}
                {noResults && (
                  <div style={{ flex: 1, minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', textAlign: 'center' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #EDEBF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4BDD6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
                    <div style={{ fontSize: '13.5px', color: '#8B85A0', maxWidth: '220px' }}>No notes match &ldquo;{query}&rdquo; — but a new one&apos;s a tap away.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
