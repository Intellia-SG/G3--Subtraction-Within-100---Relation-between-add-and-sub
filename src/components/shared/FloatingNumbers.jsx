// src/components/shared/FloatingNumbers.jsx
import React, { useMemo } from 'react';
import './FloatingNumbers.css';

const SYMBOLS = ['+', '−', '=', '63', '27', '36', '15', '8', '7', '100', '64', '⭐', '🔺', '💡'];

export default function FloatingNumbers() {
  const items = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      text: SYMBOLS[i % SYMBOLS.length],
      left: `${(i * 5.5 + 4) % 94}%`,
      size: `${clamp(1.4 + (i % 4) * 0.5, 1.4, 3.2)}rem`,
      duration: `${14 + (i % 6) * 3}s`,
      delay: `${-(i * 1.8)}s`,
    }));
  }, []);

  return (
    <div className="floating-numbers-container" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-symbol"
          style={{
            left: item.left,
            fontSize: item.size,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
