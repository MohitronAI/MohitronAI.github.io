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
      "A full-stack digital agreement workflow for creating agreements, collecting consent, generating PDFs, storing records, and tracking agreement activity.",
    category: "Full-Stack Web Application",
    status: "FRONTEND DEPLOYED / BACKEND REQUIRES CORRECTION",
    liveUrl: "https://d-aagreement.vercel.app/",
    seoTitle: "DAgreement — Digital Consent & Agreement Tracker | Mohit Nagarkar",
    seoDescription:
      "A full-stack digital agreement platform for creating, sending, signing, storing, and tracking agreements with generated signed PDFs and audit metadata.",
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
      "Brevo",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / OVERVIEW",
        title: "A digital consent and agreement management platform.",
        paragraphs: [
          "DAgreement is an individual startup-style prototype built between January 22–25, 2026. It primarily supports one authenticated creator and one recipient per agreement.",
        ],
      },
      {
        id: "problem",
        layout: "text-only",
        label: "02 / THE PROBLEM",
        title: "Make agreement work easier to follow through.",
        paragraphs: [
          "Paper and email-based agreements can be slower to prepare, harder to track, and easy to fragment across inboxes and files. DAgreement brings creation, sending, signing, document generation, storage, and notifications into one workflow.",
        ],
      },
      {
        id: "workflow",
        layout: "text-visual",
        label: "03 / HOW IT WORKS",
        title: "From a draft to a traceable agreement.",
        paragraphs: [
          "The workflow moves from a structured draft to a public signing link, then to a signed or rejected outcome with a generated PDF, audit entry, stored metadata, and notifications.",
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
          "The React frontend communicates with an Express REST API through authentication middleware and controllers. Services handle PDF generation and Brevo email delivery, while PostgreSQL stores application data.",
        ],
        bullets: [
          "React + TypeScript client",
          "Node.js + Express API",
          "PostgreSQL persistence",
          "PDFKit document generation",
          "Brevo transactional email delivery",
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
          "The verified implementation combines authenticated creator access with traceability. JWT, bcrypt, Google OAuth, ownership checks, IP capture, timestamps, and audit events support the current prototype scope.",
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
          "The data model centers on users and agreements, with related signatures, audit logs, and notifications connected to the agreement lifecycle.",
        ],
        bullets: [
          "User → creates and accesses agreements",
          "Agreement → belongs to one creator and can have signatures and audit logs",
          "User → receives notifications",
          "Agreement-related records → are deleted with the agreement",
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
          "The hardest part was connecting the frontend, backend, database, email delivery, PDF generation, and deployment infrastructure into one agreement lifecycle.",
          "The implementation uses React, Express, PostgreSQL, JWT, bcrypt, Google OAuth, PDFKit, and Brevo at their respective system boundaries.",
        ],
      },
      {
        id: "deployment",
        layout: "text-only",
        label: "08 / DEPLOYMENT",
        title: "The frontend is deployed; the workflow still needs its backend.",
        paragraphs: [
          "The frontend is deployed on Vercel. The expected Node/Express backend is hosted at Render, but the verified deployment currently returns 404 for /, /api, and /health, so the complete workflow cannot yet be verified end-to-end.",
        ],
      },
      {
        id: "result",
        layout: "text-only",
        label: "09 / RESULT",
        title: "A complete workflow architecture, honestly scoped.",
        paragraphs: [
          "The primary outcome is the connected path from create to send, sign or reject, generate PDF, store metadata, record audit activity, and notify participants.",
        ],
      },
    ],
    limitations: [
      "The backend deployment currently returns 404 and requires correction before the complete workflow can be verified end-to-end.",
      "Full RBAC, rate limiting, refresh tokens, token revocation, recipient identity verification, secure signing tokens, and centralized error handling are not implemented.",
      "Signed PDFs are generated, stored separately, and accompanied by audit metadata; cryptographic signing, PDF locking, tamper-evident storage, version history, and hash verification are not implemented.",
      "PDF access requires additional protection, and automated testing and transactional safeguards can be expanded.",
    ],
  },
  {
    slug: "green-model-advisor",
    title: "Green Model Advisor",
    eyebrow: "AI / SUSTAINABILITY / MODEL ORCHESTRATION",
    summary:
      "A conceptual LLM orchestration platform that makes model choice visible through prompt-aware routing, real-time CO₂ tracking, energy benchmarking, and explicit trade-offs.",
    category: "AI / Sustainability",
    status: "CONCEPTUAL CASE STUDY / SCOPE DEFINED",
    seoTitle: "Green Model Advisor — Low-Carbon AI Optimization Platform | Mohit Nagarkar",
    seoDescription:
      "A full-stack AI orchestration platform exploring prompt-complexity model routing, energy benchmarking, and carbon-aware inference.",
    technologies: [
      "React",
      "FastAPI",
      "LLMs",
      "AI Model Orchestration",
      "Real-Time CO₂ Tracking",
      "Energy Benchmarking",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-only",
        label: "01 / OVERVIEW",
        title: "Make every model decision easier to see.",
        paragraphs: [
          "Green Model Advisor is a sustainability-focused interface for reasoning about LLM use. It brings routing, carbon visibility, and energy benchmarking into one conceptual product surface without presenting an unverified deployment as production.",
          "The product treats efficiency as a decision context: the best response is not only about capability, but also about the task requirements and the environmental signal available at the time.",
        ],
      },
      {
        id: "problem",
        layout: "text-only",
        label: "02 / THE PROBLEM",
        title: "Model choice is usually disconnected from its footprint.",
        paragraphs: [
          "Teams can choose an LLM for quality while having little visibility into the energy and carbon context of each request. A static default also makes it difficult to explain why a more capable model was used for a task that did not need it.",
          "Green Model Advisor frames that gap as an orchestration problem: understand the request, select an appropriate route, observe the result, and keep the decision reviewable.",
        ],
        bullets: [
          "Make routing criteria understandable to the person reviewing a request",
          "Keep quality, latency, cost, energy, and carbon as visible trade-offs",
          "Record enough context to compare decisions over time",
        ],
      },
      {
        id: "orchestration",
        layout: "text-visual",
        label: "03 / MODEL ORCHESTRATION",
        title: "Route each request by what it actually needs.",
        paragraphs: [
          "The orchestration layer receives a request, extracts task signals, and compares them with the capabilities and efficiency profile of available models. It then chooses a route, sends the request, and returns the response with a decision trace.",
          "This is a conceptual control loop rather than a claim about a particular provider or model lineup. The interface can show why a route was selected without exposing a formula or inventing a model name.",
        ],
        bullets: [
          "Prompt signal extraction at the API boundary",
          "Capability and efficiency profile comparison",
          "Policy-aware route selection",
          "Response and routing rationale returned together",
        ],
        visual: "model-orchestration",
        visualTitle: "Request signals to an explainable model route",
        visualDescription:
          "A conceptual flow shows a request entering signal extraction, being compared with model profiles, passing through a routing policy, and returning a response with its decision trace.",
      },
      {
        id: "carbon-energy",
        layout: "text-visual",
        label: "04 / CARBON + ENERGY",
        title: "Turn inference activity into a live sustainability signal.",
        paragraphs: [
          "The tracking pipeline associates each completed request with observable inference and energy signals, then translates those signals into a carbon context for the dashboard. The pipeline is designed to show where a value came from and when it was captured.",
          "Carbon intensity is treated as contextual data, not a universal constant. The conceptual design keeps source, time, scope, and uncertainty visible so the result can be interpreted responsibly.",
        ],
        bullets: [
          "Capture request and route metadata",
          "Collect inference energy observations",
          "Join the observation with carbon-intensity context",
          "Present the resulting signal with provenance and uncertainty",
        ],
        visual: "carbon-energy",
        visualTitle: "Inference observation to carbon-aware context",
        visualDescription:
          "A conceptual pipeline connects request metadata and energy observations to carbon-intensity context, then produces a traceable dashboard signal.",
      },
      {
        id: "benchmarking",
        layout: "text-visual",
        label: "05 / BENCHMARKING",
        title: "Compare routes without hiding the criteria.",
        paragraphs: [
          "The benchmarking view compares model routes across the dimensions that matter for a task: response quality, latency, cost, energy, and carbon. It is intended to support a deliberate choice, not to reduce a complex system to one universal score.",
          "A benchmark record should carry its task context, evaluation method, and capture conditions. That makes comparisons useful while avoiding unsupported claims about absolute performance.",
        ],
        bullets: [
          "Side-by-side route comparison",
          "Task context attached to each observation",
          "Quality and efficiency shown together",
          "Transparent benchmark scope and capture conditions",
        ],
        visual: "benchmarking",
        visualTitle: "A multi-axis view for responsible comparison",
        visualDescription:
          "A conceptual dashboard compares quality, latency, cost, energy, and carbon as separate axes so a reviewer can inspect the trade-off instead of relying on one score.",
      },
      {
        id: "architecture",
        layout: "full-visual",
        label: "06 / SYSTEM ARCHITECTURE",
        title: "Keep the product boundary clear and inspectable.",
        paragraphs: [
          "The presented architecture pairs a React interface with a FastAPI boundary. The API coordinates orchestration, tracking, and benchmark records while keeping the conceptual model catalog and measurement adapters behind explicit interfaces.",
          "This diagram communicates a system shape, not a claim about cloud hosting, deployment, or a production database. Those concerns can be selected later without changing the product’s reasoning model.",
        ],
        bullets: [
          "React dashboard and review surfaces",
          "FastAPI orchestration and measurement boundary",
          "LLM routing policy and model adapters",
          "Carbon and energy observation adapters",
          "Benchmark records for comparison and review",
        ],
        visual: "green-architecture",
        visualTitle: "React and FastAPI around observable decision boundaries",
        visualDescription:
          "A conceptual system map places the React interface and FastAPI boundary around routing, measurement, and benchmarking components, with no deployment or database claim.",
      },
      {
        id: "trade-offs",
        layout: "text-visual",
        label: "07 / TRADE-OFFS",
        title: "Efficiency is a choice with consequences.",
        paragraphs: [
          "A lower-footprint route can be a better fit for a straightforward task, while a complex request may justify a different capability profile. The product makes that decision legible instead of pretending that one route wins every time.",
          "The trade-off surface is deliberately qualitative in this case study. It supports review, policy setting, and iteration without presenting fabricated formulas, model names, or benchmark numbers.",
        ],
        bullets: [
          "Capability versus energy demand",
          "Quality versus latency and cost",
          "Fresh carbon context versus decision stability",
          "Automation versus human review",
          "Efficiency improvements reported up to 25% where observed",
        ],
        visual: "trade-offs",
        visualTitle: "Review the decision, not just the outcome",
        visualDescription:
          "A conceptual trade-off map places capability, quality, latency, cost, energy, and carbon around a review point so no single dimension is treated as the answer.",
      },
    ],
    limitations: [
      "This is a conceptual case study; no live URL or GitHub reference is provided.",
      "The diagrams describe intended boundaries and measurement flows, not a claim of deployment, cloud hosting, or database infrastructure.",
      "Carbon and energy observations depend on measurement scope, source quality, workload context, and uncertainty; the case study does not provide formulas or absolute benchmark values.",
      "The reported reduction is limited to up to 25% in per-task carbon output and inference energy consumption; it is not a universal guarantee.",
      "Specific model names, provider claims, and production performance metrics are intentionally omitted.",
    ],
  },
  {
    slug: "neuralixai",
    title: "NeuralixAI",
    eyebrow: "AI / EDTECH / LEARNING SYSTEM",
    summary:
      "An AI-driven career and learning platform that turns a learner’s current skills and goals into an actionable path, with an AI mentor for the next decision.",
    category: "AI / EdTech",
    status: "BETA / ENGINEERING CASE STUDY",
    githubUrl: "https://github.com/hdp01/NeuralixAi",
    seoTitle: "NeuralixAI — AI-Driven Learning Platform | Mohit Nagarkar",
    seoDescription:
      "An AI-powered career and learning platform that generates personalized LLM-based learning paths.",
    technologies: [
      "FastAPI",
      "React",
      "JavaScript (ES6+)",
      "REST APIs",
      "LLMs",
      "Hybrid RAG",
      "Vector Search",
      "Vertex AI Gemini",
    ],
    sections: [
      {
        id: "overview",
        layout: "text-visual",
        label: "01 / OVERVIEW",
        title: "A learning system that starts with the learner.",
        paragraphs: [
          "NeuralixAI is a career and learning platform for turning a learner’s skills, target role, and constraints into a practical sequence of next steps. The product combines structured skill tracking with LLM-assisted guidance rather than treating a generated answer as the product.",
          "The India-first knowledge base keeps examples, role expectations, and learning context relevant to learners navigating Indian education and early-career pathways.",
        ],
        visual: "neural-blueprint",
        visualTitle: "Neural Blueprint: learner context to next action",
        visualDescription:
          "A technical blueprint connects learner profile and target role inputs to a skill graph, grounded knowledge retrieval, an AI mentor, and an actionable learning path.",
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
          "A learner supplies a profile, goals, and assessment signals. The system maps those signals to tracked domains, retrieves relevant knowledge, and produces a prioritized path. The learner can inspect recommendations, ask the mentor for context, and run a what-if scenario before committing.",
        ],
        bullets: [
          "Profile and target-role intake",
          "Assessments across 4–7 skill domains",
          "Parser turns answers and signals into structured skills",
          "Recommendations with rationale and sequencing",
          "AI mentor and what-if exploration",
        ],
        visual: "neural-workflow",
        visualTitle: "NeuralixAI learner workflow",
        visualDescription:
          "A six-stage flow moves from learner context and assessments through parsing, retrieval, recommendations, and an AI mentor feedback loop.",
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
          "The Smart Resume & Marksheet Parser uses Google Document AI as the document-processing boundary. A resume or marksheet is converted into extracted information that can contribute to the learner profile alongside assessment data.",
          "Extracted information is an input to personalization, not a credential: recommendations should remain revisable and should show the learner what was interpreted.",
        ],
      },
      {
        id: "recommendations",
        layout: "text-only",
        label: "07 / RECOMMENDATIONS",
        title: "Prioritize the next smallest useful move.",
        paragraphs: [
          "Recommendations combine the learner’s current state, target-role requirements, and retrieved learning material. A useful result is sequenced, scoped, and accompanied by a reason—what to learn, why it matters, and what evidence would demonstrate progress.",
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
          "Skill-gap analysis compares tracked capability with a target role’s expected competencies. The output is directional rather than a hiring verdict: it highlights focus areas, dependencies, and a way to measure progress.",
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
          "The AI mentor gives the learner a place to ask follow-up questions about a recommendation, trade-offs, and sequencing. It should ground answers in the same retrieved context as the path and make uncertainty visible rather than presenting speculation as fact.",
        ],
      },
      {
        id: "what-if",
        layout: "text-only",
        label: "10 / WHAT-IF",
        title: "Explore a different constraint before switching paths.",
        paragraphs: [
          "What-if scenarios let a learner test changes such as a different target role, fewer weekly hours, or a new prerequisite. The system can recompute priorities and show which parts of the plan move; it does not predict a guaranteed career outcome.",
        ],
      },
      {
        id: "roadmap",
        layout: "text-only",
        label: "11 / ROADMAP",
        title: "Earn trust one learning loop at a time.",
        paragraphs: [
          "The project material describes a personalized learning roadmap, including a 12-week roadmap concept. The next practical milestones are to evaluate recommendations with real learner outcomes, curate and version the India-first knowledge base, make retrieved sources visible, and measure parser and skill-gap corrections.",
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
          "The presented AI layer uses hybrid RAG: lexical and vector retrieval select relevant passages, then Vertex AI Gemini can synthesize a response or path from that context. Vector Search supports semantic matching; retrieval and prompt boundaries remain explicit so generated guidance is inspectable.",
          "The knowledge base is India-first, with local role language and learning context treated as product data that needs curation, versioning, and evaluation.",
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
        title: "Separate the verified core from the presented cloud path.",
        paragraphs: [
          "The verified implementation is a FastAPI REST backend paired with a React client and LLM-powered learning-path behavior. The cloud architecture presented for scale adds managed retrieval, a vector index, and Vertex AI Gemini around those boundaries.",
          "This distinction matters: the diagram communicates an intended deployment shape, not a claim that every Google Cloud service or production control is currently live.",
        ],
        visual: "neural-architecture",
        visualTitle: "Presented cloud architecture vs verified implementation",
        visualDescription:
          "The diagram separates the verified React and FastAPI core from a presented cloud path containing an API boundary, hybrid retrieval, Vector Search, an India-first knowledge base, and Vertex AI Gemini.",
      },
      {
        id: "features",
        layout: "text-only",
        label: "14 / FEATURES",
        title: "A focused surface for learning decisions.",
        paragraphs: [
          "The feature set keeps the loop visible: profile and assessments establish context, recommendations turn it into action, and mentor and what-if tools help the learner understand and adapt the path.",
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
        id: "metrics",
        layout: "text-only",
        label: "15 / OBSERVED SIGNALS",
        title: "Early usage, stated without overclaiming.",
        paragraphs: [
          "The beta served 12 users. Observed recommendation responses were under 800 ms in the reported beta context; this is an observed signal, not a universal latency guarantee or a production SLA.",
        ],
      },
      {
        id: "data",
        layout: "text-only",
        label: "16 / DATA CONSIDERATIONS",
        title: "Learning data needs careful defaults.",
        paragraphs: [
          "Profiles, assessment responses, goals, and recommendation history can reveal sensitive education and career information. The product should minimize collection, explain how data informs recommendations, provide correction and deletion paths, and avoid treating inferred skill levels as verified credentials.",
          "Knowledge-base documents need provenance, freshness checks, regional context, and evaluation for retrieval quality and representation.",
        ],
      },
      {
        id: "engineering",
        layout: "text-only",
        label: "17 / ENGINEERING REALITY",
        title: "Name what is built, proposed, and inferred.",
        paragraphs: [
          "The implementation evidence supports a React client, FastAPI REST backend, LLM-based learning paths, skill tracking, 12 beta users, and the reported sub-800 ms recommendation response. Hybrid RAG, Vector Search, Vertex AI Gemini, and the cloud topology are presented architecture choices unless independently verified.",
          "The GitHub reference is provided for the project source: https://github.com/hdp01/NeuralixAi",
        ],
      },
    ],
    limitations: [
      "The cloud architecture is presented for communication; managed Vector Search, Vertex AI Gemini, and production deployment details are not claimed as verified here.",
      "The reported 12 beta users and sub-800 ms recommendation response are observed context, not a guarantee, benchmark protocol, or SLA.",
      "Skill levels and parser output are inferred signals and should not be used as credentials, hiring decisions, or definitive career predictions.",
      "Security, privacy, availability, monitoring, and deployment controls are not asserted beyond the verified implementation details.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
