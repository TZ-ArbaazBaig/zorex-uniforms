'use client';

import React, { useState, useEffect } from 'react';
import StitchLine from '@/components/StitchLine';
import TapeDivider from '@/components/TapeDivider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    phone: '',
    email: '',
    uniformType: 'Police & Paramilitary',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      // Create pre-filled WhatsApp message URL as secondary fall-back
      const messageText = `Hi Zorex Tailor, my name is ${formData.name}. I need ${formData.uniformType} uniforms for ${formData.institution || 'my group'}. Contact: ${formData.phone}. Message: ${formData.message}`;
      const encodedText = encodeURIComponent(messageText);
      window.open(`https://wa.me/916369330737?text=${encodedText}`, '_blank');
      setSubmitted(false);
      setFormData({
        name: '',
        institution: '',
        phone: '',
        email: '',
        uniformType: 'Police & Paramilitary',
        message: ''
      });
    }, 1000);
  };

  const whatsappUrl = "https://wa.me/916369330737";

  return (
    <div>
      {/* 1. Page Header */}
      <section className="section-padding" style={styles.headerSection}>
        <div className="container">
          <span className="kicker" style={{ textAlign: 'center' }}>CONNECT WITH OUR WORKSHOP</span>
          <div className="flourish-header" style={{ marginBottom: '1.5rem' }}>
            <h1 className="flourish-title">CONTACT & LOCATION</h1>
          </div>
          <p style={styles.headerSubtitle}>
            Located in Chennai&apos;s historic tailoring district of Periamet. Submit your uniform requirements below to begin, or chat with us instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <StitchLine />
      </div>

      {/* 2. Main Contact Columns */}
      <section className="section-padding reveal" style={{ paddingOpacity: 0.1 }}>
        <div className="container">
          <div className="contact-grid" style={styles.grid}>
            
            {/* Left: Contact Info & Address */}
            <div style={styles.infoCol}>
              <span className="kicker">DIRECT ENQUIRIES</span>
              <h2 style={styles.colTitle}>THE WORKSHOP</h2>
              
              <div style={styles.infoGroup}>
                <h4 style={styles.infoGroupTitle}>PHYSICAL LOCATION:</h4>
                <address style={styles.address}>
                  <strong>Zorex Tailor</strong><br />
                  Muthu St, Periamet, Park Town,<br />
                  Chennai - 600003,<br />
                  Tamil Nadu, India
                </address>
                <div style={styles.landmark}>Landmark: Opposite Muthu Street Mosque, Periamet</div>
              </div>

              <div style={styles.infoGroup}>
                <h4 style={styles.infoGroupTitle}>COMMUNICATION LINKS:</h4>
                <div style={styles.linkItem}>
                  <span style={styles.linkKey}>WHATSAPP CHAT:</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={styles.linkVal}>
                    +91 63693 30737 (Click to start chat)
                  </a>
                </div>
                <div style={styles.linkItem}>
                  <span style={styles.linkKey}>DIRECT TELEPHONE:</span>
                  <a href="tel:+916369330737" style={styles.linkVal}>
                    +91 63693 30737
                  </a>
                </div>
                <div style={styles.linkItem}>
                  <span style={styles.linkKey}>EMAIL INBOX:</span>
                  <a href="mailto:zorextailor@gmail.com" style={styles.linkVal}>
                    zorextailor@gmail.com
                  </a>
                </div>
              </div>

              <div style={styles.infoGroup}>
                <h4 style={styles.infoGroupTitle}>STITCHING HOURS:</h4>
                <p style={styles.hours}>Monday – Saturday: <strong>10:00 AM – 8:00 PM</strong></p>
                <p style={styles.hours}>Sunday: <strong>11:00 AM – 2:00 PM</strong></p>
              </div>

              {/* Instant WhatsApp CTA block */}
              <div style={styles.quickCta}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Instant WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={styles.formCol}>
              <div className="specialists-box" style={{ padding: '2.5rem' }}>
                <span className="kicker" style={{ marginBottom: '0.5rem' }}>SPECIFICATION INTAKE</span>
                <h3 style={styles.formTitle}>SUBMIT AN ENQUIRY</h3>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label} htmlFor="name">Name / Officer</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="e.g. Inspector Rajan / Headmistress Sarah"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label} htmlFor="institution">Institution / School / Dept</label>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="e.g. Police Division / St. Marys Academy"
                      />
                    </div>
                  </div>

                  <div style={styles.formRow}>
                    <div style={styles.formGroup}>
                      <label style={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label} htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="name@gmail.com"
                      />
                    </div>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="uniformType">Uniform Specialty</label>
                    <select
                      id="uniformType"
                      name="uniformType"
                      value={formData.uniformType}
                      onChange={handleChange}
                      style={styles.select}
                    >
                      <option value="Police & Paramilitary">Police & Paramilitary</option>
                      <option value="School & College">School & College</option>
                      <option value="Military & Defence">Military & Defence</option>
                      <option value="Corporate & Industrial">Corporate & Industrial</option>
                      <option value="Hospitality & Hotel">Hospitality & Hotel</option>
                      <option value="Healthcare & Medical">Healthcare & Medical</option>
                      <option value="Events & Security">Events & Security</option>
                      <option value="Alterations & Adjustments">Alterations & Adjustments</option>
                      <option value="Other Custom Work">Other Custom Work</option>
                    </select>
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="message">Requirement Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={styles.textarea}
                      placeholder="List details: Quantity, measurements sheets, embroidery crest details, custom delivery date..."
                    ></textarea>
                  </div>

                  <button type="submit" disabled={submitted} className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    {submitted ? 'Routing to WhatsApp...' : 'Submit & Connect on WhatsApp →'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Embed Section */}
      <section className="section-padding reveal" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <span className="kicker" style={{ textAlign: 'center' }}>VISIT OUR WORKSHOP</span>
          <div className="flourish-header" style={{ marginBottom: '2.5rem' }}>
            <h2 className="flourish-title">LOCATION MAP</h2>
          </div>
          
          <div className="stamped-frame" style={styles.mapFrame}>
            <iframe
              title="Zorex Tailor Location Map"
              width="100%"
              height="450"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.2662%2C13.0805%2C80.2762%2C13.0905&amp;layer=mapnik&amp;marker=13.0855%2C80.2712"
              style={styles.mapIframe}
            ></iframe>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3.5rem',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.8rem',
  },
  colTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    color: 'var(--gold-bright)',
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  infoGroupTitle: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.75rem',
    color: 'var(--gold)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  address: {
    fontSize: '0.95rem',
    color: 'var(--ink-light)',
    fontStyle: 'normal',
    lineHeight: '1.6',
  },
  landmark: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.85rem',
    color: 'var(--ink-muted)',
    fontStyle: 'italic',
  },
  linkItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  linkKey: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.65rem',
    color: 'var(--ink-muted)',
  },
  linkVal: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--gold)',
    borderBottom: '1px dashed rgba(201, 162, 39, 0.4)',
    paddingBottom: '2px',
    width: 'fit-content',
    transition: 'all 0.2s ease',
  },
  hours: {
    fontSize: '0.9rem',
    color: 'var(--ink-light)',
  },
  quickCta: {
    width: '100%',
    maxWidth: '320px',
    marginTop: '0.5rem',
  },
  formCol: {
    width: '100%',
  },
  formTitle: {
    fontFamily: 'var(--display-font)',
    fontSize: '1.25rem',
    color: 'var(--ink-light)',
    letterSpacing: '0.05em',
    borderBottom: '1px solid rgba(201, 162, 39, 0.2)',
    paddingBottom: '0.75rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--ink-light)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  input: {
    backgroundColor: 'var(--bg-panel-2)',
    border: '1px solid rgba(201, 162, 39, 0.3)',
    borderRadius: '4px',
    color: 'var(--ink-light)',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--body-font)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  select: {
    backgroundColor: 'var(--bg-panel-2)',
    border: '1px solid rgba(201, 162, 39, 0.3)',
    borderRadius: '4px',
    color: 'var(--ink-light)',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--body-font)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    cursor: 'pointer',
  },
  textarea: {
    backgroundColor: 'var(--bg-panel-2)',
    border: '1px solid rgba(201, 162, 39, 0.3)',
    borderRadius: '4px',
    color: 'var(--ink-light)',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--body-font)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    resize: 'vertical',
  },
  mapFrame: {
    position: 'relative',
    height: '450px',
    width: '100%',
  },
  mapIframe: {
    display: 'block',
    width: '100%',
    height: '100%',
    filter: 'invert(0.9) hue-rotate(185deg) contrast(1.1) brightness(0.9)', // Stylized maps for dark theme
  },
};

// Add standard Media queries for responsive layouts
if (typeof window !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @media (min-width: 992px) {
      .contact-grid {
        grid-template-columns: 0.8fr 1.2fr !important;
        gap: 5rem !important;
      }
      .contact-grid form div {
        grid-template-columns: 1fr 1fr !important;
      }
      .contact-grid form div.form-group {
        grid-template-columns: 1fr !important;
      }
    }
    .contact-grid input:focus, 
    .contact-grid select:focus, 
    .contact-grid textarea:focus {
      border-color: var(--gold-bright) !important;
    }
  `;
  document.head.appendChild(styleEl);
  
  // Apply class tags to form structure
  setTimeout(() => {
    const row = document.querySelectorAll('form > div');
    row.forEach((el, index) => {
      if (index < 2) el.classList.add('form-row');
    });
  }, 100);
}
