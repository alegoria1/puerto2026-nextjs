// src/components/layout/Shell.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone, Instagram, Facebook, X,ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BtnShine, BtnSlide, BtnGlow, BtnArrow, BtnGlass } from "@/components/ui/Buttons";
import AnimatedBackground from "./AnimatedBackground";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AnimatedBackground/>
      {/* --- 1. TOPBAR MOBILE (Version Crystal) --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 border-b border-white/20 bg-gradient-to-r from-white/10 to-black/20 backdrop-blur-xl">
         <span className="text-puerto-yellow font-serif font-bold text-xl tracking-widest drop-shadow-md">PUERTO</span>
         <button onClick={() => setIsMenuOpen(true)} className="p-2 border border-white/20 rounded-md bg-white/10 backdrop-blur-md shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
            <Menu className="text-white w-6 h-6" />
         </button>
      </div>

      {/* --- 2. SIDEBAR GAUCHE (Version Crystal Premium) --- */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-24 z-50 flex-col justify-between       items-center py-8 border-r border-transparent bg-clip-padding before:absolute before:inset-y-0  before:right-0 before:w-[1px] before:bg-gradient-to-b before:from-white/60 before:via-white/10 before:to-transparent bg-gradient-to-b from-white/5 via-black/10 to-black/40 backdrop-blur-xl shadow-[inset_-1px_0_0_rgba(255,255,255,0.1)]"> 
        
        {/* Logo "P" */}
        <Link href="/" className="relative w-16 h-24 flex items-center justify-center group m-0 p-0">
          <div className="relative w-32 h-32 p-0 m-0 opacity-70 flex items-center justify-center hover:scale-110 transition-transform duration-500">
            <Image 
              src="/images/logo2.png" 
              alt="Puerto Logo" 
              fill 
              className="object-contain" // object-contain pour qu'il ne soit pas coupé
            />
          </div>
        </Link>

        {/* BOUTON MENU (Morphing Burger -> Flèche) */}
        <div 
            className="flex flex-col items-center gap-6 group cursor-pointer mt-[-100px]" 
            onClick={() => setIsMenuOpen(true)}
            // On détecte le survol en React pour piloter l'animation Framer Motion
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
        >
          {/* TEXTE */}
          <span 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 
                      transition-all duration-500 ease-out
                      group-hover:text-puerto-yellow group-hover:tracking-[0.5em] group-hover:drop-shadow-[0_0_8px_rgba(234,193,87,0.8)]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Menu
          </span>
          
          {/* CERCLE CONTENEUR ANIMÉ */}
          <motion.div 
              className="relative p-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-md 
                          flex items-center justify-center
                          transition-colors duration-500
                          group-hover:border-puerto-yellow group-hover:bg-puerto-yellow/20 group-hover:shadow-[0_0_25px_rgba(234,193,87,0.5)]"
              
              // --- L'ANIMATION COEUR ---
              animate={isBtnHovered 
                  ? { scale: 1.2 } // État survolé (Zoom fixe)
                  : { scale: [1, 1.2, 1, 1.2, 1] } // État repos (Battement)
              }
              transition={isBtnHovered 
                  ? { duration: 0.3, ease: "easeOut" } // Transition rapide au survol
                  : { 
                      duration: 1.5, // Durée du "Ba-boum"
                      times: [0, 0.25, 0.5, 0.75, 1], // Timing précis du rythme cardiaque
                      repeat: Infinity, 
                      repeatDelay: 3, // Pause de 5 secondes
                      ease: "easeInOut" 
                    }
              }
          >
            
            {/* 1. L'icône BURGER */}
            <Menu className="w-8 h-8 text-white absolute transition-all duration-500 ease-in-out 
                            group-hover:opacity-0 group-hover:rotate-90 group-hover:scale-50" />

            {/* 2. L'icône FLÈCHE */}
            <ArrowUpRight className="w-8 h-8 text-puerto-yellow absolute transition-all duration-500 ease-in-out 
                                    opacity-0 rotate-[-90deg] scale-50 
                                    group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
          </motion.div>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex flex-col gap-6 text-white/60">
          <a href="https://instagram.com/puertotoulouse" target="_blank" className="hover:text-puerto-yellow hover:scale-110 transition-all hover:drop-shadow-[0_0_8px_rgba(234,193,87,0.5)]"><Instagram size={20} /></a>
          <a href="https://facebook.com/puertohabana" target="_blank" className="hover:text-puerto-yellow hover:scale-110 transition-all hover:drop-shadow-[0_0_8px_rgba(234,193,87,0.5)]"><Facebook size={20} /></a>
        </div>
      </aside>


      {/* --- 3. TOPBAR INFO (Légère et transparente) --- */}
      <header className="hidden md:flex fixed top-0 left-24 right-0 p-2 z-40 items-center justify-between px-12 
          border-b border-white/10 
          bg-gradient-to-r from-white/5 to-transparent 
          backdrop-blur-sm">
        
        <div className="flex items-center gap-3 text-sm tracking-[0.07em] text-gray-200 hover:text-white transition-colors cursor-pointer drop-shadow-sm">
          <Phone size={16} className="text-puerto-yellow" />
          <span>05 51 45 54 61</span>
        </div>
        
        <div className="flex gap-6">
            {/* Bouton Privatisation : Effet verre givré */}
            <BtnGlass className=" text-xs p-3 " href="https://www.privateaser.com/lieu/1348-puerto-habana" target="_blank">Privatisation</BtnGlass>
            {/* Bouton Réserver : Plein mais lumineux */}
            <BtnShine className="p-3 text-xs bg-gradient-gold text-black shadow-[0_0_20px_rgba(234,193,87,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]" href="/contact">Réservations Groupes</BtnShine>
            {/* <Link href="/restaurant" className="px-6 py-3 text-xs font-bold uppercase tracking-widest bg-puerto-yellow text-black hover:bg-white transition-all rounded-sm shadow-[0_0_20px_rgba(234,193,87,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                Réserver
            </Link> */}
        </div>
      </header>


      {/* --- CONTENU PRINCIPAL --- */}
      <main className="w-full md:pl-24 min-h-screen pt-16 md:pt-0">
        {children}
      </main>


      {/* --- 4. OVERLAY MENU (Plus clair, on voit le fond derrière) --- */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            // Ici on utilise bg-black/60 (au lieu de 90) pour voir le site en transparence
            className="fixed inset-0 z-[100] bg-puerto-bg/60 flex flex-col items-center justify-center"
        >
            <button 
                onClick={() => setIsMenuOpen(false)} 
                className="absolute top-8 right-8 md:top-12 md:right-12 group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
                <span className="uppercase tracking-widest text-xs font-bold">Fermer</span>
                <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors bg-white/5 backdrop-blur-sm">
                    <X size={24} />
                </div>
            </button>
            
            <nav className="flex flex-col gap-8 text-center">
                {[
                    {name: "Accueil", href: "/"},
                    {name: "Le Bar", href: "/bar"},
                    {name: "Le Restaurant", href: "/restaurant"},
                    {name: "Soirées & Club", href: "/soirees-latino"},
                    {name: "Cours de Danse", href: "cours-danse"},
                    {name: "Contact", href: "/contact"}
                ].map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + (i * 0.1) }}
                    >
                        <Link 
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl md:text-6xl font-serif font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:via-puerto-yellow hover:to-white transition-all duration-300 drop-shadow-lg"
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </nav>

            <div className="absolute bottom-12 text-white/40 text-sm tracking-widest uppercase border-t border-white/10 pt-4 px-8">
                Puerto Habana Toulouse
            </div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
}