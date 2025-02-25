

import { whyUs } from '@/constants/index'
import Image from 'next/image';

import WhyCard from './WhyCard.module.css'


import { PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/20/solid';

function CardWhy() {

  const iconos = [PlayCircleIcon, PlusCircleIcon, ArrowDownCircleIcon]

  return (
    <div className='flex flex-col md:m-20 sm:m-10 gap-10 items-start'>
      <div className='flex flex-col gap-5 md:max-w-[40vw] sm:max-w-[90vw] '>
        <h1 className='text-5xl'>Why Choose Us ?</h1>
        <p>Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.</p>
      </div>
      <div className={`${WhyCard.border} flex flex-col p-8 md:flex-row rounded-lg`}>
        {whyUs.map((why) => {
          const IconComponent = iconos[why.id - 1];
          return (
            <div key={why.id} className={`${why.id !== 2 ? "border-none" : `${WhyCard.border2}`} flex flex-col gap-4 px-10 `}>
              {
                <IconComponent className={`${WhyCard.ico} w-20 h-20`} />
              }
              <h1 className='font-bold text-2xl'>{why.title}</h1>
              <p className={`${WhyCard.test}`}>{why.des}</p>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default CardWhy
