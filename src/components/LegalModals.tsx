import React, { useState, useEffect } from "react";
import { Cookie, X, Shield, FileText, Check, Settings, Lock, Scale, Sparkles, RefreshCw } from "lucide-react";

interface CookieBannerProps {
  isLightTheme: boolean;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export function CookieBanner({ isLightTheme, onOpenPrivacy, onOpenTerms }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  
  // Custom states for cookies preferences
  const [preferences, setPreferences] = useState({
    necessary: true, // always true
    analytics: true,
    preferences: true,
  });

  useEffect(() => {
    const accepted = localStorage.getItem("dexoria_cookies_accepted");
    if (!accepted) {
      // Delay slightly for smooth entering animation
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("dexoria_cookies_accepted", "all");
    localStorage.setItem("dexoria_cookie_pref_analytics", "true");
    localStorage.setItem("dexoria_cookie_pref_preferences", "true");
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("dexoria_cookies_accepted", "custom");
    localStorage.setItem("dexoria_cookie_pref_analytics", preferences.analytics ? "true" : "false");
    localStorage.setItem("dexoria_cookie_pref_preferences", preferences.preferences ? "true" : "false");
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("dexoria_cookies_accepted", "declined");
    localStorage.setItem("dexoria_cookie_pref_analytics", "false");
    localStorage.setItem("dexoria_cookie_pref_preferences", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className={`p-5 md:p-6 rounded-3xl border shadow-2xl flex flex-col gap-4 transition-colors duration-300 ${
        isLightTheme 
          ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-800 shadow-[#E5DDD0]/50" 
          : "bg-[#0F0F11]/95 backdrop-blur-xl border-white/5 text-slate-200 shadow-black/80"
      }`}>
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl flex items-center justify-center ${
              isLightTheme ? "bg-amber-100 text-amber-700" : "bg-amber-500/10 text-amber-400"
            }`}>
              <Cookie className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-sm md:text-base leading-none">
                Poké-Cookies?
              </h3>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-1">
                TRAINER COMPLIANCE CODE
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-200 p-1 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        {!showSettings ? (
          <>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dexoria uses cookies and local caches to save your team favorites, keep your customized theme loaded, and synchronize your trainer login status. No invasive tracking, just premium features!
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-400 mb-1">
              <button onClick={onOpenPrivacy} className="hover:text-blue-500 underline cursor-pointer">Privacy Policy</button>
              <span>•</span>
              <button onClick={onOpenTerms} className="hover:text-blue-500 underline cursor-pointer">Terms of Service</button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-3 py-1.5">
            <p className="text-xs text-slate-400">Customize cookie telemetry types allowed on your device:</p>
            
            {/* Necessary Cookie Row */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-500/5 border border-slate-500/5">
              <div>
                <span className="text-xs font-bold block">Trainer Sessions & Sync (Required)</span>
                <span className="text-[10px] text-slate-500">Maintains logins & database favorites.</span>
              </div>
              <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-white">
                <Check className="w-3 h-3" />
              </div>
            </div>

            {/* Preference Cookie Row */}
            <button 
              type="button"
              onClick={() => setPreferences(prev => ({ ...prev, preferences: !prev.preferences }))}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-500/5 border border-slate-500/5 text-left w-full hover:bg-slate-500/10 transition-all cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold block">Theme Preferences</span>
                <span className="text-[10px] text-slate-500">Saves light/dark mode and search layouts.</span>
              </div>
              <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${preferences.preferences ? "bg-blue-600" : "bg-slate-600"}`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${preferences.preferences ? "translate-x-4" : "translate-x-0"}`} />
              </div>
            </button>

            {/* Analytics Cookie Row */}
            <button 
              type="button"
              onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-500/5 border border-slate-500/5 text-left w-full hover:bg-slate-500/10 transition-all cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold block">Statistical Analytics</span>
                <span className="text-[10px] text-slate-500">Anonymous feedback to upgrade database speed.</span>
              </div>
              <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${preferences.analytics ? "bg-blue-600" : "bg-slate-600"}`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${preferences.analytics ? "translate-x-4" : "translate-x-0"}`} />
              </div>
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-500/10">
          {!showSettings ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer transition-all flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Accept All</span>
                </button>
                <button
                  onClick={handleDeclineAll}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-all border ${
                    isLightTheme 
                      ? "bg-[#EFEAE2] hover:bg-[#E5DDD0] border-slate-300 text-slate-700" 
                      : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-300"
                  }`}
                >
                  Decline Optional
                </button>
              </div>
              <button
                onClick={() => setShowSettings(true)}
                className="py-1.5 text-center text-[11px] font-bold text-slate-400 hover:text-blue-500 flex items-center justify-center gap-1 cursor-pointer transition-colors"
              >
                <Settings className="w-3 h-3" />
                <span>Configure Preferences</span>
              </button>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowSettings(false)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-all border ${
                  isLightTheme 
                    ? "bg-[#EFEAE2] hover:bg-[#E5DDD0] border-slate-300 text-slate-700" 
                    : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-300"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer transition-all flex items-center justify-center"
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightTheme: boolean;
}

export function PrivacyPolicyModal({ isOpen, onClose, isLightTheme }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className={`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col z-10 animate-in zoom-in-95 duration-200 overflow-hidden ${
        isLightTheme 
          ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-800" 
          : "bg-[#0D0D0F]/95 backdrop-blur-xl border-white/5 text-slate-200"
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-slate-500/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${
              isLightTheme ? "bg-blue-100 text-blue-700" : "bg-blue-500/10 text-blue-400"
            }`}>
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg md:text-xl leading-none">
                Privacy Policy
              </h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                Version 1.2 • Last updated July 2026
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl border transition-all ${
              isLightTheme 
                ? "bg-[#EFEAE2] hover:bg-[#E5DDD0] border-slate-300 text-slate-700" 
                : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-400">
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>1. Data Control Overview</h3>
            </div>
            <p>
              Welcome to <strong>Dexoria</strong>, a fan-crafted PokéDex encyclopedia. We respect your digital privacy as much as your journey as a trainer. This policy discloses how client-side data cache layers (`localStorage`) and credentials handle your trainer preferences.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Settings className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>2. Stored Cache Telemetry</h3>
            </div>
            <p>
              Dexoria is predominantly an offline-capable client dashboard. The following elements are stored safely directly inside your browser cache so that you do not lose progress:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-1 text-xs">
              <li><strong>Trainer Profile Details:</strong> Stored under `dexoria_current_user` to maintain active display name, email, and customizable avatar settings.</li>
              <li><strong>PokéDex Favorites:</strong> Synced within local databases to store IDs of species flagged with the Heart feature.</li>
              <li><strong>Theme Configurations:</strong> Stores parameters for Light and Dark modes (`dexoria_theme`).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <FileText className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>3. Secure Authentication Networks</h3>
            </div>
            <p>
              If you utilize the secure trainer database system (Firebase Authentication and Firestore), your password and sign-in tokens are handled with strict industry-grade cryptographic protocols. We do not store plain-text passwords, and your data is restricted strictly to synchronizing your Pokédex favorites across devices.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Check className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>4. Third Party Integration Points</h3>
            </div>
            <p>
              Dexoria fetches visual stats, moves, and models on demand from the public community <strong>PokéAPI</strong>. PokéAPI operates under fair-use guidelines and does not capture any personal identifying trainer statistics.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>5. Purging Stored Credentials</h3>
            </div>
            <p>
              At any point, you can wipe your personal logs, cached favorite rosters, and temporary sessions simply by logging out of your Trainer Profile, or by clearing your web browser cookies and site state cache.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-500/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer transition-all"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}

export function TermsOfServicesModal({ isOpen, onClose, isLightTheme }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className={`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col z-10 animate-in zoom-in-95 duration-200 overflow-hidden ${
        isLightTheme 
          ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-800" 
          : "bg-[#0D0D0F]/95 backdrop-blur-xl border-white/5 text-slate-200"
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-slate-500/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${
              isLightTheme ? "bg-amber-100 text-amber-700" : "bg-amber-500/10 text-amber-400"
            }`}>
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg md:text-xl leading-none">
                Terms of Service
              </h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                Version 1.0 • Last updated July 2026
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl border transition-all ${
              isLightTheme 
                ? "bg-[#EFEAE2] hover:bg-[#E5DDD0] border-slate-300 text-slate-700" 
                : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-400">
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>1. Fan Project Disclaimer</h3>
            </div>
            <p>
              Dexoria is an experimental open-source, mobile-responsive Pokédex. It is a completely free, <strong>non-commercial fan project</strong> designed for educational analysis, historical gameplay records, and interactive lore exploration.
            </p>
            <p className="border-l-2 border-red-500/30 pl-3 py-1 bg-red-500/5 rounded-r-lg text-xs">
              Pokémon, Pokémon Character Designs, sprites, element logos, and regional lore names are trademarked property of <strong>The Pokémon Company, Nintendo, Creatures Inc., and Game Freak Inc.</strong> No trademark infringement is intended.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>2. Acceptable Use License</h3>
            </div>
            <p>
              Trainers are welcome to use our visual templates, quizzes, and comparison utilities for personal recreation. Any form of automated web-scraping, denial of service attacks against Dexoria API gateways, or unauthorized replication of backend services is strictly prohibited to keep server fees sustainable.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Scale className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>3. Limitations of Liability</h3>
            </div>
            <p>
              While we strive to compile accurate, robust statistical data and evolution parameters, we make no guarantees about 100% uptime or data correctness. Stats are parsed from the open-source PokéAPI community data, which may contain occasional differences from official gameplay mechanics.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Check className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>4. User Created Profiles</h3>
            </div>
            <p>
              When setting up credentials, you are responsible for maintaining the privacy of your selected password. Dexoria reserves the right to sweep inactive, anonymous user indexes periodically to maintain peak database performance.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-500/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer transition-all"
          >
            I Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
}
