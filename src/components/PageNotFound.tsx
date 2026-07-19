import React, { useState, useEffect } from "react";
import { AlertTriangle, Home, Compass, ArrowRight } from "lucide-react";

interface PageNotFoundProps {
  isLightTheme: boolean;
  onRedirectHome: () => void;
  onRedirectPokedex: () => void;
}

export default function PageNotFound({
  isLightTheme,
  onRedirectHome,
  onRedirectPokedex,
}: PageNotFoundProps) {
  const [countdown, setCountdown] = useState<number>(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onRedirectHome();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onRedirectHome]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 animate-fade-in relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div
        className={`max-w-md w-full p-8 md:p-10 rounded-3xl border text-center shadow-2xl relative z-10 transition-all duration-300 ${
          isLightTheme
            ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-slate-200"
            : "bg-[#111112]/80 border-white/5 text-slate-100 shadow-black"
        }`}
      >
        {/* Animated Icon Wrapper */}
        <div className="flex justify-center mb-6 relative">
          <div className="absolute w-20 h-20 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border relative z-10 animate-bounce ${
            isLightTheme
              ? "bg-amber-50 border-amber-200 text-amber-500"
              : "bg-amber-500/10 border-amber-500/20 text-amber-400"
          }`}>
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>

        {/* Humorous Title and Slogan */}
        <h1 className="font-display font-black text-4xl tracking-tight mb-2">
          Wild 404!
        </h1>
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 dark:text-amber-400 mb-4">
          Blocked Your Path
        </p>

        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
          The page you are looking for has fled into the tall grass or was never registered in the local Dex archives. Let's get you back to safety!
        </p>

        {/* Automatic Countdown Alert Banner */}
        <div className={`p-4 rounded-xl border text-xs font-semibold mb-8 transition-colors ${
          isLightTheme
            ? "bg-slate-50 border-slate-200 text-slate-600"
            : "bg-white/3 border-white/5 text-slate-400"
        }`}>
          <span>Automatically fleeing to safety in </span>
          <span className="text-amber-500 dark:text-amber-400 font-bold text-sm px-1.5 animate-pulse">
            {countdown}
          </span>
          <span>seconds...</span>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRedirectHome}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
          >
            <Home className="w-4 h-4" />
            <span>Flee to Home</span>
          </button>

          <button
            onClick={onRedirectPokedex}
            className={`px-5 py-3 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 hover:scale-[1.02] ${
              isLightTheme
                ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                : "bg-slate-900 border-white/10 text-slate-200 hover:bg-white/5"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Explore Dex</span>
          </button>
        </div>
      </div>
    </div>
  );
}
