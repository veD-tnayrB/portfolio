"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import type { IDictionary, Locale } from "@/lib/i18n";

interface INavigationLink {
  href: string;
  label: string;
}

interface INavigationProps {
  lang: Locale;
  labels: IDictionary["nav"];
}

export function Navigation({ lang, labels }: INavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks: INavigationLink[] = useMemo(
    () => [
      { href: `/${lang}`, label: labels.about },
      { href: `/${lang}/projects`, label: labels.projects },
      { href: `/${lang}/experience`, label: labels.experience },
    ],
    [lang, labels],
  );

  const otherLang: Locale = lang === "en" ? "es" : "en";

  function switchLanguage() {
    document.cookie = `NEXT_LOCALE=${otherLang}; path=/; max-age=31536000; samesite=lax`;
    const nextPath = pathname.replace(`/${lang}`, `/${otherLang}`);
    router.push(nextPath);
  }

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

      // Handle arrow key navigation
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const currentIndex = navigationLinks.findIndex(
          (link) => link.href === pathname,
        );

        if (currentIndex === -1) {
          return;
        }

        let nextIndex: number | null = null;
        if (event.key === "ArrowRight") {
          // Only move right if not at the last element
          if (currentIndex < navigationLinks.length - 1) {
            nextIndex = currentIndex + 1;
          }
        } else {
          // Only move left if not at the first element
          if (currentIndex > 0) {
            nextIndex = currentIndex - 1;
          }
        }

        // Only navigate if there's a valid next index
        if (nextIndex !== null) {
          const destination = navigationLinks[nextIndex]?.href;
          if (destination) {
            event.preventDefault();
            router.push(destination);
          }
        }
        return;
      }

      // Handle numeric key navigation (1-based: 1 → about, 2 → projects, 3 → experience)
      const quickAccessIndex = Number.parseInt(event.key, 10) - 1;
      if (quickAccessIndex < 0) {
        return;
      }

      const destination = navigationLinks[quickAccessIndex]?.href;
      if (!destination || destination === pathname) {
        return;
      }

      event.preventDefault();
      router.push(destination);
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [pathname, router, navigationLinks]);

  const navigationLinkItems = navigationLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "px-2 py-1 text-sm leading-none font-medium tracking-[0.08em] transition-colors duration-200",
          "text-muted-foreground hover:text-foreground focus-visible:text-foreground focus-visible:outline-none",
          isActive && "bg-foreground text-background",
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {link.label}
      </Link>
    );
  });

  const languageSwitch = (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={labels.switchLanguage}
      className="border-border/40 text-muted-foreground hover:text-foreground focus-visible:ring-primary flex h-8 items-center gap-1 rounded-md border px-2.5 text-xs font-semibold tracking-[0.08em] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span className={cn(lang === "en" && "text-foreground")}>EN</span>
      <span aria-hidden="true">/</span>
      <span className={cn(lang === "es" && "text-foreground")}>ES</span>
    </button>
  );

  return (
    <nav className="border-border/60 bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="border-border/40 text-muted-foreground hover:text-foreground focus-visible:ring-primary flex h-9 w-9 items-center justify-center rounded-md border transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
          aria-label={isMobileMenuOpen ? labels.closeMenu : labels.openMenu}
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
        >
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

        {languageSwitch}
      </div>

      <div className={cn("md:hidden", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="border-border/60 bg-background/95 border-b px-4 pt-2 pb-4 sm:px-6">
          <div className="flex flex-col gap-2">{navigationLinkItems}</div>
        </div>
      </div>
    </nav>
  );
}
