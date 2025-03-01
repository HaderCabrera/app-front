'use client'


import  { useEffect, useState } from 'react';


import { motion, useAnimation } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import Jero from './Jero.module.css'

const Hero = () => {

  /*Animacion del navbar*/
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*Animacion responsive*/
  const isLargeScreen = useMediaQuery({ minWidth: 768 }); // Detecta pantallas medianas y grandes
  const controls = useAnimation();

  useEffect(() => {
    if (isLargeScreen) {
      controls.start({ x: 400 }); // Aplica la animación en pantallas grandes
    } else {
      controls.start({ x: 0 }); // Elimina la animación en pantallas pequeñas
    }
  }, [isLargeScreen, controls]);


  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[40vh] md:h-[75vh]">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/heroVideo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido en la esquina inferior izquierda */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-10">
        {/* Texto pequeño */}
        <p className="text-sm md:text-base">Unica fuente de verdad</p>

        {/* Botón */}
        <button className="mt-2 py-2 px-4 rounded-lg transition duration-300">
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Hero;