// src/components/phases/WonderPhase.jsx
import React, { useEffect } from 'react';
import './WonderPhase.css';
import Mascot from '../shared/Mascot.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { wonderNarration } from '../../utils/narration.js';

const PARTICLES = ['🔺', '➕', '−', '=', '63', '27', '36', '⭐', '🦉', '✨'];

export default function WonderPhase({ state, dispatch }) {
  const { narrate, stopAll } = useAudio(state?.audioEnabled ?? true);

  useEffect(() => {
    const segs = wonderNarration();
    narrate(segs);
    return () => stopAll();
  }, [narrate, stopAll]);

  function handleInvestigate() {
    stopAll();
    dispatch({ type: 'COMPLETE_PHASE', payload: 'wonder' });
    dispatch({ type: 'SET_PHASE', payload: 'story' });
  }

  return (
    <div className="wonder-wrap">
      {/* Floating particles */}
      <div className="wonder-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="wonder-particle"
            style={{
              left: `${5 + (i * 9.5) % 90}%`,
              top: `${5 + (i * 7.5) % 80}%`,
              animationDelay: `${i * 0.6}s`,
              fontSize: `${0.9 + (i % 3) * 0.3}rem`,
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="wonder-content anim-slide-up">
        {/* Main hook card */}
        <div className="wonder-card glass-card">
          <div className="wonder-stadium-icon" aria-hidden="true">🎡</div>
          <h1 className="wonder-title headline">The Big Carnival Mystery!</h1>

          <div className="wonder-number-display">
            <span className="number-display wonder-num">63 Tokens ➔ 27 Left ➔ Spent ?</span>
          </div>

          <div className="wonder-question-card">
            <p className="body-text wonder-q">
              Alex won <strong className="wonder-em">63 prize tokens</strong>. He played games and has <strong className="wonder-em">27 tokens left</strong>.
            </p>
            <p className="body-text wonder-q">
              How does <span className="wonder-highlight">addition unlock subtraction</span> to find the spent tokens?
            </p>
          </div>

          {/* Mascot */}
          <div className="wonder-mascot-row">
            <Mascot mood="curious" message="Let's discover Fact Families with Alex &amp; Emma!" size="sm" />
          </div>

          <button className="btn btn-primary wonder-cta" onClick={handleInvestigate}>
            Start Investigation 🔍
          </button>
        </div>
      </div>
    </div>
  );
}
