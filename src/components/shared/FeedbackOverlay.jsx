// src/components/shared/FeedbackOverlay.jsx
import React from 'react';
import './FeedbackOverlay.css';

export default function FeedbackOverlay({ isCorrect, explanation, onContinue }) {
  return (
    <div className="fb-backdrop anim-fade-in" onClick={onContinue}>
      <div className={`fb-card glass-card ${isCorrect ? 'correct anim-bounce-in' : 'incorrect anim-shake'}`}>
        <div className="fb-icon">{isCorrect ? '🎉' : '💡'}</div>
        <div className="fb-title">{isCorrect ? 'Spot On!' : 'Learning Opportunity!'}</div>
        {explanation && <div className="fb-explanation">{explanation}</div>}
        <button
          className={isCorrect ? 'btn btn-green' : 'btn btn-primary'}
          onClick={(e) => {
            e.stopPropagation();
            onContinue();
          }}
        >
          {isCorrect ? 'Keep Going! 🚀' : 'Got it! 👍'}
        </button>
      </div>
    </div>
  );
}
