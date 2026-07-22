export interface Leader {
  name: string;
  badgeName: string;
  badgeUrl: string; // or emoji
  typeSpecialty: string;
  levelRange: string;
  leaderAvatar: string; // url/emoji/placeholder
}

export interface EliteFourMember {
  name: string;
  title: string;
  typeSpecialty: string;
  acePokemon: string;
  aceId: number;
}

export interface Landmark {
  name: string;
  category: "City" | "Route" | "Dungeon" | "Monument";
  description: string;
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
  gimmickName: string;
  gimmickDesc: string;
  climateOverview: string;
  starters: FeaturedPokemon[];
  legendaries: FeaturedPokemon[];
  mythicals: FeaturedPokemon[];
  pseudoLegendary?: FeaturedPokemon;
  gyms: Leader[];
  eliteFour: EliteFourMember[];
  landmarks: Landmark[];
}

export const REGION_DETAILS: Record<string, RegionDetailData> = {
  kanto: {
    professorDesc: "Pallet Town's premier authority on Pokémon, inventor of the first electronic Pokédex, studying species relationships with humans.",
    championDesc: "Blue Oak (later Red), who conquered the Indigo League with an aggressive, well-rounded battle strategy that inspired generations.",
    villainName: "Team Rocket Syndicate",
    villainDesc: "A ruthless mafia syndicate led secretly by Gym Leader Giovanni, exploiting Pokémon for illicit black-market profit and corporate extortion.",
    gimmickName: "Classic Pokémon League System",
    gimmickDesc: "The baseline 8-gym circuit culminating at the Indigo Plateau, laying the foundation for modern global competitive Pokémon leagues.",
    climateOverview: "Temperate coastal continent with dense forests, volcanic islands, subterranean cave channels, and sprawling metropolitan cities.",
    starters: [
      {
        id: 1,
        name: "Bulbasaur",
        category: "Seed Pokémon",
        height: "0.7 m",
        weight: "6.9 kg",
        ability: "Overgrow",
        description: "There is a plant seed on its back from the day this Pokémon is born. The seed slowly grows larger as it absorbs solar energy.",
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
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail flame.",
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
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous pressure to overpower foes.",
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
        description: "A legendary bird Pokémon that controls ice. The flapping of its wings chills the air into sparkling blizzards.",
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
        description: "A legendary bird Pokémon that resides inside storm clouds. It gains energy when struck by lightning bolts.",
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
        description: "One of the legendary bird Pokémon. Dipping its body into the magma of volcanoes rejuvenates its fiery plumage.",
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
        description: "A Pokémon created by recombining Mew's genes. It is said to possess the most cold-hearted, formidable battle spirit.",
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
        description: "Its DNA is said to contain the genetic codes of all Pokémon, allowing it to master any technique seamlessly.",
        types: ["psychic"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    pseudoLegendary: {
      id: 149,
      name: "Dragonite",
      category: "Dragon Pokémon",
      height: "2.2 m",
      weight: "210.0 kg",
      ability: "Inner Focus",
      description: "It is said to make its home somewhere in the sea. It can circle the globe in just 16 hours.",
      types: ["dragon", "flying"],
      stats: { hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80 }
    },
    gyms: [
      { name: "Brock", badgeName: "Boulder Badge", badgeUrl: "🪨", typeSpecialty: "Rock", levelRange: "Lv. 12-14", leaderAvatar: "🧗‍♂️" },
      { name: "Misty", badgeName: "Cascade Badge", badgeUrl: "💧", typeSpecialty: "Water", levelRange: "Lv. 18-21", leaderAvatar: "🧜‍♀️" },
      { name: "Lt. Surge", badgeName: "Thunder Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 21-24", leaderAvatar: "💂‍♂️" },
      { name: "Erika", badgeName: "Rainbow Badge", badgeUrl: "🌈", typeSpecialty: "Grass", levelRange: "Lv. 26-29", leaderAvatar: "👩‍🌾" },
      { name: "Koga", badgeName: "Soul Badge", badgeUrl: "💜", typeSpecialty: "Poison", levelRange: "Lv. 37-43", leaderAvatar: "🥷" },
      { name: "Sabrina", badgeName: "Marsh Badge", badgeUrl: "🔮", typeSpecialty: "Psychic", levelRange: "Lv. 38-43", leaderAvatar: "🧙‍♀️" },
      { name: "Blaine", badgeName: "Volcano Badge", badgeUrl: "🔥", typeSpecialty: "Fire", levelRange: "Lv. 42-47", leaderAvatar: "👴" },
      { name: "Giovanni", badgeName: "Earth Badge", badgeUrl: "🔰", typeSpecialty: "Ground", levelRange: "Lv. 45-50", leaderAvatar: "🤵" }
    ],
    eliteFour: [
      { name: "Lorelei", title: "Master of Frost", typeSpecialty: "Ice", acePokemon: "Lapras", aceId: 131 },
      { name: "Bruno", title: "Warrior of Iron Will", typeSpecialty: "Fighting", acePokemon: "Machamp", aceId: 68 },
      { name: "Agatha", title: "Ghostly Matriarch", typeSpecialty: "Ghost / Poison", acePokemon: "Gengar", aceId: 94 },
      { name: "Lance", title: "Dragon Tamer", typeSpecialty: "Dragon", acePokemon: "Dragonite", aceId: 149 }
    ],
    landmarks: [
      { name: "Pallet Town", category: "City", description: "A quiet, idyllic rural settlement known for Professor Oak's research laboratory." },
      { name: "Celadon City", category: "City", description: "The bustling commercial jewel of Kanto housing the Department Store and Game Corner." },
      { name: "Cinnabar Island", category: "City", description: "A volcanic island housing the destroyed Pokémon Mansion where Mewtwo was created." },
      { name: "Cerulean Cave", category: "Dungeon", description: "A treacherous, high-power cavern where only League Champions are granted clearance." }
    ]
  },
  johto: {
    professorDesc: "New Bark Town's tech-focused researcher specializing in Pokémon breeding, egg occurrences, and evolution triggers.",
    championDesc: "Lance the Dragon Master, who stepped up from the Elite Four to defend the unified Indigo Championship title.",
    villainName: "Team Rocket Remnants",
    villainDesc: "Rogue syndicate splinter cells hijacking the Goldenrod Radio Tower to broadcast signals in search of missing leader Giovanni.",
    gimmickName: "Day/Night Cycle & Apricorn Balls",
    gimmickDesc: "Introduction of real-time day/night cycles, day-of-week events, held items, and custom hand-crafted Apricorn Pokéballs.",
    climateOverview: "Rich mountainous valleys, ancient forests, traditional shrines, and stormy coastal archipelagoes.",
    starters: [
      {
        id: 152,
        name: "Chikorita",
        category: "Leaf Pokémon",
        height: "0.9 m",
        weight: "6.4 kg",
        ability: "Overgrow",
        description: "A sweet, soothing aroma gently wafts from the leaf on its head. It is docile and loves to bask in warm sunlight.",
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
        description: "It is timid, and always curls itself into a protective ball. When threatened, it ignites high flames along its back.",
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
        description: "It is small but energetic and tough. It bites playfully at anything, possessing jaws strong enough to crush stones.",
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
        description: "Embodying the lightning strike that burned the Brass Tower, its roars send shockwaves shuddering through the air.",
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
        description: "Born from the flames that consumed the Brass Tower, it is said that when it roars, volcanoes erupt across the globe.",
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
        description: "Embodying the purifying rain that quenched the Brass Tower fire, Suicune races around the world purifying polluted waters.",
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
        description: "It slumbers in the deep oceanic trenches of the Whirl Islands. Flapping its powerful wings can spark 40-day gales.",
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
        description: "A golden rainbow phoenix that continuously soars through the sky, granting eternal happiness to pure-hearted trainers.",
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
        description: "Revered as the Guardian of the Ilex Forest, this mythical spirit travels across time to rejuvenate ecosystems.",
        types: ["psychic", "grass"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    pseudoLegendary: {
      id: 248,
      name: "Tyranitar",
      category: "Armor Pokémon",
      height: "2.0 m",
      weight: "202.0 kg",
      ability: "Sand Stream",
      description: "Extremely violent, its heavy armor protects it from attacks. A single punch can collapse mountains and trigger earthquakes.",
      types: ["rock", "dark"],
      stats: { hp: 100, attack: 134, defense: 110, spAtk: 95, spDef: 100, speed: 61 }
    },
    gyms: [
      { name: "Falkner", badgeName: "Zephyr Badge", badgeUrl: "🪶", typeSpecialty: "Flying", levelRange: "Lv. 9-13", leaderAvatar: "🦅" },
      { name: "Bugsy", badgeName: "Hive Badge", badgeUrl: "🐝", typeSpecialty: "Bug", levelRange: "Lv. 15-18", leaderAvatar: "🐞" },
      { name: "Whitney", badgeName: "Plain Badge", badgeUrl: "🌸", typeSpecialty: "Normal", levelRange: "Lv. 18-20", leaderAvatar: "👧" },
      { name: "Morty", badgeName: "Fog Badge", badgeUrl: "👻", typeSpecialty: "Ghost", levelRange: "Lv. 21-25", leaderAvatar: "🕶️" },
      { name: "Chuck", badgeName: "Storm Badge", badgeUrl: "✊", typeSpecialty: "Fighting", levelRange: "Lv. 27-31", leaderAvatar: "🥋" },
      { name: "Jasmine", badgeName: "Mineral Badge", badgeUrl: "🔩", typeSpecialty: "Steel", levelRange: "Lv. 30-35", leaderAvatar: "🔧" },
      { name: "Pryce", badgeName: "Glacier Badge", badgeUrl: "❄️", typeSpecialty: "Ice", levelRange: "Lv. 31-34", leaderAvatar: "👴" },
      { name: "Clair", badgeName: "Rising Badge", badgeUrl: "🐉", typeSpecialty: "Dragon", levelRange: "Lv. 37-41", leaderAvatar: "👩‍🎤" }
    ],
    eliteFour: [
      { name: "Will", title: "Master of Illusion", typeSpecialty: "Psychic", acePokemon: "Xatu", aceId: 178 },
      { name: "Koga", title: "Ninja Grandmaster", typeSpecialty: "Poison", acePokemon: "Crobat", aceId: 169 },
      { name: "Bruno", title: "Iron Combatant", typeSpecialty: "Fighting", acePokemon: "Machamp", aceId: 68 },
      { name: "Karen", title: "Darkness Virtuoso", typeSpecialty: "Dark", acePokemon: "Houndoom", aceId: 229 }
    ],
    landmarks: [
      { name: "Ecruteak City", category: "City", description: "The cultural heartland of Johto, featuring the Bell Tower and the historic Burned Tower." },
      { name: "Goldenrod City", category: "City", description: "A thriving metropolis home to the Radio Tower, Magnet Train terminal, and Department Store." },
      { name: "Lake of Rage", category: "Monument", description: "A vast northern lake famous for the forced evolution of the Shiny Red Gyarados." },
      { name: "Ilex Forest", category: "Dungeon", description: "An ancient, sunless woodland protected by the sacred shrine of Celebi." }
    ]
  },
  hoenn: {
    professorDesc: "Littleroot Town's field biologist who frequently gets caught up studying wild Pokémon behavior in their natural habitats.",
    championDesc: "Steven Stone (and Wallace), an enigmatic rare-stone collector and Steel-type strategist of immense elegance.",
    villainName: "Team Magma & Team Aqua",
    villainDesc: "Rival eco-terrorist syndicates seeking to awaken Groudon to dry the seas or Kyogre to flood the continents.",
    gimmickName: "Abilities, Natures & Secret Bases",
    gimmickDesc: "Introduction of passive abilities, personality Natures, Double Battles, and customizable Secret Base hideouts.",
    climateOverview: "Tropical archipelago defined by volcanic ash-fields, deep ocean trenches, rainforests, and hot springs.",
    starters: [
      {
        id: 252,
        name: "Treecko",
        category: "Wood Gecko Pokémon",
        height: "0.5 m",
        weight: "5.0 kg",
        ability: "Overgrow",
        description: "It builds nests in giant forest trees. Tiny spikes on the bottoms of its feet allow it to scale vertical walls effortlessly.",
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
        description: "A fire burns inside its belly. Hugging it feels like holding a hot water bottle.",
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
        description: "The large fin on its head acts as sensitive radar, allowing it to detect water currents and atmospheric changes.",
        types: ["water"],
        stats: { hp: 50, attack: 70, defense: 50, spAtk: 50, spDef: 50, speed: 40 }
      }
    ],
    legendaries: [
      {
        id: 382,
        name: "Kyogre",
        category: "Sea Basin Pokémon",
        height: "4.5 m",
        weight: "352.0 kg",
        ability: "Drizzle",
        description: "The legendary lord of the oceans capable of expanding seas with endless torrential rains. Possesses Primal Reversion power.",
        types: ["water"],
        stats: { hp: 100, attack: 100, defense: 90, spAtk: 150, spDef: 140, speed: 90 }
      },
      {
        id: 383,
        name: "Groudon",
        category: "Continent Pokémon",
        height: "3.5 m",
        weight: "950.0 kg",
        ability: "Drought",
        description: "The legendary lord of landmasses capable of evaporating water and raising continents with blazing sunlight.",
        types: ["ground"],
        stats: { hp: 100, attack: 150, defense: 140, spAtk: 100, spDef: 90, speed: 90 }
      },
      {
        id: 384,
        name: "Rayquaza",
        category: "Sky High Pokémon",
        height: "7.0 m",
        weight: "206.5 kg",
        ability: "Air Lock",
        description: "It has lived for hundreds of millions of years in the ozone layer. It descends to quell the destructive wars between Kyogre and Groudon.",
        types: ["dragon", "flying"],
        stats: { hp: 105, attack: 150, defense: 90, spAtk: 150, spDef: 90, speed: 95 }
      }
    ],
    mythicals: [
      {
        id: 385,
        name: "Jirachi",
        category: "Wish Pokémon",
        height: "0.3 m",
        weight: "1.1 kg",
        ability: "Serene Grace",
        description: "It is said to grant any wish written on the notes attached to its head when it awakens once every thousand years.",
        types: ["steel", "psychic"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      },
      {
        id: 386,
        name: "Deoxys",
        category: "DNA Pokémon",
        height: "1.7 m",
        weight: "60.8 kg",
        ability: "Pressure",
        description: "An alien virus attached to a meteor that underwent a cellular mutation when exposed to laser beams.",
        types: ["psychic"],
        stats: { hp: 50, attack: 150, defense: 50, spAtk: 150, spDef: 50, speed: 150 }
      }
    ],
    pseudoLegendary: {
      id: 373,
      name: "Salamence",
      category: "Dragon Pokémon",
      height: "1.5 m",
      weight: "102.6 kg",
      ability: "Intimidate",
      description: "It came about as a result of an express, long-held dream of growing wings. It spews intense fire while soaring.",
      types: ["dragon", "flying"],
      stats: { hp: 95, attack: 135, defense: 80, spAtk: 110, spDef: 80, speed: 100 }
    },
    gyms: [
      { name: "Roxanne", badgeName: "Stone Badge", badgeUrl: "🪨", typeSpecialty: "Rock", levelRange: "Lv. 12-15", leaderAvatar: "👩‍🏫" },
      { name: "Brawly", badgeName: "Knuckle Badge", badgeUrl: "🥊", typeSpecialty: "Fighting", levelRange: "Lv. 16-19", leaderAvatar: "🏄‍♂️" },
      { name: "Wattson", badgeName: "Dynamo Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 20-24", leaderAvatar: "👴" },
      { name: "Flannery", badgeName: "Heat Badge", badgeUrl: "🔥", typeSpecialty: "Fire", levelRange: "Lv. 26-29", leaderAvatar: "👩‍🦰" },
      { name: "Norman", badgeName: "Balance Badge", badgeUrl: "⚖️", typeSpecialty: "Normal", levelRange: "Lv. 28-31", leaderAvatar: "🧔" },
      { name: "Winona", badgeName: "Feather Badge", badgeUrl: "🪶", typeSpecialty: "Flying", levelRange: "Lv. 31-33", leaderAvatar: "🧝‍♀️" },
      { name: "Tate & Liza", badgeName: "Mind Badge", badgeUrl: "🔮", typeSpecialty: "Psychic", levelRange: "Lv. 39-42", leaderAvatar: "👯" },
      { name: "Wallace / Juan", badgeName: "Rain Badge", badgeUrl: "🌧️", typeSpecialty: "Water", levelRange: "Lv. 41-46", leaderAvatar: "🕺" }
    ],
    eliteFour: [
      { name: "Sidney", title: "Shadow Rogue", typeSpecialty: "Dark", acePokemon: "Absol", aceId: 359 },
      { name: "Phoebe", title: "Spirit Whisperer", typeSpecialty: "Ghost", acePokemon: "Dusknoir", aceId: 477 },
      { name: "Glacia", title: "Ice Empress", typeSpecialty: "Ice", acePokemon: "Walrein", aceId: 365 },
      { name: "Drake", title: "Dragon Commodore", typeSpecialty: "Dragon", acePokemon: "Salamence", aceId: 373 }
    ],
    landmarks: [
      { name: "Slateport City", category: "City", description: "A oceanfront hub famous for its Oceanic Museum, market bazaars, and shipyard." },
      { name: "Sootopolis City", category: "City", description: "A city built inside a giant submerged volcanic crater, accessed via underwater diving routes." },
      { name: "Mt. Chimney", category: "Monument", description: "An active volcano connected via cable car, serving as a battleground between Magma and Aqua." },
      { name: "Sky Pillar", category: "Dungeon", description: "An ancient, towering stone spire where Rayquaza slumbers high above the clouds." }
    ]
  },
  sinnoh: {
    professorDesc: "Sandgem Town's distinguished academic scholar studying Pokémon evolutionary branches and mythology across history.",
    championDesc: "Cynthia, the formidable master archaeologist and undisputed champion whose team features Garchomp and Togekiss.",
    villainName: "Team Galactic",
    villainDesc: "A nihilistic cult led by Cyrus seeking to reset the universe into a world without emotion using Dialga and Palkia.",
    gimmickName: "Physical/Special Split & Wi-Fi GTS",
    gimmickDesc: "Revolutionary restructuring of attack categories based on individual move properties rather than types, plus Global Wi-Fi trading.",
    climateOverview: "Sub-arctic, snow-capped continent split by the formidable Mt. Coronet ridge and dotted with mystical mythic lakes.",
    starters: [
      {
        id: 387,
        name: "Turtwig",
        category: "Tiny Turtle Pokémon",
        height: "0.4 m",
        weight: "10.2 kg",
        ability: "Overgrow",
        description: "Made from soil, the shell on its back hardens when it drinks water. It carries out photosynthesis with its head leaf.",
        types: ["grass"],
        stats: { hp: 55, attack: 68, defense: 64, spAtk: 45, spDef: 55, speed: 31 }
      },
      {
        id: 390,
        name: "Chimchar",
        category: "Chimp Pokémon",
        height: "0.5 m",
        weight: "6.2 kg",
        ability: "Blaze",
        description: "It agilely scales sheer cliffs to live atop craggy mountains. Its fiery tail is fueled by gas produced in its belly.",
        types: ["fire"],
        stats: { hp: 44, attack: 58, defense: 44, spAtk: 58, spDef: 44, speed: 61 }
      },
      {
        id: 393,
        name: "Piplup",
        category: "Penguin Pokémon",
        height: "0.4 m",
        weight: "5.2 kg",
        ability: "Torrent",
        description: "It is proud and dislikes receiving food from people. Its thick down guards it against biting cold.",
        types: ["water"],
        stats: { hp: 53, attack: 51, defense: 53, spAtk: 61, spDef: 56, speed: 40 }
      }
    ],
    legendaries: [
      {
        id: 483,
        name: "Dialga",
        category: "Temporal Pokémon",
        height: "5.4 m",
        weight: "683.0 kg",
        ability: "Pressure",
        description: "A legendary deity controlling the flow of time. It is said that time started moving when Dialga was born.",
        types: ["steel", "dragon"],
        stats: { hp: 100, attack: 120, defense: 120, spAtk: 150, spDef: 100, speed: 90 }
      },
      {
        id: 484,
        name: "Palkia",
        category: "Spatial Pokémon",
        height: "4.2 m",
        weight: "336.0 kg",
        ability: "Pressure",
        description: "A legendary deity governing space. Its breath is said to create stability within space-time dimensions.",
        types: ["water", "dragon"],
        stats: { hp: 90, attack: 120, defense: 100, spAtk: 150, spDef: 120, speed: 100 }
      },
      {
        id: 487,
        name: "Giratina",
        category: "Renegade Pokémon",
        height: "4.5 m",
        weight: "750.0 kg",
        ability: "Pressure",
        description: "Banished for its destructive nature, it watches the real world silently from the Distortion World.",
        types: ["ghost", "dragon"],
        stats: { hp: 150, attack: 100, defense: 120, spAtk: 100, spDef: 120, speed: 90 }
      }
    ],
    mythicals: [
      {
        id: 493,
        name: "Arceus",
        category: "Alpha Pokémon",
        height: "3.2 m",
        weight: "320.0 kg",
        ability: "Multitype",
        description: "According to Sinnoh myth, this Pokémon emerged from an egg before the universe existed and created everything.",
        types: ["normal"],
        stats: { hp: 120, attack: 120, defense: 120, spAtk: 120, spDef: 120, speed: 120 }
      }
    ],
    pseudoLegendary: {
      id: 445,
      name: "Garchomp",
      category: "Mach Pokémon",
      height: "1.9 m",
      weight: "95.0 kg",
      ability: "Sand Veil",
      description: "When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed to hunt prey.",
      types: ["dragon", "ground"],
      stats: { hp: 108, attack: 130, defense: 95, spAtk: 80, spDef: 85, speed: 102 }
    },
    gyms: [
      { name: "Roark", badgeName: "Coal Badge", badgeUrl: "⛏️", typeSpecialty: "Rock", levelRange: "Lv. 12-14", leaderAvatar: "👷" },
      { name: "Gardenia", badgeName: "Forest Badge", badgeUrl: "🌲", typeSpecialty: "Grass", levelRange: "Lv. 19-22", leaderAvatar: "👩‍🌾" },
      { name: "Maylene", badgeName: "Cobble Badge", badgeUrl: "🥊", typeSpecialty: "Fighting", levelRange: "Lv. 27-30", leaderAvatar: "🥋" },
      { name: "Crasher Wake", badgeName: "Fen Badge", badgeUrl: "🌊", typeSpecialty: "Water", levelRange: "Lv. 27-30", leaderAvatar: "🤼‍♂️" },
      { name: "Fantina", badgeName: "Relic Badge", badgeUrl: "👻", typeSpecialty: "Ghost", levelRange: "Lv. 32-36", leaderAvatar: "💃" },
      { name: "Byron", badgeName: "Mine Badge", badgeUrl: "⛏️", typeSpecialty: "Steel", levelRange: "Lv. 36-41", leaderAvatar: "👷‍♂️" },
      { name: "Candice", badgeName: "Icicle Badge", badgeUrl: "❄️", typeSpecialty: "Ice", levelRange: "Lv. 38-44", leaderAvatar: "🎿" },
      { name: "Volkner", badgeName: "Beacon Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 46-50", leaderAvatar: "⚡" }
    ],
    eliteFour: [
      { name: "Aaron", title: "Bug Vanguard", typeSpecialty: "Bug", acePokemon: "Drapion", aceId: 452 },
      { name: "Bertha", title: "Earthen Anchor", typeSpecialty: "Ground", acePokemon: "Rhyperior", aceId: 464 },
      { name: "Flint", title: "Infernal Blaze", typeSpecialty: "Fire", acePokemon: "Magmortar", aceId: 467 },
      { name: "Lucian", title: "Mind Scholar", typeSpecialty: "Psychic", acePokemon: "Gallade", aceId: 475 }
    ],
    landmarks: [
      { name: "Jubilife City", category: "City", description: "The technological communications capital featuring the TV Station and Pokétch Co." },
      { name: "Mt. Coronet", category: "Monument", description: "The massive mountain range dividing Sinnoh, crowned by the ancient Spear Pillar ruins." },
      { name: "Lake Verity", category: "Dungeon", description: "One of Sinnoh's three sacred lakes, guarded by the emotion deity Mesprit." },
      { name: "Distortion World", category: "Dungeon", description: "A bizarre antimatter dimension governed by Giratina where gravity rules are inverted." }
    ]
  },
  unova: {
    professorDesc: "Nuvema Town's distinguished researcher who studies the origin of Pokémon species and environmental adaptations.",
    championDesc: "Alder (and later Iris), a traveling philosopher champion advocating for deep bonds between humans and Pokémon.",
    villainName: "Team Plasma & Neo Plasma",
    villainDesc: "An ideological faction led by Ghetsis and N seeking the total liberation of Pokémon from human companionship.",
    gimmickName: "Animated Battle Sprites & Seasons",
    gimmickDesc: "Introduction of dynamic fully animated camera battle sprites, seasonal weather changes, and Triple/Rotation Battles.",
    climateOverview: "Densely populated metropolitan region based on New York City, featuring sky-scraping bridges, amusement parks, and ancient ruins.",
    starters: [
      {
        id: 495,
        name: "Snivy",
        category: "Grass Snake Pokémon",
        height: "0.6 m",
        weight: "8.1 kg",
        ability: "Overgrow",
        description: "They use photosynthesis by absorbing sunlight with their tails. When they are not feeling well, their tails droop.",
        types: ["grass"],
        stats: { hp: 45, attack: 45, defense: 55, spAtk: 45, spDef: 55, speed: 63 }
      },
      {
        id: 498,
        name: "Tepig",
        category: "Fire Pig Pokémon",
        height: "0.5 m",
        weight: "9.9 kg",
        ability: "Blaze",
        description: "It can adroitly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before eating them.",
        types: ["fire"],
        stats: { hp: 65, attack: 63, defense: 45, spAtk: 45, spDef: 45, speed: 45 }
      },
      {
        id: 501,
        name: "Oshawott",
        category: "Sea Otter Pokémon",
        height: "0.5 m",
        weight: "5.9 kg",
        ability: "Torrent",
        description: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
        types: ["water"],
        stats: { hp: 55, attack: 55, defense: 45, spAtk: 63, spDef: 45, speed: 45 }
      }
    ],
    legendaries: [
      {
        id: 643,
        name: "Reshiram",
        category: "Vast White Pokémon",
        height: "3.2 m",
        weight: "330.0 kg",
        ability: "Turboblaze",
        description: "A legendary dragon of Truth. When its tail blazes, the heat energy moves the atmosphere and alters world weather.",
        types: ["dragon", "fire"],
        stats: { hp: 100, attack: 120, defense: 100, spAtk: 150, spDef: 120, speed: 90 }
      },
      {
        id: 644,
        name: "Zekrom",
        category: "Deep Black Pokémon",
        height: "2.9 m",
        weight: "345.0 kg",
        ability: "Teravolt",
        description: "A legendary dragon of Ideals. Its tail functions as an electrical generator that can scorch the world in thunderbolts.",
        types: ["dragon", "electric"],
        stats: { hp: 100, attack: 150, defense: 120, spAtk: 120, spDef: 100, speed: 90 }
      },
      {
        id: 646,
        name: "Kyurem",
        category: "Boundary Pokémon",
        height: "3.0 m",
        weight: "325.0 kg",
        ability: "Pressure",
        description: "The frozen husk left behind when the dragon split into Reshiram and Zekrom. Fuses with either dragon using DNA Splicers.",
        types: ["dragon", "ice"],
        stats: { hp: 125, attack: 130, defense: 90, spAtk: 130, spDef: 90, speed: 95 }
      }
    ],
    mythicals: [
      {
        id: 494,
        name: "Victini",
        category: "Victory Pokémon",
        height: "0.4 m",
        weight: "4.0 kg",
        ability: "Victory Star",
        description: "It is said that trainers with Victini will always win any battle regardless of the difficulty.",
        types: ["psychic", "fire"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    pseudoLegendary: {
      id: 635,
      name: "Hydreigon",
      category: "Brutal Pokémon",
      height: "1.8 m",
      weight: "160.0 kg",
      ability: "Levitate",
      description: "A brutal, three-headed dragon that responds to anything that moves by biting it savagely.",
      types: ["dark", "dragon"],
      stats: { hp: 92, attack: 105, defense: 90, spAtk: 125, spDef: 90, speed: 98 }
    },
    gyms: [
      { name: "Cilan / Chili / Cress", badgeName: "Trio Badge", badgeUrl: "🍃", typeSpecialty: "Grass/Fire/Water", levelRange: "Lv. 12-14", leaderAvatar: "🧑‍🍳" },
      { name: "Lenora", badgeName: "Basic Badge", badgeUrl: "📖", typeSpecialty: "Normal", levelRange: "Lv. 18-20", leaderAvatar: "👩‍💼" },
      { name: "Burgh", badgeName: "Insect Badge", badgeUrl: "🎨", typeSpecialty: "Bug", levelRange: "Lv. 21-23", leaderAvatar: "🎨" },
      { name: "Elesa", badgeName: "Bolt Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 25-27", leaderAvatar: "💃" },
      { name: "Clay", badgeName: "Quake Badge", badgeUrl: "⛏️", typeSpecialty: "Ground", levelRange: "Lv. 29-31", leaderAvatar: "🤠" },
      { name: "Skyla", badgeName: "Jet Badge", badgeUrl: "✈️", typeSpecialty: "Flying", levelRange: "Lv. 33-35", leaderAvatar: "👩‍✈️" },
      { name: "Brycen", badgeName: "Freeze Badge", badgeUrl: "❄️", typeSpecialty: "Ice", levelRange: "Lv. 37-39", leaderAvatar: "🥋" },
      { name: "Drayden / Iris", badgeName: "Legend Badge", badgeUrl: "🐉", typeSpecialty: "Dragon", levelRange: "Lv. 41-43", leaderAvatar: "🧔" }
    ],
    eliteFour: [
      { name: "Shauntal", title: "Gothic Author", typeSpecialty: "Ghost", acePokemon: "Chandelure", aceId: 609 },
      { name: "Grimsley", title: "High-Stakes Gambler", typeSpecialty: "Dark", acePokemon: "Bisharp", aceId: 625 },
      { name: "Caitlin", title: "Sleepy Telepath", typeSpecialty: "Psychic", acePokemon: "Gothitelle", aceId: 576 },
      { name: "Marshal", title: "Martial Champion", typeSpecialty: "Fighting", acePokemon: "Conkeldurr", aceId: 534 }
    ],
    landmarks: [
      { name: "Castelia City", category: "City", description: "A high-density seaport hub famous for skyscrapers, Art Galleries, and Castelia Ice Cream." },
      { name: "Nimbasa City", category: "City", description: "The entertainment capital featuring the Ferris Wheel, Musical Theater, and Sports Domes." },
      { name: "Dragonspiral Tower", category: "Dungeon", description: "Unova's oldest standing tower where Reshiram and Zekrom slumber in dragon stone form." },
      { name: "Skyarrow Bridge", category: "Monument", description: "A massive suspension bridge spanning across the river toward lower Manhattan-style docks." }
    ]
  },
  kalos: {
    professorDesc: "Lumiose City's charismatic professor researching Mega Evolution phenomena and regional bond connections.",
    championDesc: "Diantha, a world-famous movie star and elegant champion who unleashes Mega Gardevoir in battle.",
    villainName: "Team Flare",
    villainDesc: "A fashionable elitist organization led by Lysandre seeking to activate the ancient Ultimate Weapon to purge the world.",
    gimmickName: "Mega Evolution & Fairy Type",
    gimmickDesc: "Introduction of temporary in-battle evolution unlocking massive stat totals, plus the anti-dragon Fairy typing.",
    climateOverview: "Elegant European aesthetic modeled after France, featuring high-fashion avenues, châteaux, and flower meadows.",
    starters: [
      {
        id: 650,
        name: "Chespin",
        category: "Spiny Nut Pokémon",
        height: "0.4 m",
        weight: "9.0 kg",
        ability: "Overgrow",
        description: "The quills on its head are usually soft. When it flexes them, the points become sharp and hard enough to pierce rock.",
        types: ["grass"],
        stats: { hp: 56, attack: 61, defense: 65, spAtk: 48, spDef: 45, speed: 38 }
      },
      {
        id: 653,
        name: "Fennekin",
        category: "Fox Pokémon",
        height: "0.4 m",
        weight: "9.4 kg",
        ability: "Blaze",
        description: "Eating a twig fills it with energy, and its roomy ears vent hot air exceeding 390 degrees Fahrenheit.",
        types: ["fire"],
        stats: { hp: 40, attack: 45, defense: 40, spAtk: 62, spDef: 60, speed: 60 }
      },
      {
        id: 656,
        name: "Froakie",
        category: "Bubble Frog Pokémon",
        height: "0.3 m",
        weight: "7.0 kg",
        ability: "Torrent",
        description: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it takes from attacks.",
        types: ["water"],
        stats: { hp: 41, attack: 56, defense: 40, spAtk: 62, spDef: 44, speed: 71 }
      }
    ],
    legendaries: [
      {
        id: 716,
        name: "Xerneas",
        category: "Life Pokémon",
        height: "3.0 m",
        weight: "215.0 kg",
        ability: "Fairy Aura",
        description: "When the horns on its head shine in seven colors, it is said to be sharing eternal life with surrounding living beings.",
        types: ["fairy"],
        stats: { hp: 126, attack: 131, defense: 95, spAtk: 131, spDef: 98, speed: 99 }
      },
      {
        id: 717,
        name: "Yveltal",
        category: "Destruction Pokémon",
        height: "5.8 m",
        weight: "203.0 kg",
        ability: "Dark Aura",
        description: "When its life comes to an end, it absorbs the life energy of every living thing around it and turns into a cocoon.",
        types: ["dark", "flying"],
        stats: { hp: 126, attack: 131, defense: 95, spAtk: 131, spDef: 98, speed: 99 }
      },
      {
        id: 718,
        name: "Zygarde",
        category: "Order Pokémon",
        height: "5.0 m",
        weight: "305.0 kg",
        ability: "Aura Break",
        description: "When the Kalos ecosystem falls into disarray, it appears and reveals its 100% Complete Form power.",
        types: ["dragon", "ground"],
        stats: { hp: 108, attack: 100, defense: 121, spAtk: 81, spDef: 95, speed: 95 }
      }
    ],
    mythicals: [
      {
        id: 719,
        name: "Diancie",
        category: "Jewel Pokémon",
        height: "0.7 m",
        weight: "8.8 kg",
        ability: "Clear Body",
        description: "A sudden transformation of Carbink. It can create diamonds instantly by compressing carbon in the air between its hands.",
        types: ["rock", "fairy"],
        stats: { hp: 50, attack: 100, defense: 150, spAtk: 100, spDef: 150, speed: 50 }
      }
    ],
    pseudoLegendary: {
      id: 706,
      name: "Goodra",
      category: "Dragon Pokémon",
      height: "2.0 m",
      weight: "150.5 kg",
      ability: "Sap Sipper",
      description: "This friendly Dragon-type Pokémon hugs its beloved trainer, leaving them covered in sticky slime.",
      types: ["dragon"],
      stats: { hp: 90, attack: 100, defense: 70, spAtk: 110, spDef: 150, speed: 80 }
    },
    gyms: [
      { name: "Viola", badgeName: "Bug Badge", badgeUrl: "📸", typeSpecialty: "Bug", levelRange: "Lv. 10-12", leaderAvatar: "📸" },
      { name: "Grant", badgeName: "Cliff Badge", badgeUrl: "🧗", typeSpecialty: "Rock", levelRange: "Lv. 24-25", leaderAvatar: "🧗" },
      { name: "Korrina", badgeName: "Rumble Badge", badgeUrl: "🛼", typeSpecialty: "Fighting", levelRange: "Lv. 28-32", leaderAvatar: "🛼" },
      { name: "Ramos", badgeName: "Plant Badge", badgeUrl: "🪴", typeSpecialty: "Grass", levelRange: "Lv. 30-34", leaderAvatar: "👨‍🌾" },
      { name: "Clemont", badgeName: "Voltage Badge", badgeUrl: "⚡", typeSpecialty: "Electric", levelRange: "Lv. 35-37", leaderAvatar: "👨‍🔬" },
      { name: "Valerie", badgeName: "Fairy Badge", badgeUrl: "🦋", typeSpecialty: "Fairy", levelRange: "Lv. 38-42", leaderAvatar: "👘" },
      { name: "Olympia", badgeName: "Psychic Badge", badgeUrl: "🔮", typeSpecialty: "Psychic", levelRange: "Lv. 43-45", leaderAvatar: "🧙‍♀️" },
      { name: "Wulfric", badgeName: "Iceberg Badge", badgeUrl: "🧊", typeSpecialty: "Ice", levelRange: "Lv. 55-59", leaderAvatar: "🧔" }
    ],
    eliteFour: [
      { name: "Malva", title: "Pyro Anchor", typeSpecialty: "Fire", acePokemon: "Pyroar", aceId: 668 },
      { name: "Wikstrom", title: "Chivalrous Knight", typeSpecialty: "Steel", acePokemon: "Aegislash", aceId: 681 },
      { name: "Drasna", title: "Gentle Dragon", typeSpecialty: "Dragon", acePokemon: "Noivern", aceId: 715 },
      { name: "Siebold", title: "Culinary Artist", typeSpecialty: "Water", acePokemon: "Clawitzer", aceId: 693 }
    ],
    landmarks: [
      { name: "Lumiose City", category: "City", description: "The cultural hub centered around the majestic Prism Tower and boutique cafes." },
      { name: "Shalour City", category: "City", description: "Home of the Tower of Mastery where Mega Evolution secrets were first unlocked." },
      { name: "Geosenge Town", category: "Monument", description: "A quiet village built around ancient megaliths hiding the underground Ultimate Weapon." },
      { name: "Reflecting Cave", category: "Dungeon", description: "A dazzling cavern filled with mirror-like crystal walls that reflect light across tunnels." }
    ]
  },
  alola: {
    professorDesc: "Hau'oli Outskirts researcher studying Pokémon moves and founder of Alola's inaugural Pokémon League.",
    championDesc: "Professor Kukui / Hau / Player, establishing the first-ever Alola League Champion throne atop Mount Lanakila.",
    villainName: "Team Skull & Aether Foundation",
    villainDesc: "Rebellious street hooligans led by Guzma working alongside President Lusamine's obsessive Ultra Beast dimension project.",
    gimmickName: "Z-Moves, Island Trials & Regional Forms",
    gimmickDesc: "Replacement of Gyms with cultural Island Trials, dance-infused Z-Move crystal attacks, and Alolan environmental species forms.",
    climateOverview: "Tropical paradise archipelago comprising four natural islands and one man-made floating conservation hub.",
    starters: [
      {
        id: 722,
        name: "Rowlet",
        category: "Grass Quill Pokémon",
        height: "0.3 m",
        weight: "1.5 kg",
        ability: "Overgrow",
        description: "Silently glides through the air without making a sound, turning its neck nearly 180 degrees to scout its trainer.",
        types: ["grass", "flying"],
        stats: { hp: 68, attack: 55, defense: 55, spAtk: 50, spDef: 50, speed: 42 }
      },
      {
        id: 725,
        name: "Litten",
        category: "Fire Cat Pokémon",
        height: "0.4 m",
        weight: "4.4 kg",
        ability: "Blaze",
        description: "While grooming itself, it collects loose fur inside its stomach, igniting it into fiery hairball attacks.",
        types: ["fire"],
        stats: { hp: 45, attack: 65, defense: 40, spAtk: 60, spDef: 40, speed: 70 }
      },
      {
        id: 728,
        name: "Popplio",
        category: "Sea Lion Pokémon",
        height: "0.4 m",
        weight: "7.5 kg",
        ability: "Torrent",
        description: "This Pokémon snorts water balloons out of its nose, practicing acrobatic maneuvers to bounce them into enemies.",
        types: ["water"],
        stats: { hp: 50, attack: 54, defense: 54, spAtk: 66, spDef: 66, speed: 40 }
      }
    ],
    legendaries: [
      {
        id: 791,
        name: "Solgaleo",
        category: "Sunne Pokémon",
        height: "3.4 m",
        weight: "230.0 kg",
        ability: "Full Metal Body",
        description: "Honored as the 'beast that devours the sun', it shines with intense light that turns night into bright day.",
        types: ["psychic", "steel"],
        stats: { hp: 137, attack: 137, defense: 107, spAtk: 113, spDef: 89, speed: 97 }
      },
      {
        id: 792,
        name: "Lunala",
        category: "Moone Pokémon",
        height: "4.0 m",
        weight: "120.0 kg",
        ability: "Shadow Shield",
        description: "Honored as the 'beast that calls the moon', it absorbs light to transform the night sky into a glowing starscape.",
        types: ["psychic", "ghost"],
        stats: { hp: 137, attack: 113, defense: 89, spAtk: 137, spDef: 107, speed: 97 }
      },
      {
        id: 800,
        name: "Necrozma",
        category: "Prism Pokémon",
        height: "2.4 m",
        weight: "230.0 kg",
        ability: "Prism Armor",
        description: "Remnant entity of an ancient light deity. It hungers for light, absorbing Solgaleo or Lunala to assume Ultra Necrozma form.",
        types: ["psychic"],
        stats: { hp: 97, attack: 107, defense: 109, spAtk: 127, spDef: 89, speed: 79 }
      }
    ],
    mythicals: [
      {
        id: 801,
        name: "Magearna",
        category: "Artificial Pokémon",
        height: "1.0 m",
        weight: "80.5 kg",
        ability: "Soul-Heart",
        description: "An artificial Pokémon constructed 500 years ago by an ancient scientist. It houses a Soul-Heart in its chest.",
        types: ["steel", "fairy"],
        stats: { hp: 80, attack: 95, defense: 115, spAtk: 130, spDef: 115, speed: 65 }
      }
    ],
    pseudoLegendary: {
      id: 784,
      name: "Kommo-o",
      category: "Scaly Pokémon",
      height: "1.6 m",
      weight: "78.2 kg",
      ability: "Bulletproof",
      description: "When it spots an enemy, it rings its metallic scales together to intimidate them. Its dragon uppercuts can shatter mountains.",
      types: ["dragon", "fighting"],
      stats: { hp: 75, attack: 110, defense: 125, spAtk: 100, spDef: 105, speed: 85 }
    },
    gyms: [
      { name: "Ilima (Melemele)", badgeName: "Normalium Z", badgeUrl: "⚪", typeSpecialty: "Normal Trial", levelRange: "Lv. 11-12", leaderAvatar: "👦" },
      { name: "Lana (Akala)", badgeName: "Waterium Z", badgeUrl: "💧", typeSpecialty: "Water Trial", levelRange: "Lv. 20-22", leaderAvatar: "🎣" },
      { name: "Kiawe (Akala)", badgeName: "Firium Z", badgeUrl: "🔥", typeSpecialty: "Fire Trial", levelRange: "Lv. 22-24", leaderAvatar: "💃" },
      { name: "Mallow (Akala)", badgeName: "Grassium Z", badgeUrl: "🌿", typeSpecialty: "Grass Trial", levelRange: "Lv. 24-26", leaderAvatar: "👩‍🍳" },
      { name: "Sophocles (Ula'ula)", badgeName: "Electrium Z", badgeUrl: "⚡", typeSpecialty: "Electric Trial", levelRange: "Lv. 29-31", leaderAvatar: "👨‍💻" },
      { name: "Acerola (Ula'ula)", badgeName: "Ghostium Z", badgeUrl: "👻", typeSpecialty: "Ghost Trial", levelRange: "Lv. 33-35", leaderAvatar: "👧" },
      { name: "Mina (Poni)", badgeName: "Fairium Z", badgeUrl: "🌸", typeSpecialty: "Fairy Trial", levelRange: "Lv. 42-45", leaderAvatar: "🎨" },
      { name: "Hapu (Poni Island Kahuna)", badgeName: "Groundium Z", badgeUrl: "🪨", typeSpecialty: "Ground Grand Trial", levelRange: "Lv. 47-48", leaderAvatar: "🤠" }
    ],
    eliteFour: [
      { name: "Hala", title: "Melemele Kahuna", typeSpecialty: "Fighting", acePokemon: "Crabominable", aceId: 740 },
      { name: "Olivia", title: "Akala Kahuna", typeSpecialty: "Rock", acePokemon: "Lycanroc", aceId: 745 },
      { name: "Acerola", title: "Ghost Trial Captain", typeSpecialty: "Ghost", acePokemon: "Palossand", aceId: 770 },
      { name: "Kahili", title: "Pro Golfer", typeSpecialty: "Flying", acePokemon: "Toucannon", aceId: 733 }
    ],
    landmarks: [
      { name: "Hau'oli City", category: "City", description: "The main coastal port city featuring shopping malls, beachfronts, and Malasada shops." },
      { name: "Aether Paradise", category: "Monument", description: "A massive artificial floating island sanctuary designed to care for injured Pokémon." },
      { name: "Exeggutor Island", category: "City", description: "An uninhabited tropical island sanctuary overflowing with ultra-tall Alolan Exeggutor." },
      { name: "Ultra Megalopolis", category: "Dungeon", description: "A dark alternate-dimension city stripped of its natural light source by Necrozma." }
    ]
  },
  galar: {
    professorDesc: "Wedgehurst researcher specializing in Dynamax energy research, alongside her granddaughter and successor Sonia.",
    championDesc: "Leon, the undefeated Champion whose charismatic Charizard showdowns draw worldwide stadium television audiences.",
    villainName: "Macro Cosmos & Team Yell",
    villainDesc: "Chairman Rose seeking to awaken Eternatus to avert a 1,000-year future energy crisis, backed by Marnie's rowdy fan club.",
    gimmickName: "Dynamax, Gigantamax & Wild Area",
    gimmickDesc: "Colossal stadium battles where Pokémon swell to skyscraper size, plus free-roaming open camera Wild Areas.",
    climateOverview: "Sports-centric kingdom modeled after the United Kingdom, featuring sprawling stadiums, steam railways, and rolling hills.",
    starters: [
      {
        id: 810,
        name: "Grookey",
        category: "Chimp Pokémon",
        height: "0.3 m",
        weight: "5.0 kg",
        ability: "Overgrow",
        description: "When it uses its special stick to strike rhythmically, the sound waves revive wilted plants and flowers.",
        types: ["grass"],
        stats: { hp: 50, attack: 65, defense: 50, spAtk: 40, spDef: 40, speed: 65 }
      },
      {
        id: 813,
        name: "Scorbunny",
        category: "Rabbit Pokémon",
        height: "0.3 m",
        weight: "4.5 kg",
        ability: "Blaze",
        description: "It stores heat energy in its chest. Once its core warms up, its running speed and fire power increase dramatically.",
        types: ["fire"],
        stats: { hp: 50, attack: 71, defense: 40, spAtk: 40, spDef: 40, speed: 69 }
      },
      {
        id: 816,
        name: "Sobble",
        category: "Water Lizard Pokémon",
        height: "0.3 m",
        weight: "4.0 kg",
        ability: "Torrent",
        description: "When nervous, it secretes tears that trigger a crying phenomenon equivalent to 100 onions in surrounding foes.",
        types: ["water"],
        stats: { hp: 50, attack: 40, defense: 40, spAtk: 70, spDef: 40, speed: 70 }
      }
    ],
    legendaries: [
      {
        id: 888,
        name: "Zacian",
        category: "Warrior Pokémon",
        height: "2.8 m",
        weight: "355.0 kg",
        ability: "Intrepid Sword",
        description: "Known as the Hero's Sword. Carrying a sword in its mouth, its slashes can cut through dragon scales with single strikes.",
        types: ["fairy", "steel"],
        stats: { hp: 92, attack: 150, defense: 115, spAtk: 80, spDef: 115, speed: 148 }
      },
      {
        id: 889,
        name: "Zamazenta",
        category: "Warrior Pokémon",
        height: "2.9 m",
        weight: "785.0 kg",
        ability: "Dauntless Shield",
        description: "Known as the Hero's Shield. Its golden shield fan can repel dragon breath and physical blows without flinching.",
        types: ["fighting", "steel"],
        stats: { hp: 92, attack: 120, defense: 140, spAtk: 80, spDef: 140, speed: 128 }
      },
      {
        id: 890,
        name: "Eternatus",
        category: "Gigantic Pokémon",
        height: "20.0 m",
        weight: "950.0 kg",
        ability: "Pressure",
        description: "The source of Galar's Dynamax energy. Fell in a meteor 20,000 years ago and caused the catastrophic Darkest Day.",
        types: ["poison", "dragon"],
        stats: { hp: 140, attack: 85, defense: 95, spAtk: 145, spDef: 95, speed: 130 }
      }
    ],
    mythicals: [
      {
        id: 893,
        name: "Zarude",
        category: "Rogue Monkey Pokémon",
        height: "1.5 m",
        weight: "70.0 kg",
        ability: "Leaf Guard",
        description: "It uses vines growing from the back of its neck and wrists for gathering food or swinging between trees.",
        types: ["dark", "grass"],
        stats: { hp: 105, attack: 120, defense: 105, spAtk: 70, spDef: 95, speed: 105 }
      }
    ],
    pseudoLegendary: {
      id: 887,
      name: "Dragapult",
      category: "Stealth Pokémon",
      height: "3.0 m",
      weight: "50.0 kg",
      ability: "Infiltrator",
      description: "It carries Dreepy in its horns. When battle begins, it launches Dreepy out like supersonic homing missiles.",
      types: ["dragon", "ghost"],
      stats: { hp: 88, attack: 120, defense: 75, spAtk: 100, spDef: 75, speed: 142 }
    },
    gyms: [
      { name: "Milo", badgeName: "Grass Badge", badgeUrl: "🌾", typeSpecialty: "Grass", levelRange: "Lv. 19-20", leaderAvatar: "👨‍🌾" },
      { name: "Nessa", badgeName: "Water Badge", badgeUrl: "🌊", typeSpecialty: "Water", levelRange: "Lv. 22-24", leaderAvatar: "🧜‍♀️" },
      { name: "Kabu", badgeName: "Fire Badge", badgeUrl: "🔥", typeSpecialty: "Fire", levelRange: "Lv. 25-27", leaderAvatar: "🏃‍♂️" },
      { name: "Bea / Allister", badgeName: "Fighting / Ghost Badge", badgeUrl: "🥋", typeSpecialty: "Fighting/Ghost", levelRange: "Lv. 34-36", leaderAvatar: "🥋" },
      { name: "Opal", badgeName: "Fairy Badge", badgeUrl: "🎭", typeSpecialty: "Fairy", levelRange: "Lv. 36-38", leaderAvatar: "👵" },
      { name: "Gordie / Melony", badgeName: "Rock / Ice Badge", badgeUrl: "🧊", typeSpecialty: "Rock/Ice", levelRange: "Lv. 40-42", leaderAvatar: "🧊" },
      { name: "Piers", badgeName: "Dark Badge", badgeUrl: "🎸", typeSpecialty: "Dark", levelRange: "Lv. 44-46", leaderAvatar: "🎸" },
      { name: "Raihan", badgeName: "Dragon Badge", badgeUrl: "🐉", typeSpecialty: "Dragon", levelRange: "Lv. 46-48", leaderAvatar: "📱" }
    ],
    eliteFour: [
      { name: "Champions Cup Tournament", title: "Knockout Stadium Bracket", typeSpecialty: "Varied Rivals", acePokemon: "Dynamic Lineups", aceId: 888 }
    ],
    landmarks: [
      { name: "Wyndon", category: "City", description: "The glittering capital housing the massive Rose Stadium and Monorail network." },
      { name: "The Wild Area", category: "Route", description: "A massive open landscape connecting multiple towns, filled with max raid dens." },
      { name: "Slumbering Weald", category: "Dungeon", description: "A perpetual fog-shrouded ancient forest guarding the rusted sword and shield artifacts." },
      { name: "Hammerlocke", category: "City", description: "A medieval castle fortress town where Raihan guards the stadium dragon gym." }
    ]
  },
  hisui: {
    professorDesc: "Galaxy Expedition Team scholar compiling the first-ever complete physical Pokédex book of the Sinnoh region's ancestor past.",
    championDesc: "Commander Kamado & Volo, leading the Galaxy Expedition Team and worshipping Arceus from the heights of Mount Coronet.",
    villainName: "Volo & The Distortion Rift",
    villainDesc: "A rogue Ginkgo Guild merchant allied with Giratina seeking to tear open the space-time rift to rewrite reality.",
    gimmickName: "Agile/Strong Battle Styles & Noble Wardens",
    gimmickDesc: "Introduction of action-order speed manipulations (Agile & Strong styles), Crafting, and calming enraged Noble Lord Pokémon.",
    climateOverview: "Untamed ancient frontier landscape of Sinnoh, featuring wild untamed habitats and snowy mountain ranges.",
    starters: [
      {
        id: 722,
        name: "Hisuian Voltorb / Rowlet",
        category: "Grass Quill / Hisuian Forms",
        height: "0.3 m",
        weight: "1.5 kg",
        ability: "Overgrow",
        description: "Adapted to Hisui's severe winter climate, developing fighting spirit and Hisuian Decidueye evolution.",
        types: ["grass", "fighting"],
        stats: { hp: 88, attack: 112, defense: 80, spAtk: 95, spDef: 95, speed: 60 }
      },
      {
        id: 155,
        name: "Hisuian Typhlosion / Cyndaquil",
        category: "Ghost Flame / Hisuian Forms",
        height: "1.6 m",
        weight: "69.8 kg",
        ability: "Blaze",
        description: "Its purplish spectral flames guide lost spirits into the afterlife without causing lingering harm.",
        types: ["fire", "ghost"],
        stats: { hp: 73, attack: 84, defense: 78, spAtk: 119, spDef: 85, speed: 95 }
      },
      {
        id: 501,
        name: "Hisuian Samurott / Oshawott",
        category: "Formidable / Hisuian Forms",
        height: "1.5 m",
        weight: "58.2 kg",
        ability: "Torrent",
        description: "Hardened by Hisui's wild rivers, it wields dark seamitars that strike enemies with deceptive slashes.",
        types: ["water", "dark"],
        stats: { hp: 90, attack: 108, defense: 80, spAtk: 100, spDef: 65, speed: 85 }
      }
    ],
    legendaries: [
      {
        id: 493,
        name: "Arceus",
        category: "Alpha Creator",
        height: "3.2 m",
        weight: "320.0 kg",
        ability: "Multitype",
        description: "The supreme progenitor who brought the player back in time to seek out all Pokémon across the frontier.",
        types: ["normal"],
        stats: { hp: 120, attack: 120, defense: 120, spAtk: 120, spDef: 120, speed: 120 }
      },
      {
        id: 905,
        name: "Enamorus",
        category: "Love Hate Pokémon",
        height: "1.6 m",
        weight: "48.0 kg",
        ability: "Cute Charm",
        description: "The fourth Forces of Nature deity, soaring down from the clouds to usher in spring with gentle winds.",
        types: ["fairy", "flying"],
        stats: { hp: 74, attack: 115, defense: 70, spAtk: 135, spDef: 80, speed: 106 }
      }
    ],
    mythicals: [
      {
        id: 490,
        name: "Manaphy",
        category: "Seafaring Prince",
        height: "0.3 m",
        weight: "1.4 kg",
        ability: "Hydration",
        description: "Born on the cold seafloor, it can bond deeply with any Pokémon through its Heart Swap power.",
        types: ["water"],
        stats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
      }
    ],
    gyms: [
      { name: "Lord Kleavor (Obsidian Fieldlands)", badgeName: "Frenzy Calmed", badgeUrl: "🪓", typeSpecialty: "Noble Bug/Rock", levelRange: "Lv. 18", leaderAvatar: "🪓" },
      { name: "Lady Lilligant (Crimson Mirelands)", badgeName: "Frenzy Calmed", badgeUrl: "💃", typeSpecialty: "Noble Grass/Fighting", levelRange: "Lv. 30", leaderAvatar: "💃" },
      { name: "Lord Arcanine (Cobalt Coastlands)", badgeName: "Frenzy Calmed", badgeUrl: "🔥", typeSpecialty: "Noble Fire/Rock", levelRange: "Lv. 36", leaderAvatar: "🔥" },
      { name: "Lord Electrode (Coronet Highlands)", badgeName: "Frenzy Calmed", badgeUrl: "⚡", typeSpecialty: "Noble Electric/Grass", levelRange: "Lv. 46", leaderAvatar: "⚡" },
      { name: "Lord Avalugg (Alabaster Icelands)", badgeName: "Frenzy Calmed", badgeUrl: "🧊", typeSpecialty: "Noble Ice/Rock", levelRange: "Lv. 56", leaderAvatar: "🧊" }
    ],
    eliteFour: [
      { name: "Volo & Giratina", title: "Spear Pillar Final Confrontation", typeSpecialty: "Ancient Myth", acePokemon: "Giratina Origin Form", aceId: 487 }
    ],
    landmarks: [
      { name: "Jubilife Village", category: "City", description: "The bustling settlement base for the Galaxy Expedition Team, Pearl Clan, and Diamond Clan." },
      { name: "Obsidian Fieldlands", category: "Route", description: "Vast grassy plains where wild Pokémon roam freely alongside Grandtree Arena." },
      { name: "Mount Coronet Rift", category: "Monument", description: "A tear in time-space above Mount Coronet casting an eerie purple aura over Hisui." }
    ]
  },
  paldea: {
    professorDesc: "Professor Sada (Scarlet) or Turo (Violet), researching the mysterious Terastal phenomenon inside the Great Crater.",
    championDesc: "Geeta (and rival Nemona), leading the Paldea League and encouraging students during the Annual Treasure Hunt.",
    villainName: "Team Star & Paradox Forces",
    villainDesc: "Rebellious academy students led by Penny attempting to protect outcast friends, alongside time-warped Paradox Pokémon.",
    gimmickName: "Terastal Phenomenon & Open World",
    gimmickDesc: "Crystalline crown transformation changing a Pokémon's typing mid-battle, paired with complete non-linear open exploration.",
    climateOverview: "Iberian Peninsula-inspired open continent featuring sandy beaches, olive groves, snowy peaks, and the giant central crater.",
    starters: [
      {
        id: 906,
        name: "Sprigatito",
        category: "Grass Cat Pokémon",
        height: "0.4 m",
        weight: "4.1 kg",
        ability: "Overgrow",
        description: "Rubbing its front paws together releases a sweet aroma that mesmerizes surrounding Pokémon and calms enemies.",
        types: ["grass"],
        stats: { hp: 40, attack: 61, defense: 54, spAtk: 45, spDef: 45, speed: 65 }
      },
      {
        id: 909,
        name: "Fuecoco",
        category: "Fire Croc Pokémon",
        height: "0.4 m",
        weight: "9.8 kg",
        ability: "Blaze",
        description: "It absorbs heat through the scales on its stomach and back, converting it into fiery acoustic flame attacks.",
        types: ["fire"],
        stats: { hp: 67, attack: 45, defense: 59, spAtk: 63, spDef: 40, speed: 36 }
      },
      {
        id: 912,
        name: "Quaxly",
        category: "Duckling Pokémon",
        height: "0.5 m",
        weight: "6.1 kg",
        ability: "Torrent",
        description: "It coats its feathers in a gel secreted by its body to repel water and grime. It keeps its coiffed hair slicked back.",
        types: ["water"],
        stats: { hp: 55, attack: 65, defense: 45, spAtk: 50, spDef: 50, speed: 50 }
      }
    ],
    legendaries: [
      {
        id: 1007,
        name: "Koraidon",
        category: "Winged King",
        height: "2.5 m",
        weight: "303.0 kg",
        ability: "Orichalcum Pulse",
        description: "An ancient paradox ancestor of Cyclizar. Its primal aura turns sunlight blazing, boosting its physical power.",
        types: ["fighting", "dragon"],
        stats: { hp: 100, attack: 135, defense: 115, spAtk: 85, spDef: 100, speed: 135 }
      },
      {
        id: 1008,
        name: "Miraidon",
        category: "Iron Serpent",
        height: "2.8 m",
        weight: "240.0 kg",
        ability: "Hadron Engine",
        description: "A futuristic paradox descendant of Cyclizar. It turns the battlefield into Electric Terrain, powering its energy core.",
        types: ["electric", "dragon"],
        stats: { hp: 100, attack: 85, defense: 100, spAtk: 135, spDef: 115, speed: 135 }
      },
      {
        id: 1024,
        name: "Terapagos",
        category: "Tera Pokémon",
        height: "0.2 m",
        weight: "6.5 kg",
        ability: "Tera Shift",
        description: "The ancient source of the Terastal phenomenon. Its shell contains the power of all 18 elemental types.",
        types: ["normal"],
        stats: { hp: 95, attack: 95, defense: 110, spAtk: 105, spDef: 110, speed: 85 }
      }
    ],
    mythicals: [
      {
        id: 1025,
        name: "Pecharunt",
        category: "Subjugation Pokémon",
        height: "0.3 m",
        weight: "0.3 kg",
        ability: "Poison Puppeteer",
        description: "It stores toxic mochi inside its shell. Feeding mochi to humans or Pokémon binds them under its telepathic control.",
        types: ["poison", "ghost"],
        stats: { hp: 88, attack: 88, defense: 160, spAtk: 88, spDef: 88, speed: 88 }
      }
    ],
    pseudoLegendary: {
      id: 998,
      name: "Baxcalibur",
      category: "Ice Dragon",
      height: "2.1 m",
      weight: "210.0 kg",
      ability: "Thermal Exchange",
      description: "It spews cryogenic air from its mouth. It can launch itself backward using cryogenic thruster blasts.",
      types: ["dragon", "ice"],
      stats: { hp: 115, attack: 145, defense: 92, spAtk: 75, spDef: 86, speed: 87 }
    },
    gyms: [
      { name: "Katy", badgeName: "Bug Badge", badgeUrl: "🧁", typeSpecialty: "Bug", levelRange: "Lv. 14-15", leaderAvatar: "👩‍🍳" },
      { name: "Brassius", badgeName: "Grass Badge", badgeUrl: "🌻", typeSpecialty: "Grass", levelRange: "Lv. 16-17", leaderAvatar: "🎨" },
      { name: "Irono", badgeName: "Electric Badge", badgeUrl: "📺", typeSpecialty: "Electric", levelRange: "Lv. 23-24", leaderAvatar: "📱" },
      { name: "Kofu", badgeName: "Water Badge", badgeUrl: "🐟", typeSpecialty: "Water", levelRange: "Lv. 29-30", leaderAvatar: "👨‍🍳" },
      { name: "Larry", badgeName: "Normal Badge", badgeUrl: "💼", typeSpecialty: "Normal", levelRange: "Lv. 35-36", leaderAvatar: "👔" },
      { name: "Ryme", badgeName: "Ghost Badge", badgeUrl: "🎤", typeSpecialty: "Ghost", levelRange: "Lv. 41-42", leaderAvatar: "🎤" },
      { name: "Tulip", badgeName: "Psychic Badge", badgeUrl: "💄", typeSpecialty: "Psychic", levelRange: "Lv. 44-45", leaderAvatar: "💄" },
      { name: "Grusha", badgeName: "Ice Badge", badgeUrl: "🏂", typeSpecialty: "Ice", levelRange: "Lv. 47-48", leaderAvatar: "🏂" }
    ],
    eliteFour: [
      { name: "Rika", title: "Ground Anchor", typeSpecialty: "Ground", acePokemon: "Clodsire", aceId: 980 },
      { name: "Poppy", title: "Precious Steel", typeSpecialty: "Steel", acePokemon: "Tinkaton", aceId: 959 },
      { name: "Larry", title: "Overworked Flying Specialist", typeSpecialty: "Flying", acePokemon: "Flamigo", aceId: 973 },
      { name: "Hassel", title: "Academy Dragon Master", typeSpecialty: "Dragon", acePokemon: "Baxcalibur", aceId: 998 }
    ],
    landmarks: [
      { name: "Mesagoza", category: "City", description: "The bustling central city housing Naranja/Uva Academy and the Grand Plaza." },
      { name: "Great Crater / Area Zero", category: "Dungeon", description: "A vast central crater holding ancient/futuristic Paradox Pokémon and crystal caves." },
      { name: "Casseroya Lake", category: "Route", description: "A massive freshwater lake populated by Titan Pokémon and Dragon-type trainers." },
      { name: "Levincia", category: "City", description: "A glowing futuristic coastal metropolis known for Irono's stream studio and high tech." }
    ]
  }
};

export function getRegionDetail(id: string): RegionDetailData {
  const normalizedId = id.toLowerCase();
  if (REGION_DETAILS[normalizedId]) {
    return REGION_DETAILS[normalizedId];
  }

  return REGION_DETAILS["kanto"];
}
