// src/components/gamification/StarRating.jsx
import React from 'react';

export default function StarRating({ stars = 0, maxStars = 3, size = 'md' }) {
  const fontSize = size === 'sm' ? '0.9rem' : size === 'lg' ? '1.6rem' : '1.2rem';

  return (
    <div style={{ display: 'inline-flex', gap: '3px', alignItems: 'center' }}>
      {Array.from({ length: maxStars }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize,
            color: i < stars ? '#ffd54f' : 'rgba(255, 255, 255, 0.2)',
            filter: i < stars ? 'drop-shadow(0 0 6px rgba(255, 213, 79, 0.6))' : 'none',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
