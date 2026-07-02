'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function StitchLine() {
  const lineRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={lineRef} style={styles.container}>
      <svg width="100%" height="8" style={styles.svg}>
        <line
          x1="0"
          y1="4"
          x2="100%"
          y2="4"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeDasharray="8, 6"
          style={{
            ...styles.line,
            strokeDashoffset: isIntersecting ? 0 : 1000,
            transition: isIntersecting ? 'stroke-dashoffset 2s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
          }}
        />
      </svg>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    padding: '2.5rem 0',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  svg: {
    display: 'block',
  },
  line: {
    strokeDasharray: '12, 8',
  },
};
