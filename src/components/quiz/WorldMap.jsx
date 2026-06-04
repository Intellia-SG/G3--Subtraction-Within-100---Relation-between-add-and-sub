import { WORLDS }    from '../../data/worlds.js';
import { calcStars } from '../../utils/gamification.js';

export default function WorldMap({ state, dispatch }) {
  const { ws, cw, xp, stars } = state;
  const totalCorrect = ws.reduce((t, w) => t + (w ?? 0), 0);

  return (
    <div className="play-phase" style={{ alignItems: 'center' }}>
      {/* Header */}
      <div className="glass-card" style={{ width: '100%', textAlign: 'center', padding: '20px 24px 16px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
          🗺️ World Map
        </div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
          Score 5 or more out of 10 to unlock the next world!
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {[['⭐ ' + stars, 'Stars'], ['⚡ ' + xp, 'XP'], [totalCorrect + '/100', 'Correct']].map(([v, l]) => (
            <div key={l} style={{
              background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 16px', textAlign: 'center', minWidth: 72
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--gold)' }}>{v}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* World cards */}
      <div className="world-map" style={{ maxWidth: 640, width: '100%' }}>
        {WORLDS.map((w, i) => {
          const score    = ws[i];
          const st       = score !== null ? calcStars(score) : 0;
          const unlocked = i === 0 || (ws[i - 1] !== null && ws[i - 1] >= 5);
          const complete = score !== null;
          const current  = i === cw && !complete;

          return (
            <div
              key={i}
              className={`world-card ${!unlocked ? 'locked' : complete ? 'completed unlocked' : 'unlocked'}`}
              style={{
                borderColor: current ? 'var(--purple)' : complete ? 'var(--color-green)' : undefined,
                boxShadow: current ? '0 0 20px rgba(124,58,237,0.3)' : undefined,
              }}
              onClick={() => unlocked && dispatch({ t: 'ENTER_WORLD', v: i })}
              role={unlocked ? 'button' : undefined}
              tabIndex={unlocked ? 0 : undefined}
              onKeyDown={e => e.key === 'Enter' && unlocked && dispatch({ t: 'ENTER_WORLD', v: i })}
            >
              {/* Lock icon */}
              {!unlocked && <div className="world-lock">🔒</div>}
              {complete   && <div className="world-lock" style={{ color: 'var(--green)' }}>{score}/10</div>}

              <div className="world-icon">{w.emoji}</div>
              <div className="world-name">World {i + 1}: {w.name}</div>
              <div className="world-desc">{w.range}</div>

              {complete ? (
                <div className="world-stars">
                  {'⭐'.repeat(st)}{'☆'.repeat(3 - st)}
                </div>
              ) : unlocked ? (
                <div className="world-play-btn" style={{ background: 'var(--purple)', borderRadius: 999, marginTop: 4 }}>
                  ▶ Play Now!
                </div>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>Unlock first!</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
