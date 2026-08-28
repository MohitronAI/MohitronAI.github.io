export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Spring Boot", "RESTful API Design"],
  },
  {
    id: "auth-databases",
    number: "04",
    title: "Auth & Databases",
    skills: ["JWT", "bcrypt", "Google OAuth", "RBAC", "PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    id: "devops-tools",
    number: "05",
    title: "DevOps & Tools",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "Vercel", "Render", "Git/GitHub", "Postman", "Figma"],
  },
];
