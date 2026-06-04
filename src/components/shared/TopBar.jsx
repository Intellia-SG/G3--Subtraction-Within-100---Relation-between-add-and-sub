export default function TopBar({ state, dispatch }) {
  const phases = ['wonder', 'story', 'simulate', 'play', 'reflect'];
  const labels = ['Wonder', 'Story', 'Simulate', 'Play', 'Reflect'];
  const icons = ['🔍', '📖', '🔬', '🎮', '✨'];

  if (state.phase === 'intro' || state.phase === 'results') return null;

  const handlePhaseClick = (p) => {
    if (!dispatch) return;
    dispatch({ t: 'PHASE', v: p });
  };

  return (
    <div className="journey-bar" role="navigation" aria-label="Lesson progress map">
      {phases.map((p, i) => {
        const isActive    = state.phase === p;
        const isCompleted = state.pc[p];
        const prevCompleted = i > 0 && state.pc[phases[i - 1]];
        const isClickable = isCompleted && !isActive;

        return (
          <div key={p} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && (
              <div
                className={`journey-connector ${prevCompleted ? 'filled' : ''}`}
                aria-hidden="true"
              />
            )}
            <div
              className={`journey-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isClickable ? 'clickable' : ''}`}
              onClick={isClickable ? () => handlePhaseClick(p) : undefined}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={isClickable ? (e) => e.key === 'Enter' && handlePhaseClick(p) : undefined}
              aria-current={isActive ? 'step' : undefined}
              title={isClickable ? `Go back to ${labels[i]}` : labels[i]}
            >
              <div className="journey-step-dot">
                {isCompleted ? '✓' : icons[i]}
              </div>
              <span className="journey-step-label">{labels[i]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
