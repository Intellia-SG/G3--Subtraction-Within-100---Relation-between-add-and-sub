import { useState, useEffect, useCallback } from 'react';
import { STORY_SLIDES } from '../../data/storyPanels.js';

export default function StoryPhase({ onComplete }) {
  const [slide, setSlide] = useState(0);
  const [anim, setAnim] = useState(false);
  const [textVis, setTextVis] = useState(false);
  const [hlVis, setHlVis] = useState(false);

  const s = STORY_SLIDES[slide];
  const isLast = slide === STORY_SLIDES.length - 1;
  const pct = ((slide + 1) / STORY_SLIDES.length) * 100;

  useEffect(() => {
    setTextVis(false); setHlVis(false);
    const t1 = setTimeout(() => setTextVis(true), 100);
    const t2 = setTimeout(() => setHlVis(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [slide]);

  const goNext = useCallback(() => {
    if (anim) return;
    setAnim(true);
    setTimeout(() => {
      if (isLast) { onComplete(); } else { setSlide(i => i + 1); }
      setAnim(false);
    }, 400);
  }, [anim, isLast, onComplete]);

  const goPrev = useCallback(() => {
    if (anim || slide === 0) return;
    setAnim(true);
    setTimeout(() => { setSlide(i => i - 1); setAnim(false); }, 400);
  }, [anim, slide]);

  return (
    <div className="story-phase">
      <div className="story-progress">
        <div className="story-progress-bar">
          <div className="story-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="story-progress-label">{slide + 1} / {STORY_SLIDES.length}</span>
      </div>

      <div className={`story-card ${anim ? 'flipping' : ''}`}>
        <div className="story-image-section">
          <img
            src={s.image}
            alt={s.title}
            className="story-image"
            onError={e => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'rgba(99,102,241,0.15)';
              e.target.parentElement.innerHTML =
                `<div style="font-size:5rem;display:flex;align-items:center;justify-content:center;height:100%">🏫</div>`;
            }}
          />
          <div className="story-image-overlay" />
        </div>

        <div className="story-text-section">
          <h2 className="story-title">{s.title}</h2>
          <p className={`story-text ${textVis ? 'revealed' : ''}`}>{s.text}</p>
          <div className={`story-highlight ${hlVis ? 'visible' : ''}`}>
            <span>✨</span>
            <span className="story-highlight-text">{s.highlight}</span>
            <span>✨</span>
          </div>
          <div className="story-mascot">
            <div className="mascot" style={{ width: 38, height: 38, fontSize: '1.1rem' }}>🤖</div>
            <div className="speech-bubble" style={{ fontSize: '0.75rem', padding: '6px 10px', maxWidth: 160 }}>
              {s.mascotText}
            </div>
          </div>
        </div>
      </div>

      <div className="story-nav">
        <button
          className="btn btn-outline btn-sm"
          onClick={goPrev}
          disabled={slide === 0}
          style={{ opacity: slide === 0 ? 0.3 : 1 }}
        >
          ← Back
        </button>

        <div className="story-dots">
          {STORY_SLIDES.map((_, i) => (
            <div
              key={i}
              className={`story-dot ${i === slide ? 'active' : i < slide ? 'completed' : ''}`}
            />
          ))}
        </div>

        <button
          className={`btn ${isLast ? 'btn-green' : 'btn-primary'} btn-sm`}
          onClick={goNext}
        >
          {isLast ? "🚀 Let's Explore!" : 'Next →'}
        </button>
      </div>
    </div>
  );
}
