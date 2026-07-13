import React, { useState, useEffect } from "react";
import { X, Heart, Shield, Sparkles, Scale, Ruler, Volume2, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { PokemonDetail, PokemonStats } from "../types";
import { TYPES_CHART, getPokemonColor, getDarkTypeColor } from "../data/pokemonGenerations";

const RadarChart = ({ stats, typeColor, isLightTheme }: { stats: PokemonStats; typeColor: string; isLightTheme: boolean }) => {
  const width = 240;
  const height = 240;
  const cx = width / 2;
  const cy = height / 2;
  const R = 82;

  const statConfig: { key: keyof PokemonStats; label: string }[] = [
    { key: "hp", label: "HP" },
    { key: "attack", label: "ATK" },
    { key: "defense", label: "DEF" },
    { key: "speed", label: "SPD" },
    { key: "specialDefense", label: "S.DEF" },
    { key: "specialAttack", label: "S.ATK" },
  ];

  const gridLevels = [0.25, 0.5, 0.75, 1];

  const getCoordinates = (index: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return { x, y };
  };

  const statPoints = statConfig.map((item, index) => {
    const val = stats[item.key];
    const percentage = Math.min(val / 160, 1);
    const radius = Math.max(percentage * R, 15);
    const { x, y } = getCoordinates(index, radius);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="mx-auto max-w-[210px] select-none">
      {gridLevels.map((level, lvlIndex) => {
        const radius = level * R;
        const points = Array.from({ length: 6 }).map((_, i) => {
          const { x, y } = getCoordinates(i, radius);
          return `${x},${y}`;
        }).join(" ");

        return (
          <polygon
            key={lvlIndex}
            points={points}
            fill="none"
            stroke={isLightTheme ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"}
            strokeWidth="1"
          />
        );
      })}

      {statConfig.map((item, index) => {
        const outerPoint = getCoordinates(index, R);
        const labelDistance = R + 16;
        const labelPoint = getCoordinates(index, labelDistance);

        return (
          <g key={item.key}>
            <line
              x1={cx}
              y1={cy}
              x2={outerPoint.x}
              y2={outerPoint.y}
              stroke={isLightTheme ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}
              strokeWidth="1"
            />
            <text
              x={labelPoint.x}
              y={labelPoint.y + 3}
              textAnchor="middle"
              className={`text-[9px] font-mono font-black ${
                isLightTheme ? "fill-slate-500" : "fill-slate-400"
              }`}
            >
              {item.label}
            </text>
          </g>
        );
      })}

      <polygon
        points={statPoints}
        fill={`${typeColor}25`}
        stroke={typeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
        className="transition-all duration-700 ease-out"
      />

      <circle cx={cx} cy={cy} r="3" fill={isLightTheme ? "#CBD5E1" : "#334155"} />
    </svg>
  );
};

interface PokemonModalProps {
  id: number;
  onClose: () => void;
  isLightTheme: boolean;
  isFav: boolean;
  toggleFavorite: (id: number) => void;
  onSelectPokemonById: (id: number) => void;
}

export default function PokemonModal({
  id,
  onClose,
  isLightTheme,
  isFav,
  toggleFavorite,
  onSelectPokemonById,
}: PokemonModalProps) {
  const [detail, setDetail] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSprite, setActiveSprite] = useState<"front" | "shiny" | "back">("front");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        setActiveSprite("front");
        
        // 1. Fetch main pokemon details
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Pokemon detail fetch failed");
        const data = await res.json();

        // 2. Fetch species details for localized description flavor texts
        let description = "A mysterious Pokémon discovered in the wild. Its secrets are still being researched by Pokémon Professors.";
        let category = "Unknown Pokémon";
        try {
          const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
          if (speciesRes.ok) {
            const speciesData = await speciesRes.json();
            const englishEntry = speciesData.flavor_text_entries.find(
              (entry: any) => entry.language.name === "en"
            );
            if (englishEntry) {
              // Clean up special form feeds or line breaks in PokéAPI descriptions
              description = englishEntry.flavor_text.replace(/[\f\n\r]/g, " ");
            }
            const englishGenus = speciesData.genera.find(
              (g: any) => g.language.name === "en"
            );
            if (englishGenus) {
              category = englishGenus.genus;
            }
          }
        } catch (err) {
          console.warn("Could not fetch species lore description", err);
        }

        // 3. Resolve dual-type multipliers (combined weakness/resistance chart)
        const types = data.types.map((t: any) => t.type.name);
        const strengthsList: string[] = [];
        const weaknessesList: string[] = [];

        types.forEach((typeName: string) => {
          const matchingType = TYPES_CHART.find((t) => t.name === typeName);
          if (matchingType) {
            matchingType.strengths.forEach((s) => {
              if (!strengthsList.includes(s)) strengthsList.push(s);
            });
            matchingType.weaknesses.forEach((w) => {
              if (!weaknessesList.includes(w)) weaknessesList.push(w);
            });
          }
        });

        // Refine lists (items can cancel out if one type is weak and other is resistant)
        // For simplicity and client utility, we will render strengths and weaknesses
        const stats: PokemonStats = {
          hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 50,
          attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 50,
          defense: data.stats.find((s: any) => s.stat.name === "defense")?.base_stat || 50,
          specialAttack: data.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat || 50,
          specialDefense: data.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat || 50,
          speed: data.stats.find((s: any) => s.stat.name === "speed")?.base_stat || 50,
        };

        // No previous/next stage links in the evolution chain anymore, as we have left and right scroll buttons
        const evolutions: { id: number; name: string; sprite: string }[] = [];

        setDetail({
          id,
          name: data.name,
          types,
          sprite: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
          spriteShiny: data.sprites.other["official-artwork"].front_shiny || data.sprites.front_shiny,
          spriteBack: data.sprites.front_back || data.sprites.back_default || data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map((a: any) => ({
            name: a.ability.name,
            is_hidden: a.is_hidden,
          })),
          stats,
          description,
          category,
          evolutionChain: evolutions,
          weaknesses: weaknessesList,
          strengths: strengthsList,
        });
      } catch (err) {
        console.error("Error loading Pokémon details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  // Keyboard navigation for ArrowLeft and ArrowRight keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling the page when using arrow keys inside modal
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
      }
      if (e.key === "ArrowLeft" && id > 1) {
        onSelectPokemonById(id - 1);
      } else if (e.key === "ArrowRight" && id < 1025) {
        onSelectPokemonById(id + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id, onSelectPokemonById, onClose]);

  // Audio Cry utility using PokéAPI media repository
  const playCry = () => {
    if (!detail) return;
    const audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/${id}.ogg`);
    audio.play().catch(() => {
      // Some old gens don't have recorded ogg cries, try alternative mp3 repository
      const audioFallback = new Audio(`https://pokemoncries.com/cries/${id}.mp3`);
      audioFallback.play().catch(() => {});
    });
  };

  const currentSpriteUrl = () => {
    if (!detail) return "";
    if (activeSprite === "shiny") return detail.spriteShiny || detail.sprite;
    if (activeSprite === "back") return detail.spriteBack || detail.sprite;
    return detail.sprite;
  };

  const statLabels: { key: keyof PokemonStats; label: string; color: string }[] = [
    { key: "hp", label: "HP", color: "bg-red-500" },
    { key: "attack", label: "Attack", color: "bg-orange-500" },
    { key: "defense", label: "Defense", color: "bg-yellow-500" },
    { key: "specialAttack", label: "Sp. Attack", color: "bg-blue-500" },
    { key: "specialDefense", label: "Sp. Defense", color: "bg-green-500" },
    { key: "speed", label: "Speed", color: "bg-pink-500" },
  ];

  const primaryType = detail?.types?.[0] || "normal";
  const typeColor = getPokemonColor(primaryType);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 backdrop-blur-md transition-all duration-300 ${
      isLightTheme ? "bg-slate-900/40" : "bg-slate-950/85"
    }`}>
      {/* Left Navigation Button */}
      <button
        disabled={id <= 1}
        onClick={() => onSelectPokemonById(id - 1)}
        className={`fixed left-2 md:left-6 lg:left-10 z-50 p-2.5 md:p-4 rounded-full border transition-all duration-300 shadow-xl cursor-pointer ${
          id <= 1
            ? "opacity-10 cursor-not-allowed"
            : isLightTheme
            ? "bg-white/95 hover:bg-white border-slate-200 text-slate-800 hover:-translate-x-1 hover:scale-105 active:scale-95 shadow-slate-200/50"
            : "bg-slate-900/90 hover:bg-slate-900 border-white/10 text-white hover:-translate-x-1 hover:scale-105 active:scale-95"
        }`}
        title="Previous Pokémon"
      >
        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      {/* Right Navigation Button */}
      <button
        disabled={id >= 1025}
        onClick={() => onSelectPokemonById(id + 1)}
        className={`fixed right-2 md:right-6 lg:right-10 z-50 p-2.5 md:p-4 rounded-full border transition-all duration-300 shadow-xl cursor-pointer ${
          id >= 1025
            ? "opacity-10 cursor-not-allowed"
            : isLightTheme
            ? "bg-white/95 hover:bg-white border-slate-200 text-slate-800 hover:translate-x-1 hover:scale-105 active:scale-95 shadow-slate-200/50"
            : "bg-slate-900/90 hover:bg-slate-900 border-white/10 text-white hover:translate-x-1 hover:scale-105 active:scale-95"
        }`}
        title="Next Pokémon"
      >
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
      </button>

      <div
        style={
          isLightTheme
            ? {
                background: `radial-gradient(circle at 10% 10%, ${typeColor}0d 0%, #ffffff 70%)`,
                borderColor: `${typeColor}35`,
                color: "#0f172a",
                boxShadow: "0 25px 50px -12px rgba(51, 65, 85, 0.12)",
              }
            : {
                background: `radial-gradient(circle at 30% 30%, ${typeColor}24 0%, #0C0D12 60%)`,
                borderColor: `${typeColor}15`,
                color: "#F8FAFC",
              }
        }
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] border shadow-2xl p-6 md:p-10 transition-all duration-500 select-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl cursor-pointer transition-all border z-30 ${
            isLightTheme
              ? "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 shadow-sm"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-xs font-semibold text-slate-400">Retrieving PokéAPI dossier...</p>
          </div>
        ) : !detail ? (
          <div className="text-center py-10">
            <p className="text-red-500 font-semibold">Error retrieving Pokémon dossiers.</p>
          </div>
        ) : (
          <div>
            {/* Header: Back arrow & ID (Matches video top left) */}
            <div className="flex items-center gap-3.5 mb-6">
              <button
                onClick={onClose}
                className={`p-1.5 rounded-xl cursor-pointer transition-all ${
                  isLightTheme ? "hover:bg-slate-100 text-slate-600" : "hover:bg-white/5 text-slate-300"
                }`}
                title="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <span className={`font-mono font-black text-xl md:text-2xl select-none ${
                isLightTheme ? "text-slate-400/80" : "text-slate-400"
              }`}>
                #{detail.id.toString().padStart(4, "0")}
              </span>
            </div>

            {/* Split Grid Layout (Matches video) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Left Column: Artwork Panel */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-60 h-60 md:w-76 md:h-76 flex items-center justify-center">
                  {/* Elemental glow behind artwork */}
                  <div
                    className="absolute inset-8 rounded-full opacity-20 filter blur-3xl animate-pulse"
                    style={{ backgroundColor: getPokemonColor(detail.types[0]) }}
                  />
                  <img
                    src={currentSpriteUrl()}
                    alt={detail.name}
                    className="w-52 h-52 md:w-68 md:h-68 object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Sprites Variant Selector Pill Capsule */}
                <div className={`flex gap-1 p-1 rounded-2xl border ${
                  isLightTheme ? "bg-slate-50 border-slate-200/60" : "bg-white/5 border-white/10"
                } mt-5`}>
                  <button
                    onClick={() => setActiveSprite("front")}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeSprite === "front"
                        ? "bg-blue-600 text-white shadow-md"
                        : isLightTheme
                        ? "text-slate-600 hover:bg-slate-100"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    Default
                  </button>
                  <button
                    onClick={() => setActiveSprite("shiny")}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 ${
                      activeSprite === "shiny"
                        ? "bg-amber-500 text-slate-950 font-black shadow-md"
                        : isLightTheme
                        ? "text-slate-600 hover:bg-slate-100"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Shiny</span>
                  </button>
                  {detail.spriteBack && (
                    <button
                      onClick={() => setActiveSprite("back")}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        activeSprite === "back"
                          ? "bg-purple-600 text-white shadow-md"
                          : isLightTheme
                          ? "text-slate-600 hover:bg-slate-100"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      Back
                    </button>
                  )}
                </div>

                {/* Audio Cry Button */}
                <button
                  onClick={playCry}
                  className={`mt-4 px-4 py-2 rounded-xl border cursor-pointer text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all ${
                    isLightTheme
                      ? "bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-800"
                      : "bg-slate-900 border-white/10 text-slate-100 hover:bg-white/5"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-500 animate-bounce" />
                  <span>Play Pokemon Cry</span>
                </button>
              </div>

              {/* Right Column: Name, Description, stats (Matches video layout) */}
              <div className="md:col-span-7 flex flex-col justify-start text-left">
                {/* Title and Favoriting */}
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className={`font-display font-black text-4xl md:text-5xl capitalize tracking-tight leading-tight ${
                    isLightTheme ? "text-slate-900" : "text-white"
                  }`}>
                    {detail.name.replace("-", " ")}
                  </h2>
                  <button
                    onClick={() => toggleFavorite(detail.id)}
                    className={`p-2 rounded-2xl cursor-pointer transition-all border ${
                      isFav
                        ? "text-red-500 bg-red-500/10 border-red-500/20"
                        : isLightTheme
                        ? "text-slate-400 hover:text-red-500 border-slate-200 hover:bg-red-500/5"
                        : "text-slate-400 hover:text-red-500 border-white/5 hover:bg-red-500/10"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFav ? "fill-red-500" : ""}`} />
                  </button>
                </div>

                {/* Category/Species Name */}
                {detail.category && (
                  <span className={`text-xs font-black uppercase tracking-widest mt-1.5 block ${
                    isLightTheme ? "text-slate-400 font-bold" : "text-slate-400"
                  }`}>
                    {detail.category}
                  </span>
                )}

                {/* Elemental Type Badges */}
                <div className="flex gap-2 mt-4">
                  {detail.types.map((type) => (
                    <span
                      key={type}
                      className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full text-white shadow-md font-sans"
                      style={{ backgroundColor: getPokemonColor(type) }}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* Lore description text block */}
                <p className={`text-sm md:text-base leading-relaxed mt-5 ${
                  isLightTheme ? "text-slate-600 font-medium" : "text-slate-300"
                }`}>
                  {detail.description}
                </p>

                {/* Dimensions (Height, Weight) */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div
                    className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                      isLightTheme ? "bg-slate-50/50 border-slate-100 shadow-sm" : "bg-white/3 border-white/5"
                    }`}
                  >
                    <Ruler className="w-5 h-5 text-blue-500 shrink-0" />
                    <div>
                      <span className={`text-[10px] uppercase font-black tracking-wider block ${
                        isLightTheme ? "text-slate-400" : "text-slate-400"
                      }`}>
                        Height
                      </span>
                      <p className={`font-black text-sm md:text-base mt-0.5 ${
                        isLightTheme ? "text-slate-800" : "text-white"
                      }`}>{detail.height / 10} m</p>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
                      isLightTheme ? "bg-slate-50/50 border-slate-100 shadow-sm" : "bg-white/3 border-white/5"
                    }`}
                  >
                    <Scale className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <span className={`text-[10px] uppercase font-black tracking-wider block ${
                        isLightTheme ? "text-slate-400" : "text-slate-400"
                      }`}>
                        Weight
                      </span>
                      <p className={`font-black text-sm md:text-base mt-0.5 ${
                        isLightTheme ? "text-slate-800" : "text-white"
                      }`}>{detail.weight / 10} kg</p>
                    </div>
                  </div>
                </div>

                {/* Abilities */}
                <div className="mt-6">
                  <span className={`text-[10px] uppercase font-black tracking-widest block mb-2.5 ${
                    isLightTheme ? "text-slate-400" : "text-slate-400"
                  }`}>
                    Abilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {detail.abilities.map((ability) => (
                      <span
                        key={ability.name}
                        className={`text-xs font-extrabold px-3.5 py-1.5 rounded-xl border tracking-wide shadow-sm capitalize flex items-center ${
                          ability.is_hidden
                            ? "border-dashed border-amber-500/50 text-amber-500 bg-amber-500/5"
                            : isLightTheme
                            ? "bg-slate-50/50 border-slate-100 text-slate-700"
                            : "bg-white/5 border-white/10 text-slate-200"
                        }`}
                      >
                        <span>{ability.name.replace("-", " ")}</span>
                        {ability.is_hidden && (
                          <span className="text-[8px] font-black uppercase bg-amber-500/15 text-amber-500 px-1.5 py-0.5 rounded ml-1.5">
                            Hidden
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Layout sections (Radar charts & colored stats bars) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 border-t border-slate-500/10 pt-8">
              {/* Base Statistics (Matches video) */}
              <div>
                <h3 className={`font-display font-black text-lg mb-5 flex items-center gap-2 ${
                  isLightTheme ? "text-slate-800" : "text-white"
                }`}>
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span>Base Statistics</span>
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  {/* Graphical Radar Chart */}
                  <div className={`w-full sm:w-1/2 flex items-center justify-center p-3 rounded-2xl border ${
                    isLightTheme 
                      ? "bg-slate-50/50 border-slate-100 shadow-sm" 
                      : "bg-white/2 border-white/5 shadow-inner"
                  }`}>
                    <RadarChart stats={detail.stats} typeColor={getPokemonColor(detail.types[0])} isLightTheme={isLightTheme} />
                  </div>

                  {/* Standard Detailed Progress Bars */}
                  <div className="w-full sm:w-1/2 flex flex-col gap-3.5">
                    {statLabels.map((stat) => {
                      const value = detail.stats[stat.key];
                      // standard stat ranges capped at 180 for proportional bar graphing
                      const percentage = Math.min((value / 180) * 100, 100);

                      return (
                        <div key={stat.key} className="grid grid-cols-12 items-center gap-2.5 text-xs">
                          <span className={`col-span-4 font-black text-[10px] uppercase tracking-wider truncate ${
                            isLightTheme ? "text-slate-500" : "text-slate-400"
                          }`}>{stat.label}</span>
                          <div className={`col-span-6 h-2 rounded-full overflow-hidden relative ${
                            isLightTheme ? "bg-slate-100" : "bg-slate-500/10"
                          }`}>
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${percentage}%`,
                                backgroundColor: getPokemonColor(detail.types[0]) // Adjusts beautifully to its color!
                              }}
                            />
                          </div>
                          <span className={`col-span-2 font-mono font-black text-right text-[11px] ${
                            isLightTheme ? "text-slate-700" : "text-slate-300"
                          }`}>{value}</span>
                        </div>
                      );
                    })}

                    {/* Total stats sum */}
                    <div className="mt-3 pt-3 border-t border-slate-500/10 flex justify-between items-center text-xs">
                      <span className={`font-black uppercase tracking-widest text-[9px] ${
                        isLightTheme ? "text-slate-400" : "text-slate-400"
                      }`}>Total Stats</span>
                      <span className="font-mono font-black text-xs text-blue-500">
                        {detail.stats.hp + detail.stats.attack + detail.stats.defense + detail.stats.specialAttack + detail.stats.specialDefense + detail.stats.speed}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemental Matchups */}
              <div>
                <h3 className={`font-display font-black text-lg mb-5 ${
                  isLightTheme ? "text-slate-800" : "text-white"
                }`}>Tactical Matchups</h3>
                <div className="flex flex-col gap-4">
                  <div className={`p-4 rounded-2xl border ${
                    isLightTheme ? "bg-slate-50/50 border-slate-100 shadow-sm" : "bg-white/3 border-white/5"
                  }`}>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">
                      Effective vs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.strengths.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-black uppercase px-2.5 py-1 rounded text-white shadow-sm"
                          style={{ backgroundColor: getPokemonColor(t) }}
                        >
                          {t}
                        </span>
                      ))}
                      {detail.strengths.length === 0 && (
                        <span className="text-slate-400 text-xs italic">None</span>
                      )}
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border ${
                    isLightTheme ? "bg-slate-50/50 border-slate-100 shadow-sm" : "bg-white/3 border-white/5"
                  }`}>
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-2">
                      Weak against:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.weaknesses.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-black uppercase px-2.5 py-1 rounded text-white shadow-sm"
                          style={{ backgroundColor: getPokemonColor(t) }}
                        >
                          {t}
                        </span>
                      ))}
                      {detail.weaknesses.length === 0 && (
                        <span className="text-slate-400 text-xs italic">None</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
