"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string; // Contient maintenant les couleurs ET le padding
  onClick?: () => void;
  target?: string;
}

// =============================================================================
// 1. BOUTON "SHINE" (Luxe)
// =============================================================================
export const BtnShine = ({ children, href, onClick, target, className = "" }: ButtonProps) => {
  // Si aucune classe n'est donnée, on met le style par défaut (Gold + Padding standard)
  // Si tu mets une className, tu dois tout préciser (couleur + padding)
  const defaultStyle = "bg-gradient-gold text-black shadow-[0_0_20px_rgba(234,193,87,0.3)] hover:shadow-[0_0_30px_rgba(234,193,87,0.6)] px-8 py-4";
  
  const finalColorsAndPadding = className || defaultStyle;
  
  // Structure de base (SANS padding ici)
  // J'ai gardé 'relative' et 'overflow-hidden' ici car c'est nécessaire pour l'effet
  const structure = "relative overflow-hidden rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 group inline-block text-center";
  
  const shine = "before:absolute before:top-0 before:-left-[150%] before:w-[200%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:skew-x-[-30deg] before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-[100%]";

  const finalClass = `${structure} ${finalColorsAndPadding} ${shine}`;
  const content = <span className="relative z-10">{children}</span>;

  return href ? (
    <Link href={href} className={finalClass} target={target}>{content}</Link>
  ) : (
    <button onClick={onClick} className={finalClass}>{content}</button>
  );
};


// =============================================================================
// 2. BOUTON "SLIDE" (Élégant)
// =============================================================================
export const BtnSlide = ({ children, href, onClick, target, className = "" }: ButtonProps) => {
  const defaultStyle = "border border-white/30 text-white px-8 py-4";
  const finalColorsAndPadding = className || defaultStyle;
  
  // Structure sans padding
  const structure = "relative font-bold uppercase tracking-widest text-sm overflow-hidden group rounded-sm inline-block text-center transition-all duration-300 hover:border-puerto-yellow";

  const finalClass = `${structure} ${finalColorsAndPadding}`;

  const content = (
    <>
      <span className="absolute inset-0 w-full h-full bg-puerto-yellow translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
    </>
  );

  return href ? (
    <Link href={href} target={target} className={finalClass}>{content}</Link>
  ) : (
    <button onClick={onClick} className={finalClass}>{content}</button>
  );
};


// =============================================================================
// 3. BOUTON "GLOW" (Club)
// =============================================================================
export const BtnGlow = ({ children, href, onClick, target, className = "" }: ButtonProps) => {
  const defaultStyle = "border border-puerto-tropical text-white shadow-[0_0_10px_rgba(15,76,58,0.5)] hover:bg-puerto-tropical/80 hover:shadow-[0_0_30px_#0F4C3A] hover:border-white/50 px-8 py-4";
  const finalColorsAndPadding = className || defaultStyle;
  
  const structure = "relative font-bold uppercase tracking-widest text-sm rounded-sm bg-black/20 backdrop-blur-md transition-all duration-300 group inline-block text-center";

  const finalClass = `${structure} ${finalColorsAndPadding}`;

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <Sparkles size={16} className="text-white/70 group-hover:text-white transition-colors" />
      {children}
    </span>
  );

  return href ? <Link href={href} target={target} className={finalClass}>{content}</Link> : <button onClick={onClick} className={finalClass}>{content}</button>;
};

// (BtnArrow n'a pas besoin de changement car il n'a pas de padding fixe)
export const BtnArrow = ({ children, href, onClick, target, className = "" }: ButtonProps) => {
  const colors = className || "text-puerto-yellow hover:text-white";
  const structure = "group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300";
  // ... (reste inchangé)
  const finalClass = `${structure} ${colors}`;
  const content = (
      <>
        <span className="border-b border-transparent group-hover:border-current pb-1 transition-all">{children}</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
      </>
  );
  return href ? <Link href={href} target="{target}" className={finalClass}>{content}</Link> : <button onClick={onClick} className={finalClass}>{content}</button>;
};

// =============================================================================
// 5. BOUTON "GLASS" (Verre Givré - Pour Privatisation/Contact)
// =============================================================================
export const BtnGlass = ({ children, href, onClick, target, className = "" }: ButtonProps) => {
  
  // 1. LE STYLE DE BASE (Inamovible : Couleurs, Bordures, Effets)
  // On le sépare pour qu'il soit toujours appliqué
  const glassBase = "relative inline-block font-bold uppercase tracking-widest text-xs transition-all rounded-sm backdrop-blur-md text-white border border-white/20 hover:border-puerto-yellow hover:text-puerto-yellow bg-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]";

  // 2. GESTION INTELLIGENTE DU PADDING
  // Si tu fournis une className (ex: "p-2"), on l'utilise.
  // Sinon, on met le padding standard "px-6 py-3".
  const appliedClass = className ? `${glassBase} ${className}` : `${glassBase} px-6 py-3`;

  return href ? (
    <Link href={href} target={target} className={appliedClass}>{children}</Link>
  ) : (
    <button onClick={onClick} className={appliedClass}>{children}</button>
  );
};