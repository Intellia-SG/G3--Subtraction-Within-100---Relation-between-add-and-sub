import { useState, useEffect } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import BarModel           from '../shared/BarModel.jsx';
import { WORLDS }         from '../../data/worlds.js';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuestionCard({ state, dispatch }) {
  const { qs, cq, cw, wcorr, fb, hl, att } = state;
  const [shake, setShake] = useState(false);
  const q = qs[cq];
  const qInWorld = cq - cw * 10 + 1;

  useEffect(() => setShake(false), [cq]);

  if (!q) return null;

  const handleAnswer = (v) => {
    if (fb) return;
    const ok = String(v) === String(q.ans);
    if (ok) {
      dispatch({ t: 'CORRECT', exp: q.exp });
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      dispatch({ t: 'WRONG' });
    }
  };

  const isLong   = q.opts?.some(o => String(o).length > 10);
  const isTwoCol = q.opts?.length === 2 || q.type === 'true_false_bond';

  return (
    <div className="play-phase">
      {/* World header */}
      <div className="glass-card" style={{ padding: '12px 16px', marginBottom: 12, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--gold)' }}>
              {WORLDS[cw].emoji} World {cw + 1}: {WORLDS[cw].name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
              Q{qInWorld}/10 · {wcorr} ✅
            </div>
          </div>
          <button className="btn btn-outline btn-sm" style={{ minWidth: 0, padding: '6px 12px' }}
            onClick={() => dispatch({ t: 'SHOW_MAP' })}>
            🗺️ Map
          </button>
        </div>
        <div style={{ height: 5, background: 'rgba(255,255,255,0.1)', borderRadius: 999, overflow: 'hidden', marginTop: 10 }}>
          <div style={{
            height: '100%', borderRadius: 999,
            width: `${((qInWorld - 1) / 10) * 100}%`,
            background: 'linear-gradient(90deg, var(--purple), var(--gold))',
            transition: 'width 0.5s ease'
          }} />
        </div>
      </div>

      {/* Question card */}
      <div className={`glass-card ${shake ? 'shake' : ''}`} style={{ padding: '20px 18px', width: '100%' }}>

        {/* Visual — triangle */}
        {q.visual === 'triangle' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
            <FactFamilyTriangle
              whole={q.whole} part1={q.part1} part2={q.part2}
              missing={q.missing} size={140}
            />
          </div>
        )}

        {/* Visual — bar model */}
        {q.visual === 'barModel' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
            <BarModel whole={q.whole} part1={q.part1} part2={q.part2} missing={q.missing} />
          </div>
        )}

        {/* Question text */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.05rem, 2.8vw, 1.3rem)',
          fontWeight: 700, color: '#fff', lineHeight: 1.5,
          marginBottom: 16, textAlign: 'center'
        }}>
          {q.qt}
        </div>

        {/* Hint box */}
        {hl > 0 && (
          <div className="hint-box" style={{ marginBottom: 14 }}>
            💡 <strong>Hint {hl}:</strong> {hl === 1 ? q.h1 : q.h2}
          </div>
        )}

        {/* ── Options — A) B) C) D) format ── */}
        <div className={`options-grid${isTwoCol ? ' grid-2' : isLong ? ' grid-1' : ''}`}
          style={{ marginBottom: 12 }}>
          {q.opts.map((opt, i) => (
            <button
              key={i}
              className="option-btn"
              disabled={!!fb}
              onClick={() => !fb && handleAnswer(opt)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textAlign: 'left',
                padding: '12px 14px',
              }}
            >
              {/* Letter badge */}
              <span style={{
                flexShrink: 0,
                width: 28, height: 28,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem', fontWeight: 800,
                color: 'rgba(255,255,255,0.7)',
              }}>
                {LETTERS[i]}
              </span>
              {/* Option text */}
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600 }}>
                {opt}
              </span>
            </button>
          ))}
        </div>

        {/* Hint button */}
        {!fb && hl < 2 && (
          <button
            className="btn btn-outline btn-sm hint-btn"
            style={{ width: '100%', marginTop: 8, minWidth: 0 }}
            onClick={() => dispatch({ t: 'HINT' })}
          >
            💡 Get a Hint ({2 - hl} left)
          </button>
        )}

        {/* Reveal after 2 wrong */}
        {!fb && att >= 2 && (
          <div className="hint-box" style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              📘 Answer: <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>{q.ans}</span>
            </div>
            <div style={{ fontSize: '0.88rem', opacity: 0.85, marginBottom: 8 }}>{q.exp}</div>
            <button className="btn btn-outline btn-sm" style={{ minWidth: 0 }}
              onClick={() => dispatch({ t: 'CORRECT', exp: q.exp })}>
              Got it — Continue →
            </button>
          </div>
        )}
      </div>

      {/* Feedback overlay */}
      {fb && (
        <div className="feedback-overlay" onClick={() => dispatch({ t: 'NEXT' })}>
          <div
            className={`feedback-content ${fb.ok ? 'correct' : 'wrong'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="feedback-emoji">{fb.ok ? '🎉' : '💪'}</div>
            <div className="feedback-message">{fb.ok ? 'Brilliant!' : 'Good try!'}</div>
            {fb.ok && (
              <div className="play-xp-badge">+{fb.xpG} XP{fb.bonus ? ' 🔥 Streak!' : ''}</div>
            )}
            <div className="feedback-sub" style={{ marginTop: 8, fontSize: '0.92rem', lineHeight: 1.55 }}>
              {fb.ok
                ? fb.exp
                : <>The answer is <strong style={{ color: 'var(--gold)', fontSize: '1rem' }}>{q.ans}</strong>. {q.exp}</>
              }
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 16, fontSize: '1.05rem', padding: '13px', minWidth: 0 }}
              onClick={() => dispatch({ t: 'NEXT' })}
            >
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
