// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";

import '@/app/styles/globals.css';

import Auth from "../components/auth/Auth";
import ClientNavBar from "@/components/navbar/ClientNavBar";

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

export const metadata: Metadata = {
  title: "Copower Dashboard",
  description: "App web, managed your analisis data company",
  icons: {
    icon: '@/../favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${openSans.variable} font-sans`}>
        <Auth>
          <ClientNavBar /> {/* Usa el nuevo componente aquí */}
          {children}
        </Auth>
      </body>
    </html>
  );
}