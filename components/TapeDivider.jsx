'use client';

import React from 'react';

export default function TapeDivider() {
  // Generate a sequence of inches for the tape (1 to 24)
  const inches = Array.from({ length: 24 }, (_, i) => i + 1);

  const renderTapeSegment = () => (
    <div style={styles.segment}>
      {inches.map((inch) => (
        <div key={inch} style={styles.inchBlock}>
          {/* Main tick & number */}
          <div style={styles.mainTick}></div>
          <span style={styles.number}>{inch}</span>
          
          {/* Sub-ticks */}
          <div style={{ ...styles.tick, left: '10px', height: '6px' }}></div>
          <div style={{ ...styles.tick, left: '20px', height: '6px' }}></div>
          <div style={{ ...styles.tick, left: '30px', height: '6px' }}></div>
          
          {/* Half-inch tick */}
          <div style={{ ...styles.tick, left: '40px', height: '10px', backgroundColor: 'var(--gold-bright)' }}></div>
          
          <div style={{ ...styles.tick, left: '50px', height: '6px' }}></div>
          <div style={{ ...styles.tick, left: '60px', height: '6px' }}></div>
          <div style={{ ...styles.tick, left: '70px', height: '6px' }}></div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={styles.tapeWrapper}>
      <div style={styles.tapeTrack}>
        {renderTapeSegment()}
        {renderTapeSegment()}
      </div>
      
      {/* Inline styles for infinite scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes tape-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}

const styles = {
  tapeWrapper: {
    width: '100%',
    height: '42px',
    backgroundColor: 'var(--bg-black)',
    borderTop: '1px solid rgba(201, 162, 39, 0.3)',
    borderBottom: '1px solid rgba(201, 162, 39, 0.3)',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  },
  tapeTrack: {
    display: 'flex',
    width: 'max-content',
    animation: 'tape-scroll 25s linear infinite',
  },
  segment: {
    display: 'flex',
  },
  inchBlock: {
    position: 'relative',
    width: '80px', // width of 1 inch
    height: '42px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '6px',
    borderRight: '1px solid rgba(201, 162, 39, 0.1)',
  },
  mainTick: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '2px',
    height: '16px',
    backgroundColor: 'var(--gold)',
  },
  tick: {
    position: 'absolute',
    bottom: '0',
    width: '1px',
    backgroundColor: 'rgba(201, 162, 39, 0.5)',
  },
  number: {
    fontFamily: 'var(--mono-font)',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--gold)',
    lineHeight: '1',
    userSelect: 'none',
  },
};
