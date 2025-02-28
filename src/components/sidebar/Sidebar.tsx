"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaBars, 
  FaUserCircle, 
  FaHome, 
  FaFolder, 
  FaChartBar, 
  FaCog 
} from "react-icons/fa";

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

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-[var(--background2)] border-r border-[var(--primary)] min-h-screen transition-all duration-300 flex flex-col shadow-xl`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -right-4 bg-[var(--primary)] text-[var(--background2)] p-2 rounded-full shadow-lg hover:bg-[var(--secondary)] transition"
      >
        <FaBars />
      </button>

      <div className="flex flex-col items-center py-4 border-b border-[var(--primary)]">
        <div className="bg-[var(--primary)] p-2 rounded-full shadow-lg mb-2">
          <img
            src="assets/iconopng.png"
            alt="Logo"
            className={`${collapsed ? "w-8" : "w-12"} transition-all duration-300`}
          />
        </div>
        {!collapsed && (
          <h2 className="text-lg font-bold text-[var(--foreground)]">Petrolera</h2>
        )}
      </div>

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

      <div className="p-2 border-t border-[var(--primary)] flex items-center">
        <div className="bg-[var(--primary)] rounded-full p-2 flex-shrink-0 shadow-md">
          <FaUserCircle className="text-xl text-[var(--background2)]" />
        </div>
        {!collapsed && (
          <div className="ml-2">
            <p className="font-medium text-sm text-[var(--foreground)]">Admin</p>
            <p className="text-xs text-[var(--primary)]">Administrador</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;