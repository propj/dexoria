import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Heart, Sparkles, User } from "lucide-react";
import GlobalSearchBar from "./GlobalSearchBar";
import TrainerLoginModal from "./TrainerLoginModal";
import { Region } from "../types";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isLightTheme: boolean;
  setIsLightTheme: (val: boolean) => void;
  favoritesCount: number;
  onSelectPokemonById: (id: number) => void;
  onSelectRegion: (region: Region) => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  isLightTheme,
  setIsLightTheme,
  favoritesCount,
  onSelectPokemonById,
  onSelectRegion,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "regions", label: "Regions" },
    { id: "national", label: "Pokédex" },
    { id: "community", label: "Community" },
    { id: "characters", label: "Char/Item Dex" },
    { id: "poke-ai", label: "Poke AI" },
    { id: "timeline", label: "Timeline" },
    { id: "fun", label: "Fun" },
    { id: "about", label: "About" },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
  };

  const getOfficialArtwork = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl flex items-center justify-between px-6 py-4 md:px-12 ${
        isScrolled
          ? "py-3 border-b shadow-sm " +
            (isLightTheme
              ? "bg-[#FAF7F0]/85 border-[#E5DDD0]/40 text-slate-900"
              : "bg-[#080809]/85 border-white/5 text-[#F4F4F5]")
          : isLightTheme
          ? "bg-transparent text-slate-900"
          : "bg-transparent text-slate-100"
      }`}
    >
      {/* Brand logo */}
      <div
        className="flex items-center gap-2.5 font-display tracking-tight cursor-pointer select-none group"
        onClick={() => handleNavClick("home")}
      >
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
          isLightTheme 
            ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm shadow-blue-100" 
            : "bg-blue-500/10 border-blue-500/20 text-blue-400"
        }`}>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <span className={`font-display font-black text-lg md:text-xl transition-all duration-300 tracking-wider uppercase ${
          isLightTheme 
            ? "text-slate-800" 
            : "text-white"
        }`}>
          DEX<span className={`font-medium ${isLightTheme ? "text-blue-600" : "text-blue-400"}`}>oria</span>
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-1.5 list-none font-sans font-medium text-sm">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-250 ${
                activePage === item.id
                  ? isLightTheme
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30"
                  : isLightTheme
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                  : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
        {/* Common Global Search Bar */}
        <li className="ml-1 shrink-0">
          <GlobalSearchBar
            isLightTheme={isLightTheme}
            onSelectPokemonById={onSelectPokemonById}
            onSelectRegion={onSelectRegion}
            setActivePage={setActivePage}
          />
        </li>
      </ul>

      {/* Nav Right (Search, Profile, Fav, Theme, Mobile Hamburger) */}
      <div className="flex items-center gap-2.5">
        {/* Profile / Login Icon (Placed between Search Bar and Favorites) */}
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className={`relative p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-center group ${
            isLightTheme
              ? "bg-slate-200/50 hover:bg-slate-200 border-slate-300/30 text-slate-700 hover:text-slate-900"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
          }`}
          title="Trainer Login & Passport (Coming Soon)"
        >
          <User className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-pulse border border-slate-900" />
        </button>

        <button
          onClick={() => handleNavClick("favorites")}
          className={`relative p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-center ${
            activePage === "favorites"
              ? "bg-red-500/10 text-red-500 border-red-500/20"
              : isLightTheme
              ? "bg-slate-200/50 hover:bg-slate-200 border-slate-300/30 text-slate-700 hover:text-slate-900"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
          }`}
          title="Favorites"
        >
          <Heart className={`w-4.5 h-4.5 ${activePage === "favorites" ? "fill-red-500" : ""}`} />
          {favoritesCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 flex items-center justify-center text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-slate-900">
              {favoritesCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsLightTheme(!isLightTheme)}
          className={`p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-center ${
            isLightTheme
              ? "bg-slate-200/50 hover:bg-slate-200 border-slate-300/30 text-slate-700 hover:text-slate-900"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
          }`}
          title={isLightTheme ? "Dark Theme" : "Light Theme"}
        >
          {isLightTheme ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2.5 rounded-xl cursor-pointer transition-all duration-200 border flex items-center justify-center ${
            isLightTheme
              ? "bg-slate-200/50 hover:bg-slate-200 border-slate-300/30 text-slate-700 hover:text-slate-900"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-16 left-4 right-4 z-40 rounded-2xl p-4 shadow-xl border flex flex-col gap-1.5 transition-all lg:hidden ${
            isLightTheme
              ? "bg-[#FAF7F0]/95 border-[#E5DDD0]/50 text-slate-900"
              : "bg-[#0F0F10]/95 border-white/5 text-[#F4F4F5]"
          }`}
        >
          <div className="pb-2 border-b border-white/10 mb-1">
            <GlobalSearchBar
              isLightTheme={isLightTheme}
              onSelectPokemonById={onSelectPokemonById}
              onSelectRegion={onSelectRegion}
              setActivePage={setActivePage}
            />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left px-4 py-2.5 rounded-xl cursor-pointer text-sm font-medium transition-all ${
                activePage === item.id
                  ? isLightTheme
                    ? "bg-[#EFEAE2] text-slate-900 font-semibold"
                    : "bg-white/10 text-white font-semibold"
                  : isLightTheme
                  ? "hover:bg-[#EFEAE2]/60"
                  : "hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Profile / Passport button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsLoginModalOpen(true);
            }}
            className={`text-left px-4 py-2.5 rounded-xl cursor-pointer text-sm font-medium transition-all flex items-center justify-between mt-1 border ${
              isLightTheme
                ? "bg-amber-500/10 border-amber-500/20 text-amber-800"
                : "bg-amber-500/10 border-amber-500/20 text-amber-400"
            }`}
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-500" />
              <span>Trainer Passport & Login</span>
            </div>
            <span className="text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500">
              COMING SOON
            </span>
          </button>
        </div>
      )}

      {/* Trainer Login / Passport Modal */}
      <TrainerLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        isLightTheme={isLightTheme}
      />
    </nav>
  );
}
