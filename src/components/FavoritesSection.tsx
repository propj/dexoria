import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { getPokemonColor, getDarkTypeColor } from "../data/pokemonGenerations";

interface FavoritesSectionProps {
  isLightTheme: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  onSelectPokemonById: (id: number) => void;
}

export default function FavoritesSection({
  isLightTheme,
  favorites,
  toggleFavorite,
  onSelectPokemonById,
}: FavoritesSectionProps) {
  const [favoriteDetails, setFavoriteDetails] = useState<{ id: number; name: string; types: string[] }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavoritePokemon = async () => {
      if (favorites.length === 0) {
        setFavoriteDetails([]);
        return;
      }

      try {
        setLoading(true);
        // Concurrent fetching for all favorited IDs
        const promises = favorites.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json())
        );
        const results = await Promise.all(promises);
        const mapped = results.map((data) => ({
          id: data.id,
          name: data.name,
          types: data.types.map((t: any) => t.type.name),
        }));
        setFavoriteDetails(mapped);
      } catch (err) {
        console.error("Error loading favorite details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritePokemon();
  }, [favorites]);

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  if (favorites.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <div className="w-16 h-16 rounded-full bg-red-500/5 text-red-500 flex items-center justify-center mx-auto mb-6 border border-red-500/15">
          <Heart className="w-8 h-8 fill-none" />
        </div>
        <h3 className="font-display font-extrabold text-xl mb-2">No Favorites Recorded Yet</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          Mark any Pokémon with a heart card button while exploring the Pokédex or region lists to cache your dream team roster here!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xs text-slate-500 mt-4 font-semibold">Aligning favorites archive...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {favoriteDetails.map((poke) => {
            const primaryType = poke.types[0] || "normal";
            const typeColor = getPokemonColor(primaryType);

            return (
              <div
                key={poke.id}
                onClick={() => onSelectPokemonById(poke.id)}
                style={
                  isLightTheme
                    ? {
                        backgroundColor: `${typeColor}12`,
                        borderColor: `${typeColor}30`,
                      }
                    : {
                        backgroundColor: getDarkTypeColor(primaryType),
                        borderColor: `${typeColor}25`,
                      }
                }
                className={`group rounded-3xl p-5 border cursor-pointer relative flex flex-col justify-between h-[270px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${primaryType}/20 overflow-hidden select-none`}
              >
                {/* Big number size behind / overlaying top-right */}
                <span 
                  className={`absolute top-2.5 right-4 font-mono font-black text-4xl md:text-5xl tracking-tighter select-none transition-all duration-500 group-hover:scale-105 ${
                    isLightTheme ? "text-slate-900/10" : "text-white/10"
                  }`}
                >
                  #{poke.id.toString().padStart(4, "0")}
                </span>

                {/* Heart/Favorite Toggle inside card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal opening
                    toggleFavorite(poke.id);
                  }}
                  className="absolute top-4 left-4 p-1.5 rounded-xl cursor-pointer transition-all z-20 text-red-500 bg-red-500/10 hover:bg-red-500/20"
                  title="Remove from Favorites"
                >
                  <Heart className="w-4 h-4 fill-red-500" />
                </button>

                {/* Animated larger high-res Pokémon Image */}
                <div className="flex-1 flex items-center justify-center relative -mt-1.5">
                  {/* Glowing element color highlight background */}
                  <div
                    className="absolute w-32 h-32 rounded-full opacity-20 filter blur-2xl transition-all duration-500 group-hover:scale-135"
                    style={{ backgroundColor: typeColor }}
                  />
                  <img
                    src={getArtworkUrl(poke.id)}
                    alt={poke.name}
                    className="w-[145px] h-[145px] md:w-[170px] md:h-[170px] object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title & Type Badges (Left-aligned as in screenshot) */}
                <div className="relative z-20 mt-auto pl-1">
                  <h4 className={`font-display font-black text-base md:text-lg capitalize tracking-tight transition-colors leading-tight ${
                    isLightTheme ? "text-slate-900 group-hover:text-amber-800" : "text-white group-hover:text-amber-300"
                  }`}>
                    {poke.name.replace("-", " ")}
                  </h4>

                  {/* Type Badges */}
                  <div className="flex gap-1.5 mt-2 justify-start flex-wrap min-h-[22px]">
                    {poke.types.map((type) => (
                      <span
                        key={type}
                        className="text-[9px] font-mono font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md text-white select-none shadow-sm"
                        style={{ backgroundColor: getPokemonColor(type) }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
