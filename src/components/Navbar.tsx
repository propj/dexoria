import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, Heart, User as UserIcon, LogOut, Award, Star, Sparkles } from "lucide-react";

interface User {
  username: string;
  email: string;
  avatar: number;
}

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isLightTheme: boolean;
  setIsLightTheme: (val: boolean) => void;
  favoritesCount: number;
  currentUser: User | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  isLightTheme,
  setIsLightTheme,
  favoritesCount,
  currentUser,
  onOpenLogin,
  onLogout,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "regions", label: "Regions" },
    { id: "national", label: "National Dex" },
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
      </ul>

      {/* Nav Right (Fav, Theme, Profile, Mobile Hamburger) */}
      <div className="flex items-center gap-2.5">
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

        {/* Profile / Auth Container */}
        <div className="relative" ref={dropdownRef}>
          {currentUser ? (
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className={`flex items-center gap-2 p-1.5 pr-3 rounded-xl border cursor-pointer transition-all ${
                isLightTheme
                  ? "bg-white hover:bg-slate-50 border-slate-200 text-slate-800"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-[#F4F4F5]"
              }`}
            >
              <div className="w-7 h-7 rounded-lg overflow-hidden bg-slate-500/15 flex items-center justify-center">
                <img
                  src={getOfficialArtwork(currentUser.avatar)}
                  alt="avatar"
                  className="w-6.5 h-6.5 object-contain"
                />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight max-w-[80px] truncate">
                {currentUser.username}
              </span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                isLightTheme
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/10 border-blue-600"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Trainer Sign In</span>
            </button>
          )}

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && currentUser && (
            <div
              className={`absolute right-0 mt-2.5 w-64 rounded-2xl border p-4 shadow-2xl z-50 animate-fade-in ${
                isLightTheme
                  ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-900"
                  : "bg-[#0F0F10] border-white/5 text-[#F4F4F5]"
              }`}
            >
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-500/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative shrink-0">
                  <img
                    src={getOfficialArtwork(currentUser.avatar)}
                    alt="avatar"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-0.5 border border-slate-950">
                    <Star className="w-2.5 h-2.5 text-black fill-black" />
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono font-black truncate">{currentUser.username}</p>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{currentUser.email}</p>
                </div>
              </div>

              <div className="py-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-500" />
                    Trainer rank
                  </span>
                  <span className="font-mono font-extrabold text-[10px] uppercase text-blue-500 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    Grandmaster
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Synced entries</span>
                  <span className="font-mono font-bold text-slate-400">{favoritesCount} Pokémon</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onLogout();
                  setIsProfileDropdownOpen(false);
                }}
                className="w-full mt-1.5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 cursor-pointer flex items-center justify-center gap-1.5 transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out Session</span>
              </button>
            </div>
          )}
        </div>

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
        </div>
      )}
    </nav>
  );
}
