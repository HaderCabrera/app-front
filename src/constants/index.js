import { CurrencyDollarIcon, SquaresPlusIcon, CheckIcon } from '@heroicons/react/24/solid';

import {
  service,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "@/../public/assets"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "servicios",
    title: "Servicios",
  },
  {
    id: "tarifas",
    title: "Tarifas",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

export const whyUs = [
  {
    id: 1,
    title: "Centraliza tu data",
    des: "No quemes tiempo pensado en la arquitectura de tu data, dejanos eso a nosotros",
  },
  {
    id: 2,
    title: "Realtime analisis",
    des: "Todos nuestros informes y tendencias se realizan con la data mas actualizada en la nucbe",
  },
  {
    id: 3,
    title: "Agilidad operativa",
    des: "Toma deciciones en poco tiempo gracias a el analisis y generacion de reportes",
  },
];

export const projects = [
  {
    name: "Sitios Web Personalizados",
    description:
      "Creamos sitios web modernos y funcionales adaptados a tus necesidades.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "Html-Css",
        color: "pink-text-gradient",
      },
    ],
    image: service,
    source_code_link: "https://github.com/HaderCabrera/webPageJOVIMOTOS",
  },
  {
    name: "Mejora tu Visibilidad",
    description:
      "Optimizamos tu sitio para que aparezca en los primeros resultados de búsqueda.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bulma",
        color: "pink-text-gradient",
      },
    ],
    image: service1,
    source_code_link: "https://github.com/HaderCabrera/project2TERAS",
  },
  {
    name: "Estrategias de Crecimiento",
    description:
      "Diseñamos campañas efectivas para aumentar tu alcance y ventas.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Railway",
        color: "pink-text-gradient",
      },
    ],
    image: service2,
    source_code_link: "https://github.com/HaderCabrera/aerolineaSG",
  },
  {
    name: "Apps Intuitivas y Rápidas",
    description:
      "Desarrollamos aplicaciones móviles que conectan con tus usuarios.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "Html-Css",
        color: "pink-text-gradient",
      },
    ],
    image: service3,
    source_code_link: "https://github.com/HaderCabrera/webPageJOVIMOTOS",
  },
  {
    name: "Soluciones Innovadoras",
    description:
      "Te ayudamos a implementar tecnología que impulse tu negocio.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bulma",
        color: "pink-text-gradient",
      },
    ],
    image: service4,
    source_code_link: "https://github.com/HaderCabrera/project2TERAS",
  },
  {
    name: "Experiencias Memorables",
    description:
      "Diseñamos interfaces atractivas y fáciles de usar para tus usuarios.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Railway",
        color: "pink-text-gradient",
      },
    ],
    image: service5,
    source_code_link: "https://github.com/HaderCabrera/aerolineaSG",
  },
  {
    name: "Ahorra Tiempo y Recursos",
    description:
      "Automatizamos tareas repetitivas para que te enfoques en lo importante.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "green-text-gradient",
      },
      {
        name: "Html-Css",
        color: "pink-text-gradient",
      },
    ],
    image: service6,
    source_code_link: "https://github.com/HaderCabrera/webPageJOVIMOTOS",
  },
]

export const plansA = [
  {
    id: 1,
    name: "Basico",
    price: "$9.99",
    features: [
      "Acceso a funciones básicas",
      "Soporte por correo electrónico",
      "5 proyectos por cuenta",
      "Almacenamiento de 10 GB",
    ],
    isFeatured: false, // Indica si este plan está destacado
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-blue-500 hover:bg-blue-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Individuos o pequeños equipos", // A quién está dirigido
  },
  {
    id: 2,
    name: "Profesional",
    price: "$29.99",
    features: [
      "Acceso a todas las funciones",
      "Soporte prioritario",
      "20 proyectos por cuenta",
      "Almacenamiento de 50 GB",
      "Integración con herramientas externas",
    ],
    isFeatured: true, // Este plan está destacado
    buttonLabel: "Recomendado",
    buttonColor: "bg-green-500 hover:bg-green-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Profesionales y empresas medianas",
  },
  {
    id: 3,
    name: "Empresarial",
    price: "$49.99",
    features: [
      "Acceso ilimitado a todas las funciones",
      "Soporte 24/7",
      "Proyectos ilimitados",
      "Almacenamiento de 200 GB",
      "Capacitación personalizada",
      "Asignación de cuentas de equipo",
    ],
    isFeatured: false, // Indica si este plan está destacado
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-purple-500 hover:bg-purple-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Grandes empresas y corporaciones",
    icono: "🫐",
  },
];


export const plansB = [
  {
    id: 1,
    name: "Basico",
    price: "$27.99",
    features: [
      "Acceso a funciones básicas",
      "Soporte por correo electrónico",
      "5 proyectos por cuenta",
      "Almacenamiento de 10 GB",
    ],
    isFeatured: false, // Indica si este plan está destacado
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-blue-500 hover:bg-blue-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Individuos o pequeños equipos", // A quién está dirigido
  },
  {
    id: 2,
    name: "Profesional",
    price: "$31.47",
    features: [
      "Acceso a todas las funciones",
      "Soporte prioritario",
      "20 proyectos por cuenta",
      "Almacenamiento de 50 GB",
      "Integración con herramientas externas",
    ],
    isFeatured: true, // Este plan está destacado
    buttonLabel: "Recomendado",
    buttonColor: "bg-green-500 hover:bg-green-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Profesionales y empresas medianas",
  },
  {
    id: 3,
    name: "Empresarial",
    price: "$92.64",
    features: [
      "Acceso ilimitado a todas las funciones",
      "Soporte 24/7",
      "Proyectos ilimitados",
      "Almacenamiento de 200 GB",
      "Capacitación personalizada",
      "Asignación de cuentas de equipo",
    ],
    isFeatured: false, // Indica si este plan está destacado
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-purple-500 hover:bg-purple-600", // Color del botón (Tailwind CSS)
    recommendedFor: "Grandes empresas y corporaciones",
    icono: "🫐",
  },
];

export const services = [
  {
    id: 1,
    title: "Monitoreo en Tiempo Real",
    description: "Analiza tu data en tiempo real desde cualquier dispotisivo con acceso a internet",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Eficiencia energética (kW generados vs. consumo).",
      "Calidad del aceite (resultados de las pruebas de Motul).",
      "Temperaturas promedio de operación."
    ],
  },
  {
    id: 2,
    title: "Histórico de Datos y Tendencias",
    description: "Analiza tu data en tiempo real desde cualquier dispotisivo con acceso a internet",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Evolución de la temperatura de los motores.",
      "Cambios en la calidad del aceite (basado en las pruebas de Motul).",
      "Fluctuaciones en la generación de energía."
    ],
  },
  {
    id: 3,
    title: "Dashboard de Estado de Máquinas",
    description: "Analiza tu data en tiempo real desde cualquier dispotisivo con acceso a internet",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Indicadores de estado (verde, amarillo, rojo) basados en umbrales predefinidos.",
      "Resumen de la generación de energía total en kW.",
      "Alertas visuales para máquinas que requieren atención."
    ],
  },
  {
    id: 4,
    title: "Comparación de Rendimiento entre Máquinas",
    description: "Analiza tu data en tiempo real desde cualquier dispotisivo con acceso a internet",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Eficiencia energética (kW generados vs. consumo).",
      "Calidad del aceite (resultados de las pruebas de Motul).",
      "Temperaturas promedio de operación."
    ],
  }
];

export const faqs = [
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Ofrecemos una amplia gama de servicios, incluyendo consultoría, desarrollo de software, marketing digital y soporte técnico.",
  },
  {
    question: "¿Cuánto tiempo toma completar un proyecto?",
    answer:
      "El tiempo de finalización depende del alcance del proyecto. Generalmente, nuestros proyectos tardan entre 2 y 6 semanas.",
  },
  {
    question: "¿Ofrecen soporte después de completar un proyecto?",
    answer:
      "Sí, ofrecemos soporte técnico continuo para asegurarnos de que tu proyecto funcione sin problemas.",
  },
  {
    question: "¿Cómo puedo contactarlos?",
    answer:
      "Puedes contactarnos a través de nuestro formulario en línea, correo electrónico o redes sociales.",
  },
]