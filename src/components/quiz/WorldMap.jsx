import { WORLDS } from '../../data/worlds.js';
import { calcStars } from '../../utils/gamification.js';

export default function WorldMap({ state, dispatch }) {
  const { ws, cw, xp, stars } = state;
  const totalCorrect = ws.reduce((t, w) => t + (w ?? 0), 0);

  return (
    <div>
      <div className="pbadge pb-play">Phase 4 · Play 🎮</div>

      {/* Header */}
      <div className="card card-blue" style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 32, marginBottom: 6 }}>🗺️</div>
        <h2 style={{ color: '#fff', marginBottom: 4 }}>World Map</h2>
        <p style={{ opacity: 0.8, fontSize: 13 }}>Score ≥ 5/10 to unlock the next world!</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10 }}>
          {[[`⭐ ${stars}`, 'Stars'], [`⚡ ${xp}`, 'XP'], [`${totalCorrect}/100`, 'Correct']].map(([v, l]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,.15)', borderRadius: 9, padding: '4px 12px' }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{v}</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* World grid */}
      <div className="worlds-grid">
        {WORLDS.map((w, i) => {
          const score    = ws[i];
          const st       = score !== null ? calcStars(score) : 0;
          const unlocked = i === 0 || (ws[i - 1] !== null && ws[i - 1] >= 5);
          const complete = score !== null;

          return (
            <div
              key={i}
              className={`w-card${!unlocked ? ' locked' : complete ? ' complete' : i === cw && !complete ? ' current' : ''}`}
              onClick={() => unlocked && dispatch({ t: 'ENTER_WORLD', v: i })}
              role={unlocked ? 'button' : undefined}
              tabIndex={unlocked ? 0 : undefined}
              onKeyDown={(e) => e.key === 'Enter' && unlocked && dispatch({ t: 'ENTER_WORLD', v: i })}
              aria-label={`${w.name}${complete ? `, score ${score}/10` : unlocked ? ', available' : ', locked'}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20 }}>{w.emoji}</span>
                {!unlocked && <span style={{ fontSize: 14 }}>🔒</span>}
                {complete  && <span className="w-score">{score}/10</span>}
              </div>
              <div className="w-name">W{i + 1}: {w.name}</div>
              <div className="w-range">{w.range}</div>
              {complete
                ? <div className="w-stars-row">{'⭐'.repeat(st)}{'☆'.repeat(3 - st)}</div>
                : unlocked && <div style={{ fontSize: 10, fontWeight: 800, color: '#1A5EAB', marginTop: 3 }}>▶ Play Now</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
