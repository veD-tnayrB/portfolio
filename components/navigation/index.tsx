"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface INavigationLink {
  href: string;
  label: string;
}

const navigationLinks: INavigationLink[] = [
  { href: "/", label: "00. About" },
  { href: "/projects", label: "01. Projects" },
  { href: "/experience", label: "02. Experience" },
];

export function Navigation() {
  const pathname = usePathname();

  const navigationLinkItems = navigationLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "text-sm font-medium tracking-[0.08em] leading-none transition-colors duration-200",
          "text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none",
          isActive && " bg-foreground px-2 py-1 text-background",
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-0 py-5">
            <div className="flex items-center gap-10">{navigationLinkItems}</div>
      </div>
    </nav>
  );
}
