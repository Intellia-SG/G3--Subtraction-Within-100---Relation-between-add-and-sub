// src/data/storyContent.js
// Rich 4-panel learning story for Relation between Addition & Subtraction (Grade 2 Math)

export const STORY_PANELS = [
  {
    panel: 0,
    title: "Alex's Carnival Fair",
    character: 'Alex',
    characterEmoji: '👦',
    imageBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    imageEmoji: '🎡',
    text: "Alex had the best time at the school carnival, winning 63 shiny prize tokens! He spent some tokens on the giant slide and arcade games. When he checked his pocket at the end of the day, he had only 27 tokens left.",
    highlight: "Alex asked: 'How many tokens did I spend?'",
    questionPrompt: "Total tokens: 63 | Left: 27 | Spent: ?",
  },
  {
    panel: 1,
    title: 'The Subtraction Puzzle',
    character: 'Emma',
    characterEmoji: '👧',
    imageBg: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
    imageEmoji: '💡',
    text: "Alex tried to count backwards from 63 to 27, but kept losing count. Then his friend Emma smiled: 'You don\'t need to count backwards! Addition and subtraction are partners. You can use addition to unlock subtraction!'",
    highlight: "'Addition and Subtraction are Inverse Operations!'",
    questionPrompt: "Think: 27 + ? = 63",
  },
  {
    panel: 2,
    title: "Emma's Fact Family Triangle",
    character: 'Emma',
    characterEmoji: '👧',
    imageBg: 'linear-gradient(135deg, #701a75 0%, #86198f 100%)',
    imageEmoji: '🔺',
    text: "Emma drew a magical triangle. At the top she wrote 63 — the Whole. At the bottom two corners she wrote 27 and 36 — the two Parts. 'The two parts always add up to the whole! Since 27 + 36 = 63, it means 63 − 27 = 36!'",
    highlight: "'Whole − Part 1 = Part 2 (63 − 27 = 36)'",
    questionPrompt: "Whole: 63 | Part A: 27 | Part B: 36",
  },
  {
    panel: 3,
    title: 'The Full Fact Family!',
    character: 'Alex & Emma',
    characterEmoji: '👫',
    imageBg: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
    imageEmoji: '🎉',
    text: "Alex was amazed! From just three numbers — 63, 27, and 36 — he wrote four facts: 27 + 36 = 63, 36 + 27 = 63, 63 − 27 = 36, and 63 − 36 = 27. 'They are a true family!' Now subtraction is as easy as addition!",
    highlight: "'One Fact Family = 2 Addition + 2 Subtraction Facts!'",
    questionPrompt: "4 number sentences from 3 numbers!",
  },
];
