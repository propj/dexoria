export interface MapNode {
  id: string;
  name: string;
  type: "town" | "route" | "forest" | "cave" | "mountain" | "league";
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
  levelRange?: [number, number];
  nativePokemonIds?: number[];
  // Train specific info
  isStation?: boolean;
  stationName?: string;
  trainLines?: string[];
}

export const REGIONAL_MAPS: Record<string, MapNode[]> = {
  kanto: [
    { id: "pallet_town", name: "Pallet Town", type: "town", description: "A quiet town nestled in southwest Kanto. Home to Prof. Oak's research lab and the player's cozy house.", x: 18, y: 80, isStation: false },
    { id: "viridian_city", name: "Viridian City", type: "town", description: "A peaceful green city bordered by deep woodlands. Contains the final Gym led by the mysterious Giovanni.", x: 18, y: 55, isStation: false },
    { id: "pewter_city", name: "Pewter City", type: "town", description: "A historic city carved in stone. Features the Pewter Museum of Science and Brock's Rock-type Gym.", x: 18, y: 25, isStation: false },
    { id: "mt_moon", name: "Mt. Moon", type: "cave", description: "A mystical mountain cave passage famous for falling meteorites, rare Moon Stones, and Clefairy sightings.", x: 38, y: 15, levelRange: [6, 12], nativePokemonIds: [35, 74] },
    { id: "cerulean_city", name: "Cerulean City", type: "town", description: "A beautiful floral city on northern waters. Home of Misty's Water-type Gym and the scenic Nugget Bridge.", x: 58, y: 15, isStation: true, stationName: "Cerulean Terminal", trainLines: ["Kanto Central Line"] },
    { id: "rock_tunnel", name: "Rock Tunnel", type: "cave", description: "A dark, natural cave cavern that requires Flash to navigate. Wild Zubat, Geodude, and Machop crawl here.", x: 82, y: 15, levelRange: [12, 18], nativePokemonIds: [41, 74] },
    { id: "lavender_town", name: "Lavender Town", type: "town", description: "A solemn, quiet town dominated by the giant Pokémon Tower, a final resting place for departed Pokémon.", x: 82, y: 45, isStation: false },
    { id: "saffron_city", name: "Saffron City", type: "town", description: "The sprawling golden metropolis of Kanto. Home of Silph Co., Sabrina's Psychic Gym, and the central railway hub.", x: 58, y: 45, isStation: true, stationName: "Saffron Central Station", trainLines: ["Kanto Central Line", "Kanto South Express", "Interstate Magnet Train"] },
    { id: "celadon_city", name: "Celadon City", type: "town", description: "A wealthy, lively city of giant department stores, gaming centers, and Erika's fragrant Grass-type Gym.", x: 38, y: 45, isStation: true, stationName: "Celadon Depot", trainLines: ["Kanto Central Line"] },
    { id: "vermilion_city", name: "Vermilion City", type: "town", description: "A beautiful coastal port city on southern bays. Home of the S.S. Anne cruise liner and Lt. Surge's Gym.", x: 58, y: 72, isStation: true, stationName: "Vermilion Harbor Pier", trainLines: ["Kanto South Express"] },
    { id: "fuchsia_city", name: "Fuchsia City", type: "town", description: "A lush forest town surrounded by wild vegetation. Features the famous Safari Zone and Koga's Poison-type Gym.", x: 38, y: 80, isStation: false },
    { id: "cinnabar_island", name: "Cinnabar Island", type: "mountain", description: "A volcanic island housing the Pokémon Mansion ruins and Blaine's volcanic Fire-type Gym.", x: 18, y: 92, isStation: false },
    { id: "indigo_plateau", name: "Indigo Plateau", type: "league", description: "The ultimate destination for elite trainers. Hosts the Pokémon League, Elite Four, and Champion battle arena.", x: 6, y: 35, isStation: false }
  ],
  johto: [
    { id: "new_bark_town", name: "New Bark Town", type: "town", description: "The quiet, scenic town where the winds of change blow. Home of Prof. Elm's research laboratory.", x: 85, y: 80 },
    { id: "cherrygrove_city", name: "Cherrygrove City", type: "town", description: "A beautiful coastal town surrounded by cherry blossoms and ocean sprays.", x: 65, y: 80 },
    { id: "violet_city", name: "Violet City", type: "town", description: "An ancient city seeped in history. Home of Falkner's Flying-type Gym and the historic Sprout Tower.", x: 45, y: 80, isStation: false },
    { id: "azalea_town", name: "Azalea Town", type: "town", description: "A secluded mountain town famous for Slowpoke Wells, Charcoal makers, and Bugsy's Gym.", x: 25, y: 80 },
    { id: "goldenrod_city", name: "Goldenrod City", type: "town", description: "The giant commercial capital of Johto. Home of Whitney's Gym, the Radio Tower, and the Magnet Train station.", x: 25, y: 55, isStation: true, stationName: "Goldenrod Central Terminal", trainLines: ["Johto Express", "Interstate Magnet Train"] },
    { id: "ecruteak_city", name: "Ecruteak City", type: "town", description: "An ancient city steeped in history. Features the Kimono Dance Theater, Burned Tower, and Morty's Ghost Gym.", x: 45, y: 40, isStation: true, stationName: "Ecruteak Station", trainLines: ["Johto Express"] },
    { id: "olivine_city", name: "Olivine City", type: "town", description: "A clean seaside port town with a beautiful Glitter Lighthouse. Home of Jasmine's Steel-type Gym.", x: 25, y: 25, isStation: false },
    { id: "cianwood_city", name: "Cianwood City", type: "town", description: "A rugged, rocky island outpost on western seas. Home of Chuck's fighting Gym and rare medicines.", x: 8, y: 25 },
    { id: "mahogany_town", name: "Mahogany Town", type: "town", description: "A mysterious ninja hideout town. Features Pryce's Ice-type Gym and a secret Team Rocket hideout.", x: 65, y: 40, isStation: false },
    { id: "lake_of_rage", name: "Lake of Rage", type: "route", description: "A massive, deep lake in northern Johto where a Red Gyarados was spotted.", x: 65, y: 20, levelRange: [25, 30], nativePokemonIds: [129, 130] },
    { id: "blackthorn_city", name: "Blackthorn City", type: "town", description: "A mountainous retreat carved into rocky cliffs. Home of Clair's Dragon Gym and the Dragon's Den.", x: 85, y: 40, isStation: false },
    { id: "silver_league", name: "Silver League", type: "league", description: "The grand stadium constructed at Mt. Silver where Johto's ultimate championship is determined.", x: 85, y: 20, isStation: false }
  ]
};

export const MAP_CONNECTIONS: Record<string, [string, string][]> = {
  kanto: [
    ["pallet_town", "viridian_city"],
    ["viridian_city", "pewter_city"],
    ["pewter_city", "mt_moon"],
    ["mt_moon", "cerulean_city"],
    ["cerulean_city", "saffron_city"],
    ["cerulean_city", "rock_tunnel"],
    ["rock_tunnel", "lavender_town"],
    ["lavender_town", "saffron_city"],
    ["lavender_town", "vermilion_city"],
    ["saffron_city", "celadon_city"],
    ["saffron_city", "vermilion_city"],
    ["celadon_city", "fuchsia_city"],
    ["vermilion_city", "fuchsia_city"],
    ["fuchsia_city", "cinnabar_island"],
    ["cinnabar_island", "pallet_town"],
    ["viridian_city", "indigo_plateau"]
  ],
  johto: [
    ["new_bark_town", "cherrygrove_city"],
    ["cherrygrove_city", "violet_city"],
    ["violet_city", "azalea_town"],
    ["azalea_town", "goldenrod_city"],
    ["goldenrod_city", "ecruteak_city"],
    ["ecruteak_city", "olivine_city"],
    ["olivine_city", "cianwood_city"],
    ["ecruteak_city", "mahogany_town"],
    ["mahogany_town", "lake_of_rage"],
    ["mahogany_town", "blackthorn_city"],
    ["blackthorn_city", "silver_league"]
  ]
};

export const RAILWAY_CONNECTIONS: Record<string, [string, string][]> = {
  kanto: [
    ["saffron_city", "vermilion_city"],
    ["saffron_city", "celadon_city"],
    ["saffron_city", "cerulean_city"]
  ],
  johto: [
    ["goldenrod_city", "ecruteak_city"]
  ]
};
