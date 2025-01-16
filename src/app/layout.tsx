import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth from "../components/auth/Auth";
import NavBar from "@/components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copower Dashboard",
  description: "App web, managed your analisis data company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Auth>
          {children}
        </Auth>
      </body>
    </html>
  );
}


