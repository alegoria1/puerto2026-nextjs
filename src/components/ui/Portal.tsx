"use client";
import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Si on n'est pas encore sur le client, on ne renvoie rien pour éviter les erreurs NextJS
  if (!mounted) return null;

  // C'est ici qu'on dit : "Prend ces enfants et met les dans le BODY"
  return createPortal(children, document.body);
};