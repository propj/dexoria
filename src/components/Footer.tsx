import React from "react";
import { Compass, BookOpen, Heart, Info, Globe, Github } from "lucide-react";

interface FooterProps {
  isLightTheme: boolean;
  setActivePage: (page: string) => void;
}

export default function Footer({ isLightTheme, setActivePage }: FooterProps) {
  const handleNav = (id: string) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t px-6 md:px-12 py-10 md:py-14 mt-16 transition-colors duration-300 ${
        isLightTheme
          ? "bg-[#EFEAE2]/40 border-[#E5DDD0]/50 text-slate-800"
          : "bg-[#0B0B0C]/40 border-white/5 text-[#F4F4F5]"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand identity */}
        <div className="md:col-span-1.5 flex flex-col gap-4">
          <div
            className="flex items-center gap-2.5 font-display font-bold text-xl cursor-pointer"
            onClick={() => handleNav("home")}
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-b from-red-500 from-48% via-white via-52% to-white shadow-md animate-spin [animation-duration:12s]" />
            <span>Dexoria</span>
          </div>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-xs">
            A premium Pokédex dashboard for every trainer. Search statistical dossiers, explore regions, compare elements, and play quiz games.
          </p>
        </div>

        {/* Quick Nav links */}
        <div className="flex flex-col gap-3 text-xs md:text-sm">
          <h4 className="font-display font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">
            Explore
          </h4>
          <button
            onClick={() => handleNav("regions")}
            className="text-left text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Regional Lore
          </button>
          <button
            onClick={() => handleNav("national")}
            className="text-left text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
          >
            National Pokédex
          </button>
          <button
            onClick={() => handleNav("types")}
            className="text-left text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Elemental Types
          </button>
        </div>

        {/* More links */}
        <div className="flex flex-col gap-3 text-xs md:text-sm">
          <h4 className="font-display font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">
            Company
          </h4>
          <button
            onClick={() => handleNav("about")}
            className="text-left text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
          >
            About Dexoria
          </button>
          <button
            onClick={() => handleNav("favorites")}
            className="text-left text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Favorites Team
          </button>
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-slate-500 hover:text-blue-500 transition-colors"
          >
            PokéAPI Source
          </a>
        </div>

        {/* Developer socials info */}
        <div className="flex flex-col gap-3.5">
          <h4 className="font-display font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-1">
            Roster Source
          </h4>
          <p className="text-xs text-slate-500 leading-normal">
            Fan database built with live network feeds. Not affiliated with Pokémon official developers.
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border flex items-center justify-center transition-all ${
                isLightTheme
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border flex items-center justify-center transition-all ${
                isLightTheme
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
              }`}
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-500/10 pt-8 mt-10 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500 font-medium">
        <span>© 2026 Dexoria. Developed as a fan tribute project.</span>
        <span>Data dynamically resolved from PokéAPI</span>
      </div>
    </footer>
  );
}
