// src/app/restaurant/page.tsx
import React from "react";
import Image from "next/image";
import { RestaurantMenu } from "@/components/restaurant/RestaurantMenu";
import { BtnShine, BtnArrow } from "@/components/ui/Buttons";
import { Clock, Users, ChefHat } from "lucide-react";

import { MenusBento } from "@/components/restaurant/MenusBento";
import { MenusShowcase } from "@/components/restaurant/MenusShowcase";
import { MenusStacked } from "@/components/restaurant/MenusStacked";

import { KitchenHours } from "@/components/restaurant/KitchenHours";

import { BentoMenuRestaurant } from "@/components/BentoMenu";

export const metadata = {
  title: "Restaurant Latino & Tapas Toulouse | Puerto Habana",
  description: "Dégustez nos tapas maison, fajitas et viandes grillées. Cuisine authentique et ambiance festive au bord du Canal du Midi.",
};

export default function RestaurantPage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
            src="/images/restaurant-bg.jpg" // IMAGE DE FOND (Mets une photo de plats ou salle)
            alt="Restaurant Puerto Habana"
            fill
            className="object-cover opacity-50"
            priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                Restaurant brasserie & <span className="text-puerto-yellow">Tapas</span> à Toulouse
            </h1>
            <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase font-bold mb-8">
                • Tapas • Brochettes • Salades • Plats maison •
            </p>
            <p>
            Notre carte met à l’honneur une cuisine gourmande et conviviale, élaborée à partir de produits de qualité, pensée pour rassembler amis, collègues ou familles autour de plats simples, savoureux et faits maison.</p>
            <div className="mt-12">
                <BtnShine href="#reservation">
                Réserver une Table
            </BtnShine>
            </div>
            
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </section>

      <section className="mt-[-10vh]">
        <KitchenHours />
      </section>

      {/* 2. INTRO STORYTELLING */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Image d'ambiance ou Plat */}
            <div className="relative order-2 md:order-1 h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                 <Image 
                    src="/images/tapas.jpg" // IMAGE PLATS/TAPAS
                    alt="Assortiment de Tapas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 {/* Petit badge flottant */}
                 <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-puerto-yellow font-bold mb-1">
                        <ChefHat size={20} />
                        <span>Fait Maison</span>
                    </div>
                    <p className="text-xs text-white">Produits frais cuisinés sur place</p>
                 </div>
            </div>

            {/* Texte */}
            <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-puerto-yellow font-bold uppercase tracking-widest text-sm">L'Esprit du Puerto</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
                    Le Goût du <br/>Partage
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Les tapas du Puerto Habana ouvrent l’appétit et instaurent aussitôt une ambiance conviviale : planches gourmandes, petites bouchées à partager, assortiments variés… Tout est réuni pour accompagner un apéritif dînatoire autour d’un verre et profiter de l’atmosphère unique du lieu dès le début de la soirée.
                </p>
                <p className="text-gray-400 leading-relaxed">
                   Le restaurant propose une sélection de plats et tapas maison : viandes grillées, brochettes, saumon Gravlax maison, croquetas, salades composées et autres recettes généreuses. <br/> Une cuisine simple, authentique et pleine de saveurs, idéale pour se régaler et vivre un vrai moment de plaisir avant la fête.
                </p>

            </div>
         </div>
      </section>

      {/* 3. LE MENU (Tableau dynamique) */}
      <RestaurantMenu />

      {/* --- 4. LES FORMULES  --- */}
      <MenusStacked/>

    

      {/* 5. BANDEAU RÉSERVATION */}
      <section id="reservation" className="py-24 mt-12 bg-puerto-yellow relative overflow-hidden">
        {/* Motif de fond subtil */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6">
                Réservez votre table
            </h2>
            <p className="text-black/80 max-w-2xl mx-auto mb-8 font-medium text-lg">
                Pour un dîner en couple ou avec des amis, un repas de groupe avant la soirée dansante.  <br/>
                <b>Réservation fortement conseillée le week-end.</b>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="tel:0551455461" className="bg-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2">
                    <Clock size={18} />
                    05 51 45 54 61
                </a>
                <BtnArrow href="/contact" className="bg-white/20 text-black border border-black/10 hover:bg-black hover:text-white px-8 py-4 justify-center">
                    Demande de Groupe
                </BtnArrow>
            </div>
        </div>
      </section>

      <BentoMenuRestaurant/>

    </main>
  );
}