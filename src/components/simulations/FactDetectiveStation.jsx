// src/components/simulations/FactDetectiveStation.jsx
import React, { useState } from 'react';
import './Stations.css';
import { useAudio } from '../../hooks/useAudio.js';

const CASES = [
  {
    caseId: 1,
    title: 'Case #1: The Token Count Verification',
    clue: 'Alex counted 45 tokens. He spent 19 and claims 26 remain (45 − 19 = 26).',
    question: 'Which addition fact mathematically proves his subtraction is 100% true?',
    options: [
      { text: '26 + 19 = 45', isCorrect: true, feedback: 'Proved! Part + Part = Whole verifies the subtraction calculation!' },
      { text: '45 + 19 = 64', isCorrect: false, feedback: 'Adding whole and part does not verify remaining balance.' },
      { text: '26 + 26 = 52', isCorrect: false, feedback: 'This doubles fact does not use the subtrahend 19.' },
    ],
  },
  {
    caseId: 2,
    title: 'Case #2: The Imposter Scroll in Family {27, 36, 63}',
    clue: 'Detective Pip found 4 scrolls claiming to belong to family {27, 36, 63}.',
    question: 'Use your magnifying glass to spot the broken imposter equation!',
    options: [
      { text: '27 + 36 = 63', isCorrect: false, feedback: 'Valid addition fact for {27, 36, 63}.' },
      { text: '63 − 27 = 36', isCorrect: false, feedback: 'Valid subtraction fact for {27, 36, 63}.' },
      { text: '63 + 27 = 90', isCorrect: true, feedback: 'IMPOSTER BUSTED! A fact family uses only the same three numbers {27, 36, 63}!' },
      { text: '63 − 36 = 27', isCorrect: false, feedback: 'Valid subtraction fact for {27, 36, 63}.' },
    ],
  },
  {
    caseId: 3,
    title: 'Case #3: The Market Stall Truth Test',
    clue: 'Farmer Ben had 85 apples. He sold some and has 36 left. He says: "I sold 49 because 36 + 49 = 85!"',
    question: 'Is Farmer Ben’s fact family deduction mathematically valid?',
    options: [
      { text: 'Yes! Because 85 − 36 = 49 and 36 + 49 = 85!', isCorrect: true, feedback: 'Solved! Addition is the exact inverse check for subtraction.' },
      { text: 'No, because you can only count backwards one by one.', isCorrect: false, feedback: 'Addition check is faster and mathematically exact.' },
      { text: 'No, 85 − 36 = 59.', isCorrect: false, feedback: 'Check the math: 36 + 49 = 85.' },
    ],
  },
];

export default function FactDetectiveStation({ onComplete, audioEnabled }) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const { sounds } = useAudio(audioEnabled);

  const c = CASES[caseIdx];

  function handleSelectOption(opt) {
    sounds.click();
    setSelectedOpt(opt.text);
    if (opt.isCorrect) {
      sounds.correct();
    } else {
      sounds.wrong();
    }
  }

  function handleNextCase() {
    if (caseIdx + 1 < CASES.length) {
      sounds.levelUp();
      setCaseIdx(caseIdx + 1);
      setSelectedOpt(null);
    } else {
      sounds.badge();
      onComplete();
    }
  }

  const selectedObj = c.options.find(o => o.text === selectedOpt);
  const isCaseSolved = selectedObj?.isCorrect;

  return (
    <div className="station-wrap anim-fade-in">
      {/* Header */}
      <div className="station-header">
        <h3 className="station-title">🔍 Station D: Detective Clue Board &amp; Mystery Lab</h3>
        <div className="station-target-box">
          <span className="station-target-label">Case:</span>
          <span className="station-target-num">{caseIdx + 1} / {CASES.length}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="station-grid-2col">
        {/* Left Col: Graphical Crime Board & Magnifying Glass */}
        <div className="station-col-left">
          <div className="detective-sim-card">
            {/* Clue Board Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.8rem' }}>📜</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fcd34d', fontSize: '1rem' }}>
                  {c.title}
                </span>
              </div>
              <span className="magnifier-lens-badge">🔍 Lens Active</span>
            </div>

            {/* Clue Card */}
            <div style={{ background: 'rgba(0,0,0,0.35)', padding: '8px 12px', borderRadius: '12px', width: '100%', boxSizing: 'border-box' }}>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
                {c.clue}
              </p>
            </div>

            {/* Detective Feedback & Stamp */}
            {selectedObj && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center' }}>
                {selectedObj.isCorrect ? (
                  <span className="busted-stamp-seal" style={{ color: '#4ade80', borderColor: '#4ade80' }}>
                    CASE SOLVED!
                  </span>
                ) : (
                  <span className="busted-stamp-seal" style={{ color: '#ef4444', borderColor: '#ef4444' }}>
                    INCORRECT
                  </span>
                )}
              </div>
            )}

            {selectedObj && (
              <div
                style={{
                  background: selectedObj.isCorrect ? 'rgba(34, 197, 94, 0.18)' : 'rgba(239, 83, 80, 0.18)',
                  border: `1.5px solid ${selectedObj.isCorrect ? '#4ade80' : '#ef5350'}`,
                  borderRadius: '12px',
                  padding: '6px 12px',
                  color: selectedObj.isCorrect ? '#4ade80' : '#fca5a5',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                className="anim-slide-up"
              >
                {selectedObj.isCorrect ? '⭐ Proof Confirmed: ' : '❌ Clue Error: '}
                {selectedObj.feedback}
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Detective Decision Question */}
        <div className="station-col-right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '10px 14px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span style={{ color: '#ffd54f', fontWeight: 800, fontSize: '0.88rem' }}>🎯 DETECTIVE MISSION:</span>
              <p style={{ margin: '4px 0 0', fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.4 }}>
                {c.question}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {c.options.map((opt, idx) => {
                const isSelected = selectedOpt === opt.text;
                return (
                  <button
                    key={idx}
                    className={`option-btn ${isSelected ? (opt.isCorrect ? 'correct' : 'wrong') : ''}`}
                    style={{ padding: '8px 12px', textAlign: 'left', minHeight: '40px', fontSize: '0.95rem', lineHeight: 1.35 }}
                    onClick={() => handleSelectOption(opt)}
                  >
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {isCaseSolved && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                <button className="btn btn-green btn-sm anim-celebrate" onClick={handleNextCase}>
                  {caseIdx + 1 < CASES.length ? 'Next Mystery Case ➔' : 'All Cases Solved! Complete Station D! ✅'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
