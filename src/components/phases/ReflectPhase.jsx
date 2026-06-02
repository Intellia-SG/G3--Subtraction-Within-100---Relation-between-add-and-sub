import { useState } from 'react';

const REFLECT_QS = [
  {
    q: 'What is the relationship between addition and subtraction?',
    opts: [
      'They undo each other — they are inverse operations ✓',
      'They are the same operation',
      'They are completely unrelated',
    ],
  },
  {
    q: 'How does knowing 48 + 35 = 83 help with subtraction?',
    opts: [
      'I instantly know 83−48=35 and 83−35=48 ✓',
      "It doesn't help at all",
      'I still need to count separately',
    ],
  },
  {
    q: 'What does a fact family triangle show?',
    opts: [
      'All 4 related addition and subtraction facts ✓',
      'Only addition facts',
      'How to count on a number line',
    ],
  },
  {
    q: 'How confident are you with subtraction within 100?',
    opts: [
      'Very confident! ⭐ I can use inverse relationships',
      'Getting more confident 📈',
      'Still practising — I\'ll keep going! 💪',
    ],
  },
];

export default function ReflectPhase({ state, onDone }) {
  const [answers, setAnswers] = useState({});
  const allAnswered = REFLECT_QS.every((_, i) => answers[i] !== undefined);

  return (
    <div>
      <div className="pbadge pb-reflect">Phase 5 · Reflect ✨</div>

      <div className="card">
        <h2>🌟 Reflect on Your Learning</h2>
        <p style={{ color: '#85929E', marginBottom: 16, fontSize: 13 }}>
          Think carefully about what you've discovered today!
        </p>

        {/* Journey stats */}
        <div style={{ background: '#EEF4FB', borderRadius: 10, padding: 11, marginBottom: 18, display: 'flex', gap: 12, justifyContent: 'center' }}>
          {[[`⭐ ${state.stars}`, 'Stars'], [`⚡ ${state.xp}`, 'XP'], [`🔥 ${state.maxStr}`, 'Best Streak']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: '#0D3B6E' }}>{v}</div>
              <div style={{ fontSize: 10, color: '#85929E', fontWeight: 800 }}>{l}</div>
            </div>
          ))}
        </div>

        {REFLECT_QS.map((rq, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 8 }}>{i + 1}. {rq.q}</h3>
            {rq.opts.map((opt) => (
              <div
                key={opt}
                className={`rq${answers[i] === opt ? ' sel' : ''}`}
                onClick={() => setAnswers((a) => ({ ...a, [i]: opt }))}
                role="radio"
                aria-checked={answers[i] === opt}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setAnswers((a) => ({ ...a, [i]: opt }))}
              >
                <div className="rq-radio" />
                {opt}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="btn btn-g btn-lg btn-full" disabled={!allAnswered} onClick={onDone}>
        Complete My Journey! 🌟
      </button>
      {!allAnswered && (
        <p style={{ textAlign: 'center', fontSize: 11, color: '#ADB5BD', marginTop: 7 }}>
          Answer all {REFLECT_QS.length} questions to continue
        </p>
      )}
    </div>
  );
}
