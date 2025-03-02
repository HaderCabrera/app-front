
import {stylesT} from "@/components/stylesT";

import { whyUs } from '@/constants/index'


import WhyCard from './WhyCard.module.css'


import { PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/20/solid';

function CardWhy() {

  const iconos = [PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon]

  return (
    <section className= {`${stylesT.sectionLayout} ${stylesT.textResponsive} ${stylesT.gapResponsive} `}> 
      {/* Sección del título y descripción */}
      <div className={`flex flex-col items-center gap-5 ${stylesT.textResponsive} ${stylesT.gapResponsive}`}>
        <h1 className='text-5xl'>Porque nosotros ?</h1>
        <p className=''>
          Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.
        </p>
      </div>

      {/* Sección de tarjetas */}
      <div className={`flex flex-col md:flex-row ${stylesT.textResponsive} ${stylesT.gapResponsive} w-full overflow-hidden`}>
        {whyUs.map((why) => {
          const IconComponent = iconos[why.id - 1];
          return (
            <div
              key={why.id}
              className={` flex flex-col gap-3 p-2
                ${why.id !== 2 ? "border-none" : `
                  sm:pr-3 sm:pl-3
                  border-t-4 border-b-4 
                  md:border-t-0 md:border-b-0 md:border-l-4 md:border-r-4`}
                  `}
            >
              {<IconComponent className={`${WhyCard.ico} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20`} />}
              <h1>{why.title}</h1>
              <p>{why.des}</p>
            </div>
          );
        })}
      </div>
    </section>

  );
}

export default CardWhy
