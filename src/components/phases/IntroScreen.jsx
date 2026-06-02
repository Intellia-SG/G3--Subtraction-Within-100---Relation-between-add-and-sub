export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      {/* Module Badge */}
      <div className="module-badge">
        Grade 2 • Singapore Math
      </div>

      {/* Module Title */}
      <h1 className="module-title">
        Subtraction within 100
      </h1>

      {/* Module Description */}
      <p className="module-description">
        Using the Relationship Between Addition and Subtraction
      </p>

      {/* Learning Objectives Box */}
      <div className="learning-objectives">
        <div className="objectives-title">
          🎯 You will learn to:
        </div>
        {[
          'Use addition facts to find subtraction facts instantly',
          'Build fact family triangles with 4 related equations',
          'Subtract 2-digit numbers within 100',
          'Solve real-world subtraction problems',
        ].map((objective, i) => (
          <div key={i} className="objective-item">
            <span className="check-mark">✓</span>
            <span>{objective}</span>
          </div>
        ))}
      </div>

      {/* Journey Preview */}
      <div className="journey-preview-card">
        <div className="journey-preview-title">Your Learning Journey</div>
        <div className="journey-preview-grid">
          {[
            { icon: '🔍', number: '1', name: 'Wonder', desc: 'Spark curiosity' },
            { icon: '📖', number: '2', name: 'Story', desc: 'Learn concept' },
            { icon: '🔬', number: '3', name: 'Simulate', desc: 'Explore models' },
            { icon: '🎮', number: '4', name: 'Play', desc: 'Practice skills' },
            { icon: '✨', number: '5', name: 'Reflect', desc: 'Think deeply' }
          ].map((phase) => (
            <div key={phase.number} className="journey-phase-item">
              <div className="phase-icon-circle">{phase.icon}</div>
              <div className="phase-number">{phase.number}</div>
              <div className="phase-name">{phase.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <button className="btn btn-p btn-lg btn-full intro-start-btn" onClick={onStart}>
        Start Journey! 🚀
      </button>

      {/* Module Info */}
      <p className="module-info">
        ~16 min · 100 practice questions · 6 badges to earn
      </p>
    </div>
  );
}
