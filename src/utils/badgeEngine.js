// src/utils/badgeEngine.js
import { BADGES } from '../config/worlds.config.js';

export { BADGES };

export function checkBadges(state) {
  const unlocked = [];

  // First step
  if (state?.currentQuestion > 0 || state?.districtCorrect?.some(c => c > 0)) {
    unlocked.push('first_step');
  }

  // 5 streak
  if ((state?.streak || 0) >= 5 || (state?.maxStreak || 0) >= 5) {
    unlocked.push('hot_streak');
  }

  // All simulate stations
  if (state?.simStationsComplete?.every(Boolean)) {
    unlocked.push('fact_detective');
  }

  // 80%+ accuracy in any district (8+ out of 10)
  if (state?.districtScores?.some(sc => sc !== null && sc >= 8) || state?.districtCorrect?.some(c => c >= 8)) {
    unlocked.push('inverse_master');
  }

  // Perfect 10 in any district
  if (state?.districtScores?.some(sc => sc === 10) || state?.districtCorrect?.some(c => c === 10)) {
    unlocked.push('perfect_triangle');
  }

  // Grand Master: completed reflect
  if (state?.phaseComplete?.reflect) {
    unlocked.push('grand_master');
  }

  return unlocked;
}
