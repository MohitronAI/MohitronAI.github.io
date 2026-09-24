"use client";

import { motion } from "motion/react";
import { certification, proofPoints } from "@/data/proof";

export function Proof() {
  return (
    <section id="proof" className="proof-section site-container" aria-labelledby="proof-heading">
      <motion.div className="proof-intro" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
        <p className="section-label">PROOF OF WORK</p>
        <h2 id="proof-heading">A few signals from the work<span>.</span></h2>
      </motion.div>
      <div className="proof-grid">
        {proofPoints.map((point, index) => (
          <motion.article className="proof-point" key={point.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.06 }}>
            <p className="proof-value" aria-label={point.accessibleLabel}>{point.value}</p>
            <h3>{point.label}</h3>
            <p className="proof-context">{point.context}</p>
          </motion.article>
        ))}
      </div>
      <motion.div className="certification" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: 0.18 }}>
        <div><p className="detail-label">CERTIFICATION</p><h3>{certification.title}</h3><p>{certification.provider}</p></div>
        <a href={certification.url} target="_blank" rel="noopener noreferrer">View Certificate <span aria-hidden="true">↗</span></a>
      </motion.div>
    </section>
  );
}
