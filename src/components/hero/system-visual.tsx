"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { x: "15%", y: "29%", label: "01" },
  { x: "38%", y: "17%", label: "02" },
  { x: "61%", y: "34%", label: "03" },
  { x: "81%", y: "22%", label: "04" },
  { x: "29%", y: "64%", label: "05" },
  { x: "55%", y: "75%", label: "06" },
  { x: "78%", y: "63%", label: "07" },
];

export function SystemVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="system-visual" aria-label="Abstract diagram of an intelligent system" role="img">
      <div className="visual-topline"><span>LIVE SYSTEM / 001</span><span>● ONLINE</span></div>
      <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M15 29 L38 17 L61 34 L81 22 M15 29 L29 64 L55 75 L78 63 L61 34 M29 64 L61 34 M55 75 L81 22" />
      </svg>
      {nodes.map((node, index) => (
        <motion.div key={node.label} className={`system-node node-${index + 1}`} style={{ left: node.x, top: node.y }} initial={reducedMotion ? false : { opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reducedMotion ? 0 : 0.8 + index * 0.1, duration: reducedMotion ? 0 : 0.5 }}>
          <span className="node-core" /><span className="node-label">{node.label}</span>
        </motion.div>
      ))}
      <motion.div className="system-orbit" animate={reducedMotion ? undefined : { rotate: 360 }} transition={reducedMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }} />
      <div className="visual-readout"><span>INTELLIGENCE / FLOW</span><strong>0x7F 3A 91</strong></div>
    </div>
  );
}
