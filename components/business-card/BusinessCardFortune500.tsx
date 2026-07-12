'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Calendar, Mail, Phone, Contact, Link2, ShoppingBag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  id: number;
  name: string;
  title: string;
  company: string;
  coverColor: string;
  coverImage: string;
  avatar: string;
  logoBadge?: string;
  accent: string;
  iconBg: string;
  rotation: number;
  xOffset: number;
  yOffset: number;
  zIndex: number;
  links: { icon: LucideIcon; text: string }[];
}

const CARDS: Card[] = [
  {
    id: 1,
    name: 'Steph Kim',
    title: 'Founder & CEO',
    company: 'Offset Artisan Bakehouse',
    coverColor: 'bg-[#B78860]',
    coverImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    accent: 'text-[#8c5730]',
    iconBg: 'bg-[#f4ebe1]',
    rotation: -14,
    xOffset: -400,
    yOffset: 40,
    zIndex: 10,
    links: [
      { icon: Calendar, text: 'Book an appointment' },
      { icon: Mail, text: 's.kim@offset.com' },
      { icon: Phone, text: '(415) 555-0167' },
    ],
  },
  {
    id: 2,
    name: 'Sophie Jones',
    title: 'SVP, Product & Platform Strategy',
    company: 'Better Connected Co',
    coverColor: 'bg-[#71B2D5]',
    coverImage: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=600&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    logoBadge: 'Better Connected',
    accent: 'text-[#3A8BB7]',
    iconBg: 'bg-[#E6F0F6]',
    rotation: -7,
    xOffset: -200,
    yOffset: 10,
    zIndex: 20,
    links: [
      { icon: Contact, text: 'Connect with me on LinkedIn' },
      { icon: Phone, text: '(646) 555-0224' },
      { icon: Link2, text: 'betterconnected.co' },
    ],
  },
  {
    id: 3,
    name: 'Grant Sullivan',
    title: 'Founder & Executive Director',
    company: 'Common Earth Project',
    coverColor: 'bg-[#C4C6A9]',
    coverImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    accent: 'text-[#7A8B5D]',
    iconBg: 'bg-[#F0F2E9]',
    rotation: 0,
    xOffset: 0,
    yOffset: -10,
    zIndex: 30,
    links: [
      { icon: Link2, text: 'How do carbon credits work' },
      { icon: Mail, text: 'g.sullivan@cep.ie' },
      { icon: Phone, text: '(202) 555-0159' },
    ],
  },
  {
    id: 4,
    name: 'Charli Berkley',
    title: 'Founder & CEO',
    company: 'Harvey Health',
    coverColor: 'bg-[#FFBBE1]',
    coverImage: '',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&auto=format&fit=crop',
    logoBadge: 'Harvey',
    accent: 'text-[#E063A3]',
    iconBg: 'bg-[#FFECF6]',
    rotation: 7,
    xOffset: 200,
    yOffset: 10,
    zIndex: 40,
    links: [
      { icon: ShoppingBag, text: 'The all-in-one supplement' },
      { icon: Link2, text: 'Order your sample pack' },
      { icon: Phone, text: '(305) 555-0192' },
    ],
  },
  {
    id: 5,
    name: 'Cole Mercer',
    title: 'Vice President, North America Sales',
    company: 'AEREN Parfam',
    coverColor: 'bg-[#E64B31]',
    coverImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    accent: 'text-[#B52A12]',
    iconBg: 'bg-[#FCEAE7]',
    rotation: 14,
    xOffset: 400,
    yOffset: 40,
    zIndex: 50,
    links: [
      { icon: Mail, text: 'cole.m@aeren.com' },
      { icon: Phone, text: '(212) 555-0206' },
      { icon: Link2, text: 'aeren.com' },
    ],
  },
];

function CardContent({ card }: { card: Card }) {
  return (
    <>
      <div className={`h-[140px] w-full relative ${card.coverColor}`}>
        {card.coverImage && (
          <img src={card.coverImage} alt="" className="w-full h-full object-cover opacity-90 mix-blend-overlay" />
        )}
        {card.logoBadge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[11px] font-bold text-gray-800 shadow-sm">
            {card.logoBadge}
          </div>
        )}
      </div>

      <div className="px-6 relative -mt-10">
        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-sm relative z-10">
          <img src={card.avatar} alt={card.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-6 pt-4 space-y-5">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{card.name}</h3>
          <p className="text-[12px] text-gray-500 font-medium leading-tight">{card.title}</p>
          <p className="text-[12px] text-gray-500 font-medium">{card.company}</p>
        </div>

        <div className="space-y-3 pt-2">
          {card.links.map((link, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${card.iconBg} ${card.accent}`}>
                <link.icon size={12} strokeWidth={2.5} />
              </div>
              <span className="text-[13px] font-bold text-gray-800 truncate">{link.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function BusinessCardFortune500() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12 sm:mb-24 relative z-40">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight max-w-4xl mx-auto">
          Used by employees at more than 93% of Fortune 500 companies
        </h2>
      </div>

      {/* Mobile & Tablet: Horizontal Scroll */}
      <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-6 gap-6">
        {CARDS.map((card) => (
          <div
            key={`mobile-${card.id}`}
            className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100/50 overflow-hidden shrink-0 snap-center"
          >
            <CardContent card={card} />
          </div>
        ))}
      </div>

      {/* Desktop: Fanned Arc */}
      <div className="hidden lg:flex relative h-[480px] w-full max-w-[1400px] mx-auto justify-center items-center">
        {CARDS.map((card, index) => (
          <motion.div
            key={`desktop-${card.id}`}
            className="absolute top-0 w-[300px] bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100/50 overflow-hidden"
            style={{ zIndex: card.zIndex, left: '50%', marginLeft: '-150px' }}
            initial={{ x: 0, y: 150, rotate: 0, opacity: 0 }}
            whileInView={{ x: card.xOffset, y: card.yOffset, rotate: card.rotation, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={prefersReducedMotion ? undefined : { y: card.yOffset - 20, scale: 1.05, transition: { duration: 0.3 } }}
          >
            <CardContent card={card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
