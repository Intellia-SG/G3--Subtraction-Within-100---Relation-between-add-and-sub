// src/components/shared/FactVisual.jsx
import React from 'react';
import FactFamilyTriangle from './FactFamilyTriangle.jsx';
import BarModel from './BarModel.jsx';

export default function FactVisual({ type, data, compact = false }) {
  if (!data) return null;

  if (type === 'triangle') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px' }}>
        <FactFamilyTriangle
          whole={data.whole}
          part1={data.part1}
          part2={data.part2}
          missing={data.missing || null}
          size={compact ? 150 : 180}
        />
      </div>
    );
  }

  if (type === 'barmodel') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
        <BarModel
          whole={data.whole}
          part1={data.part1}
          part2={data.part2}
          missing={data.missing || null}
          width={compact ? 240 : 280}
        />
      </div>
    );
  }

  return null;
}
