'use client';

import { useState, type ReactNode } from 'react';
import { SheetsRevealSection } from './SheetsRevealSection';
import { Price } from '@/components/currency/Price';

const FAQS: { q: ReactNode; a: ReactNode }[] = [
  { q: 'Can I connect a sheet directly to CRM data?', a: 'Yes — pull in a live CRM view without exporting or manually copying numbers.' },
  { q: 'Can multiple people edit a sheet at the same time?', a: 'Yes — edits and cursors sync in real time for everyone in the sheet.' },
  { q: 'Where are my sheets saved?', a: "Every sheet saves automatically to Work Drive, so it's backed up and easy to find." },
  { q: 'Can I import an existing spreadsheet?', a: 'Yes — import from CSV or most common spreadsheet formats.' },
  { q: <>Is Sheets included in the <Price amount={2} /> Starter plan?</>, a: 'Yes — included in every plan, no add-on required.' },
];

// Ported from the standalone bundle's Component class (state = { open: 0 }):
// a single-open accordion, first item open by default, clicking the open
// item closes it. Kept as manual state (not <details>) because that
// exclusive-open behavior doesn't match ContactsFAQ-style independent
// <details> accordions used elsewhere on the site.
export function SheetsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: "#F7F7F7", paddingTop: "92px", paddingBottom: "92px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div data-sheets-reveal="" style={{ textAlign: "center", marginBottom: "44px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: ".14em", color: "#7C3AED", textTransform: "uppercase" }}>Questions</span>
            <h2 className="sheets-faq-heading" style={{ margin: "12px 0 0", color: "#1B1730" }}>Sheets, answered.</h2>
          </div>
          <div data-sheets-reveal="" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQS.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: open ? "0 16px 34px -24px rgba(124,58,237,.3)" : "none",
                    transition: "border-color .2s, box-shadow .2s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                  >
                    <span className="sheets-faq-question" style={{ color: "#1B1730" }}>{item.q}</span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: open ? '#7C3AED' : '#F5F3FF',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background .2s",
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={open ? '#fff' : '#7C3AED'}
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transform: `rotate(${open ? 45 : 0}deg)`, transition: "transform .25s" }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div className="sheets-faq-answer" style={{ padding: "0 24px 22px", color: "#5B5670", maxWidth: "640px" }}>{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
