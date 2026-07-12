export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonShort {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface PokemonDetail {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  spriteShiny: string;
  spriteBack: string;
  height: number; // in decimeters
  weight: number; // in hectograms
  abilities: { name: string; is_hidden: boolean }[];
  stats: PokemonStats;
  description: string;
  category?: string;
  evolutionChain: { id: number; name: string; sprite: string }[];
  weaknesses: string[];
  strengths: string[];
}

export interface Region {
  id: string;
  name: string;
  nativeName: string;
  description: string;
  professor: string;
  champion: string;
  starters: string[]; // names of starter pokemon
  starterIds: number[]; // ids of starters
  generationIndex: number; // 1 to 9
  badgeCount: number;
  games: string[];
  mainCity: string;
  imageUrl: string; // generated graphic or illustration URL
  color: string; // hex representation for accent
  pokemonCount?: number;
  releaseYear?: number;
}

export interface Generation {
  id: number;
  name: string;
  romanName: string;
  releaseYear: number;
  platform: string;
  count: number;
  keyFeatures: string[];
}
