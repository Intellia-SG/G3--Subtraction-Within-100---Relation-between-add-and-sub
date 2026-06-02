import { useState } from 'react';
import ImgPH from '../shared/ImgPH.jsx';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import { PANELS } from '../../data/storyPanels.js';

// Resolve visKey to JSX
function resolveVis(visKey) {
  if (!visKey) return null;
  if (visKey === 'triangle-missing')
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <FactFamilyTriangle whole={63} part1={27} part2={36} missing="part2" size={120} />
      </div>
    );
  if (visKey === 'triangle-complete')
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <FactFamilyTriangle whole={63} part1={27} part2={36} size={120} />
      </div>
    );
  return null;
}

export default function StoryPhase({ onComplete }) {
  const [p, setP] = useState(0);
  const cur = PANELS[p];
  const progress = ((p + 1) / PANELS.length) * 100;

  return (
    <div className="story-phase">
      <div className="phase-badge badge-story">Phase 2 · Story 📖</div>

      {/* Progress bar with gold-purple gradient */}
      <div className="story-progress-container">
        <div className="story-progress-bar">
          <div 
            className="story-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Story card with glass effect */}
      <div className="story-card glass-card">
        {/* Story title */}
        <div className="story-title">
          🥪 The Magic Sandwich Shop · Panel {p + 1}/{PANELS.length}
        </div>

        {/* Image section with gradient overlay */}
        <div className="story-image-section">
          <ImgPH src={cur.img} alt={cur.imgAlt} />
          <div className="story-image-overlay"></div>
        </div>

        {/* Story text with fade-in animation */}
        <div className="story-text-container">
          <div className="story-narration">{cur.nar}</div>
          {cur.dlg && <div className="story-dialogue">"{cur.dlg}"</div>}
          {resolveVis(cur.visKey)}
        </div>
      </div>

      {/* Navigation with dots */}
      <div className="story-navigation">
        <button 
          className="btn btn-o btn-sm" 
          onClick={() => setP((v) => v - 1)} 
          disabled={p === 0}
        >
          ← Back
        </button>

        {/* Navigation dots */}
        <div className="story-dots">
          {PANELS.map((_, i) => (
            <div 
              key={i} 
              className={`story-dot ${i === p ? 'active' : ''} ${i < p ? 'completed' : ''}`}
            />
          ))}
        </div>

        {p < PANELS.length - 1 ? (
          <button 
            className="btn btn-p btn-sm" 
            onClick={() => setP((v) => v + 1)}
          >
            Next →
          </button>
        ) : (
          <button className="btn btn-g" onClick={onComplete}>
            Simulate! 🔬
          </button>
        )}
      </div>
    </div>
  );
}
