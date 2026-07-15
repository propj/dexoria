import { PokemonCharacter } from "./pokemonCharacters";

export const MORE_KANTO_CHARACTERS: PokemonCharacter[] = [
  {
    id: "leaf",
    name: "Leaf",
    japaneseName: "リーフ (Leaf)",
    nicknames: ["Green (Japan)", "The Female Protagonist", "Kanto's Hope"],
    age: "11",
    gender: "Female",
    height: "145 cm",
    weight: "38 kg",
    birthday: "April 11",
    occupation: "Pokémon Trainer",
    role: "Protagonist",
    firstAppearance: "Pokémon FireRed & LeafGreen (2004)",
    latestAppearance: "Pokémon Masters EX (2020+)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto / Alola",
    biography: {
      background: "Leaf is the female protagonist who set out from Pallet Town on her journey at the same time as Red and Blue, choosing her starter Pokémon from Professor Oak.",
      personality: "Bright, energetic, determined, and deeply caring toward her Pokémon. She is highly curious and loves exploring nature.",
      storyProgression: "Defeated Team Rocket, conquered the Kanto Gyms, and explored the Sevii Islands to complete her Pokédex.",
      characterDevelopment: "Evolved from a beginner trainer into a Kanto master, proving that determination and a compassionate heart can conquer any obstacle.",
      goals: "To complete the Pokédex and master Kanto's battle circuit.",
      motivations: "The love of discovery and building solid friendships with her team."
    },
    team: [
      {
        id: 3,
        name: "Venusaur",
        level: 70,
        types: ["grass", "poison"],
        ability: "Overgrow",
        nature: "Modest",
        moves: ["Frenzy Plant", "Sludge Bomb", "Earthquake", "Sleep Powder"],
        heldItem: "Venusaurite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Pallet Town starter",
        status: "Mega Ace Partner"
      }
    ],
    timeline: [
      {
        title: "Journey Begins",
        desc: "Leaf leaves Pallet Town with Venusaur to explore the Kanto region.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "Her fellow Pallet Town trainer who shares her passion for Pokémon."
      },
      {
        charId: "blue",
        charName: "Blue Oak",
        type: "rival",
        desc: "Her fiercely competitive rival and childhood neighbor."
      }
    ],
    battleRecord: {
      wins: "90.0%",
      losses: "10.0%",
      championships: ["Sevii Champion", "Indigo Plateau Runner-up"],
      badges: ["All 8 Kanto Badges"],
      tournaments: ["Pallet Cup Champion"],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Standard Outfit",
        description: "Blue sleeveless top, red skirt, yellow bag, and a white hat with a red semi-circle.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/c/ca/FireRed_LeafGreen_Leaf.png"
      }
    ],
    voiceActors: {
      english: "Sora Harris",
      japanese: "Ayane Sakura"
    },
    music: {
      characterTheme: "Leaf's Theme - Pallet Wind",
      battleTheme: "Battle! VS Trainer Leaf"
    },
    quotes: [
      "Let's see what my partner Venusaur and I can do!",
      "Every step is a new adventure!",
      "We'll protect Kanto no matter what!"
    ],
    trivia: [
      "She was modeled after the female character on the cover of the original Japanese guidebook.",
      "She has a custom Sygna Suit in Pokémon Masters EX with Venusaur."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Cinnabar Island", "One Island"],
      journeyPath: ["Pallet Town -> Viridian City -> Cerulean City -> Fuchsia City -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Leaf is an ENFP. She is extremely warm, enthusiastic, and versatile, adapting quickly to any battle style.",
      teamAnalysis: "Venusaur forms a incredibly sturdy defensive core with outstanding Special Attack coverage.",
      strengthRadar: {
        tacticalSkill: 88,
        willpower: 92,
        empathy: 95,
        rawPower: 86,
        adaptability: 91
      },
      battleStrategySummary: "Rely on solar setups with Venusaur. Bring Fire or Flying type moves to counter her grass strategy."
    },
    popularityRank: 3,
    generation: 3
  },
  {
    id: "chase",
    name: "Chase",
    japaneseName: "カケル (Kakeru)",
    nicknames: ["Let's Go Protagonist", "Pallet Rookie"],
    gender: "Male",
    occupation: "Pokémon Trainer",
    role: "Protagonist",
    firstAppearance: "Pokémon Let's Go Pikachu! (2018)",
    latestAppearance: "Pokémon Let's Go Pikachu! (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto",
    biography: {
      background: "Chase is the energetic young protagonist from Pallet Town in the Let's Go era, starting his journey with an incredibly special Partner Pikachu.",
      personality: "Kind, friendly, always smiling, and eager to make friends with every wild Pokémon.",
      storyProgression: "Traveled Kanto, defeated Team Rocket, and became the Kanto Champion.",
      characterDevelopment: "Learned the true value of high-bond partnerships and cooperation with custom Partner moves.",
      goals: "To become the ultimate champion and form a perfect bond with Pikachu.",
      motivations: "The pure joy of exploring with his best friend Pikachu."
    },
    team: [
      {
        id: 25,
        name: "Pikachu",
        level: 65,
        types: ["electric"],
        ability: "Static",
        nature: "Jolly",
        moves: ["Pika Papow", "Splishy Splash", "Thunderbolt", "Iron Tail"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved (Partner)",
        firstAppearance: "Pallet Town",
        status: "Signature Partner"
      }
    ],
    timeline: [
      {
        title: "Starting Let's Go",
        desc: "Chase captures his partner Pikachu in Professor Oak's lab.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "trace",
        charName: "Trace",
        type: "rival",
        desc: "His friendly rival who set off from Pallet Town with him."
      }
    ],
    battleRecord: {
      wins: "85.0%",
      losses: "15.0%",
      championships: ["Let's Go Champion"],
      badges: ["All 8 Kanto Badges"],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Pikachu Cap Style",
        description: "Red and blue modern cap, high collar vest, and high-top sneakers.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/da/Lets_Go_Pikachu_Eevee_Chase.png"
      }
    ],
    voiceActors: {
      english: "Marina Inoue",
      japanese: "Marina Inoue"
    },
    music: {
      characterTheme: "Chase's Theme",
      battleTheme: "Battle! VS Wild Pokémon (LGPE)"
    },
    quotes: [
      "Let's go, Pikachu! We can do this!",
      "I want to catch every single Pokémon!"
    ],
    trivia: [
      "Chase can ride on several large Pokémon in Kanto, including Charizard, Lapras, and Arcanine.",
      "His partner Pikachu cannot evolve into Raichu."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Fuchsia City", "Indigo Plateau"],
      journeyPath: ["Pallet Town -> Viridian City -> Pewter City -> Cerulean City -> Fuchsia City -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Chase is an ESFP, living in the moment and enjoying every capture and friendship.",
      teamAnalysis: "Pikachu utilizes special high-power Partner moves that bypass standard electric typing limitations.",
      strengthRadar: {
        tacticalSkill: 80,
        willpower: 90,
        empathy: 98,
        rawPower: 82,
        adaptability: 88
      },
      battleStrategySummary: "Watch out for fast partner move coverage like Splishy Splash (Water) or Floatly Fall (Flying)."
    },
    popularityRank: 4,
    generation: 7
  },
  {
    id: "elaine",
    name: "Elaine",
    japaneseName: "アユミ (Ayumi)",
    nicknames: ["Let's Go Eevee Protagonist", "Eevee's Companion"],
    gender: "Female",
    occupation: "Pokémon Trainer",
    role: "Protagonist",
    firstAppearance: "Pokémon Let's Go Eevee! (2018)",
    latestAppearance: "Pokémon Let's Go Eevee! (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto",
    biography: {
      background: "Elaine is the female protagonist who began her journey in Pallet Town alongside her partner Eevee.",
      personality: "Enthusiastic, cheerful, and loves styling and accessorizing her partner Eevee.",
      storyProgression: "Conquered Kanto, defeated Team Rocket, and became Champion of the Indigo League.",
      characterDevelopment: "Discovered the incredible diversity of Eevee's custom elemental capabilities.",
      goals: "To travel all of Kanto and show off Eevee's absolute versatility.",
      motivations: "A deep, stylish connection with her Pokémon."
    },
    team: [
      {
        id: 133,
        name: "Eevee",
        level: 65,
        types: ["normal"],
        ability: "Run Away",
        nature: "Naive",
        moves: ["Veevee Volley", "Bouncy Bubble", "Sizzly Slide", "Buzzy Buzz"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved (Partner)",
        firstAppearance: "Pallet Town",
        status: "Signature Partner"
      }
    ],
    timeline: [
      {
        title: "Starter Eevee",
        desc: "Elaine receives her special partner Eevee in Pallet Town.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "trace",
        charName: "Trace",
        type: "rival",
        desc: "Her Pallet Town neighbor and competitive buddy."
      }
    ],
    battleRecord: {
      wins: "85.0%",
      losses: "15.0%",
      championships: ["Let's Go Champion"],
      badges: ["All 8 Kanto Badges"],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Eevee Cap Look",
        description: "Eevee cap, white vest, and colorful travel shorts.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/3/30/Lets_Go_Pikachu_Eevee_Elaine.png"
      }
    ],
    voiceActors: {
      english: "Yumi Hanamori",
      japanese: "Yumi Hanamori"
    },
    music: {
      characterTheme: "Elaine's Theme",
      battleTheme: "Battle! VS Wild Pokémon (LGPE)"
    },
    quotes: [
      "Eevee and I look great and fight even better!",
      "Let's see what kind of trick we have today!"
    ],
    trivia: [
      "Elaine can customize her Eevee's hairstyle with bangs and tiny hats.",
      "Her partner Eevee is capable of learning special Water, Fire, Electric, Grass, Ice, Psychic, Dark, and Fairy partner moves."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Fuchsia City", "Indigo Plateau"],
      journeyPath: ["Pallet Town -> Pewter City -> Cerulean City -> Fuchsia City -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Elaine is an ENFP, combining dynamic styling and creative strategy to win.",
      teamAnalysis: "Eevee possesses unparalleled coverage through multi-typed custom physical attacks.",
      strengthRadar: {
        tacticalSkill: 82,
        willpower: 88,
        empathy: 99,
        rawPower: 80,
        adaptability: 94
      },
      battleStrategySummary: "Exploit Eevee's diverse elemental coverage moves to strike any opponent's natural weakness."
    },
    popularityRank: 4,
    generation: 7
  },
  {
    id: "trace",
    name: "Trace",
    japaneseName: "シン (Shin)",
    nicknames: ["The New Rival", "Friendly Rival"],
    gender: "Male",
    occupation: "Pokémon Trainer",
    role: "Rival",
    firstAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto",
    biography: {
      background: "Trace is the soft-hearted rival in the Let's Go games who embarks on his journey alongside Chase or Elaine, choosing the alternate starter.",
      personality: "Polite, supportive, slightly timid, but matures into a fiercely protective friend and competitor.",
      storyProgression: "Conquered the Indigo Plateau to briefly become the Champion before being defeated by Chase/Elaine.",
      characterDevelopment: "Overcame his fears of spooky Lavender Tower to save an orphaned Cubone, developing deep bonds of loyalty.",
      goals: "To support his friends and prove himself as Kanto's champion.",
      motivations: "True friendship and protectiveness of smaller Pokémon."
    },
    team: [
      {
        id: 135,
        name: "Jolteon",
        level: 66,
        types: ["electric"],
        ability: "Volt Absorb",
        nature: "Timid",
        moves: ["Thunderbolt", "Shadow Ball", "Quick Attack", "Light Screen"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Pallet Town",
        status: "Fast Starter partner"
      },
      {
        id: 18,
        name: "Pidgeot (Mega Pidgeot)",
        level: 68,
        types: ["normal", "flying"],
        ability: "No Guard",
        nature: "Jolly",
        moves: ["Hurricane", "Quick Attack", "Roost", "Air Slash"],
        heldItem: "Pidgeotite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 1",
        status: "Active Ace"
      }
    ],
    timeline: [
      {
        title: "Champion Crown",
        desc: "Trace temporarily defeats the Elite Four to become the Indigo Champion.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "chase",
        charName: "Chase",
        type: "rival",
        desc: "His best friend and competitive benchmark."
      },
      {
        charId: "elaine",
        charName: "Elaine",
        type: "rival",
        desc: "His bright companion whom he strives to keep up with."
      }
    ],
    battleRecord: {
      wins: "80.0%",
      losses: "20.0%",
      championships: ["Former Kanto Champion"],
      badges: ["All 8 Kanto Badges"],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Casual Gear",
        description: "Green zip-up hoodie, black shorts, and a green backpack.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/5/52/Lets_Go_Pikachu_Eevee_Trace.png"
      }
    ],
    voiceActors: {
      english: "Anairis Quiñones",
      japanese: "Yoshitsugu Matsuoka"
    },
    music: {
      characterTheme: "Trace's Theme - Friendly Rivalry",
      battleTheme: "Battle! VS Rival Trace"
    },
    quotes: [
      "I'm not going to run away anymore!",
      "Let's have an amazing battle together!"
    ],
    trivia: [
      "Trace adopts the orphaned Cubone from Lavender Town, which eventually evolves into Marowak on his final team.",
      "He uses Mega Pidgeot in his Champion rematch battles."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Lavender Town", "Indigo Plateau"],
      journeyPath: ["Pallet Town -> Cerulean City -> Lavender Town -> Saffron City -> Indigo Plateau"]
    },
    aiAnalysis: {
      personalityAnalysis: "Trace is an ISFJ, focused on supporting his team and ensuring safety, though capable of high-level tactical bursts.",
      teamAnalysis: "His team features high-speed coverage (Jolteon/Pidgeot) and bulky tanks (Marowak/Snorlax).",
      strengthRadar: {
        tacticalSkill: 84,
        willpower: 85,
        empathy: 96,
        rawPower: 82,
        adaptability: 86
      },
      battleStrategySummary: "Defeat Jolteon with Ground moves, and target Pidgeot with solid Electric or Rock type attacks."
    },
    popularityRank: 5,
    generation: 7
  },
  {
    id: "daisy_oak",
    name: "Daisy Oak",
    japaneseName: "ナナミ (Nanami)",
    nicknames: ["Daisy", "Blue's Sister", "Pallet's Beautician"],
    gender: "Female",
    occupation: "Coordinator / Pokémon Groomer",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon FireRed & LeafGreen (2004)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Pallet Town (Oak Residence)",
    biography: {
      background: "Daisy is the granddaughter of Professor Oak and the older sister of Blue Oak. She lives in Pallet Town where she helps her grandfather with research organization.",
      personality: "Gentle, elegant, highly supportive, and loves drinking tea while grooming Pokémon.",
      storyProgression: "Helps the protagonist by giving them the Town Map and later offers grooming services to raise Pokémon happiness.",
      characterDevelopment: "Became a renowned Pokémon coordinator in foreign regions, returning to Pallet Town to teach grooming arts.",
      goals: "To support her brother Blue and help Pallet trainers care for their teams.",
      motivations: "The absolute comfort and happiness of Pokémon."
    },
    team: [
      {
        id: 35,
        name: "Clefairy",
        level: 30,
        types: ["fairy"],
        ability: "Cute Charm",
        nature: "Gentle",
        moves: ["Sing", "Metronome", "Pound", "Growl"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Pallet Town Garden",
        status: "House Companion"
      }
    ],
    timeline: [
      {
        title: "Coordinator Career",
        desc: "Daisy wins several Ribbons in foreign regions before returning to Pallet.",
        media: "manga",
        chronology: "Year -3"
      }
    ],
    relationships: [
      {
        charId: "blue",
        charName: "Blue Oak",
        type: "family",
        desc: "Her ambitious younger brother whom she adores and supports."
      },
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "family",
        desc: "Her grandfather, whom she assists with administrative organization."
      }
    ],
    battleRecord: {
      wins: "50.0%",
      losses: "50.0%",
      championships: ["Ribbon Cup Champion"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Pallet Tea Dress",
        description: "Elegant domestic blouse and long blue skirt, always holding a grooming brush.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/d3/FRLG_Daisy_Oak.png"
      }
    ],
    voiceActors: {
      english: "Amy Birnbaum",
      japanese: "Kozue Kamada"
    },
    music: {
      characterTheme: "Daisy Oak's Melody",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Hello! Would you like me to groom your Pokémon? It will make them very happy!",
      "My brother Blue can be a bit arrogant, but please be nice to him."
    ],
    trivia: [
      "In FireRed and LeafGreen, she will groom your Pokémon once a day between 3 PM and 4 PM.",
      "She is a former competitor in the Pokémon Contests, maintaining several ribbons."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Celadon City"],
      journeyPath: ["Pallet Town -> Celadon Contest Hall"]
    },
    aiAnalysis: {
      personalityAnalysis: "Daisy is an ESFJ, placing her entire focus on community happiness and supporting her family.",
      teamAnalysis: "Her Clefairy is purely trained for utility and styling contests rather than physical combat.",
      strengthRadar: {
        tacticalSkill: 60,
        willpower: 70,
        empathy: 100,
        rawPower: 45,
        adaptability: 80
      },
      battleStrategySummary: "She will usually avoid battling, but uses Sing and Metronome to distract challengers."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "reds_mom",
    name: "Red's Mom",
    japaneseName: "ママ (Mama)",
    nicknames: ["Mom", "Pallet Matriarch"],
    gender: "Female",
    occupation: "Homemaker",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Pallet Town (Red's House)",
    biography: {
      background: "Red's Mom is the supportive parent of the legendary trainer Red, residing in their Pallet Town home.",
      personality: "Loving, hospitable, always worried about Red's health and warmth, but immensely proud of his achievements.",
      storyProgression: "Welcomes the protagonist home to heal their Pokémon throughout their entire journey.",
      characterDevelopment: "Maintains a warm, unyielding support center for Red even as he retreats to train in isolation.",
      goals: "To ensure her son always has a warm bed and home to return to.",
      motivations: "Maternal love and family happiness."
    },
    team: [
      {
        id: 122,
        name: "Mr. Mime",
        level: 25,
        types: ["psychic", "fairy"],
        ability: "Filter",
        nature: "Calm",
        moves: ["Light Screen", "Reflect", "Confusion", "Barrier"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 2",
        status: "Housekeeper helper"
      }
    ],
    timeline: [
      {
        title: "Red's Departure",
        desc: "Watches her son leave Pallet Town to pursue his dreams, offering him words of encouragement.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "family",
        desc: "Her beloved son, whose heroic journey she supports unconditionally."
      }
    ],
    battleRecord: {
      wins: "30.0%",
      losses: "70.0%",
      championships: [],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Pallet Casual",
        description: "Pink shirt, blue apron, and neat auburn hair.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/f/f6/Red_Mom_LGPE.png"
      }
    ],
    voiceActors: {
      english: "Veronica Taylor",
      japanese: "Masako Nozawa"
    },
    music: {
      characterTheme: "Pallet Town Cozy Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Right. All boys leave home someday. It said so on TV.",
      "Red, you look tired! You should rest for a bit."
    ],
    trivia: [
      "In the original games, her dialogue references a movie playing on the TV (Stand by Me) when the player first interacts with it.",
      "She has hosted multiple champions and high-profile trainers who came looking for Red."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Viridian City"],
      journeyPath: ["Pallet Town Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "Red's Mom is an ISFJ, radiating cozy warmth and maintaining absolute sanctuary values for her son.",
      teamAnalysis: "Mr. Mime acts as an active assistant helper, setting up defensive barriers to secure the Pallet household.",
      strengthRadar: {
        tacticalSkill: 50,
        willpower: 75,
        empathy: 100,
        rawPower: 40,
        adaptability: 70
      },
      battleStrategySummary: "Rarely fights. If cornered, relies on Mr. Mime's defensive screens to delay attackers."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "chases_mom",
    name: "Chase's Mom",
    japaneseName: "カケルのママ (Kakeru no Mama)",
    nicknames: ["Let's Go Mom"],
    gender: "Female",
    occupation: "Homemaker",
    role: "NPC",
    firstAppearance: "Pokémon Let's Go Pikachu! (2018)",
    latestAppearance: "Pokémon Let's Go Pikachu! (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Pallet Town (Chase's House)",
    biography: {
      background: "Chase's Mom resides in Pallet Town, sending her son off on his Let's Go journey with a custom set of travel wear.",
      personality: "Cheerful, supportive, and loves giving custom regional outfits to her son and his partner Pikachu.",
      storyProgression: "Supports Chase throughout Kanto, greeting guests and restoring Chase's party when he visits.",
      characterDevelopment: "Maintains close neighborly relationships with Professor Oak and Trace's family.",
      goals: "To keep Chase stylishly dressed and perfectly healthy on his journey.",
      motivations: "Family love and styling creativity."
    },
    team: [
      {
        id: 52,
        name: "Meowth",
        level: 20,
        types: ["normal"],
        ability: "Pickup",
        nature: "Jolly",
        moves: ["Pay Day", "Bite", "Scratch", "Growl"],
        heldItem: "Amulet Coin",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Pallet Town",
        status: "House Cat"
      }
    ],
    timeline: [
      {
        title: "Chase's Send-off",
        desc: "Gives Chase his signature Sportwear outfit to begin his journey.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "chase",
        charName: "Chase",
        type: "family",
        desc: "Her energetic son who sets out to become Kanto's Champion."
      }
    ],
    battleRecord: {
      wins: "20.0%",
      losses: "80.0%",
      championships: [],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Pallet Home wear",
        description: "Orange sweater and dark trousers, looking highly domestic.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/da/Lets_Go_Pikachu_Eevee_Chase.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Megumi Han"
    },
    music: {
      characterTheme: "Pallet Town Cozy Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Make sure you and Pikachu look your absolute best out there!",
      "Have an amazing adventure, sweetie!"
    ],
    trivia: [
      "She will reward the player with special clothing sets as they hit key milestones in the Let's Go storyline.",
      "Her Meowth loves picking up shiny coins around Pallet Town."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town"],
      journeyPath: ["Pallet Town Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "Chase's Mom is an ESFJ, focusing heavily on clothing styling and emotional encouragement.",
      teamAnalysis: "Meowth is untrained for battle, serving primarily as a beloved companion and occasional item collector.",
      strengthRadar: {
        tacticalSkill: 40,
        willpower: 70,
        empathy: 99,
        rawPower: 35,
        adaptability: 75
      },
      battleStrategySummary: "Avoids combat entirely. Meowth can use Pay Day if absolutely required to defend the home."
    },
    popularityRank: 7,
    generation: 7
  },
  {
    id: "elaines_mom",
    name: "Elaine's Mom",
    japaneseName: "アユミのママ (Ayumi no Mama)",
    nicknames: ["Elaine's Mother"],
    gender: "Female",
    occupation: "Homemaker",
    role: "NPC",
    firstAppearance: "Pokémon Let's Go Eevee! (2018)",
    latestAppearance: "Pokémon Let's Go Eevee! (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Pallet Town (Elaine's House)",
    biography: {
      background: "Elaine's Mom resides in Pallet Town, actively supporting her daughter's stylish journey with custom outfits.",
      personality: "Warm, energetic, loves accessory design, and thinks Eevee is Kanto's absolute cutest Pokémon.",
      storyProgression: "Helps Elaine by offering a comfortable resting place and styling feedback throughout her travel.",
      characterDevelopment: "Maintains a beautiful garden in Pallet Town, cultivating regional flowers.",
      goals: "To support Elaine's dream and ensure her Eevee remains comfortable.",
      motivations: "Nurturing her family's creative and travel dreams."
    },
    team: [
      {
        id: 53,
        name: "Persian",
        level: 25,
        types: ["normal"],
        ability: "Limber",
        nature: "Relaxed",
        moves: ["Slash", "Fake Out", "Bite", "Growl"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Pallet Town",
        status: "House Cat"
      }
    ],
    timeline: [
      {
        title: "Eevee Styling Setup",
        desc: "Provides custom ribbon outfits to kickstart Elaine's coordinate travel.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "elaine",
        charName: "Elaine",
        type: "family",
        desc: "Her stylish daughter who travels Kanto with Eevee."
      }
    ],
    battleRecord: {
      wins: "25.0%",
      losses: "75.0%",
      championships: [],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Pallet Style",
        description: "Elegant green blouse and long brown apron dress.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/3/30/Lets_Go_Pikachu_Eevee_Elaine.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Megumi Han"
    },
    music: {
      characterTheme: "Pallet Town Cozy Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Elaine, your Eevee looks absolutely adorable today!",
      "Remember to take plenty of breaks and enjoy your journey!"
    ],
    trivia: [
      "She enjoys exchanging flower seeds with Celadon City florist shops.",
      "Her Persian is extremely pampered and sleeps on a velvet cushion."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town"],
      journeyPath: ["Pallet Town Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "Elaine's Mom is an ISFP, focusing her quiet care on cozy aesthetics and floral gardening.",
      teamAnalysis: "Persian is highly docile and possesses great agility, though it prefers napping over active battles.",
      strengthRadar: {
        tacticalSkill: 45,
        willpower: 70,
        empathy: 99,
        rawPower: 40,
        adaptability: 75
      },
      battleStrategySummary: "Will not engage in battles. Persian can use Fake Out to safely exit combat situations."
    },
    popularityRank: 7,
    generation: 7
  },
  {
    id: "archer",
    name: "Archer",
    japaneseName: "アポロ (Apollo)",
    nicknames: ["Team Rocket Executive Archer", "Rocket Commander"],
    gender: "Male",
    occupation: "Team Rocket Executive / Interim Leader",
    role: "Villain",
    firstAppearance: "Pokémon Gold & Silver (1999) / FireRed & LeafGreen (2004)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Wandering Johto (formerly Rocket Hideout)",
    biography: {
      background: "Archer is the leading Executive of Team Rocket, serving as Giovanni's direct second-in-command during the Kanto takeover operations.",
      personality: "Calculated, loyal, ruthlessly professional, and deeply devoted to restoring Giovanni's absolute empire.",
      storyProgression: "Commanded the Silph Co. occupation forces in Kanto and later led the Team Rocket revival movement in Johto.",
      characterDevelopment: "Became the de facto leader of Team Rocket after Giovanni's abandonment, coordinating the radio wave experiments.",
      goals: "To recall Giovanni and restore Team Rocket to absolute global dominance.",
      motivations: "Unwavering, fanatical loyalty to Giovanni's syndicate vision."
    },
    team: [
      {
        id: 229,
        name: "Houndoom",
        level: 48,
        types: ["dark", "fire"],
        ability: "Flash Fire",
        nature: "Lonely",
        moves: ["Flamethrower", "Crunch", "Smog", "Feint Attack"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Rocket Radio Tower",
        status: "Dark Ace Partner"
      },
      {
        id: 110,
        name: "Weezing",
        level: 45,
        types: ["poison"],
        ability: "Levitate",
        nature: "Bold",
        moves: ["Sludge Bomb", "Explosion", "Toxic", "Dark Pulse"],
        heldItem: "Black Sludge",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Rocket Hideout",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Silph Co. Siege",
        desc: "Co-directs the military occupation of Silph Co. headquarters in Saffron City.",
        media: "game",
        chronology: "Year 0"
      },
      {
        title: "Radio Tower Raid",
        desc: "Hijacks the Goldenrod Radio Tower to broadcast a recall signal to Giovanni.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "student",
        desc: "His supreme leader. Archer's entire life purpose is to serve and restore Giovanni's rule."
      },
      {
        charId: "ariana",
        charName: "Ariana",
        type: "teammate",
        desc: "His co-Executive who coordinates Kanto defensive lines alongside him."
      }
    ],
    battleRecord: {
      wins: "75.0%",
      losses: "25.0%",
      championships: ["Interim Rocket Leader"],
      badges: [],
      tournaments: [],
      majorBattles: [
        {
          opponent: "Ethan",
          result: "loss",
          eventName: "Radio Tower Summit",
          details: "Defeated at the apex of the Johto Radio Tower, officially disbanding Team Rocket once more."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Executive Uniform",
        description: "White Team Rocket Executive uniform with a red 'R' and black high-top boots.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/dd/Lets_Go_Pikachu_Eevee_Archer.png"
      }
    ],
    voiceActors: {
      english: "Sean Schemmel",
      japanese: "Takahiro Sakurai"
    },
    music: {
      characterTheme: "Team Rocket Executive Theme",
      battleTheme: "Battle! VS Rocket Executive"
    },
    quotes: [
      "Team Rocket will never be destroyed! We will rise again for our leader, Giovanni!",
      "You dare stand in the way of our grand resurrection?"
    ],
    trivia: [
      "In FireRed and LeafGreen, he appears as an unnamed Rocket Executive in the Rocket Warehouse on Five Island.",
      "His design was heavily modernized in HeartGold/SoulSilver to distinguish him from other Executives."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron City", "Goldenrod City", "Five Island"],
      journeyPath: ["Saffron City -> Five Island -> Goldenrod City Radio Tower"]
    },
    aiAnalysis: {
      personalityAnalysis: "Archer is an INTJ, using long-term calculated syndicates and media hijackings to achieve tactical targets.",
      teamAnalysis: "Houndoom provides strong Dark/Fire offensive pressure, supported by Weezing's levitating toxic stalls.",
      strengthRadar: {
        tacticalSkill: 88,
        willpower: 90,
        empathy: 15,
        rawPower: 85,
        adaptability: 82
      },
      battleStrategySummary: "Use Water or Ground moves to bypass Houndoom and bypass Weezing's Levitate with powerful Psychic-type attacks."
    },
    popularityRank: 4,
    generation: 2
  },
  {
    id: "ariana",
    name: "Ariana",
    japaneseName: "アテナ (Athena)",
    nicknames: ["Team Rocket Executive Ariana", "Rocket Madame"],
    gender: "Female",
    occupation: "Team Rocket Executive",
    role: "Villain",
    firstAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Wandering Johto (formerly Rocket Hideout)",
    biography: {
      background: "Ariana is a powerful female Executive of Team Rocket, known for her severe demeanor and command over toxic Poison-type Pokémon.",
      personality: "Cold, elegant, highly demanding, and has zero tolerance for trainer failures or Rocket recruits' incompetence.",
      storyProgression: "Coordinated Rocket activities in Saffron City and later established defensive outposts in Johto's Mahogany Town.",
      characterDevelopment: "Grew into one of Kanto's toughest military commanders, using environmental pollution to secure Rocket resources.",
      goals: "To secure regional power bases to facilitate Giovanni's glorious return.",
      motivations: "Revenge against the League administration and securing supreme syndicate power."
    },
    team: [
      {
        id: 24,
        name: "Arbok",
        level: 45,
        types: ["poison"],
        ability: "Intimidate",
        nature: "Adamanat",
        moves: ["Gunk Shot", "Crunch", "Poison Jab", "Glare"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mahogany Hideout",
        status: "Co-Ace Poisoner"
      },
      {
        id: 45,
        name: "Vileplume",
        level: 45,
        types: ["grass", "poison"],
        ability: "Effect Spore",
        nature: "Modest",
        moves: ["Giga Drain", "Sludge Bomb", "Sleep Powder", "Stun Spore"],
        heldItem: "Sitrus Berry",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mahogany Hideout",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Mahogany Occupation",
        desc: "Co-directs the illegal Mahogany Town subterranean laboratory, processing radio wave signals.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "student",
        desc: "Her supreme Boss, whom she seeks to rescue and serve."
      },
      {
        charId: "archer",
        charName: "Archer",
        type: "teammate",
        desc: "Her fellow Executive, aligning tactics for the Rocket revival."
      }
    ],
    battleRecord: {
      wins: "70.0%",
      losses: "30.0%",
      championships: ["Rocket Base Commander"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Rocket Executive Suit",
        description: "White dress-uniform jacket with a red 'R', black gloves, and high boots.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/da/HeartGold_SoulSilver_Ariana.png"
      }
    ],
    voiceActors: {
      english: "Erica Schroeder",
      japanese: "Kokoa Ryutani"
    },
    music: {
      characterTheme: "Team Rocket Executive Theme",
      battleTheme: "Battle! VS Rocket Executive"
    },
    quotes: [
      "We will crush anyone who interferes with Team Rocket's grand revival!",
      "Your cute little Pokémon are no match for our toxic power!"
    ],
    trivia: [
      "She is considered one of the most difficult double-battle bosses in the Johto Mahogany Hideout alongside Petrel.",
      "Her design mirrors that of a classic high-ranking military commander."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron City", "Mahogany Town", "Goldenrod City"],
      journeyPath: ["Saffron City -> Mahogany Town subterranean base"]
    },
    aiAnalysis: {
      personalityAnalysis: "Ariana is an ESTJ, applying strict discipline, Intimidate cycles, and status status setups to secure victory.",
      teamAnalysis: "Arbok with Intimidate softens physical threats, while Vileplume stalls out opponents with Sleep and Stun Spore.",
      strengthRadar: {
        tacticalSkill: 85,
        willpower: 88,
        empathy: 10,
        rawPower: 82,
        adaptability: 84
      },
      battleStrategySummary: "Lead with Psychic or Fire moves to burn down Vileplume and check Arbok's Intimidate swaps."
    },
    popularityRank: 5,
    generation: 2
  },
  {
    id: "proton",
    name: "Proton",
    japaneseName: "ランス (Lance)",
    nicknames: ["Team Rocket Executive Proton", "The Rocket Enforcer"],
    gender: "Male",
    occupation: "Team Rocket Executive",
    role: "Villain",
    firstAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    latestAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    region: "Kanto",
    hometown: "Fuchsia City",
    currentLocation: "Wandering Johto (formerly Rocket Hideout)",
    biography: {
      background: "Proton is the most ruthless Executive of Team Rocket, known for his aggressive and underhanded tactics, such as slicing off SlowpokeTails.",
      personality: "Arrogant, hot-tempered, cruel, and values raw results over any form of honor or Pokémon safety.",
      storyProgression: "Supervised the illegal Slowpoke Well operations in Johto and defended the Goldenrod Radio Tower.",
      characterDevelopment: "Became a notorious enforcer within Team Rocket, executing high-risk extraction missions.",
      goals: "To squeeze maximum financial value out of wild Pokémon resources.",
      motivations: "Greed, authority, and syndicate promotion."
    },
    team: [
      {
        id: 42,
        name: "Golbat",
        level: 35,
        types: ["poison", "flying"],
        ability: "Inner Focus",
        nature: "Hasty",
        moves: ["Air Cutter", "Bite", "Confuse Ray", "Toxic"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Slowpoke Well",
        status: "Active Poisoner"
      },
      {
        id: 110,
        name: "Weezing",
        level: 38,
        types: ["poison"],
        ability: "Levitate",
        nature: "Relaxed",
        moves: ["Sludge", "SmokeScreen", "Self-Destruct", "Double Hit"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Radio Tower Raid",
        status: "Active Gas Bomb"
      }
    ],
    timeline: [
      {
        title: "Slowpoke Well Occupation",
        desc: "Leads the excavation team slicing and selling SlowpokeTails in Azalea Town.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "student",
        desc: "His supreme leader, whom he hopes to impress with his ruthless efficiency."
      }
    ],
    battleRecord: {
      wins: "65.0%",
      losses: "35.0%",
      championships: ["Rocket Enforcer Chief"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Executive Look",
        description: "White short-sleeved Rocket Executive uniform with sharp green hair.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/1/11/HeartGold_SoulSilver_Proton.png"
      }
    ],
    voiceActors: {
      english: "Justin Anselmi",
      japanese: "Nobuhiko Okamoto"
    },
    music: {
      characterTheme: "Team Rocket Executive Theme",
      battleTheme: "Battle! VS Rocket Executive"
    },
    quotes: [
      "I'm the cruelest executive in Team Rocket! You won't get past me!",
      "Pokémon are just tools for money! Nothing else matters!"
    ],
    trivia: [
      "Proton's Japanese name is Lance, which is identical to the Champion Lance's English name, causing significant translation challenges.",
      "He is the first Executive the player battles in Azalea Town's Slowpoke Well."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Fuchsia City", "Azalea Town", "Goldenrod City"],
      journeyPath: ["Fuchsia City -> Azalea Town Slowpoke Well"]
    },
    aiAnalysis: {
      personalityAnalysis: "Proton is an ESTP, relying on immediate high-risk aggression and underhanded status exploits to win.",
      teamAnalysis: "Golbat relies on fast Confuse Ray disruption, while Weezing acts as a terrifying Self-Destruct backup option.",
      strengthRadar: {
        tacticalSkill: 78,
        willpower: 85,
        empathy: 5,
        rawPower: 80,
        adaptability: 82
      },
      battleStrategySummary: "Watch out for Weezing's Self-Destruct. Deploy Ground or Psychic moves to quickly KO his team before they can explode."
    },
    popularityRank: 5,
    generation: 2
  },
  {
    id: "petrel",
    name: "Petrel",
    japaneseName: "ラムダ (Lambda)",
    nicknames: ["Team Rocket Executive Petrel", "The Rocket Disguise Master"],
    gender: "Male",
    occupation: "Team Rocket Executive",
    role: "Villain",
    firstAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    latestAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Wandering Johto (formerly Rocket Hideout)",
    biography: {
      background: "Petrel is a high-profile Team Rocket Executive who specializes in infiltration and mimicry, famous for masquerading as the Goldenrod Radio Director.",
      personality: "Eccentric, dramatic, theatrical, and loves showing off his custom voice-modulators and master-class disguises.",
      storyProgression: "Impersonated the Radio Tower Director to secure broadcasting rights, holding the real director hostage.",
      characterDevelopment: "Transformed from a low-tier grifter into Team Rocket's master-class intelligence officer.",
      goals: "To secure regional broadcast channels to summon Giovanni back to Kanto/Johto.",
      motivations: "The theatrical thrill of deception and high-profile syndicate promotion."
    },
    team: [
      {
        id: 110,
        name: "Weezing",
        level: 35,
        types: ["poison"],
        ability: "Levitate",
        nature: "Modest",
        moves: ["Sludge Bomb", "Smog", "Explosion", "Dark Pulse"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Radio Tower Base",
        status: "Active Ace"
      },
      {
        id: 20,
        name: "Raticate",
        level: 32,
        types: ["normal"],
        ability: "Guts",
        nature: "Jolly",
        moves: ["Hyper Fang", "Super Fang", "Quick Attack", "Sucker Punch"],
        heldItem: "Flame Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Saffron Hideout",
        status: "Active"
      }
    ],
    timeline: [
      {
        title: "Radio Tower Deception",
        desc: "Masquerades as the Radio Station Director, successfully tricking the entire region.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "student",
        desc: "His Boss, whom he seeks to recall using global media waves."
      }
    ],
    battleRecord: {
      wins: "68.0%",
      losses: "32.0%",
      championships: ["Master of Infiltration"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Disguise Look",
        description: "White Rocket Executive uniform with messy purple hair and a dramatic cape.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/HeartGold_SoulSilver_Petrel.png"
      }
    ],
    voiceActors: {
      english: "Marc Diraison",
      japanese: "Tomokazu Sugita"
    },
    music: {
      characterTheme: "Team Rocket Executive Theme",
      battleTheme: "Battle! VS Rocket Executive"
    },
    quotes: [
      "Wahahaha! Did you really think I was the Director? Disguises are my absolute masterpiece!",
      "Prepare to be confused by my tricky styles!"
    ],
    trivia: [
      "Petrel is the only Executive who actively shares keys and critical code cards with the player, playfully praising their battle talent.",
      "His battle team famously featured five Koffings and one Weezing in the original Gold & Silver games."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron City", "Goldenrod City"],
      journeyPath: ["Saffron City -> Goldenrod Radio Tower basement"]
    },
    aiAnalysis: {
      personalityAnalysis: "Petrel is an ENTP, using high-profile mimicry, theatrical dialogue, and deceptive switch-outs to confuse opponents.",
      teamAnalysis: "His Raticate utilizes Flame Orb + Guts to hit extremely hard, backed by multiple explosive Weezings.",
      strengthRadar: {
        tacticalSkill: 82,
        willpower: 80,
        empathy: 30,
        rawPower: 78,
        adaptability: 92
      },
      battleStrategySummary: "Keep a Ghost or Steel-type handy to completely wall Raticate's Normal moves and Weezing's Self-Destruct."
    },
    popularityRank: 5,
    generation: 2
  },
  {
    id: "jessie",
    name: "Jessie",
    japaneseName: "ムサシ (Musashi)",
    nicknames: ["Jessie of Team Rocket", "The Rocket Dame", "Queen of Drama"],
    gender: "Female",
    occupation: "Team Rocket Agent / Coordinator",
    role: "Villain",
    firstAppearance: "Pokémon Yellow (1998) / Anime Episode 2 (1997)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Wandering Kanto / Johto",
    biography: {
      background: "Jessie is a dramatic and high-profile field agent of Team Rocket's special operations unit, traveling alongside her partners James and Meowth in their quest to capture rare Pokémon.",
      personality: "Hot-tempered, dramatic, vanity-driven, but secretly fiercely loyal to her trio companions and highly competitive in Pokémon Showcase contests.",
      storyProgression: "Ambushed the player in Mt. Moon, Silph Co., and Pokémon Tower to steal rare fossils and items.",
      characterDevelopment: "Matured from a generic corporate crook into a multi-talented coordinator, finding her secondary calling in Sinnoh/Kalos Contests.",
      goals: "To capture Pikachu for Giovanni and become Kanto's most famous coordinator star.",
      motivations: "The pursuit of luxury, fame, and proving her talent to the Rocket headquarters."
    },
    team: [
      {
        id: 24,
        name: "Arbok",
        level: 40,
        types: ["poison"],
        ability: "Shed Skin",
        nature: "Adamanat",
        moves: ["Poison Fang", "Gunk Shot", "Crunch", "Glare"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Mt. Moon Ambush",
        status: "Active Ace"
      },
      {
        id: 202,
        name: "Wobbuffet",
        level: 38,
        types: ["psychic"],
        ability: "Shadow Tag",
        nature: "Bold",
        moves: ["Counter", "Mirror Coat", "Safeguard", "Destiny Bond"],
        heldItem: "Leftovers",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Johto swap",
        status: "Active Shield"
      }
    ],
    timeline: [
      {
        title: "Mt. Moon Raid",
        desc: "Ambushes the player inside Mt. Moon attempting to extract rare fossils.",
        media: "game",
        chronology: "Year 0"
      },
      {
        title: "Contest Queen",
        desc: "Performs under the pseudonym 'Jessilina' in Sinnoh, winning multiple Contest Ribbons.",
        media: "anime",
        chronology: "Year 4"
      }
    ],
    relationships: [
      {
        charId: "james",
        charName: "James",
        type: "teammate",
        desc: "Her loyal companion and partner-in-crime. Their bond survives all explosions and failed plans."
      },
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "student",
        desc: "Her ultimate boss, whom she desperately tries to impress with rare captures."
      }
    ],
    battleRecord: {
      wins: "40.0%",
      losses: "60.0%",
      championships: ["Sinnoh Contest Ribbon Holder"],
      badges: [],
      tournaments: [],
      majorBattles: [
        {
          opponent: "Red",
          result: "loss",
          eventName: "Silph Co. Security Breach",
          details: "Defeated easily by Red's high-speed Pikachu sweeps."
        }
      ]
    },
    appearanceGallery: [
      {
        title: "Rocket Uniform",
        description: "Classic custom black short-sleeved Rocket uniform with long, curved magenta hair.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/da/Lets_Go_Pikachu_Eevee_Jessie_James.png"
      }
    ],
    voiceActors: {
      english: "Rachael Lillis / Michele Knotz",
      japanese: "Megumi Hayashibara"
    },
    music: {
      characterTheme: "Jessie and James Double Theme",
      battleTheme: "Battle! VS Team Rocket Trio"
    },
    quotes: [
      "Prepare for trouble!",
      "To protect the world from devastation!",
      "Arbok! Poison sting, now!"
    ],
    trivia: [
      "Jessie's mother, Miyamoto, was a high-ranking Rocket agent who vanished in the Andes while searching for the legendary Mew.",
      "She has worked as a nurse assistant at a Chansey Academy in her youth."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Saffron City", "Sinnoh Region"],
      journeyPath: ["Pallet Town -> Mt. Moon -> Saffron Silph Co. -> Lavender Tower"]
    },
    aiAnalysis: {
      personalityAnalysis: "Jessie is an ESTJ with a strong dramatic streak, relying on aggressive direct physical strikes and counter trap cards.",
      teamAnalysis: "Arbok provides direct toxic offense, while Wobbuffet relies on Shadow Tag to trap and counter physical/special sweeps.",
      strengthRadar: {
        tacticalSkill: 70,
        willpower: 95,
        empathy: 75,
        rawPower: 78,
        adaptability: 84
      },
      battleStrategySummary: "Do not attack Wobbuffet directly with high-damage moves unless you are sure of a KO. Use status conditions like Toxic or Burn to bypass Counter/Mirror Coat."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "james",
    name: "James",
    japaneseName: "コジロウ (Kojiro)",
    nicknames: ["James of Team Rocket", "The Rocket Gentleman", "Bottle Cap Collector"],
    gender: "Male",
    occupation: "Team Rocket Agent",
    role: "Villain",
    firstAppearance: "Pokémon Yellow (1998) / Anime Episode 2 (1997)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City foothills",
    currentLocation: "Wandering Kanto / Johto",
    biography: {
      background: "James is a theatrical and surprisingly gentle field agent of Team Rocket, having escaped his wealthy aristocratic family to seek absolute freedom with his trio companions.",
      personality: "Polite, dramatic, highly emotional, and deeply caring toward his Pokémon, which often show their affection by biting his head when summoned.",
      storyProgression: "Coordinated fossils extraction and Silph Co. hijackings with Jessie and Meowth.",
      characterDevelopment: "Discovered true happiness in his eccentric street lifestyle, rejecting millions of inheritance dollars to defend his friends.",
      goals: "To support Jessie and capture Pikachu, while maintaining the ultimate collection of rare bottle caps.",
      motivations: "Freedom, friendship, and the joy of simple, high-bond companionship."
    },
    team: [
      {
        id: 110,
        name: "Weezing",
        level: 40,
        types: ["poison"],
        ability: "Levitate",
        nature: "Docile",
        moves: ["Smog", "Sludge Bomb", "Double Hit", "Explosion"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 2",
        status: "Active Ace"
      },
      {
        id: 71,
        name: "Victreebel",
        level: 38,
        types: ["grass", "poison"],
        ability: "Chlorophyll",
        nature: "Brave",
        moves: ["Leaf Blade", "Razor Leaf", "Poison Powder", "Sweet Scent"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cinnabar Greenhouse swap",
        status: "Active (Affectionate)"
      }
    ],
    timeline: [
      {
        title: "Aristocratic Escape",
        desc: "James runs away from his mansion to avoid an arranged marriage with Jessiebelle.",
        media: "anime",
        chronology: "Year -5"
      }
    ],
    relationships: [
      {
        charId: "jessie",
        charName: "Jessie",
        type: "teammate",
        desc: "His brilliant and fiery partner. He accepts her outbursts and stands by her through thick and thin."
      }
    ],
    battleRecord: {
      wins: "38.0%",
      losses: "62.0%",
      championships: ["Elite Bottle Cap Collector"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Rocket Attire",
        description: "Classic custom black short-sleeved Rocket uniform with neat blue-green hair.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/da/Lets_Go_Pikachu_Eevee_Jessie_James.png"
      }
    ],
    voiceActors: {
      english: "Ted Lewis / Eric Stuart / Carter Cathcart",
      japanese: "Shin-ichiro Miki"
    },
    music: {
      characterTheme: "Jessie and James Double Theme",
      battleTheme: "Battle! VS Team Rocket Trio"
    },
    quotes: [
      "And make it double!",
      "To unite all peoples within our nation!",
      "Weezing, Smog screen now!"
    ],
    trivia: [
      "James has a childhood pet Growlithe named Growlie, who still resides in his luxurious family mansion.",
      "He is a passionate collector of metal bottle caps, cataloging them in rare, customized cases."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Cinnabar Island", "Sinnoh Region"],
      journeyPath: ["Pallet Town -> Mt. Moon -> Saffron Silph Co. -> Lavender Tower"]
    },
    aiAnalysis: {
      personalityAnalysis: "James is an ISFP, operating with deep emotional investment, loyalty, and aesthetic appreciation for simple hobbies.",
      teamAnalysis: "Weezing provides chemical toxic coverage, while Victreebel applies close-range grass trapping capabilities.",
      strengthRadar: {
        tacticalSkill: 65,
        willpower: 90,
        empathy: 98,
        rawPower: 75,
        adaptability: 86
      },
      battleStrategySummary: "Exploit Victreebel's dual Poison typing with Ground or Psychic attacks. Levitate protects Weezing from Ground-type moves."
    },
    popularityRank: 2,
    generation: 1
  },
  {
    id: "celio",
    name: "Celio",
    japaneseName: "ニシキ (Nishiki)",
    nicknames: ["The Island Programmer", "Sevii Network Specialist"],
    gender: "Male",
    occupation: "Network Machine Developer",
    role: "NPC",
    firstAppearance: "Pokémon FireRed & LeafGreen (2004)",
    latestAppearance: "Pokémon FireRed & LeafGreen (2004)",
    region: "Kanto",
    hometown: "One Island",
    currentLocation: "One Island Network Center",
    biography: {
      background: "Celio is a brilliant programmer residing in the Sevii Islands, managing the high-tech Network Center on One Island.",
      personality: "Shy, highly focused, incredibly hard-working, and shares a deep technical friendship with Bill.",
      storyProgression: "Assists the player in connecting the Sevii Islands network with the Kanto PC Storage System, requiring the legendary Ruby and Sapphire gems.",
      characterDevelopment: "Successfully bridged the technical gap between Kanto and Hoenn storage databases, allowing cross-region data transfers.",
      goals: "To create a seamless, infinite data transmission network across all Pokémon regions.",
      motivations: "His deep technical friendship with Bill and his passion for server networking."
    },
    team: [
      {
        id: 97,
        name: "Hypno",
        level: 42,
        types: ["psychic"],
        ability: "Insomnia",
        nature: "Calm",
        moves: ["Psychic", "Hypnosis", "Dream Eater", "Meditate"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Berry Forest",
        status: "Active Companion"
      }
    ],
    timeline: [
      {
        title: "Network Breakthrough",
        desc: "Successfully launches the Kanto-Hoenn Network Machine with the player's assistance.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "bill",
        charName: "Bill",
        type: "friend",
        desc: "His coding idol and colleague. They developed the regional storage bridge together."
      }
    ],
    battleRecord: {
      wins: "45.0%",
      losses: "55.0%",
      championships: ["Sevii Network Pioneer"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Network Center Look",
        description: "Green striped shirt, round glasses, and a headset, looking deeply engaged in servers.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/FRLG_Celio.png"
      }
    ],
    voiceActors: {
      english: "Marc Thompson",
      japanese: "Kazuya Nakai"
    },
    music: {
      characterTheme: "One Island Network Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Bill's PC system is a masterpiece! I'm trying to make it run across regions.",
      "The Network Machine is fully active! We can communicate with Hoenn now!"
    ],
    trivia: [
      "Celio gets extremely flustered if the player interrupts him while he is coding backend system interfaces.",
      "He lives in an isolated server room surrounded by multiple computer consoles on One Island."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["One Island", "Three Island", "Goldenrod City"],
      journeyPath: ["One Island Network Center"]
    },
    aiAnalysis: {
      personalityAnalysis: "Celio is an INTP, dedicating his entire cognitive energy to backend infrastructure and network synchronization.",
      teamAnalysis: "Hypno assists him with server cooling calculations and prevents insomnia during intense coding sessions.",
      strengthRadar: {
        tacticalSkill: 65,
        willpower: 78,
        empathy: 84,
        rawPower: 55,
        adaptability: 90
      },
      battleStrategySummary: "Deploy fast Dark or Ghost types to bypass Hypno's high special defense and quickly end the battle."
    },
    popularityRank: 7,
    generation: 3
  },
  {
    id: "mr_fuji",
    name: "Mr. Fuji",
    japaneseName: "フジ老人 (Fuji Rōjin)",
    nicknames: ["Dr. Fuji", "The Mewtwo Creator", "Lavender Orphanage Founder"],
    gender: "Male",
    occupation: "Orphanage Founder / Former Gene Scientist",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Cinnabar Island",
    currentLocation: "Lavender Town (Volunteer House)",
    biography: {
      background: "Mr. Fuji is a kindly old man residing in Lavender Town who founded the Volunteer House to care for orphaned and injured Pokémon. In his youth, as Dr. Fuji, he was a premier geneticist who founded the Cinnabar Lab and engineered the legendary Mewtwo.",
      personality: "Gentle, sorrowful, deeply repentant of his scientific past, and dedicates his remaining years to restoring peace to mistreated Pokémon.",
      storyProgression: "Held hostage by Team Rocket at the apex of the Saffron-influenced Pokémon Tower while praying for the ghost of Marowak. He rewards the player with the Poké Flute.",
      characterDevelopment: "Permanently abandoned his cloning research, seeking complete spiritual absolution in Lavender Town's peaceful volunteer work.",
      goals: "To heal the spirits of Lavender's departed Pokémon and protect orphans.",
      motivations: "Repentance for creating Mewtwo and maternal comfort for orphaned Cubones."
    },
    team: [
      {
        id: 115,
        name: "Kangaskhan",
        level: 45,
        types: ["normal"],
        ability: "Early Bird",
        nature: "Gentle",
        moves: ["Dizzy Punch", "Protect", "Substitute", "Sing"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cinnabar Island Lab",
        status: "Housekeeper Guardian"
      }
    ],
    timeline: [
      {
        title: "Creation of Mewtwo",
        desc: "Under Giovanni's funding, clones Mew's DNA to create the ultimate psychic weapon on Cinnabar.",
        media: "game",
        chronology: "Year -10"
      },
      {
        title: "Lavender Relocation",
        desc: "Abandons research after the Cinnabar mansion explosion, adopting the name Mr. Fuji to serve orphans.",
        media: "game",
        chronology: "Year -8"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "enemy",
        desc: "His former employer who weaponized his genetic breakthroughs, leading to Fuji's complete scientific exile."
      },
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "friend",
        desc: "His long-time colleague who shares his concern for Pallet/Lavender welfare."
      }
    ],
    battleRecord: {
      wins: "50.0%",
      losses: "50.0%",
      championships: ["Founder of Cinnabar Laboratories"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Lavender Elder",
        description: "Kind-faced elderly man in a dark green vest, spectacles, and gray trousers.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/2/23/Lets_Go_Pikachu_Eevee_Mr_Fuji.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Momomu Hase / Tomomichi Nishimura"
    },
    music: {
      characterTheme: "Lavender Volunteer House Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Please... we must treat all Pokémon with love and warm kindness.",
      "The Poké Flute can awaken any sleeping Pokémon. Use it to pave your way."
    ],
    trivia: [
      "Fuji's scientific journals can still be read inside the ruined Cinnabar Mansion, describing Mew's pregnancy and Mewtwo's escape.",
      "He is the original creator of the Poké Flute, using traditional woodwind resonance."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Cinnabar Island", "Lavender Town", "Guyana Jungle"],
      journeyPath: ["Cinnabar Island -> Lavender Town Volunteer House"]
    },
    aiAnalysis: {
      personalityAnalysis: "Mr. Fuji is an INFJ, guided by a deep internal moral compass, immense quiet remorse, and an absolute defense of the vulnerable.",
      teamAnalysis: "His Kangaskhan is highly protective, serving as a motherly companion to the volunteer center's orphan Cubones.",
      strengthRadar: {
        tacticalSkill: 95,
        willpower: 90,
        empathy: 100,
        rawPower: 60,
        adaptability: 88
      },
      battleStrategySummary: "Fuji will never initiate a battle. If tested, his Kangaskhan relies on protect stalls to secure peace."
    },
    popularityRank: 3,
    generation: 1
  },
  {
    id: "fuji_volunteer",
    name: "Fuji's House Volunteer",
    japaneseName: "ボランティアの少女 (Borantia no Shōjo)",
    nicknames: ["Lavender Volunteer Girl"],
    gender: "Female",
    occupation: "Volunteer Assistant",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Lavender Town",
    currentLocation: "Lavender Town (Volunteer House)",
    biography: {
      background: "This dedicated girl helps Mr. Fuji manage the Pokémon Volunteer House, taking special care of the orphaned Cubone whose mother was lost in the Saffron conflict.",
      personality: "Compassionate, hardworking, quiet, and deeply saddened by Team Rocket's mistreatment of Pokémon.",
      storyProgression: "Informs the player about Mr. Fuji's sudden capture at the Pokémon Tower, begging them to save him.",
      characterDevelopment: "Became a sturdy local assistant, ensuring Lavender's orphans remain perfectly healthy.",
      goals: "To restore happiness to Lavender's orphaned Pokémon.",
      motivations: "The soft, healing smile of a recovering Cubone."
    },
    team: [
      {
        id: 104,
        name: "Cubone",
        level: 20,
        types: ["ground"],
        ability: "Lightning Rod",
        nature: "Lonely",
        moves: ["Bone Club", "Growl", "Tail Whip", "Headbutt"],
        heldItem: "Thick Club",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Lavender Volunteer House",
        status: "Adopted Companion"
      }
    ],
    timeline: [
      {
        title: "Cubone Care",
        desc: "Successfully stabilizes the emotional trauma of the orphaned Lavender Cubone.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "mr_fuji",
        charName: "Mr. Fuji",
        type: "mentor",
        desc: "Her beloved mentor who taught her how to care for injured Pokémon."
      }
    ],
    battleRecord: {
      wins: "30.0%",
      losses: "70.0%",
      championships: [],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Volunteer Look",
        description: "Lavender blouse, blue trousers, and a clean apron.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/2/23/Lets_Go_Pikachu_Eevee_Mr_Fuji.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Keiko Han"
    },
    music: {
      characterTheme: "Lavender Volunteer House Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Team Rocket took Mr. Fuji away! Please help him in the Pokémon Tower!",
      "Cubone is feeling a little bit better today, thanks to Mr. Fuji's prayers."
    ],
    trivia: [
      "She coordinates donations of clean blankets and berries from Celadon City to support the orphanage.",
      "She will heal the player's Pokémon if they speak to her after rescuing Mr. Fuji."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Lavender Town"],
      journeyPath: ["Lavender Volunteer House"]
    },
    aiAnalysis: {
      personalityAnalysis: "She is an ISFJ, placing her entire focus on maternal quiet care and local volunteer coordination.",
      teamAnalysis: "Her Cubone is emotionally attached to her, using its bone club defensively to protect her from intruders.",
      strengthRadar: {
        tacticalSkill: 50,
        willpower: 80,
        empathy: 100,
        rawPower: 55,
        adaptability: 72
      },
      battleStrategySummary: "Does not participate in battles. Cubone can use Bone Club if absolutely required to fend off thieves."
    },
    popularityRank: 7,
    generation: 1
  },
  {
    id: "copycat",
    name: "Copycat",
    japaneseName: "モノマネむすめ (Monomane Musume)",
    nicknames: ["The Mimic Girl", "Copycat Saffron"],
    gender: "Female",
    occupation: "Doll Collector / Mimic Artist",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Saffron City (Copycat Residence)",
    biography: {
      background: "Copycat is an eccentric Saffron City resident who has an absolute obsession with mimicking other people's words, styles, and expressions.",
      personality: "Playful, hyperactive, mimicry-driven, and completely surrounded by an enormous collection of cute Pokémon dolls.",
      storyProgression: "Offers the player the legendary Mimic TM/Move Tutor in exchange for a rare Poké Doll.",
      characterDevelopment: "Became Saffron's premier theatrical enthusiast, occasionally mimicking famous champions like Red or Cynthia.",
      goals: "To build Kanto's ultimate doll collection and master the art of mimicry.",
      motivations: "The pure joy of play and cute plushie decorations."
    },
    team: [
      {
        id: 85,
        name: "Dodrio",
        level: 30,
        types: ["normal", "flying"],
        ability: "Run Away",
        nature: "Naive",
        moves: ["Mimic", "Tri Attack", "Drill Peck", "Agility"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 16",
        status: "Mimic Partner"
      }
    ],
    timeline: [
      {
        title: "Lost Doll Restored",
        desc: "Receives her lost Clefairy Doll from the player, rewarding them with the Mimic TM.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "She loves mimicking Red's signature silent gaze '...' which she thinks is incredibly cool."
      }
    ],
    battleRecord: {
      wins: "55.0%",
      losses: "45.0%",
      championships: ["Saffron Mimic Master"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Mimic Dress",
        description: "Colorful puff-sleeved dress, holding a plush Clefairy doll with dynamic braids.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/d3/Lets_Go_Pikachu_Eevee_Copycat.png"
      }
    ],
    voiceActors: {
      english: "Sarah Natochenny",
      japanese: "Ayaka Asai"
    },
    music: {
      characterTheme: "Copycat's Playful Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Hi! Do you like Pokémon? No, I asked you first!",
      "I love mimicking! It's like looking into a magical mirror!"
    ],
    trivia: [
      "Her room features custom posters of Clefairy and Chansey, and a complete set of retro gaming consoles.",
      "In Gen 2, her house is demolished to make room for the Magnet Train station, forcing her family to relocate nearby."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Saffron City", "Vermilion City"],
      journeyPath: ["Saffron City Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "Copycat is an ENFP, thriving on interactive mimicry, spontaneous play, and colorful room decorations.",
      teamAnalysis: "Her Dodrio is trained to use Mimic, reflecting the opponent's own attacks right back at them.",
      strengthRadar: {
        tacticalSkill: 75,
        willpower: 70,
        empathy: 92,
        rawPower: 65,
        adaptability: 100
      },
      battleStrategySummary: "Dodrio will copy your first attack. Use a setup move first to force Dodrio into copying a non-offensive strategy."
    },
    popularityRank: 5,
    generation: 1
  },
  {
    id: "safari_warden",
    name: "Safari Zone Warden (Kaito)",
    japaneseName: "園長 (Enchō)",
    nicknames: ["Slowpoke Warden", "Warden Slowpoke", "The Teethless Warden"],
    gender: "Male",
    occupation: "Safari Zone Warden",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Fuchsia City",
    currentLocation: "Fuchsia City (Warden Residence)",
    biography: {
      background: "Warden Kaito manages Kanto's sprawling Safari Zone in Fuchsia City, maintaining habitats for rare wild Pokémon.",
      personality: "Slightly clumsy, forgetful, but deeply passionate about wildlife preservation. He famously speaks in slurred mumbling because he lost his Gold Teeth in the Safari Zone.",
      storyProgression: "The player must retrieve his Gold Teeth from the Safari Zone. Once restored, he rewards them with the Strength HM (or Secret Technique Strong Push).",
      characterDevelopment: "Collaborated with Sinnoh's Great Marsh wardens to exchange ecological preservation strategies.",
      goals: "To preserve Fuchsia's diverse wild habitats and protect rare species.",
      motivations: "The ecological balance of Kanto's pristine wilderness."
    },
    team: [
      {
        id: 79,
        name: "Slowpoke",
        level: 30,
        types: ["water", "psychic"],
        ability: "Own Tempo",
        nature: "Relaxed",
        moves: ["Yawn", "Water Pulse", "Confusion", "Slack Off"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Safari Zone Lakes",
        status: "Office Companion"
      }
    ],
    timeline: [
      {
        title: "Safari Preservation",
        desc: "Secures international protection status for Fuchsia's rare Pokémon reserve.",
        media: "game",
        chronology: "Year -5"
      }
    ],
    relationships: [
      {
        charId: "koga",
        charName: "Koga",
        type: "friend",
        desc: "His neighbor and Fuchsia Gym Leader. They coordinate security boundaries to keep trainers safe."
      }
    ],
    battleRecord: {
      wins: "40.0%",
      losses: "60.0%",
      championships: ["Chief Wildlife Officer"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Warden Uniform",
        description: "Safari hat, tan vest, cargo shorts, and a big, happy grin once his gold teeth are returned.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/8/87/Lets_Go_Pikachu_Eevee_Warden.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Tomomichi Nishimura"
    },
    music: {
      characterTheme: "Fuchsia City Safari Melody",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Hif fuff hef huff! (I lost my Gold Teeth! Please find them!)",
      "Thank you! Now I can speak clearly! Take this Strength technique!"
    ],
    trivia: [
      "In Let's Go, he teaches the player the 'Strong Push' Secret Technique instead of giving them a traditional HM.",
      "He keeps multiple rare fossil replicas and conservation logs inside his Fuchsia residence."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Fuchsia City", "Sinnoh Region"],
      journeyPath: ["Fuchsia City Safari Zone"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Warden is an ISFP, characterized by a quiet connection to nature, slightly eccentric domestic habits, and immense animal empathy.",
      teamAnalysis: "His Slowpoke perfectly matches his own relaxed, slightly slow-moving approach to administrative work.",
      strengthRadar: {
        tacticalSkill: 55,
        willpower: 72,
        empathy: 98,
        rawPower: 50,
        adaptability: 68
      },
      battleStrategySummary: "Does not battle. Slowpoke can yawn to put aggressive challengers immediately to sleep."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "fan_club_chairman",
    name: "Pokémon Fan Club Chairman",
    japaneseName: "かいちょう (Kaichō)",
    nicknames: ["The Fan Club President", "Rapidash Admirer"],
    gender: "Male",
    occupation: "Fan Club Chairman",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Vermilion City",
    currentLocation: "Vermilion City (Fan Club)",
    biography: {
      background: "The Chairman is the hyper-enthusiastic leader of Kanto's official Pokémon Fan Club based in Vermilion City.",
      personality: "Incredibly talkative, dramatic, obsessed with praising the physical beauty of his favorite Pokémon (Rapidash and Fearow), and loves boasting to anyone who will listen.",
      storyProgression: "If the player listens patiently to his incredibly long monologue about his Rapidash, he rewards them with a Bike Voucher.",
      characterDevelopment: "Expanded the fan club network to Johto, establishing a sister branch in Goldenrod City.",
      goals: "To spread absolute appreciation for the aesthetic perfection of Pokémon.",
      motivations: "The majestic mane of Rapidash and the grand wings of Fearow."
    },
    team: [
      {
        id: 78,
        name: "Rapidash",
        level: 35,
        types: ["fire"],
        ability: "Run Away",
        nature: "Jolly",
        moves: ["Fire Spin", "Agility", "Take Down", "Ember"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Vermilion Fields",
        status: "Majestic Companion"
      }
    ],
    timeline: [
      {
        title: "Vermilion Branch Launch",
        desc: "Founds Kanto's premier Pokémon appreciation society, hosting daily discussion panels.",
        media: "game",
        chronology: "Year -10"
      }
    ],
    relationships: [
      {
        charId: "lt-surge",
        charName: "Lt. Surge",
        type: "friend",
        desc: "His neighbor. They frequently debate the artistic value of Electric-types vs Fire-types."
      }
    ],
    battleRecord: {
      wins: "35.0%",
      losses: "65.0%",
      championships: ["President of Pokémon Appreciation"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Chairman Attire",
        description: "Elegant formal suit, neat mustache, and a pocket watch, gesturing grandly.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/bd/Lets_Go_Pikachu_Eevee_Fan_Club_Chairman.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Kazuya Nakai"
    },
    music: {
      characterTheme: "Vermilion Fan Club March",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Did you hear about my majestic Rapidash? It is so beautiful, smart, and completely magnificent!",
      "You listened to me so patiently! Take this Bike Voucher!"
    ],
    trivia: [
      "His monologues can exceed 1000 words in length, focusing heavily on grooming details and hoof styling.",
      "He keeps a collection of rare regional plush dolls inside the Vermilion Fan Club cabinet."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Vermilion City", "Goldenrod City"],
      journeyPath: ["Vermilion City Fan Club House"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Chairman is an ESFJ, driven by an intense desire to share aesthetic experiences and connect with other enthusiasts.",
      teamAnalysis: "Rapidash is highly pampered and trained for elegance, possessing outstanding speed and majestic visual flair.",
      strengthRadar: {
        tacticalSkill: 50,
        willpower: 65,
        empathy: 95,
        rawPower: 60,
        adaptability: 70
      },
      battleStrategySummary: "Avoids combat. Rapidash will use Agility and Fire Spin to put on a visual show rather than knock out opponents."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "old_man_viridian",
    name: "Old Man (Viridian)",
    japaneseName: "おじいさん (Ojiisan)",
    nicknames: ["Viridian Tutorial Elder", "The Grumpy Coffee Man"],
    gender: "Male",
    occupation: "Retired Trainer",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Viridian City",
    currentLocation: "Viridian City (Route 2 gate)",
    biography: {
      background: "This grumpy retired trainer famously blocks the northern exit of Viridian City, refusing to let anyone pass until he has had his morning espresso.",
      personality: "Irritable when uncaffeinated, but turns extremely helpful and polite once energized, taking pride in teaching rookies how to catch Pokémon.",
      storyProgression: "Initially blocks Route 2. Once caffeinated, he demonstrates how to capture a Weedle, gifting the player the Teachy TV (or a custom capture guide).",
      characterDevelopment: "Became Viridian's official resident trainer guide, assisting generations of Pallet Town beginners.",
      goals: "To enjoy his retirement and teach young trainers the absolute basics of capture timing.",
      motivations: "A warm cup of coffee and watching rookies succeed."
    },
    team: [
      {
        id: 13,
        name: "Weedle",
        level: 5,
        types: ["bug", "poison"],
        ability: "Shield Dust",
        nature: "Docile",
        moves: ["Poison Sting", "String Shot"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Route 2",
        status: "Capture Demonstration Partner"
      }
    ],
    timeline: [
      {
        title: "Tutorial Show",
        desc: "Demonstrates a flawless capture of a wild Weedle to the player.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "friend",
        desc: "His old friend. They often discuss beginner trainer demographics in Viridian."
      }
    ],
    battleRecord: {
      wins: "30.0%",
      losses: "70.0%",
      championships: ["Viridian Guide Emeritus"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Viridian Casual",
        description: "Retired country clothing, gray cap, and a walking stick.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/f/f3/Lets_Go_Pikachu_Eevee_Old_Man.png"
      }
    ],
    voiceActors: {
      english: "James Carter Cathcart",
      japanese: "Koji Ishii"
    },
    music: {
      characterTheme: "Viridian City Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "I absolutely cannot move until I've had my warm coffee!",
      "Look closely! This is how you throw a Pokéball to capture a Pokémon!"
    ],
    trivia: [
      "In the English localizations of the original games, he is said to be grumpy due to a lack of coffee, whereas in Japanese he is passed out drunk on the road.",
      "His Weedle is famously used in the Teachy TV instructions in FireRed and LeafGreen."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Viridian City", "Pewter City"],
      journeyPath: ["Viridian City northern path"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Old Man is an ISTJ, prioritizing structural basics, daily routines, and retired leisure.",
      teamAnalysis: "Weedle is purely a training partner, used to demonstrate basic capture mechanics to Pallet rookies.",
      strengthRadar: {
        tacticalSkill: 40,
        willpower: 60,
        empathy: 75,
        rawPower: 25,
        adaptability: 50
      },
      battleStrategySummary: "Will not engage in trainer battles. Weedle is only capable of basic Poison Sting harassment."
    },
    popularityRank: 5,
    generation: 1
  },
  {
    id: "name_rater",
    name: "Name Rater",
    japaneseName: "せいめいはんだんし (Seimei Handanshi)",
    nicknames: ["The Nickname Judge", "Lavender Name Evaluator"],
    gender: "Male",
    occupation: "Pokémon Name Evaluator",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Lavender Town",
    currentLocation: "Lavender Town",
    biography: {
      background: "The Name Rater is a gentle linguist residing in Lavender Town who evaluates the nicknames of Pokémon to ensure they match their true inner spirit.",
      personality: "Eccentric, passionate about phonetics, and highly polite.",
      storyProgression: "Offers to rename any Pokémon caught by the player, refusing to modify traded Pokémon out of respect for their original trainers.",
      characterDevelopment: "Formed a regional Name Raters Association, coordinating naming styles across Johto and Hoenn.",
      goals: "To ensure every Pokémon carries a name that perfectly harmonizes with its soul.",
      motivations: "The linguistic beauty and emotional resonance of names."
    },
    team: [
      {
        id: 63,
        name: "Abra",
        level: 15,
        types: ["psychic"],
        ability: "Synchronize",
        nature: "Quiet",
        moves: ["Teleport", "Hidden Power"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Route 24",
        status: "Linguistic Helper"
      }
    ],
    timeline: [
      {
        title: "Name Evaluation Service",
        desc: "Establishes his name evaluation clinic in the heart of Lavender Town.",
        media: "game",
        chronology: "Year -15"
      }
    ],
    relationships: [
      {
        charId: "mr_fuji",
        charName: "Mr. Fuji",
        type: "friend",
        desc: "His neighbor in Lavender. They frequently share quiet tea and discuss Pokémon happiness."
      }
    ],
    battleRecord: {
      wins: "25.0%",
      losses: "75.0%",
      championships: ["President of regional Name Raters"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Evaluator Officewear",
        description: "Elegant green traditional robes, glasses, and a neat white beard.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/4/4b/Lets_Go_Pikachu_Eevee_Name_Rater.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Kazuya Nakai"
    },
    music: {
      characterTheme: "Lavender Town Melody",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "I am the official Name Rater! I evaluate nicknames!",
      "That is a truly magnificent name! You should be proud!"
    ],
    trivia: [
      "In later generations, his services are digitized or handled by standard shop clerks.",
      "Traded Pokémon cannot be renamed because the name represents the original trainer's love."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Lavender Town", "Goldenrod City"],
      journeyPath: ["Lavender Town Name Clinic"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Name Rater is an INFJ, focusing on symbolic naming aesthetics and quiet linguistic harmony.",
      teamAnalysis: "His Abra helps him telepathically read the inner spirit of Pokémon to judge their name alignment.",
      strengthRadar: {
        tacticalSkill: 55,
        willpower: 70,
        empathy: 95,
        rawPower: 45,
        adaptability: 80
      },
      battleStrategySummary: "Does not participate in battles. Abra will immediately Teleport to safety if threatened."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "daycare_man",
    name: "Day-Care Man",
    japaneseName: "そだてやさん (Sodateyasan)",
    nicknames: ["Kanto Breeder", "Route 5 Daycare Man"],
    gender: "Male",
    occupation: "Pokémon Breeder",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Route 5 foothills",
    currentLocation: "Route 5 (Day-Care House)",
    biography: {
      background: "The Day-Care Man runs Kanto's original Pokémon Day-Care on Route 5, offering to raise trainers' Pokémon for a small fee.",
      personality: "Jolly, hardworking, loves infants and small Pokémon, and enjoys tending to his rural garden.",
      storyProgression: "Offers to raise one Pokémon at a time, charging 100 Pokédollars per level gained while in his care.",
      characterDevelopment: "Collaborated with the Johto Day-Care center to establish advanced Pokémon breeding and egg care guides.",
      goals: "To help busy trainers raise strong, happy Pokémon in a safe rural environment.",
      motivations: "The natural growth and playfulness of young Pokémon."
    },
    team: [
      {
        id: 132,
        name: "Ditto",
        level: 20,
        types: ["normal"],
        ability: "Limber",
        nature: "Docile",
        moves: ["Transform"],
        heldItem: "None",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Route 13",
        status: "Breeding Partner"
      }
    ],
    timeline: [
      {
        title: "Day-Care Founding",
        desc: "Opens Kanto's first residential Pokémon Day-Care on Route 5.",
        media: "game",
        chronology: "Year -20"
      }
    ],
    relationships: [
      {
        charId: "daycare_lady",
        charName: "Day-Care Lady",
        type: "family",
        desc: "His beloved wife, who runs the advanced Sevii Islands breeding center."
      }
    ],
    battleRecord: {
      wins: "35.0%",
      losses: "65.0%",
      championships: ["Master Breeder Certification"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Breeder Overalls",
        description: "Denim overalls, check shirt, and a wide-brimmed sunhat, holding a watering can.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/a/a7/Lets_Go_Pikachu_Eevee_Day-Care_Man.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Koji Ishii"
    },
    music: {
      characterTheme: "Route 5 Breeding Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "I run the Day-Care! Would you like me to raise one of your Pokémon?",
      "Your Pokémon has grown quite a lot! It looks very healthy!"
    ],
    trivia: [
      "In the original games, the Day-Care Man on Route 5 can only raise one Pokémon at a time, meaning breeding is not possible until Gen 2.",
      "He enjoys eating local berries from Cerulean City orchards."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Route 5", "Four Island"],
      journeyPath: ["Route 5 Day-Care Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "He is an ESFJ, showing nurturing, patient care for all growing Pokémon and maintaining supportive local ties.",
      teamAnalysis: "His Ditto can transform into any species, helping him understand the unique daily needs of diverse visiting Pokémon.",
      strengthRadar: {
        tacticalSkill: 50,
        willpower: 70,
        empathy: 99,
        rawPower: 50,
        adaptability: 85
      },
      battleStrategySummary: "Avoids combat. Ditto will transform into the opponent's lead to mirror their strategies defensively."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "daycare_lady",
    name: "Day-Care Lady",
    japaneseName: "そだてやばあさん (Sodateya Baasan)",
    nicknames: ["Four Island Breeder", "Daycare Lady"],
    gender: "Female",
    occupation: "Pokémon Breeder",
    role: "NPC",
    firstAppearance: "Pokémon Gold & Silver (1999) / FireRed & LeafGreen (2004)",
    latestAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    region: "Kanto",
    hometown: "Four Island",
    currentLocation: "Four Island",
    biography: {
      background: "The Day-Care Lady co-manages regional breeding operations with her husband, running the advanced Sevii Islands Day-Care on Four Island.",
      personality: "Warm, maternal, highly knowledgeable about Pokémon genetics, and loves discovering rare Eggs.",
      storyProgression: "Raises up to two Pokémon at once in the Sevii Day-Care, allowing trainers to breed and discover Eggs.",
      characterDevelopment: "Pioneered research on regional egg groups, helping trainers optimize their breeding chains.",
      goals: "To nurture the next generation of rare Pokémon and guide breeders.",
      motivations: "The exciting discovery of a newly laid Pokémon Egg."
    },
    team: [
      {
        id: 132,
        name: "Ditto",
        level: 25,
        types: ["normal"],
        ability: "Imposter",
        nature: "Relaxed",
        moves: ["Transform"],
        heldItem: "Destiny Knot",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Cerulean Cave",
        status: "Master Breeder Partner"
      }
    ],
    timeline: [
      {
        title: "Sevii Branch Opening",
        desc: "Establishes Kanto's first dual-breeding Day-Care on Four Island.",
        media: "game",
        chronology: "Year 0"
      }
    ],
    relationships: [
      {
        charId: "daycare_man",
        charName: "Day-Care Man",
        type: "family",
        desc: "His wife and professional partner, sharing a lifetime of breeding expertise."
      }
    ],
    battleRecord: {
      wins: "40.0%",
      losses: "60.0%",
      championships: ["Chief of Egg Research"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Maternal Dress",
        description: "Cozy maternal sweater, long skirt, and glasses, holding a warm Egg.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/a/a7/Lets_Go_Pikachu_Eevee_Day-Care_Man.png"
      }
    ],
    voiceActors: {
      english: "Erica Schroeder",
      japanese: "Hisako Kyoda"
    },
    music: {
      characterTheme: "Four Island Peaceful Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "We raise Pokémon together! We were shocked to find your Pokémon holding an Egg!",
      "Take good care of this Egg, and it will hatch into a wonderful companion!"
    ],
    trivia: [
      "She is the primary source of Eggs in FireRed/LeafGreen, as the Route 5 Day-Care cannot breed Pokémon.",
      "She keeps a custom greenhouse to nurture delicate eggs."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Four Island", "Route 34 Johto"],
      journeyPath: ["Four Island Day-Care Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "She is an ESFJ, radiating maternal warmth, organizational precision, and complete ecological dedication.",
      teamAnalysis: "Her Imposter Ditto can immediately mirror any challenger, ensuring any home defense is highly adaptive.",
      strengthRadar: {
        tacticalSkill: 55,
        willpower: 72,
        empathy: 100,
        rawPower: 50,
        adaptability: 90
      },
      battleStrategySummary: "Rarely battles. Ditto uses Imposter to immediately copy the opponent, catching them off-guard with their own tactics."
    },
    popularityRank: 6,
    generation: 2
  },
  {
    id: "mr_hyper",
    name: "Mr. Hyper",
    japaneseName: "すごいおやじ (Sugoi Oyaji)",
    nicknames: ["The Hyper Trainer", "Bottle Cap Expert"],
    gender: "Male",
    occupation: "Hyper Trainer",
    role: "NPC",
    firstAppearance: "Pokémon Sun & Moon (2016)",
    latestAppearance: "Pokémon Scarlet & Violet (2022)",
    region: "Alola",
    hometown: "Heahea City",
    currentLocation: "Fuchsia City",
    biography: {
      background: "Mr. Hyper is an eccentric training specialist who travels across regions offering Hyper Training in exchange for rare Bottle Caps.",
      personality: "Extremely loud, energetic, theatrical, and completely obsessed with unlocking the maximum genetic potential of Pokémon.",
      storyProgression: "Resides in Fuchsia City inside the Warden's house in Let's Go, training Level 100 Pokémon's Individual Values (IVs) to perfection.",
      characterDevelopment: "Expanded his hyper training gyms to Galar and Paldea, standardizing competitive training practices worldwide.",
      goals: "To unlock the ultimate physical and special limits of every Pokémon in existence.",
      motivations: "The glittering sheen of rare gold and silver Bottle Caps."
    },
    team: [
      {
        id: 127,
        name: "Pinsir",
        level: 50,
        types: ["bug"],
        ability: "Hyper Cutter",
        nature: "Adamant",
        moves: ["Guillotine", "Superpower", "X-Scissor", "Swords Dance"],
        heldItem: "Pinsirite",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Alola Battle Tree",
        status: "Hyper Partner"
      }
    ],
    timeline: [
      {
        title: "Hyper Gym Launch",
        desc: "Launches the first Hyper Training clinic in Alola's Shopping District.",
        media: "game",
        chronology: "Year 6"
      }
    ],
    relationships: [
      {
        charId: "safari_warden",
        charName: "Safari Zone Warden (Kaito)",
        type: "friend",
        desc: "His host in Kanto. They share stories about rare wildlife conservation."
      }
    ],
    battleRecord: {
      wins: "78.0%",
      losses: "22.0%",
      championships: ["Grandmaster of Hyper Training"],
      badges: [],
      tournaments: ["Alola Battle Royal Champion"],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Hyper Trainer Suit",
        description: "Bright gold jacket, star-shaped spectacles, and dynamic blue-and-gold boots, looking extremely theatrical.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/d/d4/Sun_Moon_Mr_Hyper.png"
      }
    ],
    voiceActors: {
      english: "Sean Schemmel",
      japanese: "Kenta Miyake"
    },
    music: {
      characterTheme: "Mr. Hyper's Theatrical March",
      battleTheme: "Battle! VS Trainer"
    },
    quotes: [
      "I am MR. HYPER! Give me a Bottle Cap and I will make your Pokémon HYPER STRONG!",
      "Unbelievable power! Your Pokémon's potential has officially hit the absolute apex!"
    ],
    trivia: [
      "Mr. Hyper is the only character who can perform Hyper Training, requiring Silver Bottle Caps for single stats or Gold Bottle Caps for all stats.",
      "His Pinsir can Mega Evolve into Mega Pinsir, gaining the Aerialate ability."
    ],
    regionInfo: {
      homeRegion: "Alola",
      placesVisited: ["Heahea City", "Fuchsia City", "Montenevera Paldea"],
      journeyPath: ["Heahea City -> Fuchsia City Warden Residence"]
    },
    aiAnalysis: {
      personalityAnalysis: "Mr. Hyper is an ESTP, operating with absolute physical energy, immediate results, and theatrical styling.",
      teamAnalysis: "Mega Pinsir utilizes Hyper Cutter to prevent physical attack drops, hitting with unmatched bug and flying force.",
      strengthRadar: {
        tacticalSkill: 88,
        willpower: 95,
        empathy: 80,
        rawPower: 96,
        adaptability: 85
      },
      battleStrategySummary: "Sweep immediately with Mega Pinsir's high-damage Guillotine or Swords Dance setup."
    },
    popularityRank: 5,
    generation: 7
  },
  {
    id: "gym_guide",
    name: "Gym Guide",
    japaneseName: "ジムのアドバイス (Jimu no Adobaisu)",
    nicknames: ["The Advice Guy", "Champ-in-the-making Guy"],
    gender: "Male",
    occupation: "Gym Guide / Coach",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Saffron City",
    currentLocation: "Kanto Gym Lobbies",
    biography: {
      background: "The Gym Guide is Kanto's most dedicated athletic coach, standing inside the lobby of every single Gym to provide critical advice and moral support to challengers.",
      personality: "Extremely encouraging, loud, professional, loves drinking sports sodas, and addresses every rookie as 'Champ-in-making!'.",
      storyProgression: "Stands near the entrance of every Gym, offering direct tactical advice regarding the Leader's type weaknesses and rewarding the player with Fresh Water.",
      characterDevelopment: "Became Kanto's official League Athletic Coordinator, standardizing safety and hydration guides for challengers.",
      goals: "To guide every promising rookie trainer to the apex of the Indigo League.",
      motivations: "Watching a determined young rookie raise a badge in victory."
    },
    team: [
      {
        id: 112,
        name: "Rhydon",
        level: 35,
        types: ["rock", "ground"],
        ability: "Lightning Rod",
        nature: "Brave",
        moves: ["Earthquake", "Rock Blast", "Hammer Arm", "Roar"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Cerulean Hills",
        status: "Active Partner"
      }
    ],
    timeline: [
      {
        title: "Coaching Career Launch",
        desc: "Joins the Indigo League as its chief athletic Gym Guide advisor.",
        media: "game",
        chronology: "Year -10"
      }
    ],
    relationships: [
      {
        charId: "brock",
        charName: "Brock",
        type: "friend",
        desc: "His neighbor in Pewter. They coordinate gym hydration guidelines together."
      }
    ],
    battleRecord: {
      wins: "60.0%",
      losses: "40.0%",
      championships: ["Indigo League Certified Guide"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Coaching Outfit",
        description: "Classic blue athletic jacket, sunglasses, and a clipboard, looking highly professional.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/3/3b/Lets_Go_Pikachu_Eevee_Gym_Guide.png"
      }
    ],
    voiceActors: {
      english: "Eric Stuart",
      japanese: "Kazuya Nakai"
    },
    music: {
      characterTheme: "Gym Guide's Encouraging Melody",
      battleTheme: "Battle! VS Trainer"
    },
    quotes: [
      "Yo! Champ-in-making!",
      "The Gym Leader here specializes in Rock-types! You should lead with a Water-type!"
    ],
    trivia: [
      "In the original games, the Gym Guide's names are carved on the Gym statues once the player defeats the respective Gym Leader.",
      "He carries an unlimited supply of Fresh Water to keep challengers perfectly hydrated."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pewter City", "Cerulean City", "Indigo Plateau"],
      journeyPath: ["All Kanto Gym Lobbies"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Gym Guide is an ESFJ, placing his entire professional focus on community encouragement, safety, and strategic routing.",
      teamAnalysis: "His Rhydon possesses immense physical durability, acting as a sturdy wall to secure gym lobbies from Rocket infiltrations.",
      strengthRadar: {
        tacticalSkill: 85,
        willpower: 88,
        empathy: 95,
        rawPower: 82,
        adaptability: 80
      },
      battleStrategySummary: "Does not participate in active battles, preferring to coach and strategize from the sidelines."
    },
    popularityRank: 4,
    generation: 1
  },
  {
    id: "oak_aide",
    name: "Professor Oak's Aide",
    japaneseName: "ジョシュ (Joshu)",
    nicknames: ["Research Assistant", "Oak's Aide"],
    gender: "Male",
    occupation: "Research Assistant",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Pallet Town",
    currentLocation: "Wandering Kanto Gates",
    biography: {
      background: "This diligent research assistant works directly under Professor Oak, tracking the progress of the player's Pokédex across Kanto's borders.",
      personality: "Academic, highly organized, slightly anxious, and obsessed with data collection.",
      storyProgression: "Stands inside route gates, rewarding the player with powerful items (like the Itemfinder, Exp. Share, or Rare Candies) once their caught count hits specific milestones.",
      characterDevelopment: "Became a chief lab supervisor in Pallet Town, digitizing Oak's physical research scrolls.",
      goals: "To ensure the Pokédex project compiles perfect, real-world data.",
      motivations: "The absolute precision of scholarly data tables."
    },
    team: [
      {
        id: 81,
        name: "Magnemite",
        level: 20,
        types: ["electric", "steel"],
        ability: "Sturdy",
        nature: "Quiet",
        moves: ["Thunder Shock", "Sonic Boom", "Magnet Rise", "Gyro Ball"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Power Plant",
        status: "Laboratory Helper"
      }
    ],
    timeline: [
      {
        title: "Lab Supervisor Appointment",
        desc: "Promoted to Oak's primary field research coordinator.",
        media: "game",
        chronology: "Year -2"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "mentor",
        desc: "His esteemed professor, whose academic guidelines he executes with perfection."
      }
    ],
    battleRecord: {
      wins: "40.0%",
      losses: "60.0%",
      championships: ["Indigo Lab Scholar Certification"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Scholarly Labcoat",
        description: "Crisp white labcoat, blue shirt, glasses, and a tablet device.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Lets_Go_Pikachu_Eevee_Chase.png"
      }
    ],
    voiceActors: {
      english: "Wayne Grayson",
      japanese: "Hiro Shimono"
    },
    music: {
      characterTheme: "Professor Oak's Laboratory",
      battleTheme: "Battle! VS Trainer"
    },
    quotes: [
      "I'm one of Professor Oak's Aides! If you have caught 30 species of Pokémon, I have a reward for you!",
      "Scholarly data is the true foundation of trainer success!"
    ],
    trivia: [
      "The Aide on Route 15 gives the legendary Exp. Share in FireRed and LeafGreen if the player has caught 50 species.",
      "He enjoys organizing reference scrolls in Saffron's public libraries."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Pallet Town", "Fuchsia City", "Vermilion City"],
      journeyPath: ["Kanto Route Gates"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Aide is an ISTJ, applying absolute procedural organization, metric tracking, and academic rules to his work.",
      teamAnalysis: "Magnemite helps him run database servers and acts as a compass during field operations.",
      strengthRadar: {
        tacticalSkill: 65,
        willpower: 70,
        empathy: 80,
        rawPower: 50,
        adaptability: 75
      },
      battleStrategySummary: "Avoids combat. Magnemite uses Sturdy and Thunder Shock to paralyze and delay attackers."
    },
    popularityRank: 6,
    generation: 1
  },
  {
    id: "magikarp_salesman",
    name: "Magikarp Salesman",
    japaneseName: "コイキング売り (Koiking Uri)",
    nicknames: ["The Scurrilous Salesman", "500 Pokédollar Guy"],
    gender: "Male",
    occupation: "Street Vendor / Con Artist",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon Let's Go Pikachu & Eevee (2018)",
    region: "Kanto",
    hometown: "Fuchsia City",
    currentLocation: "Route 4 Pokémon Center",
    biography: {
      background: "This notorious street vendor wanders Kanto and the Sevii Islands, conning rookie trainers into purchasing standard Magikarps wrapped in glowing, hyper-marketed packaging.",
      personality: "Scurrilous, hyperactive, smooth-talking, and highly deceptive, possessing an endless range of cheap sales pitches.",
      storyProgression: "Sells a single Magikarp to the player for 500 Pokédollars inside the Route 4 Pokémon Center near Mt. Moon. He later appears in Sevii Island centers selling more.",
      characterDevelopment: "Expanded his export business to Unova, famously conning trainers on Marvelous Bridge.",
      goals: "To get rich selling common aquatic species as mythical dragon ancestors.",
      motivations: "Quick, untraceable Pokédollars and the gullibility of rookie trainers."
    },
    team: [
      {
        id: 129,
        name: "Magikarp",
        level: 5,
        types: ["water"],
        ability: "Swift Swim",
        nature: "Docile",
        moves: ["Splash"],
        heldItem: "Golden Pokéball",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Route 4",
        status: "Sales Stock"
      }
    ],
    timeline: [
      {
        title: "Con Expansion",
        desc: "Successfully exports 500 packaged Magikarps to foreign markets, establishing an Unova shipping route.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "enemy",
        desc: "His primary target. He successfully conned Red's anime counterpart into buying a useless golden Magikarp."
      }
    ],
    battleRecord: {
      wins: "10.0%",
      losses: "90.0%",
      championships: ["Chief of Scurrilous Marketing"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Vendor Attire",
        description: "Red suspenders, a gold tooth, messy green hair, and a box of golden Pokéballs, looking highly suspicious.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/e/f4/Lets_Go_Pikachu_Eevee_Magikarp_Salesman.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Tomomichi Nishimura"
    },
    music: {
      characterTheme: "Salesman's Playful March",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Listen, kid! I have a highly secret, incredibly rare Pokémon just for you! Only 500 Pokédollars!",
      "It lays golden eggs! It's a gold mine, I tell ya! (Disclaimer: It is just a Magikarp.)"
    ],
    trivia: [
      "In the anime, he famously conned James into buying a Magikarp, which James later kicked in frustration, causing it to evolve into a terrifying Gyarados.",
      "The Magikarp he sells has perfect speed IVs in several Let's Go updates."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Route 4", "Unova Marvelous Bridge", "Resort Gorgeous"],
      journeyPath: ["Kanto Route 4 Pokémon Center"]
    },
    aiAnalysis: {
      personalityAnalysis: "The Salesman is an ESTP, relying on rapid-fire verbal styling, high-pressure pitching, and zero regulatory compliance.",
      teamAnalysis: "His Magikarp possesses zero competitive battle training, purely used as stock to con gullible rookies.",
      strengthRadar: {
        tacticalSkill: 30,
        willpower: 70,
        empathy: 10,
        rawPower: 10,
        adaptability: 95
      },
      battleStrategySummary: "Will immediately run away from any battle, using Smoke Balls or distracting sales pitches to escape."
    },
    popularityRank: 5,
    generation: 1
  },
  {
    id: "mr_game",
    name: "Mr. Game",
    japaneseName: "ゲームコーナーの親父 (Gēmu Kōnā no Oyaji)",
    nicknames: ["The Slot Master", "Celadon Game Corner Manager"],
    gender: "Male",
    occupation: "Game Corner Manager",
    role: "NPC",
    firstAppearance: "Pokémon Red & Green (1996)",
    latestAppearance: "Pokémon FireRed & LeafGreen (2004)",
    region: "Kanto",
    hometown: "Celadon City",
    currentLocation: "Celadon City",
    biography: {
      background: "Mr. Game manages the dazzling Celadon Game Corner, overseeing the coin exchanges and arcade operations, unaware (or bribed to ignore) that the basement hides Team Rocket's supreme headquarters.",
      personality: "Jolly, luxury-loving, slightly suspicious, and obsessed with casino token mechanics and prize exchange structures.",
      storyProgression: "Offers coin cases and coordinates token trades, allowing players to exchange slot coins for rare species like Porygon or Dratini.",
      characterDevelopment: "Relocated prize coordination networks to foreign game hubs after the Saffron-Rocket syndicate crackdown.",
      goals: "To maintain Celadon's most profitable entertainment hub.",
      motivations: "The glittering shine of casino tokens and administrative profit."
    },
    team: [
      {
        id: 52,
        name: "Meowth",
        level: 25,
        types: ["normal"],
        ability: "Technician",
        nature: "Jolly",
        moves: ["Pay Day", "Bite", "Furry Swipes", "Taunt"],
        heldItem: "Amulet Coin",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Celadon Outskirts",
        status: "Office Companion"
      }
    ],
    timeline: [
      {
        title: "Prize Network Launch",
        desc: "Establishes the Celadon Coin Exchange, introducing Porygon as the ultimate arcade prize.",
        media: "game",
        chronology: "Year -10"
      }
    ],
    relationships: [
      {
        charId: "giovanni",
        charName: "Giovanni",
        type: "enemy",
        desc: "His secret landlord. Giovanni utilized the Game Corner's basement as his high-tech Rocket vault."
      }
    ],
    battleRecord: {
      wins: "45.0%",
      losses: "55.0%",
      championships: ["Dean of Arcade Management"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Arcade Vest",
        description: "Bright gold waistcoat, clean bow tie, and red glasses, holding a bag of token coins.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/bd/Lets_Go_Pikachu_Eevee_Fan_Club_Chairman.png"
      }
    ],
    voiceActors: {
      english: "Mike Pollock",
      japanese: "Koji Ishii"
    },
    music: {
      characterTheme: "Celadon Game Corner Waltz",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Welcome to the Celadon Game Corner! Try your luck on our slot machines!",
      "You have enough coins for a Porygon? Outstanding! Take your prize!"
    ],
    trivia: [
      "In European releases of HGSS, the Game Corner was converted into a Voltorb Flip arcade due to changing gambling regulations.",
      "His Meowth loves collecting dropped coins from the slot machine aisles."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Celadon City", "Goldenrod City"],
      journeyPath: ["Celadon Game Corner Lobby"]
    },
    aiAnalysis: {
      personalityAnalysis: "Mr. Game is an ESTP, focusing his energy on high-turnover prize exchanges and gaming floor mathematics.",
      teamAnalysis: "His Meowth is optimized to use Pay Day, multiplying casino cash flow during slow business periods.",
      strengthRadar: {
        tacticalSkill: 55,
        willpower: 68,
        empathy: 70,
        rawPower: 50,
        adaptability: 92
      },
      battleStrategySummary: "Avoids combat. Meowth uses Pay Day to drop coins and distract challengers before running away."
    },
    popularityRank: 7,
    generation: 1
  },
  {
    id: "morimoto",
    name: "Morimoto",
    japaneseName: "モリモト (Morimoto)",
    nicknames: ["Game Freak Morimoto", "Shigeki Morimoto"],
    gender: "Male",
    occupation: "Game Designer / Special Boss",
    role: "NPC",
    firstAppearance: "Pokémon Black & White (2010)",
    latestAppearance: "Pokémon Scarlet & Violet (2022)",
    region: "Kanto",
    hometown: "Celadon City",
    currentLocation: "Celadon City",
    biography: {
      background: "Morimoto is a legendary game designer at Game Freak who cameos as an incredibly powerful secret post-game boss in several regions.",
      personality: "Cheerful, highly competitive, respectful, and loves testing the tactical limits of regional champions.",
      storyProgression: "Battles the player in Celadon City (Game Freak Office) in Let's Go Pikachu/Eevee after they become Champion, rewarding them with the Oval Charm.",
      characterDevelopment: "Served as the primary battle systems designer for the Pokémon games, standardizing Mew's physical coding.",
      goals: "To design perfect battle systems and test Kanto's toughest tactical masters.",
      motivations: "The pure joy of game design and high-level competitive battling."
    },
    team: [
      {
        id: 151,
        name: "Mew",
        level: 75,
        types: ["psychic"],
        ability: "Synchronize",
        nature: "Timid",
        moves: ["Psychic", "Blizzard", "Thunderbolt", "Nasty Plot"],
        heldItem: "Life Orb",
        evolutionStatus: "Fully Evolved",
        firstAppearance: "Game Freak Server",
        status: "Active Legendary Ace"
      }
    ],
    timeline: [
      {
        title: "Mew Coding",
        desc: "Morimoto secretly codes Mew into the original Red & Green cartridge space, creating a gaming legend.",
        media: "game",
        chronology: "Year -10"
      }
    ],
    relationships: [
      {
        charId: "red",
        charName: "Red",
        type: "friend",
        desc: "An esteemed champion whom he loves to battle post-game."
      }
    ],
    battleRecord: {
      wins: "92.0%",
      losses: "8.0%",
      championships: ["Game Freak Battle Director", "Legendary Developer Boss"],
      badges: [],
      tournaments: ["Game Freak Staff Tournament Winner"],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Developer Casual",
        description: "Classic black graphic t-shirt, cargo shorts, and glasses, gesturing with a console.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/8/85/Black_White_Morimoto.png"
      }
    ],
    voiceActors: {
      english: "Shigeki Morimoto",
      japanese: "Shigeki Morimoto"
    },
    music: {
      characterTheme: "Game Freak Office Theme",
      battleTheme: "Battle! VS Game Freak Morimoto"
    },
    quotes: [
      "Hi! I designed Kanto's battle systems! Let's see if you can handle my ultimate creation!",
      "That was an incredible battle! You are truly a master-class champion!"
    ],
    trivia: [
      "Morimoto is modeled directly after his real-world counterpart, Shigeki Morimoto, who has programmed Pokémon battles since Gen 1.",
      "His team in Unova and Alola is notoriously difficult, featuring high-level competitive builds."
    ],
    regionInfo: {
      homeRegion: "Kanto",
      placesVisited: ["Celadon City", "Castelia City", "Heahea City"],
      journeyPath: ["Celadon City Condominiums Game Freak room"]
    },
    aiAnalysis: {
      personalityAnalysis: "Morimoto is an INTP, combining game theory mechanics, perfect move coverage, and legendary species into absolute strategies.",
      teamAnalysis: "His Mew utilizes universal move compatibility, boosting with Nasty Plot before launching flawless elemental sweeps.",
      strengthRadar: {
        tacticalSkill: 98,
        willpower: 90,
        empathy: 85,
        rawPower: 92,
        adaptability: 99
      },
      battleStrategySummary: "Do not let Mew set up Nasty Plot. Deploy dark-type sweepers with high special defense to absorb boosted Psychic hits."
    },
    popularityRank: 3,
    generation: 5
  },
  {
    id: "primo",
    name: "Primo",
    japaneseName: "ハジメ (Hajime)",
    nicknames: ["The Promo Guide", "Violet Egg Specialist"],
    gender: "Male",
    occupation: "Event Organizer / Guide",
    role: "NPC",
    firstAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    latestAppearance: "Pokémon HeartGold & SoulSilver (2009)",
    region: "Johto",
    hometown: "Violet City",
    currentLocation: "Violet City",
    biography: {
      background: "Primo is a special promotional guide who travels across Johto and Kanto, rewarding trainers with rare wallpapers and eggs in exchange for specific password words.",
      personality: "Extremely polite, helpful, academic, and loves discussing the mechanics of special regional distributions.",
      storyProgression: "Resides in the Violet City Pokémon Center, evaluating password combinations to give the player Mareep, Wooper, or Slugma Eggs.",
      characterDevelopment: "Maintained close data sharing ties with Sinnoh's TV producer to coordinate password systems.",
      goals: "To assist trainers with advanced styling and rare breeding starters.",
      motivations: "The smiles of trainers receiving rare, foreign species."
    },
    team: [
      {
        id: 179,
        name: "Mareep",
        level: 15,
        types: ["electric"],
        ability: "Static",
        nature: "Quiet",
        moves: ["Tackle", "Growl", "Thundershock", "Cotton Spore"],
        heldItem: "None",
        evolutionStatus: "Capable of Evolving",
        firstAppearance: "Violet Outskirts",
        status: "Active Companion"
      }
    ],
    timeline: [
      {
        title: "Promo Guide Launch",
        desc: "Launches the password distribution project in Violet City's central hub.",
        media: "game",
        chronology: "Year 3"
      }
    ],
    relationships: [
      {
        charId: "oak",
        charName: "Professor Oak",
        type: "student",
        desc: "Collaborated with Oak's assistants to distribute starter eggs safely to rookies."
      }
    ],
    battleRecord: {
      wins: "40.0%",
      losses: "60.0%",
      championships: ["Director of Promotional Events"],
      badges: [],
      tournaments: [],
      majorBattles: []
    },
    appearanceGallery: [
      {
        title: "Event Outfit",
        description: "Smart orange polo shirt, tidy brown trousers, and a clean promotional clipboard.",
        imageUrl: "https://archives.bulbagarden.net/media/upload/b/b3/Lets_Go_Pikachu_Eevee_Chase.png"
      }
    ],
    voiceActors: {
      english: "Wayne Grayson",
      japanese: "Hiro Shimono"
    },
    music: {
      characterTheme: "Violet City Peaceful Theme",
      battleTheme: "Battle! VS Wild Pokémon"
    },
    quotes: [
      "Hello! I am Primo, the special guide! If you tell me the correct words, I have a wonderful egg for you!",
      "That password is correct! Take this rare Mareep Egg!"
    ],
    trivia: [
      "Primo's passwords are calculated using the player's unique Trainer ID, meaning they differ for every single game file.",
      "His Japanese name, Hajime, literally translates to 'beginning' or 'start'."
    ],
    regionInfo: {
      homeRegion: "Johto",
      placesVisited: ["Violet City", "Saffron City"],
      journeyPath: ["Violet City Pokémon Center"]
    },
    aiAnalysis: {
      personalityAnalysis: "Primo is an ESFJ, placing his professional energy on clear promotional organization and client satisfaction.",
      teamAnalysis: "His Mareep serves as a cute mascot, using static electricity to power his display terminals.",
      strengthRadar: {
        tacticalSkill: 50,
        willpower: 65,
        empathy: 90,
        rawPower: 40,
        adaptability: 82
      },
      battleStrategySummary: "Avoids battles. Mareep uses Static to paralyze physical threats safely."
    },
    popularityRank: 7,
    generation: 4
  }
];
