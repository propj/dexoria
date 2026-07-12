import React, { useState, useRef, useEffect } from "react";
import { GENERATIONS_DATA } from "../data/pokemonGenerations";
import { GENERATION_LORE_DATA } from "../data/generationLore";
import { 
  CalendarRange, Gamepad2, Layers, ChevronDown, ChevronUp, Sparkles, 
  Dna, Award, PlayCircle, Trophy, Globe, Flame, Droplets, Leaf, Star, BookOpen,
  ArrowLeft, ArrowRight, Shield, Compass, MapPin, Sparkle, Milestone
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

// Simulated Type Distribution percentages for beautiful visual charts
interface GenTypeDistribution {
  grass: number;
  fire: number;
  water: number;
  normal: number;
  dragon: number;
  psychic: number;
  other: number;
}

const TYPE_DISTRIBUTION: Record<number, GenTypeDistribution> = {
  1: { grass: 12, fire: 10, water: 22, normal: 18, dragon: 3, psychic: 11, other: 24 },
  2: { grass: 10, fire: 10, water: 18, normal: 15, dragon: 1, psychic: 10, other: 36 },
  3: { grass: 13, fire: 7, water: 21, normal: 13, dragon: 7, psychic: 15, other: 24 },
  4: { grass: 14, fire: 5, water: 13, normal: 16, dragon: 6, psychic: 8, other: 38 },
  5: { grass: 13, fire: 10, water: 11, normal: 11, dragon: 6, psychic: 9, other: 40 },
  6: { grass: 12, fire: 11, water: 12, normal: 11, dragon: 12, psychic: 8, other: 34 },
  7: { grass: 16, fire: 9, water: 11, normal: 14, dragon: 8, psychic: 11, other: 31 },
  8: { grass: 11, fire: 12, water: 10, normal: 8, dragon: 14, psychic: 13, other: 32 },
  9: { grass: 12, fire: 8, water: 11, normal: 10, dragon: 15, psychic: 10, other: 34 }
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

export default function TimelineSection({ isLightTheme }: TimelineSectionProps) {
  const [activePageGenId, setActivePageGenId] = useState<number | null>(null);
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
                  Scroll horizontally to travel through time from 1996 to today. Click on any generation node to open its full-screen dossier archive.
                </p>
              </div>

              {/* Navigation scroll handles */}
              <div className="flex items-center gap-2.5">
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
              className="w-full overflow-x-auto flex items-stretch gap-6 py-6 scrollbar-none snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {GENERATIONS_DATA.map((gen, index) => {
                const colors = getGenColors(gen.id);
                const mascot = GEN_MAP_MASCOTS[gen.id];

                return (
                  <React.Fragment key={gen.id}>
                    {/* Immersive interactive Map Node Card */}
                    <div 
                      onClick={() => setActivePageGenId(gen.id)}
                      className={`snap-center shrink-0 w-[290px] sm:w-[330px] md:w-[360px] p-6 rounded-[32px] border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between overflow-hidden ${
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

                        {/* Key statistics indicators */}
                        <div className={`mt-5 p-3 rounded-2xl border flex items-center justify-between text-[11px] font-mono font-bold ${
                          isLightTheme ? "bg-slate-100/80 border-slate-200" : "bg-white/3 border-white/5"
                        }`}>
                          <div className="flex items-center gap-1.5">
                            <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />
                            <span className="text-slate-400">PLATFORM:</span>
                            <span className={isLightTheme ? "text-slate-800" : "text-slate-200"}>{gen.platform}</span>
                          </div>
                        </div>

                        {/* Species introduction metric */}
                        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono font-bold px-3">
                          <Layers className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-slate-400">INTRODUCED:</span>
                          <span className={isLightTheme ? "text-slate-800 font-extrabold" : "text-slate-200 font-extrabold"}>{gen.count} NEW SPECIES</span>
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
                          <span>DECIPHER CHRONICLE</span>
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
                      <div className="shrink-0 flex flex-col items-center justify-center text-slate-600/30 px-1 select-none">
                        <span className="text-[10px] font-mono font-extrabold text-blue-500/25 tracking-widest uppercase mb-1">CONNECTING</span>
                        <div className="flex items-center">
                          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20" />
                          <ArrowRight className="w-5 h-5 text-blue-500/50 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* 2. SUB-PAGE DETAIL VIEW: Opens as a beautiful, spacious, full screen page */
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
            const starters = GENERATION_STARTERS[gen.id] || [];
            const legendaries = GENERATION_LEGENDARIES[gen.id] || [];
            const dist = TYPE_DISTRIBUTION[gen.id];
            const colors = getGenColors(gen.id);

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
                    <span>Back to Generation Map</span>
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

                {/* Main Hero Generation Title Section (Massive typography) */}
                <div className="mb-10 text-center sm:text-left relative py-4">
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

                  <h1 className={`font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter mt-3.5 leading-none ${
                    isLightTheme ? "text-slate-900" : "text-white"
                  }`}>
                    {gen.name} Dossier
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2.5 max-w-4xl capitalize">
                    {lore.title}
                  </h2>
                </div>

                {/* Grand Content Grid layout for full screen fitting */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT COLUMN: Lore Backstories (Generous spacing and big, highly comfortable text) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Section 1: Historical Backstory (Large format) */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                    }`}>
                      <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-blue-400 uppercase tracking-wider flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>Historical Regional Backstory</span>
                      </h3>
                      <p className={`text-sm md:text-lg leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                        {lore.backstory}
                      </p>
                    </div>

                    {/* Section 2: Legendary Conflict (Large format) */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                    }`}>
                      <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-rose-400 uppercase tracking-wider flex items-center gap-2">
                        <Shield className="w-5 h-5 text-rose-500 shrink-0" />
                        <span>Primordial Creation Myth & Conflicts</span>
                      </h3>
                      <p className={`text-sm md:text-lg leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                        {lore.legendaryConflict}
                      </p>
                    </div>

                    {/* Section 3: Regional Culture & Society (Large format) */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                    }`}>
                      <h3 className="font-display font-black text-lg md:text-xl mb-3.5 text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span>Societal Traditions & Culture</span>
                      </h3>
                      <p className={`text-sm md:text-lg leading-relaxed ${isLightTheme ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                        {lore.regionalCulture}
                      </p>
                    </div>

                    {/* Section 4: Key Platform Innovations */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                    }`}>
                      <h3 className="font-display font-black text-sm md:text-base mb-4 text-slate-400 uppercase tracking-widest block">
                        [ Core Technological Innovations ]
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
                        {gen.keyFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 animate-ping" />
                            <span className={isLightTheme ? "text-slate-800 font-bold" : "text-slate-300 font-semibold"}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Starters, Legendaries, and Type Segment Charts */}
                  <div className="lg:col-span-5 space-y-6">

                    {/* 1. TYPE SEGMENT DISTRIBUTION RATIO CHART */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5 shadow-2xl"
                    }`}>
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500 block mb-3.5">
                        [ Type Diversity Metric Ratio Chart ]
                      </span>
                      
                      {/* Segment progress bar */}
                      <div className="h-6 w-full rounded-xl overflow-hidden flex shadow-inner">
                        <div style={{ width: `${dist.grass}%` }} className="bg-emerald-500 h-full hover:brightness-110 transition-all cursor-help" title={`Grass: ${dist.grass}%`} />
                        <div style={{ width: `${dist.fire}%` }} className="bg-orange-500 h-full hover:brightness-110 transition-all cursor-help" title={`Fire: ${dist.fire}%`} />
                        <div style={{ width: `${dist.water}%` }} className="bg-blue-500 h-full hover:brightness-110 transition-all cursor-help" title={`Water: ${dist.water}%`} />
                        <div style={{ width: `${dist.normal}%` }} className="bg-stone-400 h-full hover:brightness-110 transition-all cursor-help" title={`Normal: ${dist.normal}%`} />
                        <div style={{ width: `${dist.dragon}%` }} className="bg-indigo-600 h-full hover:brightness-110 transition-all cursor-help" title={`Dragon: ${dist.dragon}%`} />
                        <div style={{ width: `${dist.psychic}%` }} className="bg-pink-500 h-full hover:brightness-110 transition-all cursor-help" title={`Psychic: ${dist.psychic}%`} />
                        <div style={{ width: `${dist.other}%` }} className="bg-slate-600 h-full hover:brightness-110 transition-all cursor-help" title={`Other: ${dist.other}%`} />
                      </div>

                      {/* Labels Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 font-mono text-[10px] font-extrabold text-slate-400">
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-emerald-500" /><span>GRASS {dist.grass}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-orange-500" /><span>FIRE {dist.fire}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-blue-500" /><span>WATER {dist.water}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-stone-400" /><span>NORMAL {dist.normal}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-indigo-600" /><span>DRAGON {dist.dragon}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-pink-500" /><span>PSYCHIC {dist.psychic}%</span></div>
                        <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-slate-600" /><span>OTHER {dist.other}%</span></div>
                      </div>
                    </div>

                    {/* 2. THREE STARTER PARTNER SECTIONS */}
                    <div className={`p-6 md:p-8 rounded-[32px] border ${
                      isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                    }`}>
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
                        [ Generational Starter Partners ]
                      </span>
                      
                      <div className="flex flex-col gap-4">
                        {starters.map((starter) => (
                          <div
                            key={starter.id}
                            className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${getStarterStyle(starter.type)}`}
                          >
                            <div className="w-16 h-16 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                              <img
                                src={getOfficialArtwork(starter.id)}
                                alt={starter.name}
                                className="w-14 h-14 object-contain drop-shadow"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="overflow-hidden text-left">
                              <div className="flex items-center gap-2">
                                {getTypeIcon(starter.type)}
                                <span className="font-display font-black text-sm uppercase text-slate-100 truncate">
                                  {starter.name}
                                </span>
                              </div>
                              <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase font-bold">
                                Species ID: #{starter.id} · Ability: {starter.ability}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. MASCOT LEGENDARIES */}
                    {legendaries.length > 0 && (
                      <div className={`p-6 md:p-8 rounded-[32px] border ${
                        isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                      }`}>
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
                          [ Flagship Mascot Legendaries ]
                        </span>

                        <div className="flex flex-col gap-4">
                          {legendaries.map((leg) => (
                            <div
                              key={leg.id}
                              className={`p-4 rounded-2xl border flex items-center justify-between relative overflow-hidden ${
                                isLightTheme
                                  ? "bg-[#FAF7F0] border-slate-200"
                                  : "bg-slate-900/40 border-white/5 bg-[linear-gradient(rgba(245,158,11,0.03),transparent)]"
                              }`}
                            >
                              <div className="space-y-1.5 z-10 text-left">
                                <div className="flex items-center gap-2">
                                  <h5 className={`font-display font-black text-sm uppercase ${
                                    isLightTheme ? "text-slate-900" : "text-white"
                                  }`}>
                                    {leg.name}
                                  </h5>
                                  <span className="text-[10px] font-mono font-black text-amber-500">
                                    #{leg.id}
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-mono font-semibold">
                                  {leg.role}
                                </p>
                                <div className="flex gap-1.5 pt-1">
                                  {leg.types.map((t) => (
                                    <span
                                      key={t}
                                      className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="w-20 h-20 relative flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-ping [animation-duration:4s]" />
                                <img
                                  src={getOfficialArtwork(leg.id)}
                                  alt={leg.name}
                                  className="w-18 h-18 object-contain z-10 drop-shadow-[0_4px_8px_rgba(245,158,11,0.35)]"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Section 5: Trivia and Cultural Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-slate-500/10 pt-8">
                  <div className={`p-6 md:p-8 rounded-[32px] border ${
                    isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                  }`}>
                    <h4 className="font-display font-black text-sm mb-2.5 text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Did You Know? (Trivia)</span>
                    </h4>
                    <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                      {lore.trivia}
                    </p>
                  </div>

                  <div className={`p-6 md:p-8 rounded-[32px] border ${
                    isLightTheme ? "bg-white border-slate-200/80 shadow-md" : "bg-[#0c0d12]/80 border-white/5"
                  }`}>
                    <h4 className="font-display font-black text-sm mb-2.5 text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>Socio-cultural Legacy</span>
                    </h4>
                    <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                      {lore.culturalInfluence}
                    </p>
                  </div>
                </div>

                {/* Back button at the bottom of dossier too */}
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
