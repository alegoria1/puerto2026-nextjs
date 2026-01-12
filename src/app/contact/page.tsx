// src/app/nom-de-votre-dossier/page.tsx
import React from "react";

export const metadata = {
  title: "Titre de la Page | Puerto Habana",
  description: "Description courte pour le SEO (Google)...",
};

export default function BlankPage() {
  return (
    <main className="bg-black/90 min-h-screen">
      
      {/* PADDING TOP (pt-32) : 
        Important pour que le contenu ne soit pas caché 
        par la barre de menu ou le logo en haut.
      */}
      <section className="pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        
        {/* Ton contenu commence ici */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
          Titre de la <span className="text-puerto-yellow">Page</span>
        </h1>

        <div className="text-gray-300 space-y-4">
          <p>
            Commencez à écrire votre contenu ici...
          </p>
        </div>

      </section>

    </main>
  );
}