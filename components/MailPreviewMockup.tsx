'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Clock, RefreshCw, ChevronLeft, ChevronRight, Star, Pencil, Inbox, Send, FileText, AlertCircle, Archive, Trash2, Tag, Settings, HelpCircle, X, Paperclip, Sparkles, CheckCircle } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const EMAILS = [
  { initials: 'SJ', color: '#7C3AED', sender: 'Sarah Jenkins', isNew: true, subject: 'Quarterly Report Update', preview: "I've uploaded the draft for the Q3 financial performance review. Please take a look at the...", time: '09:45 AM' },
  { initials: 'AR', color: '#0E9384', sender: 'Alex Rivera', isNew: true, subject: 'Project Kickoff Meeting', preview: "Welcome to the team! I've scheduled a synchronization call for Monday to discuss the pro...", time: '08:12 AM' },
  { initials: 'DT', color: '#E11D48', sender: 'Design Team', isNew: true, subject: 'New Feature Feedback', preview: 'We have compiled the user feedback from the latest beta testing phase. Overall, the new...', time: 'Yesterday' },
  { initials: 'CS', color: '#1E293B', sender: 'Cloud Services', isNew: true, subject: 'System Maintenance Notice', preview: 'Please be advised that we will be performing scheduled server maintenance this Sunda...', time: 'Yesterday' },
  { initials: 'SJ', color: '#F59E0B', sender: 'Sarah Jenkins', isNew: false, subject: 'Budget Approval Status', preview: 'Regarding your request for additional equipment for the remote team, the finance departm...', time: 'Mar 12' },
  { initials: 'AR', color: '#0E9384', sender: 'Alex Rivera', isNew: false, subject: 'Weekly Sync Summary', preview: 'Thanks for the productive meeting earlier. Attached are the meeting minutes and the update...', time: 'Mar 11' },
  { initials: 'MK', color: '#6366F1', sender: 'Mike Chen', isNew: false, subject: 'Client Presentation Draft', preview: 'I have finished the slides for the investor pitch next Thursday. Could you review slides 4-8...', time: 'Mar 10' },
  { initials: 'LP', color: '#EC4899', sender: 'Lisa Park', isNew: false, subject: 'Onboarding Checklist', preview: 'Here is the updated onboarding document for the three new hires starting next Monday. Please...', time: 'Mar 9' },
  { initials: 'JW', color: '#14B8A6', sender: 'James Wilson', isNew: false, subject: 'API Integration Update', preview: 'The third-party payment gateway integration is now complete. All endpoints have been tested...', time: 'Mar 8' },
  { initials: 'RK', color: '#8B5CF6', sender: 'Rachel Kumar', isNew: false, subject: 'Q4 Marketing Plan', preview: 'Attached is the draft marketing strategy for Q4. Key focus areas include social media expan...', time: 'Mar 7' },
];

const AI_DRAFT = "Hi Alex,\n\nThank you for the productive conversation earlier this week. I wanted to follow up on the proposal we discussed and confirm the next steps.\n\nI have attached the Q3 report with the updated figures as requested. Please review at your convenience and let me know if you have any questions.\n\nLooking forward to our next sync.\n\nBest regards,\nSarah";

type MailView = 'inbox' | 'compose';

const GUIDE_STEPS = [
  { title: 'Compose Email', subtitle: 'Write and send professional emails with AI-powered drafting assistance.', highlightTop: '44px', highlightLeft: '42px', highlightWidth: '130px', highlightHeight: '36px', tooltipTop: '44px', tooltipLeft: '178px' },
];

export function MailPreviewMockup({ onEnd, startPaused }: { onEnd?: () => void; startPaused?: boolean }) {
  const [view, setView] = useState<MailView>('inbox');
  const [guideStep, setGuideStep] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showAiCoachmark, setShowAiCoachmark] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAiPrompt, setShowAiPrompt] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [showAttachment, setShowAttachment] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showGenerateCoachmark, setShowGenerateCoachmark] = useState(false);
  const [showSendCoachmark, setShowSendCoachmark] = useState(false);
  // Show guide after a short delay on mount (only if not paused)
  useEffect(() => {
    if (startPaused) return;
    const t = setTimeout(() => setShowGuide(true), 600);
    return () => clearTimeout(t);
  }, [startPaused]);

  function handleNextStep() {
    // Clicking Next on compose coachmark opens compose modal
    setShowGuide(false);
    setTimeout(() => {
      setView('compose');
      // Show AI coachmark after compose opens
      setTimeout(() => setShowAiCoachmark(true), 400);
    }, 180);
  }

  function handleOpenCompose() {
    setShowGuide(false);
    setTimeout(() => {
      setView('compose');
      setTimeout(() => setShowAiCoachmark(true), 400);
    }, 180);
  }

  function handleSend() {
    setView('inbox');
    setShowToast(true);
    setShowAiPrompt(false);
    setAiGenerated(false);
    setAiGenerating(false);
    setShowAttachment(false);
    setTypedText('');
    setTimeout(() => setShowToast(false), 2000);
  }

  function handleCloseCompose() {
    setView('inbox');
    setShowAiPrompt(false);
    setAiGenerated(false);
    setAiGenerating(false);
    setShowAttachment(false);
    setTypedText('');
  }

  function handleGenerateAI() {
    setAiGenerating(true);
    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      setTypedText(AI_DRAFT.slice(0, i));
      if (i >= AI_DRAFT.length) {
        clearInterval(interval);
        setAiGenerating(false);
        setAiGenerated(true);
        setTimeout(() => setShowSendCoachmark(true), 500);
      }
    }, 20);
  }

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      {/* Coachmark guide - positioned relative to the entire card */}
      <Coachmark
        visible={showGuide && view === 'inbox'}
        title="Compose Email"
        subtitle="Write and send professional emails with AI-powered drafting assistance."
        onNext={handleNextStep}
        top="38px"
        left="110px"
        highlightTop="44px"
        highlightLeft="42px"
        highlightWidth="130px"
        highlightHeight="36px"
        arrowSide="left"
      />
      {/* Toast notification */}
      {showToast && (
        <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 200, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}>
          <CheckCircle size={14} style={{ color: '#22c55e' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#166534' }}>Message sent</span>
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        {/* Compose button */}
        <div
          onClick={handleOpenCompose}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '10px', fontWeight: 600, marginBottom: '12px', width: 'fit-content', cursor: 'pointer', transition: 'background 0.15s' }}
        >
          <Pencil size={12} />
          <span>Compose</span>
        </div>



        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', flex: 1, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 7px', borderRadius: '5px', background: '#f3efff', color: '#7C3AED', fontWeight: 600, fontSize: '10px' }}>
            <Inbox size={12} />
            <span style={{ flex: 1 }}>Inbox</span>
            <span style={{ fontSize: '8px', fontWeight: 700, background: '#7C3AED', color: '#fff', padding: '1px 5px', borderRadius: '8px' }}>999</span>
          </div>
          {[
            { icon: Star, label: 'Starred' },
            { icon: Send, label: 'Sent' },
            { icon: Clock, label: 'Snoozed' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 7px', color: '#555', fontSize: '10px' }}>
              <item.icon size={12} />
              <span>{item.label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 7px', color: '#555', fontSize: '10px' }}>
            <FileText size={12} />
            <span style={{ flex: 1 }}>Draft</span>
            <span style={{ fontSize: '8px', color: '#999' }}>10</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 7px', color: '#999', fontSize: '9px' }}>
            <ChevronDown size={10} />
            <span>Less</span>
          </div>
          {[
            { icon: AlertCircle, label: 'Important' },
            { icon: Clock, label: 'Scheduled' },
            { icon: Archive, label: 'All Mail' },
            { icon: AlertCircle, label: 'Spam' },
            { icon: Trash2, label: 'Trash' },
            { icon: Tag, label: 'Categories' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '3px 7px', color: '#555', fontSize: '9.5px' }}>
              <item.icon size={11} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Labels */}
        <div style={{ paddingTop: '8px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>
            <span>Labels</span>
            <span style={{ fontSize: '13px', color: '#aaa' }}>+</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: '#7C3AED' }} />
            <span>All Mail</span>
            <span style={{ marginLeft: 'auto', fontSize: '8px', color: '#999' }}>14</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} />
            <span>Search email...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>Active</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Toolbar — always visible */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 12px', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#888' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', border: '1.5px solid #d0d0d0' }} />
                <ChevronDown size={10} />
                <RefreshCw size={12} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '9.5px' }}>
                <span style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ fontWeight: 700, color: '#333' }}>Default</span>
                  <span>Compact</span>
                </span>
                <span style={{ color: '#999', fontSize: '9px' }}>1-8 of 8</span>
                <ChevronLeft size={12} />
                <ChevronRight size={12} />
              </div>
            </div>

            {/* Email list */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              {EMAILS.map((email, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', padding: '8px 12px', borderBottom: '1px solid #f8f8f8' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', border: '1.5px solid #d0d0d0', flexShrink: 0, marginTop: '3px' }} />
                  <Star size={12} style={{ color: '#d0d0d0', flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ width: '28px', height: '28px', minWidth: '28px', borderRadius: '50%', background: email.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>
                    {email.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '1px' }}>
                      <span style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '10.5px' }}>{email.sender}</span>
                      {email.isNew && (
                        <span style={{ fontSize: '7px', fontWeight: 800, padding: '1px 5px', borderRadius: '8px', background: '#22c55e', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>NEW</span>
                      )}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '10.5px', color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{email.subject}</div>
                    <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{email.preview}</div>
                  </div>
                  <span style={{ fontSize: '9px', color: '#999', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '2px' }}>{email.time}</span>
                </div>
              ))}
            </div>

        {/* Compose Modal - compact bottom-right like Gmail */}
        {view === 'compose' && (
          <div style={{ position: 'absolute', bottom: '0', right: '0', width: '340px', height: '380px', zIndex: 50, display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '12px 12px 0 0', border: '1px solid #e0e0e0', boxShadow: '0 -4px 24px -8px rgba(0,0,0,0.15)', overflow: 'visible' }}>
            {/* Generate coachmark — positioned above the modal */}
            <Coachmark
              visible={showGenerateCoachmark && showAiPrompt && !aiGenerating && !aiGenerated}
              title="Generate with AI"
              subtitle="Click Generate to let AI write your email draft instantly"
              onNext={() => { setShowGenerateCoachmark(false); handleGenerateAI(); }}
              top="100px"
              left="-30px"
              arrowSide="right"
            />
            {/* Modal header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '12px 12px 0 0' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>New Message</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ cursor: 'pointer', color: '#aaa' }}><span style={{ fontSize: '14px' }}>&#8722;</span></div>
                <div onClick={handleCloseCompose} style={{ cursor: 'pointer', color: '#aaa' }}>
                  <X size={13} />
                </div>
              </div>
            </div>

            {/* To field */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ fontSize: '10px', color: '#888' }}>To</span>
              <span style={{ fontSize: '10px', color: '#1a1a1a' }}>alex.rivera@acme.com</span>
              <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#888' }}>Cc Bcc</span>
            </div>

            {/* Subject field */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderBottom: '1px solid #f0f0f0' }}>
              <span style={{ fontSize: '10px', color: '#888' }}>Subject</span>
              <span style={{ fontSize: '10px', color: '#1a1a1a' }}>Following up on our proposal</span>
            </div>

            {/* Body area */}
            <div style={{ flex: 1, padding: '10px 14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* AI prompt row */}
              {showAiPrompt && !aiGenerated && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: '#FAFAFE', borderRadius: '8px', border: '1px solid #f0f0f0', marginBottom: '8px', position: 'relative' }}>
                  <div style={{ flex: 1, fontSize: '9px', color: '#555' }}>
                    Write a professional follow-up about Q3 proposal
                  </div>
                  <button onClick={() => { setShowGenerateCoachmark(false); handleGenerateAI(); }} disabled={aiGenerating} style={{ padding: '4px 10px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '8px', fontWeight: 600, cursor: aiGenerating ? 'wait' : 'pointer', opacity: aiGenerating ? 0.7 : 1 }}>
                    {aiGenerating ? '...' : 'Generate'}
                  </button>
                </div>
              )}

              {/* Body text */}
              <div style={{ flex: 1, fontSize: '9.5px', color: '#333', lineHeight: '1.6', whiteSpace: 'pre-wrap', overflow: 'hidden' }}>
                {typedText || (aiGenerated ? AI_DRAFT : '')}
              </div>
            </div>

            {/* Attachment chip */}
            {showAttachment && (
              <div style={{ padding: '0 14px 6px', display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '3px 8px', background: '#f5f5f5', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
                  <FileText size={9} style={{ color: '#7C3AED' }} />
                  <span style={{ fontSize: '8px', color: '#555' }}>Q3_Report.pdf</span>
                  <span style={{ fontSize: '7px', color: '#999' }}>2.4 MB</span>
                  <div onClick={() => setShowAttachment(false)} style={{ cursor: 'pointer', color: '#999' }}>
                    <X size={8} />
                  </div>
                </div>
              </div>
            )}

            {/* Footer toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
              {/* AI Coachmark pointing at the sparkle icon */}
              <Coachmark
                visible={showAiCoachmark && !showAiPrompt && !aiGenerated}
                title="Write with AI"
                subtitle="Let AI draft your email in seconds. Just describe what you want to say."
                onNext={() => { setShowAiCoachmark(false); setShowAiPrompt(true); setTimeout(() => setShowGenerateCoachmark(true), 300); }}
                top="-140px"
                left="60px"
                highlightTop="5px"
                highlightLeft="82px"
                highlightWidth="24px"
                highlightHeight="24px"
                arrowSide="bottom"
              />

              <button onClick={() => { setShowSendCoachmark(false); handleSend(); if (onEnd) setTimeout(() => onEnd(), 2200); }} style={{ padding: '5px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '10px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', position: 'relative' }}>
                Send
                <ChevronDown size={10} />
                <Coachmark visible={showSendCoachmark && aiGenerated} title="Send Email" subtitle="Your AI-drafted email is ready. Send it now!" onNext={() => { setShowSendCoachmark(false); handleSend(); if (onEnd) setTimeout(() => onEnd(), 2200); }} top="-150px" left="-140px" arrowSide="bottom" arrowOffset="160px" buttonLabel="End" />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '4px', color: '#888' }}>
                <Sparkles size={13} style={{ color: '#7C3AED', cursor: 'pointer' }} onClick={() => { if (!showAiPrompt && !aiGenerated) { setShowAiCoachmark(false); setShowAiPrompt(true); setTimeout(() => setShowGenerateCoachmark(true), 300); } }} />
                <Paperclip size={13} style={{ cursor: 'pointer' }} onClick={() => setShowAttachment(!showAttachment)} />
              </div>
              <div style={{ marginLeft: 'auto', cursor: 'pointer', color: '#ccc' }}>
                <Trash2 size={13} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
