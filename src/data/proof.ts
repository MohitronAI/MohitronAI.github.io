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
    id: "carbon-reduction",
    value: "Up to 25%",
    label: "reported reduction",
    context: "Green Model Advisor · per-task carbon output / inference energy",
    accessibleLabel: "Up to 25 percent, reported reduction in per-task carbon output and inference energy.",
  },
  {
    id: "beta-users",
    value: "12",
    label: "beta users served",
    context: "NeuralixAI",
    accessibleLabel: "12 beta users served by NeuralixAI.",
  },
  {
    id: "response-time",
    value: "<800 ms",
    label: "recommendation response time",
    context: "NeuralixAI",
    accessibleLabel: "Less than 800 milliseconds recommendation response time for NeuralixAI.",
  },
  {
    id: "project-count",
    value: "5",
    label: "cross-domain projects",
    context: "Portfolio",
    accessibleLabel: "5 cross-domain projects currently showcased in the portfolio.",
  },
];

export const certification: Certification = {
  title: "DevOps Engineering with AI: Planning to Production",
  provider: "GeeksforGeeks",
  url: "https://media.geeksforgeeks.org/courses/certificates/674f970d509b8f4478b79a28ef0be590.pdf",
};
