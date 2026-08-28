export type Experience = {
  id: string;
  company: string;
  role: string;
  period?: string;
  description?: string;
  technologies?: string[];
};

export type LeadershipRole = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
};

export const experience: Experience[] = [
  {
    id: "maestro-intellect",
    company: "Maestro Intellect",
    role: "Full-Stack Developer",
  },
  {
    id: "runonweb",
    company: "RunOnWeb",
    role: "Co-Founder",
    period: "2026–Present",
    description:
      "Co-founded an active digital solutions and freelancing venture helping businesses adopt technology and strengthen their digital presence. Focused on building websites, applications, and custom software tailored to client requirements.",
  },
];

export const leadership: LeadershipRole[] = [
  { id: "ecesa-vice-president", role: "Vice President", organization: "ECESA", period: "2026–2027" },
  { id: "ecesa-finance-head", role: "Finance Head", organization: "ECESA", period: "2024–2025" },
  { id: "departmental-forum-finance-head", role: "Finance Head", organization: "Departmental Forum, GP Nagpur", period: "2022–2024" },
];
