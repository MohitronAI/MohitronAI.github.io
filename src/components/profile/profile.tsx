"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";

export function Profile() {
  return (
    <section className="profile-section site-container" aria-labelledby="profile-heading">
      <motion.div id="about" className="profile-heading anchor-target" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
        <p className="section-label">DEVELOPER PROFILE</p>
        <h2 id="profile-heading">{profile.headline}</h2>
        <p className="profile-introduction">{profile.introduction}</p>
      </motion.div>
      <div className="profile-grid">
        <motion.div className="profile-philosophy" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <p className="detail-label">BUILDING PHILOSOPHY</p>
          <h3>Building rather than just learning.</h3>
          <p>{profile.philosophy}</p>
        </motion.div>
        <motion.div className="profile-focus" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.16 }}>
          <p className="detail-label">AREAS OF FOCUS</p>
          <ul>{profile.focus.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}</li>)}</ul>
        </motion.div>
      </div>
      <div className="profile-footer">
        <div><p className="detail-label">CURRENTLY</p><p>{profile.education}<br />Graduating {profile.graduation}</p></div>
        <div><p className="detail-label">BASED IN</p><p>{profile.location}</p></div>
        <div className="profile-direction"><p className="detail-label">DIRECTION</p><p>{profile.direction}</p></div>
      </div>
    </section>
  );
}
