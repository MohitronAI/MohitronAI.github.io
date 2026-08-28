"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills-section site-container" aria-labelledby="skills-heading">
      <motion.div className="skills-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
        <p className="section-label"><span>04</span> ENGINEERING STACK</p>
        <h2 id="skills-heading">Technologies behind the work<span>.</span></h2>
      </motion.div>
      <div className="skill-list">
        {skillCategories.map((category, index) => (
          <motion.article className="skill-category" key={category.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
            <div className="skill-category-heading"><span>{category.number}</span><h3>{category.title}</h3></div>
            <ul aria-label={`${category.title} technologies`}>
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
