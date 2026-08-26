import type { IDictionary } from "./i18n-types";

export const en: IDictionary = {
  siteDescription:
    "Bryant Caballero is a Semi-Senior Full Stack Developer working with React, Next.js, React Native, Node.js, and TypeScript. He ships generative-AI features inside products, not just prototypes: a multi-provider layer over Anthropic, OpenAI, and Gemini. He also built the automated quality gates that keep AI-written code honest. Internal platforms, legacy modernization, and cloud on Google Cloud and Firebase.",
  pageTitles: { projects: "Projects", experience: "Experience" },
  pageDescriptions: {
    projects:
      "Open source projects by Bryant Caballero: SaaS starters, admin platforms, and web applications built with React, Next.js, TypeScript, and Node.js.",
    experience:
      "Work history and certifications of Bryant Caballero, Full Stack Developer with experience in React, Next.js, Node.js, TypeScript, and Google Cloud.",
  },
  nav: {
    about: "01. About",
    projects: "02. Projects",
    experience: "03. Experience",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchLanguage: "Cambiar idioma a español",
  },
  hero: {
    role: "Full Stack Developer · AI in Production · Boringly Reliable",
    availability: "Open to remote roles · Venezuela (GMT-4) · English C1",
    paragraphs: [
      "I build web and mobile products with React, Next.js, React Native, and Node.js. Most of my work at Baleares Group lives inside JAD, the internal platform behind 8+ client products in production. There I have also shipped generative-AI features: a multi-provider layer over Anthropic, OpenAI, and Gemini powering tool-calling chat, agents, and an agentic dashboard.",
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
      "Wrote the rules AI-generated code has to follow and automated ~34 quality checks enforced in three layers (a local hook, CI on every pull request, and a deploy-composition wall), so AI output ships at the same bar as hand-written code.",
      "Owned authentication and multi-tenant security: JWT, Argon2 hashing, permission-based RBAC, per-organization data isolation, rate limiting, and Zod validation, aligned with OWASP practices.",
      "Migrated all 6 client legacy systems onto JAD in under a month, working directly with each client. One I ran end to end myself, platform and React Native (Expo) app included, then handed off to the team when I was moved to a larger client.",
      "Built the automation that brings every project into line with the company's per-environment infrastructure standards on Cloud Run, Cloud SQL, and Firebase Hosting, and migrated the old systems off virtual machines onto it.",
      "Standardized the delivery process. New features and bug fixes now ship in hours instead of days; client demos in days instead of weeks.",
      "Worked directly with the CEO and CTO on technical guidelines and architectures for client projects.",
    ],
  },
};
