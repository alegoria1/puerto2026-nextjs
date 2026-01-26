import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { Portal } from "@/components/ui/Portal"; // N'oublie pas le Portal !

export const MenuModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={onClose}
          >
            {/* Boutons d'action en haut à droite */}
            <div className="absolute top-6 right-6 flex gap-4 z-[100001]">
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
                    className="text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all"
                >
                    {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
                </button>
                <button 
                    onClick={onClose}
                    className="text-white p-3 bg-white/10 hover:bg-puerto-yellow hover:text-black rounded-full transition-all"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Conteneur de l'image : il s'adapte au contenu */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                // Si zoomé, on permet au conteneur de dépasser l'écran
                width: isZoomed ? "auto" : "fit-content",
                height: isZoomed ? "auto" : "fit-content"
              }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative shadow-2xl border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ease-in-out
                ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in max-w-full max-h-[85vh]"}
              `}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              <div className={isZoomed ? "overflow-auto max-w-[95vw] max-h-[90vh]" : ""}>
                <motion.div
                    animate={{ scale: isZoomed ? 1.5 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="origin-center"
                >
                    <Image
                        src="/images/menu-bar.jpg"
                        alt="Carte du Puerto Habana"
                        width={1200}
                        height={1800} // Ajuste selon le vrai ratio de ton image
                        className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                        priority
                    />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Petit indicateur en bas pour l'utilisateur */}
            {!isZoomed && (
                <p className="absolute bottom-8 text-white/50 text-xs uppercase tracking-widest pointer-events-none">
                    Cliquez sur l'image pour zoomer
                </p>
            )}
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};