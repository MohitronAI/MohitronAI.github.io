import { projects } from "./projects";

export type ProofPoint = {
  id: string;
  value: string;
  label: string;
  context: string;
  accessibleLabel: string;
};

export type Certification = {
  title: string;
  provider: string;
  url: string;
};

export const proofPoints: ProofPoint[] = [
  {
    id: "project-count",
    value: String(projects.length),
    label: "projects in this portfolio",
    context: "Project records shown across software, AI, IoT, and robotics.",
    accessibleLabel: `${projects.length} project records currently shown in this portfolio.`,
  },
];

export const certification: Certification = {
  title: "DevOps Engineering with AI: Planning to Production",
  provider: "GeeksforGeeks",
  url: "https://media.geeksforgeeks.org/courses/certificates/674f970d509b8f4478b79a28ef0be590.pdf",
};
