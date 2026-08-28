import type { Project } from "@/data/projects";

export function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.slug === "green-model-advisor") {
    return (
      <div className="project-visual project-visual--green" role="img" aria-label="Conceptual Green Model Advisor map showing request routing, carbon tracking, and energy benchmarking">
        <div className="green-visual-topline"><span>CONCEPTUAL SYSTEM MAP</span><strong>CO₂ / ENERGY</strong></div>
        <svg className="green-visual-map" viewBox="0 0 720 320" aria-hidden="true">
          <path d="M84 160H636M236 160V86M236 160V234M484 160V86M484 160V234" />
          <circle cx="84" cy="160" r="20" />
          <circle cx="236" cy="86" r="20" />
          <circle cx="236" cy="234" r="20" />
          <circle cx="484" cy="86" r="20" />
          <circle cx="484" cy="234" r="20" />
          <circle cx="636" cy="160" r="20" />
          <text x="84" y="207">REQUEST</text>
          <text x="236" y="51">ROUTE</text>
          <text x="236" y="279">ENERGY</text>
          <text x="484" y="51">CARBON</text>
          <text x="484" y="279">BENCHMARK</text>
          <text x="636" y="207">TRACE</text>
        </svg>
        <div className="green-visual-footer"><span>OBSERVE</span><span>COMPARE</span><span>EXPLAIN</span></div>
      </div>
    );
  }

  const visualLabels = ["DOCUMENT FLOW", "FIELD NAVIGATION", "MODEL ENERGY", "LEARNING PATHS", "SENSOR PIPELINE"];
  return (
    <div className={`project-visual project-visual--${index + 1}`} aria-label={`${project.title} visual placeholder`} role="img">
      <div className="placeholder-window">
        <div className="window-bar"><span /><span /><span /><small>PREVIEW / PLACEHOLDER</small></div>
        <div className="window-content">
          <div className="placeholder-kicker">BUILD SURFACE / 0{index + 1}</div>
          <div className="placeholder-title">{visualLabels[index]}</div>
          <div className="placeholder-lines"><i /><i /><i /></div>
          <div className="placeholder-blocks"><b /><b /><b /></div>
        </div>
      </div>
      <span className="visual-corner visual-corner--top" />
      <span className="visual-corner visual-corner--bottom" />
    </div>
  );
}
