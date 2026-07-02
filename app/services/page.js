'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import StitchLine from '@/components/StitchLine';
import TapeDivider from '@/components/TapeDivider';

export default function Services() {
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

  const otherSpecialties = [
    { id: 'military', title: 'Military & Defence', img: '/images/military_uniform.png', desc: 'Heavy fatigue drill twills, combat ripstop shirts, and reinforced cargo trousers built for field endurance.', spec: 'Drill Twill / Camo Ripstop' },
    { id: 'corporate', title: 'Corporate & Industrial', img: '/images/corporate_uniform.png', desc: 'Sleek executive button-ups, anti-wrinkle office trousers, factory boiler suits, and dust coats.', spec: 'High-Wash Poly-Cotton Blends' },
    { id: 'hospitality', title: 'Hospitality & Hotel', img: '/images/hospitality_uniform.png', desc: 'Chef coats with turnback cuffs, front-office structured blazers, aprons, and butler waistcoats.', spec: 'Stain-Resistant Twill' },
    { id: 'healthcare', title: 'Healthcare & Medical', img: '/images/healthcare_uniform.png', desc: 'Hygiene-focused breathable scrub sets, clinical lab coats, and support staff uniforms.', spec: 'Breathable Poplin / Microfiber' },
    { id: 'security', title: 'Events & Security', img: '/images/security_uniform.png', desc: 'Structured guard shirts, peak caps, double-breasted officer coats, and ceremonial lanyards.', spec: 'Heavy Regulation Suiting' },
    { id: 'custom', title: 'Common & Custom Wear', img: '/images/custom_wear.png', desc: 'Alterations, adjustments, resizing, and custom bespoke clothing stitched to specific customer dimensions.', spec: 'Personalized Fit Profiles' },
    { id: 'gst', title: 'GST Uniforms', img: '/images/gst_uniform.png', desc: 'Standardized industrial uniform solutions designed for regulatory audit standards.', spec: 'Durable Canvas & Drill' },
    { id: 'more', title: 'And more...', img: '/images/more_placeholder.png', desc: 'Custom embroidery, emblem stitching, measurement profiling, and bulk fittings.', spec: 'Bespoke Custom Requests' }
  ];

  return (
    <div>
      {/* 1. Page Header */}
      <section className="section-padding" style={styles.headerSection}>
        <div className="container">
          <span className="kicker" style={{ textAlign: 'center' }}>WORKSHOP SPECIFICATIONS</span>
          <div className="flourish-header" style={{ marginBottom: '1.5rem' }}>
            <h1 className="flourish-title">OUR SERVICES</h1>
          </div>
          <p style={styles.headerSubtitle}>
            Our garments are custom drafted by master tailors with decades of institutional outfitting experience. Stitched with double-reinforced seams and regulation-approved materials.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 2. Featured Specialty 1: Police & Paramilitary */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="services-feature-row" style={styles.featureRow}>
            {/* Left/Text Side */}
            <div style={styles.featureContent}>
              <span className="kicker">SERVICE SPEC 01 // MAIN SPECIALTY</span>
              <h2 style={styles.featureTitle}>Police & Paramilitary</h2>
              <p style={styles.featureDesc}>
                We are Chennai&apos;s trusted workshop for police tailoring. Every garment is stitched using regulation-approved khaki and navy drill fabrics that survive rigorous field duty. Our custom patterns follow department codes for pocket spacing, badge loops, and shoulder straps.
              </p>
              
              <div style={styles.technicalBox}>
                <h4 style={styles.technicalBoxTitle}>TAILORING SPECIFICATIONS:</h4>
                <ul style={styles.technicalBoxList}>
                  <li><strong>Chennai Regulation Fit:</strong> Custom drafted patterns based on individual officer profiles.</li>
                  <li><strong>Fabric Selection:</strong> Premium weight 100% Khaki Drill & durable navy blends.</li>
                  <li><strong>Pocket Engineering:</strong> Reinforced pocket flaps, exact spacing for notebook/tools.</li>
                  <li><strong>Reinforcement:</strong> Heavy-duty thread at stress zones, double-stitched back seams.</li>
                  <li><strong>Insignia Placement:</strong> Pre-measured arm badge backings and lanyard loops.</li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Order Police Uniforms</span>
              </a>
            </div>

            {/* Right/Image Side */}
            <div style={styles.featureImageWrapper}>
              <div className="stamped-frame" style={styles.imageFrame}>
                <img
                  src="/images/police_uniform.png"
                  alt="Khaki Police Uniform Close-up"
                  style={styles.featureImage}
                />
                <div style={styles.imageLabel}>REGULATION DRILL • 280 GSM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 3. Featured Specialty 2: School & College */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="services-feature-row services-feature-row-reverse" style={styles.featureRow}>
            {/* Left/Text Side */}
            <div style={styles.featureContent}>
              <span className="kicker">SERVICE SPEC 02 // MAIN SPECIALTY</span>
              <h2 style={styles.featureTitle}>School & College</h2>
              <p style={styles.featureDesc}>
                Uniforms designed to survive the active school day. We stitch custom sizes for kindergarten to higher secondary students, incorporating functional comfort and premium materials that hold up to repeated washing.
              </p>
              
              <div style={styles.technicalBox}>
                <h4 style={styles.technicalBoxTitle}>TAILORING SPECIFICATIONS:</h4>
                <ul style={styles.technicalBoxList}>
                  <li><strong>Growth Adjustability:</strong> Extra hem lengths and let-out seam allowances on cuffs.</li>
                  <li><strong>Comfort Mechanics:</strong> Active box pleats, elasticated panels, and breathable linings.</li>
                  <li><strong>Color Fastness:</strong> Specially dyed yarn-dyed checks to resist Chennai sun fading.</li>
                  <li><strong>NCC Cadet Regulations:</strong> Heavy drill shirts, lanyards, and exact brass badge mounting.</li>
                  <li><strong>Durability Standard:</strong> Double-reinforced elbows, knees, and heavy-duty zip fittings.</li>
                </ul>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Order School Uniforms</span>
              </a>
            </div>

            {/* Right/Image Side */}
            <div style={styles.featureImageWrapper}>
              <div className="stamped-frame" style={styles.imageFrame}>
                <img
                  src="/images/school_uniform.png"
                  alt="School blazer and tie display"
                  style={styles.featureImage}
                />
                <div style={styles.imageLabel}>PREMIUM SUITING • CADET WEAR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TapeDivider />

      {/* 4. Other Specialties Grid */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="flourish-header" style={{ marginBottom: '3rem' }}>
            <h2 className="flourish-title">OTHER SPECIALTIES</h2>
          </div>

          <div style={styles.grid}>
            {otherSpecialties.map((item) => (
              <div key={item.id} className="specialty-card">
                <div className="specialty-card-body" style={{ minHeight: '200px' }}>
                  <div>
                    <h3 className="specialty-card-title">{item.title}</h3>
                    <p className="specialty-card-desc">{item.desc}</p>
                  </div>
                  <div style={styles.cardFooter}>
                    <span style={styles.specLabel}>{item.spec}</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.cardBtn}>
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 5. Benefits Summary Row */}
      <section className="section-padding reveal" style={{ backgroundColor: 'var(--bg-panel)', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="flourish-header" style={{ marginBottom: '4rem' }}>
            <h2 className="flourish-title">THE WORKSHOP ADVANTAGE</h2>
          </div>
          <div style={styles.benefitsRow}>
            <div style={styles.benefitBlock}>
              <span style={styles.benefitIcon}>✂️</span>
              <h4 style={styles.benefitTitle}>Custom Cut</h4>
              <p style={styles.benefitDesc}>Individually drafted patterns for an anatomical fit, avoiding standard box shapes.</p>
            </div>
            <div style={styles.benefitBlock}>
              <span style={styles.benefitIcon}>🧵</span>
              <h4 style={styles.benefitTitle}>Double Stitched</h4>
              <p style={styles.benefitDesc}>Stress seams are sewn twice with industrial-grade threads for field-tested resilience.</p>
            </div>
            <div style={styles.benefitBlock}>
              <span style={styles.benefitIcon}>📏</span>
              <h4 style={styles.benefitTitle}>Let-Out Seams</h4>
              <p style={styles.benefitDesc}>Built-in allowances in school clothing to accommodate rapid student growth cycles.</p>
            </div>
            <div style={styles.benefitBlock}>
              <span style={styles.benefitIcon}>📦</span>
              <h4 style={styles.benefitTitle}>On-Time Bulk</h4>
              <p style={styles.benefitDesc}>Streamlined production paths ensure large institutional shipments land on-schedule.</p>
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
  featureRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    alignItems: 'center',
  },
  featureContent: {
    flex: '1.1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.2rem',
  },
  featureTitle: {
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    letterSpacing: '0.01em',
    color: 'var(--gold-bright)',
  },
  featureDesc: {
    color: 'var(--ink-muted)',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    maxWidth: '580px',
  },
  technicalBox: {
    width: '100%',
    backgroundColor: 'var(--bg-panel)',
    borderLeft: '4px solid var(--gold)',
    padding: '1.5rem',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  technicalBoxTitle: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.8rem',
    color: 'var(--gold)',
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
  },
  technicalBoxList: {
    listStyleType: 'square',
    paddingLeft: '1.1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: 'var(--ink-light)',
  },
  featureImageWrapper: {
    flex: '0.9',
    width: '100%',
    maxWidth: '440px',
  },
  imageFrame: {
    position: 'relative',
    height: '340px',
    width: '100%',
  },
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageLabel: {
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1.5rem',
    borderTop: '1px solid rgba(201, 162, 39, 0.15)',
    paddingTop: '1rem',
  },
  specLabel: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.7rem',
    color: 'var(--gold)',
    fontWeight: '700',
  },
  cardBtn: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--ink-light)',
    transition: 'color 0.2s ease',
  },
  benefitsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '3.5rem',
    marginTop: '1rem',
  },
  benefitBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  benefitIcon: {
    fontSize: '1.5rem',
    backgroundColor: 'var(--bg-panel-2)',
    border: '1px solid rgba(201, 162, 39, 0.15)',
    borderRadius: '4px',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitTitle: {
    fontSize: '1rem',
    color: 'var(--gold-bright)',
  },
  benefitDesc: {
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.5',
  },
};

// Add standard Media queries for responsive layouts
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      .services-feature-row {
        flex-direction: row !important;
        gap: 5rem !important;
      }
      .services-feature-row-reverse {
        flex-direction: row-reverse !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
}
