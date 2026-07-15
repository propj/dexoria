import React, { useState, useEffect, useRef } from "react";
import { TYPES_CHART, getPokemonColor, getDarkTypeColor } from "../data/pokemonGenerations";
import { Heart } from "lucide-react";

interface TypesSectionProps {
  isLightTheme: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onSelectPokemonById: (id: number) => void;
}

export default function TypesSection({
  isLightTheme,
  favorites,
  toggleFavorite,
  onSelectPokemonById,
}: TypesSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("fire");
  const [matchingPokemon, setMatchingPokemon] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);
  const [typesCache, setTypesCache] = useState<Record<number, string[]>>({});

  const detailsRef = useRef<HTMLDivElement | null>(null);
  const typeContainerRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for infinite auto-loading scroll
  useEffect(() => {
    if (matchingPokemon.length <= visibleCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 24, matchingPokemon.length));
        }
      },
      { rootMargin: "150px" } // trigger loading before reaching the absolute end
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [matchingPokemon.length, visibleCount]);

  // Auto-scroll elements into view on selected type change
  useEffect(() => {
    // Scroll the corresponding type button into view in the horizontal scrolling menu (for mobile)
    const activeBtn = typeContainerRef.current?.querySelector(`[data-type="${selectedType}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }

    // Scroll the page smoothly down to the matchup showcase results
    const isInitial = selectedType === "fire" && matchingPokemon.length === 0;
    if (!isInitial) {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedType]);

  // Fetch all Pokemon belonging to the selected type
  useEffect(() => {
    const fetchMatchingPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        if (!res.ok) throw new Error("Failed to fetch types");
        const data = await res.json();
        
        // Take all pokemon of this type up to ID 1025
        const processed = data.pokemon.map((p: any) => {
          const parts = p.pokemon.url.split("/");
          const id = parseInt(parts[parts.length - 2], 10);
          return {
            id,
            name: p.pokemon.name,
          };
        }).filter((p: any) => p.id > 0 && p.id <= 1025); // cap at 1025 and filter invalid IDs
        
        setMatchingPokemon(processed);
      } catch (err) {
        console.error("Error loading matching type pokemon", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchingPokemon();
  }, [selectedType]);

  // When selectedType changes, reset visible count and pre-populate typesCache with the current selected type
  useEffect(() => {
    setVisibleCount(24);
  }, [selectedType]);

  // Function to lazy-load the types of a specific Pokémon
  const fetchTypesForId = async (id: number) => {
    if (typesCache[id]) return; // Already cached
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!res.ok) return;
      const data = await res.json();
      const types = data.types.map((t: any) => t.type.name);
      setTypesCache((prev) => ({ ...prev, [id]: types }));
    } catch (err) {
      // Fail silently
    }
  };

  const displayedPokemon = matchingPokemon.slice(0, visibleCount);

  // Trigger loading types of currently displayed Pokémon
  useEffect(() => {
    displayedPokemon.forEach((p) => {
      if (!typesCache[p.id]) {
        fetchTypesForId(p.id);
      }
    });
  }, [displayedPokemon, typesCache]);

  const activeTypeInfo = TYPES_CHART.find((t) => t.name === selectedType) || TYPES_CHART[1]; // default Fire

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Type grid selector */}
      <div 
        ref={typeContainerRef}
        className="flex md:grid md:grid-cols-6 lg:grid-cols-9 gap-3 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 scrollbar-none snap-x"
      >
        {TYPES_CHART.map((t) => {
          const isSelected = selectedType === t.name;
          return (
            <button
              key={t.name}
              data-type={t.name}
              onClick={() => setSelectedType(t.name)}
              className={`px-4 py-3 rounded-xl cursor-pointer font-bold text-xs capitalize text-center text-white border transition-all hover:-translate-y-1 snap-center shrink-0 min-w-[90px] md:min-w-0 ${
                isSelected
                  ? "ring-4 ring-blue-500/30 scale-105"
                  : "hover:opacity-90"
              }`}
              style={{
                backgroundColor: t.color,
                borderColor: isSelected ? "#3B82F6" : "transparent",
              }}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      {/* Type Details Showcase Card */}
      <div
        ref={detailsRef}
        className={`glass p-6 md:p-8 rounded-3xl border mt-10 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/40 text-slate-900 shadow-sm"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-slate-500/10 pb-4 mb-6">
          <div
            className="w-5 h-5 rounded-full animate-pulse"
            style={{ backgroundColor: activeTypeInfo.color }}
          />
          <h2 className="font-display font-extrabold text-2xl md:text-3xl capitalize">
            {activeTypeInfo.name} Matchups
          </h2>
        </div>

        <p className="text-xs md:text-sm text-slate-500 max-w-2xl">
          Each type has unique tactical advantages and counters. Planning element matchups is key to winning tournament battles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Strengths */}
          <div className={`p-5 rounded-2xl border ${
            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/3 border-white/5"
          }`}>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-3">
              Super Effective Against (2x damage)
            </span>
            <div className="flex flex-wrap gap-2">
              {activeTypeInfo.strengths.map((str) => (
                <span
                  key={str}
                  className="text-xs font-bold capitalize px-3 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: getPokemonColor(str) }}
                >
                  {str}
                </span>
              ))}
              {activeTypeInfo.strengths.length === 0 && (
                <span className="text-xs text-slate-500 italic">No offensive counters</span>
              )}
            </div>
          </div>

          {/* Weaknesses */}
          <div className={`p-5 rounded-2xl border ${
            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/3 border-white/5"
          }`}>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-3">
              Weak Against (takes 2x damage)
            </span>
            <div className="flex flex-wrap gap-2">
              {activeTypeInfo.weaknesses.map((wk) => (
                <span
                  key={wk}
                  className="text-xs font-bold capitalize px-3 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: getPokemonColor(wk) }}
                >
                  {wk}
                </span>
              ))}
              {activeTypeInfo.weaknesses.length === 0 && (
                <span className="text-xs text-slate-500 italic font-sans">No defensive weaknesses</span>
              )}
            </div>
          </div>

          {/* Immunities */}
          <div className={`p-5 rounded-2xl border ${
            isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/3 border-white/5"
          }`}>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-3">
              Immune to (0x damage)
            </span>
            <div className="flex flex-wrap gap-2">
              {activeTypeInfo.immune.length > 0 ? (
                activeTypeInfo.immune.map((imm) => (
                  <span
                    key={imm}
                    className="text-xs font-bold capitalize px-3 py-1 rounded-full text-white shadow-sm"
                    style={{ backgroundColor: getPokemonColor(imm) }}
                  >
                    {imm}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-500 italic">No immunities</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pokémon Grid Header */}
      <div className="mt-14 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-xl md:text-2xl capitalize">
            {activeTypeInfo.name}-Type Pokémon
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Displaying matching species sorted by Pokédex number.
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-500/20 font-mono">
          Total Found: {matchingPokemon.length}
        </span>
      </div>

      {/* Grid Display Area like shown in pokedex */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-2xl h-56 animate-pulse ${
                isLightTheme ? "bg-slate-200" : "bg-slate-900"
              }`}
            />
          ))}
        </div>
      ) : matchingPokemon.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sm text-slate-500">No Pokémon found belonging to the {activeTypeInfo.name} type.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {displayedPokemon.map((poke) => {
              const types = typesCache[poke.id] || [selectedType];
              const primaryType = types[0] || selectedType;
              const isFav = favorites.includes(poke.id);
              const typeColor = getPokemonColor(primaryType);

              return (
                <div
                  key={poke.id}
                  onClick={() => onSelectPokemonById(poke.id)}
                  style={
                    isLightTheme
                      ? {
                          backgroundColor: `${typeColor}12`,
                          borderColor: `${typeColor}30`,
                        }
                      : {
                          backgroundColor: getDarkTypeColor(primaryType),
                          borderColor: `${typeColor}25`,
                        }
                  }
                  className={`group rounded-3xl p-5 border cursor-pointer relative flex flex-col justify-between h-[270px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${primaryType}/20 overflow-hidden select-none`}
                >
                  {/* Big number size behind / overlaying top-right */}
                  <span 
                    className={`absolute top-2.5 right-4 font-mono font-black text-4xl md:text-5xl tracking-tighter select-none transition-all duration-500 group-hover:scale-105 ${
                      isLightTheme ? "text-slate-900/10" : "text-white/10"
                    }`}
                  >
                    #{poke.id.toString().padStart(4, "0")}
                  </span>

                  {/* Heart/Favorite Toggle inside card */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent modal opening
                      toggleFavorite(poke.id);
                    }}
                    className={`absolute top-4 left-4 p-1.5 rounded-xl cursor-pointer transition-all z-20 ${
                      isFav
                        ? "text-red-500 bg-red-500/10"
                        : "text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                    }`}
                    title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`} />
                  </button>

                  {/* Animated larger high-res Pokémon Image */}
                  <div className="flex-1 flex items-center justify-center relative -mt-1.5">
                    {/* Glowing element color highlight background */}
                    <div
                      className="absolute w-32 h-32 rounded-full opacity-20 filter blur-2xl transition-all duration-500 group-hover:scale-135"
                      style={{ backgroundColor: typeColor }}
                    />
                    <img
                      src={getArtworkUrl(poke.id)}
                      alt={poke.name}
                      loading="lazy"
                      className="w-[145px] h-[145px] md:w-[170px] md:h-[170px] object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Title & Type Badges */}
                  <div className="relative z-20 mt-auto pl-1">
                    <h4 className={`font-display font-black text-base md:text-lg capitalize tracking-tight transition-colors leading-tight ${
                      isLightTheme ? "text-slate-900 group-hover:text-amber-800" : "text-white group-hover:text-amber-300"
                    }`}>
                      {poke.name.replace("-", " ")}
                    </h4>

                    {/* Type Badges */}
                    <div className="flex gap-1.5 mt-2 justify-start flex-wrap min-h-[22px]">
                      {types.map((type) => (
                        <span
                          key={type}
                          className="text-[9px] font-mono font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md text-white select-none shadow-sm"
                          style={{ backgroundColor: getPokemonColor(type) }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Infinite Scroll Sentinel Spinner */}
          {matchingPokemon.length > visibleCount && (
            <div ref={loaderRef} className="flex flex-col items-center justify-center mt-12 pb-8 gap-2">
              <div className="w-8 h-8 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
              <span className="text-xs font-mono text-slate-500 animate-pulse">Loading more Pokémon...</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
