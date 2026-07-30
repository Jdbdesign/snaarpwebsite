'use client';

import { useState, type FormEvent } from 'react';

const TOPICS = ['Sales enquiry', 'Product support', 'Billing', 'Partnership', 'Press', 'Something else'];

export function ContactForm() {
  const [topic, setTopic] = useState('Sales enquiry');
  const [msgLen, setMsgLen] = useState(0);
  const [sent, setSent] = useState(false);
  const [reference, setReference] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const n = Math.floor(100000 + Math.random() * 899999);
    setReference('SNP-' + n);
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleReset() {
    setSent(false);
    setMsgLen(0);
    setTopic('Sales enquiry');
  }

  if (sent) {
    return (
      <div className="contact-form-card">
        <div className="contact-success">
          <div className="contact-success-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="5 13 10 18 19 7" />
            </svg>
          </div>
          <h2 className="contact-success-heading">Got it — thank you.</h2>
          <p className="contact-success-desc">
            A confirmation is on its way to your inbox. Expect a proper reply from a human within 4 working hours.
          </p>
          <div className="contact-success-ref">
            <span className="contact-success-ref-label">Reference</span>
            <span className="contact-success-ref-value">{reference}</span>
          </div>
          <button type="button" onClick={handleReset} className="contact-success-reset">
            Send another message
          </button>
          <p className="contact-success-disclaimer">Demo form — nothing was actually submitted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h2 className="contact-form-title">Send us a message</h2>
      <p className="contact-form-subtitle">Fields marked with * are required.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Topic chips */}
        <div>
          <label className="contact-field-label">What&apos;s this about?*</label>
          <div className="contact-topic-chips">
            {TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`contact-chip ${t === topic ? 'contact-chip--active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Name row */}
        <div className="contact-row-2col">
          <div>
            <label htmlFor="c-first" className="contact-field-label">First name*</label>
            <input id="c-first" name="firstName" type="text" required placeholder="Alex" className="contact-input" />
          </div>
          <div>
            <label htmlFor="c-last" className="contact-field-label">Last name*</label>
            <input id="c-last" name="lastName" type="text" required placeholder="Whitfield" className="contact-input" />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="c-email" className="contact-field-label">Work email*</label>
          <input id="c-email" name="email" type="email" required placeholder="alex@company.co.uk" className="contact-input" />
        </div>

        {/* Company + size */}
        <div className="contact-row-2col">
          <div>
            <label htmlFor="c-company" className="contact-field-label">Company</label>
            <input id="c-company" name="company" type="text" placeholder="Northbank Ltd" className="contact-input" />
          </div>
          <div>
            <label htmlFor="c-size" className="contact-field-label">Team size</label>
            <select id="c-size" name="size" className="contact-input contact-select">
              <option>Just me</option>
              <option>2–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="c-msg" className="contact-field-label">How can we help?*</label>
          <textarea
            id="c-msg"
            name="message"
            required
            rows={5}
            maxLength={1200}
            onInput={(e) => setMsgLen((e.target as HTMLTextAreaElement).value.length)}
            placeholder="The more specific the better — which apps you're looking at, what you're moving off, and what has to be true for this to work."
            className="contact-input contact-textarea"
          />
          <div className="contact-char-count">{msgLen} / 1200</div>
        </div>

        {/* Consent */}
        <label htmlFor="c-consent" className="contact-consent">
          <input id="c-consent" name="consent" type="checkbox" className="contact-checkbox" />
          <span className="contact-consent-text">
            Send me occasional product updates. We&apos;ll reply to this message either way, and you can unsubscribe in one click.
          </span>
        </label>

        {/* Submit */}
        <button type="submit" className="contact-submit">
          Send message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <p className="contact-form-footer">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10.5" width="16" height="10" rx="2.5" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
          </svg>
          Encrypted in transit · Stored in the EU · Never sold on
        </p>
      </form>
    </div>
  );
}
