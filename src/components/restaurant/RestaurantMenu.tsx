"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, ChefHat, Coffee, ScrollText, Flame } from "lucide-react";

// --- DONNÉES DU MENU (CONFORMES AU PDF) ---
const menuData = [
  {
    id: "tapas",
    label: "Tapas & Entrées",
    icon: UtensilsCrossed,
    items: [
      { name: "Foie Gras de Canard (100g)", desc: "Foie gras du Sud-Ouest, toasts grillés", price: "18.00€" },
      { name: "Assiette de Jambon Serrano", desc: "Maison Garcia, servi façon Pan Con Tomate", price: "14.00€" },
      { name: "Assiette Saumon Gravlax", desc: "Saumon mariné maison, crème citronnée", price: "14.00€" },
      { name: "Nems Porc & Crevettes", desc: "6 pièces, servis avec sauce", price: "12.00€" },
      { name: "Croustillant de Poulet", desc: "Au Corn-Flakes", price: "8.00€" },
      { name: "Croquetas de Jambon", desc: "6 pièces, Aïoli maison", price: "8.00€" },
      { name: "Patatas Bravas", desc: "Ou Frites Maison", price: "5.00€" },
    ]
  },
  {
    id: "brochettes",
    label: "Nos Brochettes",
    icon: Flame,
    items: [
      { name: "Brochettes de Boeuf", desc: "4 pièces, Frites & Salade", price: "16.00€" },
      { name: "Brochettes de Poulet", desc: "4 pièces, Frites & Salade", price: "14.00€" },
      { name: "Brochettes de Magret", desc: "4 pièces, Frites & Salade", price: "18.00€" },
      { name: "Mix de Brochettes", desc: "6 pièces (Boeuf, Poulet, Magret, Gambas)", price: "23.00€" },
    ]
  },
  {
    id: "plats",
    label: "Plats & Salades",
    icon: ChefHat,
    items: [
      { name: "Poêlée de Gambas Persillées", desc: "Riz sauté aux légumes", price: "23.00€" },
      { name: "Magret de Canard (300g)", desc: "Entier, grillé, frites & salade", price: "24.00€" },
      { name: "Wok de Légumes", desc: "Au choix : Boeuf sauté ou Poulet", price: "18.00€" },
      { name: "Tartare de Boeuf", desc: "Pesto et Parmesan, frites maison", price: "18.00€" },
      { name: "Avocado Chicken Burger", desc: "Frites maison", price: "18.00€" },
      { name: "Burger de Boeuf", desc: "Oignons confits, Cheddar, frites maison", price: "17.00€" },
      { name: "Salade César", desc: "Poulet croustillant, oeuf, sauce maison, croutons", price: "17.00€" },
      { name: "Salade de la Mer", desc: "Saumon Gravlax, Gambas persillées", price: "18.00€" },
      { name: "Salade de Canard", desc: "Foie gras, Magret séché, croutons", price: "18.00€" },
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    icon: Coffee,
    items: [
      { name: "Assiette de Desserts", desc: "Salade fruits, Mousse Toblerone, Banoffee, Glace", price: "8.00€" },
      { name: "Assiette Fromage Brebis", desc: "Et confiture", price: "8.00€" },
      { name: "Salade de Fruits Frais", desc: "Maison", price: "8.00€" },
      { name: "Banoffee Maison", desc: "Tarte banane caramel", price: "8.00€" },
      { name: "Mousse au Toblerone", desc: "Maison", price: "7.00€" },
      { name: "Sorbets / Glaces", desc: "3 boules artisanales", price: "7.00€" },
    ]
  }
];

export function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState("tapas");

  return (
    <section className="py-20 md:px-8 max-w-5xl mx-auto relative z-10 border-t border-white/10 border-b border-white/10" id="menu">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          La Carte du <span className="text-puerto-yellow">Restaurant</span>
        </h2>
        <p className="text-gray-400 italic">Cuisine maison & saveurs du monde.</p>
      </div>

      {/* --- 1. LES ONGLETS (TABS) --- */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {menuData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
              activeTab === tab.id
                ? "bg-puerto-yellow text-black border-puerto-yellow shadow-[0_0_20px_rgba(234,193,87,0.4)] scale-105"
                : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- 2. LE TABLEAU (CONTENU) --- */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {menuData.map((category) => (
            category.id === activeTab && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              >
                {category.items.map((item, index) => (
                  <div key={index} className="group">
                    {/* Ligne Titre + Prix */}
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-puerto-yellow transition-colors">
                        {item.name}
                      </h3>
                      
                      {/* Ligne pointillée flexible */}
                      <div className="flex-grow mx-4 border-b border-white/20 border-dotted opacity-50 relative top-[-4px]"></div>
                      
                      <span className="text-lg font-bold text-puerto-yellow whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      
    </section>
  );
}