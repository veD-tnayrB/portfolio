import type { IDictionary } from "./i18n-types";

export const es: IDictionary = {
  siteDescription:
    "Bryant Caballero es un Semi-Senior Full Stack Developer que trabaja con React, Next.js, React Native, Node.js y TypeScript. Envía features de IA generativa dentro del producto, no solo prototipos: una capa multi-proveedor sobre Anthropic, OpenAI y Gemini. También construyó las puertas de calidad automatizadas que mantienen honesto al código escrito por IA. Plataformas internas, modernización de sistemas legacy y nube en Google Cloud y Firebase.",
  pageTitles: { projects: "Proyectos", experience: "Experiencia" },
  pageDescriptions: {
    projects:
      "Proyectos open source de Bryant Caballero: starters SaaS, plataformas de administración y aplicaciones web construidas con React, Next.js, TypeScript y Node.js.",
    experience:
      "Historial profesional y certificaciones de Bryant Caballero, Desarrollador Full Stack con experiencia en React, Next.js, Node.js, TypeScript y Google Cloud.",
  },
  nav: {
    about: "01. Sobre mí",
    projects: "02. Proyectos",
    experience: "03. Experiencia",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    switchLanguage: "Switch language to English",
  },
  hero: {
    role: "Full Stack Developer · IA en Producción · Aburridamente Confiable",
    availability: "Abierto a roles remotos · Venezuela (GMT-4) · Inglés C1",
    paragraphs: [
      "Construyo productos web y móviles con React, Next.js, React Native y Node.js. La mayor parte de mi trabajo en Baleares Group vive dentro de JAD, la plataforma interna detrás de 8+ productos de clientes en producción. Ahí también he enviado a producción features de IA generativa: una capa multi-proveedor sobre Anthropic, OpenAI y Gemini que impulsa chat con tool-calling, agentes y un dashboard agéntico.",
      "Me gusta el código aburrido. Estándares, pipelines predecibles, releases que nadie teme. Eso importa más ahora que tanto código lo escribe la IA, así que escribí las reglas que el código de IA debe cumplir y automaticé los ~34 controles de calidad que lo mantienen a la misma vara que todo lo demás.",
    ],
    downloadCv: "Descargar CV",
    cvHref: "/Bryant_Caballero_ES.pdf",
  },
  timeline: {
    label: "Experiencia",
    title: "Historial profesional",
    subtitle:
      "Plataforma, rescate de sistemas legacy y migraciones cloud en Baleares Group.",
  },
  certificates: {
    label: "Certificaciones",
    title: "Aprendizaje continuo",
    subtitle: "Donde construí mis fundamentos de computación.",
  },
  projects: {
    label: "Proyectos",
    title: "Destacados open source",
    subtitle:
      "Parte de mi trabajo open source: plataformas, starters y algunos experimentos.",
    viewProject: "Ver proyecto →",
    noDescription: "Descripción del proyecto próximamente.",
    emptyTitle: "Proyectos temporalmente no disponibles",
    emptyBodyPrefix: "Puedes ver todo mi trabajo directamente en",
    emptyBodyLink: "GitHub",
  },
  experienceContent: {
    entryTitle: "Semi-Senior Full Stack Developer",
    entryDescription:
      "Desarrollo full stack y análisis de requerimientos para clientes de varias industrias. Aplicaciones web y móviles con React, React Native (Expo), Node.js y TypeScript, además de features de IA generativa enviadas dentro del producto.",
    entryHighlights: [
      "Contribuidor central de JAD, la plataforma interna de la empresa, participando en sus decisiones de producto y arquitectura desde las fundaciones. Hoy impulsa 8+ productos de clientes en producción.",
      "Envié a producción features de IA generativa: una capa multi-proveedor sobre Anthropic, OpenAI y Gemini con BYOK por organización, streaming de tokens y prompt caching, que impulsa chat con tool-calling, agentes configurables y un dashboard agéntico que arma KPIs desde los datos del proyecto.",
      "Escribí las reglas que el código generado por IA debe cumplir y automaticé ~34 controles de calidad en tres capas (un hook local, CI en cada pull request y una pared de composición), para que lo que genera la IA salga a la misma vara que el código escrito a mano.",
      "Me hice cargo de la autenticación y la seguridad multi-tenant: JWT, hashing con Argon2, RBAC por permisos, aislamiento de datos por organización, rate limiting y validación con Zod, alineado a prácticas OWASP.",
      "Migré los 6 sistemas legacy de los clientes a JAD en menos de un mes, trabajando directo con cada cliente. Uno lo llevé completo yo mismo, plataforma y app en React Native (Expo) incluidas, y luego lo delegué al equipo cuando me pasaron a un cliente más grande.",
      "Construí la automatización que alinea a todos los proyectos con el estándar de infraestructura por entorno de la empresa en Cloud Run, Cloud SQL y Firebase Hosting, y migré los sistemas viejos fuera de las máquinas virtuales hacia él.",
      "Estandaricé el proceso de entrega. Las funcionalidades y correcciones ahora salen en horas en vez de días; las demos a clientes en días en vez de semanas.",
      "Trabajé directo con el CEO y el CTO en lineamientos técnicos y arquitecturas para proyectos de clientes.",
    ],
  },
};
