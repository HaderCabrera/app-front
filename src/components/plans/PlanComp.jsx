"use client";

import { motion, AnimatePresence } from "framer-motion";
import { stylesT } from "../stylesT";
import { useState } from "react";
import { plansA, plansB } from "@/constants/index";

export default function SharedLayoutAnimation() {
  // Definición de las pestañas
  const tabs = [
    { data: plansA, label: "Mensual" },
    { data: plansB, label: "Anual" },
  ];

  // Estado inicial: selecciona el primer conjunto de datos (plansA)
  const [selectedTab, setSelectedTab] = useState(tabs[0].data);

  return (
    <section id="tarifas" className={`${stylesT.sectionLayout} gap-4`}>
      {/* Barra de Navegación */}
      <nav className="h-[40px]">
        <div className="flex bg-gray-100 rounded-full p-1 overflow-hidden">
          {tabs.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => setSelectedTab(item.data)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none ${
                item.data === selectedTab
                  ? "bg-white text-foreground shadow-md"
                  : "bg-transparent text-gray-400 hover:bg-gray-200"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Contenido Principal */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? "content" : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Renderiza los planes */}
                {selectedTab.map((plan) => (
                  <div
                    key={plan.id}
                    className="p-6 bg-white rounded-lg shadow-md text-center"
                  >
                    <h2 className="text-xl font-bold">{plan.name}</h2>
                    <p className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm text-gray-500">/mes</span>
                    </p>

                    <ul className="mt-4 space-y-2 text-left">
                      {plan.features.map((caract) => (
                        <li key={caract} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{caract}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2  rounded-full font-medium transition-colors"
                    >
                      Get Started
                    </motion.button>
                  </div>
                ))}
              </div>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}