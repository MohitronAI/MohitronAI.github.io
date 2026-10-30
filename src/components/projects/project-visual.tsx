import type { Project } from "@/data/projects";

type VisualNode = { x: number; y: number; label: string };
type ProjectDiagram = {
  label: string;
  overline: string;
  footer: string[];
  paths: string[];
  nodes: VisualNode[];
};

const diagrams: Record<string, ProjectDiagram> = {
  dagreement: {
    label: "Conceptual agreement workflow illustration showing a document moving through draft, signature, and audit steps",
    overline: "AGREEMENT / LIFECYCLE",
    footer: ["DRAFT", "SIGN", "AUDIT"],
    paths: ["M105 115 H650", "M105 115 C220 45 525 185 650 115"],
    nodes: [
      { x: 105, y: 115, label: "DRAFT" },
      { x: 285, y: 115, label: "REVIEW" },
      { x: 465, y: 115, label: "SIGN" },
      { x: 650, y: 115, label: "AUDIT" },
    ],
  },
  shetisakha: {
    label: "Conceptual field navigation illustration for the ShetiSakha agriculture robot",
    overline: "FIELD / NAVIGATION",
    footer: ["SENSE", "TRAVERSE", "CULTIVATE"],
    paths: ["M105 55 H650 V125 H105 V195 H650", "M105 55 V195 M285 55 V195 M465 55 V195"],
    nodes: [
      { x: 105, y: 55, label: "SENSE" },
      { x: 650, y: 55, label: "RECORD" },
      { x: 105, y: 125, label: "ROUTE" },
      { x: 650, y: 125, label: "REPLAY" },
    ],
  },
  "green-model-advisor": {
    label: "Conceptual Green Model Advisor map showing request routing, carbon tracking, and energy benchmarking",
    overline: "MODEL / EFFICIENCY",
    footer: ["ROUTE", "MEASURE", "COMPARE"],
    paths: ["M105 125 H285 L465 55 H650", "M285 125 L465 195 H650", "M465 55 V195"],
    nodes: [
      { x: 105, y: 125, label: "PROMPT" },
      { x: 285, y: 125, label: "ROUTE" },
      { x: 465, y: 55, label: "ENERGY" },
      { x: 465, y: 195, label: "CARBON" },
      { x: 650, y: 125, label: "TRACE" },
    ],
  },
  neuralixai: {
    label: "Conceptual learning path illustration showing skills, goals, and recommendations",
    overline: "LEARNING / PATH",
    footer: ["ASSESS", "CONNECT", "GROW"],
    paths: ["M105 180 L285 125 L465 65 L650 125", "M105 180 L465 195 L650 125"],
    nodes: [
      { x: 105, y: 180, label: "PROFILE" },
      { x: 285, y: 125, label: "SKILLS" },
      { x: 465, y: 65, label: "GOAL" },
      { x: 650, y: 125, label: "PLAN" },
    ],
  },
  "intelli-climate": {
    label: "Conceptual sensor pipeline illustration for Intelli Climate environmental monitoring",
    overline: "ENVIRONMENT / SIGNAL",
    footer: ["SENSE", "INTERPRET", "ADVISE"],
    paths: ["M105 55 H285 L465 55 H650", "M285 125 H465 L650 125", "M105 195 H285 L465 195 H650", "M285 55 V195"],
    nodes: [
      { x: 105, y: 55, label: "TEMP" },
      { x: 105, y: 195, label: "SOIL" },
      { x: 285, y: 125, label: "EDGE" },
      { x: 465, y: 55, label: "HUMID" },
      { x: 465, y: 195, label: "SIGNAL" },
      { x: 650, y: 125, label: "ADVISE" },
    ],
  },
};

export function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const diagram = diagrams[project.slug];

  return (
    <div
      className={`project-visual project-visual--${index + 1}`}
      role="img"
      aria-label={diagram.label}
    >
      <div className="project-visual-heading">
        <span>{diagram.overline}</span>
        <span>0{index + 1} / 05</span>
      </div>
      <svg className="project-visual-map" viewBox="0 0 760 250" aria-hidden="true">
        {diagram.paths.map((path, pathIndex) => (
          <path className={`visual-path${pathIndex > 0 ? " visual-path--secondary" : ""}`} d={path} key={path} />
        ))}
        {diagram.nodes.map((node, nodeIndex) => (
          <g className={`visual-node${nodeIndex === 1 ? " visual-node--accent" : ""}`} key={`${node.x}-${node.y}-${node.label}`}>
            <circle cx={node.x} cy={node.y} r={nodeIndex === 1 ? 31 : 25} />
            <circle className="visual-node-core" cx={node.x} cy={node.y} r="5" />
            <text x={node.x} y={node.y + 44}>{node.label}</text>
          </g>
        ))}
        <text className="visual-map-caption" x="380" y="226">{project.title.toUpperCase()}</text>
      </svg>
      <div className="project-visual-footer">
        {diagram.footer.map((step, stepIndex) => (
          <span key={step}><b>0{stepIndex + 1}</b> {step}</span>
        ))}
      </div>
    </div>
  );
}
