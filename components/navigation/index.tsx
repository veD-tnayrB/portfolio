"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
              "text-sm leading-none font-medium tracking-[0.08em] transition-colors duration-200",
              "text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none",
              isActive && "bg-foreground text-background px-2 py-1",
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
    <nav className="border-border/60 bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="border-border/40 text-muted-foreground hover:text-foreground focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-md border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
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

        <div className="hidden items-center gap-10 md:flex">
          {navigationLinkItems}
        </div>
      </div>

      <div className={cn("md:hidden", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="border-border/60 bg-background/95 border-b px-4 pt-2 pb-4 sm:px-6">
          <div className="flex flex-col gap-2">{navigationLinkItems}</div>
        </div>
      </div>
    </nav>
  );
}
