export interface TypeBreakdown {
  type: string;
  count: number;
  color: string;
}

export interface GenerationMetaStats {
  id: number;
  salesMillions: number;
  avgBaseStatTotal: number;
  topPokemonName: string;
  topPokemonBst: number;
  vgcFormatName: string;
  keyCompetitiveInnovation: string;
  animeSeason: string;
  keyAnimeCompanions: string[];
  iconicMovie: string;
  remakesAndSequels: string[];
  typeDistribution: TypeBreakdown[];
  globalMetagameRating: number; // 0 to 10
  communityPopularityScore: number; // 0 to 100
}

export const GENERATION_STATS_DATA: Record<number, GenerationMetaStats> = {
  1: {
    id: 1,
    salesMillions: 31.38,
    avgBaseStatTotal: 420.5,
    topPokemonName: "Mewtwo",
    topPokemonBst: 680,
    vgcFormatName: "RBY OU / Nintendo Cup '97",
    keyCompetitiveInnovation: "151 Original species, Special stat as single value, 100% Critical hit chance tied to Speed, Blizzard 90% freeze.",
    animeSeason: "Pokémon: Indigo League",
    keyAnimeCompanions: ["Ash Ketchum", "Misty", "Brock"],
    iconicMovie: "Mewtwo Strikes Back (1998)",
    remakesAndSequels: ["FireRed & LeafGreen (GBA)", "Let's Go, Pikachu! & Eevee! (Switch)"],
    globalMetagameRating: 8.8,
    communityPopularityScore: 98,
    typeDistribution: [
      { type: "Poison", count: 33, color: "#A33EA4" },
      { type: "Water", count: 32, color: "#6390F0" },
      { type: "Normal", count: 22, color: "#A8A77A" },
      { type: "Flying", count: 19, color: "#A98FF3" },
      { type: "Grass", count: 14, color: "#7AC74C" },
      { type: "Psychic", count: 14, color: "#F95587" },
      { type: "Ground", count: 14, color: "#E2BF65" },
      { type: "Fire", count: 12, color: "#EE8130" },
      { type: "Rock", count: 11, color: "#B6A136" },
      { type: "Bug", count: 12, color: "#A6B91A" },
      { type: "Electric", count: 9, color: "#F7D02C" },
      { type: "Fighting", count: 8, color: "#C22E28" },
      { type: "Ice", count: 5, color: "#96D9D6" },
      { type: "Ghost", count: 3, color: "#735797" },
      { type: "Dragon", count: 3, color: "#6F35FC" }
    ]
  },
  2: {
    id: 2,
    salesMillions: 23.10,
    avgBaseStatTotal: 418.2,
    topPokemonName: "Lugia & Ho-Oh",
    topPokemonBst: 680,
    vgcFormatName: "GSC OU / Nintendo Cup 2000",
    keyCompetitiveInnovation: "Split Special into Sp. Atk and Sp. Def, Dark & Steel types, held items (Leftovers), Shiny Pokémon, Weather moves.",
    animeSeason: "Pokémon: Johto Journeys / Master Quest",
    keyAnimeCompanions: ["Ash Ketchum", "Misty", "Brock"],
    iconicMovie: "Pokémon 2000: The Power of One & Spell of the Unown",
    remakesAndSequels: ["HeartGold & SoulSilver (NDS)"],
    globalMetagameRating: 9.1,
    communityPopularityScore: 96,
    typeDistribution: [
      { type: "Normal", count: 15, color: "#A8A77A" },
      { type: "Water", count: 18, color: "#6390F0" },
      { type: "Grass", count: 10, color: "#7AC74C" },
      { type: "Psychic", count: 10, color: "#F95587" },
      { type: "Dark", count: 6, color: "#705746" },
      { type: "Steel", count: 4, color: "#B7B7CE" },
      { type: "Fire", count: 8, color: "#EE8130" },
      { type: "Electric", count: 8, color: "#F7D02C" },
      { type: "Bug", count: 10, color: "#A6B91A" },
      { type: "Ground", count: 8, color: "#E2BF65" },
      { type: "Flying", count: 19, color: "#A98FF3" }
    ]
  },
  3: {
    id: 3,
    salesMillions: 16.22,
    avgBaseStatTotal: 428.6,
    topPokemonName: "Rayquaza, Kyogre & Groudon",
    topPokemonBst: 680,
    vgcFormatName: "ADV OU / VGC 2004",
    keyCompetitiveInnovation: "Abilities (Drizzle, Drought, Levitate), Natures (+/- 10% stats), Double Battles, Effort Value (EV) 510 cap revamp.",
    animeSeason: "Pokémon: Advanced Generation",
    keyAnimeCompanions: ["Ash Ketchum", "May", "Max", "Brock"],
    iconicMovie: "Lucario and the Mystery of Mew & Jirachi Wish Maker",
    remakesAndSequels: ["Omega Ruby & Alpha Sapphire (3DS)"],
    globalMetagameRating: 9.4,
    communityPopularityScore: 97,
    typeDistribution: [
      { type: "Water", count: 28, color: "#6390F0" },
      { type: "Grass", count: 17, color: "#7AC74C" },
      { type: "Psychic", count: 12, color: "#F95587" },
      { type: "Rock", count: 12, color: "#B6A136" },
      { type: "Ground", count: 13, color: "#E2BF65" },
      { type: "Dark", count: 10, color: "#705746" },
      { type: "Steel", count: 9, color: "#B7B7CE" },
      { type: "Dragon", count: 9, color: "#6F35FC" },
      { type: "Fire", count: 6, color: "#EE8130" }
    ]
  },
  4: {
    id: 4,
    salesMillions: 17.67,
    avgBaseStatTotal: 452.1,
    topPokemonName: "Arceus",
    topPokemonBst: 720,
    vgcFormatName: "DPP OU / VGC 2009 & 2010",
    keyCompetitiveInnovation: "Physical/Special move split independent of type, Global Trade Station (GTS) Wi-Fi battles, Choice Scarf/Specs, Stealth Rock.",
    animeSeason: "Pokémon: Diamond and Pearl",
    keyAnimeCompanions: ["Ash Ketchum", "Dawn", "Brock"],
    iconicMovie: "Arceus and the Jewel of Life & The Rise of Darkrai",
    remakesAndSequels: ["Brilliant Diamond & Shining Pearl (Switch)", "Legends: Arceus (Switch)"],
    globalMetagameRating: 9.6,
    communityPopularityScore: 95,
    typeDistribution: [
      { type: "Normal", count: 17, color: "#A8A77A" },
      { type: "Water", count: 14, color: "#6390F0" },
      { type: "Grass", count: 15, color: "#7AC74C" },
      { type: "Psychic", count: 8, color: "#F95587" },
      { type: "Ground", count: 10, color: "#E2BF65" },
      { type: "Steel", count: 10, color: "#B7B7CE" },
      { type: "Dragon", count: 6, color: "#6F35FC" },
      { type: "Ghost", count: 7, color: "#735797" },
      { type: "Fighting", count: 7, color: "#C22E28" }
    ]
  },
  5: {
    id: 5,
    salesMillions: 15.64,
    avgBaseStatTotal: 432.8,
    topPokemonName: "Black & White Kyurem",
    topPokemonBst: 700,
    vgcFormatName: "BW OU / VGC 2011, 2012, 2013",
    keyCompetitiveInnovation: "Hidden Abilities (Dream World), Weather Wars (Drizzle Politoed/Ninetales), Infinite TM uses, Team Preview prior to match.",
    animeSeason: "Pokémon: Black & White",
    keyAnimeCompanions: ["Ash Ketchum", "Iris", "Cilan"],
    iconicMovie: "White—Victini and Zekrom & Genesect and the Legend Awakened",
    remakesAndSequels: ["Pokémon Black 2 & White 2 (NDS Direct Sequels)"],
    globalMetagameRating: 9.3,
    communityPopularityScore: 92,
    typeDistribution: [
      { type: "Bug", count: 18, color: "#A6B91A" },
      { type: "Grass", count: 20, color: "#7AC74C" },
      { type: "Water", count: 17, color: "#6390F0" },
      { type: "Normal", count: 17, color: "#A8A77A" },
      { type: "Psychic", count: 15, color: "#F95587" },
      { type: "Fighting", count: 15, color: "#C22E28" },
      { type: "Dark", count: 16, color: "#705746" },
      { type: "Dragon", count: 10, color: "#6F35FC" },
      { type: "Fire", count: 15, color: "#EE8130" }
    ]
  },
  6: {
    id: 6,
    salesMillions: 16.68,
    avgBaseStatTotal: 458.4,
    topPokemonName: "Mega Rayquaza",
    topPokemonBst: 780,
    vgcFormatName: "XY OU / VGC 2014 & 2016",
    keyCompetitiveInnovation: "Fairy Type (Dragon immunity), Mega Evolution (Stat boosts + form changes), Super Training EV mechanics, Fairy Aura.",
    animeSeason: "Pokémon the Series: XY / XYZ",
    keyAnimeCompanions: ["Ash Ketchum", "Serena", "Clemont", "Bonnie"],
    iconicMovie: "Diancie and the Cocoon of Destruction & Volcanion and the Mechanical Marvel",
    remakesAndSequels: ["Omega Ruby & Alpha Sapphire (3DS)"],
    globalMetagameRating: 9.5,
    communityPopularityScore: 94,
    typeDistribution: [
      { type: "Fairy", count: 13, color: "#D685AD" },
      { type: "Grass", count: 9, color: "#7AC74C" },
      { type: "Water", count: 9, color: "#6390F0" },
      { type: "Fire", count: 8, color: "#EE8130" },
      { type: "Dragon", count: 9, color: "#6F35FC" },
      { type: "Ghost", count: 8, color: "#735797" },
      { type: "Steel", count: 6, color: "#B7B7CE" },
      { type: "Flying", count: 8, color: "#A98FF3" }
    ]
  },
  7: {
    id: 7,
    salesMillions: 16.28,
    avgBaseStatTotal: 462.1,
    topPokemonName: "Ultra Necrozma",
    topPokemonBst: 754,
    vgcFormatName: "SM OU / VGC 2017, 2018, 2019",
    keyCompetitiveInnovation: "Z-Moves (Once per battle super attacks), Island Tapus Terrain Surge abilities, Ultra Beasts unique Beast Boost mechanic, Speed tier revamp.",
    animeSeason: "Pokémon the Series: Sun & Moon",
    keyAnimeCompanions: ["Ash Ketchum", "Lillie", "Kiawe", "Mallow", "Lana", "Sophocles"],
    iconicMovie: "I Choose You! & The Power of Us",
    remakesAndSequels: ["Ultra Sun & Ultra Moon (3DS)"],
    globalMetagameRating: 9.0,
    communityPopularityScore: 91,
    typeDistribution: [
      { type: "Fairy", count: 14, color: "#D685AD" },
      { type: "Water", count: 12, color: "#6390F0" },
      { type: "Grass", count: 11, color: "#7AC74C" },
      { type: "Psychic", count: 11, color: "#F95587" },
      { type: "Ghost", count: 10, color: "#735797" },
      { type: "Dragon", count: 10, color: "#6F35FC" },
      { type: "Bug", count: 7, color: "#A6B91A" },
      { type: "Steel", count: 8, color: "#B7B7CE" }
    ]
  },
  8: {
    id: 8,
    salesMillions: 26.35,
    avgBaseStatTotal: 468.9,
    topPokemonName: "Eternamax Eternatus & Zacian-Crowned",
    topPokemonBst: 720,
    vgcFormatName: "SS OU / VGC 2020, 2021, 2022",
    keyCompetitiveInnovation: "Dynamax & Gigantamax (HP doubled + Max Moves setting weather/terrains), Intrepid Sword Zacian meta, Heavy Duty Boots item.",
    animeSeason: "Pokémon Journeys: The Series",
    keyAnimeCompanions: ["Ash Ketchum", "Goh", "Chloe"],
    iconicMovie: "Secrets of the Jungle (2020)",
    remakesAndSequels: ["Brilliant Diamond & Shining Pearl", "Legends: Arceus"],
    globalMetagameRating: 9.2,
    communityPopularityScore: 93,
    typeDistribution: [
      { type: "Steel", count: 15, color: "#B7B7CE" },
      { type: "Dragon", count: 12, color: "#6F35FC" },
      { type: "Grass", count: 12, color: "#7AC74C" },
      { type: "Water", count: 11, color: "#6390F0" },
      { type: "Fire", count: 10, color: "#EE8130" },
      { type: "Dark", count: 12, color: "#705746" },
      { type: "Fairy", count: 9, color: "#D685AD" },
      { type: "Ghost", count: 10, color: "#735797" }
    ]
  },
  9: {
    id: 9,
    salesMillions: 26.00,
    avgBaseStatTotal: 472.4,
    topPokemonName: "Terapagos Stellar & Koraidon/Miraidon",
    topPokemonBst: 700,
    vgcFormatName: "SV OU / VGC 2023, 2024, 2025",
    keyCompetitiveInnovation: "Terastallization (Mid-battle typing shift), Paradox Pokémon Protosynthesis/Quark Drive, Covert Cloak item, Dondozo/Tatsugiri Commander meta.",
    animeSeason: "Pokémon Horizons: The Series",
    keyAnimeCompanions: ["Liko", "Roy", "Friede", "Captain Pikachu"],
    iconicMovie: "Paldea Academy Special Animated Series",
    remakesAndSequels: ["The Teal Mask & The Indigo Disk DLC"],
    globalMetagameRating: 9.4,
    communityPopularityScore: 95,
    typeDistribution: [
      { type: "Dragon", count: 15, color: "#6F35FC" },
      { type: "Fighting", count: 14, color: "#C22E28" },
      { type: "Grass", count: 14, color: "#7AC74C" },
      { type: "Ghost", count: 13, color: "#735797" },
      { type: "Dark", count: 13, color: "#705746" },
      { type: "Water", count: 12, color: "#6390F0" },
      { type: "Electric", count: 11, color: "#F7D02C" },
      { type: "Fire", count: 11, color: "#EE8130" }
    ]
  }
};
