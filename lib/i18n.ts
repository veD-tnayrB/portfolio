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
    "Bryant Caballero is a Full Stack Developer specialized in React, Next.js, React Native, Node.js, and TypeScript — AI-driven development with Claude Code, internal platforms, legacy modernization, cloud migrations (Google Cloud, Firebase), and the standards that keep AI-assisted engineering predictable.",
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
      "I build full stack products — web and mobile — with React, Next.js, React Native, and Node.js, turning ambiguous problems into predictable, maintainable systems: from internal platforms powering client products in production to legacy systems brought back to an evolvable state.",
      'I champion boring processes and "Boring Code": clear, strictly standardized architectures and pipelines that eliminate daily technical friction. My job is to make sure every good idea — whether written by a human or by an agent — gets channeled, standardized, and shipped through an integration chain you can rely on.',
    ],
    downloadCv: "Download CV",
    cvHref: "/Bryant_Caballero.pdf",
  },
  timeline: {
    label: "Experience",
    title: "Work History",
    subtitle:
      "Platform engineering, legacy modernization, cloud migrations, and AI-era standards — working directly with technical and business leadership.",
  },
  certificates: {
    label: "Certifications",
    title: "Continuous Learning",
    subtitle:
      "Structured programs that ground my day-to-day work in computer science fundamentals, algorithms, and web development.",
  },
  projects: {
    label: "Projects",
    title: "Open Source Highlights",
    subtitle:
      "A hand-picked selection of my open source work — platforms, starters, and product experiments that showcase my approach to developer experience, performance, and maintainability.",
    viewProject: "View project →",
    noDescription: "Project description coming soon.",
    emptyTitle: "Projects are temporarily unavailable",
    emptyBodyPrefix: "You can browse all of my work directly on",
    emptyBodyLink: "GitHub",
  },
  experienceContent: {
    entryTitle: "Full Stack Developer",
    entryDescription:
      "Full-stack development and requirements analysis for clients across multiple industries, building scalable web and mobile applications with React, React Native (Expo), Node.js, and TypeScript in close collaboration with product designers.",
    entryHighlights: [
      "Core contributor to JAD, the company's internal platform and framework, taking part in central product and architecture decisions from its foundations — today it powers 6+ client products in production and sets the team's reference architecture.",
      "Migrated 100% of client legacy systems onto JAD — 6 clients in under a month, including a legacy mobile app I migrated to React Native (Expo) solo in four days — working hand-in-hand with clients and bringing their systems back to a maintainable, evolvable state.",
      "Helped drive AI adoption across the engineering team: defined the rules AI-generated code must follow and built the automated quality gate that enforces them — 10+ checks wired into the team's definition of done — keeping agentic workflows and AI-assisted testing predictable.",
      "Played a central role in migrating backend services from GCP virtual machines to Cloud Run and Cloud SQL, and every frontend from Apache-based VMs to Firebase Hosting — isolating environments, automating deployments, and reducing operational costs.",
      "Standardized the team's delivery process, cutting turnaround for new features and bug fixes from days to hours, and client demo delivery from weeks to days.",
      "Partnered directly with the CEO and CTO to define technical guidelines and architectures for client projects.",
    ],
  },
};

const es: IDictionary = {
  siteDescription:
    "Bryant Caballero es un Desarrollador Full Stack especializado en React, Next.js, React Native, Node.js y TypeScript — desarrollo AI-driven con Claude Code, plataformas internas, modernización de sistemas legacy, migraciones cloud (Google Cloud, Firebase) y los estándares que mantienen predecible la ingeniería asistida por IA.",
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
      "Construyo productos full stack — web y móvil — con React, Next.js, React Native y Node.js, convirtiendo problemas ambiguos en sistemas predecibles y mantenibles: desde plataformas internas que impulsan productos de clientes en producción hasta sistemas legacy devueltos a un estado evolucionable.",
      "Defiendo los procesos aburridos y el «código aburrido»: arquitecturas y pipelines claros y estrictamente estandarizados que eliminan la fricción técnica del día a día. Mi trabajo es que cada buena idea — escrita por un humano o por un agente — sea canalizada, estandarizada y entregada a través de una cadena de integración en la que se puede confiar.",
    ],
    downloadCv: "Descargar CV",
    cvHref: "/Bryant_Caballero_ES.pdf",
  },
  timeline: {
    label: "Experiencia",
    title: "Historial profesional",
    subtitle:
      "Ingeniería de plataformas, modernización de sistemas legacy, migraciones cloud y estándares para la era de la IA — trabajando directamente con el liderazgo técnico y de negocio.",
  },
  certificates: {
    label: "Certificaciones",
    title: "Aprendizaje continuo",
    subtitle:
      "Programas estructurados que sustentan mi trabajo diario en fundamentos de ciencias de la computación, algoritmos y desarrollo web.",
  },
  projects: {
    label: "Proyectos",
    title: "Destacados open source",
    subtitle:
      "Una selección curada de mi trabajo open source — plataformas, starters y experimentos de producto que muestran mi enfoque en experiencia de desarrollo, rendimiento y mantenibilidad.",
    viewProject: "Ver proyecto →",
    noDescription: "Descripción del proyecto próximamente.",
    emptyTitle: "Proyectos temporalmente no disponibles",
    emptyBodyPrefix: "Puedes ver todo mi trabajo directamente en",
    emptyBodyLink: "GitHub",
  },
  experienceContent: {
    entryTitle: "Full Stack Developer",
    entryDescription:
      "Desarrollo full stack y análisis de requerimientos para clientes de múltiples industrias, construyendo aplicaciones web y móviles escalables con React, React Native (Expo), Node.js y TypeScript en estrecha colaboración con diseñadores de producto.",
    entryHighlights: [
      "Contribuidor central de JAD, la plataforma y framework interno de la empresa, participando en las decisiones centrales de producto y arquitectura desde sus fundaciones — hoy impulsa 6+ productos de clientes en producción y define la arquitectura de referencia del equipo.",
      "Migré el 100% de los sistemas legacy de los clientes a JAD — 6 clientes en menos de un mes, incluyendo una aplicación móvil legacy que migré a React Native (Expo) yo solo en cuatro días — trabajando mano a mano con los clientes y devolviendo sus sistemas a un estado mantenible y evolucionable.",
      "Ayudé a impulsar la adopción de IA en el equipo de ingeniería: definí las reglas que el código generado por IA debe respetar y construí la puerta de calidad automática que las hace cumplir — más de 10 verificaciones integradas al definition of done del equipo — manteniendo predecibles los flujos agénticos y el testing asistido por IA.",
      "Jugué un rol central en la migración de los servicios backend desde máquinas virtuales de GCP hacia Cloud Run y Cloud SQL, y de todos los frontends desde VMs con Apache hacia Firebase Hosting — aislando ambientes, automatizando despliegues y reduciendo costos operativos.",
      "Estandaricé el proceso de entrega del equipo, reduciendo el tiempo de nuevas funcionalidades y correcciones de días a horas, y la entrega de demos a clientes de semanas a días.",
      "Colaboré directamente con el CEO y el CTO definiendo lineamientos técnicos y arquitecturas para proyectos de clientes.",
    ],
  },
};

const dictionaries: Record<Locale, IDictionary> = { en, es };

export function getDictionary(locale: Locale): IDictionary {
  return dictionaries[locale];
}
