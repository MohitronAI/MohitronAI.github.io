"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const activeProject = projects[activeIndex];
  const reducedMotion = useReducedMotion();

  const navigate = useCallback((step: number) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT", "A", "BUTTON"].includes(target.tagName)) return;
      const key = event.key.toLowerCase();
      if (key === "a" || event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(-1);
      }
      if (key === "d" || event.key === "ArrowRight") {
        event.preventDefault();
        navigate(1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return (
    <section id="work" className="projects-section site-container" aria-labelledby="work-heading">
      <div className="projects-intro">
        <div>
          <p className="section-label"><span>01</span> SELECTED WORK</p>
          <h2 id="work-heading">Things I&apos;ve built<span>.</span></h2>
        </div>
        <p className="section-note">A collection of products, experiments, and systems.</p>
      </div>
      <div className="explorer" onPointerDown={(event) => { pointerStart.current = { x: event.clientX, y: event.clientY }; }} onPointerCancel={() => { pointerStart.current = null; }} onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distanceX = event.clientX - pointerStart.current.x;
        const distanceY = event.clientY - pointerStart.current.y;
        if (Math.abs(distanceX) > 55 && Math.abs(distanceX) > Math.abs(distanceY)) navigate(distanceX < 0 ? 1 : -1);
        pointerStart.current = null;
      }}>
        <div className="explorer-topline">
          <span>PROJECT EXPLORER</span>
          <span className="explorer-counter"><strong>{String(activeIndex + 1).padStart(2, "0")}</strong> / {String(projects.length).padStart(2, "0")}</span>
        </div>
        <nav className="project-index" aria-label="Project selection">
          {projects.map((project, index) => (
            <button className={index === activeIndex ? "is-active" : ""} key={project.slug} onClick={() => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }} aria-label={`Show project ${index + 1}: ${project.title}`} aria-current={index === activeIndex ? "true" : undefined}>
              <span>0{index + 1}</span><i>{project.title}</i>
            </button>
          ))}
        </nav>
        <p className="sr-only" aria-live="polite">Project {activeIndex + 1} of {projects.length}: {activeProject.title}</p>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.article className="active-project" key={activeProject.slug} custom={direction} initial={reducedMotion ? false : { opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: direction * -28 }} transition={{ duration: reducedMotion ? 0 : 0.3, ease: "easeOut" }} aria-label={`Project ${activeIndex + 1} of ${projects.length}`}>
            <div className="active-project-copy">
              <p className="project-category">{activeProject.category}</p>
              <h3>{activeProject.title}</h3>
              <p className="project-description">{activeProject.shortDescription}</p>
              <p className="project-tech">{activeProject.featuredTechnologies.join(" · ")}</p>
              <div className="project-links">
                {activeProject.slug === "dagreement" && <Link href="/projects/dagreement">Read case study <span aria-hidden="true">↗</span></Link>}
                {activeProject.slug === "neuralixai" && <Link href="/projects/neuralixai">Read case study <span aria-hidden="true">↗</span></Link>}
                {activeProject.slug === "green-model-advisor" && <Link href="/projects/green-model-advisor">Read case study <span aria-hidden="true">↗</span></Link>}
                {activeProject.liveUrl && <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer">View Live Demo <span aria-hidden="true">↗</span></a>}
                {activeProject.githubUrl && <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
            <ProjectVisual project={activeProject} index={activeIndex} />
          </motion.article>
        </AnimatePresence>
        <div className="explorer-controls">
          <button onClick={() => navigate(-1)} aria-label="Show previous project"><span aria-hidden="true">←</span> A <small>PREVIOUS</small></button>
          <span className="swipe-hint">SWIPE TO EXPLORE</span>
          <button onClick={() => navigate(1)} aria-label="Show next project"><small>NEXT</small> D <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  );
}
