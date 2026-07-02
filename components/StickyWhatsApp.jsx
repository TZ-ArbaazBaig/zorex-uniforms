'use client';

import React from 'react';

export default function StickyWhatsApp() {
  const whatsappUrl = "https://wa.me/916369330737";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      style={styles.floatingButton}
      aria-label="Contact Zorex Tailor on WhatsApp"
      title="Contact Zorex Tailor on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={styles.icon}
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.927 9.927 0 004.93 1.317h.005c5.506 0 9.99-4.479 9.99-9.986 0-2.67-1.037-5.18-2.92-7.061A9.925 9.925 0 0012.012 2zM12.01 20.308a8.312 8.312 0 01-4.238-1.161l-.304-.18-3.146.825.84-3.067-.198-.314a8.272 8.272 0 01-1.27-4.428c.002-4.577 3.73-8.3 8.318-8.3A8.258 8.258 0 0117.89 12.05c-.002 4.58-3.73 8.258-8.318 8.258v-.001zm4.553-6.216c-.25-.124-1.477-.727-1.707-.81-.228-.084-.395-.125-.56.124-.166.249-.641.81-.786.975-.145.166-.29.187-.54.062-.25-.125-1.05-.388-2.001-1.236-.74-.66-1.24-1.475-1.385-1.725-.145-.249-.015-.384.11-.508.112-.112.25-.29.375-.435.125-.145.166-.249.25-.415.083-.166.04-.311-.02-.436-.063-.124-.56-1.35-.768-1.85-.203-.488-.41-.422-.56-.43-.146-.007-.312-.008-.478-.008-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.891 2.407.99 2.54.1.134 1.753 2.677 4.248 3.753.593.256 1.057.41 1.417.524.597.19 1.14.162 1.57.098.477-.07 1.477-.602 1.685-1.183.208-.58.208-1.078.145-1.183-.063-.103-.228-.165-.478-.29z" />
      </svg>
      <span className="whatsapp-float-text" style={styles.text}>WhatsApp Chat</span>
      
      {/* CSS Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        
        .whatsapp-float {
          animation: float-bounce 3s ease-in-out infinite;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        
        .whatsapp-float:hover {
          background-color: var(--bg-panel-2) !important;
          border-color: var(--gold-bright) !important;
          transform: scale(1.05) !important;
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .whatsapp-float-text {
            display: none !important;
          }
          .whatsapp-float {
            padding: 0.75rem !important;
            border-radius: 50% !important;
            bottom: 1.25rem !important;
            right: 1.25rem !important;
          }
        }
      `}} />
    </a>
  );
}

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 999,
    backgroundColor: 'var(--bg-panel)',
    color: 'var(--ink-light)',
    padding: '0.75rem 1.25rem',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
    border: '1px solid var(--gold)',
    transition: 'all 0.2s ease',
  },
  icon: {
    color: 'var(--whatsapp-green)',
  },
  text: {
    fontFamily: 'var(--body-font)',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
};
