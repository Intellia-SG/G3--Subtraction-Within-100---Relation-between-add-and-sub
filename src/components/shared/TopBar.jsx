export default function TopBar({ state, onHome }) {
  const phases = ['wonder', 'story', 'simulate', 'play', 'reflect'];
  const labels = ['Wonder', 'Story', 'Simulate', 'Play', 'Reflect'];
  const icons = ['🔍', '📖', '🔬', '🎮', '✨'];
  const ci = phases.indexOf(state.phase);

  if (state.phase === 'intro' || state.phase === 'results') return null;

  return (
    <div className="journey-bar" role="navigation" aria-label="Lesson progress map">
      {phases.map((p, i) => {
        const isActive = state.phase === p;
        const isCompleted = state.pc[p];

        return (
          <div 
            key={p} 
            className={`journey-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {i > 0 && (
              <div 
                className={`journey-connector ${isCompleted || state.pc[phases[i - 1]] ? 'filled' : ''}`} 
                aria-hidden="true" 
              />
            )}
            <div className="journey-step-dot">
              {isCompleted ? '✓' : icons[i]}
            </div>
            <span className="journey-step-label">{labels[i]}</span>
          </div>
        );
      })}
    </div>
  );
}
