import React from "react";
import { Info, Cpu, Coins, MessageSquare, Sparkles } from "lucide-react";

// Import the generated QR code image
// @ts-ignore
import donateQr from "../assets/images/donate_qr.png";

interface AboutSectionProps {
  isLightTheme: boolean;
}

export default function AboutSection({ isLightTheme }: AboutSectionProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 space-y-8 select-none">
      {/* 1. About Core Card */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-8 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        {/* Title branding */}
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mx-auto mb-4 border border-blue-500/20 animate-pulse">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">About Dexoria Pokédex</h2>
        </div>

        {/* Narrative core */}
        <p className={`text-sm md:text-base leading-relaxed text-center ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
          Dexoria is a state-of-the-art interactive Pokédex application built to explore the entirety of Pokémon lore spanning generations 1 through 9. Powered by direct real-time hooks into <strong>PokéAPI</strong>, it delivers high-fidelity statistical comparisons, visual galleries, element matrices, and lore archives instantly.
        </p>

        {/* Highlight Section: Weekend Updates & Upcoming Features */}
        <div className={`p-5 rounded-2xl border text-center relative overflow-hidden ${
          isLightTheme 
            ? "bg-blue-50/50 border-blue-200 text-blue-900" 
            : "bg-blue-950/15 border-blue-500/10 text-blue-200"
        }`}>
          <div className="absolute top-0 right-0 p-1 bg-blue-500 text-white rounded-bl-xl text-[8px] font-mono uppercase tracking-widest font-black animate-pulse">
            LATEST NEWS
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin [animation-duration:6s]" />
            <span className="text-xs font-bold uppercase tracking-wider">Updates & Roadmaps</span>
          </div>
          <p className="text-sm md:text-base font-extrabold leading-normal">
            More updates coming every weekend so stay tuned for something big in a few months!
          </p>
        </div>

        {/* Core items columns */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div
            className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
              isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/3 border-white/5"
            }`}
          >
            <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-sm">Fan-Driven Project</h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                This is a non-commercial, fully open-source tribute project honoring Pokémon. All trademarks and registered assets belong entirely to © Nintendo, Game Freak, and Creatures Inc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Donation Gateway Card (QR code implementation only) */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-6 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        <div className="flex items-center gap-3.5 border-b border-slate-500/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
            <Coins className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-black text-lg md:text-xl">Please Support Us</h3>
            <p className="text-xs text-slate-500 mt-0.5">Keep the server and development running</p>
          </div>
        </div>

        <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>
          Dexoria is <strong>100% open-sourced and free to use</strong> for trainers all across the globe. Since we do not host ads or commercial tiers, voluntary community support is highly appreciated and helps us cover PokéAPI query optimization caches, server nodes, and dedicated weekly development.
        </p>

        {/* Custom Centered QR Code section with no extra buttons/inputs */}
        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          <div className={`relative p-4 rounded-2xl border shadow-lg transition-all duration-300 max-w-[260px] ${
            isLightTheme 
              ? "bg-white border-slate-200 shadow-slate-100" 
              : "bg-slate-900/60 border-white/10 shadow-black/40"
          }`}>
            <img 
              src={donateQr} 
              alt="Donate QR Code" 
              className="w-full h-auto rounded-lg object-contain"
            />
            {/* Subtle corner tech-accents for aesthetics */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-blue-500" />
          </div>

          <div className="text-center space-y-1">
            <span className={`text-[11px] font-black tracking-widest uppercase block ${
              isLightTheme ? "text-blue-600" : "text-blue-400"
            }`}>
              UPI / Google Pay
            </span>
            <p className="text-xs text-slate-500 max-w-xs leading-normal">
              Scan this QR code using Google Pay or any UPI enabled banking app to donate and support our work!
            </p>
          </div>
        </div>
      </div>

      {/* 3. User Feedback & Reach Out Card */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-6 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        <div className="flex items-center gap-3.5 border-b border-slate-500/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-black text-lg md:text-xl">Send Us Your Feedback</h3>
            <p className="text-xs text-slate-500 mt-0.5">Let us know how we can make Dexoria even better</p>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border text-center py-8 ${
          isLightTheme
            ? "bg-blue-50/40 border-blue-200/60 text-slate-700"
            : "bg-blue-950/10 border-blue-500/20 text-slate-300"
        }`}>
          <p className="text-sm md:text-base font-semibold leading-relaxed">
            for any queries or feedback pls emal us on{" "}
            <a 
              href="mailto:dexoriasupporthelp@gmail.com" 
              className="text-blue-500 hover:text-blue-400 font-bold transition-colors underline decoration-2 underline-offset-4"
            >
              dexoriasupporthelp@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
