// src/components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// 1. Imports nécessaires pour l'effet souris
import { motion, useMotionValue, useTransform } from "framer-motion";

import { BtnShine, BtnSlide, BtnGlow, BtnArrow } from "@/components/ui/Buttons";

import { Marquee } from "./Marquee";

export default function Hero() {
  // --- LOGIQUE ANIMATION SOURIS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // L'image bouge de 20px à l'opposé de la souris
  const moveX = useTransform(mouseX, [-500, 500], [20, -20]);
  const moveY = useTransform(mouseY, [-500, 500], [20, -20]);

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  }

  return (
    <section 
      // 2. On écoute le mouvement sur toute la section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full  overflow-hidden"
    >
        
      {/* --- FOND --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Ambiance Puerto Habana" 
          fill 
          className="object-cover opacity-70" // Fond bien visible
          priority
        />
        {/* Overlay léger pour garder la luminosité */}
        <div className="absolute inset-0 bg-gradient-to-b from-puerto-bg/40 via-transparent to-puerto-bg/90" />
      </div>

      {/* --- CONTENU --- */}
      <div className="container mx-auto px-4 md:px-12 relative z-20 h-full flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          
          {/* Bloc Texte (Gauche) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-puerto-tropical/20 text-puerto-yellow text-sm font-bold uppercase tracking-wider border border-puerto-tropical/30">
              Bienvenido a Toulouse
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight text-white drop-shadow-lg">
              L'Âme Latino,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-puerto-yellow to-puerto-yellow-light drop-shadow-none">
                Au Cœur de Toulouse.
              </span>
            </h1>
            <p className="text-lg text-gray-100 max-w-md leading-relaxed drop-shadow-md font-medium">
              Vibrez au rythme de la salsa, savourez nos tapas maison, plongez dans une ambiance et un décors unique, découvrez l'authenticité dans votre ville.
            </p>
            
            {/* Boutons*/}
            <div className="flex flex-wrap items-center gap-12 pt-8 ">
                <BtnShine className="bg-gradient-cyan px-6 py-3 text-white shadow-[0_0_15px_rgba(0,0,0,0.6)]" href="/soirees-latino">Les soirées latino</BtnShine>
                <BtnArrow className="text-white py-2" href="/restaurant" target="_self" m-6>Voir la carte</BtnArrow>
            </div>

            
          </motion.div>


          {/* Image Danseurs Superposée (Droite) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            
            // 3. Application du mouvement fluide ici
            style={{ x: moveX, y: moveY }}
            
            className="hidden md:block relative h-[80vh] w-full pointer-events-none"
          >
              <Image 
                src="/images/danseurs.png" 
                alt="Danseurs Salsa Puerto Habana" 
                fill 
                className="object-contain p-6 object-bottom drop-shadow-2xl" 
                priority
              />
          </motion.div>

        </div>
      </div>
      <div className="relative z-30 -mt-[14%]"> 
        <Marquee />
      </div>
    </section>
  );
}