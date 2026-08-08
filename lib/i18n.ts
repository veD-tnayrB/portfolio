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
    "Bryant Caballero is a Full Stack Developer working with React, Next.js, React Native, Node.js, and TypeScript. AI-driven development with Claude Code, internal platforms, legacy modernization, and cloud migrations on Google Cloud and Firebase.",
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
    role: "Full Stack Developer · AI-Driven · Boringly Reliable",
    availability: "Open to remote roles · Venezuela (GMT-4) · English C1",
    paragraphs: [
      "I build web and mobile products with React, Next.js, React Native, and Node.js. Most of my work at Baleares Group lives inside JAD, the internal platform behind 6+ client products in production. I have also spent a good part of these years rescuing legacy systems other people had given up on.",
      "I like boring code. Standards, predictable pipelines, releases nobody fears. That matters more now that so much code is written by AI, so I built the quality gates my team uses to make sure AI output ships at the same bar as everything else.",
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
    entryTitle: "Full Stack Developer",
    entryDescription:
      "Full stack development and requirements analysis for clients in several industries. Web and mobile apps with React, React Native (Expo), Node.js, and TypeScript.",
    entryHighlights: [
      "Core contributor to JAD, the company's internal platform, in on its product and architecture decisions since the foundations. Today it powers 6+ client products in production.",
      "Migrated all 6 client legacy systems onto JAD in under a month, working directly with each client. One I ran end to end myself, platform and React Native (Expo) app included, then handed off to the team when I was moved to a larger client.",
      "Drove AI adoption on the engineering team: wrote the rules AI-generated code has to follow and built the automated quality gate that enforces them, 10+ checks wired into our definition of done.",
      "Moved our backend services from GCP virtual machines to Cloud Run and Cloud SQL, and every frontend from Apache VMs to Firebase Hosting. Isolated environments, automated deployments, lower operating costs.",
      "Standardized the delivery process. New features and bug fixes now ship in hours instead of days; client demos in days instead of weeks.",
      "Worked directly with the CEO and CTO on technical guidelines and architectures for client projects.",
    ],
  },
};

const es: IDictionary = {
  siteDescription:
    "Bryant Caballero es un Desarrollador Full Stack que trabaja con React, Next.js, React Native, Node.js y TypeScript. Desarrollo AI-driven con Claude Code, plataformas internas, modernización de sistemas legacy y migraciones cloud en Google Cloud y Firebase.",
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
    role: "Full Stack Developer · AI-Driven · Aburridamente Confiable",
    availability: "Abierto a roles remotos · Venezuela (GMT-4) · Inglés C1",
    paragraphs: [
      "Construyo productos web y móviles con React, Next.js, React Native y Node.js. La mayor parte de mi trabajo en Baleares Group vive dentro de JAD, la plataforma interna detrás de 6+ productos de clientes en producción. También he pasado buena parte de estos años rescatando sistemas legacy que otros daban por perdidos.",
      "Me gusta el código aburrido. Estándares, pipelines predecibles, releases que nadie teme. Eso importa más ahora que tanto código lo escribe la IA, así que construí las puertas de calidad que usa mi equipo para que lo que genera la IA salga a producción con la misma vara que todo lo demás.",
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
    entryTitle: "Full Stack Developer",
    entryDescription:
      "Desarrollo full stack y análisis de requerimientos para clientes de varias industrias. Aplicaciones web y móviles con React, React Native (Expo), Node.js y TypeScript.",
    entryHighlights: [
      "Contribuidor central de JAD, la plataforma interna de la empresa, participando en sus decisiones de producto y arquitectura desde las fundaciones. Hoy impulsa 6+ productos de clientes en producción.",
      "Migré los 6 sistemas legacy de los clientes a JAD en menos de un mes, trabajando directo con cada cliente. Uno lo llevé completo yo mismo, plataforma y app en React Native (Expo) incluidas, y luego lo delegué al equipo cuando me pasaron a un cliente más grande.",
      "Impulsé la adopción de IA en el equipo: escribí las reglas que el código generado por IA debe cumplir y construí la puerta de calidad automática que las hace valer, más de 10 verificaciones integradas a nuestro definition of done.",
      "Migré los servicios backend de máquinas virtuales de GCP a Cloud Run y Cloud SQL, y todos los frontends de VMs con Apache a Firebase Hosting. Ambientes aislados, despliegues automatizados, menos costo operativo.",
      "Estandaricé el proceso de entrega. Las funcionalidades y correcciones ahora salen en horas en vez de días; las demos a clientes en días en vez de semanas.",
      "Trabajé directo con el CEO y el CTO en lineamientos técnicos y arquitecturas para proyectos de clientes.",
    ],
  },
};

const dictionaries: Record<Locale, IDictionary> = { en, es };

export function getDictionary(locale: Locale): IDictionary {
  return dictionaries[locale];
}
