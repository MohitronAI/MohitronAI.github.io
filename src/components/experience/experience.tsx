import { experience, leadership } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="experience-section site-container anchor-target" aria-labelledby="experience-heading">
      <div className="section-heading">
        <div>
          <p className="section-label">04 / EXPERIENCE</p>
          <h2 id="experience-heading">Where the work<br /><em>takes shape.</em></h2>
        </div>
        <p className="section-note">Professional roles and community leadership, as listed.</p>
      </div>
      <div className="experience-grid">
        <div className="experience-column">
          <p className="detail-label">PROFESSIONAL EXPERIENCE</p>
          <ol className="experience-list">
            {experience.map((entry, index) => (
              <li key={entry.id}>
                <span className="experience-index">0{index + 1}</span>
                <div className="experience-entry">
                  <div className="experience-title">
                    <h3>{entry.role}</h3>
                    {entry.period && <span>{entry.period}</span>}
                  </div>
                  <p className="experience-company">{entry.company}</p>
                  {entry.description && <p className="experience-description">{entry.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="leadership-column">
          <p className="detail-label">LEADERSHIP</p>
          <ol className="leadership-list">
            {leadership.map((entry, index) => (
              <li key={entry.id}>
                <span className="leadership-index">0{index + 1}</span>
                <div><h3>{entry.role}</h3><p>{entry.organization}</p></div>
                <time>{entry.period}</time>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
