interface ISocialLink {
  label: string;
  href: string;
}

const socialLinks: ISocialLink[] = [
  { label: "GitHub →", href: "https://github.com/veD-tnayrB" },
  { label: "Email →", href: "mailto:brayanmc.contacto@gmail.com" },
  { label: "CV →", href: "/Bryant_Caballero.pdf" },
];

const paragraphs: string[] = [
  "My focus is transforming ambiguous problems into predictable, maintainable software systems. I specialize in the hands-on implementation of robust standards, crafting essential developer tooling, and engineering processes that elevate team output.",
  'I champion "Boring Code": clear, predictable, and strictly standardized architectures that eliminate daily technical friction. This practice shifts the engineering effort away from code firefighting and toward the critical work of product innovation and quality design.',
];

export function AboutHero() {
  const socialLinkItems = socialLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      target="_blank"
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
          Full Stack Developer & Systems Architect
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
