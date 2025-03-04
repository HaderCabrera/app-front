import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1200px', // Nuevo breakpoint para pantallas ≥ 1200px
      },
      spacing: {
        'section-padding-lg': '8rem',
        'section-padding-md': '4rem',
        'section-padding-sm': '2rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        foreground: "#19152c",
        primary: "#532874",
        secondary: "#6bc5d1",
        success: "#6dbd8f",
        matchcolor: "#19152c",
      },
      width: {
        '80vw': '80vw', // 80% del ancho de la pantalla
        '20vw' : '20vw',
      },
      height: {
        '80vh': '90vh', // 80% de la altura de la pantalla
      },
      animation: {
        'slide-in': 'slideIn 1.5s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(20%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
