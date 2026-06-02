import { useState } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import { shuffle } from '../../data/questionBank.js';

function genOpts(correct) {
  const s = new Set([correct]);
  for (const off of [1, -1, 2, -2, 5, -5, 10, -10]) {
    if (s.size >= 4) break;
    const v = correct + off;
    if (v > 0 && v <= 100 && v !== correct) s.add(v);
  }
  return shuffle([...s]).slice(0, 4);
}

const PROBS = [
  { whole: 82, part1: 47, part2: 35, m: 'part2' },
  { whole: 63, part1: 27, part2: 36, m: 'whole' },
  { whole: 54, part1: 26, part2: 28, m: 'part1' },
  { whole: 71, part1: 38, part2: 33, m: 'part2' },
  { whole: 45, part1: 18, part2: 27, m: 'whole' },
];

export default function FactFamilyStation({ onComplete }) {
  const [ci, setCi]       = useState(0);
  const [sel, setSel]     = useState(null);
  const [res, setRes]     = useState(null);
  const [solved, setSolved] = useState(0);

  const prob    = PROBS[ci];
  const correct = prob.m === 'whole' ? prob.whole : prob.m === 'part1' ? prob.part1 : prob.part2;
  const opts    = genOpts(correct);
  const qtext   = prob.m === 'whole'
    ? `${prob.part1} + ${prob.part2} = ?`
    : prob.m === 'part1'
    ? `? + ${prob.part2} = ${prob.whole}`
    : `${prob.part1} + ? = ${prob.whole}`;

  const pick = (v) => {
    if (res === 'ok') return;
    setSel(v);
    if (v === correct) { setRes('ok'); setSolved((s) => s + 1); }
    else setRes('no');
  };

  const next = () => {
    if (ci < PROBS.length - 1) { setCi((c) => c + 1); setSel(null); setRes(null); }
    else onComplete();
  };

  return (
    <div>
      <h3>🔺 Station B — Fact Family Triangle (Pictorial)</h3>
      <p style={{ fontSize: 12, color: '#85929E', marginBottom: 8 }}>
        Problem {ci + 1}/{PROBS.length} · Solved: {solved}
      </p>

      <p style={{ fontFamily: 'Fredoka One, cursive', fontSize: 19, color: '#0D3B6E', textAlign: 'center', marginBottom: 6 }}>
        {qtext}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FactFamilyTriangle
          whole={prob.whole} part1={prob.part1} part2={prob.part2}
          missing={res === 'ok' ? null : prob.m} size={155}
        />
      </div>

      <div className="ntiles">
        {opts.map((opt) => {
          const isSel = sel === opt;
          const isC   = opt === correct;
          return (
            <button
              key={opt} disabled={!!res}
              className={`ntile${isSel && isC ? ' right' : isSel && !isC ? ' wrong' : ''}`}
              onClick={() => pick(opt)}
            >{opt}</button>
          );
        })}
      </div>

      {res === 'no' && (
        <div className="hint-box">
          ❌ Not quite!{' '}
          {prob.m === 'whole'
            ? `Add the parts: ${prob.part1} + ${prob.part2} = ?`
            : `The whole is ${prob.whole}. What's missing?`}
        </div>
      )}

      {res === 'ok' && (
        <div className="success-box">
          <div className="success-icon">🔓</div>
          <h3 style={{ color: '#155724', fontFamily: 'Fredoka One, cursive', fontSize: 17, marginBottom: 8 }}>
            All 4 facts unlocked!
          </h3>
          <div className="fact-list">
            {[
              `${prob.part1}+${prob.part2}=${prob.whole}`,
              `${prob.part2}+${prob.part1}=${prob.whole}`,
              `${prob.whole}−${prob.part1}=${prob.part2}`,
              `${prob.whole}−${prob.part2}=${prob.part1}`,
            ].map((f) => <div className="fi" key={f}>{f}</div>)}
          </div>
          <button className="btn btn-gn btn-sm" style={{ marginTop: 10 }} onClick={next}>
            {ci < PROBS.length - 1 ? 'Next Problem →' : 'Complete Station! ✓'}
          </button>
        </div>
      )}
    </div>
  );
}
