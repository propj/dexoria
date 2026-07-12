export interface GenerationLore {
  id: number;
  title: string;
  backstory: string;
  legendaryConflict: string;
  regionalCulture: string;
  trivia: string;
  culturalInfluence: string;
}

export const GENERATION_LORE_DATA: Record<number, GenerationLore> = {
  1: {
    id: 1,
    title: "The Genesis of Kanto & Cloning Breakthroughs",
    backstory: "In the quiet region of Kanto, early Pokémon science was driven by simple curiosity and the birth of the modern Pokédex by Professor Oak. However, things turned dark in the secret laboratory on Cinnabar Island, where researchers attempted to clone the mythical ancestor Pokémon, Mew. This gene-splicing experiment resulted in Mewtwo—a creature of pure psychic wrath that eventually destroyed its creators and fled to Cerulean Cave.",
    legendaryConflict: "The ultimate clash of Gen I is the legacy of Mew and Mewtwo: the conflict between pure, innocent nature and the unchecked hubris of human bio-engineering. Meanwhile, the Legendary Birds—Articuno, Zapdos, and Moltres—guarded their respective elemental islands in the surrounding oceans, maintaining the climatic equilibrium of the continent.",
    regionalCulture: "Kanto is characterized by its rustic simplicity and rapid technological expansion. Cities like Celadon and Saffron represent major urban expansions, while Lavender Town is the spiritual heartland, harboring the Pokémon Tower—a sacred memorial cemetery where trainers lay their departed partners to rest.",
    trivia: "In the Japanese Red & Green games, Cinnabar Island's Pokémon Mansion journals document Mew giving birth to Mewtwo on July 6th, confirming that Mewtwo was biologically born rather than completely synthetic.",
    culturalInfluence: "Introduced the iconic Pokémon League dynamic, the Indigo Plateau, and the notorious villain syndicate Team Rocket under the leadership of Gym Leader Giovanni."
  },
  2: {
    id: 2,
    title: "The Sacred Brass Tower & The Phoenix's Rebirth",
    backstory: "Johto is deeply rooted in ancient history and spiritual harmony. 150 years before the modern era, lightning struck the Brass Tower in Ecruteak City, setting it ablaze for three days. Three nameless Pokémon perished in the flames. Ho-Oh, the legendary rainbow phoenix, descended from the heavens and resurrected them as the Legendary Beasts—Raikou, Entei, and Suicune—embodying the lightning that struck, the fire that burned, and the rain that quenched the fire.",
    legendaryConflict: "While Ho-Oh watches over the heavens from the Bell Tower, Lugia—the Guardian of the Sea—originally nested on the Brass Tower (now the Burned Tower) but retreated to the whirlpool depths of the Whirl Islands to prevent its immense wing power from causing further destructive storms.",
    regionalCulture: "Johto's culture is centered on respecting tradition and deep spiritual folklore. From the kimono dancers of Ecruteak to the sacred dragon shrines of Blackthorn City, people live alongside Pokémon in deep religious symbiosis, honoring the natural forces of the earth.",
    trivia: "The Ecruteak Eeveelution Kimono Girls perform traditional dances that act as historical reenactments of Ho-Oh's descent, preserving the folklore across generations.",
    culturalInfluence: "Introduced the legend of the Celebi inside the Ilex Forest, showing that Johto is a place where space-time boundaries are remarkably fluid."
  },
  3: {
    id: 3,
    title: "The Clash of Land, Sea, and Sky",
    backstory: "The tropical region of Hoenn was forged through a primordial cataclysmic struggle. Groudon, the embodiment of landmasses, and Kyogre, the lord of the torrential oceans, fought for supremacy over the Earth's surface. Groudon sought to dry the seas and expand the continents, while Kyogre summoned endless downpours to submerge the world in deep oceans.",
    legendaryConflict: "The colossal war threatened to tear Hoenn apart. Rayquaza, the dragon lord of the ozone layer, descended from the sky and released a piercing roar that neutralized the primal energy of both Groudon and Kyogre, forcing them into a deep slumber and restoring environmental balance.",
    regionalCulture: "Hoenn is a geographically diverse region, containing volcanic ash-fields, vast oceans, hot springs, and floating island towns like Pacifidlog. Its residents have adapted directly to extreme weather and geographical shifts, promoting active environmental science and nature exploration.",
    trivia: "Hoenn is the first region where trainers could dive deep underwater into the trenches to find ancient ruins (Abyssal Ruins containing Braille messages regarding the Regis).",
    culturalInfluence: "Introduced the Regis (Regirock, Regice, Registeel) who were sealed away in caves by ancient humans who feared their enormous elemental powers."
  },
  4: {
    id: 4,
    title: "The Myth of Creation & The Distortion Realm",
    backstory: "Sinnoh is the birthplace of the universe in Pokémon cosmology. According to ancient legends, a single egg emerged from the void of nothingness, hatching into Arceus—the Original One. Arceus shaped the cosmos and created Dialga to rule time, Palkia to rule space, and Giratina to govern antimatter and the dimensions of gravity.",
    legendaryConflict: "Giratina was deemed too violent and destructive, resulting in its banishment by Arceus to the Distortion World—a bizarre dimension where time does not flow and space is completely warped. At Spear Pillar, on Mount Coronet, Cyrus of Team Galactic attempted to chain Dialga and Palkia to rebuild the universe, nearly collapsing reality until Giratina dragged him into the Distortion Realm.",
    regionalCulture: "Sinnoh is a harsh, snow-capped mountainous terrain split by the grand Mt. Coronet. Its people are deeply philosophical, studying ancient folklore, mythology, and archaeological ruins to understand the fabric of reality itself.",
    trivia: "Mount Coronet is heavily saturated with special electromagnetic fields that trigger unique evolutions in certain species like Magneton and Nosepass.",
    culturalInfluence: "Introduced the Lake Guardians (Uxie, Mesprit, Azelf) representing the concepts of knowledge, emotion, and willpower bestowed upon humanity by Arceus."
  },
  5: {
    id: 5,
    title: "Truth, Ideals, and the Splitting of the Dragon",
    backstory: "Unova's history is shaped by a deep philosophical conflict between twin princes. Long ago, they ruled Unova alongside a single, magnificent Dragon Pokémon. However, they clashed over their paths: the older prince sought 'Truth' (uncompromising reality), while the younger prince pursued 'Ideals' (what the world could be). Unable to resolve their dispute, the dragon split its soul into Reshiram (representing Truth) and Zekrom (representing Ideals).",
    legendaryConflict: "The separation left behind an empty, freezing husk: Kyurem. Kyurem represents the absolute zero—the complete absence of truth and ideals. If reunited with either dragon using the DNA Splicers, Kyurem can absorb their power to form Black Kyurem or White Kyurem, threatening to freeze the entire continent.",
    regionalCulture: "Unova is a highly modernized, multicultural metropolis representing massive architectural feats, drawbridges, and busy harbors. It is a melting pot of cultures, combining dense urban blocks with rich historical structures like the Dragonspiral Tower.",
    trivia: "Unova is modeled after New York City. The central bridges represent the outer boroughs, and Castelia City represents Lower Manhattan with its tall skyscrapers and coffee shops.",
    culturalInfluence: "Highlighted the ethical debate of Pokémon liberation spearheaded by N and Team Plasma, questioning if trainers are truly partners or captors."
  },
  6: {
    id: 6,
    title: "The Ultimate Weapon & Mega Evolution",
    backstory: "3,000 years ago, a devastating war raged in Kalos. A king named AZ loved his partner Floette dearly, but it was forced into battle and killed. Driven by immense grief, AZ built a giant machine—the Ultimate Weapon—to resurrect his beloved Floette. He succeeded, but his obsession led him to use the weapon's life-draining force to obliterate both warring armies, granting him immortality but causing his Floette to leave him in disgust.",
    legendaryConflict: "The raw cosmic energy released by the Ultimate Weapon crystallized into Mega Stones across the region. Xerneas, the embodiment of eternal life, and Yveltal, the cocoon of total destruction, represent the dual energies of the weapon that AZ built, influencing the evolutionary potential of all living things.",
    regionalCulture: "Kalos is known for its high fashion, beautiful châteaux, artistic cafes, and deep romanticism. Lumiose City, with its Prism Tower, acts as the cultural and fashion capital of the Pokémon world.",
    trivia: "The legendary Zygarde acts as the ecosystem's cellular watchdog, assembling itself into various cell percentages (10%, 50%, 100% Complete Form) if the balance between life and death is threatened.",
    culturalInfluence: "Introduced the concept of Mega Evolution, showing that Pokémon can temporarily tap into the energy of the Ultimate Weapon through deep bonds with their trainers."
  },
  7: {
    id: 7,
    title: "The Light That Fell & The Ultra Wormholes",
    backstory: "Alola is an archipelago steeped in celestial worship and dimension-traveling anomalies. In ancient times, a glowing entity of pure light named Necrozma fell from an alternate dimension, searching for light to feed its core. It attacked the legendary Solgaleo and Lunala, stealing their light and plunging the region into darkness until the island guardians drove it back into the Ultra Wormholes.",
    legendaryConflict: "The dimensional friction caused by Necrozma's arrival tore open Ultra Wormholes across Alola, allowing bizarre alien creatures known as Ultra Beasts (such as Nihilego and Buzzwole) to leak into the tropical islands, causing chaos until captured by specialized Beast Balls.",
    regionalCulture: "Alola is a relaxed, warm-hearted tropical paradise where trainers undergo Island Trials instead of fighting Gym Leaders. People respect the four Tapu guardian deities who protect each island's ecosystems and govern the natural forces.",
    trivia: "Alola is the first region to introduce regional forms (Alolan forms), showing how species like Vulpix and Exeggutor adapted and mutated due to local climates.",
    culturalInfluence: "Introduced Z-Moves, which are powerful, dance-like elemental outbursts powered by the Z-Ring crystals found throughout the island trials."
  },
  8: {
    id: 8,
    title: "The Darkest Day & The Ancient Sovereign Sword",
    backstory: "20,000 years ago, a meteor carrying Eternatus fell to Galar. Eternatus absorbed the natural energy of the planet, causing the 'Darkest Day'—a disaster where Pokémon grew to gigantic, maddening sizes. Galar was saved by two legendary wolves, Zacian (the Hero's Sword) and Zamazenta (the Hero's Shield), who defeated Eternatus and sealed it away.",
    legendaryConflict: "When Chairman Rose woke Eternatus to solve Galar's future energy crisis, the Darkest Day returned. Pokémon began dynamaxing uncontrollably in stadiums. The player and Hop recovered the rusted sword and shield, summoning the spectral forms of Zacian and Zamazenta to subdue Eternatus once and for all.",
    regionalCulture: "Galar is a sports-centric, industrial kingdom modeled after the United Kingdom. Pokémon battles are held in massive, roaring coliseums and broadcast on television like professional football matches, elevating trainers to corporate-sponsored superstars.",
    trivia: "The Galar region features a vast open area called the Wild Area, which is the first step towards full 3D open-world navigation in the core series.",
    culturalInfluence: "Introduced Dynamax and Gigantamax, allowing Pokémon to swell to mountainous proportions inside specialized energy spots."
  },
  9: {
    id: 9,
    title: "The Great Crater & Paradoxes of Time",
    backstory: "At the center of Paldea lies the Great Crater of Paldea, housing Area Zero. Millions of years ago, a crystal-like meteor struck this location, embedding Terastal Energy deep within the earth's crust. Professor Sada/Turo built a time machine powered by this energy, pulling bizarre Paradox Pokémon from the ancient past or far future into the modern era.",
    legendaryConflict: "The Terastal energy can crystallize Pokémon, granting them a crown-like jewel that shifts their typing in battle. The flagship legendary dragon Koraidon (the Winged King from the past) or Miraidon (the Iron Serpent from the future) must master its Terastal power to battle its hostile paradox counterparts inside Area Zero.",
    regionalCulture: "Paldea is a sprawling, colorful, and fully open-world region centered on academy life (Naranja or Uva Academy). Students embark on a 'Treasure Hunt', choosing their own non-linear paths of victory, titan-hunting, or defeating the school's rebellious Team Star.",
    trivia: "Paradox Pokémon are not just variations; their descriptions in the Scarlet/Violet Books are written as cryptozoological sightings, hinting that they might be manifestations of human imagination combined with Terastal energy.",
    culturalInfluence: "Introduced the Terastal phenomenon, allowing any Pokémon to completely change its primary type mid-battle, revolutionizing competitive strategy."
  }
};
