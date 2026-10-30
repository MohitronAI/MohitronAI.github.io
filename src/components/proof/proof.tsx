import { certification, proofPoints } from "@/data/proof";

export function Proof() {
  return (
    <section id="proof" className="proof-section" aria-labelledby="proof-heading">
      <div className="proof-inner site-container">
        <div className="proof-heading">
          <p className="section-label">05 / SIGNALS OF PROGRESS</p>
          <h2 id="proof-heading">Small numbers.<br /><em>Real context.</em></h2>
        </div>
        <div className="proof-grid">
          {proofPoints.map((point, index) => (
            <article className={`proof-point proof-point--${index + 1}`} key={point.id}>
              <p className="proof-index">0{index + 1} / PROJECT CONTEXT</p>
              <p className="proof-value" aria-label={point.accessibleLabel}>{point.value}</p>
              <h3>{point.label}</h3>
              <p className="proof-context">{point.context}</p>
            </article>
          ))}
        </div>
        <div className="certification">
          <div>
            <p className="detail-label">CERTIFICATION</p>
            <h3>{certification.title}</h3>
            <p>{certification.provider}</p>
          </div>
          <a className="button button--lime" href={certification.url} target="_blank" rel="noopener noreferrer">View certificate <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
