export type Project = {
  slug: string;
  title: string;
  fullTitle: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  featuredTechnologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: string;
  year?: string;
  highlights: string[];
  architecture?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dagreement",
    title: "DAgreement",
    fullTitle: "DAgreement — Digital Consent & Agreement Tracker",
    shortDescription: "Agreement workflow prototype with frontend and backend source; end-to-end operation is not verified.",
    description: "The repository contains React/TypeScript frontend and Node.js/Express API source for agreement creation, sending, signing, rejection, and PDF routes. The integrated workflow has not been independently tested.",
    category: "Full-Stack / Security",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "bcrypt", "Google OAuth", "PDFKit"],
    featuredTechnologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "PDFKit"],
    liveUrl: "https://d-aagreement.vercel.app/",
    githubUrl: "https://github.com/MohitronAI/DAgreement",
    status: "Prototype · end-to-end operation unverified",
    highlights: ["Frontend and API workflow source present", "Create/send/sign/reject routes documented in code", "PDF generation and email service code present", "End-to-end operation not independently tested"],
    featured: true,
  },
  {
    slug: "shetisakha",
    title: "ShetiSakha",
    fullTitle: "ShetiSakha — Agri-Bot + Android App",
    shortDescription: "Team Android app source for an agribot: manual Bluetooth controls, drawn paths, and saved routes. Hardware operation is unverified.",
    description: "The Android repository contains HC-05 Bluetooth SPP controls, grid/freehand path UI, and SQLite path storage. Arduino firmware and soil-monitoring implementation are not included, so robot behavior is unverified.",
    category: "Robotics / Embedded / Android",
    technologies: ["Java", "Android SDK", "Bluetooth SPP / HC-05", "Android Views and XML", "SQLite", "Gradle", "OpenWeatherMap API"],
    featuredTechnologies: ["Java", "Android", "Bluetooth SPP", "SQLite"],
    status: "Team project · individual role not documented",
    githubUrl: "https://github.com/atharvaHJoshi/ShetiSakha-Final_Year_Project_GPN",
    highlights: ["Manual Bluetooth command interface in app source", "Grid and freehand path-planning UI", "Saved path records via SQLite", "Robot hardware behavior unverified"],
  },
  {
    slug: "green-model-advisor",
    title: "Green Model Advisor",
    fullTitle: "Green Model Advisor — AI Model Selection & Carbon Estimation",
    shortDescription: "Full-stack prototype for prompt-based model selection and request carbon estimates; live operation and measurement accuracy are unverified.",
    description: "The linked repository contains a React client and FastAPI service with prompt-based model selection, provider/simulation paths, and CodeCarbon or fallback estimates. Deployment and measurement accuracy are unverified.",
    category: "AI / Sustainability",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "React", "Vite", "CodeCarbon", "Google Generative AI", "OpenRouter API", "NVIDIA NIM API"],
    featuredTechnologies: ["Python", "FastAPI", "React", "CodeCarbon"],
    status: "Source available · personal contribution to confirm",
    githubUrl: "https://github.com/cokefloat07/final-techM-EDAI",
    highlights: ["Prompt-feature model selection code", "Carbon estimate endpoint with CodeCarbon/fallback paths", "Simulation and provider API paths", "React client with chat and dashboard views"],
  },
  {
    slug: "neuralixai",
    title: "NeuralixAI",
    fullTitle: "NeuralixAI — AI-Driven Learning Platform",
    shortDescription: "Learning-path product described in the portfolio; implementation status is unverified here.",
    description: "The current project notes describe a career and learning platform with personalized paths, skill tracking, and a FastAPI REST backend. This repository does not independently verify the implementation.",
    category: "AI / EdTech",
    technologies: ["FastAPI", "React", "JavaScript (ES6+)", "REST APIs", "LLMs"],
    featuredTechnologies: ["FastAPI", "React", "REST APIs", "LLMs"],
    status: "Implementation status unverified",
    highlights: ["Personalized learning paths described", "Skill tracking described", "FastAPI REST backend listed in project notes"],
  },
  {
    slug: "intelli-climate",
    title: "Intelli Climate",
    fullTitle: "Intelli Climate — IoT Environmental Monitoring & AI Reports",
    shortDescription: "Repository includes ESP8266 sensor publishing, Firebase data, a React dashboard, and Gemini reports; hardware and live operation are unverified.",
    description: "The source reads DHT11 temperature/humidity and analog soil moisture, writes latest/history to Firebase, and provides dashboard charts, a health score, Gemini reports, and PDF export. Device and hosted operation are not independently tested.",
    category: "IoT / AI / Environmental",
    technologies: ["ESP8266 / NodeMCU", "DHT11", "Analog Soil Moisture Sensor", "Firebase Realtime Database", "Node.js", "Express", "React", "Chart.js", "Google Gemini API", "jsPDF"],
    featuredTechnologies: ["ESP8266 / NodeMCU", "Firebase", "React", "Gemini API"],
    highlights: ["DHT11 and analog soil readings in firmware", "Firebase latest and history writes", "React dashboard charts and health score", "Gemini report generation and PDF export", "No automated test suite in repository"],
    architecture: ["DHT11 + soil sensor", "ESP8266", "Firebase Realtime Database", "React Dashboard", "Express + Gemini Reports"],
    status: "Implementation source present · live operation unverified",
  },
];
