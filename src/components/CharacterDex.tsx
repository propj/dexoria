import React, { useState, useMemo } from "react";
import { 
  Search, 
  X, 
  Users, 
  Award, 
  Zap, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Activity, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Sword,
  Shield,
  Briefcase,
  History,
  MessageSquare,
  Filter,
  RotateCcw,
  ArrowUpDown,
  SlidersHorizontal
} from "lucide-react";
import { IMPORTED_CHARACTERS, ImportedCharacter } from "../data/importedCharacters";

interface CharacterDexProps {
  isLightTheme: boolean;
}

export default function CharacterDex({ isLightTheme }: CharacterDexProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState<"id" | "name" | "skill" | "strength" | "intelligence">("id");
  const [sortAsc, setSortAsc] = useState(true);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [activeCharacterId, setActiveCharacterId] = useState<number | null>(null);
  const [modalTab, setModalTab] = useState<"bio" | "stats" | "team" | "timeline">("bio");

  const availableRegions = useMemo(() => {
    const set = new Set<string>();
    IMPORTED_CHARACTERS.forEach(c => {
      if (c.region) set.add(c.region);
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Compute counts per region
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: IMPORTED_CHARACTERS.length };
    IMPORTED_CHARACTERS.forEach(c => {
      if (c.region) {
        counts[c.region] = (counts[c.region] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Get unique roles for filtering (excluding complex combinations, simple mapping)
  const roles = useMemo(() => {
    const allRolesSet = new Set<string>();
    IMPORTED_CHARACTERS.forEach(c => {
      const parts = c.role.split("/").map(r => r.trim());
      parts.forEach(p => {
        if (p.includes("Gym Leader")) allRolesSet.add("Gym Leader");
        else if (p.includes("Champion")) allRolesSet.add("Champion");
        else if (p.includes("Protagonist")) allRolesSet.add("Protagonist");
        else if (p.includes("Rival")) allRolesSet.add("Rival");
        else if (p.includes("Professor")) allRolesSet.add("Professor");
        else if (p.includes("Agent") || p.includes("Boss") || p.includes("Rocket")) allRolesSet.add("Team Rocket");
        else if (p.includes("Nurse") || p.includes("Officer") || p.includes("Warden")) allRolesSet.add("Service Provider");
        else allRolesSet.add(p);
      });
    });
    return ["All", ...Array.from(allRolesSet).filter(r => r.length > 0)];
  }, []);

  // Compute counts per role
  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = { All: IMPORTED_CHARACTERS.length };
    IMPORTED_CHARACTERS.forEach(c => {
      roles.forEach(r => {
        if (r === "All") return;
        const lowerRole = r.toLowerCase();
        let matches = false;
        if (lowerRole === "gym leader") {
          matches = c.role.toLowerCase().includes("gym leader");
        } else if (lowerRole === "champion") {
          matches = c.role.toLowerCase().includes("champion");
        } else if (lowerRole === "protagonist") {
          matches = c.role.toLowerCase().includes("protagonist") || c.role.toLowerCase().includes("hero");
        } else if (lowerRole === "rival") {
          matches = c.role.toLowerCase().includes("rival");
        } else if (lowerRole === "professor") {
          matches = c.role.toLowerCase().includes("professor");
        } else if (lowerRole === "team rocket") {
          matches = c.role.toLowerCase().includes("boss") || c.role.toLowerCase().includes("agent") || c.affiliation.some(a => a.toLowerCase().includes("rocket"));
        } else if (lowerRole === "service provider") {
          matches = c.role.toLowerCase().includes("nurse") || c.role.toLowerCase().includes("officer") || c.role.toLowerCase().includes("warden");
        } else {
          matches = c.role.toLowerCase().includes(lowerRole);
        }
        if (matches) {
          counts[r] = (counts[r] || 0) + 1;
        }
      });
    });
    return counts;
  }, [roles]);

  // Filtered & Sorted characters
  const filteredCharacters = useMemo(() => {
    const list = IMPORTED_CHARACTERS.filter(char => {
      // Search matches
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === "" || 
        char.name.toLowerCase().includes(query) ||
        char.japanese_name.toLowerCase().includes(query) ||
        (char.romaji && char.romaji.toLowerCase().includes(query)) ||
        char.role.toLowerCase().includes(query) ||
        char.region.toLowerCase().includes(query) ||
        char.aliases.some(a => a.toLowerCase().includes(query)) ||
        char.origin.toLowerCase().includes(query) ||
        (char.signature_pokemon && char.signature_pokemon.toLowerCase().includes(query));

      // Region matches
      const matchesRegion = selectedRegion === "All" || char.region.toLowerCase() === selectedRegion.toLowerCase();

      // Role matches
      let matchesRole = true;
      if (selectedRole !== "All") {
        const lowerRole = selectedRole.toLowerCase();
        if (lowerRole === "gym leader") {
          matchesRole = char.role.toLowerCase().includes("gym leader");
        } else if (lowerRole === "champion") {
          matchesRole = char.role.toLowerCase().includes("champion");
        } else if (lowerRole === "protagonist") {
          matchesRole = char.role.toLowerCase().includes("protagonist") || char.role.toLowerCase().includes("hero");
        } else if (lowerRole === "rival") {
          matchesRole = char.role.toLowerCase().includes("rival");
        } else if (lowerRole === "professor") {
          matchesRole = char.role.toLowerCase().includes("professor");
        } else if (lowerRole === "team rocket") {
          matchesRole = char.role.toLowerCase().includes("boss") || char.role.toLowerCase().includes("agent") || char.affiliation.some(a => a.toLowerCase().includes("rocket"));
        } else if (lowerRole === "service provider") {
          matchesRole = char.role.toLowerCase().includes("nurse") || char.role.toLowerCase().includes("officer") || char.role.toLowerCase().includes("warden");
        } else {
          matchesRole = char.role.toLowerCase().includes(lowerRole);
        }
      }

      // Status matches
      const matchesStatus = selectedStatus === "All" || char.status === selectedStatus;

      return matchesSearch && matchesRegion && matchesRole && matchesStatus;
    });

    return list.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "skill") {
        comparison = (a.stats?.battle_skill || 0) - (b.stats?.battle_skill || 0);
      } else if (sortBy === "strength") {
        comparison = (a.stats?.strength || 0) - (b.stats?.strength || 0);
      } else if (sortBy === "intelligence") {
        comparison = (a.stats?.intelligence || 0) - (b.stats?.intelligence || 0);
      } else {
        comparison = a.id - b.id;
      }
      return sortAsc ? comparison : -comparison;
    });
  }, [searchQuery, selectedRegion, selectedRole, selectedStatus, sortBy, sortAsc]);

  // Check if any filter is active
  const hasActiveFilters = searchQuery !== "" || selectedRegion !== "All" || selectedRole !== "All" || selectedStatus !== "All" || sortBy !== "id";

  // Active character detail lookup
  const activeChar = useMemo(() => {
    return IMPORTED_CHARACTERS.find(c => c.id === activeCharacterId) || null;
  }, [activeCharacterId]);

  return (
    <div className="w-full">
      {/* Search and Filters Header */}
      <div className={`p-6 md:p-8 rounded-3xl border mb-8 transition-all ${
        isLightTheme 
          ? "bg-white/90 border-slate-200/90 shadow-lg shadow-slate-100/60" 
          : "bg-slate-950/60 border-white/10 shadow-2xl backdrop-blur-md"
      }`}>
        
        {/* Top Control Bar: Search & Sort */}
        <div className={`flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between ${isFilterExpanded ? "mb-6" : "mb-0"}`}>
          {/* Search Bar + Filter Icon Button */}
          <div className="flex items-center gap-2 flex-1">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trainer, Japanese name, signature Pokémon, origin..."
                className={`w-full pl-12 pr-28 py-3.5 rounded-2xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                  isLightTheme
                    ? "bg-slate-50/80 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
                    : "bg-slate-900/80 border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
                }`}
              />

              {/* Quick Match Count / Clear Button */}
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-xl border ${
                  isLightTheme ? "bg-slate-200/60 border-slate-300 text-slate-700" : "bg-slate-800 border-white/10 text-slate-300"
                }`}>
                  {filteredCharacters.length} Trainers
                </span>
              </div>
            </div>

            {/* Filter Toggle Button next to search bar */}
            <button
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              className={`px-3.5 py-3.5 rounded-2xl border transition-all flex items-center gap-2 cursor-pointer font-extrabold text-xs shrink-0 ${
                isFilterExpanded || (selectedRegion !== "All" || selectedRole !== "All" || selectedStatus !== "All")
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20 hover:bg-blue-500"
                  : isLightTheme
                    ? "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                    : "bg-slate-900/80 border-white/10 hover:bg-slate-800 text-slate-300"
              }`}
              title={isFilterExpanded ? "Collapse Filter Panel" : "Expand Filter Panel"}
            >
              <Filter className="w-4 h-4 text-current" />
              <span className="hidden sm:inline">Filters</span>
              {(selectedRegion !== "All" || selectedRole !== "All" || selectedStatus !== "All") && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-amber-400 text-slate-950">
                  { (selectedRegion !== "All" ? 1 : 0) + (selectedRole !== "All" ? 1 : 0) + (selectedStatus !== "All" ? 1 : 0) }
                </span>
              )}
              {isFilterExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-2xl border ${
              isLightTheme ? "bg-slate-50 border-slate-200" : "bg-slate-900/80 border-white/10"
            }`}>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-500" />
                Sort
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className={`text-xs font-bold bg-transparent focus:outline-none cursor-pointer ${
                  isLightTheme ? "text-slate-800" : "text-white"
                }`}
              >
                <option value="id" className={isLightTheme ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>Default (ID)</option>
                <option value="name" className={isLightTheme ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>Name (A-Z)</option>
                <option value="skill" className={isLightTheme ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>Battle Skill</option>
                <option value="strength" className={isLightTheme ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>Strength</option>
                <option value="intelligence" className={isLightTheme ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>Intelligence</option>
              </select>
            </div>

            <button
              onClick={() => setSortAsc(!sortAsc)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                isLightTheme
                  ? "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                  : "bg-slate-900/80 border-white/10 hover:bg-slate-800 text-slate-300"
              }`}
              title={sortAsc ? "Sort Ascending" : "Sort Descending"}
            >
              <ArrowUpDown className={`w-4 h-4 transition-transform ${sortAsc ? "" : "rotate-180"}`} />
            </button>
          </div>
        </div>

        {/* Collapsible Filter Panel */}
        {isFilterExpanded && (
          <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Region Selector Section */}
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-purple-500" />
                  Region
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {availableRegions.map((region) => {
                  const count = regionCounts[region] || 0;
                  const isSelected = selectedRegion === region;
                  const isKanto = region.toLowerCase() === "kanto";
                  const isJohto = region.toLowerCase() === "johto";

                  return (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        isSelected
                          ? isKanto
                            ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-500/20"
                            : isJohto
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20"
                            : "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : isLightTheme
                            ? "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                            : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/5"
                      }`}
                    >
                      <span>{region}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : isLightTheme
                            ? "bg-slate-200 text-slate-600"
                            : "bg-slate-800 text-slate-400"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category & Status Filter Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start pt-2 border-t border-slate-200/60 dark:border-white/5">
              {/* Trainer Category Chips */}
              <div className="md:col-span-8 flex flex-col gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 px-1">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  Trainer Category
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {roles.map((role) => {
                    const count = roleCounts[role] || 0;
                    const isSelected = selectedRole === role;

                    return (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                            : isLightTheme
                              ? "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                              : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/5"
                        }`}
                      >
                        <span>{role}</span>
                        <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : isLightTheme
                              ? "bg-slate-200 text-slate-600"
                              : "bg-slate-800 text-slate-400"
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Canon Status Selector */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 px-1">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  Canon Status
                </span>
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl border bg-slate-100/50 dark:bg-slate-900/50 border-slate-200/60 dark:border-white/5">
                  {["All", "Active", "Unknown"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`py-1.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                        selectedStatus === status
                          ? "bg-emerald-600 text-white shadow-md"
                          : isLightTheme
                            ? "text-slate-600 hover:text-slate-900"
                            : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Summary Strip (Shown if filters are active regardless of toggle state) */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-200/60 dark:border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-1">
                Active:
              </span>

              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-blue-700 dark:hover:text-blue-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedRegion !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  Region: {selectedRegion}
                  <button onClick={() => setSelectedRegion("All")} className="hover:text-purple-700 dark:hover:text-purple-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedRole !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  Category: {selectedRole}
                  <button onClick={() => setSelectedRole("All")} className="hover:text-amber-700 dark:hover:text-amber-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedStatus !== "All" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Status: {selectedStatus}
                  <button onClick={() => setSelectedStatus("All")} className="hover:text-emerald-700 dark:hover:text-emerald-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {sortBy !== "id" && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold bg-sky-500/10 text-sky-500 border border-sky-500/20">
                  Sorted by: {sortBy}
                  <button onClick={() => setSortBy("id")} className="hover:text-sky-700 dark:hover:text-sky-300">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
                setSelectedRole("All");
                setSelectedStatus("All");
                setSortBy("id");
                setSortAsc(true);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-500 transition-colors cursor-pointer ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All
            </button>
          </div>
        )}
      </div>

      {/* Grid of Characters */}
      {filteredCharacters.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-12 h-12 rounded-full bg-slate-500/10 flex items-center justify-center mx-auto mb-4 text-slate-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            No trainers match your filter settings. Try adjusting your search query!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((char) => {
            const hasSignature = !!char.signature_pokemon;
            return (
              <div
                key={char.id}
                onClick={() => {
                  setActiveCharacterId(char.id);
                  setModalTab("bio");
                }}
                className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer relative overflow-hidden ${
                  isLightTheme
                    ? "bg-white/80 border-slate-200 text-slate-900 hover:border-slate-300"
                    : "bg-slate-950/40 border-white/5 text-slate-100 hover:border-white/15"
                }`}
              >
                {/* Visual Accent Decoration inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all" />

                {/* Card Title & Japanese details */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                      {char.region} Region
                    </span>
                    <h3 className="font-display font-black text-xl tracking-tight group-hover:text-blue-500 transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-[10px] font-mono opacity-60">
                      {char.japanese_name} {char.romaji && `(${char.romaji})`}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest ${
                    char.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  }`}>
                    {char.status}
                  </span>
                </div>

                {/* Subtitle / Role */}
                <p className={`text-xs font-semibold mb-4 leading-relaxed ${
                  isLightTheme ? "text-slate-600" : "text-slate-400"
                }`}>
                  {char.role}
                </p>

                {/* Stats / Signature Meta Row */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/50 dark:border-white/5 text-[11px]">
                  <div>
                    <span className="text-slate-500 dark:text-slate-500 block text-[9px] uppercase tracking-wider font-extrabold">Hometown</span>
                    <span className="font-bold">{char.origin || "Unknown"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-500 block text-[9px] uppercase tracking-wider font-extrabold">Intro Game</span>
                    <span className="font-bold">{char.generation_introduced}</span>
                  </div>
                </div>

                {/* Bottom line: Signature or Team preview */}
                <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                  {hasSignature && (
                    <span className="px-2 py-0.5 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10 font-bold text-[10px]">
                      ⭐ {char.signature_pokemon}
                    </span>
                  )}
                  {char.current_team.length > 0 && (
                    <span className="px-2 py-0.5 rounded-lg bg-slate-500/10 text-slate-500 dark:text-slate-400 font-bold text-[10px]">
                      🎒 Team Size: {char.current_team.length}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Profile Panel Overlay */}
      {activeChar && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div
            className={`w-full max-w-3xl rounded-3xl border overflow-hidden relative shadow-2xl transition-all flex flex-col max-h-[90vh] ${
              isLightTheme
                ? "bg-white border-slate-200 text-slate-900"
                : "bg-[#0c0d12] border-white/10 text-slate-100"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCharacterId(null)}
              className="absolute top-4 right-4 p-2 rounded-xl transition-all bg-slate-500/10 hover:bg-slate-500/20 text-slate-400 hover:text-slate-100 cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Banner */}
            <div className="relative p-6 md:p-8 bg-gradient-to-br from-blue-900/40 via-indigo-950/30 to-transparent border-b border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                <div>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 inline-block mb-2">
                    {activeChar.region} Region • {activeChar.generation_introduced}
                  </span>
                  <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-1">
                    {activeChar.name}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-mono">
                    Japanese Name: <span className="font-bold text-slate-700 dark:text-slate-300">{activeChar.japanese_name}</span> {activeChar.romaji && `[Romaji: ${activeChar.romaji}]`}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {activeChar.signature_pokemon && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs">
                      Partner: {activeChar.signature_pokemon}
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                    activeChar.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-slate-500/20 text-slate-400 border border-slate-500/30"
                  }`}>
                    {activeChar.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Folder Navigation Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200/50 dark:border-white/5 px-6 pt-2 shrink-0 bg-slate-500/5">
              {[
                { id: "bio", label: "Dossier & Lore", icon: BookOpen },
                { id: "stats", label: "Combat Stats", icon: Zap },
                { id: "team", label: "Allies & Roster", icon: Users },
                { id: "timeline", label: "Chronology Timeline", icon: History }
              ].map((tab) => {
                const IconComp = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setModalTab(tab.id as any)}
                    className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      modalTab === tab.id
                        ? "border-blue-500 text-blue-500"
                        : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Modal Dynamic Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow max-h-[50vh]">
              
              {/* Tab 1: Biography / Lore */}
              {modalTab === "bio" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-2 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" /> Core Identity
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeChar.name}, widely known in the Pokémon canonical universe as <span className="font-bold text-slate-800 dark:text-slate-200">{activeChar.role}</span>, introduced originally in <span className="font-bold">{activeChar.generation_introduced}</span>. He commands a dominant reputation across the {activeChar.region} region and beyond.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block">Hometown / Origin</span>
                        <span className="text-xs font-bold">{activeChar.origin || "Unknown Origin"}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block">Current Residence</span>
                        <span className="text-xs font-bold">{activeChar.current_residence || "Traveling / Unknown"}</span>
                      </div>
                      {activeChar.starter && (
                        <div>
                          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block">Starter Partner</span>
                          <span className="text-xs font-bold text-blue-500">{activeChar.starter}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      {activeChar.aliases.length > 0 && (
                        <div>
                          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block">Universe Aliases</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {activeChar.aliases.map((a, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-slate-500/10 dark:bg-white/5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {activeChar.occupation.length > 0 && (
                        <div>
                          <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block">Occupations / Titles</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {activeChar.occupation.map((o, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-semibold">
                                {o}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {activeChar.game_appearances.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/50 dark:border-white/5">
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Video Game Appearances</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeChar.game_appearances.map((game, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-500/10 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-xs font-semibold">
                            🎮 {game}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeChar.trivia.length > 0 && (
                    <div className="pt-4 border-t border-slate-200/50 dark:border-white/5 space-y-2">
                      <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold flex items-center gap-2">
                        <Award className="w-3.5 h-3.5" /> Character Trivia & Factoids
                      </h4>
                      <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
                        {activeChar.trivia.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Combat Stats & Battle Analytics */}
              {modalTab === "stats" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-4 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5" /> Tactical Capabilities Radar
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Interactive Skill Progress Bars */}
                      <div className="space-y-4">
                        {[
                          { label: "Combat Strength", val: activeChar.stats.strength, icon: Sword, color: "bg-red-500" },
                          { label: "Tactical Intelligence", val: activeChar.stats.intelligence, icon: Shield, color: "bg-blue-500" },
                          { label: "Battle Experience", val: activeChar.stats.experience, icon: Sparkles, color: "bg-emerald-500" },
                          { label: "Leadership Capability", val: activeChar.stats.leadership, icon: Users, color: "bg-amber-500" },
                          { label: "Technical Precision", val: activeChar.stats.battle_skill, icon: Zap, color: "bg-indigo-500" }
                        ].map((stat, i) => {
                          const IconComp = stat.icon;
                          return (
                            <div key={i} className="space-y-1.5">
                              <div className="flex justify-between items-center text-xs">
                                <span className="font-bold flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                                  <IconComp className="w-3.5 h-3.5 opacity-70" /> {stat.label}
                                </span>
                                <span className="font-mono font-black">{stat.val}%</span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-slate-500/20 overflow-hidden">
                                <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.val}%` }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Combat preferences */}
                      <div className="space-y-4 p-5 rounded-2xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5">
                        <h5 className="text-xs font-black uppercase tracking-wider mb-3 text-slate-700 dark:text-slate-300">Combat Mechanics</h5>
                        <div className="space-y-3 text-xs">
                          <div className="flex justify-between py-1 border-b border-slate-200/50 dark:border-white/5">
                            <span className="text-slate-500">Battle Style</span>
                            <span className="font-bold">{activeChar.battle_style || "Standard League Rules"}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-200/50 dark:border-white/5">
                            <span className="text-slate-500">Preferred Elemental Type</span>
                            <span className="font-bold uppercase tracking-wider text-blue-500">{activeChar.preferred_type || "None (Versatile)"}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-200/50 dark:border-white/5">
                            <span className="text-slate-500">Mega Evolution Enabled</span>
                            <span className={`font-bold ${activeChar.mega_evolution.length > 0 ? "text-emerald-500" : "text-slate-400"}`}>
                              {activeChar.mega_evolution.length > 0 ? `Yes (${activeChar.mega_evolution.length} forms)` : "No"}
                            </span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-200/50 dark:border-white/5">
                            <span className="text-slate-500">Dynamax Competent</span>
                            <span className={`font-bold ${activeChar.dynamax ? "text-pink-500" : "text-slate-400"}`}>
                              {activeChar.dynamax ? "Yes" : "No"}
                            </span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-200/50 dark:border-white/5">
                            <span className="text-slate-500">Terastal Competent</span>
                            <span className={`font-bold ${activeChar.terastal ? "text-amber-400 animate-pulse" : "text-slate-400"}`}>
                              {activeChar.terastal ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements and Badges */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200/50 dark:border-white/5">
                    {activeChar.badges.length > 0 && (
                      <div>
                        <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Unlocked Badges</span>
                        <div className="flex flex-wrap gap-1">
                          {activeChar.badges.map((badge, i) => (
                            <span key={i} className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-bold">
                              🏅 {badge} Badge
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeChar.achievements.length > 0 && (
                      <div>
                        <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Major Accomplishments</span>
                        <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 font-medium">
                          {activeChar.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-emerald-500">✔</span> {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 3: Allies & Roster */}
              {modalTab === "team" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-3 flex items-center gap-2">
                      <Sword className="w-3.5 h-3.5" /> Core Battle Team
                    </h4>
                    {activeChar.current_team.length === 0 ? (
                      <p className="text-xs text-slate-500">This trainer does not maintain a fixed active battle lineup in public archives.</p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {activeChar.current_team.map((poke, i) => (
                          <div 
                            key={i} 
                            className="p-3 rounded-xl border border-blue-500/10 bg-blue-500/5 flex items-center gap-2"
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{poke}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/50 dark:border-white/5">
                    {/* Friends and Allies */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Friends & Associated Allies</span>
                      {activeChar.friends.length === 0 ? (
                        <p className="text-xs text-slate-500 font-semibold italic">None archived</p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {activeChar.friends.map((friend, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-slate-500/10 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                              🤝 {friend}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rivals */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Rivals</span>
                      {activeChar.rivals.length === 0 ? (
                        <p className="text-xs text-slate-500 font-semibold italic">None archived</p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {activeChar.rivals.map((rival, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-red-500/10 text-red-500 text-xs font-semibold">
                              ⚔ {rival}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/50 dark:border-white/5">
                    {/* Mentors */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Mentors & Influences</span>
                      {activeChar.mentors.length === 0 ? (
                        <p className="text-xs text-slate-500 font-semibold italic">None archived</p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {activeChar.mentors.map((mentor, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-500 text-xs font-semibold">
                              🎓 {mentor}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Students */}
                    <div>
                      <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide block mb-2">Students & Protégés</span>
                      {activeChar.students.length === 0 ? (
                        <p className="text-xs text-slate-500 font-semibold italic">None archived</p>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {activeChar.students.map((student, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                              🧑‍🎓 {student}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Chronology Timeline */}
              {modalTab === "timeline" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-4 flex items-center gap-2">
                      <History className="w-3.5 h-3.5" /> Canonical Milestones Chronology
                    </h4>
                    
                    {activeChar.timeline.length === 0 ? (
                      <p className="text-xs text-slate-500">No timeline events recorded in files.</p>
                    ) : (
                      <div className="relative border-l-2 border-slate-200/60 dark:border-white/10 ml-3 pl-6 space-y-6">
                        {activeChar.timeline.map((event, i) => (
                          <div key={i} className="relative">
                            {/* Milestone Marker Dot */}
                            <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-[#0c0d12] flex items-center justify-center font-mono font-bold text-[10px] text-white">
                              {event.order}
                            </div>
                            <div className="p-4 rounded-xl bg-slate-500/5 border border-slate-200/50 dark:border-white/5">
                              <h5 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 mb-1">
                                Chronicle Milestone #{event.order}
                              </h5>
                              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                                {event.event}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom note */}
            {activeChar.source_note && (
              <div className="px-6 md:px-8 py-3 bg-slate-500/5 border-t border-slate-200/50 dark:border-white/5 text-[10px] text-slate-500 text-center font-medium font-mono">
                Source Note: {activeChar.source_note}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
