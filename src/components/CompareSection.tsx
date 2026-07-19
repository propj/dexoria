import React, { useState, useEffect } from "react";
import { REGIONS_DATA } from "../data/regions";
import { Region, PokemonStats } from "../types";
import { getPokemonColor } from "../data/pokemonGenerations";
import { Shield, Sparkles, Swords, Landmark } from "lucide-react";

interface CompareSectionProps {
  isLightTheme: boolean;
  onSelectPokemonById: (id: number) => void;
}

export default function CompareSection({ isLightTheme, onSelectPokemonById }: CompareSectionProps) {
  const [compareMode, setCompareMode] = useState<"regions" | "pokemon">("regions");

  // Region Compare State
  const [regionAId, setRegionAId] = useState<string>("kanto");
  const [regionBId, setRegionBId] = useState<string>("johto");

  // Pokemon Compare State
  const [pokeAId, setPokeAId] = useState<number>(3);  // Venusaur
  const [pokeBId, setPokeBId] = useState<number>(6);  // Charizard
  const [pokeASearch, setPokeASearch] = useState("");
  const [pokeBSearch, setPokeBSearch] = useState("");
  const [pokeADetails, setPokeADetails] = useState<any>(null);
  const [pokeBDetails, setPokeBDetails] = useState<any>(null);
  const [loadingA, setLoadingA] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Get active regions
  const regionA = REGIONS_DATA.find((r) => r.id === regionAId) || REGIONS_DATA[0];
  const regionB = REGIONS_DATA.find((r) => r.id === regionBId) || REGIONS_DATA[1];

  // Fetch Pokemon A details
  useEffect(() => {
    const fetchPokeA = async () => {
      try {
        setLoadingA(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeAId}`);
        if (res.ok) {
          const data = await res.json();
          setPokeADetails(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingA(false);
      }
    };
    fetchPokeA();
  }, [pokeAId]);

  // Fetch Pokemon B details
  useEffect(() => {
    const fetchPokeB = async () => {
      try {
        setLoadingB(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeBId}`);
        if (res.ok) {
          const data = await res.json();
          setPokeBDetails(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingB(false);
      }
    };
    fetchPokeB();
  }, [pokeBId]);

  const searchPokemon = async (query: string, setTargetId: (id: number) => void) => {
    if (!query.trim()) return;
    setSearchError(null);
    try {
      const formatted = query.toLowerCase().trim().replace(" ", "-");
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatted}`);
      if (res.ok) {
        const data = await res.json();
        setTargetId(data.id);
      } else {
        setSearchError("Pokémon not found! Try a valid name like 'Pikachu' or ID like '25'.");
        setTimeout(() => setSearchError(null), 4000);
      }
    } catch (err) {
      console.error(err);
      setSearchError("Connection issue. Please check your internet connection.");
      setTimeout(() => setSearchError(null), 4000);
    }
  };

  const statKeys: { key: string; label: string }[] = [
    { key: "hp", label: "HP" },
    { key: "attack", label: "Attack" },
    { key: "defense", label: "Defense" },
    { key: "special-attack", label: "Sp. Attack" },
    { key: "special-defense", label: "Sp. Defense" },
    { key: "speed", label: "Speed" },
  ];

  const getStatVal = (poke: any, key: string) => {
    if (!poke) return 0;
    const found = poke.stats.find((s: any) => s.stat.name === key);
    return found ? found.base_stat : 0;
  };

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Mode selectors */}
      <div className="flex justify-center mb-8">
        <div
          className={`p-1.5 rounded-2xl border flex gap-1 ${
            isLightTheme ? "bg-slate-200/60 border-slate-300/40" : "bg-slate-950 border-white/5"
          }`}
        >
          <button
            onClick={() => setCompareMode("regions")}
            className={`px-5 py-2.5 rounded-xl cursor-pointer text-sm font-bold flex items-center gap-2 transition-all ${
              compareMode === "regions"
                ? "bg-blue-600 text-white shadow-md"
                : isLightTheme
                ? "text-slate-600 hover:text-slate-900"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>Region Comparison</span>
          </button>
          <button
            onClick={() => setCompareMode("pokemon")}
            className={`px-5 py-2.5 rounded-xl cursor-pointer text-sm font-bold flex items-center gap-2 transition-all ${
              compareMode === "pokemon"
                ? "bg-blue-600 text-white shadow-md"
                : isLightTheme
                ? "text-slate-600 hover:text-slate-900"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Combat Comparison</span>
          </button>
        </div>
      </div>

      {compareMode === "regions" ? (
        /* REGIONS COMPARE COMPONENT */
        <div className="flex flex-col gap-6">
          {/* selectors */}
          <div className="flex justify-center gap-4 flex-wrap">
            <select
              value={regionAId}
              onChange={(e) => setRegionAId(e.target.value)}
              className={`px-4 py-2.5 rounded-xl border text-sm outline-none font-bold cursor-pointer transition-all ${
                isLightTheme
                  ? "bg-white border-slate-300 text-slate-800"
                  : "bg-slate-900 border-white/5 text-slate-100"
              }`}
            >
              {REGIONS_DATA.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} Region
                </option>
              ))}
            </select>

            <span className="text-slate-500 font-bold flex items-center">VS</span>

            <select
              value={regionBId}
              onChange={(e) => setRegionBId(e.target.value)}
              className={`px-4 py-2.5 rounded-xl border text-sm outline-none font-bold cursor-pointer transition-all ${
                isLightTheme
                  ? "bg-white border-slate-300 text-slate-800"
                  : "bg-slate-900 border-white/5 text-slate-100"
              }`}
            >
              {REGIONS_DATA.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name} Region
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Table display (hidden on mobile) */}
          <div
            className={`hidden sm:block glass p-4 rounded-3xl border overflow-x-auto shadow-xl ${
              isLightTheme
                ? "bg-white/70 border-slate-300/40 text-slate-900 shadow-slate-200"
                : "bg-slate-950/40 border-white/5 text-slate-100"
            }`}
          >
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-500/10">
                  <th className="py-4 px-5 text-left text-xs font-bold text-slate-400 uppercase tracking-widest w-[20%]">
                    Lore Specification
                  </th>
                  <th
                    className="py-4 px-5 text-left font-display font-bold text-xl text-blue-500 w-[40%]"
                    style={{ color: regionA.color }}
                  >
                    {regionA.name}
                  </th>
                  <th
                    className="py-4 px-5 text-left font-display font-bold text-xl text-yellow-500 w-[40%]"
                    style={{ color: regionB.color }}
                  >
                    {regionB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-500/10">
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Generation</td>
                  <td className="py-4 px-5 font-semibold">Generation {regionA.generationIndex}</td>
                  <td className="py-4 px-5 font-semibold">Generation {regionB.generationIndex}</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Native Name</td>
                  <td className="py-4 px-5 font-mono text-xs">{regionA.nativeName}</td>
                  <td className="py-4 px-5 font-mono text-xs">{regionB.nativeName}</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Lore Professor</td>
                  <td className="py-4 px-5 font-semibold">{regionA.professor}</td>
                  <td className="py-4 px-5 font-semibold">{regionB.professor}</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Region Champion</td>
                  <td className="py-4 px-5 font-semibold">{regionA.champion}</td>
                  <td className="py-4 px-5 font-semibold">{regionB.champion}</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Gym Badges</td>
                  <td className="py-4 px-5 font-semibold">
                    {regionA.badgeCount > 0 ? `${regionA.badgeCount} Badges` : "None (Trials)"}
                  </td>
                  <td className="py-4 px-5 font-semibold">
                    {regionB.badgeCount > 0 ? `${regionB.badgeCount} Badges` : "None (Trials)"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Capital City</td>
                  <td className="py-4 px-5 font-semibold">{regionA.mainCity}</td>
                  <td className="py-4 px-5 font-semibold">{regionB.mainCity}</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Core Games</td>
                  <td className="py-4 px-5">
                    <div className="flex flex-wrap gap-1.5">
                      {regionA.games.map((g) => (
                        <span
                          key={g}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-500/10 border border-slate-500/20 text-slate-400 font-semibold"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-wrap gap-1.5">
                      {regionB.games.map((g) => (
                        <span
                          key={g}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-500/10 border border-slate-500/20 text-slate-400 font-semibold"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-slate-400">Starters</td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col gap-2">
                      {regionA.starters.map((starter, i) => (
                        <button
                          key={starter}
                          onClick={() => onSelectPokemonById(regionA.starterIds[i])}
                          className="text-left font-bold text-xs text-blue-500 hover:underline flex items-center gap-2 group cursor-pointer"
                        >
                          <img
                            src={getArtworkUrl(regionA.starterIds[i])}
                            alt={starter}
                            className="w-6 h-6 object-contain group-hover:scale-115 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <span>{starter}</span>
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex flex-col gap-2">
                      {regionB.starters.map((starter, i) => (
                        <button
                          key={starter}
                          onClick={() => onSelectPokemonById(regionB.starterIds[i])}
                          className="text-left font-bold text-xs text-blue-500 hover:underline flex items-center gap-2 group cursor-pointer"
                        >
                          <img
                            src={getArtworkUrl(regionB.starterIds[i])}
                            alt={starter}
                            className="w-6 h-6 object-contain group-hover:scale-115 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <span>{starter}</span>
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison View (Visible only on mobile, stacked layout) */}
          <div className="block sm:hidden space-y-4 px-1">
            {/* Slogan / Name block */}
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-white border-slate-200 shadow-sm text-slate-900" : "bg-slate-950/40 border-white/5 text-slate-100"
            }`}>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">Region A</span>
                  <h3 className="font-display font-extrabold text-lg" style={{ color: regionA.color }}>{regionA.name}</h3>
                </div>
                <div className="border-l border-slate-500/10">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">Region B</span>
                  <h3 className="font-display font-extrabold text-lg" style={{ color: regionB.color }}>{regionB.name}</h3>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            {[
              { label: "Generation", valA: `Gen ${regionA.generationIndex}`, valB: `Gen ${regionB.generationIndex}` },
              { label: "Native Name", valA: regionA.nativeName, valB: regionB.nativeName, mono: true },
              { label: "Professor", valA: regionA.professor, valB: regionB.professor },
              { label: "Champion", valA: regionA.champion, valB: regionB.champion },
              { 
                label: "Gym Badges", 
                valA: regionA.badgeCount > 0 ? `${regionA.badgeCount} Badges` : "None (Trials)", 
                valB: regionB.badgeCount > 0 ? `${regionB.badgeCount} Badges` : "None (Trials)" 
              },
              { label: "Capital City", valA: regionA.mainCity, valB: regionB.mainCity },
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border ${
                isLightTheme ? "bg-white border-slate-200 shadow-sm text-slate-900" : "bg-slate-950/40 border-white/5 text-slate-100"
              }`}>
                <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider text-center mb-2">{item.label}</p>
                <div className="grid grid-cols-2 gap-4 text-center text-xs">
                  <div className={`font-semibold ${item.mono ? "font-mono text-[10px]" : ""}`} style={{ color: idx === 1 ? undefined : regionA.color }}>
                    {item.valA}
                  </div>
                  <div className={`font-semibold border-l border-slate-500/10 ${item.mono ? "font-mono text-[10px]" : ""}`} style={{ color: idx === 1 ? undefined : regionB.color }}>
                    {item.valB}
                  </div>
                </div>
              </div>
            ))}

            {/* Core Games - Custom block */}
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-white border-slate-200 shadow-sm text-slate-900" : "bg-slate-950/40 border-white/5 text-slate-100"
            }`}>
              <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider text-center mb-3">Core Games</p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex flex-wrap gap-1 justify-center">
                  {regionA.games.map((g) => (
                    <span key={g} className="px-2 py-0.5 rounded text-[9px] bg-slate-500/10 border border-slate-500/20 text-slate-400 font-semibold">{g}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 justify-center border-l border-slate-500/10">
                  {regionB.games.map((g) => (
                    <span key={g} className="px-2 py-0.5 rounded text-[9px] bg-slate-500/10 border border-slate-500/20 text-slate-400 font-semibold">{g}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Starters - Custom block */}
            <div className={`p-4 rounded-2xl border ${
              isLightTheme ? "bg-white border-slate-200 shadow-sm text-slate-900" : "bg-slate-950/40 border-white/5 text-slate-100"
            }`}>
              <p className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider text-center mb-3">Starter Partners</p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex flex-col gap-2.5 items-center">
                  {regionA.starters.map((starter, i) => (
                    <button
                      key={starter}
                      onClick={() => onSelectPokemonById(regionA.starterIds[i])}
                      className="font-bold text-[11px] text-blue-500 hover:underline flex items-center gap-1.5 group cursor-pointer"
                    >
                      <img
                        src={getArtworkUrl(regionA.starterIds[i])}
                        alt={starter}
                        className="w-5 h-5 object-contain group-hover:scale-115 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span>{starter}</span>
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5 items-center border-l border-slate-500/10">
                  {regionB.starters.map((starter, i) => (
                    <button
                      key={starter}
                      onClick={() => onSelectPokemonById(regionB.starterIds[i])}
                      className="font-bold text-[11px] text-blue-500 hover:underline flex items-center gap-1.5 group cursor-pointer"
                    >
                      <img
                        src={getArtworkUrl(regionB.starterIds[i])}
                        alt={starter}
                        className="w-5 h-5 object-contain group-hover:scale-115 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span>{starter}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* POKEMON COMPARE COMPONENT */
        <div className="flex flex-col gap-8">
          {searchError && (
            <div className="p-4 text-xs font-semibold rounded-2xl bg-red-500/15 border border-red-500/20 text-red-400 text-center animate-pulse">
              {searchError}
            </div>
          )}
          {/* Search/Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search slot A */}
            <div
              className={`glass p-4 rounded-2xl border ${
                isLightTheme ? "bg-white/70 border-slate-300/35" : "bg-slate-950/40 border-white/5"
              }`}
            >
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                Load Pokémon A
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pokeASearch}
                  onChange={(e) => setPokeASearch(e.target.value)}
                  placeholder="Enter name or ID (e.g. Venusaur, 3)"
                  onKeyDown={(e) => e.key === "Enter" && searchPokemon(pokeASearch, setPokeAId)}
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm outline-none ${
                    isLightTheme
                      ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500"
                      : "bg-white/3 border-white/5 text-slate-100 focus:border-blue-500"
                  }`}
                />
                <button
                  onClick={() => searchPokemon(pokeASearch, setPokeAId)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer transition-all"
                >
                  Load
                </button>
              </div>
            </div>

            {/* Search slot B */}
            <div
              className={`glass p-4 rounded-2xl border ${
                isLightTheme ? "bg-white/70 border-slate-300/35" : "bg-slate-950/40 border-white/5"
              }`}
            >
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                Load Pokémon B
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pokeBSearch}
                  onChange={(e) => setPokeBSearch(e.target.value)}
                  placeholder="Enter name or ID (e.g. Charizard, 6)"
                  onKeyDown={(e) => e.key === "Enter" && searchPokemon(pokeBSearch, setPokeBId)}
                  className={`flex-1 px-3 py-2 rounded-lg border text-sm outline-none ${
                    isLightTheme
                      ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500"
                      : "bg-white/3 border-white/5 text-slate-100 focus:border-blue-500"
                  }`}
                />
                <button
                  onClick={() => searchPokemon(pokeBSearch, setPokeBId)}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer transition-all"
                >
                  Load
                </button>
              </div>
            </div>
          </div>

          {/* Cards Showcase side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Poke A card column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              {loadingA ? (
                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin my-12" />
              ) : (
                pokeADetails && (
                  <div
                    onClick={() => onSelectPokemonById(pokeADetails.id)}
                    className={`group p-6 rounded-3xl border w-full flex flex-col items-center text-center transition-all cursor-pointer hover:border-blue-500/40 hover:shadow-xl ${
                      isLightTheme ? "bg-white border-slate-200" : "bg-slate-950/40 border-white/5"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-slate-500">
                      #{pokeADetails.id.toString().padStart(4, "0")}
                    </span>
                    <img
                      src={getArtworkUrl(pokeADetails.id)}
                      alt={pokeADetails.name}
                      className="w-36 h-36 object-contain my-4 group-hover:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="font-display font-extrabold text-2xl capitalize">
                      {pokeADetails.name.replace("-", " ")}
                    </h3>
                    <div className="flex gap-1.5 mt-2.5">
                      {pokeADetails.types.map((t: any) => (
                        <span
                          key={t.type.name}
                          className="text-[9px] font-bold uppercase px-2 py-0.5 rounded text-white shadow-sm"
                          style={{ backgroundColor: getPokemonColor(t.type.name) }}
                        >
                          {t.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Middle Stats Comparison column */}
            <div
              className={`lg:col-span-3 p-5 rounded-2xl border flex flex-col gap-4 text-xs ${
                isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/2 border-white/5"
              }`}
            >
              <h4 className="font-display font-bold text-sm text-center mb-1 text-slate-500">
                Combat Stats Distribution
              </h4>
              {pokeADetails && pokeBDetails && (
                <div className="flex flex-col gap-4">
                  {statKeys.map((s) => {
                    const valA = getStatVal(pokeADetails, s.key);
                    const valB = getStatVal(pokeBDetails, s.key);
                    const total = valA + valB || 1;
                    const pctA = Math.round((valA / total) * 100);
                    const pctB = Math.round((valB / total) * 100);

                    return (
                      <div key={s.key} className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-400">
                          <span>{valA}</span>
                          <span className="text-slate-200 uppercase tracking-wide font-sans">{s.label}</span>
                          <span>{valB}</span>
                        </div>
                        {/* Two-sided bar comparison chart */}
                        <div className="h-3 rounded-full flex overflow-hidden bg-slate-500/10">
                          <div
                            className="bg-blue-500 h-full transition-all duration-700"
                            style={{
                              width: `${pctA}%`,
                              backgroundColor: getPokemonColor(pokeADetails.types[0].type.name),
                            }}
                          />
                          <div
                            className="bg-red-500 h-full transition-all duration-700"
                            style={{
                              width: `${pctB}%`,
                              backgroundColor: getPokemonColor(pokeBDetails.types[0].type.name),
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="border-t border-slate-500/10 pt-3 text-center">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">
                      Stat Totals
                    </span>
                    <div className="flex justify-between font-mono font-bold text-sm mt-1">
                      <span style={{ color: getPokemonColor(pokeADetails.types[0].type.name) }}>
                        {pokeADetails.stats.reduce((acc: number, item: any) => acc + item.base_stat, 0)}
                      </span>
                      <span className="text-slate-400">vs</span>
                      <span style={{ color: getPokemonColor(pokeBDetails.types[0].type.name) }}>
                        {pokeBDetails.stats.reduce((acc: number, item: any) => acc + item.base_stat, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Poke B card column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              {loadingB ? (
                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin my-12" />
              ) : (
                pokeBDetails && (
                  <div
                    onClick={() => onSelectPokemonById(pokeBDetails.id)}
                    className={`group p-6 rounded-3xl border w-full flex flex-col items-center text-center transition-all cursor-pointer hover:border-blue-500/40 hover:shadow-xl ${
                      isLightTheme ? "bg-white border-slate-200" : "bg-slate-950/40 border-white/5"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-slate-500">
                      #{pokeBDetails.id.toString().padStart(4, "0")}
                    </span>
                    <img
                      src={getArtworkUrl(pokeBDetails.id)}
                      alt={pokeBDetails.name}
                      className="w-36 h-36 object-contain my-4 group-hover:scale-115 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="font-display font-extrabold text-2xl capitalize">
                      {pokeBDetails.name.replace("-", " ")}
                    </h3>
                    <div className="flex gap-1.5 mt-2.5">
                      {pokeBDetails.types.map((t: any) => (
                        <span
                          key={t.type.name}
                          className="text-[9px] font-bold uppercase px-2 py-0.5 rounded text-white shadow-sm"
                          style={{ backgroundColor: getPokemonColor(t.type.name) }}
                        >
                          {t.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
