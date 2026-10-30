import Link from "next/link";
import { contact } from "@/data/contact";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/#writing" },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section anchor-target" aria-labelledby="contact-heading">
      <div className="contact-main site-container">
        <p className="section-label">07 / YOUR TURN</p>
        <h2 id="contact-heading">Have a good<br /><em>problem to solve?</em></h2>
        <p className="contact-copy">{contact.closingCopy}</p>
        <a className="contact-email" href={contact.emailHref} target="_blank" rel="noopener noreferrer">
          {contact.email}<span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-bottom site-container">
        <div className="contact-socials" aria-label="Social and contact links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={contact.phoneHref}>{contact.phone}<span aria-hidden="true">↗</span></a>
        </div>
        <footer className="site-footer">
          <Link className="footer-brand" href="/">{contact.name}<span>.</span></Link>
          <nav aria-label="Footer navigation">
            {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
          <span>© {new Date().getFullYear()} / {contact.name.toUpperCase()}</span>
        </footer>
      </div>
    </section>
  );
}
