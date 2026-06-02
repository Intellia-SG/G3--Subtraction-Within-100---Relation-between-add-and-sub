import { useState } from 'react';
import NumberPad from '../shared/NumberPad.jsx';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';

const PROBS = [
  { whole: 82, part1: 47, part2: 35, slot: 'part2' },
  { whole: 65, part1: 38, part2: 27, slot: 'part1' },
  { whole: 91, part1: 54, part2: 37, slot: 'part2' },
  { whole: 72, part1: 45, part2: 27, slot: 'whole' },
  { whole: 58, part1: 29, part2: 29, slot: 'part2' },
];

export default function InverterStation({ onComplete }) {
  const [ci, setCi]   = useState(0);
  const [ans, setAns] = useState('');
  const [hint, setHint] = useState(false);
  const [res, setRes] = useState(null);

  const prob    = PROBS[ci];
  const correct = prob.slot === 'whole' ? prob.whole : prob.slot === 'part1' ? prob.part1 : prob.part2;
  const addStr  = `${prob.part1} + ${prob.part2} = ${prob.whole}`;
  const subStr  = prob.slot === 'whole'
    ? `□ − ${prob.part1} = ${prob.part2}`
    : prob.slot === 'part1'
    ? `${prob.whole} − □ = ${prob.part2}`
    : `${prob.whole} − ${prob.part1} = □`;

  const submit = () => {
    if (!ans) return;
    setRes(parseInt(ans) === correct ? 'ok' : 'no');
  };

  const retry = () => { setAns(''); setRes(null); };

  const next = () => {
    if (ci < PROBS.length - 1) { setCi((c) => c + 1); setAns(''); setHint(false); setRes(null); }
    else onComplete();
  };

  return (
    <div>
      <h3>🔄 Station C — Number Sentence Inverter (Abstract)</h3>
      <p style={{ fontSize: 12, color: '#85929E', marginBottom: 10 }}>
        Problem {ci + 1}/{PROBS.length} · Type your answer!
      </p>

      <div style={{ background: '#EEF4FB', borderRadius: 12, padding: 14, marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#85929E', marginBottom: 3 }}>GIVEN addition:</div>
        <div style={{ fontFamily: 'Fredoka One, cursive', fontSize: 24, color: '#1A5EAB', marginBottom: 10 }}>{addStr}</div>
        <div style={{ fontSize: 11, fontWeight: 800, color: '#85929E', marginBottom: 3 }}>FIND subtraction:</div>
        <div style={{ fontFamily: 'Fredoka One, cursive', fontSize: 24, color: '#0D3B6E' }}>{subStr}</div>
      </div>

      {!res ? (
        <>
          <NumberPad value={ans} onChange={setAns} onSubmit={submit} max={100} />
          <button className="btn btn-o btn-sm btn-full" style={{ marginTop: 8 }} onClick={() => setHint((h) => !h)}>
            💡 {hint ? 'Hide' : 'Show'} Hint
          </button>
          {hint && (
            <div className="hint-box">
              💡 The subtraction is hiding inside the addition! Use the triangle below.
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                <FactFamilyTriangle
                  whole={prob.whole} part1={prob.part1} part2={prob.part2}
                  missing={prob.slot} size={115}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div style={{
          background:  res === 'ok' ? '#D4EDDA' : '#F8D7DA',
          borderRadius: 12, padding: 14, textAlign: 'center',
          animation:   'slideUp .3s ease',
          border:      `2px solid ${res === 'ok' ? '#27AE60' : '#F5C6CB'}`,
        }}>
          <div style={{ fontSize: 36, marginBottom: 6 }}>{res === 'ok' ? '🎉' : '🤔'}</div>
          <div style={{
            fontFamily: 'Fredoka One, cursive', fontSize: 19, marginBottom: 6,
            color: res === 'ok' ? '#155724' : '#721C24',
          }}>
            {res === 'ok' ? 'Brilliant!' : `The answer is ${correct}`}
          </div>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 10, color: '#0D3B6E' }}>
            {subStr.replace('□', correct)}
          </div>
          {res === 'no' && <button className="btn btn-o btn-sm" style={{ marginRight: 8 }} onClick={retry}>Try Again</button>}
          {res === 'ok' && (
            <button className="btn btn-gn btn-sm" onClick={next}>
              {ci < PROBS.length - 1 ? 'Next →' : 'Complete! ✓'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
