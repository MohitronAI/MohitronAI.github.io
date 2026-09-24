import { contact } from "@/data/contact";

export function Contact() {
  return (
    <section className="contact-section site-container" aria-labelledby="contact-heading">
      <div id="contact" className="contact-main anchor-target">
        <p className="section-label">CONTACT</p>
        <h2 id="contact-heading">Let&apos;s build something thoughtful<span>.</span></h2>
        <p className="contact-copy">{contact.closingCopy}</p>
        <a className="contact-email" href={contact.emailHref} target="_blank" rel="noopener noreferrer">{contact.email}<span aria-hidden="true">↗</span></a>
      </div> 
      <div className="contact-links" aria-label="Contact links">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href={contact.phoneHref}>{contact.phone}<span aria-hidden="true">→</span></a>
      </div>
      <footer className="site-footer">
        <div><strong>{contact.name}</strong><span>{contact.role}</span></div>
        <a href={contact.emailHref} target="_blank" rel="noopener noreferrer">{contact.email}</a>
        <span>© 2026 / MOHIT NAGARKAR</span>
      </footer>
    </section>
  );
}
