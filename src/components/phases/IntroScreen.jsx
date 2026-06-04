import { useEffect, useRef } from 'react';

const JOURNEY_PHASES = [
  { icon: '🔍', label: 'Wonder',   desc: 'A subtraction mystery!' },
  { icon: '📖', label: 'Story',    desc: 'See it in action' },
  { icon: '🧪', label: 'Simulate', desc: 'Explore the models' },
  { icon: '🎮', label: 'Play',     desc: 'Gamified challenges' },
  { icon: '📓', label: 'Reflect',  desc: 'What did you learn?' },
];

export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      {/* Curriculum badge */}
      <div className="intro-badge">
        ✨ · Grade 2 Maths
      </div>

      {/* Title */}
      <h1 className="intro-title">
        <span style={{ color: 'var(--coral)' }}>Subtraction</span>{' '}Within{' '}
        <span style={{ color: 'var(--gold)' }}>100</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: 4, fontFamily: 'var(--font-display)' }}>
        Lesson 3.3 · Relationship between + and −
      </p>

      {/* Mascot */}
      <div className="mascot-container">
        <div className="mascot">🤖</div>
        <div className="speech-bubble">
          Let's crack the fact families! 🔍
        </div>
      </div>

      {/* Description */}
      <p className="intro-desc">
        Learn to use <strong style={{ color: 'var(--gold)' }}>addition facts</strong> to solve subtraction problems, build fact family triangles, and conquer challenges within 100!
      </p>

      {/* Journey map */}
      <div className="intro-journey-map">
        <h3 className="intro-journey-title">Your Learning Journey</h3>
        <div className="intro-journey-steps">
          {JOURNEY_PHASES.map((p, i) => (
            <div key={i} className="intro-journey-step">
              <div className="intro-journey-icon">{p.icon}</div>
              <div className="intro-journey-info">
                <div className="intro-journey-label">{p.label}</div>
                <div className="intro-journey-desc">{p.desc}</div>
              </div>
              {i < JOURNEY_PHASES.length - 1 && <div className="intro-journey-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="btn btn-primary btn-lg intro-start-btn" onClick={onStart} id="start-journey-btn">
        🚀 Begin Your Journey!
      </button>

      {/* Feature cards */}
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-card-icon">🎯</div>
          <div className="feature-card-label">100 Challenges</div>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">🔺</div>
          <div className="feature-card-label">Fact Families</div>
        </div>
        <div className="feature-card">
          <div className="feature-card-icon">✨</div>
          <div className="feature-card-label">Badges & XP</div>
        </div>
      </div>
    </div>
  );
}
