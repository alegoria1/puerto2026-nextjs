import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Mentions Légales | Puerto Habana Toulouse",
  description: "Mentions légales, politique de confidentialité et conditions d'utilisation du site puerto-habana.com / puertohabana.fr.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen text-gray-300">
      
      {/* HEADER SIMPLE */}
      <section className="pt-32 pb-12 px-4 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Mentions <span className="text-puerto-yellow">Légales</span>
        </h1>
        <p className="text-sm uppercase tracking-widest text-gray-500">
            En vigueur au 01/01/2026
        </p>
      </section>

      {/* CONTENU JURIDIQUE */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto space-y-12">

        {/* 1. ÉDITEUR DU SITE */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                1. Éditeur du Site
            </h2>
            <p className="leading-relaxed">
                Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous vous informons que le présent site (accessible aux adresses <em>puerto-habana.com</em> et <em>puertohabana.fr</em>) est la propriété exclusive de :
            </p>
            <ul className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-2 text-sm">
                <li><strong className="text-white">Dénomination sociale :</strong> SAS B.C.B.G</li>
                <li><strong className="text-white">Nom commercial :</strong> PUERTO HABANA</li>
                <li><strong className="text-white">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
                <li><strong className="text-white">Adresse du siège :</strong> 12 Port Saint-Étienne, 31000 Toulouse, France</li>
                <li><strong className="text-white">SIRET :</strong> 529 919 193 00019</li>
                <li><strong className="text-white">RCS :</strong> Toulouse</li>
                <li><strong className="text-white">Activité (NAF) :</strong> Débits de boissons (56.30Z)</li>
                <li className="pt-2 mt-2 border-t border-white/10">
                    <strong className="text-white">Contact :</strong> <a href="mailto:puerto@puerto-habana.com" className="hover:text-puerto-yellow transition-colors">puerto@puerto-habana.com</a> | 05 61 54 45 61
                </li>
            </ul>
        </div>

        {/* 2. CONCEPTION & RÉALISATION */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                2. Conception & Réalisation
            </h2>
            <p>
                Le site a été conçu et développé par l'agence :
            </p>
            <ul className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-2 text-sm">
                <li><strong className="text-white">Agence :</strong> Conseil CHR</li>
                <li><strong className="text-white">Dirigeant :</strong> Sébastien Gentet</li>
                <li><strong className="text-white">Site Web :</strong> <a href="https://conseil-chr.fr" target="_blank" rel="noopener noreferrer" className="text-puerto-yellow hover:underline">conseil-chr.fr</a></li>
                <li><strong className="text-white">Expertise :</strong> Conseil et Stratégie pour Cafés, Hôtels, Restaurants à Toulouse.</li>
            </ul>
        </div>

        {/* 3. HÉBERGEMENT */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                3. Hébergement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-sm">
                    <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Hébergeur Web</h3>
                    <p className="mb-1"><strong className="text-white">O2switch</strong></p>
                    <p>Chemin des Pardiaux</p>
                    <p>63000 Clermont-Ferrand, France</p>
                    <p className="mt-2">Tél : 04 44 44 60 40</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-sm">
                    <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Registrar (Domaines)</h3>
                    <p className="mb-1"><strong className="text-white">OVH SAS</strong></p>
                    <p>2 rue Kellermann</p>
                    <p>59100 Roubaix, France</p>
                </div>
            </div>
        </div>

        {/* 4. PROPRIÉTÉ INTELLECTUELLE */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                4. Propriété Intellectuelle & Crédits
            </h2>
            <p className="leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de la SAS B.C.B.G.
            </p>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-sm">
                <p className="text-white font-bold mb-2">Crédits Photographiques :</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><strong className="text-puerto-yellow">Jade Musy</strong> (Photographe officielle)</li>
                    <li>Banques d'images libres de droit (Adobe Stock, Freepik, Pexels, Unsplash).</li>
                </ul>
            </div>
        </div>

        {/* 5. DONNÉES PERSONNELLES (RGPD) & COOKIES */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                5. Données Personnelles & Cookies
            </h2>
            
            <h3 className="text-lg font-bold text-white mt-4">5.1 Cookies et Statistiques</h3>
            <p className="leading-relaxed text-sm">
                Ce site utilise <strong>Google Analytics</strong>, un service d'analyse de site internet fourni par Google Inc. 
                Cet outil utilise des cookies pour nous aider à analyser l'audience du site (pages visitées, temps passé, provenance géographique). 
                Ces données sont anonymes et nous servent uniquement à améliorer votre expérience utilisateur.
            </p>
            <p className="text-sm">
                Vous pouvez refuser l'utilisation de ces cookies en configurant les paramètres de votre navigateur.
            </p>

            <h3 className="text-lg font-bold text-white mt-4">5.2 Données collectées</h3>
            <p className="leading-relaxed text-sm">
                Le site ne propose pas de formulaire de contact direct stockant des données en base. 
                Les prises de contact s'effectuent via les liens mail (mailto) ou téléphone. 
                Aucune donnée personnelle n'est cédée à des tiers à des fins commerciales.
            </p>

            <h3 className="text-lg font-bold text-white mt-4">5.3 Vos droits</h3>
            <p className="leading-relaxed text-sm">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.
                Pour exercer ce droit, vous pouvez nous contacter par courrier à l'adresse du siège social ou par email à : <em>puerto@puerto-habana.com</em>.
            </p>
        </div>

        {/* 6. RESPONSABILITÉ */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                6. Limitation de Responsabilité
            </h2>
            <p className="leading-relaxed text-sm">
                La SAS B.C.B.G s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour.
                L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
            </p>
        </div>

        <div className="pt-12 text-center">
            <Link href="/" className="text-puerto-yellow hover:text-white underline underline-offset-4 transition-colors">
                Retour à l'accueil
            </Link>
        </div>

      </section>
    </main>
  );
}