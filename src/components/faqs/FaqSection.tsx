'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/constants/index";

import { stylesT } from "../stylesT";


function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Función para manejar el clic en una pregunta
  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={`${stylesT.sectionLayout} ${stylesT.textResponsive} ${stylesT.gapResponsive}`}>
      <h1 className={`${stylesT.titleSectionResponsive}`}>Preguntas Frecuentes</h1>
      <div className="w-full space-y-1">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            {/* Pregunta */}
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="">{faq.question}</span>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0 }} // Rotación instantánea
                className=""
              >
                ▼
              </motion.span>
            </button>

            {/* Respuesta */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 border-t"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;