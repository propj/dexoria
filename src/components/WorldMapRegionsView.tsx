import React, { useState } from "react";
import { 
  MapPin, Compass, Sparkles, ArrowRight, Shield, Award, Globe, 
  Layers, Navigation, Eye, Zap, Flame, Droplets, Leaf, Search
} from "lucide-react";
import { Region } from "../types";
import { REGIONS_DATA } from "../data/regions";
import { motion, AnimatePresence } from "motion/react";

interface WorldMapRegionsViewProps {
  isLightTheme: boolean;
  onSelectRegion: (region: Region) => void;
}

interface WorldRegionPin {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string;
  glowColor: string;
  category: "eastern" | "western" | "northern" | "archipelago";
  starterIds: number[];
  legendaryId: number;
  slogan: string;
  landmark: string;
}

const WORLD_REGION_PINS: Record<string, WorldRegionPin> = {
  kanto: {
    id: "kanto",
    x: 58,
    y: 52,
    color: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.6)",
    category: "eastern",
    starterIds: [1, 4, 7, 25],
    legendaryId: 150, // Mewtwo
    slogan: "Where the iconic Pokémon journey began.",
    landmark: "Indigo Plateau & Cinnabar Lab",
  },
  johto: {
    id: "johto",
    x: 48,
    y: 54,
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.6)",
    category: "eastern",
    starterIds: [152, 155, 158],
    legendaryId: 250, // Ho-Oh
    slogan: "Tradition meets ancient myths and sacred towers.",
    landmark: "Brass & Bell Towers of Ecruteak",
  },
  hoenn: {
    id: "hoenn",
    x: 36,
    y: 72,
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.6)",
    category: "archipelago",
    starterIds: [252, 255, 258],
    legendaryId: 384, // Rayquaza
    slogan: "An expansive realm of active volcanoes & deep oceans.",
    landmark: "Mt. Chimney & Sootopolis Crater",
  },
  sinnoh: {
    id: "sinnoh",
    x: 52,
    y: 28,
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.6)",
    category: "northern",
    starterIds: [387, 390, 393],
    legendaryId: 487, // Giratina
    slogan: "A sacred mountain territory steeped in space-time myths.",
    landmark: "Spear Pillar & Mt. Coronet",
  },
  unova: {
    id: "unova",
    x: 18,
    y: 42,
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.6)",
    category: "western",
    starterIds: [495, 498, 501],
    legendaryId: 644, // Zekrom
    slogan: "A highly advanced metropolis of truth and ideals.",
    landmark: "Castelia Skybridge & N's Castle",
  },
  kalos: {
    id: "kalos",
    x: 76,
    y: 40,
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.6)",
    category: "western",
    starterIds: [650, 653, 656],
    legendaryId: 716, // Xerneas
    slogan: "A star-shaped realm celebrating fashion, beauty, and art.",
    landmark: "Lumiose Prism Tower & Geosenge",
  },
  alola: {
    id: "alola",
    x: 88,
    y: 78,
    color: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.6)",
    category: "archipelago",
    starterIds: [722, 725, 728],
    legendaryId: 791, // Solgaleo
    slogan: "A sunny Pacific archipelago featuring island trials.",
    landmark: "Aether Paradise & Mount Lanakila",
  },
  galar: {
    id: "galar",
    x: 72,
    y: 20,
    color: "#0ea5e9",
    glowColor: "rgba(14, 165, 233, 0.6)",
    category: "northern",
    starterIds: [810, 813, 816],
    legendaryId: 888, // Zacian
    slogan: "A stadium-packed empire of steam power & sportsmanship.",
    landmark: "Wyndon Stadium & Wild Area",
  },
  hisui: {
    id: "hisui",
    x: 42,
    y: 22,
    color: "#a8a29e",
    glowColor: "rgba(168, 162, 158, 0.6)",
    category: "northern",
    starterIds: [722, 155, 501],
    legendaryId: 493, // Arceus
    slogan: "An ancient, wild frontier of historical Sinnoh.",
    landmark: "Jubilife Village & Temple of Sinnoh",
  },
  paldea: {
    id: "paldea",
    x: 84,
    y: 52,
    color: "#d946ef",
    glowColor: "rgba(217, 70, 239, 0.6)",
    category: "western",
    starterIds: [906, 909, 912],
    legendaryId: 1008, // Miraidon
    slogan: "A vast open peninsula centered around the Great Crater.",
    landmark: "Area Zero & Mesagoza Academy",
  },
};

// Travel routes connecting adjacent regions on the map
const REGION_ROUTES = [
  { from: "kanto", to: "johto", label: "Tohjo Falls Bridge" },
  { from: "sinnoh", to: "hisui", label: "Time-Rift Conduit" },
  { from: "kanto", to: "sinnoh", label: "Northern Sea Route" },
  { from: "johto", to: "hoenn", label: "Southern Sea Highway" },
  { from: "kalos", to: "paldea", label: "Pyrenean Border" },
  { from: "kalos", to: "galar", label: "Channel Tunnel Link" },
  { from: "unova", to: "kalos", label: "Transatlantic Flight Path" },
  { from: "hoenn", to: "alola", label: "Pacific Currents" },
];

export default function WorldMapRegionsView({
  isLightTheme,
  onSelectRegion,
}: WorldMapRegionsViewProps) {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getOfficialArtwork = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const filteredRegions = REGIONS_DATA.filter((r) => {
    const pin = WORLD_REGION_PINS[r.id];
    const matchCat = categoryFilter === "all" || (pin && pin.category === categoryFilter);
    const matchQuery =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.nativeName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="w-full max-w-[1400px] mx-auto mb-16">
      {/* Outer Styled World Map Frame */}
      <div
        className={`relative rounded-[2.5rem] border overflow-hidden shadow-2xl transition-all select-none ${
          isLightTheme
            ? "bg-[#F7F4EB] border-[#E0D8C8] text-slate-900 shadow-slate-900/10"
            : "bg-[#080A10] border-white/10 text-white shadow-black/90"
        }`}
      >
        {/* Top Control Bar */}
        <div
          className={`px-6 py-4 border-b flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 relative z-20 ${
            isLightTheme ? "bg-[#EDE7DA] border-[#E0D8C8]" : "bg-[#0F121C] border-white/10"
          }`}
        >
          {/* Header & Compass Title */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm shrink-0">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black tracking-[0.2em] text-emerald-500 uppercase">
                  CARTOGRAPHIC SURVEY MAP
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h2 className="font-display font-black text-xl md:text-2xl tracking-tight uppercase leading-none">
                Pokémon Global Atlas & Trade Routes
              </h2>
            </div>
          </div>

          {/* Interactive Filters & Search */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Search */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs ${
              isLightTheme ? "bg-white border-slate-300 text-slate-800" : "bg-white/5 border-white/10 text-slate-200"
            }`}>
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Find region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-24 sm:w-32 bg-transparent focus:outline-none font-mono text-xs placeholder-slate-400"
              />
            </div>

            {/* Category Chips */}
            <div className={`p-1 rounded-xl border flex items-center gap-1 ${
              isLightTheme ? "bg-slate-200/70 border-slate-300" : "bg-black/30 border-white/10"
            }`}>
              {[
                { id: "all", label: "All Regions" },
                { id: "eastern", label: "Eastern Mainland" },
                { id: "western", label: "Western Continent" },
                { id: "northern", label: "Northern Realm" },
                { id: "archipelago", label: "Islands" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    categoryFilter === cat.id
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                      : isLightTheme
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Canvas Frame */}
        <div className="relative w-full h-[580px] md:h-[680px] overflow-hidden bg-gradient-to-b from-blue-950/30 via-slate-950 to-indigo-950/40">
          {/* Cartographic Gridlines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <pattern id="world-grid-patterns" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#world-grid-patterns)" />

            {/* Equator & Meridian Lines */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.4" />

            {/* Latitudinal Lines */}
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" opacity="0.25" />
          </svg>

          {/* Trade / Route Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {REGION_ROUTES.map((route, i) => {
              const pFrom = WORLD_REGION_PINS[route.from];
              const pTo = WORLD_REGION_PINS[route.to];
              if (!pFrom || !pTo) return null;

              const isConnectedToHovered =
                hoveredRegion && (hoveredRegion.id === route.from || hoveredRegion.id === route.to);

              return (
                <g key={i}>
                  <line
                    x1={`${pFrom.x}%`}
                    y1={`${pFrom.y}%`}
                    x2={`${pTo.x}%`}
                    y2={`${pTo.y}%`}
                    stroke={isConnectedToHovered ? "#10b981" : "rgba(255, 255, 255, 0.15)"}
                    strokeWidth={isConnectedToHovered ? "2.5" : "1.5"}
                    strokeDasharray={isConnectedToHovered ? "none" : "6,6"}
                    className="transition-all duration-300"
                  />
                  {/* Glowing energy dot on routes */}
                  {isConnectedToHovered && (
                    <circle
                      cx={`${(pFrom.x + pTo.x) / 2}%`}
                      cy={`${(pFrom.y + pTo.y) / 2}%`}
                      r="4"
                      fill="#10b981"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Stylized Geographical Landmass Polygons */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
            {/* Kanto / Johto Eastern Continent */}
            <path
              d="M 400 240 Q 490 220 590 250 T 650 330 T 530 390 T 410 340 Z"
              fill="rgba(239, 68, 68, 0.15)"
              stroke="#ef4444"
              strokeWidth="2"
            />
            {/* Sinnoh / Hisui Northern Mountain Ridge */}
            <path
              d="M 370 90 Q 480 80 570 110 T 550 190 T 390 180 Z"
              fill="rgba(59, 130, 246, 0.15)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {/* Hoenn Island Network */}
            <path
              d="M 270 340 Q 360 330 410 390 T 320 450 T 250 400 Z"
              fill="rgba(16, 185, 129, 0.15)"
              stroke="#10b981"
              strokeWidth="2"
            />
            {/* Unova Western Bay Peninsula */}
            <path
              d="M 110 180 Q 200 170 240 220 T 180 300 T 90 250 Z"
              fill="rgba(139, 92, 246, 0.15)"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
            {/* Kalos Star Continent */}
            <path
              d="M 680 170 Q 770 160 830 210 T 780 290 T 660 230 Z"
              fill="rgba(236, 72, 153, 0.15)"
              stroke="#ec4899"
              strokeWidth="2"
            />
            {/* Galar Island Kingdom */}
            <path
              d="M 650 80 Q 730 70 770 120 T 700 170 T 620 110 Z"
              fill="rgba(14, 165, 233, 0.15)"
              stroke="#0ea5e9"
              strokeWidth="2"
            />
            {/* Paldea Peninsula */}
            <path
              d="M 760 230 Q 860 220 900 290 T 810 350 T 740 290 Z"
              fill="rgba(217, 70, 239, 0.15)"
              stroke="#d946ef"
              strokeWidth="2"
            />
            {/* Alola Tropical Atolls */}
            <ellipse cx="88%" cy="78%" rx="70" ry="40" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="2" />
          </svg>

          {/* Radar Sweep Animation Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500/10 pointer-events-none flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border border-blue-500/10" />
            <div className="w-[200px] h-[200px] rounded-full border border-emerald-500/10" />
          </div>

          {/* Decorative Radar Compass Ornament */}
          <div className="absolute top-6 left-6 pointer-events-none opacity-40 flex flex-col items-center z-10">
            <div className="w-16 h-16 rounded-full border-2 border-emerald-400/40 flex items-center justify-center relative bg-black/20 backdrop-blur-sm">
              <span className="font-mono font-bold text-[9px] text-emerald-400 absolute -top-3">N</span>
              <span className="font-mono font-bold text-[9px] text-emerald-400 absolute -bottom-3">S</span>
              <span className="font-mono font-bold text-[9px] text-emerald-400 absolute -left-3">W</span>
              <span className="font-mono font-bold text-[9px] text-emerald-400 absolute -right-3">E</span>
              <div className="w-8 h-8 rounded-full border border-dashed border-emerald-300/40 animate-spin-slow" />
            </div>
            <span className="text-[8px] font-mono tracking-widest text-emerald-400 mt-2 font-bold uppercase">
              SECTOR GRID ALPHA
            </span>
          </div>

          {/* Render 10 Interactive Region Pins */}
          {filteredRegions.map((region) => {
            const pinConfig = WORLD_REGION_PINS[region.id] || WORLD_REGION_PINS.kanto;
            const isHovered = hoveredRegion?.id === region.id;

            return (
              <div
                key={region.id}
                style={{
                  left: `${pinConfig.x}%`,
                  top: `${pinConfig.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute z-30"
              >
                {/* Pin Control Button */}
                <button
                  onClick={() => onSelectRegion(region)}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="relative group cursor-pointer p-2 focus:outline-none"
                >
                  {/* Outer Pulsing Radar Rings */}
                  <span
                    className="absolute -inset-2 rounded-full animate-ping pointer-events-none opacity-40"
                    style={{ backgroundColor: pinConfig.color }}
                  />
                  {isHovered && (
                    <span
                      className="absolute -inset-5 rounded-full animate-pulse pointer-events-none opacity-60"
                      style={{ backgroundColor: pinConfig.color }}
                    />
                  )}

                  {/* Main Pin Badge Container */}
                  <div
                    className={`px-3.5 py-2 rounded-2xl border flex items-center gap-2 shadow-2xl transition-all duration-300 ${
                      isHovered
                        ? "scale-125 z-50 text-white font-black shadow-emerald-500/25 ring-4 ring-emerald-400/30"
                        : "scale-100 bg-slate-900/90 hover:scale-110 text-slate-100"
                    }`}
                    style={{
                      borderColor: pinConfig.color,
                      backgroundColor: isHovered ? pinConfig.color : undefined,
                    }}
                  >
                    <MapPin className="w-4 h-4 shrink-0 animate-bounce-slow" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="font-display font-black text-xs uppercase tracking-wider whitespace-nowrap">
                        {region.name}
                      </span>
                      <span className="text-[8px] font-mono font-bold opacity-80 mt-0.5">
                        GEN {region.generationIndex}
                      </span>
                    </div>

                    {/* Starter Icon Preview Pill */}
                    <div className="hidden sm:flex items-center -space-x-1.5 ml-1 border-l pl-2 border-white/20">
                      {(pinConfig.starterIds || [1, 4, 7]).slice(0, 3).map((stId) => (
                        <img
                          key={stId}
                          src={getOfficialArtwork(stId)}
                          alt="starter"
                          className="w-5 h-5 object-contain rounded-full bg-black/30 p-0.5 border border-white/20"
                        />
                      ))}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

          {/* Interactive Hover Card Overlay */}
          <AnimatePresence>
            {hoveredRegion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-6 right-6 z-50 w-80 md:w-[420px] p-6 rounded-3xl border shadow-2xl backdrop-blur-2xl pointer-events-none"
                style={{
                  background: isLightTheme
                    ? "rgba(255, 255, 255, 0.96)"
                    : "rgba(10, 12, 18, 0.96)",
                  borderColor: WORLD_REGION_PINS[hoveredRegion.id]?.color || "#10b981",
                  boxShadow: `0 20px 40px ${WORLD_REGION_PINS[hoveredRegion.id]?.glowColor || "rgba(0,0,0,0.5)"}`,
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-500 block">
                        GEN {hoveredRegion.generationIndex} · {hoveredRegion.nativeName}
                      </span>
                    </div>
                    <h3 className={`font-display font-black text-2xl md:text-3xl uppercase tracking-tight leading-none mt-1 ${
                      isLightTheme ? "text-slate-900" : "text-white"
                    }`}>
                      {hoveredRegion.name} Region
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    {hoveredRegion.pokemonCount || 151} SPECIES
                  </span>
                </div>

                {/* Slogan */}
                <p className="text-xs font-semibold text-slate-400 mb-4 leading-relaxed">
                  "{WORLD_REGION_PINS[hoveredRegion.id]?.slogan || hoveredRegion.description}"
                </p>

                {/* Showcase Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-2xl bg-black/10 border border-white/5">
                  <div>
                    <span className="text-[9px] font-mono font-extrabold uppercase text-amber-400 block mb-1">
                      Mascot Legendary
                    </span>
                    <div className="w-full h-16 rounded-xl bg-white/5 p-1 flex items-center justify-center border border-white/10">
                      <img
                        src={getOfficialArtwork(
                          WORLD_REGION_PINS[hoveredRegion.id]?.legendaryId || 150
                        )}
                        alt="Legendary"
                        className="w-16 h-16 object-contain filter drop-shadow-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono font-extrabold uppercase text-emerald-400 block mb-1">
                      Starter Partners
                    </span>
                    <div className="flex items-center justify-around h-16 rounded-xl bg-white/5 p-1 border border-white/10">
                      {(WORLD_REGION_PINS[hoveredRegion.id]?.starterIds || [1, 4, 7]).slice(0, 3).map((stId) => (
                        <div
                          key={stId}
                          className="w-9 h-9 rounded-full bg-black/20 p-0.5 flex items-center justify-center border border-white/10"
                        >
                          <img src={getOfficialArtwork(stId)} alt="Starter" className="w-8 h-8 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Landmark & Professor */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono border-t pt-3 border-slate-500/20">
                  <div>
                    <span className="text-slate-500 block text-[9px] font-bold uppercase">PRIMARY LANDMARK</span>
                    <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>
                      {WORLD_REGION_PINS[hoveredRegion.id]?.landmark || "Indigo Plateau"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] font-bold uppercase">CHAMPION / LEAGUE</span>
                    <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>
                      {hoveredRegion.champion || "Regional League"}
                    </span>
                  </div>
                </div>

                {/* Call to Action Prompt */}
                <div className="mt-4 pt-3 border-t border-slate-500/20 flex items-center justify-between text-xs font-mono font-bold text-emerald-500">
                  <span>Click node to open region dossier</span>
                  <ArrowRight className="w-4 h-4 animate-bounce-x" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Map Legend Footer */}
        <div className={`px-6 py-3.5 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 ${
          isLightTheme ? "bg-[#EDE7DA] border-[#E0D8C8]" : "bg-[#0F121C] border-white/10"
        }`}>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="font-bold text-slate-300 uppercase">Sector Color Key:</span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Kanto
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Johto
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Hoenn
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Sinnoh/Hisui
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Unova
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500" /> Kalos
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Alola
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500" /> Paldea
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-500">
            <Globe className="w-3.5 h-3.5" />
            <span>10 Canonical Regions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
