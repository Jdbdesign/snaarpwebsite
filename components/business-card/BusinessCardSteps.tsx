'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Check, Link2, QrCode, SmartphoneNfc, User, Mail, Phone, Briefcase, Image as ImageIcon } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const PROFILE_FIELDS = [
  { label: 'Full Name', value: 'Alex Rivera', icon: User },
  { label: 'Job Title', value: 'Product Designer', icon: Briefcase },
  { label: 'Company', value: 'Studio Inc.', icon: Briefcase },
  { label: 'Phone', value: '+1 (555) 123-4567', icon: Phone },
];

export function BusinessCardSteps({ ctaLabel, ctaHref = '#' }: { ctaLabel: ReactNode; ctaHref?: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Get started in 3 easy steps
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 01 — building the card */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),_0_1px_3px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col"
        >
          <div className="h-64 relative bg-gradient-to-br from-violet-50/80 to-white overflow-hidden flex items-center justify-center isolate">
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />

            <motion.div
              className="w-48 h-56 bg-white rounded-2xl shadow-xl shadow-violet-900/5 border border-violet-100 p-4 relative z-10 flex flex-col gap-3 overflow-hidden"
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute -top-3 -right-3 bg-violet-100 text-[#7C3AED] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm border border-violet-200"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Draft
              </motion.div>

              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-violet-50 border border-violet-100 border-dashed flex items-center justify-center text-violet-300"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ImageIcon size={16} />
                </motion.div>
                <div className="flex flex-col">
                  <motion.div
                    className="text-[10px] font-bold text-gray-800"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    Profile Details
                  </motion.div>
                  <motion.div
                    className="text-[8px] text-gray-400 font-medium"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    Setup your digital card
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {PROFILE_FIELDS.map((field, idx) => (
                  <motion.div
                    key={field.label}
                    className="bg-gray-50/80 rounded-md border border-gray-100 px-2.5 py-1.5 flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                  >
                    <div className="flex flex-col">
                      <span className="text-[7px] text-gray-400 font-bold uppercase tracking-wider">{field.label}</span>
                      <span className="text-[10px] text-gray-800 font-semibold leading-tight">{field.value}</span>
                    </div>
                    <field.icon size={12} className="text-violet-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute top-12 left-10 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center text-violet-300 border border-violet-50 rotate-12"
              animate={{ y: [0, -8, 0], rotate: [12, 16, 12] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-3 h-3 rounded-full bg-violet-200" />
            </motion.div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED] mb-3">Step 01</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Build your card</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Add your name, title, company, and contact details once.
            </p>
          </div>
        </motion.div>

        {/* Step 02 — sharing the card */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),_0_1px_3px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col"
        >
          <div className="h-64 relative bg-violet-50/50 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
              <motion.div className="absolute top-8 left-1/4 w-1.5 h-1.5 rounded-full bg-violet-300" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="absolute bottom-12 right-1/4 w-2 h-2 rounded-full bg-violet-400" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
              <motion.div className="absolute top-20 right-1/3 w-1 h-1 rounded-full bg-violet-300" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
            </div>

            <motion.div
              className="relative z-10 w-44 h-44 bg-white rounded-3xl shadow-[0_20px_40px_rgb(124,58,237,0.1)] border border-violet-50 p-4 flex flex-col items-center justify-center"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', bounce: 0.4, duration: 0.8 }}
            >
              <div className="absolute top-3 right-3 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-violet-200" />
              </div>

              <div className="w-full h-full bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <QrCode size={100} className="text-[#7C3AED]" strokeWidth={1.2} />

                <motion.div
                  className="absolute left-0 right-0 h-[2px] bg-violet-400 shadow-[0_0_8px_rgba(124,58,237,0.8)]"
                  animate={{ top: ['10%', '90%', '10%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <motion.div
                className="absolute -right-3 -bottom-3 bg-[#7C3AED] text-white p-3 rounded-2xl shadow-lg border-2 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <SmartphoneNfc size={20} strokeWidth={2} />
              </motion.div>

              <motion.div
                className="absolute -left-3 top-8 bg-white text-[#7C3AED] p-2.5 rounded-xl shadow-lg border border-violet-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Link2 size={18} strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED] mb-3">Step 02</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Share with a link, QR, or NFC</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Send it however&rsquo;s easiest — email, text, tap a phone, or scan a code.
            </p>
          </div>
        </motion.div>

        {/* Step 03 — staying in sync */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),_0_1px_3px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col"
        >
          <div className="h-64 relative bg-violet-100/50 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-200/50 via-transparent to-transparent opacity-80" />

            <motion.div
              className="absolute left-4 top-8 w-32 h-48 bg-white/70 backdrop-blur-md rounded-2xl border border-white shadow-sm flex flex-col items-center p-3 pt-5"
              initial={{ opacity: 0, x: 20, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: -12 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="" className="w-10 h-10 rounded-full border border-white shadow-sm mb-1 object-cover opacity-60" />
              <div className="text-[9px] font-bold text-gray-800 opacity-60">Alex Rivera</div>
              <div className="text-[7px] text-[#7C3AED] font-medium mb-2 opacity-60">Product Designer</div>
              <div className="w-full space-y-1.5 opacity-50">
                <div className="h-4 bg-gray-50 rounded border border-gray-100 w-full" />
                <div className="h-4 bg-gray-50 rounded border border-gray-100 w-full" />
              </div>

              <motion.div
                className="absolute -bottom-2 -right-2 bg-green-100 text-green-600 p-1 rounded-full border border-white shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: 'spring' }}
              >
                <Check size={12} strokeWidth={3} />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute right-4 bottom-6 w-32 h-48 bg-white/70 backdrop-blur-md rounded-2xl border border-white shadow-sm flex flex-col items-center p-3 pt-5"
              initial={{ opacity: 0, x: -20, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 12 }}
              transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            >
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="" className="w-10 h-10 rounded-full border border-white shadow-sm mb-1 object-cover opacity-60" />
              <div className="text-[9px] font-bold text-gray-800 opacity-60">Alex Rivera</div>
              <div className="text-[7px] text-[#7C3AED] font-medium mb-2 opacity-60">Product Designer</div>
              <div className="w-full space-y-1.5 opacity-50">
                <div className="h-4 bg-gray-50 rounded border border-gray-100 w-full" />
                <div className="h-4 bg-gray-50 rounded border border-gray-100 w-full" />
              </div>

              <motion.div
                className="absolute -bottom-2 -left-2 bg-green-100 text-green-600 p-1 rounded-full border border-white shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
              >
                <Check size={12} strokeWidth={3} />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative z-20 w-36 h-[13.5rem] bg-white rounded-2xl shadow-[0_20px_40px_rgb(124,58,237,0.15)] border border-violet-100 p-4 flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 rounded-2xl -z-10">
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#7C3AED]"
                  animate={{ scale: [1, 1.2, 1.4], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#7C3AED]"
                  animate={{ scale: [1, 1.2, 1.4], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1.25 }}
                />
              </div>

              <motion.div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-violet-300 flex items-center gap-1.5 whitespace-nowrap">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-white"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Synced
              </motion.div>

              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Alex Rivera" className="w-14 h-14 rounded-full border-2 border-white shadow-md mb-2 object-cover" />
              <div className="text-[11px] font-bold text-gray-900 leading-tight">Alex Rivera</div>
              <div className="text-[8px] text-[#7C3AED] font-medium mb-3">Product Designer @ Studio Inc.</div>

              <div className="w-full flex flex-col gap-1.5 mt-auto">
                <div className="flex items-center gap-2 bg-gray-50/80 p-1.5 rounded-lg border border-gray-100">
                  <div className="bg-white p-1 rounded shadow-sm"><Phone size={8} className="text-[#7C3AED]" /></div>
                  <span className="text-[8px] text-gray-700 font-bold tracking-tight">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50/80 p-1.5 rounded-lg border border-gray-100">
                  <div className="bg-white p-1 rounded shadow-sm"><Mail size={8} className="text-[#7C3AED]" /></div>
                  <span className="text-[8px] text-gray-700 font-bold tracking-tight">alex@studio.inc</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED] mb-3">Step 03</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">It updates everywhere instantly</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Change anything later and every card you&rsquo;ve shared reflects it automatically.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-14 lg:mt-16">
        <a href={ctaHref} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
          {ctaLabel}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
