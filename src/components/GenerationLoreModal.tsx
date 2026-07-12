import React from "react";
import { X, Globe, Star, Shield, Sparkles, Trophy } from "lucide-react";
import { GENERATION_LORE_DATA } from "../data/generationLore";

interface GenerationLoreModalProps {
  generationId: number;
  isOpen: boolean;
  onClose: () => void;
  isLightTheme: boolean;
}

export default function GenerationLoreModal({
  generationId,
  isOpen,
  onClose,
  isLightTheme,
}: GenerationLoreModalProps) {
  if (!isOpen) return null;

  const lore = GENERATION_LORE_DATA[generationId];
  if (!lore) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 md:p-8 transition-all ${
          isLightTheme
            ? "bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300/40 text-slate-900"
            : "bg-gradient-to-br from-slate-900 to-slate-950 border-white/5 text-slate-100"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-xl cursor-pointer transition-all border ${
            isLightTheme
              ? "bg-slate-200/50 hover:bg-slate-200 border-slate-300 text-slate-700"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
              DECIDED HISTORIC LORE
            </span>
            <span className="text-xs font-mono font-bold text-slate-500">
              GEN 0{generationId} Dossier
            </span>
          </div>
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            {lore.title}
          </h2>
        </div>

        {/* Content sections */}
        <div className="space-y-6">
          {/* Section 1: Backstory */}
          <div className={`p-4 rounded-2xl border ${
            isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/3 border-white/5"
          }`}>
            <h3 className="font-display font-bold text-sm mb-2 text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Historical Backstory</span>
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
              {lore.backstory}
            </p>
          </div>

          {/* Section 2: Legendary Conflict */}
          <div className={`p-4 rounded-2xl border ${
            isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/3 border-white/5"
          }`}>
            <h3 className="font-display font-bold text-sm mb-2 text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-red-500" />
              <span>Legendary Conflicts & Creation Myth</span>
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
              {lore.legendaryConflict}
            </p>
          </div>

          {/* Section 3: Regional Culture */}
          <div className={`p-4 rounded-2xl border ${
            isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/3 border-white/5"
          }`}>
            <h3 className="font-display font-bold text-sm mb-2 text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Regional Society & Culture</span>
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
              {lore.regionalCulture}
            </p>
          </div>

          {/* Section 4: Trivia & Franchise Influence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/3 border-white/5"
            }`}>
              <h4 className="font-display font-bold text-xs mb-1.5 text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                <span>Did You Know?</span>
              </h4>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {lore.trivia}
              </p>
            </div>

            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/3 border-white/5"
            }`}>
              <h4 className="font-display font-bold text-xs mb-1.5 text-purple-400 uppercase tracking-wider flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-purple-500" />
                <span>Socio-cultural Legacy</span>
              </h4>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {lore.culturalInfluence}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info lock */}
        <div className="mt-8 text-center text-[9px] font-mono text-slate-500 uppercase tracking-widest border-t border-slate-500/5 pt-4">
          PokéDex Core Archives · Index Decryption Successful
        </div>
      </div>
    </div>
  );
}
