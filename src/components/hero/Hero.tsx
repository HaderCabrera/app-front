"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[60vh] bg-[url('/assets/banner02.jpg')]">
      {/* Contenedor de la imagen */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/assets/banner02.jpg" // Ruta desde la carpeta public
          alt="Background hero"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center" // Ajuste clave
          style={{
            transform: "translateZ(0)", // Optimización para Safari
          }}
        />
        
        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Unica fuente de verdad.
        </h1>
      </div>
    </section>
  );
};

export default Hero;