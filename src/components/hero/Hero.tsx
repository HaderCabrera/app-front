'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { hero_img } from '@/../public/assets/index'

import MotionComponent from '@/components/motion/MotionText';
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
      controls.start({ x: -100 }); // Aplica la animación en pantallas grandes
    } else {
      controls.start({ x: 0 }); // Elimina la animación en pantallas pequeñas
    }
  }, [isLargeScreen, controls]);


  return (
    <div className={`flex flex-col mt-20 md:flex-row items-center justify-between 
      ${  scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className=" w-full md:w-1/2 bg-primary rounded-lg">
        <Image
          src={hero_img} // Ruta de la imagen (colócala en la carpeta "public")
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <motion.div className="md:w-1/2 bg-slate-300 p-5 rounded-lg"
        animate={controls}
        initial={false}
        transition={{ ease: "easeOut", duration: 3 }}  
      >
        <h1 className={`${Jero.title} text-4xl md:text-5xl mb-4`}>
          Potencia tu productividad con Aeteris
        </h1>
        <MotionComponent />
        <p className={`${Jero.hero_description} mb-6`}>
          Diseñado para equipos ágiles que buscan resultados extraordinarios.
        </p>
        <button className="px-6 py-3 rounded-lg ">
          Comenzar
        </button>
      </motion.div>
    </div >
  );
};

export default Hero;