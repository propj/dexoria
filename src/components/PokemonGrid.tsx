import React, { useState, useEffect, useMemo, useRef } from "react";
import { Search, Heart, SlidersHorizontal } from "lucide-react";
import { PokemonShort } from "../types";
import { TYPES_CHART, GEN_ID_RANGES, getPokemonColor, getDarkTypeColor } from "../data/pokemonGenerations";
import { motion } from "motion/react";

interface PokemonGridProps {
  isLightTheme: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onSelectPokemonById: (id: number) => void;
  featuredOnly?: boolean;
}

// Pre-filled types for starters and extremely popular Pokémon so they load instantly
const POPULAR_POKEMON_TYPES: Record<number, string[]> = {
  1: ["grass", "poison"], 4: ["fire"], 7: ["water"],
  25: ["electric"], 133: ["normal"], 150: ["psychic"],
  152: ["grass"], 155: ["fire"], 158: ["water"],
  252: ["grass"], 255: ["fire"], 258: ["water"],
  387: ["grass"], 390: ["fire"], 393: ["water"],
  495: ["grass"], 498: ["fire", "fighting"], 501: ["water"],
  650: ["grass"], 653: ["fire"], 656: ["water"],
  722: ["grass", "flying"], 725: ["fire"], 728: ["water"],
  810: ["grass"], 813: ["fire"], 816: ["water"],
  906: ["grass"], 909: ["fire"], 912: ["water"]
};

// Pre-filled Japanese translations for starters and extremely popular Pokémon so they load instantly
const PREFILLED_JA_NAMES: Record<number, string> = {
  1: "フシギダネ", 2: "フシギソウ", 3: "フシギバナ",
  4: "ヒトカゲ", 5: "リザード", 6: "リザードン",
  7: "ゼニガメ", 8: "カメール", 9: "カメックス",
  25: "ピカチュウ", 26: "ライチュウ",
  133: "イーブイ", 134: "シャワーズ", 135: "サンダース", 136: "ブースター",
  150: "ミュウツー", 151: "ミュウ",
  152: "チコリータ", 153: "ベイリーフ", 154: "メガニウム",
  155: "ヒノアラシ", 156: "マグマラシ", 157: "バクフーン",
  158: "ワニノコ", 159: "アリゲイツ", 160: "オーダイル",
  196: "エーフィ", 197: "ブラッキー",
  252: "キモリ", 253: "ジュプトル", 254: "ジュカイン",
  255: "アチャモ", 256: "ワカシャモ", 257: "バシャーモ",
  258: "ミズゴロウ", 259: "ヌマクロー", 260: "ラグラージ",
  387: "ナエトル", 388: "ハヤシガメ", 389: "ドダイトス",
  390: "ヒコザル", 391: "モウカザル", 392: "ゴウカザル",
  393: "ポッチャマ", 394: "ポッタイシ", 395: "エンペルト",
  470: "リーフィア", 471: "グレイシア",
  495: "ツタージャ", 496: "ジャノビー", 497: "ジャローダ",
  498: "ポカブ", 499: "チャオブー", 500: "エンブオー",
  501: "ミジュマル", 502: "フタチマル", 503: "ダイケンキ",
  650: "ハリマロン", 651: "ハリボーグ", 652: "ブリガロン",
  653: "フォッコ", 654: "テールナー", 655: "マフォクシー",
  656: "ケロマツ", 657: "ゲコガシラ", 658: "ゲッコウガ",
  722: "モクロー", 725: "ニャビー", 728: "アシマリ",
  810: "サルノリ", 813: "ヒバニー", 816: "メッソン",
  906: "ニャオハ", 909: "ホゲータ", 912: "クワッス"
};

export default function PokemonGrid({
  isLightTheme,
  favorites,
  toggleFavorite,
  onSelectPokemonById,
  featuredOnly = false,
}: PokemonGridProps) {
  const [allPokemon, setAllPokemon] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [typesCache, setTypesCache] = useState<Record<number, string[]>>(POPULAR_POKEMON_TYPES);
  const [japaneseNames, setJapaneseNames] = useState<Record<number, string>>(PREFILLED_JA_NAMES);
  const [visibleCount, setVisibleCount] = useState(24);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGen, setSelectedGen] = useState("");
  const [sortOption, setSortOption] = useState("id-asc");

  // Fetch index list of Pokémon on mount
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setLoading(true);
        // Fetching up to Gen 9 limit of pokedex (1025)
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const data = await res.json();
        
        const mapped = data.results.map((p: any) => {
          // Extract ID from URL e.g. "https://pokeapi.co/api/v2/pokemon/1/"
          const parts = p.url.split("/");
          const id = parseInt(parts[parts.length - 2], 10);
          return {
            id,
            name: p.name,
          };
        }).filter((p: any) => p.id <= 1025); // Cap at 1025
        
        setAllPokemon(mapped);
      } catch (err) {
        console.error("Error fetching Pokémon list index", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonList();
  }, []);

  // Set visible count reset when filters change
  useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedType, selectedGen, sortOption]);

  // Featured Pokemon selection for Home page (exactly 6 random Pokémon)
  const featuredIds = useMemo(() => {
    const ids: number[] = [];
    while (ids.length < 6) {
      const randId = Math.floor(Math.random() * 1025) + 1;
      if (!ids.includes(randId)) {
        ids.push(randId);
      }
    }
    return ids;
  }, []);

  // Filter & Sort list of Pokémon
  const filteredPokemon = useMemo(() => {
    let list = allPokemon;

    // Filter for Home screen featured view
    if (featuredOnly) {
      list = list.filter((p) => featuredIds.includes(p.id));
    }

    // Filter by Generation range
    if (selectedGen) {
      const range = GEN_ID_RANGES[parseInt(selectedGen, 10)];
      if (range) {
        list = list.filter((p) => p.id >= range.start && p.id <= range.end);
      }
    }

    // Filter by Search Query (Name or Pokédex number)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) => p.name.includes(q) || p.id.toString() === q || `#${p.id.toString().padStart(4, "0")}`.includes(q)
      );
    }

    // Filter by Type (only matching items that are resolved in types cache)
    if (selectedType) {
      list = list.filter((p) => {
        const types = typesCache[p.id];
        return types && types.includes(selectedType.toLowerCase());
      });
    }

    // Sorting
    const sorted = [...list];
    if (sortOption === "id-asc") {
      sorted.sort((a, b) => a.id - b.id);
    } else if (sortOption === "id-desc") {
      sorted.sort((a, b) => b.id - a.id);
    } else if (sortOption === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    return sorted;
  }, [allPokemon, searchQuery, selectedType, selectedGen, sortOption, typesCache, featuredOnly, featuredIds]);

  // Get current slice
  const displayedPokemon = useMemo(() => {
    return filteredPokemon.slice(0, visibleCount);
  }, [filteredPokemon, visibleCount]);

  // Function to lazy-load the types and Japanese name of a specific Pokémon
  const fetchExtraDataForId = async (id: number) => {
    // 1. Fetch Types if not in typesCache
    if (!typesCache[id]) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (res.ok) {
          const data = await res.json();
          const types = data.types.map((t: any) => t.type.name);
          setTypesCache((prev) => ({ ...prev, [id]: types }));
        }
      } catch (err) {
        // Fail silently
      }
    }

    // 2. Fetch Japanese Name if not in japaneseNames
    if (!japaneseNames[id]) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        if (res.ok) {
          const data = await res.json();
          const jaNameObj = data.names.find(
            (n: any) => n.language.name === "ja-Hrkt" || n.language.name === "ja" || n.language.name === "roomaji"
          );
          if (jaNameObj) {
            setJapaneseNames((prev) => ({ ...prev, [id]: jaNameObj.name }));
          }
        }
      } catch (err) {
        // Fail silently
      }
    }
  };

  // Trigger loading types and Japanese names of currently displayed Pokémon
  useEffect(() => {
    displayedPokemon.forEach((p) => {
      if (!typesCache[p.id] || !japaneseNames[p.id]) {
        fetchExtraDataForId(p.id);
      }
    });
  }, [displayedPokemon, typesCache, japaneseNames]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  // Intersection Observer for Infinite Scrolling
  useEffect(() => {
    if (featuredOnly || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && filteredPokemon.length > visibleCount) {
          setVisibleCount((prev) => prev + 24);
        }
      },
      { threshold: 0.1, rootMargin: "250px" }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, [filteredPokemon.length, visibleCount, featuredOnly, loading]);

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="w-full">
      {/* Search and Filters Controls Header (Don't show in Featured Only mode) */}
      {!featuredOnly && (
        <div
          className={`glass p-5 rounded-2xl border mb-10 flex flex-wrap gap-4 items-center ${
            isLightTheme
              ? "bg-white/70 border-slate-300/30 text-slate-900 shadow-sm"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          {/* Search bar */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Pokémon name or Pokédex number..."
              className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                isLightTheme
                  ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                  : "bg-white/3 border-white/5 text-slate-100 focus:border-blue-500 focus:bg-slate-950"
              }`}
            />
          </div>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className={`px-4 py-3 rounded-xl border text-sm outline-none cursor-pointer transition-all ${
              isLightTheme
                ? "bg-slate-50 border-slate-200 text-slate-700"
                : "bg-slate-900 border-white/5 text-slate-300"
            }`}
          >
            <option value="">All Types</option>
            {TYPES_CHART.map((t) => (
              <option key={t.name} value={t.name} className="capitalize">
                {t.name}
              </option>
            ))}
          </select>

          {/* Generation Filter */}
          <select
            value={selectedGen}
            onChange={(e) => setSelectedGen(e.target.value)}
            className={`px-4 py-3 rounded-xl border text-sm outline-none cursor-pointer transition-all ${
              isLightTheme
                ? "bg-slate-50 border-slate-200 text-slate-700"
                : "bg-slate-900 border-white/5 text-slate-300"
            }`}
          >
            <option value="">All Generations</option>
            <option value="1">Gen I (Kanto)</option>
            <option value="2">Gen II (Johto)</option>
            <option value="3">Gen III (Hoenn)</option>
            <option value="4">Gen IV (Sinnoh)</option>
            <option value="5">Gen V (Unova)</option>
            <option value="6">Gen VI (Kalos)</option>
            <option value="7">Gen VII (Alola)</option>
            <option value="8">Gen VIII (Galar / Hisui)</option>
            <option value="9">Gen IX (Paldea)</option>
          </select>

          {/* Sorting Filter */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className={`px-4 py-3 rounded-xl border text-sm outline-none cursor-pointer transition-all ${
              isLightTheme
                ? "bg-slate-50 border-slate-200 text-slate-700"
                : "bg-slate-900 border-white/5 text-slate-300"
            }`}
          >
            <option value="id-asc">Pokédex # (Low to High)</option>
            <option value="id-desc">Pokédex # (High to Low)</option>
            <option value="name-asc">Alphabetical (A–Z)</option>
            <option value="name-desc">Alphabetical (Z–A)</option>
          </select>
        </div>
      )}

      {/* Grid Display Area */}
      {loading ? (
        /* Grid loading state */
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
      ) : displayedPokemon.length === 0 ? (
        /* Empty results state */
        <div className="text-center py-16">
          <p className="text-lg font-medium text-slate-500">No Pokémon found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedType("");
              setSelectedGen("");
              setSortOption("id-asc");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Loaded Pokemon Cards */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {displayedPokemon.map((poke) => {
            const types = typesCache[poke.id] || [];
            const primaryType = types[0] || "normal";
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
                {/* Number overlaying top-right - larger */}
                <span 
                  className={`absolute top-3 right-4 font-mono font-extrabold text-sm sm:text-base tracking-wider select-none transition-all duration-300 ${
                    isLightTheme ? "text-slate-900/35" : "text-white/35"
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
                  className={`absolute top-3 left-4 p-1.5 rounded-xl cursor-pointer transition-all z-20 ${
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

                  {/* Japanese name backdrop - static */}
                  {japaneseNames[poke.id] && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                      <span 
                        className={`font-sans font-black text-5xl sm:text-6xl tracking-wider uppercase whitespace-nowrap transition-all duration-500 group-hover:scale-105 ${
                          isLightTheme 
                            ? "text-slate-900/[0.08]" 
                            : "text-white/[0.06]"
                        }`}
                      >
                        {japaneseNames[poke.id]}
                      </span>
                    </div>
                  )}

                  <img
                    src={getArtworkUrl(poke.id)}
                    alt={poke.name}
                    loading="lazy"
                    className="w-[145px] h-[145px] md:w-[170px] md:h-[170px] object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title & Type Badges (Left-aligned as in screenshot) */}
                <div className="relative z-20 mt-auto pl-1">
                  <h4 className={`font-display font-black text-base md:text-lg capitalize tracking-tight transition-colors leading-tight ${
                    isLightTheme ? "text-slate-900 group-hover:text-amber-800" : "text-white group-hover:text-amber-300"
                  }`}>
                    {poke.name.replace("-", " ")}
                  </h4>

                  {/* Type Badges */}
                  <div className="flex gap-1.5 mt-2 justify-start flex-wrap min-h-[22px]">
                    {types.length > 0 ? (
                      types.map((type) => (
                        <span
                          key={type}
                          className="text-[9px] font-mono font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md text-white select-none shadow-sm"
                          style={{ backgroundColor: getPokemonColor(type) }}
                        >
                          {type}
                        </span>
                      ))
                    ) : (
                      /* Skeletons for types */
                      <div className="w-12 h-4 rounded bg-slate-500/10 animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sentinel for infinite scroll / automatic loading */}
      {!featuredOnly && !loading && filteredPokemon.length > visibleCount && (
        <div ref={sentinelRef} className="flex flex-col items-center justify-center py-12 mt-6">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-xs font-semibold text-slate-400 tracking-wider uppercase">Loading more Pokémon...</p>
        </div>
      )}
    </div>
  );
}
