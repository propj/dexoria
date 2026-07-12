import { Generation } from "../types";

export const GENERATIONS_DATA: Generation[] = [
  {
    id: 1,
    name: "Generation I",
    romanName: "GEN I",
    releaseYear: 1996,
    platform: "Game Boy",
    count: 151,
    keyFeatures: ["Kanto region introduction", "151 original Pokémon", "Red, Blue, & Yellow versions", "Introduction of Link Cable trading"]
  },
  {
    id: 2,
    name: "Generation II",
    romanName: "GEN II",
    releaseYear: 1999,
    platform: "Game Boy Color",
    count: 100,
    keyFeatures: ["Johto region & Kanto post-game", "Day/Night cycle", "Dark & Steel types introduced", "Held items & Breeding systems"]
  },
  {
    id: 3,
    name: "Generation III",
    romanName: "GEN III",
    releaseYear: 2002,
    platform: "Game Boy Advance",
    count: 135,
    keyFeatures: ["Hoenn tropical region", "Pokémon Abilities & Natures", "Double Battles", "Pokémon Contests system"]
  },
  {
    id: 4,
    name: "Generation IV",
    romanName: "GEN IV",
    releaseYear: 2006,
    platform: "Nintendo DS",
    count: 107,
    keyFeatures: ["Sinnoh mountain region", "Physical/Special stat category split", "Global Trade Station (Wi-Fi)", "3D rendering enhancements"]
  },
  {
    id: 5,
    name: "Generation V",
    romanName: "GEN V",
    releaseYear: 2010,
    platform: "Nintendo DS",
    count: 156,
    keyFeatures: ["Metropolitan Unova region", "Entirely new Pokédex until post-game", "Seasonal changes", "Triple and Rotation Battles"]
  },
  {
    id: 6,
    name: "Generation VI",
    romanName: "GEN VI",
    releaseYear: 2013,
    platform: "Nintendo 3DS",
    count: 72,
    keyFeatures: ["Kalos region modeled after France", "Transition to full 3D graphics", "Fairy type introduced", "Mega Evolution mechanic"]
  },
  {
    id: 7,
    name: "Generation VII",
    romanName: "GEN VII",
    releaseYear: 2016,
    platform: "Nintendo 3DS",
    count: 88,
    keyFeatures: ["Alola tropical islands", "Island Trials (no traditional gyms)", "Z-Moves ultimate attacks", "Regional forms introduced"]
  },
  {
    id: 8,
    name: "Generation VIII",
    romanName: "GEN VIII",
    releaseYear: 2019,
    platform: "Nintendo Switch / Switch Lite",
    count: 96,
    keyFeatures: ["Galar region with massive stadiums", "The Wild Area (open-world camera)", "Dynamax & Gigantamax mechanics", "Overworld Pokémon roaming"]
  },
  {
    id: 9,
    name: "Generation IX",
    romanName: "GEN IX",
    releaseYear: 2022,
    platform: "Nintendo Switch",
    count: 120,
    keyFeatures: ["Fully open-world Paldea", "Non-linear story paths", "Terastal phenomenon (type shifting)", "Co-op multiplayer play"]
  }
];

export const GEN_ID_RANGES: Record<number, { start: number; end: number }> = {
  1: { start: 1, end: 151 },
  2: { start: 152, end: 251 },
  3: { start: 252, end: 386 },
  4: { start: 387, end: 493 },
  5: { start: 494, end: 649 },
  6: { start: 650, end: 721 },
  7: { start: 722, end: 809 },
  8: { start: 810, end: 905 }, // Including Hisuian legends
  9: { start: 906, end: 1025 }
};

export interface TypeDef {
  name: string;
  color: string;
  weaknesses: string[];
  strengths: string[];
  immune: string[];
}

export const TYPES_CHART: TypeDef[] = [
  {
    name: "normal",
    color: "#A8A77A",
    weaknesses: ["fighting"],
    strengths: [],
    immune: ["ghost"]
  },
  {
    name: "fire",
    color: "#EE8130",
    weaknesses: ["water", "ground", "rock"],
    strengths: ["grass", "ice", "bug", "steel"],
    immune: []
  },
  {
    name: "water",
    color: "#6390F0",
    weaknesses: ["electric", "grass"],
    strengths: ["fire", "ground", "rock"],
    immune: []
  },
  {
    name: "electric",
    color: "#F7D02C",
    weaknesses: ["ground"],
    strengths: ["water", "flying"],
    immune: []
  },
  {
    name: "grass",
    color: "#7AC74C",
    weaknesses: ["fire", "ice", "poison", "flying", "bug"],
    strengths: ["water", "ground", "rock"],
    immune: []
  },
  {
    name: "ice",
    color: "#96D9D6",
    weaknesses: ["fire", "fighting", "rock", "steel"],
    strengths: ["grass", "ground", "flying", "dragon"],
    immune: []
  },
  {
    name: "fighting",
    color: "#C22E28",
    weaknesses: ["flying", "psychic", "fairy"],
    strengths: ["normal", "ice", "rock", "dark", "steel"],
    immune: []
  },
  {
    name: "poison",
    color: "#A33EA1",
    weaknesses: ["ground", "psychic"],
    strengths: ["grass", "fairy"],
    immune: []
  },
  {
    name: "ground",
    color: "#E2BF65",
    weaknesses: ["water", "grass", "ice"],
    strengths: ["fire", "electric", "poison", "rock", "steel"],
    immune: ["electric"]
  },
  {
    name: "flying",
    color: "#A98FF3",
    weaknesses: ["electric", "ice", "rock"],
    strengths: ["grass", "fighting", "bug"],
    immune: ["ground"]
  },
  {
    name: "psychic",
    color: "#F95587",
    weaknesses: ["bug", "ghost", "dark"],
    strengths: ["fighting", "poison"],
    immune: []
  },
  {
    name: "bug",
    color: "#A6B91A",
    weaknesses: ["fire", "flying", "rock"],
    strengths: ["grass", "psychic", "dark"],
    immune: []
  },
  {
    name: "rock",
    color: "#B6A136",
    weaknesses: ["water", "grass", "fighting", "ground", "steel"],
    strengths: ["fire", "ice", "flying", "bug"],
    immune: []
  },
  {
    name: "ghost",
    color: "#735797",
    weaknesses: ["ghost", "dark"],
    strengths: ["psychic", "ghost"],
    immune: ["normal", "fighting"]
  },
  {
    name: "dragon",
    color: "#6F35FC",
    weaknesses: ["ice", "dragon", "fairy"],
    strengths: ["dragon"],
    immune: []
  },
  {
    name: "dark",
    color: "#705746",
    weaknesses: ["fighting", "bug", "fairy"],
    strengths: ["psychic", "ghost"],
    immune: ["psychic"]
  },
  {
    name: "steel",
    color: "#B7B7CE",
    weaknesses: ["fire", "fighting", "ground"],
    strengths: ["ice", "rock", "fairy"],
    immune: ["poison"]
  },
  {
    name: "fairy",
    color: "#D685AD",
    weaknesses: ["poison", "steel"],
    strengths: ["fighting", "dragon", "dark"],
    immune: ["dragon"]
  }
];

export function getPokemonColor(type: string): string {
  const found = TYPES_CHART.find(t => t.name.toLowerCase() === type.toLowerCase());
  return found ? found.color : "#64748B";
}

export function getDarkTypeColor(type: string): string {
  const t = type.toLowerCase();
  switch (t) {
    case "grass": return "#1D2D24"; // deep forest green
    case "fire": return "#2E1C15"; // deep red/orange
    case "water": return "#192438"; // deep ocean blue
    case "bug": return "#23281B"; // deep bug green/brown
    case "normal": return "#242526"; // deep gray-charcoal
    case "poison": return "#28192D"; // deep dark purple
    case "electric": return "#2F2B15"; // deep gold-brown
    case "ground": return "#2B2016"; // deep clay brown
    case "fairy": return "#2D1823"; // deep dark pink
    case "fighting": return "#2E1616"; // deep dark maroon
    case "psychic": return "#2C1521"; // deep plum
    case "rock": return "#26231C"; // deep stone brown
    case "ghost": return "#1C1528"; // deep royal purple
    case "ice": return "#18282B"; // deep navy-teal
    case "dragon": return "#161328"; // deep royal indigo
    case "dark": return "#16151A"; // deep obsidian
    case "steel": return "#1F2326"; // deep iron gray
    case "flying": return "#1D162B"; // deep sky-indigo
    default: return "#1A1B1F";
  }
}
