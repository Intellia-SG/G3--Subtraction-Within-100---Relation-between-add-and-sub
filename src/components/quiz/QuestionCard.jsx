import { useState, useEffect } from 'react';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import BarModel           from '../shared/BarModel.jsx';
import { WORLDS }         from '../../data/worlds.js';

export default function QuestionCard({ state, dispatch }) {
  const { qs, cq, cw, wcorr, fb, hl, att } = state;
  const [selAns, setSel] = useState(null);
  const q = qs[cq];
  const qInWorld = cq - cw * 10 + 1;

  useEffect(() => setSel(null), [cq]);

  if (!q) return null;

  const handleAnswer = (v) => {
    if (fb) return;
    setSel(v);
    const ok = String(v) === String(q.ans);
    if (ok) dispatch({ t: 'CORRECT', exp: q.exp });
    else    dispatch({ t: 'WRONG' });
  };

  const is2    = q.type === 'inverse_check' || q.type === 'true_false_bond';
  const isLong = q.opts?.some((o) => String(o).length > 6);

  return (
    <div>
      {/* World header */}
      <div className="w-header-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="w-title">{WORLDS[cw].emoji} World {cw + 1}: {WORLDS[cw].name}</div>
            <div className="w-sub">Q{qInWorld}/10 · {wcorr} correct so far</div>
          </div>
          <button
            className="btn btn-o btn-sm"
            style={{ background: 'rgba(255,255,255,.15)', color: '#fff', borderColor: 'rgba(255,255,255,.3)', minHeight: 36 }}
            onClick={() => dispatch({ t: 'SHOW_MAP' })}
          >🗺️ Map</button>
        </div>
        <div className="prog-wrap">
          <div className="prog-bar" style={{ width: `${((qInWorld - 1) / 10) * 100}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="q-card">
        {/* Visual aids */}
        {q.visual === 'triangle' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <FactFamilyTriangle whole={q.whole} part1={q.part1} part2={q.part2} missing={q.missing} size={140} />
          </div>
        )}
        {q.visual === 'barModel' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <BarModel whole={q.whole} part1={q.part1} part2={q.part2} missing={q.missing} />
          </div>
        )}
        {q.visual === 'picture' && (
          <div className="wp-scene">
            {q.ch && <span>👤 </span>}{q.qt.split('\n')[0]}
          </div>
        )}

        {/* Question text */}
        <div className="q-text">
          {q.visual === 'picture' ? q.qt.split('\n').slice(1).join('\n') : q.qt}
        </div>

        {/* Hint */}
        {hl > 0 && <div className="hint-box">💡 {hl === 1 ? q.h1 : q.h2}</div>}

        {/* Options */}
        <div className={`opts${is2 ? ' opts-2col' : isLong ? ' opts-1col' : ''}`}>
          {q.opts.map((opt, i) => {
            const isSel = selAns === opt;
            const isC   = String(opt) === String(q.ans);
            let cls = 'opt';
            if (fb && isC)         cls += ' correct';
            else if (fb && isSel)  cls += ' wrong';
            return (
              <button key={i} className={cls} disabled={!!fb} onClick={() => !fb && handleAnswer(opt)}>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Hint button */}
        {!fb && hl < 2 && (
          <button className="btn btn-o btn-sm btn-full" style={{ marginTop: 8 }} onClick={() => dispatch({ t: 'HINT' })}>
            💡 Hint ({2 - hl} left)
          </button>
        )}

        {/* After 2 wrong attempts: reveal */}
        {!fb && att >= 2 && (
          <div className="hint-box hint-box2" style={{ marginTop: 10 }}>
            📘 Stuck? Answer: <strong>{q.ans}</strong><br />
            <span style={{ fontSize: 12 }}>{q.exp}</span>
            <br />
            <button className="btn btn-o btn-sm" style={{ marginTop: 7 }}
              onClick={() => dispatch({ t: 'CORRECT', exp: q.exp })}>
              Got it — Continue →
            </button>
          </div>
        )}
      </div>

      {/* Feedback overlay */}
      {fb && (
        <div className="fb-overlay" onClick={() => dispatch({ t: 'NEXT' })}>
          <div className={`fb-card ${fb.ok ? 'ok' : 'no'}`} onClick={(e) => e.stopPropagation()}>
            <div className="fb-icon">{fb.ok ? '🎉' : '💪'}</div>
            <div className={`fb-title ${fb.ok ? 'ok' : 'no'}`}>
              {fb.ok ? 'Brilliant!' : 'Good try!'}
            </div>
            {fb.ok && (
              <>
                <div className="xp-badge">+{fb.xpG} XP{fb.bonus ? ' 🔥 Streak!' : ''}</div>
                <div className="fb-exp">{fb.exp}</div>
              </>
            )}
            {!fb.ok && (
              <div className="fb-exp">
                The answer is <strong>{q.ans}</strong>.<br />{q.exp}
              </div>
            )}
            <button className="btn btn-p btn-full" onClick={() => dispatch({ t: 'NEXT' })}>
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
