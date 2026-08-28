// src/components/shared/FactFamilyTriangle.jsx
import React from 'react';

export default function FactFamilyTriangle({ whole, part1, part2, missing = null, size = 180 }) {
  const h = Math.round((size * 190) / 220);

  const nodeFill = (slot) => {
    if (missing === slot) return 'rgba(255, 213, 79, 0.15)';
    if (slot === 'whole') return 'rgba(251, 176, 59, 0.25)';
    if (slot === 'part1') return 'rgba(56, 189, 248, 0.25)';
    return 'rgba(74, 222, 128, 0.25)';
  };

  const nodeStroke = (slot) => {
    if (missing === slot) return '#ffd54f';
    if (slot === 'whole') return '#f59e0b';
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
    <svg viewBox="0 0 220 200" width={size} height={h} aria-label="Fact family triangle" style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.4))' }}>
      {/* Triangle connection lines */}
      <polygon
        points="110,36 44,142 176,142"
        fill="rgba(255, 255, 255, 0.03)"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Operator hints */}
      <text x="70" y="90" fill="rgba(255, 255, 255, 0.45)" fontSize="16" fontWeight="bold" textAnchor="middle">−</text>
      <text x="150" y="90" fill="rgba(255, 255, 255, 0.45)" fontSize="16" fontWeight="bold" textAnchor="middle">−</text>
      <text x="110" y="152" fill="rgba(255, 255, 255, 0.45)" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>

      {/* Whole (Top) */}
      <circle
        cx="110"
        cy="36"
        r="28"
        fill={nodeFill('whole')}
        stroke={nodeStroke('whole')}
        strokeWidth="3"
        strokeDasharray={missing === 'whole' ? '6,4' : '0'}
      />
      <text x="110" y="43" textAnchor="middle" fill={textFill('whole')} fontSize="17" fontWeight="900" fontFamily="var(--font-display)">
        {label('whole')}
      </text>

      {/* Part 1 (Bottom-left) */}
      <circle
        cx="44"
        cy="142"
        r="27"
        fill={nodeFill('part1')}
        stroke={nodeStroke('part1')}
        strokeWidth="3"
        strokeDasharray={missing === 'part1' ? '6,4' : '0'}
      />
      <text x="44" y="149" textAnchor="middle" fill={textFill('part1')} fontSize="16" fontWeight="900" fontFamily="var(--font-display)">
        {label('part1')}
      </text>

      {/* Part 2 (Bottom-right) */}
      <circle
        cx="176"
        cy="142"
        r="27"
        fill={nodeFill('part2')}
        stroke={nodeStroke('part2')}
        strokeWidth="3"
        strokeDasharray={missing === 'part2' ? '6,4' : '0'}
      />
      <text x="176" y="149" textAnchor="middle" fill={textFill('part2')} fontSize="16" fontWeight="900" fontFamily="var(--font-display)">
        {label('part2')}
      </text>

      {/* Bottom fact label */}
      <text x="110" y="188" fill="rgba(255, 255, 255, 0.75)" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="var(--font-display)">
        {part1} + {part2} = {whole}
      </text>
    </svg>
  );
}
