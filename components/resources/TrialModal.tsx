'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface TrialModalProps {
  mode: 'trial' | 'demo' | null;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ mode, onClose }) => {
  const [name, setName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('10–25 employees');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!mode) return null;

  const isTrial = mode === 'trial';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !workEmail.includes('@') || !company.trim()) {
      setError('Please complete your name, work email, and company name.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-violet-700 uppercase">
              {isTrial ? '14-Day Free Trial' : 'Guided Platform Demo'}
            </p>
            <h2
              id="trial-modal-title"
              className="mt-1 text-xl sm:text-2xl font-bold text-slate-900"
            >
              {isTrial
                ? 'Launch your Snaarp 360 workspace'
                : 'Book a live walkthrough'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
              <Check className="h-4 w-4 text-emerald-700" />
              <span>
                {isTrial
                  ? 'Workspace invitation sent'
                  : 'Demo request confirmed'}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-emerald-800">
              {isTrial
                ? `Check ${workEmail} to activate all 20+ Snaarp apps for ${company}. No card required.`
                : `A Snaarp solutions specialist will send a Snaarp Me booking link to ${workEmail} shortly.`}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full rounded-lg bg-emerald-800 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-900 cursor-pointer"
            >
              Back to Resources
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Chidi Nwosu"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-violet-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700">
                Work Email
              </label>
              <input
                type="email"
                required
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="chidi@company.com"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-violet-600 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Halden & Co"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-violet-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Team Size
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-violet-600 focus:outline-none"
                >
                  <option>1–9 employees</option>
                  <option>10–25 employees</option>
                  <option>26–50 employees</option>
                  <option>51–200 employees</option>
                  <option>200+ enterprise</option>
                </select>
              </div>
            </div>

            {error && (
              <p className="text-xs font-medium text-rose-600">{error}</p>
            )}

            <p className="text-[11px] text-slate-500">
              {isTrial
                ? 'Includes instant access to Mail, CRM, Meet, Books, Drive, and Lock. No credit card required.'
                : 'Meet with an enterprise architect to walk through your team migration timeline.'}
            </p>

            <div className="mt-4 flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-violet-700 px-5 py-2 text-xs font-semibold text-white hover:bg-violet-800 transition-colors cursor-pointer"
              >
                {isTrial ? 'Start 14-Day Trial' : 'Confirm Demo'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
