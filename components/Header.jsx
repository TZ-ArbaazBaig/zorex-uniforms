'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logomark from './Logomark';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const whatsappNumber = "916369330737";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        {/* Brand Logo & Name */}
        <Link href="/" style={styles.brand}>
          <Logomark size={38} />
          <div style={styles.brandTitles}>
            <span style={styles.brandText}>ZOREX TAILOR</span>
            <span style={styles.brandSub}>PERIAMET, CHENNAI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
              style={styles.desktopLink}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={styles.ctaButton}
          >
            {/* WhatsApp Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>WHATSAPP 63693 30737</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={handleToggle}
          style={styles.mobileToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <nav style={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                style={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ ...styles.ctaButton, marginTop: '1.5rem', width: '100%', padding: '0.8rem 1.5rem' }}
              onClick={() => setIsOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WHATSAPP 63693 30737</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(11, 12, 14, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(201, 162, 39, 0.25)',
    padding: '1rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  brandTitles: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandText: {
    fontFamily: 'var(--display-font)',
    fontWeight: '800',
    fontSize: '1.2rem',
    letterSpacing: '0.08em',
    color: 'var(--gold-bright)',
    lineHeight: '1.1',
  },
  brandSub: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    fontWeight: '600',
    color: 'var(--ink-muted)',
    marginTop: '2px',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '2rem',
  },
  desktopLink: {
    fontSize: '0.8rem',
  },
  ctaButton: {
    padding: '0.6rem 1.2rem',
    fontSize: '0.75rem',
    borderRadius: '4px',
  },
  mobileToggle: {
    display: 'block',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'var(--bg-panel)',
    borderBottom: '1px solid rgba(201, 162, 39, 0.25)',
    padding: '2rem 1.5rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'center',
  },
  mobileLink: {
    fontSize: '0.95rem',
    width: '100%',
    textAlign: 'center',
    padding: '0.5rem 0',
  },
};

// Add standard stylesheet classes for mobile display toggling
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      header button[aria-label="Toggle menu"] {
        display: none !important;
      }
      header nav {
        display: flex !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
