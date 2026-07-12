import React, { useState, useEffect } from "react";
import { HelpCircle, RefreshCw, Sparkles, UserPlus, HelpCircle as HelpIcon } from "lucide-react";
import { getPokemonColor } from "../data/pokemonGenerations";

interface FunSectionProps {
  isLightTheme: boolean;
  onSelectPokemonById: (id: number) => void;
}

export default function FunSection({ isLightTheme, onSelectPokemonById }: FunSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<"wtp" | "daily" | "team">("wtp");

  // Who's That Pokemon state
  const [wtpId, setWtpId] = useState<number>(25); // Start with Pikachu
  const [wtpName, setWtpName] = useState("pikachu");
  const [wtpGuess, setWtpGuess] = useState("");
  const [wtpIsRevealed, setWtpIsRevealed] = useState(false);
  const [wtpFeedback, setWtpFeedback] = useState("");
  const [wtpLoading, setWtpLoading] = useState(false);

  // Daily Pokemon state
  const [dailyPokemon, setDailyPokemon] = useState<any>(null);
  const [dailyLoading, setDailyLoading] = useState(false);

  // Balanced Team state
  const [team, setTeam] = useState<{ id: number; name: string; types: string[]; hp: number; attack: number }[]>([]);
  const [teamLoading, setTeamLoading] = useState(false);

  // Load a new WTP silhouette
  const loadNextWtp = async () => {
    try {
      setWtpLoading(true);
      setWtpIsRevealed(false);
      setWtpGuess("");
      setWtpFeedback("");

      // Select popular Pokémon between IDs 1 and 250 so they are recognizable
      const randId = Math.floor(Math.random() * 250) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`);
      if (res.ok) {
        const data = await res.json();
        setWtpId(randId);
        setWtpName(data.name);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setWtpLoading(false);
    }
  };

  // Check user guess
  const checkWtpGuess = () => {
    if (!wtpGuess.trim()) return;
    const cleanGuess = wtpGuess.toLowerCase().trim().replace(" ", "-");
    const cleanAnswer = wtpName.toLowerCase().replace(" ", "-");

    setWtpIsRevealed(true);
    
    // Play Cry audio
    const audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/cries/${wtpId}.ogg`);
    audio.play().catch(() => {});

    if (cleanGuess === cleanAnswer || cleanAnswer.includes(cleanGuess) && cleanGuess.length > 2) {
      setWtpFeedback("🎉 Correct! Outstanding Trainer instincts!");
    } else {
      setWtpFeedback(`❌ Oh, so close! That's ${wtpName.toUpperCase()}!`);
    }
  };

  // Load Daily Pokemon
  const loadDailyPick = async () => {
    try {
      setDailyLoading(true);
      // Generate a semi-stable ID using today's date
      const today = new Date();
      const seed = today.getFullYear() * 31 + today.getMonth() * 12 + today.getDate();
      const dailyId = (seed % 649) + 1; // Gen 1-5 limit for highest compatibility

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${dailyId}`);
      if (res.ok) {
        const data = await res.json();
        setDailyPokemon(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDailyLoading(false);
    }
  };

  // Generate a random balanced team of 6
  const generateBalancedTeam = async () => {
    try {
      setTeamLoading(true);
      const generatedTeam = [];

      // Fetch 6 random Pokemon details concurrently
      for (let i = 0; i < 6; i++) {
        const randId = Math.floor(Math.random() * 649) + 1; // Gen 1 to 5
        generatedTeam.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`).then((r) => r.json())
        );
      }

      const results = await Promise.all(generatedTeam);
      const mapped = results.map((data) => ({
        id: data.id,
        name: data.name,
        types: data.types.map((t: any) => t.type.name),
        hp: data.stats.find((s: any) => s.stat.name === "hp")?.base_stat || 50,
        attack: data.stats.find((s: any) => s.stat.name === "attack")?.base_stat || 50,
      }));

      setTeam(mapped);
    } catch (err) {
      console.error(err);
    } finally {
      setTeamLoading(false);
    }
  };

  // Trigger loading subtab resources
  useEffect(() => {
    if (activeSubTab === "wtp" && wtpId === 25) {
      loadNextWtp();
    } else if (activeSubTab === "daily" && !dailyPokemon) {
      loadDailyPick();
    } else if (activeSubTab === "team" && team.length === 0) {
      generateBalancedTeam();
    }
  }, [activeSubTab]);

  const getArtworkUrl = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      {/* Sub tabs switcher */}
      <div className="flex justify-center gap-2 mb-10 border-b border-slate-500/10 pb-4">
        <button
          onClick={() => setActiveSubTab("wtp")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "wtp"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Who's That Pokémon?
        </button>
        <button
          onClick={() => setActiveSubTab("daily")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "daily"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Daily Pokémon Pick
        </button>
        <button
          onClick={() => setActiveSubTab("team")}
          className={`px-4 py-2 text-sm font-semibold border rounded-lg cursor-pointer transition-all ${
            activeSubTab === "team"
              ? "bg-blue-600 text-white border-blue-600"
              : isLightTheme
              ? "bg-slate-100 text-slate-700 border-slate-200"
              : "bg-white/4 border-white/5 text-slate-300"
          }`}
        >
          Random Team of 6
        </button>
      </div>

      {/* SUB-MODULES SHOWCASE */}
      {activeSubTab === "wtp" && (
        <div
          className={`glass p-6 md:p-10 rounded-3xl border text-center shadow-xl flex flex-col items-center ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          <h2 className="font-display font-extrabold text-2xl md:text-3xl flex items-center gap-2">
            <HelpIcon className="w-6 h-6 text-yellow-400" />
            <span>Who's That Pokémon?</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            A Pokémon outline is projected below. Identify it and type its name!
          </p>

          {wtpLoading ? (
            <div className="w-48 h-48 flex items-center justify-center my-8">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="relative w-48 h-48 md:w-56 md:h-56 my-8 flex items-center justify-center">
              {/* Glow background */}
              <div className="absolute inset-4 rounded-full bg-blue-500/10 filter blur-3xl" />
              <img
                src={getArtworkUrl(wtpId)}
                alt="wtp silhouette"
                className={`w-44 h-44 md:w-52 md:h-52 object-contain select-none pointer-events-none transition-all duration-500 ${
                  wtpIsRevealed ? "brightness-100" : "brightness-0 filter"
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Input Submission */}
          {!wtpIsRevealed ? (
            <div className="flex gap-2 max-w-sm w-full">
              <input
                type="text"
                value={wtpGuess}
                onChange={(e) => setWtpGuess(e.target.value)}
                placeholder="Enter Pokémon name..."
                onKeyDown={(e) => e.key === "Enter" && checkWtpGuess()}
                className={`flex-1 px-4 py-2.5 rounded-xl border text-sm outline-none ${
                  isLightTheme
                    ? "bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white"
                    : "bg-white/3 border-white/5 text-slate-100 focus:border-blue-500 focus:bg-slate-950"
                }`}
              />
              <button
                onClick={checkWtpGuess}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="font-display font-extrabold text-lg tracking-tight mb-4 text-amber-400">
                {wtpFeedback}
              </p>
              <div className="flex gap-2.5">
                <button
                  onClick={() => onSelectPokemonById(wtpId)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                    isLightTheme
                      ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50"
                      : "bg-slate-900 border-white/10 text-slate-100 hover:bg-white/5"
                  }`}
                >
                  View Dossier
                </button>
                <button
                  onClick={loadNextWtp}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Next Pokémon</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeSubTab === "daily" && (
        <div
          className={`glass p-6 md:p-8 rounded-3xl border shadow-xl ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          {dailyLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-slate-500 mt-3 font-semibold">Consulting Oak's Lab...</p>
            </div>
          ) : (
            dailyPokemon && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Visual Artwork */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center bg-blue-500/5 rounded-full border border-blue-500/10">
                    <img
                      src={getArtworkUrl(dailyPokemon.id)}
                      alt="daily pick"
                      className="w-40 h-40 object-contain relative z-1 animate-float-medium filter drop-shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full mt-4 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Today's Curated Pick</span>
                  </span>
                </div>

                {/* Dossier info */}
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    #{dailyPokemon.id.toString().padStart(4, "0")}
                  </span>
                  <h3 className="font-display font-extrabold text-3xl capitalize tracking-tight mt-1">
                    {dailyPokemon.name.replace("-", " ")}
                  </h3>

                  <div className="flex gap-1.5 mt-2.5">
                    {dailyPokemon.types.map((t: any) => (
                      <span
                        key={t.type.name}
                        className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full text-white shadow-sm"
                        style={{ backgroundColor: getPokemonColor(t.type.name) }}
                      >
                        {t.type.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-slate-500 mt-4 leading-relaxed">
                    This special Pokémon is today's spotlight choice. Every trainer's daily seed triggers a unique roster spotlight! Open its complete dossier to study its capabilities.
                  </p>

                  <button
                    onClick={() => onSelectPokemonById(dailyPokemon.id)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all"
                  >
                    View Complete Dossier →
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}

      {activeSubTab === "team" && (
        <div
          className={`glass p-6 md:p-8 rounded-3xl border shadow-xl text-center ${
            isLightTheme
              ? "bg-white/70 border-slate-300/40 text-slate-900"
              : "bg-slate-950/40 border-white/5 text-slate-100"
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="text-left">
              <h3 className="font-display font-extrabold text-xl md:text-2xl">Random Team of 6</h3>
              <p className="text-xs text-slate-500">
                Picks a balanced team of six from the database! Click any member to read details.
              </p>
            </div>
            <button
              onClick={generateBalancedTeam}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reroll Team</span>
            </button>
          </div>

          {teamLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl h-36 animate-pulse ${
                    isLightTheme ? "bg-slate-200" : "bg-slate-900"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {team.map((poke) => (
                <div
                  key={poke.id}
                  onClick={() => onSelectPokemonById(poke.id)}
                  className={`group p-3 rounded-2xl cursor-pointer border flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-md ${
                    isLightTheme
                      ? "bg-slate-50 hover:bg-slate-100 border-slate-200"
                      : "bg-white/3 hover:bg-white/8 border-white/5"
                  }`}
                >
                  <img
                    src={getArtworkUrl(poke.id)}
                    alt={poke.name}
                    className="w-16 h-16 object-contain group-hover:scale-115 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <h5 className="font-semibold text-xs mt-3 capitalize truncate w-full">
                    {poke.name.replace("-", " ")}
                  </h5>
                  <div className="flex gap-1 mt-1.5 justify-center flex-wrap">
                    {poke.types.map((type) => (
                      <span
                        key={type}
                        className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded text-white shadow-sm"
                        style={{ backgroundColor: getPokemonColor(type) }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
