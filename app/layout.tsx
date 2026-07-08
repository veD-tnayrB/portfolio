import type React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Navigation } from "@/components/navigation";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteDescription =
  "Bryant Caballero is a Full Stack Developer specialized in React, Next.js, Node.js, and TypeScript — building internal platforms, modernizing legacy systems, leading cloud migrations (Google Cloud, Firebase), and defining the standards that keep AI-assisted engineering predictable.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bryant Caballero — Full Stack Developer",
    template: "%s — Bryant Caballero",
  },
  description: siteDescription,
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
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Bryant Caballero — Full Stack Developer",
    description: siteDescription,
    siteName: "Bryant Caballero",
    images: [{ url: "/images/portrait.png", alt: "Bryant Caballero" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryant Caballero — Full Stack Developer",
    description: siteDescription,
    images: ["/images/portrait.png"],
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

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        <Suspense fallback={null}>
          <Navigation />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
