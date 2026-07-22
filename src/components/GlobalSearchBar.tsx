import React, { useState, useEffect, useRef } from "react";
import { Search, X, Sparkles, MapPin, Calendar, Users, Heart, ArrowRight, Shield, Crown, Globe, Layers, Zap } from "lucide-react";
import { REGIONS_DATA } from "../data/regions";
import { GENERATIONS_DATA } from "../data/pokemonGenerations";
import { REGIONAL_MAPS } from "../data/landmarks";
import { Region } from "../types";

interface GlobalSearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: "pokemon" | "region" | "timeline" | "character" | "landmark";
  categoryLabel: string;
  badgeColor: string;
  icon: React.ReactNode;
  imageUrl?: string;
  action: () => void;
  metadata?: string;
}

interface GlobalSearchBarProps {
  isLightTheme: boolean;
  onSelectPokemonById: (id: number) => void;
  onSelectRegion: (region: Region) => void;
  setActivePage: (page: string) => void;
}

// Expansive Pokémon Index for search
const POPULAR_POKEMON_SEARCH_LIST = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"], gen: 1 },
  { id: 4, name: "Charmander", types: ["Fire"], gen: 1 },
  { id: 6, name: "Charizard", types: ["Fire", "Flying"], gen: 1 },
  { id: 7, name: "Squirtle", types: ["Water"], gen: 1 },
  { id: 9, name: "Blastoise", types: ["Water"], gen: 1 },
  { id: 25, name: "Pikachu", types: ["Electric"], gen: 1 },
  { id: 39, name: "Jigglypuff", types: ["Normal", "Fairy"], gen: 1 },
  { id: 52, name: "Meowth", types: ["Normal"], gen: 1 },
  { id: 54, name: "Psyduck", types: ["Water"], gen: 1 },
  { id: 94, name: "Gengar", types: ["Ghost", "Poison"], gen: 1 },
  { id: 130, name: "Gyarados", types: ["Water", "Flying"], gen: 1 },
  { id: 131, name: "Lapras", types: ["Water", "Ice"], gen: 1 },
  { id: 133, name: "Eevee", types: ["Normal"], gen: 1 },
  { id: 143, name: "Snorlax", types: ["Normal"], gen: 1 },
  { id: 149, name: "Dragonite", types: ["Dragon", "Flying"], gen: 1 },
  { id: 150, name: "Mewtwo", types: ["Psychic"], gen: 1 },
  { id: 151, name: "Mew", types: ["Psychic"], gen: 1 },
  { id: 152, name: "Chikorita", types: ["Grass"], gen: 2 },
  { id: 155, name: "Cyndaquil", types: ["Fire"], gen: 2 },
  { id: 158, name: "Totodile", types: ["Water"], gen: 2 },
  { id: 175, name: "Togepi", types: ["Fairy"], gen: 2 },
  { id: 196, name: "Espeon", types: ["Psychic"], gen: 2 },
  { id: 197, name: "Umbreon", types: ["Dark"], gen: 2 },
  { id: 212, name: "Scizor", types: ["Bug", "Steel"], gen: 2 },
  { id: 248, name: "Tyranitar", types: ["Rock", "Dark"], gen: 2 },
  { id: 249, name: "Lugia", types: ["Psychic", "Flying"], gen: 2 },
  { id: 250, name: "Ho-Oh", types: ["Fire", "Flying"], gen: 2 },
  { id: 251, name: "Celebi", types: ["Psychic", "Grass"], gen: 2 },
  { id: 252, name: "Treecko", types: ["Grass"], gen: 3 },
  { id: 255, name: "Torchic", types: ["Fire"], gen: 3 },
  { id: 257, name: "Blaziken", types: ["Fire", "Fighting"], gen: 3 },
  { id: 258, name: "Mudkip", types: ["Water"], gen: 3 },
  { id: 282, name: "Gardevoir", types: ["Psychic", "Fairy"], gen: 3 },
  { id: 373, name: "Salamence", types: ["Dragon", "Flying"], gen: 3 },
  { id: 376, name: "Metagross", types: ["Steel", "Psychic"], gen: 3 },
  { id: 382, name: "Kyogre", types: ["Water"], gen: 3 },
  { id: 383, name: "Groudon", types: ["Ground"], gen: 3 },
  { id: 384, name: "Rayquaza", types: ["Dragon", "Flying"], gen: 3 },
  { id: 387, name: "Turtwig", types: ["Grass"], gen: 4 },
  { id: 390, name: "Chimchar", types: ["Fire"], gen: 4 },
  { id: 393, name: "Piplup", types: ["Water"], gen: 4 },
  { id: 448, name: "Lucario", types: ["Fighting", "Steel"], gen: 4 },
  { id: 445, name: "Garchomp", types: ["Dragon", "Ground"], gen: 4 },
  { id: 470, name: "Leafeon", types: ["Grass"], gen: 4 },
  { id: 471, name: "Glaceon", types: ["Ice"], gen: 4 },
  { id: 483, name: "Dialga", types: ["Steel", "Dragon"], gen: 4 },
  { id: 484, name: "Palkia", types: ["Water", "Dragon"], gen: 4 },
  { id: 487, name: "Giratina", types: ["Ghost", "Dragon"], gen: 4 },
  { id: 493, name: "Arceus", types: ["Normal"], gen: 4 },
  { id: 495, name: "Snivy", types: ["Grass"], gen: 5 },
  { id: 498, name: "Tepig", types: ["Fire"], gen: 5 },
  { id: 501, name: "Oshawott", types: ["Water"], gen: 5 },
  { id: 571, name: "Zoroark", types: ["Dark"], gen: 5 },
  { id: 635, name: "Hydreigon", types: ["Dark", "Dragon"], gen: 5 },
  { id: 643, name: "Reshiram", types: ["Dragon", "Fire"], gen: 5 },
  { id: 644, name: "Zekrom", types: ["Dragon", "Electric"], gen: 5 },
  { id: 650, name: "Chespin", types: ["Grass"], gen: 6 },
  { id: 653, name: "Fennekin", types: ["Fire"], gen: 6 },
  { id: 656, name: "Froakie", types: ["Water"], gen: 6 },
  { id: 658, name: "Greninja", types: ["Water", "Dark"], gen: 6 },
  { id: 700, name: "Sylveon", types: ["Fairy"], gen: 6 },
  { id: 716, name: "Xerneas", types: ["Fairy"], gen: 6 },
  { id: 717, name: "Yveltal", types: ["Dark", "Flying"], gen: 6 },
  { id: 722, name: "Rowlet", types: ["Grass", "Flying"], gen: 7 },
  { id: 725, name: "Litten", types: ["Fire"], gen: 7 },
  { id: 728, name: "Popplio", types: ["Water"], gen: 7 },
  { id: 778, name: "Mimikyu", types: ["Ghost", "Fairy"], gen: 7 },
  { id: 791, name: "Solgaleo", types: ["Psychic", "Steel"], gen: 7 },
  { id: 792, name: "Lunala", types: ["Psychic", "Ghost"], gen: 7 },
  { id: 810, name: "Grookey", types: ["Grass"], gen: 8 },
  { id: 813, name: "Scorbunny", types: ["Fire"], gen: 8 },
  { id: 816, name: "Sobble", types: ["Water"], gen: 8 },
  { id: 887, name: "Dragapult", types: ["Dragon", "Ghost"], gen: 8 },
  { id: 888, name: "Zacian", types: ["Fairy", "Steel"], gen: 8 },
  { id: 889, name: "Zamazenta", types: ["Fighting", "Steel"], gen: 8 },
  { id: 906, name: "Sprigatito", types: ["Grass"], gen: 9 },
  { id: 909, name: "Fuecoco", types: ["Fire"], gen: 9 },
  { id: 912, name: "Quaxly", types: ["Water"], gen: 9 },
  { id: 936, name: "Armarouge", types: ["Fire", "Psychic"], gen: 9 },
  { id: 937, name: "Ceruledge", types: ["Fire", "Ghost"], gen: 9 },
  { id: 959, name: "Tinkaton", types: ["Fairy", "Steel"], gen: 9 },
  { id: 1007, name: "Koraidon", types: ["Fighting", "Dragon"], gen: 9 },
  { id: 1008, name: "Miraidon", types: ["Electric", "Dragon"], gen: 9 },
  { id: 1017, name: "Ogerpon", types: ["Grass"], gen: 9 },
  { id: 1024, name: "Terapagos", types: ["Normal"], gen: 9 }
];

// Key Characters Index
const KEY_CHARACTERS = [
  { id: "red", name: "Red", role: "Champion / Living Legend", region: "Kanto", desc: "The quiet, legendary Champion from Pallet Town." },
  { id: "blue", name: "Blue (Oak)", role: "Rival / Viridian Gym Leader", region: "Kanto", desc: "Grandson of Prof. Oak and former Kanto Champion." },
  { id: "oak", name: "Professor Oak", role: "Resident Professor", region: "Kanto", desc: "The legendary Pokémon researcher who created the Pokédex." },
  { id: "brock", name: "Brock", role: "Pewter Gym Leader", region: "Kanto", desc: "Rock-type Gym Leader and aspiring Pokémon Doctor." },
  { id: "misty", name: "Misty", role: "Cerulean Gym Leader", region: "Kanto", desc: "Water-type Gym Leader known as the Tomboyish Mermaid." },
  { id: "sabrina", name: "Sabrina", role: "Saffron Gym Leader", region: "Kanto", desc: "Psychic-type Gym Leader with formidable telepathic powers." },
  { id: "giovanni", name: "Giovanni", role: "Team Rocket Leader", region: "Kanto", desc: "Ruthless boss of Team Rocket and former Viridian Gym Leader." },
  { id: "cynthia", name: "Cynthia", role: "Sinnoh Champion", region: "Sinnoh", desc: "Sinnoh's formidable, elegant Champion and mythologist." },
  { id: "steven", name: "Steven Stone", role: "Hoenn Champion", region: "Hoenn", desc: "Collector of rare stones and Hoenn's master trainer." },
  { id: "lance", name: "Lance", role: "Johto Champion", region: "Johto/Kanto", desc: "Dragon Master and leader of the Indigo Elite Four." },
  { id: "leon", name: "Leon", role: "Galar Champion", region: "Galar", desc: "Unbeaten Galar Champion known for his Gigantamax Charizard." },
  { id: "geeta", name: "Geeta", role: "Top Champion", region: "Paldea", desc: "La Primera, chairwoman of the Paldea Pokémon League." },
  { id: "nemona", name: "Nemona", role: "Rival Champion", region: "Paldea", desc: "Energetic Champion-rank rival and battle enthusiast." },
  { id: "kukui", name: "Prof. Kukui", role: "Alola Professor", region: "Alola", desc: "Researcher of moves and founder of the Alola League." }
];

export default function GlobalSearchBar({
  isLightTheme,
  onSelectPokemonById,
  onSelectRegion,
  setActivePage,
}: GlobalSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Global hotkey trigger (ctrl+k / cmd+k)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const getArtwork = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  // Filter Search Results
  const results: GlobalSearchResult[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Search Pokémon
    POPULAR_POKEMON_SEARCH_LIST.forEach((pkmn) => {
      const matchName = pkmn.name.toLowerCase().includes(q);
      const matchId = pkmn.id.toString() === q || `#${pkmn.id}`.includes(q);
      const matchType = pkmn.types.some((t) => t.toLowerCase().includes(q));

      if (matchName || matchId || matchType) {
        results.push({
          id: `pokemon-${pkmn.id}`,
          title: pkmn.name,
          subtitle: `#${pkmn.id.toString().padStart(4, "0")} · Gen ${pkmn.gen} · ${pkmn.types.join("/")} Type`,
          category: "pokemon",
          categoryLabel: "Pokémon",
          badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
          icon: <Sparkles className="w-4 h-4 text-red-400" />,
          imageUrl: getArtwork(pkmn.id),
          action: () => {
            onSelectPokemonById(pkmn.id);
            setIsOpen(false);
          },
        });
      }
    });

    // 2. Search Regions
    REGIONS_DATA.forEach((reg) => {
      const matchName = reg.name.toLowerCase().includes(q);
      const matchNative = reg.nativeName.toLowerCase().includes(q);
      const matchProf = reg.professor ? reg.professor.toLowerCase().includes(q) : false;
      const matchChamp = reg.champion ? reg.champion.toLowerCase().includes(q) : false;
      const matchDesc = reg.description.toLowerCase().includes(q);

      if (matchName || matchNative || matchProf || matchChamp || matchDesc) {
        results.push({
          id: `region-${reg.id}`,
          title: `${reg.name} Region`,
          subtitle: `Gen ${reg.generationIndex} · Prof. ${reg.professor || "Oak"} · Champion ${reg.champion || "League"}`,
          category: "region",
          categoryLabel: "Region",
          badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
          icon: <Globe className="w-4 h-4 text-emerald-400" />,
          imageUrl: getArtwork(reg.id === "kanto" ? 150 : reg.id === "johto" ? 250 : reg.id === "hoenn" ? 384 : reg.id === "sinnoh" ? 487 : reg.id === "unova" ? 644 : reg.id === "kalos" ? 716 : reg.id === "alola" ? 791 : reg.id === "galar" ? 888 : reg.id === "hisui" ? 493 : 1008),
          action: () => {
            onSelectRegion(reg);
            setActivePage("regions");
            setIsOpen(false);
          },
        });
      }
    });

    // 3. Search Timelines / Generations
    GENERATIONS_DATA.forEach((gen) => {
      const matchName = gen.name.toLowerCase().includes(q);
      const matchRoman = gen.romanName.toLowerCase().includes(q);
      const matchYear = gen.releaseYear.toString().includes(q);
      const matchFeatures = gen.keyFeatures.some((f) => f.toLowerCase().includes(q));

      if (matchName || matchRoman || matchYear || matchFeatures) {
        results.push({
          id: `timeline-${gen.id}`,
          title: `${gen.romanName}: ${gen.name}`,
          subtitle: `Released ${gen.releaseYear} on ${gen.platform} · ${gen.count} species`,
          category: "timeline",
          categoryLabel: "Timeline / Gen",
          badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          icon: <Calendar className="w-4 h-4 text-amber-400" />,
          action: () => {
            setActivePage("timeline");
            setIsOpen(false);
          },
        });
      }
    });

    // 4. Search Key Characters
    KEY_CHARACTERS.forEach((char) => {
      const matchName = char.name.toLowerCase().includes(q);
      const matchRole = char.role.toLowerCase().includes(q);
      const matchReg = char.region.toLowerCase().includes(q);

      if (matchName || matchRole || matchReg) {
        results.push({
          id: `char-${char.id}`,
          title: char.name,
          subtitle: `${char.role} · ${char.region} Region`,
          category: "character",
          categoryLabel: "Character",
          badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
          icon: <Users className="w-4 h-4 text-purple-400" />,
          action: () => {
            setActivePage("characters");
            setIsOpen(false);
          },
        });
      }
    });

    // 5. Search Landmarks & Map Nodes
    Object.entries(REGIONAL_MAPS).forEach(([regId, nodes]) => {
      nodes.forEach((node) => {
        const matchName = node.name.toLowerCase().includes(q);
        const matchDesc = node.description.toLowerCase().includes(q);

        if (matchName || matchDesc) {
          const regionObj = REGIONS_DATA.find((r) => r.id === regId);
          results.push({
            id: `landmark-${node.id}`,
            title: node.name,
            subtitle: `${node.type.toUpperCase()} · ${regId.toUpperCase()} Region`,
            category: "landmark",
            categoryLabel: "Landmark",
            badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
            icon: <MapPin className="w-4 h-4 text-cyan-400" />,
            action: () => {
              if (regionObj) {
                onSelectRegion(regionObj);
              }
              setActivePage("regions");
              setIsOpen(false);
            },
          });
        }
      });
    });
  }

  return (
    <>
      {/* Search Bar Trigger Button placed right next to About section */}
      <div className="relative flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className={`w-32 sm:w-40 md:w-48 px-3.5 py-1.5 md:py-2 rounded-xl border text-xs font-medium flex items-center justify-between gap-2 cursor-pointer transition-all duration-200 group ${
            isLightTheme
              ? "bg-slate-100/80 hover:bg-slate-200/80 border-slate-300/40 text-slate-700 hover:text-slate-900 shadow-sm"
              : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
          }`}
          title="Search Pokémon, Regions, Timelines, Characters"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Search className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="font-sans truncate text-slate-400 group-hover:text-slate-300 transition-colors">Search...</span>
          </div>
        </button>
      </div>

      {/* Fullsite Command Palette Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          {/* Backdrop dismiss */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div
            className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col z-10 transition-all ${
              isLightTheme
                ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-900 shadow-slate-900/20"
                : "bg-[#0C0D10] border-white/10 text-white shadow-black/80"
            }`}
          >
            {/* Input Header */}
            <div className={`p-4 border-b flex items-center gap-3 ${
              isLightTheme ? "border-slate-200/80 bg-white" : "border-white/5 bg-white/3"
            }`}>
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Pokémon, Regions, Timelines, Gym Leaders, Landmarks..."
                className={`w-full text-sm md:text-base font-medium bg-transparent focus:outline-none placeholder-slate-400 ${
                  isLightTheme ? "text-slate-900" : "text-white"
                }`}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                  title="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-xl border cursor-pointer transition-colors ${
                  isLightTheme
                    ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
                title="Close search (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Live Search Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1 scrollbar-none">
              {query.trim().length === 0 ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto border border-blue-500/20">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className={`font-display font-black text-sm uppercase ${isLightTheme ? "text-slate-800" : "text-white"}`}>
                      Universal Website Search
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Search across all Pokémon species, regions, timeline release history, characters, gym leaders, and landmarks.
                    </p>
                  </div>

                  {/* Quick Tags Suggestions */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mr-1">Popular:</span>
                    {["Charizard", "Kanto", "Gen III", "Cynthia", "Mewtwo", "Paldea", "Pikachu", "Saffron City"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border cursor-pointer transition-all ${
                          isLightTheme
                            ? "bg-white hover:bg-slate-100 border-slate-200 text-slate-700"
                            : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-1">
                  <div className="px-3 py-1.5 flex items-center justify-between text-[10px] font-mono font-bold uppercase text-slate-400">
                    <span>Found {results.length} Matches</span>
                    <span>Click or press enter to inspect</span>
                  </div>

                  {results.map((res) => (
                    <div
                      key={res.id}
                      onClick={res.action}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between group ${
                        isLightTheme
                          ? "bg-white hover:bg-blue-50/60 border-slate-200/80 hover:border-blue-400 shadow-sm"
                          : "bg-white/3 hover:bg-blue-500/10 border-white/5 hover:border-blue-500/30"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {res.imageUrl ? (
                          <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 p-1 flex items-center justify-center shrink-0">
                            <img src={res.imageUrl} alt={res.title} className="w-8 h-8 object-contain" />
                          </div>
                        ) : (
                          <div className={`p-2.5 rounded-xl border shrink-0 ${res.badgeColor}`}>
                            {res.icon}
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className={`font-display font-bold text-sm truncate ${
                              isLightTheme ? "text-slate-900" : "text-white"
                            }`}>
                              {res.title}
                            </h5>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase ${res.badgeColor}`}>
                              {res.categoryLabel}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            {res.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-slate-400 text-xs font-mono">
                  No matches found for <span className="text-blue-400 font-bold">"{query}"</span>. Try searching for a Pokémon name, region, or generation!
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className={`px-4 py-2.5 border-t text-[10px] font-mono text-slate-400 flex items-center justify-between ${
              isLightTheme ? "border-slate-200 bg-slate-50" : "border-white/5 bg-black/40"
            }`}>
              <span>Dexoria Universal Search Engine</span>
              <span className="flex items-center gap-2">
                <span>Navigate: ↑ ↓</span>
                <span>Select: ↵</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
