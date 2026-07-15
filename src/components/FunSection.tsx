import React, { useState, useEffect } from "react";
import { HelpCircle, RefreshCw, Sparkles, UserPlus, HelpCircle as HelpIcon } from "lucide-react";
import { getPokemonColor } from "../data/pokemonGenerations";

interface FunSectionProps {
  isLightTheme: boolean;
  onSelectPokemonById: (id: number) => void;
}

export default function FunSection({ isLightTheme, onSelectPokemonById }: FunSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<"wtp" | "daily" | "team">("wtp");

  // Who's That Pokemon state
  const [wtpId, setWtpId] = useState<number>(25); // Start with Pikachu
  const [wtpName, setWtpName] = useState("pikachu");
  const [wtpGuess, setWtpGuess] = useState("");
  const [wtpIsRevealed, setWtpIsRevealed] = useState(false);
  const [wtpFeedback, setWtpFeedback] = useState("");
  const [wtpLoading, setWtpLoading] = useState(false);

  // Daily Pokemon state
  const [dailyPokemon, setDailyPokemon] = useState<any>(null);
  const [dailyLoading, setDailyLoading] = useState(false);

  // Balanced Team state
  const [team, setTeam] = useState<{ id: number; name: string; types: string[]; hp: number; attack: number }[]>([]);
  const [teamLoading, setTeamLoading] = useState(false);
  const [teamSize, setTeamSize] = useState<number>(6);
  const [teamTheme, setTeamTheme] = useState<string>("balanced");
  const [selectedMonotype, setSelectedMonotype] = useState<string>("fire");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [maxTypesLimit, setMaxTypesLimit] = useState<string>("any");
  const typeCache = React.useRef<Record<string, number[]>>({});

  // Load a new WTP silhouette
  const loadNextWtp = async () => {
    try {
      setWtpLoading(true);
      setWtpIsRevealed(false);
      setWtpGuess("");
      setWtpFeedback("");

      // Select popular Pokémon between IDs 1 and 250 so they are recognizable
      const randId = Math.floor(Math.random() * 250) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`);
      if (res.ok) {
        const data = await res.json();
        setWtpId(randId);
        setWtpName(data.name);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setWtpLoading(false);
    }
  };

  // Check user guess
  const checkWtpGuess = () => {
    if (!wtpGuess.trim()) return;
    const cleanGuess = wtpGuess.toLowerCase().trim().replace(" ", "-");
    const cleanAnswer = wtpName.toLowerCase().replace(" ", "-");

    setWtpIsRevealed(true);
    
    // Play Cry audio
    const audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/${wtpId}.ogg`);
    audio.play().catch(() => {});

    if (cleanGuess === cleanAnswer || cleanAnswer.includes(cleanGuess) && cleanGuess.length > 2) {
      setWtpFeedback("🎉 Correct! Outstanding Trainer instincts!");
    } else {
      setWtpFeedback(`❌ Oh, so close! That's ${wtpName.toUpperCase()}!`);
    }
  };

  // Load Daily Pokemon
  const loadDailyPick = async () => {
    try {
      setDailyLoading(true);
      // Generate a semi-stable ID using today's date
      const today = new Date();
      const seed = today.getFullYear() * 31 + today.getMonth() * 12 + today.getDate();
      const dailyId = (seed % 649) + 1; // Gen 1-5 limit for highest compatibility

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${dailyId}`);
      if (res.ok) {
        const data = await res.json();
        setDailyPokemon(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDailyLoading(false);
    }
  };

  // List of popular Legendary/Mythical IDs (Gen 1-5)
  const LEGENDARY_IDS = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649];
  
  // Curated High Attack/Speed (Sweeper) IDs (Gen 1-5)
  const SWEEPER_IDS = [6, 94, 65, 149, 212, 448, 445, 373, 571, 637, 196, 135, 398, 461, 257, 254, 130, 248, 282, 330, 466, 475, 530, 555, 560, 612];
  
  // Curated HP/Defense (Tank) IDs (Gen 1-5)
  const TANK_IDS = [9, 80, 91, 112, 131, 143, 197, 205, 208, 227, 230, 232, 242, 306, 350, 365, 376, 411, 464, 465, 468, 472, 477, 563, 589, 598];

  // Starter Pokémon and their evolutions (Gen 1-5)
  const STARTER_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 152, 153, 154, 155, 156, 157, 158, 159, 160, 252, 253, 254, 255, 256, 257, 258, 259, 260, 387, 388, 389, 390, 391, 392, 393, 394, 395, 495, 496, 497, 498, 499, 500, 501, 502, 503];

  // Eevee & Eeveelutions (Gen 1-5)
  const EEVEELUTION_IDS = [133, 134, 135, 136, 196, 197, 470, 471];

  // Ancient Fossil Pokémon
  const FOSSIL_IDS = [138, 139, 140, 141, 142, 345, 346, 347, 348, 408, 409, 410, 411, 564, 565, 566, 567];

  // Baby & Cute Pokémon
  const CUTE_IDS = [25, 26, 35, 36, 39, 40, 52, 54, 133, 175, 176, 172, 173, 174, 183, 184, 216, 231, 238, 239, 240, 251, 258, 300, 301, 298, 311, 312, 351, 358, 385, 490, 492, 494, 587];

  // Dragon Overlords
  const DRAGON_IDS = [147, 148, 149, 230, 329, 330, 334, 371, 372, 373, 380, 381, 384, 443, 444, 445, 483, 484, 487, 610, 611, 612, 621, 633, 634, 635, 643, 644, 646];

  // Trickster spirits and ghostly minds
  const TRICKSTER_IDS = [94, 65, 97, 200, 197, 196, 302, 354, 477, 478, 479, 571, 570, 563, 579, 609];

  // Helper to fetch and cache type IDs
  const getPokemonIdsForType = async (type: string): Promise<number[]> => {
    if (typeCache.current[type]) {
      return typeCache.current[type];
    }
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      if (res.ok) {
        const data = await res.json();
        const ids = data.pokemon
          .map((p: any) => {
            const urlParts = p.pokemon.url.split("/");
            const id = parseInt(urlParts[urlParts.length - 2], 10);
            return id;
          })
          .filter((id: number) => id && id <= 649);
        typeCache.current[type] = ids;
        return ids;
      }
    } catch (err) {
      console.error(err);
    }
    return [];
  };

  // Generate a custom team based on selected theme, size, and type parameters
  const generateBalancedTeam = async () => {
    try {
      setTeamLoading(true);
      let basePool: number[] = [];

      // 1. Gather initial pool based on the theme
      if (teamTheme === "balanced") {
        basePool = Array.from({ length: 649 }, (_, i) => i + 1);
      } else if (teamTheme === "legendaries") {
        basePool = [...LEGENDARY_IDS];
      } else if (teamTheme === "stats-sweeper") {
        basePool = [...SWEEPER_IDS];
      } else if (teamTheme === "stats-tank") {
        basePool = [...TANK_IDS];
      } else if (teamTheme === "starters") {
        basePool = [...STARTER_IDS];
      } else if (teamTheme === "eeveelution") {
        basePool = [...EEVEELUTION_IDS];
      } else if (teamTheme === "fossil") {
        basePool = [...FOSSIL_IDS];
      } else if (teamTheme === "cute") {
        basePool = [...CUTE_IDS];
      } else if (teamTheme === "dragons") {
        basePool = [...DRAGON_IDS];
      } else if (teamTheme === "trickster") {
        basePool = [...TRICKSTER_IDS];
      } else if (teamTheme === "monotype") {
        const singleTypePool = await getPokemonIdsForType(selectedMonotype);
        basePool = singleTypePool;
      }

      // 2. Filter by explicitly selected types if the user chose any
      if (selectedTypes.length > 0) {
        const typePools = await Promise.all(
          selectedTypes.map(t => getPokemonIdsForType(t))
        );
        const allowedIds = new Set<number>(typePools.flat() as number[]);
        basePool = basePool.filter(id => allowedIds.has(id));

        // If the filtered list is empty, fallback to the allowed types pool directly
        if (basePool.length === 0) {
          basePool = Array.from(allowedIds);
        }
      }

      // If the pool is still empty, fallback to the full national Pokedex (Gen 1-5)
      if (basePool.length === 0) {
        basePool = Array.from({ length: 649 }, (_, i) => i + 1);
      }

      // Shuffle pool
      const shuffledPool = [...basePool].sort(() => Math.random() - 0.5);
      const targetIds: number[] = [];
      const loadedPokemon: any[] = [];
      
      let attempts = 0;
      const uniqueTypesInTeam = new Set<string>();

      // Pull candidates and query details, keeping track of unique types constraint
      for (const id of shuffledPool) {
        if (targetIds.length >= teamSize) break;
        if (attempts > 80) break; // prevent excessive loading

        try {
          const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (!r.ok) continue;
          const data = await r.json();
          const pokeTypes: string[] = data.types.map((t: any) => t.type.name);

          // If there is a max types limit constraint
          if (maxTypesLimit !== "any") {
            const limit = parseInt(maxTypesLimit, 10);
            const tempUnion = new Set([...uniqueTypesInTeam, ...pokeTypes]);
            if (tempUnion.size > limit) {
              // Exceeds unique types limit - skip this candidate
              attempts++;
              continue;
            }
          }

          // Approved - Add to team
          pokeTypes.forEach(t => uniqueTypesInTeam.add(t));
          targetIds.push(id);
          loadedPokemon.push(data);
        } catch (e) {
          console.error(e);
        }
        attempts++;
      }

      // If unique type constraints was too restrictive and we have empty slots, fill with any candidates
      if (loadedPokemon.length < teamSize) {
        for (const id of shuffledPool) {
          if (loadedPokemon.length >= teamSize) break;
          if (targetIds.includes(id)) continue;

          try {
            const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!r.ok) continue;
            const data = await r.json();
            loadedPokemon.push(data);
            targetIds.push(id);
          } catch (e) {
            console.error(e);
          }
        }
      }

      const mapped = loadedPokemon.slice(0, teamSize).map((data) => ({
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 50,
        attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 50,
      }));

      setTeam(mapped);
    } catch (err) {
      console.error(err);
    } finally {
      setTeamLoading(false);
    }
  };

  // Trigger loading subtab resources
  useEffect(() => {
    if (activeSubTab === "wtp" && wtpId === 25) {
      loadNextWtp();
    } else if (activeSubTab === "daily" && !dailyPokemon) {
      loadDailyPick();
    } else if (activeSubTab === "team") {
      generateBalancedTeam();
    }
  }, [activeSubTab, teamSize, teamTheme, selectedMonotype, selectedTypes, maxTypesLimit]);

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {/* Sub tabs switcher */}
      <div className="flex justify-center gap-2 mb-10 border-b border-slate-500/10 pb-4">
        <button
          onClick={() => setActiveSubTab("wtp")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "wtp"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Who's That Pokémon?
        </button>
        <button
          onClick={() => setActiveSubTab("daily")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "daily"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Daily Pokémon Pick
        </button>
        <button
          onClick={() => setActiveSubTab("team")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "team"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Team Builder
        </button>
      </div>

      {/* SUB-MODULES SHOWCASE */}
      {activeSubTab === "wtp" && (
        <div
          className={`glass p-6 md:p-10 rounded-3xl border text-center shadow-xl flex flex-col items-center ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          <h2 className="font-display font-extrabold text-2xl md:text-3xl flex items-center gap-2">
            <HelpIcon className="w-6 h-6 text-yellow-400" />
            <span>Who's That Pokémon?</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            A Pokémon outline is projected below. Identify it and type its name!
          </p>

          {wtpLoading ? (
            <div className="w-48 h-48 flex items-center justify-center my-8">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="relative w-48 h-48 md:w-56 md:h-56 my-8 flex items-center justify-center">
              {/* Glow background */}
              <div className="absolute inset-4 rounded-full bg-blue-500/10 filter blur-3xl" />
              <img
                src={getArtworkUrl(wtpId)}
                alt="wtp silhouette"
                className={`w-44 h-44 md:w-52 md:h-52 object-contain select-none pointer-events-none transition-all duration-500 ${
                  wtpIsRevealed ? "brightness-100" : "brightness-0 filter"
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Input Submission */}
          {!wtpIsRevealed ? (
            <div className="flex gap-2 max-w-sm w-full">
              <input
                type="text"
                value={wtpGuess}
                onChange={(e) => setWtpGuess(e.target.value)}
                placeholder="Enter Pokémon name..."
                onKeyDown={(e) => e.key === "Enter" && checkWtpGuess()}
                className={`flex-1 px-4 py-2.5 rounded-xl border text-sm outline-none ${
                  isLightTheme
                    ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                    : "bg-white/3 border-white/5 text-slate-100 focus:border-blue-500 focus:bg-slate-950"
                }`}
              />
              <button
                onClick={checkWtpGuess}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="font-display font-extrabold text-lg tracking-tight mb-4 text-amber-400">
                {wtpFeedback}
              </p>
              <div className="flex gap-2.5">
                <button
                  onClick={() => onSelectPokemonById(wtpId)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                    isLightTheme
                      ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                      : "bg-slate-900 border-white/10 text-slate-100 hover:bg-white/5"
                  }`}
                >
                  View Dossier
                </button>
                <button
                  onClick={loadNextWtp}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Next Pokémon</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeSubTab === "daily" && (
        <div
          className={`glass p-6 md:p-8 rounded-3xl border shadow-xl ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          {dailyLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-slate-500 mt-3 font-semibold">Consulting Oak's Lab...</p>
            </div>
          ) : (
            dailyPokemon && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Visual Artwork */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center bg-blue-500/5 rounded-full border border-blue-500/10">
                    <img
                      src={getArtworkUrl(dailyPokemon.id)}
                      alt="daily pick"
                      className="w-40 h-40 object-contain relative z-1 animate-float-medium filter drop-shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full mt-4 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Today's Curated Pick</span>
                  </span>
                </div>

                {/* Dossier info */}
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    #{dailyPokemon.id.toString().padStart(4, "0")}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl capitalize tracking-tight mt-1">
                    {dailyPokemon.name.replace("-", " ")}
                  </h3>

                  <div className="flex gap-1.5 mt-2.5">
                    {dailyPokemon.types.map((t: any) => (
                      <span
                        key={t.type.name}
                        className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full text-white shadow-sm"
                        style={{ backgroundColor: getPokemonColor(t.type.name) }}
                      >
                        {t.type.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 mt-4 leading-relaxed">
                    This special Pokémon is today's spotlight choice. Every trainer's daily seed triggers a unique roster spotlight! Open its complete dossier to study its capabilities.
                  </p>

                  <button
                    onClick={() => onSelectPokemonById(dailyPokemon.id)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all"
                  >
                    View Complete Dossier →
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {activeSubTab === "team" && (
        <div
          className={`glass p-6 md:p-8 rounded-3xl border shadow-xl ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          {/* Custom Configuration Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left border-b border-slate-500/10 pb-6">
            {/* 1. Team Size Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Roster Size ({teamSize})
              </label>
              <div className="flex gap-1.5 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((size) => (
                  <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      teamSize === size
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/15"
                        : isLightTheme
                        ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Team Theme Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Squad Theme / Strategy
              </label>
              <select
                value={teamTheme}
                onChange={(e) => {
                  setTeamTheme(e.target.value);
                  // Auto-reset or default some inputs if monotype is picked
                  if (e.target.value === "monotype") {
                    setSelectedTypes([]);
                  }
                }}
                className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold outline-none border cursor-pointer ${
                  isLightTheme
                    ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                    : "bg-slate-900 border-white/10 text-slate-100 focus:border-blue-500 focus:bg-slate-950"
                }`}
              >
                <option value="balanced">Balanced Mix (Any Type)</option>
                <option value="monotype">Monotype Specialty (Single Type)</option>
                <option value="starters">Starter Squad (Core Companions)</option>
                <option value="eeveelution">Eeveelutions (Eevee & Evolutions)</option>
                <option value="fossil">Ancient Fossils (Prehistoric)</option>
                <option value="cute">Baby & Cute Club (Charm/Cutie)</option>
                <option value="dragons">Dragon Overlords (Mighty Beasts)</option>
                <option value="trickster">Tricksters & Ghosts (Illusionists)</option>
                <option value="legendaries">Legendary Power (God-tier/Mythic)</option>
                <option value="stats-sweeper">Fast Sweepers (Max Speed/Atk)</option>
                <option value="stats-tank">Heavy Tanks (Max Defense/HP)</option>
              </select>
            </div>

            {/* 3. Unique Types Limit (How many elemental types) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Elemental Diversity Limit
              </label>
              <select
                value={maxTypesLimit}
                onChange={(e) => setMaxTypesLimit(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl text-xs font-semibold outline-none border cursor-pointer ${
                  isLightTheme
                    ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                    : "bg-slate-900 border-white/10 text-slate-100 focus:border-blue-500 focus:bg-slate-950"
                }`}
              >
                <option value="any">No Limit (Max Type Diversity)</option>
                <option value="1">Strictly 1 Type (Pure Monotype Roster)</option>
                <option value="2">Max 2 Distinct Types in Team</option>
                <option value="3">Max 3 Distinct Types in Team</option>
                <option value="4">Max 4 Distinct Types in Team</option>
              </select>
            </div>
          </div>

          {/* Detailed Type Filter Grid */}
          <div className="mb-8 text-left border-b border-slate-500/10 pb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Pick Elemental Types to Feature ({selectedTypes.length === 0 ? "All Allowed" : `${selectedTypes.length} Selected`})
              </label>
              {selectedTypes.length > 0 && (
                <button
                  onClick={() => setSelectedTypes([])}
                  className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                >
                  Clear Selection
                </button>
              )}
            </div>
            
            {/* Monotype Override notice */}
            {teamTheme === "monotype" ? (
              <div className="mb-4">
                <p className="text-[11px] text-amber-500 font-semibold mb-2">
                  ℹ️ Monotype theme is active. Select the main specialty element:
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {["fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "steel", "fairy", "normal"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedMonotype(type)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer border`}
                      style={{
                        backgroundColor: selectedMonotype === type ? getPokemonColor(type) : "transparent",
                        color: selectedMonotype === type ? "#fff" : getPokemonColor(type),
                        borderColor: getPokemonColor(type),
                        opacity: selectedMonotype === type ? 1 : 0.65
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2">
                {["fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "steel", "dark", "fairy", "normal"].map((type) => {
                  const isActive = selectedTypes.includes(type);
                  return (
                    <button
                      key={type}
                      onClick={() => {
                        if (isActive) {
                          setSelectedTypes(selectedTypes.filter(t => t !== type));
                        } else {
                          setSelectedTypes([...selectedTypes, type]);
                        }
                      }}
                      className={`py-1.5 px-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wide border transition-all cursor-pointer text-center ${
                        isActive ? "shadow-md scale-102" : "opacity-60 hover:opacity-100"
                      }`}
                      style={{
                        backgroundColor: isActive ? getPokemonColor(type) : "transparent",
                        color: isActive ? "#fff" : getPokemonColor(type),
                        borderColor: getPokemonColor(type)
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="text-left">
              <h3 className="font-display font-extrabold text-xl md:text-2xl flex items-center gap-2">
                <span>Roster:</span>
                <span className="text-blue-500 text-lg md:text-xl font-black capitalize">
                  {teamTheme === "balanced" && "Balanced Squad"}
                  {teamTheme === "monotype" && `Mono-${selectedMonotype}`}
                  {teamTheme === "starters" && "Starter Companions"}
                  {teamTheme === "eeveelution" && "Eeveelution Squad"}
                  {teamTheme === "fossil" && "Prehistoric Fossils"}
                  {teamTheme === "cute" && "Cute Baby Club"}
                  {teamTheme === "dragons" && "Dragon Overlords"}
                  {teamTheme === "trickster" && "Trickster Spirits"}
                  {teamTheme === "legendaries" && "Legendary Pantheon"}
                  {teamTheme === "stats-sweeper" && "Hyper Offensive Sweepers"}
                  {teamTheme === "stats-tank" && "Heavy Bulwark Tanks"}
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Custom squad of {teamSize} assembled dynamically. Click any member to read lore dossiers.
              </p>
            </div>
            <button
              onClick={generateBalancedTeam}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shrink-0 animate-pulse hover:animate-none"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Assemble Squad</span>
            </button>
          </div>

          {teamLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-10 justify-center">
              {Array.from({ length: teamSize }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-2xl h-36 animate-pulse ${
                    isLightTheme ? "bg-slate-200/60" : "bg-slate-900/60"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center">
              {team.slice(0, teamSize).map((poke) => (
                <div
                  key={poke.id}
                  onClick={() => onSelectPokemonById(poke.id)}
                  className={`group p-4 rounded-2xl cursor-pointer border flex flex-col items-center justify-between min-h-[160px] transition-all hover:-translate-y-1 hover:shadow-lg ${
                    isLightTheme
                      ? "bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-950"
                      : "bg-white/3 hover:bg-white/8 border-white/5 text-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-mono text-slate-400 font-bold mb-1">
                      #{poke.id.toString().padStart(4, "0")}
                    </span>
                    <img
                      src={getArtworkUrl(poke.id)}
                      alt={poke.name}
                      className="w-16 h-16 object-contain group-hover:scale-115 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full text-center mt-2">
                    <h5 className="font-bold text-xs capitalize truncate w-full mb-1">
                      {poke.name.replace("-", " ")}
                    </h5>
                    <div className="flex gap-1 justify-center flex-wrap">
                      {poke.types.map((type) => (
                        <span
                          key={type}
                          className="text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded text-white shadow-sm"
                          style={{ backgroundColor: getPokemonColor(type) }}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
