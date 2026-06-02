export default function TopBar({ state, onHome }) {
  const phases = ['wonder', 'story', 'simulate', 'play', 'reflect'];
  const labels = ['Wonder', 'Story', 'Simulate', 'Play', 'Reflect'];
  const icons = ['🔍', '📖', '🔬', '🎮', '✨'];

  if (state.phase === 'intro' || state.phase === 'results') return null;

  return (
    <div className="journey-bar" role="navigation" aria-label="Lesson progress map">
      {phases.map((p, i) => {
        const isActive = state.phase === p;
        const isCompleted = state.pc[p];
        const prevCompleted = i > 0 && state.pc[phases[i - 1]];

        return (
          <div 
            key={p} 
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {i > 0 && (
              <div 
                className={`journey-connector ${prevCompleted ? 'filled' : ''}`} 
                aria-hidden="true" 
              />
            )}
            <div 
              className={`journey-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              aria-current={isActive ? 'step' : undefined}
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
