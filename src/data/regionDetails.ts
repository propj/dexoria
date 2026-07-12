export interface Leader {
  name: string;
  badgeName: string;
  badgeUrl: string; // or emoji
  typeSpecialty: string;
  levelRange: string;
  leaderAvatar: string; // url/emoji/placeholder
}

export interface FeaturedPokemon {
  id: number;
  name: string;
  category: string;
  height: string;
  weight: string;
  ability: string;
  description: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAtk: number;
    spDef: number;
    speed: number;
  };
}

export interface RegionDetailData {
  professorDesc: string;
  championDesc: string;
  villainName: string;
  villainDesc: string;
  starters: FeaturedPokemon[];
  legendaries: FeaturedPokemon[];
  mythicals: FeaturedPokemon[];
  gyms: Leader[];
}

export const REGION_DETAILS: Record<string, RegionDetailData> = {
  kanto: {
    professorDesc: "Pallet Town's Pokémon authority, who researches species relationship with trainers.",
    championDesc: "Rival who became Champion, pushing trainers to unlock their ultimate potentials.",
    villainName: "Team Rocket",
    villainDesc: "The notorious crime syndicate led by Giovanni, seeking to steal valuable Pokémon.",
    starters: [
      {
        id: 1,
        name: "Bulbasaur",
        category: "Seed Pokémon",
        height: "0.7 m",
        weight: "6.9 kg",
        ability: "Overgrow",
        description: "There is a plant seed on its back from the day this Pokémon is born. The seed slowly grows larger.",
        types: ["grass", "poison"],
        stats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 }
      },
      {
        id: 4,
        name: "Charmander",
        category: "Lizard Pokémon",
        height: "0.6 m",
        weight: "8.5 kg",
        ability: "Blaze",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        types: ["fire"],
        stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 }
      },
      {
        id: 7,
        name: "Squirtle",
        category: "Tiny Turtle Pokémon",
        height: "0.5 m",
        weight: "9.0 kg",
        ability: "Torrent",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        types: ["water"],
        stats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 }
      }
    ],
    legendaries: [
      {
        id: 144,
        name: "Articuno",
        category: "Freeze Pokémon",
        height: "1.7 m",
        weight: "55.4 kg",
        ability: "Pressure",
        description: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
        types: ["ice", "flying"],
        stats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 }
      },
      {
        id: 145,
        name: "Zapdos",
        category: "Electric Pokémon",
        height: "1.6 m",
        weight: "52.6 kg",
        ability: "Pressure",
        description: "A legendary bird Pokémon that is said to appear from clouds while dropping giant lightning bolts.",
        types: ["electric", "flying"],
        stats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 }
      },
      {
        id: 146,
        name: "Moltres",
        category: "Flame Pokémon",
        height: "2.0 m",
        weight: "60.0 kg",
        ability: "Pressure",
        description: "One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.",
        types: ["fire", "flying"],
        stats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 }
      },
      {
        id: 150,
        name: "Mewtwo",
        category: "Genetic Pokémon",
        height: "2.0 m",
        weight: "122.0 kg",
        ability: "Pressure",
        description: "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
        types: ["psychic"],
        stats: { hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130 }
      }
    ],
    mythicals: [
      {
        id: 151,
        name: "Mew",
        category: "New Species Pokémon",
        height: "0.4 m",
        weight: "4.0 kg",
        ability: "Synchronize",
        description: "Its DNA is said to contain the genetic codes of all Pokémon, allowing it to use any move.",
        types: ["psychic"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    gyms: [
      { name: "Brock", badgeName: "Boulder Badge", badgeUrl: "🪨", typeSpecialty: "Rock", levelRange: "Lv. 12-14", leaderAvatar: "🧗‍♂️" },
      { name: "Misty", badgeName: "Cascade Badge", badgeUrl: "💧", typeSpecialty: "Water", levelRange: "Lv. 18-21", leaderAvatar: "🧜‍♀️" },
      { name: "Lt. Surge", badgeName: "Thunder Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 21-24", leaderAvatar: "💂‍♂️" },
      { name: "Erika", badgeName: "Rainbow Badge", badgeUrl: "🌈", typeSpecialty: "Grass", levelRange: "Lv. 26-29", leaderAvatar: "👩‍🌾" },
      { name: "Koga", badgeName: "Soul Badge", badgeUrl: "💜", typeSpecialty: "Poison", levelRange: "Lv. 37-43", leaderAvatar: "🥷" },
      { name: "Sabrina", badgeName: "Marsh Badge", badgeUrl: "🔮", typeSpecialty: "Psychic", levelRange: "Lv. 38-43", leaderAvatar: "🧙‍♀️" },
      { name: "Blaine", badgeName: "Volcano Badge", badgeUrl: "🔥", typeSpecialty: "Fire", levelRange: "Lv. 42-47", leaderAvatar: "👴" },
      { name: "Giovanni", badgeName: "Earth Badge", badgeUrl: "🔰", typeSpecialty: "Ground", levelRange: "Lv. 45-50", leaderAvatar: "🤵" }
    ]
  },
  johto: {
    professorDesc: "New Bark Town's tech-focused expert, studying Pokémon breeding, egg occurrences, and evolution triggers.",
    championDesc: "The legendary dragon master from Blackthorn, guiding challengers with high-octane battle tactics.",
    villainName: "Team Rocket Remnants",
    villainDesc: "Reformed rogue cells attempting to broadcast a frequency signal to summon their missing boss Giovanni.",
    starters: [
      {
        id: 152,
        name: "Chikorita",
        category: "Leaf Pokémon",
        height: "0.9 m",
        weight: "6.4 kg",
        ability: "Overgrow",
        description: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to sunbathe.",
        types: ["grass"],
        stats: { hp: 45, attack: 49, defense: 65, spAtk: 49, spDef: 65, speed: 45 }
      },
      {
        id: 155,
        name: "Cyndaquil",
        category: "Fire Mouse Pokémon",
        height: "0.5 m",
        weight: "7.9 kg",
        ability: "Blaze",
        description: "It is timid, and always curls itself up in a ball. If attacked, it flares up its back for defense.",
        types: ["fire"],
        stats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 }
      },
      {
        id: 158,
        name: "Totodile",
        category: "Big Jaw Pokémon",
        height: "0.6 m",
        weight: "9.5 kg",
        ability: "Torrent",
        description: "It is small but rough and tough. It will bite at anything, even its own trainer, in play.",
        types: ["water"],
        stats: { hp: 50, attack: 65, defense: 64, spAtk: 44, spDef: 48, speed: 43 }
      }
    ],
    legendaries: [
      {
        id: 243,
        name: "Raikou",
        category: "Thunder Pokémon",
        height: "1.9 m",
        weight: "178.0 kg",
        ability: "Pressure",
        description: "This Pokémon embodies the speed of lightning. Its roars send shockwaves shuddering through the air.",
        types: ["electric"],
        stats: { hp: 90, attack: 85, defense: 75, spAtk: 115, spDef: 100, speed: 115 }
      },
      {
        id: 244,
        name: "Entei",
        category: "Volcano Pokémon",
        height: "2.1 m",
        weight: "198.0 kg",
        ability: "Pressure",
        description: "It is said that when it roars, a volcano erupts somewhere, and its breath is as hot as magma.",
        types: ["fire"],
        stats: { hp: 115, attack: 115, defense: 85, spAtk: 90, spDef: 75, speed: 100 }
      },
      {
        id: 245,
        name: "Suicune",
        category: "Aurora Pokémon",
        height: "2.0 m",
        weight: "187.0 kg",
        ability: "Pressure",
        description: "Said to be the reincarnation of north winds, Suicune can instantly purify filthy, muddy waters.",
        types: ["water"],
        stats: { hp: 100, attack: 75, defense: 115, spAtk: 90, spDef: 115, speed: 85 }
      },
      {
        id: 249,
        name: "Lugia",
        category: "Diving Pokémon",
        height: "5.2 m",
        weight: "216.0 kg",
        ability: "Pressure",
        description: "It sleeps in a deep trench. It is said to flap its wings to cause light rainstorms or 40-day gales.",
        types: ["psychic", "flying"],
        stats: { hp: 106, attack: 90, defense: 130, spAtk: 90, spDef: 154, speed: 110 }
      },
      {
        id: 250,
        name: "Ho-Oh",
        category: "Rainbow Pokémon",
        height: "3.8 m",
        weight: "178.0 kg",
        ability: "Pressure",
        description: "A legendary Pokémon that flies continually through the sky on rainbow wings, bringing eternal joy.",
        types: ["fire", "flying"],
        stats: { hp: 106, attack: 130, defense: 90, spAtk: 110, spDef: 154, speed: 90 }
      }
    ],
    mythicals: [
      {
        id: 251,
        name: "Celebi",
        category: "Time Travel Pokémon",
        height: "0.6 m",
        weight: "5.0 kg",
        ability: "Natural Cure",
        description: "This Pokémon came from the future by crossing over time. It is considered a protector of forests.",
        types: ["psychic", "grass"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    gyms: [
      { name: "Falkner", badgeName: "Zephyr Badge", badgeUrl: "🪶", typeSpecialty: "Flying", levelRange: "Lv. 9-13", leaderAvatar: "🦅" },
      { name: "Bugsy", badgeName: "Hive Badge", badgeUrl: "🐝", typeSpecialty: "Bug", levelRange: "Lv. 15-18", leaderAvatar: "🐞" },
      { name: "Whitney", badgeName: "Plain Badge", badgeUrl: "🌸", typeSpecialty: "Normal", levelRange: "Lv. 18-20", leaderAvatar: "👧" },
      { name: "Morty", badgeName: "Fog Badge", badgeUrl: "👻", typeSpecialty: "Ghost", levelRange: "Lv. 21-25", leaderAvatar: "🕶️" },
      { name: "Chuck", badgeName: "Storm Badge", badgeUrl: "✊", typeSpecialty: "Fighting", levelRange: "Lv. 27-31", leaderAvatar: "🥋" },
      { name: "Jasmine", badgeName: "Mineral Badge", badgeUrl: "🔩", typeSpecialty: "Steel", levelRange: "Lv. 30-35", leaderAvatar: "🔧" },
      { name: "Pryce", badgeName: "Glacier Badge", badgeUrl: "❄️", typeSpecialty: "Ice", levelRange: "Lv. 31-34", leaderAvatar: "👴" },
      { name: "Clair", badgeName: "Rising Badge", badgeUrl: "🐉", typeSpecialty: "Dragon", levelRange: "Lv. 37-41", leaderAvatar: "👩‍🎤" }
    ]
  }
};

// Generates fallback values for any other region dynamically
export function getRegionDetail(id: string): RegionDetailData {
  const normalizedId = id.toLowerCase();
  if (REGION_DETAILS[normalizedId]) {
    return REGION_DETAILS[normalizedId];
  }

  // Generous automatic fallback generation to support all 10 regions nicely!
  return {
    professorDesc: "Studies this region's ecosystems, regional mutations, and trainer relationships.",
    championDesc: "Reigns supreme over the regional league, challenging you to push past limits.",
    villainName: `Team ${id.charAt(0).toUpperCase() + id.slice(1)} Syndicate`,
    villainDesc: "A mysterious local gang plotting to misuse regional mythical elements for world domain.",
    starters: [
      {
        id: 252,
        name: "Treecko",
        category: "Wood Gecko Pokémon",
        height: "0.5 m",
        weight: "5.0 kg",
        ability: "Overgrow",
        description: "It makes its nest in a giant tree in the forest. It ferociously guards its territory.",
        types: ["grass"],
        stats: { hp: 40, attack: 45, defense: 35, spAtk: 65, spDef: 55, speed: 70 }
      },
      {
        id: 255,
        name: "Torchic",
        category: "Chick Pokémon",
        height: "0.4 m",
        weight: "2.5 kg",
        ability: "Blaze",
        description: "It keeps a fire burning inside its body. It hugs its trainer to convey warm feelings.",
        types: ["fire"],
        stats: { hp: 45, attack: 60, defense: 40, spAtk: 70, spDef: 50, speed: 45 }
      },
      {
        id: 258,
        name: "Mudkip",
        category: "Mud Fish Pokémon",
        height: "0.4 m",
        weight: "7.6 kg",
        ability: "Torrent",
        description: "The large fin on its head acts as radar. It can check water currents and air conditions.",
        types: ["water"],
        stats: { hp: 50, attack: 70, defense: 50, spAtk: 50, spDef: 50, speed: 40 }
      }
    ],
    legendaries: [
      {
        id: 384,
        name: "Rayquaza",
        category: "Sky High Pokémon",
        height: "7.0 m",
        weight: "206.5 kg",
        ability: "Air Lock",
        description: "It flies endlessly in the ozone layer. It is said to have descended to stop Kyogre and Groudon.",
        types: ["dragon", "flying"],
        stats: { hp: 105, attack: 150, defense: 90, spAtk: 150, spDef: 90, speed: 95 }
      }
    ],
    mythicals: [],
    gyms: [
      { name: "Leader 1", badgeName: "First Badge", badgeUrl: "🌟", typeSpecialty: "Varying", levelRange: "Lv. 10-14", leaderAvatar: "👤" },
      { name: "Leader 2", badgeName: "Second Badge", badgeUrl: "🛡️", typeSpecialty: "Varying", levelRange: "Lv. 16-20", leaderAvatar: "👤" },
      { name: "Leader 3", badgeName: "Third Badge", badgeUrl: "⚔️", typeSpecialty: "Varying", levelRange: "Lv. 22-26", leaderAvatar: "👤" },
      { name: "Leader 4", badgeName: "Fourth Badge", badgeUrl: "☀️", typeSpecialty: "Varying", levelRange: "Lv. 28-32", leaderAvatar: "👤" }
    ]
  };
}
