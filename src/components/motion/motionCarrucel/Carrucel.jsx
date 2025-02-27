'use client';

import { motion } from "framer-motion";

const phrases = ["Innovación", "Tecnología", "Análisis", "Optimización", "Transformación", "Optimización", "Transformación"];

export default function ContinuousTimelineAnimation() {
  return (
    <div className="relative overflow-hidden w-[80vw] mx-auto h-20 flex items-center">
      {/* Máscara de difuminado */}
      <div className="absolute inset-0 pointer-events-none flex items-center z-10">
        <div className="absolute left-0 w-40 h-8 bg-gradient-to-r from-gray-200 via-transparent to-transparent"></div>
        <div className="absolute right-0 w-40 h-8 bg-gradient-to-l from-gray-200 via-transparent to-transparent"></div>
      </div>

      {/* Primer arreglo (sin delay) */}
      <motion.div
        className="absolute top-center left-0 flex whitespace-nowrap z-0"
        animate={{
          x: ["100%", "-100%"], // Desplaza desde la derecha hasta la izquierda
        }}
        transition={{
          duration: 10, // Duración de la animación
          repeat: Infinity, // Repite la animación infinitamente
          ease: "linear", // Movimiento lineal sin aceleración
        }}
      >
        {phrases.map((phrase, index) => (
          <span key={index} className="text-2xl font-bold text-primary px-4 bg-slate-100 rounded-full mx-5">
            {phrase}
          </span>
        ))}
      </motion.div>

      {/* Segundo arreglo (con delay) */}
      <motion.div
        className="absolute top-center left-0 flex whitespace-nowrap z-0"
        animate={{
          x: ["100%", "-100%"], // Desplaza desde la derecha hasta la izquierda
        }}
        transition={{
          duration: 10, // Duración de la animación
          repeat: Infinity, // Repite la animación infinitamente
          ease: "linear", // Movimiento lineal sin aceleración
          delay: 5, // Delay de 5 segundos (la mitad de la duración)
        }}
      >
        {phrases.map((phrase, index) => (
          <span key={index} className="text-2xl font-bold text-primary px-4 bg-slate-100 rounded-full mx-5 opacity-3">
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}