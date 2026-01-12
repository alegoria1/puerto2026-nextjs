"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem("puerto_consent");
    
    // S'il n'y a pas de choix enregistré, on affiche la bannière après 2 secondes
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // On enregistre le choix "true"
    localStorage.setItem("puerto_consent", "true");
    setIsVisible(false);
    
    // Ici, vous pourriez déclencher Google Analytics si vous l'aviez configuré dynamiquement
    // window.gtag('consent', 'update', { ... });
  };

  const handleDecline = () => {
    // On enregistre le choix "false" pour ne plus l'embêter
    localStorage.setItem("puerto_consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50"
        >
          <div className="bg-black/90 backdrop-blur-md border border-puerto-yellow/30 p-6 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
            
            {/* Icône Décorative */}
            <div className="absolute -top-6 left-6 bg-puerto-yellow text-black p-3 rounded-full shadow-lg">
                <Cookie size={24} />
            </div>

            {/* Titre */}
            <h3 className="text-white font-bold text-lg mt-2 mb-2 font-serif">
                Un petit cookie ?
            </h3>

            {/* Texte */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Nous utilisons des cookies pour analyser l'audience du site (Google Analytics) et améliorer votre expérience. 
                <Link href="/politique-confidentialite" className="text-puerto-yellow hover:underline ml-1">
                    En savoir plus
                </Link>.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={handleAccept}
                    className="flex-1 bg-puerto-yellow text-black font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-yellow-500 transition-colors"
                >
                    J'accepte
                </button>
                <button
                    onClick={handleDecline}
                    className="flex-1 bg-white/10 text-white border border-white/10 font-bold uppercase tracking-widest text-xs py-3 rounded-sm hover:bg-white/20 transition-colors"
                >
                    Refuser
                </button>
            </div>

            {/* Bouton Fermer (Croix) */}
            <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
                <X size={20} />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}