import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/writing";

export function Writing() {
  return (
    <section id="writing" className="writing-section site-container anchor-target" aria-labelledby="writing-heading">
      <div className="section-heading section-heading--compact">
        <div>
          <p className="section-label">06 / NOTES & PUBLICATIONS</p>
          <h2 id="writing-heading">Ideas beyond<br /><em>the interface.</em></h2>
        </div>
        <p className="section-note">Selected articles published in college magazines.</p>
      </div>
      <div className="writing-grid">
        {articles.map((article, index) => (
          <article className={`writing-card writing-card--${index + 1}`} key={article.slug}>
            <Link className="writing-card-art" href={`/writing/${article.slug}`} aria-label={`Read ${article.displayTitle}`}>
              {article.image ? (
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={1600}
                  height={658}
                  sizes="(max-width: 760px) 90vw, 45vw"
                  unoptimized
                />
              ) : (
                <span className="writing-art-type" aria-hidden="true">
                  <small>{article.publication.split("·")[0].trim()}</small>
                  <strong>BCI<span>+</span>AI</strong>
                  <i>HUMAN ↔ MACHINE</i>
                </span>
              )}
              <span className="writing-art-index">ARTICLE 0{index + 1}</span>
            </Link>
            <div className="writing-card-copy">
              <p className="detail-label">{article.publicationHeading ?? "ARTICLE"}</p>
              <h3>{article.displayTitle}</h3>
              <p className="writing-subtitle">{article.subtitle ?? article.seoDescription}</p>
              <p className="writing-publication">{article.publication}</p>
              <Link className="text-link" href={`/writing/${article.slug}`}>Read article <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
