"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ZoomIn, ZoomOut, X } from "lucide-react";
import Image from "next/image";
import { BtnShine } from "@/components/ui/Buttons";
import { Portal } from "@/components/ui/Portal"; // Import indispensable

export function BarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fonction pour fermer proprement
  const handleClose = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

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
                <BtnShine href="/carte-bar.pdf" target="_blank" className="bg-gradient-cyan px-6 py-4">
                    <Download size={18} className="mr-2 inline" />
                    Télécharger la Carte (PDF)
                </BtnShine>
            </div>
        </div>

        {/* APERÇU DE LA CARTE (CLIQUABLE) */}
        <div className="order-1 md:order-2 relative group cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-black/50">
                <div className="aspect-[3/4] w-full bg-gray-800 relative">
                     <Image 
                        src="/images/menu-bar.jpg" 
                        alt="Carte des cocktails Puerto Habana"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                     />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm border border-white/30">
                        <ZoomIn size={18} />
                        Agrandir la carte
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* MODAL ZOOM (Lightbox avec Portal) */}
      <AnimatePresence>
        {isOpen && (
            <Portal>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    onClick={handleClose}
                >
                    {/* BOUTONS DE CONTRÔLE */}
                    <div className="absolute top-6 right-6 flex gap-4 z-[100001]">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                            className="text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/10"
                            title={isZoomed ? "Réduire" : "Zoomer"}
                        >
                            {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                        </button>
                        <button 
                            onClick={handleClose}
                            className="text-white p-3 bg-white/10 hover:bg-puerto-yellow hover:text-black rounded-full transition-all border border-white/10"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* IMAGE ET CONTENEUR DE ZOOM */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className={`relative shadow-2xl border border-white/10 rounded-lg transition-all duration-300
                            ${isZoomed ? "w-full h-full overflow-auto cursor-zoom-out" : "max-w-fit max-h-fit cursor-zoom-in"}
                        `}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                    >
                        <motion.div
                            animate={{ scale: isZoomed ? 1.5 : 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            className={`relative origin-center ${isZoomed ? "min-w-full min-h-full flex items-center justify-center p-20" : ""}`}
                        >
                            <Image 
                                src="/images/menu-bar.jpg"
                                alt="Carte Complète"
                                width={1200}
                                height={1800}
                                className={`rounded-md shadow-2xl transition-all ${isZoomed ? "max-w-none" : "max-w-full max-h-[85vh] object-contain"}`}
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Texte d'aide */}
                    {!isZoomed && (
                        <p className="absolute bottom-6 text-white/40 text-[10px] uppercase tracking-[0.2em] pointer-events-none">
                            Cliquez sur l'image pour zoomer • Echap pour fermer
                        </p>
                    )}
                </motion.div>
            </Portal>
        )}
      </AnimatePresence>
    </section>
  );
}