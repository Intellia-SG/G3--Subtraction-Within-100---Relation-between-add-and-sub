import { useState, useEffect } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';

const STEPS = [
  {
    emoji: '🔍',
    title: 'A Mystery to Unlock!',
    body: 'If 48 + 35 = 83… can you find TWO hidden subtraction secrets inside? One addition fact holds the key to two more facts!',
    curiosity: '🤔',
    visual: (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <FactFamilyTriangle whole={83} part1={48} part2={35} missing="part2" size={150} />
      </div>
    ),
  },
  {
    emoji: '🔑',
    title: 'The Secret Connection!',
    body: 'Addition and subtraction UNDO each other — they are inverse operations! Knowing one fact unlocks a whole family of facts.',
    curiosity: '💡',
    visual: (
      <div className="fact-family-box">
        <div className="fact-family-title">
          ONE FACT FAMILY:
        </div>
        {['48 + 35 = 83 ✓', '35 + 48 = 83 ✓', '83 − 48 = 35 ✓', '83 − 35 = 48 ✓'].map((f, i) => (
          <div key={f} className={`fact-item ${i > 1 ? 'subtract' : 'add'}`}>
            {f}
          </div>
        ))}
      </div>
    ),
  },
  {
    emoji: '🚀',
    title: "You'll Master This!",
    body: "After this lesson you'll look at any addition sentence and instantly know two subtraction facts. Let's discover the secret!",
    curiosity: '⭐',
    visual: (
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <FactFamilyTriangle whole={83} part1={48} part2={35} size={145} />
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
          {['48+35=83', '35+48=83', '83−48=35', '83−35=48'].map((f) => (
            <span key={f} className="mini-fact-pill">
              {f}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function WonderPhase({ onComplete }) {
  const [step, setStep] = useState(0);
  const [animReady, setAnimReady] = useState(false);
  const cur = STEPS[step];

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimReady(true), 100);
  }, []);

  return (
    <div className="wonder-phase">
      <div className="phase-badge badge-wonder">Phase 1 · Wonder 🔍</div>

      {/* Purple gradient question mark icon with glow */}
      <div className={`wonder-icon-wrapper ${animReady ? 'animate' : ''}`}>
        <div className="wonder-icon-glow"></div>
        <div className="wonder-icon">
          {cur.emoji}
        </div>
      </div>

      {/* Wonder question card */}
      <div className={`wonder-card glass-card ${animReady ? 'animate' : ''}`}>
        <div className="wonder-curiosity-emoji">{cur.curiosity}</div>
        <h2 className="wonder-title">{cur.title}</h2>
        <p className="wonder-body">
          {cur.body}
        </p>
        <div className="wonder-visual">{cur.visual}</div>

        {/* Step progress dots */}
        <div className="wonder-progress-dots">
          {STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`wonder-dot ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="wonder-nav-buttons">
        {step > 0 && (
          <button className="btn btn-o wonder-btn-back" onClick={() => setStep((s) => s - 1)}>
            ← Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button className="btn btn-purple wonder-btn-next" onClick={() => setStep((s) => s + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn btn-g btn-lg wonder-btn-complete" onClick={onComplete}>
            Let's Find Out! 📖
          </button>
        )}
      </div>
    </div>
  );
}
