// src/components/shared/Mascot.jsx
import React from 'react';
import './Mascot.css';

export default function Mascot({ mood = 'happy', message = '', size = 'md', emoji = '🦉' }) {
  const moodEmoji = emoji || (mood === 'curious' ? '🦉' : mood === 'celebrate' ? '🎉' : '🦉');

  return (
    <div className={`mascot-container size-${size} anim-fade-in`}>
      <div className="mascot-avatar-circle">
        <span role="img" aria-label="Mascot">{moodEmoji}</span>
      </div>
      {message && <div className="mascot-speech-text">{message}</div>}
    </div>
  );
}
