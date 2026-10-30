import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills-section site-container anchor-target" aria-labelledby="skills-heading">
      <div className="section-heading section-heading--compact">
        <div>
          <p className="section-label">03 / TOOLKIT</p>
          <h2 id="skills-heading">Tools for<br /><em>making things.</em></h2>
        </div>
        <p className="section-note">A working toolkit across application development, systems, and delivery.</p>
      </div>
      <div className="skill-grid">
        {skillCategories.map((category) => (
          <article className="skill-category" key={category.id}>
            <div className="skill-category-heading"><span>{category.number}</span><h3>{category.title}</h3></div>
            <ul aria-label={`${category.title} technologies`}>
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
