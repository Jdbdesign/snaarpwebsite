'use client';

import { useState } from 'react';
import { Price } from '@/components/currency/Price';
import { EsignatureRevealSection } from './EsignatureRevealSection';

const FAQS = [
  { q: 'Do the people I send a document to need a Snaarp account?', a: 'No — they receive a signing link by email and can sign without creating an account.' },
  { q: 'Can I route a document to multiple signers in a specific order?', a: 'Yes — set a signing order and each person is notified only once it’s their turn.' },
  { q: 'Can I reuse the same document without re-uploading it each time?', a: 'Yes — save it as a template and send a fresh copy in seconds.' },
  { q: null, a: 'Yes — included in every plan, no add-on required.' },
  { q: 'Are the signatures legally binding?', a: 'Yes — every signature is timestamped and logged with a tamper-evident audit trail.' },
];

export function EsignatureFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div data-esignature-reveal="" style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
            <h2 className="esignature-band-heading" style={{ margin: '12px 0 0', color: '#1B1730' }}>eSignature, answered.</h2>
          </div>
          <div data-esignature-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={item.a}
                  style={{
                    background: '#fff',
                    border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: open ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none',
                    transition: 'border-color .2s, box-shadow .2s',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>
                      {i === 3 ? <>Is eSignature included in the <Price amount={2} /> Starter plan?</> : item.q}
                    </span>
                    <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px', background: open ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${open ? 45 : 0}deg)`, transition: 'transform .25s' }}>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: '660px' }}>{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
