import Base10Station      from './Base10Station.jsx';
import FactFamilyStation  from './FactFamilyStation.jsx';
import InverterStation    from './InverterStation.jsx';

const TABS = [
  { label: 'A: Blocks',   icon: '🧱' },
  { label: 'B: Triangle', icon: '🔺' },
  { label: 'C: Inverter', icon: '🔄' },
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
    <div>
      <div className="pbadge pb-sim">Phase 3 · Simulate 🔬</div>

      {/* Station tabs */}
      <div className="s-tabs">
        {TABS.map((tab, i) => (
          <div key={i} className={`s-tab${ssc[i] ? ' done' : simSt === i ? ' active' : ''}`}>
            {ssc[i] ? '✓ ' : tab.icon + ' '}{tab.label}
          </div>
        ))}
      </div>

      <div className="card">
        {simSt === 0 && !ssc[0] && <Base10Station     onComplete={() => handleComplete(0)} />}
        {simSt === 1 && !ssc[1] && <FactFamilyStation onComplete={() => handleComplete(1)} />}
        {simSt === 2 && !ssc[2] && <InverterStation   onComplete={() => handleComplete(2)} />}

        {/* Briefly show "Station complete" before advancing */}
        {ssc[simSt] && simSt < 3 && (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: 48 }}>✅</div>
            <h2>Station {simSt + 1} Complete!</h2>
            <p style={{ color: '#85929E', marginTop: 6 }}>Moving to next station…</p>
          </div>
        )}
      </div>
    </div>
  );
}
