"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

const caseStudySlugs = new Set(caseStudies.map(({ slug }) => slug));

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const focusProject = (index: number) => {
    const buttons = gridRef.current?.querySelectorAll<HTMLButtonElement>(".project-card-toggle");
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);
    buttons?.[nextIndex]?.focus();
  };

  return (
    <section id="projects" className="projects-section site-container anchor-target" aria-labelledby="projects-heading">
      <div className="section-heading projects-heading">
        <div>
          <p className="section-label">SELECTED WORK <span>01 — 05</span></p>
          <h2 id="projects-heading">Built across<br /><em>disciplines.</em></h2>
        </div>
        <p className="section-note">Software, connected systems, and experiments shaped by real problems.</p>
      </div>

      <div
        className="project-grid"
        ref={gridRef}
        onPointerDown={(event) => {
          if (event.pointerType === "touch") {
            pointerStart.current = { x: event.clientX, y: event.clientY };
          }
        }}
        onPointerCancel={() => { pointerStart.current = null; }}
        onPointerUp={(event) => {
          if (!pointerStart.current) return;
          const distanceX = event.clientX - pointerStart.current.x;
          const distanceY = event.clientY - pointerStart.current.y;
          pointerStart.current = null;
          if (Math.abs(distanceX) > 70 && Math.abs(distanceX) > Math.abs(distanceY)) {
            focusProject(activeIndex + (distanceX < 0 ? 1 : -1));
          }
        }}
      >
        {projects.map((project, index) => {
          const expanded = expandedIndex === index;
          const caseStudyHref = caseStudySlugs.has(project.slug)
            ? `/projects/${project.slug}`
            : undefined;

          return (
            <article
              className={`project-card project-card--${index + 1}${activeIndex === index ? " is-active" : ""}${expanded ? " is-expanded" : ""}`}
              key={project.slug}
            >
              <button
                className="project-card-toggle"
                type="button"
                aria-expanded={expanded}
                aria-controls={`project-details-${project.slug}`}
                onFocus={() => setActiveIndex(index)}
                onClick={() => {
                  setActiveIndex(index);
                  setExpandedIndex(expanded ? null : index);
                }}
                onKeyDown={(event) => {
                  const previous = event.key === "ArrowLeft" || event.key === "ArrowUp";
                  const next = event.key === "ArrowRight" || event.key === "ArrowDown";
                  if (previous || next) {
                    event.preventDefault();
                    focusProject(index + (previous ? -1 : 1));
                  }
                }}
              >
                <div className="project-card-visual">
                  <ProjectVisual project={project} index={index} />
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-card-copy">
                  <p className="project-category">{project.category}</p>
                  <p className="project-status">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <div className="project-tech" aria-label="Featured technologies">
                    {project.featuredTechnologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <span className="project-expand-label">
                    {expanded ? "Close details" : "Explore project"}
                    <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                  </span>
                </div>
              </button>

              {expanded && (
                <div className="project-card-details" id={`project-details-${project.slug}`}>
                  <ul aria-label={`${project.title} highlights`}>
                    {project.highlights.slice(0, 4).map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="project-links">
                    {caseStudyHref && <Link href={caseStudyHref}>Read case study <span aria-hidden="true">↗</span></Link>}
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project <span aria-hidden="true">↗</span></a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <p className="project-keyboard-hint"><kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd> move between project cards <span>·</span> <kbd>Enter</kbd> explore a project</p>
    </section>
  );
}
