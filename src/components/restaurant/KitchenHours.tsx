"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, ChefHat, CalendarDays } from "lucide-react";

export function KitchenHours() {
  return (
    <section className="relative py-12 px-4">
      {/* Conteneur principal avec effet Glass + Bordure Dorée */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Fond décoratif (Glow) */}
        <div className="absolute inset-0 bg-puerto-yellow/20 blur-[60px] rounded-full opacity-30"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 bg-black/60 backdrop-blur-md border border-puerto-cyan/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_30px_rgba(234,193,87,0.1)]"
        >
          
          {/* COLONNE GAUCHE : TITRE & ICÔNE */}
          <div className="flex items-center gap-6 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
             <div className="p-4 bg-puerto-yellow/10 rounded-full border border-puerto-cyan/30 text-puerto-cyan">
                <ChefHat size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                   Horaires Cuisine
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                   Service du soir uniquement
                </p>
             </div>
          </div>

          {/* COLONNE DROITE : LES CRÉNEAUX */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
             
             {/* Bloc Mardi-Mercredi */}
             <div className="flex flex-col items-center sm:items-start group">
                <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm uppercase tracking-wider">
                   <CalendarDays size={14} className="text-puerto-cyan" />
                   <span>Mardi & Mercredi</span>
                </div>
                <div className="flex items-baseline gap-2">
                   <span className="text-white text-xs">Jusqu'à</span>
                   <span className="text-3xl font-bold text-white group-hover:text-puerto-cyan transition-colors">22h00</span>
                </div>
             </div>

             {/* Bloc Jeudi-Samedi */}
             <div className="flex flex-col items-center sm:items-start group">
                <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm uppercase tracking-wider">
                   <Clock size={14} className="text-puerto-cyan" />
                   <span>Jeudi à Samedi</span>
                </div>
                <div className="flex items-baseline gap-2">
                   <span className="text-white text-xs">Jusqu'à</span>
                   <span className="text-3xl font-bold text-white group-hover:text-puerto-cyan transition-colors">22h30</span>
                </div>
             </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}