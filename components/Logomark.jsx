import React from 'react';

export default function Logomark({ className = '', size = 48 }) {
  // height is scaled slightly larger to accommodate the crown top details
  const height = (size * 1.15).toFixed(0);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Zorex Tailor Institutional Crest"
    >
      {/* Imperial Crown on Top */}
      {/* Crown base band */}
      <path
        d="M 37 19 Q 50 21 63 19 C 63 17 63 16 63 15 Q 50 17 37 15 Z"
        stroke="var(--gold)"
        strokeWidth="1.5"
        fill="var(--bg-panel)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base band jewels (small circles) */}
      <circle cx="42" cy="17" r="0.8" fill="var(--gold-bright)" />
      <circle cx="50" cy="18" r="0.8" fill="var(--gold-bright)" />
      <circle cx="58" cy="17" r="0.8" fill="var(--gold-bright)" />
      
      {/* Crown arches/dome */}
      <path
        d="M 37 15 C 34 5, 45 4, 50 11 C 55 4, 66 5, 63 15"
        stroke="var(--gold)"
        strokeWidth="1.5"
        fill="rgba(201, 162, 39, 0.1)"
        strokeLinecap="round"
      />
      {/* Inner arches */}
      <path d="M 43 15 C 42 8, 48 8, 50 11" stroke="var(--gold)" strokeWidth="1" />
      <path d="M 57 15 C 58 8, 52 8, 50 11" stroke="var(--gold)" strokeWidth="1" />
      <line x1="50" y1="11" x2="50" y2="17" stroke="var(--gold)" strokeWidth="1" />
      
      {/* Cross orb on top of crown */}
      <line x1="50" y1="1.5" x2="50" y2="5.5" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="48" y1="3" x2="52" y2="3" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="4" r="0.8" fill="var(--gold-bright)" />

      {/* Side Letter/Glyph Ornaments (E and X/K) */}
      <text x="29" y="19" fontFamily="var(--display-font), Cinzel, serif" fontSize="8" fontWeight="bold" fill="var(--gold)" transform="rotate(-25 29 19)">E</text>
      <text x="69" y="15" fontFamily="var(--display-font), Cinzel, serif" fontSize="8" fontWeight="bold" fill="var(--gold)" transform="rotate(25 69 15)">K</text>

      {/* Outer Shield / Crest Outline */}
      <path
        d="M 23 27 C 40 30, 60 30, 77 27 C 77 55, 72 78, 50 93 C 28 78, 23 55, 23 27 Z"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(11, 12, 14, 0.95)"
      />

      {/* Inner Shield border detailing (Double border look) */}
      <path
        d="M 27 31 C 41 33, 59 33, 73 31 C 73 53, 68 74, 50 88 C 32 74, 27 53, 27 31 Z"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dotted leaf/stitch decoration along inner borders (laurel wreath style) */}
      <path
        d="M 31 38 C 30 52, 34 68, 44 78"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        strokeLinecap="round"
      />
      <path
        d="M 69 38 C 70 52, 66 68, 56 78"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        strokeLinecap="round"
      />

      {/* Three-Point Fleur-de-lis styled leaf at top center */}
      <path
        d="M 50 32 C 48 35, 49 39, 50 41 C 51 39, 52 35, 50 32 Z"
        fill="var(--gold)"
      />
      <path
        d="M 48 39 C 45 38, 44 36, 42 36 C 44 40, 47 40, 50 41 Z"
        fill="var(--gold)"
      />
      <path
        d="M 52 39 C 55 38, 56 36, 58 36 C 56 40, 53 40, 50 41 Z"
        fill="var(--gold)"
      />

      {/* Small decorative stars/points flanking the Z */}
      <circle cx="39" cy="58" r="1" fill="var(--gold-bright)" />
      <circle cx="61" cy="58" r="1" fill="var(--gold-bright)" />
      <circle cx="43" cy="46" r="0.8" fill="var(--gold-bright)" />
      <circle cx="57" cy="70" r="0.8" fill="var(--gold-bright)" />

      {/* Bottom vertical stitch ornament (exclamation segment) */}
      <line x1="50" y1="78" x2="50" y2="82" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="85" r="1.2" fill="var(--gold-bright)" />

      {/* Slanted Serif Letter 'Z' */}
      <text
        x="49"
        y="58"
        fontFamily="var(--display-font), Cinzel, Georgia, serif"
        fontSize="34"
        fontWeight="900"
        fontStyle="italic"
        fill="var(--gold-bright)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        Z
      </text>
    </svg>
  );
}
