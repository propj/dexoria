import React, { useState, useEffect } from "react";
import { Compass, BookOpen, ShieldAlert, Cpu, Sparkles, Orbit } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onExploreRegions: () => void;
  onExploreNational: () => void;
  isLightTheme: boolean;
}

const LEGENDARY_LIST = [
  { id: 150, name: "Mewtwo", type: "Psychic", bio: "Genetic Combat Engine", stats: "BST: 680" },
  { id: 249, name: "Lugia", type: "Psychic/Flying", bio: "Guardian of the Seas", stats: "BST: 680" },
  { id: 384, name: "Rayquaza", type: "Dragon/Flying", bio: "Ozone Layer Apex", stats: "BST: 680" },
  { id: 483, name: "Dialga", type: "Steel/Dragon", bio: "Temporal Controller", stats: "BST: 680" },
  { id: 484, name: "Palkia", type: "Water/Dragon", bio: "Spatial Controller", stats: "BST: 680" },
  { id: 487, name: "Giratina", type: "Ghost/Dragon", bio: "Distortion Ruler", stats: "BST: 680" },
];

const MYTHICAL_LIST = [
  { id: 151, name: "Mew", type: "Psychic", bio: "Ancestor DNA Vessel", stats: "BST: 600" },
  { id: 251, name: "Celebi", type: "Psychic/Grass", bio: "Time Travel Forest Spirit", stats: "BST: 600" },
  { id: 385, name: "Jirachi", type: "Steel/Psychic", bio: "The Thousand-Year Star", stats: "BST: 600" },
  { id: 386, name: "Deoxys", type: "Psychic", bio: "Space Alien Virus Mutagen", stats: "BST: 600" },
  { id: 493, name: "Arceus", type: "Normal / Multitype", bio: "Universal Creator Alpha", stats: "BST: 720" },
  { id: 494, name: "Victini", type: "Fire/Psychic", bio: "Victory Infinite Catalyst", stats: "BST: 600" },
];

export default function Hero({
  onExploreRegions,
  onExploreNational,
  isLightTheme,
}: HeroProps) {
  const [legendaryIdx, setLegendaryIdx] = useState(() => Math.floor(Math.random() * LEGENDARY_LIST.length));
  const [mythicalIdx, setMythicalIdx] = useState(() => Math.floor(Math.random() * MYTHICAL_LIST.length));

  // Auto cycling with random selections
  useEffect(() => {
    const legInterval = setInterval(() => {
      setLegendaryIdx((prev) => {
        let nextIdx = Math.floor(Math.random() * LEGENDARY_LIST.length);
        while (nextIdx === prev && LEGENDARY_LIST.length > 1) {
          nextIdx = Math.floor(Math.random() * LEGENDARY_LIST.length);
        }
        return nextIdx;
      });
    }, 4500);

    const mythInterval = setInterval(() => {
      setMythicalIdx((prev) => {
        let nextIdx = Math.floor(Math.random() * MYTHICAL_LIST.length);
        while (nextIdx === prev && MYTHICAL_LIST.length > 1) {
          nextIdx = Math.floor(Math.random() * MYTHICAL_LIST.length);
        }
        return nextIdx;
      });
    }, 4500);

    return () => {
      clearInterval(legInterval);
      clearInterval(mythInterval);
    };
  }, []);

  const getOfficialArtwork = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const stats = [
    { num: "1,025+", label: "Pokémon" },
    { num: "10", label: "Regions" },
    { num: "9", label: "Generations" },
    { num: "18", label: "Types" },
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-12 py-12 overflow-hidden select-none">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero container grid */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Legendary Hologram Slideshow */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="text-center lg:text-left mb-3 w-full max-w-[260px] pl-2">
            <span className={`text-[10px] font-mono font-extrabold tracking-[0.25em] uppercase ${isLightTheme ? "text-red-600" : "text-amber-500"}`}>
              [ LOG LEVEL: LEGENDARY ]
            </span>
          </div>

          <div className={`relative w-full max-w-[260px] aspect-[4/5] rounded-[2.5rem] border overflow-hidden p-5 flex flex-col justify-between shadow-2xl transition-all hover:scale-103 ${
            isLightTheme
              ? "bg-[#FAF7F0] border-[#E5DDD0] shadow-slate-200"
              : "bg-slate-950/40 border-amber-500/10 shadow-amber-500/5 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.07),transparent_60%)]"
          }`}>
            {/* Scan lines sweep */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-45" />
            <div className="absolute left-0 right-0 h-[1.5px] bg-amber-500/20 top-1/2 -translate-y-1/2 animate-[pulse_2s_infinite] pointer-events-none" />
            
            {/* Top digital readings */}
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-500">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-amber-500 animate-pulse" />
                DEX_LINK_001
              </span>
              <span>GEN 1-9 SYS</span>
            </div>

            {/* Float artwork container */}
            <div className="relative flex-1 flex flex-col items-center justify-center py-4">
              <div className="absolute w-36 h-10 bg-amber-500/5 rounded-full blur-md bottom-2 border border-amber-500/10 transform rotateX-60 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={LEGENDARY_LIST[legendaryIdx].id}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <img
                    src={getOfficialArtwork(LEGENDARY_LIST[legendaryIdx].id)}
                    alt="legendary"
                    className="w-36 h-36 object-contain drop-shadow-[0_12px_24px_rgba(245,158,11,0.25)] animate-float-slow"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom details card */}
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-black/30 border-white/5"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={LEGENDARY_LIST[legendaryIdx].id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-black text-base uppercase text-slate-100 tracking-tight">
                      {LEGENDARY_LIST[legendaryIdx].name}
                    </h4>
                    <span className="text-[10px] font-mono text-amber-500 font-extrabold">
                      #{LEGENDARY_LIST[legendaryIdx].id}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono leading-tight">
                    {LEGENDARY_LIST[legendaryIdx].bio}
                  </p>
                  <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-white/5 text-[9px] font-mono text-slate-500 font-semibold">
                    <span>{LEGENDARY_LIST[legendaryIdx].type}</span>
                    <span>{LEGENDARY_LIST[legendaryIdx].stats}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Central branding, headline, buttons */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center px-4 order-1 lg:order-2">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full text-xs font-bold mb-6 border select-none tracking-wide ${
              isLightTheme
                ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                : "bg-blue-950/40 border-blue-900/50 text-blue-400"
            }`}
          >
            <Orbit className="w-3.5 h-3.5 animate-spin" />
            ✨ Live PokéAPI Integration · 10 Custom Regions · Advanced Compare
          </motion.span>

          {/* Headline updated to: Your Go-To Pokémon Hub */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase max-w-2xl ${
              isLightTheme
                ? "bg-gradient-to-r from-slate-900 via-blue-700 to-amber-700"
                : "bg-gradient-to-r from-white via-blue-400 to-yellow-300"
            } bg-clip-text text-transparent`}
          >
            Your Go-To Pokémon Hub
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`mt-6 text-sm md:text-base max-w-lg leading-relaxed ${
              isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"
            }`}
          >
            Embark on a nostalgic journey spanning Kanto to Paldea. Explore 3D holographic region maps, master matchup charts, build customized battle teams, and test memories in real-time.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8 justify-center"
          >
            <button
              onClick={onExploreRegions}
              className="px-7 py-3.5 rounded-xl cursor-pointer font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-0 transition-all bg-blue-600 hover:bg-blue-500 text-white"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Regions</span>
            </button>
            <button
              onClick={onExploreNational}
              className={`px-7 py-3.5 rounded-xl cursor-pointer font-bold text-xs uppercase tracking-wider flex items-center gap-2 border hover:-translate-y-0.5 active:translate-y-0 transition-all ${
                isLightTheme
                  ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                  : "bg-slate-900/40 border-white/10 text-slate-100 hover:bg-white/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>National Pokédex</span>
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-8 md:gap-14 mt-14 md:mt-18 justify-center"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className={`font-display font-extrabold text-2xl md:text-3xl ${
                    isLightTheme ? "text-blue-600" : "text-yellow-400"
                  }`}
                >
                  {stat.num}
                </div>
                <div className="text-[9px] font-mono font-bold tracking-widest uppercase mt-1 text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Mythical Hologram Slideshow */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center order-3">
          <div className="text-center lg:text-left mb-3 w-full max-w-[260px] pl-2">
            <span className={`text-[10px] font-mono font-extrabold tracking-[0.25em] uppercase ${isLightTheme ? "text-cyan-600" : "text-cyan-400"}`}>
              [ LOG LEVEL: MYTHICAL ]
            </span>
          </div>

          <div className={`relative w-full max-w-[260px] aspect-[4/5] rounded-[2.5rem] border overflow-hidden p-5 flex flex-col justify-between shadow-2xl transition-all hover:scale-103 ${
            isLightTheme
              ? "bg-[#FAF7F0] border-[#E5DDD0] shadow-slate-200"
              : "bg-slate-950/40 border-cyan-500/10 shadow-cyan-500/5 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.07),transparent_60%)]"
          }`}>
            {/* Scan lines sweep */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.03),rgba(0,255,0,0.01),rgba(255,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-45" />
            <div className="absolute left-0 right-0 h-[1.5px] bg-cyan-500/20 top-1/2 -translate-y-1/2 animate-[pulse_2s_infinite] pointer-events-none" />
            
            {/* Top digital readings */}
            <div className="flex justify-between items-center text-[9px] font-mono font-bold text-slate-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                DEX_LINK_002
              </span>
              <span>GEN 1-9 SYS</span>
            </div>

            {/* Float artwork container */}
            <div className="relative flex-1 flex flex-col items-center justify-center py-4">
              <div className="absolute w-36 h-10 bg-cyan-500/5 rounded-full blur-md bottom-2 border border-cyan-500/10 transform rotateX-60 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={MYTHICAL_LIST[mythicalIdx].id}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <img
                    src={getOfficialArtwork(MYTHICAL_LIST[mythicalIdx].id)}
                    alt="mythical"
                    className="w-34 h-34 object-contain drop-shadow-[0_12px_24px_rgba(6,182,212,0.25)] animate-float-slow"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom details card */}
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-black/30 border-white/5"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={MYTHICAL_LIST[mythicalIdx].id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-black text-base uppercase text-slate-100 tracking-tight">
                      {MYTHICAL_LIST[mythicalIdx].name}
                    </h4>
                    <span className="text-[10px] font-mono text-cyan-400 font-extrabold">
                      #{MYTHICAL_LIST[mythicalIdx].id}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono leading-tight">
                    {MYTHICAL_LIST[mythicalIdx].bio}
                  </p>
                  <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-white/5 text-[9px] font-mono text-slate-500 font-semibold">
                    <span>{MYTHICAL_LIST[mythicalIdx].type}</span>
                    <span>{MYTHICAL_LIST[mythicalIdx].stats}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
