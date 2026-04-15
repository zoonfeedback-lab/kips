"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#affiliations", label: "About" },
  { href: "#branches", label: "Admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary">
        <Link href="#home" className={styles.brand} onClick={() => setIsOpen(false)}>
          <span className={styles.brandMark}>K</span>
          <span className={styles.brandText}>KIPS Academy</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className={styles.applyButton}>
          Apply Now
        </Link>
      </nav>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="#contact" className={styles.mobileApply} onClick={() => setIsOpen(false)}>
          Apply Now
        </Link>
      </div>
    </header>
  );
}

