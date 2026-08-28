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
  status?: "placeholder" | "in-progress" | "live" | "archived";
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
    shortDescription: "A full-stack digital agreement workflow for creating, signing, storing, and tracking agreements.",
    description: "A full-stack digital agreement platform for agreement creation, digital signing, generated PDFs, document storage, and audit metadata.",
    category: "Full-Stack / Security",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "bcrypt", "Google OAuth", "RBAC", "PDFKit", "SendGrid", "Mailgun", "Resend"],
    featuredTechnologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "PDFKit"],
    liveUrl: "https://d-aagreement.vercel.app/",
    highlights: ["End-to-end agreement creation", "Digital signing", "Generated signed PDFs", "IP capture and timestamps", "Audit metadata"],
    featured: true,
  },
  {
    slug: "shetisakha",
    title: "ShetiSakha",
    fullTitle: "ShetiSakha — Agri-Bot + Android App",
    shortDescription: "An agriculture automation system combining a mobile-controlled Agri-Bot with an Android application.",
    description: "The system supports seeding, sprinkling, and ploughing, with manual control, automatic path-following, path recording and playback, draw-lane navigation, and soil monitoring.",
    category: "Robotics / Embedded / Android",
    technologies: ["Java", "Android", "Bluetooth (HC-05)", "Embedded Systems", "Robotics", "Sensors", "Motor Control", "Path Memorizing Algorithm"],
    featuredTechnologies: ["Java", "Android", "Bluetooth", "Robotics"],
    highlights: ["Manual robot control", "Automatic/path-following mode", "Path recording and playback", "Draw-lane navigation", "Soil monitoring"],
  },
  {
    slug: "green-model-advisor",
    title: "Green Model Advisor",
    fullTitle: "Green Model Advisor — Low-Carbon AI Optimization Platform",
    shortDescription: "An LLM orchestration platform that optimizes model selection for performance, cost, energy, and carbon efficiency.",
    description: "A full-stack LLM orchestration platform that tracks CO₂ emissions across available AI models and switches routes based on prompt complexity, with a benchmarking dashboard for energy metrics.",
    category: "AI / Sustainability",
    technologies: ["React", "FastAPI", "LLMs", "AI Model Orchestration", "Real-Time CO₂ Tracking", "Energy Benchmarking"],
    featuredTechnologies: ["React", "FastAPI", "LLMs", "AI Orchestration"],
    highlights: ["Multi-model LLM orchestration", "Prompt-complexity-based model switching", "Real-time CO₂ tracking", "Energy benchmarking", "Up to 25% reduction in per-task carbon output and inference energy consumption"],
  },
  {
    slug: "neuralixai",
    title: "NeuralixAI",
    fullTitle: "NeuralixAI — AI-Driven Learning Platform",
    shortDescription: "An AI-powered career and learning platform that generates personalized LLM-based learning paths.",
    description: "A career and learning platform that generates personalized learning paths based on a user's skills and career goals, with skill tracking and a FastAPI REST backend.",
    category: "AI / EdTech",
    technologies: ["FastAPI", "React", "JavaScript (ES6+)", "REST APIs", "LLMs"],
    featuredTechnologies: ["FastAPI", "React", "REST APIs", "LLMs"],
    highlights: ["Personalized LLM learning paths", "Skill tracking across 4–7 domains", "12 beta users", "Recommendation response times under 800 ms", "FastAPI REST backend"],
  },
  {
    slug: "intelli-climate",
    title: "Intelli Climate",
    fullTitle: "Intelli Climate — IoT Environmental Monitoring & AI Advisory System",
    shortDescription: "An IoT environmental monitoring system with real-time sensor data, a web dashboard, and AI-based advisory.",
    description: "An IoT-based system collecting temperature, humidity, and soil-moisture data through NodeMCU/ESP8266 sensors, sending it to a web dashboard for live monitoring and recommendations.",
    category: "IoT / AI / Environmental",
    technologies: ["NodeMCU / ESP8266", "DHT11", "Soil Moisture Sensor", "IoT", "Node.js", "React", "AI-based Advisory", "Real-Time Web Dashboard"],
    featuredTechnologies: ["NodeMCU / ESP8266", "DHT11", "Node.js", "React", "AI Advisory"],
    highlights: ["Real-time environmental sensing", "NodeMCU/ESP8266 data collection", "Web dashboard", "AI-based advisory", "Sensor-to-dashboard architecture"],
    architecture: ["Sensors", "NodeMCU / ESP8266", "Node.js Backend", "React Dashboard", "AI Advisory"],
  },
];
