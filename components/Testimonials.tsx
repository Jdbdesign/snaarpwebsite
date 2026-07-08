import { RevealSection } from '@/components/reveal/RevealSection';

const STAR_PATH = 'M12 2l2.9 6.26 6.9 1.01-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.9-1.01L12 2z';

function Stars({ filled, label }: { filled: number; label: string }) {
  return (
    <div className="testimonial-stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`testimonial-star ${i < filled ? 'testimonial-star-filled' : 'testimonial-star-empty'}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < filled ? 'currentColor' : 'none'}
          stroke={i < filled ? undefined : 'currentColor'}
          strokeWidth={i < filled ? undefined : '1.5'}
          strokeLinejoin={i < filled ? undefined : 'round'}
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    rating: 4,
    quote: 'We were paying for email, a CRM, a password manager, e-signatures and accounting software separately. Moving the whole team onto the Stack took an afternoon, and cut our software bill by more than half.',
    initials: 'AO',
    name: 'Amara O.',
    role: 'Operations Lead, logistics startup',
  },
  {
    rating: 4,
    quote: 'As a five-person agency, we didn’t have the budget or the patience for ten different logins. Snaarp gave us email, docs and a CRM on day one, and we’ve added tools as we’ve grown into them.',
    initials: 'TA',
    name: 'Tunde A.',
    role: 'Founder, design agency',
  },
  {
    rating: 5,
    quote: 'Onboarding new hires used to mean setting up accounts across six different platforms. Now it’s one invite, one login, and they’re working within minutes. IT tickets for ‘forgot my password’ dropped almost overnight.',
    initials: 'GM',
    name: 'Grace M.',
    role: 'IT Administrator, fintech company',
  },
];

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection className="testimonial-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card" data-reveal data-reveal-group="testimonials" data-reveal-batch="testimonial-cards">
            <Stars filled={t.rating} label={`Rated ${t.rating} out of 5 stars`} />
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}
