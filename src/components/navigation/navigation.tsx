"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/data/contact";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href.slice(1)))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <nav className="nav-shell site-container" aria-label="Primary navigation">
          <Link className="brand" href="/" onClick={closeMenu} aria-label="Mohit home">
            MN<span className="brand-dot">.</span>
          </Link>
          <Link className="nav-home" href="/" onClick={closeMenu}>Home</Link>
          <div className="desktop-links">
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={closeMenu} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <button className="palette-trigger" type="button" onClick={() => window.dispatchEvent(new Event("portfolio:open-palette"))} aria-label="Open navigation palette">
              <span>CTRL / ⌘ K</span>
            </button>
            <a className="nav-cta" href={contact.emailHref} target="_blank" rel="noopener noreferrer">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          </div>
          <button ref={menuToggleRef} className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
            <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
          </button>
        </nav>
        {open && (
          <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
            <Link href="/" onClick={closeMenu}>Home</Link>
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={closeMenu} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>{link.label}</Link>
            ))}
            <button type="button" onClick={() => { closeMenu(); window.dispatchEvent(new Event("portfolio:open-palette")); }}>Open command palette <kbd>CTRL / ⌘ K</kbd></button>
            <a className="mobile-cta" href={contact.emailHref} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
          </nav>
        )}
      </header>
    </>
  );
}
