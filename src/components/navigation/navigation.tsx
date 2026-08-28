"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
      .map((link) => document.querySelector(link.href))
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
          MOHIT<span className="brand-dot">.</span>
        </Link>
        <div className="desktop-links">
          {links.map((link) => <a href={link.href} key={link.href} aria-current={activeSection === link.href ? "location" : undefined}>{link.label}</a>)}
          <a className="nav-cta" href="#contact">Let&apos;s Talk <span aria-hidden="true">↗</span></a>
        </div>
        <button ref={menuToggleRef} className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
          <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22 }}>
            {links.map((link, index) => (
              <motion.a href={link.href} key={link.href} onClick={closeMenu} aria-current={activeSection === link.href ? "location" : undefined} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                <span>0{index + 1}</span>{link.label}
              </motion.a>
            ))}
            <a className="mobile-cta" href="#contact" onClick={closeMenu}>Let&apos;s Talk <span aria-hidden="true">↗</span></a>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
