"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { contact } from "@/data/contact";

type Command = {
  label: string;
  detail: string;
  href: string;
  external?: boolean;
};

const commands: Command[] = [
  { label: "Home", detail: "Return to the top", href: "/" },
  { label: "About", detail: "Profile and education", href: "/#about" },
  { label: "Projects", detail: "Explore selected work", href: "/#projects" },
  { label: "Writing", detail: "Articles and publications", href: "/#writing" },
  { label: "Contact", detail: "Get in touch", href: "/#contact" },
  { label: "GitHub", detail: "Open GitHub profile", href: contact.github, external: true },
  { label: "LinkedIn", detail: "Open LinkedIn profile", href: contact.linkedin, external: true },
  { label: "Email", detail: contact.email, href: contact.emailHref, external: true },
];

type PaletteMode = "palette" | "help" | null;

function isEditableTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && (
    target.isContentEditable ||
    target.matches("input, textarea, select, [role='textbox'], [role='combobox'], button, a")
  );
}

export function CommandPalette() {
  const [mode, setMode] = useState<PaletteMode>(null);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dialogRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const filteredCommands = useMemo(
    () => commands.filter((command) =>
      `${command.label} ${command.detail}`.toLowerCase().includes(query.toLowerCase().trim()),
    ),
    [query],
  );

  const open = useCallback((nextMode: Exclude<PaletteMode, null>) => {
    restoreFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setQuery("");
    setSelectedIndex(0);
    setMode(nextMode);
  }, []);

  const close = useCallback(() => setMode(null), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mode) {
        event.preventDefault();
        close();
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (mode === "help") setMode("palette");
        else if (mode) close();
        else open("palette");
        return;
      }

      if (isEditableTarget(event.target)) return;

      if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key === "/") {
        event.preventDefault();
        if (!mode) open("palette");
      } else if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key === "?") {
        event.preventDefault();
        if (!mode) open("help");
      }
    };

    const onPaletteRequest = () => {
      if (!mode) open("palette");
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("portfolio:open-palette", onPaletteRequest);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("portfolio:open-palette", onPaletteRequest);
    };
  }, [close, mode, open]);

  useEffect(() => {
    if (!mode) {
      restoreFocusRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (mode === "palette") inputRef.current?.focus();
    else dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mode]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (filteredCommands.length > 0) {
        const direction = event.key === "ArrowDown" ? 1 : -1;
        setSelectedIndex((current) =>
          (current + direction + filteredCommands.length) % filteredCommands.length,
        );
      }
    }

    if (event.key === "Enter" && filteredCommands[selectedIndex]) {
      event.preventDefault();
      const command = filteredCommands[selectedIndex];
      if (command.external) window.open(command.href, "_blank", "noopener,noreferrer");
      else window.location.assign(command.href);
    }
  };

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled]), input:not([disabled])",
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!mode) return null;

  return (
    <div
      className="command-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section
        ref={dialogRef}
        className="command-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-title"
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
      >
        <div className="command-dialog-top">
          <p className="mono-label" id="command-title">
            {mode === "palette" ? "QUICK NAVIGATION" : "KEYBOARD SHORTCUTS"}
          </p>
          <button className="command-close" type="button" onClick={close} aria-label="Close dialog">
            Close <kbd>Esc</kbd>
          </button>
        </div>

        {mode === "palette" ? (
          <>
            <label className="sr-only" htmlFor="command-search">Search pages and actions</label>
            <input
              ref={inputRef}
              id="command-search"
              className="command-search"
              type="search"
              placeholder="Where would you like to go?"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleInputKeyDown}
            />
            <nav className="command-results" aria-label="Pages and actions">
              {filteredCommands.length > 0 ? filteredCommands.map((command, index) => {
                const className = `command-result${selectedIndex === index ? " is-selected" : ""}`;
                const content = (
                  <>
                    <span className="command-result-copy">
                      <strong>{command.label}</strong>
                      <small>{command.detail}</small>
                    </span>
                    <span className="command-result-arrow" aria-hidden="true">↗</span>
                  </>
                );

                return command.external ? (
                  <a
                    className={className}
                    href={command.href}
                    key={command.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={close}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    className={className}
                    href={command.href}
                    key={command.label}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onClick={close}
                  >
                    {content}
                  </Link>
                );
              }) : (
                <p className="command-empty">No matching pages or actions.</p>
              )}
            </nav>
            <div className="command-hint">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>Enter</kbd> Open</span>
              <button type="button" onClick={() => setMode("help")}>Shortcuts <kbd>?</kbd></button>
            </div>
          </>
        ) : (
          <div className="shortcut-list">
            <p><span>Open navigation</span><kbd>Ctrl K</kbd><kbd>⌘ K</kbd></p>
            <p><span>Open navigation from page</span><kbd>/</kbd></p>
            <p><span>Open this shortcuts guide</span><kbd>?</kbd></p>
            <p><span>Close an overlay</span><kbd>Esc</kbd></p>
            <p><span>Move through project cards</span><kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd></p>
            <p><span>Expand a project card</span><kbd>Enter</kbd></p>
            <button className="button button--ink" type="button" onClick={() => setMode("palette")}>
              Open navigation palette <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
