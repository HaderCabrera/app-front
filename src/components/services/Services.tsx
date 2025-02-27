'use client'


import { StaticImageData } from "next/image";
import { projects } from '@/constants/index'

import { motion } from "framer-motion"; // Importamos motion desde Framer Motion
import styles from "./styles.module.css";
import { github } from "@/../public/assets/index";


import { fadeIn, textVariant } from "@/utils/motion";



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
    <div className='flex justify-between' >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
        className='p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image.src}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
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
          <h3 className='font-bold text-[24px]'>{name}</h3>
          <p className='mt-2  text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
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
    <div className="flex flex-col md:m-20 sm:m-10 gap-10 items-start">
      {/* Sección de Título y Descripción */}
      <div className='flex flex-col gap-5 max-w-[40] md:max-w-[60vw] sm:max-w-[70vw] p-8'>
        <h1 className='text-5xl'>Why We Shine ?</h1>
        <p>En un mundo digital en constante evolución, ofrecemos soluciones innovadoras diseñadas para potenciar tu negocio y llevarlo al siguiente nivel. Nuestros servicios combinan tecnología de vanguardia, creatividad y experiencia práctica para ayudarte a alcanzar tus objetivos, sin importar el tamaño o la industria de tu proyecto.</p>
      </div>

      {/* Sección de Tarjetas */}
      <div className="w-full px-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;