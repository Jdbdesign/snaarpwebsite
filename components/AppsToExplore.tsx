'use client';

import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ROTATE_HOLD_MS = 4500;
const SET_TRANSITION_MS = 260;

const SET_A = [
  { icon: '/assets/icons/apps-kalender.jpg', name: 'Kalender', desc: 'Shared calendars and booking links that keep every meeting in sync.', lastCol: false },
  { icon: '/assets/icons/apps-document.png', name: 'Document', desc: 'Write and co-edit docs with your team, live.', lastCol: false },
  { icon: '/assets/icons/apps-meet.jpg', name: 'Meet', desc: 'Video calls with screen share, notes and recording built in.', lastCol: true },
  { icon: '/assets/icons/apps-sheet.jpg', name: 'Sheet', desc: 'Spreadsheets that stay accurate when three people are in them at once.', lastCol: false },
  { icon: '/assets/icons/apps-sendrit.jpg', name: 'Sendrit', desc: 'Outbound sequences that land in the inbox, not the spam folder.', lastCol: false },
  { icon: '/assets/icons/apps-lock.jpg', name: 'Lock', desc: 'A shared password manager, so “ask Dami for the login” retires for good.', lastCol: true },
];

const SET_B = [
  { icon: '/assets/icons/envelope.jpg', name: 'Mail', desc: 'Business email on your own domain, with unlimited mailboxes and no per-seat email tax.', lastCol: false },
  { icon: '/assets/icons/p-icon.jpg', name: 'Presentation', desc: 'Build and present decks straight from the browser.', lastCol: false },
  { icon: '/assets/icons/ai-sparkle.jpg', name: 'AI Compose', desc: 'Drafts emails, replies and documents in your voice, everywhere you type.', lastCol: true },
  { icon: '/assets/icons/people-check.jpg', name: 'Contacts', desc: 'One address book, shared across the whole team.', lastCol: false },
  { icon: '/assets/icons/cube.jpg', name: 'Work Drive', desc: 'Shared storage for every file, with version history baked in.', lastCol: false },
  { icon: '/assets/icons/chat-bubbles.jpg', name: 'Teams', desc: 'Group chat and channels, so email stops being a to-do list.', lastCol: true },
];

export function AppsToExplore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appsGridRef = useRef<HTMLDivElement>(null);
  const setARef = useRef<HTMLDivElement>(null);
  const setBRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef);

  useEffect(() => {
    if (!appsGridRef.current || !setARef.current || !setBRef.current) return;
    const appsGrid: HTMLDivElement = appsGridRef.current;
    const setA: HTMLDivElement = setARef.current;
    const setB: HTMLDivElement = setBRef.current;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let activeSet = setA;
    let rotationTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let pausedByPointer = false;
    let pausedByFocus = false;

    function isPaused() {
      return pausedByPointer || pausedByFocus;
    }

    function setInteractive(setEl: HTMLElement, interactive: boolean) {
      const links = setEl.querySelectorAll<HTMLElement>('.apps-grid-cell');
      links.forEach((link) => {
        if (interactive) link.removeAttribute('tabindex');
        else link.setAttribute('tabindex', '-1');
      });
    }

    function swapSets() {
      const next = activeSet === setA ? setB : setA;
      const prev = activeSet;

      prev.style.transition = `opacity ${SET_TRANSITION_MS}ms ease-in, transform ${SET_TRANSITION_MS}ms ease-in`;
      prev.style.opacity = '0';
      prev.style.transform = 'scale(0.97)';

      setTimeout(() => {
        prev.classList.remove('is-active');
        prev.setAttribute('aria-hidden', 'true');
        setInteractive(prev, false);

        next.classList.add('is-active');
        next.removeAttribute('aria-hidden');
        setInteractive(next, true);
        next.style.transition = 'none';
        next.style.opacity = '0';
        next.style.transform = 'scale(0.97)';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            next.style.transition = `opacity ${SET_TRANSITION_MS}ms var(--ease-out), transform ${SET_TRANSITION_MS}ms var(--ease-out)`;
            next.style.opacity = '1';
            next.style.transform = 'scale(1)';
          });
        });

        activeSet = next;
      }, SET_TRANSITION_MS);
    }

    function scheduleRotation(delay: number) {
      clearTimeout(rotationTimeoutId);
      rotationTimeoutId = setTimeout(() => {
        swapSets();
        scheduleRotation(ROTATE_HOLD_MS);
      }, delay);
    }

    function pauseRotation() {
      clearTimeout(rotationTimeoutId);
    }

    function resumeRotation() {
      if (isPaused()) return;
      scheduleRotation(ROTATE_HOLD_MS); // always a fresh full-length hold, never a resumed remainder
    }

    setInteractive(setB, false);
    scheduleRotation(ROTATE_HOLD_MS);

    const hoverMql = window.matchMedia('(hover: hover) and (pointer: fine)');
    function onMouseEnter() {
      pausedByPointer = true;
      pauseRotation();
    }
    function onMouseLeave() {
      pausedByPointer = false;
      resumeRotation();
    }
    // Hover-pause only makes sense on devices with a real hover state —
    // touch "hover" is a synthetic ghost event, so gating on this keeps
    // rotation running uninterrupted on phones/tablets.
    if (hoverMql.matches) {
      appsGrid.addEventListener('mouseenter', onMouseEnter);
      appsGrid.addEventListener('mouseleave', onMouseLeave);
    }

    // Keyboard focus pauses on every device — a touch device can still
    // have an external/on-screen keyboard driving focus.
    function onFocusIn() {
      pausedByFocus = true;
      pauseRotation();
    }
    function onFocusOut(e: FocusEvent) {
      if (e.relatedTarget && appsGrid.contains(e.relatedTarget as Node)) return;
      pausedByFocus = false;
      resumeRotation();
    }
    appsGrid.addEventListener('focusin', onFocusIn);
    appsGrid.addEventListener('focusout', onFocusOut as EventListener);

    return () => {
      clearTimeout(rotationTimeoutId);
      appsGrid.removeEventListener('mouseenter', onMouseEnter);
      appsGrid.removeEventListener('mouseleave', onMouseLeave);
      appsGrid.removeEventListener('focusin', onFocusIn);
      appsGrid.removeEventListener('focusout', onFocusOut as EventListener);
    };
  }, []);

  return (
    <section className="apps-to-explore-section max-w-7xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
      <div ref={containerRef} className="apps-spotlight-card grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
        {/* Left column: NeoLeads spotlight */}
        <div className="neoleads-card" data-reveal data-reveal-group="apps-explore">
          <div className="neoleads-card-inner">
            <p className="neoleads-wordmark">
              <span className="neoleads-wordmark-neo">Neo</span>
              <span className="neoleads-wordmark-leads">Leads</span>
            </p>
            <p className="neoleads-copy">
              Automate your outbound sales from lead generation to first contact. You only pay when a prospect actually replies.
            </p>
            <a href="#" className="neoleads-cta">Start for Free</a>
          </div>
          <div className="neoleads-dashboard-wrap">
            <img
              src="/assets/images/neoleads-dashboard.png"
              alt="NeoLeads sales dashboard showing customer analytics, revenue charts and a deals table"
              className="neoleads-dashboard-img"
            />
          </div>
        </div>

        {/* Right column: apps grid */}
        <div className="apps-grid-col">
          <div className="apps-grid-header" data-reveal data-reveal-group="apps-explore">
            <span className="apps-grid-label">Apps to Explore</span>
            <a href="#" className="apps-grid-viewall">View All <span aria-hidden="true">&rarr;</span></a>
          </div>

          <div className="apps-grid" ref={appsGridRef}>
            {/* Set A: shown first, on screen ~4-5s before crossfading to Set B */}
            <div className="apps-grid-set is-active" data-set="a" ref={setARef}>
              {SET_A.map((app) => (
                <a
                  key={app.name}
                  href="#"
                  className={`apps-grid-cell${app.lastCol ? ' apps-grid-cell-last-col' : ''}`}
                  data-reveal
                  data-reveal-group="apps-explore"
                  data-reveal-batch="apps-grid"
                >
                  <p className="apps-grid-name">
                    <img src={app.icon} alt="" aria-hidden="true" className="apps-grid-icon" />
                    {app.name}
                  </p>
                  <p className="apps-grid-desc">{app.desc}</p>
                </a>
              ))}
            </div>

            {/* Set B: hidden until the rotation effect activates it; aria-hidden +
                tabindex=-1 are set on the links by JS so they can't be tabbed to
                while off-screen. */}
            <div className="apps-grid-set" data-set="b" aria-hidden="true" ref={setBRef}>
              {SET_B.map((app) => (
                <a
                  key={app.name}
                  href="#"
                  className={`apps-grid-cell${app.lastCol ? ' apps-grid-cell-last-col' : ''}`}
                >
                  <p className="apps-grid-name">
                    <img src={app.icon} alt="" aria-hidden="true" className="apps-grid-icon" />
                    {app.name}
                  </p>
                  <p className="apps-grid-desc">{app.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
