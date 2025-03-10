"use client";

import Image from "next/image"

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaBars,
  FaUserCircle,
  FaHome,
  FaFolder,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import { useAuthenticator } from "@aws-amplify/ui-react";

type MenuItem = {
  id: number;
  label: string;
  route: string;
  icon: string;
};

const iconComponents: { [key: string]: React.ComponentType<any> } = {
  FaHome,
  FaFolder,
  FaChartBar,
  FaCog,
};

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  // Emitir evento cuando cambia el estado del sidebar
  useEffect(() => {
    // Crear y disparar evento personalizado
    const event = new CustomEvent('sidebarStateChange', {
      detail: { collapsed }
    });
    window.dispatchEvent(event);
  }, [collapsed]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api/menu", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Error al cargar los elementos del menú");
        }
        const data: MenuItem[] = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error al obtener los elementos del menú", error);
      }
    };

    fetchMenuItems();
  }, []);

  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName];
    if (IconComponent) {
      return <IconComponent className="text-xl" />;
    }
    return null;
  };

  const handleSignOut = () => {
    signOut();
    router.push("/"); // Redirige a la página principal después de cerrar sesión
  };

  return (
    <div
      className={`${collapsed ? "w-16" : "w-64"
        } bg-[var(--background2)] border-r border-[var(--primary)] h-screen fixed top-0 left-0 z-10 transition-all duration-300 flex flex-col shadow-xl`}
    >
      {/* Contenedor del header con logo, título y botón de hamburguesa */}
      <div className="flex items-center py-4 px-2 border-b border-[var(--primary)]">
        {/* Botón de hamburguesa - solo visible cuando está colapsado */}
        {collapsed && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full bg-[var(--primary)] text-[var(--background2)] hover:bg-[#1a1a2e] transition-all mx-auto"
          >
            <FaBars />
          </button>
        )}
        {/* Logo y título - solo visible cuando no está colapsado */}
        {!collapsed && (
          <>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-full bg-[var(--primary)] text-[var(--background2)] hover:bg-[#1a1a2e] transition-all mr-2"
            >
              <FaBars />
            </button>
            {/* Logo sin fondo */}
            <Image
              src="/assets/insignia_degrade.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-8 transition-all duration-300"
            />
            <h2 className="ml-3 text-lg font-bold text-[var(--foreground)]">Aeteris</h2>
          </>
        )}
      </div>
      {/* Navegación */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.route;
            return (
              <li key={item.id}>
                <Link href={item.route}>
                  <div
                    className={`flex items-center p-2 rounded-lg transition-all duration-300 border border-transparent hover:border-[var(--primary)] hover:shadow-lg shadow-[var(--secondary)]
                      ${isActive ? "bg-[var(--primary)] text-[var(--background2)]" : "text-[var(--foreground)] hover:bg-[var(--secondary)]/50"}
                    `}
                  >
                    {renderIcon(item.icon)}
                    {!collapsed && (
                      <span className="ml-2 font-medium">{item.label}</span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Pie de página con perfil de usuario */}
      <div className="p-2 border-t border-[var(--primary)]">
        {/* Información del usuario */}
        {!collapsed ? (
          <>
            <div className="flex items-center mb-3">
              <div className="bg-[var(--primary)] rounded-full p-2 flex-shrink-0 shadow-md">
                <FaUserCircle className="text-xl text-[var(--background2)]" />
              </div>
              <div className="ml-2">
                <p className="font-medium text-sm text-[var(--foreground)]">
                  {user?.username || "Admin"}
                </p>
                <p className="text-xs text-[var(--primary)]">Administrador</p>
              </div>
            </div>
            {/* Contenedor para el botón de cerrar sesión */}
            <div className="flex justify-center">
              <button
                onClick={handleSignOut}
                className="flex items-center p-2 rounded-full bg-[var(--primary)] text-[var(--background2)] hover:bg-[#1a1a2e] transition-all duration-300 shadow-md"
                title="Cerrar Sesión"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="ml-2 font-medium text-sm hidden md:inline">Cerrar Sesión</span>
              </button>
            </div>
          </>
        ) : (
          // Footer cuando está colapsado
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-[var(--primary)] rounded-full p-2 flex-shrink-0 shadow-md">
              <FaUserCircle className="text-xl text-[var(--background2)]" />
            </div>
            <button
              onClick={handleSignOut}
              className="p-2 rounded-full bg-[var(--primary)] text-[var(--background2)] hover:bg-[#1a1a2e] transition-all duration-300 shadow-md"
              title="Cerrar Sesión"
            >
              <FaSignOutAlt className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;