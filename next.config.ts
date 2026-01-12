import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // <--- OBLIGATOIRE POUR AVOIR LE DOSSIER 'OUT'
  images: {
    unoptimized: true, // <--- OBLIGATOIRE POUR LES IMAGES SANS SERVEUR NODE
  },
  //basePath: '/',
  //trailingSlash: true, // Aide souvent pour les liens
};

export default nextConfig;
