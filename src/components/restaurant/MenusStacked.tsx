"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Utensils, ChefHat, Users, Wine } from "lucide-react";

const formulas = [
  {
    id: "tapas",
    title: "Formule Tapas",
    price: "19€",
    subtitle: "Par personne",
    desc: "Pour une envie de partage et de convivialité. Un tour d'horizon de nos meilleures spécialités espagnoles.",
    icon: Utensils,
    image: "/images/formule-tapas.jpg", // Assurez-vous d'avoir cette image
    items: [
      "Patatas Bravas (sauce maison)",
      "Brochettes de poulet mariné",
      "Wrap de légumes au pesto",
      "Blinis au saumon Gravlax maison",
      "Jambon Serrano & Pan Con Tomate",
      "Croquetas de jambon maison"
    ]
  },
  {
    id: "degustation",
    title: "Menu Dégustation",
    price: "28€",
    subtitle: "Par personne",
    tag: "Best-Seller",
    desc: "L'expérience complète du Puerto. Commencez par les tapas, poursuivez avec nos grillades et finissez sur une touche sucrée.",
    icon: ChefHat,
    image: "/images/formule-degustation.jpg", // Assurez-vous d'avoir cette image
    items: [
      "Dégustation de Tapas (4 pièces)",
      "Assiette de Brochettes (4 pièces : Magret, Gambas, Boeuf, Poulet)",
      "Accompagnement Frites maison maison & Salade",
      "Assiette de Desserts (Salade fruits, Mousse Toblerone, Banoffee...)"
    ]
  },
  {
    id: "groupe",
    title: "Menu de Groupe",
    price: "38€",
    subtitle: "Par personne (Min. 6 pers)",
    desc: "La formule tout compris pour vos événements. Apéritif, Repas complet et Vin inclus pour une soirée sans prise de tête.",
    icon: Users,
    image: "/images/formule-groupes.jpg", // Assurez-vous d'avoir cette image
    items: [
      "Apéritif (Pichet Mojito, Punch ou Sans Alcool)",
      "Le Menu Dégustation complet (Tapas + Brochettes + Dessert)",
      "Vin du Languedoc compris (1 bouteille / 4 pers)",
      "Café offert"
    ]
  }
];

export function MenusStacked() {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      
      {/* Introduction */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          Nos <span className="text-puerto-yellow">Formules</span>
        </h2>
        <div className="w-24 h-1 bg-puerto-yellow mx-auto rounded-full opacity-60"></div>
      </div>

      <div className="flex flex-col gap-0 md:gap-24">
        {formulas.map((formula, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={formula.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative py-12 md:py-0"
            >
              <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* --- BLOC IMAGE --- */}
                  <div className="w-full md:w-1/2 relative">
                     <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <Image 
                            src={formula.image} 
                            alt={formula.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay décoratif */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        {/* Prix flottant sur l'image (Mobile uniquement) */}
                        <div className="absolute bottom-4 right-4 bg-puerto-yellow text-black font-bold px-4 py-2 rounded-lg text-xl md:hidden shadow-lg">
                            {formula.price}
                        </div>
                     </div>
                     
                     {/* Élément décoratif d'arrière-plan */}
                     <div className={`absolute -z-10 w-full h-full border-2 border-puerto-yellow/20 rounded-2xl top-6 ${isEven ? '-left-6' : '-right-6'} hidden md:block`}></div>
                  </div>


                  {/* --- BLOC TEXTE --- */}
                  <div className="w-full md:w-1/2 space-y-6">
                    
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 rounded-full text-puerto-yellow border border-white/10">
                            <formula.icon size={24} />
                        </div>
                        {formula.tag && (
                            <span className="px-3 py-1 bg-puerto-yellow/20 text-puerto-yellow text-xs font-bold uppercase tracking-widest rounded-full border border-puerto-yellow/30">
                                {formula.tag}
                            </span>
                        )}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        {formula.title}
                    </h3>
                    
                    {/* Prix Desktop */}
                    <div className="hidden md:flex items-baseline gap-2 pb-4 border-b border-white/10">
                        <span className="text-5xl font-bold text-puerto-yellow">{formula.price}</span>
                        <span className="text-gray-400 font-medium text-lg">/ {formula.subtitle}</span>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        {formula.desc}
                    </p>

                    {/* Liste des ingrédients */}
                    <ul className="grid grid-cols-1 gap-3 pt-2">
                        {formula.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                                <div className="mt-1 min-w-[20px]">
                                    <Check size={18} className="text-puerto-yellow" />
                                </div>
                                <span className="text-gray-200 text-sm md:text-base group-hover:text-white transition-colors">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}