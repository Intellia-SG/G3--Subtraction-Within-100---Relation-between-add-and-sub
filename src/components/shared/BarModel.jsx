// src/components/shared/BarModel.jsx
import React from 'react';

export default function BarModel({ whole, part1, part2, missing = null, width = 300 }) {
  const totalW = width;
  const p1Ratio = whole > 0 ? Math.max(0.2, Math.min(0.8, part1 / whole)) : 0.5;
  const p1Width = Math.round(totalW * p1Ratio);
  const p2Width = totalW - p1Width;

  const barFill = (slot) => {
    if (missing === slot) return 'rgba(255, 213, 79, 0.18)';
    if (slot === 'part1') return 'rgba(56, 189, 248, 0.35)';
    return 'rgba(74, 222, 128, 0.35)';
  };

  const barStroke = (slot) => {
    if (missing === slot) return '#ffd54f';
    if (slot === 'part1') return '#38bdf8';
    return '#4ade80';
  };

  const textFill = (slot) => {
    if (missing === slot) return '#ffd54f';
    return '#ffffff';
  };

  const label = (slot) => {
    if (missing === slot) return '?';
    if (slot === 'whole') return whole;
    if (slot === 'part1') return part1;
    return part2;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', maxWidth: `${width + 40}px`, margin: '0 auto' }}>
      {/* Whole Bar Top */}
      <div
        style={{
          width: `${totalW}px`,
          padding: '6px 0',
          background: missing === 'whole' ? 'rgba(255, 213, 79, 0.18)' : 'rgba(251, 176, 59, 0.28)',
          border: `2px solid ${missing === 'whole' ? '#ffd54f' : '#f59e0b'}`,
          borderRadius: '10px',
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: '1.2rem',
          color: missing === 'whole' ? '#ffd54f' : '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        Whole: {label('whole')}
      </div>

      {/* Part 1 + Part 2 Row */}
      <div style={{ display: 'flex', width: `${totalW}px`, gap: '4px' }}>
        <div
          style={{
            width: `${p1Width}px`,
            padding: '8px 0',
            background: barFill('part1'),
            border: `2px solid ${barStroke('part1')}`,
            borderStyle: missing === 'part1' ? 'dashed' : 'solid',
            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.05rem',
            color: textFill('part1'),
          }}
        >
          {label('part1')}
        </div>
        <div
          style={{
            width: `${p2Width}px`,
            padding: '8px 0',
            background: barFill('part2'),
            border: `2px solid ${barStroke('part2')}`,
            borderStyle: missing === 'part2' ? 'dashed' : 'solid',
            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.05rem',
            color: textFill('part2'),
          }}
        >
          {label('part2')}
        </div>
      </div>
    </div>
  );
}
