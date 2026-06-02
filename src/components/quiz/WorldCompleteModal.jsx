import { WORLDS } from '../../data/worlds.js';
import { BADGES } from '../../data/badges.js';
import { starLabel } from '../../utils/gamification.js';

export default function WorldCompleteModal({ result, worldIdx, onContinue }) {
  const w = WORLDS[worldIdx];
  const starsArr = ['☆', '☆', '☆'];
  for (let i = 0; i < result.stars; i++) starsArr[i] = '⭐';

  const badgeLabels = result.newBadges?.map((id) => BADGES.find((b) => b.id === id)?.label || id) ?? [];

  return (
    <div className="wc-overlay" role="dialog" aria-modal="true" aria-label="World complete">
      <div className="wc-card">
        <div style={{ fontSize: 48, marginBottom: 6 }}>{w.emoji}</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: '#85929E', textTransform: 'uppercase', letterSpacing: '.08em' }}>
          World {worldIdx + 1} Complete!
        </div>
        <h2 style={{ margin: '4px 0 8px' }}>{w.name}</h2>

        <div className="wc-stars">{starsArr.join(' ')}</div>
        <div className="star-score">{result.score}/10</div>

        <p style={{ margin: '6px 0 12px', fontSize: 13, color: '#85929E' }}>
          {starLabel(result.stars)}
        </p>

        {badgeLabels.length > 0 && (
          <div className="wc-badges">
            {badgeLabels.map((lbl) => (
              <div key={lbl} className="wc-badge">🏅 {lbl}</div>
            ))}
          </div>
        )}

        {result.score < 5 && (
          <div style={{
            background: '#FFF3CD', border: '2px solid #F5A623', borderRadius: 9,
            padding: '8px 12px', marginBottom: 10, fontSize: 12, fontWeight: 700, color: '#856404',
          }}>
            ⚠️ Score 5+ to unlock the next world. You can replay!
          </div>
        )}

        <button className="btn btn-p btn-full" onClick={onContinue}>
          {result.score >= 5 ? 'Continue → 🗺️' : 'Try Again 🔄'}
        </button>
      </div>
    </div>
  );
}
