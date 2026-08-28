// src/components/simulations/AppleOrchardStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const ROUNDS = [
  {
    round: 1,
    whole: 12,
    part1: 5,
    part2: 7,
    options: [6, 7, 8, 9],
    subFacts: [
      { text: '12 − 5 = 7', correct: true },
      { text: '12 + 5 = 17', correct: false },
      { text: '7 − 5 = 2', correct: false },
    ],
  },
  {
    round: 2,
    whole: 15,
    part1: 8,
    part2: 7,
    options: [6, 7, 8, 10],
    subFacts: [
      { text: '15 − 8 = 7', correct: true },
      { text: '15 + 8 = 23', correct: false },
      { text: '8 − 7 = 1', correct: false },
    ],
  },
  {
    round: 3,
    whole: 18,
    part1: 9,
    part2: 9,
    options: [8, 9, 10, 11],
    subFacts: [
      { text: '18 − 9 = 9', correct: true },
      { text: '18 + 9 = 27', correct: false },
      { text: '9 − 9 = 0', correct: false },
    ],
  },
];

export default function AppleOrchardStation({ onComplete, audioEnabled }) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [isTreeShaking, setIsTreeShaking] = useState(false);
  const [selectedPart2, setSelectedPart2] = useState(null);
  const [selectedFact, setSelectedFact] = useState(null);
  const [isCartDriving, setIsCartDriving] = useState(false);
  const [step, setStep] = useState(1); // 1: Solve missing basket 2 | 2: Cart takeaway & Subtraction quiz
  const { sounds } = useAudio(audioEnabled);

  const r = ROUNDS[roundIdx];

  function handleShakeTree() {
    sounds.click();
    setIsTreeShaking(true);
    setTimeout(() => setIsTreeShaking(false), 700);
  }

  function handleSelectPart2(val) {
    sounds.click();
    setSelectedPart2(val);
    if (val === r.part2) {
      sounds.correct();
      setTimeout(() => {
        setIsCartDriving(true);
        setStep(2);
      }, 700);
    } else {
      sounds.wrong();
    }
  }

  function handleSelectFact(fact) {
    sounds.click();
    setSelectedFact(fact.text);
    if (fact.correct) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  }

  function handleNextRound() {
    if (roundIdx + 1 < ROUNDS.length) {
      sounds.levelUp();
      setRoundIdx(roundIdx + 1);
      setSelectedPart2(null);
      setSelectedFact(null);
      setIsCartDriving(false);
      setStep(1);
    } else {
      sounds.badge();
      onComplete();
    }
  }

  const isRoundDone = selectedFact && r.subFacts.find(f => f.text === selectedFact)?.correct;

  return (
    <div className="station-wrap anim-fade-in">
      {/* Header */}
      <div className="station-header">
        <h3 className="station-title">🍎 Station A: Apple Harvester &amp; Part-Part-Whole Lab</h3>
        <div className="station-target-box">
          <span className="station-target-label">Round:</span>
          <span className="station-target-num">{roundIdx + 1} / {ROUNDS.length}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="station-grid-2col">
        {/* Left Col: Graphical Animated Tree & Baskets */}
        <div className="station-col-left">
          <div className="orchard-sim-card">
            {/* Top Interactive Tree */}
            <div className="tree-canvas-area">
              <svg
                viewBox="0 0 200 130"
                width="170"
                className={`sim-tree-svg ${isTreeShaking ? 'anim-shake' : ''}`}
                onClick={handleShakeTree}
                style={{ cursor: 'pointer' }}
                title="Click to shake the tree!"
              >
                {/* Trunk */}
                <path d="M90 70 L90 125 Q100 130 110 125 L110 70 Z" fill="#8d5b4c" />
                {/* Foliage */}
                <circle cx="100" cy="55" r="45" fill="#22c55e" />
                <circle cx="75" cy="45" r="32" fill="#16a34a" />
                <circle cx="125" cy="45" r="32" fill="#16a34a" />
                <circle cx="100" cy="28" r="28" fill="#4ade80" />

                {/* Apples hanging on tree */}
                <circle cx="70" cy="45" r="7" fill="#ef4444" className="flying-apple" />
                <circle cx="92" cy="35" r="7" fill="#ef4444" className="flying-apple" />
                <circle cx="115" cy="40" r="7" fill="#ef4444" className="flying-apple" />
                <circle cx="85" cy="65" r="7" fill="#ef4444" className="flying-apple" />
                <circle cx="120" cy="60" r="7" fill="#ef4444" className="flying-apple" />
                <circle cx="102" cy="72" r="7" fill="#ef4444" className="flying-apple" />
              </svg>

              <button
                className="btn btn-outline btn-sm"
                onClick={handleShakeTree}
                style={{ position: 'absolute', top: 4, right: 4, fontSize: '0.75rem', padding: '3px 8px' }}
              >
                🌳 Shake Tree
              </button>
            </div>

            {/* Total Whole Badge */}
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '3px 12px', borderRadius: '10px' }}>
              <span style={{ color: '#ffd54f', fontWeight: 900, fontSize: '0.92rem' }}>
                Total Target Whole = {r.whole} Apples ({r.part1} + {selectedPart2 === r.part2 ? r.part2 : '?'})
              </span>
            </div>

            {/* Animated Baskets Stage */}
            <div className="baskets-stage-row">
              {/* Basket 1 */}
              <div className={`sim-basket-unit filled ${isCartDriving ? 'cart-away' : ''}`}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>🧺 Basket 1 (Part 1)</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>{r.part1} Apples</span>
                <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {Array.from({ length: Math.min(r.part1, 8) }).map((_, i) => (
                    <span key={i} style={{ fontSize: '0.95rem' }}>🍎</span>
                  ))}
                </div>
                {isCartDriving && (
                  <span style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 800 }}>🛒 Carted Away!</span>
                )}
              </div>

              {/* Basket 2 */}
              <div className={`sim-basket-unit ${selectedPart2 === r.part2 ? 'filled' : ''}`}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: selectedPart2 === r.part2 ? '#4ade80' : '#ffd54f' }}>
                  🧺 Basket 2 (Part 2)
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  {selectedPart2 === r.part2 ? `${r.part2} Apples` : '?'}
                </span>
                <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {selectedPart2 === r.part2 && Array.from({ length: Math.min(r.part2, 8) }).map((_, i) => (
                    <span key={i} style={{ fontSize: '0.95rem' }}>🍏</span>
                  ))}
                </div>
                {selectedPart2 === r.part2 && (
                  <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 800 }}>✨ Remaining Whole!</span>
                )}
              </div>
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
                  Alex picked <strong>{r.whole} apples</strong> in total. He puts <strong>{r.part1} apples</strong> in Basket 1. How many apples belong in Basket 2?
                </p>
                <div style={{ marginTop: '6px', color: '#93c5fd', fontSize: '0.86rem', fontWeight: 800 }}>
                  Think: {r.part1} + ? = {r.whole}
                </div>
              </div>

              {/* Number Choices */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {r.options.map((opt) => {
                  const isSelected = selectedPart2 === opt;
                  const isCorrect = opt === r.part2;
                  return (
                    <button
                      key={opt}
                      className={`option-btn ${isSelected ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                      onClick={() => handleSelectPart2(opt)}
                    >
                      {opt} Apples
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="anim-slide-up">
              <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ color: '#4ade80', fontWeight: 800, fontSize: '0.88rem' }}>
                  🛒 SUBTRACTION ACTION ANIMATION
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                  The harvest truck takes away the <strong>{r.part1} apples</strong> in Basket 1. Which subtraction sentence describes how many apples remain in Basket 2?
                </p>
              </div>

              {/* Subtraction Fact Choices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {r.subFacts.map((fact, idx) => {
                  const isSelected = selectedFact === fact.text;
                  return (
                    <button
                      key={idx}
                      className={`option-btn ${isSelected ? (fact.correct ? 'correct' : 'wrong') : ''}`}
                      style={{ padding: '8px 12px', minHeight: '40px', fontSize: '1.05rem', textAlign: 'left' }}
                      onClick={() => handleSelectFact(fact)}
                    >
                      {fact.text}
                    </button>
                  );
                })}
              </div>

              {/* Next Round Action */}
              {isRoundDone && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                  <button className="btn btn-green btn-sm anim-celebrate" onClick={handleNextRound}>
                    {roundIdx + 1 < ROUNDS.length ? 'Next Harvester Challenge ➔' : 'Complete Station A! ✅'}
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
