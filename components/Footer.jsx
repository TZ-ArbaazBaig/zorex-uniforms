import React from 'react';
import Link from 'next/link';
import Logomark from './Logomark';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "916369330737";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.grid}>
        
        {/* Column 1: Brand Block */}
        <div style={styles.brandBlock}>
          <div style={styles.logoWrapper}>
            <Logomark size={60} />
          </div>
          <h3 style={styles.brandTitle}>ZOREX TAILOR</h3>
          <p style={styles.tagline}>
            Specialists in all kinds of uniforms. Precision tailoring. Timeless quality. Trusted by Chennai&apos;s finest institutions since 1994.
          </p>
          {/* Social Row */}
          <div style={styles.socialRow}>
            {/* Map pin */}
            <a href="https://maps.google.com/?q=Zorex+Tailor+Periamet+Chennai" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="Location on Map">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.socialIcon} title="Chat on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            {/* Call */}
            <a href="tel:+916369330737" style={styles.socialIcon} title="Call Us">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.linksBlock}>
          <h4 style={styles.title}>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link href="/" style={styles.link}>Home</Link></li>
            <li><Link href="/services" style={styles.link}>Services</Link></li>
            <li><Link href="/gallery" style={styles.link}>Gallery</Link></li>
            <li><Link href="/about" style={styles.link}>About Us</Link></li>
            <li><Link href="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div style={styles.linksBlock}>
          <h4 style={styles.title}>Our Specialties</h4>
          <div style={styles.servicesGrid}>
            <ul style={styles.list}>
              <li style={styles.serviceItem}>Police & Paramilitary</li>
              <li style={styles.serviceItem}>School & College</li>
              <li style={styles.serviceItem}>Military & Defence</li>
              <li style={styles.serviceItem}>Corporate & Industrial</li>
              <li style={styles.serviceItem}>Hospitality & Hotel</li>
            </ul>
            <ul style={styles.list}>
              <li style={styles.serviceItem}>Healthcare & Medical</li>
              <li style={styles.serviceItem}>Events & Security</li>
              <li style={styles.serviceItem}>Common & Custom Wear</li>
              <li style={styles.serviceItem}>GST Uniforms</li>
              <li style={styles.serviceItem}>and more...</li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div style={styles.addressBlock}>
          <h4 style={styles.title}>Contact Us</h4>
          <address style={styles.address}>
            <div style={styles.contactDetail}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Muthu St, Periamet, Park Town, Chennai - 600003</span>
            </div>
            <div style={styles.contactDetail}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+916369330737" style={styles.inlineLink}>+91 63693 30737</a>
            </div>
            <div style={styles.contactDetail}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:zorextailor@gmail.com" style={styles.inlineLink}>zorextailor@gmail.com</a>
            </div>
            <div style={styles.contactDetail}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>
                Mon–Sat: 10AM–8PM<br />
                Sunday: 11AM–2PM
              </span>
            </div>
          </address>
        </div>

        {/* Column 5: Standout WhatsApp Block */}
        <div style={styles.whatsappBlock}>
          <div style={styles.whatsappCard}>
            <div style={styles.whatsappBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--whatsapp-green)' }}>
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.927 9.927 0 004.93 1.317h.005c5.506 0 9.99-4.479 9.99-9.986 0-2.67-1.037-5.18-2.92-7.061A9.925 9.925 0 0012.012 2zM12.01 20.308a8.312 8.312 0 01-4.238-1.161l-.304-.18-3.146.825.84-3.067-.198-.314a8.272 8.272 0 01-1.27-4.428c.002-4.577 3.73-8.3 8.318-8.3A8.258 8.258 0 0117.89 12.05c-.002 4.58-3.73 8.258-8.318 8.258v-.001zm4.553-6.216c-.25-.124-1.477-.727-1.707-.81-.228-.084-.395-.125-.56.124-.166.249-.641.81-.786.975-.145.166-.29.187-.54.062-.25-.125-1.05-.388-2.001-1.236-.74-.66-1.24-1.475-1.385-1.725-.145-.249-.015-.384.11-.508.112-.112.25-.29.375-.435.125-.145.166-.249.25-.415.083-.166.04-.311-.02-.436-.063-.124-.56-1.35-.768-1.85-.203-.488-.41-.422-.56-.43-.146-.007-.312-.008-.478-.008-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.891 2.407.99 2.54.1.134 1.753 2.677 4.248 3.753.593.256 1.057.41 1.417.524.597.19 1.14.162 1.57.098.477-.07 1.477-.602 1.685-1.183.208-.58.208-1.078.145-1.183-.063-.103-.228-.165-.478-.29z" />
              </svg>
              <span style={styles.badgeText}>QUICK ENQUIRY</span>
            </div>
            <h5 style={styles.whatsappCardTitle}>CHAT ON WHATSAPP</h5>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.whatsappNumberText}>
              +91 63693 30737
            </a>
            <p style={styles.whatsappCardSub}>
              For custom orders, bulk institutional quotes & fast design specifications.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.whatsappCardBtn}>
              Start Quotation &rarr;
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright bar */}
      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomContainer}>
          <p style={styles.copy}>
            &copy; {currentYear} Zorex Tailor. Chennai. All rights reserved.
          </p>
          <p style={styles.designer}>
            Command & Craft — Institutional Outfitting
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-black)',
    color: 'var(--ink-muted)',
    paddingTop: '6rem',
    borderTop: '1px solid rgba(201, 162, 39, 0.25)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    paddingBottom: '4rem',
  },
  brandBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    gridColumn: 'span 1',
  },
  logoWrapper: {
    display: 'inline-flex',
    backgroundColor: 'rgba(20, 22, 27, 0.5)',
    padding: '0.4rem',
    border: '1px solid rgba(201, 162, 39, 0.2)',
    borderRadius: '4px',
    width: 'fit-content',
  },
  brandTitle: {
    fontFamily: 'var(--display-font)',
    fontSize: '1.25rem',
    letterSpacing: '0.1em',
    color: 'var(--gold-bright)',
  },
  tagline: {
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.5',
  },
  socialRow: {
    display: 'flex',
    gap: '0.8rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgba(201, 162, 39, 0.2)',
    color: 'var(--gold)',
    transition: 'all 0.25s ease',
  },
  linksBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  title: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    letterSpacing: '0.15em',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    fontSize: '0.9rem',
    color: 'var(--ink-muted)',
    transition: 'color 0.2s ease',
  },
  serviceItem: {
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
  },
  servicesGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  addressBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  address: {
    fontStyle: 'normal',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    fontSize: '0.85rem',
  },
  contactDetail: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
    lineHeight: '1.4',
  },
  inlineLink: {
    color: 'var(--ink-light)',
    transition: 'color 0.2s ease',
    wordBreak: 'break-all',
  },
  whatsappBlock: {
    gridColumn: 'span 1',
  },
  whatsappCard: {
    backgroundColor: 'var(--bg-panel)',
    border: '1px solid var(--gold)',
    borderRadius: '4px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
  whatsappBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  badgeText: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.65rem',
    fontWeight: '700',
    color: 'var(--gold)',
    letterSpacing: '0.05em',
  },
  whatsappCardTitle: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--ink-light)',
    letterSpacing: '0.1em',
  },
  whatsappNumberText: {
    fontFamily: 'var(--display-font)',
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--gold-bright)',
    transition: 'color 0.2s ease',
  },
  whatsappCardSub: {
    fontSize: '0.75rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.4',
  },
  whatsappCardBtn: {
    alignSelf: 'flex-start',
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--gold)',
    marginTop: '0.5rem',
    transition: 'color 0.2s ease',
  },
  bottomBar: {
    borderTop: '1px solid rgba(201, 162, 39, 0.15)',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    fontSize: '0.75rem',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copy: {
    margin: 0,
  },
  designer: {
    margin: 0,
    fontFamily: 'var(--display-font)',
    color: 'var(--gold)',
  },
};

// Add standard hover animations for icons and footer links
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    footer a:hover {
      color: var(--gold-bright) !important;
    }
    footer .social-icon-hover:hover {
      background-color: rgba(201, 162, 39, 0.1) !important;
      border-color: var(--gold-bright) !important;
      color: var(--gold-bright) !important;
    }
  `;
  document.head.appendChild(styleEl);
}
