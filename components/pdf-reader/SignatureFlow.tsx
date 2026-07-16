'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

/**
 * Self-contained, multi-step "sign a document" demo: a compound-component
 * family (Provider + Fields + Status + Button) sharing one state machine via
 * context so the interactive fields (nested inside the document body) and
 * the footer status/button (a sibling further down the card) can both be
 * driven by the same flow without prop-drilling across that DOM split.
 *
 * Flow: idle -> signature-active (visitor draws on the signature canvas) ->
 * date-active (auto-advance or click, brief type-in) -> ready ("Apply
 * Signature") -> applying (lock-in flash) -> applied ("Send Document") ->
 * sending (spinner) -> sent (toast) -> resets to idle.
 *
 * If the visitor never engages, an idle timer plays a subtle "sign here"
 * hint, then plays a self-drawing demo signature and runs the whole
 * sequence so the hero still demonstrates the feature to passive visitors —
 * mirroring the ambient-loop pattern used by this site's other animated
 * hero demos (e.g. AnimatedDriveDemo). A real stroke at any point cancels
 * the idle timers and hands control back to the visitor.
 */

export type SignatureFlowStage = 'idle' | 'signature-active' | 'date-active' | 'ready' | 'applying' | 'applied' | 'sending' | 'sent';

interface FlowContextValue {
  stage: SignatureFlowStage;
  hasSignature: boolean;
  dateValue: string;
  showHint: boolean;
  toastVisible: boolean;
  demoDrawToken: number;
  canvasResetToken: number;
  activateSignature: () => void;
  setHasSignature: (value: boolean) => void;
  commitSignature: () => void;
  completeDemoSignature: () => void;
  activateDate: () => void;
  clickAction: () => void;
}

const SignatureFlowContext = createContext<FlowContextValue | null>(null);

function useSignatureFlowContext() {
  const ctx = useContext(SignatureFlowContext);
  if (!ctx) throw new Error('SignatureFlow subcomponents must be rendered inside a SignatureFlowProvider');
  return ctx;
}

// Same media-query hook shape as AnimatedDriveDemo's useReducedMotion() —
// kept local rather than shared, matching how each product page's animated
// demo owns its own copy.
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

function formatToday() {
  return new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

const IDLE_HINT_DELAY = 3500;
const IDLE_HINT_DURATION = 1100;
const IDLE_AUTO_DEMO_DELAY = 9000;
const DATE_AUTO_ADVANCE_DELAY = 900;
const DATE_TYPE_MS_PER_CHAR = 45;
const APPLY_LOCK_DURATION = 650;
const SEND_DURATION = 1000;
const TOAST_DURATION = 2400;
const POST_TOAST_RESET_DELAY = 400;
const AUTO_ADVANCE_DELAY = 900;

export function SignatureFlowProvider({ resetKey, children }: { resetKey?: number; children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<SignatureFlowStage>('idle');
  const [hasSignature, setHasSignatureState] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [idleLoopKey, setIdleLoopKey] = useState(0);
  const [demoDrawToken, setDemoDrawToken] = useState(0);
  const [canvasResetToken, setCanvasResetToken] = useState(0);

  const autoRef = useRef(false);
  const dateFillStartedRef = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  }, []);

  const resetAll = useCallback(() => {
    clearTimers();
    autoRef.current = false;
    dateFillStartedRef.current = false;
    setStage('idle');
    setHasSignatureState(false);
    setDateValue('');
    setShowHint(false);
    setToastVisible(false);
    setIdleLoopKey((k) => k + 1);
    setCanvasResetToken((k) => k + 1);
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // External reset trigger (the hero's "Clear" button) — skip on first mount
  // since state already starts idle.
  const skipFirstReset = useRef(true);
  useEffect(() => {
    if (skipFirstReset.current) {
      skipFirstReset.current = false;
      return;
    }
    resetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  const fillDate = useCallback(() => {
    if (dateFillStartedRef.current) return;
    dateFillStartedRef.current = true;
    const text = formatToday();
    if (reducedMotion) {
      setDateValue(text);
      setStage('ready');
      return;
    }
    let i = 0;
    const step = () => {
      i++;
      setDateValue(text.slice(0, i));
      if (i < text.length) {
        schedule(step, DATE_TYPE_MS_PER_CHAR);
      } else {
        schedule(() => setStage('ready'), 150);
      }
    };
    step();
  }, [reducedMotion, schedule]);

  const applySignature = useCallback(() => {
    setStage((s) => (s === 'ready' ? 'applying' : s));
  }, []);

  const sendDocument = useCallback(() => {
    setStage((s) => (s === 'applied' ? 'sending' : s));
  }, []);

  // Idle: ambient hint pulse, then (if still untouched) play a self-drawing
  // demo signature through the whole flow. Disabled under reduced motion so
  // a motion-sensitive visitor never sees an unprompted auto-play.
  useEffect(() => {
    if (stage !== 'idle' || reducedMotion) return;
    const hintOn = schedule(() => setShowHint(true), IDLE_HINT_DELAY);
    const hintOff = schedule(() => setShowHint(false), IDLE_HINT_DELAY + IDLE_HINT_DURATION);
    const autoDemo = schedule(() => {
      autoRef.current = true;
      setDemoDrawToken((k) => k + 1);
    }, IDLE_AUTO_DEMO_DELAY);
    return () => {
      clearTimeout(hintOn);
      clearTimeout(hintOff);
      clearTimeout(autoDemo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, idleLoopKey, reducedMotion]);

  useEffect(() => {
    if (stage === 'date-active') dateFillStartedRef.current = false;
  }, [stage]);

  // Date auto-advances if the visitor doesn't click it themselves — skipped
  // under reduced motion, which requires the explicit click instead.
  useEffect(() => {
    if (stage !== 'date-active' || reducedMotion) return;
    const id = schedule(() => fillDate(), DATE_AUTO_ADVANCE_DELAY);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, reducedMotion]);

  // Ambient auto-play keeps itself moving through the click-gated steps;
  // a real visitor reaching these stages waits for their own click.
  useEffect(() => {
    if (stage !== 'ready' || !autoRef.current) return;
    const id = schedule(() => applySignature(), AUTO_ADVANCE_DELAY);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  useEffect(() => {
    if (stage !== 'applied' || !autoRef.current) return;
    const id = schedule(() => sendDocument(), AUTO_ADVANCE_DELAY);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  useEffect(() => {
    if (stage !== 'applying') return;
    const id = schedule(() => setStage('applied'), reducedMotion ? 0 : APPLY_LOCK_DURATION);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, reducedMotion]);

  useEffect(() => {
    if (stage !== 'sending') return;
    const id = schedule(() => {
      setStage('sent');
      setToastVisible(true);
    }, reducedMotion ? 300 : SEND_DURATION);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, reducedMotion]);

  useEffect(() => {
    if (stage !== 'sent') return;
    const hideToast = schedule(() => setToastVisible(false), TOAST_DURATION);
    const doReset = schedule(() => resetAll(), TOAST_DURATION + POST_TOAST_RESET_DELAY);
    return () => {
      clearTimeout(hideToast);
      clearTimeout(doReset);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const activateSignature = useCallback(() => {
    if (stage !== 'idle') return;
    clearTimers();
    autoRef.current = false;
    setStage('signature-active');
  }, [stage, clearTimers]);

  const setHasSignature = useCallback((value: boolean) => {
    setHasSignatureState(value);
  }, []);

  const commitSignature = useCallback(() => {
    setStage((s) => {
      if (s !== 'signature-active') return s;
      return hasSignature ? 'date-active' : 'idle';
    });
  }, [hasSignature]);

  // Called by the canvas once its self-drawing demo stroke animation
  // finishes — mirrors what a real committed signature does (mark filled,
  // advance to the date field) but only after the visual has actually
  // finished drawing.
  const completeDemoSignature = useCallback(() => {
    setHasSignatureState(true);
    setStage('date-active');
  }, []);

  const activateDate = useCallback(() => {
    if (stage !== 'date-active') return;
    fillDate();
  }, [stage, fillDate]);

  const clickAction = useCallback(() => {
    if (stage === 'ready') applySignature();
    else if (stage === 'applied') sendDocument();
  }, [stage, applySignature, sendDocument]);

  return (
    <SignatureFlowContext.Provider
      value={{
        stage,
        hasSignature,
        dateValue,
        showHint,
        toastVisible,
        demoDrawToken,
        canvasResetToken,
        activateSignature,
        setHasSignature,
        commitSignature,
        completeDemoSignature,
        activateDate,
        clickAction,
      }}
    >
      {children}
    </SignatureFlowContext.Provider>
  );
}

const FIELD_LABEL_STYLE = { fontSize: '10px', fontWeight: '600', letterSpacing: '.06em', color: '#8B85A0', textTransform: 'uppercase' } as const;

function CheckBadge() {
  return (
    <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-tick-pop .5s ease-out' }}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
    </span>
  );
}

const INK_COLOR = '#211C36';
const LINE_WIDTH = 2.3;

interface Point {
  x: number;
  y: number;
}

// Normalised (0..1) demo signature path, rescaled to the canvas's current
// size at play time — same silhouette as the site's other ghost-signature
// strokes (e.g. PdfReaderAltSigning), just played once instead of looping.
const DEMO_PATH: [number, number][] = [
  [0.05, 0.66], [0.08, 0.34], [0.11, 0.6], [0.13, 0.78], [0.16, 0.46], [0.18, 0.22],
  [0.21, 0.5], [0.24, 0.72], [0.27, 0.4], [0.3, 0.28], [0.34, 0.58], [0.39, 0.68],
  [0.44, 0.3], [0.49, 0.44], [0.54, 0.64], [0.59, 0.36], [0.64, 0.26], [0.69, 0.5],
  [0.74, 0.62], [0.79, 0.34], [0.84, 0.42], [0.89, 0.6], [0.94, 0.38],
];

interface SignatureCanvasProps {
  stage: SignatureFlowStage;
  hasSignature: boolean;
  showHint: boolean;
  demoDrawToken: number;
  canvasResetToken: number;
  onActivate: () => void;
  onHasSignatureChange: (value: boolean) => void;
  onCommit: () => void;
  onDemoDrawComplete: () => void;
}

function SignatureCanvas({ stage, hasSignature, showHint, demoDrawToken, canvasResetToken, onActivate, onHasSignatureChange, onCommit, onDemoDrawComplete }: SignatureCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx2dRef = useRef<CanvasRenderingContext2D | null>(null);
  const strokesRef = useRef<Point[][]>([]);
  const currentStrokeRef = useRef<Point[] | null>(null);
  const isDrawingRef = useRef(false);
  const canDraw = stage === 'idle' || stage === 'signature-active';

  const applyStrokeStyle = useCallback(() => {
    const c = ctx2dRef.current;
    if (!c) return;
    c.strokeStyle = INK_COLOR;
    c.lineWidth = LINE_WIDTH;
    c.lineCap = 'round';
    c.lineJoin = 'round';
  }, []);

  const drawStroke = useCallback((points: Point[]) => {
    const c = ctx2dRef.current;
    if (!c || points.length === 0) return;
    applyStrokeStyle();
    if (points.length === 1) {
      // A tap with no movement still leaves an ink dot.
      c.beginPath();
      c.arc(points[0].x, points[0].y, LINE_WIDTH / 2, 0, Math.PI * 2);
      c.fillStyle = INK_COLOR;
      c.fill();
      return;
    }
    c.beginPath();
    c.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) c.lineTo(points[i].x, points[i].y);
    c.stroke();
  }, [applyStrokeStyle]);

  const redrawAll = useCallback(() => {
    const c = ctx2dRef.current;
    const wrapper = wrapperRef.current;
    if (!c || !wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    c.clearRect(0, 0, rect.width, rect.height);
    for (const stroke of strokesRef.current) drawStroke(stroke);
  }, [drawStroke]);

  // Size the canvas backing store to the wrapper's current CSS size (scaled
  // for device pixel ratio) and redraw, so strokes stay crisp and correctly
  // placed if the card ever reflows (e.g. viewport resize).
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    ctx2dRef.current = context;

    function resize() {
      const rect = wrapper!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = Math.max(1, Math.round(rect.width * dpr));
      canvas!.height = Math.max(1, Math.round(rect.height * dpr));
      context!.setTransform(dpr, 0, 0, dpr, 0, 0);
      redrawAll();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);
    resize();
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearCanvas = useCallback(() => {
    strokesRef.current = [];
    currentStrokeRef.current = null;
    isDrawingRef.current = false;
    redrawAll();
  }, [redrawAll]);

  // Clear button / auto-reset after the toast — bumped by the provider.
  const lastResetToken = useRef(canvasResetToken);
  useEffect(() => {
    if (canvasResetToken === lastResetToken.current) return;
    lastResetToken.current = canvasResetToken;
    clearCanvas();
  }, [canvasResetToken, clearCanvas]);

  // Ambient demo signature — plays a self-drawing stroke, then hands back
  // to the provider to advance the stage once the ink has "finished".
  const lastDemoToken = useRef(demoDrawToken);
  useEffect(() => {
    if (demoDrawToken === lastDemoToken.current) return;
    lastDemoToken.current = demoDrawToken;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const path = DEMO_PATH.map(([nx, ny]) => ({ x: nx * rect.width, y: ny * rect.height }));

    let i = 1;
    const frame = () => {
      redrawAll();
      drawStroke(path.slice(0, i));
      i++;
      if (i <= path.length) {
        setTimeout(() => requestAnimationFrame(frame), 16);
      } else {
        strokesRef.current.push(path);
        onHasSignatureChange(true);
        setTimeout(onDemoDrawComplete, 150);
      }
    };
    frame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demoDrawToken]);

  function pointFromEvent(e: React.PointerEvent<HTMLCanvasElement>): Point {
    const rect = wrapperRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!canDraw) return;
    if (stage === 'idle') onActivate();
    e.currentTarget.setPointerCapture(e.pointerId);
    wrapperRef.current?.focus();
    const pt = pointFromEvent(e);
    currentStrokeRef.current = [pt];
    isDrawingRef.current = true;
    if (!hasSignature) onHasSignatureChange(true);
    drawStroke([pt]);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawingRef.current || !currentStrokeRef.current) return;
    const pt = pointFromEvent(e);
    const pts = currentStrokeRef.current;
    const prev = pts[pts.length - 1];
    pts.push(pt);
    const c = ctx2dRef.current;
    if (c) {
      applyStrokeStyle();
      c.beginPath();
      c.moveTo(prev.x, prev.y);
      c.lineTo(pt.x, pt.y);
      c.stroke();
    }
  }

  function endStroke() {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    if (currentStrokeRef.current && currentStrokeRef.current.length) {
      strokesRef.current.push(currentStrokeRef.current);
    }
    currentStrokeRef.current = null;
  }

  return (
    <div
      ref={wrapperRef}
      tabIndex={canDraw ? 0 : -1}
      onBlur={onCommit}
      style={{ position: 'absolute', inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="pdf-reader-sig-canvas"
        style={{ cursor: canDraw ? 'crosshair' : 'default' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endStroke}
        onPointerCancel={endStroke}
        onPointerLeave={(e) => {
          // Only end the stroke on leave if we don't have pointer capture
          // (e.g. stylus hover-out); captured drags keep receiving events.
          if (!isDrawingRef.current) return;
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) endStroke();
        }}
        aria-label="Draw your signature"
        role="img"
      />
      {!hasSignature && (
        <div className="pdf-reader-sig-placeholder">
          <span className="pdf-reader-sig-baseline" aria-hidden="true"></span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A99FC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
          Draw your signature
        </div>
      )}
      {!hasSignature && showHint && (
        <svg className="pdf-reader-sig-hint-svg" viewBox="0 0 150 44" fill="none" aria-hidden="true">
          <path d="M8 30 C 12 12, 20 10, 22 26 C 23 34, 28 34, 31 20 C 33 10, 39 12, 40 28 C 45 18, 50 8, 56 22 C 60 32, 66 20, 70 14 C 78 6, 86 22, 96 18 C 106 14, 112 26, 120 18 C 128 12, 136 22, 144 16" stroke="#C9BEEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="300"></path>
        </svg>
      )}
    </div>
  );
}

export function SignatureFlowFields() {
  const ctx = useSignatureFlowContext();

  const locked = ctx.stage === 'applying' || ctx.stage === 'applied' || ctx.stage === 'sending' || ctx.stage === 'sent';
  const flashing = ctx.stage === 'applying';
  const sigActive = ctx.stage === 'signature-active';
  const dateActive = ctx.stage === 'date-active';
  const dateHasValue = ctx.dateValue.length > 0;

  const sigBorder = locked ? '1.5px solid #CDF5EE' : sigActive ? '2px solid #7C3AED' : ctx.hasSignature ? '1.5px solid #D9D3EC' : '1.5px dashed #C9BEEE';
  const dateBorder = locked ? '1.5px solid #CDF5EE' : dateActive ? '2px solid #7C3AED' : dateHasValue ? '1.5px solid #D9D3EC' : '1px solid #ECE9F5';

  return (
    <div style={{ marginTop: '16px', display: 'flex', gap: '18px', alignItems: 'flex-end' }}>
      <div style={{ flex: 1.5 }}>
        <div style={FIELD_LABEL_STYLE}>Signature</div>
        <div
          className={flashing ? 'pdf-reader-lock-flash' : undefined}
          style={{
            position: 'relative',
            marginTop: '8px',
            height: '56px',
            borderRadius: '10px',
            background: '#FBFAFE',
            overflow: 'hidden',
            transition: 'border-color .2s, box-shadow .2s',
            border: sigBorder,
            boxShadow: sigActive ? '0 0 0 3px rgba(124,58,237,.15)' : 'none',
          }}
        >
          <SignatureCanvas
            stage={ctx.stage}
            hasSignature={ctx.hasSignature}
            showHint={ctx.showHint}
            demoDrawToken={ctx.demoDrawToken}
            canvasResetToken={ctx.canvasResetToken}
            onActivate={ctx.activateSignature}
            onHasSignatureChange={ctx.setHasSignature}
            onCommit={ctx.commitSignature}
            onDemoDrawComplete={ctx.completeDemoSignature}
          />
          {locked && (
            <span style={{ position: 'absolute', right: '10px', bottom: '8px' }}>
              <CheckBadge />
            </span>
          )}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={FIELD_LABEL_STYLE}>Date</div>
        <div
          onClick={ctx.activateDate}
          className={flashing ? 'pdf-reader-lock-flash' : undefined}
          style={{
            position: 'relative',
            marginTop: '8px',
            height: '56px',
            borderRadius: '10px',
            border: dateBorder,
            background: '#FBFAFE',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            fontSize: '12.5px',
            color: '#5B5670',
            fontVariantNumeric: 'tabular-nums',
            cursor: dateActive ? 'pointer' : 'default',
            transition: 'border-color .2s, box-shadow .2s',
            boxShadow: dateActive ? '0 0 0 3px rgba(124,58,237,.15)' : 'none',
          }}
        >
          {dateHasValue ? <span>{ctx.dateValue}</span> : dateActive ? <span className="pdf-reader-caret-blink" aria-hidden="true"></span> : null}
          {locked && (
            <span style={{ marginLeft: 'auto' }}>
              <CheckBadge />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const STATUS_TEXT: Record<SignatureFlowStage, string> = {
  idle: 'Draft · not signed',
  'signature-active': 'Draft · not signed',
  'date-active': 'Draft · not signed',
  ready: 'Draft · not signed',
  applying: 'Draft · signature applied',
  applied: 'Draft · signature applied',
  sending: 'Sending…',
  sent: '✓ Sent',
};

const STATUS_DOT_COLOR: Record<SignatureFlowStage, string> = {
  idle: '#FBBF24',
  'signature-active': '#FBBF24',
  'date-active': '#FBBF24',
  ready: '#FBBF24',
  applying: '#7C3AED',
  applied: '#7C3AED',
  sending: '#7C3AED',
  sent: '#14B8A6',
};

export function SignatureFlowStatus() {
  const ctx = useSignatureFlowContext();
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: '600', color: '#8B85A0' }}>
      <span className={ctx.stage === 'sending' ? 'pdf-reader-status-dot-pulse' : undefined} style={{ width: '7px', height: '7px', borderRadius: '50%', background: STATUS_DOT_COLOR[ctx.stage] }}></span>
      {STATUS_TEXT[ctx.stage]}
    </span>
  );
}

const BUTTON_LABEL: Record<SignatureFlowStage, string> = {
  idle: 'Sign document',
  'signature-active': 'Sign document',
  'date-active': 'Sign document',
  ready: 'Apply Signature',
  applying: 'Apply Signature',
  applied: 'Send Document',
  sending: 'Sending…',
  sent: 'Sent',
};

const BUTTON_BASE_STYLE = { padding: '8px 16px', borderRadius: '999px', border: 'none', fontSize: '12px', fontWeight: '600', fontFamily: 'inherit' } as const;

export function SignatureFlowButton() {
  const ctx = useSignatureFlowContext();
  const enabled = ctx.stage === 'ready' || ctx.stage === 'applied';
  const isSent = ctx.stage === 'sent';

  const style = enabled
    ? { ...BUTTON_BASE_STYLE, background: '#7C3AED', color: '#fff', cursor: 'pointer', boxShadow: '0 8px 16px -8px rgba(124,58,237,.6)' }
    : isSent
      ? { ...BUTTON_BASE_STYLE, background: '#ECFDF9', color: '#0E9384', cursor: 'default' }
      : { ...BUTTON_BASE_STYLE, background: '#F0EEF6', color: '#B4AEC6', cursor: 'not-allowed' };

  return (
    <span style={{ position: 'relative' }}>
      <button type="button" onClick={ctx.clickAction} disabled={!enabled} style={style}>
        {ctx.stage === 'sending' && <span className="pdf-reader-spin-icon" aria-hidden="true"></span>}
        {BUTTON_LABEL[ctx.stage]}
      </button>
      {ctx.toastVisible && (
        <div className="pdf-reader-toast" role="status">
          ✓ Document sent for signature
        </div>
      )}
    </span>
  );
}
