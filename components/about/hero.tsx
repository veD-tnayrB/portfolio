import Image from "next/image";

interface ISocialLink {
  label: string;
  href: string;
  openInNewTab: boolean;
}

const socialLinks: ISocialLink[] = [
  { label: "GitHub →", href: "https://github.com/eynort", openInNewTab: true },
  {
    label: "Email →",
    href: "mailto:brayanmc.contacto@gmail.com",
    openInNewTab: false,
  },
];

const paragraphs: string[] = [
  "I build full stack products with React, Next.js, and Node.js, turning ambiguous problems into predictable, maintainable systems — from internal platforms powering client products in production to legacy systems brought back to an evolvable state.",
  'I champion boring processes and "Boring Code": clear, strictly standardized architectures and pipelines that eliminate daily technical friction. My job is to make sure every good idea — whether written by a human or by an agent — gets channeled, standardized, and shipped through an integration chain you can rely on.',
];

const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Google Cloud",
  "Firebase",
  "Docker",
  "CI/CD",
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

  const skillItems = skills.map((skill) => (
    <span
      key={skill}
      className="border-border/60 text-muted-foreground inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium"
    >
      {skill}
    </span>
  ));

  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center gap-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
            Full Stack Developer · React · Next.js · Node.js
          </p>
          <h1 className="text-foreground text-4xl font-normal sm:text-5xl lg:text-6xl">
            Bryant Caballero
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-emerald-500"
            />
            Open to remote roles · Venezuela (GMT-4) · English C1
          </p>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="Bryant Caballero"
          width={128}
          height={128}
          priority
          className="h-24 w-24 shrink-0 rounded-full sm:h-32 sm:w-32"
        />
      </div>
      <div className="space-y-4">{paragraphItems}</div>
      <div className="flex flex-wrap gap-2">{skillItems}</div>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="/Bryant_Caballero.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-primary inline-flex h-10 items-center rounded-md px-5 text-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/bryantdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border text-foreground hover:border-foreground focus-visible:ring-primary inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          LinkedIn
        </a>
        {socialLinkItems}
      </div>
    </section>
  );
}
