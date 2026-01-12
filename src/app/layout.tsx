// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import des polices
import "./globals.css";
import Shell from "@/components/layout/Shell"; // MENU & TOPBAR
import Footer from "@/components/layout/Footer";

import { CookieConsent } from "@/components/ui/CookieConsent";

import { FloatingActions } from "@/components/ui/FloatingActions";


// Configuration des polices
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Puerto Habana | Restaurant, Bar & Club Latino à Toulouse",
  description: "L'expérience cubaine à Toulouse. Tapas, cocktails, cours de salsa et soirées latino au bord du Canal du Midi.",
};

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // NOTE BIEN : On ajoute "font-sans" ici pour forcer la police par défaut
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-transparent text-white font-sans antialiased selection:bg-puerto-yellow selection:text-black">
        <Shell>
          {children}
        </Shell>
        <Footer/>
        {/* COOKIE CONSENT */}
        <CookieConsent />

        {/* Boutons Flottants */}
        <FloatingActions />
      </body>
    </html>
  );
}