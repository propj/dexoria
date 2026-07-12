import { Region } from "../types";

export const REGIONS_DATA: Region[] = [
  {
    id: "kanto",
    name: "Kanto",
    nativeName: "カントー地方 (Kantō-chihō)",
    description: "The region where it all began. Home to Pallet Town, Professor Oak, and the original 151 Pokémon.",
    professor: "Professor Oak",
    champion: "Blue / Red",
    starters: ["Bulbasaur", "Charmander", "Squirtle"],
    starterIds: [1, 4, 7],
    generationIndex: 1,
    badgeCount: 8,
    games: ["Red", "Blue", "Yellow", "FireRed", "LeafGreen", "Let's Go Pikachu", "Let's Go Eevee"],
    mainCity: "Saffron City",
    color: "#EF4444", // Red Accent
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 151,
    releaseYear: 1996
  },
  {
    id: "johto",
    name: "Johto",
    nativeName: "ジョウト地方 (Jōto-chihō)",
    description: "A region steeped in tradition and mythology, connected to Kanto and home to the Legendary Beasts.",
    professor: "Professor Elm",
    champion: "Lance",
    starters: ["Chikorita", "Cyndaquil", "Totodile"],
    starterIds: [152, 155, 158],
    generationIndex: 2,
    badgeCount: 8,
    games: ["Gold", "Silver", "Crystal", "HeartGold", "SoulSilver"],
    mainCity: "Goldenrod City",
    color: "#F59E0B", // Amber Accent
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 100,
    releaseYear: 1999
  },
  {
    id: "hoenn",
    name: "Hoenn",
    nativeName: "ホウエン地方 (Hōen-chihō)",
    description: "A tropical region of land and sea, shaped by the ancient forces of Groudon and Kyogre.",
    professor: "Professor Birch",
    champion: "Steven Stone / Wallace",
    starters: ["Treecko", "Torchic", "Mudkip"],
    starterIds: [252, 255, 258],
    generationIndex: 3,
    badgeCount: 8,
    games: ["Ruby", "Sapphire", "Emerald", "Omega Ruby", "Alpha Sapphire"],
    mainCity: "Lilycove City",
    color: "#10B981", // Emerald Accent
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 135,
    releaseYear: 2002
  },
  {
    id: "sinnoh",
    name: "Sinnoh",
    nativeName: "シンオウ地方 (Shin'ō-chihō)",
    description: "A mountainous northern region rich in myth, home to the creation trio and Mt. Coronet.",
    professor: "Professor Rowan",
    champion: "Cynthia",
    starters: ["Turtwig", "Chimchar", "Piplup"],
    starterIds: [387, 390, 393],
    generationIndex: 4,
    badgeCount: 8,
    games: ["Diamond", "Pearl", "Platinum", "Brilliant Diamond", "Shining Pearl"],
    mainCity: "Jubilife City",
    color: "#3B82F6", // Blue Accent
    imageUrl: "https://images.unsplash.com/photo-1483168527879-c66136b56105?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 107,
    releaseYear: 2006
  },
  {
    id: "unova",
    name: "Unova",
    nativeName: "イッシュ地方 (Isshu-chihō)",
    description: "A diverse region inspired by New York City, telling a self-contained story with all-new Pokémon.",
    professor: "Professor Juniper",
    champion: "Alder / Iris",
    starters: ["Snivy", "Tepig", "Oshawott"],
    starterIds: [495, 498, 501],
    generationIndex: 5,
    badgeCount: 8,
    games: ["Black", "White", "Black 2", "White 2"],
    mainCity: "Castelia City",
    color: "#8B5CF6", // Purple Accent
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 156,
    releaseYear: 2010
  },
  {
    id: "kalos",
    name: "Kalos",
    nativeName: "カロス地方 (Karosu-chihō)",
    description: "A beautiful region modeled after France, famous for introducing Mega Evolution and 3D graphics.",
    professor: "Professor Sycamore",
    champion: "Diantha",
    starters: ["Chespin", "Fennekin", "Froakie"],
    starterIds: [650, 653, 656],
    generationIndex: 6,
    badgeCount: 8,
    games: ["X", "Y"],
    mainCity: "Lumiose City",
    color: "#EC4899", // Pink Accent
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 72,
    releaseYear: 2013
  },
  {
    id: "alola",
    name: "Alola",
    nativeName: "アローラ地方 (Arōra-chihō)",
    description: "A tropical island paradise inspired by Hawaii, replacing Gyms with the Island Challenge.",
    professor: "Professor Kukui",
    champion: "Selene / Elio",
    starters: ["Rowlet", "Litten", "Popplio"],
    starterIds: [722, 725, 728],
    generationIndex: 7,
    badgeCount: 0, // Alola replaces Gyms with Trials, displayed as 0 Gyms in screenshot
    games: ["Sun", "Moon", "Ultra Sun", "Ultra Moon"],
    mainCity: "Heahea City",
    color: "#F59E0B", // Warm Yellow
    imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 88,
    releaseYear: 2016
  },
  {
    id: "galar",
    name: "Galar",
    nativeName: "ガラル地方 (Gararu-chihō)",
    description: "An industrial region inspired by Great Britain, known for stadium battles and Dynamax phenomena.",
    professor: "Professor Magnolia",
    champion: "Leon",
    starters: ["Grookey", "Scorbunny", "Sobble"],
    starterIds: [810, 813, 816],
    generationIndex: 8,
    badgeCount: 8,
    games: ["Sword", "Shield"],
    mainCity: "Wyndon",
    color: "#06B6D4", // Cyan
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 89,
    releaseYear: 2019
  },
  {
    id: "hisui",
    name: "Hisui",
    nativeName: "ヒスイ地方 (Hisui-chihō)",
    description: "The ancient past of the Sinnoh region, a wild frontier being surveyed for the very first Pokédex.",
    professor: "Professor Laventon",
    champion: "Kamado (Commander)",
    starters: ["Rowlet", "Cyndaquil", "Oshawott"],
    starterIds: [722, 155, 501],
    generationIndex: 8, // Legends Arceus is Gen 8
    badgeCount: 0, // No Gyms
    games: ["Legends: Arceus"],
    mainCity: "Jubilife Village",
    color: "#4B5563", // Slate Gray
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 20,
    releaseYear: 2022
  },
  {
    id: "paldea",
    name: "Paldea",
    nativeName: "パルデア地方 (Parudea-chihō)",
    description: "A vast open-world region inspired by the Iberian Peninsula, home to three parallel storylines.",
    professor: "Sada / Turo",
    champion: "Geeta / Nemona",
    starters: ["Sprigatito", "Fuecoco", "Quaxly"],
    starterIds: [906, 909, 912],
    generationIndex: 9,
    badgeCount: 8,
    games: ["Scarlet", "Violet"],
    mainCity: "Mesagoza",
    color: "#D946EF", // Fuchsia
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop&q=60",
    pokemonCount: 120,
    releaseYear: 2022
  }
];
