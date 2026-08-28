// src/utils/scoring.js

export function calcXP(attempts, hintsUsed, streak) {
  let base = 10;
  if (attempts > 1) base = Math.max(2, base - (attempts - 1) * 3);
  if (hintsUsed > 0) base = Math.max(2, base - hintsUsed * 2);
  const streakBonus = streak >= 3 ? Math.min(streak * 2, 10) : 0;
  return base + streakBonus;
}

export function calcStars(score) {
  if (score >= 9) return 3;
  if (score >= 7) return 2;
  if (score >= 5) return 1;
  return 0;
}
