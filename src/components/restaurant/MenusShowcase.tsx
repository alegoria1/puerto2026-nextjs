"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Users, Wine, ChefHat, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

// Données issues de ton PDF
const formulas = [
  {
    id: "tapas",
    title: "Formule Tapas",
    subtitle: "Découverte à partager",
    price: "19€",
    perPers: true,
    desc: "L'assortiment idéal pour goûter à l'esprit espagnol, parfait pour l'apéro ou une faim modérée.",
    image: "/images/tapas-mix.jpg", // Remplace par ta photo
    icon: Utensils,
    features: [
      "Assortiment de 6 Tapas",
      "Patatas Bravas & Sauce Maison",
      "Brochettes de Poulet mariné",
      "Wrap de légumes au pesto",
      "Blinis saumon & Serrano",
      "Croquetas de jambon"
    ]
  },
  {
    id: "degustation",
    title: "Menu Dégustation",
    subtitle: "L'expérience complète",
    price: "28€",
    perPers: true,
    tag: "Recommandé",
    desc: "Le best-seller du Puerto. Un voyage culinaire complet des entrées jusqu'au dessert.",
    image: "/images/restaurant-bg.jpg", // Remplace par ta photo de plat
    icon: ChefHat,
    features: [
      "Dégustation de Tapas (4 pièces)",
      "Assiette de Brochettes (4 pièces)",
      "Accompagnement Frites & Salade",
      "Assiette de Desserts (3 mignardises)",
      "Magret, Gambas, Boeuf & Poulet"
    ]
  },
  {
    id: "groupe",
    title: "Menu Groupe",
    subtitle: "Tout inclus (Min 10 pers.)",
    price: "38€",
    perPers: true,
    desc: "La solution clé en main pour vos anniversaires et événements. On s'occupe de tout !",
    image: "/images/happy-hour-bg.jpg", // Remplace par ta photo d'ambiance
    icon: Users,
    features: [
      "Apéritif Inclus (Mojito ou Punch)",
      "Menu Dégustation Complet",
      "Vin Compris (Languedoc)",
      "1 Bouteille pour 4 personnes",
      "Café offert"
    ]
  }
];

export function MenusShowcase() {
  const [activeId, setActiveId] = useState("degustation");
  const activeFormula = formulas.find((f) => f.id === activeId) || formulas[0];

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          Nos <span className="text-puerto-yellow">Formules</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choisissez l'expérience qui vous convient. Du simple apéritif dînatoire au repas de groupe tout inclus.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full min-h-[500px]">
        
        {/* --- COLONNE GAUCHE : NAVIGATION --- */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {formulas.map((formula) => (
            <button
              key={formula.id}
              onClick={() => setActiveId(formula.id)}
              className={`group relative text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                activeId === formula.id
                  ? "bg-white/10 border-puerto-yellow/50 shadow-[0_0_20px_rgba(234,193,87,0.1)]"
                  : "bg-transparent border-white/10 hover:bg-white/5 hover:border-white/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${activeId === formula.id ? "bg-puerto-yellow text-black" : "bg-white/10 text-gray-400 group-hover:text-white"}`}>
                    <formula.icon size={20} />
                </div>
                <div>
                    <h3 className={`font-serif font-bold text-lg ${activeId === formula.id ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                        {formula.title}
                    </h3>
                    {formula.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-puerto-yellow bg-puerto-yellow/10 px-2 py-0.5 rounded ml-2">
                            {formula.tag}
                        </span>
                    )}
                </div>
              </div>
              
              {/* Flèche active */}
              <ArrowRight 
                size={18} 
                className={`transition-transform duration-300 ${activeId === formula.id ? "text-puerto-yellow opacity-100 translate-x-0" : "text-gray-500 opacity-0 -translate-x-4"}`} 
              />
            </button>
          ))}
        </div>

        {/* --- COLONNE DROITE : CONTENU DÉTAILLÉ (AVEC IMAGE) --- */}
        <div className="lg:w-2/3 relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFormula.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl flex flex-col md:flex-row"
                >
                    {/* Partie IMAGE (Mobile: Top, Desktop: Right side or Background cover) */}
                    {/* Ici je fais un design splitté : Texte à gauche, Image à droite */}
                    
                    {/* BLOC TEXTE */}
                    <div className="p-8 md:p-10 flex flex-col justify-center md:w-3/5 z-10 bg-gradient-to-r from-black via-black/90 to-transparent">
                         <div className="mb-2 text-puerto-yellow font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            <activeFormula.icon size={14}/>
                            {activeFormula.subtitle}
                         </div>
                         
                         <h3 className="text-4xl font-serif font-bold text-white mb-2">{activeFormula.title}</h3>
                         
                         <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-5xl font-bold text-puerto-yellow">{activeFormula.price}</span>
                            <span className="text-gray-400">/ personne</span>
                         </div>

                         <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                            {activeFormula.desc}
                         </p>

                         <ul className="space-y-3">
                            {activeFormula.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                                    <Check size={16} className="text-puerto-yellow mt-1 shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                         </ul>
                    </div>

                    {/* BLOC IMAGE (Arrière-plan partiel) */}
                    <div className="absolute inset-0 md:relative md:w-2/5 h-64 md:h-auto z-0">
                        <Image 
                            src={activeFormula.image}
                            alt={activeFormula.title}
                            fill
                            className="object-cover"
                        />
                        {/* Overlay pour fondre l'image avec le texte sur mobile */}
                        <div className="absolute inset-0 bg-black/60 md:hidden"></div> 
                        {/* Dégradé vertical pour desktop */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent hidden md:block"></div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}