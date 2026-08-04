'use client';

import { useState, useEffect, useRef } from 'react';

const STAGES = [
  { label: 'Legal Review', initials: 'LR', color: '#7C3AED', bg: '#F5F3FF' },
  { label: 'Finance', initials: 'FN', color: '#0E9384', bg: '#ECFDF9' },
  { label: 'CEO Sign-off', initials: 'CE', color: '#E11D74', bg: '#FEF0F5' },
];

type Status = 'pending' | 'active' | 'approved';

export function InteractiveApprovalDemo() {
  const [statuses, setStatuses] = useState<Status[]>(['pending', 'pending', 'pending']);
  const [showDoc, setShowDoc] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShowDoc(true);
      setStatuses(['approved', 'approved', 'approved']);
      return;
    }

    function runCycle() {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setShowDoc(false);
      setStatuses(['pending', 'pending', 'pending']);

      timers.current.push(setTimeout(() => setShowDoc(true), 400));
      timers.current.push(setTimeout(() => setStatuses(['active', 'pending', 'pending']), 1200));
      timers.current.push(setTimeout(() => setStatuses(['approved', 'pending', 'pending']), 2400));
      timers.current.push(setTimeout(() => setStatuses(['approved', 'active', 'pending']), 3200));
      timers.current.push(setTimeout(() => setStatuses(['approved', 'approved', 'pending']), 4400));
      timers.current.push(setTimeout(() => setStatuses(['approved', 'approved', 'active']), 5200));
      timers.current.push(setTimeout(() => setStatuses(['approved', 'approved', 'approved']), 6400));
      timers.current.push(setTimeout(runCycle, 9000));
    }

    runCycle();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const allApproved = statuses.every((s) => s === 'approved');

  return (
    <div className="doc-sign-demo">
      {/* Document card */}
      <div className={`doc-sign-demo-doc ${showDoc ? 'doc-sign-demo-doc--visible' : ''}`}>
        <div className="doc-sign-demo-doc-header">
          <span className="doc-sign-demo-doc-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          </span>
          <div>
            <div className="doc-sign-demo-doc-name">Vendor_Agreement_2026.pdf</div>
            <div className="doc-sign-demo-doc-meta">3 approvers · Created just now</div>
          </div>
        </div>
        <div className="doc-sign-demo-doc-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '10.5px', color: '#5B5670', lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>This Mutual Non-Disclosure Agreement is entered into as of the date last signed below, by and between the parties identified herein.</p>
            <p style={{ margin: 0 }}><span style={{ fontWeight: 600, color: '#1B1730' }}>1. Definition of Confidential Information.</span> For purposes of this Agreement, &quot;Confidential Information&quot; shall include all information disclosed...</p>
            <p style={{ margin: 0, color: '#8B85A0' }}><span style={{ fontWeight: 600, color: '#3B3550' }}>2. Obligations.</span> The Receiving Party agrees to hold and maintain the Confidential Information in strict confidence for the sole benefit of the Disclosing Party.</p>
          </div>
          <div className="doc-sign-demo-sig-area">
            <span className="doc-sign-demo-sig-label">Signature required</span>
            <div className="doc-sign-demo-sig-line" />
          </div>
        </div>
      </div>

      {/* Approval pipeline */}
      <div className="doc-sign-demo-pipeline">
        <div className="doc-sign-demo-pipeline-header">
          <span className="doc-sign-demo-pipeline-title">Approval Pipeline</span>
          <span className={`doc-sign-demo-pipeline-badge ${allApproved ? 'doc-sign-demo-pipeline-badge--done' : ''}`}>
            {allApproved ? 'Complete' : 'In Progress'}
          </span>
        </div>
        <div className="doc-sign-demo-stages">
          {STAGES.map((stage, i) => {
            const status = statuses[i];
            return (
              <div key={stage.label} className={`doc-sign-demo-stage doc-sign-demo-stage--${status}`}>
                <div className="doc-sign-demo-stage-left">
                  <span className="doc-sign-demo-stage-avatar" style={{ background: stage.bg, color: stage.color }}>
                    {status === 'approved' ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="5 13 10 18 19 7" /></svg>
                    ) : stage.initials}
                  </span>
                  <div>
                    <div className="doc-sign-demo-stage-name">{stage.label}</div>
                    <div className="doc-sign-demo-stage-status">
                      {status === 'pending' && 'Waiting'}
                      {status === 'active' && 'Reviewing...'}
                      {status === 'approved' && 'Approved'}
                    </div>
                  </div>
                </div>
                <span className={`doc-sign-demo-stage-dot doc-sign-demo-stage-dot--${status}`} />
                {i < STAGES.length - 1 && <div className="doc-sign-demo-connector" />}
              </div>
            );
          })}
        </div>
        {/* Progress bar */}
        <div className="doc-sign-demo-progress">
          <div className="doc-sign-demo-progress-bar" style={{ width: `${(statuses.filter(s => s === 'approved').length / 3) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
