'use client';

import { motion } from "framer-motion";

import MotionText from "../MotionText.module.css"

const phrases = ["Innovación", "Tecnología", "Análisis", "Optimización", "Transformación", "Optimización", "Transformación"];

export default function ContinuousTimelineAnimation() {
  return (
    <div className= {`relative overflow-hidden w-[100vw]  sm:w-[90vw] md:w-[80vw] mx-auto h-10 sm:h-20 md:h-30  ${MotionText.text} flex items-center`}>

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
          <span key={index} className={`text-base md:text-lg lg:text-xl px-4 rounded-full mx-5 shadow-lg ${MotionText.bgLight}`}>
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
          <span key={index} className={`text-base md:text-lg lg:text-xl px-4 rounded-full mx-5 shadow-lg ${MotionText.bgLight}`}>
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  );
}