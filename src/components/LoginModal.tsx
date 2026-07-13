import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Mail, Sparkles, Check } from "lucide-react";
import { googleSignIn } from "../lib/firebaseAuth";

interface User {
  username: string;
  email: string;
  avatar: number; // Pokemon ID for avatar artwork
  isGoogleUser?: boolean;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightTheme: boolean;
  onLoginSuccess: (user: User) => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  isLightTheme,
  onLoginSuccess,
}: LoginModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setError(null);
    setSuccess(null);
    setIsGoogleLoading(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setSuccess(`Welcome back, ${result.user.displayName || "Trainer"}!`);
        setTimeout(() => {
          onLoginSuccess({
            username: result.user.displayName || result.user.email?.split("@")[0] || "Trainer",
            email: result.user.email || "",
            avatar: 25,
            isGoogleUser: true,
          });
          onClose();
        }, 1500);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google authentication failed. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Main modal container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className={`relative w-full max-w-md rounded-[2.5rem] border overflow-hidden p-8 z-10 shadow-2xl ${
          isLightTheme
            ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-900"
            : "bg-[#0F0F10] border-white/5 text-[#F4F4F5]"
        }`}
      >
        {/* Holographic scanner effect line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-pulse" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full cursor-pointer transition-all border ${
            isLightTheme
              ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
              : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-500 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase">
              Secure Trainer Linkage
            </span>
          </div>
          <h3 className="font-display font-black text-2xl uppercase tracking-tight">
            Trainer Console
          </h3>
          <p className={`text-xs mt-2 max-w-sm mx-auto leading-relaxed ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>
            Connect your Gmail / Google Trainer Account to access cloud synchronization, favorites backup, and interactive email notifications directly!
          </p>
        </div>

        {/* Notification Feedbacks */}
        <div className="space-y-4">
          {error && (
            <div className="p-3.5 text-xs rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium text-center leading-normal">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3.5 text-xs rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>{success}</span>
            </div>
          )}

          {/* Google/Gmail authenticate trigger card */}
          <div className={`p-6 rounded-3xl border flex flex-col items-center gap-5 text-center ${
            isLightTheme ? "bg-slate-50/50 border-[#E5DDD0]/50" : "bg-[#151516] border-white/5"
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
              <Mail className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-sm">Sign in with Gmail</h4>
              <p className="text-[11px] text-slate-500 leading-normal max-w-[240px]">
                Authorize secure access to your Trainer ID and enable local email reporting.
              </p>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isGoogleLoading}
              className={`w-full py-3.5 px-5 rounded-2xl text-xs font-bold font-display uppercase tracking-wider cursor-pointer shadow-lg transition-all flex items-center justify-center gap-3 border ${
                isLightTheme
                  ? "bg-white hover:bg-slate-50 text-slate-800 border-slate-200/80 hover:border-slate-300"
                  : "bg-white text-slate-950 border-transparent hover:bg-slate-100 font-black"
              } disabled:opacity-50`}
            >
              {isGoogleLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              )}
              <span>{isGoogleLoading ? "Connecting..." : "Continue with Google"}</span>
            </button>
          </div>
        </div>

        {/* Security / Privacy notice */}
        <p className="text-[10px] text-slate-500 text-center mt-6 leading-normal max-w-xs mx-auto">
          We process auth securely via official Google Firebase servers. Your email is never shared.
        </p>
      </motion.div>
    </div>
  );
}
