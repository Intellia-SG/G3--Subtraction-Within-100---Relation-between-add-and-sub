import { useState } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';

const WHOLE  = 47;
const TARGET = 23;

export default function Base10Station({ onComplete }) {
  const [removed, setR] = useState(0);
  const done = removed === TARGET;

  const tens  = Math.floor(WHOLE / 10);
  const ones  = WHOLE % 10;
  const allBlocks = [...Array(tens).fill('ten'), ...Array(ones).fill('one')];

  return (
    <div>
      <h3>🧱 Station A — Take-Away Blocks (Concrete)</h3>
      <p style={{ fontSize: 12, color: '#85929E', marginBottom: 10 }}>
        Start with {WHOLE} blocks. Remove {TARGET} to find what's left!
      </p>

      <div className="eq-live">
        {WHOLE} − <span style={{ color: '#F5A623' }}>{removed}</span> ={' '}
        <span style={{ color: done ? '#27AE60' : '#1A5EAB', fontWeight: 800 }}>{WHOLE - removed}</span>
      </div>

      <div className="blocks-area" role="group" aria-label="Base-10 blocks">
        {allBlocks.map((type, i) => (
          <div
            key={i}
            className={`blk ${type} b${type === 'ten' ? 't' : 'o'}${removed > i ? ' taken' : ''}`}
            style={{ cursor: removed <= i && removed < TARGET ? 'pointer' : 'default' }}
            onClick={() => { if (removed < TARGET && !done) setR((r) => r + 1); }}
            title={removed <= i ? 'Click to remove' : 'Already removed'}
          />
        ))}
      </div>

      <p style={{ fontSize: 11, color: '#85929E', textAlign: 'center', margin: '4px 0 10px' }}>
        Removed: <b>{removed}</b> · Remaining: <b>{WHOLE - removed}</b>
      </p>

      <div style={{ display: 'flex', gap: 7, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn-o btn-sm" onClick={() => setR((r) => Math.max(0, r - 1))} disabled={removed === 0}>
          ↩ Undo
        </button>
        <button className="btn btn-g btn-sm" onClick={() => setR((r) => Math.min(TARGET, r + 1))} disabled={done}>
          Remove 1
        </button>
        <button className="btn btn-p btn-sm" onClick={() => setR(TARGET)} disabled={done}>
          Auto-fill →{TARGET}
        </button>
      </div>

      {done && (
        <div className="success-box" style={{ marginTop: 12 }}>
          <div className="success-icon">🎉</div>
          <h3 style={{ color: '#155724', fontFamily: 'Fredoka One, cursive', fontSize: 20 }}>
            {WHOLE} − {TARGET} = {WHOLE - TARGET}
          </h3>
          <p style={{ color: '#155724', fontSize: 13, margin: '5px 0 11px' }}>
            You used the inverse relationship! The triangle confirms it.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
            <FactFamilyTriangle whole={WHOLE} part1={TARGET} part2={WHOLE - TARGET} size={110} />
          </div>
          <button className="btn btn-gn btn-sm" onClick={onComplete}>
            Next Station → 🔺
          </button>
        </div>
      )}
    </div>
  );
}
