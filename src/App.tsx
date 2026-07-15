import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegionSection from "./components/RegionSection";
import PokemonGrid from "./components/PokemonGrid";
import PokemonModal from "./components/PokemonModal";
import TypesSection from "./components/TypesSection";
import CompareSection from "./components/CompareSection";
import TimelineSection from "./components/TimelineSection";
import FunSection from "./components/FunSection";
import FavoritesSection from "./components/FavoritesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { CookieBanner, PrivacyPolicyModal, TermsOfServicesModal } from "./components/LegalModals";
import { Region } from "./types";
import { REGIONS_DATA } from "./data/regions";
import { Sparkles, Heart, ChevronRight, Lock, Package, Wand2, Users, Newspaper, ChevronDown, ChevronUp, Calendar } from "lucide-react";


export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
  
  // Nested sub-tabs inside Pokédex page
  const [nationalSubTab, setNationalSubTab] = useState<"dex" | "types" | "compare">("dex");
  
  // Favorites State synced to LocalStorage
  const [favorites, setFavorites] = useState<number[]>([]);

  // Modal Launcher State
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(null);

  // Region Detail State
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  // Toast System State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Legal Policies Modals State
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);

  // Home Page News Section State
  const [isNewsExpanded, setIsNewsExpanded] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load theme state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("dexoria_theme");
    if (savedTheme) {
      setIsLightTheme(savedTheme === "light");
    }
  }, []);

  // Load page state from URL on mount and handle state pop/change events
  useEffect(() => {
    const handleUrlSync = () => {
      // First, check if there's an old-style hash URL and convert it to clean URL if needed
      if (window.location.hash) {
        const rawHash = window.location.hash.substring(1).replace(/^\/|\/$/g, "");
        if (rawHash) {
          const parts = rawHash.split("/");
          const page = parts[0];
          const sub = parts[1] || "";
          
          let cleanPath = `/${page}`;
          if (sub) {
            cleanPath += `/${sub}`;
          }
          
          // Replace hash URL with clean pathname URL
          window.history.replaceState(null, "", cleanPath);
        }
      }

      // Read from clean pathname
      let pathname = window.location.pathname.replace(/^\/|\/$/g, "");
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get("page");

      // e.g., "/regions/kanto" -> parts = ["regions", "kanto"]
      const parts = pathname.split("/");
      const pathPage = parts[0] || "home";
      const pathSub = parts[1] || "";

      const targetPage = pageParam || pathPage;
      const validPages = ["home", "regions", "national", "characters", "poke-ai", "timeline", "fun", "about", "favorites"];

      if (validPages.includes(targetPage)) {
        setActivePage(targetPage);

        if (targetPage === "regions") {
          if (pathSub) {
            const foundRegion = REGIONS_DATA.find(r => r.id.toLowerCase() === pathSub.toLowerCase());
            if (foundRegion) {
              setSelectedRegion(foundRegion);
            } else {
              setSelectedRegion(null);
            }
          } else {
            setSelectedRegion(null);
          }
        } else if (targetPage === "national") {
          if (pathSub && ["dex", "types", "compare"].includes(pathSub)) {
            setNationalSubTab(pathSub as any);
          } else {
            const tabParam = params.get("tab");
            if (tabParam && ["dex", "types", "compare"].includes(tabParam)) {
              setNationalSubTab(tabParam as any);
            } else {
              setNationalSubTab("dex");
            }
          }
        }
      } else {
        // Fallback for unrecognized paths
        setActivePage("home");
        setSelectedRegion(null);
      }
    };

    handleUrlSync();
    window.addEventListener("popstate", handleUrlSync);
    window.addEventListener("hashchange", handleUrlSync);
    
    return () => {
      window.removeEventListener("popstate", handleUrlSync);
      window.removeEventListener("hashchange", handleUrlSync);
    };
  }, []);

  // Update URL pathname when activePage, selectedRegion, or nationalSubTab changes
  useEffect(() => {
    let newPath = "/";
    if (activePage !== "home") {
      newPath = `/${activePage}`;
      if (activePage === "regions" && selectedRegion) {
        newPath += `/${selectedRegion.id.toLowerCase()}`;
      } else if (activePage === "national") {
        newPath += `/${nationalSubTab}`;
      }
    }

    const currentPath = window.location.pathname;
    
    if (currentPath !== newPath && currentPath !== newPath + "/") {
      // Use pushState to allow back-button navigation if user clicks navbar links
      // But if they are just on the same page and changing national subtabs, or initial load, replaceState is cleaner
      const isInitialOrInnerChange = currentPath === "/" || (currentPath.startsWith("/national") && newPath.startsWith("/national"));
      
      if (isInitialOrInnerChange) {
        window.history.replaceState(null, "", newPath);
      } else {
        window.history.pushState(null, "", newPath);
      }
    }
  }, [activePage, selectedRegion, nationalSubTab]);

  // Synchronize favorites on mount
  useEffect(() => {
    const savedGuestFavs = localStorage.getItem("dexoria_favorites");
    if (savedGuestFavs) {
      try {
        setFavorites(JSON.parse(savedGuestFavs));
      } catch (err) {
        setFavorites([]);
      }
    }
  }, []);

  // Scroll to top automatically when activePage or nationalSubTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage, nationalSubTab]);

  // Save theme state updates
  useEffect(() => {
    localStorage.setItem("dexoria_theme", isLightTheme ? "light" : "dark");
    // Also toggle standard light/dark background styles
    if (isLightTheme) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [isLightTheme]);

  // Particle Starfield Background Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    const particleCount = 45;
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Select correct background hue depending on active theme
      ctx.fillStyle = isLightTheme ? "rgba(15, 23, 42, 0.05)" : "rgba(255, 255, 255, 0.08)";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = isLightTheme 
          ? `rgba(59, 130, 246, ${p.alpha})` // soft blue particles for light theme
          : `rgba(241, 245, 249, ${p.alpha})`; // white stars for dark theme
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLightTheme]);

  // Toggle favorite function shared across all widgets
  const toggleFavorite = (id: number) => {
    let updated: number[];
    let message = "";

    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
      message = "Removed from Favorites team archive.";
    } else {
      updated = [...favorites, id];
      message = "Added to Favorites team archive! ♥";
    }

    setFavorites(updated);
    localStorage.setItem("dexoria_favorites", JSON.stringify(updated));

    // Show temporary toast notification
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Wrapper function to close region detail or set detail
  const handleSelectRegion = (region: Region | null) => {
    setSelectedRegion(region);
  };

  // Navigational callback from subcomponents
  const handleSelectPokemonById = (id: number) => {
    setSelectedPokemonId(id);
  };

  return (
    <div
      className={`min-h-screen relative flex flex-col font-sans transition-colors duration-300 ${
        isLightTheme ? "bg-[#FAF7F0] text-[#1C1C1E]" : "bg-[#080809] text-[#F4F4F5]"
      }`}
    >
      {/* Dynamic Starfield Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-85"
      />

      {/* Glassmorphic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          setSelectedRegion(null); // Clear active regions detail view on nav change
        }}
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
        favoritesCount={favorites.length}
      />

      {/* Main Content Router */}
      <main className="flex-grow relative z-10 pt-4 pb-12">
        {activePage === "home" && (
          <div>
            <Hero
              onExploreRegions={() => setActivePage("regions")}
              onExploreNational={() => setActivePage("national")}
              isLightTheme={isLightTheme}
            />

            {/* Collapsible Dexoria Updates News Section */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-6">
              <div
                className={`glass rounded-3xl border shadow-xl transition-all duration-300 overflow-hidden ${
                  isLightTheme
                    ? "bg-white/70 border-slate-300/40 text-slate-900"
                    : "bg-slate-950/40 border-white/5 text-slate-100"
                }`}
              >
                {/* News Header Bar (Toggle on Click) */}
                <div
                  onClick={() => setIsNewsExpanded(!isNewsExpanded)}
                  className={`px-6 py-4 flex items-center justify-between cursor-pointer select-none transition-colors duration-200 ${
                    isLightTheme ? "hover:bg-slate-100/50" : "hover:bg-white/3"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                      <Newspaper className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg md:text-xl flex items-center gap-2">
                        <span>Dexoria Chronicle</span>
                        <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white rounded-md">
                          Live Feed
                        </span>
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        isLightTheme
                          ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {isNewsExpanded ? "Minimize News" : "Maximize News"}
                    </button>
                    {isNewsExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
                    )}
                  </div>
                </div>

                {/* News Articles Panel */}
                {isNewsExpanded && (
                  <div className="p-6 pt-2 border-t border-slate-500/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {/* Update 1 */}
                      <div
                        className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] hover:shadow-lg ${
                          isLightTheme ? "bg-slate-50/60 border-slate-200" : "bg-white/3 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 rounded">
                            New Feature
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            July 15, 2026
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-1.5">Custom Team Builder Released!</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Replaced the basic team selector with an advanced Team Builder. Pick roster sizes, customize featured elements, and constraint unique types in your squad!
                        </p>
                      </div>

                      {/* Update 2 */}
                      <div
                        className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] hover:shadow-lg ${
                          isLightTheme ? "bg-slate-50/60 border-slate-200" : "bg-white/3 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest px-2 py-0.5 bg-indigo-500/10 rounded">
                            UI Polishing
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            July 14, 2026
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-1.5">Banner Scroll Translations</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Adjusted scrolling Japanese typographic train speeds under Region banners, improving readability and enhancing light/dark themes alignment.
                        </p>
                      </div>

                      {/* Update 3 */}
                      <div
                        className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] hover:shadow-lg ${
                          isLightTheme ? "bg-slate-50/60 border-slate-200" : "bg-white/3 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest px-2 py-0.5 bg-emerald-500/10 rounded">
                            Database Split
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            July 12, 2026
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-1.5">Split Character and Item Dex</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Refined National Dex category headers, preparing a standalone Item Dex and Trainer Character lists. Coming soon next sprint!
                        </p>
                      </div>

                      {/* Update 4 */}
                      <div
                        className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] hover:shadow-lg ${
                          isLightTheme ? "bg-slate-50/60 border-slate-200" : "bg-white/3 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest px-2 py-0.5 bg-amber-500/10 rounded">
                            Contrast Refactor
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            July 10, 2026
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-1.5">Light Mode Visibility Fix</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Fixed color contrast on various interactive components, including Compare tab toggles, tables, and Pokemon details stats graphs.
                        </p>
                      </div>

                      {/* Update 5 */}
                      <div
                        className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] hover:shadow-lg ${
                          isLightTheme ? "bg-slate-50/60 border-slate-200" : "bg-white/3 border-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest px-2 py-0.5 bg-purple-500/10 rounded">
                            System Launch
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            July 05, 2026
                          </span>
                        </div>
                        <h4 className="font-bold text-sm mb-1.5">National Dex is Live!</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          The National Dex containing over 640 detailed records (Gen 1 to 5) has been fully published, featuring search filters and type weakness matrix!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Curated Region scroll layout */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
              <div className="mb-8 text-center md:text-left">
                <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block mb-1">
                  Begin your journey
                </span>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl">
                  Choose a Core Region
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-1 max-w-md">
                  Scroll horizontally to discover distinct professors, gym badges, and champions.
                </p>
              </div>
              <RegionSection
                isLightTheme={isLightTheme}
                onSelectRegion={(reg) => {
                  setActivePage("regions");
                  setSelectedRegion(reg);
                }}
                selectedRegion={null}
                onSelectPokemonById={handleSelectPokemonById}
                layout="scroll"
              />
            </div>

            {/* Featured Grid layout on Home page */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 border-t border-slate-500/10">
              <div className="mb-8 text-center md:text-left flex justify-between items-end flex-wrap gap-4">
                <div>
                  <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block mb-1">
                    Spotlight Choices
                  </span>
                  <h2 className="font-display font-extrabold text-2xl md:text-4xl">
                    Featured Pokémon
                  </h2>
                </div>
                <button
                  onClick={() => setActivePage("national")}
                  className="px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/15 text-blue-500 border border-blue-500/20 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore full Pokédex</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <PokemonGrid
                isLightTheme={isLightTheme}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                onSelectPokemonById={handleSelectPokemonById}
                featuredOnly={true}
              />
            </div>
          </div>
        )}

        {activePage === "regions" && (
          <div className="py-8">
            {!selectedRegion && (
              <div className="max-w-4xl mx-auto text-center px-4 mb-10 mt-4">
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-[0.2em] block mb-3">
                  WHERE WILL YOU GO?
                </span>
                <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-4">
                  Regions of the Pokémon World
                </h1>
                <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto">
                  Click a region to view its Pokémon, professor, champion, and more.
                </p>
              </div>
            )}
            <RegionSection
              isLightTheme={isLightTheme}
              onSelectRegion={handleSelectRegion}
              selectedRegion={selectedRegion}
              onSelectPokemonById={handleSelectPokemonById}
              layout="grid"
            />
          </div>
        )}

        {activePage === "national" && (
          <div className="py-8 px-6 md:px-12">
            {/* Tactile Sub-navigation tab selector */}
            <div className="flex justify-center mb-10">
              <div className={`p-1 rounded-2xl flex gap-1 border ${
                isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-[#151516] border-white/5"
              }`}>
                {(["dex", "types", "compare"] as const).map((tab) => {
                  const label = tab === "dex" ? "Pokédex" : tab === "types" ? "Elemental Types" : "Compare";
                  const isActive = nationalSubTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setNationalSubTab(tab)}
                      className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                        isActive
                          ? isLightTheme
                            ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                            : "bg-[#242426] text-white shadow-sm border border-white/5"
                          : isLightTheme
                          ? "text-slate-600 hover:text-slate-950 hover:bg-white/40"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {nationalSubTab === "dex" && (
              <div>
                <div className="max-w-4xl mx-auto text-center px-4 mb-10">
                  <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block mb-2">
                    The Complete Archive
                  </span>
                  <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                    Pokédex
                  </h1>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                    Dossier archives for generations 1 to 9. Filter dynamically by element types, release order, or alphabetically.
                  </p>
                </div>
                <PokemonGrid
                  isLightTheme={isLightTheme}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  onSelectPokemonById={handleSelectPokemonById}
                />
              </div>
            )}

            {nationalSubTab === "types" && (
              <div>
                <div className="max-w-4xl mx-auto text-center px-4 mb-10">
                  <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block mb-2">
                    Know Your Matchups
                  </span>
                  <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                    Pokémon Elemental Types
                  </h1>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                    Explore elements and properties. Click any of the 18 types below to examine offense multipliers, counters, and matching species.
                  </p>
                </div>
                <TypesSection
                  isLightTheme={isLightTheme}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  onSelectPokemonById={handleSelectPokemonById}
                />
              </div>
            )}

            {nationalSubTab === "compare" && (
              <div>
                <div className="max-w-4xl mx-auto text-center px-4 mb-10">
                  <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                    Compare Archives
                  </h1>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                    Compare regional lore systems side-by-side or select two Pokémon to compare base combat stats and totals in real-time.
                  </p>
                </div>
                <CompareSection
                  isLightTheme={isLightTheme}
                  onSelectPokemonById={handleSelectPokemonById}
                />
              </div>
            )}
          </div>
        )}

        {activePage === "timeline" && (
          <div className="py-8">
            <TimelineSection isLightTheme={isLightTheme} />
          </div>
        )}

        {activePage === "fun" && (
          <div className="py-8">
            <div className="max-w-4xl mx-auto text-center px-4 mb-10">
              <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block mb-2">
                Mini-Games & Utilities
              </span>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                Fun & Games
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                Test your instincts with visual silhouette quizzes, discover curated spotlights, or assemble instant battle squads.
              </p>
            </div>
            <FunSection
              isLightTheme={isLightTheme}
              onSelectPokemonById={handleSelectPokemonById}
            />
          </div>
        )}

        {activePage === "about" && (
          <div className="py-8">
            <AboutSection isLightTheme={isLightTheme} />
          </div>
        )}

        {activePage === "characters" && (
          <div className="py-12 max-w-5xl mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-widest inline-block mb-4">
                Ultimate Database Expansion
              </span>
              <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
                Char/Item Dex
              </h1>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                We're currently compiling extensive data tables and visual archives for trainer characters, items, and accessories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Character Dex Section */}
              <div className={`p-8 md:p-10 rounded-3xl border transition-all ${
                isLightTheme
                  ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-xl"
                  : "bg-slate-950/40 border-white/5 text-slate-100 shadow-2xl"
              }`}>
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 blur-xl animate-pulse" />
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border relative z-10 ${
                    isLightTheme 
                      ? "bg-blue-50 border-blue-200 text-blue-600" 
                      : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  }`}>
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FAF7F0] dark:bg-[#080809] border border-slate-500/10 flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </div>

                <div className="text-center">
                  <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20 uppercase tracking-widest inline-block mb-4 animate-pulse">
                    Coming Soon
                  </span>

                  <h3 className="font-display font-black text-2xl tracking-tight mb-3">
                    Character Dex
                  </h3>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Detailed profile indexes for Gym Leaders, Elite Four, Champions, Rivals, and legendary trainers across Kanto and beyond. Compiles their battle teams, strategies, sprites, and background lore.
                  </p>
                </div>
              </div>

              {/* Item Dex Section */}
              <div className={`p-8 md:p-10 rounded-3xl border transition-all ${
                isLightTheme
                  ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-xl"
                  : "bg-slate-950/40 border-white/5 text-slate-100 shadow-2xl"
              }`}>
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute w-24 h-24 rounded-full bg-emerald-500/10 blur-xl animate-pulse" />
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border relative z-10 ${
                    isLightTheme 
                      ? "bg-emerald-50 border-emerald-200 text-emerald-600" 
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  }`}>
                    <Package className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FAF7F0] dark:bg-[#080809] border border-slate-500/10 flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </div>

                <div className="text-center">
                  <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20 uppercase tracking-widest inline-block mb-4 animate-pulse">
                    Coming Soon
                  </span>

                  <h3 className="font-display font-black text-2xl tracking-tight mb-3">
                    Item Dex
                  </h3>

                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    A comprehensive directory of Poké Balls, battle items, berries, key story artifacts, and held items. Explore dynamic location maps, purchase values, and detailed passive effects.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setActivePage("home")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                Go Back to Home
              </button>
            </div>
          </div>
        )}

        {activePage === "poke-ai" && (
          <div className="py-12 max-w-4xl mx-auto px-6 text-center">
            <div className={`p-8 md:p-12 rounded-3xl border glass transition-all ${
              isLightTheme
                ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-xl"
                : "bg-slate-950/40 border-white/5 text-slate-100 shadow-2xl"
            }`}>
              <div className="flex justify-center mb-6 relative">
                <div className="absolute w-24 h-24 rounded-full bg-indigo-500/15 blur-2xl animate-pulse" />
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border relative z-10 ${
                  isLightTheme 
                    ? "bg-indigo-50 border-indigo-200 text-indigo-600" 
                    : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                }`}>
                  <Wand2 className="w-8 h-8 animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FAF7F0] dark:bg-[#080809] border border-slate-500/10 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>

              <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 uppercase tracking-widest inline-block mb-4">
                Feature Coming Soon
              </span>

              <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
                Poke AI
              </h1>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
                Unleash your creativity! Here you will soon be able to make your custom AI-generated Pokémon, write unique trainer stories, author comprehensive lore, and build playable custom mini-games and interactive fan-webpages.
              </p>

              <button
                onClick={() => setActivePage("home")}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 cursor-pointer"
              >
                Go Back to Home
              </button>
            </div>
          </div>
        )}

        {activePage === "favorites" && (
          <div className="py-8 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center px-4 mb-10">
              <span className="text-xs font-extrabold text-rose-500 uppercase tracking-widest block mb-2">
                Your Curated Squad
              </span>
              <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
                Favorite Pokémon Team
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                Your local cached targets list. Build your dream team of favorite Pokémon!
              </p>
            </div>
            <FavoritesSection
              isLightTheme={isLightTheme}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              onSelectPokemonById={handleSelectPokemonById}
            />
          </div>
        )}
      </main>

      {/* Sticky Bottom Footer */}
      <Footer 
        isLightTheme={isLightTheme} 
        setActivePage={setActivePage} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* Absolute Overlay: Detailed Pokémon Modal */}
      {selectedPokemonId !== null && (
        <PokemonModal
          id={selectedPokemonId}
          onClose={() => setSelectedPokemonId(null)}
          isLightTheme={isLightTheme}
          isFav={favorites.includes(selectedPokemonId)}
          toggleFavorite={toggleFavorite}
          onSelectPokemonById={handleSelectPokemonById} // Supports nested click evolutions!
        />
      )}

      {/* Floating Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs md:text-sm shadow-2xl flex items-center gap-2 border border-blue-400/20 animate-bounce">
          <Sparkles className="w-4 h-4 fill-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Cookies Consent Prompt Banner */}
      <CookieBanner 
        isLightTheme={isLightTheme} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)} 
        onOpenTerms={() => setIsTermsOpen(true)} 
      />

      {/* Privacy Policy Modal overlay */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        isLightTheme={isLightTheme} 
      />

      {/* Terms of Services Modal overlay */}
      <TermsOfServicesModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        isLightTheme={isLightTheme} 
      />
    </div>
  );
}
