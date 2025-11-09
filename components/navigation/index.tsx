"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  const navigationLinkItems = useMemo(
    () =>
      navigationLinks.map((link) => {
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
      }),
    [pathname],
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
          <div className="flex flex-col items-center justify-center gap-1">
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-current transition-transform duration-200",
                isMobileMenuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-current transition-opacity duration-200",
                isMobileMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-current transition-transform duration-200",
                isMobileMenuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </div>
        </button>

        <div className="hidden items-center gap-10 md:flex">{navigationLinkItems}</div>
      </div>

      <div
        className={cn(
          "md:hidden",
          isMobileMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="border-b border-border/60 bg-background/95 px-4 pb-4 pt-2 sm:px-6">
          <div className="flex flex-col gap-2">{navigationLinkItems}</div>
        </div>
      </div>
    </nav>
  );
}
