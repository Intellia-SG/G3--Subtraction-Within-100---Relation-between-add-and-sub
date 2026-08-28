// src/data/questionBank.js
// 100 Comprehensive Questions for Addition & Subtraction Quest across 10 Themed Worlds (Grade 2 Math)

export const DISTRICTS = [
  { id: 0, name: 'Fact Family Farm',      icon: '🌾', boss: { name: 'Barnyard Bull',    emoji: '🐂', reward: 'Farm Master Badge 🌾' } },
  { id: 1, name: 'Number Bond Meadow',    icon: '🌻', boss: { name: 'Meadow Monster',   emoji: '🌻', reward: 'Meadow Star Badge ⭐' } },
  { id: 2, name: 'Inverse Island',        icon: '🏝️', boss: { name: 'Captain Invert',   emoji: '🏴‍☠️', reward: 'Inverse Master Badge ⚓' } },
  { id: 3, name: 'Bar Model Bay',         icon: '⛵', boss: { name: 'Baron Bar',        emoji: '🏗️', reward: 'Bar Builder Badge ⛵' } },
  { id: 4, name: 'Take-Away Temple',      icon: '🏛️', boss: { name: 'Temple Guardian',  emoji: '🗿', reward: 'Temple Champion Badge 🏛️' } },
  { id: 5, name: 'Missing Addend Mart',   icon: '🛒', boss: { name: 'Mystery Merchant', emoji: '🛍️', reward: 'Equation Solver Badge 🛒' } },
  { id: 6, name: 'Comparison Canyon',     icon: '🏜️', boss: { name: 'Canyon Colossus',  emoji: '⛰️', reward: 'Comparison Pro Badge 🏜️' } },
  { id: 7, name: 'Fact Family Factory',   icon: '🏭', boss: { name: 'Factory Foreman',  emoji: '🤖', reward: 'Factory Master Badge 🏭' } },
  { id: 8, name: 'Story Problem Peaks',   icon: '🏔️', boss: { name: 'Peak Phoenix',     emoji: '🦅', reward: 'Story Hero Badge 🏔️' } },
  { id: 9, name: 'Inverse Grand Kingdom', icon: '👑', boss: { name: 'Math King Arthur', emoji: '👑', reward: 'Grand Master Crown 👑' } },
];

const RAW_QUESTIONS = [
  // ── WORLD 0: FACT FAMILY FARM (Questions 1 - 10: Numbers within 20) ───────────
  {
    id: 1, districtId: 0, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "On the farm, 8 red hens and 7 white hens make 15 hens in total. Which subtraction fact belongs to this fact family?",
    options: ['15 − 8 = 7', '15 + 8 = 23', '8 − 7 = 1', '15 − 5 = 10'],
    correctAnswer: '15 − 8 = 7',
    explanation: "Since 8 + 7 = 15, the related subtraction facts are 15 − 8 = 7 and 15 − 7 = 8.",
    hint1: "The three family numbers are 15 (whole), 8 (part), and 7 (part).",
    hint2: "Start with the whole 15 and subtract one part: 15 − 8 = 7.",
    visualData: { whole: 15, part1: 8, part2: 7 }
  },
  {
    id: 2, districtId: 0, category: 'MISSING PART', visual: 'triangle',
    questionText: "In a fact family triangle with top number 18 and bottom number 9, what is the missing part?",
    options: ['9', '8', '10', '7'],
    correctAnswer: '9',
    explanation: "18 − 9 = 9, so 9 + 9 = 18.",
    hint1: "Ask: 9 + what equals 18?",
    hint2: "18 − 9 = 9.",
    visualData: { whole: 18, part1: 9, part2: 9, missing: 'part2' }
  },
  {
    id: 3, districtId: 0, category: 'INVERSE FACT', visual: 'triangle',
    questionText: "If 6 + 8 = 14, what is 14 − 6?",
    options: ['8', '6', '7', '9'],
    correctAnswer: '8',
    explanation: "Addition and subtraction are inverse operations. Since 6 + 8 = 14, then 14 − 6 = 8.",
    hint1: "Look at the partner number in the addition fact: 6 + 8 = 14.",
    hint2: "Taking away 6 from 14 leaves the other part, which is 8.",
    visualData: { whole: 14, part1: 6, part2: 8 }
  },
  {
    id: 4, districtId: 0, category: 'FACT FAMILIES', visual: 'barmodel',
    questionText: "Farmer Ben has 16 sheep. 9 are in the barn and the rest are in the pasture. How many are in the pasture?",
    options: ['7', '8', '6', '9'],
    correctAnswer: '7',
    explanation: "16 − 9 = 7 sheep.",
    hint1: "Think: 9 + ? = 16.",
    hint2: "16 − 9 = 7.",
    visualData: { whole: 16, part1: 9, part2: 7, missing: 'part2' }
  },
  {
    id: 5, districtId: 0, category: 'INVERSE CHECK', visual: 'triangle',
    questionText: "Which equation does NOT belong to the fact family of 5, 9, and 14?",
    options: ['14 + 5 = 19', '5 + 9 = 14', '14 − 5 = 9', '14 − 9 = 5'],
    correctAnswer: '14 + 5 = 19',
    explanation: "A fact family uses only the same three numbers: 5, 9, and 14. 14 + 5 = 19 introduces a new number.",
    hint1: "The family numbers are strictly 5, 9, and 14.",
    hint2: "14 + 5 = 19 is not part of this 3-number family.",
    visualData: { whole: 14, part1: 5, part2: 9 }
  },
  {
    id: 6, districtId: 0, category: 'MISSING PART', visual: 'triangle',
    questionText: "What is the missing number in this triangle: Whole = 13, Part 1 = 6, Part 2 = ?",
    options: ['7', '8', '6', '5'],
    correctAnswer: '7',
    explanation: "13 − 6 = 7.",
    hint1: "Subtract: 13 − 6 = ?",
    hint2: "6 + 7 = 13.",
    visualData: { whole: 13, part1: 6, part2: 7, missing: 'part2' }
  },
  {
    id: 7, districtId: 0, category: 'INVERSE FACT', visual: 'barmodel',
    questionText: "If 12 − 4 = 8, what addition fact proves this is correct?",
    options: ['8 + 4 = 12', '12 + 4 = 16', '8 + 8 = 16', '12 − 8 = 4'],
    correctAnswer: '8 + 4 = 12',
    explanation: "8 + 4 = 12 is the inverse addition fact that checks 12 − 4 = 8.",
    hint1: "Add the two parts (8 and 4) together.",
    hint2: "8 + 4 = 12.",
    visualData: { whole: 12, part1: 4, part2: 8 }
  },
  {
    id: 8, districtId: 0, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Emma collects 17 eggs. 8 are brown and the rest are white. Which fact gives the number of white eggs?",
    options: ['17 − 8 = 9', '17 + 8 = 25', '8 + 8 = 16', '17 − 9 = 8'],
    correctAnswer: '17 − 8 = 9',
    explanation: "Total 17 − 8 brown = 9 white eggs.",
    hint1: "Total eggs is 17. Subtract the 8 brown eggs.",
    hint2: "17 − 8 = 9.",
    visualData: { whole: 17, part1: 8, part2: 9 }
  },
  {
    id: 9, districtId: 0, category: 'MISSING WHOLE', visual: 'triangle',
    questionText: "If Part 1 is 7 and Part 2 is 6, what is the Whole at the top of the triangle?",
    options: ['13', '12', '14', '11'],
    correctAnswer: '13',
    explanation: "7 + 6 = 13.",
    hint1: "Add the two bottom parts together.",
    hint2: "7 + 6 = 13.",
    visualData: { whole: 13, part1: 7, part2: 6, missing: 'whole' }
  },
  {
    id: 10, districtId: 0, category: 'FACT FAMILIES', visual: 'barmodel',
    questionText: "Which two addition sentences belong to the numbers 7, 8, and 15?",
    options: ['7 + 8 = 15 and 8 + 7 = 15', '7 + 15 = 22 and 8 + 15 = 23', '15 + 7 = 22 and 15 + 8 = 23', '7 + 7 = 14 and 8 + 8 = 16'],
    correctAnswer: '7 + 8 = 15 and 8 + 7 = 15',
    explanation: "You can add the parts in any order: 7 + 8 = 15 and 8 + 7 = 15.",
    hint1: "Addition is commutative: a + b = b + a.",
    hint2: "7 + 8 = 15 and 8 + 7 = 15.",
    visualData: { whole: 15, part1: 7, part2: 8 }
  },

  // ── WORLD 1: NUMBER BOND MEADOW (Questions 11 - 20: Numbers within 30) ────────
  {
    id: 11, districtId: 1, category: 'PART-PART-WHOLE', visual: 'triangle',
    questionText: "In the meadow, a number bond has Whole = 28 and Part 1 = 13. What is Part 2?",
    options: ['15', '14', '16', '12'],
    correctAnswer: '15',
    explanation: "28 − 13 = 15.",
    hint1: "Think: 13 + ? = 28.",
    hint2: "28 − 13 = 15.",
    visualData: { whole: 28, part1: 13, part2: 15, missing: 'part2' }
  },
  {
    id: 12, districtId: 1, category: 'INVERSE PAIR', visual: 'barmodel',
    questionText: "If 11 + 14 = 25, what is 25 − 14?",
    options: ['11', '12', '10', '14'],
    correctAnswer: '11',
    explanation: "Since 11 + 14 = 25, then 25 − 14 = 11.",
    hint1: "Use the inverse operation.",
    hint2: "25 − 14 leaves the first part, 11.",
    visualData: { whole: 25, part1: 11, part2: 14 }
  },
  {
    id: 13, districtId: 1, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve for the box: □ + 19 = 30",
    options: ['11', '12', '9', '21'],
    correctAnswer: '11',
    explanation: "30 − 19 = 11.",
    hint1: "Turn addition into subtraction: 30 − 19 = □.",
    hint2: "30 − 19 = 11.",
    visualData: { whole: 30, part1: 11, part2: 19, missing: 'part1' }
  },
  {
    id: 14, districtId: 1, category: 'PART-PART-WHOLE', visual: 'barmodel',
    questionText: "Alex picked 26 flowers. 12 are yellow and the rest are purple. How many are purple?",
    options: ['14', '13', '15', '12'],
    correctAnswer: '14',
    explanation: "26 − 12 = 14 purple flowers.",
    hint1: "Subtract the yellow flowers (12) from the total (26).",
    hint2: "26 − 12 = 14.",
    visualData: { whole: 26, part1: 12, part2: 14 }
  },
  {
    id: 15, districtId: 1, category: 'INVERSE CHECK', visual: 'triangle',
    questionText: "Which subtraction sentence checks the problem: 15 + 14 = 29?",
    options: ['29 − 14 = 15', '29 + 15 = 44', '15 − 14 = 1', '29 − 10 = 19'],
    correctAnswer: '29 − 14 = 15',
    explanation: "Subtracting one part from the sum gives the other part: 29 − 14 = 15.",
    hint1: "Whole − Part = Other Part.",
    hint2: "29 − 14 = 15.",
    visualData: { whole: 29, part1: 15, part2: 14 }
  },
  {
    id: 16, districtId: 1, category: 'MISSING PART', visual: 'triangle',
    questionText: "Find the missing part in this triangle: Whole = 24, Part 1 = 9, Part 2 = ?",
    options: ['15', '16', '14', '13'],
    correctAnswer: '15',
    explanation: "24 − 9 = 15.",
    hint1: "24 − 9 = ?",
    hint2: "9 + 15 = 24.",
    visualData: { whole: 24, part1: 9, part2: 15, missing: 'part2' }
  },
  {
    id: 17, districtId: 1, category: 'INVERSE FACT', visual: 'barmodel',
    questionText: "If 27 − 13 = 14, which addition fact uses the same numbers?",
    options: ['14 + 13 = 27', '27 + 13 = 40', '14 + 14 = 28', '13 + 13 = 26'],
    correctAnswer: '14 + 13 = 27',
    explanation: "14 + 13 = 27 is the inverse addition fact.",
    hint1: "Add the two parts: 14 + 13.",
    hint2: "14 + 13 = 27.",
    visualData: { whole: 27, part1: 13, part2: 14 }
  },
  {
    id: 18, districtId: 1, category: 'PART-PART-WHOLE', visual: 'triangle',
    questionText: "There are 30 butterflies in the meadow. 18 flew away. How many stayed?",
    options: ['12', '11', '13', '14'],
    correctAnswer: '12',
    explanation: "30 − 18 = 12.",
    hint1: "Think: 18 + ? = 30.",
    hint2: "30 − 18 = 12.",
    visualData: { whole: 30, part1: 18, part2: 12 }
  },
  {
    id: 19, districtId: 1, category: 'MISSING WHOLE', visual: 'triangle',
    questionText: "What is the Whole if the two parts are 14 and 14?",
    options: ['28', '26', '30', '24'],
    correctAnswer: '28',
    explanation: "14 + 14 = 28 (a doubles fact!).",
    hint1: "Add 14 and 14.",
    hint2: "14 + 14 = 28.",
    visualData: { whole: 28, part1: 14, part2: 14, missing: 'whole' }
  },
  {
    id: 20, districtId: 1, category: 'FACT FAMILIES', visual: 'barmodel',
    questionText: "Which equation is TRUE for the family {12, 17, 29}?",
    options: ['29 − 12 = 17', '29 + 12 = 17', '17 − 12 = 29', '12 − 29 = 17'],
    correctAnswer: '29 − 12 = 17',
    explanation: "Whole (29) − Part (12) = Part (17).",
    hint1: "Subtract from the largest number, 29.",
    hint2: "29 − 12 = 17.",
    visualData: { whole: 29, part1: 12, part2: 17 }
  },

  // ── WORLD 2: INVERSE ISLAND (Questions 21 - 30: Numbers within 50) ────────────
  {
    id: 21, districtId: 2, category: 'INVERSE CHECK', visual: 'triangle',
    questionText: "Captain Invert says: 'Since 18 + 17 = 35, then 35 − 18 must equal...'",
    options: ['17', '18', '19', '16'],
    correctAnswer: '17',
    explanation: "35 − 18 = 17.",
    hint1: "Look at the other number in the addition fact: 17.",
    hint2: "35 − 18 = 17.",
    visualData: { whole: 35, part1: 18, part2: 17 }
  },
  {
    id: 22, districtId: 2, category: 'MISSING PART', visual: 'barmodel',
    questionText: "A treasure chest has 42 gold coins. 24 are Spanish doubloons and the rest are pirate pence. How many are pirate pence?",
    options: ['18', '17', '19', '28'],
    correctAnswer: '18',
    explanation: "42 − 24 = 18.",
    hint1: "Think: 24 + ? = 42.",
    hint2: "42 − 24 = 18.",
    visualData: { whole: 42, part1: 24, part2: 18, missing: 'part2' }
  },
  {
    id: 23, districtId: 2, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 27 + □ = 46",
    options: ['19', '18', '20', '21'],
    correctAnswer: '19',
    explanation: "46 − 27 = 19.",
    hint1: "46 − 27 = □.",
    hint2: "46 − 27 = 19.",
    visualData: { whole: 46, part1: 27, part2: 19, missing: 'part2' }
  },
  {
    id: 24, districtId: 2, category: 'INVERSE PAIR', visual: 'triangle',
    questionText: "Which subtraction fact is inverse to 16 + 22 = 38?",
    options: ['38 − 22 = 16', '38 + 16 = 54', '22 − 16 = 6', '38 − 10 = 28'],
    correctAnswer: '38 − 22 = 16',
    explanation: "38 − 22 = 16.",
    hint1: "Start with 38 and subtract 22.",
    hint2: "38 − 22 = 16.",
    visualData: { whole: 38, part1: 16, part2: 22 }
  },
  {
    id: 25, districtId: 2, category: 'PART-PART-WHOLE', visual: 'barmodel',
    questionText: "If Whole = 50 and Part 1 = 23, what is Part 2?",
    options: ['27', '26', '28', '37'],
    correctAnswer: '27',
    explanation: "50 − 23 = 27.",
    hint1: "50 − 23 = ?",
    hint2: "23 + 27 = 50.",
    visualData: { whole: 50, part1: 23, part2: 27, missing: 'part2' }
  },
  {
    id: 26, districtId: 2, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which fact belongs to the family {19, 25, 44}?",
    options: ['44 − 19 = 25', '44 + 19 = 63', '25 − 19 = 6', '44 − 20 = 24'],
    correctAnswer: '44 − 19 = 25',
    explanation: "44 − 19 = 25.",
    hint1: "Whole (44) − Part (19) = Part (25).",
    hint2: "44 − 19 = 25.",
    visualData: { whole: 44, part1: 19, part2: 25 }
  },
  {
    id: 27, districtId: 2, category: 'INVERSE CHECK', visual: 'barmodel',
    questionText: "Captain Invert claims: '40 − 21 = 19'. Which addition sentence proves him right?",
    options: ['19 + 21 = 40', '40 + 21 = 61', '19 + 19 = 38', '21 + 21 = 42'],
    correctAnswer: '19 + 21 = 40',
    explanation: "19 + 21 = 40 checks the subtraction 40 − 21 = 19.",
    hint1: "Add the two parts together: 19 + 21.",
    hint2: "19 + 21 = 40.",
    visualData: { whole: 40, part1: 21, part2: 19 }
  },
  {
    id: 28, districtId: 2, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: □ − 18 = 19",
    options: ['37', '36', '38', '1'],
    correctAnswer: '37',
    explanation: "To find the missing whole, add the two parts: 18 + 19 = 37.",
    hint1: "When the first number in subtraction is missing, add the other two: 18 + 19.",
    hint2: "18 + 19 = 37.",
    visualData: { whole: 37, part1: 18, part2: 19, missing: 'whole' }
  },
  {
    id: 29, districtId: 2, category: 'PART-PART-WHOLE', visual: 'barmodel',
    questionText: "48 pirates were on the island. 29 sailed away on a ship. How many remained?",
    options: ['19', '18', '20', '29'],
    correctAnswer: '19',
    explanation: "48 − 29 = 19 pirates.",
    hint1: "48 − 29 = ?",
    hint2: "29 + 19 = 48.",
    visualData: { whole: 48, part1: 29, part2: 19 }
  },
  {
    id: 30, districtId: 2, category: 'INVERSE PAIR', visual: 'triangle',
    questionText: "If 32 − 14 = 18, what is 32 − 18?",
    options: ['14', '15', '13', '18'],
    correctAnswer: '14',
    explanation: "Since 32 − 14 = 18, subtracting the other part gives 32 − 18 = 14.",
    hint1: "The two parts switch places: 32 − 18 = 14.",
    hint2: "14 + 18 = 32.",
    visualData: { whole: 32, part1: 14, part2: 18 }
  },

  // ── WORLD 3: BAR MODEL BAY (Questions 31 - 40: Bar models within 60) ──────────
  {
    id: 31, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "Look at the bar model. The top bar is 54. The left part is 26. What is the right part?",
    options: ['28', '27', '29', '38'],
    correctAnswer: '28',
    explanation: "54 − 26 = 28.",
    hint1: "Top Bar (54) − Left Bar (26) = Right Bar.",
    hint2: "54 − 26 = 28.",
    visualData: { whole: 54, part1: 26, part2: 28, missing: 'part2' }
  },
  {
    id: 32, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "A bar model shows two parts: 28 and 27. What is the total whole bar at the top?",
    options: ['55', '54', '56', '45'],
    correctAnswer: '55',
    explanation: "28 + 27 = 55.",
    hint1: "Add the two bottom bars together: 28 + 27.",
    hint2: "28 + 27 = 55.",
    visualData: { whole: 55, part1: 28, part2: 27, missing: 'whole' }
  },
  {
    id: 33, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "The whole bar is 58. The right bar is 29. What is the left bar?",
    options: ['29', '28', '30', '39'],
    correctAnswer: '29',
    explanation: "58 − 29 = 29.",
    hint1: "58 − 29 = ?",
    hint2: "29 + 29 = 58.",
    visualData: { whole: 58, part1: 29, part2: 29, missing: 'part1' }
  },
  {
    id: 34, districtId: 3, category: 'INVERSE CHECK', visual: 'triangle',
    questionText: "If 28 + 29 = 57, which subtraction sentence is correct?",
    options: ['57 − 28 = 29', '57 + 28 = 85', '29 − 28 = 1', '57 − 20 = 37'],
    correctAnswer: '57 − 28 = 29',
    explanation: "57 − 28 = 29.",
    hint1: "Whole (57) − Part (28) = Part (29).",
    hint2: "57 − 28 = 29.",
    visualData: { whole: 57, part1: 28, part2: 29 }
  },
  {
    id: 35, districtId: 3, category: 'MISSING ADDEND', visual: 'barmodel',
    questionText: "Solve: □ + 35 = 62",
    options: ['27', '26', '28', '37'],
    correctAnswer: '27',
    explanation: "62 − 35 = 27.",
    hint1: "62 − 35 = □.",
    hint2: "62 − 35 = 27.",
    visualData: { whole: 62, part1: 27, part2: 35, missing: 'part1' }
  },
  {
    id: 36, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "At the bay, there are 52 boats. 25 are sailboats and the rest are motorboats. How many are motorboats?",
    options: ['27', '26', '28', '37'],
    correctAnswer: '27',
    explanation: "52 − 25 = 27 motorboats.",
    hint1: "Total (52) − Sailboats (25) = Motorboats.",
    hint2: "52 − 25 = 27.",
    visualData: { whole: 52, part1: 25, part2: 27 }
  },
  {
    id: 37, districtId: 3, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which number sentence does NOT belong to {23, 27, 50}?",
    options: ['50 + 23 = 73', '23 + 27 = 50', '50 − 23 = 27', '50 − 27 = 23'],
    correctAnswer: '50 + 23 = 73',
    explanation: "50 + 23 = 73 uses a new number 73 not in the family.",
    hint1: "Family members are only 23, 27, and 50.",
    hint2: "50 + 23 = 73 is not in this fact family.",
    visualData: { whole: 50, part1: 23, part2: 27 }
  },
  {
    id: 38, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "A bar model has Whole = 60 and Left Part = 33. What is the Right Part?",
    options: ['27', '28', '26', '37'],
    correctAnswer: '27',
    explanation: "60 − 33 = 27.",
    hint1: "60 − 33 = ?",
    hint2: "33 + 27 = 60.",
    visualData: { whole: 60, part1: 33, part2: 27, missing: 'part2' }
  },
  {
    id: 39, districtId: 3, category: 'INVERSE PAIR', visual: 'triangle',
    questionText: "If 45 − 18 = 27, what is 27 + 18?",
    options: ['45', '44', '46', '35'],
    correctAnswer: '45',
    explanation: "27 + 18 = 45.",
    hint1: "The two parts add back to the whole.",
    hint2: "27 + 18 = 45.",
    visualData: { whole: 45, part1: 18, part2: 27 }
  },
  {
    id: 40, districtId: 3, category: 'BAR MODEL', visual: 'barmodel',
    questionText: "What addition fact checks the bar model with Whole 56, Part 28, Part 28?",
    options: ['28 + 28 = 56', '56 + 28 = 84', '28 − 28 = 0', '56 − 28 = 28'],
    correctAnswer: '28 + 28 = 56',
    explanation: "28 + 28 = 56.",
    hint1: "Add the two bottom bars.",
    hint2: "28 + 28 = 56.",
    visualData: { whole: 56, part1: 28, part2: 28 }
  },

  // ── WORLD 4: TAKE-AWAY TEMPLE (Questions 41 - 50: Subtraction as finding addend)
  {
    id: 41, districtId: 4, category: 'SUBTRACTION AS ADDITION', visual: 'triangle',
    questionText: "To solve 63 − 27, Emma thinks: '27 + ? = 63'. What is the missing number?",
    options: ['36', '35', '37', '46'],
    correctAnswer: '36',
    explanation: "27 + 36 = 63, so 63 − 27 = 36.",
    hint1: "How much do you add to 27 to reach 63?",
    hint2: "27 + 36 = 63.",
    visualData: { whole: 63, part1: 27, part2: 36 }
  },
  {
    id: 42, districtId: 4, category: 'SUBTRACTION AS ADDITION', visual: 'barmodel',
    questionText: "Solve 65 − 38 by thinking: '38 + □ = 65'. What is □?",
    options: ['27', '28', '26', '37'],
    correctAnswer: '27',
    explanation: "38 + 27 = 65, so 65 − 38 = 27.",
    hint1: "38 + ? = 65.",
    hint2: "65 − 38 = 27.",
    visualData: { whole: 65, part1: 38, part2: 27 }
  },
  {
    id: 43, districtId: 4, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 71 − 33 = ?",
    options: ['38', '37', '39', '48'],
    correctAnswer: '38',
    explanation: "33 + 38 = 71, so 71 − 33 = 38.",
    hint1: "Think: 33 + ? = 71.",
    hint2: "71 − 33 = 38.",
    visualData: { whole: 71, part1: 33, part2: 38 }
  },
  {
    id: 44, districtId: 4, category: 'INVERSE CHECK', visual: 'barmodel',
    questionText: "Which addition problem helps you solve 68 − 29?",
    options: ['29 + ? = 68', '68 + 29 = ?', '29 + 29 = ?', '68 + 68 = ?'],
    correctAnswer: '29 + ? = 68',
    explanation: "Thinking of 29 + ? = 68 turns subtraction into a friendly addition problem.",
    hint1: "Start with the part (29) and add up to the whole (68).",
    hint2: "29 + ? = 68.",
    visualData: { whole: 68, part1: 29, part2: 39 }
  },
  {
    id: 45, districtId: 4, category: 'SUBTRACTION AS ADDITION', visual: 'triangle',
    questionText: "Solve: 74 − 46 = ?",
    options: ['28', '27', '29', '38'],
    correctAnswer: '28',
    explanation: "46 + 28 = 74, so 74 − 46 = 28.",
    hint1: "Think: 46 + ? = 74.",
    hint2: "74 − 46 = 28.",
    visualData: { whole: 74, part1: 46, part2: 28 }
  },
  {
    id: 46, districtId: 4, category: 'MISSING PART', visual: 'barmodel',
    questionText: "The temple vault has 66 ancient scrolls. 39 are deciphered. How many are still mysteries?",
    options: ['27', '28', '26', '37'],
    correctAnswer: '27',
    explanation: "66 − 39 = 27.",
    hint1: "39 + ? = 66.",
    hint2: "66 − 39 = 27.",
    visualData: { whole: 66, part1: 39, part2: 27 }
  },
  {
    id: 47, districtId: 4, category: 'INVERSE FACT', visual: 'triangle',
    questionText: "If 44 + 29 = 73, what is 73 − 44?",
    options: ['29', '28', '30', '39'],
    correctAnswer: '29',
    explanation: "73 − 44 = 29.",
    hint1: "The other part in 44 + 29 = 73 is 29.",
    hint2: "73 − 44 = 29.",
    visualData: { whole: 73, part1: 44, part2: 29 }
  },
  {
    id: 48, districtId: 4, category: 'SUBTRACTION AS ADDITION', visual: 'barmodel',
    questionText: "Solve: 78 − 41 = ?",
    options: ['37', '36', '38', '27'],
    correctAnswer: '37',
    explanation: "41 + 37 = 78.",
    hint1: "41 + ? = 78.",
    hint2: "78 − 41 = 37.",
    visualData: { whole: 78, part1: 41, part2: 37 }
  },
  {
    id: 49, districtId: 4, category: 'MISSING WHOLE', visual: 'triangle',
    questionText: "Solve: □ − 38 = 37",
    options: ['75', '74', '76', '65'],
    correctAnswer: '75',
    explanation: "38 + 37 = 75.",
    hint1: "Add the two parts: 38 + 37.",
    hint2: "38 + 37 = 75.",
    visualData: { whole: 75, part1: 38, part2: 37, missing: 'whole' }
  },
  {
    id: 50, districtId: 4, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which fact family uses the numbers 27, 45, and 72?",
    options: ['45 + 27 = 72 and 72 − 27 = 45', '45 + 72 = 117 and 72 − 45 = 27', '27 + 27 = 54 and 72 − 27 = 45', '72 + 27 = 99 and 45 − 27 = 18'],
    correctAnswer: '45 + 27 = 72 and 72 − 27 = 45',
    explanation: "45 + 27 = 72 and 72 − 27 = 45 belong to the {27, 45, 72} fact family.",
    hint1: "Check that only the numbers 27, 45, and 72 are used.",
    hint2: "45 + 27 = 72 and 72 − 27 = 45.",
    visualData: { whole: 72, part1: 27, part2: 45 }
  },

  // ── WORLD 5: MISSING ADDEND MART (Questions 51 - 60: Missing addends up to 80)
  {
    id: 51, districtId: 5, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "At the mart: 46 + □ = 80. What goes in the box?",
    options: ['34', '33', '35', '44'],
    correctAnswer: '34',
    explanation: "80 − 46 = 34.",
    hint1: "80 − 46 = □.",
    hint2: "80 − 46 = 34.",
    visualData: { whole: 80, part1: 46, part2: 34, missing: 'part2' }
  },
  {
    id: 52, districtId: 5, category: 'MISSING ADDEND', visual: 'barmodel',
    questionText: "Solve: □ + 48 = 83",
    options: ['35', '34', '36', '45'],
    correctAnswer: '35',
    explanation: "83 − 48 = 35.",
    hint1: "83 − 48 = □.",
    hint2: "83 − 48 = 35.",
    visualData: { whole: 83, part1: 35, part2: 48, missing: 'part1' }
  },
  {
    id: 53, districtId: 5, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 54 + □ = 91",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "91 − 54 = 37.",
    hint1: "91 − 54 = □.",
    hint2: "91 − 54 = 37.",
    visualData: { whole: 91, part1: 54, part2: 37, missing: 'part2' }
  },
  {
    id: 54, districtId: 5, category: 'INVERSE CHECK', visual: 'barmodel',
    questionText: "Which subtraction sentence finds the missing number in: □ + 39 = 88?",
    options: ['88 − 39 = □', '88 + 39 = □', '39 − 88 = □', '88 − 30 = □'],
    correctAnswer: '88 − 39 = □',
    explanation: "Subtract 39 from 88: 88 − 39 = 49.",
    hint1: "Subtract the known part (39) from the total (88).",
    hint2: "88 − 39 = □.",
    visualData: { whole: 88, part1: 49, part2: 39 }
  },
  {
    id: 55, districtId: 5, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 36 + □ = 85",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "85 − 36 = 49.",
    hint1: "85 − 36 = □.",
    hint2: "85 − 36 = 49.",
    visualData: { whole: 85, part1: 36, part2: 49, missing: 'part2' }
  },
  {
    id: 56, districtId: 5, category: 'MISSING ADDEND', visual: 'barmodel',
    questionText: "Jack bought 82 stickers. 47 are animal stickers and the rest are stars. How many star stickers are there?",
    options: ['35', '34', '36', '45'],
    correctAnswer: '35',
    explanation: "82 − 47 = 35 star stickers.",
    hint1: "82 − 47 = ?",
    hint2: "47 + 35 = 82.",
    visualData: { whole: 82, part1: 47, part2: 35 }
  },
  {
    id: 57, districtId: 5, category: 'INVERSE PAIR', visual: 'triangle',
    questionText: "If 47 + 49 = 96, what is 96 − 47?",
    options: ['49', '48', '50', '47'],
    correctAnswer: '49',
    explanation: "96 − 47 = 49.",
    hint1: "Look at the partner addend.",
    hint2: "96 − 47 = 49.",
    visualData: { whole: 96, part1: 47, part2: 49 }
  },
  {
    id: 58, districtId: 5, category: 'MISSING ADDEND', visual: 'barmodel',
    questionText: "Solve: □ + 57 = 94",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "94 − 57 = 37.",
    hint1: "94 − 57 = □.",
    hint2: "94 − 57 = 37.",
    visualData: { whole: 94, part1: 37, part2: 57, missing: 'part1' }
  },
  {
    id: 59, districtId: 5, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 38 + □ = 87",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "87 − 38 = 49.",
    hint1: "87 − 38 = □.",
    hint2: "87 − 38 = 49.",
    visualData: { whole: 87, part1: 38, part2: 49, missing: 'part2' }
  },
  {
    id: 60, districtId: 5, category: 'FACT FAMILIES', visual: 'barmodel',
    questionText: "Which equation is in the fact family of {37, 56, 93}?",
    options: ['93 − 37 = 56', '93 + 37 = 130', '56 − 37 = 19', '93 − 50 = 43'],
    correctAnswer: '93 − 37 = 56',
    explanation: "93 − 37 = 56 is part of the {37, 56, 93} fact family.",
    hint1: "Whole (93) − Part (37) = Part (56).",
    hint2: "93 − 37 = 56.",
    visualData: { whole: 93, part1: 37, part2: 56 }
  },

  // ── WORLD 6: COMPARISON CANYON (Questions 61 - 70: How many more/less stories)
  {
    id: 61, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "Mia has 45 gems. Noah has 28 gems. How many more gems does Mia have than Noah?",
    options: ['17', '16', '18', '27'],
    correctAnswer: '17',
    explanation: "45 − 28 = 17 more gems.",
    hint1: "Compare by subtracting: 45 − 28.",
    hint2: "45 − 28 = 17.",
    visualData: { whole: 45, part1: 28, part2: 17 }
  },
  {
    id: 62, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "Ethan scored 62 points in a game. Grace scored 35 points. What is the difference between their scores?",
    options: ['27', '26', '28', '37'],
    correctAnswer: '27',
    explanation: "62 − 35 = 27 points difference.",
    hint1: "Difference means subtract: 62 − 35.",
    hint2: "62 − 35 = 27.",
    visualData: { whole: 62, part1: 35, part2: 27 }
  },
  {
    id: 63, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "Charlotte baked 54 muffins. Ben baked 26 muffins. How many fewer muffins did Ben bake?",
    options: ['28', '27', '29', '38'],
    correctAnswer: '28',
    explanation: "54 − 26 = 28 fewer muffins.",
    hint1: "54 − 26 = ?",
    hint2: "54 − 26 = 28.",
    visualData: { whole: 54, part1: 26, part2: 28 }
  },
  {
    id: 64, districtId: 6, category: 'INVERSE CHECK', visual: 'triangle',
    questionText: "To check if 75 − 38 = 37 is correct, what addition problem can you use?",
    options: ['37 + 38 = 75', '75 + 38 = 113', '37 + 37 = 74', '38 + 38 = 76'],
    correctAnswer: '37 + 38 = 75',
    explanation: "37 + 38 = 75.",
    hint1: "Add the difference (37) to the subtracted number (38).",
    hint2: "37 + 38 = 75.",
    visualData: { whole: 75, part1: 38, part2: 37 }
  },
  {
    id: 65, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "Tree A is 73 cm tall. Tree B is 44 cm tall. How much taller is Tree A?",
    options: ['29 cm', '28 cm', '30 cm', '39 cm'],
    correctAnswer: '29 cm',
    explanation: "73 − 44 = 29 cm.",
    hint1: "73 − 44 = ?",
    hint2: "73 − 44 = 29.",
    visualData: { whole: 73, part1: 44, part2: 29 }
  },
  {
    id: 66, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "Ava has 80 marbles. Liam has 46 marbles. How many more marbles does Ava have?",
    options: ['34', '33', '35', '44'],
    correctAnswer: '34',
    explanation: "80 − 46 = 34.",
    hint1: "80 − 46 = ?",
    hint2: "80 − 46 = 34.",
    visualData: { whole: 80, part1: 46, part2: 34 }
  },
  {
    id: 67, districtId: 6, category: 'MISSING ADDEND', visual: 'triangle',
    questionText: "Solve: 42 + □ = 89",
    options: ['47', '46', '48', '37'],
    correctAnswer: '47',
    explanation: "89 − 42 = 47.",
    hint1: "89 − 42 = □.",
    hint2: "89 − 42 = 47.",
    visualData: { whole: 89, part1: 42, part2: 47, missing: 'part2' }
  },
  {
    id: 68, districtId: 6, category: 'COMPARISON', visual: 'barmodel',
    questionText: "A red ribbon is 84 cm long. A blue ribbon is 37 cm long. How much longer is the red ribbon?",
    options: ['47 cm', '46 cm', '48 cm', '57 cm'],
    correctAnswer: '47 cm',
    explanation: "84 − 37 = 47 cm.",
    hint1: "84 − 37 = ?",
    hint2: "84 − 37 = 47.",
    visualData: { whole: 84, part1: 37, part2: 47 }
  },
  {
    id: 69, districtId: 6, category: 'INVERSE PAIR', visual: 'triangle',
    questionText: "If 86 − 49 = 37, what is 86 − 37?",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "86 − 37 = 49.",
    hint1: "The other part is 49.",
    hint2: "86 − 37 = 49.",
    visualData: { whole: 86, part1: 49, part2: 37 }
  },
  {
    id: 70, districtId: 6, category: 'FACT FAMILIES', visual: 'barmodel',
    questionText: "Which statement is FALSE for the family {39, 58, 97}?",
    options: ['97 + 39 = 58', '58 + 39 = 97', '97 − 39 = 58', '97 − 58 = 39'],
    correctAnswer: '97 + 39 = 58',
    explanation: "You cannot add to a whole and get a smaller number: 97 + 39 = 136, not 58.",
    hint1: "Look for the impossible addition: 97 + 39 = 58.",
    hint2: "97 + 39 = 58 is false.",
    visualData: { whole: 97, part1: 39, part2: 58 }
  },

  // ── WORLD 7: FACT FAMILY FACTORY (Questions 71 - 80: Full 4-sentence families)
  {
    id: 71, districtId: 7, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "How many addition and subtraction sentences can you write from the three numbers 36, 64, and 100?",
    options: ['4 number sentences (2 addition, 2 subtraction)', '2 number sentences', '3 number sentences', '6 number sentences'],
    correctAnswer: '4 number sentences (2 addition, 2 subtraction)',
    explanation: "Every 3-number fact family gives 4 sentences: 2 addition and 2 subtraction.",
    hint1: "36 + 64 = 100, 64 + 36 = 100, 100 − 36 = 64, 100 − 64 = 36.",
    hint2: "There are 4 number sentences in total.",
    visualData: { whole: 100, part1: 36, part2: 64 }
  },
  {
    id: 72, districtId: 7, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which fact completes this family: 37 + 62 = 99, 62 + 37 = 99, 99 − 37 = 62, and ...?",
    options: ['99 − 62 = 37', '99 + 37 = 136', '62 − 37 = 25', '99 − 60 = 39'],
    correctAnswer: '99 − 62 = 37',
    explanation: "99 − 62 = 37 is the 4th matching subtraction fact.",
    hint1: "Subtract the second part (62) from 99.",
    hint2: "99 − 62 = 37.",
    visualData: { whole: 99, part1: 37, part2: 62 }
  },
  {
    id: 73, districtId: 7, category: 'MISSING PART', visual: 'triangle',
    questionText: "At the factory: Whole = 100, Part 1 = 64. What is Part 2?",
    options: ['36', '35', '37', '46'],
    correctAnswer: '36',
    explanation: "100 − 64 = 36.",
    hint1: "100 − 64 = ?",
    hint2: "64 + 36 = 100.",
    visualData: { whole: 100, part1: 64, part2: 36, missing: 'part2' }
  },
  {
    id: 74, districtId: 7, category: 'INVERSE CHECK', visual: 'barmodel',
    questionText: "If 100 − 36 = 64, what is 64 + 36?",
    options: ['100', '90', '110', '96'],
    correctAnswer: '100',
    explanation: "64 + 36 = 100.",
    hint1: "Adding the parts brings you back to the whole.",
    hint2: "64 + 36 = 100.",
    visualData: { whole: 100, part1: 36, part2: 64 }
  },
  {
    id: 75, districtId: 7, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which fact family belongs to the numbers 37, 49, and 86?",
    options: ['37 + 49 = 86 and 86 − 49 = 37', '37 + 86 = 123', '49 − 37 = 12', '86 + 49 = 135'],
    correctAnswer: '37 + 49 = 86 and 86 − 49 = 37',
    explanation: "37 + 49 = 86 and 86 − 49 = 37 use the exact three family numbers.",
    hint1: "Whole is 86, parts are 37 and 49.",
    hint2: "37 + 49 = 86 and 86 − 49 = 37.",
    visualData: { whole: 86, part1: 37, part2: 49 }
  },
  {
    id: 76, districtId: 7, category: 'MISSING ADDEND', visual: 'barmodel',
    questionText: "Solve: □ + 37 = 93",
    options: ['56', '55', '57', '66'],
    correctAnswer: '56',
    explanation: "93 − 37 = 56.",
    hint1: "93 − 37 = □.",
    hint2: "93 − 37 = 56.",
    visualData: { whole: 93, part1: 56, part2: 37, missing: 'part1' }
  },
  {
    id: 77, districtId: 7, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Which number sentence is INCORRECT for the family {39, 58, 97}?",
    options: ['97 − 58 = 38', '39 + 58 = 97', '58 + 39 = 97', '97 − 39 = 58'],
    correctAnswer: '97 − 58 = 38',
    explanation: "97 − 58 = 39, not 38.",
    hint1: "Check the subtraction: 97 − 58 = 39.",
    hint2: "97 − 58 = 38 is incorrect.",
    visualData: { whole: 97, part1: 39, part2: 58 }
  },
  {
    id: 78, districtId: 7, category: 'INVERSE PAIR', visual: 'barmodel',
    questionText: "If 89 − 47 = 42, which addition sentence verifies this result?",
    options: ['42 + 47 = 89', '89 + 47 = 136', '42 + 42 = 84', '47 + 47 = 94'],
    correctAnswer: '42 + 47 = 89',
    explanation: "42 + 47 = 89.",
    hint1: "Add the two parts: 42 + 47.",
    hint2: "42 + 47 = 89.",
    visualData: { whole: 89, part1: 47, part2: 42 }
  },
  {
    id: 79, districtId: 7, category: 'MISSING WHOLE', visual: 'triangle',
    questionText: "What is the Whole for the two parts 47 and 37?",
    options: ['84', '83', '85', '74'],
    correctAnswer: '84',
    explanation: "47 + 37 = 84.",
    hint1: "47 + 37 = ?",
    hint2: "47 + 37 = 84.",
    visualData: { whole: 84, part1: 47, part2: 37, missing: 'whole' }
  },
  {
    id: 80, districtId: 7, category: 'FACT FAMILIES', visual: 'triangle',
    questionText: "Three numbers make a fact family: {35, 47, 82}. Which subtraction sentence uses these numbers?",
    options: ['82 − 35 = 47', '82 − 40 = 42', '47 − 35 = 12', '82 − 30 = 52'],
    correctAnswer: '82 − 35 = 47',
    explanation: "82 − 35 = 47.",
    hint1: "Whole (82) − Part (35) = Part (47).",
    hint2: "82 − 35 = 47.",
    visualData: { whole: 82, part1: 35, part2: 47 }
  },

  // ── WORLD 8: STORY PROBLEM PEAKS (Questions 81 - 90: Multi-step & contextual word problems)
  {
    id: 81, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "Alex won 63 carnival tokens. He used 36 on games. How many tokens does he have left?",
    options: ['27', '26', '28', '37'],
    correctAnswer: '27',
    explanation: "63 − 36 = 27 tokens left.",
    hint1: "Think: 36 + ? = 63.",
    hint2: "63 − 36 = 27.",
    visualData: { whole: 63, part1: 36, part2: 27 }
  },
  {
    id: 82, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "Emma needs 75 points for a giant teddy bear. She has 38 points. How many more points does she need?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "75 − 38 = 37 more points.",
    hint1: "75 − 38 = ?",
    hint2: "38 + 37 = 75.",
    visualData: { whole: 75, part1: 38, part2: 37 }
  },
  {
    id: 83, districtId: 8, category: 'WORD PROBLEM', visual: 'triangle',
    questionText: "A carnival booth started with 85 balloons. At noon, 36 balloons were given out. How many balloons are left?",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "85 − 36 = 49 balloons left.",
    hint1: "85 − 36 = ?",
    hint2: "36 + 49 = 85.",
    visualData: { whole: 85, part1: 36, part2: 49 }
  },
  {
    id: 84, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "Jack had some tokens. After spending 48 tokens on the carousel, he had 35 tokens left. How many tokens did he start with?",
    options: ['83', '82', '84', '73'],
    correctAnswer: '83',
    explanation: "To find the starting total (whole), add the spent and left tokens: 48 + 35 = 83.",
    hint1: "Whole = Spent + Left: 48 + 35.",
    hint2: "48 + 35 = 83.",
    visualData: { whole: 83, part1: 48, part2: 35, missing: 'whole' }
  },
  {
    id: 85, districtId: 8, category: 'WORD PROBLEM', visual: 'triangle',
    questionText: "Sophie baked 91 cookies for the school bake sale. She sold 54 cookies. How many cookies are left?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "91 − 54 = 37 cookies left.",
    hint1: "91 − 54 = ?",
    hint2: "54 + 37 = 91.",
    visualData: { whole: 91, part1: 54, part2: 37 }
  },
  {
    id: 86, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "A book has 94 pages. Liam read 57 pages on Monday. How many pages does he have left to read?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "94 − 57 = 37 pages left.",
    hint1: "94 − 57 = ?",
    hint2: "57 + 37 = 94.",
    visualData: { whole: 94, part1: 57, part2: 37 }
  },
  {
    id: 87, districtId: 8, category: 'WORD PROBLEM', visual: 'triangle',
    questionText: "There are 88 children on the fair playground. 39 are on the swings and the rest are on the slides. How many are on the slides?",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "88 − 39 = 49 children on slides.",
    hint1: "88 − 39 = ?",
    hint2: "39 + 49 = 88.",
    visualData: { whole: 88, part1: 39, part2: 49 }
  },
  {
    id: 88, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "Alex had 82 tickets. He gave 47 tickets to Emma. How many tickets does Alex have now?",
    options: ['35', '34', '36', '45'],
    correctAnswer: '35',
    explanation: "82 − 47 = 35 tickets.",
    hint1: "82 − 47 = ?",
    hint2: "47 + 35 = 82.",
    visualData: { whole: 82, part1: 47, part2: 35 }
  },
  {
    id: 89, districtId: 8, category: 'WORD PROBLEM', visual: 'triangle',
    questionText: "A box of 96 pencils has 47 blue pencils and the rest are red. How many red pencils are in the box?",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "96 − 47 = 49 red pencils.",
    hint1: "96 − 47 = ?",
    hint2: "47 + 49 = 96.",
    visualData: { whole: 96, part1: 47, part2: 49 }
  },
  {
    id: 90, districtId: 8, category: 'WORD PROBLEM', visual: 'barmodel',
    questionText: "Farmer Ben had 87 apples. After selling some at the market, he had 38 apples left. How many apples did he sell?",
    options: ['49', '48', '50', '39'],
    correctAnswer: '49',
    explanation: "87 − 38 = 49 apples sold.",
    hint1: "87 − 38 = ?",
    hint2: "38 + 49 = 87.",
    visualData: { whole: 87, part1: 38, part2: 49 }
  },

  // ── WORLD 9: INVERSE GRAND KINGDOM (Questions 91 - 100: Grand Mastery) ────────
  {
    id: 91, districtId: 9, category: 'GRAND MASTERY', visual: 'triangle',
    questionText: "If 58 + 39 = 97, what is 97 − 58?",
    options: ['39', '38', '40', '49'],
    correctAnswer: '39',
    explanation: "97 − 58 = 39.",
    hint1: "The partner part is 39.",
    hint2: "97 − 58 = 39.",
    visualData: { whole: 97, part1: 58, part2: 39 }
  },
  {
    id: 92, districtId: 9, category: 'GRAND MASTERY', visual: 'barmodel',
    questionText: "Solve: 100 − 64 = ?",
    options: ['36', '35', '37', '46'],
    correctAnswer: '36',
    explanation: "64 + 36 = 100.",
    hint1: "Think: 64 + ? = 100.",
    hint2: "100 − 64 = 36.",
    visualData: { whole: 100, part1: 64, part2: 36 }
  },
  {
    id: 93, districtId: 9, category: 'GRAND MASTERY', visual: 'triangle',
    questionText: "Solve: □ + 49 = 86",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "86 − 49 = 37.",
    hint1: "86 − 49 = □.",
    hint2: "86 − 49 = 37.",
    visualData: { whole: 86, part1: 37, part2: 49, missing: 'part1' }
  },
  {
    id: 94, districtId: 9, category: 'GRAND MASTERY', visual: 'barmodel',
    questionText: "Which subtraction sentence checks 42 + 47 = 89?",
    options: ['89 − 47 = 42', '89 + 42 = 131', '47 − 42 = 5', '89 − 40 = 49'],
    correctAnswer: '89 − 47 = 42',
    explanation: "89 − 47 = 42.",
    hint1: "Whole − Part = Other Part.",
    hint2: "89 − 47 = 42.",
    visualData: { whole: 89, part1: 42, part2: 47 }
  },
  {
    id: 95, districtId: 9, category: 'GRAND MASTERY', visual: 'triangle',
    questionText: "Solve: 84 − 37 = ?",
    options: ['47', '46', '48', '57'],
    correctAnswer: '47',
    explanation: "37 + 47 = 84.",
    hint1: "37 + ? = 84.",
    hint2: "84 − 37 = 47.",
    visualData: { whole: 84, part1: 37, part2: 47 }
  },
  {
    id: 96, districtId: 9, category: 'GRAND MASTERY', visual: 'barmodel',
    questionText: "What is the missing part in this bar model: Whole = 99, Part 1 = 62, Part 2 = ?",
    options: ['37', '36', '38', '47'],
    correctAnswer: '37',
    explanation: "99 − 62 = 37.",
    hint1: "99 − 62 = ?",
    hint2: "62 + 37 = 99.",
    visualData: { whole: 99, part1: 62, part2: 37, missing: 'part2' }
  },
  {
    id: 97, districtId: 9, category: 'GRAND MASTERY', visual: 'triangle',
    questionText: "Solve: □ − 37 = 56",
    options: ['93', '92', '94', '83'],
    correctAnswer: '93',
    explanation: "37 + 56 = 93.",
    hint1: "Add the two parts to find the whole: 37 + 56.",
    hint2: "37 + 56 = 93.",
    visualData: { whole: 93, part1: 37, part2: 56, missing: 'whole' }
  },
  {
    id: 98, districtId: 9, category: 'GRAND MASTERY', visual: 'barmodel',
    questionText: "If 47 + 49 = 96, which two subtraction facts belong to this family?",
    options: ['96 − 47 = 49 and 96 − 49 = 47', '96 − 40 = 56 and 96 − 50 = 46', '49 − 47 = 2 and 96 − 2 = 94', '96 + 47 = 143 and 96 + 49 = 145'],
    correctAnswer: '96 − 47 = 49 and 96 − 49 = 47',
    explanation: "96 − 47 = 49 and 96 − 49 = 47 are the twin subtraction facts.",
    hint1: "Subtract each part in turn from the whole (96).",
    hint2: "96 − 47 = 49 and 96 − 49 = 47.",
    visualData: { whole: 96, part1: 47, part2: 49 }
  },
  {
    id: 99, districtId: 9, category: 'GRAND MASTERY', visual: 'triangle',
    questionText: "Solve: 91 − 37 = ?",
    options: ['54', '53', '55', '64'],
    correctAnswer: '54',
    explanation: "37 + 54 = 91.",
    hint1: "Think: 37 + ? = 91.",
    hint2: "91 − 37 = 54.",
    visualData: { whole: 91, part1: 37, part2: 54 }
  },
  {
    id: 100, districtId: 9, category: 'GRAND MASTERY', visual: 'barmodel',
    questionText: "King Arthur says: 'A Fact Family Triangle has 100 at top, 36 and 64 at bottom. Why is addition the key to subtraction?'",
    options: ['Because Part 1 + Part 2 = Whole, so Whole − Part 1 = Part 2!', 'Because subtraction is just guessing', 'Because all numbers in math are 100', 'Because addition always makes numbers smaller'],
    correctAnswer: 'Because Part 1 + Part 2 = Whole, so Whole − Part 1 = Part 2!',
    explanation: "Since Part 1 + Part 2 = Whole, taking away one part always leaves the other part: Whole − Part 1 = Part 2!",
    hint1: "The relationship is inverse: Part + Part = Whole, so Whole − Part = Other Part.",
    hint2: "Because Part 1 + Part 2 = Whole, so Whole − Part 1 = Part 2!",
    visualData: { whole: 100, part1: 36, part2: 64 }
  },
];

export default RAW_QUESTIONS;
