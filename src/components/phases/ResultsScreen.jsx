import { BADGES } from '../../data/badges.js';
import { WORLDS } from '../../data/worlds.js';
import { calcStars } from '../../utils/gamification.js';

export default function ResultsScreen({ state, dispatch }) {
  const total      = state.ws.reduce((t, w) => t + (w ?? 0), 0);
  const worldsDone = state.ws.filter((w) => w !== null).length;
  const pct        = Math.round((total / 100) * 100);
  const earnedBadges = BADGES.filter((b) => state.badges.includes(b.id));

  return (
    <div className="results-screen">
      {/* Trophy and celebration */}
      <div className="results-hero">
        <div className="results-trophy">🏆</div>
        <h1 className="results-title">Journey Complete!</h1>
        <p className="results-subtitle">
          You've mastered subtraction within 100!
        </p>
        
        {/* XP Circle Badge */}
        <div className="results-xp-circle">
          <div className="xp-circle-value">{state.xp}</div>
          <div className="xp-circle-label">XP Earned</div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="results-stats-grid">
        {[
          [String(state.stars),   '⭐ Stars'],
          [String(worldsDone),    '🌍 Worlds'],
          [String(state.maxStr),  '🔥 Streak'],
          [String(total),         '✓ Correct'],
          [`${pct}%`,             'Accuracy'],
          [String(earnedBadges.length), '🏅 Badges'],
        ].map(([value, label]) => (
          <div className="results-stat-box" key={label}>
            <div className="results-stat-value">{value}</div>
            <div className="results-stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Earned badges */}
      <div className="glass-card results-badges-card">
        <h3 className="results-section-title">
          🏅 Earned Badges ({earnedBadges.length}/{BADGES.length})
        </h3>
        <div className="results-badges-grid">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="results-badge-item">
              <div className="results-badge-icon">{badge.label.split(' ')[0]}</div>
              <div className="results-badge-name">{badge.label.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
          {earnedBadges.length === 0 && (
            <p className="results-no-badges">No badges earned yet — keep practicing!</p>
          )}
        </div>
      </div>

      {/* Phase completion checkmarks */}
      <div className="glass-card results-phases-card">
        <h3 className="results-section-title">✅ Phase Completion</h3>
        <div className="results-phases-grid">
          {['🔍 Wonder', '📖 Story', '🔬 Simulate', '🎮 Play', '✨ Reflect'].map((phase) => (
            <div key={phase} className="results-phase-item">
              <span className="phase-check">✓</span>
              <span>{phase}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaway */}
      <div className="results-takeaway">
        <div className="takeaway-icon">💡</div>
        <h3 className="takeaway-title">Key Takeaway</h3>
        <p className="takeaway-text">
          Addition and subtraction are <strong>inverse operations</strong>. Knowing{' '}
          <strong>a + b = c</strong> instantly gives you <strong>c − a = b</strong> and{' '}
          <strong>c − b = a</strong>!
        </p>
      </div>

      {/* Action buttons */}
      <div className="results-actions">
        <button className="btn btn-p btn-lg btn-full" onClick={() => dispatch({ t: 'RESTART' })}>
          🔄 Start New Journey
        </button>
      </div>
    </div>
  );
}
