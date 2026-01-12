// À ajouter dans un composant (ex: src/components/home/Ambiances.tsx)
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BtnArrow } from "@/components/ui/Buttons"; // Tes boutons existants

export function BentoMenuBar() {
  const cards = [
    {
      id: 1,
      title: "Le Restaurant",
      subtitle: "Cuisine Maison & Tapas",
      desc: "Des saveurs authentiques de Cuba et d'Amérique Latine. Tapas à partager ou plats traditionnels.",
      img: "/images/restaurant-1000x500px.jpg", // Mets une vraie image ici
      link: "/restaurant",
      colSpan: "md:col-span-2" // Prend 2 colonnes
    },
    {
      id: 2,
      title: "Les Cours de danse",
      subtitle: "Salsa & Bachata",
      desc: "Des cours de danse pour progresser ou simplement apprendre",
      img: "/images/cours-1000x500px.jpg", // Mets une vraie image ici
      link: "/cours-danse",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      title: "Les soirées Latino",
      subtitle: "Fiesta Latino",
      desc: "Cours de salsa, bachata et soirées DJ jusqu'au bout de la nuit.",
      img: "/images/soirees-1000x500px.jpg", // Mets une vraie image ici
      link: "/soirees-latino",
      colSpan: "md:col-span-3" // Prend toute la largeur
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Plus qu'un lieu, <span className="text-puerto-yellow italic">une expérience.</span>
            </h2>
        </div>

        {/* La Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {cards.map((card) => (
            <Link 
                href={card.link} 
                key={card.id}
                className={`group relative overflow-hidden rounded-md border border-white/10 ${card.colSpan}`}
            >
              {/* Image de fond avec zoom au survol */}
              <div className="absolute inset-0 w-full h-full">
                 {/* Overlay sombre pour que le texte soit lisible */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 
                 {/* LE COMPOSANT IMAGE DE NEXT.JS */}
                 <Image
                    src={card.img} // Chemin de l'image
                    alt={card.title} // Texte alternatif pour le SEO
                    fill // Remplir tout le conteneur
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
              </div>

              {/* Contenu Texte */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <span className="text-puerto-yellow text-xs font-bold tracking-widest uppercase mb-2 block">
                    {card.subtitle}
                 </span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {card.title}
                 </h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                    {card.desc}
                 </p>
                 
                 {/* Icone Flèche qui apparait */}
                 <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export function BentoMenuRestaurant() {
  const cards = [
    {
      id: 1,
      title: "Le Bar",
      subtitle: "Mixologie & Cocktails",
      desc: "Des cocktails, des Virgin, du vin et les meilleurs Mojitos de Toulouse.",
      img: "/images/bar-1000x500px.jpg", // Mets une vraie image ici
      link: "/bar",
      colSpan: "md:col-span-2" // Prend 2 colonnes
    },
    {
      id: 2,
      title: "Les Cours de danse",
      subtitle: "Salsa & Bachata",
      desc: "Des cours de danse pour progresser ou simplement apprendre",
      img: "/images/cours-1000x500px.jpg", // Mets une vraie image ici
      link: "/cours-danse",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      title: "Les soirées Latino",
      subtitle: "Fiesta Latino",
      desc: "Cours de salsa, bachata et soirées DJ jusqu'au bout de la nuit.",
      img: "/images/soirees-1000x500px.jpg", // Mets une vraie image ici
      link: "/soirees-latino",
      colSpan: "md:col-span-3" // Prend toute la largeur
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Plus qu'un lieu, <span className="text-puerto-yellow italic">une expérience.</span>
            </h2>
        </div>

        {/* La Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {cards.map((card) => (
            <Link 
                href={card.link} 
                key={card.id}
                className={`group relative overflow-hidden rounded-md border border-white/10 ${card.colSpan}`}
            >
              {/* Image de fond avec zoom au survol */}
              <div className="absolute inset-0 w-full h-full">
                 {/* Overlay sombre pour que le texte soit lisible */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 
                 {/* LE COMPOSANT IMAGE DE NEXT.JS */}
                 <Image
                    src={card.img} // Chemin de l'image
                    alt={card.title} // Texte alternatif pour le SEO
                    fill // Remplir tout le conteneur
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
              </div>

              {/* Contenu Texte */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <span className="text-puerto-yellow text-xs font-bold tracking-widest uppercase mb-2 block">
                    {card.subtitle}
                 </span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {card.title}
                 </h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                    {card.desc}
                 </p>
                 
                 {/* Icone Flèche qui apparait */}
                 <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export function BentoMenuCours() {
  const cards = [
    {
      id: 1,
      title: "Le Restaurant",
      subtitle: "Cuisine Maison & Tapas",
      desc: "Des saveurs authentiques de Cuba et d'Amérique Latine. Tapas à partager ou plats traditionnels.",
      img: "/images/restaurant-1000x500px.jpg", // Mets une vraie image ici
      link: "/restaurant",
      colSpan: "md:col-span-2" // Prend 2 colonnes
    },
    {
      id: 2,
      title: "Le Bar",
      subtitle: "Mixologie & Cocktails",
      desc: "Des cocktails, des Virgin, du vin et les meilleurs Mojitos de Toulouse.",
      img: "/images/bar-1000x500px.jpg", // Mets une vraie image ici
      link: "/bar",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      title: "Les soirées Latino",
      subtitle: "Fiesta Latino",
      desc: "Cours de salsa, bachata et soirées DJ jusqu'au bout de la nuit.",
      img: "/images/soirees-1000x500px.jpg", // Mets une vraie image ici
      link: "/soirees-latino",
      colSpan: "md:col-span-3" // Prend toute la largeur
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Plus qu'un lieu, <span className="text-puerto-yellow italic">une expérience.</span>
            </h2>
        </div>

        {/* La Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {cards.map((card) => (
            <Link 
                href={card.link} 
                key={card.id}
                className={`group relative overflow-hidden rounded-md border border-white/10 ${card.colSpan}`}
            >
              {/* Image de fond avec zoom au survol */}
              <div className="absolute inset-0 w-full h-full">
                 {/* Overlay sombre pour que le texte soit lisible */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 
                 {/* LE COMPOSANT IMAGE DE NEXT.JS */}
                 <Image
                    src={card.img} // Chemin de l'image
                    alt={card.title} // Texte alternatif pour le SEO
                    fill // Remplir tout le conteneur
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
              </div>

              {/* Contenu Texte */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <span className="text-puerto-yellow text-xs font-bold tracking-widest uppercase mb-2 block">
                    {card.subtitle}
                 </span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {card.title}
                 </h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                    {card.desc}
                 </p>
                 
                 {/* Icone Flèche qui apparait */}
                 <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export function BentoMenuSoirees() {
  const cards = [
    {
      id: 1,
      title: "Le Restaurant",
      subtitle: "Cuisine Maison & Tapas",
      desc: "Des saveurs authentiques de Cuba et d'Amérique Latine. Tapas à partager ou plats traditionnels.",
      img: "/images/restaurant-1000x500px.jpg", // Mets une vraie image ici
      link: "/restaurant",
      colSpan: "md:col-span-2" // Prend 2 colonnes
    },
    {
      id: 2,
      title: "Les Cours de danse",
      subtitle: "Salsa & Bachata",
      desc: "Des cours de danse pour progresser ou simplement apprendre",
      img: "/images/cours-1000x500px.jpg", // Mets une vraie image ici
      link: "/cours-danse",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      title: "Le Bar",
      subtitle: "Mixologie & Cocktails",
      desc: "Des cocktails, des Virgin, du vin et les meilleurs Mojitos de Toulouse.",
      img: "/images/bar-1000x500px.jpg", // Mets une vraie image ici
      link: "/bar",
      colSpan: "md:col-span-3" // Prend toute la largeur
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Plus qu'un lieu, <span className="text-puerto-yellow italic">une expérience.</span>
            </h2>
        </div>

        {/* La Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {cards.map((card) => (
            <Link 
                href={card.link} 
                key={card.id}
                className={`group relative overflow-hidden rounded-md border border-white/10 ${card.colSpan}`}
            >
              {/* Image de fond avec zoom au survol */}
              <div className="absolute inset-0 w-full h-full">
                 {/* Overlay sombre pour que le texte soit lisible */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                 
                 {/* LE COMPOSANT IMAGE DE NEXT.JS */}
                 <Image
                    src={card.img} // Chemin de l'image
                    alt={card.title} // Texte alternatif pour le SEO
                    fill // Remplir tout le conteneur
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
              </div>

              {/* Contenu Texte */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
                 <span className="text-puerto-yellow text-xs font-bold tracking-widest uppercase mb-2 block">
                    {card.subtitle}
                 </span>
                 <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {card.title}
                 </h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                    {card.desc}
                 </p>
                 
                 {/* Icone Flèche qui apparait */}
                 <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                 </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}