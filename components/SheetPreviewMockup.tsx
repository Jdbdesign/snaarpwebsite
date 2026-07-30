'use client';

import { useState, useEffect } from 'react';
import { Star, Settings, HelpCircle, Undo2, Redo2, Printer, PaintBucket, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronDown, Plus } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const COLUMNS = ['A', 'B', 'C', 'D', 'E'];
const HEADER_ROW = ['Category', 'Budgeted', 'Spent', 'Remaining', 'Status'];

type CellStyle = { bold?: boolean; italic?: boolean; underline?: boolean; fontSize?: number };
type RowData = { cells: string[]; status: string; statusColor: string; statusBg: string; styles?: Record<string, CellStyle> };

const BUDGET_DATA: RowData[] = [
  { cells: ['Marketing', '12000', '8400', '3600', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Product Dev', '25000', '24100', '900', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Operations', '9500', '6200', '3300', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Sales', '15000', '15800', '-800', ''], status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['HR', '7000', '3100', '3900', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Legal', '4500', '2800', '1700', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Engineering', '18000', '16500', '1500', ''], status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Design', '8000', '5200', '2800', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Customer Support', '6000', '6400', '-400', ''], status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['Infrastructure', '11000', '9800', '1200', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
];

const REVENUE_DATA: RowData[] = [
  { cells: ['Product Sales', '45000', '52000', '48000', ''], status: '+12%', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Subscriptions', '28000', '31000', '34000', ''], status: '+18%', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['Services', '15000', '14000', '16000', ''], status: '+5%', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['Partnerships', '8000', '9500', '7000', ''], status: '-12%', statusColor: '#E11D48', statusBg: '#FFF1F2' },
  { cells: ['Licensing', '5000', '5500', '6000', ''], status: '+10%', statusColor: '#22c55e', statusBg: '#ECFDF5' },
];
const REVENUE_HEADER = ['Source', 'Q1', 'Q2', 'Q3', 'Growth'];

const FORECAST_DATA: RowData[] = [
  { cells: ['April', '95000', '92000', '3000', ''], status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' },
  { cells: ['May', '98000', '0', '98000', ''], status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['June', '102000', '0', '102000', ''], status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['July', '105000', '0', '105000', ''], status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
  { cells: ['August', '110000', '0', '110000', ''], status: 'Pending', statusColor: '#F59E0B', statusBg: '#FFFBEB' },
];
const FORECAST_HEADER = ['Month', 'Projected', 'Actual', 'Variance', 'Status'];

const TABS = ['Budget', 'Revenue', 'Forecast'];

function computeStatus(remaining: number) {
  if (remaining < 0) return { status: 'Over Budget', statusColor: '#E11D48', statusBg: '#FFF1F2' };
  if (remaining < 1500) return { status: 'At Risk', statusColor: '#F59E0B', statusBg: '#FFFBEB' };
  return { status: 'On Track', statusColor: '#22c55e', statusBg: '#ECFDF5' };
}

export function SheetPreviewMockup() {
  const [activeTab, setActiveTab] = useState('Budget');
  const [budgetRows, setBudgetRows] = useState<RowData[]>(BUDGET_DATA);
  const [revenueRows] = useState<RowData[]>(REVENUE_DATA);
  const [forecastRows] = useState<RowData[]>(FORECAST_DATA);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number }>({ row: 1, col: 1 });
  const [editingCell, setEditingCell] = useState<{ row: number; col: number } | null>(null);
  const [editValue, setEditValue] = useState('');
  const [cellStyles, setCellStyles] = useState<Record<string, CellStyle>>({});
  const [showAddRow, setShowAddRow] = useState(true);
  const [showTabCoachmark, setShowTabCoachmark] = useState(false);
  const [showAddSheetCoachmark, setShowAddSheetCoachmark] = useState(false);
  const [fontSize, setFontSize] = useState(10);
  const [showFontDropdown, setShowFontDropdown] = useState(false);

  const rows = activeTab === 'Budget' ? budgetRows : activeTab === 'Revenue' ? revenueRows : forecastRows;
  const header = activeTab === 'Budget' ? HEADER_ROW : activeTab === 'Revenue' ? REVENUE_HEADER : FORECAST_HEADER;

  const cellRef = `${COLUMNS[selectedCell.col]}${selectedCell.row + 1}`;
  const cellContent = selectedCell.row === 0 ? header[selectedCell.col] : (rows[selectedCell.row - 1]?.cells[selectedCell.col] || '');

  function handleCellClick(row: number, col: number) {
    if (editingCell) commitEdit();
    setSelectedCell({ row, col });
  }

  function handleCellDoubleClick(row: number, col: number) {
    if (row === 0) return; // don't edit header
    setEditingCell({ row, col });
    setEditValue(rows[row - 1]?.cells[col] || '');
  }

  function commitEdit() {
    if (!editingCell || editingCell.row === 0) { setEditingCell(null); return; }
    if (activeTab === 'Budget') {
      const updated = [...budgetRows];
      const r = editingCell.row - 1;
      if (r >= 0 && r < updated.length) {
        updated[r] = { ...updated[r], cells: [...updated[r].cells] };
        updated[r].cells[editingCell.col] = editValue;
        // Recalculate Remaining (col 3) = Budgeted (col 1) - Spent (col 2)
        const budgeted = parseFloat(updated[r].cells[1]) || 0;
        const spent = parseFloat(updated[r].cells[2]) || 0;
        const remaining = budgeted - spent;
        updated[r].cells[3] = String(remaining);
        const st = computeStatus(remaining);
        updated[r].status = st.status;
        updated[r].statusColor = st.statusColor;
        updated[r].statusBg = st.statusBg;
        setBudgetRows(updated);
      }
    }
    setEditingCell(null);
  }

  function handleAddRow() {
    setShowAddRow(false);
    if (activeTab === 'Budget') {
      setBudgetRows([...budgetRows, { cells: ['', '', '', '', ''], status: '', statusColor: '', statusBg: '' }]);
    }
    setTimeout(() => setShowTabCoachmark(true), 500);
  }

  function toggleStyle(prop: keyof CellStyle) {
    const key = `${activeTab}-${selectedCell.row}-${selectedCell.col}`;
    const current = cellStyles[key] || {};
    setCellStyles({ ...cellStyles, [key]: { ...current, [prop]: !current[prop] } });
  }

  function getCellStyle(row: number, col: number): CellStyle {
    return cellStyles[`${activeTab}-${row}-${col}`] || {};
  }

  function handleTabSwitch(tab: string) {
    if (editingCell) commitEdit();
    setActiveTab(tab);
    setSelectedCell({ row: 1, col: 1 });
    setShowTabCoachmark(false);
    if (tab === 'Revenue') {
      setTimeout(() => setShowAddSheetCoachmark(true), 500);
    }
  }

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Title bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Budget Tracker</span>
          <Star size={13} style={{ color: '#ccc' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <HelpCircle size={14} /><Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '4px 10px', borderBottom: '1px solid #f0f0f0', color: '#777' }}>
          <Undo2 size={12} /><Redo2 size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <Printer size={12} /><PaintBucket size={12} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <div onClick={() => setShowFontDropdown(!showFontDropdown)} style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '1px 5px', borderRadius: '3px', border: '1px solid #e8e8e8', fontSize: '9px', color: '#555', cursor: 'pointer', position: 'relative' }}>
            <span>{fontSize}</span><ChevronDown size={8} />
            {showFontDropdown && (
              <div style={{ position: 'absolute', top: '18px', left: 0, background: '#fff', border: '1px solid #e8e8e8', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 100, padding: '4px 0' }}>
                {[8, 10, 12, 14].map(s => (
                  <div key={s} onClick={(e) => { e.stopPropagation(); setFontSize(s); setShowFontDropdown(false); const key = `${activeTab}-${selectedCell.row}-${selectedCell.col}`; setCellStyles({ ...cellStyles, [key]: { ...getCellStyle(selectedCell.row, selectedCell.col), fontSize: s } }); }} style={{ padding: '3px 12px', fontSize: '9px', cursor: 'pointer', background: fontSize === s ? '#f3efff' : '#fff', color: fontSize === s ? '#7C3AED' : '#555' }}>{s}</div>
                ))}
              </div>
            )}
          </div>
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <Bold size={12} onClick={() => toggleStyle('bold')} style={{ cursor: 'pointer', color: getCellStyle(selectedCell.row, selectedCell.col).bold ? '#7C3AED' : '#777' }} />
          <Italic size={12} onClick={() => toggleStyle('italic')} style={{ cursor: 'pointer', color: getCellStyle(selectedCell.row, selectedCell.col).italic ? '#7C3AED' : '#777' }} />
          <Underline size={12} onClick={() => toggleStyle('underline')} style={{ cursor: 'pointer', color: getCellStyle(selectedCell.row, selectedCell.col).underline ? '#7C3AED' : '#777' }} />
          <div style={{ width: '1px', height: '14px', background: '#e8e8e8', margin: '0 4px' }} />
          <AlignLeft size={12} /><AlignCenter size={12} /><AlignRight size={12} />
        </div>

        {/* Formula bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ padding: '2px 6px', background: '#f5f5f5', borderRadius: '3px', fontSize: '9px', fontWeight: 600, color: '#555', border: '1px solid #e8e8e8', minWidth: '28px', textAlign: 'center' }}>{cellRef}</div>
          <div style={{ flex: 1, padding: '2px 8px', background: '#f9f9f9', borderRadius: '3px', fontSize: '9.5px', color: '#555', border: '1px solid #e8e8e8' }}>
            <span style={{ color: '#888' }}>fx</span> {editingCell ? editValue : cellContent}
          </div>
        </div>

        {/* Grid */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {/* Column headers */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0' }}>
            <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '4px 2px' }} />
            {COLUMNS.map((col, ci) => (
              <div key={col} onClick={() => handleCellClick(0, ci)} style={{ flex: 1, background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '4px 4px', textAlign: 'center', fontSize: '9px', fontWeight: 600, color: '#888' }}>{col}</div>
            ))}
          </div>

          {/* Header row */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', background: '#F3EFFF' }}>
            <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px', textAlign: 'center', fontSize: '9px', color: '#888' }}>1</div>
            {header.map((cell, ci) => (
              <div key={ci} onClick={() => handleCellClick(0, ci)} style={{ flex: 1, borderRight: '1px solid #e8e8e8', padding: '5px 6px', fontSize: '9px', fontWeight: 700, color: '#1a1a1a', outline: selectedCell.row === 0 && selectedCell.col === ci ? '2px solid #7C3AED' : 'none', outlineOffset: '-1px', cursor: 'pointer' }}>{cell}</div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px', textAlign: 'center', fontSize: '9px', color: '#888' }}>{ri + 2}</div>
              {COLUMNS.map((col, ci) => {
                const isSelected = selectedCell.row === ri + 1 && selectedCell.col === ci;
                const isEditing = editingCell?.row === ri + 1 && editingCell?.col === ci;
                const isNumeric = ci >= 1 && ci <= 3;
                const isStatusCol = ci === 4;
                const style = getCellStyle(ri + 1, ci);
                const cellVal = row.cells[ci] || '';

                return (
                  <div key={ci} onClick={() => handleCellClick(ri + 1, ci)} onDoubleClick={() => handleCellDoubleClick(ri + 1, ci)} style={{
                    flex: 1, borderRight: '1px solid #e8e8e8', padding: '5px 6px', fontSize: `${style.fontSize || 9.5}px`,
                    color: cellVal.startsWith('-') ? '#E11D48' : '#333',
                    fontWeight: style.bold ? 700 : (ci === 0 ? 500 : 400),
                    fontStyle: style.italic ? 'italic' : 'normal',
                    textDecoration: style.underline ? 'underline' : 'none',
                    textAlign: isNumeric ? 'right' : 'left',
                    outline: isSelected ? '2px solid #7C3AED' : 'none', outlineOffset: '-1px',
                    position: 'relative', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {isEditing ? (
                      <input value={editValue} onChange={(e) => setEditValue(e.target.value)} onBlur={commitEdit} onKeyDown={(e) => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') setEditingCell(null); }} autoFocus style={{ width: '100%', border: 'none', outline: 'none', fontSize: 'inherit', fontWeight: 'inherit', textAlign: isNumeric ? 'right' : 'left', background: 'transparent', padding: 0 }} />
                    ) : isStatusCol && row.status ? (
                      <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '1px 5px', borderRadius: '8px', background: row.statusBg, color: row.statusColor, textTransform: 'uppercase' }}>{row.status}</span>
                    ) : (
                      isNumeric && cellVal ? `\u00a3${Number(cellVal).toLocaleString()}` : cellVal
                    )}
                    {isSelected && <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '5px', height: '5px', background: '#7C3AED', borderRadius: '1px' }} />}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Add row */}
          <div style={{ display: 'flex', borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
            <div onClick={handleAddRow} style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px', textAlign: 'center', fontSize: '12px', color: '#7C3AED', cursor: 'pointer', fontWeight: 700 }}>+</div>
            <div style={{ flex: 1, padding: '5px 6px', color: '#ccc', fontSize: '9px' }}>Add row...</div>
            <Coachmark visible={showAddRow && activeTab === 'Budget' && rows.length <= 10} title="Add a Row" subtitle="Track another item in your budget" onNext={handleAddRow} top="-60px" left="40px" arrowSide="left" arrowOffset="70px" />
          </div>

          {/* Empty rows */}
          {Array.from({ length: Math.max(0, 4 - (rows.length - 10)) }).map((_, i) => (
            <div key={i} style={{ display: 'flex', borderBottom: '1px solid #f5f5f5', flex: '0 0 auto' }}>
              <div style={{ width: '28px', minWidth: '28px', background: '#f9f9f9', borderRight: '1px solid #e8e8e8', padding: '5px 2px' }} />
              {COLUMNS.map((_, ci) => <div key={ci} style={{ flex: 1, borderRight: '1px solid #e8e8e8', padding: '5px 6px' }} />)}
            </div>
          ))}
        </div>

        {/* Sheet tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', borderTop: '1px solid #e8e8e8', background: '#f9f9f9', padding: '0 8px', position: 'relative' }}>
          {/* Tab switch coachmark */}
          <Coachmark visible={showTabCoachmark} title="Switch Sheets" subtitle="Click Revenue to view a different dataset" onNext={() => { setShowTabCoachmark(false); handleTabSwitch('Revenue'); }} top="-150px" left="50px" arrowSide="bottom" arrowOffset="60px" />
          {/* Add sheet coachmark */}
          <Coachmark visible={showAddSheetCoachmark} title="Add New Sheet" subtitle="Create a new sheet to organize your data" onNext={() => { setShowAddSheetCoachmark(false); }} top="-150px" left="170px" arrowSide="bottom" arrowOffset="40px" buttonLabel="End" />

          {TABS.map((tab) => (
            <div key={tab} onClick={() => handleTabSwitch(tab)} style={{ padding: '6px 14px', fontSize: '9.5px', fontWeight: activeTab === tab ? 700 : 400, color: activeTab === tab ? '#7C3AED' : '#888', borderBottom: activeTab === tab ? '2px solid #7C3AED' : '2px solid transparent', background: activeTab === tab ? '#fff' : 'transparent', cursor: 'pointer' }}>{tab}</div>
          ))}
          <div onClick={() => setShowAddSheetCoachmark(false)} style={{ padding: '6px 10px', color: '#aaa', fontSize: '12px', cursor: 'pointer' }}><Plus size={12} /></div>
        </div>
      </div>
    </div>
  );
}
