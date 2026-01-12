"use client";
import React from "react";
import { motion } from "framer-motion";
import { Disc } from "lucide-react"; // Petite icône vinyle pour le style

export function AmbiancesTable() {
  const schedule = [
    {
      day: "Mardi & Mercredi",
      desc: "Ambiance Latino avec nos Deejays Guests",
    },
    {
      day: "Jeudi",
      desc: "Soirée hebdomadaire Eclectico Latino",
    },
    {
      day: "Week-end", // Vendredi & Samedi
      desc: "Ambiance Clubbing Latino-Généraliste & Reggaeton",
    },
  ];

  return (
    <section className="relative z-10 py-16 px-4 md:px-8 max-w-5xl mx-auto">
      
      {/* --- TITRE DE LA SECTION --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
          Les Ambiances Latino <span className="text-puerto-yellow">&</span> DJs
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs">
          Au Puerto Habana
        </p>
      </motion.div>

      {/* --- CADRE GLASS (TABLEAU) --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)]"
      >
        {/* Petit effet de lumière en haut du cadre */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <table className="w-full text-left border-collapse">
          <tbody>
            {schedule.map((item, index) => (
              <tr 
                key={index} 
                className="group border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300"
              >
                {/* Colonne 1 : Les Jours */}
                <td className="p-6 md:p-8 w-1/3 md:w-1/4 align-middle">
                  <div className="flex items-center gap-3">
                    <Disc size={18} className="text-puerto-yellow animate-spin-slow opacity-70 group-hover:opacity-100" />
                    <span className="font-bold text-puerto-yellow uppercase tracking-wider text-sm md:text-base">
                      {item.day}
                    </span>
                  </div>
                </td>

                {/* Colonne 2 : La Description */}
                <td className="p-6 md:p-8 align-middle">
                  <span className="text-gray-200 group-hover:text-white font-serif text-lg md:text-xl transition-colors">
                    {item.desc}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

    </section>
  );
}