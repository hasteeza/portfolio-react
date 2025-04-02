/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '630px'},
        // => @media (max-width: 630px) { ... }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // Set Inter as the default font
        geist: ['Geist Sans', 'sans-serif'],
        plex: ['IBM Plex Mono', 'monospace'],
        bebas: ['Bebas Neue', 'sans-serif'],
        galaxy: ['SF Distant Galaxy', 'sans-serif'],
        russo: ['Russo One', "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        iso: ["Rubik Iso", "sans-serif"],
        reospec: ['Reospec', 'sans-serif'],
      },
    },
  },
  plugins: [],
}