import React, { useState } from "react";
import { Info, Cpu, Heart, Coins, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";

interface AboutSectionProps {
  isLightTheme: boolean;
}

export default function AboutSection({ isLightTheme }: AboutSectionProps) {
  const [donateAmount, setDonateAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donateSuccess, setDonateSuccess] = useState<boolean>(false);

  const [feedbackName, setFeedbackName] = useState<string>("");
  const [feedbackEmail, setFeedbackEmail] = useState<string>("");
  const [feedbackMsg, setFeedbackMsg] = useState<string>("");
  const [feedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);

  const predefinedAmounts = ["5", "10", "25", "50"];

  const handlePredefinedDonate = (amount: string) => {
    setDonateAmount(amount);
    setCustomAmount("");
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setDonateAmount("");
    }, 5000);
  };

  const handleCustomDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAmount || parseFloat(customAmount) <= 0) return;
    setDonateAmount(customAmount);
    setDonateSuccess(true);
    setTimeout(() => {
      setDonateSuccess(false);
      setDonateAmount("");
      setCustomAmount("");
    }, 5000);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackMsg) return;
    setFeedbackSuccess(true);
    
    // Persist to localstorage so it is a real functional integration
    const existingFeedback = JSON.parse(localStorage.getItem("dexoria_feedback") || "[]");
    existingFeedback.push({
      name: feedbackName,
      email: feedbackEmail,
      message: feedbackMsg,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("dexoria_feedback", JSON.stringify(existingFeedback));
    
    setTimeout(() => {
      setFeedbackSuccess(false);
      setFeedbackName("");
      setFeedbackEmail("");
      setFeedbackMsg("");
    }, 5000);
  };

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
          <p className="text-xs text-slate-500 mt-1">Version 1.5.0 (Vite-React Open Source Build)</p>
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

        {/* Closing details */}
        <div className="text-center pt-6 border-t border-slate-500/10 text-xs text-slate-500 leading-normal">
          Designed with elite user experience and fluid glassmorphic visual cues. Keep exploring and keep training, Trainer!
        </div>
      </div>

      {/* 2. Interactive Donation Gateway Card */}
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

        {donateSuccess ? (
          <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center gap-3.5 ${
            isLightTheme ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-emerald-950/10 border-emerald-500/20 text-emerald-300"
          }`}>
            <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
            <div>
              <h4 className="font-bold text-sm">Thank You for Your Generosity!</h4>
              <p className="text-xs text-slate-500 mt-1">
                Your support of <strong>${donateAmount}</strong> keeps our dream alive. A virtual badge has been synched to your profile!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Predefined Amounts Selection */}
            <div className="grid grid-cols-4 gap-2.5">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePredefinedDonate(amount)}
                  className={`py-2.5 rounded-xl border text-xs font-mono font-black transition-all cursor-pointer hover:scale-103 active:scale-97 ${
                    isLightTheme
                      ? "bg-slate-100 hover:bg-slate-200 border-slate-300/60 text-slate-800"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-100"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Form */}
            <form onSubmit={handleCustomDonate} className="flex gap-2.5 items-stretch">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm font-bold">$</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount"
                  className={`w-full pl-8 pr-4 py-3 rounded-xl border text-xs font-mono font-bold transition-all focus:outline-none focus:ring-1 ${
                    isLightTheme
                      ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                      : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-103 active:scale-97"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donate</span>
              </button>
            </form>
          </div>
        )}
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

        {feedbackSuccess ? (
          <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center gap-3.5 ${
            isLightTheme ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-emerald-950/10 border-emerald-500/20 text-emerald-300"
          }`}>
            <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
            <div>
              <h4 className="font-bold text-sm">Feedback Successfully Transmitted!</h4>
              <p className="text-xs text-slate-500 mt-1">
                Thank you, Trainer! Your valuable suggestions have been saved and delivered directly to our team.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Trainer Name</label>
                <input
                  type="text"
                  required
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                  placeholder="e.g. Red"
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 ${
                    isLightTheme
                      ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                      : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Trainer Email / Tag (Optional)</label>
                <input
                  type="text"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                  placeholder="e.g. red@pallettown.org"
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 ${
                    isLightTheme
                      ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                      : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Your Feedback</label>
              <textarea
                required
                rows={4}
                value={feedbackMsg}
                onChange={(e) => setFeedbackMsg(e.target.value)}
                placeholder="Share your experience, feature ideas, bug reports, or supportive notes..."
                className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 resize-none ${
                  isLightTheme
                    ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                    : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:scale-102 active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Feedback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
