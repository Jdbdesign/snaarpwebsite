'use client';

import { Star, Settings, HelpCircle, Undo2, Redo2, Printer, PaintBucket, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronDown, Plus, Calendar } from 'lucide-react';

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const HEADER_ROW = ['Category', 'Budgeted', 'Spent', 'Remaining', 'Status', '', '', ''];

const DATA_ROWS = [
  { cells: ['Marketing', '\u00a312,000', '\u00a38,400', '\u00a33,600', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Product Dev', '\u00a325,000', '\u00a324,100', '\u00a3900', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Operations', '\u00a39,500', '\u00a36,200', '\u00a33,300', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Sales', '\u00a315,000', '\u00a315,800', '-\u00a3800', ''], status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['HR', '\u00a37,000', '\u00a33,100', '\u00a33,900', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Legal', '\u00a34,500', '\u00a32,800', '\u00a31,700', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Engineering', '\u00a318,000', '\u00a316,500', '\u00a31,500', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Design', '\u00a38,000', '\u00a35,200', '\u00a32,800', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Customer Support', '\u00a36,000', '\u00a36,400', '-\u00a3400', ''], status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['Infrastructure', '\u00a311,000', '\u00a39,800', '\u00a31,200', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Training', '\u00a33,500', '\u00a32,100', '\u00a31,400', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['R&D', '\u00a320,000', '\u00a319,600', '\u00a3400', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Facilities', '\u00a35,200', '\u00a34,100', '\u00a31,100', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Security', '\u00a39,000', '\u00a37,300', '\u00a31,700', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Partnerships', '\u00a34,000', '\u00a34,600', '-\u00a3600', ''], status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['Content', '\u00a36,500', '\u00a34,800', '\u00a31,700', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Events', '\u00a38,500', '\u00a37,900', '\u00a3600', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Analytics', '\u00a33,000', '\u00a32,400', '\u00a3600', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
];

const SHEET_TABS = [
  { label: 'Budget', active: true },
  { label: 'Revenue', active: false },
  { label: 'Forecast', active: false },
];

export function SheetPreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden' }}>
      {/* Main spreadsheet area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Row 1 — Title bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Budget Tracker</span>
          <Star size={13} style={{ color: '#ccc' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Row 2 — Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '4px 10px', borderBottom: '1px solid #f0f0f0', color: '#777' }}>
          <Undo2 size={12} />
          <Redo2 size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <Printer size={12} />
          <PaintBucket size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '1px 5px', borderRadius: '3px', border: '1px solid #e8e8e8', fontSize: '9px', color: '#555' }}>
            <span>10</span>
            <ChevronDown size={8} />
          </div>
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <Bold size={12} />
          <Italic size={12} />
          <Underline size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#1a1a1a', border: '1px solid #ccc' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#fff', border: '1px solid #ccc' }} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <AlignLeft size={12} />
          <AlignCenter size={12} />
          <AlignRight size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#555' }}>$</span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#555' }}>%</span>
        </div>

        {/* Row 3 — Formula bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ padding: '2px 6px', background: '#f5f5f5', borderRadius: '3px', fontSize: '9px', fontWeight: 600, color: '#555', border: '1px solid #e8e8e8' }}>B4</div>
          <div style={{ flex: 1, padding: '2px 8px', background: '#f9f9f9', borderRadius: '3px', fontSize: '9.5px', color: '#555', border: '1px solid #e8e8e8' }}>
            <span style={{ color: '#888' }}>fx</span> =SUM(B2:B3)
          </div>
        </div>

        {/* Spreadsheet grid */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* Column headers */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0' }}>
            {/* Row number corner */}
            <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '4px 2px', textAlign: 'center' }} />
            {COLUMNS.map((col) => (
              <div key={col} style={{ flex: 1, background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '4px 4px', textAlign: 'center', fontSize: '9px', fontWeight: 600, color: '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                {col}
              </div>
            ))}
          </div>

          {/* Header row (row 1) */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', background: '#F3EFFF' }}>
            <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px', textAlign: 'center', fontSize: '9px', color: '#888' }}>1</div>
            {HEADER_ROW.map((cell, ci) => (
              <div key={ci} style={{ flex: 1, borderRight: '1px solid #e8e8e8', padding: '5px 6px', fontSize: '9px', fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {cell}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {DATA_ROWS.map((row, ri) => {
            const rowNum = ri + 2;
            const isSelected = rowNum === 4; // B4 selected
            return (
              <div key={ri} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px', textAlign: 'center', fontSize: '9px', color: '#888' }}>{rowNum}</div>
                {COLUMNS.map((col, ci) => {
                  const isSelectedCell = isSelected && ci === 1; // B4
                  const isNumeric = ci >= 1 && ci <= 3;
                  const cellValue = ci < row.cells.length ? row.cells[ci] : '';
                  const isStatusCol = ci === 4;

                  return (
                    <div key={ci} style={{
                      flex: 1,
                      borderRight: '1px solid #e8e8e8',
                      padding: '5px 6px',
                      fontSize: '9.5px',
                      color: cellValue.startsWith('-') ? '#E11D48' : '#333',
                      fontWeight: ci === 0 ? 500 : 400,
                      textAlign: isNumeric ? 'right' : 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      position: 'relative',
                      outline: isSelectedCell ? '2px solid #7C3AED' : 'none',
                      outlineOffset: '-1px',
                      borderRadius: isSelectedCell ? '1px' : '0',
                    }}>
                      {isStatusCol && row.status ? (
                        <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '1px 5px', borderRadius: '8px', background: row.statusBg, color: row.statusColor, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{row.status}</span>
                      ) : (
                        cellValue
                      )}
                      {isSelectedCell && (
                        <>
                          <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '5px', height: '5px', background: '#7C3AED', borderRadius: '1px' }} />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Sheet tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', borderTop: '1px solid #e8e8e8', background: '#f9f9f9', padding: '0 8px' }}>
          {SHEET_TABS.map((tab) => (
            <div key={tab.label} style={{ padding: '6px 14px', fontSize: '9.5px', fontWeight: tab.active ? 700 : 400, color: tab.active ? '#7C3AED' : '#888', borderBottom: tab.active ? '2px solid #7C3AED' : '2px solid transparent', background: tab.active ? '#fff' : 'transparent', borderRadius: '0' }}>
              {tab.label}
            </div>
          ))}
          <div style={{ padding: '6px 10px', color: '#aaa', fontSize: '12px' }}>
            <Plus size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
