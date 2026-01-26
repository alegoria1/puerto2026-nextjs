// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020812] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      
      {/* Effet de lumière "Crystal" sur la bordure du haut */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Image de fond tropicale très sombre et floue pour la texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         {/* Tu peux mettre une image de feuilles ici si tu veux, sinon le fond noir suffit */}
      </div>

      <div className="container mx-auto px-6 md:pl-32 md:pr-12 relative z-10">
        
        {/* --- GRILLE PRINCIPALE (4 Colonnes) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. MARQUE & IDENTITÉ */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white">
              Puerto <span className="text-puerto-yellow">Habana</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              L'ambiance authentique de Cuba au cœur de Toulouse. 
              Restaurant, menus et tapas à partager, bar à cocktails et club latino depuis 1997.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href="https://instagram.com/puertotoulouse" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://facebook.com/puertohabana" icon={<Facebook size={20} />} label="Facebook" />
            </div>
          </div>

          {/* 2. CONTACT RAPIDE */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg tracking-wide border-l-2 border-puerto-yellow pl-3">Nous trouver</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=12+Port+Saint-Étienne,+31000+Toulouse" 
                  target="_blank" 
                  className="flex items-start gap-3 text-gray-400 hover:text-puerto-yellow transition-colors group"
                >
                  <MapPin className="mt-1 min-w-[18px] text-puerto-yellow group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm">12 Port Saint-Étienne<br/>31000 Toulouse, France</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 min-w-[18px] text-puerto-yellow group-hover:scale-110 transition-transform" size={18}/>
                  <span className="text-sm italic text-gray-500">Parking : Carnot - Saint-Etienne - Place Occitane<br/>
                  Allées Paul Sabatier, avenue Jean Rieux, rue Ambroise Frédeau,...
                  </span>
                </div>
              </li>
              <li>
                <a href="tel:+33561455461" className="flex items-center gap-3 text-gray-400 hover:text-puerto-yellow transition-colors group">
                  <Phone className="min-w-[18px] text-puerto-yellow group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm">05 61 45 54 61</span>
                </a>
              </li>
              <li>
                <a href="mailto:puerto@puerto-habana.com" className="flex items-center gap-3 text-gray-400 hover:text-puerto-yellow transition-colors group">
                  <Mail className="min-w-[18px] text-puerto-yellow group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm">puerto@puerto-habana.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 3. HORAIRES D'OUVERTURE (Complet) */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg tracking-wide border-l-2 border-puerto-yellow pl-3">Horaires</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Mardi </span>
                <span className="text-white font-medium">19h00 - 02h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Mercredi</span>
                <span className="text-white font-medium">19h30 - 02h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Jeudi</span>
                <span className="text-white font-medium">19h30 - 03h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Vendredi</span>
                <span className="text-white font-medium">19h30 - 04h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Samedi</span>
                <span className="text-white font-medium">20h00 - 04h00</span>
              </li>
              <li className="border-b border-white/5 pb-2">
                <span>Dimanche & Lundi : Fermé</span>
                <span className="text-white text-sm text-gray-500 italic"><br/>Sauf veille de fêtes</span>
              </li>

            </ul>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-puerto-yellow">
               <Clock size={14} />
               <span>Mardi & Mercredi, Cuisine ouverte jusqu'à 22h<br/>Jeudi à Samedi, Cuisine ouverte jusqu'à 22h30</span>
            </div>
          </div>

          {/* 4. LIENS & PRIVATISATION */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg tracking-wide border-l-2 border-puerto-yellow pl-3">Accès Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li><FooterLink href="/restaurant">La Carte Restaurant</FooterLink></li>
              <li><FooterLink href="/bar">Le bar</FooterLink></li>
              <li><FooterLink href="/soirees-latino">Les Soirées Latino</FooterLink></li>
              <li><FooterLink href="/cours-danse">Cours de Danse</FooterLink></li>
              {/* <li><FooterLink href="/recrutement">Recrutement</FooterLink></li> */}
            </ul>
            
            <Link href="/contact" className="inline-block w-full mt-4">
               {/* <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-puerto-yellow hover:text-black hover:border-puerto-yellow transition-all text-white text-xs font-bold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 group">
                  Privatiser le lieu
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
               </button> */}
            </Link>
          </div>

        </div>

        {/* --- BARRE DE COPYRIGHT --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {currentYear} Puerto Habana Toulouse. Tous droits réservés.</p>
          <div className="flex gap-6">
             <Link href="/mentions-legales" className="hover:text-gray-400 transition-colors">Mentions Légales</Link>
             <Link href="/cookies" className="hover:text-gray-400 transition-colors">Politique de Confidentialité</Link>
             <a href="https://conseil-chr.fr" target="_blank" className="hover:text-puerto-yellow transition-colors opacity-50 hover:opacity-100">
                Design & Dev: Agence Conseil CHR Toulouse
             </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Petit composant pour les liens sociaux
const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    aria-label={label}
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-puerto-yellow hover:border-puerto-yellow hover:text-black transition-all duration-300"
  >
    {icon}
  </a>
);

// Petit composant pour les liens texte
const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-gray-400 hover:text-puerto-yellow transition-colors hover:translate-x-1 inline-block duration-200">
    {children}
  </Link>
);