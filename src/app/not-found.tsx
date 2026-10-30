import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Mohit Nagarkar",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <main className="site-container" style={{ paddingBlock: "clamp(96px, 16vh, 180px)" }}>
      <p className="section-label">404 / Not Found</p>
      <h1>That page isn&apos;t here.</h1>
      <Link className="text-link" href="/">Return to the homepage →</Link>
    </main>
  );
}
