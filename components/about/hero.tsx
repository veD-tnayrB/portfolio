interface ISocialLink {
  label: string;
  href: string;
  openInNewTab: boolean;
}

const socialLinks: ISocialLink[] = [
  { label: "GitHub →", href: "https://github.com/eynort", openInNewTab: true },
  {
    label: "LinkedIn →",
    href: "https://www.linkedin.com/in/bryantdev/",
    openInNewTab: true,
  },
  {
    label: "Email →",
    href: "mailto:brayanmc.contacto@gmail.com",
    openInNewTab: false,
  },
  { label: "CV →", href: "/Bryant_Caballero.pdf", openInNewTab: true },
];

const paragraphs: string[] = [
  "My focus is transforming ambiguous problems into predictable, maintainable software systems. I specialize in the hands-on implementation of robust standards, crafting essential developer tooling, and engineering processes that elevate team output.",
  'I champion boring processes and "Boring Code": clear, predictable, strictly standardized architectures and pipelines that eliminate daily technical friction. My job is to make sure every good idea on the team gets channeled, standardized, and shipped through an integration chain you can rely on.',
];

export function AboutHero() {
  const socialLinkItems = socialLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target={link.openInNewTab ? "_blank" : undefined}
      rel={link.openInNewTab ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:ring-primary text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {link.label}
    </a>
  ));

  const paragraphItems = paragraphs.map((paragraph) => (
    <p
      key={paragraph}
      className="text-muted-foreground text-base leading-relaxed sm:text-lg"
    >
      {paragraph}
    </p>
  ));

  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center gap-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          Full Stack Developer · React · Next.js · Node.js
        </p>
        <h1 className="text-foreground text-4xl font-normal sm:text-5xl lg:text-6xl">
          Bryant Caballero
        </h1>
      </div>
      <div className="space-y-4">{paragraphItems}</div>
      <div className="flex flex-wrap items-center gap-5">{socialLinkItems}</div>
    </section>
  );
}
