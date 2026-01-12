// À ajouter dans un composant (ex: src/components/home/Marquee.tsx)
"use client";
import { motion } from "framer-motion";

export function Marquee() {
  const words = ["TAPAS MAISON", "•", "COCKTAILS SIGNATURE", "•", "SALSA & BACHATA", "•", "CLUBBING LATINO", "•", "RUM BAR", "•", "RESTAURANT", "•", "COURS DE DANSE", "•"];
  
  return (
    <div className="relative w-full overflow-hidden bg-puerto-bg py-4 border-y border-white/10 rotate-[-1deg] scale-105 z-20 shadow-lg">
      <div className="flex whitespace-nowrap">
        {/* On double la liste pour l'effet infini */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-8 px-4"
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {words.map((word, index) => (
              <span key={index} className="text-white opacity-50 font-bold font-serif text-xl tracking-widest uppercase">
                {word}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}