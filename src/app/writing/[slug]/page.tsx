import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/writing";
import { absoluteUrl } from "@/lib/site-config";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found — Mohit" };
  const title = `${article.displayTitle} — Mohit Nagarkar`;
  return {
    title,
    description: article.seoDescription,
    alternates: { canonical: absoluteUrl(`/writing/${article.slug}/`) },
    openGraph: { title, description: article.seoDescription, type: "article", siteName: "Mohit Nagarkar Portfolio", url: absoluteUrl(`/writing/${article.slug}/`) },
    twitter: { card: "summary", title, description: article.seoDescription },
  };
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const index = articles.findIndex((item) => item.slug === article.slug);
  const previous = articles[index - 1];
  const next = articles[index + 1];

  return (
    <main id="main-content" className="writing-page">
      <header className="case-study-header site-container">
        <Link className="case-study-back" href="/#writing"><span aria-hidden="true">←</span> Back to Writing</Link>
        <span className="detail-page-label">WRITING / {article.publication}</span>
      </header>
      <article className="article-reading site-container">
        <header className="article-header">
          <p className="eyebrow"><span className="eyebrow-line" />{article.publicationHeading ?? "ARTICLE"}</p>
          <h1>{article.title}</h1>
          {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}
          <div className="article-meta"><span>{article.author}</span>{article.authorDetail && <span>{article.authorDetail}</span>}<span>{article.publication}</span></div>
        </header>
        <div className="article-content">
          {article.sections.map((section, sectionIndex) => (
            <section key={section.heading ?? sectionIndex} aria-labelledby={section.heading ? `article-heading-${sectionIndex}` : undefined}>
              {section.heading && <h2 id={`article-heading-${sectionIndex}`}>{section.heading}</h2>}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div key={paragraph}>
                  <p>{paragraph}</p>
                  {article.image?.afterParagraph === paragraphIndex + 1 && sectionIndex === 0 && (
                    <figure className="article-figure">
                      <Image src={article.image.src} alt={article.image.alt} width={1600} height={658} sizes="(max-width: 800px) 88vw, 1000px" unoptimized />
                    </figure>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
        <nav className="article-navigation" aria-label="Article navigation">
          <Link href="/#writing"><span aria-hidden="true">←</span> Back to Writing</Link>
          {previous && <Link href={`/writing/${previous.slug}`}><span aria-hidden="true">←</span> Previous article <strong>{previous.displayTitle}</strong></Link>}
          {next && <Link href={`/writing/${next.slug}`}>Next article <strong>{next.displayTitle}</strong> <span aria-hidden="true">→</span></Link>}
        </nav>
      </article>
    </main>
  );
}
