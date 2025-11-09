"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

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

const quickAccessMap: Record<string, string> = {
  "0": navigationLinks[0]?.href ?? "/",
  "1": navigationLinks[1]?.href ?? "/",
  "2": navigationLinks[2]?.href ?? "/",
};

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.defaultPrevented) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        return;
      }

      const destination = quickAccessMap[event.key];
      if (!destination || destination === pathname) {
        return;
      }

      event.preventDefault();
      router.push(destination);
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [pathname, router]);

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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-10">{navigationLinkItems}</div>
      </div>
    </nav>
  );
}
