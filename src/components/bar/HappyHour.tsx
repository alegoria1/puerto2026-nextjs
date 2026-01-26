// src/components/bar/HappyHour.tsx
"use client";
import React from "react";
// import { motion } from "framer-motion"; // Pas utilisé pour l'instant
import { PartyPopper, Clock, Martini } from "lucide-react";
import Image from "next/image"; // <--- IMPORTANT : Importer Image

export function HappyHour() {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* --- 1. IMAGE DE FOND FLOUTÉE --- */}
      <div className="absolute inset-0 z-0">
        <Image
            src="/images/happy-hour-bg.jpg" // <--- REMPLACE PAR TON IMAGE
            alt="Ambiance Happy Hour Puerto Habana"
            fill
            className="object-cover brightness-90 blur-sm" // Flou + Assombrissement
            priority // Charge cette image en priorité
        />
        {/* Dégradé supplémentaire pour fondre les bords */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black"></div>
      </div>


      {/* --- 2. CONTENU "GLASS" --- */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Ajout de 'backdrop-blur-lg' et 'bg-black/30' sur ce conteneur 
           pour l'effet verre givré par-dessus l'image de fond.
        */}
        <div className="max-w-4xl mx-auto bg-black/10 border border-puerto-yellow/30 rounded-2xl p-8 md:p-12 backdrop-blur-lg shadow-[0_0_60px_rgba(234,193,87,0.2)] text-center">
            
            {/* Header (Le petit badge) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-puerto-yellow/90 text-black font-bold uppercase tracking-widest text-sm mb-8 shadow-lg">
                <PartyPopper size={18} />
                L'Incontournable du Jeudi
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
                Happy Hour <span className="text-puerto-yellow italic">Toulousain</span>
            </h2>

            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
                Le rendez-vous préféré des Toulousains pour bien commencer la soirée & le week-end. 
                Profitez de nos meilleurs cocktails à prix doux, accompagnés de 
                <span className="text-puerto-yellow font-bold"> petits toasts offerts</span>.
            </p>

            {/* Les Détails (Grille) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Carte 1 */}
                <div className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:border-puerto-yellow/60 hover:bg-white/20 transition-all duration-300 group">
                    <Clock className="w-8 h-8 text-puerto-yellow mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Horaire</h3>
                    <p className="text-gray-300 text-sm font-medium">Tous les Jeudis<br/> de l'ouverture jusqu'à 22h30</p>
                </div>
                {/* Carte 2 */}
                <div className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:border-puerto-yellow/60 hover:bg-white/20 transition-all duration-300 group">
                    <Martini className="w-8 h-8 text-puerto-yellow mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Offre</h3>
                    <p className="text-gray-300 text-sm font-medium">Cocktails à petits prix <br/>& Toasts offerts</p>
                </div>
                {/* Carte 3 */}
                <div className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:border-puerto-yellow/60 hover:bg-white/20 transition-all duration-300 group">
                    <PartyPopper className="w-8 h-8 text-puerto-yellow mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Ambiance</h3>
                    <p className="text-gray-300 text-sm font-medium">Soirée ECLECTICO LATINO<br/>de la salsa au latino-généraliste</p>
                </div>
            </div>

            <p className="text-xs text-gray-400 italic opacity-80">
                *L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
            </p>
        </div>
      </div>
    </section>
  );
}