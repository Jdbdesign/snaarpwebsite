'use client';

import { useRef, useState } from 'react';
import { Zap, Eye, EyeOff, CalendarDays, ShieldCheck, X } from 'lucide-react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { Price } from '@/components/currency/Price';

const TRUST_ITEMS = [
  { Icon: CalendarDays, label: '14-day free trial' },
  { Icon: ShieldCheck, label: 'No credit card required' },
  { Icon: X, label: 'Cancel anytime' },
];

const ACTIVE_USER_AVATARS = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?w=100&h=100&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop',
];

export function MailHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <Zap size={14} aria-hidden="true" />
            Communicate &middot; Mail
          </div>

          <h1 className="mail-hero-heading mb-6" data-reveal-load>
            <span className="lg:hidden">
              <span className="block text-[var(--text-primary)]">Premium business email</span>
              <span className="block text-[var(--text-primary)]">without the enterprise</span>
              <span className="block text-[var(--color-brand)]">price tag.</span>
            </span>
            <span className="hidden lg:block">
              <span className="block text-[var(--text-primary)]">Premium business</span>
              <span className="block text-[var(--text-primary)]">email without the</span>
              <span className="block text-[var(--text-primary)]">
                enterprise <span className="text-[var(--color-brand)]">price tag.</span>
              </span>
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[48ch]" style={{ fontSize: '1.125rem' }} data-reveal-load>
            yourname@yourcompany.com in minutes &mdash; not a support ticket. Set up your domain, invite your team, and every inbox syncs straight into{' '}
            <a href="/products/contacts" className="mail-hero-inline-link">Contacts</a> and{' '}
            <a href="/products/kalender" className="mail-hero-inline-link">Kalender</a>.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-dark inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={2} />/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px] text-[var(--color-brand)]">
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3" data-reveal-load>
            {TRUST_ITEMS.map(({ Icon, label }) => (
              <span key={label} className="mail-hero-trust-item">
                <Icon size={15} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: signup form card */}
        <div className="mail-hero-visual" data-reveal-load>
          <form className="mail-hero-card" onSubmit={(e) => e.preventDefault()}>
            <h2 className="mail-hero-card-heading">Get started with Business Email</h2>

            <div className="mail-hero-field">
              <label htmlFor="mail-hero-name">
                Name <span className="mail-hero-required">*</span>
              </label>
              <input id="mail-hero-name" name="name" type="text" placeholder="John Doe" autoComplete="name" />
            </div>

            <div className="mail-hero-field">
              <label htmlFor="mail-hero-email">
                Work Email <span className="mail-hero-required">*</span>
              </label>
              <input id="mail-hero-email" name="email" type="email" placeholder="john@company.com" autoComplete="email" />
            </div>

            <div className="mail-hero-field">
              <label htmlFor="mail-hero-phone">
                Phone Number <span className="mail-hero-required">*</span>
              </label>
              <input id="mail-hero-phone" name="phone" type="tel" placeholder="(+44) 774 9000" autoComplete="tel" />
            </div>

            <div className="mail-hero-field">
              <label htmlFor="mail-hero-password">
                Password <span className="mail-hero-required">*</span>
              </label>
              <div className="mail-hero-password-wrap">
                <input
                  id="mail-hero-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="mail-hero-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <label className="mail-hero-checkbox-row">
              <input type="checkbox" name="agree" required />
              <span>
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit" className="btn-dark mail-hero-submit rounded-full min-h-[48px]">
              Sign Up
            </button>
          </form>

          <div className="mail-hero-active-users">
            <div className="mail-hero-avatar-stack">
              {ACTIVE_USER_AVATARS.map((src) => (
                <img key={src} src={src} alt="" aria-hidden="true" />
              ))}
            </div>
            <div>
              <p className="mail-hero-active-users-label">Active Users</p>
              <p className="mail-hero-active-users-count">50K+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
