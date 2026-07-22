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
    { id: "violet_city", name: "Violet City", type: "town", description: "An ancient city steeped in history. Home of Falkner's Flying-type Gym and the historic Sprout Tower.", x: 45, y: 80, isStation: false },
    { id: "azalea_town", name: "Azalea Town", type: "town", description: "A secluded mountain town famous for Slowpoke Wells, Charcoal makers, and Bugsy's Gym.", x: 25, y: 80 },
    { id: "goldenrod_city", name: "Goldenrod City", type: "town", description: "The giant commercial capital of Johto. Home of Whitney's Gym, the Radio Tower, and the Magnet Train station.", x: 25, y: 55, isStation: true, stationName: "Goldenrod Central Terminal", trainLines: ["Johto Express", "Interstate Magnet Train"] },
    { id: "ecruteak_city", name: "Ecruteak City", type: "town", description: "An ancient city steeped in history. Features the Kimono Dance Theater, Burned Tower, and Morty's Ghost Gym.", x: 45, y: 40, isStation: true, stationName: "Ecruteak Station", trainLines: ["Johto Express"] },
    { id: "olivine_city", name: "Olivine City", type: "town", description: "A clean seaside port town with a beautiful Glitter Lighthouse. Home of Jasmine's Steel-type Gym.", x: 25, y: 25, isStation: false },
    { id: "cianwood_city", name: "Cianwood City", type: "town", description: "A rugged, rocky island outpost on western seas. Home of Chuck's fighting Gym and rare medicines.", x: 8, y: 25 },
    { id: "mahogany_town", name: "Mahogany Town", type: "town", description: "A mysterious ninja hideout town. Features Pryce's Ice-type Gym and a secret Team Rocket hideout.", x: 65, y: 40, isStation: false },
    { id: "lake_of_rage", name: "Lake of Rage", type: "route", description: "A massive, deep lake in northern Johto where a Red Gyarados was spotted.", x: 65, y: 20, levelRange: [25, 30], nativePokemonIds: [129, 130] },
    { id: "blackthorn_city", name: "Blackthorn City", type: "town", description: "A mountainous retreat carved into rocky cliffs. Home of Clair's Dragon Gym and the Dragon's Den.", x: 85, y: 40, isStation: false },
    { id: "silver_league", name: "Silver League", type: "league", description: "The grand stadium constructed at Mt. Silver where Johto's ultimate championship is determined.", x: 85, y: 20, isStation: false }
  ],
  hoenn: [
    { id: "littleroot_town", name: "Littleroot Town", type: "town", description: "A quiet, verdant town on the southern edge of Hoenn. Home to Professor Birch's lab.", x: 15, y: 85, isStation: false },
    { id: "oldale_town", name: "Oldale Town", type: "town", description: "A small, breezy crossroad town acting as the gateway north.", x: 15, y: 68, isStation: false },
    { id: "petalburg_city", name: "Petalburg City", type: "town", description: "A beautiful town nestled in lush nature. Led by the Gym Leader Norman.", x: 30, y: 68, isStation: false },
    { id: "petalburg_woods", name: "Petalburg Woods", type: "forest", description: "A damp, mossy forest home to bug and grass species.", x: 42, y: 80, levelRange: [5, 9], nativePokemonIds: [265, 285] },
    { id: "rustboro_city", name: "Rustboro City", type: "town", description: "A highly advanced city of stone and brick, housing the Devon Corporation.", x: 30, y: 40, isStation: true, stationName: "Rustboro Station", trainLines: ["Hoenn Rail"] },
    { id: "dewford_town", name: "Dewford Town", type: "town", description: "A peaceful island town on the southern waters, famous for surfing and Granite Cave.", x: 12, y: 92, isStation: false },
    { id: "granite_cave", name: "Granite Cave", type: "cave", description: "A rocky subterranean cavern famous for ancient paintings and steel species.", x: 5, y: 92, levelRange: [10, 15], nativePokemonIds: [296, 302] },
    { id: "slateport_city", name: "Slateport City", type: "town", description: "A massive port metropolis with a major open-air marketplace and oceanic museum.", x: 50, y: 68, isStation: false },
    { id: "mauville_city", name: "Mauville City", type: "town", description: "The central electric grid hub of Hoenn, featuring multi-tiered pathways.", x: 50, y: 48, isStation: true, stationName: "Mauville Terminal", trainLines: ["Hoenn Rail", "Rustboro Line"] },
    { id: "fallarbor_town", name: "Fallarbor Town", type: "town", description: "A cozy farming community constantly showered in white volcanic soot.", x: 30, y: 22, isStation: false },
    { id: "lavaridge_town", name: "Lavaridge Town", type: "town", description: "A warm, volcanic hot-spring resort nestled at the base of Mt. Chimney.", x: 42, y: 32, isStation: false },
    { id: "fortree_city", name: "Fortree City", type: "town", description: "A unique jungle town where inhabitants live in elevated treehouses.", x: 72, y: 32, isStation: false },
    { id: "lilycove_city", name: "Lilycove City", type: "town", description: "A rich cultural city with a grand department store, museum, and harbor.", x: 86, y: 38, isStation: true, stationName: "Lilycove Station", trainLines: ["Hoenn Rail"] },
    { id: "mossdeep_city", name: "Mossdeep City", type: "town", description: "A pleasant island city with a high-tech Space Center rocket pad.", x: 94, y: 56, isStation: false },
    { id: "sootopolis_city", name: "Sootopolis City", type: "town", description: "A mystical city built inside a deep water-filled volcanic crater.", x: 80, y: 62, isStation: false },
    { id: "ever_grande_city", name: "Ever Grande City", type: "league", description: "The flower-covered mountain fortress where the Pokémon League is situated.", x: 94, y: 86, isStation: false }
  ],
  sinnoh: [
    { id: "twinleaf_town", name: "Twinleaf Town", type: "town", description: "A quiet, snow-capped village in southwest Sinnoh.", x: 12, y: 80 },
    { id: "sandgem_town", name: "Sandgem Town", type: "town", description: "A beautiful coastal town where Professor Rowan's lab resides.", x: 22, y: 80 },
    { id: "jubilife_city", name: "Jubilife City", type: "town", description: "The highly modern, high-tech center of Sinnoh, home to the Pokétch company.", x: 22, y: 60, isStation: true, stationName: "Jubilife Central", trainLines: ["Sinnoh Express"] },
    { id: "oreburgh_city", name: "Oreburgh City", type: "town", description: "A historic coal mining town framed by rugged red mountains.", x: 38, y: 60 },
    { id: "floaroma_town", name: "Floaroma Town", type: "town", description: "A floral community completely blanketed in endless fields of sweet flowers.", x: 22, y: 42 },
    { id: "eterna_city", name: "Eterna City", type: "town", description: "An ancient city rich in history, featuring a majestic legendary statue.", x: 42, y: 42 },
    { id: "mt_coronet", name: "Mt. Coronet", type: "mountain", description: "The giant mountain range splitting Sinnoh in half, steeped in divine lore.", x: 50, y: 50, levelRange: [15, 45], nativePokemonIds: [436, 299] },
    { id: "hearthome_city", name: "Hearthome_city", type: "town", description: "A highly cultural city featuring the Amity Square and Contest Hall.", x: 50, y: 68, isStation: true, stationName: "Hearthome Terminal", trainLines: ["Sinnoh Express", "Veilstone Link"] },
    { id: "solaceon_town", name: "Solaceon Town", type: "town", description: "A sunny, rustic farming village home to the ancient Solaceon Ruins.", x: 68, y: 55 },
    { id: "veilstone_city", name: "Veilstone City", type: "town", description: "A city carved directly out of solid rocky cliffs, famous for department stores.", x: 82, y: 42, isStation: true, stationName: "Veilstone Station", trainLines: ["Veilstone Link"] },
    { id: "pastoria_city", name: "Pastoria City", type: "town", description: "A warm coastal town bordering the Great Marsh wildlife reserve.", x: 68, y: 80 },
    { id: "celestic_town", name: "Celestic Town", type: "town", description: "An ancient shrine town preserved in the traditional style of old Sinnoh.", x: 50, y: 32 },
    { id: "canalave_city", name: "Canalave City", type: "town", description: "A breezy port city of canals, boasting a majestic library of ancient myths.", x: 5, y: 60 },
    { id: "snowpoint_city", name: "Snowpoint City", type: "town", description: "A freezing, snow-swept northern city containing the ancient Snowpoint Temple.", x: 50, y: 15 },
    { id: "sunyshore_city", name: "Sunyshore City", type: "town", description: "A high-tech solar city with elevated electric walkways.", x: 92, y: 68 },
    { id: "sinnoh_league", name: "Sinnoh League", type: "league", description: "The majestic castle summit where Sinnoh's champion challenges await.", x: 92, y: 45 }
  ],
  unova: [
    { id: "nuvema_town", name: "Nuvema Town", type: "town", description: "A peaceful coastal town where Professor Juniper's lab is located.", x: 48, y: 92 },
    { id: "accumula_town", name: "Accumula Town", type: "town", description: "A beautiful hillside city of stone plazas and musical steps.", x: 48, y: 78 },
    { id: "striaton_city", name: "Striaton City", type: "town", description: "A refined town known for its trainer school and garden-café gym.", x: 62, y: 68 },
    { id: "nacrene_city", name: "Nacrene City", type: "town", description: "An artistic city of restored brick warehouses and a historic museum.", x: 48, y: 62 },
    { id: "pinwheel_forest", name: "Pinwheel Forest", type: "forest", description: "A lush, maze-like forest of massive twisted trees and ancient ruins.", x: 32, y: 62, levelRange: [12, 17], nativePokemonIds: [540, 543] },
    { id: "castelia_city", name: "Castelia City", type: "town", description: "The giant soaring skyscraper metropolis of southern Unova.", x: 32, y: 82, isStation: true, stationName: "Castelia Central Station", trainLines: ["Unova Loop Line"] },
    { id: "nimbasa_city", name: "Nimbasa City", type: "town", description: "The sparkling entertainment center of Unova, with amusement parks and sports arenas.", x: 48, y: 48, isStation: true, stationName: "Nimbasa Hub", trainLines: ["Unova Loop Line", "Gear Station Express"] },
    { id: "driftveil_city", name: "Driftveil City", type: "town", description: "A major trade port city known for drawbridges, markets, and clay mines.", x: 28, y: 48 },
    { id: "chargestone_cave", name: "Chargestone Cave", type: "cave", description: "An electric cavern filled with glowing magnetic stones floating in mid-air.", x: 28, y: 32, levelRange: [26, 31], nativePokemonIds: [595, 599] },
    { id: "mistralton_city", name: "Mistralton City", type: "town", description: "A windy transport city featuring cargo runways and vegetable patches.", x: 28, y: 18 },
    { id: "icirrus_city", name: "Icirrus City", type: "town", description: "A wetland town famous for deep snow in winter and ancient Dragonspiral Tower.", x: 48, y: 18 },
    { id: "opelucid_city", name: "Opelucid City", type: "town", description: "A dual city where past and future merge, lined with grand dragon statues.", x: 72, y: 18 },
    { id: "lacunosa_town", name: "Lacunosa Town", type: "town", description: "A historic town fortified with high stone walls to guard against monsters.", x: 85, y: 32 },
    { id: "undella_town", name: "Undella Town", type: "town", description: "A high-end summer resort town with pristine sand beaches.", x: 85, y: 48 },
    { id: "humilau_city", name: "Humilau City", type: "town", description: "A unique marine city where houses float on wooden boardwalks over blue water.", x: 85, y: 18 },
    { id: "unova_league", name: "Unova League", type: "league", description: "The imposing stone temple housing the Unova Elite Four.", x: 65, y: 40 }
  ],
  kalos: [
    { id: "vaniville_town", name: "Vaniville Town", type: "town", description: "A beautiful, European-styled town in southern Kalos.", x: 50, y: 90 },
    { id: "aquacorde_town", name: "Aquacorde Town", type: "town", description: "A picturesque riverside town centered around a scenic water fountain.", x: 50, y: 80 },
    { id: "santalune_city", name: "Santalune City", type: "town", description: "A lovely floral city with brick alleys and elegant bench-lined parks.", x: 65, y: 75 },
    { id: "santalune_forest", name: "Santalune Forest", type: "forest", description: "A sun-dappled forest pathway home to colorful butterflies.", x: 65, y: 65, levelRange: [3, 7], nativePokemonIds: [661, 664] },
    { id: "lumiose_city", name: "Lumiose City", type: "town", description: "The star-shaped cultural capital of Kalos, centered around Prism Tower.", x: 50, y: 55, isStation: true, stationName: "Lumiose Station", trainLines: ["Kalos Transit"] },
    { id: "camphrier_town", name: "Camphrier Town", type: "town", description: "A quiet, historical town home to the medieval Shabboneau Castle.", x: 35, y: 55 },
    { id: "cyllage_city", name: "Cyllage City", type: "town", description: "A rugged seaside town built into rocky cliffs, with cycle tracks.", x: 15, y: 65 },
    { id: "ambrette_town", name: "Ambrette Town", type: "town", description: "A scenic clifftop coastal town housing a major Fossil lab.", x: 15, y: 78 },
    { id: "glittering_cave", name: "Glittering Cave", type: "cave", description: "A 3D crystalline cave passage shimmering with rare minerals.", x: 5, y: 78, levelRange: [14, 18], nativePokemonIds: [566, 688] },
    { id: "geosenge_town", name: "Geosenge Town", type: "town", description: "A mysterious town flanked by ancient monolithic stone pillars.", x: 15, y: 48 },
    { id: "shalour_city", name: "Shalour City", type: "town", description: "A seaside town famous for the Tower of Mastery and Mega Evolution lore.", x: 15, y: 35 },
    { id: "coumarine_city", name: "Coumarine City", type: "town", description: "A split coastal town linked by scenic mountain monorails.", x: 35, y: 25, isStation: true, stationName: "Coumarine Depot", trainLines: ["Kalos Transit"] },
    { id: "laverre_city", name: "Laverre City", type: "town", description: "A fairy-tale forest town built around an ancient 1,500-year-old tree.", x: 50, y: 25 },
    { id: "dendemille_town", name: "Dendemille Town", type: "town", description: "A breezy farming town centered around a massive rustic windmill.", x: 75, y: 35 },
    { id: "anistar_city", name: "Anistar City", type: "town", description: "A mysterious town home to a giant cosmic sundial made of pink crystal.", x: 85, y: 45 },
    { id: "couriway_town", name: "Couriway Town", type: "town", description: "A beautiful village famous for its spectacular roaring water streams.", x: 85, y: 60 },
    { id: "snowbelle_city", name: "Snowbelle City", type: "town", description: "A majestic frozen city blanketed under glistening eternal snow.", x: 75, y: 70 },
    { id: "kalos_league", name: "Kalos League", type: "league", description: "The spectacular gothic cathedral where Kalos champions are crowned.", x: 62, y: 55 }
  ],
  alola: [
    { id: "iki_town", name: "Iki Town", type: "town", description: "A serene mountaintop village on Melemele Island, hosting sacred festivals.", x: 18, y: 65 },
    { id: "hauoli_city", name: "Hau'oli City", type: "town", description: "A seaside shopping metropolis on Melemele Island, with palm-lined beaches.", x: 18, y: 45, isStation: true, stationName: "Hau'oli Ferry", trainLines: ["Alola Inter-Island"] },
    { id: "verdant_cavern", name: "Verdant Cavern", type: "cave", description: "A natural cavern hollowed out by trial Pokémon on Melemele Island.", x: 30, y: 35, levelRange: [8, 12], nativePokemonIds: [734, 735] },
    { id: "heahea_city", name: "Heahea City", type: "town", description: "A bright, welcoming port town on Akala Island, built by surf travelers.", x: 48, y: 45, isStation: true, stationName: "Heahea Ferry", trainLines: ["Alola Inter-Island"] },
    { id: "paniola_town", name: "Paniola Town", type: "town", description: "A rustic, western-style ranch town centered around dairy pastures.", x: 48, y: 30 },
    { id: "konikoni_city", name: "Konikoni City", type: "town", description: "A coastal trade town on Akala Island, rich in traditional market stalls.", x: 48, y: 65 },
    { id: "lush_jungle", name: "Lush Jungle", type: "forest", description: "A dense, rain-soaked forest canopy rich in sweet berries and grass species.", x: 58, y: 30, levelRange: [16, 22], nativePokemonIds: [761, 762] },
    { id: "malie_city", name: "Malie City", type: "town", description: "An elegant, eastern-styled city on Ula'ula Island, with traditional gardens.", x: 78, y: 30, isStation: true, stationName: "Malie Ferry", trainLines: ["Alola Inter-Island"] },
    { id: "mount_hokulani", name: "Mount Hokulani", type: "mountain", description: "A high mountain peak housing Alola's main astronomical observatory.", x: 78, y: 15, levelRange: [25, 30], nativePokemonIds: [774, 777] },
    { id: "po_town", name: "Po Town", type: "town", description: "A dark, graffiti-covered walled city occupied by Team Skull.", x: 70, y: 45 },
    { id: "seafolk_village", name: "Seafolk Village", type: "town", description: "A floating village on Poni Island where people live on customized houseboats.", x: 92, y: 65 },
    { id: "vast_poni_canyon", name: "Vast Poni Canyon", type: "cave", description: "A massive, rugged rock canyon where sacred trials are held.", x: 92, y: 45, levelRange: [40, 45], nativePokemonIds: [782, 783] },
    { id: "mount_lanakila", name: "Mount Lanakila", type: "league", description: "The highest, snow-swept mountain summit hosting the newly built Alola Pokémon League.", x: 78, y: 55 }
  ],
  galar: [
    { id: "postwick", name: "Postwick", type: "town", description: "A tiny farming village with sheep grazing and cozy thatched cottages.", x: 50, y: 92 },
    { id: "wedgehurst", name: "Wedgehurst", type: "town", description: "A pleasant suburban town housing Professor Magnolia's research house.", x: 50, y: 82 },
    { id: "wild_area", name: "The Wild Area", type: "forest", description: "A vast, untamed expanse of wilderness home to powerful wandering species.", x: 50, y: 68, levelRange: [7, 60], nativePokemonIds: [819, 821] },
    { id: "motostoke", name: "Motostoke", type: "town", description: "A massive steam-powered Victorian industrial city of gears and red brick.", x: 50, y: 55, isStation: true, stationName: "Motostoke Station", trainLines: ["Galar Transit"] },
    { id: "turffield", name: "Turffield", type: "town", description: "A peaceful agricultural town famous for giant geoglyphs on green hills.", x: 30, y: 55 },
    { id: "hulbury", name: "Hulbury", type: "town", description: "A busy seaport town with active ship docks and lively seafood markets.", x: 70, y: 55, isStation: true, stationName: "Hulbury Station", trainLines: ["Galar Transit"] },
    { id: "hammerlocke", name: "Hammerlocke", type: "town", description: "A grand medieval castle city home to the historic energy plant.", x: 50, y: 38, isStation: true, stationName: "Hammerlocke Station", trainLines: ["Galar Transit"] },
    { id: "stow_on_side", name: "Stow-on-Side", type: "town", description: "A dusty desert town situated at the base of tall canyon walls.", x: 30, y: 38 },
    { id: "balloonlea", name: "Balloonlea", type: "town", description: "A magical forest town surrounded by glowing bioluminescent mushrooms.", x: 30, y: 22 },
    { id: "circhester", name: "Circhester", type: "town", description: "A beautiful cold stone city built around ancient steaming hot springs.", x: 70, y: 38 },
    { id: "spikemuth", name: "Spikemuth", type: "town", description: "A neon-lit punk rock street alleyway, run by Gym Leader Piers.", x: 70, y: 22 },
    { id: "wyndon", name: "Wyndon", type: "league", description: "The glittering British-style metropolis hosting the massive Champion Cup Stadium.", x: 50, y: 12, isStation: true, stationName: "Wyndon Terminus", trainLines: ["Galar Transit"] }
  ],
  hisui: [
    { id: "jubilife_village", name: "Jubilife Village", type: "town", description: "The safe, bustling wooden outpost of the Galaxy Expedition Team in ancient Hisui.", x: 50, y: 50 },
    { id: "obsidian_fieldlands", name: "Obsidian Fieldlands", type: "forest", description: "A vast grassy fieldland rich in wild rivers, flowery hills, and peaceful forests.", x: 32, y: 68, levelRange: [2, 30], nativePokemonIds: [399, 403] },
    { id: "crimson_mirelands", name: "Crimson Mirelands", type: "cave", description: "A wild marshland filled with deep red mud pools, ruins, and swamp nests.", x: 68, y: 68, levelRange: [15, 45], nativePokemonIds: [453, 455] },
    { id: "cobalt_coastlands", name: "Cobalt Coastlands", type: "town", description: "A beautiful coastline framing sandy spits, rocky volcanoes, and blue open oceans.", x: 78, y: 35, levelRange: [25, 55], nativePokemonIds: [422, 423] },
    { id: "coronet_highlands", name: "Coronet Highlands", type: "mountain", description: "A dangerous, vertical alpine region climbing to the ancient Temple of Sinnoh.", x: 50, y: 28, levelRange: [35, 65], nativePokemonIds: [412, 413] },
    { id: "alabaster_icelands", name: "Alabaster Icelands", type: "mountain", description: "A freezing wilderness locked in eternal winter, featuring deep glaciers.", x: 22, y: 35, levelRange: [45, 70], nativePokemonIds: [443, 444] },
    { id: "temple_of_sinnoh", name: "Temple of Sinnoh", type: "league", description: "The majestic ancient temple ruin sitting at Mt. Coronet's summit.", x: 50, y: 12 }
  ],
  paldea: [
    { id: "cabo_poco", name: "Cabo Poco", type: "town", description: "A peaceful, sun-kissed coastal villa at the southern tip of Paldea.", x: 50, y: 92 },
    { id: "los_platos", name: "Los Platos", type: "town", description: "A lovely red-roofed village with active trainer training rings.", x: 50, y: 80 },
    { id: "mesagoza", name: "Mesagoza", type: "town", description: "The massive academic capital of Paldea, housing Naranja and Uva Academies.", x: 50, y: 65, isStation: true, stationName: "Mesagoza Station", trainLines: ["Paldea Circular"] },
    { id: "cortondo", type: "town", name: "Cortondo", description: "A scenic olive-growing town famous for pastries and Gym Leader Katy.", x: 30, y: 70 },
    { id: "artazon", type: "town", name: "Artazon", description: "A beautiful artistic city decorated with grass sculptures by Brassius.", x: 70, y: 70 },
    { id: "levincia", type: "town", name: "Levincia", description: "A high-tech, neon-lit seaside city of streamers, led by Iono.", x: 88, y: 55, isStation: true, stationName: "Levincia Bay Station", trainLines: ["Paldea Circular"] },
    { id: "cascarrafa", type: "town", name: "Cascarrafa", description: "A modern desert oasis city built over multiple cascading water lifts.", x: 15, y: 55, isStation: true, stationName: "Cascarrafa Station", trainLines: ["Paldea Circular"] },
    { id: "porto_marinada", type: "town", name: "Porto Marinada", description: "A bustling seaside port town housing a massive dynamic seafood auction market.", x: 10, y: 40 },
    { id: "medali", type: "town", name: "Medali", description: "A busy inland culinary hub city, home to Larry's famous gym restaurant.", x: 35, y: 38, isStation: true, stationName: "Medali Hub", trainLines: ["Paldea Circular"] },
    { id: "montenevera", type: "town", name: "Montenevera", description: "A cozy mountain village nested high in the snow, home to Ryme's concert stage.", x: 50, y: 22 },
    { id: "zapapico", type: "town", name: "Zapapico", description: "A small, industrial mining village carved into high red canyon walls.", x: 70, y: 38 },
    { id: "alfornada", type: "town", name: "Alfornada", description: "An isolated mountain city famous for pottery, observatory scopes, and Tulip.", x: 15, y: 85 },
    { id: "tagtree_thicket", type: "forest", name: "Tagtree Thicket", description: "A forest of trees painted in strange patterns by wild Grafaiai.", x: 55, y: 38, levelRange: [25, 32], nativePokemonIds: [944, 945] },
    { id: "area_zero", type: "cave", name: "Area Zero (The Great Crater)", description: "The mysterious misty crater of Paldea, home to ancient Paradox Pokémon.", x: 50, y: 48, levelRange: [55, 68], nativePokemonIds: [978, 984] },
    { id: "pokemon_league_paldea", type: "league", name: "Paldea Pokémon League", description: "The high mountain summit building where Elite Four challenges are fought.", x: 62, y: 60 }
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
  ],
  hoenn: [
    ["littleroot_town", "oldale_town"],
    ["oldale_town", "petalburg_city"],
    ["petalburg_city", "petalburg_woods"],
    ["petalburg_woods", "rustboro_city"],
    ["rustboro_city", "dewford_town"],
    ["dewford_town", "granite_cave"],
    ["dewford_town", "slateport_city"],
    ["slateport_city", "mauville_city"],
    ["mauville_city", "lavaridge_town"],
    ["lavaridge_town", "fallarbor_town"],
    ["mauville_city", "fortree_city"],
    ["fortree_city", "lilycove_city"],
    ["lilycove_city", "mossdeep_city"],
    ["mossdeep_city", "sootopolis_city"],
    ["sootopolis_city", "ever_grande_city"]
  ],
  sinnoh: [
    ["twinleaf_town", "sandgem_town"],
    ["sandgem_town", "jubilife_city"],
    ["jubilife_city", "oreburgh_city"],
    ["jubilife_city", "floaroma_town"],
    ["floaroma_town", "eterna_city"],
    ["eterna_city", "mt_coronet"],
    ["mt_coronet", "hearthome_city"],
    ["hearthome_city", "solaceon_town"],
    ["solaceon_town", "veilstone_city"],
    ["veilstone_city", "pastoria_city"],
    ["hearthome_city", "pastoria_city"],
    ["eterna_city", "celestic_town"],
    ["celestic_town", "solaceon_town"],
    ["jubilife_city", "canalave_city"],
    ["celestic_town", "snowpoint_city"],
    ["veilstone_city", "sunyshore_city"],
    ["sunyshore_city", "sinnoh_league"]
  ],
  unova: [
    ["nuvema_town", "accumula_town"],
    ["accumula_town", "striaton_city"],
    ["striaton_city", "nacrene_city"],
    ["nacrene_city", "pinwheel_forest"],
    ["pinwheel_forest", "castelia_city"],
    ["castelia_city", "nimbasa_city"],
    ["nimbasa_city", "driftveil_city"],
    ["driftveil_city", "chargestone_cave"],
    ["chargestone_cave", "mistralton_city"],
    ["mistralton_city", "icirrus_city"],
    ["icirrus_city", "opelucid_city"],
    ["opelucid_city", "lacunosa_town"],
    ["lacunosa_town", "undella_town"],
    ["undella_town", "humilau_city"],
    ["opelucid_city", "unova_league"]
  ],
  kalos: [
    ["vaniville_town", "aquacorde_town"],
    ["aquacorde_town", "santalune_city"],
    ["santalune_city", "santalune_forest"],
    ["santalune_forest", "lumiose_city"],
    ["lumiose_city", "camphrier_town"],
    ["camphrier_town", "cyllage_city"],
    ["cyllage_city", "ambrette_town"],
    ["ambrette_town", "glittering_cave"],
    ["cyllage_city", "geosenge_town"],
    ["geosenge_town", "shalour_city"],
    ["shalour_city", "coumarine_city"],
    ["coumarine_city", "laverre_city"],
    ["laverre_city", "lumiose_city"],
    ["lumiose_city", "dendemille_town"],
    ["dendemille_town", "anistar_city"],
    ["anistar_city", "couriway_town"],
    ["couriway_town", "snowbelle_city"],
    ["snowbelle_city", "kalos_league"]
  ],
  alola: [
    ["iki_town", "hauoli_city"],
    ["hauoli_city", "verdant_cavern"],
    ["verdant_cavern", "heahea_city"],
    ["heahea_city", "paniola_town"],
    ["paniola_town", "lush_jungle"],
    ["lush_jungle", "konikoni_city"],
    ["konikoni_city", "malie_city"],
    ["malie_city", "mount_hokulani"],
    ["malie_city", "po_town"],
    ["po_town", "seafolk_village"],
    ["seafolk_village", "vast_poni_canyon"],
    ["vast_poni_canyon", "mount_lanakila"]
  ],
  galar: [
    ["postwick", "wedgehurst"],
    ["wedgehurst", "wild_area"],
    ["wild_area", "motostoke"],
    ["motostoke", "turffield"],
    ["motostoke", "hulbury"],
    ["motostoke", "hammerlocke"],
    ["hammerlocke", "stow_on_side"],
    ["stow_on_side", "balloonlea"],
    ["hammerlocke", "circhester"],
    ["circhester", "spikemuth"],
    ["circhester", "wyndon"]
  ],
  hisui: [
    ["jubilife_village", "obsidian_fieldlands"],
    ["jubilife_village", "crimson_mirelands"],
    ["jubilife_village", "cobalt_coastlands"],
    ["jubilife_village", "coronet_highlands"],
    ["jubilife_village", "alabaster_icelands"],
    ["coronet_highlands", "temple_of_sinnoh"]
  ],
  paldea: [
    ["cabo_poco", "los_platos"],
    ["los_platos", "mesagoza"],
    ["mesagoza", "cortondo"],
    ["mesagoza", "artazon"],
    ["artazon", "levincia"],
    ["cortondo", "cascarrafa"],
    ["cascarrafa", "porto_marinada"],
    ["porto_marinada", "medali"],
    ["medali", "montenevera"],
    ["medali", "tagtree_thicket"],
    ["tagtree_thicket", "zapapico"],
    ["zapapico", "levincia"],
    ["medali", "area_zero"],
    ["area_zero", "pokemon_league_paldea"],
    ["mesagoza", "alfornada"]
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
  ],
  hoenn: [
    ["rustboro_city", "mauville_city"],
    ["mauville_city", "lilycove_city"]
  ],
  sinnoh: [
    ["jubilife_city", "hearthome_city"],
    ["hearthome_city", "veilstone_city"]
  ],
  unova: [
    ["castelia_city", "nimbasa_city"]
  ],
  kalos: [
    ["lumiose_city", "coumarine_city"]
  ],
  alola: [
    ["hauoli_city", "heahea_city"],
    ["heahea_city", "malie_city"]
  ],
  galar: [
    ["motostoke", "hulbury"],
    ["hulbury", "hammerlocke"],
    ["hammerlocke", "wyndon"]
  ],
  hisui: [],
  paldea: [
    ["mesagoza", "levincia"],
    ["levincia", "cascarrafa"],
    ["cascarrafa", "medali"]
  ]
};
