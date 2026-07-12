import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User as UserIcon, LogIn, Sparkles, Check } from "lucide-react";

interface User {
  username: string;
  email: string;
  avatar: number; // Pokemon ID for avatar artwork
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLightTheme: boolean;
  onLoginSuccess: (user: User) => void;
}

const AVATAR_OPTIONS = [25, 1, 4, 7, 133, 151]; // Pikachu, Bulbasaur, Charmander, Squirtle, Eevee, Mew

export default function LoginModal({
  isOpen,
  onClose,
  isLightTheme,
  onLoginSuccess,
}: LoginModalProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(25);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getOfficialArtwork = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email || !password || (isRegister && !username)) {
      setError("Please fill in all required fields.");
      return;
    }

    // Read existing accounts
    const existingAccountsRaw = localStorage.getItem("dexoria_accounts");
    let accounts: Array<{ username: string; email: string; pass: string; avatar: number }> = [];
    if (existingAccountsRaw) {
      try {
        accounts = JSON.parse(existingAccountsRaw);
      } catch (err) {
        accounts = [];
      }
    }

    if (isRegister) {
      // Check if email already exists
      const emailExists = accounts.some((acc) => acc.email.toLowerCase() === email.toLowerCase());
      if (emailExists) {
        setError("An account with this email already exists.");
        return;
      }

      // Create new account
      const newAccount = {
        username: username.trim(),
        email: email.trim().toLowerCase(),
        pass: password, // In client side demo we store simply
        avatar: selectedAvatar,
      };

      accounts.push(newAccount);
      localStorage.setItem("dexoria_accounts", JSON.stringify(accounts));
      
      setSuccess("Account registered successfully! Logging you in...");
      setTimeout(() => {
        onLoginSuccess({
          username: newAccount.username,
          email: newAccount.email,
          avatar: newAccount.avatar,
        });
        onClose();
      }, 1500);
    } else {
      // Login attempt
      const found = accounts.find(
        (acc) => acc.email.toLowerCase() === email.trim().toLowerCase() && acc.pass === password
      );

      if (found) {
        setSuccess(`Welcome back, Champion ${found.username}!`);
        setTimeout(() => {
          onLoginSuccess({
            username: found.username,
            email: found.email,
            avatar: found.avatar,
          });
          onClose();
        }, 1500);
      } else {
        // Fallback: Create dynamic user for quick testing if no accounts exist
        if (accounts.length === 0 && email.includes("@") && password.length >= 4) {
          const defaultUser = {
            username: email.split("@")[0],
            email: email.trim().toLowerCase(),
            pass: password,
            avatar: selectedAvatar,
          };
          accounts.push(defaultUser);
          localStorage.setItem("dexoria_accounts", JSON.stringify(accounts));
          setSuccess("Guest account auto-created! Logging in...");
          setTimeout(() => {
            onLoginSuccess({
              username: defaultUser.username,
              email: defaultUser.email,
              avatar: defaultUser.avatar,
            });
            onClose();
          }, 1500);
        } else {
          setError("Invalid email or password combination.");
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Main modal container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className={`relative w-full max-w-md rounded-[2.5rem] border overflow-hidden p-8 z-10 shadow-2xl ${
          isLightTheme
            ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-900"
            : "bg-[#0F0F10] border-white/5 text-[#F4F4F5]"
        }`}
      >
        {/* Holographic scanner effect line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-pulse" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full cursor-pointer transition-all border ${
            isLightTheme
              ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
              : "bg-white/5 hover:bg-white/10 border-white/5 text-slate-400 hover:text-white"
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-cyan-500 mb-1.5">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-mono font-extrabold tracking-widest uppercase">
              Secure Core Interface
            </span>
          </div>
          <h3 className="font-display font-black text-2xl uppercase tracking-tight">
            {isRegister ? "Join the Academy" : "Trainer Console"}
          </h3>
          <p className={`text-xs mt-1 ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>
            {isRegister
              ? "Establish your custom credentials to save your favorites."
              : "Access your persistent team logs and saved data."}
          </p>
        </div>

        {/* Tabs switcher */}
        <div className={`flex p-1 rounded-2xl border mb-6 ${
          isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-[#151516] border-white/5"
        }`}>
          <button
            onClick={() => {
              setIsRegister(false);
              setError(null);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
              !isRegister
                ? isLightTheme
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "bg-[#242426] text-white shadow-sm border border-white/5"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setIsRegister(true);
              setError(null);
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
              isRegister
                ? isLightTheme
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/50"
                  : "bg-[#242426] text-white shadow-sm border border-white/5"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Register
          </button>
        </div>

        {/* Auth form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 text-xs rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" />
              <span>{success}</span>
            </div>
          )}

          {isRegister && (
            <div>
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
                Trainer Nickname
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                  <UserIcon className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Red, Cynthia"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border outline-none font-medium transition-all ${
                    isLightTheme
                      ? "bg-white border-[#E5DDD0] focus:border-blue-500 text-slate-900"
                      : "bg-[#151516] border-white/5 focus:border-cyan-500 text-[#F4F4F5]"
                  }`}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="trainer@kanto.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border outline-none font-medium transition-all ${
                  isLightTheme
                    ? "bg-white border-[#E5DDD0] focus:border-blue-500 text-slate-900"
                    : "bg-[#151516] border-white/5 focus:border-cyan-500 text-[#F4F4F5]"
                }`}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
              Security Key (Password)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border outline-none font-medium transition-all ${
                  isLightTheme
                    ? "bg-white border-[#E5DDD0] focus:border-blue-500 text-slate-900"
                    : "bg-[#151516] border-white/5 focus:border-cyan-500 text-[#F4F4F5]"
                }`}
                required
              />
            </div>
          </div>

          {/* Avatar selector (Only when registering) */}
          {isRegister && (
            <div className="pt-2">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Choose Partner Pokémon Companion
              </label>
              <div className="grid grid-cols-6 gap-2">
                {AVATAR_OPTIONS.map((id) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => setSelectedAvatar(id)}
                    className={`aspect-square p-1 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                      selectedAvatar === id
                        ? isLightTheme
                          ? "bg-blue-600/10 border-blue-500 scale-105"
                          : "bg-cyan-500/20 border-cyan-400 scale-105"
                        : isLightTheme
                        ? "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        : "bg-white/3 border-white/5 hover:bg-white/5"
                    }`}
                  >
                    <img
                      src={getOfficialArtwork(id)}
                      alt="avatar option"
                      className="w-10 h-10 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action button */}
          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider cursor-pointer shadow-lg transition-all mt-6 flex items-center justify-center gap-2 ${
              isLightTheme
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/10"
                : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/10 font-black"
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>{isRegister ? "Register Credentials" : "Initialize Link"}</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
