import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scanne tout le dossier src
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Sécurité supplémentaire
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Sécurité supplémentaire
  ],
  theme: {
    extend: {
      colors: {
        puerto: {
          bg: "#0a1529",
          text: "#F7FAFC",
          yellow: "#EAC157",
          'yellow-light': "#F6D883",
          cyan: "#1d9fdb",
          rum: "#5D2E2E",
          tropical: "#0F4C3A",
          'tropical-light': "#1F6E56"
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'tropical-gradient': 'radial-gradient(circle at top right, rgba(15, 76, 58, 0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(93, 46, 46, 0.1), transparent 40%)',
        //bg-gradient-gold
        'gradient-gold': 'linear-gradient(135deg, #EAC157 0%, #F6D883 50%, #EAC157 100%)',
        //bg-gradient-tropical
        'gradient-tropical': 'linear-gradient(to right, #0F4C3A, #1F6E56)',
        //bg-gradient-night
        'gradient-night': 'linear-gradient(to right, #01060F, #1e3a8a)',
        //bg-gradient-cyan
        'gradient-cyan': 'linear-gradient(to right, #1c6586, #1d9fdb)',
        //bg-gradient-fire
        'gradient-fire': 'linear-gradient(to right, #991b1b, #dc2626)',
      }
    },
  },
  plugins: [],
};
export default config;