// src/app/bar/page.tsx
import React from "react";
import { BarMenu } from "@/components/bar/BarMenu";
import { HappyHour } from "@/components/bar/HappyHour";
import Image from "next/image";
import { Wine, Beer, Citrus } from "lucide-react"; // Quelques icônes pour la section Rhums
import { Marquee } from "@/components/home/Marquee";

import { BentoMenuBar } from "@/components/BentoMenu";

export const metadata = {
  title: "Bar à Cocktails & Rhumerie Toulouse | Puerto Habana",
  description: "Découvrez le meilleur Mojito de Toulouse, nos 50 références de rhums et notre Happy Hour du jeudi. Ambiance Latino au bord du Canal du Midi.",
};

export default function BarPage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SIMPLE (Tu peux mettre une image de barman ici) */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <Image 
            src="/images/bar-bg.jpg" // IMAGE DE FOND BAR
            alt="Bar Puerto Habana Toulouse"
            fill
            className="object-cover opacity-60"
            priority
        />
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                Bar & <span className="text-puerto-yellow">Cocktails</span>
            </h1>
            <p className="text-white/90 text-xl tracking-widest uppercase font-bold">
                L'Esprit de Cuba à Toulouse
            </p>
            <p className="text-white text-s">Au Puerto Habana, le bar est un passage incontournable. <br></br>Mojitos, rhums d’exception, cocktails classiques et créations originales : chaque verre est une assurance de plaisir et de fête.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </section>
      <div className="-mt-10">
        <Marquee></Marquee>
      </div>
      


      {/* 2. INTRO SEO & MOJITO (Le texte simplifié) */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Colonne Texte */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-puerto-yellow font-bold uppercase tracking-widest text-sm mb-2">Mixologie Latine</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        Assurément l'un des <br/>meilleurs Mojitos de Toulouse.
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Au Puerto Habana, le <strong className="text-white">Mojito</strong> est une signature. 
                        Préparé avec de la menthe fraîche, un sirop de sucre maison, des citrons fraîchement sélectionnés et le véritable Rhum Havana, il vous transporte instantanément.
                    </p>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                    Nos barmens préparent des cocktails qui reflètent l’énergie des nuits au Puerto. 
                    Des classiques intemporels aux créations originales, chaque verre est une promesse de fête.
                </p>

                {/* Tags SEO visuels */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-wide">Menthe Fraîche</span>
                    <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-wide">Rhum Havana Club</span>
                    <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 uppercase tracking-wide">Sirop Maison</span>
                </div>
            </div>

            {/* Colonne Image (Mojito) */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                    src="/images/mojito.jpg" // IMAGE MOJITO
                    alt="Le Mojito du Puerto Habana à Toulouse"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                 />
            </div>
         </div>
      </section>


      {/* 3. HAPPY HOUR (Mise en avant Jeudi) */}
      <HappyHour />


      {/* 4. LA CARTE (Zoom + Download) */}
      <BarMenu />


      {/* 5. AUTRES BOISSONS (Bloc compact) */}
      <section className="py-20 bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-12">
                Pour les <span className="text-puerto-yellow">Connaisseurs</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Rhums */}
                <div className="p-8 rounded-xl bg-black/40 border border-white/5 hover:border-puerto-yellow/30 transition-all group">
                    <div className="w-12 h-12 bg-puerto-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-puerto-yellow/20 transition-colors">
                        <Citrus className="text-puerto-yellow" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Rhumerie d'Exception</h3>
                    <p className="text-gray-400 text-sm">
                        Une sélection pointue de rhums vieux, ambrés et arrangés. Voyagez à travers les Antilles à chaque gorgée.
                    </p>
                </div>

                {/* Vins & Bières */}
                <div className="p-8 rounded-xl bg-black/40 border border-white/5 hover:border-puerto-yellow/30 transition-all group">
                    <div className="w-12 h-12 bg-puerto-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-puerto-yellow/20 transition-colors">
                        <Beer className="text-puerto-yellow" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Vins & Bières</h3>
                    <p className="text-gray-400 text-sm">
                        Bières pression rafraîchissantes et une carte des vins soigneusement choisie pour accompagner vos tapas.
                    </p>
                </div>

                {/* Sans Alcool */}
                <div className="p-8 rounded-xl bg-black/40 border border-white/5 hover:border-puerto-yellow/30 transition-all group">
                    <div className="w-12 h-12 bg-puerto-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-puerto-yellow/20 transition-colors">
                        <Wine className="text-puerto-yellow" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Softs & Virgin</h3>
                    <p className="text-gray-400 text-sm">
                        Le plaisir du cocktail accessible à tous avec nos créations sans alcool ("Virgin") et nos softs.
                    </p>
                </div>
            </div>
        </div>
      </section>
      {/* =================MENU BENTO================= */}
      <BentoMenuBar></BentoMenuBar>


    </main>
  );
}