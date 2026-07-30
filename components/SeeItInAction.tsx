'use client';

import { useState } from 'react';
import { ProductShowcaseCard } from '@/components/ProductShowcaseCard';
import { X } from 'lucide-react';

export function SeeItInAction() {
  const [showIntroModal, setShowIntroModal] = useState(true);

  return (
    <section style={{ padding: '80px 0 100px', background: '#fafafa' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7C3AED', marginBottom: '16px' }}>
            SEE IT IN ACTION
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, margin: '0 auto', maxWidth: '600px' }}>
            Explore how simple your workflow can be
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '14px', maxWidth: '520px', margin: '14px auto 0', lineHeight: 1.6 }}>
            Click through each product to see how they work together as one connected platform.
          </p>
        </div>

        {/* Interactive showcase - centered */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', position: 'relative' }}>
            {/* Vertical rail stays outside the black border */}
            <ProductShowcaseCard cardWidth="1000px" cardBorder="5px solid #1a1a1a" startPaused={showIntroModal} />

            {/* Intro modal overlay */}
            {showIntroModal && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, borderRadius: '18px' }}>
                {/* Semi-transparent backdrop on the card only */}
                <div style={{ position: 'absolute', top: 0, left: '60px', right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', borderRadius: '18px' }} />

                {/* Modal card */}
                <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 36px', maxWidth: '380px', width: '100%', textAlign: 'center', boxShadow: '0 16px 48px -12px rgba(0,0,0,0.25)', zIndex: 10 }}>
                  <div onClick={() => setShowIntroModal(false)} style={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer', color: '#999' }}>
                    <X size={16} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
                    Explore Snaarp Tools
                  </h3>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '8px' }}>
                    Discover what is possible with Snaarp through a series of interactive tours.
                  </p>
                  <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.5, marginBottom: '24px' }}>
                    Select any product from the icons on the left and explore at your own pace.
                  </p>
                  <button
                    onClick={() => setShowIntroModal(false)}
                    style={{ padding: '10px 28px', background: '#E11D48', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Let&apos;s go!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
