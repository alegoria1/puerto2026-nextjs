"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ZoomIn, X } from "lucide-react";
import Image from "next/image";
import { BtnShine } from "@/components/ui/Buttons";

export function BarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-4 md:px-12 relative z-10" id="la-carte">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE D'APPEL */}
        <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                Notre Carte <span className="text-puerto-yellow">Cocktails</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
                Explorez notre sélection de créations maison, nos classiques revisités et notre cave à rhums. 
                Une invitation au voyage, du verre jusqu'à La Havane.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                {/* Bouton pour télécharger */}
                <BtnShine href="/carte-bar.pdf" className="bg-gradient-cyan px-6 py-4">
                    <Download size={18} />
                    Télécharger la Carte (PDF)
                </BtnShine>
            </div>
        </div>

        {/* APERÇU DE LA CARTE (CLIQUABLE) */}
        <div className="order-1 md:order-2 relative group cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-black/50">
                {/* Remplace par ta vraie image de carte */}
                <div className="aspect-[3/4] w-full bg-gray-800 relative">
                     {/* Placeholder Image */}
                     <Image 
                        src="/images/menu-bar.jpg" // Mets une image ici
                        alt="Carte des cocktails Puerto Habana"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                     />
                </div>
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm border border-white/30">
                        <ZoomIn size={18} />
                        Agrandir
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* MODAL ZOOM (Lightbox) */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                onClick={() => setIsOpen(false)}
            >
                {/* Bouton Fermer */}
                <button className="absolute top-6 right-6 text-white hover:text-puerto-yellow transition-colors p-2 bg-white/10 rounded-full">
                    <X size={32} />
                </button>

                {/* Image en Grand */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-5xl max-h-[90vh] w-full h-full overflow-auto rounded-lg shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
                >
                     <Image 
                        src="/images/menu-bar.jpg" // Mets l'image HD ici
                        alt="Carte Complète"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-contain"
                     />
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}