import { profile } from "@/data/profile";

export function Profile() {
  return (
    <section id="about" className="profile-section site-container anchor-target" aria-labelledby="profile-heading">
      <div className="profile-intro">
        <div className="profile-intro-label">
          <p className="section-label">02 / THE PERSON</p>
          <span className="profile-monogram" aria-hidden="true">MN</span>
        </div>
        <div className="profile-intro-copy">
          <h2 id="profile-heading">{profile.headline}</h2>
          <p>{profile.introduction}</p>
        </div>
      </div>
      <div className="profile-bento">
        <article className="profile-philosophy">
          <p className="detail-label">HOW I WORK</p>
          <h3>Curiosity is useful.<br /><em>Building makes it real.</em></h3>
          <p>{profile.philosophy}</p>
        </article>
        <article className="profile-education">
          <p className="detail-label">CURRENTLY</p>
          <strong>{profile.education}</strong>
          <p>Graduating {profile.graduation}</p>
          <span className="education-mark" aria-hidden="true">’27</span>
        </article>
        <article className="profile-focus">
          <p className="detail-label">AREAS OF FOCUS</p>
          <ul>{profile.focus.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}</li>)}</ul>
        </article>
        <article className="profile-location">
          <p className="detail-label">BASED IN</p>
          <strong>{profile.location}</strong>
          <span aria-hidden="true">↗</span>
        </article>
      </div>
    </section>
  );
}
