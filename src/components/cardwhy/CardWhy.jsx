
import {stylesT} from "@/components/stylesT";

import { whyUs } from '@/constants/index'

import WhyCard from './WhyCard.module.css'


import { PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/20/solid';

function CardWhy() {

  const iconos = [PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon]

  return (
    <section className= {`${stylesT.sectionLayout} ${stylesT.textResponsive} ${stylesT.gapResponsive}`}> 
      {/* Sección del título y descripción */}
      <div className={`flex flex-col items-center gap-5 ${stylesT.textResponsive} ${stylesT.gapResponsive}`}>
        <h1 className={`${stylesT.titleSectionResponsive}`}>Por que nosotros?</h1>
        <p className=''>
        Optimiza recursos con nuestra única fuente de verdad: desde la reducción de costos energéticos hasta la prevención de fallas mediante análisis predictivo.
        </p>
      </div>

      {/* Sección de tarjetas */}
      <div className={`flex flex-col md:flex-row ${stylesT.textResponsive} ${stylesT.gapResponsive} w-full overflow-hidden`}>
        {whyUs.map((why) => {
          const IconComponent = iconos[why.id - 1];
          return (
            <div
              key={why.id}
              className={` sm:flex sm:flex-col sm:gap-3 p-2
                ${why.id !== 2 ? "border-none" : `
                  sm:pr-3 sm:pl-3
                  border-t-4 border-b-4 
                  md:border-t-0 md:border-b-0 md:border-l-4 md:border-r-4`}
                  ${'flex flex-row gap-3'}
                  `}
            >
              {<IconComponent className={`${WhyCard.ico} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20`} />}
              <div>
                <p className="text-justify">{why.des}</p>
                <h1>{why.title}</h1>
              </div>

            </div>
          );
        })}
      </div>
    </section>

  );
}

export default CardWhy
