'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import StitchLine from '@/components/StitchLine';
import TapeDivider from '@/components/TapeDivider';
import Logomark from '@/components/Logomark';

export default function Home() {
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

  const whatsappUrl = "https://wa.me/916369330737";

  const specialties = [
    { id: 'police', title: 'Police & Paramilitary', img: '/images/police_uniform.png', desc: 'Stitched to exact regulation specs. Heavy-duty drill fabrics with double seams.' },
    { id: 'school', title: 'School & College', img: '/images/school_uniform.png', desc: 'Durable, comfortable uniforms, blazers, and NCC cadet drill wear.' },
    { id: 'military', title: 'Military & Defence', img: '/images/military_uniform.png', desc: 'Heavy field combat attire, jackets, and camouflage fatigue shirts.' },
    { id: 'corporate', title: 'Corporate & Industrial', img: '/images/corporate_uniform.png', desc: 'High-wash durability shirts, trousers, lab coats, and boiler suits.' },
    { id: 'hospitality', title: 'Hospitality & Hotel', img: '/images/hospitality_uniform.png', desc: 'Sharp reception wear, chef jackets, aprons, and butler vests.' },
    { id: 'healthcare', title: 'Healthcare & Medical', img: '/images/healthcare_uniform.png', desc: 'Hygiene-focused scrubs, doctor coats, and ward staff clothing.' },
    { id: 'security', title: 'Events & Security', img: '/images/security_uniform.png', desc: 'Crisp guard shirts, peak caps, brass-buttoned coats, and lanyards.' },
    { id: 'custom', title: 'Common & Custom Wear', img: '/images/custom_wear.png', desc: 'Bespoke tailoring, alterations, adjustments, and customized garments.' },
    { id: 'gst', title: 'GST Uniforms', img: '/images/gst_uniform.png', desc: 'Regulation-compliant industrial wear stitched for high durability.' },
    { id: 'more', title: 'And more...', img: '/images/more_placeholder.png', desc: 'Custom stitching requests, embroidery, and specialized fittings.' }
  ];

  return (
    <div>
      {/* 1. Hero & Specialists Panel Section */}
      <section style={styles.heroSection}>
        {/* Full-bleed background hero image with dark gradient */}
        <div style={styles.heroBgImage}></div>
        <div style={styles.heroBgOverlay}></div>

        <div className="container hero-container" style={{ position: 'relative', zIndex: 3 }}>
          {/* Left Column: Hero Content */}
          <div style={styles.heroContent}>
            <span className="kicker">PRECISION • DISCIPLINE • PERFECTION</span>
            <h1 className="hero-headline">
              <span className="hero-line-1">UNIFORMS</span>
              <span className="hero-line-2">THAT COMMAND</span>
              <span className="hero-line-3">RESPECT & CONFIDENCE</span>
            </h1>
            <p style={styles.heroDesc}>
              Premium uniform tailoring for every purpose. Stitched with military precision. Delivered with institutional pride.
            </p>
            
            <div style={styles.heroActions}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>CHAT ON WHATSAPP — 63693 30737</span>
              </a>
              <Link href="/services" className="btn-outline">
                <span>VIEW SERVICES &rarr;</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div style={styles.trustRow}>
              <span style={styles.trustItem}>✓ Premium Fabrics</span>
              <span style={styles.trustItem}>✓ Expert Tailors</span>
              <span style={styles.trustItem}>✓ On-Time Delivery</span>
              <span style={styles.trustItem}>✓ Bulk Orders Welcome</span>
            </div>
          </div>

          {/* Right Column: Specialists Box */}
          <div style={styles.heroSidebar}>
            <div className="specialists-box">
              <div style={styles.specialistsCrest}>
                <Logomark size={42} />
              </div>
              <span style={styles.specialistsKicker}>SPECIALISTS IN</span>
              <h3 style={styles.specialistsTitle}>ALL KINDS OF UNIFORMS</h3>
              <ul className="specialists-list">
                {specialties.map((item, idx) => (
                  <li key={item.id} className="specialists-item">
                    <span style={styles.specialistBullet}>♦</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 2. Specialties Grid Section */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="flourish-header">
            <h2 className="flourish-title">OUR UNIFORM SPECIALTIES</h2>
          </div>

          <div className="specialties-grid">
            {specialties.map((item, idx) => {
              const hasImage = idx < 2;
              return (
                <div key={item.id} className="specialty-card">
                  {hasImage && (
                    <div className="specialty-image-wrapper">
                      <img
                        src={item.img}
                        alt={item.title}
                        style={styles.cardImage}
                        loading="lazy"
                      />
                      <span style={styles.featuredBadge}>MAIN SPECIALTY</span>
                    </div>
                  )}
                  <div className="specialty-card-body" style={!hasImage ? { minHeight: '180px' } : {}}>
                    <div>
                      <h3 className="specialty-card-title">{item.title}</h3>
                      <p className="specialty-card-desc">{item.desc}</p>
                    </div>
                    <Link href="/services" style={styles.cardLink}>
                      <span>Details & Spec sheet →</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measuring Tape Divider */}
      <TapeDivider />

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

      {/* Stats Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 4. Crafted With Perfection Section */}
      <section className="section-padding reveal" style={{ backgroundColor: 'var(--bg-panel)' }}>
        <div className="container crafted-layout">
          {/* Left Column: Narrative & Spool Photo */}
          <div style={styles.craftedLeft}>
            <span className="kicker">THE TAILORING WORKSHOP</span>
            <h2 style={styles.craftedTitle}>CRAFTED WITH PERFECTION</h2>
            <div style={styles.chalkWrapper}>
              <span className="chalk-text">&quot;Quality is our uniform.&quot;</span>
            </div>
            <p style={styles.craftedDesc}>
              Since 1994, our Periamet workshop has stood for durability and precision. We design custom fittings for institutional officers, cadets, and school boards with double-reinforced stitching and heavy-wear checks.
            </p>
          </div>

          {/* Right Column: Benefits list & Tools Photo */}
          <div style={styles.craftedRight}>
            <div style={styles.benefitsList}>
              <div style={styles.benefitItem}>
                <div style={styles.benefitIcon}>✂️</div>
                <div>
                  <h4 style={styles.benefitTitle}>Premium Fabrics</h4>
                  <p style={styles.benefitText}>Heavy patrol drills, anti-pilling school twills, and high-durability poly-cottons.</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <div style={styles.benefitIcon}>📏</div>
                <div>
                  <h4 style={styles.benefitTitle}>Perfect Fit Guarantee</h4>
                  <p style={styles.benefitText}>Every uniform custom cut to measurement profiles for maximum comfort.</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <div style={styles.benefitIcon}>🧵</div>
                <div>
                  <h4 style={styles.benefitTitle}>Strong Double Stitching</h4>
                  <p style={styles.benefitText}>Reinforced armholes, knees, and stress points to prolong uniform life.</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <div style={styles.benefitIcon}>📐</div>
                <div>
                  <h4 style={styles.benefitTitle}>Custom Regulation Design</h4>
                  <p style={styles.benefitText}>Built exactly to Chennai police and school board guidelines.</p>
                </div>
              </div>
              <div style={styles.benefitItem}>
                <div style={styles.benefitIcon}>📦</div>
                <div>
                  <h4 style={styles.benefitTitle}>Bulk Institutional Supply</h4>
                  <p style={styles.benefitText}>Optimized workflow to deliver 100 to 10,000+ units on-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '4rem 0',
  },
  heroBgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('/images/hero_jacket.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
    zIndex: 1,
  },
  heroBgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #0B0C0E 40%, rgba(11, 12, 14, 0.8) 60%, rgba(11, 12, 14, 0.3) 100%)',
    zIndex: 2,
  },
  heroContent: {
    maxWidth: '700px',
  },
  heroDesc: {
    color: 'var(--ink-muted)',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: '1.6',
    marginTop: '1.5rem',
    maxWidth: '560px',
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginTop: '2.5rem',
    alignItems: 'center',
  },
  trustRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem',
    marginTop: '3.5rem',
    fontSize: '0.8rem',
    color: 'var(--gold)',
    fontWeight: '600',
  },
  trustItem: {
    backgroundColor: 'rgba(20, 22, 27, 0.6)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    border: '1px solid rgba(201, 162, 39, 0.15)',
  },
  heroSidebar: {
    width: '100%',
    maxWidth: '420px',
    justifySelf: 'end',
  },
  specialistsCrest: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  specialistsKicker: {
    display: 'block',
    fontFamily: 'var(--mono-font)',
    fontSize: '0.7rem',
    color: 'var(--gold)',
    letterSpacing: '0.15em',
    textAlign: 'center',
  },
  specialistsTitle: {
    fontFamily: 'var(--display-font)',
    fontSize: '1.15rem',
    color: 'var(--ink-light)',
    letterSpacing: '0.05em',
    textAlign: 'center',
    marginTop: '0.2rem',
    borderBottom: '1px solid rgba(201, 162, 39, 0.2)',
    paddingBottom: '1rem',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'var(--gold)',
    color: 'var(--bg-black)',
    fontFamily: 'var(--body-font)',
    fontSize: '0.65rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    padding: '0.3rem 0.6rem',
    borderRadius: '2px',
  },
  cardLink: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--gold)',
    marginTop: '1.5rem',
    display: 'inline-block',
    transition: 'color 0.2s ease',
  },
  statsSection: {
    backgroundColor: 'var(--olive)',
    color: 'var(--ink-light)',
    padding: '4rem 0',
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
  craftedLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  craftedTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    letterSpacing: '0.02em',
  },
  chalkWrapper: {
    marginTop: '-0.5rem',
    marginBottom: '1rem',
  },
  craftedDesc: {
    fontSize: '0.95rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.7',
    maxWidth: '520px',
  },
  craftedPhotoWrapper: {
    marginTop: '1.5rem',
    border: '1px solid rgba(201, 162, 39, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '260px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
  },
  craftedPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  craftedRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  benefitsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.8rem',
  },
  benefitItem: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  benefitIcon: {
    fontSize: '1.25rem',
    backgroundColor: 'var(--bg-panel-2)',
    border: '1px solid rgba(201, 162, 39, 0.25)',
    borderRadius: '4px',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  benefitTitle: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--ink-light)',
  },
  benefitText: {
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.5',
    marginTop: '0.2rem',
  },
};
