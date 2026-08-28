// src/components/simulations/InverseMachineStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import BarModel from '../shared/BarModel.jsx';
import { useAudio } from '../../hooks/useAudio.js';

const ROUNDS = [
  {
    round: 1,
    whole: 40,
    part1: 18,
    part2: 22,
    equationOptions: [
      { text: '40 − 22 = □', isCorrect: true },
      { text: '40 + 22 = □', isCorrect: false },
      { text: '22 − 18 = □', isCorrect: false },
    ],
    answerOptions: [16, 18, 22, 28],
  },
  {
    round: 2,
    whole: 55,
    part1: 27,
    part2: 28,
    equationOptions: [
      { text: '55 − 28 = □', isCorrect: true },
      { text: '55 + 28 = □', isCorrect: false },
      { text: '28 − 27 = □', isCorrect: false },
    ],
    answerOptions: [25, 27, 28, 37],
  },
  {
    round: 3,
    whole: 72,
    part1: 35,
    part2: 37,
    equationOptions: [
      { text: '72 − 37 = □', isCorrect: true },
      { text: '72 + 37 = □', isCorrect: false },
      { text: '37 − 35 = □', isCorrect: false },
    ],
    answerOptions: [32, 35, 37, 45],
  },
];

export default function InverseMachineStation({ onComplete, audioEnabled }) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [leverPulled, setLeverPulled] = useState(false);
  const [showSteam, setShowSteam] = useState(false);
  const [selectedEq, setSelectedEq] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [step, setStep] = useState(1); // 1: Pull lever & Pick inverse eq | 2: Solve missing addend
  const { sounds } = useAudio(audioEnabled);

  const r = ROUNDS[roundIdx];

  function handlePullLever() {
    sounds.click();
    setLeverPulled(true);
    setShowSteam(true);
    setTimeout(() => setShowSteam(false), 1200);
  }

  function handlePickEq(eq) {
    sounds.click();
    setSelectedEq(eq.text);
    if (eq.isCorrect) {
      sounds.correct();
      setTimeout(() => setStep(2), 650);
    } else {
      sounds.wrong();
    }
  }

  function handlePickAns(val) {
    sounds.click();
    setSelectedAns(val);
    if (val === r.part1) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  }

  function handleNextRound() {
    if (roundIdx + 1 < ROUNDS.length) {
      sounds.levelUp();
      setRoundIdx(roundIdx + 1);
      setLeverPulled(false);
      setSelectedEq(null);
      setSelectedAns(null);
      setStep(1);
    } else {
      sounds.badge();
      onComplete();
    }
  }

  const isRoundDone = selectedAns === r.part1;

  return (
    <div className="station-wrap anim-fade-in">
      {/* Header */}
      <div className="station-header">
        <h3 className="station-title">⚙️ Station C: Steampunk Inverse Machine Lab</h3>
        <div className="station-target-box">
          <span className="station-target-label">Round:</span>
          <span className="station-target-num">{roundIdx + 1} / {ROUNDS.length}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="station-grid-2col">
        {/* Left Col: Steampunk Machine, Animated Gears & Dynamic Bar */}
        <div className="station-col-left">
          <div className="machine-sim-card">
            {/* Gears & Steam Display */}
            <div className="gears-row">
              <span className={`gear-cog-1 ${leverPulled ? 'gear-cog-fast' : ''}`}>⚙️</span>
              <span className={`gear-cog-2 ${leverPulled ? 'gear-cog-fast' : ''}`}>⚙️</span>
              {showSteam && <span className="steam-puff">💨</span>}
              <button
                type="button"
                className="lever-handle"
                onClick={handlePullLever}
                title="Click to pull the hydraulic inverse lever!"
              >
                🕹️ PULL INVERSE LEVER
              </button>
            </div>

            {/* Input / Morphing Cartridge */}
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '5px 14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
              <span style={{ color: '#ffd54f', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.05rem' }}>
                {!leverPulled ? `Input Addition: □ + ${r.part2} = ${r.whole}` : `⚙️ Inverted Equation: ${r.whole} − ${r.part2} = □`}
              </span>
            </div>

            {/* Dynamic Bar Model */}
            <div style={{ width: '100%', padding: '4px 0' }}>
              <BarModel
                whole={r.whole}
                part1={r.part1}
                part2={r.part2}
                missing={!isRoundDone ? 'part1' : null}
                width={250}
              />
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0, textAlign: 'center' }}>
              {isRoundDone
                ? `✨ Inverse Mastered: ${r.whole} − ${r.part2} = ${r.part1}!`
                : leverPulled
                ? 'Gears engaged! Select the inverse equation on the right!'
                : 'Pull the lever above to spin the gears and invert the addition!'}
            </p>
          </div>
        </div>

        {/* Right Col: Mathematical Simulation Challenge */}
        <div className="station-col-right">
          {step === 1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="anim-slide-up">
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#ffd54f', fontWeight: 800, fontSize: '0.88rem' }}>🎯 SIMULATION TASK 1:</span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  Which <strong>inverse subtraction equation</strong> will solve for the missing box in <strong>□ + {r.part2} = {r.whole}</strong>?
                </p>
              </div>

              {/* Equation Choices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {r.equationOptions.map((eq, i) => {
                  const isSelected = selectedEq === eq.text;
                  return (
                    <button
                      key={i}
                      className={`option-btn ${isSelected ? (eq.isCorrect ? 'correct' : 'wrong') : ''}`}
                      style={{ padding: '8px 12px', minHeight: '40px', fontSize: '1.05rem', textAlign: 'left' }}
                      onClick={() => handlePickEq(eq)}
                    >
                      {eq.text}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="anim-slide-up">
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#4ade80', fontWeight: 800, fontSize: '0.88rem' }}>
                  ⚙️ EQUATION UNLOCKED: {r.whole} − {r.part2} = □
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  🎯 SIMULATION TASK 2: Solve it! What is the missing number (<strong>{r.whole} − {r.part2}</strong>)?
                </p>
              </div>

              {/* Number Answer Choices */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {r.answerOptions.map((opt) => {
                  const isSelected = selectedAns === opt;
                  const isCorrect = opt === r.part1;
                  return (
                    <button
                      key={opt}
                      className={`option-btn ${isSelected ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                      onClick={() => handlePickAns(opt)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Next Round Action */}
              {isRoundDone && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                  <button className="btn btn-green btn-sm anim-celebrate" onClick={handleNextRound}>
                    {roundIdx + 1 < ROUNDS.length ? 'Next Machine Challenge ➔' : 'Complete Station C! ✅'}
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
