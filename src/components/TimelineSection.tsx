import React, { useState, useRef } from "react";
import { GENERATIONS_DATA } from "../data/pokemonGenerations";
import { GENERATION_LORE_DATA } from "../data/generationLore";
import { GENERATION_STATS_DATA } from "../data/generationStats";
import { 
  CalendarRange, Gamepad2, Layers, ChevronDown, Sparkles, 
  Award, PlayCircle, Trophy, Globe, Flame, Droplets, Leaf, Star, BookOpen,
  ArrowLeft, ArrowRight, Shield, Milestone, BarChart3, Tv,
  TrendingUp, Activity, Swords, Zap, RefreshCw, Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TimelineSectionProps {
  isLightTheme: boolean;
}

// Starter Mapping Database for all Generations
interface PokemonStarter {
  id: number;
  name: string;
  type: "grass" | "fire" | "water";
  ability: string;
}

const GENERATION_STARTERS: Record<number, PokemonStarter[]> = {
  1: [
    { id: 1, name: "Bulbasaur", type: "grass", ability: "Overgrow" },
    { id: 4, name: "Charmander", type: "fire", ability: "Blaze" },
    { id: 7, name: "Squirtle", type: "water", ability: "Torrent" }
  ],
  2: [
    { id: 152, name: "Chikorita", type: "grass", ability: "Overgrow" },
    { id: 155, name: "Cyndaquil", type: "fire", ability: "Blaze" },
    { id: 158, name: "Totodile", type: "water", ability: "Torrent" }
  ],
  3: [
    { id: 252, name: "Treecko", type: "grass", ability: "Overgrow" },
    { id: 255, name: "Torchic", type: "fire", ability: "Blaze" },
    { id: 258, name: "Mudkip", type: "water", ability: "Torrent" }
  ],
  4: [
    { id: 387, name: "Turtwig", type: "grass", ability: "Overgrow" },
    { id: 390, name: "Chimchar", type: "fire", ability: "Blaze" },
    { id: 393, name: "Piplup", type: "water", ability: "Torrent" }
  ],
  5: [
    { id: 495, name: "Snivy", type: "grass", ability: "Overgrow" },
    { id: 498, name: "Tepig", type: "fire", ability: "Blaze" },
    { id: 501, name: "Oshawott", type: "water", ability: "Torrent" }
  ],
  6: [
    { id: 650, name: "Chespin", type: "grass", ability: "Overgrow" },
    { id: 653, name: "Fennekin", type: "fire", ability: "Blaze" },
    { id: 656, name: "Froakie", type: "water", ability: "Torrent" }
  ],
  7: [
    { id: 722, name: "Rowlet", type: "grass", ability: "Overgrow" },
    { id: 725, name: "Litten", type: "fire", ability: "Blaze" },
    { id: 728, name: "Popplio", type: "water", ability: "Torrent" }
  ],
  8: [
    { id: 810, name: "Grookey", type: "grass", ability: "Overgrow" },
    { id: 813, name: "Scorbunny", type: "fire", ability: "Blaze" },
    { id: 816, name: "Sobble", type: "water", ability: "Torrent" }
  ],
  9: [
    { id: 906, name: "Sprigatito", type: "grass", ability: "Overgrow" },
    { id: 909, name: "Fuecoco", type: "fire", ability: "Blaze" },
    { id: 912, name: "Quaxly", type: "water", ability: "Torrent" }
  ]
};

// Mascot Legendaries Mapping for all Generations
interface MascotLegendary {
  id: number;
  name: string;
  role: string;
  types: string[];
}

const GENERATION_LEGENDARIES: Record<number, MascotLegendary[]> = {
  1: [
    { id: 150, name: "Mewtwo", role: "Ultimate Clone", types: ["Psychic"] },
    { id: 144, name: "Articuno", role: "Legendary Bird", types: ["Ice", "Flying"] }
  ],
  2: [
    { id: 249, name: "Lugia", role: "Guardian of the Sea", types: ["Psychic", "Flying"] },
    { id: 250, name: "Ho-Oh", role: "Rainbow Phoenix", types: ["Fire", "Flying"] }
  ],
  3: [
    { id: 382, name: "Kyogre", role: "Oceanic Creator", types: ["Water"] },
    { id: 383, name: "Groudon", role: "Continent Creator", types: ["Ground"] }
  ],
  4: [
    { id: 483, name: "Dialga", role: "Temporal Ruler", types: ["Steel", "Dragon"] },
    { id: 484, name: "Palkia", role: "Spatial Ruler", types: ["Water", "Dragon"] }
  ],
  5: [
    { id: 643, name: "Reshiram", role: "Truth Dragon", types: ["Dragon", "Fire"] },
    { id: 644, name: "Zekrom", role: "Ideals Dragon", types: ["Dragon", "Electric"] }
  ],
  6: [
    { id: 716, name: "Xerneas", role: "Life Bringer", types: ["Fairy"] },
    { id: 717, name: "Yveltal", role: "Destruction Vessel", types: ["Dark", "Flying"] }
  ],
  7: [
    { id: 791, name: "Solgaleo", role: "Solar Devourer", types: ["Psychic", "Steel"] },
    { id: 792, name: "Lunala", role: "Lunar Emissary", types: ["Psychic", "Ghost"] }
  ],
  8: [
    { id: 888, name: "Zacian", role: "Sovereign Sword", types: ["Fairy", "Steel"] },
    { id: 889, name: "Zamazenta", role: "Sovereign Shield", types: ["Fighting", "Steel"] }
  ],
  9: [
    { id: 1007, name: "Koraidon", role: "Ancient Wing", types: ["Fighting", "Dragon"] },
    { id: 1008, name: "Miraidon", role: "Iron Serpent", types: ["Electric", "Dragon"] }
  ]
};

// Theme attributes for generation map visual presentation
const GEN_THEME_COLORS: Record<number, { gradient: string; text: string; bgGlow: string; border: string }> = {
  1: { gradient: "from-red-500/15 to-rose-500/5", text: "text-red-400", bgGlow: "rgba(239, 68, 68, 0.2)", border: "border-red-500/20" },
  2: { gradient: "from-amber-500/15 to-yellow-600/5", text: "text-amber-400", bgGlow: "rgba(245, 158, 11, 0.2)", border: "border-amber-500/20" },
  3: { gradient: "from-emerald-500/15 to-teal-500/5", text: "text-emerald-400", bgGlow: "rgba(16, 185, 129, 0.2)", border: "border-emerald-500/20" },
  4: { gradient: "from-blue-500/15 to-indigo-500/5", text: "text-blue-400", bgGlow: "rgba(59, 130, 246, 0.2)", border: "border-blue-500/20" },
  5: { gradient: "from-purple-500/15 to-violet-500/5", text: "text-purple-400", bgGlow: "rgba(139, 92, 246, 0.2)", border: "border-purple-500/20" },
  6: { gradient: "from-pink-500/15 to-rose-400/5", text: "text-pink-400", bgGlow: "rgba(236, 72, 153, 0.2)", border: "border-pink-500/20" },
  7: { gradient: "from-orange-500/15 to-amber-500/5", text: "text-orange-400", bgGlow: "rgba(249, 115, 22, 0.2)", border: "border-orange-500/20" },
  8: { gradient: "from-cyan-500/15 to-blue-600/5", text: "text-cyan-400", bgGlow: "rgba(6, 182, 212, 0.2)", border: "border-cyan-500/20" },
  9: { gradient: "from-red-600/15 to-indigo-600/5", text: "text-rose-400", bgGlow: "rgba(225, 29, 72, 0.2)", border: "border-rose-500/20" }
};

// Mascot Pokémon of the generations for visual indicators on map
const GEN_MAP_MASCOTS: Record<number, { id: number; name: string }> = {
  1: { id: 25, name: "Pikachu" },
  2: { id: 249, name: "Lugia" },
  3: { id: 382, name: "Kyogre" },
  4: { id: 483, name: "Dialga" },
  5: { id: 643, name: "Reshiram" },
  6: { id: 716, name: "Xerneas" },
  7: { id: 791, name: "Solgaleo" },
  8: { id: 888, name: "Zacian" },
  9: { id: 1008, name: "Miraidon" }
};

// Key mechanic innovations for card badges
const GEN_KEY_INNOVATIONS: Record<number, string> = {
  1: "Type Effectiveness System & 151 Species",
  2: "Dark/Steel Types, Held Items & Shinies",
  3: "Abilities, Natures & Double Battles",
  4: "Physical/Special Move Split & Arceus Myth",
  5: "Animated Sprites, Hidden Abilities & Seasons",
  6: "Full 3D Engine, Fairy Type & Mega Evolution",
  7: "Regional Forms, Island Trials & Z-Moves",
  8: "3D Wild Area & Dynamax / Gigantamax",
  9: "Non-Linear Open World & Terastallization"
};

export default function TimelineSection({ isLightTheme }: TimelineSectionProps) {
  const [activePageGenId, setActivePageGenId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "metagame" | "media">("overview");
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll map helper handlers
  const scrollMap = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 380;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const getOfficialArtwork = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const getTypeIcon = (type: "grass" | "fire" | "water") => {
    switch (type) {
      case "grass": return <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />;
      case "fire": return <Flame className="w-4 h-4 text-orange-400 shrink-0" />;
      case "water": return <Droplets className="w-4 h-4 text-blue-400 shrink-0" />;
    }
  };

  const getStarterStyle = (type: "grass" | "fire" | "water") => {
    switch (type) {
      case "grass":
        return "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 text-emerald-400";
      case "fire":
        return "border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40 text-orange-400";
      case "water":
        return "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 text-blue-400";
    }
  };

  // Safe accessor to colors or default fallback
  const getGenColors = (genId: number) => {
    return GEN_THEME_COLORS[genId] || {
      gradient: "from-blue-500/10 to-indigo-500/5",
      text: "text-blue-400",
      bgGlow: "rgba(59, 130, 246, 0.15)",
      border: "border-blue-500/20"
    };
  };

  return (
    <div className="w-full relative select-none">
      <AnimatePresence mode="wait">
        {activePageGenId === null ? (
          /* ========================================================================= */
          /* 1. MAP VIEW: Fits the whole screen and flows from one Gen to another      */
          /* ========================================================================= */
          <motion.div
            key="timeline-map"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full px-4 md:px-8 max-w-7xl mx-auto"
          >
            {/* Map Path Navigation Guide Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-500/10">
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-blue-500 uppercase">
                  <Milestone className="w-3.5 h-3.5" />
                  <span>The Grand Generational Roadmap</span>
                </span>
                <h2 className={`font-display font-black text-2xl md:text-4xl uppercase tracking-tight mt-1.5 ${
                  isLightTheme ? "text-slate-900" : "text-white"
                }`}>
                  Core Exploration Map
                </h2>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Scroll horizontally to travel through time from 1996 to today. Click on any generation node to open its full dossier archive, graphs, and metagame breakdown.
                </p>
              </div>

              {/* Navigation scroll handles (hidden on mobile) */}
              <div className="hidden md:flex items-center gap-2.5">
                <button
                  onClick={() => scrollMap("left")}
                  className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
                    isLightTheme 
                      ? "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
                      : "bg-slate-900 border-white/10 hover:bg-white/5 text-slate-100"
                  }`}
                  title="Scroll Left"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollMap("right")}
                  className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95 ${
                    isLightTheme 
                      ? "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
                      : "bg-slate-900 border-white/10 hover:bg-white/5 text-slate-100"
                  }`}
                  title="Scroll Right"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Map Lanes Scroll container */}
            <div
              ref={scrollContainerRef}
              className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 py-6 md:overflow-x-auto scrollbar-none md:snap-x md:snap-mandatory"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {GENERATIONS_DATA.map((gen, index) => {
                const colors = getGenColors(gen.id);
                const mascot = GEN_MAP_MASCOTS[gen.id];
                const stats = GENERATION_STATS_DATA[gen.id];

                return (
                  <React.Fragment key={gen.id}>
                    {/* Immersive interactive Map Node Card */}
                    <div 
                      onClick={() => {
                        setActivePageGenId(gen.id);
                        setActiveTab("overview");
                      }}
                      className={`w-full max-w-[360px] md:snap-center md:shrink-0 md:w-[360px] p-6 rounded-[32px] border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between overflow-hidden ${
                        isLightTheme
                          ? `bg-gradient-to-b from-white to-slate-100/50 hover:bg-white border-slate-300/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2`
                          : `bg-gradient-to-b from-slate-900/60 to-slate-950/90 border-white/5 shadow-2xl hover:border-blue-500/30 hover:shadow-blue-500/5 hover:-translate-y-2`
                      }`}
                    >
                      {/* Ambient colored backdrop glow on hover */}
                      <div
                        className="absolute -right-16 -top-16 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none"
                        style={{ backgroundColor: colors.bgGlow }}
                      />

                      {/* Giant background roman numeral watermark */}
                      <span className={`absolute right-6 top-4 font-display font-black text-6xl sm:text-7xl opacity-[0.06] select-none tracking-tighter ${colors.text}`}>
                        {gen.romanName}
                      </span>

                      {/* Card Content */}
                      <div>
                        {/* Top badge indicators */}
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-lg border uppercase ${
                            isLightTheme
                              ? "bg-slate-200/50 border-slate-300 text-slate-600"
                              : "bg-white/5 border-white/10 text-slate-400"
                          }`}>
                            {gen.romanName}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-500 flex items-center gap-1">
                            <CalendarRange className="w-3.5 h-3.5 text-blue-500" />
                            <span>{gen.releaseYear}</span>
                          </span>
                        </div>

                        {/* Title and Region */}
                        <div className="mt-8">
                          <h3 className={`font-display font-black text-xl sm:text-2xl uppercase tracking-tight group-hover:text-blue-500 transition-colors ${
                            isLightTheme ? "text-slate-900" : "text-white"
                          }`}>
                            {gen.name}
                          </h3>
                          <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                            REGION: {GENERATION_LORE_DATA[gen.id]?.title.split(" & ")[0].split(" of ")[1] || "Core Region"}
                          </p>
                        </div>

                        {/* Core Mechanic Innovation Badge */}
                        <div className="mt-3">
                          <span className="text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-lg border bg-blue-500/10 border-blue-500/20 text-blue-400 block leading-tight">
                            ⚡ {GEN_KEY_INNOVATIONS[gen.id] || "Battle System Advancements"}
                          </span>
                        </div>

                        {/* Key statistics indicators */}
                        <div className={`mt-4 p-3 rounded-2xl border flex items-center justify-between text-[11px] font-mono font-bold ${
                          isLightTheme ? "bg-slate-100/80 border-slate-200" : "bg-white/3 border-white/5"
                        }`}>
                          <div className="flex items-center gap-1.5">
                            <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />
                            <span className="text-slate-400">HARDWARE:</span>
                            <span className={isLightTheme ? "text-slate-800" : "text-slate-200"}>{gen.platform}</span>
                          </div>
                        </div>

                        {/* Additional Quick Metrics */}
                        <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-mono font-bold">
                          <div className={`p-2 rounded-xl border flex items-center justify-between ${
                            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5 text-slate-300"
                          }`}>
                            <span className="text-slate-500">SPECIES:</span>
                            <span className="text-emerald-400">+{gen.count} New</span>
                          </div>
                          <div className={`p-2 rounded-xl border flex items-center justify-between ${
                            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5 text-slate-300"
                          }`}>
                            <span className="text-slate-500">COPIES:</span>
                            <span className="text-amber-400">{stats ? stats.salesMillions : 20}M Sold</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive peeking Mascot Artwork */}
                      <div className="relative w-full h-24 mt-4 flex items-end justify-center">
                        <img
                          src={getOfficialArtwork(mascot.id)}
                          alt={mascot.name}
                          loading="lazy"
                          className="w-24 h-24 object-contain filter drop-shadow-md group-hover:scale-120 group-hover:-translate-y-2 transition-all duration-300 relative z-10"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-0 w-20 h-2 bg-black/10 blur-md rounded-full group-hover:w-24 transition-all duration-300" />
                      </div>

                      {/* Open Action Footer indicator */}
                      <div className="mt-5 pt-4 border-t border-slate-500/10 flex items-center justify-between">
                        <span className="text-[9px] font-mono font-extrabold tracking-wider text-blue-500 uppercase flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 animate-pulse" />
                          <span>OPEN DOSSIER & GRAPHS</span>
                        </span>
                        <div className={`p-1.5 rounded-lg border transition-all ${
                          isLightTheme ? "bg-slate-100 border-slate-200" : "bg-white/5 border-white/5"
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* Connecting Map arrow between cards */}
                    {index < GENERATIONS_DATA.length - 1 && (
                      <>
                        <div className="hidden md:flex shrink-0 flex-col items-center justify-center text-slate-600/30 px-1 select-none">
                          <span className="text-[10px] font-mono font-extrabold text-blue-500/25 tracking-widest uppercase mb-1">NEXT</span>
                          <div className="flex items-center">
                            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20" />
                            <ArrowRight className="w-5 h-5 text-blue-500/50 animate-pulse" />
                          </div>
                        </div>

                        <div className="flex md:hidden shrink-0 flex-col items-center justify-center text-slate-600/30 py-4 select-none">
                          <span className="text-[9px] font-mono font-extrabold text-blue-500/25 tracking-widest uppercase mb-1">NEXT</span>
                          <div className="flex flex-col items-center">
                            <div className="h-6 w-[2px] bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20" />
                            <ChevronDown className="w-5 h-5 text-blue-500/50 animate-pulse mt-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* 2. SUB-PAGE DETAIL VIEW: Interactive Tabs, Analytics & Deep Info          */
          /* ========================================================================= */
          (() => {
            const gen = GENERATIONS_DATA.find((g) => g.id === activePageGenId);
            if (!gen) return null;

            const lore = GENERATION_LORE_DATA[gen.id] || {
              title: "Generational Archive Decrypted",
              backstory: "No deep backstory entries recorded for this segment.",
              legendaryConflict: "Conflicts maintain standard regional properties.",
              regionalCulture: "Culture mirrors traditional Pokémon ecosystems.",
              trivia: "Unexplored region files.",
              culturalInfluence: "Standard franchise legacy records."
            };
            const stats = GENERATION_STATS_DATA[gen.id];
            const starters = GENERATION_STARTERS[gen.id] || [];
            const legendaries = GENERATION_LEGENDARIES[gen.id] || [];

            return (
              <motion.div
                key="timeline-subpage"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full min-h-screen px-4 md:px-10 py-2 max-w-7xl mx-auto"
              >
                {/* Back Button and Sub-page Header */}
                <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-500/15">
                  <button
                    onClick={() => setActivePageGenId(null)}
                    className={`px-5 py-2.5 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all hover:-translate-x-1 shadow-md ${
                      isLightTheme 
                        ? "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
                        : "bg-slate-900 border-white/10 hover:bg-white/5 text-slate-100"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-500" />
                    <span>Back to Roadmap Map</span>
                  </button>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-500 font-bold">
                    <span>Index Node ID:</span>
                    <span className={`px-2 py-0.5 rounded border ${
                      isLightTheme ? "bg-slate-200/50 text-slate-700" : "bg-white/5 text-slate-300"
                    }`}>
                      0{gen.id}
                    </span>
                  </div>
                </div>

                {/* Main Hero Generation Title Section */}
                <div className="mb-8 text-center sm:text-left relative py-2">
                  <div className="flex items-center justify-center sm:justify-start gap-3.5">
                    <span className={`text-xs md:text-sm font-mono font-black px-3.5 py-1.5 rounded-xl border uppercase tracking-widest ${
                      isLightTheme ? "bg-blue-500/5 text-blue-600 border-blue-500/20" : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}>
                      {gen.romanName} Archive
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400">
                      <CalendarRange className="w-4 h-4 text-blue-500" />
                      <span>RELEASED IN {gen.releaseYear}</span>
                    </div>
                  </div>

                  <h1 className={`font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter mt-3 leading-none ${
                    isLightTheme ? "text-slate-900" : "text-white"
                  }`}>
                    {gen.name} Dossier
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2 max-w-4xl capitalize">
                    {lore.title}
                  </h2>
                </div>

                {/* Subpage Interactive Tab Bar Switcher */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-500/15 scrollbar-none">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                      activeTab === "overview"
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                        : isLightTheme
                          ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Lore & Chronicle</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                      activeTab === "analytics"
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                        : isLightTheme
                          ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Graphs & Analytics</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("metagame")}
                    className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                      activeTab === "metagame"
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                        : isLightTheme
                          ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    <Swords className="w-4 h-4" />
                    <span>Competitive Metagame</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("media")}
                    className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                      activeTab === "media"
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                        : isLightTheme
                          ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    <Tv className="w-4 h-4" />
                    <span>Anime & Media History</span>
                  </button>
                </div>

                {/* TAB 1: OVERVIEW & LORE */}
                {activeTab === "overview" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left Column Lore */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className={`p-6 md:p-8 rounded-[32px] border ${
                          isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                        }`}>
                          <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-blue-400 uppercase tracking-wider flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                            <span>Historical Regional Backstory</span>
                          </h3>
                          <p className={`text-sm md:text-base leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                            {lore.backstory}
                          </p>
                        </div>

                        <div className={`p-6 md:p-8 rounded-[32px] border ${
                          isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                        }`}>
                          <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-rose-400 uppercase tracking-wider flex items-center gap-2">
                            <Shield className="w-5 h-5 text-rose-500 shrink-0" />
                            <span>Primordial Creation Myth & Conflicts</span>
                          </h3>
                          <p className={`text-sm md:text-base leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                            {lore.legendaryConflict}
                          </p>
                        </div>

                        <div className={`p-6 md:p-8 rounded-[32px] border ${
                          isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                        }`}>
                          <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span>Societal Traditions & Culture</span>
                          </h3>
                          <p className={`text-sm md:text-base leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                            {lore.regionalCulture}
                          </p>
                        </div>
                      </div>

                      {/* Right Column Starters & Legendaries */}
                      <div className="lg:col-span-5 space-y-6">
                        {/* Starters */}
                        <div className={`p-6 md:p-8 rounded-[32px] border ${
                          isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                        }`}>
                          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
                            [ Generational Starter Partners ]
                          </span>
                          <div className="flex flex-col gap-3">
                            {starters.map((starter) => (
                              <div
                                key={starter.id}
                                className={`p-3.5 rounded-2xl border flex items-center gap-4 ${getStarterStyle(starter.type)}`}
                              >
                                <img
                                  src={getOfficialArtwork(starter.id)}
                                  alt={starter.name}
                                  className="w-14 h-14 object-contain drop-shadow"
                                  referrerPolicy="no-referrer"
                                />
                                <div>
                                  <div className="flex items-center gap-2">
                                    {getTypeIcon(starter.type)}
                                    <span className="font-display font-black text-sm uppercase text-slate-100 truncate">
                                      {starter.name}
                                    </span>
                                  </div>
                                  <p className="text-[10px] font-mono text-slate-400 mt-0.5 uppercase font-bold">
                                    #{starter.starter ? starter.id : starter.id} · Ability: {starter.ability}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Legendaries */}
                        <div className={`p-6 md:p-8 rounded-[32px] border ${
                          isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                        }`}>
                          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
                            [ Flagship Mascot Legendaries ]
                          </span>
                          <div className="flex flex-col gap-3">
                            {legendaries.map((leg) => (
                              <div
                                key={leg.id}
                                className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                                  isLightTheme ? "bg-slate-50 border-slate-200" : "bg-slate-900/40 border-white/5"
                                }`}
                              >
                                <div>
                                  <h5 className={`font-display font-black text-sm uppercase ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                                    {leg.name}
                                  </h5>
                                  <p className="text-[10px] text-slate-400 font-mono font-semibold">{leg.role}</p>
                                </div>
                                <img
                                  src={getOfficialArtwork(leg.id)}
                                  alt={leg.name}
                                  className="w-14 h-14 object-contain drop-shadow"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: GRAPHS & ANALYTICS */}
                {activeTab === "analytics" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    {/* Top Stats Cards Banner */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className={`p-5 rounded-2xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Global Sales</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-display font-black text-amber-400">{stats ? stats.salesMillions : 20}M</span>
                          <span className="text-xs font-mono text-slate-400">Copies Sold</span>
                        </div>
                      </div>

                      <div className={`p-5 rounded-2xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Average Base Stat Total</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-display font-black text-emerald-400">{stats ? stats.avgBaseStatTotal : 430}</span>
                          <span className="text-xs font-mono text-slate-400">BST Average</span>
                        </div>
                      </div>

                      <div className={`p-5 rounded-2xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Global Metagame Score</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-display font-black text-blue-400">{stats ? stats.globalMetagameRating : 9.0}/10</span>
                          <span className="text-xs font-mono text-slate-400">VGC Index</span>
                        </div>
                      </div>

                      <div className={`p-5 rounded-2xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"}`}>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Community Popularity</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-display font-black text-purple-400">{stats ? stats.communityPopularityScore : 95}%</span>
                          <span className="text-xs font-mono text-slate-400">Approval</span>
                        </div>
                      </div>
                    </div>

                    {/* Sales Comparison Bar Chart Across All Generations */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className={`font-display font-black text-lg uppercase ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                            Global Franchise Sales Comparison (Millions of Copies)
                          </h3>
                          <p className="text-xs text-slate-400 mt-1 font-mono">
                            Historical physical & digital copies sold worldwide across generational release cycles.
                          </p>
                        </div>
                        <TrendingUp className="w-5 h-5 text-amber-400" />
                      </div>

                      <div className="space-y-3">
                        {GENERATIONS_DATA.map((g) => {
                          const gStats = GENERATION_STATS_DATA[g.id];
                          const sales = gStats ? gStats.salesMillions : 20;
                          const maxSales = 35;
                          const pct = (sales / maxSales) * 100;
                          const isCurrent = g.id === gen.id;

                          return (
                            <div key={g.id} className="space-y-1">
                              <div className="flex justify-between text-xs font-mono font-bold">
                                <span className={isCurrent ? "text-blue-400 font-extrabold" : "text-slate-400"}>
                                  {g.romanName} ({g.name})
                                </span>
                                <span className={isCurrent ? "text-blue-400 font-extrabold" : "text-slate-300"}>
                                  {sales} Million Units
                                </span>
                              </div>
                              <div className="h-4 w-full bg-slate-800/40 rounded-lg overflow-hidden p-0.5 border border-white/5">
                                <div
                                  style={{ width: `${pct}%` }}
                                  className={`h-full rounded transition-all duration-700 ${
                                    isCurrent ? "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50" : "bg-slate-600/60"
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Base Stat Total Power Creep Graph */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className={`font-display font-black text-lg uppercase ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                            Species Power Creep (Average Base Stat Total)
                          </h3>
                          <p className="text-xs text-slate-400 mt-1 font-mono">
                            Evolution of base stat averages across introduced species per generation.
                          </p>
                        </div>
                        <Activity className="w-5 h-5 text-emerald-400" />
                      </div>

                      <div className="grid grid-cols-9 gap-2 items-end h-48 pt-8 px-2 border-b border-slate-500/20">
                        {GENERATIONS_DATA.map((g) => {
                          const gStats = GENERATION_STATS_DATA[g.id];
                          const bst = gStats ? gStats.avgBaseStatTotal : 430;
                          const minBst = 400;
                          const maxBst = 500;
                          const heightPct = Math.max(10, ((bst - minBst) / (maxBst - minBst)) * 100);
                          const isCurrent = g.id === gen.id;

                          return (
                            <div key={g.id} className="flex flex-col items-center gap-2 h-full justify-end group cursor-help">
                              <span className="text-[10px] font-mono font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {bst}
                              </span>
                              <div
                                style={{ height: `${heightPct}%` }}
                                className={`w-full rounded-t-lg transition-all duration-500 ${
                                  isCurrent ? "bg-emerald-500 shadow-lg shadow-emerald-500/50" : "bg-slate-700/60 group-hover:bg-slate-600"
                                }`}
                              />
                              <span className={`text-[10px] font-mono font-bold ${isCurrent ? "text-emerald-400" : "text-slate-500"}`}>
                                {g.romanName}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed Type Distribution Breakdown */}
                    {stats && (
                      <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                        <h3 className={`font-display font-black text-lg uppercase mb-4 ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                          Generation {gen.romanName} Introduced Type Breakdown
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {stats.typeDistribution.map((t) => (
                            <div key={t.type} className={`p-3 rounded-xl border flex items-center justify-between ${
                              isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"
                            }`}>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                                <span className={`text-xs font-mono font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>
                                  {t.type}
                                </span>
                              </div>
                              <span className="text-xs font-mono font-black text-slate-400">
                                {t.count} Species
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* TAB 3: COMPETITIVE METAGAME */}
                {activeTab === "metagame" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                            <Trophy className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">VGC Competitive Format</span>
                            <h4 className={`font-display font-black text-lg ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                              {stats ? stats.vgcFormatName : "Standard Play"}
                            </h4>
                          </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
                          {stats ? stats.keyCompetitiveInnovation : "Generational metagame shifts defined modern high-tier battle strategy."}
                        </p>
                      </div>

                      <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                            <Zap className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Top Meta Apex Species</span>
                            <h4 className={`font-display font-black text-lg ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                              {stats ? stats.topPokemonName : "Mewtwo"} (BST {stats ? stats.topPokemonBst : 680})
                            </h4>
                          </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
                          The defining apex legendary species of this era, wielding unrivaled base stat distribution and defining the metagame tier list.
                        </p>
                      </div>
                    </div>

                    {/* Features & Battle Mechanics List */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                      <h3 className={`font-display font-black text-lg uppercase mb-4 ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                        Key Battle System & Hardware Mechanics
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {gen.keyFeatures.map((feat, idx) => (
                          <div key={idx} className={`p-4 rounded-2xl border flex items-start gap-3 ${
                            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/5"
                          }`}>
                            <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <div>
                              <h5 className={`font-display font-bold text-sm ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                                Feature #{idx + 1}
                              </h5>
                              <p className={`text-xs mt-1 ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>
                                {feat}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: ANIME & MEDIA */}
                {activeTab === "media" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    {stats && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Anime Series */}
                        <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <Tv className="w-6 h-6 text-purple-400" />
                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Corresponding Anime Season</span>
                              <h4 className={`font-display font-black text-lg ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                                {stats.animeSeason}
                              </h4>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-500/10">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-2">Key Traveling Companions:</span>
                            <div className="flex flex-wrap gap-2">
                              {stats.keyAnimeCompanions.map((c) => (
                                <span key={c} className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Iconic Movie & Remakes */}
                        <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <PlayCircle className="w-6 h-6 text-rose-400" />
                            <div>
                              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Iconic Box Office Feature Film</span>
                              <h4 className={`font-display font-black text-lg ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                                {stats.iconicMovie}
                              </h4>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-500/10">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-2">Remakes & Enhanced Sequels:</span>
                            <div className="flex flex-wrap gap-2">
                              {stats.remakesAndSequels.map((r) => (
                                <span key={r} className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                  {r}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Trivia and Cultural Legacy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                        <h4 className="font-display font-black text-sm mb-2.5 text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>Did You Know? (Trivia)</span>
                        </h4>
                        <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                          {lore.trivia}
                        </p>
                      </div>

                      <div className={`p-6 md:p-8 rounded-[32px] border ${isLightTheme ? "bg-white border-slate-200 shadow-md" : "bg-[#0c0d12]/80 border-white/5"}`}>
                        <h4 className="font-display font-black text-sm mb-2.5 text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Trophy className="w-4 h-4 text-purple-500 shrink-0" />
                          <span>Socio-cultural Legacy</span>
                        </h4>
                        <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                          {lore.culturalInfluence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Return button at bottom */}
                <div className="mt-12 flex justify-center border-t border-slate-500/10 pt-8 pb-4">
                  <button
                    onClick={() => {
                      setActivePageGenId(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`px-8 py-3 rounded-2xl border text-sm font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md ${
                      isLightTheme 
                        ? "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
                        : "bg-slate-900 border-white/10 hover:bg-white/5 text-slate-100"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-500" />
                    <span>Return to Roadmap Map</span>
                  </button>
                </div>

              </motion.div>
            );
          })()
        )}
      </AnimatePresence>
    </div>
  );
}
