import { useState } from 'react';
import ImgPH from '../shared/ImgPH.jsx';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import { PANELS } from '../../data/storyPanels.js';

// Resolve visKey to JSX
function resolveVis(visKey) {
  if (!visKey) return null;
  if (visKey === 'triangle-missing')
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <FactFamilyTriangle whole={63} part1={27} part2={36} missing="part2" size={120} />
      </div>
    );
  if (visKey === 'triangle-complete')
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <FactFamilyTriangle whole={63} part1={27} part2={36} size={120} />
      </div>
    );
  return null;
}

export default function StoryPhase({ onDone }) {
  const [p, setP] = useState(0);
  const cur = PANELS[p];
  const pct = Math.round(((p + 1) / PANELS.length) * 100);

  return (
    <div>
      <div className="pbadge pb-story">Phase 2 · Story 📖</div>

      {/* Progress bar */}
      <div style={{ background: '#EEF4FB', borderRadius: 10, height: 5, marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ background: '#1A5EAB', height: '100%', width: `${pct}%`, borderRadius: 10, transition: 'width .4s ease' }} />
      </div>

      <div className="card" style={{ animation: 'slideUp .3s ease' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#85929E', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>
          🥪 The Magic Sandwich Shop · Panel {p + 1}/{PANELS.length}
        </div>

        <ImgPH src={cur.img} alt={cur.imgAlt} />

        <div className="story-nar">{cur.nar}</div>
        {cur.dlg && <div className="story-dlg">"{cur.dlg}"</div>}
        {resolveVis(cur.visKey)}
      </div>

      <div className="panel-nav">
        <button className="btn btn-o btn-sm" onClick={() => setP((v) => v - 1)} disabled={p === 0}>
          ← Back
        </button>

        <div className="p-step-dots">
          {PANELS.map((_, i) => (
            <div key={i} className={`psd${i === p ? ' cur' : i < p ? ' done' : ''}`} />
          ))}
        </div>

        {p < PANELS.length - 1 ? (
          <button className="btn btn-p btn-sm" onClick={() => setP((v) => v + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn btn-g" onClick={onDone}>
            Simulate! 🔬
          </button>
        )}
      </div>
    </div>
  );
}
