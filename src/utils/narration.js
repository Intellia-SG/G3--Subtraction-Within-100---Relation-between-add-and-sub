// src/utils/narration.js
// Narration script builder for Addition & Subtraction Quest
// Strictly matches on-screen text 1:1

export const say       = (text) => ({ text, style: 'statement' });
export const ask       = (text) => ({ text, style: 'question' });
export const cheer     = (text) => ({ text, style: 'celebration' });
export const emphasize = (text) => ({ text, style: 'emphasis' });
export const think     = (text) => ({ text, style: 'thinking' });
export const instruct  = (text) => ({ text, style: 'instruction' });
export const encourage = (text) => ({ text, style: 'encouragement' });

export function wonderNarration() {
  return [
    say("Welcome to Addition and Subtraction Quest! Let's discover how addition unlocks subtraction!"),
    say("Alex won sixty-three tokens at the school carnival. He played fun games and had twenty-seven tokens left."),
    ask("How many tokens did he spend, and how can addition help us solve this subtraction puzzle without counting backwards?"),
    cheer("Let's investigate the power of Fact Families and inverse operations!"),
  ];
}

export function storyNarration(panel) {
  const scripts = [
    [
      say("Alex had the best time at the school carnival, winning sixty-three shiny prize tokens!"),
      say("He spent some tokens on the giant slide and carnival games."),
      say("When he checked his pocket, he had twenty-seven tokens left."),
      ask("His friend Emma asked: How many tokens did you spend, Alex?"),
      think("Alex wondered how to find the missing part!"),
    ],
    [
      say("Alex tried to count backwards one by one from sixty-three down to twenty-seven, but he kept losing track."),
      encourage("Emma smiled and said: You don't need to count backwards! You can use addition to unlock subtraction!"),
      say("Addition and subtraction are partners that work together."),
      ask("Twenty-seven plus what number equals sixty-three? Emma asked."),
      cheer("Alex's eyes lit up with curiosity!"),
    ],
    [
      say("Emma drew a magical Fact Family Triangle."),
      say("At the top she wrote sixty-three — the whole total."),
      say("At the bottom corners, she wrote twenty-seven and thirty-six."),
      say("The two bottom parts always add up to the top whole! she explained."),
      cheer("So twenty-seven plus thirty-six equals sixty-three, which means sixty-three minus twenty-seven equals thirty-six!"),
    ],
    [
      say("Alex was amazed! From just three numbers — sixty-three, twenty-seven, and thirty-six — he could write four complete facts."),
      say("Twenty-seven plus thirty-six is sixty-three. Thirty-six plus twenty-seven is sixty-three."),
      say("Sixty-three minus twenty-seven is thirty-six. And sixty-three minus thirty-six is twenty-seven."),
      cheer("They are a true fact family! Subtraction is simple when you know addition!"),
    ],
  ];

  return scripts[panel] || scripts[0];
}

export function simStationIntro(stationIdx) {
  const intros = [
    [
      instruct("Welcome to Station A — Apple Orchard and Basket Lab!"),
      instruct("Tap apples to place them into Basket A and Basket B to build the target whole. Then take away one basket to discover the inverse subtraction fact!"),
    ],
    [
      instruct("Welcome to Station B — Fact Family Balance Scale and Triangle!"),
      instruct("Place the missing part weight onto the scale to level it with the whole. Once balanced, tap the number cards to reveal all four fact sentences!"),
    ],
    [
      instruct("Welcome to Station C — The Math Inverse Machine!"),
      instruct("Feed an addition fact into the machine gears, pull the lever, and build the twin inverse subtraction facts with the dynamic bar model!"),
    ],
    [
      instruct("Welcome to Station D — Fact Detective and Error Buster!"),
      instruct("Detective Pip found suspicious math scrolls with calculation mistakes. Inspect the clues, find the broken fact sentence, and fix it!"),
    ],
  ];

  return intros[stationIdx] || intros[0];
}

export function playQuestionNarration(questionText) {
  return [
    ask(questionText)
  ];
}

export function playCorrectNarration(streak = 1) {
  if (streak >= 5) {
    return [cheer("Incredible streak! You are unstoppable! 🔥")];
  }
  if (streak >= 3) {
    return [cheer("Awesome! Three in a row! ⭐")];
  }
  return [cheer("Spot on! That's correct! 🎉")];
}

export function playWrongNarration() {
  return [
    think("Not quite — check the hint, think of the fact family triangle, and try again! 💡")
  ];
}

export function playHint1Narration() {
  return [
    encourage("Here's your first hint! Remember that Part One plus Part Two equals the Whole.")
  ];
}

export function playHint2Narration() {
  return [
    encourage("Here's your final clue! Subtract the known part from the whole to find the missing part.")
  ];
}

export function districtCompleteNarration() {
  return [
    cheer("World Complete! Spectacular job mastering this math world! 🌟")
  ];
}

export function bossStartNarration() {
  return [
    emphasize("The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!")
  ];
}

export function bossWinNarration() {
  return [
    cheer("Victory! You defeated the boss and claimed the World Badge! 👑")
  ];
}

export function reflectNarration() {
  return [
    say("Welcome to the Reflect Phase! Let's review the key fact family rules and check your scorecard! 📓")
  ];
}

export function reflectCompleteNarration() {
  return [
    cheer("Outstanding! You have mastered the relationship between addition and subtraction! You are a Grand Math Master! 🏆")
  ];
}
