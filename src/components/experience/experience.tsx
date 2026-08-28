"use client";

import { motion } from "motion/react";
import { experience, leadership } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="experience-section site-container" aria-labelledby="experience-heading">
      <motion.div className="experience-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
        <p className="section-label">EXPERIENCE</p>
        <h2 id="experience-heading">Where I&apos;ve put the work into practice<span>.</span></h2>
      </motion.div>
      <div className="experience-grid">
        <div className="experience-column">
          <p className="detail-label">PROFESSIONAL EXPERIENCE</p>
          <ul className="experience-list">
            {experience.map((entry) => (
              <li key={entry.id}>
                <span className="experience-index">01</span>
                <div><h3>{entry.company}</h3><p>{entry.role}{entry.period ? ` · ${entry.period}` : ""}</p>{entry.description && <p className="experience-description">{entry.description}</p>}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="leadership-column">
          <p className="detail-label">LEADERSHIP</p>
          <ol className="leadership-list">
            {leadership.map((entry) => (
              <li key={entry.id}>
                <span>{entry.period}</span>
                <div><h3>{entry.role}</h3><p>{entry.organization}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
