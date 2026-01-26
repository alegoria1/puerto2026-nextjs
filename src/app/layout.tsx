import type { Metadata } from "next";
import "./globals.css";
import Shell from "@/components/layout/Shell"; 
import Footer from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingActions } from "@/components/ui/FloatingActions";

// SUPPRIME ou COMMENTE ces blocs qui causent l'erreur Turbopack :
/* const inter = Inter({ ... });
const playfair = Playfair_Display({ ... });
*/

export const metadata: Metadata = {
  title: "Puerto Habana | Restaurant, Bar & Club Latino à Toulouse",
  description: "L'expérience cubaine à Toulouse. Tapas, cocktails, cours de salsa et soirées latino au bord du Canal du Midi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // On retire ${inter.variable} et ${playfair.variable} car elles ne sont plus définies
    <html lang="fr">
      <body className="bg-transparent text-white font-sans antialiased selection:bg-puerto-yellow selection:text-black">
        <Shell>
          {children}
        </Shell>
        <Footer/>
        <CookieConsent />
        <FloatingActions />
      </body>
    </html>
  );
}