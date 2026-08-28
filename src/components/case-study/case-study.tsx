import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { CaseStudyDiagram } from "./case-study-diagrams";

export function CaseStudyView({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <main id="main-content" className="case-study-page">
      <header className="case-study-header site-container">
        <Link className="brand" href="/" aria-label="Mohit home">MOHIT<span className="brand-dot">.</span></Link>
        <Link className="case-study-back" href="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
      </header>

      <article className="case-study site-container">
        <header className="case-study-hero">
          <p className="eyebrow"><span className="eyebrow-line" />{caseStudy.eyebrow}</p>
          <h1>{caseStudy.title}<em>.</em></h1>
          <p className="case-study-summary">{caseStudy.summary}</p>
          <div className="case-study-facts" aria-label="Project facts">
            <div><span>TYPE</span><strong>{caseStudy.category}</strong></div>
            <div><span>STATUS</span><strong>{caseStudy.status}</strong></div>
            {caseStudy.liveUrl && (
              <div><span>LIVE URL</span><a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">{caseStudy.liveUrl}<b aria-hidden="true">↗</b></a></div>
            )}
            {caseStudy.githubUrl && (
              <div><span>GITHUB REFERENCE</span><a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">Source repository<b aria-hidden="true">↗</b></a></div>
            )}
          </div>
          <div className="case-study-stack">
            <span className="detail-label">STACK</span>
            <p>{caseStudy.technologies.join(" · ")}</p>
          </div>
        </header>

        <div className="case-study-sections">
          {caseStudy.sections.map((section) => (
            <section className={`case-study-section case-study-section--${section.layout}`} id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
              <div className="case-study-section-copy">
                <p className="detail-label">{section.label}</p>
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </div>
              {section.visual && section.visualTitle && section.visualDescription && (
                <CaseStudyDiagram kind={section.visual} title={section.visualTitle} description={section.visualDescription} />
              )}
            </section>
          ))}
        </div>

        <section className="case-study-limitations" aria-labelledby="limitations-heading">
          <div>
            <p className="detail-label">05 / LIMITATIONS &amp; STATUS</p>
            <h2 id="limitations-heading">What is verified.</h2>
          </div>
          <ul>
            {caseStudy.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
          </ul>
        </section>

        <footer className="case-study-footer">
          <Link href="/#work"><span aria-hidden="true">←</span> Selected work</Link>
          <Link href="/">Return home <span aria-hidden="true">↗</span></Link>
        </footer>
      </article>
    </main>
  );
}
