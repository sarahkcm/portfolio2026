import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/profile";
import { BASE } from "@/lib";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

// Placeholder until the GitHub Pages URL is live; used for absolute Open Graph URLs.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sarahkcm.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: ["QA Engineer", "Quality Engineering", "Test Automation", "AI-assisted Testing", "Playwright", "Cypress", "API Testing", "Mobile Testing"],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    url: `${BASE}/`,
    siteName: site.name,
    images: [{ url: `${BASE}/og.png`, width: 1200, height: 630, alt: `${site.name}, ${site.role}` }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [`${BASE}/og.png`] },
  icons: { icon: `${BASE}/favicon.svg` },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
