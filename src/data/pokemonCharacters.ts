import { KANTO_CHARACTERS } from "./kantoCharacters";
import { MORE_KANTO_CHARACTERS } from "./moreKantoCharacters";

export interface CharacterRelationship {
  charId: string;
  charName: string;
  type: "friend" | "rival" | "family" | "teammate" | "enemy" | "mentor" | "student";
  desc: string;
}

export interface CharacterTeamPokemon {
  id: number; // PokéAPI ID for Pokédex redirection!
  name: string;
  level?: number;
  types: string[];
  ability: string;
  nature?: string;
  moves: string[];
  heldItem?: string;
  evolutionStatus: string;
  isShiny?: boolean;
  firstAppearance: string;
  status: string;
}

export interface CharacterTimelineEvent {
  title: string;
  desc: string;
  media: "game" | "anime" | "manga" | "all";
  chronology: string;
}

export interface CharacterBattleRecord {
  wins: string;
  losses: string;
  championships: string[];
  badges: string[];
  tournaments: string[];
  majorBattles: {
    opponent: string;
    result: "win" | "loss" | "draw";
    eventName: string;
    details: string;
  }[];
}

export interface CharacterVoiceActors {
  english: string;
  japanese: string;
  other?: { lang: string; name: string }[];
}

export interface CharacterAISummary {
  personalityAnalysis: string;
  teamAnalysis: string;
  strengthRadar: {
    tacticalSkill: number; // 0 - 100
    willpower: number;
    empathy: number;
    rawPower: number;
    adaptability: number;
  };
  battleStrategySummary: string;
}

export interface PokemonCharacter {
  id: string; // unique lowercase ID (e.g. 'red')
  name: string;
  japaneseName: string;
  nicknames: string[];
  age?: string;
  gender: string;
  height?: string;
  weight?: string;
  birthday?: string;
  occupation: string;
  role: "Protagonist" | "Rival" | "Gym Leader" | "Elite Four" | "Champion" | "Professor" | "Villain" | "NPC";
  firstAppearance: string;
  latestAppearance: string;
  region: string;
  hometown: string;
  currentLocation: string;
  
  // Biography
  biography: {
    background: string;
    personality: string;
    storyProgression: string;
    characterDevelopment: string;
    goals: string;
    motivations: string;
  };

  // Lists & details
  team: CharacterTeamPokemon[];
  timeline: CharacterTimelineEvent[];
  relationships: CharacterRelationship[];
  battleRecord: CharacterBattleRecord;
  appearanceGallery: {
    title: string;
    description: string;
    imageUrl: string; // fallback artwork or custom styled representation
  }[];
  voiceActors: CharacterVoiceActors;
  music: {
    characterTheme: string;
    battleTheme: string;
    animeTheme?: string;
  };
  quotes: string[];
  trivia: string[];
  regionInfo: {
    homeRegion: string;
    placesVisited: string[];
    journeyPath: string[];
  };
  aiAnalysis: CharacterAISummary;
  popularityRank: number; // 1 to 10 for sorting
  generation: number; // Gen index (1-9)
  characterImageUrl?: string; // High-res portrait artwork URL
}

export const POKEMON_CHARACTERS: PokemonCharacter[] = [
  {
    id: "red",
    name: "Red",
    japaneseName: "レッド (Reddo)",
    nicknames: ["The Living Legend", "The Silent Champion", "Kanto's Pride"],
    age: "11 (Gen 1) / 14 (Gen 2) / 20+ (Gen 7)",
    gender: "Male",
    height: "143 cm (Gen 1) / 170 cm (Gen 7)",
    weight: "40 kg (Gen 1) / 60 kg (Gen 7)",
    birthday: "August 8",
    occupation: "Pokémon Trainer / Living Legend",
    role: "Protagonist",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+) / Pokémon Scarlet & Violet (Mentioned)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Mt. Silver Summit / Alola (Battle Tree)",
    biography: {
      background: "Red started his journey from Pallet Town alongside his rival Blue, with a simple dream of compiling the first-ever National Pokédex. Gifted a Bulbasaur, Charmander, or Squirtle by Professor Oak, he embarked on a legendary quest to conquer the indigo league.",
      personality: "Known as the ultimate silent trainer. He rarely speaks in public, letting his overwhelming tactical genius and deep bonds with his Pokémon communicate for him. He possesses legendary composure and a calm, unwavering spirit under pressure.",
      storyProgression: "Defeated Team Rocket's crime syndicate single-handedly, ending Giovanni's reign. He went on to defeat the Indigo Gyms, elite four, and finally dethroned his newly crowned rival Blue to become the Indigo Plateau Champion.",
      characterDevelopment: "After achieving absolute dominance in Kanto, Red retreated to the freezing apex of Mt. Silver to train in isolation, becoming a mysterious mythic standard of absolute trainer strength.",
      goals: "To constantly push the boundaries of trainer capabilities and explore the infinite depths of Pokémon potential.",
      motivations: "The pure, unadulterated joy of battling and the lifelong bonds built with his battle companions."
    },
    team: [
      {
        id: 25,
        name: "Pikachu",
        level: 88,
        types: ["electric"],
        ability: "Static / Lightning Rod",
        nature: "Brave",
        moves: ["Volt Tackle", "Iron Tail", "Thunderbolt", "Quick Attack"],
        heldItem: "Light Ball",
        evolutionStatus: "Fully Evolved (Partner)",
        firstAppearance: "Pallet Town Woods",
        status: "Active Companion (Signature)"
      },
      {
        id: 6,
        name: "Charizard",
        level: 84,
        types: ["fire", "flying"],
        ability: "Blaze / Solar Power",
        nature: "Adamant",
        moves: ["Blast Burn", "Flare Blitz", "Air Slash", "Dragon Pulse"],
        heldItem: "Charizardite X / Mega Stone",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Starter Gift from Oak",
        status: "Active Team Member"
      },
      {
        id: 9,
        name: "Blastoise",
        level: 80,
        types: ["water"],
        ability: "Torrent",
        nature: "Relaxed",
        moves: ["Hydro Cannon", "Flash Cannon", "Blizzard", "Focus Blast"],
        heldItem: "Blastoisinite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Trade / Starter",
        status: "Active Team Member"
      },
      {
        id: 3,
        name: "Venusaur",
        level: 80,
        types: ["grass", "poison"],
        ability: "Overgrow",
        nature: "Modest",
        moves: ["Frenzy Plant", "Giga Drain", "Sludge Bomb", "Sleep Powder"],
        heldItem: "Venusaurite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Trade / Starter",
        status: "Active Team Member"
      },
      {
        id: 143,
        name: "Snorlax",
        level: 82,
        types: ["normal"],
        ability: "Thick Fat",
        nature: "Careful",
        moves: ["Body Slam", "Crunch", "Heavy Slam", "Rest"],
        heldItem: "Leftovers",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 12 Blockade",
        status: "Active Team Member"
      },
      {
        id: 131,
        name: "Lapras",
        level: 80,
        types: ["water", "ice"],
        ability: "Shell Armor",
        nature: "Calm",
        moves: ["Blizzard", "Surf", "Psychic", "Ice Shard"],
        heldItem: "Never-Melt Ice",
        evolutionStatus: "Single Stage",
        firstAppearance: "Silph Co. Rescue",
        status: "Active Team Member"
      }
    ],
    timeline: [
      {
        title: "Begins Pallet Town Quest",
        desc: "Receives his Pokédex and partner Pokémon from Professor Oak. Departs to conquer Indigo gym challenges.",
        media: "game",
        chronology: "Year 0"
      },
      {
        title: "Dethrones Team Rocket",
        desc: "Infiltrates Silph Co. and defeats Giovanni at the Viridian City Gym, forcing the complete disbandment of Team Rocket.",
        media: "all",
        chronology: "Year 1"
      },
      {
        title: "Becomes Champion of Kanto",
        desc: "Conquers the Indigo Elite Four and defeats Blue in an epic champion final, earning the title of Indigo Plateau Champion.",
        media: "all",
        chronology: "Year 1"
      },
      {
        title: "Ascension to Mt. Silver",
        desc: "Relinquishes his active champion seat to train in extreme isolation under harsh frozen conditions.",
        media: "game",
        chronology: "Year 3"
      },
      {
        title: "The Battle of Legends",
        desc: "Faced by Ethan/Lyra at Mt. Silver's peak, resulting in one of the most celebrated duals in trainer history.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "blue",
        charName: "Blue",
        type: "rival",
        desc: "His lifelong childhood friend and ultimate rival. Their competitive clash pushed both to the absolute peak of trainer capability."
      },
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "mentor",
        desc: "The legendary researcher who sponsored Red's journey and entrusted him with the first Pokédex."
      },
      {
        charId: "ash",
        charName: "Ash Ketchum",
        type: "friend",
        desc: "His anime counterpart. They share an identical core spirit, unbreakable bonds with Pikachu, and the champion mindset."
      }
    ],
    battleRecord: {
      wins: "99.2%",
      losses: "0.8%",
      championships: ["Indigo League Champion", "Kanto Hall of Fame", "Battle Tree Legend"],
      badges: ["Kanto Badges (All 8)"],
      tournaments: ["PWT Champions Tournament", "Alola Battle Tree"],
      majorBattles: [
        {
          opponent: "Blue",
          result: "win",
          eventName: "Indigo Plateau Final",
          details: "A dramatic six-versus-six battle that crowned Red as the absolute champion of Kanto."
        },
        {
          opponent: "Giovanni",
          result: "win",
          eventName: "Viridian Gym Battle",
          details: "Red's final gym badge victory that proved Rocket's elemental ground-type tactics could not stand against him."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Classic Gen 1 Look",
        description: "Red cap, white collar, and iconic vest. The timeless retro sprite style.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      },
      {
        title: "Alola Summer Style",
        description: "An older, casual Red with t-shirt and mature gaze at the Alola Battle Tree.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
      }
    ],
    voiceActors: {
      english: "Bryce Papenbrook",
      japanese: "Junko Takeuchi",
      other: [
        { lang: "Spanish", name: "Adolfo Moreno" },
        { lang: "German", name: "Sandro Blümel" }
      ]
    },
    music: {
      characterTheme: "Red's Theme - Indigo Horizon",
      battleTheme: "Final Battle! VS Champion Red (Mt. Silver Remix)",
      animeTheme: "Pokémon Theme (Double Remix)"
    },
    quotes: [
      "...",
      "...!",
      "Words aren't necessary. Let our pokéballs do the talking."
    ],
    trivia: [
      "Red holds the record for the highest-level Pokémon owned by any NPC trainer in a core game (Level 88 Pikachu in HeartGold/SoulSilver).",
      "Red's speech pattern is notoriously made of ellipsis '...' representing his deep focus and silent stoic persona.",
      "His design is based on the original gameboy artwork illustrated by Ken Sugimori."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Cerulean City", "Mt. Moon", "Cinnabar Island", "Mt. Silver", "Alola Region"],
      journeyPath: ["Pallet Town -> Viridian City -> Pewter City -> Cerulean City -> Vermilion City -> Lavender Town -> Celadon City -> Fuchsia City -> Saffron City -> Cinnabar Island -> Indigo Plateau -> Mt. Silver"]
    },
    aiAnalysis: {
      personalityAnalysis: "Red fits the ISTP (Virtuoso) archetype perfectly. He is highly tactile, completely calm in crisis, and extremely observant. He avoids verbal explanations because he processes battle strategy visually and instinctively in real-time.",
      teamAnalysis: "A masterclass in balanced type synergy. His team features the classic Fire-Water-Grass cores (Charizard, Blastoise, Venusaur) combined with Snorlax's defensive bulk, Lapras's defensive-ice support, and Pikachu's hyper-offensive electric speed. This leaves zero exploitable type weaknesses.",
      strengthRadar: {
        tacticalSkill: 98,
        willpower: 100,
        empathy: 95,
        rawPower: 97,
        adaptability: 96
      },
      battleStrategySummary: "To defeat Red, trainers must disrupt his balanced cores. Relying on entry hazards (Stealth Rock) severely cripples Charizard. Focus-fire Snorlax early using Fighting-type physical sweeps before he recovers health with Leftovers."
    },
    popularityRank: 1,
    generation: 1,
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/5/5e/Red_LGPE.png"
  },
  {
    id: "cynthia",
    name: "Cynthia",
    japaneseName: "シロナ (Shirona)",
    nicknames: ["The Empress of Sinnoh", "Archaeologist Champion", "Garchomp Master"],
    age: "26 (Gen 4)",
    gender: "Female",
    height: "178 cm",
    weight: "58 kg",
    birthday: "October 16",
    occupation: "Sinnoh Champion / Myths Archaeologist",
    role: "Champion",
    firstAppearance: "Pokémon Diamond & Pearl (2006)",
    latestAppearance: "Pokémon Legends: Arceus (Ancestors) / Pokémon Masters EX",
    region: "Sinnoh",
    hometown: "Celestic Town",
    currentLocation: "Sinnoh Pokémon League / Undella Town (Villa)",
    biography: {
      background: "Cynthia is the highly intellectual champion of the Sinnoh League. Growing up in Celestic Town under the tutelage of her grandmother, she developed a lifelong passion for researching myths, legends, and the origins of Space and Time.",
      personality: "Elegant, deeply compassionate, and intensely analytical. She is highly sophisticated, but harbors a warm, playful side (including a humorous obsession with ice cream). In battle, she becomes a terrifyingly calculating, cold tactician.",
      storyProgression: "Guided the protagonist through the distorted anomalies of Cyrus's Team Galactic, assisting at the Spear Pillar and entering the Distortion World to restore cosmic equilibrium.",
      characterDevelopment: "Began as a simple researcher who accidentally conquered the League. She now serves as a guardian of regional history, frequently visiting other regions to explore archaeological sites.",
      goals: "To fully document the mythology of Sinnoh, including the legends of Arceus, Dialga, and Palkia, while raising the next generation of strong trainers.",
      motivations: "The search for truth regarding how humans and Pokémon came to populate the physical universe."
    },
    team: [
      {
        id: 445,
        name: "Garchomp",
        level: 66,
        types: ["dragon", "ground"],
        ability: "Sand Veil / Rough Skin",
        nature: "Jolly",
        moves: ["Dragon Rush", "Earthquake", "Giga Impact", "Brick Break"],
        heldItem: "Yache Berry",
        evolutionStatus: "Fully Evolved (Signature)",
        firstAppearance: "Celestic Town Hatch",
        status: "Active Team Ace"
      },
      {
        id: 448,
        name: "Lucario",
        level: 63,
        types: ["fighting", "steel"],
        ability: "Inner Focus",
        nature: "Naive",
        moves: ["Aura Sphere", "Dragon Pulse", "Extreme Speed", "Close Combat"],
        heldItem: "Life Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Iron Island Egg",
        status: "Active Team Member"
      },
      {
        id: 350,
        name: "Milotic",
        level: 63,
        types: ["water"],
        ability: "Marvel Scale",
        nature: "Bold",
        moves: ["Recover", "Ice Beam", "Scald", "Dragon Pulse"],
        heldItem: "Flame Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mt. Coronet Lake",
        status: "Active Defensive Wall"
      },
      {
        id: 442,
        name: "Spiritomb",
        level: 61,
        types: ["ghost", "dark"],
        ability: "Pressure",
        nature: "Quiet",
        moves: ["Dark Pulse", "Psychic", "Silver Wind", "Shadow Ball"],
        heldItem: "Spooky Plate",
        evolutionStatus: "Single Stage",
        firstAppearance: "Hallowed Tower",
        status: "Active Lead"
      },
      {
        id: 407,
        name: "Roserade",
        level: 60,
        types: ["grass", "poison"],
        ability: "Natural Cure",
        nature: "Timid",
        moves: ["Energy Ball", "Sludge Bomb", "Shadow Ball", "Extrasensory"],
        heldItem: "Big Root",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Eterna Forest",
        status: "Active Team Member"
      },
      {
        id: 468,
        name: "Togekiss",
        level: 63,
        types: ["fairy", "flying"],
        ability: "Serene Grace",
        nature: "Modest",
        moves: ["Air Slash", "Aura Sphere", "Water Pulse", "Thunder Wave"],
        heldItem: "Kings Rock",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Hatched Egg from Riley",
        status: "Active Team Member"
      }
    ],
    timeline: [
      {
        title: "Earns Champion Rank",
        desc: "Defeats the previous Sinnoh Champion to claim the throne at a young age, showcasing her tactical prodigy.",
        media: "game",
        chronology: "Year -4"
      },
      {
        title: "Crisis of Spear Pillar",
        desc: "Aids the protagonist in defeating Team Galactic's Cyrus, traveling into the Distortion World of Giratina.",
        media: "all",
        chronology: "Year 0"
      },
      {
        title: "Alola Battle Tree Tournament",
        desc: "Travels to Alola, teaming up with Red and Blue to oversee extreme battle challenges for skilled global trainers.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "mentor",
        desc: "Frequently consults with Professor Oak on Kanto/Sinnoh mythological similarities and regional ecology."
      },
      {
        charId: "red",
        charName: "Red",
        type: "rival",
        desc: "Shares immense mutual respect. They battle frequently at Alola's Battle Tree to push each other's limits."
      }
    ],
    battleRecord: {
      wins: "96.5%",
      losses: "3.5%",
      championships: ["Sinnoh League Champion (Current)", "Sinnoh Historical Master"],
      badges: ["Sinnoh Badges (All 8)", "Johto Badges (All 8)"],
      tournaments: ["Champions League Tournament", "Alola Battle Tree"],
      majorBattles: [
        {
          opponent: "Cyrus",
          result: "win",
          eventName: "Distortion World Confrontation",
          details: "Unraveled Team Galactic's dimensional plans, defeating Cyrus in an environment where gravity was warped."
        },
        {
          opponent: "Flint",
          result: "win",
          eventName: "League Defense",
          details: "Successfully defended her champion seat against Flint's high-temperature Fire-type offensive sweep."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Signature Black Overcoat",
        description: "Elegant black coat accented with tear-drop hair clips. Sophisticated and powerful.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
      },
      {
        title: "Sygna Suit Cynthia",
        description: "An elegant evening dress matching the scales and style of her partner Garchomp.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Tomo Sakurai",
      other: [
        { lang: "Italian", name: "Alessandra Karpoff" },
        { lang: "German", name: "Gundi Eberhard" }
      ]
    },
    music: {
      characterTheme: "Cynthia's Theme - Archaeological Wonder",
      battleTheme: "Battle! VS Champion Cynthia (D&P Orchestral Remake)"
    },
    quotes: [
      "When every life meets another life, something will be born.",
      "The power you feel... it's the passion of Pokémon.",
      "Would you like to try some triple-scoop chocolate vanilla ice cream?"
    ],
    trivia: [
      "Cynthia's battle theme is infamous among Pokémon players for its intense, fast-paced piano intro, which often triggers feelings of nostalgia and fear.",
      "She is highly disorganized at home, with her Undella Town villa frequently shown cluttered with archaeological papers.",
      "Her ancestor, Cogita, appears in Pokémon Legends: Arceus, sharing her elegant features, blonde hair, and passion for mythology."
    ],
    regionInfo: {
      homeRegion: "Sinnoh",
      placesVisited: ["Celestic Town", "Hearthome City", "Veilstone City", "Undella Town", "Eterna City"],
      journeyPath: ["Celestic Town -> Hearthome City -> Sunyshore City -> Mt. Coronet -> Spear Pillar -> Distortion World -> Undella Town"]
    },
    aiAnalysis: {
      personalityAnalysis: "Cynthia is an INFJ (Advocate) - combining intellectual curiosity with a deep, systemic empathy. She approaches battles like historical enigmas, analyzing her opponent's psychology to predict move triggers long before they happen.",
      teamAnalysis: "Considered the first true competitive-level NPC team. Roserade handles hazards, Spiritomb has no primary weaknesses in older generations, Milotic heals damage via Marvel Scale + Flame Orb, and Togekiss deals devastating flinches. Garchomp is a physical sweeping monster.",
      strengthRadar: {
        tacticalSkill: 99,
        willpower: 96,
        empathy: 98,
        rawPower: 95,
        adaptability: 97
      },
      battleStrategySummary: "To beat Cynthia, carry an Ice-type move like Ice Beam on a fast Pokémon (like Weavile) to immediately neutralize Garchomp. Use Poison/Steel types to stall Roserade, and always carry electric/grass counters to avoid getting stalled by her Milotic's Recover."
    },
    popularityRank: 2,
    generation: 4,
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/2/23/Cynthia_BDSP.png"
  },
  {
    id: "ash",
    name: "Ash Ketchum",
    japaneseName: "サトシ (Satoshi)",
    nicknames: ["The Chosen One", "World Monarch", "Pikachu's Partner"],
    age: "10 (Perpetual)",
    gender: "Male",
    height: "140 cm",
    weight: "38 kg",
    birthday: "May 22",
    occupation: "Pokémon Master / World Monarch Champion",
    role: "Protagonist",
    firstAppearance: "Pokémon Anime Episode 1 (1997)",
    latestAppearance: "Pokémon Aim to Be a Pokémon Master (Finale, 2023)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering worldwide",
    biography: {
      background: "Waking up late on his tenth birthday, Ash missed the traditional starter choice and was given a stubborn, disobedient Pikachu. Overcoming initial trust issues after saving Pikachu from a flock of Spearow, they developed an unbreakable bond.",
      personality: "Hyperactive, incredibly determined, and endlessly optimistic. Ash values his relationships with Pokémon above anything else. He possesses a reckless courage and is famous for inventing completely unorthodox battle strategies on the fly.",
      storyProgression: "Traveled across Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar. He went from losing early local leagues to winning the Alola Manalo Conference, and finally, winning the Masters Eight Tournament in Galar to become the World Coronation Champion.",
      characterDevelopment: "Evolved from an immature, loud-mouthed novice who relied on luck into a deeply empathetic, highly tactical legendary Master who acts as a mentor to newer trainers.",
      goals: "To become a true 'Pokémon Master' — which he defines not by power, but by befriending every single Pokémon in existence.",
      motivations: "The excitement of seeing new horizons, making new friends, and conquering impossible challenges alongside his team."
    },
    team: [
      {
        id: 25,
        name: "Pikachu",
        level: 95,
        types: ["electric"],
        ability: "Static (with Gigantamax)",
        nature: "Naughty",
        moves: ["10,000,000 Volt Thunderbolt", "Iron Tail", "Quick Attack", "Electro Ball"],
        heldItem: "Pikashunium Z-Crystal",
        evolutionStatus: "Refuses to Evolve (Partner)",
        firstAppearance: "Pallet Town Lab",
        status: "Active Primary Partner"
      },
      {
        id: 658,
        name: "Greninja (Ash-Greninja)",
        level: 85,
        types: ["water", "dark"],
        ability: "Battle Bond (Synchro)",
        nature: "Hasty",
        moves: ["Giant Water Shuriken", "Double Team", "Aerial Ace", "Cut"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved (Bond Phenomenon)",
        firstAppearance: "Kalos Starter",
        status: "Guarding Kalos (Summonable)"
      },
      {
        id: 6,
        name: "Charizard",
        level: 88,
        types: ["fire", "flying"],
        ability: "Blaze",
        nature: "Brave",
        moves: ["Flamethrower", "Seismic Toss", "Dragon Tail", "Wing Attack"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Charmander Rescue on Route 24",
        status: "Oak's Corral (Reserved)"
      },
      {
        id: 865,
        name: "Sirfetch'd",
        level: 78,
        types: ["fighting"],
        ability: "Steadfast",
        nature: "Brave",
        moves: ["Meteor Assault", "Brutal Swing", "Detect", "Fury Cutter"],
        heldItem: "Leek Shield",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Galar Route Area",
        status: "Active World Coronation Team"
      },
      {
        id: 448,
        name: "Lucario",
        level: 80,
        types: ["fighting", "steel"],
        ability: "Inner Focus (Mega Evolve)",
        nature: "Serious",
        moves: ["Aura Sphere", "Bullet Punch", "Reversal", "Double Team"],
        heldItem: "Lucarionite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Hatched Egg from Sinnoh",
        status: "Active World Coronation Team"
      },
      {
        id: 94,
        name: "Gengar",
        level: 79,
        types: ["ghost", "poison"],
        ability: "Cursed Body (Gigantamax)",
        nature: "Quirky",
        moves: ["Shadow Ball", "Sludge Bomb", "Dazzling Gleam", "Ice Punch"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Abandoned Vermilion Lab",
        status: "Active World Coronation Team"
      }
    ],
    timeline: [
      {
        title: "Pikachu Awakening",
        desc: "Departs Pallet Town, saves Pikachu from Spearows, witnessing the legendary Ho-Oh flying overhead.",
        media: "anime",
        chronology: "Day 1"
      },
      {
        title: "Orange League Champion",
        desc: "Defeats Drake's Dragonite at Pumelo Stadium, earning his first major championship trophy.",
        media: "anime",
        chronology: "Year 1"
      },
      {
        title: "Champion of Alola",
        desc: "Wins the Alola League Manalo Conference, defeating Gladion in the final to become Alola's first Champion.",
        media: "anime",
        chronology: "Year 3"
      },
      {
        title: "Becomes the World Monarch",
        desc: "Defeats Leon's unbeaten Charizard at Wyndon Stadium in Galar, crowning him as the strongest trainer in the world.",
        media: "anime",
        chronology: "Year 4"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "The gaming standard on whom his design is loosely based. Both share an identical bond with their starter Pikachu."
      },
      {
        charId: "blue",
        charName: "Gary Oak",
        type: "rival",
        desc: "His childhood neighbor and premier rival. Gary's intellectual superiority drove Ash to mature as a trainer."
      }
    ],
    battleRecord: {
      wins: "76.4%",
      losses: "23.6%",
      championships: ["World Coronation Monarch", "Alola League Champion", "Orange League Champion", "Battle Frontier Symbol Conqueror"],
      badges: ["Kanto (8)", "Johto (8)", "Hoenn (8)", "Sinnoh (8)", "Unova (8)", "Kalos (8)"],
      tournaments: ["Masters Eight Wyndon Tournament", "Manalo Conference Alola"],
      majorBattles: [
        {
          opponent: "Leon",
          result: "win",
          eventName: "Masters Eight Finals",
          details: "A legendary clash utilizing Mega Evolution, Z-Moves, and Gigantamax, culminating in Pikachu defeating Charizard."
        },
        {
          opponent: "Paul",
          result: "win",
          eventName: "Sinnoh Lily of the Valley Conference",
          details: "Ash's Infernape activates Blaze to defeat Paul's Electivire, concluding their deeply psychological rivalry."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Original Kanto Cap",
        description: "The classic green-fingerless gloves, blue jacket, and red/white league expo cap.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      }
    ],
    voiceActors: {
      english: "Veronica Taylor (Seasons 1-8) / Sarah Natochenny (Seasons 9-25)",
      japanese: "Rica Matsumoto",
      other: [
        { lang: "Spanish", name: "Adolfo Moreno" },
        { lang: "French", name: "Aurélien Ringelheim" }
      ]
    },
    music: {
      characterTheme: "Ash's Determination",
      battleTheme: "Battle! VS World Coronation Monarch Ash (Anime Orchestration)",
      animeTheme: "Gotta Catch 'Em All! (Original 1997 Theme)"
    },
    quotes: [
      "Pikachu, I choose you!",
      "I'm gonna be a Pokémon Master!",
      "Never give up until it's over!"
    ],
    trivia: [
      "Ash has owned over 80 unique species of Pokémon, yet he rarely evolves his primary partner Pikachu.",
      "His Japanese name, 'Satoshi', is named directly after Satoshi Tajiri, the creator of the Pokémon franchise.",
      "He is noted for holding heavy objects (such as the 72kg Cosmoem) with ease, leading to fans joke-naming him 'Superhuman Ash'."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Indigo Plateau", "Kanto Region", "Alola Region", "Galar Region", "Every Core Region"],
      journeyPath: ["Pallet Town -> Viridian City -> Mt. Moon -> Cerulean City -> Vermilion City -> Lavender Town -> Saffron City -> Fuchsia City -> Cinnabar Island -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Ash is an ENFP (Campaigner). He operates entirely on raw emotional instinct, enthusiasm, and loyalty. He lacks Red's quiet analytical composure but makes up for it with incredible improvisational adaptation, frequently turning battle environments into active weapons.",
      teamAnalysis: "His World Coronation team blends extreme physical pressure (Sirfetch'd, Lucario) with high speed and unpredictability (Gengar, Pikachu). It lacks a standard defensive wall, relying entirely on high speed, mobility, and type counters to run circles around slow opponents.",
      strengthRadar: {
        tacticalSkill: 92,
        willpower: 100,
        empathy: 100,
        rawPower: 94,
        adaptability: 99
      },
      battleStrategySummary: "Ash is extremely susceptible to tactical traps. Using Trick Room completely neutralizes his team's speed advantage, making Pikachu and Greninja easy targets for slow, hyper-bulky physical ground-type tanks."
    },
    popularityRank: 3,
    generation: 1,
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/f/f6/Ash_JN.png"
  },
  {
    id: "giovanni",
    name: "Giovanni",
    japaneseName: "サカキ (Sakaki)",
    nicknames: ["The Rocket Godfather", "Viridian Gym Leader", "Master of Ground"],
    age: "42 (Gen 1)",
    gender: "Male",
    height: "185 cm",
    weight: "85 kg",
    birthday: "November 22",
    occupation: "Former Leader of Team Rocket / Viridian Gym Leader",
    role: "Villain",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Ultra Sun & Ultra Moon (Team Rainbow Rocket)",
    region: "Kanto",
    hometown: "Viridian City",
    currentLocation: "Wandering in hiding / Kanto Caves",
    biography: {
      background: "Giovanni operated for years as the highly respected Gym Leader of Viridian City while secretly running Team Rocket, a ruthless global mafia organization targeting the exploitation and theft of rare Pokémon for corporate and military leverage.",
      personality: "Cold, calculating, authoritative, and incredibly professional. He views Pokémon as assets and tools of business, yet maintains a bizarre sense of traditional mafia honor. He despises chaos, preferring structured corporate control.",
      storyProgression: "Undertook the genetic engineering of Mewtwo to create the ultimate weapon. After Red successfully dissolved his operations at Silph Co. and Viridian Gym, Giovanni disbanded Team Rocket to train in absolute secrecy.",
      characterDevelopment: "Evolved from a localized mafia don into an interdimensional conqueror in Ultra Sun/Moon, where he founded Team Rainbow Rocket, gathering villainous leaders from alternative universes where they had succeeded.",
      goals: "Absolute global corporate and economic control through the monopoly of rare Pokémon and military cloning technologies.",
      motivations: "The acquisition of supreme authority, wealth, and the subversion of league rules to prove corporate supremacy."
    },
    team: [
      {
        id: 112,
        name: "Rhydon",
        level: 50,
        types: ["ground", "rock"],
        ability: "Rock Head / Lightning Rod",
        nature: "Brave",
        moves: ["Earthquake", "Rock Slide", "Tail Whip", "Horn Drill"],
        heldItem: "Soft Sand",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Team Rocket Hideout",
        status: "Active Team Ace"
      },
      {
        id: 53,
        name: "Persian",
        level: 48,
        types: ["normal"],
        ability: "Limber / Technician",
        nature: "Naughty",
        moves: ["Slash", "Bite", "Fake Out", "Power Gem"],
        heldItem: "Silk Scarf",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Rocket Executive Gift",
        status: "Office Companion"
      },
      {
        id: 34,
        name: "Nidoking",
        level: 49,
        types: ["poison", "ground"],
        ability: "Poison Point / Sheer Force",
        nature: "Adamant",
        moves: ["Earthquake", "Poison Jab", "Thrash", "Megahorn"],
        heldItem: "Life Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Safari Zone Captive",
        status: "Active Team Member"
      },
      {
        id: 31,
        name: "Nidoqueen",
        level: 48,
        types: ["poison", "ground"],
        ability: "Rivalry",
        nature: "Impish",
        moves: ["Earthquake", "Sludge Bomb", "Superpower", "Body Slam"],
        heldItem: "Rocky Helmet",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Safari Zone Captive",
        status: "Active Defensive Tank"
      },
      {
        id: 51,
        name: "Dugtrio",
        level: 47,
        types: ["ground"],
        ability: "Arena Trap",
        nature: "Jolly",
        moves: ["Earthquake", "Sucker Punch", "Slash", "Fissure"],
        heldItem: "Choice Band",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Diglett's Cave",
        status: "Active Team Member"
      }
    ],
    timeline: [
      {
        title: "Team Rocket Founding",
        desc: "Establishes Team Rocket corporate headquarters in Saffron and Celadon, buying out local companies.",
        media: "game",
        chronology: "Year -10"
      },
      {
        title: "The Clone Project",
        desc: "Funds the genetic duplication of Mew to create Mewtwo under the supervision of Dr. Fuji.",
        media: "all",
        chronology: "Year -1"
      },
      {
        title: "Defeat by Red & Disbandment",
        desc: "Defeated at Silph Co. and Viridian Gym. Concedes to Red's passion, announcing Rocket's immediate disbandment.",
        media: "all",
        chronology: "Year 1"
      },
      {
        title: "Team Rainbow Rocket Rises",
        desc: "Infiltrates Alola utilizing Ultra Wormhole technology, bringing together villainous leaders from parallel realities.",
        media: "game",
        chronology: "Year 5"
      }
    ],
    relationships: [
      {
        charId: "silver",
        charName: "Silver",
        type: "family",
        desc: "His estranged son. Giovanni's obsession with power caused Silver to harbor a deep, burning hatred for Team Rocket."
      },
      {
        charId: "red",
        charName: "Red",
        type: "enemy",
        desc: "The young kid who shattered his corporate mafia empire, earning his eternal frustration and deep respect."
      }
    ],
    battleRecord: {
      wins: "88.1%",
      losses: "11.9%",
      championships: ["Viridian Gym Badge Issuer (Former)", "Rainbow Rocket Commander"],
      badges: ["Kanto Gym Badges (All 8)"],
      tournaments: ["PWT Leaders Tournament"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Viridian Gym Badge Battle",
          details: "A high-stakes dual that forced Giovanni to disband Team Rocket and step down as Viridian's gym leader."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Mafia Boss Suit",
        description: "Classic brown double-breasted suit. Demands absolute authority and respect.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
      }
    ],
    voiceActors: {
      english: "Ted Lewis (Seasons 1-8) / Craig Blair (Seasons 9+)",
      japanese: "Kenta Miyake",
      other: [
        { lang: "Spanish", name: "Rupert Degas" }
      ]
    },
    music: {
      characterTheme: "Giovanni's Plan - Shadows of Viridian",
      battleTheme: "Battle! VS Team Rocket Boss Giovanni (Ultra Sun/Moon Remix)"
    },
    quotes: [
      "Welcome to my hideout. This is the office of Team Rocket.",
      "A kid like you could never understand what I have built here!",
      "I shall dedicate my life to the study of training..."
    ],
    trivia: [
      "Giovanni is the only character who holds the title of both a Gym Leader and the leader of an evil syndicate.",
      "His partner Persian is heavily inspired by classic spy movie villains who stroke white cats in their chairs.",
      "In the original games, his identity as Viridian's final Gym Leader was kept a massive mystery until the player unlocked the gym door."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Viridian City", "Celadon City", "Saffron City", "Alola Region"],
      journeyPath: ["Viridian City -> Celadon Game Corner -> Silph Co. -> Viridian Gym -> Tohjo Falls Caves"]
    },
    aiAnalysis: {
      personalityAnalysis: "Giovanni is an ENTJ (Commander). He views the world through the lens of transaction, power structures, and corporate leverage. He doesn't battle for friendship; he battles to completely crush his opponent's assets and morale.",
      teamAnalysis: "A highly robust, physical Ground-type team. Nidoking and Nidoqueen offer heavy poison-ground typing coverage, while Rhydon operates as an absolute physical bulldozer. Its primary vulnerability lies in an overwhelming collective weakness to Water and Ice types.",
      strengthRadar: {
        tacticalSkill: 94,
        willpower: 95,
        empathy: 20,
        rawPower: 93,
        adaptability: 88
      },
      battleStrategySummary: "To crush Giovanni, lead with a fast Water or Grass-type sweeper like Blastoise or Venusaur. His heavy ground-rock compositions (Rhydon, Nidoking) will crumble immediately to Surf or Giga Drain. Watch out for Dugtrio's Arena Trap which prevents switching."
    },
    popularityRank: 4,
    generation: 1,
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/f/fc/Giovanni_LGPE.png"
  },
  {
    id: "oak",
    name: "Professor Oak",
    japaneseName: "オーキド・ユキナリ (Ōkido Yukinari)",
    nicknames: ["The Poké-Pioneer", "Grandpa Oak", "Samuel Oak"],
    age: "65 (Gen 1)",
    gender: "Male",
    height: "175 cm",
    weight: "72 kg",
    birthday: "October 12",
    occupation: "Lead Pokémon Researcher / Professor",
    role: "Professor",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Brilliant Diamond & Shining Pearl",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Oak Pokémon Research Laboratory",
    biography: {
      background: "Samuel Oak was once a highly competitive, top-tier trainer in his youth. Retiring from active combat to pursue academic study, he founded the Pallet Town Research Laboratory, pioneering the modern classification of Pokémon and inventing the digital Pokédex.",
      personality: "Warm, eccentric, incredibly knowledgeable, and grandfatherly. He is highly passionate about encouraging the youth to bond with Pokémon, though he can occasionally be forgetful (such as forgetting his own grandson's name).",
      storyProgression: "Entrusted Red and Blue with their starting partner Pokémon and the prototype Pokédex, guiding them throughout their journeys. He frequently appears on television to host popular Poké-lectures.",
      characterDevelopment: "Began as a regional Kanto scholar. He now collaborates with global professors (Elm, Birch, Rowan) to expand the unified Poké-database across multiple regions.",
      goals: "To achieve a complete, comprehensive catalog of every Pokémon species in existence, proving that humans and Pokémon can live in total harmony.",
      motivations: "The absolute wonder of discovery and the desire to guide the next generation of trainers toward greatness."
    },
    team: [
      {
        id: 143,
        name: "Snorlax",
        level: 66,
        types: ["normal"],
        ability: "Thick Fat",
        nature: "Calm",
        moves: ["Body Slam", "Hyper Beam", "Blizzard", "Rest"],
        heldItem: "Leftovers",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Kanto Safari Expedition",
        status: "Lab Assistant / Guardian"
      },
      {
        id: 149,
        name: "Dragonite",
        level: 69,
        types: ["dragon", "flying"],
        ability: "Inner Focus",
        nature: "Brave",
        moves: ["Dragon Rage", "Thunderbolt", "Fire Blast", "Outrage"],
        heldItem: "Dragon Fang",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Sea foam Islands",
        status: "Youth Companion / Ace"
      },
      {
        id: 18,
        name: "Pidgeot",
        level: 62,
        types: ["normal", "flying"],
        ability: "Keen Eye",
        nature: "Jolly",
        moves: ["Sky Attack", "Wing Attack", "Mirror Move", "Double Team"],
        heldItem: "Sharp Beak",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 1",
        status: "Aerial Scout"
      }
    ],
    timeline: [
      {
        title: "Indigo Championship Victory",
        desc: "Oak achieves legendary trainer status in his youth, conquering Kanto's competitive league circuits.",
        media: "manga",
        chronology: "Year -45"
      },
      {
        title: "Pioneering the Pokédex",
        desc: "Launches the Pallet Research Lab and begins designing the digital database to map Pokémon DNA.",
        media: "game",
        chronology: "Year -15"
      },
      {
        title: "Commissioning Red & Blue",
        desc: "Entrusts his prototype Pokédex to Red and Blue, launching the legendary Indigo generation.",
        media: "all",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "mentor",
        desc: "He sponsors Red's journey and stands as his ultimate guide, viewing him as the ideal embodiment of a compassionate trainer."
      },
      {
        charId: "blue",
        charName: "Blue",
        type: "family",
        desc: "His grandson. Oak's critical standard pushed Blue to seek power, though Oak often reminded him to focus on love and respect."
      }
    ],
    battleRecord: {
      wins: "94.2%",
      losses: "5.8%",
      championships: ["Grandmaster Researcher", "Indigo Hall of Fame Legend"],
      badges: ["Kanto Gym Badges (All 8)"],
      tournaments: ["Historic Masters League"],
      majorBattles: [
        {
          opponent: "Agatha",
          result: "win",
          eventName: "Indigo Championship Finals",
          details: "A historic battle in their youth that established Oak as Kanto's premier trainer, sparking Agatha's lifelong resentment."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "White Lab Coat",
        description: "Standard red shirt, khaki trousers, and white lab coat. The universal look of research.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
      }
    ],
    voiceActors: {
      english: "Stan Hart (Seasons 1-8) / James Carter Cathcart (Seasons 9-25)",
      japanese: "Unsho Ishizuka",
      other: [
        { lang: "Spanish", name: "Roberto Encinas" }
      ]
    },
    music: {
      characterTheme: "Professor Oak's Theme - Pallet Sunrise",
      battleTheme: "Unused Battle Theme! VS Professor Oak (Gen 1 Restoration)"
    },
    quotes: [
      "Hello there! Welcome to the world of Pokémon!",
      "Pokémon are our friends, not tools of war.",
      "This is my grandson. He's been your rival since you were a baby... Eer, what was his name again?"
    ],
    trivia: [
      "An unused battle with Professor Oak exists in the code of Red and Blue, where he has a fully competitive team of Level 60+ Pokémon including a Snorlax, Gyarados, Arcanine, and Dragonite.",
      "He writes traditional Pokémon haikus in the Japanese version of the anime.",
      "His cousin, Samson Oak, operates as a Pokémon researcher in the tropical Alola region."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Indigo Plateau", "Cinnabar Island", "Johto Region"],
      journeyPath: ["Pallet Town Lab -> Celadon City -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Professor Oak is an ENTP (Debater) turned scholar. He is intensely curious, highly analytical, and loves cataloging complex systems. He has retired from aggressive battle, but retains an encyclopedic memory of type matchups and combat mechanics.",
      teamAnalysis: "An incredibly high-stat, traditional squad featuring Snorlax's extreme health pool, Dragonite's typing resistances, and Pidgeot's agility. It is a highly balanced, defensive team built to test a challenger's endurance.",
      strengthRadar: {
        tacticalSkill: 95,
        willpower: 90,
        empathy: 98,
        rawPower: 92,
        adaptability: 93
      },
      battleStrategySummary: "To counter Oak, exploit his lack of modern status/entry hazard setups. Use stealth hazards and lead with an agile Ice-type to immediately target Dragonite's massive 4x Ice weakness. Snorlax can be stalled using Ghost-types with status moves."
    },
    popularityRank: 5,
    generation: 1,
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/f/fa/Professor_Oak_LGPE.png"
  },
  ...KANTO_CHARACTERS,
  ...MORE_KANTO_CHARACTERS
];
