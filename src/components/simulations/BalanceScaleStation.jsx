// src/components/simulations/BalanceScaleStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import FactFamilyTriangle from '../shared/FactFamilyTriangle.jsx';
import { useAudio } from '../../hooks/useAudio.js';

const ROUNDS = [
  {
    round: 1,
    whole: 25,
    part1: 11,
    part2: 14,
    weightPills: [12, 14, 15, 18],
    imposterOptions: [
      { text: '11 + 14 = 25', isImposter: false },
      { text: '25 − 11 = 14', isImposter: false },
      { text: '25 + 11 = 36', isImposter: true },
      { text: '25 − 14 = 11', isImposter: false },
    ],
  },
  {
    round: 2,
    whole: 36,
    part1: 19,
    part2: 17,
    weightPills: [15, 17, 18, 27],
    imposterOptions: [
      { text: '19 + 17 = 36', isImposter: false },
      { text: '36 + 17 = 53', isImposter: true },
      { text: '36 − 19 = 17', isImposter: false },
      { text: '36 − 17 = 19', isImposter: false },
    ],
  },
  {
    round: 3,
    whole: 63,
    part1: 27,
    part2: 36,
    weightPills: [34, 36, 38, 46],
    imposterOptions: [
      { text: '63 + 27 = 90', isImposter: true },
      { text: '27 + 36 = 63', isImposter: false },
      { text: '63 − 27 = 36', isImposter: false },
      { text: '63 − 36 = 27', isImposter: false },
    ],
  },
];

export default function BalanceScaleStation({ onComplete, audioEnabled }) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedImposter, setSelectedImposter] = useState(null);
  const [step, setStep] = useState(1); // 1: Select weight to balance | 2: Imposter Quiz
  const { sounds } = useAudio(audioEnabled);

  const r = ROUNDS[roundIdx];
  const isBalanced = selectedWeight === r.part2;

  function handleSelectWeight(w) {
    sounds.click();
    setSelectedWeight(w);
    if (w === r.part2) {
      sounds.correct();
      setTimeout(() => setStep(2), 650);
    } else {
      sounds.wrong();
    }
  }

  function handleSelectImposter(opt) {
    sounds.click();
    setSelectedImposter(opt.text);
    if (opt.isImposter) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  }

  function handleNextRound() {
    if (roundIdx + 1 < ROUNDS.length) {
      sounds.levelUp();
      setRoundIdx(roundIdx + 1);
      setSelectedWeight(null);
      setSelectedImposter(null);
      setStep(1);
    } else {
      sounds.badge();
      onComplete();
    }
  }

  const tiltAngle = !selectedWeight ? 8 : selectedWeight < r.part2 ? 5 : selectedWeight > r.part2 ? -5 : 0;
  const isRoundDone = selectedImposter && r.imposterOptions.find(o => o.text === selectedImposter)?.isImposter;

  return (
    <div className="station-wrap anim-fade-in">
      {/* Header */}
      <div className="station-header">
        <h3 className="station-title">⚖️ Station B: Balance Scale &amp; Fact Family Triangle</h3>
        <div className="station-target-box">
          <span className="station-target-label">Round:</span>
          <span className="station-target-num">{roundIdx + 1} / {ROUNDS.length}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="station-grid-2col">
        {/* Left Col: Graphical Metallic Balance Scale & Triangle Portal */}
        <div className="station-col-left">
          <div className="scale-sim-card">
            {isBalanced && <div className="beam-portal-glow" />}

            {/* SVG Balance Scale */}
            <svg viewBox="0 0 280 130" width="100%" style={{ maxWidth: 280 }} aria-label="Metallic Balance Scale">
              {/* Stand */}
              <rect x="135" y="36" width="10" height="85" fill="#475569" rx="4" />
              <polygon points="105,130 175,130 140,110" fill="#334155" />

              {/* Tilting Lever Beam */}
              <g style={{ transformOrigin: '140px 38px', transform: `rotate(${tiltAngle}deg)`, transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <line x1="28" y1="38" x2="252" y2="38" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
                <circle cx="140" cy="38" r="7" fill="#ffd54f" />

                {/* Left Pan (Whole) */}
                <line x1="50" y1="38" x2="50" y2="76" stroke="#94a3b8" strokeWidth="2" />
                <line x1="28" y1="76" x2="72" y2="76" stroke="#ffd54f" strokeWidth="4" strokeLinecap="round" />
                <rect x="33" y="54" width="34" height="22" fill="rgba(245, 158, 11, 0.4)" stroke="#f59e0b" rx="5" />
                <text x="50" y="70" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="var(--font-display)">
                  {r.whole}
                </text>

                {/* Right Pan (Part 1 + Part 2) */}
                <line x1="230" y1="38" x2="230" y2="76" stroke="#94a3b8" strokeWidth="2" />
                <line x1="208" y1="76" x2="252" y2="76" stroke="#ffd54f" strokeWidth="4" strokeLinecap="round" />
                <rect x="214" y="56" width="18" height="20" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" rx="4" />
                <text x="223" y="71" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="var(--font-display)">
                  {r.part1}
                </text>
                {selectedWeight && (
                  <rect x="234" y="56" width="18" height="20" fill={isBalanced ? 'rgba(74, 222, 128, 0.4)' : 'rgba(239, 83, 80, 0.4)'} stroke={isBalanced ? '#4ade80' : '#ef5350'} rx="4" />
                )}
                {selectedWeight && (
                  <text x="243" y="71" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="var(--font-display)">
                    {selectedWeight}
                  </text>
                )}
              </g>
            </svg>

            {/* Glowing Fact Family Triangle */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>
              <FactFamilyTriangle
                whole={r.whole}
                part1={r.part1}
                part2={r.part2}
                missing={!isBalanced ? 'part2' : null}
                size={135}
              />
            </div>
          </div>
        </div>

        {/* Right Col: Mathematical Simulation Challenge */}
        <div className="station-col-right">
          {step === 1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="anim-slide-up">
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#ffd54f', fontWeight: 800, fontSize: '0.88rem' }}>🎯 SIMULATION TASK 1:</span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  The left pan has <strong>Whole = {r.whole}</strong>. The right has <strong>Part 1 = {r.part1}</strong>. What weight balances the beam to 0°?
                </p>
                <div style={{ marginTop: '6px', color: '#93c5fd', fontSize: '0.86rem', fontWeight: 800 }}>
                  Calculate: {r.whole} − {r.part1} = ?
                </div>
              </div>

              {/* Weight Options */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {r.weightPills.map((opt) => {
                  const isSelected = selectedWeight === opt;
                  const isCorrect = opt === r.part2;
                  return (
                    <button
                      key={opt}
                      className={`option-btn ${isSelected ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                      onClick={() => handleSelectWeight(opt)}
                    >
                      ⚖️ {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="anim-slide-up">
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#4ade80', fontWeight: 800, fontSize: '0.88rem' }}>
                  ✨ SCALE BALANCED ({r.part1} + {r.part2} = {r.whole})
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  🎯 SIMULATION TASK 2: Which equation is an <strong>IMPOSTER</strong> that does NOT belong to this fact family?
                </p>
              </div>

              {/* Imposter Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {r.imposterOptions.map((opt, idx) => {
                  const isSelected = selectedImposter === opt.text;
                  return (
                    <button
                      key={idx}
                      className={`option-btn ${isSelected ? (opt.isImposter ? 'correct' : 'wrong') : ''}`}
                      style={{ padding: '8px 12px', minHeight: '40px', fontSize: '1.05rem', textAlign: 'left' }}
                      onClick={() => handleSelectImposter(opt)}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {/* Next Round Action */}
              {isRoundDone && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                  <button className="btn btn-green btn-sm anim-celebrate" onClick={handleNextRound}>
                    {roundIdx + 1 < ROUNDS.length ? 'Next Scale Challenge ➔' : 'Complete Station B! ✅'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
