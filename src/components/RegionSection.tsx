import React, { useState, useMemo, useRef } from "react";
import { 
  ChevronRight, Shield, Award, Users, MapPin, Gamepad2, ArrowLeft, 
  Search, SlidersHorizontal, Info, Swords, Sparkles, Heart, Globe,
  Compass, Crown, Zap, BookOpen, Layers
} from "lucide-react";
import { Region } from "../types";
import { REGIONS_DATA } from "../data/regions";
import { getRegionDetail, FeaturedPokemon, Leader } from "../data/regionDetails";
import { motion, AnimatePresence } from "motion/react";
import GraphicalRegionMap from "./GraphicalRegionMap";
import WorldMapRegionsView from "./WorldMapRegionsView";

interface RegionSectionProps {
  selectedRegion: Region | null;
  onSelectRegion: (region: Region | null) => void;
  onSelectPokemonById: (id: number) => void;
  isLightTheme: boolean;
  layout?: "grid" | "scroll";
}

const getRegionSlogan = (id: string) => {
  switch (id) {
    case "kanto": return "Where it all began.";
    case "johto": return "Tradition meets legend.";
    case "hoenn": return "Land, sea and sky.";
    case "sinnoh": return "In the shadow of space-time.";
    case "unova": return "Megacity of ideals and truth.";
    case "kalos": return "Fashion, beauty, and Mega evolution.";
    case "alola": return "Island trials & ocean tides.";
    case "galar": return "Coliseum showdowns and gigantamax.";
    case "hisui": return "The wild, raw frontier of Sinnoh's history.";
    case "paldea": return "Open vistas & terastal crystal stars.";
    default: return "Explore new horizons.";
  }
};

const getRegionLegendaryId = (id: string) => {
  switch (id) {
    case "kanto": return 150; // Mewtwo
    case "johto": return 250; // Ho-Oh
    case "hoenn": return 384; // Rayquaza
    case "sinnoh": return 487; // Giratina
    case "unova": return 644; // Zekrom
    case "kalos": return 716; // Xerneas
    case "alola": return 791; // Solgaleo
    case "galar": return 888; // Zacian
    case "hisui": return 493; // Arceus
    case "paldea": return 1008; // Miraidon
    default: return 150;
  }
};

const getRomanGeneration = (gen: number) => {
  const mapping = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return mapping[gen - 1] || gen.toString();
};

const getRegionCardStyles = (id: string, isLightTheme: boolean) => {
  if (isLightTheme) {
    switch (id) {
      case "kanto":
        return {
          gradient: "bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] border-[#FCA5A5]/40 shadow-sm text-slate-900",
          badge: "bg-red-100/80 text-red-700 border-red-200/50",
          title: "text-red-950",
          slogan: "text-red-900/70",
          arrow: "bg-red-50 text-red-700 border-red-200 hover:bg-red-600 hover:text-white"
        };
      case "johto":
        return {
          gradient: "bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border-[#FDE047]/40 shadow-sm text-slate-900",
          badge: "bg-amber-100/80 text-amber-700 border-amber-200/50",
          title: "text-amber-950",
          slogan: "text-amber-900/70",
          arrow: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-600 hover:text-white"
        };
      case "hoenn":
        return {
          gradient: "bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border-[#6EE7B7]/40 shadow-sm text-slate-900",
          badge: "bg-emerald-100/80 text-emerald-700 border-emerald-200/50",
          title: "text-emerald-950",
          slogan: "text-emerald-900/70",
          arrow: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-600 hover:text-white"
        };
      case "sinnoh":
        return {
          gradient: "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border-[#93C5FD]/40 shadow-sm text-slate-900",
          badge: "bg-blue-100/80 text-blue-700 border-blue-200/50",
          title: "text-blue-950",
          slogan: "text-blue-900/70",
          arrow: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white"
        };
      case "unova":
        return {
          gradient: "bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] border-[#C4B5FD]/40 shadow-sm text-slate-900",
          badge: "bg-purple-100/80 text-purple-700 border-purple-200/50",
          title: "text-purple-950",
          slogan: "text-purple-900/70",
          arrow: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-600 hover:text-white"
        };
      case "kalos":
        return {
          gradient: "bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] border-[#FBCFE8]/40 shadow-sm text-slate-900",
          badge: "bg-pink-100/80 text-pink-700 border-pink-200/50",
          title: "text-pink-950",
          slogan: "text-pink-900/70",
          arrow: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-600 hover:text-white"
        };
      case "alola":
        return {
          gradient: "bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] border-[#67E8F9]/40 shadow-sm text-slate-900",
          badge: "bg-cyan-100/80 text-cyan-700 border-cyan-200/50",
          title: "text-cyan-950",
          slogan: "text-cyan-900/70",
          arrow: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-600 hover:text-white"
        };
      case "galar":
        return {
          gradient: "bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border-[#7DD3FC]/40 shadow-sm text-slate-900",
          badge: "bg-sky-100/80 text-sky-700 border-sky-200/50",
          title: "text-sky-950",
          slogan: "text-sky-900/70",
          arrow: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-600 hover:text-white"
        };
      case "hisui":
        return {
          gradient: "bg-gradient-to-br from-[#FAFAF9] to-[#F5F5F4] border-[#D6D3D1]/40 shadow-sm text-slate-900",
          badge: "bg-stone-100/80 text-stone-700 border-stone-200/50",
          title: "text-stone-950",
          slogan: "text-stone-900/70",
          arrow: "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-600 hover:text-white"
        };
      case "paldea":
        return {
          gradient: "bg-gradient-to-br from-[#FDF4FF] to-[#F5D0FE] border-[#F59E0B]/30 shadow-sm text-slate-900",
          badge: "bg-fuchsia-100/80 text-fuchsia-700 border-fuchsia-200/50",
          title: "text-fuchsia-950",
          slogan: "text-fuchsia-900/70",
          arrow: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-600 hover:text-white"
        };
      default:
        return {
          gradient: "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-sm text-slate-900",
          badge: "bg-slate-200 text-slate-800 border-slate-300",
          title: "text-slate-900",
          slogan: "text-slate-500",
          arrow: "bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white"
        };
    }
  } else {
    // Obsidian Dark Mode
    switch (id) {
      case "kanto":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.18),transparent_60%)] border-red-500/20 shadow-[0_10px_30px_rgba(239,68,68,0.06)] text-white",
          badge: "bg-red-500/10 text-red-300 border-red-500/20",
          title: "text-white",
          slogan: "text-red-100/60",
          arrow: "bg-red-500/10 text-red-300 border-red-500/20 hover:bg-red-500/25"
        };
      case "johto":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_60%)] border-amber-500/20 shadow-[0_10px_30px_rgba(245,158,11,0.06)] text-white",
          badge: "bg-amber-500/10 text-amber-300 border-amber-500/20",
          title: "text-white",
          slogan: "text-amber-100/60",
          arrow: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/25"
        };
      case "hoenn":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.18),transparent_60%)] border-emerald-500/20 shadow-[0_10px_30px_rgba(16,185,129,0.06)] text-white",
          badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
          title: "text-white",
          slogan: "text-emerald-100/60",
          arrow: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/25"
        };
      case "sinnoh":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_60%)] border-blue-500/20 shadow-[0_10px_30px_rgba(59,130,246,0.06)] text-white",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
          title: "text-white",
          slogan: "text-blue-100/60",
          arrow: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/25"
        };
      case "unova":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.18),transparent_60%)] border-purple-500/20 shadow-[0_10px_30px_rgba(139,92,246,0.06)] text-white",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
          title: "text-white",
          slogan: "text-purple-100/60",
          arrow: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/25"
        };
      case "kalos":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.18),transparent_60%)] border-pink-500/20 shadow-[0_10px_30px_rgba(236,72,153,0.06)] text-white",
          badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
          title: "text-white",
          slogan: "text-pink-100/60",
          arrow: "bg-pink-500/10 text-pink-300 border-pink-500/20 hover:bg-pink-500/25"
        };
      case "alola":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.18),transparent_60%)] border-cyan-500/20 shadow-[0_10px_30px_rgba(6,182,212,0.06)] text-white",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
          title: "text-white",
          slogan: "text-cyan-100/60",
          arrow: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/25"
        };
      case "galar":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.18),transparent_60%)] border-sky-500/20 shadow-[0_10px_30px_rgba(14,165,233,0.06)] text-white",
          badge: "bg-sky-500/10 text-sky-300 border-sky-500/20",
          title: "text-white",
          slogan: "text-sky-100/60",
          arrow: "bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/25"
        };
      case "hisui":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(168,162,158,0.18),transparent_60%)] border-stone-500/20 shadow-[0_10px_30px_rgba(168,162,158,0.06)] text-white",
          badge: "bg-stone-500/10 text-stone-300 border-stone-500/20",
          title: "text-white",
          slogan: "text-stone-100/60",
          arrow: "bg-stone-500/10 text-stone-300 border-stone-500/20 hover:bg-stone-500/25"
        };
      case "paldea":
        return {
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.18),transparent_60%)] border-fuchsia-500/20 shadow-[0_10px_30px_rgba(217,70,239,0.06)] text-white",
          badge: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
          title: "text-white",
          slogan: "text-fuchsia-100/60",
          arrow: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20 hover:bg-fuchsia-500/25"
        };
      default:
        return {
          gradient: "bg-[#09090B] border-white/10 text-white",
          badge: "bg-white/10 text-slate-300 border-white/10",
          title: "text-white",
          slogan: "text-slate-400",
          arrow: "bg-white/10 text-white hover:bg-white/20"
        };
    }
  }
};

export default function RegionSection({
  selectedRegion,
  onSelectRegion,
  onSelectPokemonById,
  isLightTheme,
  layout = "grid"
}: RegionSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [regionTab, setRegionTab] = useState<"overview" | "landmarks" | "roster" | "gyms" | "wild">("overview");
  const [regionsViewMode, setRegionsViewMode] = useState<"default" | "worldmap">("worldmap");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const renderJapaneseBackground = (nativeName: string) => {
    const japName = nativeName.split(" ")[0] || nativeName;
    const trainText = Array(12).fill(japName).join("  •  ");
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center select-none z-0">
        <div className={`flex w-max shrink-0 animate-marquee text-5xl md:text-7xl font-sans font-black tracking-widest uppercase whitespace-nowrap gap-16 ${
          isLightTheme 
            ? "text-blue-600/[0.22]" 
            : "text-white/[0.08]"
        }`}>
          <span>{trainText}</span>
          <span>{trainText}</span>
        </div>
      </div>
    );
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (layout !== "scroll") return;
    
    let animationFrameId: number;
    let lastTime = performance.now();

    const animateScroll = (time: number) => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) {
        animationFrameId = requestAnimationFrame(animateScroll);
        return;
      }

      if (!isHovered) {
        const delta = (time - lastTime) / 16;
        lastTime = time;
        
        const speed = 0.55; 
        scrollContainer.scrollLeft += speed * delta;
        
        const halfScrollWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfScrollWidth) {
          scrollContainer.scrollLeft -= halfScrollWidth;
        }
      } else {
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [layout, isHovered]);

  const getOfficialArtwork = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const getSprite = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  // ID Ranges for species list
  const regionRanges: Record<string, { start: number; end: number }> = {
    kanto: { start: 1, end: 151 },
    johto: { start: 152, end: 251 },
    hoenn: { start: 252, end: 386 },
    sinnoh: { start: 387, end: 493 },
    unova: { start: 494, end: 649 },
    kalos: { start: 650, end: 721 },
    alola: { start: 722, end: 809 },
    galar: { start: 810, end: 898 },
    hisui: { start: 899, end: 905 },
    paldea: { start: 906, end: 1025 }
  };

  const regionalSpecies = useMemo(() => {
    if (!selectedRegion) return [];
    const range = regionRanges[selectedRegion.id] || { start: 1, end: 151 };
    const list = [];
    
    for (let i = range.start; i <= Math.min(range.start + 80, range.end); i++) {
      let name = `Species #${i}`;
      let types = ["normal"];
      if (i === 1 || i === 2 || i === 3) { name = "Bulbasaur"; types = ["grass", "poison"]; }
      else if (i === 4 || i === 5 || i === 6) { name = "Charmander"; types = ["fire"]; }
      else if (i === 7 || i === 8 || i === 9) { name = "Squirtle"; types = ["water"]; }
      else if (i === 25) { name = "Pikachu"; types = ["electric"]; }
      else if (i === 150) { name = "Mewtwo"; types = ["psychic"]; }
      else if (i === 152) { name = "Chikorita"; types = ["grass"]; }
      else if (i === 155) { name = "Cyndaquil"; types = ["fire"]; }
      else if (i === 158) { name = "Totodile"; types = ["water"]; }
      else if (i === 250) { name = "Ho-Oh"; types = ["fire", "flying"]; }
      else if (i === 252) { name = "Treecko"; types = ["grass"]; }
      else if (i === 255) { name = "Torchic"; types = ["fire"]; }
      else if (i === 258) { name = "Mudkip"; types = ["water"]; }
      else if (i === 384) { name = "Rayquaza"; types = ["dragon", "flying"]; }
      else if (i === 387) { name = "Turtwig"; types = ["grass"]; }
      else if (i === 390) { name = "Chimchar"; types = ["fire"]; }
      else if (i === 393) { name = "Piplup"; types = ["water"]; }
      else if (i === 487) { name = "Giratina"; types = ["ghost", "dragon"]; }
      else if (i === 495) { name = "Snivy"; types = ["grass"]; }
      else if (i === 498) { name = "Tepig"; types = ["fire"]; }
      else if (i === 501) { name = "Oshawott"; types = ["water"]; }
      else if (i === 650) { name = "Chespin"; types = ["grass"]; }
      else if (i === 653) { name = "Fennekin"; types = ["fire"]; }
      else if (i === 656) { name = "Froakie"; types = ["water"]; }
      else if (i === 722) { name = "Rowlet"; types = ["grass", "flying"]; }
      else if (i === 725) { name = "Litten"; types = ["fire"]; }
      else if (i === 728) { name = "Popplio"; types = ["water"]; }
      else if (i === 810) { name = "Grookey"; types = ["grass"]; }
      else if (i === 813) { name = "Scorbunny"; types = ["fire"]; }
      else if (i === 816) { name = "Sobble"; types = ["water"]; }
      else if (i === 906) { name = "Sprigatito"; types = ["grass"]; }
      else if (i === 909) { name = "Fuecoco"; types = ["fire"]; }
      else if (i === 912) { name = "Quaxly"; types = ["water"]; }

      list.push({ id: i, name, types });
    }
    return list;
  }, [selectedRegion]);

  const filteredSpecies = useMemo(() => {
    return regionalSpecies.filter((pkmn) => {
      const matchesSearch = pkmn.name.toLowerCase().includes(searchQuery.toLowerCase()) || pkmn.id.toString().includes(searchQuery);
      const matchesType = selectedType === "all" || pkmn.types.includes(selectedType.toLowerCase());
      return matchesSearch && matchesType;
    });
  }, [regionalSpecies, searchQuery, selectedType]);

  // If a region is selected, display the rich dossier view
  if (selectedRegion) {
    const details = getRegionDetail(selectedRegion.id);
    const bannerStyle = getRegionCardStyles(selectedRegion.id, isLightTheme);

    return (
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-2 mb-16 animate-fadeIn">
        {/* Back Button */}
        <button
          onClick={() => onSelectRegion(null)}
          className={`mb-6 px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer text-xs font-extrabold uppercase tracking-wider border transition-all hover:-translate-x-1 shadow-sm ${
            isLightTheme
              ? "bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-900 border-white/10 text-slate-100 hover:bg-white/5 shadow-md"
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-blue-500" />
          <span>Return to All Regions</span>
        </button>

        {/* Region Banner Header */}
        <div className={`mb-8 p-8 md:p-10 rounded-[2.5rem] border relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
          bannerStyle.gradient
        }`}>
          {renderJapaneseBackground(selectedRegion.nativeName)}

          <div className="relative z-10 max-w-2xl">
            <span className={`text-xs font-mono font-black uppercase tracking-[0.25em] block mb-2 ${
              isLightTheme ? "text-slate-800/80" : "text-white/80"
            }`}>
              GEN {selectedRegion.generationIndex} · {selectedRegion.nativeName}
            </span>
            <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-3 uppercase ${bannerStyle.title}`}>
              {selectedRegion.name} Region
            </h1>
            <p className={`text-sm md:text-base leading-relaxed font-semibold ${
              isLightTheme ? "text-slate-800" : "text-slate-100"
            }`}>
              {selectedRegion.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0 w-full sm:w-auto">
            <span className={`text-xs px-4 py-2.5 rounded-full font-mono font-black border flex items-center gap-1.5 justify-center ${bannerStyle.badge}`}>
              {selectedRegion.pokemonCount || 151} SPECIES
            </span>
            <span className={`text-xs px-4 py-2.5 rounded-full font-mono font-black border flex items-center gap-1.5 justify-center ${bannerStyle.badge}`}>
              {selectedRegion.badgeCount > 0 ? `${selectedRegion.badgeCount} GYM BADGES` : "ISLAND TRIALS"}
            </span>
          </div>
        </div>

        {/* Subpage Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-500/15 scrollbar-none">
          <button
            onClick={() => setRegionTab("overview")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              regionTab === "overview"
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : isLightTheme
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Overview & Lore</span>
          </button>

          <button
            onClick={() => setRegionTab("landmarks")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              regionTab === "landmarks"
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : isLightTheme
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Landmarks & Map</span>
          </button>

          <button
            onClick={() => setRegionTab("roster")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              regionTab === "roster"
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : isLightTheme
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Starters & Legendaries</span>
          </button>

          <button
            onClick={() => setRegionTab("gyms")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              regionTab === "gyms"
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : isLightTheme
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <Crown className="w-4 h-4" />
            <span>Gyms & Elite Four</span>
          </button>

          <button
            onClick={() => setRegionTab("wild")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              regionTab === "wild"
                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                : isLightTheme
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200"
                  : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Regional Species Grid</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & LORE */}
        {regionTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {/* Top 3 Pillar Cards: Professor, Champion, Villain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-3xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Resident Professor</p>
                    <h4 className={`font-display font-black text-base mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{selectedRegion.professor}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{details.professorDesc}</p>
              </div>

              <div className={`p-6 rounded-3xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Regional Champion</p>
                    <h4 className={`font-display font-black text-base mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{selectedRegion.champion}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{details.championDesc}</p>
              </div>

              <div className={`p-6 rounded-3xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Villain Syndicate</p>
                    <h4 className={`font-display font-black text-base mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{details.villainName}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">{details.villainDesc}</p>
              </div>
            </div>

            {/* Climate & Topography + Regional Gimmick Mechanics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 md:p-8 rounded-[2rem] border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <h3 className={`font-display font-black text-lg uppercase ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                    Climate & Topography
                  </h3>
                </div>
                <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-700" : "text-slate-300"}`}>
                  {details.climateOverview}
                </p>
              </div>

              <div className={`p-6 md:p-8 rounded-[2rem] border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Signature Feature</span>
                    <h3 className={`font-display font-black text-lg uppercase ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                      {details.gimmickName}
                    </h3>
                  </div>
                </div>
                <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-700" : "text-slate-300"}`}>
                  {details.gimmickDesc}
                </p>
              </div>
            </div>

            {/* Pseudo Legendary Showcase */}
            {details.pseudoLegendary && (
              <div className={`p-6 md:p-8 rounded-[2rem] border flex flex-col md:flex-row items-center gap-6 ${
                isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"
              }`}>
                <img
                  src={getOfficialArtwork(details.pseudoLegendary.id)}
                  alt={details.pseudoLegendary.name}
                  className="w-28 h-28 object-contain drop-shadow-lg shrink-0 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => onSelectPokemonById(details.pseudoLegendary!.id)}
                />
                <div>
                  <span className="text-[10px] font-mono font-black uppercase text-purple-400 tracking-wider">
                    [ Regional Pseudo-Legendary Line ]
                  </span>
                  <h3 className={`font-display font-black text-xl uppercase mt-1 ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                    {details.pseudoLegendary.name} (BST 600)
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {details.pseudoLegendary.description}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 2: LANDMARKS & MAP */}
        {regionTab === "landmarks" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <GraphicalRegionMap regionId={selectedRegion.id} isLightTheme={isLightTheme} />

            {/* Landmarks Cards Grid */}
            <div className="mt-8">
              <h3 className={`font-display font-black text-xl uppercase mb-6 ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                Key Geographic Locations & Landmarks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {details.landmarks.map((lm) => (
                  <div key={lm.name} className={`p-6 rounded-2xl border ${isLightTheme ? "bg-white border-slate-200 shadow-sm" : "bg-[#131C31]/40 border-white/5"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-display font-black text-base ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                        {lm.name}
                      </h4>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase">
                        {lm.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lm.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: STARTERS & LEGENDARIES */}
        {regionTab === "roster" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            {/* Starter Partners */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                  Starter Partners
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {details.starters.map((starter) => (
                  <div
                    key={starter.id}
                    onClick={() => onSelectPokemonById(starter.id)}
                    className={`p-6 rounded-[2rem] border cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-all flex flex-col justify-between group h-[380px] relative overflow-hidden ${
                      isLightTheme
                        ? "bg-white border-slate-200 hover:border-blue-500/40 shadow-sm shadow-slate-100"
                        : "bg-[#0E1726]/40 border-white/5 hover:border-blue-500/20"
                    }`}
                  >
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 block">
                          #{starter.id.toString().padStart(4, "0")}
                        </span>
                        <h3 className={`font-display font-black text-xl tracking-tight mt-0.5 ${
                          isLightTheme ? "text-slate-900" : "text-white"
                        }`}>
                          {starter.name}
                        </h3>
                        <p className="text-[10px] font-mono text-blue-500 dark:text-blue-400 uppercase font-bold mt-1">
                          {starter.category}
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        {starter.types.map((t) => (
                          <span
                            key={t}
                            className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${
                              isLightTheme
                                ? "bg-slate-50 border-slate-200 text-slate-700"
                                : "bg-white/5 border-white/10 text-slate-300"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative my-4">
                      <img
                        src={getOfficialArtwork(starter.id)}
                        alt={starter.name}
                        className="w-36 h-36 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="relative z-10 space-y-2 mt-auto">
                      <div className={`grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] border-t pt-3 ${
                        isLightTheme ? "border-slate-100" : "border-white/5"
                      }`}>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-bold uppercase font-mono">HP</span>
                          <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{starter.stats.hp}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-bold uppercase font-mono">Speed</span>
                          <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{starter.stats.speed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-bold uppercase font-mono">Atk</span>
                          <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{starter.stats.attack}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-bold uppercase font-mono">Def</span>
                          <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{starter.stats.defense}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legendary & Mythicals */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-red-500" />
                <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                  Legendary & Mythical Roster
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...details.legendaries, ...details.mythicals].map((legend) => (
                  <div
                    key={legend.id}
                    onClick={() => onSelectPokemonById(legend.id)}
                    className={`p-6 rounded-[2rem] border cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-all flex flex-col justify-between group h-[360px] relative overflow-hidden ${
                      isLightTheme
                        ? "bg-white border-slate-200 hover:border-amber-500/40 shadow-sm"
                        : "bg-[#0E1726]/40 border-white/5 hover:border-amber-500/20"
                    }`}
                  >
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 block">
                          #{legend.id.toString().padStart(4, "0")}
                        </span>
                        <h3 className={`font-display font-black text-lg tracking-tight mt-0.5 ${
                          isLightTheme ? "text-slate-900" : "text-white"
                        }`}>
                          {legend.name}
                        </h3>
                      </div>
                      <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500">
                        LEGENDARY
                      </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center relative my-4">
                      <img
                        src={getOfficialArtwork(legend.id)}
                        alt={legend.name}
                        className="w-32 h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <p className={`text-[11px] leading-relaxed line-clamp-3 text-center mb-1 ${
                      isLightTheme ? "text-slate-600" : "text-slate-400"
                    }`}>
                      {legend.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: GYMS & ELITE FOUR */}
        {regionTab === "gyms" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
            {/* Gym Leaders */}
            {details.gyms && details.gyms.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                    Regional Gym Leaders & Badges
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {details.gyms.map((gym, index) => (
                    <div
                      key={gym.name}
                      className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                        isLightTheme
                          ? "bg-white border-slate-200 shadow-sm"
                          : "bg-[#131C31]/40 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-slate-500">
                          GYM 0{index + 1}
                        </span>
                        <span className="text-xl">{gym.badgeUrl}</span>
                      </div>

                      <div>
                        <h4 className={`font-display font-black text-lg tracking-tight ${
                          isLightTheme ? "text-slate-900" : "text-white"
                        }`}>
                          {gym.name}
                        </h4>
                        <p className="text-[10px] font-mono font-bold text-blue-500 uppercase mt-0.5">
                          {gym.typeSpecialty} Specialist
                        </p>
                      </div>

                      <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                        isLightTheme ? "border-slate-100" : "border-white/5"
                      }`}>
                        <span className="text-slate-500 font-bold uppercase">Badge Name</span>
                        <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{gym.badgeName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Elite Four */}
            {details.eliteFour && details.eliteFour.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Crown className="w-5 h-5 text-amber-400" />
                  <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                    Elite Four Champions Council
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {details.eliteFour.map((e4, index) => (
                    <div
                      key={e4.name}
                      className={`p-6 rounded-2xl border flex flex-col justify-between ${
                        isLightTheme
                          ? "bg-white border-slate-200 shadow-sm"
                          : "bg-[#131C31]/40 border-white/5"
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold text-amber-500 uppercase block mb-1">
                        ELITE MEMBER 0{index + 1}
                      </span>
                      <h4 className={`font-display font-black text-lg ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                        {e4.name}
                      </h4>
                      <p className="text-xs text-blue-400 font-mono font-bold mt-1 uppercase">
                        {e4.typeSpecialty} Master
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-500/10 text-[11px] font-mono font-bold text-slate-400 flex justify-between">
                        <span>ACE SPECIES:</span>
                        <span className="text-amber-400">{e4.acePokemon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* TAB 5: REGIONAL WILD SPECIES GRID */}
        {regionTab === "wild" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                  Regional Wild Species Catalog
                </h2>
              </div>

              {/* Quick Search and Type Select */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search species..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`pl-10 pr-4 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-48 ${
                      isLightTheme
                        ? "bg-white border-slate-200 text-slate-800 placeholder-slate-400"
                        : "bg-slate-900 border-white/10 text-white placeholder-slate-400"
                    }`}
                  />
                </div>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={`px-4 py-2 text-xs rounded-xl border focus:outline-none font-bold ${
                    isLightTheme
                      ? "bg-white border-slate-200 text-slate-800"
                      : "bg-slate-900 border-white/10 text-white"
                  }`}
                >
                  <option value="all">All Types</option>
                  <option value="grass">Grass</option>
                  <option value="fire">Fire</option>
                  <option value="water">Water</option>
                  <option value="electric">Electric</option>
                  <option value="psychic">Psychic</option>
                  <option value="poison">Poison</option>
                  <option value="normal">Normal</option>
                </select>
              </div>
            </div>

            {filteredSpecies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {filteredSpecies.map((pkmn) => (
                  <div
                    key={pkmn.id}
                    onClick={() => onSelectPokemonById(pkmn.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col items-center justify-between transition-all duration-200 hover:-translate-y-1 group ${
                      isLightTheme
                        ? "bg-white border-slate-200 hover:border-blue-500/40 shadow-sm"
                        : "bg-[#131C31]/40 border-white/5 hover:border-white/10"
                    }`}
                  >
                    <span className="text-[9px] font-mono font-bold text-slate-500">
                      #{pkmn.id.toString().padStart(4, "0")}
                    </span>

                    <img
                      src={getSprite(pkmn.id)}
                      alt={pkmn.name}
                      className="w-16 h-16 object-contain my-1.5 group-hover:scale-110 transition-transform duration-200"
                    />

                    <h4 className={`text-xs font-bold text-center truncate w-full ${
                      isLightTheme ? "text-slate-800" : "text-slate-200"
                    }`}>
                      {pkmn.name}
                    </h4>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 text-sm font-mono border border-dashed border-white/10 rounded-2xl">
                No matching species found in this region.
              </div>
            )}
          </motion.div>
        )}
      </div>
    );
  }

  // Horizontal scroll layout (Main Page preview)
  if (layout === "scroll") {
    return (
      <div 
        className="relative group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollLeft();
          }}
          className={`absolute -left-5 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 active:scale-95 ${
            isLightTheme
              ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-slate-200"
              : "bg-slate-950/90 backdrop-blur-xl border-white/10 text-slate-100 hover:bg-slate-900 shadow-black/50"
          }`}
          aria-label="Scroll region cards left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollRight();
          }}
          className={`absolute -right-5 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full border flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 active:scale-95 ${
            isLightTheme
              ? "bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-slate-200"
              : "bg-slate-950/90 backdrop-blur-xl border-white/10 text-slate-100 hover:bg-slate-900 shadow-black/50"
          }`}
          aria-label="Scroll region cards right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 px-1 scrollbar-none"
        >
          {[...REGIONS_DATA, ...REGIONS_DATA].map((region, index) => {
            const starIds = region.starterIds || [1, 4, 7];
            const starters = region.id === "kanto" ? [1, 4, 7, 25] : starIds;
            const legendaryId = getRegionLegendaryId(region.id);
            const slogan = getRegionSlogan(region.id);
            const romanGen = getRomanGeneration(region.generationIndex);
            const cardStyles = getRegionCardStyles(region.id, isLightTheme);

            return (
              <div
                key={`${region.id}-${index}`}
                onClick={() => onSelectRegion(region)}
                className={`min-w-[340px] max-w-[360px] p-6 rounded-[2rem] cursor-pointer border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px] group shadow-lg ${cardStyles.gradient}`}
              >
                {renderJapaneseBackground(region.nativeName)}

                <div className="flex flex-col justify-between h-full min-h-[170px] relative z-10 pr-24">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border ${cardStyles.badge}`}>
                      GENERATION {romanGen}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className={`font-sans font-black text-3xl tracking-tight uppercase leading-none ${cardStyles.title}`}>
                      {region.name}
                    </h3>
                    <p className={`text-[11px] font-medium leading-tight mt-1.5 max-w-[160px] ${cardStyles.slogan}`}>
                      {slogan}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-5">
                    {starters.map((id) => (
                      <div
                        key={id}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-110 ${
                          isLightTheme
                            ? "bg-white/85 border-slate-200/60"
                            : "bg-black/15 border-white/10"
                        }`}
                        title={`Starter #${id}`}
                      >
                        <img
                          src={getOfficialArtwork(id)}
                          alt="starter"
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute right-1 bottom-1 w-32 h-32 md:w-34 md:h-34 pointer-events-none">
                  <img
                    src={getOfficialArtwork(legendaryId)}
                    alt="legendary"
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
                  />
                </div>

                <div className={`absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center border shadow-sm transition-all duration-200 ${cardStyles.arrow}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Full Grid layout (rendered on Regions tab)
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-2 mb-16">
      {/* World Map View ON / OFF Switch Toggle Bar */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 md:p-5 rounded-3xl border transition-all ${
        isLightTheme ? "bg-white/90 border-slate-200/80 shadow-sm" : "bg-[#0C0D10]/50 border-white/5"
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`font-display font-black text-lg uppercase tracking-tight ${isLightTheme ? "text-slate-900" : "text-white"}`}>
              World Map View
            </h3>
            <p className="text-xs text-slate-400">
              Interactive cartographic overview of all 10 Pokémon regions
            </p>
          </div>
        </div>

        {/* ON / OFF Switch Toggle */}
        <button
          onClick={() => setRegionsViewMode(regionsViewMode === "worldmap" ? "default" : "worldmap")}
          className="flex items-center gap-3 cursor-pointer group focus:outline-none"
          title="Toggle between Interactive World Map and Classic Region Cards"
        >
          <span className={`text-xs font-mono font-extrabold uppercase transition-colors ${
            regionsViewMode === "worldmap" ? "text-emerald-500" : "text-slate-400"
          }`}>
            {regionsViewMode === "worldmap" ? "World Map ON" : "World Map OFF"}
          </span>

          <div className={`w-14 h-8 rounded-full p-1 transition-all duration-300 relative border ${
            regionsViewMode === "worldmap"
              ? "bg-emerald-500/20 border-emerald-500/50 shadow-inner"
              : isLightTheme ? "bg-slate-200 border-slate-300" : "bg-white/10 border-white/10"
          }`}>
            <div className={`w-6 h-6 rounded-full transition-transform duration-300 shadow-md flex items-center justify-center ${
              regionsViewMode === "worldmap"
                ? "translate-x-6 bg-emerald-500 text-white"
                : "translate-x-0 bg-slate-400 text-slate-900"
            }`}>
              <Globe className="w-3.5 h-3.5" />
            </div>
          </div>
        </button>
      </div>

      {/* Render selected view */}
      {regionsViewMode === "worldmap" ? (
        <WorldMapRegionsView
          isLightTheme={isLightTheme}
          onSelectRegion={onSelectRegion}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONS_DATA.map((region) => {
            const starIds = region.starterIds || [1, 4, 7];
            const starters = region.id === "kanto" ? [1, 4, 7, 25] : starIds;
            const legendaryId = getRegionLegendaryId(region.id);
            const slogan = getRegionSlogan(region.id);
            const romanGen = getRomanGeneration(region.generationIndex);
            const cardStyles = getRegionCardStyles(region.id, isLightTheme);

            return (
              <div
                key={region.id}
                onClick={() => onSelectRegion(region)}
                className={`p-6 rounded-[2rem] cursor-pointer border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px] group shadow-lg ${cardStyles.gradient}`}
              >
                {renderJapaneseBackground(region.nativeName)}

                <div className="flex flex-col justify-between h-full min-h-[170px] relative z-10 pr-24">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border ${cardStyles.badge}`}>
                      GENERATION {romanGen}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className={`font-sans font-black text-3xl tracking-tight uppercase leading-none ${cardStyles.title}`}>
                      {region.name}
                    </h3>
                    <p className={`text-[11px] font-medium leading-tight mt-1.5 max-w-[160px] ${cardStyles.slogan}`}>
                      {slogan}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-5">
                    {starters.map((id) => (
                      <div
                        key={id}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-110 ${
                          isLightTheme
                            ? "bg-white/85 border-slate-200/60"
                            : "bg-black/15 border-white/10"
                        }`}
                        title={`Starter #${id}`}
                      >
                        <img
                          src={getOfficialArtwork(id)}
                          alt="starter"
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute right-1 bottom-1 w-32 h-32 md:w-34 md:h-34 pointer-events-none">
                  <img
                    src={getOfficialArtwork(legendaryId)}
                    alt="legendary"
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
                  />
                </div>

                <div className={`absolute right-5 top-5 w-8 h-8 rounded-full flex items-center justify-center border shadow-sm transition-all duration-200 ${cardStyles.arrow}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
