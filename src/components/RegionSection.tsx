import React, { useState, useMemo, useRef } from "react";
import { 
  ChevronRight, Shield, Award, Users, MapPin, Gamepad2, ArrowLeft, 
  Search, SlidersHorizontal, Info, Swords, Sparkles, Heart 
} from "lucide-react";
import { Region } from "../types";
import { REGIONS_DATA } from "../data/regions";
import { getRegionDetail, FeaturedPokemon, Leader } from "../data/regionDetails";
import { motion, AnimatePresence } from "motion/react";
import GraphicalRegionMap from "./GraphicalRegionMap";

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
    // Obsidian Dark Mode - with a subtle transparent tint of their original color bleeding from the top-right
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
          gradient: "bg-[#09090B] bg-[radial-gradient(ellipse_at_top_right,rgba(120,113,108,0.18),transparent_60%)] border-zinc-500/20 shadow-[0_10px_30px_rgba(120,113,108,0.06)] text-white",
          badge: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",
          title: "text-white",
          slogan: "text-zinc-100/60",
          arrow: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20 hover:bg-zinc-500/25"
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
          gradient: "bg-[#0A0A0C] border-white/15 shadow-[0_10px_30px_rgba(255,255,255,0.02)] text-white",
          badge: "bg-white/10 text-slate-200 border-white/5",
          title: "text-white",
          slogan: "text-slate-400",
          arrow: "bg-white/10 text-white border-white/5 hover:bg-white hover:text-black"
        };
    }
  }
};

interface RegionSectionProps {
  isLightTheme: boolean;
  onSelectRegion: (region: Region | null) => void;
  selectedRegion: Region | null;
  onSelectPokemonById: (id: number) => void;
  layout: "scroll" | "grid";
}

export default function RegionSection({
  isLightTheme,
  onSelectRegion,
  selectedRegion,
  onSelectPokemonById,
  layout,
}: RegionSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const renderJapaneseBackground = (nativeName: string) => {
    const japName = nativeName.split(" ")[0] || nativeName;
    // Repeat Japanese region name to form a scrolling train
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
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animateScroll = (time: number) => {
      // Do not scroll on mobile/tablet viewports (screen width < 768)
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        lastTime = time;
        animationFrameId = requestAnimationFrame(animateScroll);
        return;
      }

      if (!isHovered) {
        const delta = (time - lastTime) / 16; // Normalise to 60fps
        lastTime = time;
        
        // Gentle train speed
        const speed = 0.55; 
        scrollContainer.scrollLeft += speed * delta;
        
        // Seamless wrap back to start of the first set
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

  // List of 4 key representative species for each region in the main grid
  const regionRepresentatives: Record<string, number[]> = {
    kanto: [1, 4, 7, 150],
    johto: [152, 155, 158, 250],
    hoenn: [252, 255, 258, 384],
    sinnoh: [387, 390, 393, 487],
    unova: [495, 498, 501, 644],
    kalos: [650, 653, 656, 716],
    alola: [722, 725, 728, 791],
    galar: [810, 813, 816, 888],
    hisui: [722, 155, 501, 493],
    paldea: [906, 909, 912, 1008]
  };

  // Region specific background gradients
  const getRegionGradient = (id: string) => {
    switch (id) {
      case "kanto":
        return "from-[#EF4444]/20 to-[#991B1B]/40 border-[#EF4444]/35";
      case "johto":
        return "from-[#F59E0B]/20 to-[#92400E]/40 border-[#F59E0B]/35";
      case "hoenn":
        return "from-[#10B981]/20 to-[#065F46]/40 border-[#10B981]/35";
      case "sinnoh":
        return "from-[#3B82F6]/20 to-[#1E40AF]/40 border-[#3B82F6]/35";
      case "unova":
        return "from-[#8B5CF6]/20 to-[#5B21B6]/40 border-[#8B5CF6]/35";
      case "kalos":
        return "from-[#EC4899]/20 to-[#9D174D]/40 border-[#EC4899]/35";
      case "alola":
        return "from-[#F59E0B]/20 to-[#1E3A8A]/40 border-[#F59E0B]/35";
      case "galar":
        return "from-[#06B6D4]/20 to-[#155E75]/40 border-[#06B6D4]/35";
      case "hisui":
        return "from-[#4B5563]/20 to-[#1F2937]/40 border-[#4B5563]/35";
      case "paldea":
        return "from-[#D946EF]/20 to-[#701A75]/40 border-[#D946EF]/35";
      default:
        return "from-[#3B82F6]/10 to-slate-900 border-white/5";
    }
  };

  const getRegionGlow = (id: string) => {
    switch (id) {
      case "kanto": return "group-hover:shadow-[#EF4444]/25";
      case "johto": return "group-hover:shadow-[#F59E0B]/25";
      case "hoenn": return "group-hover:shadow-[#10B981]/25";
      case "sinnoh": return "group-hover:shadow-[#3B82F6]/25";
      case "unova": return "group-hover:shadow-[#8B5CF6]/25";
      case "kalos": return "group-hover:shadow-[#EC4899]/25";
      case "alola": return "group-hover:shadow-[#F59E0B]/25";
      case "galar": return "group-hover:shadow-[#06B6D4]/25";
      case "hisui": return "group-hover:shadow-[#4B5563]/25";
      case "paldea": return "group-hover:shadow-[#D946EF]/25";
      default: return "group-hover:shadow-blue-500/10";
    }
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

  // Generate full local species list based on active region range
  const regionalSpecies = useMemo(() => {
    if (!selectedRegion) return [];
    const range = regionRanges[selectedRegion.id] || { start: 1, end: 151 };
    const list = [];
    
    // Create a beautiful mock representation of Pokémon species inside this range for visual grid
    for (let i = range.start; i <= Math.min(range.start + 60, range.end); i++) {
      // Basic type and name guesser based on IDs for accurate feel
      let name = `Species #${i}`;
      let types = ["normal"];
      if (i === 1 || i === 2 || i === 3) { name = "Bulbasaur"; types = ["grass", "poison"]; }
      else if (i === 4 || i === 5 || i === 6) { name = "Charmander"; types = ["fire"]; }
      else if (i === 7 || i === 8 || i === 9) { name = "Squirtle"; types = ["water"]; }
      else if (i === 25) { name = "Pikachu"; types = ["electric"]; }
      else if (i === 26) { name = "Raichu"; types = ["electric"]; }
      else if (i === 133) { name = "Eevee"; types = ["normal"]; }
      else if (i === 150) { name = "Mewtwo"; types = ["psychic"]; }
      else if (i === 151) { name = "Mew"; types = ["psychic"]; }
      else if (i === 152) { name = "Chikorita"; types = ["grass"]; }
      else if (i === 155) { name = "Cyndaquil"; types = ["fire"]; }
      else if (i === 158) { name = "Totodile"; types = ["water"]; }
      else if (i === 249) { name = "Lugia"; types = ["psychic", "flying"]; }
      else if (i === 250) { name = "Ho-Oh"; types = ["fire", "flying"]; }
      else if (i === 252) { name = "Treecko"; types = ["grass"]; }
      else if (i === 255) { name = "Torchic"; types = ["fire"]; }
      else if (i === 258) { name = "Mudkip"; types = ["water"]; }
      else if (i === 384) { name = "Rayquaza"; types = ["dragon", "flying"]; }
      else if (i === 387) { name = "Turtwig"; types = ["grass"]; }
      else if (i === 390) { name = "Chimchar"; types = ["fire"]; }
      else if (i === 393) { name = "Piplup"; types = ["water"]; }
      else if (i === 487) { name = "Giratina"; types = ["ghost", "dragon"]; }
      else if (i === 493) { name = "Arceus"; types = ["normal"]; }
      else if (i === 495) { name = "Snivy"; types = ["grass"]; }
      else if (i === 498) { name = "Tepig"; types = ["fire"]; }
      else if (i === 501) { name = "Oshawott"; types = ["water"]; }
      else if (i === 644) { name = "Zekrom"; types = ["dragon", "electric"]; }
      else if (i === 650) { name = "Chespin"; types = ["grass"]; }
      else if (i === 653) { name = "Fennekin"; types = ["fire"]; }
      else if (i === 656) { name = "Froakie"; types = ["water"]; }
      else if (i === 716) { name = "Xerneas"; types = ["fairy"]; }
      else if (i === 722) { name = "Rowlet"; types = ["grass", "flying"]; }
      else if (i === 725) { name = "Litten"; types = ["fire"]; }
      else if (i === 728) { name = "Popplio"; types = ["water"]; }
      else if (i === 791) { name = "Solgaleo"; types = ["psychic", "steel"]; }
      else if (i === 810) { name = "Grookey"; types = ["grass"]; }
      else if (i === 813) { name = "Scorbunny"; types = ["fire"]; }
      else if (i === 816) { name = "Sobble"; types = ["water"]; }
      else if (i === 888) { name = "Zacian"; types = ["fairy", "steel"]; }
      else if (i === 906) { name = "Sprigatito"; types = ["grass"]; }
      else if (i === 909) { name = "Fuecoco"; types = ["fire"]; }
      else if (i === 912) { name = "Quaxly"; types = ["water"]; }
      else if (i === 1008) { name = "Miraidon"; types = ["electric", "dragon"]; }
      else {
        // generic fill names based on standard pokedex
        const names = ["Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath"];
        name = names[(i % names.length)] || `Species #${i}`;
        const typeOptions = [["normal"], ["grass"], ["fire"], ["water"], ["electric"], ["poison"], ["ground"], ["flying"], ["bug"], ["psychic"]];
        types = typeOptions[(i % typeOptions.length)] || ["normal"];
      }

      list.push({ id: i, name, types });
    }
    return list;
  }, [selectedRegion]);

  // Apply Search Query & Filter logic
  const filteredSpecies = useMemo(() => {
    return regionalSpecies.filter((pkmn) => {
      const matchesSearch = pkmn.name.toLowerCase().includes(searchQuery.toLowerCase()) || pkmn.id.toString() === searchQuery;
      const matchesType = selectedType === "all" || pkmn.types.includes(selectedType);
      return matchesSearch && matchesType;
    });
  }, [regionalSpecies, searchQuery, selectedType]);

  if (selectedRegion) {
    const details = getRegionDetail(selectedRegion.id);

    return (
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        {/* Back navigation */}
        <button
          onClick={() => onSelectRegion(null)}
          className={`mb-8 px-5 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer text-xs font-extrabold uppercase tracking-wider border transition-all ${
            isLightTheme
              ? "bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-sm"
              : "bg-slate-900 border-white/10 text-slate-100 hover:bg-white/5 shadow-md"
          }`}
        >
          <ArrowLeft className="w-4 h-4 text-blue-500" />
          <span>Back to Regions</span>
        </button>

        {/* Elegant Title Block Replacing standard banner */}
        {(() => {
          const bannerStyle = getRegionCardStyles(selectedRegion.id, isLightTheme);
          return (
            <div className={`mb-10 p-8 md:p-12 rounded-[2rem] border relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
              bannerStyle.gradient
            }`}>
              {/* Scrolling Japanese Background Train */}
              {renderJapaneseBackground(selectedRegion.nativeName)}

              {/* Decorative neon colored background elements */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] opacity-25 bg-[#FAF7F0]/10" />

              <div className="relative z-10 max-w-2xl">
                <span className={`text-xs font-mono font-black uppercase tracking-[0.25em] block mb-3 ${
                  isLightTheme ? "text-slate-800/80" : "text-white/80"
                }`}>
                  MIGHTY REGION OF GEN {selectedRegion.generationIndex}
                </span>
                <h1 className={`font-display font-black text-4xl md:text-6xl tracking-tight mb-4 uppercase ${bannerStyle.title}`}>
                  {selectedRegion.name}
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
          );
        })()}

        {/* 3 Columns: Resident Professor, Regional Champion, Notable Villain Syndicate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Professor */}
          <div className={`p-6 rounded-2xl border transition-all ${
            isLightTheme 
              ? "bg-white border-slate-200 shadow-sm" 
              : "bg-[#131C31]/40 border-white/5 hover:border-white/10"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Resident Professor</p>
                <h4 className={`font-display font-extrabold text-sm mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{selectedRegion.professor}</h4>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {details.professorDesc}
            </p>
          </div>

          {/* Card 2: Champion */}
          <div className={`p-6 rounded-2xl border transition-all ${
            isLightTheme 
              ? "bg-white border-slate-200 shadow-sm" 
              : "bg-[#131C31]/40 border-white/5 hover:border-white/10"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Regional Champion</p>
                <h4 className={`font-display font-extrabold text-sm mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{selectedRegion.champion}</h4>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {details.championDesc}
            </p>
          </div>

          {/* Card 3: Villain */}
          <div className={`p-6 rounded-2xl border transition-all ${
            isLightTheme 
              ? "bg-white border-slate-200 shadow-sm" 
              : "bg-[#131C31]/40 border-white/5 hover:border-white/10"
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Notable Villain Syndicate</p>
                <h4 className={`font-display font-extrabold text-sm mt-0.5 ${isLightTheme ? "text-slate-900" : "text-slate-100"}`}>{details.villainName}</h4>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              {details.villainDesc}
            </p>
          </div>
        </div>

        {/* Interactive Landmarks Map */}
        <div className="mb-14">
          <GraphicalRegionMap
            regionId={selectedRegion.id}
            isLightTheme={isLightTheme}
          />
        </div>

        {/* Starter Partners */}
        <div className="mb-14">
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
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Header */}
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

                {/* Big Image Artwork in Center */}
                <div className="flex-1 flex items-center justify-center relative my-4">
                  <div className="absolute w-24 h-24 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                  <img
                    src={getOfficialArtwork(starter.id)}
                    alt={starter.name}
                    className="w-36 h-36 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Stats details bar */}
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

        {/* Legendary & Mythical Pokémon */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-red-500" />
            <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
              Legendary & Mythical Pokémon
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
                {/* Glow outline */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

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
                  <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400">
                    LEGENDARY
                  </span>
                </div>

                <div className="flex-1 flex items-center justify-center relative my-4">
                  <div className="absolute w-24 h-24 rounded-full bg-amber-500/5 blur-xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
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

        {/* Gyms & Badges */}
        {details.gyms && details.gyms.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-indigo-400" />
              <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                Regional Gyms
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {details.gyms.map((gym, index) => (
                <div
                  key={gym.name}
                  className={`p-5 rounded-2xl border flex flex-col justify-between transition-all hover:scale-102 ${
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
                    <h4 className={`font-display font-black text-base tracking-tight ${
                      isLightTheme ? "text-slate-900" : "text-white"
                    }`}>
                      {gym.name}
                    </h4>
                    <p className="text-[10px] font-mono font-bold text-blue-500 dark:text-blue-400 uppercase mt-0.5">
                      {gym.typeSpecialty} Specialist
                    </p>
                  </div>

                  <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                    isLightTheme ? "border-slate-100" : "border-white/5"
                  }`}>
                    <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Badge</span>
                    <span className={`font-bold ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{gym.badgeName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regional Wild Grid species list */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-teal-400" />
              <h2 className="font-display font-extrabold text-2xl tracking-tight uppercase">
                Regional Wild Grid
              </h2>
            </div>

            {/* Quick search / filters */}
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
        </div>
      </div>
    );
  }

  // Horizontal scroll layout
  if (layout === "scroll") {
    return (
      <div 
        className="relative group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Left Scroll Navigation Button */}
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

        {/* Right Scroll Navigation Button */}
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

        {/* Scrollable container */}
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
                {/* Scrolling Japanese Background Train */}
                {renderJapaneseBackground(region.nativeName)}

                {/* Content Container */}
                <div className="flex flex-col justify-between h-full min-h-[170px] relative z-10 pr-24">
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border ${cardStyles.badge}`}>
                      GENERATION {romanGen}
                    </span>
                  </div>

                  {/* Middle Info */}
                  <div className="mt-4">
                    <h3 className={`font-sans font-black text-3xl tracking-tight uppercase leading-none ${cardStyles.title}`}>
                      {region.name}
                    </h3>
                    <p className={`text-[11px] font-medium leading-tight mt-1.5 max-w-[160px] ${cardStyles.slogan}`}>
                      {slogan}
                    </p>
                  </div>

                  {/* Starter Icons Row */}
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

                {/* Legendary floating image on the right */}
                <div className="absolute right-1 bottom-1 w-32 h-32 md:w-34 md:h-34 pointer-events-none">
                  <img
                    src={getOfficialArtwork(legendaryId)}
                    alt="legendary"
                    className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
                  />
                </div>

                {/* Diagonal arrow in the top right */}
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
              {/* Scrolling Japanese Background Train */}
              {renderJapaneseBackground(region.nativeName)}

              {/* Content Container */}
              <div className="flex flex-col justify-between h-full min-h-[170px] relative z-10 pr-24">
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border ${cardStyles.badge}`}>
                    GENERATION {romanGen}
                  </span>
                </div>

                {/* Middle Info */}
                <div className="mt-4">
                  <h3 className={`font-sans font-black text-3xl tracking-tight uppercase leading-none ${cardStyles.title}`}>
                    {region.name}
                  </h3>
                  <p className={`text-[11px] font-medium leading-tight mt-1.5 max-w-[160px] ${cardStyles.slogan}`}>
                    {slogan}
                  </p>
                </div>

                {/* Starter Icons Row */}
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

              {/* Legendary floating image on the right */}
              <div className="absolute right-1 bottom-1 w-32 h-32 md:w-34 md:h-34 pointer-events-none">
                <img
                  src={getOfficialArtwork(legendaryId)}
                  alt="legendary"
                  className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
                />
              </div>

              {/* Diagonal arrow in the top right */}
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
