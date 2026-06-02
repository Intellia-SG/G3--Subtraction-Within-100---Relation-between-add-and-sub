import Base10Station      from './Base10Station.jsx';
import FactFamilyStation  from './FactFamilyStation.jsx';
import InverterStation    from './InverterStation.jsx';

const TABS = [
  { label: 'Base-10 Blocks',   icon: '🧱', shortLabel: 'Blocks' },
  { label: 'Fact Triangle', icon: '🔺', shortLabel: 'Triangle' },
  { label: 'Number Inverter', icon: '🔄', shortLabel: 'Inverter' },
];

export default function SimulatePhase({ state, dispatch, onDone }) {
  const { ssc, simSt } = state;

  const handleComplete = (idx) => {
    dispatch({ t: 'SIM_COMPLETE', v: idx });
    if (idx === 2) {
      dispatch({ t: 'PHASE_DONE', v: 'simulate' });
      onDone();
    }
  };

  return (
    <div className="simulate-phase">
      <div className="phase-badge badge-simulate">Phase 3 · Simulate 🔬</div>

      {/* Header */}
      <div className="simulate-header">
        <h2 className="simulate-title">Explore Subtraction Models</h2>
        <p className="simulate-subtitle">Complete all 3 stations to understand inverse operations</p>
      </div>

      {/* Station progress dots */}
      <div className="station-progress">
        {TABS.map((tab, i) => (
          <div 
            key={i} 
            className={`station-dot ${ssc[i] ? 'completed' : ''} ${simSt === i ? 'active' : ''}`}
          >
            <div className="station-dot-inner">
              {ssc[i] ? '✓' : i + 1}
            </div>
            <span className="station-label">{tab.shortLabel}</span>
          </div>
        ))}
      </div>

      {/* Tip box */}
      <div className="simulate-tip-box">
        <span className="tip-icon">💡</span>
        <span className="tip-text">
          {simSt === 0 && 'Remove blocks to see subtraction in action'}
          {simSt === 1 && 'Drag the missing number to complete the triangle'}
          {simSt === 2 && 'Use the number pad to find the inverse operation'}
        </span>
      </div>

      {/* Station content card */}
      <div className="glass-card simulate-station-card">
        {simSt === 0 && !ssc[0] && <Base10Station     onComplete={() => handleComplete(0)} />}
        {simSt === 1 && !ssc[1] && <FactFamilyStation onComplete={() => handleComplete(1)} />}
        {simSt === 2 && !ssc[2] && <InverterStation   onComplete={() => handleComplete(2)} />}

        {/* Station complete message */}
        {ssc[simSt] && simSt < 3 && (
          <div className="station-complete-message">
            <div className="complete-icon">✅</div>
            <h2 className="complete-title">Station {simSt + 1} Complete!</h2>
            <p className="complete-subtitle">Moving to next station…</p>
          </div>
        )}
      </div>
    </div>
  );
}
