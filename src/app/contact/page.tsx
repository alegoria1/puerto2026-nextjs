import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Car, Train, UtensilsCrossed, ExternalLink, User } from "lucide-react";
import { BtnShine, BtnArrow } from "@/components/ui/Buttons";

export const metadata = {
  title: "Contact & Accès | Puerto Habana Toulouse",
  description: "Contactez le Puerto Habana. Réservations restaurant, plan d'accès, horaires d'ouverture et contacts cours de danse.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SIMPLE */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image 
            src="/images/restaurant-bg.jpg"
            alt="Contact Puerto Habana"
            fill
            className="object-cover opacity-50"
            priority
        />
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                Nous <span className="text-puerto-yellow">Trouver</span>
            </h1>
            <p className="text-white/80 uppercase tracking-widest font-bold text-sm md:text-base">
                12 Port Saint-Étienne, 31000 Toulouse
            </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </section>

      {/* 2. CONTENU PRINCIPAL (GRID) */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- COLONNE GAUCHE : INFOS & CONTACTS --- */}
            <div className="space-y-6">
                
                {/* 1. BLOC INFORMATIONS (TÉLÉPHONE) */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-puerto-yellow/30 transition-colors group">
                    <div className="inline-flex p-4 rounded-full bg-puerto-yellow/10 text-puerto-yellow mb-4 group-hover:scale-110 transition-transform">
                        <Phone size={32} />
                    </div>
                    <h3 className="text-white font-bold uppercase tracking-widest mb-2">Informations Générales</h3>
                    <a href="tel:+33561544561" className="block text-3xl md:text-4xl font-serif font-bold text-white hover:text-puerto-yellow transition-colors">
                        05 61 54 45 61
                    </a>
                    <p className="text-gray-400 text-sm mt-2">Du mardi au samedi, dès 10h</p>
                </div>

                {/* 2. BLOC BOUTON RÉSERVATION RESTAURANT */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-puerto-yellow to-yellow-600 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-200 blur"></div>
                    <a href="https://bookings.zenchef.com/results?rid=371494&pid=1001" target="_blank" className="relative flex items-center justify-between bg-puerto-yellow rounded-2xl p-6 leading-none border border-puerto-yellow/50 hover:bg-black/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <UtensilsCrossed className="text-black" size={24} />
                            <div>
                                <h3 className="text-black uppercase font-bold text-lg">Réservations Restaurant</h3>
                                <p className="text-gray-800 text-xs mt-1">Réserver une table en ligne</p>
                            </div>
                        </div>
                        <div className="bg-puerto-bg/10 text-black rounded-full p-2">
                            <ExternalLink size={20} />
                        </div>
                    </a>
                </div>

                {/* 3. BLOC ADRESSE & MAPS */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                     <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-serif font-bold text-white flex items-center gap-3">
                            <MapPin className="text-puerto-yellow" /> Adresse & Accès
                        </h3>
                     </div>
                     
                     <div className="space-y-6">
                        <div>
                            <p className="text-lg text-white font-medium">Puerto Habana</p>
                            <p className="text-gray-400 mb-4">12 Port Saint-Étienne<br/>31000 Toulouse</p>
                            
                            {/* Bouton Ouvrir dans Maps */}
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Puerto+Habana+Toulouse" 
                                target="_blank" 
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors border border-white/20"
                            >
                                <ExternalLink size={14} /> Ouvrir dans Google Maps
                            </a>
                        </div>

                        {/* Infos Transports */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                            <div className="flex items-start gap-3">
                                <Train size={18} className="text-puerto-yellow mt-1" />
                                <div>
                                    <p className="text-white text-sm font-bold">Métro B</p>
                                    <p className="text-xs text-gray-400">François Verdier</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Car size={18} className="text-puerto-yellow mt-1" />
                                <div>
                                    <p className="text-white text-sm font-bold">Parking</p>
                                    <p className="text-xs text-gray-400">Carnot - Saint-Etienne - Place Occitane<br/>
                                    Allées Paul Sabatier, avenue Jean Rieux, rue Ambroise Frédeau,...</p>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

                {/* 4. BLOCS CONTACT COURS DE DANSE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Salsa */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-puerto-yellow/30 transition-colors">
                        <p className="text-xs text-puerto-yellow font-bold uppercase tracking-widest mb-2">Infos Salsa</p>
                        <div className="flex items-center gap-2 mb-2">
                             <User size={16} className="text-white" />
                             <span className="text-white font-bold">Chahera</span>
                        </div>
                        <a href="mailto:onisonacontact@gmail.com" className="text-sm text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4">
                            onisonacontact@gmail.com
                        </a>
                    </div>
                    {/* Bachata */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-red-400/30 transition-colors">
                        <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-2">Infos Bachata</p>
                        <div className="flex items-center gap-2 mb-2">
                             <User size={16} className="text-white" />
                             <span className="text-white font-bold">Julie</span>
                        </div>
                        <a href="tel:0766096747" className="text-sm text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4">
                            07 66 09 67 47
                        </a>
                    </div>
                </div>

                {/* 5. BLOC RÉSEAUX & MAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="mailto:puerto@puerto-habana.com" className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                        <Mail className="text-puerto-yellow" size={24} />
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                            <p className="text-white font-bold">Nous écrire</p>
                        </div>
                    </a>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <a href="https://instagram.com/puertotoulouse" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-puerto-yellow hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com/puertohabana" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-puerto-yellow hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Suivez-nous</p>
                    </div>
                </div>

            </div>

            {/* --- COLONNE DROITE : MAP & HORAIRES --- */}
            <div className="flex flex-col gap-8">
                
                {/* GOOGLE MAPS EMBED */}
                <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1768630302824!2d1.4503743123849544!3d43.59909776356066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc9bd1936301%3A0x6334547289520445!2sPuerto%20Habana!5e0!3m2!1sfr!2sfr!4v1709635000000!5m2!1sfr!2sfr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    ></iframe>
                </div>

                {/* HORAIRES DÉTAILLÉS */}
                <div className="bg-puerto-yellow/10 border border-puerto-yellow/20 p-8 rounded-2xl flex-grow">
                    <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="text-puerto-yellow" /> Horaires
                    </h3>
                    
                    <ul className="space-y-4 text-sm mb-8">
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-gray-300">Mardi</span>
                            <span className="text-white font-bold text-base">19h00 - 02h00</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-gray-300">Mercredi</span>
                            <span className="text-white font-bold text-base">19h30 - 02h00</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-gray-300">Jeudi</span>
                            <span className="text-white font-bold text-base">19h30 - 03h00</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-gray-300">Vendredi</span>
                            <span className="text-white font-bold text-base">19h30 - 04h00</span>
                        </li>
                         <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-gray-300">Samedi</span>
                            <span className="text-white font-bold text-base">20h00 - 04h00</span>
                        </li>
                         <li className="flex justify-between items-center pt-2 opacity-60">
                            <span className="text-gray-400">Dimanche & Lundi</span>
                            <span className="text-gray-400 italic">Fermé / Sauf veille de jours fériés</span>
                        </li>
                    </ul>

                    {/* Encadré Cuisine */}
                    <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 mb-2 text-puerto-yellow font-bold uppercase tracking-widest text-xs">
                             <UtensilsCrossed size={14} /> Cuisine
                        </div>
                        <ul className="space-y-1 text-xs text-gray-300">
                             <li className="flex justify-between">
                                 <span>Mardi & Mercredi</span>
                                 <span className="text-white">Jusqu'à 22h</span>
                             </li>
                             <li className="flex justify-between">
                                 <span>Jeudi à Samedi</span>
                                 <span className="text-white">Jusqu'à 22h30</span>
                             </li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
      </section>

    </main>
  );
}