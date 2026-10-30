export type CaseStudyVisual =
  | "workflow"
  | "architecture"
  | "security"
  | "data-model"
  | "neural-blueprint"
  | "neural-workflow"
  | "ai-rag"
  | "skill-gap"
  | "neural-architecture"
  | "model-orchestration"
  | "carbon-energy"
  | "benchmarking"
  | "green-architecture"
  | "trade-offs";

export type CaseStudySectionLayout = "text-visual" | "text-only" | "full-visual";

export type CaseStudySection = {
  id: string;
  layout: CaseStudySectionLayout;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  visual?: CaseStudyVisual;
  visualTitle?: string;
  visualDescription?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: string;
  status: string;
  limitationsHeading?: string;
  liveUrl?: string;
  githubUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  technologies: string[];
  sections: CaseStudySection[];
  limitations: string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "dagreement",
    title: "DAgreement",
    eyebrow: "FULL-STACK / AGREEMENT WORKFLOW",
    summary:
      "A digital agreement prototype with frontend and backend source for create, send, sign, reject, and PDF workflows. End-to-end operation has not been independently tested.",
    category: "Full-Stack Web Application",
    status: "PROTOTYPE / API SOURCE PRESENT / E2E UNVERIFIED",
    limitationsHeading: "Known limitations",
    liveUrl: "https://d-aagreement.vercel.app/",
    githubUrl: "https://github.com/MohitronAI/DAgreement",
    seoTitle: "DAgreement — Digital Consent & Agreement Tracker | Mohit Nagarkar",
    seoDescription:
      "A digital agreement prototype with API workflow source; end-to-end operation is not verified.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Google OAuth",
      "PDFKit",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / OVERVIEW",
        title: "A digital consent and agreement management platform.",
        paragraphs: [
          "The linked repository contains a React/TypeScript client and Node.js/Express API source, including handlers for agreement creation, sending, signing, rejection, PDF generation, and email delivery. Source presence does not establish a successful production workflow. The repository history includes commits attributed to Mohit Nagarkar, but it does not define the full individual scope of that work.",
        ],
      },
      {
        id: "problem",
        layout: "text-only",
        label: "02 / THE PROBLEM",
        title: "Make agreement work easier to follow through.",
        paragraphs: [
          "The application source connects agreement creation and review with API routes for send, sign, and reject actions. The hosted service and complete user journey have not been independently exercised.",
        ],
      },
      {
        id: "workflow",
        layout: "text-visual",
        label: "03 / HOW IT WORKS",
        title: "From a draft to a traceable agreement.",
        paragraphs: [
          "The repository implements client pages and API handlers for a draft-to-signature flow. No automated test suite or successful end-to-end run is included, so these remain source-supported features rather than verified live behavior.",
        ],
        bullets: [
          "Agreement creation and recipient invitation",
          "Digital signing with IP capture and timestamps",
          "Signed PDF generation and document storage",
          "Audit records for sent, signed, and rejected actions",
        ],
        visual: "workflow",
        visualTitle: "Agreement lifecycle from creation to audit",
        visualDescription:
          "A four-step flow connects agreement creation, signer review and signing, signed PDF generation, and the audit record.",
      },
      {
        id: "architecture",
        layout: "full-visual",
        label: "04 / SYSTEM ARCHITECTURE",
        title: "A small, explicit full-stack boundary.",
        paragraphs: [
          "The repository includes a React/TypeScript frontend, Express API, PostgreSQL configuration, PDFKit service, and email-service code. Their complete production integration was not tested in this review.",
        ],
        bullets: [
          "React + TypeScript client",
          "Node.js + Express API",
          "PostgreSQL persistence",
          "PDFKit document generation",
          "Email delivery integration listed in the project notes",
        ],
        visual: "architecture",
        visualTitle: "Client, API, persistence, and delivery boundaries",
        visualDescription:
          "Four layers show the React and TypeScript client leading to the Node.js and Express API, PostgreSQL and PDFKit services, and email delivery integrations.",
      },
      {
        id: "security",
        layout: "text-visual",
        label: "05 / SECURITY",
        title: "Security is part of the agreement record.",
        paragraphs: [
          "Source includes JWT authentication, bcrypt, Google sign-in integration, signing metadata, and audit-related handlers. Security properties and end-to-end behavior have not been independently audited or tested here.",
        ],
        bullets: [
          "JWT authentication",
          "bcrypt password hashing",
          "Google OAuth sign-in",
          "Creator ownership checks",
          "IP capture and timestamps for signing activity",
          "Generated signed PDFs and audit events",
        ],
        visual: "security",
        visualTitle: "Identity, permissions, and evidence layers",
        visualDescription:
          "Concentric layers represent authentication, authorization, signing evidence, and the audit trail around an agreement.",
      },
      {
        id: "data-model",
        layout: "text-visual",
        label: "06 / DATA MODEL",
        title: "Records that keep the history connected.",
        paragraphs: [
          "The backend source includes database initialization and API handlers for user agreements, signatures, notifications, and document retrieval. Database behavior was not exercised against a configured service.",
        ],
        bullets: [
          "User → creates and accesses agreements",
          "Agreement → belongs to one creator and can have signatures and audit logs",
          "User → receives notifications",
          "Agreement-related records → relationship described in the project notes",
        ],
        visual: "data-model",
        visualTitle: "Core DAgreement records and relationships",
        visualDescription:
          "A relationship diagram connects User to Agreement, Agreement to Signer and Document, Document to Signature, and Agreement to Audit record.",
      },
      {
        id: "engineering",
        layout: "text-only",
        label: "07 / ENGINEERING",
        title: "Connect every boundary in the lifecycle.",
        paragraphs: [
          "The project notes identify the frontend, backend, database, email delivery, PDF generation, and deployment boundaries as part of the intended agreement lifecycle.",
          "The linked repository history includes commits attributed to Mohit Nagarkar, including the initial project commit and later changes. That history documents repository activity, not a complete feature-by-feature attribution.",
        ],
      },
      {
        id: "deployment",
        layout: "text-only",
        label: "08 / DEPLOYMENT",
        title: "A frontend link is listed; the workflow still needs its backend.",
        paragraphs: [
          "The frontend URL returned the DAgreement application shell. The backend health URL documented in the repository returned HTTP 404 during this review; this does not confirm that the end-to-end workflow is operational.",
        ],
      },
      {
        id: "result",
        layout: "text-only",
        label: "09 / RESULT",
        title: "A prototype scope with backend work remaining.",
        paragraphs: [
          "The source defines a full-stack agreement workflow and supporting handlers. The public frontend is reachable, but the backend health check returned 404 and no signing workflow was verified.",
        ],
      },
    ],
    limitations: [
      "The repository contains backend workflow code, but the documented backend health URL returned 404 and the full create-to-sign flow has not been independently verified.",
      "Full RBAC, rate limiting, refresh tokens, token revocation, recipient identity verification, secure signing tokens, and centralized error handling are not implemented.",
      "Signed PDFs are generated, stored separately, and accompanied by audit metadata; cryptographic signing, PDF locking, tamper-evident storage, version history, and hash verification are not implemented.",
      "PDF access requires additional protection, and automated testing and transactional safeguards can be expanded.",
    ],
  },
  {
    slug: "green-model-advisor",
    title: "Green Model Advisor",
    eyebrow: "AI / SUSTAINABILITY / MODEL SELECTION",
    summary:
      "A linked Python/FastAPI and React/Vite codebase for prompt-based model selection and carbon-estimate workflows. Runtime behavior and measurement accuracy have not been independently validated.",
    category: "AI / Sustainability",
    status: "SOURCE AVAILABLE / RUNTIME AND CONTRIBUTION DETAILS TO CONFIRM",
    limitationsHeading: "Evidence limits",
    githubUrl: "https://github.com/cokefloat07/final-techM-EDAI",
    seoTitle: "Green Model Advisor — AI Model Selection & Carbon Estimation | Mohit Nagarkar",
    seoDescription:
      "Repository-based review of Green Model Advisor: prompt-feature routing, model API paths, CodeCarbon/fallback estimates, and limits of available evidence.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "React",
      "Vite",
      "CodeCarbon",
      "Google Generative AI",
      "OpenRouter API",
      "NVIDIA NIM API",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / REPOSITORY SCOPE",
        title: "A source-backed prototype for model selection and estimates.",
        paragraphs: [
          "The linked repository README identifies the project as Green Model Advisor. Its source contains a FastAPI service and React client for model selection, inference/estimation, comparison, conversation history, and dashboard views.",
          "The repository history uses a generic Developer author identity and does not establish Mohit Nagarkar's individual contribution. Confirm the personal role before using first-person or ownership claims.",
        ],
      },
      {
        id: "routing",
        layout: "text-visual",
        label: "02 / MODEL SELECTION",
        title: "Route from prompt signals using explicit Python logic.",
        paragraphs: [
          "The model selector analyzes prompt length, complexity, domain, task type, technical level, creativity, and precision indicators, then scores configured candidate models and returns a rationale.",
          "The API includes both a simulation path and provider API integrations. The repository contains code for these flows; no independent successful live-provider run is documented here.",
        ],
        bullets: [
          "Prompt-feature analysis and candidate filtering",
          "Configured model scoring and selection rationale",
          "Estimate, model comparison, recommendation, and conversation endpoints",
        ],
        visual: "model-orchestration",
        visualTitle: "Prompt analysis to a selected model route",
        visualDescription:
          "A source-backed flow shows the request entering prompt analysis, model filtering and scoring, then a selected route and rationale.",
      },
      {
        id: "measurement",
        layout: "text-visual",
        label: "03 / CARBON ESTIMATION",
        title: "Keep measured process data distinct from fallback estimates.",
        paragraphs: [
          "The FastAPI estimator attempts CodeCarbon process tracking when available and has a fallback estimation path. The code records energy and carbon fields alongside token and inference metadata.",
          "These values are not independently benchmarked in this review. A CodeCarbon process measurement or model-based fallback should not be presented as validated per-request provider energy or as a proven reduction.",
        ],
        bullets: [
          "CodeCarbon tracking is optional in the source environment",
          "Fallback estimation is available when CodeCarbon cannot be loaded",
          "No verified emissions-reduction result or benchmark is published in this repository",
        ],
        visual: "carbon-energy",
        visualTitle: "Inference path and estimate method",
        visualDescription:
          "A flow distinguishes the model execution path from optional CodeCarbon tracking and fallback estimation before values are stored and displayed.",
      },
      {
        id: "stack",
        layout: "full-visual",
        label: "04 / IMPLEMENTATION",
        title: "A Python API and React client are present in the repository.",
        paragraphs: [
          "The backend source uses FastAPI, SQLAlchemy, and SQLite configuration. The client package manifest uses React and Vite. The repository also includes deployment configuration for Render and Vercel, which is not proof that a current deployment is healthy.",
        ],
        bullets: [
          "FastAPI routes for estimate, compare, model listing, recommendations, and health",
          "SQLAlchemy persistence for estimate and conversation records",
          "React client with authentication, chat, and dashboard views",
          "Provider integrations configured through environment variables",
        ],
        visual: "green-architecture",
        visualTitle: "FastAPI service, persistence, and React client",
        visualDescription:
          "The diagram summarizes the repository's source-level client, API, persistence, and model/estimate boundaries.",
      },
    ],
    limitations: [
      "No verified live demo URL or successful deployment check was found in the repository documentation.",
      "Test scripts are present, but no recorded passing test results were found; they were not executed as part of this portfolio review.",
      "Model provider availability, inference quality, estimation accuracy, and production operation are not independently verified.",
      "Recent commit history lists a generic Developer author, so the portfolio owner's exact contribution needs confirmation.",
    ],
  },
  {
    slug: "neuralixai",
    title: "NeuralixAI",
    eyebrow: "AI / EDTECH / LEARNING SYSTEM",
    summary:
      "The portfolio notes describe a career and learning product with personalized paths and skill tracking. Its implementation status is not verified in this repository.",
    category: "AI / EdTech",
    status: "CASE STUDY / IMPLEMENTATION STATUS UNVERIFIED",
    limitationsHeading: "Scope and details to confirm",
    seoTitle: "NeuralixAI — AI-Driven Learning Platform | Mohit Nagarkar",
    seoDescription:
      "A career and learning platform described in the portfolio notes as offering personalized paths and skill tracking. Its implementation is not independently verified here.",
    technologies: [
      "FastAPI",
      "React",
      "JavaScript (ES6+)",
      "REST APIs",
      "LLMs",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-visual",
        label: "01 / OVERVIEW",
        title: "A learning system that starts with the learner.",
        paragraphs: [
          "The portfolio notes describe a career and learning product intended to connect learner skills and goals with suggested learning paths and skill tracking. This repository does not contain the product implementation or a verified source link.",
          "The same notes mention an India-first knowledge base. Its contents and use in a running product are not independently verified here.",
        ],
        visual: "neural-blueprint",
        visualTitle: "Neural Blueprint: learner context to next action",
        visualDescription:
          "A conceptual blueprint connects learner profile and target-role inputs to skill tracking, knowledge retrieval, an AI mentor, and a learning path.",
      },
      {
        id: "problem",
        layout: "text-only",
        label: "02 / THE PROBLEM",
        title: "Career advice is easy to generate and hard to apply.",
        paragraphs: [
          "Learners often have fragmented evidence of what they know, an unclear target role, and too many possible courses. Generic recommendations can ignore the gap between a current skill and a job-relevant outcome.",
          "NeuralixAI frames the problem as a feedback loop: assess the current state, make the gap explicit, recommend a small next step, and let the learner ask why or what changes the plan.",
        ],
      },
      {
        id: "workflow",
        layout: "text-visual",
        label: "03 / WORKFLOW",
        title: "From assessment to a plan a learner can explain.",
        paragraphs: [
          "The proposed flow starts with a learner profile, goals, and assessment signals, then uses them to shape a learning path. This is the workflow described in the portfolio notes, not a verified interaction sequence.",
        ],
        bullets: [
          "Profile and target-role intake",
          "Assessments inform tracked skills",
          "Parser turns answers and signals into structured skills",
          "Recommendations with rationale and sequencing",
          "AI mentor and what-if exploration",
        ],
        visual: "neural-workflow",
        visualTitle: "NeuralixAI learner workflow",
        visualDescription:
          "A conceptual flow moves from learner context and assessments through parsing, retrieval, recommendations, and an AI mentor feedback loop.",
      },
      {
        id: "blueprint",
        layout: "text-only",
        label: "04 / NEURAL BLUEPRINT",
        title: "A decision loop, not a single prompt.",
        paragraphs: [
          "The Neural Blueprint is the product’s conceptual model: learner context and evidence are transformed into a current skill state, compared with a target role, grounded in the knowledge base, then returned as an explainable plan.",
          "This is a presented product architecture for communicating the intended system boundaries. It should not be read as proof that every service shown is deployed.",
        ],
      },
      {
        id: "assessments",
        layout: "text-only",
        label: "05 / ASSESSMENTS",
        title: "Make the starting point observable.",
        paragraphs: [
          "The product material describes gamified, RIASEC-based, and learning-style assessments. Together they provide signals about interests, aptitudes, personality, and learning preferences without requiring a fixed scoring formula in the case study.",
        ],
        bullets: [
          "Gamified assessment experience",
          "RIASEC-based assessment",
          "Learning-style assessment",
        ],
      },
      {
        id: "parser",
        layout: "text-only",
        label: "06 / PARSER",
        title: "Turn messy input into useful structure.",
        paragraphs: [
          "The portfolio material names Google Document AI for a proposed resume and marksheet parser. The repository does not verify the service integration or parsed output.",
          "Extracted information is an input to personalization, not a credential: recommendations should remain revisable and should show the learner what was interpreted.",
        ],
      },
      {
        id: "recommendations",
        layout: "text-only",
        label: "07 / RECOMMENDATIONS",
        title: "Prioritize the next smallest useful move.",
        paragraphs: [
          "The product description proposes recommendations based on learner context, target-role requirements, and learning material. A useful result would be sequenced, scoped, and accompanied by a reason.",
        ],
        bullets: [
          "Personalized LLM-based learning paths",
          "Role-aware ordering of skills and resources",
          "Rationale designed for learner review",
        ],
      },
      {
        id: "skill-gap",
        layout: "text-visual",
        label: "08 / SKILL GAP",
        title: "Show the distance between now and next.",
        paragraphs: [
          "The project material describes a skill-gap view comparing tracked capability with target-role competencies. Its behavior and outputs are not demonstrated in this repository.",
        ],
        visual: "skill-gap",
        visualTitle: "Skill-gap view: evidence, target, next action",
        visualDescription:
          "A three-column technical diagram compares current evidence with target expectations and connects each gap to a recommended next action.",
      },
      {
        id: "mentor",
        layout: "text-only",
        label: "09 / AI MENTOR",
        title: "A conversational layer over the plan.",
        paragraphs: [
          "The AI mentor is described as a proposed way for learners to ask follow-up questions about recommendations, trade-offs, and sequencing. Its grounding and response behavior need implementation evidence.",
        ],
      },
      {
        id: "what-if",
        layout: "text-only",
        label: "10 / WHAT-IF",
        title: "Explore a different constraint before switching paths.",
        paragraphs: [
          "The portfolio material describes what-if scenarios for exploring constraints such as a target role or prerequisite. The behavior and resulting plans are not verified here.",
        ],
      },
      {
        id: "roadmap",
        layout: "text-only",
        label: "11 / ROADMAP",
        title: "Earn trust one learning loop at a time.",
        paragraphs: [
          "The project material describes a structured learning-roadmap concept. Further evaluation, knowledge-base curation, source visibility, and parser and skill-gap checks are areas to document.",
        ],
        bullets: [
          "Evaluate recommendation quality and learner follow-through",
          "Add provenance, freshness, and review workflows for knowledge",
          "Expose corrections and uncertainty in mentor responses",
          "Validate cloud components incrementally against the FastAPI core",
        ],
      },
      {
        id: "ai-rag",
        layout: "text-visual",
        label: "12 / AI + KNOWLEDGE",
        title: "Ground generation in a living knowledge base.",
        paragraphs: [
          "A proposed AI design in the project material names hybrid retrieval, Vector Search, and Vertex AI Gemini. This repository does not verify that these services are configured or used by a running system.",
          "The notes also describe an India-first knowledge base; its data sources, curation, and operation are not documented here.",
        ],
        visual: "ai-rag",
        visualTitle: "Hybrid retrieval to grounded Gemini guidance",
        visualDescription:
          "A technical pipeline combines a query, lexical search, vector search, a merged context window, and Vertex AI Gemini before returning cited guidance.",
      },
      {
        id: "architecture",
        layout: "full-visual",
        label: "13 / SYSTEM ARCHITECTURE",
        title: "Separate listed components from a proposed cloud path.",
        paragraphs: [
          "The current portfolio notes describe a FastAPI REST backend paired with a React client and LLM-powered learning paths. A separate cloud architecture is presented as a design direction, not verified deployment evidence.",
          "The diagram communicates an intended design. It is not evidence that the listed services or production controls are live.",
        ],
        visual: "neural-architecture",
        visualTitle: "Project notes and a presented cloud architecture",
        visualDescription:
          "The diagram shows the React and FastAPI components listed in the portfolio notes alongside a proposed cloud path containing retrieval, a vector index, a knowledge base, and a language model.",
      },
      {
        id: "features",
        layout: "text-only",
        label: "14 / FEATURES",
        title: "A feature list for learning decisions.",
        paragraphs: [
          "The feature list in the portfolio notes includes profile, assessments, recommendations, mentor, and what-if concepts. Their implementation status is not verified here.",
        ],
        bullets: [
          "Smart Resume & Marksheet Parser",
          "Gamified Assessments",
          "Neural Blueprint",
          "Interactive Skill Gap Analysis",
          "AI Career Mentor",
          "What-If Scenario Planner",
          "Personalized Learning Roadmap",
          "Progress and gamification",
        ],
      },
      {
        id: "data",
        layout: "text-only",
        label: "15 / DATA CONSIDERATIONS",
        title: "Learning data needs careful defaults.",
        paragraphs: [
          "Profiles, assessment responses, goals, and recommendation history can reveal sensitive education and career information. The product should minimize collection, explain how data informs recommendations, provide correction and deletion paths, and avoid treating inferred skill levels as verified credentials.",
          "Knowledge-base documents need provenance, freshness checks, regional context, and evaluation for retrieval quality and representation.",
        ],
      },
      {
        id: "engineering",
        layout: "text-only",
        label: "16 / ENGINEERING REALITY",
        title: "Name what is built, proposed, and inferred.",
        paragraphs: [
          "The current portfolio notes describe a React client, a FastAPI REST backend, LLM-based learning paths, and skill tracking. This portfolio repository does not contain the project implementation, usage evidence, or a verified source-repository link.",
        ],
      },
    ],
    limitations: [
      "The cloud architecture is presented for communication; managed Vector Search, Vertex AI Gemini, and production deployment details are not claimed as verified here.",
      "Usage, recommendation latency, deployment, and production readiness are not documented in the available repository.",
      "Skill levels and parser output are inferred signals and should not be used as credentials, hiring decisions, or definitive career predictions.",
      "Security, privacy, availability, monitoring, and deployment controls are not independently verified in this repository.",
    ],
  },
  {
    slug: "shetisakha",
    title: "ShetiSakha",
    eyebrow: "TEAM PROJECT / ANDROID / AGRICULTURAL ROBOTICS",
    summary:
      "A team final-year Android app repository for Bluetooth agribot controls, grid/freehand path entry, and saved paths. The Arduino firmware and physical robot operation are not included in the linked source.",
    category: "Team Project / Android Application",
    status: "TEAM PROJECT / APP SOURCE PRESENT / HARDWARE OPERATION UNVERIFIED",
    limitationsHeading: "Evidence limits",
    githubUrl: "https://github.com/atharvaHJoshi/ShetiSakha-Final_Year_Project_GPN",
    technologies: [
      "Java",
      "Android SDK",
      "Android Views and XML",
      "Bluetooth SPP / HC-05",
      "SQLite",
      "Gradle",
      "OpenWeatherMap API",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / TEAM PROJECT",
        title: "An Android control app for an agricultural robot concept.",
        paragraphs: [
          "The repository contains a Java Android application with manual remote controls, path-entry screens, Bluetooth connection code, and local path storage. Its README describes an Arduino-based agribot, but the Arduino firmware is not included in this repository.",
          "The accompanying 2023–24 project thesis lists Mohit Nagarkar among five team members. It does not assign individual implementation areas, so this case study does not attribute the complete app or robot to one person.",
        ],
      },
      {
        id: "controls",
        layout: "text-only",
        label: "02 / BLUETOOTH CONTROL",
        title: "App source connects to a paired HC-05 over Bluetooth SPP.",
        paragraphs: [
          "The app includes a Bluetooth controller that discovers paired devices and opens an RFCOMM/SPP connection. The manual-control screen sends command bytes from directional and task controls.",
          "This confirms app-side connection and command code only. Without the robot firmware and a connected device, the physical effect of those commands is unverified.",
        ],
        bullets: [
          "Paired-device discovery and connection code",
          "Manual control interface and command writes",
          "No Arduino firmware or hardware test evidence in the repository",
        ],
      },
      {
        id: "paths",
        layout: "text-only",
        label: "03 / PATH ENTRY AND STORAGE",
        title: "Grid and freehand path input have dedicated Android views.",
        paragraphs: [
          "The app source includes a grid-pattern view and a freehand drawing view, plus SQLite helpers for saving path direction and runtime records. These are app-side path entry and storage capabilities; autonomous robot execution has not been tested.",
        ],
        bullets: [
          "Grid-based path entry UI",
          "Freehand path drawing view",
          "SQLite path record helper",
        ],
      },
      {
        id: "supporting",
        layout: "text-only",
        label: "04 / SUPPORTING FEATURES",
        title: "The app also includes weather and settings screens.",
        paragraphs: [
          "The source includes an OpenWeatherMap request path and Android settings screens. No soil sensor implementation appears in the checked application source.",
        ],
      },
    ],
    limitations: [
      "The thesis names Mohit Nagarkar as one of five team members; it does not specify his individual coding or hardware responsibilities. Confirm those details before adding personal contribution claims.",
      "The Arduino firmware and physical robot are not included, so seeding, sprinkling, ploughing, path-following, and sensor behavior cannot be verified from this repository.",
      "A template ExampleUnitTest exists, but no project-specific automated behavior tests or test results were found.",
      "No live demo URL is listed; the Android project is linked to its source repository.",
    ],
  },
  {
    slug: "intelli-climate",
    title: "Intelli Climate",
    eyebrow: "IOT / ENVIRONMENTAL MONITORING / AI REPORTS",
    summary:
      "Repository source connects ESP8266 sensor readings to Firebase and a React dashboard, with a Gemini-generated report path. The hosted page responds, but hardware telemetry and end-to-end operation are not verified.",
    category: "IoT / Web Application",
    status: "IMPLEMENTATION SOURCE PRESENT / LIVE DATA FLOW UNVERIFIED",
    limitationsHeading: "Evidence limits",
    liveUrl: "https://intelliclimate-81392.web.app/",
    githubUrl: "https://github.com/Mohit-Nagarkar/intelli-climate",
    technologies: [
      "ESP8266 / NodeMCU",
      "DHT11",
      "Analog Soil Moisture Sensor",
      "Firebase Realtime Database",
      "React",
      "Chart.js",
      "Express",
      "Google Gemini API",
      "jsPDF",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / IMPLEMENTATION",
        title: "Source code covers the sensor, data, dashboard, and report path.",
        paragraphs: [
          "The repository includes an ESP8266 sketch, Firebase client setup and data hook, React dashboard components, and an Express endpoint for Gemini-generated environmental reports. Source code supports these components; it does not prove a complete deployed workflow.",
          "The README and project-analysis notes disagree about whether Firebase is used. The checked firmware and frontend source both include Firebase integration, so this case study follows the code.",
          "The repository history attributes two commits to Mohit-Nagarkar, including report-error handling and deployed-frontend CORS changes. This is evidence for those changes, not proof of sole authorship of the whole project.",
        ],
      },
      {
        id: "sensor-flow",
        layout: "text-only",
        label: "02 / SENSOR DATA FLOW",
        title: "The firmware reads DHT11 and analog soil-moisture values.",
        paragraphs: [
          "The NodeMCU sketch reads temperature and humidity from a DHT11 and an analog value from A0, maps the soil reading to a percentage, and writes the latest reading and a history entry to Firebase Realtime Database. The loop includes a five-second delay.",
          "The Firebase frontend hook subscribes to stored data for the dashboard. The source includes this data path, but the physical board, calibration, Firebase rules, and live telemetry were not exercised in this review.",
        ],
        bullets: [
          "DHT11 temperature and humidity inputs",
          "Analog soil-moisture input on A0",
          "Firebase latest and history paths",
          "No sensor calibration or field-performance evidence in the repository",
        ],
      },
      {
        id: "dashboard",
        layout: "text-only",
        label: "03 / DASHBOARD AND REPORT",
        title: "Charts, a heuristic health score, Gemini reports, and PDF export.",
        paragraphs: [
          "The React client displays current readings and chart history, calculates a rule-based health score, and sends summary statistics to the Express /generate-report endpoint. The backend calls Gemini and returns report text; the frontend includes PDF report export.",
          "The health score is application logic, not a validated agricultural or plant-health measure. Report quality, AI behavior, and PDF output have not been independently evaluated here.",
        ],
        bullets: [
          "React dashboard with Chart.js",
          "Firebase-backed sensor data hook",
          "Express endpoint using the Google Gemini API",
          "PDF report generation with jsPDF",
        ],
      },
      {
        id: "deployment",
        layout: "text-only",
        label: "04 / DEPLOYMENT AND CONTRIBUTION",
        title: "The hosted app shell is reachable; live behavior remains unverified.",
        paragraphs: [
          "The Firebase Hosting URL returned HTTP 200 with the Intelli Climate page title. This confirms the hosted app shell only; it does not confirm that Firebase telemetry, the backend, or Gemini reports work end to end.",
          "Credential handling and Firebase security configuration require review before deployment. No credential values are reproduced in this case study.",
        ],
      },
    ],
    limitations: [
      "No automated test script or project test suite is present in the current package manifests.",
      "The live page shell is reachable, but connected-device telemetry, Firebase access rules, backend deployment, and AI report execution were not verified.",
      "The repository includes tracked environment/configuration files that require a credential review. Rotate any exposed secrets and remove them from public history before treating the repository as safe.",
      "The repository history documents two commits attributed to Mohit-Nagarkar, but does not establish sole authorship or the scope of earlier implementation work.",
      "No measured sensor accuracy, agricultural outcomes, or system reliability results are documented.",
    ],
  },

];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
