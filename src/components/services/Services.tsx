"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import { stylesT } from "../stylesT";
import { services } from "@/constants/index";

function ServicesSlide() {
  return (
    <section className={`${stylesT.sectionLayout} ${stylesT.textResponsive} ${stylesT.gapResponsive}`} id="servicios">
      <div className="flex flex-col items-center text-center">
        <h1 className={`${stylesT.titleSectionResponsive} pb-4`}>Nuestros servicios</h1>
        <p className="text-justify px-4">
          En un mundo digital en constante evolución, ofrecemos soluciones innovadoras diseñadas para potenciar tu negocio y llevarlo al siguiente nivel.
          <span className="hidden sm:inline">
            Nuestros servicios combinan tecnología de vanguardia, creatividad y experiencia práctica para ayudarte a alcanzar tus objetivos, sin importar el tamaño o la industria de tu proyecto.
          </span>
        </p>
      </div>

      {/* Contenedor Principal: Grid Izquierda (Tarjetas) + Derecha (Imagen) */}
      <div className="relative w-full mt-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        {/* Lado Izquierdo: Cuadrícula de 4 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="p-4 bg-white rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Lado Derecho: Imagen (Ocultar en Móviles) */}
        <div className="hidden md:block relative">
          {/* <img
            src="/assets/hero_image.png"
            alt="Service Illustration"
            className="w-full h-full object-cover rounded-lg"
          /> */}
          IMAGEN 
        </div>
      </div>
    </section>
  );
}

export default ServicesSlide;