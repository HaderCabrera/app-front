'use client';

import { motion } from "framer-motion";

import MotionText from "../MotionText.module.css"

const phrases = ["Innovación", "Tecnología", "Análisis", "Optimización", "Transformación", "Optimización", "Transformación"];

export default function ContinuousTimelineAnimation() {
  return (
    <div className="relative overflow-hidden w-[80vw] mx-auto h-20 flex items-center">
      {/* Máscara de difuminado */}
      <div className="absolute inset-0 pointer-events-none flex items-center z-10">
        <div className={`${MotionText.sombra_r} absolute left-0 w-40 h-8`}></div>
        <div className={`${MotionText.sombra_l} absolute right-0 w-40 h-8`}></div>
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
          <span key={index} className={`${MotionText.sombra} text-2xl font-bold px-4 rounded-full mx-5 opacity-3 shadow-lg`}>
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
          <span key={index} className={`${MotionText.sombra} text-2xl font-bold px-4 rounded-full mx-5 opacity-3 shadow-lg`}>
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}