"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { articles } from "@/data/writing";

export function Writing() {
  return (
    <section id="writing" className="writing-section site-container" aria-labelledby="writing-heading">
      <motion.div className="writing-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
        <p className="section-label">WRITING &amp; PUBLICATIONS</p>
        <div>
          <h2 id="writing-heading">Ideas beyond the code<span>.</span></h2>
          <p>Selected articles from college publications.</p>
        </div>
      </motion.div>
      <div className="writing-grid">
        {articles.map((article, index) => (
          <motion.article className="writing-card" key={article.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.08 }}>
            <p className="detail-label">{article.publicationHeading ?? "ARTICLE 0" + (index + 1)}</p>
            <h3>{article.displayTitle}</h3>
            {article.subtitle && <p className="writing-subtitle">{article.subtitle}</p>}
            <p className="writing-publication">{article.publication}</p>
            <Link href={`/writing/${article.slug}`}>Read article <span aria-hidden="true">→</span></Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
