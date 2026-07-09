import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n";

const LOCALE_COOKIE = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  for (const part of acceptLanguage.split(",")) {
    const code = part.split(";")[0]?.trim().toLowerCase() ?? "";
    for (const locale of locales) {
      if (code === locale || code.startsWith(`${locale}-`)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and any file with an extension (PDFs, images, icons).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
