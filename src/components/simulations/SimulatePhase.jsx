import { useState, useCallback } from 'react';
import Base10Station     from './Base10Station.jsx';
import FactFamilyStation from './FactFamilyStation.jsx';
import InverterStation   from './InverterStation.jsx';

// Three stations matching CPA progression per PRD §5.3
const STATIONS = [
  { icon: '🧱', title: 'Take-Away Blocks',   subtitle: 'Concrete — drag tens & ones to the basket' },
  { icon: '🔺', title: 'Fact Triangle',       subtitle: 'Pictorial — find the missing number' },
  { icon: '🔄', title: 'Number Inverter',     subtitle: 'Abstract — use addition to solve subtraction' },
];

export default function SimulatePhase({ state, dispatch, onDone }) {
  const [station, setStation] = useState(0);

  const nextStation = useCallback(() => {
    setStation(s => s + 1);
  }, []);

  return (
    <div className="simulate-phase">
      <div className="simulate-header">
        <h3 className="simulate-label">🧪 Simulate</h3>
        <p className="simulate-sublabel">Explore the inverse relationship — three stations to master!</p>
      </div>

      {/* Station progress dots */}
      <div className="progress-dots">
        {STATIONS.map((s, i) => (
          <div key={i} className="simulate-dot-wrapper">
            <div className={`progress-dot ${i === station ? 'active' : i < station ? 'completed' : ''}`} />
            <span className="simulate-dot-label">{s.icon}</span>
          </div>
        ))}
      </div>

      {/* Station description bar */}
      <div style={{
        textAlign: 'center', padding: '5px 12px',
        background: 'rgba(255,255,255,0.04)', borderRadius: 10,
        marginBottom: 0, maxWidth: 640, width: '100%',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {STATIONS[station]?.icon} {STATIONS[station]?.subtitle}
        </span>
      </div>

      {/* Station card */}
      <div className="glass-card" style={{ maxWidth: 640, width: '100%', animation: 'slideUp 0.35s ease' }}>
        {station === 0 && <Base10Station     onComplete={nextStation} />}
        {station === 1 && <FactFamilyStation onComplete={nextStation} />}
        {station === 2 && <InverterStation   onComplete={onDone}     />}
      </div>
    </div>
  );
}
