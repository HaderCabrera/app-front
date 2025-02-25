"use client"; // Asegúrate de que este componente sea un Client Component

import MotionText from './MotionText.module.css'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionComponent = () => {
  const phrases = ["Eficiencia energetica", "Control de procesos", "Data warehouse"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Ciclo para cambiar entre frases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Cambia de frase cada 6 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [phrases.length]);

  const currentPhrase = phrases[currentPhraseIndex];

  return (
    <motion.div
      className={`${MotionText.text}`}
      key={currentPhraseIndex} // Forzamos la reconstrucción del componente cuando cambia la frase
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          ease: "linear",
        },
      }}
    >
      {/* Divide la frase en letras individuales */}
      {Array.from(currentPhrase).map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1, // Retraso progresivo para simular escritura
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default MotionComponent;