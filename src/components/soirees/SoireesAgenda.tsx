"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music2, Star, Flame, Clock, CalendarDays } from "lucide-react";

const events = [
  {
    id: "salsa",
    days: "Mardi & Mercredi",
    title: "Salsa & Bachata",
    subtitle: "Apprendre & Pratiquer",
    desc: "Le début de semaine se fait en rythme ! Nos DJ guests vous font voyager au son des meilleures musiques Salsa, Son, Bachata et Kompa. Que vous soyez débutant curieux ou danseur confirmé, la piste est à vous.",
    details: ["DJ Guests en rotation", "Ambiance conviviale", "Fermeture 02h00"],
    icon: Music2,
    image: "/images/salsa-dancing.jpg", // Mets une photo de couple qui danse
    color: "text-blue-400",
    borderColor: "border-blue-400/30"
  },
  {
    id: "jeudi",
    days: "Tous les Jeudis",
    title: "Eclectico Latino",
    subtitle: "L'Afterwork Incontournable",
    desc: "Le mélange explosif qui séduit tout Toulouse. Commencez par notre Happy Hour tardif (jusqu'à 23h) et laissez-vous emporter par un mix Salsa, Reggaeton et Hits actuels.",
    details: ["Happy Hour jusqu'à 23h", "Mix Latino Généraliste", "Fermeture 03h00"],
    icon: Star,
    image: "/images/happy-hour-bg.jpg", // Mets une photo de fête/cocktails
    color: "text-puerto-yellow",
    borderColor: "border-puerto-yellow/30"
  },
  {
    id: "weekend",
    days: "Vendredi & Samedi",
    title: "Week-end Caliente",
    subtitle: "Clubbing & Fête Totale",
    desc: "Le Puerto prend toute sa dimension festive. DJs résidents et invités enflamment la piste jusqu'à l'aube. C'est la promesse d'une immersion totale dans l'esprit latino.",
    details: ["Ambiance Survoltée", "Clubbing Latino & Reggaeton", "Fermeture 05h00"],
    icon: Flame,
    image: "/images/club-crowd.jpg", // Mets une photo de foule/club
    color: "text-red-500",
    borderColor: "border-red-500/30"
  }
];

export function SoireesAgenda() {
  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
          L'Agenda de vos <span className="text-puerto-yellow">Nuits</span>
        </h2>
        <div className="w-24 h-1 bg-puerto-yellow mx-auto rounded-full opacity-60"></div>
      </div>

      <div className="flex flex-col gap-24">
        {events.map((evt, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* --- IMAGE --- */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl`}>
                   <Image 
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   
                   {/* Badge Jour Mobile */}
                   <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 md:hidden">
                      <span className={`font-bold uppercase tracking-widest text-xs ${evt.color}`}>{evt.days}</span>
                   </div>
                </div>
                
                {/* Effet Glitch/Déco arrière-plan */}
                <div className={`absolute -z-10 top-6 w-full h-full rounded-2xl border-2 ${evt.borderColor} ${isEven ? '-right-6' : '-left-6'} hidden md:block opacity-60`}></div>
              </div>

              {/* --- TEXTE --- */}
              <div className="w-full md:w-1/2 space-y-6">
                 
                 <div className="hidden md:flex items-center gap-3">
                    <CalendarDays className={evt.color} size={20} />
                    <span className={`font-bold uppercase tracking-widest text-sm ${evt.color}`}>
                        {evt.days}
                    </span>
                 </div>

                 <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">
                    {evt.title}
                 </h3>
                 <p className="text-xl text-gray-200 font-medium">
                    {evt.subtitle}
                 </p>
                 <p className="text-gray-400 leading-relaxed">
                    {evt.desc}
                 </p>

                 {/* Détails / Features */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {evt.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                            {i === 2 ? <Clock size={16} className={evt.color} /> : <evt.icon size={16} className={evt.color} />}
                            <span className="text-sm text-gray-300">{detail}</span>
                        </div>
                    ))}
                 </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}