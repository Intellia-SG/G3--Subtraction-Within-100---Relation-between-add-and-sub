export default function IntroScreen({ onStart }) {
  return (
    <div className="card intro-hero">
      <span className="mascot-big" role="img" aria-label="Robot mascot">🤖</span>
      <h1>Subtraction within 100</h1>
      <p className="intro-sub">Using the Relationship Between + and −</p>
      <p style={{ color: '#85929E', fontSize: 12, marginBottom: 18 }}>
        Grade 2 Math · Singapore MOE Primary 2 · Module G2-MATH-SUB100-001
      </p>

      <div style={{ background: '#EEF4FB', borderRadius: 12, padding: '12px 14px', marginBottom: 16, textAlign: 'left' }}>
        <div style={{ fontWeight: 800, color: '#0D3B6E', fontSize: 13, marginBottom: 6 }}>
          🎯 You will learn to:
        </div>
        {[
          'Use addition facts to find subtraction facts instantly',
          'Build fact family triangles with 4 related equations',
          'Subtract 2-digit numbers within 100',
          'Solve real-world subtraction problems',
        ].map((l) => (
          <div key={l} style={{ fontSize: 12, color: '#4A5568', padding: '2px 0', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
            <span>✓</span><span>{l}</span>
          </div>
        ))}
      </div>

      <div className="journey-grid">
        {[['🔍','1','Wonder'],['📖','2','Story'],['🔬','3','Simulate'],['🎮','4','Play'],['✨','5','Reflect']].map(([ic, n, name]) => (
          <div className="j-item" key={n}>
            <div className="j-icon">{ic}</div>
            <div className="j-num">{n}</div>
            <div className="j-name">{name}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-p btn-lg btn-full" onClick={onStart}>
        Start Learning! 🚀
      </button>
      <p style={{ fontSize: 11, color: '#ADB5BD', marginTop: 10 }}>
        ~16 min · 100 practice questions · 6 badges to earn
      </p>
    </div>
  );
}
