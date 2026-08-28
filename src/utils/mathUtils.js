// src/utils/mathUtils.js

export function generateFactFamily(part1, part2) {
  const whole = part1 + part2;
  return {
    whole,
    part1,
    part2,
    facts: [
      `${part1} + ${part2} = ${whole}`,
      `${part2} + ${part1} = ${whole}`,
      `${whole} − ${part1} = ${part2}`,
      `${whole} − ${part2} = ${part1}`,
    ],
  };
}

export function verifyFactSentence(sentence, part1, part2, whole) {
  const clean = sentence.replace(/\s+/g, '').replace('-', '−');
  const valid = [
    `${part1}+${part2}=${whole}`,
    `${part2}+${part1}=${whole}`,
    `${whole}−${part1}=${part2}`,
    `${whole}−${part2}=${part1}`,
  ];
  return valid.includes(clean);
}
