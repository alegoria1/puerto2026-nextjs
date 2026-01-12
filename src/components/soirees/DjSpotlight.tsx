"use client";
import React from "react";
import Image from "next/image";
import { Disc, Mic2, Heart } from "lucide-react";

export function DjSpotlight() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      
      {/* Fond décoratif Vinyle */}
      <div className="absolute right-[-10%] top-[-10%] opacity-10 animate-spin-slow pointer-events-none">
         <Disc size={600} className="text-gray-500" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col md:flex-row items-center gap-12">
            
            {/* PHOTO DJ */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-puerto-yellow/30 animate-pulse-slow"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                    <Image 
                        src="/images/charif.jpg" // IMAGE DJ CHARIF
                        alt="DJ Charif Puerto Habana"
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
                {/* Badge "20 Ans" */}
                <div className="absolute -bottom-4 -right-4 bg-puerto-yellow text-black font-bold w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 border-black shadow-lg rotate-12">
                    <span className="text-2xl font-serif">20</span>
                    <span className="text-xs uppercase tracking-wider">Ans</span>
                </div>
            </div>

            {/* TEXTE */}
            <div className="text-center md:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                    <Mic2 size={14} className="text-puerto-yellow" />
                    Résident Emblématique
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    DJ Charif
                </h2>
                
                <p className="text-xl text-gray-300 italic">
                    "20 ans de passion au service de la musique"
                </p>

                <p className="text-gray-400 leading-relaxed max-w-2xl">
                    Véritable pilier du Puerto Habana, DJ Charif accompagne nos soirées depuis deux décennies. 
                    Reconnu pour son éclectisme et son sens du rythme, il sait enflammer la piste et fédérer toutes les générations. 
                    Plus qu'un DJ, c'est l'ambassadeur de l'âme et de l'histoire du Puerto.
                </p>

                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="flex items-center gap-2 text-gray-300 text-sm">
                        <Disc size={16} className="text-puerto-yellow" /> Latino Généraliste
                    </span>
                    <span className="flex items-center gap-2 text-gray-300 text-sm">
                        <Heart size={16} className="text-puerto-yellow" /> Salsa & Bachata
                    </span>
                    <span className="flex items-center gap-2 text-gray-300 text-sm">
                        <Disc size={16} className="text-puerto-yellow" /> Reggaeton Old School
                    </span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}