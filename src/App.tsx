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
import { Sparkles, Heart, ChevronRight, Lock, Package } from "lucide-react";


export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);
  
  // Nested sub-tabs inside National Dex page
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

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load theme state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("dexoria_theme");
    if (savedTheme) {
      setIsLightTheme(savedTheme === "light");
    }
  }, []);

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
                  const label = tab === "dex" ? "National Pokédex" : tab === "types" ? "Elemental Types" : "Compare";
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
                    National Pokédex
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
          <div className="py-12 max-w-4xl mx-auto px-6 text-center">
            <div className={`p-8 md:p-12 rounded-3xl border glass transition-all ${
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
                  <Package className="w-8 h-8" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FAF7F0] dark:bg-[#080809] border border-slate-500/10 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>

              <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-widest inline-block mb-4">
                Feature Coming Soon
              </span>

              <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4">
                Char/Item Dex
              </h1>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
                We're currently gathering data, sprites, and stats for trainer characters and item catalogs across all generations. Check back soon for the ultimate database expansion!
              </p>

              <button
                onClick={() => setActivePage("home")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 cursor-pointer"
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
