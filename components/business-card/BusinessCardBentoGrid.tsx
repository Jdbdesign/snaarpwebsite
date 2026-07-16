'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  RefreshCw, Share2, UserPlus, BarChart3, QrCode, Link2, Calendar, Search, Check, Phone, Mail,
  Camera, Play, Hand, Send, ThumbsUp, Music, Wifi, BadgeCheck, TrendingUp, MousePointer2,
} from 'lucide-react';

const SHARING_OPTIONS = [
  { id: 'qr', Icon: QrCode, label: 'QR Code' },
  { id: 'link', Icon: Link2, label: 'Share Link' },
  { id: 'nfc', Icon: Wifi, label: 'NFC Tap', iconClass: 'rotate-90' },
];

export function BusinessCardBentoGrid() {
  const prefersReducedMotion = useReducedMotion();
  const [sharingIndex, setSharingIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setSharingIndex((prev) => (prev + 1) % SHARING_OPTIONS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const currentOption = SHARING_OPTIONS[sharingIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Why teams choose Business Card
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Live Updates (Wide) */}
        <motion.div
          className="md:col-span-7 bg-white rounded-[2rem] border border-gray-200/80 shadow-[0_2px_16px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 w-full relative flex items-center justify-center p-6 sm:p-8 min-h-[300px] sm:min-h-[360px] overflow-hidden bg-gray-50/50">
            <div className="relative w-full max-w-[280px] h-[340px] flex items-center justify-center mt-12 mb-8 z-10">
              <motion.div
                className="absolute z-10 w-[200px] sm:w-[220px] h-[400px] bg-white rounded-[2.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border-[6px] border-gray-900 overflow-hidden flex flex-col items-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-30" />

                <div className="w-full flex flex-col items-center relative h-full bg-gray-50 pb-4">
                  <div
                    className="w-full h-24 bg-gradient-to-r from-orange-200 to-amber-200"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />

                  <div className="flex flex-col items-center -mt-10 bg-white w-[90%] rounded-2xl shadow-sm p-4 relative z-20">
                    <div className="w-16 h-16 rounded-full bg-white p-1 shadow-sm mb-2">
                      <img src="https://i.pravatar.cc/150?u=maya" alt="Maya" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="text-[13px] font-bold text-gray-900 flex items-center gap-1">
                      Maya Chen <BadgeCheck size={12} className="text-blue-500" />
                    </div>

                    <div className="h-4 overflow-hidden relative w-full text-center mt-0.5">
                      <motion.div
                        animate={{ y: [0, -16, -16, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.5, 0.9] }}
                      >
                        <div className="h-4 text-[10px] text-gray-500 font-medium">Art Director</div>
                        <div className="h-4 text-[10px] text-violet-600 font-bold flex items-center justify-center gap-1">Creative Director <RefreshCw size={8} /></div>
                      </motion.div>
                    </div>

                    <div className="flex gap-3 mt-3">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600"><Phone size={12} /></div>
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600"><Mail size={12} /></div>
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600"><UserPlus size={12} /></div>
                    </div>
                    <div className="w-full bg-violet-600 text-white text-[10px] font-bold py-2 rounded-xl mt-4 text-center shadow-sm cursor-pointer">
                      Connect With Me
                    </div>
                  </div>

                  <div className="mt-3 bg-white w-[90%] rounded-2xl shadow-sm p-3 pb-4 flex flex-col">
                    <div className="text-[9px] font-medium text-gray-400 mb-2.5 text-center">My Links</div>
                    <div className="grid grid-cols-3 gap-y-3 gap-x-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white"><Camera size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">Instagram</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white"><Play size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">YouTube</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600"><Hand size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">Clubhouse</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-sky-400 flex items-center justify-center text-white"><Send size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">Telegram</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white"><ThumbsUp size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">Facebook</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white"><Music size={14} /></div>
                        <span className="text-[7px] text-gray-600 font-medium">TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute z-20 w-[140px] sm:w-[160px] h-[90px] sm:h-[100px] bg-violet-600 rounded-xl shadow-2xl border border-violet-500/50 flex flex-col justify-between p-3 sm:p-4"
                initial={{ y: -100, x: -70, rotate: -20 }}
                animate={{ y: [-100, -35, -100], x: [-70, -20, -70], rotate: [-20, -5, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'bottom right' }}
              >
                <div className="flex justify-end">
                  <Wifi size={14} className="text-violet-300 rotate-90" />
                </div>
                <div className="text-white font-bold text-lg sm:text-xl tracking-tight">Tap.</div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full border-[3px] border-violet-400 z-30"
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.45] }}
                />
              </motion.div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-8 pt-2 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
              <RefreshCw size={20} />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Live updates</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
                Change your info once, and every shared card updates instantly — nothing to resend, nothing to reprint.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Share (Narrow) */}
        <motion.div
          className="md:col-span-5 bg-white rounded-[2rem] border border-gray-200/80 shadow-[0_2px_16px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex-1 w-full relative flex flex-col items-center justify-center p-6 sm:p-8 min-h-[300px]">
            <div className="absolute top-8 flex items-center gap-2 text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full z-10">
              <Share2 size={14} /> 3 sharing options
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full mt-8">
              <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentOption.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center text-violet-600"
                  >
                    <currentOption.Icon strokeWidth={1.5} className={`w-28 h-28 ${currentOption.iconClass || ''}`} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="h-8 relative w-full flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentOption.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute text-xl font-bold text-violet-600"
                  >
                    {currentOption.label}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-8 pt-2 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
              <Share2 size={20} />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Share via QR, link, or NFC</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">Whatever&rsquo;s fastest for the moment.</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Auto-Save (Narrow) */}
        <motion.div
          className="md:col-span-5 bg-white rounded-[2rem] border border-gray-200/80 shadow-[0_2px_16px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 w-full relative flex items-center justify-center p-6 sm:p-8 min-h-[300px] sm:min-h-[360px] bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-[280px] h-[320px] bg-white rounded-t-[2.5rem] shadow-[0_-8px_30px_rgb(0,0,0,0.06)] border border-b-0 border-gray-200/80 p-5 relative z-10 translate-y-10 flex flex-col">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5" />

              <div className="flex items-center justify-between mb-5">
                <span className="text-xl font-bold text-gray-900 tracking-tight">Contacts</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-violet-600">
                  <UserPlus size={16} />
                </div>
              </div>

              <div className="w-full bg-gray-50 rounded-xl p-2.5 flex items-center gap-2 mb-5">
                <Search size={14} className="text-gray-400" />
                <span className="text-[11px] text-gray-400 font-medium">Search contacts</span>
              </div>

              <div className="space-y-4 flex-1 overflow-hidden relative">
                <div className="flex items-center gap-3 opacity-60 px-1">
                  <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=4" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-[13px] font-bold text-gray-900 leading-none">Alex Thompson</div>
                    <div className="text-[11px] text-gray-500 leading-none">Product Manager</div>
                  </div>
                </div>

                <motion.div
                  className="flex items-center gap-3 px-1 py-1.5 -mx-1 rounded-xl"
                  animate={prefersReducedMotion ? { backgroundColor: 'rgba(139, 92, 246, 0)', opacity: 1 } : {
                    backgroundColor: ['rgba(139, 92, 246, 0)', 'rgba(139, 92, 246, 0)', 'rgba(139, 92, 246, 0.08)', 'rgba(139, 92, 246, 0.08)', 'rgba(139, 92, 246, 0)'],
                    opacity: [0, 0, 1, 1, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.44, 0.45, 0.85, 0.95] }}
                >
                  <div className="w-10 h-10 rounded-full bg-violet-100 shrink-0 overflow-hidden border border-violet-200">
                    <img src="https://i.pravatar.cc/150?u=elena" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-[13px] font-bold text-gray-900 leading-none">Elena Rivera</div>
                    <div className="text-[11px] text-violet-600 font-medium leading-none">Creative Director</div>
                  </div>
                </motion.div>

                <div className="flex items-center gap-3 opacity-60 px-1">
                  <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=7" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-[13px] font-bold text-gray-900 leading-none">David Kim</div>
                    <div className="text-[11px] text-gray-500 leading-none">Engineering</div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white bg-gray-900/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-xl z-30 whitespace-nowrap"
                animate={prefersReducedMotion ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 1, 1, 0],
                  y: [10, 10, 0, 0, 10],
                  scale: [0.9, 0.9, 1, 1, 0.9],
                }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.55, 0.85, 0.95], ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-[11px] font-bold tracking-wide">Saved to Contacts</span>
              </motion.div>
            </div>

            <motion.div
              className="absolute z-20 w-[220px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(124,58,237,0.15)] border border-gray-100 p-4 overflow-hidden flex flex-col items-center gap-3 origin-bottom"
              initial={{ y: -80, scale: 1.1, opacity: 0 }}
              animate={prefersReducedMotion ? { y: 20, scale: 0.9, opacity: 1 } : {
                y: [-80, -30, 40, 40],
                scale: [1.1, 1, 0.7, 0.7],
                opacity: [0, 1, 0, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.45, 1], ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <div className="w-16 h-16 rounded-full bg-violet-50 p-1 shrink-0 flex items-center justify-center overflow-hidden shadow-sm mt-1">
                <img src="https://i.pravatar.cc/150?u=elena" alt="" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <span className="text-base font-bold text-gray-900 leading-tight">Elena Rivera</span>
                <span className="text-[11px] text-violet-600 font-bold bg-violet-50 px-2.5 py-0.5 rounded-md">Creative Director</span>
              </div>

              <div className="w-full flex justify-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                  <Phone size={12} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                  <Mail size={12} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                  <Link2 size={12} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="px-6 sm:px-8 pb-8 pt-2 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-violet-50 text-violet-600">
              <UserPlus size={20} />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Auto-save to Contacts</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">Your details land straight in their address book when shared.</p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Analytics (Wide) */}
        <motion.div
          className="md:col-span-7 bg-white rounded-[2rem] border border-gray-200/80 shadow-[0_2px_16px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex-1 w-full relative flex items-center justify-center p-6 sm:p-8 min-h-[300px] bg-[#f5f5f5] overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
            </div>

            <motion.div
              className="w-full max-w-[340px] bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5 relative z-10"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Profile Views</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900 tracking-tight">1,248</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5"><TrendingUp size={10} /> 24%</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <BarChart3 size={14} />
                </div>
              </div>

              <div className="h-28 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="bcardBentoChartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#F3F4F6" strokeWidth="0.5" strokeDasharray="1 2" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#F3F4F6" strokeWidth="0.5" strokeDasharray="1 2" />
                  <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#F3F4F6" strokeWidth="0.5" strokeDasharray="1 2" />

                  <motion.path
                    d="M0,45 Q15,40 25,35 T50,25 T75,15 T100,5 L100,50 L0,50 Z"
                    fill="url(#bcardBentoChartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />

                  <motion.path
                    d="M0,45 Q15,40 25,35 T50,25 T75,15 T100,5"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                  />

                  <motion.circle
                    cx="75" cy="15" r="3.5"
                    fill="#fff" stroke="#06b6d4" strokeWidth="2"
                    className="drop-shadow-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, type: 'spring', stiffness: 300, damping: 15 }}
                  />
                </svg>

                <motion.div
                  className="absolute bg-gray-900 text-white px-2.5 py-1.5 rounded-lg shadow-xl flex flex-col items-center pointer-events-none z-20"
                  style={{ left: '75%', top: '30%', x: '-50%', y: '-100%' }}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={prefersReducedMotion ? { opacity: 1, y: -6, scale: 1 } : {
                    opacity: [0, 1, 1, 0],
                    y: [10, -6, -6, -10],
                    scale: [0.9, 1, 1, 0.95],
                  }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.85, 1], delay: 1.8 }}
                >
                  <span className="text-[11px] font-bold tracking-wide">84 Views</span>
                  <span className="text-[9px] text-gray-300 font-medium">Wed, 14th</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-gray-50">
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Contact Saves</div>
                  <div className="text-[15px] font-bold text-gray-900">342</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Link Clicks</div>
                  <div className="text-[15px] font-bold text-gray-900">891</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute z-20 top-8 sm:top-12 right-4 sm:right-10 bg-white rounded-xl shadow-[0_8px_24px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2.5"
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            >
              <div className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                <UserPlus size={12} />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] font-bold text-gray-900 leading-tight">+12 Saves</span>
                <span className="text-[9px] text-gray-400 font-medium">Today</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute z-20 bottom-8 sm:bottom-12 left-4 sm:left-10 bg-white rounded-xl shadow-[0_8px_24px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2.5"
              initial={{ opacity: 0, y: 20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <MousePointer2 size={12} />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-[10px] font-bold text-gray-900 leading-tight">Link Clicked</span>
                <span className="text-[9px] text-gray-400 font-medium">Just now</span>
              </div>
            </motion.div>
          </div>
          <div className="px-6 sm:px-8 pb-8 pt-2 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-cyan-50 text-cyan-600">
              <BarChart3 size={20} />
            </div>
            <div className="flex flex-col pt-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">View analytics</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">See views, saves, and shares on your card.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
