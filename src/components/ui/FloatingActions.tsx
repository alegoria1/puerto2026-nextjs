"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BtnShine } from "@/components/ui/Buttons";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apparaît après 100px de scroll
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed z-50 flex items-stretch gap-3 bottom-5 right-5 left-5 md:left-auto md:bottom-8 md:right-8"
        >
          
          {/* 1. GAUCHE : BOUTON RÉSERVER (Gold, Légèrement arrondi, Sans Picto) */}
          <div className="flex-grow md:flex-grow-0 shadow-[0_0_20px_rgba(234,193,87,0.3)] rounded-xl">
            <BtnShine 
                href="https://bookings.zenchef.com/results?rid=371494&pid=1001" target="_blank"
                className="w-full h-14 !rounded-xl bg-puerto-yellow text-black hover:bg-white hover:text-black border-none px-6 flex items-center justify-center font-bold tracking-widest uppercase"
            >
                {/* Pas d'icône ici, juste le texte */}
                <span>Réserver une table</span>
            </BtnShine>
          </div>

          {/* 2. DROITE : BOUTON TÉLÉPHONE (Gold, Légèrement arrondi comme l'autre) */}
          <a
            href="tel:+33561455461"
            className="flex items-center justify-center w-14 h-14 bg-puerto-yellow text-black rounded-xl shadow-[0_0_20px_rgba(234,193,87,0.3)] border-2 border-transparent hover:bg-white hover:scale-105 transition-all duration-300 shrink-0"
            aria-label="Appeler le restaurant"
          >
            <Phone size={24} className="fill-current" />
          </a>

        </motion.div>
      )}
    </AnimatePresence>
  );
}