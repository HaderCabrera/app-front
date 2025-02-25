
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";

import '@/app/styles/globals.css'

import Auth from "../components/auth/Auth";
import NavBar from "@/components/navbar/NavBar";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"], // Pesos para regular, semibold y bold
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
    icon : '@/../favicon.ico'
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
          <NavBar />
          {children}
        </Auth>
      </body>
    </html>
  );
}


