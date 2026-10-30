import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation/navigation";
import { CommandPalette } from "@/components/navigation/command-palette";
import { contact } from "@/data/contact";
import { absoluteUrl, siteUrl } from "@/lib/site-config";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteTitle = "Mohit Nagarkar — Software & AI Developer";
const siteDescription =
  "Portfolio of Mohit Nagarkar, a software and AI developer building full-stack applications, AI-powered platforms, IoT systems, and real-world engineering projects.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteTitle,
  description: siteDescription,
  applicationName: "Mohit Nagarkar Portfolio",
  authors: [{ name: contact.name }],
  creator: contact.name,
  publisher: contact.name,
  keywords: ["Software Development", "AI", "Generative AI", "Full-Stack Development", "React", "TypeScript", "Python", "FastAPI", "Node.js", "Machine Learning", "IoT", "Robotics"],
  alternates: { canonical: absoluteUrl("/") },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: "Mohit Nagarkar Portfolio",
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e6",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.name,
    jobTitle: contact.role,
    ...(siteUrl ? { url: absoluteUrl("/") } : {}),
    sameAs: [contact.github, contact.linkedin],
  };

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
        <Navigation />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
