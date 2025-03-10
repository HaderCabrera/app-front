// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans, Montserrat } from "next/font/google";

import "@/app/styles/globals.css";

import Auth from "../components/auth/Auth";
import ClientNavBar from "@/components/navbar/ClientNavBar";

import {LanguageProvider} from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Copower Dashboard",
  description: "App web, managed your analisis data company",
  icons: {
    icon: "@/../favicon.ico",
  },
};

export default function RootLayout({
  children,
  params: { locale }, // Obtén el idioma actual desde los parámetros de la ruta
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Asegúrate de que `locale` esté en los parámetros
}>) {
  return (
    <html lang="es"> {/* Usa el idioma actual en el atributo `lang` */}
      <body className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} font-[--font-inter]`}>
        <LanguageProvider>
          <Auth>
            <ClientNavBar/>
            {children}
          </Auth>
        </LanguageProvider>
      </body>
    </html>
  );
}