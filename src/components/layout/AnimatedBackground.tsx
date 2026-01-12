// src/components/layout/AnimatedBackground.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a1529]">
      {/* Fond de base : Noir bleuté très profond */}

      {/* --- BLOB 1 : LE BLEU TROPICAL (Lagon) --- */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/40 blur-[100px] mix-blend-screen"
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.3, 0.9, 1], // Pulsation plus forte
          opacity: [0.4, 0.7, 0.4], // Plus visible
        }}
        transition={{
          duration: 12, // Vitesse accélérée (C'était 25)
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* --- BLOB 2 : LE JAUNE CUBAIN (Chaleur) --- */}
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-puerto-yellow/30 blur-[120px] mix-blend-screen"
        animate={{
          x: [0, -200, 50, 0],
          y: [0, 150, -150, 0],
          scale: [1, 1.4, 0.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10, // Très dynamique
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* --- BLOB 3 : LE VIOLET/BLEU NUIT (Profondeur Club) --- */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[140px] mix-blend-screen"
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Ajout d'un 4ème Blob "Flash" pour dynamiser le centre */}
       <motion.div
        className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full bg-teal-400/20 blur-[80px] mix-blend-screen"
        animate={{
          scale: [0.8, 1.5, 0.8],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 8, // Pulsation rapide
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Grain "Cinéma" pour lier les couleurs */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none"></div>
    </div>
  );
}