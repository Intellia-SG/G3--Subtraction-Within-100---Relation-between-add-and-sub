import { useState, useEffect, useCallback, useRef } from 'react';

const WONDER_QUESTIONS = [
  {
    question: "Alex has 83 stickers and gives some to Emma. He has 48 left. How many did he give away?",
    subtext: "What if knowing an addition fact could instantly solve this subtraction?",
    emoji: "🏷️",
    bgEmojis: ["🏷️", "➖", "🔢", "✨"],
  },
  {
    question: "If 35 + 48 = 83, can you instantly find what 83 − 35 equals — without counting?",
    subtext: "Addition and subtraction are secret partners — they share the same three numbers!",
    emoji: "🔗",
    bgEmojis: ["➕", "➖", "🔗", "💡"],
  },
  {
    question: "Sam scores 63 points in a game. He loses some points. He now has 27. How many did he lose?",
    subtext: "There's a triangle trick that unlocks the answer instantly!",
    emoji: "🎮",
    bgEmojis: ["🎮", "🔢", "🔺", "✨"],
  },
  {
    question: "How can knowing 27 + 36 = 63 help you solve 63 − 27 without working it out again?",
    subtext: "Fact families are like magic — one triangle gives you four number sentences!",
    emoji: "🔺",
    bgEmojis: ["🔺", "➕", "➖", "🎯"],
  },
];

export default function WonderPhase({ onComplete }) {
  const [wonder] = useState(() => WONDER_QUESTIONS[Math.floor(Math.random() * WONDER_QUESTIONS.length)]);
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: wonder.bgEmojis[i % wonder.bgEmojis.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 1.2 + Math.random() * 1.5,
    }));
    setParticles(p);
  }, [wonder]);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleDiscover = useCallback(() => {
    setTimeout(() => onComplete(), 300);
  }, [onComplete]);

  return (
    <div className="wonder-phase">
      <div className="wonder-particles">
        {particles.map(p => (
          <span key={p.id} className="wonder-particle" style={{
            left: `${p.x}%`, top: `${p.y}%`,
            animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
            fontSize: `${p.size}rem`,
          }}>{p.emoji}</span>
        ))}
      </div>
      <div className="wonder-content">
        <div className={`wonder-qmark ${stage >= 1 ? 'revealed' : ''}`}>
          <span className="wonder-qmark-icon">?</span>
          <div className="wonder-qmark-glow" />
        </div>
        <div className={`wonder-mascot ${stage >= 1 ? 'visible' : ''}`}>
          <div className="mascot thinking">🤖</div>
          <div className="speech-bubble wonder-bubble">Hmm... I wonder... 🤔</div>
        </div>
        <div className={`wonder-question-card ${stage >= 1 ? 'visible' : ''}`}>
          <div className="wonder-emoji">{wonder.emoji}</div>
          <h2 className="wonder-question-text">{wonder.question}</h2>
          <p className="wonder-subtext">{wonder.subtext}</p>
        </div>
        <button className={`btn btn-wonder ${stage >= 2 ? 'visible' : ''}`} onClick={handleDiscover} id="discover-btn">
          <span className="wonder-btn-sparkle">✨</span>
          Let's Discover!
          <span className="wonder-btn-sparkle">✨</span>
        </button>
      </div>
    </div>
  );
}
