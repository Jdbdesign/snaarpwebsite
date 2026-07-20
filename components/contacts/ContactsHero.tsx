'use client';

import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLoadReveal } from '@/hooks/useScrollReveal';
import { PhotoCollageVisual, type CollagePhoto } from '@/components/sections/PhotoCollageVisual';
import { Price } from '@/components/currency/Price';

// Mock/placeholder contact data — not a real user's information.
const SYNCED_CONTACT = { initials: 'JM', name: 'Jordan Micheals' };

const COLLAGE_PHOTOS: [CollagePhoto, CollagePhoto, CollagePhoto] = [
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=650&q=80&auto=format&fit=crop',
    alt: 'Portrait of a smiling business professional',
    accent: 'brand',
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&q=80&auto=format&fit=crop',
    alt: 'Portrait of a smiling professional in a blazer',
    accent: 'rose',
  },
  {
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=450&q=80&auto=format&fit=crop',
    alt: 'Portrait of a smiling professional at work',
    accent: 'mint',
  },
];

export function ContactsHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div>
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Communicate &middot; Contacts
          </div>

          <h1 className="contacts-hero-heading mb-6" data-reveal-load>
            <span className="block text-[var(--text-primary)]">One address book.</span>
            <span className="block text-[var(--color-brand)]">Everywhere you work.</span>
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[46ch]" style={{ fontSize: '1.125rem' }} data-reveal-load>
            Save a contact once in Snaarp Contacts and it&rsquo;s already there in Mail, Meet, and CRM — no exporting, no re-typing, no three different versions of the same person.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8" data-reveal-load>
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={2} />/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              See how it works
            </a>
          </div>

          <p className="trust-item" data-reveal-load>
            GDPR compliant &middot; No credit card required
          </p>
        </div>

        {/* Right column: photo collage hero visual */}
        <div data-reveal-load>
          <PhotoCollageVisual
            photos={COLLAGE_PHOTOS}
            badge={
              <div className="photo-collage-badge-inner">
                <span className="photo-collage-badge-avatar">{SYNCED_CONTACT.initials}</span>
                <div>
                  <p className="photo-collage-badge-name">{SYNCED_CONTACT.name}</p>
                  <p className="photo-collage-badge-status">
                    <CheckCircle2 size={12} aria-hidden="true" />
                    Synced
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
