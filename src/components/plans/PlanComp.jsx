"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./Plans.module.css";
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
    <div id="tarifas" className={`${stylesT.sectionLayout}`}>
      <nav>
        <ul className={styles.nav}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor:
                  item.data === selectedTab ? "#eee" : "#eee0",
              }}
              className={styles.tab}
              onClick={() => setSelectedTab(item.data)} // Actualiza el estado con el array correspondiente
            >
              {`${item.label}`}
              {item.data === selectedTab ? (
                <motion.div
                  className={styles.underline}
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
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
              <div className={`flex flex-col md:flex-row lg:gap-20 gap-6 p-6 sm:p-6 md:p-8 rounded-lg`}>
                {/* Renderiza los planes */}
                {selectedTab.map((plan) => (
                  <div key={plan.id}>
                    <h2>{plan.name}</h2>
                    <p>
                      <span className={`text-3xl`}>{plan.price}</span>/mes
                    </p>
                    <ul className="list-disc">
                      {plan.features.map((caract) => (
                        <li key={caract}>{caract}</li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full p-1"
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
    </div>
  );
}