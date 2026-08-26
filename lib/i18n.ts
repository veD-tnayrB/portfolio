export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

interface IHeroDictionary {
  role: string;
  availability: string;
  paragraphs: string[];
  downloadCv: string;
  cvHref: string;
}

interface ITimelineDictionary {
  label: string;
  title: string;
  subtitle: string;
}

interface ICertificatesDictionary {
  label: string;
  title: string;
  subtitle: string;
}

interface IProjectsDictionary {
  label: string;
  title: string;
  subtitle: string;
  viewProject: string;
  noDescription: string;
  emptyTitle: string;
  emptyBodyPrefix: string;
  emptyBodyLink: string;
}

interface IExperienceContentDictionary {
  entryTitle: string;
  entryDescription: string;
  entryHighlights: string[];
}

export interface IDictionary {
  siteDescription: string;
  pageTitles: { projects: string; experience: string };
  pageDescriptions: { projects: string; experience: string };
  nav: {
    about: string;
    projects: string;
    experience: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  hero: IHeroDictionary;
  timeline: ITimelineDictionary;
  certificates: ICertificatesDictionary;
  projects: IProjectsDictionary;
  experienceContent: IExperienceContentDictionary;
}

const en: IDictionary = {
  siteDescription:
    "Bryant Caballero is a Semi-Senior Full Stack Developer working with React, Next.js, React Native, Node.js, and TypeScript. He ships generative-AI features inside products — a multi-provider layer over Anthropic, OpenAI, and Gemini — and built the automated quality gates that keep AI-written code honest. Internal platforms, legacy modernization, and cloud on Google Cloud and Firebase.",
  pageTitles: { projects: "Projects", experience: "Experience" },
  pageDescriptions: {
    projects:
      "Open source projects by Bryant Caballero — SaaS starters, admin platforms, and web applications built with React, Next.js, TypeScript, and Node.js.",
    experience:
      "Work history and certifications of Bryant Caballero — Full Stack Developer with experience in React, Next.js, Node.js, TypeScript, and Google Cloud.",
  },
  nav: {
    about: "00. About",
    projects: "01. Projects",
    experience: "02. Experience",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchLanguage: "Cambiar idioma a español",
  },
  hero: {
    role: "Full Stack Developer · AI in Production · Boringly Reliable",
    availability: "Open to remote roles · Venezuela (GMT-4) · English C1",
    paragraphs: [
      "I build web and mobile products with React, Next.js, React Native, and Node.js. Most of my work at Baleares Group lives inside JAD, the internal platform behind 8+ client products in production — where I have also shipped generative-AI features: a multi-provider layer over Anthropic, OpenAI, and Gemini powering tool-calling chat, agents, and an agentic dashboard.",
      "I like boring code. Standards, predictable pipelines, releases nobody fears. That matters more now that so much code is written by AI, so I wrote the rules AI output has to pass and automated the ~34 quality checks that keep it at the same bar as everything else.",
    ],
    downloadCv: "Download CV",
    cvHref: "/Bryant_Caballero.pdf",
  },
  timeline: {
    label: "Experience",
    title: "Work History",
    subtitle:
      "Platform work, legacy rescues, and cloud migrations at Baleares Group.",
  },
  certificates: {
    label: "Certifications",
    title: "Continuous Learning",
    subtitle: "Where I got my computer science fundamentals.",
  },
  projects: {
    label: "Projects",
    title: "Open Source Highlights",
    subtitle:
      "Some of my open source work: platforms, starters, and a few experiments.",
    viewProject: "View project →",
    noDescription: "Project description coming soon.",
    emptyTitle: "Projects are temporarily unavailable",
    emptyBodyPrefix: "You can browse all of my work directly on",
    emptyBodyLink: "GitHub",
  },
  experienceContent: {
    entryTitle: "Semi-Senior Full Stack Developer",
    entryDescription:
      "Full stack development and requirements analysis for clients in several industries. Web and mobile apps with React, React Native (Expo), Node.js, and TypeScript, plus generative-AI features shipped inside the product.",
    entryHighlights: [
      "Core contributor to JAD, the company's internal platform, in on its product and architecture decisions since the foundations. Today it powers 8+ client products in production.",
      "Shipped generative-AI features inside the product: a multi-provider layer over Anthropic, OpenAI, and Gemini with per-organization BYOK, token streaming, and prompt caching, powering tool-calling chat, configurable agents, and an agentic dashboard that builds KPIs from project data.",
      "Wrote the rules AI-generated code has to follow and automated ~34 quality checks enforced in three layers — a local hook, CI on every pull request, and a deploy-composition wall — so AI output ships at the same bar as hand-written code.",
      "Owned authentication and multi-tenant security: JWT, Argon2 hashing, permission-based RBAC, per-organization data isolation, rate limiting, and Zod validation, aligned with OWASP practices.",
      "Migrated all 6 client legacy systems onto JAD in under a month, working directly with each client. One I ran end to end myself, platform and React Native (Expo) app included, then handed off to the team when I was moved to a larger client.",
      "Built the automation that brings every project into line with the company's per-environment infrastructure standards on Cloud Run, Cloud SQL, and Firebase Hosting, and migrated the old systems off virtual machines onto it.",
      "Standardized the delivery process. New features and bug fixes now ship in hours instead of days; client demos in days instead of weeks.",
      "Worked directly with the CEO and CTO on technical guidelines and architectures for client projects.",
    ],
  },
};

const es: IDictionary = {
  siteDescription:
    "Bryant Caballero es un Semi-Senior Full Stack Developer que trabaja con React, Next.js, React Native, Node.js y TypeScript. Envía features de IA generativa dentro del producto —una capa multi-proveedor sobre Anthropic, OpenAI y Gemini— y construyó las puertas de calidad automatizadas que mantienen honesto al código escrito por IA. Plataformas internas, modernización de sistemas legacy y nube en Google Cloud y Firebase.",
  pageTitles: { projects: "Proyectos", experience: "Experiencia" },
  pageDescriptions: {
    projects:
      "Proyectos open source de Bryant Caballero — starters SaaS, plataformas de administración y aplicaciones web construidas con React, Next.js, TypeScript y Node.js.",
    experience:
      "Historial profesional y certificaciones de Bryant Caballero — Desarrollador Full Stack con experiencia en React, Next.js, Node.js, TypeScript y Google Cloud.",
  },
  nav: {
    about: "00. Sobre mí",
    projects: "01. Proyectos",
    experience: "02. Experiencia",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    switchLanguage: "Switch language to English",
  },
  hero: {
    role: "Full Stack Developer · IA en Producción · Aburridamente Confiable",
    availability: "Abierto a roles remotos · Venezuela (GMT-4) · Inglés C1",
    paragraphs: [
      "Construyo productos web y móviles con React, Next.js, React Native y Node.js. La mayor parte de mi trabajo en Baleares Group vive dentro de JAD, la plataforma interna detrás de 8+ productos de clientes en producción —donde también he enviado a producción features de IA generativa: una capa multi-proveedor sobre Anthropic, OpenAI y Gemini que impulsa chat con tool-calling, agentes y un dashboard agéntico.",
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
      "Escribí las reglas que el código generado por IA debe cumplir y automaticé ~34 controles de calidad en tres capas —un hook local, CI en cada pull request y una pared de composición— para que lo que genera la IA salga a la misma vara que el código escrito a mano.",
      "Me hice cargo de la autenticación y la seguridad multi-tenant: JWT, hashing con Argon2, RBAC por permisos, aislamiento de datos por organización, rate limiting y validación con Zod, alineado a prácticas OWASP.",
      "Migré los 6 sistemas legacy de los clientes a JAD en menos de un mes, trabajando directo con cada cliente. Uno lo llevé completo yo mismo, plataforma y app en React Native (Expo) incluidas, y luego lo delegué al equipo cuando me pasaron a un cliente más grande.",
      "Construí la automatización que alinea a todos los proyectos con el estándar de infraestructura por entorno de la empresa en Cloud Run, Cloud SQL y Firebase Hosting, y migré los sistemas viejos fuera de las máquinas virtuales hacia él.",
      "Estandaricé el proceso de entrega. Las funcionalidades y correcciones ahora salen en horas en vez de días; las demos a clientes en días en vez de semanas.",
      "Trabajé directo con el CEO y el CTO en lineamientos técnicos y arquitecturas para proyectos de clientes.",
    ],
  },
};

const dictionaries: Record<Locale, IDictionary> = { en, es };

export function getDictionary(locale: Locale): IDictionary {
  return dictionaries[locale];
}
