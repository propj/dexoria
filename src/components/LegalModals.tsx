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
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-400 max-h-[55vh]">
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>1. Comprehensive Data Control & Governance Overview</h3>
            </div>
            <p>
              Welcome to <strong>Dexoria</strong>, the world's most advanced fan-crafted PokéDex encyclopedia and real-time matchup analyzer. Your privacy, digital integrity, and data security are parameters we hold in the absolute highest regard. As you embark on your journey as an amateur or professional Pokémon trainer, we ensure that every interaction, lookup, and bookmark complies with rigorous global digital standards.
            </p>
            <p>
              This policy discloses the exact mechanisms, schemas, and infrastructure details governing how client-side data cache layers (`localStorage`), secure network sockets, and user authentication systems process, analyze, and retain your trainer profile statistics. We guarantee absolute transparency regarding our non-commercial, academic research methods, keeping you safe from unsolicited telemetry or behavioral advertisement scripts.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Settings className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>2. Detailed Stored Cache Telemetry & Cookie Lifespans</h3>
            </div>
            <p>
              Dexoria is designed primarily to support fully offline-capable dashboard environments, utilizing modern service workers and cache layers to optimize query speeds. Because our index covers over 1,025 distinct species, several critical states must be saved on your localized hardware configuration. The following localized database variables are kept inside your secure browser environment:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-1 text-xs">
              <li>
                <strong>Trainer Session Profile Details (`dexoria_current_user`):</strong> Stores your unique alphanumeric screen name, secure system references, avatar IDs, and session timestamp indicators. This prevents you from having to re-verify your identity on every consecutive app load.
              </li>
              <li>
                <strong>PokéDex Bookmarks & Favorite Team Indexes (`dexoria_favorites` & `dexoria_user_favorites_*`):</strong> Saves the National Pokédex IDs of species you have flagged with the heart feature, allowing you to curate and review your tactical battle squads without making synchronous database requests.
              </li>
              <li>
                <strong>Global App Theme System parameters (`dexoria_theme`):</strong> Remembers whether your current optical display utilizes our dark solar starfield theme or our soft off-white light mode theme, matching your exact preferred ambient brightness settings.
              </li>
              <li>
                <strong>Cookie Banner Consent Records (`dexoria_cookies_accepted`):</strong> Stores your personalized consent preferences to ensure the compliance banners do not repeatedly disturb your workspace once verified.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <FileText className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>3. Secure Authentication Networks & End-to-End Encryption</h3>
            </div>
            <p>
              When you create a premium Trainer Account to enable cloud synchronization of your personal team archives across multiple desktop or mobile interfaces, Dexoria routes communications through industry-standard cloud security architectures.
            </p>
            <p>
              Your passwords undergo cryptographic hashing via irreversible, salting-based algorithms prior to being processed by Firebase Authentication gateways. Plain-text passwords are never transmitted over non-secure channels, nor are they ever readable by project administrators. Your personal favorites lists are persisted on secure, access-controlled cloud databases, which prevent cross-tenant reading or unauthorized manipulation of document structures.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>4. Global GDPR & CCPA Compliance Frameworks</h3>
            </div>
            <p>
              In accordance with European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) standards, Dexoria guarantees comprehensive rights to all global trainers:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-1 text-xs">
              <li><strong>The Right to Access (Portability):</strong> You may request a raw JSON structured readout of all favorites and statistics registered to your screen name.</li>
              <li><strong>The Right to Rectification (Correction):</strong> You can update your trainer credentials, avatar selections, and email addresses directly within your profile configurations.</li>
              <li><strong>The Right to Erasure (De-registration):</strong> You have the absolute right to demand the permanent deletion of your credentials, which will purge every associated cloud database record within 48 hours.</li>
              <li><strong>The Right to Object:</strong> You can completely withdraw consent for telemetry or analytical tracking at any point via our custom Cookie Preference panel.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Check className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>5. Third-Party Integration Points & REST Interfaces</h3>
            </div>
            <p>
              To populate base combat statistics, descriptions, elemental categories, and evolution trees on-demand, Dexoria makes secure network requests to the public, open-source <strong>PokéAPI</strong> REST interface.
            </p>
            <p>
              PokéAPI is a community-supported database operating under creative commons and fair-use frameworks. PokéAPI does not collect, record, or track any personally identifiable information of our users. When fetching resources, your web browser transmits a standard user-agent header containing general operating system details, but no personal trainer statistics are leaked.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Shield className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>6. COPPA Compliance & Age Guardrails</h3>
            </div>
            <p>
              Dexoria is an educational resource and fan encyclopedia designed for trainers of all generations. We do not deliberately solicit, collect, or store any personal data from children under the age of 13, in strict adherence to the Children's Online Privacy Protection Act (COPPA).
            </p>
            <p>
              If a parent or legal guardian discovers that their child has established a cloud-synchronized trainer account containing personal emails or identification details without appropriate parental oversight, they may contact our support network to initiate an immediate, permanent database purge.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>7. Complete Purging of Stored Site State Cache</h3>
            </div>
            <p>
              At any point during your adventure, you have full unilateral power to wipe your personal footprint. To do this, simply log out of your Trainer Profile, which will clear active session tokens. To perform a complete, hard-reset of all settings, bookmark lists, and theme layouts, select "Clear Site Data" or clear cookies inside your browser's developer console. This guarantees that no residual files or identifiers remain on your hardware.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-blue-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>8. Future Policy Amendments & Contact Channels</h3>
            </div>
            <p>
              As the Pokémon universe continues to expand, introducing new regions, battle mechanics, and network standards, this Privacy Policy will undergo periodic reviews and upgrades. All material updates will be clearly logged in our versioning header. If you have any inquiries, suggestions, or concerns regarding your privacy within Dexoria, please reach out to our project administrators or check the open-source repository code directly to verify our compliance.
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
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm leading-relaxed text-slate-400 max-h-[55vh]">
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>1. Fan-Crafted Academic Project Disclaimer</h3>
            </div>
            <p>
              Dexoria is an experimental, non-commercial, mobile-responsive Pokédex and region encyclopedia. This platform is a 100% free fan project, developed purely for educational analysis, historical gameplay preservation, mechanical calculation testing, and interactive lore exploration. We do not charge fees, display intrusive advertising networks, or offer paid digital micro-transactions.
            </p>
            <p className="border-l-2 border-red-500/30 pl-3 py-1 bg-red-500/5 rounded-r-lg text-xs">
              Pokémon, Pokémon character names, associated visual designs, base combat statistics, sprite art assets, elemental type logos, and regional descriptions are registered trademarks of <strong>The Pokémon Company, Nintendo of America Inc., Creatures Inc., and Game Freak Inc.</strong> This platform is in no way affiliated with, endorsed, or supported by Nintendo or any related corporate entity. No copyright or trademark infringement is intended under fair-use guidelines of international intellectual property laws.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Lock className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>2. Acceptable Use License & Community Guidelines</h3>
            </div>
            <p>
              All registered trainers are granted a limited, personal, non-exclusive, non-transferable license to access our interactive region guides, type charts, stat calculations, and quiz exercises.
            </p>
            <p>
              To maintain fair-use standards and ensure server resource sustainability, the following activities are strictly prohibited:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-1 text-xs">
              <li>
                Using automated web-scraping scripts, bots, or data harvesting algorithms to download database records or overwhelm REST API gateways.
              </li>
              <li>
                Attempting to perform cross-site scripting (XSS), reverse-engineering compiled application bundles, or exploiting secure Firebase endpoints.
              </li>
              <li>
                Establishing mock trainer profiles containing offensive, defamatory, or hateful usernames.
              </li>
              <li>
                Re-publishing Dexoria intellectual assets for commercial gain, paid apps, or advertising campaigns.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Scale className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>3. Comprehensive Limitations of Liability</h3>
            </div>
            <p>
              Dexoria compiles vast statistical datasets, move lists, and evolution models based on public community APIs. While we make every reasonable effort to verify the factual correctness of all Pokémon data, we make no representation or warranty of any kind, express or implied, regarding accuracy, completeness, or uninterrupted server availability.
            </p>
            <p>
              Under no circumstances shall Dexoria or its contributors be held liable for any data loss, localized browser cache resets, server cold-starts, or virtual battle losses resulting from system latency. Use of this application is entirely at your own discretion.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Check className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>4. User Created Profiles & Account Security</h3>
            </div>
            <p>
              By registering a trainer identity, you acknowledge full responsibility for maintaining the absolute confidentiality of your credential hash. You agree to immediately notify developers of any unauthorized access to your account.
            </p>
            <p>
              Developers reserve the right, without prior warning or liability, to suspend, terminate, or delete trainer profiles that violate community standards, or to conduct scheduled database cleanup sweeps to delete stale anonymous data and minimize infrastructure expenditures.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Scale className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>5. Dispute Resolution & Governing Law</h3>
            </div>
            <p>
              Any disputes, controversies, or legal claims arising out of or relating to your use of Dexoria shall be resolved through informal negotiations with our team.
            </p>
            <p>
              If a resolution cannot be reached informally, all legal actions shall be governed by the laws and regulations of the Kanto region (or your domestic jurisdiction), without regard to conflict of law principles. You agree to submit to the personal and exclusive jurisdiction of the courts located within such regions.
            </p>
          </section>

          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-bold font-display text-sm md:text-base border-b border-slate-500/5 pb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className={`${isLightTheme ? "text-slate-800" : "text-white"}`}>6. Severability & Entire Agreement</h3>
            </div>
            <p>
              These Terms of Service, in combination with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and the Dexoria open-source project. If any provision of these terms is deemed unlawful, void, or for any reason unenforceable by a court of competent jurisdiction, then that specific provision shall be deemed severable and shall not affect the validity or enforceability of any remaining sections.
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
