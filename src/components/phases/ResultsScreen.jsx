import { BADGES } from '../../data/badges.js';
import { WORLDS } from '../../data/worlds.js';
import { calcStars } from '../../utils/gamification.js';

export default function ResultsScreen({ state, dispatch }) {
  const total      = state.ws.reduce((t, w) => t + (w ?? 0), 0);
  const worldsDone = state.ws.filter((w) => w !== null).length;
  const pct        = Math.round((total / 100) * 100);
  const earnedBadges = BADGES.filter((b) => state.badges.includes(b.id));

  return (
    <div>
      {/* Hero */}
      <div className="card card-blue" style={{ textAlign: 'center', padding: '26px 18px' }}>
        <div style={{ fontSize: 56, marginBottom: 6 }}>🌟</div>
        <h1 style={{ color: '#fff', marginBottom: 4 }}>Amazing Work!</h1>
        <p style={{ opacity: 0.85, margin: '4px 0 10px', fontSize: 14 }}>
          You've completed the Subtraction within 100 module!
        </p>
        <div style={{ fontFamily: 'Fredoka One, cursive', fontSize: 30, color: '#F5A623' }}>
          {state.xp} XP Earned!
        </div>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        {[
          [String(state.stars),   '⭐ Stars'],
          [String(worldsDone),    '🌍 Worlds'],
          [String(state.maxStr),  '🔥 Streak'],
          [String(total),         '✓ Correct'],
          [`${pct}%`,             'Accuracy'],
          [String(earnedBadges.length), '🏅 Badges'],
        ].map(([v, l]) => (
          <div className="stat-box" key={l}>
            <div className="stat-n">{v}</div>
            <div className="stat-l">{l}</div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="card">
        <h3>🏅 Badges ({earnedBadges.length}/{BADGES.length})</h3>
        <div className="badges-earn">
          {BADGES.map((b) => {
            const earned = state.badges.includes(b.id);
            return (
              <div key={b.id} className={`bcard${earned ? ' un' : ''}`}>
                <div className="b-ico">{b.label.split(' ')[0]}</div>
                <div className="b-lbl">{b.label.split(' ').slice(1).join(' ')}</div>
                {!earned && <div style={{ fontSize: 9, color: '#ADB5BD', marginTop: 2 }}>{b.desc}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* World results */}
      <div className="card">
        <h3>📊 World Results</h3>
        <div className="world-results">
          {WORLDS.map((w, i) => {
            const sc = state.ws[i];
            const st = sc !== null ? calcStars(sc) : 0;
            return (
              <div className="wr-row" key={i}>
                <span>{w.emoji} {w.name}</span>
                {sc !== null
                  ? <span style={{ color: '#27AE60' }}>{sc}/10 {'⭐'.repeat(st)}</span>
                  : <span style={{ color: '#ADB5BD' }}>—</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Key takeaway */}
      <div style={{ background: '#D4EDDA', borderRadius: 14, padding: 16, marginBottom: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 30, marginBottom: 6 }}>💡</div>
        <h3 style={{ color: '#155724', fontFamily: 'Fredoka One, cursive', fontSize: 16, marginBottom: 5 }}>
          Key Takeaway
        </h3>
        <p style={{ color: '#155724', fontSize: 13, lineHeight: 1.6 }}>
          Addition and subtraction are <strong>inverse operations</strong>. Knowing{' '}
          <strong>a + b = c</strong> instantly gives you <strong>c − a = b</strong> and{' '}
          <strong>c − b = a</strong>!
        </p>
      </div>

      <button className="btn btn-p btn-lg btn-full" onClick={() => dispatch({ t: 'RESTART' })}>
        🔄 Start Again
      </button>
    </div>
  );
}
