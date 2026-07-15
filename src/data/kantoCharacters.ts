import { PokemonCharacter } from "./pokemonCharacters";

export const KANTO_CHARACTERS: PokemonCharacter[] = [
  {
    id: "blue",
    name: "Blue Oak",
    japaneseName: "グリーン (Green)",
    nicknames: ["The Former Champion", "Viridian Gym Leader", "Smell ya later! guy"],
    age: "11 (Gen 1) / 14 (Gen 2) / 20+ (Gen 7)",
    gender: "Male",
    height: "145 cm (Gen 1) / 172 cm (Gen 7)",
    weight: "41 kg (Gen 1) / 62 kg (Gen 7)",
    birthday: "August 22",
    occupation: "Gym Leader / Former Champion / Battle Tree Master",
    role: "Rival",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Viridian Gym / Alola Battle Tree",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Blue_LGPE.png",
    biography: {
      background: "The grandson of Professor Oak, Blue was raised alongside Red as his fierce childhood rival. Driven by a desire to step out of his grandfather's scholarly shadow, he aimed to become the strongest Pokémon trainer in the world.",
      personality: "Highly confident, arrogant, and competitive in his youth. He often taunted Red with his catchphrase 'Smell ya later!'. After his humbling defeat at the Indigo Plateau, he matured into a highly analytical, respectful, and authoritative leader.",
      storyProgression: "Beat Red to the Indigo Plateau to become the Champion, only to lose the title minutes later. He eventually took over the Viridian Gym after Giovanni abandoned it, transforming it into Kanto's toughest challenge.",
      characterDevelopment: "Evolved from a boastful child who viewed Pokémon only as power assets into a mature mentor who understands that love and trust are vital components of battle.",
      goals: "To master every battle style and maintain Kanto's defensive integrity as its premier Gym Leader.",
      motivations: "The pursuit of absolute tactical excellence and carrying on the proud legacy of the Oak family."
    },
    team: [
      {
        id: 18,
        name: "Pidgeot (Mega Pidgeot)",
        level: 68,
        types: ["normal", "flying"],
        ability: "No Guard (Mega)",
        nature: "Timid",
        moves: ["Hurricane", "Heat Wave", "Roost", "U-turn"],
        heldItem: "Pidgeotite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 1",
        status: "Aerial Ace"
      },
      {
        id: 103,
        name: "Alolan Exeggutor",
        level: 65,
        types: ["grass", "dragon"],
        ability: "Frisk",
        nature: "Quiet",
        moves: ["Draco Meteor", "Giga Drain", "Flamethrower", "Trick Room"],
        heldItem: "Sitrus Berry",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Alola Expedition",
        status: "Active"
      },
      {
        id: 59,
        name: "Arcanine",
        level: 66,
        types: ["fire"],
        ability: "Intimidate",
        nature: "Jolly",
        moves: ["Flare Blitz", "Wild Charge", "Extreme Speed", "Snarl"],
        heldItem: "Choice Band",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 7",
        status: "Active"
      },
      {
        id: 130,
        name: "Gyarados",
        level: 66,
        types: ["water", "flying"],
        ability: "Intimidate",
        nature: "Adamant",
        moves: ["Waterfall", "Dragon Dance", "Bounce", "Earthquake"],
        heldItem: "Life Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Celadon Gym Pool",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Champion Ascension",
        desc: "Defeats the Indigo Elite Four to briefly claim the throne of Indigo Champion.",
        media: "all",
        chronology: "Year 0"
      },
      {
        title: "Assuming Gym Leadership",
        desc: "Takes over the vacant Viridian Gym, removing type-restrictions to test all challenger traits.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "rival",
        desc: "His lifetime rival. Their rivalry drove them to the apex of trainer capability."
      }
    ],
    battleRecord: {
      wins: "92.1%",
      losses: "7.9%",
      championships: ["Former Indigo League Champion", "Viridian Gym Master"],
      badges: ["All 8 Kanto Gym Badges"],
      tournaments: ["PWT Champions League"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Plateau Finals",
          details: "An epic battle of legendary proportions that concluded the first generation saga."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Viridian Leader Dress",
        description: "Elegant dark jacket with a high collar, showcasing his growth.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Blue_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Carter Cathcart / Billy Bob Thompson",
      japanese: "Hiro Shimono / Ryota Osaka"
    },
    music: {
      characterTheme: "Blue's Theme - Pallet Rivalry",
      battleTheme: "Battle! VS Rival Blue"
    },
    quotes: [
      "Smell ya later!",
      "I am the world's strongest trainer!",
      "You think you can beat me? Don't make me laugh!"
    ],
    trivia: [
      "Blue is the only Gym Leader in Kanto who doesn't specialize in a single Pokémon type.",
      "His Japanese name is Green, while Green's Japanese name is Blue due to localization shifts."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Viridian City", "Kalos Region", "Alola Region"],
      journeyPath: ["Pallet -> Viridian -> Pewter -> Cerulean -> Vermilion -> Lavender -> Celadon -> Fuchsia -> Saffron -> Cinnabar -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Blue is an ENTJ (Commander). He is highly ambitious, outspoken, and adapts to tactics at lightning-fast speeds. His style relies on aggressive offensive pressure and shifting momentum to overwhelm opponents.",
      teamAnalysis: "An incredibly balanced team featuring high offensive capability and outstanding coverage. Arcanine and Gyarados form a dual Intimidate core to completely shut down physical attackers, while Alolan Exeggutor adds a sturdy trick-room option.",
      strengthRadar: {
        tacticalSkill: 96,
        willpower: 92,
        empathy: 75,
        rawPower: 94,
        adaptability: 95
      },
      battleStrategySummary: "To defeat Blue, exploit his aggressive switches. Carry a strong Rock or Electric type to check Gyarados and Pidgeot, and use Stealth Rocks early to limit his frequent dual-Intimidate swaps."
    },
    popularityRank: 1,
    generation: 1
  },
  {
    id: "brock",
    name: "Brock",
    japaneseName: "タケシ (Takeshi)",
    nicknames: ["The Rock-Solid Pokémon Trainer", "Doctor Brock"],
    age: "15 (Gen 1) / 18 (Gen 2)",
    gender: "Male",
    height: "172 cm",
    weight: "62 kg",
    birthday: "September 14",
    occupation: "Pewter Gym Leader / Pokémon Doctor in-training",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Pewter City",
    currentLocation: "Pewter Gym / Johto Medical School",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/4/4c/Brock_LGPE.png",
    biography: {
      background: "Brock is the oldest of a massive family in Pewter City. Left to take care of his nine younger siblings after his parents wandered off, he mastered household chores and defensive rock tactics at a very young age.",
      personality: "Responsible, mature, wise, and deeply compassionate. However, he has a hilarious and notorious weakness for beautiful women, losing all composure whenever a Nurse Joy or Officer Jenny is nearby.",
      storyProgression: "Acting as the first Gym Leader of Kanto, he tests starting trainers' basic battle instincts. He later leaves the gym to his family to travel with Ash, eventually studying to become a Pokémon Doctor.",
      characterDevelopment: "Shifted his lifelong focus from harsh rock defense training to medical research and healing, realizing that curing Pokémon is his true life calling.",
      goals: "To become an elite Pokémon Doctor capable of helping any injured Pokémon in the wild.",
      motivations: "The health and safety of Pokémon everywhere, and supporting his beloved family in Pewter."
    },
    team: [
      {
        id: 95,
        name: "Onix",
        level: 14,
        types: ["rock", "ground"],
        ability: "Sturdy",
        nature: "Careful",
        moves: ["Rock Tomb", "Tackle", "Bind", "Stealth Rock"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Pewter Gym",
        status: "Active Ace"
      },
      {
        id: 74,
        name: "Geodude",
        level: 12,
        types: ["rock", "ground"],
        ability: "Rock Head",
        nature: "Adamant",
        moves: ["Tackle", "Defense Curl", "Rock Throw", "Mud-Slap"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Mt. Moon foothills",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Pewter Gym Defense",
        desc: "Defends Pewter Gym as the first gatekeeper of the Indigo League.",
        media: "all",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "ash",
        charName: "Ash Ketchum",
        type: "friend",
        desc: "Ash's long-term travel companion and surrogate older brother, acting as the group's cook and voice of reason."
      }
    ],
    battleRecord: {
      wins: "70.5%",
      losses: "29.5%",
      championships: ["Pewter Gym Leader"],
      badges: ["Grey Badge"],
      tournaments: ["Kanto Leaders Tournament"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Defeated by Red's starter, sparking Red's official badge collection journey."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Pewter Gym Attire",
        description: "Casual green and orange vest with brown trousers, ready for rocky terrains.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/4/4c/Brock_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Eric Stuart (Seasons 1-8) / Bill Rogers (Seasons 9-25)",
      japanese: "Yuji Ueda"
    },
    music: {
      characterTheme: "Brock's theme - Boulder Path",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "My defense is rock-solid!",
      "I'll use my trusty frying pan as a drying pan!",
      "A beautiful lady! My heart is racing!"
    ],
    trivia: [
      "Brock's squinted eyes have become one of the most famous running jokes in the entire history of animation.",
      "His signature Onix eventually evolves into a Steelix under his care during his Johto journey."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pewter City", "Johto Region", "Sinnoh Region"],
      journeyPath: ["Pewter City Gym -> Mt. Moon -> Cerulean City"]
    },
    aiAnalysis: {
      personalityAnalysis: "Brock is an ISFJ (Defender). He is deeply devoted to caretaking, domestic harmony, and structural defense. In battle, he prefers highly defensive attrition tactics, using rock walls to wear out challengers.",
      teamAnalysis: "His early team is extremely weak to Water and Grass types, but boasts remarkable physical defense. Onix uses Stealth Rock and Bind to trap and slowly chip away at hasty attackers.",
      strengthRadar: {
        tacticalSkill: 80,
        willpower: 85,
        empathy: 95,
        rawPower: 78,
        adaptability: 72
      },
      battleStrategySummary: "To beat Brock, any Water or Grass-type move will secure an instant victory. If using normal-type attacks, watch out for Geodude's Defense Curl and Onix's high defense stat."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "misty",
    name: "Misty",
    japaneseName: "カスミ (Kasumi)",
    nicknames: ["The Tomboyish Mermaid", "The Water Flower of Cerulean"],
    age: "12 (Gen 1) / 15 (Gen 2)",
    gender: "Female",
    height: "165 cm",
    weight: "50 kg",
    birthday: "June 3",
    occupation: "Cerulean Gym Leader / Water Pokémon Specialist",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Cerulean City",
    currentLocation: "Cerulean Gym",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/d/d3/Misty_LGPE.png",
    biography: {
      background: "Misty is the youngest of four sisters running the Cerulean Gym. Tired of being overshadowed by her sisters' glamorous water-ballet shows, she set out to prove herself as an independent, hardcore Water-type master.",
      personality: "Fiery, tomboyish, short-tempered, but secretly incredibly caring and emotional. She has a deep, paralyzing phobia of Bug-type Pokémon, completely losing her cool around them.",
      storyProgression: "Befriended Ash after he accidentally destroyed her bicycle in his rush to heal Pikachu. She traveled across Kanto, Johto, and the Orange Islands before returning to Cerulean City to take full command of the Gym.",
      characterDevelopment: "Grew from a loud, insecure younger sibling into Kanto's most respected Water-type strategist, earning high praise from global leaders.",
      goals: "To become the undisputed world champion of Water-type Pokémon training.",
      motivations: "Proving her personal strength to her sisters and championing the versatile potential of Water-type creatures."
    },
    team: [
      {
        id: 121,
        name: "Starmie",
        level: 21,
        types: ["water", "psychic"],
        ability: "Natural Cure",
        nature: "Modest",
        moves: ["Water Pulse", "Swift", "Recover", "Psybeam"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cerulean Gym",
        status: "Active Ace"
      },
      {
        id: 120,
        name: "Staryu",
        level: 18,
        types: ["water"],
        ability: "Illuminate",
        nature: "Timid",
        moves: ["Water Gun", "Swift", "Tackle", "Hardeen"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Cerulean Coastline",
        status: "Active"
      },
      {
        id: 130,
        name: "Gyarados (Mega Gyarados)",
        level: 55,
        types: ["water", "dark"],
        ability: "Mold Breaker (Mega)",
        nature: "Jolly",
        moves: ["Waterfall", "Crunch", "Dragon Dance", "Ice Fang"],
        heldItem: "Gyaradosite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Seafoam Islands Trek",
        status: "Late-Game Ace"
      }
    ],
    timeline: [
      {
        title: "Cerulean Gym Defense",
        desc: "Stands as the second gatekeeper Gym Leader of Kanto.",
        media: "all",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "ash",
        charName: "Ash Ketchum",
        type: "friend",
        desc: "Ash's first traveling companion. Their relationship started with bickering over her bike, but matured into a deep, lifelong bond."
      }
    ],
    battleRecord: {
      wins: "78.2%",
      losses: "21.8%",
      championships: ["Cerulean Gym Leader", "Water Queen"],
      badges: ["Cascade Badge"],
      tournaments: ["Whirl Cup Champion"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Her Starmie tested Red's tactical offense using Swift and Recover."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Tomboy Swimwear",
        description: "Classic red suspenders over a yellow crop top and denim shorts, optimized for swimming.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/d3/Misty_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Rachael Lillis (Seasons 1-8) / Michele Knotz (Seasons 9-25)",
      japanese: "Mayumi Iizuka"
    },
    music: {
      characterTheme: "Misty's Theme - Cerulean Ballet",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "I'm a tomboyish mermaid!",
      "Ash, you still owe me a new bike!",
      "Water Pokémon are the best!"
    ],
    trivia: [
      "Misty was the first female character to join Ash on his journey in the anime.",
      "She has a massive Gyarados in the later series which she conquers her fear of to Mega-Evolve."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Cerulean City", "Orange Islands", "Johto Region"],
      journeyPath: ["Cerulean City Gym -> Route 4 -> Mt. Moon -> Pewter"]
    },
    aiAnalysis: {
      personalityAnalysis: "Misty is an ESFP (Entertainer) with a passionate, reactive edge. She battles with great artistic flow, utilizing water surfaces for high mobility and executing fast, agile sweeps.",
      teamAnalysis: "Starmie is an exceptional early-game threat. With Psychic-typing secondary traits, it hits hard with Psybeam and stays healthy using Recover, presenting a substantial barrier for early challengers.",
      strengthRadar: {
        tacticalSkill: 84,
        willpower: 88,
        empathy: 90,
        rawPower: 80,
        adaptability: 85
      },
      battleStrategySummary: "To conquer Misty, utilize Grass or Electric-type attacks. Avoid letting Starmie stall you out with Recover. Pikachu's Thunderbolt or Bulbasaur's Vine Whip are excellent checks."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "lt-surge",
    name: "Lt. Surge",
    japaneseName: "マチス (Matis)",
    nicknames: ["The Lightning American", "Surge"],
    age: "35 (Gen 1)",
    gender: "Male",
    height: "205 cm",
    weight: "105 kg",
    birthday: "October 30",
    occupation: "Vermilion Gym Leader / Former Army Officer",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Vermilion City",
    currentLocation: "Vermilion Gym",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/5/52/Lt_Surge_LGPE.png",
    biography: {
      background: "A former combat pilot and army officer from America, Lt. Surge fought in a brutal regional conflict where electric-type Pokémon saved his life on the battlefield. He settled in Vermilion to run Kanto's military gym.",
      personality: "Gruff, loud, highly disciplined, and intensely patriotic. He views Pokémon training as military combat, preferring brute power and instant evolution over slow tactical training.",
      storyProgression: "As the third Gym Leader, he locks his gym behind dual electric security gates. He famously mocked Ash's un-evolved Pikachu before losing a high-stakes lightning rematch.",
      characterDevelopment: "Began to appreciate the speed advantages of un-evolved species after Ash's Pikachu outmaneuvered his hyper-offensive Raichu.",
      goals: "To create an ironclad, hyper-offensive military squadron of Electric Pokémon.",
      motivations: "The rigid discipline of combat and proving the superiority of immediate, high-voltage evolution."
    },
    team: [
      {
        id: 26,
        name: "Raichu",
        level: 24,
        types: ["electric"],
        ability: "Static",
        nature: "Naughty",
        moves: ["Thunderbolt", "Quick Attack", "Double Team", "Mega Punch"],
        heldItem: "Light Ball",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Army Base Squadron",
        status: "Active Ace"
      },
      {
        id: 100,
        name: "Voltorb",
        level: 20,
        types: ["electric"],
        ability: "Soundproof",
        nature: "Hasty",
        moves: ["Spark", "Sonic Boom", "Screech", "Light Screen"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Power Plant",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Vermilion Gym Defense",
        desc: "Locks down Vermilion Gym behind complex electric wire traps.",
        media: "all",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "ash",
        charName: "Ash Ketchum",
        type: "rival",
        desc: "Tested Ash's resolve in a classic combat of Evolution vs. Speed, gaining deep respect for Ash."
      }
    ],
    battleRecord: {
      wins: "79.1%",
      losses: "20.9%",
      championships: ["Vermilion Gym Leader"],
      badges: ["Thunder Badge"],
      tournaments: ["Galar-Kanto Combat exhibition"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Defeated in a hard-hitting exchange of Electric firepower."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Army Fatigues",
        description: "Green military shirt, camouflage pants, and silver dog tags with blonde flat-top hair.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/5/52/Lt_Surge_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Ted Lewis",
      japanese: "Fumihiko Tachiki"
    },
    music: {
      characterTheme: "Lt. Surge's Theme - Combat Voltage",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "Hey kid, you're in the army now!",
      "My electric pals saved me in the war!",
      "I'll shock you into submission!"
    ],
    trivia: [
      " Lt. Surge is explicitly referred to as 'The Lightning American', a rare reference to real-world geography in Pokémon.",
      "His gym security puzzle requires finding two switches hidden in trash cans sequentially."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Vermilion City", "Saffron City", "Unova region"],
      journeyPath: ["Vermilion Gym -> Power Plant -> Saffron City Silph Co."]
    },
    aiAnalysis: {
      personalityAnalysis: "Lt. Surge is an ESTJ (Executive). He values absolute structural authority, raw physical power, and instant tactical execution. His battle style is a high-speed blitzkrieg.",
      teamAnalysis: "Raichu relies on devastating physical punches paired with high-voltage Thunderbolt. Voltorb acts as a speed-disruptor to set up Light Screens and paralyze opponents.",
      strengthRadar: {
        tacticalSkill: 85,
        willpower: 90,
        empathy: 60,
        rawPower: 89,
        adaptability: 75
      },
      battleStrategySummary: "To defeat Lt. Surge, bring a Ground-type Pokémon like Geodude or Diglett from the nearby Diglett's Cave. Ground-type immunity completely neutralizes his entire electric offensive output."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "erika",
    name: "Erika",
    japaneseName: "エリカ (Erika)",
    nicknames: ["The Nature-Loving Princess", "Master of Grass"],
    age: "19 (Gen 1)",
    gender: "Female",
    height: "162 cm",
    weight: "48 kg",
    birthday: "November 5",
    occupation: "Celadon Gym Leader / Kimono Designer / Flower Arranger",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Celadon City",
    currentLocation: "Celadon Gym / Flower Gardens",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Erika_LGPE.png",
    biography: {
      background: "Erika is an elegant noble lady who runs the Celadon Gym. She teaches traditional Japanese flower arrangement (Ikebana), perfume creation, and traditional tea ceremony alongside her Grass-type duties.",
      personality: "Graceful, soft-spoken, peaceful, and polite. She despises crude behavior, and briefly banned Ash from her gym for insulting her expensive perfumes.",
      storyProgression: "Serves as the fourth Gym Leader of Kanto, hosting an all-female botanical sanctuary in Celadon City. She uses status-inducing powder moves to test her opponents' patience.",
      characterDevelopment: "Expanded her perfume business internationally, collaborating with Kalos fashion designers to create aroma-infused fabrics.",
      goals: "To preserve traditional Kanto arts and demonstrate the elegance of Grass-type defense.",
      motivations: "The peaceful preservation of nature and teaching trainers to appreciate the quiet power of plant life."
    },
    team: [
      {
        id: 45,
        name: "Vileplume",
        level: 29,
        types: ["grass", "poison"],
        ability: "Chlorophyll",
        nature: "Relaxed",
        moves: ["Mega Drain", "Sleep Powder", "Poison Powder", "Stun Spore"],
        heldItem: "Big Root",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Celadon Gardens",
        status: "Active Ace"
      },
      {
        id: 71,
        name: "Victreebel",
        level: 29,
        types: ["grass", "poison"],
        ability: "Chlorophyll",
        nature: "Naughty",
        moves: ["Razor Leaf", "Poison Powder", "Wrap", "Acid"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Celadon greenhouse",
        status: "Active"
      },
      {
        id: 114,
        name: "Tangela",
        level: 24,
        types: ["grass"],
        ability: "Regenerator",
        nature: "Bold",
        moves: ["Constrict", "Mega Drain", "Vine Whip", "Sleep Powder"],
        heldItem: "Eviolite",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Celadon Gym Gardens",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Celadon Gym Defense",
        desc: "Manages the Celadon botanical sanctuary, testing challengers with status powders.",
        media: "all",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "Red's peaceful mentor in Celadon, awarding him the Rainbow Badge after a highly honorable battle."
      }
    ],
    battleRecord: {
      wins: "74.8%",
      losses: "25.2%",
      championships: ["Celadon Gym Leader"],
      badges: ["Rainbow Badge"],
      tournaments: ["Indigo Botanical Exhibition Champion"],
      majorBattles: [
        {
          opponent: "Ash",
          result: "draw",
          eventName: "Indigo Gym Challenge",
          details: "The battle was interrupted by a Team Rocket fire; Erika awarded Ash the badge for saving her Gloom from the flames."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Traditional Kimono",
        description: "Elegant yellow and blue floral Kimono with a red headband, looking classical.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Erika_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Tara Sands",
      japanese: "Kyoko Hikami"
    },
    music: {
      characterTheme: "Erika's Theme - Celadon Garden Walk",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "Only those who appreciate fragrance may enter my gym.",
      "Grass Pokémon are so wonderfully resilient...",
      "We shall battle with grace and dignity."
    ],
    trivia: [
      "Erika is one of the very few Gym Leaders who does not accept challengers who openly express dislike for perfumes or flower scents.",
      "She has a Gloom that she refuses to evolve until it saved her from a laboratory collapse."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Celadon City", "Saffron City", "Johto Region"],
      journeyPath: ["Celadon Gym -> Celadon Dept Store -> Saffron City"]
    },
    aiAnalysis: {
      personalityAnalysis: "Erika is an INFJ (Advocate). She is highly principled, calm, and deeply connected to nature's quiet patterns. In battle, she favors slow-acting paralysis, sleep, and drain strategies to test an opponent's patience.",
      teamAnalysis: "Vileplume operates as a dangerous status spreader, deploying Sleep Powder and recovering health via Mega Drain. Victreebel provides high offensive physical slicing power with Razor Leaf.",
      strengthRadar: {
        tacticalSkill: 86,
        willpower: 82,
        empathy: 96,
        rawPower: 75,
        adaptability: 80
      },
      battleStrategySummary: "To beat Erika, bring a Fire, Flying, or Ice-type Pokémon. Charizard's Flamethrower or Pidgeot's Wing Attack will quickly scorch her Grass structures. Carry full heals to cure sleep and poison."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "koga",
    name: "Koga",
    japaneseName: "キョウ (Kyo)",
    nicknames: ["The Poisonous Ninja Master", "Shadow Master"],
    age: "38 (Gen 1) / 41 (Gen 2)",
    gender: "Male",
    height: "182 cm",
    weight: "78 kg",
    birthday: "December 18",
    occupation: "Fuchsia Gym Leader (Former) / Elite Four Member",
    role: "Elite Four",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Fuchsia City",
    currentLocation: "Indigo Plateau",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/e/ee/Koga_LGPE.png",
    biography: {
      background: "Koga is a modern ninja master descending from an ancient, stealthy Kanto clan. He constructed the Fuchsia Gym as a dangerous ninja trick house featuring completely invisible walls and poison trap floorboards.",
      personality: "Disciplined, quiet, severe, and deeply serious about the art of shadow warfare. He highly respects stealth and trickery, using toxic poison to slowly suffocate his opponents' tactical options.",
      storyProgression: "Served as the fifth Gym Leader in Fuchsia City. Due to his incredible tactical poison mastery and absolute discipline, he was promoted to Kanto's Elite Four, leaving the Fuchsia Gym to his daughter Janine.",
      characterDevelopment: "Evolved from a regional shadow master into a global Elite protector, incorporating modern status hazard tricks into his ancient shadow techniques.",
      goals: "To push the ancient ninja art of poison-attrition to its absolute pinnacle.",
      motivations: "Clan honor, self-discipline, and proving that speed and poison can outlast any physical force."
    },
    team: [
      {
        id: 110,
        name: "Weezing",
        level: 37,
        types: ["poison"],
        ability: "Levitate",
        nature: "Bold",
        moves: ["Toxic", "Sludge Bomb", "Self-Destruct", "Smokescreen"],
        heldItem: "Black Sludge",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Fuchsia Woods",
        status: "Active Ace"
      },
      {
        id: 169,
        name: "Crobat",
        level: 44,
        types: ["poison", "flying"],
        ability: "Inner Focus",
        nature: "Jolly",
        moves: ["Cross Poison", "Acrobatics", "U-turn", "Confuse Ray"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mt. Moon Cave depth",
        status: "Active Speed Sweep"
      },
      {
        id: 49,
        name: "Venomoth",
        level: 37,
        types: ["bug", "poison"],
        ability: "Shield Dust",
        nature: "Timid",
        moves: ["Sleep Powder", "Psychic", "Bug Buzz", "Toxic Spikes"],
        heldItem: "Focus Sash",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Safari Zone Patrol",
        status: "Active Trap Setter"
      }
    ],
    timeline: [
      {
        title: "Fuchsia Gym Setup",
        desc: "Constructs Kanto's ninja trick house gym with invisible glass partitions.",
        media: "all",
        chronology: "Year 0"
      },
      {
        title: "Elite Four Promotion",
        desc: "Promoted to the Indigo Elite Four; appoints his daughter Janine as Gym Leader.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "janine",
        charName: "Janine",
        type: "family",
        desc: "His beloved daughter and ninja student. She took over the Fuchsia Gym, inheriting his stealth techniques."
      }
    ],
    battleRecord: {
      wins: "84.3%",
      losses: "15.7%",
      championships: ["Former Fuchsia Gym Leader", "Indigo Elite Four Member"],
      badges: ["Soul Badge"],
      tournaments: ["Ninja Clan Combat Trials Champion"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Red solved his invisible wall maze and overcame his debilitating toxic poison strategy."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Ninja Shinobi Suit",
        description: "Dark purple ninja armor with a long flowing red scarf, designed for shadow work.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/e/ee/Koga_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Stan Hart",
      japanese: "Hirotaka Suzuoki / Tsuguo Mogami"
    },
    music: {
      characterTheme: "Koga's Theme - Fuchsia Shadow",
      battleTheme: "Battle! VS Elite Four"
    },
    quotes: [
      "Fwahahaha! A mere child cannot pierce my shadow defenses!",
      "Poison is the most elegant weapon.",
      "The shadow ninja clan will prevail!"
    ],
    trivia: [
      "Koga's Gym in Fuchsia City features completely invisible glass walls that require the player to hug corners to find the correct path.",
      "In the Pokémon Adventures manga, Koga is briefly allied with Team Rocket before defecting to help Red."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Fuchsia City", "Indigo Plateau", "Johto Region"],
      journeyPath: ["Fuchsia City Gym -> Safari Zone -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Koga is an ISTJ (Inspector) with a deep martial arts code. He is silent, hyper-vigilant, and methodical. In combat, he relies heavily on status afflictions (Toxic), evasion (Minimize), and confusing the opponent.",
      teamAnalysis: "Weezing with Levitate completely eliminates its Ground-type weakness, forcing attackers to rely on Psychic moves. Crobat provides terrifying speed and confuse tactics to disrupt sweeps.",
      strengthRadar: {
        tacticalSkill: 92,
        willpower: 90,
        empathy: 55,
        rawPower: 80,
        adaptability: 88
      },
      battleStrategySummary: "To defeat Koga, utilize Psychic or Steel-type Pokémon. Steel-type Pokémon are completely immune to poison, neutralizing his signature Toxic damage over time."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "sabrina",
    name: "Sabrina",
    japaneseName: "ナツメ (Natsume)",
    nicknames: ["The Master of Psychic Pokémon", "The Esper Queen"],
    age: "21 (Gen 1)",
    gender: "Female",
    height: "170 cm",
    weight: "53 kg",
    birthday: "January 12",
    occupation: "Saffron Gym Leader / Famous Movie Actress",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Saffron Gym / Pokestar Studios (Unova)",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/e/eb/Sabrina_LGPE.png",
    biography: {
      background: "Born with immense, raw telekinetic and telepathic psychic abilities, Sabrina could bend spoons and telekinetically lift objects since she was a toddler. She founded Saffron's Gym after shutting down the neighboring Fighting Dojo.",
      personality: "Cold, emotionless, detached, and highly intimidating in her youth. She famously turned defeated trainers into tiny dolls inside her dollhouse. She eventually regained her human emotions after a humorous encounter with Ash.",
      storyProgression: "Serves as Saffron's Gym Leader. After reclaiming her emotional sanity, she became a highly popular movie actress at Pokestar Studios in Unova, specializing in playing cold-hearted villains.",
      characterDevelopment: "Evolved from a highly unstable, isolated psychic child into a successful, expressive adult who balances her psychic powers with creative acting.",
      goals: "To master telepathic connection with her Psychic-type Pokémon.",
      motivations: "Developing emotional control and exploring the limits of human telekinesis."
    },
    team: [
      {
        id: 65,
        name: "Alakazam (Mega Alakazam)",
        level: 43,
        types: ["psychic"],
        ability: "Trace (Mega)",
        nature: "Timid",
        moves: ["Psychic", "Recover", "Calm Mind", "Reflect"],
        heldItem: "Alakazamite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Saffron Mind Academy",
        status: "Active Ace"
      },
      {
        id: 122,
        name: "Mr. Mime",
        level: 39,
        types: ["psychic", "fairy"],
        ability: "Filter",
        nature: "Bold",
        moves: ["Light Screen", "Reflect", "Psychic", "Dazzling Gleam"],
        heldItem: "Light Clay",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 2 Swap",
        status: "Active Screen Setter"
      },
      {
        id: 49,
        name: "Venomoth",
        level: 38,
        types: ["bug", "poison"],
        ability: "Shield Dust",
        nature: "Timid",
        moves: ["Sleep Powder", "Psychic", "Gust", "Double Team"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Saffron outskirts",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Dojo Domination",
        desc: "Defeats the Saffron Fighting Dojo, stripping them of Gym status to establish the Psychic Gym.",
        media: "all",
        chronology: "Year -2"
      }
    ],
    relationships: [
      {
        charId: "ash",
        charName: "Ash Ketchum",
        type: "rival",
        desc: "Ash's goofy Haunter made her laugh for the first time in years, breaking her cold shell and restoring her parents from their doll states."
      }
    ],
    battleRecord: {
      wins: "88.9%",
      losses: "11.1%",
      championships: ["Saffron Gym Leader", "Esper Queen"],
      badges: ["Marsh Badge"],
      tournaments: ["Pokestar Studios Box Office Award"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Red's dark-natured attacks pierced her absolute telepathic field."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Saffron Red Jumpsuit",
        description: "Striking red riding jacket and high black boots, conveying absolute psychic dominance.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/e/eb/Sabrina_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Lisa Ortiz",
      japanese: "Araki Kae / Hayashi原 Megumi"
    },
    music: {
      characterTheme: "Sabrina's Theme - Esper Telepathy",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "I dislike battling, but if you insist, I will show you my power.",
      "I had a vision of your defeat...",
      "My psychic powers cannot be matched!"
    ],
    trivia: [
      "Sabrina's Alakazam has an IQ of over 5,000, allowing it to telepathically calculate battle equations instantaneously.",
      "In the anime, Sabrina carried a creepy small green doll that represented her suppressed childhood emotions."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron City", "Unova Pokestar Studios", "Johto Region"],
      journeyPath: ["Saffron City Gym -> Silph Co. HQ -> Pokestar Studios"]
    },
    aiAnalysis: {
      personalityAnalysis: "Sabrina is an INTJ (Architect). She is highly analytical, extremely detached, and operates with cold, mathematical precision. She uses Calm Mind to boost Alakazam's stats to sweeping levels while shielded behind Mr. Mime's screens.",
      teamAnalysis: "Mr. Mime sets up double screens (Reflect, Light Screen) with Light Clay, reducing incoming damage by 50% for 8 turns, allowing Mega Alakazam to easily sweep with hyper-fast Psychic blasts.",
      strengthRadar: {
        tacticalSkill: 95,
        willpower: 96,
        empathy: 40,
        rawPower: 94,
        adaptability: 85
      },
      battleStrategySummary: "To beat Sabrina, bring a fast Dark or Ghost-type Pokémon (like Gengar or Tyranitar). Dark-types are completely immune to her signature Psychic-type moves, leaving her highly vulnerable."
    },
    popularityRank: 1,
    generation: 1
  },
  {
    id: "blaine",
    name: "Blaine",
    japaneseName: "カツラ (Katsura)",
    nicknames: ["The Hot-Headed Quiz Master", "Cinnabar Flame"],
    age: "62 (Gen 1)",
    gender: "Male",
    height: "168 cm",
    weight: "60 kg",
    birthday: "August 3",
    occupation: "Cinnabar Gym Leader / Scientist",
    role: "Gym Leader",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Cinnabar Island",
    currentLocation: "Cinnabar Gym / Seafoam Islands Caves",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/0/0f/Blaine_LGPE.png",
    biography: {
      background: "Blaine is a brilliant, eccentric scientist and a veteran Fire-type specialist. He was deeply involved in the cloning experiments that led to Mewtwo's creation on Cinnabar Island, an event that left him with deep regrets and a desire to connect with the fire elements.",
      personality: "Highly energetic, playful, loves setting up complex quizzes, but becomes intensely serious when the battle heats up. He wears disguises to hide his identity from tourists.",
      storyProgression: "Serves as the seventh Gym Leader. After Cinnabar's volcano erupted and completely destroyed his gym, Blaine showed incredible grit, rebuilding his entire Gym inside a deep cavern in the Seafoam Islands.",
      characterDevelopment: "Shifted from corporate science to focusing purely on teaching trainers how to control the wild, volatile power of fire.",
      goals: "To prove that the fiery spirit can overcome any natural disaster.",
      motivations: "The love of mind-bending riddles and the warm, cleansing spirit of fire."
    },
    team: [
      {
        id: 59,
        name: "Arcanine",
        level: 47,
        types: ["fire"],
        ability: "Intimidate",
        nature: "Adamant",
        moves: ["Fire Blast", "Extreme Speed", "Flare Blitz", "Flame Wheel"],
        heldItem: "White Herb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cinnabar Volcano Core",
        status: "Active Ace"
      },
      {
        id: 78,
        name: "Rapidash",
        level: 42,
        types: ["fire"],
        ability: "Flash Fire",
        nature: "Jolly",
        moves: ["Fire Spin", "Stomp", "Agility", "Take Down"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cinnabar plains",
        status: "Active"
      },
      {
        id: 126,
        name: "Magmar",
        level: 42,
        types: ["fire"],
        ability: "Flame Body",
        nature: "Modest",
        moves: ["Fire Blast", "Confuse Ray", "Smokescreen", "Sunny Day"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Cinnabar Burned Mansion",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Mewtwo Project",
        desc: "Collaborates with Team Rocket scientists to clone Mew in the Cinnabar Mansion.",
        media: "all",
        chronology: "Year -10"
      },
      {
        title: "Seafoam Relocation",
        desc: "Rebuilds Cinnabar Gym inside a Seafoam cavern after a catastrophic volcanic eruption.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "friend",
        desc: "His old science colleague. They share a deep bond of mutual respect and ancient research history."
      }
    ],
    battleRecord: {
      wins: "81.2%",
      losses: "18.8%",
      championships: ["Cinnabar Gym Leader"],
      badges: ["Volcano Badge"],
      tournaments: ["PWT Fire Division Finalist"],
      majorBattles: [
        {
          opponent: "Ash",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "His Magmar engaged in a historic, volcanic brawl with Ash's Charizard over Cinnabar's lava pits."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Quiz Disguise",
        description: "Classic bald head, white mustache, sunglasses, and a smart red suit.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/0/0f/Blaine_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Jimmy Zoppi",
      japanese: "Toshiya Ueda"
    },
    music: {
      characterTheme: "Blaine's Theme - Quiz Riddle",
      battleTheme: "Battle! VS Kanto Gym Leader"
    },
    quotes: [
      "You better have Burn Heal!",
      "I'm Blaine! The hot-headed quiz master!",
      "My fire will turn your tactics to ash!"
    ],
    trivia: [
      "In the Pokémon Adventures manga, Blaine fused some of his own human DNA with Mewtwo during its cloning to stabilize it, creating a symbiotic bond.",
      "His gym is famous for requiring players to answer Pokemon trivia questions to bypass trainers."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Cinnabar Island", "Seafoam Islands", "Johto Region"],
      journeyPath: ["Cinnabar Gym -> Pokémon Mansion -> Seafoam Caverns"]
    },
    aiAnalysis: {
      personalityAnalysis: "Blaine is an ENTP (Debater). He loves cognitive challenges, riddles, and explosive outcomes. His battle strategy is hyper-offensive, setting up Sunny Day to boost Fire Blast power by 50% while activating Magmar's flame body.",
      teamAnalysis: "Arcanine with Intimidate lowers physical threat levels immediately. Rapidash uses Agility to outspeed everything, and Magmar sweeps with solar-boosted Fire Blasts.",
      strengthRadar: {
        tacticalSkill: 90,
        willpower: 94,
        empathy: 78,
        rawPower: 92,
        adaptability: 85
      },
      battleStrategySummary: "To beat Blaine, deploy Water or Rock-type Pokémon. Water-type moves like Surf deal double damage, but be careful of Sunny Day which reduces water damage output by 50%."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "lorelei",
    name: "Lorelei",
    japaneseName: "カンナ (Kanna)",
    nicknames: ["The Ice Queen", "Lorelai"],
    age: "24 (Gen 1)",
    gender: "Female",
    height: "173 cm",
    weight: "55 kg",
    birthday: "March 15",
    occupation: "Indigo Elite Four member / Doll Collector",
    role: "Elite Four",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Four Island (Sevile)",
    currentLocation: "Indigo Plateau",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/1/11/Lorelei_LGPE.png",
    biography: {
      background: "Hailing from Four Island in the Sevii Islands, Lorelei grew up playing in the freezing depths of Icefall Cave, where she befriended her first Lapras. She rose to become Kanto's premier Ice-type Elite master.",
      personality: "Highly sophisticated, calm, collected, but possesses a completely unexpected passion for collecting cute Pokémon plush dolls. She turns extremely fierce and cold when challengers underestimate her Ice elements.",
      storyProgression: "Serves as the very first obstacle of the Indigo Elite Four, freezing underprepared challengers. She briefly leaves the Indigo Plateau to defend her hometown on Four Island from Team Rocket remnants.",
      characterDevelopment: "Learned to balance her Elite obligations with protecting her local Sevii Islands ecosystems from corporate exploitation.",
      goals: "To demonstrate that Ice's beautiful, delicate form can freeze any warm-blooded strategist.",
      motivations: "The preservation of cold, pristine environments and protecting her childhood Sevii Islands home."
    },
    team: [
      {
        id: 131,
        name: "Lapras",
        level: 54,
        types: ["water", "ice"],
        ability: "Shell Armor",
        nature: "Calm",
        moves: ["Surf", "Blizzard", "Body Slam", "Sing"],
        heldItem: "Never-Melt Ice",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Icefall Cave",
        status: "Active Ace"
      },
      {
        id: 91,
        name: "Cloyster",
        level: 53,
        types: ["water", "ice"],
        ability: "Skill Link",
        nature: "Relaxed",
        moves: ["Icicle Spear", "Clamp", "Spikes", "Ice Beam"],
        heldItem: "Rocky Helmet",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cerulean Gym waters",
        status: "Active physical tank"
      }
    ],
    timeline: [
      {
        title: "Elite Four Induction",
        desc: "Joins the Indigo Elite Four as the premier freezing gatekeeper.",
        media: "all",
        chronology: "Year -2"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "Appreciates Red's quiet focus, aiding him during his Sevii Islands expedition against Team Rocket."
      }
    ],
    battleRecord: {
      wins: "89.5%",
      losses: "10.5%",
      championships: ["Indigo Elite Four Gatekeeper"],
      badges: ["Elite Ribbon"],
      tournaments: ["Sevii Island Frost Cup Champion"],
      majorBattles: [
        {
          opponent: "Blue",
          result: "loss",
          eventName: "Indigo Championship Challenger Round",
          details: "Defeated by Blue's high-speed Arcanine and Alakazam sweeps."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Elite Office wear",
        description: "Elegant red pencil skirt, black blouse, high heels, and red spectacles.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/1/11/Lorelei_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Erica Schroeder",
      japanese: "Maria Kawamura / Miho Okasaki"
    },
    music: {
      characterTheme: "Lorelei's Theme - Frostbite Glissade",
      battleTheme: "Battle! VS Elite Four"
    },
    quotes: [
      "You will freeze before my Ice Pokémon!",
      "I am Lorelei of the Elite Four!",
      "Ice-types may look delicate, but they are incredibly tough!"
    ],
    trivia: [
      "Lorelei has a secret room in her house on Four Island that is filled to the ceiling with cute Pokémon dolls, which she gets highly embarrassed if the player discovers.",
      "She was one of the first Elite Four members to appear in the anime, easily defeating Ash's Charizard."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Four Island", "Indigo Plateau", "Cinnabar Island"],
      journeyPath: ["Icefall Cave -> Four Island -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Lorelei is an INTJ (Architect). She is elegant, highly organized, and structured. In battle, she uses Cloyster to set up spikes and block physical attacks, while Lapras puts opponents to sleep with Sing and sweeps with Blizzard.",
      teamAnalysis: "Cloyster is an outstanding defensive lead with Skill Link, guaranteeing that Icicle Spear hits 5 times. Lapras is highly bulky, tanking hits and recovering with Shell Armor immunity.",
      strengthRadar: {
        tacticalSkill: 92,
        willpower: 91,
        empathy: 80,
        rawPower: 86,
        adaptability: 88
      },
      battleStrategySummary: "To beat Lorelei, bring an Electric or Fighting-type Pokémon. Her Ice-types are secondary Water-types, making Thunderbolt or Mach Punch highly effective. Avoid using Dragon-types."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "bruno",
    name: "Bruno",
    japaneseName: "シバ (Shiba)",
    nicknames: ["The Iron-Hard Champion", "Muscle Master"],
    age: "30 (Gen 1)",
    gender: "Male",
    height: "195 cm",
    weight: "110 kg",
    birthday: "April 5",
    occupation: "Indigo Elite Four member / Martial Artist",
    role: "Elite Four",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Saffron foothills",
    currentLocation: "Indigo Plateau / Mt. Ember Mountains",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/9/96/Bruno_LGPE.png",
    biography: {
      background: "Bruno spent his youth training in the harsh, rocky mountains of Kanto and Johto, lifting giant Geodudes to build physical resilience. He developed a deep philosophy of combining human physical training with Pokémon muscle conditioning.",
      personality: "Quiet, noble, honorable, and obsessed with physical strength. He is highly respectful of opponents who fight with raw honesty and physical grit, despising underhanded trickery.",
      storyProgression: "Stands as the second obstacle of the Indigo Elite Four. He often trains alongside giant wild Onix in the Sevii Islands during the off-season to push his limits.",
      characterDevelopment: "Matured into an elite master who realizes that physical power must be balanced with calm mental fortitude.",
      goals: "To reach the absolute apex of human-Pokémon physical synchronization.",
      motivations: "The pure joy of physical training, hard-hitting martial arts, and mutual conditioning."
    },
    team: [
      {
        id: 68,
        name: "Machamp",
        level: 56,
        types: ["fighting"],
        ability: "No Guard",
        nature: "Adamant",
        moves: ["Dynamic Punch", "Stone Edge", "Earthquake", "Bullet Punch"],
        heldItem: "Flame Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mt. Mortar Waterfall",
        status: "Active Ace"
      },
      {
        id: 95,
        name: "Onix",
        level: 54,
        types: ["rock", "ground"],
        ability: "Sturdy",
        nature: "Brave",
        moves: ["Earthquake", "Rock Tomb", "Iron Tail", "Stealth Rock"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Tojho Falls Mountains",
        status: "Active Shield"
      }
    ],
    timeline: [
      {
        title: "Elite Four Ascension",
        desc: "Joins the Indigo Elite Four through sheer, unadulterated physical victories.",
        media: "all",
        chronology: "Year -2"
      }
    ],
    relationships: [
      {
        charId: "brawly",
        charName: "Brawly",
        type: "friend",
        desc: "His old training partner. They frequently swap muscle conditioning secrets and mountain training paths."
      }
    ],
    battleRecord: {
      wins: "85.1%",
      losses: "14.9%",
      championships: ["Indigo Elite Four physical Guardian"],
      badges: ["Fist Ribbon"],
      tournaments: ["PWT Fighting division finalist"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Championship Challenger Round",
          details: "Overcome by Red's hyper-fast Pikachu and Psychic support."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Martial Arts Gi",
        description: "Shirtless muscular build, white martial arts trousers with a black belt and red bracers.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/9/96/Bruno_LGPE.png"
      }
    ],
    voiceActors: {
      english: "James Carter Cathcart",
      japanese: "Koji Ishii / Keiji Fujiwara"
    },
    music: {
      characterTheme: "Bruno's Theme - Mountain Muscle",
      battleTheme: "Battle! VS Elite Four"
    },
    quotes: [
      "We have trained our bodies to the absolute limit!",
      "Show me your raw physical grit!",
      "A battle is a clash of spirits!"
    ],
    trivia: [
      "Bruno is famous for carrying two giant Onix on his elite team despite specializing in the Fighting type, a quirk heavily criticized by fans.",
      "He eats Rage Candy Bars from Johto's Mahogany Town to keep his body energized during long battles."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron foothills", "Johto Region", "Mt. Ember"],
      journeyPath: ["Saffron foothills -> Mt. Mortar -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Bruno is an ISTP (Virtuoso). He is incredibly direct, pragmatic, and physically oriented. In battle, he avoids fancy tricks, relying on Machamp's No Guard ability to land 100% accurate, high-damage Dynamic Punches.",
      teamAnalysis: "Machamp uses No Guard to guarantee landing devastating Dynamic Punches (which cause 100% confusion on hit) and Stone Edges, completely bypassing standard evasion buffs.",
      strengthRadar: {
        tacticalSkill: 84,
        willpower: 96,
        empathy: 70,
        rawPower: 98,
        adaptability: 80
      },
      battleStrategySummary: "To beat Bruno, deploy a fast Psychic or Flying-type Pokémon. Alakazam or Pidgeot can bypass his high physical defense and deal massive special damage. Watch out for Machamp's priority Bullet Punch."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "agatha",
    name: "Agatha",
    japaneseName: "キクコ (Kikuko)",
    nicknames: ["The Ghostly Grandmother", "Elder Agatha"],
    age: "74 (Gen 1)",
    gender: "Female",
    height: "155 cm",
    weight: "48 kg",
    birthday: "June 22",
    occupation: "Indigo Elite Four member / Former Grandmaster",
    role: "Elite Four",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Lavender Town",
    currentLocation: "Indigo Plateau",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/b/b7/Agatha_LGPE.png",
    biography: {
      background: "Agatha is Kanto's oldest and most formidable Ghost-type master. In her youth, she was Professor Oak's primary rival and partner, conquering the early Indigo circuits together. She grew deeply bitter when Oak retired from active battling to pursue academic study.",
      personality: "Sharp-tongued, severe, cynical, but highly observant. She despises Oak's current peaceful research philosophy, believing that a trainer's only true business is to battle and conquer.",
      storyProgression: "Stands as the third obstacle of the Indigo Elite Four, terrifying young challengers with hypnosis and toxic nightmare setups. She actively searches for worthy trainers who still value raw combat.",
      characterDevelopment: "Retains her ancient, unyielding battle standard, acting as a harsh, direct wake-up call to soft-hearted modern trainers.",
      goals: "To prove that battling is the ultimate purpose of human-Pokémon relationships.",
      motivations: "Her lifelong rivalry with Oak and maintaining Kanto's traditional battle standards."
    },
    team: [
      {
        id: 94,
        name: "Gengar",
        level: 58,
        types: ["ghost", "poison"],
        ability: "Cursed Body",
        nature: "Timid",
        moves: ["Shadow Ball", "Sludge Bomb", "Hypnosis", "Dream Eater"],
        heldItem: "Focus Sash",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Lavender Tower Core",
        status: "Active Ace"
      },
      {
        id: 42,
        name: "Golbat",
        level: 56,
        types: ["poison", "flying"],
        ability: "Inner Focus",
        nature: "Hasty",
        moves: ["Air Slash", "Toxic", "Confuse Ray", "Mean Look"],
        heldItem: "Eviolite",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Rock Tunnel caves",
        status: "Active Disruptor"
      },
      {
        id: 93,
        name: "Haunter",
        level: 55,
        types: ["ghost", "poison"],
        ability: "Levitate",
        nature: "Timid",
        moves: ["Shadow Claw", "Confuse Ray", "Hypnosis", "Dream Eater"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Lavender Tower Core",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Oak Rivalry",
        desc: "Battles Oak in their youth, developing a historic rivalry at the early Indigo Championships.",
        media: "all",
        chronology: "Year -45"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "rival",
        desc: "Her old friend and rival. She considers his retirement a waste of supreme battle talent."
      }
    ],
    battleRecord: {
      wins: "90.2%",
      losses: "9.8%",
      championships: ["Indigo Elite Four veteran Master"],
      badges: ["Spirit Ribbon"],
      tournaments: ["Historic Masters League runner-up"],
      majorBattles: [
        {
          opponent: "Professor Oak",
          result: "loss",
          eventName: "Indigo Plateau Finals (Youth)",
          details: "A historic championship battle that established Oak's legendary status."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Elderly Gown",
        description: "Classic purple dress, spectacles, and a golden walking cane with a sinister grin.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b7/Agatha_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Bella Hudson",
      japanese: "Kokoa Ryutani / Hisako Kyoda"
    },
    music: {
      characterTheme: "Agatha's Theme - Lavender Whispers",
      battleTheme: "Battle! VS Elite Four"
    },
    quotes: [
      "Oak was once a handsome trainer, but now he is just a foolish old man!",
      "I will show you how real masters battle!",
      "Your Pokémon look completely terrified!"
    ],
    trivia: [
      "Agatha is heavily rumored to be related to Sinnoh's Elite Four member Bertha due to their identical elderly models, though this remains unconfirmed.",
      "Despite specializing in Ghost-types, she carries a lot of Poison-type species (Arbok, Golbat) due to the limited Ghost pool in Gen 1."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Lavender Town", "Indigo Plateau", "Sinnoh region"],
      journeyPath: ["Lavender Town -> Rock Tunnel -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Agatha is an ESTJ (Executive) with a cynical, biting edge. She values cold experience, discipline, and fast psychological disruption. In battle, she uses Hypnosis and Dream Eater combos to terrorize challengers.",
      teamAnalysis: "Gengar is incredibly fast and dangerous. Hypnosis combined with Dream Eater allows it to deal massive psychic damage while recovering 50% of the damage dealt.",
      strengthRadar: {
        tacticalSkill: 94,
        willpower: 95,
        empathy: 30,
        rawPower: 88,
        adaptability: 90
      },
      battleStrategySummary: "To beat Agatha, carry a fast Dark, Ghost, or Ground-type Pokémon. Tyranitar or a faster Gengar will easily dispatch her team. Watch out for her Golbat's Confuse Ray."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "lance",
    name: "Lance",
    japaneseName: "ワタル (Wataru)",
    nicknames: ["The Dragon Champion", "Dragon Master Lance"],
    age: "25 (Gen 1) / 28 (Gen 2)",
    gender: "Male",
    height: "182 cm",
    weight: "75 kg",
    birthday: "July 2",
    occupation: "Indigo Elite Four Leader / Johto Champion / G-Men Agent",
    role: "Champion",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Blackthorn City (Johto)",
    currentLocation: "Indigo Plateau",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/d/d4/Lance_LGPE.png",
    biography: {
      background: "Born in the ancient dragon clan of Blackthorn City, Lance was trained from childhood to bond with rare, ancient Dragon-type species. He rose to become Kanto's Elite Four Leader, later assuming the mantle of Champion of both Kanto and Johto.",
      personality: "Heroic, noble, serious, and deeply devoted to justice. He acts as a high-ranking officer of the Pokémon G-Men, a global police task force, actively investigating crime syndicates like Team Rocket.",
      storyProgression: "Serves as the final obstacle of the Indigo Elite Four. He famously helps the player raid Team Rocket's Mahogany Town hideout in Johto, ordering his Dragonite to hyper-beam a criminal in a famous scene.",
      characterDevelopment: "Evolved from a regional Dragon Leader into a global champion of justice, actively putting his life on the line to defend Pokémon habitats.",
      goals: "To preserve dragon legacy and maintain the peace and justice of the Indigo Plateau.",
      motivations: "The ancient dragon code, absolute justice, and protecting the innocent."
    },
    team: [
      {
        id: 149,
        name: "Dragonite",
        level: 60,
        types: ["dragon", "flying"],
        ability: "Multiscale",
        nature: "Adamant",
        moves: ["Outrage", "Dragon Dance", "Fire Punch", "Extreme Speed"],
        heldItem: "Lum Berry",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Dragon's Den core",
        status: "Active Ace"
      },
      {
        id: 130,
        name: "Gyarados",
        level: 58,
        types: ["water", "flying"],
        ability: "Intimidate",
        nature: "Jolly",
        moves: ["Dragon Dance", "Waterfall", "Ice Fang", "Thunder Wave"],
        heldItem: "Life Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Lake of Rage Rescue",
        status: "Active Partner"
      },
      {
        id: 6,
        name: "Charizard",
        level: 56,
        types: ["fire", "flying"],
        ability: "Blaze",
        nature: "Modest",
        moves: ["Flamethrower", "Air Slash", "Dragon Pulse", "Roost"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Charicific Valley training",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Elite Four Leadership",
        desc: "Takes command of the Indigo Elite Four as its premier Dragon Master.",
        media: "all",
        chronology: "Year 0"
      },
      {
        title: "Champion Ascension",
        desc: "Takes the throne of Indigo Champion, unifying Kanto and Johto league administrations.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "clair",
        charName: "Clair",
        type: "family",
        desc: "His cousin and Blackthorn Gym Leader. They share a deep dragon heritage, though Lance is clearly her superior."
      }
    ],
    battleRecord: {
      wins: "94.8%",
      losses: "5.2%",
      championships: ["Indigo League unified Champion", "Former Elite Four Leader"],
      badges: ["Dragon Ribbon"],
      tournaments: ["Masters Eight World Tournament Finalist"],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Indigo Gym Challenge",
          details: "Red's Ice-type moves pierced his ultimate dragon barrier."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Dragon Cloak",
        description: "Elegant black coat with red lining and a grand flowing red cape, fitting a champion.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/d4/Lance_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Wayne Grayson",
      japanese: "Shin-ichiro Miki"
    },
    music: {
      characterTheme: "Lance's Theme - Dragon Crest",
      battleTheme: "Battle! VS Champion Lance"
    },
    quotes: [
      "Dragon Pokémon are mythical and superior!",
      "I am Lance, the dragon champion!",
      "Justice will prevail, no matter what Team Rocket plots!"
    ],
    trivia: [
      "Lance is famous for carrying three Dragonites on his team in Johto, which led to joking allegations of hacking because they were below their standard evolution level of 55.",
      "His signature red cape is heavily rumored to be custom-tailored in Blackthorn City's dragon workshops."
    ],
    regionInfo: {
      homeRegion: "Johto",
      placesVisited: ["Blackthorn City", "Indigo Plateau", "Mahogany Town"],
      journeyPath: ["Blackthorn City -> Dragon's Den -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Lance is an ENFJ (Protagonist). He is heroic, commanding, and deeply devoted to the public good. In battle, he sets up Dragon Dance to maximize his speed and raw physical power before sweeping with Outrage.",
      teamAnalysis: "Dragonite with Multiscale halves incoming damage when at 100% health, allowing it to easily set up a Dragon Dance and sweep with Lum Berry curing any potential confusion.",
      strengthRadar: {
        tacticalSkill: 95,
        willpower: 98,
        empathy: 90,
        rawPower: 96,
        adaptability: 90
      },
      battleStrategySummary: "To defeat Lance, use a fast Ice-type move (e.g., Ice Beam or Blizzard). His core dragon-flying team elements (Dragonite, Gyarados) suffer devastating 4x weaknesses to Ice and Electric respectively."
    },
    popularityRank: 1,
    generation: 1
  },
  {
    id: "green",
    name: "Green",
    japaneseName: "ブルー (Blue)",
    nicknames: ["The Sneaky Trainer", "Green-chan"],
    age: "11 (Gen 1) / 20+ (Gen 7)",
    gender: "Female",
    height: "145 cm",
    weight: "40 kg",
    birthday: "July 22",
    occupation: "Mischievous Pokémon Trainer",
    role: "Rival",
    firstAppearance: "Pokémon Red & Green (1996 - Concept Art) / Pokémon Let's Go (2018)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto / Cerulean Cave",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/8/87/Green_LGPE.png",
    biography: {
      background: "Green was intended to be the third starter choice in the original Kanto designs, but was left out, eventually appearing as a major secret boss in Cerulean Cave in Let's Go Pikachu/Eevee. She is highly mischievous, using Pokéballs as items to catch trainers.",
      personality: "Playful, tricky, highly energetic, and slightly eccentric. She loves teasing trainers and tries to catch them or throw Pokéballs at them as a joke.",
      storyProgression: "Discovered deep in the Cerulean Cave searching for Mewtwo, she battles the player in an explosive showdown before throwing pokeballs at them.",
      characterDevelopment: "Grew from an un-used conceptual drawing into one of Kanto's most powerful, beloved secret bosses, showing off incredible high-level tactical diversity.",
      goals: "To catch the legendary Mewtwo and pull off the ultimate pokeball prank.",
      motivations: "The thrill of the trick and collecting the most legendary Pokémon."
    },
    team: [
      {
        id: 9,
        name: "Blastoise (Mega Blastoise)",
        level: 68,
        types: ["water"],
        ability: "Mega Launcher",
        nature: "Quiet",
        moves: ["Hydro Pump", "Dark Pulse", "Flash Cannon", "Fake Out"],
        heldItem: "Blastoisinite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cerulean Cave",
        status: "Active Ace"
      },
      {
        id: 36,
        name: "Clefable",
        level: 66,
        types: ["fairy"],
        ability: "Magic Guard",
        nature: "Bold",
        moves: ["Moonblast", "Calm Mind", "Soft-Boiled", "Thunder Wave"],
        heldItem: "Leftovers",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mt. Moon",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Cerulean Cave Showdown",
        desc: "Battles the player in the freezing depths of Cerulean Cave after they capture Mewtwo.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "Her old Pallet companion, who she frequently targets with her playful pranks."
      }
    ],
    battleRecord: {
      wins: "88.5%",
      losses: "11.5%",
      championships: ["Cerulean Cave Master"],
      badges: ["All Kanto Badges"],
      tournaments: ["Pallet Master Tournament Finalist"],
      majorBattles: [
        {
          opponent: "Player",
          result: "loss",
          eventName: "Cerulean Cave Secret Boss Encounter",
          details: "Battled with full force before playfully trying to catch the player."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Original Concept dress",
        description: "Black dress, high white socks, and a wide-brimmed white hat, matching original concept art.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/8/87/Green_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Ayane Sakura"
    },
    music: {
      characterTheme: "Green's Theme - Mischievous Waltz",
      battleTheme: "Battle! VS Trainer Green (LGPE)"
    },
    quotes: [
      "I'm going to catch you next!",
      "Aww, you already caught Mewtwo? No fair!",
      "Let's see if you can handle my Blastoise!"
    ],
    trivia: [
      "Green's character is heavily based on the female protagonist of the Pokémon Adventures manga, Blue (localized as Green).",
      "She will throw Pokéballs at the player's screen after being defeated in Let's Go."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Cerulean Cave", "Saffron City"],
      journeyPath: ["Pallet Town -> Cerulean Cave -> Saffron City Silph Co."]
    },
    aiAnalysis: {
      personalityAnalysis: "Green is an ENFP (Campaigner). She is creative, energetic, and highly spontaneous. In battle, she loves using status shifts and trick setups to catch her opponents off-guard.",
      teamAnalysis: "Mega Blastoise with Mega Launcher hits incredibly hard with boosted dark pulse. Clefable with Magic Guard is immune to all passive damage, stalling out heavy physical setups.",
      strengthRadar: {
        tacticalSkill: 92,
        willpower: 90,
        empathy: 85,
        rawPower: 92,
        adaptability: 96
      },
      battleStrategySummary: "To beat Green, focus down her Clefable early using steel-type physical sweeps. Mega Blastoise is slow, so using a fast Grass or Electric-type attacker can easily chunk its health pool."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "bill",
    name: "Bill",
    japaneseName: "ソネザキ・マサキ (Sonezaki Masaki)",
    nicknames: ["The Poké-Maniac", "Pokémon Storage Pioneer"],
    age: "22 (Gen 1)",
    gender: "Male",
    height: "175 cm",
    weight: "65 kg",
    birthday: "September 2",
    occupation: "Pokémon Storage System Developer / Researcher",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Goldenrod City (Johto)",
    currentLocation: "Sea Cottage (Route 25)",
    characterImageUrl: "https://archives.bulbagarden.net/media/upload/7/7b/Bill_LGPE.png",
    biography: {
      background: "A brilliant, eccentric programmer born in Goldenrod City, Bill moved to Kanto's Route 25 to build his isolated Sea Cottage. He invented the revolutionary digital PC Pokémon Storage System used worldwide.",
      personality: "Nerdy, highly enthusiastic, slightly clumsy, and speaks with a thick Kansai dialect in Japanese. He is obsessed with collecting rare Pokémon and researching teleportation.",
      storyProgression: "The player first discovers him accidentally fused with a Clefairy due to a teleportation pod malfunction, assisting him in reversing the process to receive an S.S. Anne cruise ticket.",
      characterDevelopment: "Collaborated with Sinnoh's Bebe and Hoenn's Lanette to expand the storage cloud network globally.",
      goals: "To build a perfect, cross-region instant digital teleportation grid.",
      motivations: "The absolute wonder of computer programming and helping trainers organize their captures."
    },
    team: [
      {
        id: 133,
        name: "Eevee",
        level: 20,
        types: ["normal"],
        ability: "Adaptability",
        nature: "Docile",
        moves: ["Swift", "Quick Attack", "Bite", "Help Hand"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Goldenrod Gift",
        status: "Cottage Companion"
      }
    ],
    timeline: [
      {
        title: "Storage System Launch",
        desc: "Launches the first commercial PC Pokémon Storage System, changing trainer inventory management forever.",
        media: "game",
        chronology: "Year -2"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "student",
        desc: "He frequently codes backend database tools to support Oak's digital Pokédex efforts."
      }
    ],
    battleRecord: {
      wins: "45.0%",
      losses: "55.0%",
      championships: ["Master System Architect"],
      badges: [],
      tournaments: ["Pallet Tech Symposium Winner"],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Sea Cottage Casual",
        description: "Green striped shirt, brown trousers, and messy ginger hair, looking highly academic.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/7/7b/Bill_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Kevin Kolack",
      japanese: "Hiroshi Kamiya"
    },
    music: {
      characterTheme: "Bill's Theme - Route 25 Cottage",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "I got myself fused with a Clefairy! Help!",
      "I'm a Poké-maniac through and through!",
      "Check out my PC system! It organizes everything."
    ],
    trivia: [
      "In the original games, the PC was named 'Bill's PC', changing to 'Someone's PC' before you meet him on Route 25.",
      "His family still lives in Goldenrod City in Johto, where his sister will give the player Eevee details."
    ],
    regionInfo: {
      homeRegion: "Johto",
      placesVisited: ["Goldenrod City", "Route 25 Kanto", "Cerulean City"],
      journeyPath: ["Goldenrod City -> Cerulean Route 25 Sea Cottage"]
    },
    aiAnalysis: {
      personalityAnalysis: "Bill is an INTP (Logician). He is completely absorbed in coding, theoretical math, and data organization. He dislikes battling, preferring to analyze the digital structures of Pokémon DNA.",
      teamAnalysis: "Eevee serves as his loyal companion. It has no competitive battle training, but possesses outstanding genetic adaptability, representing Bill's science research interests.",
      strengthRadar: {
        tacticalSkill: 70,
        willpower: 80,
        empathy: 90,
        rawPower: 50,
        adaptability: 95
      },
      battleStrategySummary: "To defeat Bill, any simple attack will do. He has no competitive counters and will usually choose to talk his way out of combat."
    },
    popularityRank: 4,
    generation: 1
  }
];
