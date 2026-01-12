"use client";
import React from "react";
import { motion } from "framer-motion";
import { Disc, Music2, Sparkles, Flame } from "lucide-react";

export function AmbiancesGrid() {
  const cards = [
    {
      id: 1,
      day: "MARDI & MERCREDI",
      title: "Ambiance Salsa & DJs Guest",
      desc: "Tous les débuts de semaine, c'est ambiance pur latino avec nos Deejays Guests en rotation tout le mois. Venez dansez ou venez voir.",
      icon: Music2,
      delay: 0,
    },
    {
      id: 2,
      day: "JEUDI SOIR",
      title: "Soirée Eclectico Latino",
      desc: "La soirée hebdomadaire incontournable. De la Salsa au latino-généraliste, un vrai voyage musical et festif. Happy Hour jusqu'à 23h.",
      icon: Disc,
      delay: 0.1,
    },
    {
      id: 3,
      day: "WEEK-END",
      title: "Clubbing Latino",
      desc: "Vendredi & Samedi : L'ambiance monte d'un cran. Généraliste, Reggaeton et fête jusqu'à 4h.",
      icon: Flame, // Icône flamme pour le week-end
      delay: 0.2,
    },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">
            Les Ambiances Latino <span className="text-puerto-yellow">&</span> DJs
          </h2>
          <div className="w-24 h-1 bg-puerto-yellow mx-auto rounded-full opacity-70"></div>
        </div>

        {/* GRILLE DES CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              className="group relative h-full"
            >
              {/* Le fond de la carte (Glass + Bordure) */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-puerto-yellow/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                
                {/* DÉCORATION D'ARRIÈRE-PLAN (Vinyle géant) */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.05] transition-all duration-700 group-hover:opacity-10 group-hover:rotate-45">
                   <card.icon size={180} />
                </div>

                {/* CONTENU */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* En-tête : Icône + Jour */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-puerto-yellow font-bold tracking-widest text-xs border border-puerto-yellow/30 px-3 py-1 rounded-full bg-puerto-yellow/10">
                      {card.day}
                    </span>
                    <card.icon size={24} className="text-white/50 group-hover:text-puerto-yellow transition-colors duration-300" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-puerto-yellow transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {card.desc}
                  </p>

                  {/* Ligne décorative animée en bas */}
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mt-auto">
                    <div className="h-full w-0 bg-puerto-yellow group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}