"use client";
import React from "react";
import { motion } from "framer-motion";
import { Utensils, Users, Wine, ChefHat, CheckCircle2 } from "lucide-react";

export function MenusBento() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          Nos <span className="text-puerto-yellow">Formules</span>
        </h2>
        <p className="text-gray-400">Pour découvrir le meilleur du Puerto à prix doux.</p>
      </div>

      {/* GRILLE BENTO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        
        {/* --- CARTE 1 : FORMULE TAPAS (19€) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
        >
            <div>
                <div className="flex items-center gap-3 mb-4 text-puerto-yellow">
                    <Utensils size={28} />
                    <span className="font-bold tracking-widest uppercase text-sm">Découverte</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Formule Tapas</h3>
                <div className="text-4xl font-bold text-white mb-6">19€<span className="text-lg text-gray-400 font-normal"> /pers</span></div>
                
                <p className="text-gray-400 mb-6 text-sm">L'assortiment idéal pour partager l'esprit espagnol à deux ou entre amis.</p>

                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 size={16} className="text-puerto-yellow mt-1 shrink-0" />
                        <span>Assortiment de <strong>6 Tapas</strong></span>
                    </li>
                    <li className="text-xs text-gray-500 pl-7 leading-relaxed">
                       Patatas Bravas, Brochettes poulet, Wrap légumes, Blinis saumon, Serrano, Croquetas.
                    </li>
                </ul>
            </div>
        </motion.div>

        {/* --- CARTE 2 : MENU DÉGUSTATION (28€) - MIS EN AVANT --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-puerto-yellow/10 border border-puerto-yellow shadow-[0_0_30px_rgba(234,193,87,0.1)] hover:shadow-[0_0_50px_rgba(234,193,87,0.2)] transition-all duration-300 md:-mt-4 md:-mb-4 z-10"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-puerto-yellow text-black font-bold px-4 py-1 rounded-full text-xs tracking-widest uppercase shadow-lg">
                Recommandé
            </div>

            <div>
                <div className="flex items-center gap-3 mb-4 text-puerto-yellow">
                    <ChefHat size={28} />
                    <span className="font-bold tracking-widest uppercase text-sm">Le Complet</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Menu Dégustation</h3>
                <div className="text-5xl font-bold text-white mb-6">28€<span className="text-lg text-gray-400 font-normal"> /pers</span></div>
                
                <p className="text-white/80 mb-6 text-sm">L'expérience complète du Puerto : Tapas, Grillades et Douceurs.</p>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white text-sm">
                        <CheckCircle2 size={18} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Dégustation Tapas</strong> (4 pièces)</span>
                    </li>
                    <li className="flex items-start gap-3 text-white text-sm">
                        <CheckCircle2 size={18} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Assiette Brochettes</strong> (4 pièces)</span>
                    </li>
                     <li className="text-xs text-gray-400 pl-8 -mt-2 mb-2">
                       Magret, Gambas, Boeuf, Poulet + Frites maison & Salade
                    </li>
                    <li className="flex items-start gap-3 text-white text-sm">
                        <CheckCircle2 size={18} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Assiette de Desserts</strong></span>
                    </li>
                </ul>
            </div>
        </motion.div>

        {/* --- CARTE 3 : MENU GROUPE (38€) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
        >
            <div>
                <div className="flex items-center gap-3 mb-4 text-puerto-yellow">
                    <Users size={28} />
                    <span className="font-bold tracking-widest uppercase text-sm">Tout Inclus</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Menu Groupe</h3>
                <div className="text-4xl font-bold text-white mb-6">38€<span className="text-lg text-gray-400 font-normal"> /pers</span></div>
                
                <p className="text-gray-400 mb-6 text-sm">La formule clé en main pour vos événements, anniversaires et soirées d'entreprise.</p>

                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                        <Wine size={16} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Apéritif</strong> (Pichet Mojito ou Punch)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 size={16} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Menu Dégustation</strong> (Complet)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                        <Wine size={16} className="text-puerto-yellow mt-1 shrink-0" />
                        <span><strong>Vin Compris</strong> (Languedoc)</span>
                    </li>
                    <li className="text-xs text-gray-500 pl-7">
                       1 bouteille pour 4 pers. (Rouge, Rosé ou Blanc)
                    </li>
                </ul>
            </div>
        </motion.div>

      </div>
    </section>
  );
}