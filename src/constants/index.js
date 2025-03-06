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
    title: "Centralización de Datos",
    des: "No gastes tiempo diseñando arquitecturas complejas. Nosotros gestionamos tu data como única fuente de verdad.",
  },
  {
    id: 2,
    title: "Análisis en Tiempo Real",
    des: "Todos nuestros dashboards y tendencias se generan con datos actualizados al instante desde la nube.",
  },
  {
    id: 3,
    title: "Agilidad Operativa",
    des: "Toma decisiones estratégicas en minutos gracias a nuestro análisis predictivo y generación automática de graficas.",
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
    name: "Básico",
    price: "$27.99",
    features: [
      "Monitoreo en tiempo real de 5 máquinas",
      "Soporte técnico por correo (24h respuesta)",
      "5 equipos industriales conectados",
      "Almacenamiento cloud de 10 GB para datos operativos",
      "Informes mensuales de eficiencia energética",
    ],
    isFeatured: false,
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    recommendedFor: "Talleres pequeños o startups industriales",
  },
  {
    id: 2,
    name: "Profesional",
    price: "$31.47",
    features: [
      "Monitoreo en tiempo real ilimitado",
      "Análisis predictivo de fallos mecánicos",
      "Almacenamiento cloud de 50 GB",
      "Soporte prioritario (4h respuesta)",
      "Dashboard personalizable con alertas",
      "Pruebas de calidad de aceite Motul incluidas",
    ],
    isFeatured: true,
    buttonLabel: "Recomendado",
    buttonColor: "bg-green-500 hover:bg-green-600",
    recommendedFor: "Empresas medianas con flotas de maquinaria",
  },
  {
    id: 3,
    name: "Empresarial",
    price: "$92.64",
    features: [
      "Monitoreo multi-sitio en tiempo real",
      "Análisis predictivo con IA avanzada",
      "Integración API con sistemas SCADA/PLC",
      "Almacenamiento cloud de 200 GB",
      "Soporte 24/7 con ingenieros especializados",
      "Capacitación técnica personalizada",
      "Certificación de seguridad industrial (ISO 27001)",
      "Acceso a históricos de 24 meses",
    ],
    isFeatured: false,
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    recommendedFor: "Corporaciones con operaciones industriales complejas",
  },
];


export const plansB = [
  {
    id: 1,
    name: "Básico",
    price: "$47.99",
    features: [
      "Monitoreo en tiempo real de 5 máquinas",
      "Soporte técnico por correo (24h respuesta)",
      "5 equipos industriales conectados",
      "Almacenamiento cloud de 10 GB para datos operativos",
      "Informes mensuales de eficiencia energética",
    ],
    isFeatured: false,
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    recommendedFor: "Talleres pequeños o startups industriales",
  },
  {
    id: 2,
    name: "Profesional",
    price: "$61.47",
    features: [
      "Monitoreo en tiempo real ilimitado",
      "Análisis predictivo de fallos mecánicos",
      "Integración con ERPs industriales",
      "Almacenamiento cloud de 50 GB",
      "Soporte prioritario (4h respuesta)",
      "Dashboard personalizable con alertas",
      "Pruebas de calidad de aceite Motul incluidas",
    ],
    isFeatured: true,
    buttonLabel: "Recomendado",
    buttonColor: "bg-green-500 hover:bg-green-600",
    recommendedFor: "Empresas medianas con flotas de maquinaria",
  },
  {
    id: 3,
    name: "Empresarial",
    price: "$122.64",
    features: [
      "Monitoreo multi-sitio en tiempo real",
      "Análisis predictivo con IA avanzada",
      "Integración API con sistemas SCADA/PLC",
      "Almacenamiento cloud de 200 GB",
      "Soporte 24/7 con ingenieros especializados",
      "Capacitación técnica personalizada",
      "Certificación de seguridad industrial (ISO 27001)",
      "Acceso a históricos de 24 meses",
    ],
    isFeatured: false,
    buttonLabel: "Seleccionar Plan",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    recommendedFor: "Corporaciones con operaciones industriales complejas",
  },
];

export const services = [
  {
    id: 1,
    title: "Monitoreo en Tiempo Real",
    description: "Analiza tus datos en tiempo real desde cualquier dispositivo con acceso a internet",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Eficiencia energética (kW generados vs. consumo)",
      "Calidad del aceite (resultados de las pruebas de Motul)",
      "Temperaturas promedio de operación"
    ],
  },
  {
    id: 2,
    title: "Histórico de Datos y Tendencias",
    description: "Visualiza la evolución de tus métricas a lo largo del tiempo",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Evolución de la temperatura de los motores",
      "Cambios en la calidad del aceite (basado en pruebas de Motul)",
      "Fluctuaciones en la generación de energía"
    ],
  },
  {
    id: 3,
    title: "Dashboard de Estado de Máquinas",
    description: "Panel de control con indicadores visuales de tus equipos",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Indicadores de estado (verde, amarillo, rojo) basados en umbrales predefinidos",
      "Resumen de generación energética total en kW",
      "Alertas visuales para mantenimiento preventivo"
    ],
  },
  {
    id: 4,
    title: "Comparación de Rendimiento entre Máquinas",
    description: "Analiza el desempeño relativo de tus equipos industriales",
    icon: <CurrencyDollarIcon className='h-12 w-12'/>,
    beneficios: [
      "Comparación de eficiencia energética entre equipos",
      "Análisis de calidad de aceite Motul entre máquinas",
      "Monitorización de temperaturas operativas"
    ],
  }
];

export const faqs = [
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Especializamos en integración de datos industriales en la nube, monitoreo en tiempo real de maquinaria, análisis predictivo de eficiencia energética y soporte técnico especializado para mantenimiento de sistemas.",
  },
  {
    question: "¿Cuánto tiempo toma implementar la integración de datos?",
    answer:
      "Depende de la complejidad de tus sistemas. Proyectos estándar de integración cloud se completan en 4-8 semanas, incluyendo migración de datos y configuración de dashboards.",
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer:
      "Sí, brindamos soporte 24/7 para mantenimiento de infraestructura cloud, actualizaciones de análisis predictivo y resolución de incidencias técnicas.",
  },
  {
    question: "¿Cómo garantizan la seguridad de los datos en la nube?",
    answer:
      "Usamos protocolos de encriptación de extremo a extremo y cumplimos con estándares internacionales como GDPR y SOC 2 para proteger tu información industrial.",
  },
  {
    question: "¿Pueden integrarse con mis sistemas existentes?",
    answer:
      "Nuestra plataforma es compatible con sistemas SCADA, PLCs y ERPs industriales. Realizamos un análisis previo para garantizar una integración fluida.",
  },
];