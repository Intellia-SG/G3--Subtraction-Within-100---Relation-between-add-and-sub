import { useState } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';

const STEPS = [
  {
    emoji: '🔍',
    title: 'A Mystery to Unlock!',
    body: 'If 48 + 35 = 83… can you find TWO hidden subtraction secrets inside? One addition fact holds the key to two more facts! 🤔',
    visual: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FactFamilyTriangle whole={83} part1={48} part2={35} missing="part2" size={150} />
      </div>
    ),
  },
  {
    emoji: '🔑',
    title: 'The Secret Connection!',
    body: 'Addition and subtraction UNDO each other — they are inverse operations! Knowing one fact unlocks a whole family of facts.',
    visual: (
      <div style={{ background: '#EEF4FB', borderRadius: 12, padding: 13 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#85929E', marginBottom: 7, textAlign: 'center' }}>
          ONE FACT FAMILY:
        </div>
        {['48 + 35 = 83 ✓', '35 + 48 = 83 ✓', '83 − 48 = 35 ✓', '83 − 35 = 48 ✓'].map((f, i) => (
          <div key={f} style={{
            background: '#fff', borderRadius: 8, padding: '6px 12px', margin: '4px 0',
            fontSize: 15, fontWeight: 800,
            color:       i > 1 ? '#27AE60' : '#1A5EAB',
            borderLeft: `4px solid ${i > 1 ? '#27AE60' : '#1A5EAB'}`,
          }}>{f}</div>
        ))}
      </div>
    ),
  },
  {
    emoji: '🚀',
    title: "You'll Master This!",
    body: "After this lesson you'll look at any addition sentence and instantly know two subtraction facts. Let's discover the secret! ⭐",
    visual: (
      <div style={{ textAlign: 'center' }}>
        <FactFamilyTriangle whole={83} part1={48} part2={35} size={145} />
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 8, flexWrap: 'wrap' }}>
          {['48+35=83', '35+48=83', '83−48=35', '83−35=48'].map((f) => (
            <span key={f} style={{
              background: '#EEF4FB', borderRadius: 7, padding: '3px 8px',
              fontSize: 11, fontWeight: 800, color: '#1A5EAB',
            }}>{f}</span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function WonderPhase({ onDone }) {
  const [step, setStep] = useState(0);
  const cur = STEPS[step];

  return (
    <div>
      <div className="pbadge pb-wonder">Phase 1 · Wonder 🔍</div>

      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 38, marginBottom: 6 }}>{cur.emoji}</div>
        <h2>{cur.title}</h2>
        <p style={{ fontSize: 14, fontWeight: 700, color: '#0D3B6E', margin: '10px 0 16px', lineHeight: 1.6 }}>
          {cur.body}
        </p>
        <div style={{ margin: '0 -4px' }}>{cur.visual}</div>

        {/* Step dots */}
        <div style={{ display: 'flex', gap: 5, justifyContent: 'center', marginTop: 16 }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 18 : 7, height: 7, borderRadius: 4,
              background: i === step ? '#1A5EAB' : i < step ? '#27AE60' : '#DCE8F5',
              transition: 'all .25s',
            }} />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {step > 0 && (
          <button className="btn btn-o" style={{ flex: 1 }} onClick={() => setStep((s) => s - 1)}>
            ← Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button className="btn btn-p" style={{ flex: 2 }} onClick={() => setStep((s) => s + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn btn-g btn-lg" style={{ flex: 2 }} onClick={onDone}>
            Start the Story! 📖
          </button>
        )}
      </div>
    </div>
  );
}
