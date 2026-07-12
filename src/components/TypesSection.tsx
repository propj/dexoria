import React, { useState, useEffect } from "react";
import { TYPES_CHART, getPokemonColor } from "../data/pokemonGenerations";
import { ChevronRight } from "lucide-react";

interface TypesSectionProps {
  isLightTheme: boolean;
  onSelectPokemonById: (id: number) => void;
}

export default function TypesSection({ isLightTheme, onSelectPokemonById }: TypesSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("fire");
  const [matchingPokemon, setMatchingPokemon] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch some popular Pokemon belonging to the selected type
  useEffect(() => {
    const fetchMatchingPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        if (!res.ok) throw new Error("Failed to fetch types");
        const data = await res.json();
        
        // Take the first 12 pokemon of this type
        const sliced = data.pokemon.slice(0, 12).map((p: any) => {
          const parts = p.pokemon.url.split("/");
          const id = parseInt(parts[parts.length - 2], 10);
          return {
            id,
            name: p.pokemon.name,
          };
        }).filter((p: any) => p.id <= 1025); // cap at 1025
        
        setMatchingPokemon(sliced);
      } catch (err) {
        console.error("Error loading matching type pokemon", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchingPokemon();
  }, [selectedType]);

  const activeTypeInfo = TYPES_CHART.find((t) => t.name === selectedType) || TYPES_CHART[1]; // default Fire

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Type grid selector */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {TYPES_CHART.map((t) => {
          const isSelected = selectedType === t.name;
          return (
            <button
              key={t.name}
              onClick={() => setSelectedType(t.name)}
              className={`px-3 py-3 rounded-xl cursor-pointer font-bold text-xs capitalize text-center text-white border transition-all hover:-translate-y-1 ${
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
        className={`glass p-6 md:p-8 rounded-3xl border mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/40 text-slate-900 shadow-sm"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        {/* Left Column: Matchup Rules */}
        <div>
          <div className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: activeTypeInfo.color }}
            />
            <h2 className="font-display font-extrabold text-2xl md:text-3xl capitalize">
              {activeTypeInfo.name} Matchups
            </h2>
          </div>

          <p className="text-xs md:text-sm text-slate-500 mt-2">
            Each type has unique tactical advantages and counters. Planning element matchups is key to winning tournament battles.
          </p>

          <div className="flex flex-col gap-5 mt-6">
            {/* Strengths */}
            <div>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-2">
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
            <div>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">
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
            {activeTypeInfo.immune.length > 0 && (
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">
                  Immune to (0x damage)
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeTypeInfo.immune.map((imm) => (
                    <span
                      key={imm}
                      className="text-xs font-bold capitalize px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: getPokemonColor(imm) }}
                    >
                      {imm}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Pokemon of this type list */}
        <div className="border-t md:border-t-0 md:border-l border-slate-500/10 pt-6 md:pt-0 md:pl-8">
          <h3 className="font-display font-bold text-lg mb-4 capitalize">
            Popular {activeTypeInfo.name}-Type Pokémon
          </h3>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs text-slate-500 font-semibold mt-3">Sorting database...</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {matchingPokemon.map((poke) => (
                <div
                  key={poke.id}
                  onClick={() => onSelectPokemonById(poke.id)}
                  className={`group p-3 rounded-2xl cursor-pointer border flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-md ${
                    isLightTheme
                      ? "bg-slate-50 hover:bg-slate-100 border-slate-200"
                      : "bg-white/3 hover:bg-white/8 border-white/5"
                  }`}
                >
                  <img
                    src={getArtworkUrl(poke.id)}
                    alt={poke.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <h5 className="font-semibold text-xs mt-2 capitalize truncate w-full">
                    {poke.name.replace("-", " ")}
                  </h5>
                  <span className="text-[9px] font-mono font-semibold text-slate-500">
                    #{poke.id.toString().padStart(4, "0")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
