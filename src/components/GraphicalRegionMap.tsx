import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, Home, Compass, Trees, Skull, Crown, Eye, Swords, Shield, 
  Activity, Zap, Gauge, Flame, Layers, RotateCw, Sparkles, Award, Maximize2, Minimize2
} from "lucide-react";
import { REGIONAL_MAPS, MAP_CONNECTIONS, RAILWAY_CONNECTIONS, MapNode } from "../data/landmarks";

const HABITAT_POKEMON_NAMES: Record<number, string> = {
  35: "Clefairy",
  41: "Zubat",
  74: "Geodude",
  129: "Magikarp",
  130: "Gyarados",
  265: "Wurmple",
  285: "Shroomish",
  296: "Makuhita",
  299: "Nosepass",
  302: "Sableye",
  399: "Bidoof",
  403: "Shinx",
  412: "Burmy",
  413: "Wormadam",
  422: "Shellos",
  423: "Gastrodon",
  436: "Bronzor",
  443: "Gible",
  444: "Gabite",
  453: "Croagunk",
  455: "Carnivine",
  540: "Sewaddle",
  543: "Venipede",
  566: "Archen",
  595: "Joltik",
  599: "Klink",
  661: "Fletchling",
  664: "Scatterbug",
  688: "Binacle",
  734: "Yungoos",
  735: "Gumshoos",
  761: "Bounsweet",
  762: "Steenee",
  774: "Minior",
  777: "Togedemaru",
  782: "Jangmo-o",
  783: "Hakamo-o",
  819: "Skwovet",
  821: "Rookidee",
  944: "Shroodle",
  945: "Grafaiai",
  978: "Great Tusk",
  984: "Iron Valiant"
};

interface GraphicalRegionMapProps {
  regionId: string;
  isLightTheme: boolean;
  selectedNodeId?: string;
  onSelectNode?: (nodeId: string) => void;
  currentLocationId?: string;
  destinationLocationId?: string;
  travelProgress?: number;
}

// Detailed custom lore database for proper town/city information
interface TownLore {
  professor?: string;
  professorPhoto?: string;
  badge?: string;
  leader?: string;
  facilities: string[];
  landmarks: string[];
  history: string;
}

const REGION_TOWN_LORE: Record<string, Record<string, TownLore>> = {
  kanto: {
    pallet_town: {
      professor: "Prof. Oak",
      facilities: ["Oak's Research Lab", "Trainer Sanctuary", "Healing Hub"],
      landmarks: ["Red's Childhood House", "Pallet Harbor Pier"],
      history: "A peaceful coastal hamlet known for its fresh breezes. Famous as the origin point of Champions Red and Blue. Professor Oak operates his research laboratory here, guiding new trainers."
    },
    saffron_city: {
      leader: "Sabrina",
      badge: "Marsh Badge",
      facilities: ["Saffron Gym", "Silph Co. Headquarters", "Magnet Train Terminal"],
      landmarks: ["Fighting Dojo", "Mr. Psychic's House"],
      history: "The high-tech business capital of Kanto, Saffron features soaring skyscrapers, the massive Silph Co. campus, and the high-speed Magnet Train connection directly into Goldenrod City."
    },
    celadon_city: {
      leader: "Erika",
      badge: "Rainbow Badge",
      facilities: ["Celadon Gym", "Celadon Department Store", "Celadon Condominiums"],
      landmarks: ["Prize Exchange", "Celadon Game Corner"],
      history: "A wealthy, vibrant city decorated in lush botanical gardens. Known for hosting Kanto's largest multi-story shopping mall and the famous aromatic green gym overseen by Erika."
    }
  },
  johto: {
    new_bark_town: {
      professor: "Prof. Elm",
      facilities: ["Elm's High-Tech Laboratory", "Wind Turbine Array"],
      landmarks: ["New Bark Coastal Overlook", "Ethan & Lyra's Cottages"],
      history: "A modern coastal township where winds of new adventure blow. Prof. Elm conducts evolution and breeding mechanics research here in his state-of-the-art laboratory."
    },
    goldenrod_city: {
      leader: "Whitney",
      badge: "Plain Badge",
      facilities: ["Goldenrod Gym", "Radio Tower Station", "Magnet Train Station"],
      landmarks: ["Global Trade Station", "Underground Mall", "Department Store"],
      history: "The grandest metropolis of Johto, boasting the Magnet Train terminus that links to Kanto. Features massive shopping blocks and the famous Radio Tower broadcasting across the continent."
    }
  },
  hoenn: {
    littleroot_town: {
      professor: "Prof. Birch",
      facilities: ["Birch's Field Outpost", "Eco Greenhouse"],
      landmarks: ["Littleroot Pond", "Moving Trucks Depot"],
      history: "A rustic, nature-centric village nestled amongst deep forests. Prof. Birch frequently conducts field tests directly in the wild, studying Pokémon habitats in their raw elements."
    },
    mauville_city: {
      leader: "Wattson",
      badge: "Dynamo Badge",
      facilities: ["Mauville Underground City", "Cycling Road Terminal", "Game Corner"],
      landmarks: ["Mauville Food Court", "Rydel's Cycle Shop"],
      history: "A highly engineered smart-city built with multi-layered walkways. Powered by advanced clean energy, Mauville coordinates Hoenn's transit grids and holds the regional cycle trials."
    }
  },
  sinnoh: {
    twinleaf_town: {
      facilities: ["Sinnoh Healing Post", "Twinleaf Town Hall"],
      landmarks: ["Lake Verity Entrance", "Childhood Pond"],
      history: "A beautiful, snow-kissed, historic settlement framed by tall pines. It is famous for its cozy, tight-knit neighborhood community and its proximity to the mystical Lake Verity."
    },
    jubilife_city: {
      leader: "Roark / Fantina (Nearby)",
      badge: "Coal Badge / Relic Badge",
      facilities: ["Jubilife TV Building", "Trainer's School", "Jubilife Global Terminal"],
      landmarks: ["Pokétch Company Headquarters", "Global Wonder Station"],
      history: "The industrial crown jewel of Sinnoh, Jubilife is famous for creating the modern Pokétch. It hosts massive television broadcasters and global trading centers."
    }
  },
  unova: {
    nuvema_town: {
      professor: "Prof. Juniper",
      facilities: ["Juniper's Biology Lab", "Coastal Pier"],
      landmarks: ["Nuvema Shoreline", "Nuvema Wind Gauge"],
      history: "A quiet, breezy seaside town on the eastern shore of Unova. Professor Juniper's lab studies the origins of species here next to the crashing waves."
    },
    castelia_city: {
      leader: "Burgh",
      badge: "Insect Badge",
      facilities: ["Castelia Gym", "Battle Company", "Studio Castelia"],
      landmarks: ["Castelia Piers", "Unity Tower Ferry", "Castelia Cone Stand"],
      history: "A magnificent, sweeping skyscraper metropolis. It features cobblestone streets, artistic avenues, and a large central plaza where people gather under the modern skyline."
    }
  },
  kalos: {
    vaniville_town: {
      facilities: ["Santalune Trail Gate", "Vaniville Post Office"],
      landmarks: ["Rhyhorn Racing Yard", "Scenic Route 1 Arch"],
      history: "A highly elegant, European-styled town decorated with decorative stone flower boxes. Renowned for its clean air, proximity to Route 1, and its traditional stone-lined streets."
    },
    lumiose_city: {
      leader: "Clemont",
      badge: "Voltage Badge",
      facilities: ["Lumiose Gym (Prism Tower)", "Professor Sycamore's Lab", "Lysandre Café"],
      landmarks: ["Grand Boulevard Hub", "Museum of Art", "Looker Detective Agency"],
      history: "The brilliant star-shaped cultural capital of Kalos. Features grand radial avenues, high fashion boutiques, and the glowing Prism Tower radiating light across the continent."
    }
  },
  alola: {
    iki_town: {
      professor: "Prof. Kukui (Nearby)",
      facilities: ["Iki Festival Stage", "Island Kahuna Sanctuary"],
      landmarks: ["Hala's Grand House", "Tapu Koko Ruins Path"],
      history: "A traditional mountaintop village on Melemele Island, centered around a majestic wooden festival stage where sacred battles are fought to honor the guardian deity."
    },
    heahea_city: {
      facilities: ["Heahea Hotel", "Dimensional Research Lab", "Surf Shop"],
      landmarks: ["Heahea Ferry Terminal", "Akala Island Shoreline"],
      history: "A bright, warm port city on Akala Island. Welcomes travelers from all over the world with sandy resorts, research labs, and breezy palm trees."
    }
  },
  galar: {
    postwick: {
      professor: "Prof. Magnolia (Nearby)",
      facilities: ["Postwick Sheep Fences", "Slumbering Weald Gate"],
      landmarks: ["Leon's Trophy House", "Postwick Meadow"],
      history: "A quaint, idyllic agricultural village in southern Galar. Rolling hills, traditional stone-brick cottages, and fluffy Wooloo grazing in the peaceful pastures define this quiet home."
    },
    wyndon: {
      leader: "Leon / Champion Arena",
      badge: "Galar Cup Trophy",
      facilities: ["Wyndon Stadium", "Rose Tower Terminal", "Grand Wyndon Hotel"],
      landmarks: ["Wyndon Plaza Clock", "Wyndon Monorail", "Battle Tower Peak"],
      history: "The glittering, state-of-the-art capital of Galar. Hosts the massive, stadium-packed Champion Cup matches and features beautiful Victorian structures paired with modern railways."
    }
  },
  hisui: {
    jubilife_village: {
      professor: "Prof. Laventon",
      facilities: ["Galaxy Hall Headquarters", "Jubilife Photography Studio", "The Wall Outpost"],
      landmarks: ["Canal bridge", "Prelude Beach path", "Practice Field Ring"],
      history: "The central hub of early exploration in Sinnoh's past. A secure settlement made of sturdy hand-carved wood, housing the hardworking Survey, Security, and Medical Corps."
    }
  },
  paldea: {
    cabo_poco: {
      facilities: ["Director Clavel's Outpost", "Cabo Poco Shorelines"],
      landmarks: ["Nemona's Clifftop Villa", "Plato Trail Arch"],
      history: "A beautiful, sun-drenched coastal villa overlooking the sparkling southern sea. Known for its breezy olive trees and beautiful, flower-draped houses."
    },
    mesagoza: {
      leader: "Geeta",
      badge: "Paldea League Champion",
      facilities: ["Naranja & Uva Academies", "Mesagoza Plaza", "Delibird Presents"],
      landmarks: ["The Great Academy Staircase", "Grand City Belltower"],
      history: "The immense, historic academic capital of Paldea. Dominated by the giant academy towers rising high above the central plaza's colorful circular mosaic tiles."
    }
  }
};

interface RegionTheme {
  name: string;
  slogan: string;
  bgGradient: string;
  accentColor: string;
  routeColor: string;
  gridColor: string;
  nodeSelectedClass: string;
  nodeClass: string;
}

const REGION_THEMES: Record<string, RegionTheme> = {
  kanto: {
    name: "Kanto Region",
    slogan: "Where the classic Pokémon journey began",
    bgGradient: "from-slate-900 via-slate-950 to-zinc-900",
    accentColor: "text-red-500",
    routeColor: "#ef4444",
    gridColor: "rgba(239, 68, 68, 0.04)",
    nodeSelectedClass: "bg-red-500 border-red-300 shadow-lg shadow-red-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-red-500/30 text-red-400 hover:bg-slate-800 hover:border-red-500/60"
  },
  johto: {
    name: "Johto Region",
    slogan: "A historic land where ancient folklore and myths thrive",
    bgGradient: "from-stone-900 via-[#0C0A07] to-zinc-950",
    accentColor: "text-amber-500",
    routeColor: "#f59e0b",
    gridColor: "rgba(245, 158, 11, 0.04)",
    nodeSelectedClass: "bg-amber-500 border-amber-300 shadow-lg shadow-amber-500/30 text-slate-950 font-black",
    nodeClass: "bg-zinc-900 border-amber-500/30 text-amber-400 hover:bg-zinc-800 hover:border-amber-500/60"
  },
  hoenn: {
    name: "Hoenn Region",
    slogan: "An expansive domain of active volcanoes and deep blue oceans",
    bgGradient: "from-emerald-950/30 via-[#030A08] to-slate-950",
    accentColor: "text-emerald-400",
    routeColor: "#10b981",
    gridColor: "rgba(16, 185, 129, 0.04)",
    nodeSelectedClass: "bg-emerald-500 border-emerald-300 shadow-lg shadow-emerald-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-emerald-500/30 text-emerald-400 hover:bg-slate-800 hover:border-emerald-500/60"
  },
  sinnoh: {
    name: "Sinnoh Region",
    slogan: "A sacred mountain territory steeped in ancient space-time legends",
    bgGradient: "from-blue-950/30 via-[#03060C] to-slate-950",
    accentColor: "text-blue-400",
    routeColor: "#3b82f6",
    gridColor: "rgba(59, 130, 246, 0.04)",
    nodeSelectedClass: "bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-blue-500/30 text-blue-400 hover:bg-slate-800 hover:border-blue-500/60"
  },
  unova: {
    name: "Unova Region",
    slogan: "A highly advanced grid metropolis of truth and ideals",
    bgGradient: "from-purple-950/20 via-[#06030C] to-zinc-950",
    accentColor: "text-purple-400",
    routeColor: "#8b5cf6",
    gridColor: "rgba(139, 92, 246, 0.04)",
    nodeSelectedClass: "bg-purple-500 border-purple-300 shadow-lg shadow-purple-500/30 text-white font-black",
    nodeClass: "bg-zinc-900 border-purple-500/30 text-purple-400 hover:bg-zinc-800 hover:border-purple-500/60"
  },
  kalos: {
    name: "Kalos Region",
    slogan: "A star-shaped realm celebrating fashion, beauty, and art",
    bgGradient: "from-pink-950/20 via-[#0C0308] to-slate-950",
    accentColor: "text-pink-400",
    routeColor: "#ec4899",
    gridColor: "rgba(236, 72, 153, 0.04)",
    nodeSelectedClass: "bg-pink-500 border-pink-300 shadow-lg shadow-pink-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-pink-500/30 text-pink-400 hover:bg-slate-800 hover:border-pink-500/60"
  },
  alola: {
    name: "Alola Region",
    slogan: "A sunny Pacific archipelago featuring scenic island trials",
    bgGradient: "from-cyan-950/30 via-[#03090C] to-zinc-950",
    accentColor: "text-cyan-400",
    routeColor: "#06b6d4",
    gridColor: "rgba(6, 182, 212, 0.04)",
    nodeSelectedClass: "bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-cyan-500/30 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/60"
  },
  galar: {
    name: "Galar Region",
    slogan: "A grand, stadium-packed empire of steam power and sportsmanship",
    bgGradient: "from-sky-950/20 via-[#03070C] to-zinc-950",
    accentColor: "text-sky-400",
    routeColor: "#0ea5e9",
    gridColor: "rgba(14, 165, 233, 0.04)",
    nodeSelectedClass: "bg-sky-500 border-sky-300 shadow-lg shadow-sky-500/30 text-slate-950 font-black",
    nodeClass: "bg-zinc-900 border-sky-500/30 text-sky-400 hover:bg-zinc-800 hover:border-sky-500/60"
  },
  hisui: {
    name: "Hisui Region",
    slogan: "An ancient, wild frontier of historical Sinnoh",
    bgGradient: "from-stone-900 via-[#0B0907] to-stone-950",
    accentColor: "text-stone-400",
    routeColor: "#78716c",
    gridColor: "rgba(120, 113, 108, 0.04)",
    nodeSelectedClass: "bg-stone-600 border-stone-300 shadow-lg shadow-stone-500/30 text-white font-black",
    nodeClass: "bg-stone-950 border-stone-500/30 text-stone-400 hover:bg-stone-900 hover:border-stone-500/60"
  },
  paldea: {
    name: "Paldea Region",
    slogan: "A vast, open peninsula centered around a crater of Terastal light",
    bgGradient: "from-fuchsia-950/20 via-[#0B030F] to-zinc-950",
    accentColor: "text-fuchsia-400",
    routeColor: "#d946ef",
    gridColor: "rgba(217, 70, 239, 0.04)",
    nodeSelectedClass: "bg-fuchsia-500 border-fuchsia-300 shadow-lg shadow-fuchsia-500/30 text-slate-950 font-black",
    nodeClass: "bg-slate-900 border-fuchsia-500/30 text-fuchsia-400 hover:bg-slate-800 hover:border-fuchsia-500/60"
  }
};

const renderRegionBackground = (regionId: string, isLightTheme: boolean) => {
  const strokeColor = isLightTheme ? "rgba(100, 116, 139, 0.08)" : "rgba(255, 255, 255, 0.05)";

  switch (regionId.toLowerCase()) {
    case "kanto":
      return (
        <g id="kanto-bg" className="pointer-events-none">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke={strokeColor} strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke={strokeColor} strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke={strokeColor} strokeWidth="1" strokeDasharray="5,5" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke={strokeColor} strokeWidth="1" strokeDasharray="5,5" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke={strokeColor} strokeWidth="1" strokeDasharray="5,5" />
          <text x="5%" y="23%" fill={isLightTheme ? "#94a3b8" : "#475569"} fontSize="8" fontFamily="monospace">34°40'N</text>
          <text x="5%" y="53%" fill={isLightTheme ? "#94a3b8" : "#475569"} fontSize="8" fontFamily="monospace">34°10'N</text>
          <text x="32%" y="95%" fill={isLightTheme ? "#94a3b8" : "#475569"} fontSize="8" fontFamily="monospace">139°20'E</text>
          <circle cx="58%" cy="45%" r="40" fill="none" stroke={strokeColor} strokeWidth="1" />
          <circle cx="58%" cy="45%" r="80" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="4,8" />
          <circle cx="58%" cy="45%" r="120" fill="none" stroke={strokeColor} strokeWidth="0.5" />
          <g transform="translate(90, 60)">
            <circle cx="0" cy="0" r="15" fill="none" stroke={strokeColor} strokeWidth="1" />
            <line x1="0" y1="-20" x2="0" y2="20" stroke={isLightTheme ? "#64748b" : "#475569"} strokeWidth="1" />
            <line x1="-20" y1="0" x2="20" y2="0" stroke={isLightTheme ? "#64748b" : "#475569"} strokeWidth="1" />
            <polygon points="0,-18 3,-5 0,0 -3,-5" fill={isLightTheme ? "#ef4444" : "#f87171"} />
            <polygon points="0,18 3,5 0,0 -3,5" fill={isLightTheme ? "#64748b" : "#475569"} />
            <text x="-3" y="-22" fill={isLightTheme ? "#475569" : "#cbd5e1"} fontSize="7" fontWeight="bold">N</text>
          </g>
        </g>
      );
    case "johto":
      return (
        <g id="johto-bg" className="pointer-events-none">
          <path d="M 0 350 Q 150 340 300 350 T 600 350 T 900 350 L 900 420 L 0 420 Z" fill={isLightTheme ? "rgba(59, 130, 246, 0.02)" : "rgba(6, 182, 212, 0.015)"} />
          <rect x="1%" y="2%" width="98%" height="96%" fill="none" stroke={strokeColor} strokeWidth="1" />
          <g transform="translate(240, 120) scale(0.6)" opacity="0.12">
            <path d="M 10 70 L 90 70 L 80 50 L 20 50 Z M 20 50 L 80 50 L 70 30 L 30 30 Z M 30 30 L 70 30 L 60 10 L 40 10 Z" fill="none" stroke={isLightTheme ? "#92400e" : "#f59e0b"} strokeWidth="2.5" />
            <line x1="50" y1="10" x2="50" y2="2" stroke={isLightTheme ? "#92400e" : "#f59e0b"} strokeWidth="2" />
          </g>
          <g transform="translate(420, 80) scale(0.7)" opacity="0.08">
            <path d="M0,0 C20,-20 40,-10 60,-30 C50,-10 40,-5 30,0 C40,10 50,20 70,30 C50,20 30,10 0,0" fill={isLightTheme ? "#92400e" : "#f59e0b"} />
          </g>
        </g>
      );
    case "hoenn":
      return (
        <g id="hoenn-bg" className="pointer-events-none">
          <path d="M 400 0 C 350 150 420 280 480 320 C 540 360 700 300 900 420 L 900 0 Z" fill={isLightTheme ? "rgba(16, 185, 129, 0.02)" : "rgba(16, 185, 129, 0.01)"} />
          <text x="75%" y="15%" fill={isLightTheme ? "#059669" : "#10b981"} fontSize="10" fontWeight="bold" opacity="0.2" letterSpacing="3">EAST SEA OF HOENN</text>
          <circle cx="42%" cy="32%" r="25" fill="none" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="42%" cy="32%" r="50" fill="none" stroke="rgba(239, 68, 68, 0.08)" strokeWidth="1" strokeDasharray="6,6" />
          <circle cx="85%" cy="82%" r="18" fill="none" stroke={strokeColor} strokeWidth="1" />
          <line x1="85%" y1="60%" x2="85%" y2="100%" stroke={strokeColor} strokeWidth="0.5" />
        </g>
      );
    case "sinnoh":
      return (
        <g id="sinnoh-bg" className="pointer-events-none">
          <g opacity="0.15">
            <path d="M 330 0 L 320 80 L 340 150 L 325 210 L 345 290 L 330 360 L 340 420" fill="none" stroke={isLightTheme ? "#2563eb" : "#3b82f6"} strokeWidth="3" strokeDasharray="4,4" />
            <text x="36%" y="45%" fill={isLightTheme ? "#1d4ed8" : "#60a5fa"} fontSize="9" fontWeight="bold" letterSpacing="1">MT. CORONET RIDGE</text>
          </g>
          <g opacity="0.25" transform="translate(120, 50) scale(0.5)" stroke={isLightTheme ? "#3b82f6" : "#60a5fa"} strokeWidth="1.5">
            <line x1="0" y1="-10" x2="0" y2="10" /><line x1="-10" y1="0" x2="10" y2="0" />
            <line x1="-7" y1="-7" x2="7" y2="7" /><line x1="-7" y1="7" x2="7" y2="-7" />
          </g>
          <g opacity="0.2" transform="translate(560, 290) scale(0.4)" stroke={isLightTheme ? "#3b82f6" : "#60a5fa"} strokeWidth="1.5">
            <line x1="0" y1="-10" x2="0" y2="10" /><line x1="-10" y1="0" x2="10" y2="0" />
            <line x1="-7" y1="-7" x2="7" y2="7" /><line x1="-7" y1="7" x2="7" y2="-7" />
          </g>
        </g>
      );
    case "unova":
      return (
        <g id="unova-bg" className="pointer-events-none">
          <circle cx="48%" cy="48%" r="60" fill="none" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="1.5" />
          <circle cx="48%" cy="48%" r="130" fill="none" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="1" strokeDasharray="3,6" />
          <text x="32%" y="97%" fill={isLightTheme ? "#6b21a8" : "#c084fc"} fontSize="8" fontWeight="bold" opacity="0.3">UNOVA LOOP METRO SYSTEM</text>
        </g>
      );
    case "kalos":
      return (
        <g id="kalos-bg" className="pointer-events-none">
          <g opacity="0.1" stroke={isLightTheme ? "#db2777" : "#f472b6"} strokeWidth="1">
            <line x1="50%" y1="55%" x2="10%" y2="10%" />
            <line x1="50%" y1="55%" x2="90%" y2="10%" />
            <line x1="50%" y1="55%" x2="10%" y2="90%" />
            <line x1="50%" y1="55%" x2="90%" y2="90%" />
            <line x1="50%" y1="55%" x2="50%" y2="5%" />
            <line x1="50%" y1="55%" x2="50%" y2="95%" />
            <line x1="50%" y1="55%" x2="5%" y2="55%" />
            <line x1="50%" y1="55%" x2="95%" y2="55%" />
          </g>
          <circle cx="50%" cy="55%" r="45" fill="none" stroke="rgba(236, 72, 153, 0.18)" strokeWidth="1" />
          <circle cx="50%" cy="55%" r="90" fill="none" stroke="rgba(236, 72, 153, 0.08)" strokeWidth="1.5" strokeDasharray="2,6" />
          <text x="52%" y="53%" fill={isLightTheme ? "#be185d" : "#f472b6"} fontSize="9" fontWeight="bold" opacity="0.25">LUMIOSE CENTRAL STATION</text>
        </g>
      );
    case "alola":
      return (
        <g id="alola-bg" className="pointer-events-none">
          <ellipse cx="22%" cy="55%" rx="60" ry="40" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1" strokeDasharray="4,4" />
          <text x="12%" y="70%" fill={isLightTheme ? "#0891b2" : "#22d3ee"} fontSize="8" fontWeight="extrabold" opacity="0.3">MELEMELE ISLAND</text>

          <ellipse cx="50%" cy="38%" rx="70" ry="45" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1" strokeDasharray="4,4" />
          <text x="44%" y="24%" fill={isLightTheme ? "#0891b2" : "#22d3ee"} fontSize="8" fontWeight="extrabold" opacity="0.3">AKALA ISLAND</text>

          <ellipse cx="76%" cy="40%" rx="65" ry="55" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1" strokeDasharray="4,4" />
          <text x="71%" y="24%" fill={isLightTheme ? "#0891b2" : "#22d3ee"} fontSize="8" fontWeight="extrabold" opacity="0.3">ULA'ULA ISLAND</text>

          <ellipse cx="88%" cy="58%" rx="50" ry="35" fill="none" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="1" strokeDasharray="4,4" />
          <text x="82%" y="72%" fill={isLightTheme ? "#0891b2" : "#22d3ee"} fontSize="8" fontWeight="extrabold" opacity="0.3">PONI ISLAND</text>

          <path d="M 10 200 C 150 180 200 240 350 190 S 600 230 750 200 S 900 180 1000 200" fill="none" stroke="rgba(6,182,212,0.06)" strokeWidth="2.5" />
        </g>
      );
    case "galar":
      return (
        <g id="galar-bg" className="pointer-events-none">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(14, 165, 233, 0.08)" strokeWidth="4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="1" strokeDasharray="4,12" />
          <text x="53%" y="8%" fill={isLightTheme ? "#0369a1" : "#38bdf8"} fontSize="8" fontWeight="bold" opacity="0.3">WYNDON MONORAIL PATHWAY</text>
        </g>
      );
    case "hisui":
      return (
        <g id="hisui-bg" className="pointer-events-none">
          <g opacity="0.14" stroke={isLightTheme ? "#78716c" : "#a8a29e"} strokeWidth="1.5" fill="none">
            <path d="M 40 40 C 60 30 80 30 90 40 C 100 30 120 30 130 40 C 140 50 130 60 110 60 L 50 60 C 30 60 30 50 40 40 Z" />
            <path d="M 520 280 C 535 270 550 270 557 280 C 565 270 580 270 587 280 C 595 290 587 300 572 300 L 527 300 C 512 300 512 290 520 280 Z" />
            <path d="M 120 180 L 150 140 L 180 180 M 160 180 L 190 130 L 220 180" />
            <path d="M 440 320 L 470 270 L 500 320 M 480 320 L 505 285 L 530 320" />
          </g>
          <g transform="translate(60, 310)" opacity="0.3">
            <line x1="-25" y1="0" x2="25" y2="0" stroke={isLightTheme ? "#57534e" : "#d6d3d1"} strokeWidth="1" />
            <line x1="0" y1="-25" x2="0" y2="25" stroke={isLightTheme ? "#57534e" : "#d6d3d1"} strokeWidth="1" />
            <polygon points="0,-22 4,-4 0,0 -4,-4" fill={isLightTheme ? "#78716c" : "#e7e5e4"} />
            <text x="-3" y="-27" fill={isLightTheme ? "#44403c" : "#f5f5f4"} fontSize="8" fontWeight="bold">N</text>
          </g>
        </g>
      );
    case "paldea":
      return (
        <g id="paldea-bg" className="pointer-events-none">
          <circle cx="50%" cy="48%" r="48" fill="rgba(217, 70, 239, 0.02)" stroke="rgba(217, 70, 239, 0.15)" strokeWidth="1.5" />
          <circle cx="50%" cy="48%" r="52" fill="none" stroke="rgba(217, 70, 239, 0.08)" strokeWidth="1" strokeDasharray="2,6" />
          <circle cx="50%" cy="48%" r="76" fill="none" stroke="rgba(217, 70, 239, 0.04)" strokeWidth="1" />
          <line x1="50%" y1="48%" x2="20%" y2="20%" stroke="rgba(217, 70, 239, 0.05)" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="50%" y1="48%" x2="80%" y2="20%" stroke="rgba(217, 70, 239, 0.05)" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="50%" y1="48%" x2="20%" y2="76%" stroke="rgba(217, 70, 239, 0.05)" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="50%" y1="48%" x2="80%" y2="76%" stroke="rgba(217, 70, 239, 0.05)" strokeWidth="1" strokeDasharray="5,5" />
          <text x="53%" y="46%" fill={isLightTheme ? "#a21caf" : "#f0abfc"} fontSize="8" fontWeight="extrabold" opacity="0.3">THE GREAT CRATER</text>
        </g>
      );
    default:
      return null;
  }
};

export default function GraphicalRegionMap({
  regionId,
  isLightTheme,
  selectedNodeId,
  onSelectNode,
  currentLocationId,
  destinationLocationId,
  travelProgress,
}: GraphicalRegionMapProps) {
  const [mapMode, setMapMode] = useState<"route" | "train">("route");
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Custom region visual cartographic themes
  const activeTheme = REGION_THEMES[regionId.toLowerCase()] || REGION_THEMES.kanto;

  // Get nodes for selected region or generate a standard schematic layout if not explicitly declared
  const rawNodes = REGIONAL_MAPS[regionId] || [
    { id: `${regionId}_start`, name: `${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Town`, type: "town", description: "A picturesque starting point for this region's trainers.", x: 20, y: 70 },
    { id: `${regionId}_wild`, name: "Wild Forest Path", type: "forest", description: "A path through tall grass, home to starter species.", x: 45, y: 50, levelRange: [2, 6] as [number, number], nativePokemonIds: [16, 19] },
    { id: `${regionId}_city`, name: "Central City", type: "town", description: "The central economic city of the region featuring gyms.", x: 70, y: 55, isStation: true, stationName: "Central Terminal", trainLines: ["Express Route"] },
    { id: `${regionId}_league`, name: "Pokémon League Peak", type: "league", description: "The high mountain summit where champions challenge the Elite Four.", x: 80, y: 25 }
  ];

  const nodes = rawNodes;
  const connections = MAP_CONNECTIONS[regionId] || [
    [`${regionId}_start`, `${regionId}_wild`],
    [`${regionId}_wild`, `${regionId}_city`],
    [`${regionId}_city`, `${regionId}_league`]
  ];

  const railConnections = RAILWAY_CONNECTIONS[regionId] || [
    [`${regionId}_city`, `${regionId}_start`]
  ];

  const [activeNode, setActiveNode] = useState<MapNode | null>(null);

  // Set default node on mount or region change
  useEffect(() => {
    if (nodes && nodes.length > 0) {
      setActiveNode(nodes[0]);
    }
  }, [regionId]);

  // Handle selected Node changes from external props
  useEffect(() => {
    if (selectedNodeId) {
      const found = nodes.find(n => n.id === selectedNodeId);
      if (found) {
        setActiveNode(found);
      }
    }
  }, [selectedNodeId, nodes]);

  // Get Node Icon helper
  const getNodeIcon = (type: string) => {
    switch (type) {
      case "town":
        return <Home className="w-4 h-4" />;
      case "route":
        return <Compass className="w-4 h-4" />;
      case "forest":
        return <Trees className="w-4 h-4" />;
      case "league":
        return <Crown className="w-4 h-4" />;
      case "cave":
      case "mountain":
        return <Skull className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  // Canvas Wave Animation Ref & Implementation for "Live Train Power Grid"
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (mapMode !== "train" || !canvasRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let offset = 0;
    const renderWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(10, 15, 30, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      const centerY = canvas.height / 2;
      const amplitude1 = 18;
      const frequency1 = 0.02;
      const speed1 = 0.04;

      const amplitude2 = 12;
      const frequency2 = 0.045;
      const speed2 = -0.06;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(6, 182, 212, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "rgba(6, 182, 212, 0.5)";
      ctx.shadowBlur = 8;
      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + Math.sin(x * frequency1 + offset) * amplitude1;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 158, 11, 0.75)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(245, 158, 11, 0.4)";
      ctx.shadowBlur = 6;
      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + Math.cos(x * frequency2 - offset) * amplitude2 + Math.sin(x * 0.01 + offset) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.shadowBlur = 0;
      offset += 0.05;
      animationFrameRef.current = requestAnimationFrame(renderWaves);
    };

    renderWaves();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mapMode]);

  // Lookup custom town lore details
  const getTownLore = (nodeId: string): TownLore | null => {
    const defaultRegionId = regionId.toLowerCase();
    const regionLore = REGION_TOWN_LORE[defaultRegionId];
    if (regionLore && regionLore[nodeId]) {
      return regionLore[nodeId];
    }
    // Dynamic Fallback
    if (nodeId.includes("start") || nodeId.includes("town")) {
      return {
        professor: `Prof. ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Resident`,
        facilities: ["Lab Facility", "Standard Healing Station", "Supply Depot"],
        landmarks: ["Traditional Overlook", "Scenic Town Square"],
        history: `A quiet, picturesque starting settlement in the ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} region, where young trainers set out on their journey to conquer the regional league.`
      };
    }
    // Default City fallback
    return {
      leader: "Local Gym Leader",
      badge: "Regional Badge",
      facilities: ["Gym Arena", "Department Store", "Transit Hub"],
      landmarks: ["Central Park", "Transit Station", "Historic Monument"],
      history: `A bustling municipal hub in the heart of ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} packed with active trainers, dense local shops, and complex transit links.`
    };
  };

  const isTownNode = activeNode?.type === "town";
  const townLore = activeNode ? getTownLore(activeNode.id) : null;

  // Render real-time travel avatar on map routes
  const renderTraveler = () => {
    if (!currentLocationId || !destinationLocationId) return null;
    const fromNode = nodes.find(n => n.id === currentLocationId);
    const toNode = nodes.find(n => n.id === destinationLocationId);
    if (!fromNode || !toNode) return null;

    const progress = travelProgress !== undefined ? travelProgress : 0;
    const travelerX = fromNode.x + (toNode.x - fromNode.x) * progress;
    const travelerY = fromNode.y + (toNode.y - fromNode.y) * progress;

    return (
      <div 
        style={{ 
          left: `${travelerX}%`, 
          top: `${travelerY}%`,
          transform: "translate(-50%, -50%)"
        }}
        className="absolute z-30 flex flex-col items-center pointer-events-none"
      >
        <span className="absolute w-8 h-8 rounded-full bg-blue-500/30 animate-ping" />
        <div className="w-5 h-5 rounded-full bg-blue-600 border border-white flex items-center justify-center shadow-lg shadow-blue-500/50">
          <MapPin className="w-3 h-3 text-white animate-bounce" />
        </div>
        <span className="mt-1 px-1.5 py-0.5 rounded text-[8px] font-mono font-black uppercase text-white bg-blue-600 border border-blue-400 shadow shadow-blue-900/50">
          TRAVELLING
        </span>
      </div>
    );
  };

  const mapContent = (
    <div className={`rounded-3xl border overflow-hidden transition-all shadow-xl ${
      isFullscreen ? "h-full flex flex-col" : ""
    } ${
      isLightTheme 
        ? "bg-[#FAF8F5] border-[#E5DDD0] text-slate-800" 
        : `bg-gradient-to-b ${activeTheme.bgGradient} border-white/5 text-slate-100`
    }`}>
      {/* Title Header with Mode Toggles */}
      <div className={`px-6 py-4 border-b flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isLightTheme ? "bg-[#EFEAE2]/35 border-[#E5DDD0]/50" : "bg-black/25 border-white/5"
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: activeTheme.routeColor }} />
          <h3 className="font-display font-black text-xs uppercase tracking-[0.15em] flex items-center gap-1.5">
            <span>{activeTheme.name} Cartography</span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border" style={{ color: activeTheme.routeColor, borderColor: `${activeTheme.routeColor}40`, backgroundColor: `${activeTheme.routeColor}10` }}>
              GRID-2D
            </span>
          </h3>
        </div>

        {/* Network & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Fullscreen Map Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
              isFullscreen
                ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                : "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
            }`}
            title={isFullscreen ? "Exit Fullscreen Map" : "Open Fullscreen Map"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? "EXIT FULLSCREEN" : "FULLSCREEN"}</span>
          </button>

          {/* Map Style Selector */}
          <div className={`flex p-0.5 rounded-xl border ${
            isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-white/4 border-white/8"
          }`}>
            <button
              onClick={() => setMapMode("route")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                mapMode === "route"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ROUTING
            </button>
            <button
              onClick={() => setMapMode("train")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                mapMode === "train"
                  ? "bg-amber-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              TRANSIT
            </button>
          </div>
        </div>
      </div>

      {/* Grid Canvas + Interactive Details */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${isFullscreen ? "flex-1 min-h-0" : ""}`}>
        {/* Map Canvas - 2D Stylized flat grid */}
        <div className={`lg:col-span-7 relative border-r overflow-hidden select-none flex flex-col justify-between ${
          isLightTheme ? "border-[#E5DDD0]/50" : "border-white/5"
        } ${
          isFullscreen ? "h-full" : "h-80 md:h-[420px]"
        }`}>
          
          <div className="w-full h-full relative">
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015),transparent_80%)] pointer-events-none" />

            {/* Custom SVG elements for each region's background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {/* Render dynamic background cartography overlays */}
              {renderRegionBackground(regionId, isLightTheme)}

              {/* Draw Connection Paths */}
              {mapMode === "route" ? (
                connections.map(([fromId, toId], i) => {
                  const nodeFrom = nodes.find(n => n.id === fromId);
                  const nodeTo = nodes.find(n => n.id === toId);
                  if (!nodeFrom || !nodeTo) return null;

                  return (
                    <g key={`route-${fromId}-${toId}-${i}`}>
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke={isLightTheme ? "rgba(229, 231, 235, 0.4)" : "rgba(255, 255, 255, 0.02)"}
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke={activeTheme.routeColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="opacity-45"
                      />
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke={activeTheme.routeColor}
                        strokeWidth="1.2"
                        strokeDasharray="4,4"
                        strokeLinecap="round"
                        className="opacity-90"
                      />
                    </g>
                  );
                })
              ) : (
                railConnections.map(([fromId, toId], i) => {
                  const nodeFrom = nodes.find(n => n.id === fromId);
                  const nodeTo = nodes.find(n => n.id === toId);
                  if (!nodeFrom || !nodeTo) return null;

                  return (
                    <g key={`rail-${fromId}-${toId}-${i}`}>
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke="rgba(245, 158, 11, 0.25)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="2,6"
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })
              )}
            </svg>

            {/* Travel Interpolator Rendering */}
            {renderTraveler()}

            {/* Render Map Nodes */}
            {nodes.map((node) => {
              const isDimmed = mapMode === "train" && !node.isStation;
              const isSelected = activeNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node);
                    if (onSelectNode) onSelectNode(node.id);
                  }}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  className={`absolute cursor-pointer transition-all duration-300 group z-20 ${
                    isDimmed ? "opacity-30 hover:opacity-85" : "opacity-100"
                  }`}
                >
                  {/* Pulsing selection ring */}
                  {isSelected && (
                    <span className="absolute -inset-3.5 rounded-full animate-ping pointer-events-none" style={{ backgroundColor: mapMode === "train" ? "rgba(245, 158, 11, 0.18)" : `${activeTheme.routeColor}25` }} />
                  )}

                  {/* Icon Badge */}
                  <div className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                    isSelected
                      ? mapMode === "train"
                        ? "bg-amber-500 border-amber-300 text-white scale-110 shadow-lg shadow-amber-500/30"
                        : `${activeTheme.nodeSelectedClass} scale-110`
                      : isLightTheme
                      ? "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm"
                      : `${activeTheme.nodeClass}`
                  }`}>
                    {getNodeIcon(node.type)}
                  </div>

                  {/* Floating tooltip on hover */}
                  <span className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 rounded text-[8px] font-mono font-bold whitespace-nowrap shadow-md border transition-all pointer-events-none ${
                    isSelected
                      ? mapMode === "train"
                        ? "bg-amber-500 border-amber-400 text-white z-20 block"
                        : "bg-slate-900 border-white/10 text-slate-200 z-20 block"
                      : "bg-slate-950 border-white/5 text-slate-200 group-hover:block hidden"
                  }`}>
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Details Sidebar */}
        <div className={`lg:col-span-5 p-6 flex flex-col justify-between overflow-y-auto ${
          isFullscreen ? "h-full" : "h-80 md:h-[420px]"
        } ${
          isLightTheme ? "bg-[#FAF8F5]" : "bg-black/10"
        }`}>
          {mapMode === "route" ? (
            activeNode ? (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      activeNode.type === "town"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : activeNode.type === "league"
                        ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}>
                      {activeNode.type} LANDMARK
                    </span>
                    {activeNode.levelRange && (
                      <span className="text-[10px] font-mono text-slate-400 font-extrabold bg-white/3 border border-white/5 px-2 py-0.5 rounded-full">
                        LVL {activeNode.levelRange[0]}-{activeNode.levelRange[1]}
                      </span>
                    )}
                  </div>

                  <h4 className={`font-display font-black text-xl tracking-tight uppercase mb-2 ${
                    isLightTheme ? "text-slate-900" : "text-white"
                  }`}>
                    {activeNode.name}
                  </h4>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    isLightTheme ? "text-slate-600 font-medium" : "text-slate-300"
                  }`}>
                    {activeNode.description}
                  </p>

                  {/* Town / City Lore database displays */}
                  {isTownNode && townLore ? (
                    <div className="mt-4 space-y-4 border-t border-slate-500/10 pt-4">
                      {townLore.professor && (
                        <div className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">Resident Professor</p>
                            <p className={`text-xs font-bold mt-0.5 ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{townLore.professor}</p>
                          </div>
                        </div>
                      )}

                      {townLore.leader && (
                        <div className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                            <Award className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">Local Gym Leader & Badge</p>
                            <p className={`text-xs font-bold mt-0.5 ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{townLore.leader} ({townLore.badge})</p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">Local Facilities</p>
                          <ul className="space-y-1">
                            {townLore.facilities.map((fac, i) => (
                              <li key={i} className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                <span className="truncate">{fac}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">Key Landmarks</p>
                          <ul className="space-y-1">
                            {townLore.landmarks.map((mark, i) => (
                              <li key={i} className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-amber-500" />
                                <span className="truncate">{mark}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`p-3 rounded-xl border text-[10px] leading-relaxed italic ${
                        isLightTheme ? "bg-slate-100 border-slate-200 text-slate-600" : "bg-white/3 border-white/5 text-slate-400"
                      }`}>
                        {townLore.history}
                      </div>
                    </div>
                  ) : (
                    activeNode.nativePokemonIds && activeNode.nativePokemonIds.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-500/10">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold block mb-2.5">
                          Spotted Wild Species in Habitat
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeNode.nativePokemonIds.map((id) => (
                            <span
                              key={id}
                              className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                                isLightTheme ? "bg-white border-slate-200 text-slate-700" : "bg-white/4 border-white/5 text-slate-300"
                              }`}
                            >
                              <Swords className="w-2.5 h-2.5 text-cyan-400" />
                              <span>{HABITAT_POKEMON_NAMES[id] || `Wild Pokemon #${id}`}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Coordinate Readout */}
                <div className="mt-4 text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest border-t border-slate-500/5 pt-3">
                  Geo-coordinate: X-{activeNode.x}01 Y-{nodeIdToCoordinate(activeNode.id)}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center text-slate-400 py-6">
                <Compass className="w-8 h-8 text-cyan-500 mb-2 animate-pulse" />
                <p className="text-xs font-mono font-black">PROJECT COORDINATES</p>
                <p className="text-[11px] text-slate-500 mt-1.5 max-w-[180px]">
                  Click any landmark node on the map to display topographic geo-logs.
                </p>
              </div>
            )
          ) : (
            // Transit mode displays
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <h4 className="font-display font-black text-sm uppercase tracking-widest text-amber-500 mb-2 flex items-center gap-1">
                  <Layers className="w-4 h-4" />
                  <span>{regionId.toUpperCase()} TRANSIT GRID</span>
                </h4>
                <p className={`text-[11px] leading-relaxed mb-4 ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                  The high-speed linear train network connecting critical municipal centers with clean, high-efficiency magnetic levitation tubes.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">System Power Grid</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">OPERATIONAL</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Average Frequency</span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">Every 45 seconds</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Transit Stations</span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">Mag-lev terminus</span>
                  </div>
                </div>
              </div>

              {/* Live Train Wave Grid */}
              <div className="flex-1 min-h-[110px] rounded-2xl border border-white/5 overflow-hidden relative flex flex-col">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full absolute inset-0 animate-pulse [animation-duration:4s]"
                  width={280}
                  height={110}
                />
                
                <div className="relative z-10 p-2.5 flex justify-between items-start pointer-events-none select-none w-full">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-xl border border-white/10">
                    <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                    <span className="text-[8px] font-mono font-bold text-yellow-400">GRID POWER</span>
                  </div>
                  <span className="text-[8px] font-mono font-bold text-blue-400 bg-slate-900/80 px-2 py-1 rounded-xl border border-white/10">
                    60.2 HZ
                  </span>
                </div>

                <div className="relative z-10 mt-auto p-2.5 flex justify-between pointer-events-none select-none w-full bg-gradient-to-t from-slate-950/90 to-transparent">
                  <div className="text-[8px] font-mono text-slate-400">
                    SPEED: <span className="text-white font-bold">240 KM/H</span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">
                    DRAW: <span className="text-white font-bold">384 MW</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-7xl h-[85vh] md:h-[90vh]">
          {mapContent}
        </div>
      </div>
    );
  }

  return mapContent;
}

// Quick helper to generate a coordinate suffix
function nodeIdToCoordinate(nodeId: string): string {
  let hash = 0;
  for (let i = 0; i < nodeId.length; i++) {
    hash = nodeId.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash % 900 + 100).toString();
}
