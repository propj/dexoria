import React, { useState } from "react";
import {
  Users,
  Lock,
  Share2,
  Send,
  Check,
  Bell,
  Award,
  Clock,
  ShieldCheck,
  Star,
  Zap,
  BadgeCheck
} from "lucide-react";

interface CommunitySectionProps {
  isLightTheme: boolean;
}

export default function CommunitySection({ isLightTheme }: CommunitySectionProps) {
  // Waitlist Email State
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(() => {
    return localStorage.getItem("dexoria_community_waitlist") === "true";
  });
  const [waitlistFeedback, setWaitlistFeedback] = useState<string | null>(null);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;

    localStorage.setItem("dexoria_community_waitlist", "true");
    setIsSubscribed(true);
    setWaitlistFeedback("🎉 You are registered for Trainer Profile early access!");
    setTimeout(() => setWaitlistFeedback(null), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 animate-fade-in">
      {/* Top Banner Hero Header */}
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-10 border shadow-2xl bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 text-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-2 animate-pulse shadow-lg shadow-amber-500/10">
              <Lock className="w-3.5 h-3.5" />
              FEATURE IN DEVELOPMENT • COMING SOON
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-slate-300 border border-white/10 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-blue-400" />
              Official Launch Target: Q4 2026
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight text-white mb-4 leading-tight">
            Pokémon Trainer Profiles & Passport Hub
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We are building custom digital Trainer Passports for Pokémon enthusiasts. Showcase your favorite battle squad, display regional badges, record battle stats, and build your rival network.
          </p>

          {/* Waitlist Subscription Box */}
          <div className={`p-4 md:p-6 rounded-2xl border backdrop-blur-xl max-w-xl ${
            isLightTheme
              ? "bg-white/10 border-white/20"
              : "bg-slate-900/60 border-white/10"
          }`}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              Get Early Profile Reservation & Beta Invites
            </h3>

            {isSubscribed ? (
              <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs md:text-sm font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You're registered for early Trainer Profile access! We will email you as soon as reservations open.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your email to reserve your Trainer ID..."
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-white placeholder-slate-400 text-xs md:text-sm focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs md:text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Reserve Trainer ID</span>
                </button>
              </form>
            )}

            {waitlistFeedback && (
              <p className="text-emerald-400 text-xs font-semibold mt-2.5 animate-fade-in flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                {waitlistFeedback}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Trainer Profile Showcase Card */}
      <div className="space-y-8">
        <div className={`p-8 md:p-10 rounded-3xl border text-center relative overflow-hidden ${
          isLightTheme
            ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-lg"
            : "bg-slate-950/40 border-white/5 text-slate-100 shadow-2xl"
        }`}>
          <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20">
            <Users className="w-8 h-8" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30">
              FEATURE PREVIEW
            </span>
          </div>

          <h2 className="font-display font-black text-2xl md:text-3xl mb-3">
            Custom Trainer Passports & Identity Cards
          </h2>

          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-8">
            Build your personal trainer identity. Customize your avatar sprite, display favorite Pokémon partners, pin earned regional gym badges, and track your battle win/loss ratios.
          </p>

          {/* Interactive Mock Passport Card Preview */}
          <div className="max-w-xl mx-auto mb-10 text-left">
            <div className={`p-6 md:p-8 rounded-3xl border relative overflow-hidden shadow-2xl transition-all ${
              isLightTheme
                ? "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white border-indigo-500/30"
                : "bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950 text-white border-purple-500/30"
            }`}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BadgeCheck className="w-5 h-5 text-amber-400" />
                    <span className="font-mono text-xs font-extrabold tracking-widest text-amber-300 uppercase">
                      OFFICIAL TRAINER PASSPORT
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">Red Pallet</h3>
                  <p className="text-xs text-slate-400 font-mono">ID: #TR-882049 • Origin: Kanto Region</p>
                </div>

                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  VERIFIED CHAMPION
                </span>
              </div>

              {/* Mock Roster */}
              <div className="mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                  Featured Partner Roster
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[
                    { name: "Pikachu", bg: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
                    { name: "Charizard", bg: "bg-red-500/20 text-red-300 border-red-500/30" },
                    { name: "Snorlax", bg: "bg-slate-500/20 text-slate-300 border-slate-500/30" },
                    { name: "Lapras", bg: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                    { name: "Venusaur", bg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
                    { name: "Espeon", bg: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
                  ].map((mon, idx) => (
                    <div key={idx} className={`p-2 rounded-xl border text-center ${mon.bg}`}>
                      <p className="text-[10px] font-bold truncate">{mon.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Stats Row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Kanto Badges</span>
                  <span className="font-display font-black text-lg text-amber-400">8 / 8</span>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Battle Elo</span>
                  <span className="font-display font-black text-lg text-blue-400">1840 PTS</span>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 block">Shiny Milestones</span>
                  <span className="font-display font-black text-lg text-purple-400">42 Found</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left mb-8">
            <div className={`p-6 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-sm">Trainer Card Customizer</h4>
                </div>
                <span className="text-[9px] font-black uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">Coming Soon</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose custom regional badges, avatar sprites, favorite Pokémon partners, and show off completed Pokédex badges.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-sm">Friends & Rivalry List</h4>
                </div>
                <span className="text-[9px] font-black uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">Coming Soon</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Add friends using custom Trainer IDs, view online battle statuses, and request friendly 6v6 sparring sessions.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <h4 className="font-bold text-sm">Signature Team Showcase</h4>
                </div>
                <span className="text-[9px] font-black uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">Coming Soon</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Export custom Pokédex team rosters directly from Dexoria's Team Builder to feature on your public profile card.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-bold text-sm">Battle Stats & Records</h4>
                </div>
                <span className="text-[9px] font-black uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-500/10">Coming Soon</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Record your competitive battle records, shiny hunting milestones, and gym leader defeat trophies.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 bg-purple-500/10 px-4 py-2.5 rounded-xl border border-purple-500/20">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>Trainer registration and profile building will unlock upon launch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
