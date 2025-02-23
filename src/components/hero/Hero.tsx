import Image from 'next/image';
import React from 'react';

import {hero_img} from '@/../public/assets/index'


const Hero = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Contenedor flex para alinear imagen y texto */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Imagen a la izquierda */}
          <div className="bg-white w-full md:w-1/2">
            <Image
              src='/hero_img' // Ruta de la imagen (colócala en la carpeta "public")
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4">
              Bienvenido a mi Aplicación
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold  mb-4">
              Subtítulo llamativo
            </h2>
            <p className="mb-6">
              Esta es una descripción breve de lo que hace tu aplicación. Puedes agregar más detalles
              aquí para captar la atención del usuario.
            </p>
            <button className="px-6 py-3 rounded-lg transition duration-300">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;