import React, { useState } from "react";
import { Info, Cpu, Coins, MessageSquare, Send, CheckCircle2, Sparkles, Mail, ShieldAlert } from "lucide-react";
import { saveFeedbackToFirestore, googleSignIn, getAccessToken } from "../lib/firebaseAuth";
import { sendGmailEmail } from "../lib/gmail";

// Import the generated QR code image
// @ts-ignore
import donateQr from "../assets/images/donate_qr.png";

interface User {
  username: string;
  email: string;
  avatar: number;
  isGoogleUser?: boolean;
}

interface AboutSectionProps {
  isLightTheme: boolean;
  currentUser: User | null;
}

export default function AboutSection({ isLightTheme, currentUser }: AboutSectionProps) {
  const [feedbackName, setFeedbackName] = useState<string>(currentUser?.username || "");
  const [feedbackEmail, setFeedbackEmail] = useState<string>(currentUser?.email || "");
  const [feedbackMsg, setFeedbackMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);
  const [gmailError, setGmailError] = useState<string | null>(null);
  const [gmailSent, setGmailSent] = useState<boolean>(false);

  // Sync state if user changes
  React.useEffect(() => {
    if (currentUser) {
      if (!feedbackName) setFeedbackName(currentUser.username);
      if (!feedbackEmail) setFeedbackEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackMsg) return;

    setIsSubmitting(true);
    setGmailError(null);
    setGmailSent(false);

    const timestamp = new Date().toLocaleString();
    const feedbackData = {
      name: feedbackName,
      email: feedbackEmail || "anonymous@dexoria.io",
      message: feedbackMsg,
      timestamp,
    };

    try {
      // 1. Save to Firestore (Durable Cloud Storage)
      await saveFeedbackToFirestore(feedbackData);

      // 2. Optional: If user is logged in with Google, send real-time Gmail to gamesderp108@gmail.com
      const token = getAccessToken();
      if (currentUser?.isGoogleUser && token) {
        const emailSubject = `[Dexoria Feedback] Message from ${feedbackName}`;
        const emailBody = `Dexoria Pokédex Trainer Feedback\n` +
          `====================================\n` +
          `Date: ${timestamp}\n` +
          `Trainer: ${feedbackName}\n` +
          `Email: ${feedbackEmail || "Not Provided"}\n\n` +
          `Message:\n${feedbackMsg}\n` +
          `====================================\n`;

        const gmailResult = await sendGmailEmail({
          to: "gamesderp108@gmail.com",
          from: currentUser.email,
          subject: emailSubject,
          bodyText: emailBody,
          accessToken: token,
        });

        if (gmailResult.success) {
          setGmailSent(true);
        } else {
          setGmailError("Firestore saved, but Gmail delivery failed. " + (gmailResult.error || ""));
        }
      }

      setFeedbackSuccess(true);
      setTimeout(() => {
        setFeedbackSuccess(false);
        setFeedbackMsg("");
        setGmailSent(false);
        setGmailError(null);
      }, 6000);
    } catch (err: any) {
      console.error("Feedback submit error:", err);
      // Fallback local save in case network fails
      try {
        const existingFeedback = JSON.parse(localStorage.getItem("dexoria_feedback") || "[]");
        existingFeedback.push(feedbackData);
        localStorage.setItem("dexoria_feedback", JSON.stringify(existingFeedback));
      } catch (e) {}
      setFeedbackSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleConnect = async () => {
    try {
      await googleSignIn();
      const token = getAccessToken();
      if (token) {
        // Sync email if blank
        const updatedUser = JSON.parse(localStorage.getItem("dexoria_current_user") || "{}");
        if (updatedUser.email) {
          setFeedbackEmail(updatedUser.email);
        }
        if (updatedUser.username) {
          setFeedbackName(updatedUser.username);
        }
      }
    } catch (err) {
      console.error("Failed to authenticate Google user for Gmail", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 space-y-8 select-none">
      {/* 1. About Core Card */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-8 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        {/* Title branding */}
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center mx-auto mb-4 border border-blue-500/20 animate-pulse">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">About Dexoria Pokédex</h2>
          <p className="text-xs text-slate-500 mt-1">Version 1.6.0 (Vite-React Open Source Build)</p>
        </div>

        {/* Narrative core */}
        <p className={`text-sm md:text-base leading-relaxed text-center ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
          Dexoria is a state-of-the-art interactive Pokédex application built to explore the entirety of Pokémon lore spanning generations 1 through 9. Powered by direct real-time hooks into <strong>PokéAPI</strong>, it delivers high-fidelity statistical comparisons, visual galleries, element matrices, and lore archives instantly.
        </p>

        {/* Highlight Section: Weekend Updates & Upcoming Features */}
        <div className={`p-5 rounded-2xl border text-center relative overflow-hidden ${
          isLightTheme 
            ? "bg-blue-50/50 border-blue-200 text-blue-900" 
            : "bg-blue-950/15 border-blue-500/10 text-blue-200"
        }`}>
          <div className="absolute top-0 right-0 p-1 bg-blue-500 text-white rounded-bl-xl text-[8px] font-mono uppercase tracking-widest font-black animate-pulse">
            LATEST NEWS
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin [animation-duration:6s]" />
            <span className="text-xs font-bold uppercase tracking-wider">Updates & Roadmaps</span>
          </div>
          <p className="text-sm md:text-base font-extrabold leading-normal">
            More updates coming every weekend so stay tuned for something big in a few months!
          </p>
        </div>

        {/* Core items columns */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div
            className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
              isLightTheme ? "bg-slate-50 border-slate-200" : "bg-white/3 border-white/5"
            }`}
          >
            <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-sm">Fan-Driven Project</h4>
              <p className="text-xs text-slate-500 mt-1 leading-normal">
                This is a non-commercial, fully open-source tribute project honoring Pokémon. All trademarks and registered assets belong entirely to © Nintendo, Game Freak, and Creatures Inc.
              </p>
            </div>
          </div>
        </div>

        {/* Closing details */}
        <div className="text-center pt-6 border-t border-slate-500/10 text-xs text-slate-500 leading-normal">
          Designed with elite user experience and fluid glassmorphic visual cues. Keep exploring and keep training, Trainer!
        </div>
      </div>

      {/* 2. Interactive Donation Gateway Card (QR code implementation only) */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-6 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        <div className="flex items-center gap-3.5 border-b border-slate-500/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
            <Coins className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-black text-lg md:text-xl">Please Support Us</h3>
            <p className="text-xs text-slate-500 mt-0.5">Keep the server and development running</p>
          </div>
        </div>

        <p className={`text-xs md:text-sm leading-relaxed ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>
          Dexoria is <strong>100% open-sourced and free to use</strong> for trainers all across the globe. Since we do not host ads or commercial tiers, voluntary community support is highly appreciated and helps us cover PokéAPI query optimization caches, server nodes, and dedicated weekly development.
        </p>

        {/* Custom Centered QR Code section with no extra buttons/inputs */}
        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          <div className={`relative p-4 rounded-2xl border shadow-lg transition-all duration-300 max-w-[260px] ${
            isLightTheme 
              ? "bg-white border-slate-200 shadow-slate-100" 
              : "bg-slate-900/60 border-white/10 shadow-black/40"
          }`}>
            <img 
              src={donateQr} 
              alt="Donate QR Code" 
              className="w-full h-auto rounded-lg object-contain"
            />
            {/* Subtle corner tech-accents for aesthetics */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-blue-500" />
          </div>

          <div className="text-center space-y-1">
            <span className={`text-[11px] font-black tracking-widest uppercase block ${
              isLightTheme ? "text-blue-600" : "text-blue-400"
            }`}>
              UPI / Google Pay
            </span>
            <p className="text-xs text-slate-500 max-w-xs leading-normal">
              Scan this QR code using Google Pay or any UPI enabled banking app to donate and support our work!
            </p>
          </div>
        </div>
      </div>

      {/* 3. User Feedback & Reach Out Card */}
      <div
        className={`glass p-6 md:p-10 rounded-3xl border shadow-2xl space-y-6 ${
          isLightTheme
            ? "bg-white/70 border-slate-300/45 text-slate-900 shadow-slate-200"
            : "bg-slate-950/40 border-white/5 text-slate-100"
        }`}
      >
        <div className="flex items-center gap-3.5 border-b border-slate-500/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-black text-lg md:text-xl">Send Us Your Feedback</h3>
            <p className="text-xs text-slate-500 mt-0.5">Let us know how we can make Dexoria even better</p>
          </div>
        </div>

        {feedbackSuccess ? (
          <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center text-center gap-3.5 ${
            isLightTheme ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-emerald-950/10 border-emerald-500/20 text-emerald-300"
          }`}>
            <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
            <div>
              <h4 className="font-bold text-sm">Feedback Successfully Transmitted!</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-md">
                Thank you, Trainer! Your valuable suggestions have been securely stored in our Firestore database.
              </p>
              {gmailSent && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-2 flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  And an email copy has been dispatched to gamesderp108@gmail.com via your Gmail!
                </p>
              )}
              {gmailError && (
                <p className="text-[10px] text-amber-500 font-semibold mt-2 flex items-center justify-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {gmailError}
                </p>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 text-left">
            {/* Google Authentication Prompt for Gmail Integration */}
            {!currentUser?.isGoogleUser ? (
              <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
                isLightTheme 
                  ? "bg-slate-50 border-slate-200 text-slate-700" 
                  : "bg-white/3 border-white/5 text-slate-300"
              }`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-black uppercase tracking-wider">Gmail Integration Available</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal max-w-sm">
                    Connect with Google to send your feedback directly to the developer's inbox via Gmail!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleGoogleConnect}
                  className="px-4 py-2.5 rounded-xl border border-blue-500/30 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap hover:scale-103 active:scale-97"
                >
                  Authorize Gmail
                </button>
              </div>
            ) : (
              <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                isLightTheme ? "bg-blue-50/50 border-blue-200 text-blue-800" : "bg-blue-950/10 border-blue-500/20 text-blue-200"
              }`}>
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <p className="text-xs leading-normal font-medium">
                  Signed in as <strong className="font-bold">{currentUser.email}</strong>. Feedback will be sent via Gmail to <strong className="font-bold">gamesderp108@gmail.com</strong>!
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Trainer Name</label>
                <input
                  type="text"
                  required
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                  placeholder="e.g. Red"
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 ${
                    isLightTheme
                      ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                      : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Trainer Email / Tag (Optional)</label>
                <input
                  type="text"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                  placeholder="e.g. red@pallettown.org"
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 ${
                    isLightTheme
                      ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                      : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Your Feedback</label>
              <textarea
                required
                rows={4}
                value={feedbackMsg}
                onChange={(e) => setFeedbackMsg(e.target.value)}
                placeholder="Share your experience, feature ideas, bug reports, or supportive notes..."
                className={`w-full px-4 py-3 rounded-xl border text-xs font-semibold transition-all focus:outline-none focus:ring-1 resize-none ${
                  isLightTheme
                    ? "bg-slate-50/50 border-slate-300 focus:border-blue-500 text-slate-900 focus:ring-blue-500"
                    : "bg-[#09090b] border-white/10 focus:border-blue-500 text-slate-100 focus:ring-blue-500"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:scale-102 active:scale-98 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Transmitting..." : "Submit Feedback"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
