"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Music, Utensils, Wine, CalendarHeart } from "lucide-react";
import Herosection from "@/components/home/Hero";
import { BtnShine, BtnSlide, BtnGlow, BtnArrow, BtnGlass } from "@/components/ui/Buttons";

import { AmbiancesGrid } from "@/components/home/AmbiancesGrid";

import { BentoMenuCours } from "@/components/BentoMenu";


// --- DONNÉES ---

// Les 4 Blocs CTA
const ctaBlocks = [
  {
    title: "Le Restaurant",
    subtitle: "Cuisine Maison & Tapas à Toulouse",
    icon: <Utensils />,
    image: "/images/resto-cta.png", // Remplacer par tes images
    link: "/restaurant",
    color: "from-orange-500/20" // Teinte subtile au survol
  },
  {
    title: "Le Bar Cocktails",
    subtitle: "Rhums, Mojitos, Cocktails & Apéritifs",
    icon: <Wine />,
    image: "/images/bar-cta.png",
    link: "/bar",
    color: "from-puerto-tropical/20"
  },
  {
    title: "Les Soirées Latino",
    subtitle: "De la Salsa à l'ambiance latino-généraliste",
    icon: <Music />,
    image: "/images/danse-cta.png",
    link: "/soirees",
    color: "from-purple-500/20"
  },
  {
    title: "Cours de Danse",
    subtitle: "Apprendre & Progresser, Salsa & Bachata",
    icon: <CalendarHeart />,
    image: "/images/cours-cta.png",
    link: "/cours-danse",
    color: "from-puerto-yellow/20"
  },
];

// Images de la galerie (Style Vercel : propre et net)
const galleryImages = [
  "/images/galleryHome/soiree-puerto-29-1024x683.jpg",
  "/images/galleryHome/soiree-puerto-42-1024x683.jpg",
  "/images/galleryHome/food-060-768x512.jpg",
  "/images/galleryHome/soiree-puerto-70-1024x683.jpg",
  "/images/galleryHome/food-073-1024x683.jpg",
  "/images/galleryHome/halloween.jpg",
];

// --- PAGE COMPOSANT ---

export default function HomePage() {
  return (
    // Ajout du bg-tropical-gradient pour l'ambiance aérée verte/rouge subtile
    <div className="min-h-screen text-white font-sans">
      
      < Herosection />  

      {/* =================SECTION 4 CTA BLOCKS (Glassmorphism Aéré)================= */}
      <section className="py-20 relative z-30 -mt-20">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctaBlocks.map((block, i) => (
              <Link href={block.link} key={i} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  // Glassmorphism Card : Bordure fine, fond translucide, flou
                  className="relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-puerto-yellow/50 transition-all duration-500"
                >
                  {/* Image de fond du bloc */}
                  <Image 
                    src={block.image} alt={block.title} fill 
                    className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700" 
                  />
                  {/* Gradient de couleur au survol */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${block.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Contenu texte */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-puerto-yellow mb-4 bg-white/10 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md group-hover:bg-puerto-yellow group-hover:text-puerto-bg transition-colors">
                      {block.icon}
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-1">{block.title}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-white transition-colors">{block.subtitle}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      

      {/* =================SECTION TEXTE SEO REFERENCÉ================= */}
      <section className="py-24 container mx-auto px-4 md:px-12 text-center max-w-4xl relative">
        {/* Petite touche tropicale en fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-puerto-tropical/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-8">
          <Music className="w-12 h-12 text-puerto-yellow mx-auto opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif">
            Plus qu'un lieu, <span className="text-puerto-yellow">une expérience.</span>
          </h2>
          {/* Texte optimisé pour le SEO local à Toulouse */}
          <p className="text-gray-300 leading-relaxed text-lg">
            Situé en plein cœur de <strong>Toulouse</strong>, au Port Saint-Étienne, le Puerto Habana est la référence des <strong>soirées latino</strong> depuis plus de 15 ans. Notre établissement réunit sur deux étages un <strong>restaurant de tapas</strong> aux saveurs du monde, un bar à cocktails spécialisé dans le rhum, et une piste de danse où se mêlent salsa, bachata et reggaeton. Que vous veniez pour un <strong>cours de danse</strong> débutant ou pour enflammer le dancefloor tout le week-end, l'esprit de Cuba vous attend.
          </p>
          <div className="pt-4">
              <Link href="https://bookings.zenchef.com/results?rid=371494&pid=1001" target="_blank" className="inline-flex items-center gap-2 text-puerto-yellow hover:text-white transition-colors uppercase tracking-widest font-bold text-sm border-b border-puerto-yellow pb-2">
                  Réserver votre table <ArrowRight size={16} />
              </Link>
          </div>
        </div>
      </section>

      <AmbiancesGrid/>

      {/* =================SECTION GALERIE (Style Vercel : Clean Grid)================= */}
      <section className="py-20 container mx-auto px-4 md:px-12">
         <div className="flex justify-between items-end mb-12">
            <h4 className="text-3xl font-serif">Un Instant au Puerto</h4>
            <BtnArrow className="text-puerto-yellow text-xs pt-4" href="https://instagram.com/puertotoulouse" target="_blank">Nous Suivre sur Instagram</BtnArrow>
         </div>
         
         {/* Grille propre avec effets de survol subtils */}
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.05 }}
                  // L'effet "Vercel" : léger lift et luminosité au survol
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
               >
                  <Image 
                      src={src} 
                      alt="Galerie Puerto Habana" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                   />
                   {/* Overlay subtil qui s'éclaircit au survol */}
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300"></div>
               </motion.div>
            ))}
         </div>
      </section>

      <BentoMenuCours/>

    </div>
  );
}