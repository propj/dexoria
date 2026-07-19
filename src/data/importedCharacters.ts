export interface ImportedCharacterStats {
  strength: number;
  intelligence: number;
  battle_skill: number;
  leadership: number;
  experience: number;
}

export interface ImportedCharacterTimeline {
  order: number;
  event: string;
}

export interface ImportedCharacter {
  id: number;
  slug: string;
  name: string;
  japanese_name: string;
  romaji: string | null;
  aliases: string[];
  region: string;
  origin: string;
  home_town: string | null;
  current_residence: string | null;
  occupation: string[];
  affiliation: string[];
  team: string | null;
  role: string;
  generation_introduced: string;
  game_appearances: string[];
  anime_appearances: string[];
  manga_appearances: string[];
  movie_appearances: string[];
  parents: string[];
  siblings: string[];
  friends: string[];
  rivals: string[];
  mentors: string[];
  students: string[];
  signature_pokemon: string | null;
  current_team: string[];
  past_teams: string[];
  battle_style: string | null;
  preferred_type: string | null;
  starter: string | null;
  mega_evolution: string[];
  z_move: string[] | string | null;
  dynamax: boolean;
  terastal: boolean;
  stats: ImportedCharacterStats;
  quotes: string[];
  trivia: string[];
  timeline: ImportedCharacterTimeline[];
  image_url: string | null;
  sprite_url: string | null;
  theme_music: string | null;
  badges: string[];
  achievements: string[];
  status: string;
  source_note?: string;
}

export const IMPORTED_CHARACTERS: ImportedCharacter[] = [
  {
    "id": 1,
    "slug": "red",
    "name": "Red",
    "japanese_name": "レッド",
    "romaji": "Reddo",
    "aliases": [
      "The Boy from Pallet Town"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Mt. Silver",
    "occupation": [
      "Trainer",
      "Champion"
    ],
    "affiliation": [
      "Indigo League"
    ],
    "team": null,
    "role": "Champion / Protagonist",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "Gold",
      "Silver",
      "Crystal",
      "FireRed",
      "LeafGreen",
      "HeartGold",
      "SoulSilver",
      "Sun",
      "Moon",
      "Let's Go Pikachu/Eevee"
    ],
    "anime_appearances": [],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [
      "Unnamed Mother"
    ],
    "siblings": [],
    "friends": [
      "Blue",
      "Green"
    ],
    "rivals": [
      "Blue"
    ],
    "mentors": [
      "Professor Oak"
    ],
    "students": [],
    "signature_pokemon": "Pikachu",
    "current_team": [
      "Pikachu",
      "Venusaur",
      "Charizard",
      "Blastoise",
      "Snorlax",
      "Espeon"
    ],
    "past_teams": [],
    "battle_style": "Balanced / Versatile",
    "preferred_type": null,
    "starter": "Charmander (games) / Pikachu (Let's Go)",
    "mega_evolution": [
      "Mega Charizard X",
      "Mega Venusaur",
      "Mega Blastoise"
    ],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 98,
      "intelligence": 90,
      "battle_skill": 100,
      "leadership": 80,
      "experience": 95
    },
    "quotes": [],
    "trivia": [
      "Silent protagonist in the core games",
      "Became the final opponent atop Mt. Silver in Gold/Silver/Crystal"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Receives starter Pokémon from Professor Oak"
      },
      {
        "order": 2,
        "event": "Collects all eight Kanto Gym Badges"
      },
      {
        "order": 3,
        "event": "Defeats the Elite Four and becomes Champion"
      },
      {
        "order": 4,
        "event": "Retreats to Mt. Silver to continue training"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [
      "Boulder",
      "Cascade",
      "Thunder",
      "Rainbow",
      "Soul",
      "Marsh",
      "Volcano",
      "Earth"
    ],
    "achievements": [
      "Kanto Champion",
      "Defeated Team Rocket"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 2,
    "slug": "blue",
    "name": "Blue",
    "japanese_name": "グリーン",
    "romaji": "Green",
    "aliases": [
      "Green (Japan)"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Viridian City",
    "occupation": [
      "Trainer",
      "Gym Leader"
    ],
    "affiliation": [
      "Indigo League"
    ],
    "team": null,
    "role": "Rival / Viridian Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "Gold",
      "Silver",
      "Crystal",
      "FireRed",
      "LeafGreen",
      "HeartGold",
      "SoulSilver"
    ],
    "anime_appearances": [
      "Gary Oak appears as the anime counterpart"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [
      "Daisy Oak (sister)"
    ],
    "friends": [
      "Red"
    ],
    "rivals": [
      "Red"
    ],
    "mentors": [
      "Professor Oak (grandfather)"
    ],
    "students": [],
    "signature_pokemon": "Pidgeot",
    "current_team": [
      "Pidgeot",
      "Alakazam",
      "Rhydon",
      "Arcanine",
      "Exeggutor",
      "Gyarados"
    ],
    "past_teams": [],
    "battle_style": "Aggressive / Type-diverse",
    "preferred_type": null,
    "starter": "Squirtle (or counter-pick to player's starter)",
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 90,
      "intelligence": 85,
      "battle_skill": 92,
      "leadership": 75,
      "experience": 88
    },
    "quotes": [],
    "trivia": [
      "Named after the game titles Red and Green/Blue",
      "Becomes Viridian Gym Leader after being defeated by Red"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leaves Pallet Town alongside Red to begin his journey"
      },
      {
        "order": 2,
        "event": "Becomes Champion before Red's arrival"
      },
      {
        "order": 3,
        "event": "Loses the Champion title to Red"
      },
      {
        "order": 4,
        "event": "Takes over as Viridian City Gym Leader"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [
      "Boulder",
      "Cascade",
      "Thunder",
      "Rainbow",
      "Soul",
      "Marsh",
      "Volcano",
      "Earth"
    ],
    "achievements": [
      "Former Kanto Champion",
      "Viridian Gym Leader"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 3,
    "slug": "professor-oak",
    "name": "Professor Samuel Oak",
    "japanese_name": "オーキド博士",
    "romaji": "Okido Hakase",
    "aliases": [
      "Professor Oak",
      "Gramps"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Pallet Town",
    "occupation": [
      "Pokémon Professor",
      "Researcher"
    ],
    "affiliation": [
      "Pokémon Research Institute"
    ],
    "team": null,
    "role": "Regional Professor",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen",
      "Let's Go Pikachu/Eevee"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Several Kanto-era films"
    ],
    "parents": [],
    "siblings": [],
    "friends": [
      "Professor Elm",
      "Delia Ketchum"
    ],
    "rivals": [],
    "mentors": [],
    "students": [
      "Red",
      "Blue",
      "Ash Ketchum"
    ],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 40,
      "intelligence": 99,
      "battle_skill": 45,
      "leadership": 85,
      "experience": 97
    },
    "quotes": [],
    "trivia": [
      "Grandfather of Blue and Daisy Oak",
      "Author of the Pokédex program used across regions"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Hands out starter Pokémon to new trainers in Pallet Town"
      },
      {
        "order": 2,
        "event": "Assigns the Pokédex research project to new trainers"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Renowned Pokémon researcher",
      "Creator of the Pokédex"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 4,
    "slug": "misty",
    "name": "Misty",
    "japanese_name": "カスミ",
    "romaji": "Kasumi",
    "aliases": [
      "The Tomboyish Mermaid"
    ],
    "region": "Kanto",
    "origin": "Cerulean City",
    "home_town": "Cerulean City",
    "current_residence": "Cerulean City",
    "occupation": [
      "Gym Leader",
      "Trainer"
    ],
    "affiliation": [
      "Cerulean Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Cerulean City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Several Kanto-era films"
    ],
    "parents": [],
    "siblings": [
      "Daisy",
      "Violet",
      "Lily (sisters)"
    ],
    "friends": [
      "Ash Ketchum",
      "Brock"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Starmie",
    "current_team": [
      "Starmie",
      "Psyduck",
      "Staryu",
      "Gyarados",
      "Corsola",
      "Politoed"
    ],
    "past_teams": [],
    "battle_style": "Water-type specialist",
    "preferred_type": "Water",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 70,
      "intelligence": 78,
      "battle_skill": 82,
      "leadership": 65,
      "experience": 80
    },
    "quotes": [],
    "trivia": [
      "Youngest of the four Sensational Sisters",
      "Aspires to become a Water Pokémon master"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Meets Ash Ketchum after her bike is destroyed"
      },
      {
        "order": 2,
        "event": "Travels with Ash and Brock through Kanto"
      },
      {
        "order": 3,
        "event": "Returns to run the Cerulean Gym"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Cerulean Gym Leader",
      "Water Pokémon specialist"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 5,
    "slug": "brock",
    "name": "Brock",
    "japanese_name": "タケシ",
    "romaji": "Takeshi",
    "aliases": [
      "The Rock-Hard Gym Leader"
    ],
    "region": "Kanto",
    "origin": "Pewter City",
    "home_town": "Pewter City",
    "current_residence": "Pewter City",
    "occupation": [
      "Gym Leader",
      "Trainer",
      "Breeder"
    ],
    "affiliation": [
      "Pewter Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Pewter City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Several Kanto-era films"
    ],
    "parents": [
      "Flint (father)"
    ],
    "siblings": [
      "Nine younger siblings"
    ],
    "friends": [
      "Ash Ketchum",
      "Misty"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Onix",
    "current_team": [
      "Onix",
      "Geodude",
      "Vulpix",
      "Croagunk"
    ],
    "past_teams": [],
    "battle_style": "Rock-type specialist",
    "preferred_type": "Rock",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 80,
      "intelligence": 75,
      "battle_skill": 78,
      "leadership": 70,
      "experience": 82
    },
    "quotes": [],
    "trivia": [
      "Cares for his many younger siblings after his father leaves home",
      "Later becomes a Pokémon Doctor in later anime arcs"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leaves the Pewter Gym in his father's care to travel with Ash"
      },
      {
        "order": 2,
        "event": "Studies to become a Pokémon Doctor"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Pewter Gym Leader",
      "Pokémon Breeder"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 6,
    "slug": "lt-surge",
    "name": "Lt. Surge",
    "japanese_name": "マチス",
    "romaji": "Matis",
    "aliases": [
      "The Lightning American"
    ],
    "region": "Kanto",
    "origin": "Unknown (implied overseas)",
    "home_town": "Vermilion City",
    "current_residence": "Vermilion City",
    "occupation": [
      "Gym Leader"
    ],
    "affiliation": [
      "Vermilion Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Vermilion City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Raichu",
    "current_team": [
      "Raichu",
      "Electrode",
      "Electabuzz"
    ],
    "past_teams": [],
    "battle_style": "Electric-type specialist",
    "preferred_type": "Electric",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 85,
      "intelligence": 70,
      "battle_skill": 80,
      "leadership": 68,
      "experience": 85
    },
    "quotes": [],
    "trivia": [
      "A former military officer, referenced by his title 'Lieutenant'"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Uses Electric-type Pokémon learned from his military service"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Vermilion Gym Leader"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 7,
    "slug": "erika",
    "name": "Erika",
    "japanese_name": "エリカ",
    "romaji": "Erika",
    "aliases": [
      "The Nature-Loving Princess"
    ],
    "region": "Kanto",
    "origin": "Celadon City",
    "home_town": "Celadon City",
    "current_residence": "Celadon City",
    "occupation": [
      "Gym Leader"
    ],
    "affiliation": [
      "Celadon Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Celadon City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Vileplume",
    "current_team": [
      "Victreebel",
      "Tangela",
      "Vileplume"
    ],
    "past_teams": [],
    "battle_style": "Grass-type specialist",
    "preferred_type": "Grass",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 60,
      "intelligence": 82,
      "battle_skill": 75,
      "leadership": 72,
      "experience": 80
    },
    "quotes": [],
    "trivia": [
      "Runs the Celadon Department Store perfume counter",
      "Known for her refined, elegant demeanor"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Manages both the Celadon Gym and a local perfumery"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Celadon Gym Leader"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 8,
    "slug": "koga",
    "name": "Koga",
    "japanese_name": "キョウ",
    "romaji": "Kyo",
    "aliases": [
      "The Poison Ninja Master"
    ],
    "region": "Kanto",
    "origin": "Fuchsia City",
    "home_town": "Fuchsia City",
    "current_residence": "Fuchsia City / later Indigo Plateau",
    "occupation": [
      "Gym Leader",
      "Elite Four (later)",
      "Ninja Master"
    ],
    "affiliation": [
      "Fuchsia Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Fuchsia City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen",
      "Gold",
      "Silver",
      "Crystal"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [
      "Janine (daughter)"
    ],
    "signature_pokemon": "Weezing",
    "current_team": [
      "Koffing",
      "Muk",
      "Weezing",
      "Venomoth"
    ],
    "past_teams": [],
    "battle_style": "Poison-type / ninjutsu-inspired",
    "preferred_type": "Poison",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 88,
      "intelligence": 80,
      "battle_skill": 90,
      "leadership": 78,
      "experience": 90
    },
    "quotes": [],
    "trivia": [
      "Leader of a ninja clan in Fuchsia City",
      "Later promoted to the Johto Elite Four"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Serves as Fuchsia City Gym Leader"
      },
      {
        "order": 2,
        "event": "Passes the gym to his daughter Janine and joins the Elite Four"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Fuchsia Gym Leader",
      "Johto Elite Four member"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 9,
    "slug": "sabrina",
    "name": "Sabrina",
    "japanese_name": "ナツメ",
    "romaji": "Natsume",
    "aliases": [
      "The Master of Psychic Pokémon"
    ],
    "region": "Kanto",
    "origin": "Saffron City",
    "home_town": "Saffron City",
    "current_residence": "Saffron City",
    "occupation": [
      "Gym Leader",
      "Psychic"
    ],
    "affiliation": [
      "Saffron Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Saffron City Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Alakazam",
    "current_team": [
      "Kadabra",
      "Mr. Mime",
      "Venomoth",
      "Alakazam"
    ],
    "past_teams": [],
    "battle_style": "Psychic-type specialist",
    "preferred_type": "Psychic",
    "starter": null,
    "mega_evolution": [
      "Mega Alakazam"
    ],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 40,
      "intelligence": 97,
      "battle_skill": 88,
      "leadership": 70,
      "experience": 88
    },
    "quotes": [],
    "trivia": [
      "Developed powerful psychic abilities as a child",
      "Known for a famously stern, serious demeanor in the games"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Becomes one of the strongest Gym Leaders in Kanto"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Saffron Gym Leader"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 10,
    "slug": "blaine",
    "name": "Blaine",
    "japanese_name": "カツラ",
    "romaji": "Katsura",
    "aliases": [
      "The Hotheaded Quiz Master"
    ],
    "region": "Kanto",
    "origin": "Cinnabar Island",
    "home_town": "Cinnabar Island",
    "current_residence": "Cinnabar Island / Seafoam Islands",
    "occupation": [
      "Gym Leader",
      "Researcher"
    ],
    "affiliation": [
      "Cinnabar Gym",
      "Indigo League"
    ],
    "team": null,
    "role": "Cinnabar Island Gym Leader",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Professor Oak"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Arcanine",
    "current_team": [
      "Growlithe",
      "Ponyta",
      "Rapidash",
      "Arcanine",
      "Magmar"
    ],
    "past_teams": [],
    "battle_style": "Fire-type specialist",
    "preferred_type": "Fire",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 75,
      "intelligence": 92,
      "battle_skill": 85,
      "leadership": 68,
      "experience": 90
    },
    "quotes": [],
    "trivia": [
      "A former Pokémon researcher who worked alongside Professor Oak",
      "Known for quizzing challengers before allowing a battle in the games"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Relocates his gym after Cinnabar Island's volcanic activity in later games"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Cinnabar Gym Leader"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 11,
    "slug": "giovanni",
    "name": "Giovanni",
    "japanese_name": "サカキ",
    "romaji": "Sakaki",
    "aliases": [
      "The Boss"
    ],
    "region": "Kanto",
    "origin": "Viridian City",
    "home_town": "Viridian City",
    "current_residence": "Unknown",
    "occupation": [
      "Gym Leader",
      "Crime Boss"
    ],
    "affiliation": [
      "Viridian Gym",
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "Viridian City Gym Leader / Team Rocket Boss",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen",
      "Let's Go Pikachu/Eevee"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Mewtwo Strikes Back"
    ],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [
      "Red"
    ],
    "mentors": [],
    "students": [
      "Silver (son, later games)"
    ],
    "signature_pokemon": "Nidoking",
    "current_team": [
      "Nidoking",
      "Nidoqueen",
      "Rhyhorn",
      "Kangaskhan",
      "Persian"
    ],
    "past_teams": [],
    "battle_style": "Ground-type specialist",
    "preferred_type": "Ground",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 90,
      "intelligence": 88,
      "battle_skill": 92,
      "leadership": 95,
      "experience": 93
    },
    "quotes": [],
    "trivia": [
      "Secretly leads the criminal organization Team Rocket",
      "Abandons his Gym Leader post after Team Rocket's defeat"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leads Team Rocket in attempts to steal rare and powerful Pokémon"
      },
      {
        "order": 2,
        "event": "Loses control of the Team Rocket hideout in Celadon City"
      },
      {
        "order": 3,
        "event": "Disappears after Team Rocket's defeat at Silph Co."
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Viridian Gym Leader",
      "Team Rocket Boss"
    ],
    "status": "Unknown",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 12,
    "slug": "lorelei",
    "name": "Lorelei",
    "japanese_name": "カンナ",
    "romaji": "Kanna",
    "aliases": [
      "Prima (in the anime)"
    ],
    "region": "Kanto",
    "origin": "Unknown",
    "home_town": null,
    "current_residence": "Indigo Plateau",
    "occupation": [
      "Elite Four"
    ],
    "affiliation": [
      "Indigo League"
    ],
    "team": null,
    "role": "Elite Four Member (Ice)",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Bruno",
      "Agatha",
      "Lance"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Lapras",
    "current_team": [
      "Dewgong",
      "Cloyster",
      "Slowbro",
      "Jynx",
      "Lapras"
    ],
    "past_teams": [],
    "battle_style": "Ice-type specialist",
    "preferred_type": "Ice",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 65,
      "intelligence": 90,
      "battle_skill": 90,
      "leadership": 75,
      "experience": 92
    },
    "quotes": [],
    "trivia": [
      "First member challengers face in the Kanto Elite Four"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Guards the first chamber of the Indigo Plateau"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Kanto Elite Four member"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 13,
    "slug": "bruno",
    "name": "Bruno",
    "japanese_name": "シバ",
    "romaji": "Shiba",
    "aliases": [],
    "region": "Kanto",
    "origin": "Unknown",
    "home_town": null,
    "current_residence": "Indigo Plateau",
    "occupation": [
      "Elite Four"
    ],
    "affiliation": [
      "Indigo League"
    ],
    "team": null,
    "role": "Elite Four Member (Fighting)",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen",
      "Gold",
      "Silver",
      "Crystal"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Lorelei",
      "Agatha",
      "Lance"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Machamp",
    "current_team": [
      "Onix",
      "Hitmonchan",
      "Hitmonlee",
      "Onix",
      "Machamp"
    ],
    "past_teams": [],
    "battle_style": "Fighting/Rock hybrid",
    "preferred_type": "Fighting",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 95,
      "intelligence": 70,
      "battle_skill": 88,
      "leadership": 72,
      "experience": 90
    },
    "quotes": [],
    "trivia": [
      "Believes physical training builds strong Pokémon partnerships"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Guards the second chamber of the Indigo Plateau"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Kanto Elite Four member"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 14,
    "slug": "agatha",
    "name": "Agatha",
    "japanese_name": "キクコ",
    "romaji": "Kikuko",
    "aliases": [],
    "region": "Kanto",
    "origin": "Lavender Town (implied)",
    "home_town": null,
    "current_residence": "Indigo Plateau",
    "occupation": [
      "Elite Four"
    ],
    "affiliation": [
      "Indigo League"
    ],
    "team": null,
    "role": "Elite Four Member (Ghost)",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Lorelei",
      "Bruno",
      "Lance",
      "Professor Oak"
    ],
    "rivals": [],
    "mentors": [
      "Professor Oak's contemporary"
    ],
    "students": [],
    "signature_pokemon": "Gengar",
    "current_team": [
      "Gengar",
      "Golbat",
      "Haunter",
      "Arbok",
      "Gengar"
    ],
    "past_teams": [],
    "battle_style": "Ghost/Poison hybrid",
    "preferred_type": "Ghost",
    "starter": null,
    "mega_evolution": [
      "Mega Gengar"
    ],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 55,
      "intelligence": 88,
      "battle_skill": 87,
      "leadership": 70,
      "experience": 95
    },
    "quotes": [],
    "trivia": [
      "One of the oldest and most experienced trainers in Kanto lore"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Guards the third chamber of the Indigo Plateau"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Kanto Elite Four member"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 15,
    "slug": "lance",
    "name": "Lance",
    "japanese_name": "ワタル",
    "romaji": "Wataru",
    "aliases": [
      "The Dragon Master"
    ],
    "region": "Kanto",
    "origin": "Blackthorn City (Johto)",
    "home_town": "Blackthorn City",
    "current_residence": "Indigo Plateau",
    "occupation": [
      "Elite Four",
      "Champion (later)"
    ],
    "affiliation": [
      "Indigo League",
      "G-Men"
    ],
    "team": null,
    "role": "Elite Four Member / Champion (Dragon)",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "Gold",
      "Silver",
      "Crystal",
      "FireRed",
      "LeafGreen",
      "HeartGold",
      "SoulSilver"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Lorelei",
      "Bruno",
      "Agatha",
      "Clair (cousin)"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Dragonite",
    "current_team": [
      "Gyarados",
      "Dragonite",
      "Charizard",
      "Aerodactyl",
      "Dragonite"
    ],
    "past_teams": [],
    "battle_style": "Dragon-type specialist",
    "preferred_type": "Dragon",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 92,
      "intelligence": 90,
      "battle_skill": 96,
      "leadership": 90,
      "experience": 96
    },
    "quotes": [],
    "trivia": [
      "Becomes Champion of Kanto in Gold, Silver, and Crystal",
      "Also investigates Team Rocket as a member of the G-Men"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Guards the final chamber of the Indigo Plateau in Red and Blue"
      },
      {
        "order": 2,
        "event": "Becomes Champion of the Kanto/Johto region in Gold and Silver"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Kanto Elite Four member",
      "Kanto/Johto Champion"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 16,
    "slug": "jessie",
    "name": "Jessie",
    "japanese_name": "ムサシ",
    "romaji": "Musashi",
    "aliases": [
      "Jessica"
    ],
    "region": "Kanto",
    "origin": "Unknown, raised in poverty",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Team Rocket Agent"
    ],
    "affiliation": [
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "Team Rocket Field Agent",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Several films"
    ],
    "parents": [],
    "siblings": [],
    "friends": [
      "James",
      "Meowth"
    ],
    "rivals": [
      "Ash Ketchum"
    ],
    "mentors": [
      "Giovanni"
    ],
    "students": [],
    "signature_pokemon": "Wobbuffet",
    "current_team": [
      "Arbok",
      "Wobbuffet",
      "Yanma",
      "Seviper"
    ],
    "past_teams": [],
    "battle_style": "Comic-relief schemer, poison/dark leaning",
    "preferred_type": "Poison",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 55,
      "intelligence": 65,
      "battle_skill": 60,
      "leadership": 50,
      "experience": 70
    },
    "quotes": [],
    "trivia": [
      "Forms the core anime Team Rocket trio with James and Meowth",
      "Repeatedly attempts and fails to steal Ash's Pikachu"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Joins Team Rocket alongside James"
      },
      {
        "order": 2,
        "event": "Begins pursuing Ash's Pikachu across regions"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 17,
    "slug": "james",
    "name": "James",
    "japanese_name": "コジロウ",
    "romaji": "Kojiro",
    "aliases": [
      "Jessie's partner"
    ],
    "region": "Kanto",
    "origin": "Wealthy family estate",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Team Rocket Agent"
    ],
    "affiliation": [
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "Team Rocket Field Agent",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [
      "Several films"
    ],
    "parents": [],
    "siblings": [],
    "friends": [
      "Jessie",
      "Meowth"
    ],
    "rivals": [
      "Ash Ketchum"
    ],
    "mentors": [
      "Giovanni"
    ],
    "students": [],
    "signature_pokemon": "Weezing",
    "current_team": [
      "Weezing",
      "Victreebel",
      "Cacnea",
      "Mime Jr."
    ],
    "past_teams": [],
    "battle_style": "Comic-relief schemer, poison/grass leaning",
    "preferred_type": "Poison",
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 50,
      "intelligence": 62,
      "battle_skill": 58,
      "leadership": 45,
      "experience": 68
    },
    "quotes": [],
    "trivia": [
      "Ran away from an arranged marriage to join Team Rocket",
      "Frequently uses elaborate disguises during schemes"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Joins Team Rocket alongside Jessie"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 18,
    "slug": "ash-ketchum",
    "name": "Ash Ketchum",
    "japanese_name": "サトシ",
    "romaji": "Satoshi",
    "aliases": [
      "Pokémon Master (aspiration)"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Traveling",
    "occupation": [
      "Trainer"
    ],
    "affiliation": [
      "Various Leagues"
    ],
    "team": null,
    "role": "Anime Protagonist",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League through Pokémon Journeys"
    ],
    "manga_appearances": [
      "Pokémon Adventures (cameo)"
    ],
    "movie_appearances": [
      "Numerous films"
    ],
    "parents": [
      "Delia Ketchum (mother)"
    ],
    "siblings": [],
    "friends": [
      "Misty",
      "Brock",
      "Pikachu"
    ],
    "rivals": [
      "Gary Oak"
    ],
    "mentors": [
      "Professor Oak"
    ],
    "students": [],
    "signature_pokemon": "Pikachu",
    "current_team": [
      "Pikachu",
      "Charizard",
      "Bulbasaur",
      "Squirtle",
      "Snorlax"
    ],
    "past_teams": [],
    "battle_style": "Adaptive, bond-driven",
    "preferred_type": null,
    "starter": "Pikachu",
    "mega_evolution": [
      "Mega Charizard Y (later series)"
    ],
    "z_move": [
      "Various Alola-era Z-Moves"
    ],
    "dynamax": true,
    "terastal": false,
    "stats": {
      "strength": 75,
      "intelligence": 70,
      "battle_skill": 88,
      "leadership": 80,
      "experience": 99
    },
    "quotes": [],
    "trivia": [
      "Eventually becomes World Champion in Pokémon Journeys after decades of competing",
      "Companion Pikachu never evolves by his choice"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Receives Pikachu from Professor Oak after oversleeping"
      },
      {
        "order": 2,
        "event": "Travels through Kanto challenging the region's Gym Leaders"
      },
      {
        "order": 3,
        "event": "Continues on to compete across many regions over the following years"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [
      "Boulder",
      "Cascade",
      "Thunder",
      "Rainbow",
      "Soul",
      "Marsh",
      "Volcano",
      "Earth"
    ],
    "achievements": [
      "World Champion (Pokémon Journeys)"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 19,
    "slug": "delia-ketchum",
    "name": "Delia Ketchum",
    "japanese_name": "ハナコ",
    "romaji": "Hanako",
    "aliases": [
      "Ash's Mom"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Pallet Town",
    "occupation": [
      "Homemaker"
    ],
    "affiliation": [],
    "team": null,
    "role": "Ash Ketchum's Mother",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Professor Oak"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Mimey (Mr. Mime)",
    "current_team": [
      "Mimey"
    ],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 30,
      "intelligence": 60,
      "battle_skill": 20,
      "leadership": 40,
      "experience": 30
    },
    "quotes": [],
    "trivia": [
      "Supports Ash's journey from Pallet Town",
      "Employs a Mr. Mime named Mimey to help around the house"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Sends Ash off on his first Pokémon journey"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 20,
    "slug": "daisy-oak",
    "name": "Daisy Oak",
    "japanese_name": "ナツメ・オーキド (regional variant)",
    "romaji": null,
    "aliases": [],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Cerulean City",
    "occupation": [
      "Gym Assistant"
    ],
    "affiliation": [
      "Cerulean Gym"
    ],
    "team": null,
    "role": "Cerulean Gym Caretaker / Oak's Granddaughter",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [
      "Blue (brother)"
    ],
    "friends": [],
    "rivals": [],
    "mentors": [
      "Professor Oak (grandfather)"
    ],
    "students": [],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 20,
      "intelligence": 65,
      "battle_skill": 10,
      "leadership": 30,
      "experience": 40
    },
    "quotes": [],
    "trivia": [
      "Looks after Professor Oak's lab in the games",
      "Distinct from the Cerulean sister also named Daisy"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Helps maintain Professor Oak's lab and PC storage system"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 21,
    "slug": "bill",
    "name": "Bill",
    "japanese_name": "ナオキ",
    "romaji": "Naoki",
    "aliases": [
      "The Pokémaniac"
    ],
    "region": "Kanto",
    "origin": "Cerulean Cave area",
    "home_town": "Sea Cottage, Route 25",
    "current_residence": "Sea Cottage",
    "occupation": [
      "Researcher",
      "Programmer"
    ],
    "affiliation": [
      "Pokémon Storage System developer"
    ],
    "team": null,
    "role": "Creator of the Pokémon Storage System",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Professor Oak"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 30,
      "intelligence": 95,
      "battle_skill": 20,
      "leadership": 40,
      "experience": 60
    },
    "quotes": [],
    "trivia": [
      "Accidentally fuses himself with a Pokémon in a teleporter experiment in the games",
      "Designed the PC Box system trainers use to store Pokémon"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Develops the Pokémon Storage System used nationwide"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Inventor of the PC Storage System"
    ],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 22,
    "slug": "nurse-joy",
    "name": "Nurse Joy",
    "japanese_name": "ジョーイ",
    "romaji": "Joi",
    "aliases": [],
    "region": "Kanto",
    "origin": "Various Pokémon Centers",
    "home_town": null,
    "current_residence": "Pokémon Center network",
    "occupation": [
      "Pokémon Nurse"
    ],
    "affiliation": [
      "Pokémon Center"
    ],
    "team": null,
    "role": "Pokémon Center Nurse",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [
      "Numerous identical-looking relatives across regions"
    ],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [
      "Chansey",
      "Audino (later regions)"
    ],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 25,
      "intelligence": 80,
      "battle_skill": 10,
      "leadership": 35,
      "experience": 70
    },
    "quotes": [],
    "trivia": [
      "A recurring family of nurses staffs Pokémon Centers in every region"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Heals injured Pokémon brought in by trainers"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 23,
    "slug": "officer-jenny",
    "name": "Officer Jenny",
    "japanese_name": "ジュン",
    "romaji": "Jun",
    "aliases": [],
    "region": "Kanto",
    "origin": "Various Kanto precincts",
    "home_town": null,
    "current_residence": "Kanto precincts",
    "occupation": [
      "Police Officer"
    ],
    "affiliation": [
      "Kanto Police"
    ],
    "team": null,
    "role": "Regional Police Officer",
    "generation_introduced": "Generation I",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [
      "Numerous identical-looking relatives across regions"
    ],
    "friends": [],
    "rivals": [
      "Team Rocket"
    ],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [
      "Growlithe",
      "Arcanine"
    ],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 55,
      "intelligence": 72,
      "battle_skill": 45,
      "leadership": 60,
      "experience": 75
    },
    "quotes": [],
    "trivia": [
      "Like Nurse Joy, a large family of officers with the same name and appearance serves across regions"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Investigates Team Rocket activity across Kanto"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active",
    "source_note": "Core game canon (Generation I / FireRed-LeafGreen / Let's Go)"
  },
  {
    "id": 24,
    "slug": "green-adventures",
    "name": "Green",
    "japanese_name": "グリーン",
    "romaji": "Green",
    "aliases": [
      "The Mysterious Thief"
    ],
    "region": "Kanto",
    "origin": "Unknown, raised by Team Rocket associates",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Trainer",
      "Coordinator (later)"
    ],
    "affiliation": [
      "Pokédex Holders"
    ],
    "team": null,
    "role": "Pokémon Adventures manga protagonist",
    "generation_introduced": "Generation I (Pokémon Adventures manga, Red, Green & Blue arc)",
    "game_appearances": [],
    "anime_appearances": [],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Red",
      "Blue (manga)",
      "Yellow"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Clefairy",
    "current_team": [
      "Clefairy",
      "Nidoqueen",
      "Arbok",
      "Golbat"
    ],
    "past_teams": [],
    "battle_style": "Trickster / thief-turned-Trainer",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 55,
      "intelligence": 78,
      "battle_skill": 70,
      "leadership": 55,
      "experience": 75
    },
    "quotes": [],
    "trivia": [
      "Manga-exclusive character not based on a game protagonist",
      "Introduced as a con artist before becoming a Trainer and, later, a Pokémon Coordinator"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Introduced swindling trainers out of money and Pokémon"
      },
      {
        "order": 2,
        "event": "Joins Red and Blue in the fight against Team Rocket"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Pokédex Holder"
    ],
    "status": "Active",
    "source_note": "Manga-only character (Pokémon Adventures / Pocket Monsters SPECIAL)"
  },
  {
    "id": 25,
    "slug": "yellow-adventures",
    "name": "Yellow",
    "japanese_name": "イエロー",
    "romaji": "Iero",
    "aliases": [
      "Yellow Caballero"
    ],
    "region": "Kanto",
    "origin": "Viridian Forest area",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Trainer",
      "Pokémon Empath"
    ],
    "affiliation": [
      "Pokédex Holders"
    ],
    "team": null,
    "role": "Pokémon Adventures manga protagonist (Yellow arc)",
    "generation_introduced": "Generation I (Pokémon Adventures manga, Yellow arc)",
    "game_appearances": [],
    "anime_appearances": [],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Red",
      "Blue (manga)",
      "Green (manga)"
    ],
    "rivals": [],
    "mentors": [
      "Blue (manga)"
    ],
    "students": [],
    "signature_pokemon": "Pikachu (Chuchu)",
    "current_team": [
      "Chuchu (Pikachu)",
      "Dody (Dodrio)",
      "Ratty (Raticate)",
      "Kitty (Nidorino)",
      "Gravvy (Omastar)"
    ],
    "past_teams": [],
    "battle_style": "Empathic / support-oriented healer",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 40,
      "intelligence": 75,
      "battle_skill": 68,
      "leadership": 50,
      "experience": 70
    },
    "quotes": [],
    "trivia": [
      "Can sense and heal Pokémon's feelings and wounds",
      "Disguises as a boy for most of her debut arc",
      "Searches for the missing Red after his Pikachu returns injured to Professor Oak's lab"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Sets out to find the missing Red after his Pikachu arrives hurt at the lab"
      },
      {
        "order": 2,
        "event": "Trains under Blue to battle the Kanto Elite Four"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Pokédex Holder",
      "Helped defeat the corrupted Elite Four"
    ],
    "status": "Active",
    "source_note": "Manga-only character (Pokémon Adventures / Pocket Monsters SPECIAL)"
  },
  {
    "id": 26,
    "slug": "gary-oak-anime",
    "name": "Gary Oak",
    "japanese_name": "シゲル",
    "romaji": "Shigeru",
    "aliases": [],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Pallet Town",
    "occupation": [
      "Trainer (formerly)",
      "Pokémon Researcher"
    ],
    "affiliation": [
      "Professor Oak's Laboratory"
    ],
    "team": null,
    "role": "Ash's rival (anime)",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [
      "Several Kanto-era films"
    ],
    "parents": [],
    "siblings": [],
    "friends": [
      "Ash Ketchum (later)"
    ],
    "rivals": [
      "Ash Ketchum"
    ],
    "mentors": [
      "Professor Oak (grandfather)"
    ],
    "students": [],
    "signature_pokemon": "Umbreon",
    "current_team": [
      "Umbreon",
      "Blastoise",
      "Arcanine",
      "Electivire",
      "Scizor",
      "Nidoqueen"
    ],
    "past_teams": [],
    "battle_style": "Cocky show-off, later matures into a researcher",
    "preferred_type": null,
    "starter": "Squirtle",
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 70,
      "intelligence": 85,
      "battle_skill": 80,
      "leadership": 65,
      "experience": 88
    },
    "quotes": [],
    "trivia": [
      "The anime's version of the rival character; distinct in personality and story from the games' Blue",
      "Retires from competitive battling to become a Pokémon researcher like his grandfather"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leaves Pallet Town with ten cheerleaders to begin his journey, needling Ash along the way"
      },
      {
        "order": 2,
        "event": "Reaches the Top 8 of the Indigo League"
      },
      {
        "order": 3,
        "event": "Sets aside battling to pursue Pokémon research"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [
      "Indigo League Top 8 finisher"
    ],
    "status": "Active",
    "source_note": "Anime-only character, counterpart to the games' Blue"
  },
  {
    "id": 27,
    "slug": "tracey-sketchit",
    "name": "Tracey Sketchit",
    "japanese_name": "カスミ...",
    "romaji": null,
    "aliases": [
      "The Pokémon Watcher"
    ],
    "region": "Kanto",
    "origin": "Pallet Town",
    "home_town": "Pallet Town",
    "current_residence": "Pallet Town",
    "occupation": [
      "Pokémon Watcher",
      "Lab Assistant"
    ],
    "affiliation": [
      "Professor Oak's Laboratory"
    ],
    "team": null,
    "role": "Traveling companion / Oak's assistant",
    "generation_introduced": "Generation I (anime, Orange Islands saga)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Adventures on the Orange Islands onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Ash Ketchum",
      "Misty",
      "Professor Oak"
    ],
    "rivals": [],
    "mentors": [
      "Professor Oak"
    ],
    "students": [],
    "signature_pokemon": "Scyther",
    "current_team": [
      "Scyther",
      "Marill",
      "Venonat"
    ],
    "past_teams": [],
    "battle_style": "Observational, prefers sketching Pokémon to battling",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 45,
      "intelligence": 80,
      "battle_skill": 40,
      "leadership": 55,
      "experience": 65
    },
    "quotes": [],
    "trivia": [
      "A Pallet Town native, making him a Kanto character despite joining the group in the Orange Islands",
      "Becomes Professor Oak's full-time assistant"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Joins Ash and Misty during the Orange Islands journey"
      },
      {
        "order": 2,
        "event": "Settles into a long-term role assisting Professor Oak"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 28,
    "slug": "duplica",
    "name": "Duplica",
    "japanese_name": "カメックス...",
    "romaji": null,
    "aliases": [
      "The Imitation Girl"
    ],
    "region": "Kanto",
    "origin": "Cherrygrove City area (traveling performer)",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Impressionist Performer",
      "Trainer"
    ],
    "affiliation": [],
    "team": null,
    "role": "Recurring anime character",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Ash Ketchum",
      "Misty",
      "Brock"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Ditto",
    "current_team": [
      "Ditto"
    ],
    "past_teams": [],
    "battle_style": "Impersonation-based battling using Ditto's Transform",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 40,
      "intelligence": 65,
      "battle_skill": 55,
      "leadership": 35,
      "experience": 55
    },
    "quotes": [],
    "trivia": [
      "Performs impressions of Pokémon and people using face paint and props",
      "Her Ditto struggled to copy Pokémon accurately until an emotional breakthrough with Ash's group"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Meets Ash's group while performing her Pokémon impersonation act"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 29,
    "slug": "copycat",
    "name": "Copycat",
    "japanese_name": "マネマネ",
    "romaji": "Manemane",
    "aliases": [],
    "region": "Kanto",
    "origin": "Saffron City",
    "home_town": "Saffron City",
    "current_residence": "Saffron City",
    "occupation": [],
    "affiliation": [],
    "team": null,
    "role": "Recurring anime/game character",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [
      "Pokémon: Indigo League"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Ash Ketchum"
    ],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": "Clefairy",
    "current_team": [
      "Clefairy"
    ],
    "past_teams": [],
    "battle_style": "Imitates other trainers' Pokémon and battle styles",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 30,
      "intelligence": 60,
      "battle_skill": 50,
      "leadership": 25,
      "experience": 45
    },
    "quotes": [],
    "trivia": [
      "Lives in a Saffron City house in the games and asks the player to find her lost Clefairy doll",
      "In the anime, she mimics Ash's own Pokémon and mannerisms"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Asks a passing trainer to retrieve her missing Clefairy doll from the Pokémon Fan Club"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 30,
    "slug": "cassidy",
    "name": "Cassidy",
    "japanese_name": "アポロ",
    "romaji": "Apollo",
    "aliases": [],
    "region": "Kanto",
    "origin": "Unknown",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Team Rocket Agent"
    ],
    "affiliation": [
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "Team Rocket Field Agent (rival duo to Jessie & James)",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Butch"
    ],
    "rivals": [
      "Jessie",
      "James",
      "Ash Ketchum"
    ],
    "mentors": [
      "Giovanni"
    ],
    "students": [],
    "signature_pokemon": "Raticate",
    "current_team": [
      "Raticate",
      "Houndour"
    ],
    "past_teams": [],
    "battle_style": "Scheming, competitive with Jessie and James",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 55,
      "intelligence": 68,
      "battle_skill": 62,
      "leadership": 50,
      "experience": 70
    },
    "quotes": [],
    "trivia": [
      "Butch's partner in a rival Team Rocket duo"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Carries out Team Rocket missions in competition with Jessie and James"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 31,
    "slug": "butch",
    "name": "Butch",
    "japanese_name": "コサブロウ",
    "romaji": "Kosaburo",
    "aliases": [],
    "region": "Kanto",
    "origin": "Unknown",
    "home_town": null,
    "current_residence": "Traveling",
    "occupation": [
      "Team Rocket Agent"
    ],
    "affiliation": [
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "Team Rocket Field Agent (rival duo to Jessie & James)",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League onward"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Cassidy"
    ],
    "rivals": [
      "Jessie",
      "James",
      "Ash Ketchum"
    ],
    "mentors": [
      "Giovanni"
    ],
    "students": [],
    "signature_pokemon": "Primeape",
    "current_team": [
      "Primeape",
      "Hitmonchan"
    ],
    "past_teams": [],
    "battle_style": "Scheming, competitive with Jessie and James",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 60,
      "intelligence": 62,
      "battle_skill": 60,
      "leadership": 48,
      "experience": 68
    },
    "quotes": [],
    "trivia": [
      "Often frustrated when other characters mispronounce his name as 'Butch'"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Carries out Team Rocket missions in competition with Jessie and James"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 32,
    "slug": "mr-fuji",
    "name": "Mr. Fuji",
    "japanese_name": "フジ老人",
    "romaji": "Fuji Rōjin",
    "aliases": [
      "The Elder of Lavender Town"
    ],
    "region": "Kanto",
    "origin": "Lavender Town",
    "home_town": "Lavender Town",
    "current_residence": "Lavender Town",
    "occupation": [
      "Pokémon House Caretaker"
    ],
    "affiliation": [
      "Pokémon House"
    ],
    "team": null,
    "role": "Caretaker of orphaned Pokémon",
    "generation_introduced": "Generation I",
    "game_appearances": [
      "Red",
      "Blue",
      "Yellow",
      "FireRed",
      "LeafGreen"
    ],
    "anime_appearances": [],
    "manga_appearances": [
      "Pokémon Adventures"
    ],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [
      "Team Rocket"
    ],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 20,
      "intelligence": 75,
      "battle_skill": 5,
      "leadership": 40,
      "experience": 80
    },
    "quotes": [],
    "trivia": [
      "Cares for orphaned Pokémon, including a young Cubone, at the Pokémon House",
      "Kidnapped by Team Rocket in Lavender Town, prompting the player to rescue him and receive the Poké Flute"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Rescued by the player from Team Rocket's hideout in the Pokémon Tower"
      },
      {
        "order": 2,
        "event": "Gifts the player the Poké Flute to wake Snorlax"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 33,
    "slug": "dr-fuji",
    "name": "Dr. Fuji",
    "japanese_name": "フジ博士",
    "romaji": "Fuji Hakase",
    "aliases": [],
    "region": "Kanto",
    "origin": "New Island (research facility)",
    "home_town": null,
    "current_residence": "Unknown / deceased in the original film",
    "occupation": [
      "Geneticist",
      "Researcher"
    ],
    "affiliation": [
      "Team Rocket (unwittingly funded)"
    ],
    "team": null,
    "role": "Creator of Mewtwo",
    "generation_introduced": "Generation I (movie: Mewtwo Strikes Back)",
    "game_appearances": [],
    "anime_appearances": [],
    "manga_appearances": [],
    "movie_appearances": [
      "Mewtwo Strikes Back"
    ],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [
      "Giovanni"
    ],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 15,
      "intelligence": 96,
      "battle_skill": 5,
      "leadership": 30,
      "experience": 85
    },
    "quotes": [],
    "trivia": [
      "A geneticist whose research on cloning a fossilized Mew, secretly funded by Giovanni, resulted in the creation of Mewtwo",
      "Distinct character from the game's Mr. Fuji despite the similar name"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leads the genetic research project that clones Mew into Mewtwo"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Unknown",
    "source_note": "Movie-only character (Mewtwo Strikes Back)"
  },
  {
    "id": 34,
    "slug": "goh",
    "name": "Goh",
    "japanese_name": "ゴウ",
    "romaji": "Gou",
    "aliases": [],
    "region": "Kanto",
    "origin": "Vermilion City",
    "home_town": "Vermilion City",
    "current_residence": "Sakuragi Institute, Vermilion City",
    "occupation": [
      "Research Fellow"
    ],
    "affiliation": [
      "Sakuragi Institute (Professor Cerise's Lab)"
    ],
    "team": null,
    "role": "Research partner to Ash Ketchum (Pokémon Journeys)",
    "generation_introduced": "Generation VIII (anime, Pokémon Journeys)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon Journeys: The Series"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [
      "Ash Ketchum",
      "Chloe Cerise"
    ],
    "rivals": [],
    "mentors": [
      "Professor Cerise"
    ],
    "students": [],
    "signature_pokemon": "Cinderace",
    "current_team": [
      "Cinderace",
      "Grookey",
      "Scorbunny (evolved)"
    ],
    "past_teams": [],
    "battle_style": "Ambitious catcher aiming to capture Mew",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": [],
    "dynamax": true,
    "terastal": false,
    "stats": {
      "strength": 60,
      "intelligence": 82,
      "battle_skill": 78,
      "leadership": 60,
      "experience": 65
    },
    "quotes": [],
    "trivia": [
      "Goal is to catch every Pokémon in existence, including the Mythical Mew",
      "Partners with Ash as a research fellow at the Sakuragi Institute in Vermilion City"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Meets Ash Ketchum after a chance encounter with a legendary Pokémon"
      },
      {
        "order": 2,
        "event": "Becomes a research fellow at the Sakuragi Institute"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  },
  {
    "id": 35,
    "slug": "domino",
    "name": "Domino",
    "japanese_name": "ドミノ",
    "romaji": "Domino",
    "aliases": [
      "Agent 009"
    ],
    "region": "Kanto",
    "origin": "Unknown",
    "home_town": null,
    "current_residence": "Unknown",
    "occupation": [
      "Team Rocket Elite Agent"
    ],
    "affiliation": [
      "Team Rocket"
    ],
    "team": "Team Rocket",
    "role": "High-ranking Team Rocket agent",
    "generation_introduced": "Generation I (anime)",
    "game_appearances": [],
    "anime_appearances": [
      "Pokémon: Indigo League / Orange Islands saga"
    ],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [
      "Ash Ketchum"
    ],
    "mentors": [
      "Giovanni"
    ],
    "students": [],
    "signature_pokemon": "Persian",
    "current_team": [
      "Persian",
      "Ditto"
    ],
    "past_teams": [],
    "battle_style": "Covert operative, more competent than typical Team Rocket agents",
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 65,
      "intelligence": 85,
      "battle_skill": 75,
      "leadership": 70,
      "experience": 78
    },
    "quotes": [],
    "trivia": [
      "One of Team Rocket's most capable and highly ranked agents"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Leads a covert operation testing a powerful new Pokémon cloning device"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Unknown"
  },
  {
    "id": 36,
    "slug": "baoba",
    "name": "Baoba",
    "japanese_name": "アスナロ",
    "romaji": "Asunaro",
    "aliases": [
      "The Safari Zone Warden"
    ],
    "region": "Kanto",
    "origin": "Fuchsia City",
    "home_town": "Fuchsia City",
    "current_residence": "Fuchsia City",
    "occupation": [
      "Safari Zone Warden"
    ],
    "affiliation": [
      "Kanto Safari Zone"
    ],
    "team": null,
    "role": "Safari Zone Warden",
    "generation_introduced": "Generation VII (Let's Go, Pikachu!/Eevee!)",
    "game_appearances": [
      "Let's Go, Pikachu!",
      "Let's Go, Eevee!"
    ],
    "anime_appearances": [],
    "manga_appearances": [],
    "movie_appearances": [],
    "parents": [],
    "siblings": [],
    "friends": [],
    "rivals": [],
    "mentors": [],
    "students": [],
    "signature_pokemon": null,
    "current_team": [],
    "past_teams": [],
    "battle_style": null,
    "preferred_type": null,
    "starter": null,
    "mega_evolution": [],
    "z_move": null,
    "dynamax": false,
    "terastal": false,
    "stats": {
      "strength": 40,
      "intelligence": 60,
      "battle_skill": 20,
      "leadership": 55,
      "experience": 60
    },
    "quotes": [],
    "trivia": [
      "Named and voiced only in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, where he oversees the Safari Zone"
    ],
    "timeline": [
      {
        "order": 1,
        "event": "Manages access to the Kanto Safari Zone for visiting trainers"
      }
    ],
    "image_url": null,
    "sprite_url": null,
    "theme_music": null,
    "badges": [],
    "achievements": [],
    "status": "Active"
  }
];
