import type React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

import { Navigation } from "@/components/navigation";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

import "../globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

interface ILangParams {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: ILangParams): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Bryant Caballero — Full Stack Developer",
      template: "%s — Bryant Caballero",
    },
    description: dictionary.siteDescription,
    keywords: [
      "Bryant Caballero",
      "Full Stack Developer",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Google Cloud",
      "Software Engineer",
      "Legacy Modernization",
      "AI-Assisted Engineering",
    ],
    authors: [{ name: "Bryant Caballero", url: SITE_URL }],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}`,
      title: "Bryant Caballero — Full Stack Developer",
      description: dictionary.siteDescription,
      siteName: "Bryant Caballero",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [{ url: "/images/profile.jpg", alt: "Bryant Caballero" }],
    },
    twitter: {
      card: "summary",
      title: "Bryant Caballero — Full Stack Developer",
      description: dictionary.siteDescription,
      images: ["/images/profile.jpg"],
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  };
}

interface IRootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: IRootLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={geistMono.variable}>
        <Suspense fallback={null}>
          <Navigation lang={lang} labels={dictionary.nav} />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
