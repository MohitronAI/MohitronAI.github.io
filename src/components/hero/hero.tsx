import { profile } from "@/data/profile";
import { SystemVisual } from "./system-visual";

export function Hero() {
  return (
    <section id="home" className="hero site-container" aria-labelledby="hero-heading">
      <div className="hero-main">
        <p className="eyebrow"><span className="eyebrow-index">01 /</span> SOFTWARE · SYSTEMS · AI</p>
        <h1 id="hero-heading"><span>MOHIT</span><span className="hero-name-last">NAGARKAR<span className="accent-period">.</span></span></h1>
        <div className="hero-summary">
          <h2>{profile.headline}</h2>
          <p>{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button--lime" href="#projects">Explore the work <span aria-hidden="true">↘</span></a>
            <a className="button button--outline" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="hero-visual-wrap">
        <SystemVisual />
        <div className="hero-caption">
          <span>{profile.education} · Graduating {profile.graduation}</span>
          <span>{profile.location}</span>
        </div>
      </div>
      <div className="hero-footer">
        <span>INDEPENDENT THINKING / PRACTICAL BUILDING</span>
        <span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
}
