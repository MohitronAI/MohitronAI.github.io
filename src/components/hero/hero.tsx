import { SystemVisual } from "./system-visual";
import { contact } from "@/data/contact";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner site-container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />SOFTWARE &amp; AI DEVELOPER · FULL-STACK BUILDER</p>
          <h1>Building <em>intelligent</em> products and modern digital experiences.</h1>
          <p className="hero-description">I build practical software at the intersection of AI, full-stack engineering, and modern web technologies.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">View Selected Work <span aria-hidden="true">↗</span></a>
            <a className="button button--secondary" href={contact.emailHref} target="_blank" rel="noopener noreferrer">Get In Touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <SystemVisual />
      </div>
      <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>© 2026 / MOHIT</span></div>
    </section>
  );
}
