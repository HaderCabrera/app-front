'use client'

import { StaticImageData } from "next/image";
import { projects } from '@/constants/index'

import { motion } from "framer-motion"; // Importamos motion desde Framer Motion
import styles from "./styles.module.css";
import { github } from "@/../public/assets/index";

import {stylesT} from "@/components/stylesT";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <div className='flex justify-center shadow-lg rounded-lg' >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='p-5 rounded-2xl w-full cursor-pointer'
      >
        <div className='relative w-auto h-auto'>
          <img
            src={image.src}
            alt='project_image'
            className='w-30 h-48 lg:h-40 object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github.src}
                alt='source code'
                className='object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h1>{name}</h1>
          <p className='mt-2'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <section className={`${stylesT.sectionLayout}`} id="servicios">
      {/* Sección de Título y Descripción */}
      <div className='flex flex-col items-center gap-5 p-8'>
        <h1 className='text-5xl'>Why We Shine ?</h1>
        <p>En un mundo digital en constante evolución, ofrecemos soluciones innovadoras diseñadas para potenciar tu negocio y llevarlo al siguiente nivel. Nuestros servicios combinan tecnología de vanguardia, creatividad y experiencia práctica para ayudarte a alcanzar tus objetivos, sin importar el tamaño o la industria de tu proyecto.</p>
      </div>

      {/* Sección de Tarjetas */}
      <div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;