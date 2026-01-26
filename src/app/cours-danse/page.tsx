import React from "react";
import Image from "next/image";
import { Clock, Calendar, Mail, Phone, Music2, Euro, Info } from "lucide-react";
import { BtnShine } from "@/components/ui/Buttons";
import { BentoMenuCours } from "@/components/BentoMenu";

export const metadata = {
  title: "Cours de Salsa & Bachata Toulouse | Puerto Habana",
  description: "Apprenez la Salsa et la Bachata au Puerto Habana. Cours débutants et intermédiaires, ambiance conviviale, 8€ le cours sans réservation.",
};

export default function CoursDansePage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SIMPLE (Image Unique) */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
            src="/images/cours-danse-bg.jpg" // TA SEULE IMAGE ICI
            alt="Cours de Danse Puerto Habana"
            fill
            className="object-cover opacity-60"
            priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                Cours de <span className="text-puerto-yellow">Danse</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase font-bold">
                Salsa & Bachata
            </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </section>


      {/* 2. INTRO : L'ESPRIT */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto text-center">
         <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
             Apprendre dans une ambiance <span className="text-puerto-yellow">Festive</span>
         </h2>
         <p className="text-gray-300 text-lg leading-relaxed mb-8">
             Envie d’apprendre à danser ou de perfectionner votre style ? 
             Le <strong>Puerto Habana</strong> vous propose chaque semaine des cours de salsa et de bachata.
         </p>
         <p className="text-gray-400 leading-relaxed">
             Que vous soyez <strong>débutant</strong> ou <strong>confirmé</strong>, nos professeurs passionnés vous accompagnent pas à pas. 
             L’objectif : apprendre tout en s’amusant et profiter pleinement des soirées qui suivent les cours.
         </p>
      </section>


      {/* 3. LE PROGRAMME (GRILLE) */}
      <section className="py-10 px-4 md:px-12 max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* --- CARTE SALSA --- */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-puerto-yellow/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-puerto-yellow/10 rounded-full text-puerto-yellow">
                        <Music2 size={24} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Salsa Cubaine</h3>
                </div>

                <div className="space-y-6">
                    {/* Mardi */}
                    <div className="border-l-2 border-puerto-yellow/50 pl-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                            <Calendar size={14} className="text-puerto-yellow" /> Les Mardis
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex justify-between">
                                <span>Casino Intermédiaire</span>
                                <span className="text-white font-bold">19h30 - 20h30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Casino Inter-Avancé</span>
                                <span className="text-white font-bold">20h30 - 21h30</span>
                            </li>
                        </ul>
                    </div>

                    {/* Jeudi */}
                    <div className="border-l-2 border-puerto-yellow/50 pl-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                            <Calendar size={14} className="text-puerto-yellow" /> Les Jeudis
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex justify-between">
                                <span>Niveau Débutant</span>
                                <span className="text-white font-bold">20h00 - 21h00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Chahera */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Contact Professeur</p>
                    <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Mail size={16} className="text-puerto-yellow" />
                        <a href="mailto:onisonacontact@gmail.com">Chahera : onisonacontact@gmail.com</a>
                    </div>
                </div>
            </div>


            {/* --- CARTE BACHATA --- */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-puerto-yellow/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-500/10 rounded-full text-red-400">
                        <Music2 size={24} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white">Bachata</h3>
                </div>

                <div className="space-y-6">
                    {/* Mercredi */}
                    <div className="border-l-2 border-red-500/50 pl-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                            <Calendar size={14} className="text-red-400" /> Les Mercredis
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex justify-between">
                                <span>Niveau Intermédiaire</span>
                                <span className="text-white font-bold">20h00 - 21h00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Vendredi */}
                    <div className="border-l-2 border-red-500/50 pl-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                            <Calendar size={14} className="text-red-400" /> Les Vendredis
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex justify-between">
                                <span>Débutant Évolutif</span>
                                <span className="text-white font-bold">20h00 - 21h00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Julie */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Contact Professeur</p>
                    <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <Phone size={16} className="text-red-400" />
                        <a href="tel:0766096747">Julie : 07 66 09 67 47</a>
                    </div>
                </div>
            </div>

         </div>
      </section>


      {/* 4. TARIFS & INFOS PRATIQUES */}
      <section className="py-16 bg-white/5 border-t border-white/10 mt-10">
         <div className="max-w-5xl mx-auto px-4">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 
                 {/* BLOC PRIX */}
                 <div className="text-center md:text-right md:border-r border-white/10 md:pr-12">
                     <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-puerto-yellow text-black font-bold text-3xl shadow-[0_0_30px_rgba(234,193,87,0.4)] mb-4">
                         8€
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-white">Tarif Unique</h3>
                     <p className="text-gray-400 mt-1">par cours / par personne</p>
                     <p className="text-sm text-puerto-yellow font-bold mt-4 uppercase tracking-widest flex items-center justify-center md:justify-end gap-2">
                         <Info size={16}/> Règlement sur place
                     </p>
                 </div>

                 {/* BLOC FONCTIONNEMENT */}
                 <div className="space-y-6">
                     <div>
                         <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                             Sans Réservation
                         </h3>
                         <p className="text-gray-300 text-sm leading-relaxed">
                             Le Puerto Habana ne prend pas de réservations. Les cours sont accessibles à tous sans inscription.
                         </p>
                     </div>
                     <div>
                         <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                             <Clock size={20} className="text-puerto-yellow"/>
                             Arrivez 15 min avant
                         </h3>
                         <p className="text-gray-300 text-sm leading-relaxed">
                             Le temps de vous installer, de régler votre cours et de vous échauffer tranquillement.
                         </p>
                     </div>
                     <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                         <p className="text-white text-sm font-medium">
                             🎉 <span className="text-puerto-yellow">Bonus :</span> La piste reste ouverte pour tous après les cours pour pratiquer jusqu'à la fermeture !
                         </p>
                     </div>
                 </div>

             </div>
         </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-12 text-center">
          <BtnShine href="/contact">
              Nous Trouver
          </BtnShine>
      </section>

      <BentoMenuCours/>

    </main>
  );
}