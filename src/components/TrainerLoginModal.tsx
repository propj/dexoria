import React, { useState } from "react";
import { createPortal } from "react-dom";
import { 
  User, Lock, Sparkles, X, ShieldCheck, Mail, Bell, KeyRound, Check, Cloud, Award, Sword
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TrainerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightTheme: boolean;
}

export default function TrainerLoginModal({
  isOpen,
  onClose,
  isLightTheme,
}: TrainerLoginModalProps) {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setIsJoined(true);
    }
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
              isLightTheme
                ? "bg-white border-slate-200 text-slate-900 shadow-2xl shadow-slate-900/30"
                : "bg-[#0F111A] border-white/10 text-white shadow-2xl shadow-black/90"
            }`}
          >
          {/* Top Banner Accent */}
          <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-xl border transition-all cursor-pointer z-20 ${
              isLightTheme
                ? "bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header & Status */}
          <div className="p-6 sm:p-8 pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-500 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    COMING SOON · V2.0
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                </div>
                <h2 className={`font-display font-black text-2xl uppercase tracking-tight leading-none mt-1 ${
                  isLightTheme ? "text-slate-900" : "text-white"
                }`}>
                  Trainer Passport & Login
                </h2>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Dexoria Cloud Account features are currently in active development. Soon you'll be able to sign in to save your Pokédex progress, custom teams, and favorite Pokémon seamlessly.
            </p>
          </div>

          {/* Disabled Preview Login Form */}
          <div className="px-6 sm:px-8 py-4 space-y-3">
            <div className="opacity-60 pointer-events-none space-y-3">
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Trainer Email or ID
                </label>
                <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border ${
                  isLightTheme ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-white/5 border-white/10 text-slate-400"
                }`}>
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    disabled
                    value="trainer.ash@dexoria.io"
                    className="bg-transparent text-xs w-full font-mono outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold uppercase text-slate-400 mb-1">
                  Passcode
                </label>
                <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border ${
                  isLightTheme ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-white/5 border-white/10 text-slate-400"
                }`}>
                  <KeyRound className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="password"
                    disabled
                    value="••••••••••••"
                    className="bg-transparent text-xs w-full font-mono outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Disabled Action Button with Badge */}
            <div className="relative pt-1">
              <button
                disabled
                className="w-full py-3 rounded-2xl bg-slate-800 text-slate-500 font-mono font-bold text-xs uppercase tracking-wider cursor-not-allowed border border-white/5 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Trainer Sign-In Disabled (In Development)</span>
              </button>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className={`mx-6 sm:mx-8 my-3 p-4 rounded-2xl border text-xs font-sans ${
            isLightTheme ? "bg-slate-50 border-slate-200/80" : "bg-white/3 border-white/5"
          }`}>
            <span className="text-[10px] font-mono font-bold uppercase text-blue-500 tracking-wider block mb-2">
              UPCOMING TRAINER CLOUD FEATURES
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Cross-Device Cloud Sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Trainer Badge Badges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sword className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Custom Team Showcases</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Shiny Living Dex Tracker</span>
              </div>
            </div>
          </div>

          {/* Interactive Waitlist / Notification Form */}
          <div className={`p-6 sm:p-8 border-t ${
            isLightTheme ? "bg-slate-100/70 border-slate-200" : "bg-[#0A0C14] border-white/10"
          }`}>
            {!isJoined ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-500 tracking-wider">
                    EARLY ACCESS WAITLIST
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Get notified when login launches
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`flex-1 flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs ${
                    isLightTheme ? "bg-white border-slate-300 text-slate-900" : "bg-white/5 border-white/10 text-white"
                  }`}>
                    <Bell className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="bg-transparent w-full text-xs outline-none placeholder-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-blue-500/20 shrink-0"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <div>
                  <span className="font-bold block">You're on the Trainer Cloud Waitlist!</span>
                  <span className="text-[10px] text-emerald-500/80">We'll notify {waitlistEmail} as soon as Trainer Passports open.</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
