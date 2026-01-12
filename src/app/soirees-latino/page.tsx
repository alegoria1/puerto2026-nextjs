// src/app/soirees/page.tsx
import React from "react";
import Image from "next/image";
import { SoireesAgenda } from "@/components/soirees/SoireesAgenda";
import { DjSpotlight } from "@/components/soirees/DjSpotlight";
import { BtnShine } from "@/components/ui/Buttons";
import { BentoMenuSoirees } from "@/components/BentoMenu";


export const metadata = {
  title: "Soirées Salsa & Club Latino Toulouse | Puerto Habana",
  description: "Agenda des soirées : Salsa le mardi/mercredi, Eclectico le jeudi et Clubbing le week-end. Découvrez le temple de la nuit latine à Toulouse.",
};

export default function SoireesPage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
            src="/images/soirees-bg.jpg" // IMAGE FOND CLUBBING
            alt="Ambiance Soirée Puerto Habana"
            fill
            className="object-cover opacity-60"
            priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                Les soirées <span className="text-puerto-yellow">Latinos</span> <br/>à Toulouse
            </h1>
            <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase font-bold mb-8">
                Musique • Danse • Convivialité
            </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </section>

      {/* 2. INTRO (20 ANS D'HISTOIRE) */}
      <section className="py-20 px-4 md:px-12 max-w-4xl mx-auto text-center">
         <h2 className="text-puerto-yellow font-bold uppercase tracking-widest text-sm mb-4">
             Depuis plus de 20 ans
         </h2>
         <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
             L'adresse incontournable des <br/> nuits toulousaines.
         </h3>
         <p className="text-gray-300 text-lg leading-relaxed mb-8">
             Le Puerto Habana fait vibrer Toulouse au rythme de l’Amérique latine. 
             Entre cocktails exotiques, piste de danse enflammée et programmation variée, chaque semaine réserve son lot d’émotions.
         </p>
         <p className="text-gray-400">
             Que vous soyez amateur de Salsa ou de Kizomba, de Kompa, passionné de reggaeton ou simplement en quête d’une soirée festive, notre maison vous ouvre ses portes pour vivre des moments inoubliables.
         </p>
         <p className="text-puerto-yellow">
             Pas besoin d'être un bon danseur pour venir au Puerto. Découvrez par vous même.
         </p>
      </section>

      {/* 3. L'AGENDA (Les 3 Soirées) */}
      <SoireesAgenda />

      {/* 4. DJ SPOTLIGHT */}
      <DjSpotlight />

      {/* 5. CTA FINAL */}
      <section className="py-20 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Prêt à enflammer la piste ?
          </h2>
          <div className="flex justify-center gap-4">
              <BtnShine href="/restaurant#reservation">
                  Réserver une Table
              </BtnShine>
          </div>
      </section>

      <BentoMenuSoirees/>


    </main>
  );
}