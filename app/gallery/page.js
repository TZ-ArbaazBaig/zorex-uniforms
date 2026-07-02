'use client';

import React, { useState, useEffect } from 'react';
import StitchLine from '@/components/StitchLine';
import TapeDivider from '@/components/TapeDivider';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');

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
  }, [activeFilter]); // Run again when filters change to trigger reveals on newly shown items

  const galleryItems = [
    {
      id: 1,
      category: 'POLICE',
      title: 'Tamil Nadu Regulation Khaki Shirt',
      desc: 'Expertly stitched using premium 280 GSM cotton-poly drill. Built-in lanyard flaps and reinforced pocket panels.',
      img: '/images/police_uniform.png',
      spec: 'SPEC: 65% Poly / 35% Cotton Drill',
      featured: true
    },
    {
      id: 2,
      category: 'SCHOOL',
      title: 'Premium Navy School Blazer Set',
      desc: 'Traditional tailored breast pocket with custom institutional embroidery. Lined with high-durability breathable satin.',
      img: '/images/school_uniform.png',
      spec: 'SPEC: Wool-Blend Heavy Suiting',
      featured: true
    },
    {
      id: 3,
      category: 'MILITARY',
      title: 'Tactical Camouflage Field Fatigue',
      desc: 'Double-stitched stress zones, adjustable cuff flaps, and secure military button placements.',
      img: '/images/military_uniform.png',
      spec: 'SPEC: Combat Ripstop Twill'
    },
    {
      id: 4,
      category: 'CORPORATE',
      title: 'Superfine Corporate Dress Shirt',
      desc: 'Clean stitch-lines and structural collar support. Wrinkle-resistant treatment for standard shift wear.',
      img: '/images/corporate_uniform.png',
      spec: 'SPEC: 60/40 Chambray Oxford'
    },
    {
      id: 5,
      category: 'OTHERS',
      title: 'Clinical Stethoscope Scrub Uniform',
      desc: 'V-neck medical scrub top. Sewn with sweat-wicking breathability and double side pockets.',
      img: '/images/healthcare_uniform.png',
      spec: 'SPEC: Soft Medical Poplin'
    },
    {
      id: 6,
      category: 'OTHERS',
      title: 'Bespoke Tailored Formal Blazer',
      desc: 'Demonstration of our custom measurements profiling. Fits contours with precision shoulder pads.',
      img: '/images/custom_wear.png',
      spec: 'SPEC: Custom Fitted Profile'
    },
    {
      id: 7,
      category: 'POLICE',
      title: 'Armed Force Security Dress Shirt',
      desc: 'Crisp epaulet lines, breast pocket box pleats, and clean regulation buttons.',
      img: '/images/security_uniform.png',
      spec: 'SPEC: Heavy Navy Drill Cotton'
    },
    {
      id: 8,
      category: 'SCHOOL',
      title: 'Standard School Cadet Cadet Dress',
      desc: 'Starch-ready beige drill shirt and khaki trouser set. Retains form under rigorous parade checks.',
      img: '/images/school_uniform.png',
      spec: 'SPEC: Anti-Pilling Drill Twill'
    },
    {
      id: 9,
      category: 'OTHERS',
      title: 'GST Audit Professional Uniforms',
      desc: 'Industrial-grade uniforms stitched according to strict regulatory standards for auditing staff.',
      img: '/images/gst_uniform.png',
      spec: 'SPEC: Heavy-Duty Industrial Canvas'
    },
    {
      id: 10,
      category: 'OTHERS',
      title: 'Workshop Tailoring Tools Display',
      desc: 'Gold fabric scissors and measuring accessories representing our Chennai tailoring standards.',
      img: '/images/tailoring_tools.png',
      spec: 'SPEC: Premium Stitching Setup'
    }
  ];

  const categories = ['ALL', 'POLICE', 'SCHOOL', 'MILITARY', 'CORPORATE', 'OTHERS'];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const whatsappUrl = "https://wa.me/916369330737";

  return (
    <div>
      {/* Page Header */}
      <section className="section-padding" style={styles.headerSection}>
        <div className="container">
          <span className="kicker" style={{ textAlign: 'center' }}>COMPLETED PROJECTS</span>
          <div className="flourish-header" style={{ marginBottom: '1.5rem' }}>
            <h1 className="flourish-title">PROJECT GALLERY</h1>
          </div>
          <p style={styles.headerSubtitle}>
            Browse our catalog of finished uniforms and swatches. Filter by category to explore the craftsmanship built into every Chennai department regulation fit.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={styles.filterSection}>
        <div className="container" style={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                ...styles.filterBtn,
                color: activeFilter === cat ? 'var(--gold-bright)' : 'var(--ink-muted)',
                borderColor: activeFilter === cat ? 'var(--gold)' : 'transparent',
                backgroundColor: activeFilter === cat ? 'var(--bg-panel-2)' : 'transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* Gallery Grid */}
      <section className="section-padding reveal" style={{ paddingOpacity: 0.1 }}>
        <div className="container">
          <div className="gallery-grid" style={styles.grid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`gallery-card ${item.featured ? 'gallery-card-featured' : ''}`}
                style={styles.card}
              >
                <div className="gallery-image-wrapper" style={item.featured ? styles.largeImageWrapper : styles.standardImageWrapper}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={styles.image}
                    loading="lazy"
                  />
                  <span style={styles.tag}>{item.category}</span>
                </div>
                <div style={styles.cardBody}>
                  <div>
                    <span style={styles.cardSpec}>{item.spec}</span>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <p style={styles.cardDesc}>{item.desc}</p>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.cardLink}>
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TapeDivider />
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
  filterSection: {
    backgroundColor: 'var(--bg-black)',
    paddingBottom: '1rem',
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.8rem',
  },
  filterBtn: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    padding: '0.6rem 1.2rem',
    border: '1px solid transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    backgroundColor: 'var(--bg-panel)',
    border: '1px solid rgba(201, 162, 39, 0.2)',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.25s ease',
  },
  standardImageWrapper: {
    position: 'relative',
    height: '240px',
    width: '100%',
    backgroundColor: 'var(--bg-panel-2)',
  },
  largeImageWrapper: {
    position: 'relative',
    height: '320px',
    width: '100%',
    backgroundColor: 'var(--bg-panel-2)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tag: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'var(--gold)',
    color: 'var(--bg-black)',
    fontFamily: 'var(--body-font)',
    fontSize: '0.65rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    padding: '0.25rem 0.5rem',
    borderRadius: '2px',
  },
  cardBody: {
    padding: '1.5rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardSpec: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.7rem',
    color: 'var(--gold)',
    display: 'block',
    marginBottom: '0.4rem',
  },
  cardTitle: {
    fontFamily: 'var(--body-font)',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--ink-light)',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  cardLink: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--gold-bright)',
    alignSelf: 'flex-start',
    transition: 'color 0.2s ease',
  },
};

// Add standard Media queries for featured double-column layouts
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      .gallery-card-featured {
        grid-column: span 2;
      }
      .gallery-card-featured .gallery-image-wrapper {
        height: 320px !important;
      }
    }
    .gallery-card:hover {
      transform: translateY(-4px);
      border-color: var(--gold-bright) !important;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6) !important;
    }
  `;
  document.head.appendChild(styleEl);
}
