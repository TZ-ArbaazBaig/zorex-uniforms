import React from 'react';

export default function NeedleIcon({ size = 120, className = '' }) {
  return (
    <div className={`needle-sew-anim ${className}`} style={{ width: size, height: size, display: 'inline-block' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Sewing Needle Illustration"
      >
        {/* Wavy fabric entry thread background */}
        <path
          d="M 10 75 Q 30 65 50 75 T 90 75"
          stroke="var(--ink-light)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* The Golden Sewing Thread */}
        <path
          d="M 52 32 C 60 15, 80 15, 80 35 C 80 60, 50 65, 45 80 C 40 90, 20 90, 15 75 C 10 60, 30 60, 48 70"
          stroke="var(--thread-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Needle Shadow (aesthetic depth) */}
        <path
          d="M 30 74 L 62 30"
          stroke="rgba(43, 33, 24, 0.08)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Needle Body */}
        {/* Points from top right (60,28) down to bottom left (26,76) */}
        <path
          d="M 28 74 L 60 30"
          stroke="var(--ink)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Needle Eye Hole border details */}
        <circle cx="56" cy="35" r="1.5" fill="var(--canvas)" />
        <circle cx="56" cy="35" r="0.7" fill="var(--thread-gold)" />

        {/* Thread emerging from eye */}
        <path
          d="M 56 35 L 52 32"
          stroke="var(--thread-gold)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Little decorative stitch marks under the needle point */}
        <line x1="22" y1="78" x2="28" y2="82" stroke="var(--thread-red)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <line x1="16" y1="72" x2="22" y2="76" stroke="var(--thread-red)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    </div>
  );
}
