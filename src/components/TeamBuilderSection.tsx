import React, { useState, useEffect, useRef } from "react";
import { 
  RefreshCw, Sparkles, Lock, Unlock, Heart, Info, Sword, Shield, Zap, 
  BarChart3, Check, Copy, AlertTriangle, Play, HelpCircle, Save 
} from "lucide-react";
import { getPokemonColor } from "../data/pokemonGenerations";

interface TeamMember {
  id: number;
  name: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
    total: number;
  };
  isLocked?: boolean;
}

interface TeamBuilderSectionProps {
  isLightTheme: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onSelectPokemonById: (id: number) => void;
}

const TYPE_CHART: Record<string, { strengths: string[]; weaknesses: string[]; resistances: string[]; immunities: string[] }> = {
  normal: { strengths: [], weaknesses: ["fighting"], resistances: [], immunities: ["ghost"] },
  fire: { strengths: ["grass", "ice", "bug", "steel"], weaknesses: ["water", "ground", "rock"], resistances: ["fire", "grass", "ice", "bug", "steel", "fairy"], immunities: [] },
  water: { strengths: ["fire", "ground", "rock"], weaknesses: ["grass", "electric"], resistances: ["fire", "water", "ice", "steel"], immunities: [] },
  grass: { strengths: ["water", "ground", "rock"], weaknesses: ["fire", "ice", "poison", "flying", "bug"], resistances: ["water", "grass", "electric", "ground"], immunities: [] },
  electric: { strengths: ["water", "flying"], weaknesses: ["ground"], resistances: ["electric", "flying", "steel"], immunities: [] },
  ice: { strengths: ["grass", "ground", "flying", "dragon"], weaknesses: ["fire", "fighting", "rock", "steel"], resistances: ["ice"], immunities: [] },
  fighting: { strengths: ["normal", "ice", "rock", "dark", "steel"], weaknesses: ["flying", "psychic", "fairy"], resistances: ["bug", "rock", "dark"], immunities: [] },
  poison: { strengths: ["grass", "fairy"], weaknesses: ["ground", "psychic"], resistances: ["grass", "fighting", "poison", "bug", "fairy"], immunities: [] },
  ground: { strengths: ["fire", "electric", "poison", "rock", "steel"], weaknesses: ["water", "grass", "ice"], resistances: ["poison", "rock"], immunities: ["electric"] },
  flying: { strengths: ["grass", "fighting", "bug"], weaknesses: ["electric", "ice", "rock"], resistances: ["grass", "fighting", "bug"], immunities: ["ground"] },
  psychic: { strengths: ["fighting", "poison"], weaknesses: ["bug", "ghost", "dark"], resistances: ["fighting", "psychic"], immunities: [] },
  bug: { strengths: ["grass", "psychic", "dark"], weaknesses: ["fire", "flying", "rock"], resistances: ["grass", "fighting", "ground"], immunities: [] },
  rock: { strengths: ["fire", "ice", "flying", "bug"], weaknesses: ["water", "grass", "fighting", "ground", "steel"], resistances: ["normal", "fire", "poison", "flying"], immunities: [] },
  ghost: { strengths: ["psychic", "ghost"], weaknesses: ["ghost", "dark"], resistances: ["poison", "bug"], immunities: ["normal", "fighting"] },
  dragon: { strengths: ["dragon"], weaknesses: ["ice", "dragon", "fairy"], resistances: ["fire", "water", "grass", "electric"], immunities: [] },
  steel: { strengths: ["ice", "rock", "fairy"], weaknesses: ["fire", "fighting", "ground"], resistances: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"], immunities: ["poison"] },
  dark: { strengths: ["psychic", "ghost"], weaknesses: ["fighting", "bug", "fairy"], resistances: ["ghost", "dark"], immunities: ["psychic"] },
  fairy: { strengths: ["fighting", "dragon", "dark"], weaknesses: ["poison", "steel"], resistances: ["fighting", "bug", "dark"], immunities: ["dragon"] }
};

// Popular category pools (Gen 1-5 for high compatibility with official artwork assets)
const LEGENDARY_IDS = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649];
const SWEEPER_IDS = [6, 94, 65, 149, 212, 448, 445, 373, 571, 637, 196, 135, 398, 461, 257, 254, 130, 248, 282, 330, 466, 475, 530, 555, 560, 612];
const TANK_IDS = [9, 80, 91, 112, 131, 143, 197, 205, 208, 227, 230, 232, 242, 306, 350, 365, 376, 411, 464, 465, 468, 472, 477, 563, 589, 598];
const STARTER_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 152, 153, 154, 155, 156, 157, 158, 159, 160, 252, 253, 254, 255, 256, 257, 258, 259, 260, 387, 388, 389, 390, 391, 392, 393, 394, 395, 495, 496, 497, 498, 499, 500, 501, 502, 503];
const EEVEELUTION_IDS = [133, 134, 135, 136, 196, 197, 470, 471];
const FOSSIL_IDS = [138, 139, 140, 141, 142, 345, 346, 347, 348, 408, 409, 410, 411, 564, 565, 566, 567];
const CUTE_IDS = [25, 26, 35, 36, 39, 40, 52, 54, 133, 175, 176, 172, 173, 174, 183, 184, 216, 231, 238, 239, 240, 251, 258, 300, 301, 298, 311, 312, 351, 358, 385, 490, 492, 494, 587];
const DRAGON_IDS = [147, 148, 149, 230, 329, 330, 334, 371, 372, 373, 380, 381, 384, 443, 444, 445, 483, 484, 487, 610, 611, 612, 621, 633, 634, 635, 643, 644, 646];
const TRICKSTER_IDS = [94, 65, 97, 200, 197, 196, 302, 354, 477, 478, 479, 571, 570, 563, 579, 609];

export default function TeamBuilderSection({ 
  isLightTheme, 
  favorites, 
  toggleFavorite, 
  onSelectPokemonById 
}: TeamBuilderSectionProps) {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [teamLoading, setTeamLoading] = useState(false);
  const [teamSize, setTeamSize] = useState<number>(6);
  const [teamTheme, setTeamTheme] = useState<string>("balanced");
  const [selectedMonotype, setSelectedMonotype] = useState<string>("fire");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [maxTypesLimit, setMaxTypesLimit] = useState<string>("any");
  
  const [teamName, setTeamName] = useState<string>("Alpha Roster");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const typeCache = useRef<Record<string, number[]>>({});

  // Fetch helper to get Pokemon IDs for a specific element type
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
          .filter((id: number) => id && id <= 649); // limit to Gen 1-5 for artwork consistency
        typeCache.current[type] = ids;
        return ids;
      }
    } catch (err) {
      console.error("Error fetching type lists:", err);
    }
    return [];
  };

  // Generate a fully specified single random member
  const generateSingleMember = async (excludeIds: number[] = []): Promise<TeamMember | null> => {
    let pool: number[] = [];

    if (teamTheme === "balanced") {
      pool = Array.from({ length: 649 }, (_, i) => i + 1);
    } else if (teamTheme === "legendaries") {
      pool = [...LEGENDARY_IDS];
    } else if (teamTheme === "stats-sweeper") {
      pool = [...SWEEPER_IDS];
    } else if (teamTheme === "stats-tank") {
      pool = [...TANK_IDS];
    } else if (teamTheme === "starters") {
      pool = [...STARTER_IDS];
    } else if (teamTheme === "eeveelution") {
      pool = [...EEVEELUTION_IDS];
    } else if (teamTheme === "fossil") {
      pool = [...FOSSIL_IDS];
    } else if (teamTheme === "cute") {
      pool = [...CUTE_IDS];
    } else if (teamTheme === "dragons") {
      pool = [...DRAGON_IDS];
    } else if (teamTheme === "trickster") {
      pool = [...TRICKSTER_IDS];
    } else if (teamTheme === "monotype") {
      pool = await getPokemonIdsForType(selectedMonotype);
    }

    // Filter out already present ids
    pool = pool.filter(id => !excludeIds.includes(id));

    // Filter by type filters if requested
    if (selectedTypes.length > 0 && teamTheme !== "monotype") {
      const typePools = await Promise.all(selectedTypes.map(t => getPokemonIdsForType(t)));
      const allowedIds = new Set<number>(typePools.flat());
      const filteredPool = pool.filter(id => allowedIds.has(id));
      if (filteredPool.length > 0) {
        pool = filteredPool;
      }
    }

    if (pool.length === 0) {
      pool = Array.from({ length: 649 }, (_, i) => i + 1).filter(id => !excludeIds.includes(id));
    }

    // Pick random ID
    const randomId = pool[Math.floor(Math.random() * pool.length)];
    if (!randomId) return null;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      if (!res.ok) return null;
      const data = await res.json();
      
      const statsObj = {
        hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 60,
        attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 60,
        defense: data.stats.find((s: any) => s.stat.name === "defense")?.base_stat || 60,
        spAtk: data.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat || 60,
        spDef: data.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat || 60,
        speed: data.stats.find((s: any) => s.stat.name === "speed")?.base_stat || 60,
        total: 0
      };
      statsObj.total = statsObj.hp + statsObj.attack + statsObj.defense + statsObj.spAtk + statsObj.spDef + statsObj.speed;

      return {
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        stats: statsObj,
        isLocked: false
      };
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  // Generate the full team based on current constraints (respecting active locks)
  const generateTeam = async () => {
    try {
      setTeamLoading(true);
      setIsSaved(false);

      // Preserve currently locked members
      const preservedTeam = [...team].slice(0, teamSize);
      const lockedMembers = preservedTeam.filter(m => m.isLocked);
      const lockedIds = lockedMembers.map(m => m.id);

      // Gather initial pool based on active settings
      let basePool: number[] = [];
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
        basePool = await getPokemonIdsForType(selectedMonotype);
      }

      // Filter out locked ones
      basePool = basePool.filter(id => !lockedIds.includes(id));

      // Filter by type constraints
      if (selectedTypes.length > 0 && teamTheme !== "monotype") {
        const typePools = await Promise.all(selectedTypes.map(t => getPokemonIdsForType(t)));
        const allowedIds = new Set<number>(typePools.flat());
        const filteredPool = basePool.filter(id => allowedIds.has(id));
        if (filteredPool.length > 0) {
          basePool = filteredPool;
        }
      }

      if (basePool.length === 0) {
        basePool = Array.from({ length: 649 }, (_, i) => i + 1).filter(id => !lockedIds.includes(id));
      }

      // Shuffle pool
      const shuffled = [...basePool].sort(() => Math.random() - 0.5);
      const uniqueTypesInTeam = new Set<string>();
      
      // Load current locked types
      lockedMembers.forEach(m => m.types.forEach(t => uniqueTypesInTeam.add(t)));

      const activeList: TeamMember[] = [];
      let activeIndex = 0;

      // Build out full roster
      for (let i = 0; i < teamSize; i++) {
        const existingLock = preservedTeam[i];
        if (existingLock && existingLock.isLocked) {
          activeList.push(existingLock);
          continue;
        }

        // Search for a candidate that fits our unique types diversity limits if applicable
        let chosenCandidate: any = null;
        let attempts = 0;

        while (activeIndex < shuffled.length && attempts < 50) {
          const candidateId = shuffled[activeIndex];
          activeIndex++;
          attempts++;

          try {
            const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${candidateId}`);
            if (!r.ok) continue;
            const data = await r.json();
            const candTypes: string[] = data.types.map((t: any) => t.type.name);

            // Diversity Limit Checks
            if (maxTypesLimit !== "any") {
              const limitValue = parseInt(maxTypesLimit, 10);
              const tempUnion = new Set([...uniqueTypesInTeam, ...candTypes]);
              if (tempUnion.size > limitValue) {
                // Skips to preserve unique type ceiling constraints
                continue;
              }
            }

            // Candidate accepted
            candTypes.forEach(t => uniqueTypesInTeam.add(t));
            
            const statsObj = {
              hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 60,
              attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 60,
              defense: data.stats.find((s: any) => s.stat.name === "defense")?.base_stat || 60,
              spAtk: data.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat || 60,
              spDef: data.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat || 60,
              speed: data.stats.find((s: any) => s.stat.name === "speed")?.base_stat || 60,
              total: 0
            };
            statsObj.total = statsObj.hp + statsObj.attack + statsObj.defense + statsObj.spAtk + statsObj.spDef + statsObj.speed;

            chosenCandidate = {
              id: data.id,
              name: data.name,
              types: candTypes,
              stats: statsObj,
              isLocked: false
            };
            break;
          } catch (err) {
            console.error(err);
          }
        }

        // If candidate found, push it. Otherwise pull next without constraints as fallback
        if (chosenCandidate) {
          activeList.push(chosenCandidate);
        } else if (activeIndex < shuffled.length) {
          // Fallback fetch next directly
          const fallbackId = shuffled[activeIndex];
          activeIndex++;
          try {
            const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${fallbackId}`);
            if (r.ok) {
              const data = await r.json();
              const candTypes: string[] = data.types.map((t: any) => t.type.name);
              const statsObj = {
                hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 60,
                attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 60,
                defense: data.stats.find((s: any) => s.stat.name === "defense")?.base_stat || 60,
                spAtk: data.stats.find((s: any) => s.stat.name === "special-attack")?.base_stat || 60,
                spDef: data.stats.find((s: any) => s.stat.name === "special-defense")?.base_stat || 60,
                speed: data.stats.find((s: any) => s.stat.name === "speed")?.base_stat || 60,
                total: 0
              };
              statsObj.total = statsObj.hp + statsObj.attack + statsObj.defense + statsObj.spAtk + statsObj.spDef + statsObj.speed;

              activeList.push({
                id: data.id,
                name: data.name,
                types: candTypes,
                stats: statsObj,
                isLocked: false
              });
            }
          } catch (err) {
            console.error(err);
          }
        }
      }

      setTeam(activeList.slice(0, teamSize));
    } catch (err) {
      console.error(err);
    } finally {
      setTeamLoading(false);
    }
  };

  // Re-roll only a single selected member card
  const handleRerollSingle = async (index: number) => {
    if (teamLoading) return;
    const currentMember = team[index];
    if (currentMember && currentMember.isLocked) return;

    // Set temporary loading state on this slot by clearing it
    const copy = [...team];
    const excludeIds = team.map(m => m.id);

    // Fetch replacement
    const replacement = await generateSingleMember(excludeIds);
    if (replacement) {
      copy[index] = replacement;
      setTeam(copy);
      setIsSaved(false);
    }
  };

  // Toggle lock state on a specific member card
  const handleToggleLock = (index: number) => {
    const copy = [...team];
    if (copy[index]) {
      copy[index].isLocked = !copy[index].isLocked;
      setTeam(copy);
    }
  };

  // Load initial team on mount
  useEffect(() => {
    const savedTeam = localStorage.getItem("dexoria_active_team");
    if (savedTeam) {
      try {
        const parsed = JSON.parse(savedTeam);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTeam(parsed);
          setTeamSize(parsed.length);
          const savedName = localStorage.getItem("dexoria_active_team_name");
          if (savedName) setTeamName(savedName);
          return;
        }
      } catch (e) {
        console.error("Error reading saved team", e);
      }
    }
    generateTeam();
  }, [teamSize, teamTheme, selectedMonotype, selectedTypes, maxTypesLimit]);

  // Save custom team name & team config to LocalStorage
  const handleSaveTeam = () => {
    localStorage.setItem("dexoria_active_team", JSON.stringify(team));
    localStorage.setItem("dexoria_active_team_name", teamName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  // Copy structured Markdown/text of team squad list to clipboard
  const handleCopyTeam = () => {
    const lines = [
      `🛡️ POKÉMON TEAM: ${teamName.toUpperCase()} 🛡️`,
      `Theme: ${teamTheme.toUpperCase()}`,
      `---------------------------------------`
    ];
    
    team.forEach((p, idx) => {
      lines.push(`${idx + 1}. ${p.name.toUpperCase()} (ID: #${p.id})`);
      lines.push(`   Types: ${p.types.join(" / ").toUpperCase()}`);
      lines.push(`   Stats -> HP: ${p.stats.hp} | ATK: ${p.stats.attack} | DEF: ${p.stats.defense} | SPD: ${p.stats.speed} | TOTAL: ${p.stats.total}`);
      lines.push(``);
    });

    navigator.clipboard.writeText(lines.join("\n"));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Calculations for analytics metrics
  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  // Team wide metrics
  const totalBST = team.reduce((acc, curr) => acc + curr.stats.total, 0);
  const avgHP = Math.round(team.reduce((acc, curr) => acc + curr.stats.hp, 0) / (team.length || 1));
  const avgATK = Math.round(team.reduce((acc, curr) => acc + curr.stats.attack, 0) / (team.length || 1));
  const avgDEF = Math.round(team.reduce((acc, curr) => acc + curr.stats.defense, 0) / (team.length || 1));
  const avgSPD = Math.round(team.reduce((acc, curr) => acc + curr.stats.speed, 0) / (team.length || 1));
  const strongestMember = [...team].sort((a, b) => b.stats.total - a.stats.total)[0];

  // Calculate Cumulative Matchup coverage multipliers for the active roster
  const calculateTypeMatchups = () => {
    const totals: Record<string, number> = {};
    const keys = Object.keys(TYPE_CHART);
    
    // Set default multipliers
    keys.forEach(k => {
      totals[k] = 0;
    });

    if (team.length === 0) return { vulnerabilities: [], resistances: [] };

    // For each possible attacking element type
    keys.forEach((attackerType) => {
      let cumulativeMultiplier = 0;

      // Sum effectiveness multiplier for each member in the squad
      team.forEach((member) => {
        let memberMultiplier = 1.0;

        member.types.forEach((memberType) => {
          const typeRules = TYPE_CHART[memberType];
          if (typeRules) {
            if (typeRules.weaknesses.includes(attackerType)) {
              memberMultiplier *= 2.0;
            }
            if (typeRules.resistances.includes(attackerType)) {
              memberMultiplier *= 0.5;
            }
            if (typeRules.immunities.includes(attackerType)) {
              memberMultiplier *= 0.0;
            }
          }
        });

        cumulativeMultiplier += memberMultiplier;
      });

      // Average out across the squad
      totals[attackerType] = cumulativeMultiplier / team.length;
    });

    // Vulnerabilities (where average effectiveness is high)
    const vulnerabilities = Object.entries(totals)
      .filter(([_, mult]) => mult > 1.25)
      .sort((a, b) => b[1] - a[1])
      .map(([type]) => type);

    // Strong defences (where average effectiveness is very low)
    const resistances = Object.entries(totals)
      .filter(([_, mult]) => mult < 0.75)
      .sort((a, b) => a[1] - b[1])
      .map(([type]) => type);

    return { vulnerabilities, resistances };
  };

  const { vulnerabilities, resistances } = calculateTypeMatchups();

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8 animate-fade-in">
      
      {/* 1. Introductory Header with Sleek Glass Frame */}
      <div className={`p-6 md:p-8 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
        isLightTheme
          ? "bg-white/80 border-slate-300/40 text-slate-900 shadow-xl"
          : "bg-[#151516]/60 border-white/5 text-slate-100 shadow-2xl"
      }`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-widest inline-block mb-1">
              Active Battle Planner
            </span>
            <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-none">
              Synergy Squad Builder
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl leading-relaxed">
              Plan, evaluate, and lock down your favorite elements. Re-roll single slots to perfect your roster, and examine average stat coverages and defensive vulnerabilities in real-time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Custom Input Name Field */}
            <div className="relative">
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value.slice(0, 24))}
                placeholder="Name your team..."
                className={`pl-3 pr-8 py-2 rounded-xl text-xs font-bold border outline-none tracking-wide uppercase transition-all ${
                  isLightTheme
                    ? "bg-slate-50 border-slate-200 text-slate-800 focus:border-blue-500 focus:bg-white"
                    : "bg-white/5 border-white/5 text-slate-100 focus:border-blue-500 focus:bg-slate-900"
                }`}
              />
              <button 
                onClick={handleSaveTeam}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                title="Save Team config"
              >
                {isSaved ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Save className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Export Clipboard Action */}
            <button
              onClick={handleCopyTeam}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                isCopied
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-500"
                  : isLightTheme
                    ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
              }`}
              title="Copy team breakdown text"
            >
              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Strategy Config & Custom Diversity Parameters */}
      <div className={`p-6 rounded-3xl border transition-all ${
        isLightTheme
          ? "bg-white/60 border-slate-300/30 text-slate-900 shadow-md"
          : "bg-slate-950/40 border-white/5 text-slate-100 shadow-lg"
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Roster Size Selector */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Squad Size Limit
              </label>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((size) => (
                <button
                  key={size}
                  onClick={() => setTeamSize(size)}
                  className={`w-10 h-10 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    teamSize === size
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105 border border-blue-500"
                      : isLightTheme
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Theme specialty strategy selection */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Roster Strategy Theme
              </label>
            </div>
            <select
              value={teamTheme}
              onChange={(e) => {
                setTeamTheme(e.target.value);
                if (e.target.value === "monotype") {
                  setSelectedTypes([]);
                }
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold outline-none border cursor-pointer ${
                isLightTheme
                  ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                  : "bg-[#18181b] border-white/5 text-slate-100 focus:border-blue-500 focus:bg-[#09090b]"
              }`}
            >
              <option value="balanced">Balanced Synergy (Full Dex)</option>
              <option value="monotype">Specialist Monotype (Gym Leader style)</option>
              <option value="starters">Starters & Companions</option>
              <option value="eeveelution">Eeveelution deck</option>
              <option value="fossil">Fossil Prehistorics</option>
              <option value="cute">Baby & Cute Club</option>
              <option value="dragons">Dragon Overlords</option>
              <option value="trickster">Tricksters & Spooky Ghosts</option>
              <option value="legendaries">Legendaries Only</option>
              <option value="stats-sweeper">High-speed Sweepers</option>
              <option value="stats-tank">Defensive Bulwarks</option>
            </select>
          </div>

          {/* Unique Types Limit (Elemental Diversity constraints) */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Elemental Diversity Limit
              </label>
            </div>
            <select
              value={maxTypesLimit}
              onChange={(e) => setMaxTypesLimit(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold outline-none border cursor-pointer ${
                isLightTheme
                  ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                  : "bg-[#18181b] border-white/5 text-slate-100 focus:border-blue-500 focus:bg-[#09090b]"
              }`}
            >
              <option value="any">No Limits (Full Diversity)</option>
              <option value="1">Strict Monotype limit</option>
              <option value="2">Max 2 Distinct Types across team</option>
              <option value="3">Max 3 Distinct Types across team</option>
              <option value="4">Max 4 Distinct Types across team</option>
            </select>
          </div>
        </div>

        {/* Selected Elemental filters panel */}
        <div className="mt-6 pt-5 border-t border-slate-500/10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              {teamTheme === "monotype" ? "Specialty Element" : "Filter Allowed Elements"}
            </span>
            {selectedTypes.length > 0 && (
              <button
                onClick={() => setSelectedTypes([])}
                className="text-[10px] font-black text-red-500 hover:underline cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>

          {teamTheme === "monotype" ? (
            <div className="flex gap-2 flex-wrap">
              {["fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "steel", "fairy", "normal"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedMonotype(type)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer border`}
                  style={{
                    backgroundColor: selectedMonotype === type ? getPokemonColor(type) : "transparent",
                    color: selectedMonotype === type ? "#fff" : getPokemonColor(type),
                    borderColor: getPokemonColor(type),
                    boxShadow: selectedMonotype === type ? `0 4px 12px ${getPokemonColor(type)}30` : "none",
                    opacity: selectedMonotype === type ? 1 : 0.65
                  }}
                >
                  {type}
                </button>
              ))}
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
                      isActive ? "scale-102 font-black" : "opacity-60 hover:opacity-100"
                    }`}
                    style={{
                      backgroundColor: isActive ? getPokemonColor(type) : "transparent",
                      color: isActive ? "#fff" : getPokemonColor(type),
                      borderColor: getPokemonColor(type),
                      boxShadow: isActive ? `0 4px 10px ${getPokemonColor(type)}20` : "none"
                    }}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 3. The Roster Grid Layout with Polished Artworks & Individual Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-extrabold text-lg md:text-xl flex items-center gap-2">
              <span>Roster Members</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                isLightTheme ? "bg-blue-100 text-blue-700" : "bg-blue-500/10 text-blue-400"
              }`}>
                {team.filter(m => m.isLocked).length} Locked
              </span>
            </h3>
            <p className="text-[11px] text-slate-500">
              Click individual padlocks to preserve key candidates while re-assembling the rest.
            </p>
          </div>

          <button
            onClick={generateTeam}
            disabled={teamLoading}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${teamLoading ? "animate-spin" : ""}`} />
            <span>Re-assemble Squad</span>
          </button>
        </div>

        {teamLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: teamSize }).map((_, i) => (
              <div
                key={i}
                className={`rounded-3xl h-64 animate-pulse ${
                  isLightTheme ? "bg-slate-200/50" : "bg-slate-900/50"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((poke, index) => {
              const primaryTypeColor = getPokemonColor(poke.types[0] || "normal");
              
              return (
                <div
                  key={`${poke.id}-${index}`}
                  className={`group rounded-3xl border relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                    isLightTheme
                      ? "bg-white border-slate-200 text-slate-800"
                      : "bg-[#0f0f10] border-white/5 text-slate-200"
                  }`}
                  style={{
                    borderLeft: `5px solid ${primaryTypeColor}`
                  }}
                >
                  {/* Decorative glowing gradient behind official artwork */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] pointer-events-none rounded-full blur-2xl" 
                    style={{ backgroundColor: primaryTypeColor }}
                  />

                  {/* Top Header Card Info */}
                  <div className="p-4 flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 font-bold block">
                        #{poke.id.toString().padStart(4, "0")}
                      </span>
                      <h4 
                        onClick={() => onSelectPokemonById(poke.id)}
                        className="font-display font-extrabold text-lg capitalize tracking-tight hover:text-blue-500 cursor-pointer"
                      >
                        {poke.name.replace("-", " ")}
                      </h4>
                      <div className="flex gap-1">
                        {poke.types.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-black uppercase px-2 py-0.5 rounded text-white tracking-wider"
                            style={{ backgroundColor: getPokemonColor(t) }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Lock Controls / Individual actions */}
                    <div className="flex items-center gap-1">
                      {/* Favorite star */}
                      <button
                        onClick={() => toggleFavorite(poke.id)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          favorites.includes(poke.id)
                            ? "bg-rose-500/10 border-rose-500/20 text-rose-500"
                            : isLightTheme
                              ? "bg-slate-50 border-slate-150 text-slate-400 hover:text-rose-500"
                              : "bg-white/5 border-white/5 text-slate-400 hover:text-rose-500"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${favorites.includes(poke.id) ? "fill-current" : ""}`} />
                      </button>

                      {/* Lock status toggle */}
                      <button
                        onClick={() => handleToggleLock(index)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          poke.isLocked
                            ? "bg-amber-500/10 border-amber-500/20 text-amber-500"
                            : isLightTheme
                              ? "bg-slate-50 border-slate-150 text-slate-400 hover:text-slate-800"
                              : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-100"
                        }`}
                        title={poke.isLocked ? "Unlock slot" : "Lock slot"}
                      >
                        {poke.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      </button>

                      {/* Reroll slot button */}
                      <button
                        onClick={() => handleRerollSingle(index)}
                        disabled={poke.isLocked}
                        className={`p-1.5 rounded-lg border transition-all ${
                          poke.isLocked
                            ? "opacity-30 cursor-not-allowed"
                            : isLightTheme
                              ? "bg-slate-50 border-slate-150 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                              : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                        }`}
                        title="Re-roll this Pokémon"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Artwork Showcase & Combat Stats Grid */}
                  <div className="px-4 pb-4 grid grid-cols-5 gap-3 items-center">
                    {/* Visual Model */}
                    <div className="col-span-2 flex flex-col items-center justify-center relative">
                      <div className="absolute w-14 h-14 rounded-full bg-slate-500/5 blur-xl group-hover:scale-125 transition-transform" />
                      <img
                        src={getArtworkUrl(poke.id)}
                        alt={poke.name}
                        className="w-18 h-18 md:w-20 md:h-20 object-contain relative z-10 filter drop-shadow group-hover:scale-110 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Stats panel representation */}
                    <div className="col-span-3 space-y-1.5 text-left">
                      {/* HP */}
                      <div>
                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                          <span>HP</span>
                          <span>{poke.stats.hp}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-500/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.min(100, (poke.stats.hp / 160) * 100)}%` }} />
                        </div>
                      </div>

                      {/* Attack */}
                      <div>
                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                          <span>Attack</span>
                          <span>{poke.stats.attack}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-500/10 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, (poke.stats.attack / 160) * 100)}%` }} />
                        </div>
                      </div>

                      {/* Defense */}
                      <div>
                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                          <span>Defense</span>
                          <span>{poke.stats.defense}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-500/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, (poke.stats.defense / 160) * 100)}%` }} />
                        </div>
                      </div>

                      {/* Speed */}
                      <div>
                        <div className="flex justify-between text-[9px] font-bold text-slate-400">
                          <span>Speed</span>
                          <span>{poke.stats.speed}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-500/10 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, (poke.stats.speed / 160) * 100)}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Base Stat Total Footer badge */}
                  <div className={`px-4 py-2 border-t flex justify-between items-center text-[10px] font-bold ${
                    isLightTheme ? "bg-slate-50/50 border-slate-100 text-slate-500" : "bg-[#141415]/40 border-white/5 text-slate-400"
                  }`}>
                    <span>BST Rank</span>
                    <span className={`px-1.5 py-0.5 rounded-md ${
                      poke.stats.total >= 580 
                        ? "bg-amber-500/10 text-amber-500" 
                        : poke.stats.total >= 500 
                          ? "bg-blue-500/10 text-blue-500" 
                          : "text-slate-400"
                    }`}>
                      {poke.stats.total} Total
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. Squad Analytics Panel (Matchups & Synergy Metrics) */}
      {team.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* A. Statistics Overview */}
          <div className={`p-6 rounded-3xl border ${
            isLightTheme
              ? "bg-white border-slate-200 text-slate-800 shadow-md"
              : "bg-[#0f0f10] border-white/5 text-slate-200 shadow-lg"
          }`}>
            <h4 className="font-display font-extrabold text-base mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span>Squad Base-Metrics</span>
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-100" : "bg-white/3 border-white/5"}`}>
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Total Team Stat Rating</span>
                <span className="text-2xl font-black text-blue-500">{totalBST} <span className="text-xs font-semibold text-slate-500">BST</span></span>
              </div>

              <div className={`p-4 rounded-2xl border ${isLightTheme ? "bg-slate-50 border-slate-100" : "bg-white/3 border-white/5"}`}>
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Strongest Vanguard</span>
                <span className="text-sm font-extrabold text-emerald-500 capitalize block truncate mt-1">
                  {strongestMember?.name.replace("-", " ")}
                </span>
                <span className="text-[10px] font-bold text-slate-500">BST {strongestMember?.stats.total}</span>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Roster Mean Coverages</h5>
              
              {/* Average Stats Bars */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="flex items-center gap-1"><Info className="w-3 h-3 text-emerald-500" /> HP Mean</span>
                    <span>{avgHP}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.min(100, (avgHP / 150) * 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="flex items-center gap-1"><Sword className="w-3 h-3 text-orange-500" /> Attack Mean</span>
                    <span>{avgATK}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, (avgATK / 150) * 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-blue-500" /> Defense Mean</span>
                    <span>{avgDEF}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, (avgDEF / 150) * 100)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-500" /> Speed Mean</span>
                    <span>{avgSPD}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, (avgSPD / 150) * 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B. Elemental Weaknesses & Synergies Analysis */}
          <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
            isLightTheme
              ? "bg-white border-slate-200 text-slate-800 shadow-md"
              : "bg-[#0f0f10] border-white/5 text-slate-200 shadow-lg"
          }`}>
            <div>
              <h4 className="font-display font-extrabold text-base mb-3.5 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Elemental Matchup Synergy</span>
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Evaluating cumulative type defenses. We cross-reference defensive resistances and weaknesses of the entire roster.
              </p>

              {/* Team Vulnerabilities */}
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-500 block">
                  ⚠️ Team Vulnerabilities (Threats)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {vulnerabilities.length > 0 ? (
                    vulnerabilities.map((type) => (
                      <span
                        key={type}
                        className="text-[9px] font-black uppercase px-2.5 py-1 rounded text-white shadow-sm"
                        style={{ backgroundColor: getPokemonColor(type) }}
                      >
                        {type}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">None! Incredible defensive coverage! 🌟</span>
                  )}
                </div>
              </div>

              {/* Team Resistances */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500 block">
                  🛡️ Team Defenses (Resistances)
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {resistances.length > 0 ? (
                    resistances.map((type) => (
                      <span
                        key={type}
                        className="text-[9px] font-black uppercase px-2.5 py-1 rounded text-white shadow-sm"
                        style={{ backgroundColor: getPokemonColor(type) }}
                      >
                        {type}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">No notable collective resistances.</span>
                  )}
                </div>
              </div>
            </div>

            <div className={`mt-4 p-3 rounded-2xl text-[11px] leading-relaxed flex items-center gap-2 ${
              isLightTheme ? "bg-blue-50/50 text-blue-800 border border-blue-100" : "bg-blue-950/10 text-blue-300 border border-blue-500/10"
            }`}>
              <Info className="w-4 h-4 text-blue-500 shrink-0" />
              <span>
                To fix threats, lock core defenders (e.g. Steel/Water types) and re-assemble remaining slots!
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
