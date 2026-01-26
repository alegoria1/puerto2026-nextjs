import React from "react";
import Link from "next/link";
import { ShieldCheck, Cookie, Lock, Eye } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Puerto Habana Toulouse",
  description: "Détails sur la collecte de données, l'utilisation des cookies (Google Analytics) et vos droits RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen text-gray-300">
      
      {/* HEADER */}
      <section className="pt-32 pb-12 px-4 text-center border-b border-white/10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Politique de <span className="text-puerto-yellow">Confidentialité</span>
        </h1>
        <p className="text-sm uppercase tracking-widest text-gray-500">
            Dernière mise à jour : 01/01/2026
        </p>
      </section>

      {/* CONTENU */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto space-y-12">

        {/* INTRODUCTION */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="leading-relaxed">
                Le <strong>Puerto Habana</strong> (SAS B.C.B.G) s'engage à protéger la vie privée de ses utilisateurs. 
                Cette politique détaille quelles données nous collectons, comment nous les utilisons et quels sont vos droits. 
                En naviguant sur notre site, vous acceptez les pratiques décrites ci-dessous.
            </p>
        </div>

        {/* 1. RESPONSABLE DU TRAITEMENT */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                <ShieldCheck className="text-puerto-yellow" /> 1. Responsable du Traitement
            </h2>
            <p className="leading-relaxed text-sm">
                Le responsable du traitement des données collectées sur ce site est :<br/>
                <strong>SAS B.C.B.G (Puerto Habana)</strong><br/>
                12 Port Saint-Étienne, 31000 Toulouse<br/>
                Email : <a href="mailto:puerto@puerto-habana.com" className="text-puerto-yellow hover:underline">puerto@puerto-habana.com</a>
            </p>
        </div>

        {/* 2. DONNÉES COLLECTÉES */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                <Lock className="text-puerto-yellow" /> 2. Quelles données collectons-nous ?
            </h2>
            <p className="leading-relaxed text-sm">
                Nous limitons la collecte de données au strict nécessaire pour assurer le bon fonctionnement du site et analyser notre audience.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                <li>
                    <strong>Données transmises volontairement :</strong> Lorsque vous nous envoyez un email ou nous appelez, nous pouvons être amenés à conserver votre nom, adresse email ou numéro de téléphone pour traiter votre demande (réservation, privatisation, info).
                </li>
                <li>
                    <strong>Données de navigation (Cookies) :</strong> Votre adresse IP (anonymisée), le type de navigateur, la durée de visite, les pages consultées. Ces données sont collectées automatiquement via Google Analytics.
                </li>
            </ul>
        </div>

        {/* 3. COOKIES & GOOGLE ANALYTICS */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                <Cookie className="text-puerto-yellow" /> 3. Cookies & Statistiques
            </h2>
            <p className="leading-relaxed text-sm">
                Ce site utilise <strong>Google Analytics</strong> pour mesurer l'audience et comprendre comment les visiteurs utilisent le site.
            </p>
            
            <div className="bg-white/5 p-5 rounded-lg border border-white/10 text-sm space-y-3">
                <h3 className="font-bold text-white">À quoi servent ces cookies ?</h3>
                <p>Ils nous permettent de savoir combien de personnes visitent le site, quelles pages sont les plus populaires (ex: Soirées, Menu) et d'améliorer l'expérience utilisateur.</p>
                
                <h3 className="font-bold text-white pt-2">Comment les refuser ?</h3>
                <p>
                    Vous pouvez configurer votre navigateur pour refuser les cookies ou installer le module complémentaire de navigateur pour la désactivation de Google Analytics : 
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-puerto-yellow hover:underline ml-1">Cliquez ici</a>.
                </p>
            </div>
        </div>

        {/* 4. PARTAGE DES DONNÉES */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
                <Eye className="text-puerto-yellow" /> 4. Partage des Données
            </h2>
            <p className="leading-relaxed text-sm">
                Vos données personnelles ne sont <strong>jamais vendues, louées ou échangées</strong> à des tiers.
                Elles sont accessibles uniquement :
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
                <li>Au personnel du Puerto Habana (pour gérer les réservations).</li>
                <li>À Google (uniquement les données statistiques anonymes via Analytics).</li>
                <li>Aux autorités compétentes (si la loi l'exige).</li>
            </ul>
        </div>

        {/* 5. VOS DROITS */}
        <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
                5. Vos Droits (RGPD)
            </h2>
            <p className="leading-relaxed text-sm">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
                <li className="bg-white/5 p-3 rounded border border-white/10"><strong>Droit d'accès :</strong> Savoir quelles données nous avons sur vous.</li>
                <li className="bg-white/5 p-3 rounded border border-white/10"><strong>Droit de rectification :</strong> Corriger des infos inexactes.</li>
                <li className="bg-white/5 p-3 rounded border border-white/10"><strong>Droit à l'effacement :</strong> Demander la suppression de vos données.</li>
                <li className="bg-white/5 p-3 rounded border border-white/10"><strong>Droit d'opposition :</strong> Refuser l'utilisation de cookies.</li>
            </ul>
            <p className="text-sm mt-4">
                Pour exercer ces droits, contactez-nous simplement à : <strong>puerto@puerto-habana.com</strong>.
            </p>
        </div>

        {/* FOOTER LIENS */}
        <div className="pt-12 text-center flex flex-col gap-4">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Voir les Mentions Légales
            </Link>
            <Link href="/" className="text-puerto-yellow hover:text-white underline underline-offset-4 transition-colors font-bold">
                Retour à l'accueil
            </Link>
        </div>

      </section>
    </main>
  );
}