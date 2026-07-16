'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export interface BusinessCardFeatureRowItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface BusinessCardFeatureRowProps {
  eyebrow: string;
  headline: string;
  subtext?: string;
  items: BusinessCardFeatureRowItem[];
  visual: ReactNode;
  reverse?: boolean;
  align?: 'center' | 'stretch';
  className?: string;
}

// Bespoke to Business Card — shared text-column shape for the three
// alternating rows below the steps section. The visual always sits first
// in the DOM (so it shows first on mobile); `reverse` only swaps the
// desktop column order via lg:order utilities.
export function BusinessCardFeatureRow({
  eyebrow,
  headline,
  subtext,
  items,
  visual,
  reverse = false,
  align = 'center',
  className,
}: BusinessCardFeatureRowProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 ${className ?? ''}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${align === 'stretch' ? 'items-stretch' : 'items-center'}`}>
        <div className={reverse ? 'lg:order-2' : undefined}>{visual}</div>

        <div className={`flex flex-col ${reverse ? 'lg:order-1' : undefined}`}>
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-6 h-0.5 bg-[#7C3AED]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">{eyebrow}</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headline}
          </motion.h2>

          {subtext && (
            <motion.p
              className="text-lg text-gray-500 mb-12 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtext}
            </motion.p>
          )}

          <div className={`flex flex-col gap-8 ${subtext ? '' : 'mt-2'}`}>
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-4 sm:gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-violet-50 flex items-center justify-center text-[#7C3AED]">
                  {item.icon}
                </div>
                <div className={`flex flex-col gap-1 ${i < items.length - 1 ? 'pb-8 border-b border-gray-100' : ''}`}>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
