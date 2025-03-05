'use client';

import { useState, useEffect, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";

import  styles  from "./styles.module.css";
import { stylesT } from "../stylesT";

import { services } from "@/constants/index";

function ServicesSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 5000); // Cambia cada 5 segundos
    }

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, services.length]);

  const handleManualChange = (index: SetStateAction<number>) => {
    setIsPaused(true);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className={`${stylesT.sectionLayout} ${stylesT.textResponsive} ${stylesT.gapResponsive}`} id="servicios">
      <div className={`flex flex-col items-center  ${stylesT.textResponsive} ${stylesT.gapResponsive}`}>
        <h1 className={`${stylesT.titleSectionResponsive}`}>Nuestros servicios</h1>
        <p className="text-justify">
          En un mundo digital en constante evolución, ofrecemos soluciones innovadoras diseñadas para potenciar tu negocio y llevarlo al siguiente nivel.
          <span className="hidden sm:inline">
            Nuestros servicios combinan tecnología de vanguardia, creatividad y experiencia práctica para ayudarte a alcanzar tus objetivos, sin importar el tamaño o la industria de tu proyecto.
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        {/* Contenido de la tarjeta */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full h-[200px] sm:h-[400px] rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {/* Fondo de la mitad izquierda */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500 to-blue-400"
              style={{
                clipPath: "polygon(0 0, 60% 0, 100% 100%, 0 100%)",
              }}
            ></div>

            {/* Contenedor del ícono/imagen (lado izquierdo) */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full z-10"
              style={{
                clipPath: "polygon(0 0, 60% 0, 100% 100%, 0 100%)",
              }}
            >
              <img
                src="/assets/hero_image.png"
                alt="Service Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenedor del texto (lado derecho) */}
            <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-2 text-left z-10">
              <h1 className="text-2xl font-bold">{services[currentIndex].title}</h1>
              <p className="mt-2 line-clamp-4">{services[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores */}
        <div className={`flex gap-2 mt-4`}>
            {services.map((_, index) => (
                <button
                    key={index}
                    className={`${styles.toggleScreen} hover:bg-matchcolor w-3 h-3 rounded-full ${
                        currentIndex === index
                        ? `${styles.active}` // Sombra blanca cuando está activo
                        : `${styles.notactive}`
                    }`}
                    onClick={() => handleManualChange(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSlide;