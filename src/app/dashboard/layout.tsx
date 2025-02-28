import Sidebar from "@/components/sidebar/Sidebar";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { ReactNode } from "react"; 

const inter = Inter({ subsets: ["latin"] });


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}