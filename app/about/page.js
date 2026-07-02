'use client';

import React, { useEffect } from 'react';
import StitchLine from '@/components/StitchLine';

export default function About() {
  // Intersection Observer for scroll-reveal animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* 1. Page Header */}
      <section className="section-padding" style={styles.headerSection}>
        <div className="container">
          <span className="kicker" style={{ textAlign: 'center' }}>OUR STORY</span>
          <div className="flourish-header" style={{ marginBottom: '1.5rem' }}>
            <h1 className="flourish-title">ABOUT ZOREX TAILOR</h1>
          </div>
          <p style={styles.headerSubtitle}>
            Stitching with military-grade precision and institutional pride in Periamet, Chennai since 1994.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 2. Brand Story split */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="about-split-row" style={styles.splitRow}>
            {/* Left Story Column */}
            <div style={styles.storyContent}>
              <span className="kicker">ESTABLISHED 1994</span>
              <h2 style={styles.sectionTitle}>THE WORKSHOP HERITAGE</h2>
              <p style={styles.text}>
                For over three decades, Zorex Tailor has stood as a beacon of discipline and precision in Chennai&apos;s tailoring landscape. Situated in Periamet, Muthu Street, we have dedicated our craft to outfitting those who command respect and bear responsibilities.
              </p>
              <p style={styles.text}>
                We specialize first and foremost in <strong>Police & Paramilitary Uniforms</strong> and <strong>School & College Uniforms</strong>. These two categories form the foundation of our daily work, where we merge strict regulation specs with standard ergonomic fits.
              </p>
              <p style={styles.text}>
                Our philosophy is simple: a uniform is more than fabric—it is a statement of identity, duty, and pride. Whether stitching a tactical camo shirt for a cadet or drafting blazer sets for a school board, our master tailors follow standard drafting protocols to guarantee a perfect fit.
              </p>
            </div>

            {/* Right Image Column */}
            <div style={styles.imageColumn}>
              <div className="stamped-frame" style={styles.imageFrame}>
                <img
                  src="/images/tailoring_tools.png"
                  alt="Tailoring Tools and Scissors on fabric"
                  style={styles.image}
                />
                <div style={styles.imageCaption}>ESTD. 1994 • CHENNAI OUTFITTERS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip (Full-width Olive Band) */}
      <section style={styles.statsSection}>
        <div className="container" style={styles.statsContainer}>
          <div style={styles.statBlock}>
            <span style={styles.statIcon}>🎖️</span>
            <span style={styles.statNumber}>20+</span>
            <span style={styles.statLabel}>Years of Experience</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statIcon}>👥</span>
            <span style={styles.statNumber}>1000+</span>
            <span style={styles.statLabel}>Satisfied Clients</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statIcon}>🏢</span>
            <span style={styles.statNumber}>50+</span>
            <span style={styles.statLabel}>Institutional Clients</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statIcon}>🎯</span>
            <span style={styles.statNumber}>100%</span>
            <span style={styles.statLabel}>Quality Assured</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statIcon}>🕒</span>
            <span style={styles.statNumber}>ON-TIME</span>
            <span style={styles.statLabel}>Stitched Delivery</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 4. Commitment to Quality Section */}
      <section className="section-padding reveal" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="about-split-row about-split-row-reverse" style={styles.splitRow}>
            {/* Left Image Column */}
            <div style={styles.imageColumn}>
              <div className="stamped-frame" style={styles.imageFrame}>
                <img
                  src="/images/hero_jacket.png"
                  alt="Formal cadet uniform jacket display"
                  style={styles.image}
                />
                <div style={styles.imageCaption}>COMMAND & CRAFT SPECIFICATION</div>
              </div>
            </div>

            {/* Right Story Column */}
            <div style={styles.storyContent}>
              <span className="kicker">INSTITUTIONAL COMMITMENT</span>
              <h2 style={styles.sectionTitle}>STITCHED FOR LEADERSHIP</h2>
              <p style={styles.text}>
                We source only high-durability fabrics that resist pilling, color fading, and heavy tearing. Our police uniforms are constructed using heavy-duty poly-cotton drill woven specifically to withstand daily patrols in Chennai&apos;s humid weather.
              </p>
              <p style={styles.text}>
                Our school attire and NCC cadet sets feature growth-adjustability (extra seam let-outs) to accommodate rapid student growth cycles. By reinforcing stress nodes—such as pocket flaps, cuffs, armholes, and trouser seats—we significantly prolong the life of each garment.
              </p>
              <p style={styles.text}>
                No order is too small for precision, and no order is too large for personalized attention. From Chennai local squads to regional academic campuses, Zorex is the institutional benchmark for tailoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  headerSection: {
    backgroundColor: 'var(--bg-black)',
    textAlign: 'center',
    paddingBottom: '2rem',
  },
  headerSubtitle: {
    color: 'var(--ink-muted)',
    fontSize: '1.05rem',
    lineHeight: '1.7',
    maxWidth: '750px',
    margin: '0 auto',
  },
  splitRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    alignItems: 'center',
  },
  storyContent: {
    flex: '1.1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
    color: 'var(--gold-bright)',
    letterSpacing: '0.02em',
    lineHeight: '1.2',
  },
  text: {
    fontSize: '0.95rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.7',
  },
  imageColumn: {
    flex: '0.9',
    width: '100%',
    maxWidth: '440px',
  },
  imageFrame: {
    position: 'relative',
    height: '320px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageCaption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(11, 12, 14, 0.85)',
    color: 'var(--gold)',
    fontFamily: 'var(--mono-font)',
    fontSize: '0.65rem',
    fontWeight: '700',
    textAlign: 'center',
    padding: '0.6rem 0',
    letterSpacing: '0.1em',
    borderTop: '1px solid rgba(201, 162, 39, 0.2)',
  },
  statsSection: {
    backgroundColor: 'var(--olive)',
    color: 'var(--ink-light)',
    padding: '4rem 0',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '3rem',
    textAlign: 'center',
  },
  statBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
    flex: '1 1 180px',
  },
  statIcon: {
    fontSize: '1.5rem',
  },
  statNumber: {
    fontFamily: 'var(--display-font)',
    fontSize: '2.75rem',
    fontWeight: '800',
    color: 'var(--ink-light)',
    lineHeight: '1',
  },
  statLabel: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'rgba(244, 239, 226, 0.7)',
  },
};

// Add standard Media queries for responsive layouts
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      .about-split-row {
        flex-direction: row !important;
        gap: 5rem !important;
      }
      .about-split-row-reverse {
        flex-direction: row-reverse !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
