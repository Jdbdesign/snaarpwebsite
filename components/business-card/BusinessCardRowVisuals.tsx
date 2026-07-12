'use client';

import { motion } from 'motion/react';
import { QrCode, SmartphoneNfc, Eye, ArrowUpRight, TrendingUp } from 'lucide-react';

// Three page-specific mock visuals passed into <BusinessCardFeatureRow> as
// its `visual` slot. Kept separate so that component stays fully reusable.

export function UpdateOnceVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-0 rounded-[2rem] bg-violet-50/50 overflow-hidden shadow-inner border border-violet-100 isolate">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center center' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)]" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <motion.line
          x1="50%" y1="50%" x2="20%" y2="25%"
          stroke="#C4B5FD" strokeWidth="2" strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.line
          x1="50%" y1="50%" x2="25%" y2="75%"
          stroke="#C4B5FD" strokeWidth="2" strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.line
          x1="50%" y1="50%" x2="82%" y2="45%"
          stroke="#C4B5FD" strokeWidth="2" strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        />
      </svg>

      <div className="relative w-full h-full flex items-center justify-center p-0">
        <motion.img
          src="/assets/images/business-card-nfc-tap-mockup.jpg"
          alt="NFC tap to share business card"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-0 rounded-[2rem] bg-gradient-to-br from-violet-50/80 to-white overflow-hidden shadow-inner border border-violet-100 isolate flex items-center justify-center p-6 sm:p-10">
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'center center' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7C3AED] rounded-full blur-[80px] opacity-[0.08]" />

      <motion.div
        className="relative z-10 w-full max-w-[440px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgb(124,58,237,0.1),_0_1px_3px_rgb(0,0,0,0.05)] border border-white/50 p-6 sm:p-8 overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Eye size={16} className="text-[#7C3AED]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Card Analytics</span>
          </div>
          <div className="bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide">
            Last 14 days
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
          <motion.div className="flex flex-col gap-1.5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <div className="flex items-end gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">128</span>
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md mb-1.5">
                <ArrowUpRight size={10} strokeWidth={2.5} />
                12%
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Views</span>
          </motion.div>

          <motion.div className="flex flex-col gap-1.5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
            <div className="flex items-end gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">42</span>
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md mb-1.5">
                <ArrowUpRight size={10} strokeWidth={2.5} />
                5%
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Saves</span>
          </motion.div>

          <motion.div className="flex flex-col gap-1.5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
            <div className="flex items-end gap-2">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">19</span>
              <div className="flex items-center gap-0.5 text-[10px] font-bold text-gray-400 mb-1.5 pl-1">
                <TrendingUp size={12} />
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Shares</span>
          </motion.div>
        </div>

        <div className="relative h-44 w-full mt-2">
          <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-6">
            <div className="w-full border-t border-gray-100 border-dashed" />
            <div className="w-full border-t border-gray-100 border-dashed" />
            <div className="w-full border-t border-gray-100 border-dashed" />
            <div className="w-full border-t border-gray-100 border-dashed" />
          </div>

          <svg className="absolute inset-0 w-full h-[calc(100%-1.5rem)] overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bcardChartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="bcardLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 0,100 S 25,80 50,80 S 75,95 100,90 S 125,40 150,30 S 175,60 200,55 S 225,45 250,50 S 275,80 300,75 L 300,120 L 0,120 Z"
              fill="url(#bcardChartGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.path
              d="M 0,100 S 25,80 50,80 S 75,95 100,90 S 125,40 150,30 S 175,60 200,55 S 225,45 250,50 S 275,80 300,75"
              fill="none"
              stroke="url(#bcardLineGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            />
          </svg>

          <motion.div
            className="absolute w-3.5 h-3.5 bg-white border-[3px] border-[#7C3AED] rounded-full shadow-md z-20"
            style={{ left: '50%', top: '25%', transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, type: 'spring', bounce: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#7C3AED] rounded-full -z-10"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.div
            className="absolute bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 z-30"
            style={{ left: '50%', top: '25%', transform: 'translate(-50%, -160%)' }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, type: 'spring', bounce: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_4px_#A78BFA]" />
            24 Views
          </motion.div>

          <motion.div
            className="absolute w-[1px] bg-gradient-to-b from-[#7C3AED]/40 to-transparent z-10"
            style={{ left: '50%', top: '25%', bottom: '1.5rem', transform: 'translateX(-50%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
          />

          <div className="absolute bottom-0 left-0 w-full flex justify-between text-[9px] font-bold text-gray-300 uppercase tracking-widest px-1">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function TapShareCollageVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] bg-gray-50/50 overflow-hidden shadow-inner border border-gray-100 isolate flex items-center justify-center p-6 sm:p-10">
      <motion.div
        className="absolute top-[8%] left-[5%] w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10"
        initial={{ opacity: 0, rotate: -8, scale: 0.95, x: -10 }}
        whileInView={{ opacity: 1, rotate: -4, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
          alt="Two professionals networking at a conference"
          className="w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-black/5" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-6 sm:left-10 bg-white px-3.5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 z-30 flex items-center gap-2.5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: 'spring', bounce: 0.5 }}
      >
        <div className="relative flex items-center justify-center w-3 h-3">
          <motion.div
            className="absolute inset-0 bg-[#22C55E] rounded-full opacity-40 blur-[2px]"
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] relative z-10" />
        </div>
        <span className="text-xs font-bold text-gray-900 tracking-wide">Shared in 1 tap</span>

        <div className="w-[1px] h-3 bg-gray-200 mx-0.5" />
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}>
          <SmartphoneNfc size={14} className="text-[#7C3AED]" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-[10%] right-[5%] w-[60%] h-[55%] sm:w-[50%] sm:h-[50%] z-20">
        <motion.div
          className="absolute inset-0 bg-[#7C3AED]/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40"
          style={{ transformOrigin: 'bottom right' }}
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -15, x: -10, y: 10 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', bounce: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-[#7C3AED]/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/30"
          style={{ transformOrigin: 'bottom right' }}
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -8, x: -5, y: 5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, type: 'spring', bounce: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-[#8B5CF6] overflow-hidden flex flex-col p-4 sm:p-5"
          initial={{ opacity: 0, rotate: 10, y: 20 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl translate-y-1/3 -translate-x-1/4" />

          <div className="flex justify-between items-start z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 shadow-inner overflow-hidden bg-white/10">
              <img src="https://i.pravatar.cc/150?u=davidchen" alt="David Chen" className="w-full h-full rounded-full object-cover" />
            </div>
            <motion.div className="bg-white/10 p-1.5 rounded-lg border border-white/20 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
              <QrCode size={18} className="text-white opacity-90" />
            </motion.div>
          </div>

          <div className="flex-1" />

          <div className="z-10 text-white relative">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-0.5">David Chen</h4>
            <p className="text-[10px] sm:text-[11px] text-violet-200 font-medium tracking-wide">Event Director @ TechSummit</p>
          </div>

          <motion.div
            className="absolute top-1/2 right-1/2 w-32 h-32 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            animate={{ scale: [0.8, 1.2], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          />
        </motion.div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ zIndex: 25 }}>
        <motion.path
          d="M 120 85% C 160 85%, 220 80%, 250 75%"
          fill="none"
          stroke="#C4B5FD"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
