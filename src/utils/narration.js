// Helpers to wrap text into specific ElevenLabs style structures
export const say        = (text) => ({ text, style: 'statement' });
export const ask        = (text) => ({ text, style: 'question' });
export const cheer      = (text) => ({ text, style: 'encouragement' });
export const emphasize  = (text) => ({ text, style: 'emphasis' });
export const think      = (text) => ({ text, style: 'thinking' });
export const celebrate  = (text) => ({ text, style: 'celebration' });

export const wonderNarration = (step) => {
  const steps = [
    [
      think("If 48 plus 35 equals 83... can you find two hidden subtraction secrets inside?")
    ],
    [
      say("Addition and subtraction undo each other. They are called inverse operations, like a lock and its key!")
    ],
    [
      say("Knowing one addition fact gives you two subtraction facts instantly! Let's discover how.")
    ]
  ];
  return steps[step] ?? [];
};

export const storyNarration = (panelIndex) => {
  const panels = [
    [
      say("Lily and Max baked 63 sandwiches one morning.")
    ],
    [
      say("By noon, only 27 sandwiches were left on the shelf.")
    ],
    [
      say("Max scratched his head. How many sandwiches did we sell? I can't figure it out!")
    ],
    [
      say("Lily had an idea! She drew a fact family triangle with 63 at the top, 27 on one side, and a question mark on the other.")
    ],
    [
      say("63 minus 27 equals 36. They sold 36 sandwiches! One addition fact revealed the answer instantly!")
    ],
    [
      say("They wrote all four facts on the chalkboard: 27 plus 36 equals 63, 36 plus 27 equals 63, 63 minus 27 equals 36, and 63 minus 36 equals 27!")
    ]
  ];
  return panels[panelIndex] ?? [];
};

export const simulateNarration = (stationIndex) => {
  const stations = [
    [
      say("Station A! Let's use base-ten blocks to take away and see subtraction in action.")
    ],
    [
      say("Station B! Use the fact family triangle to find the missing number.")
    ],
    [
      say("Station C! Can you write the subtraction sentence that matches the addition sentence?")
    ]
  ];
  return stations[stationIndex] ?? [];
};

export const correctNarration = (seed = 0) => {
  const list = [
    [cheer("Brilliant! You've got it!")],
    [cheer("Excellent work! The inverse relationship helped you!")],
    [cheer("Outstanding! You're a subtraction superstar!")]
  ];
  return list[seed % list.length];
};

export const wrongNarration = (seed = 0) => {
  const list = [
    [say("Good try! Remember to use the fact family triangle.")],
    [say("Not quite! Think about the inverse relationship.")]
  ];
  return list[seed % list.length];
};

export const badgeNarration = (badgeId) => {
  const map = {
    curious_coder: [celebrate("Badge unlocked! Curious Coder! You completed the Wonder and Story phases!")],
    sim_scientist: [celebrate("Badge unlocked! Sim Scientist! You completed all three simulation stations!")],
    sub_solver:    [celebrate("Badge unlocked! Sub Solver! You scored over 80 correct answers!")],
    inv_master:    [celebrate("Badge unlocked! Inverse Master! You scored perfect ten out of ten in a world!")],
    streak_champ:  [celebrate("Badge unlocked! Streak Champion! You answered 12 questions in a row correctly!")],
    journey_hero:  [celebrate("Badge unlocked! Journey Hero! You completed all five phases. What an achievement!")],
  };
  return map[badgeId] ?? [];
};

export const worldCompleteNarration = () => [
  celebrate("Wonderful! You completed this world! Keep going to unlock the next challenge!")
];

export const allWorldsDoneNarration = () => [
  celebrate("Amazing! You've completed all ten worlds! You are a true Subtraction Master!")
];

export const reflectIntroNarration = () => [
  say("Let's take a moment to think about everything you've learned today.")
];

export const resultsFinalNarration = () => [
  celebrate("Congratulations! You've completed the Subtraction within 100 module. What a fantastic journey!")
];

export const welcomeNarration = () => [
  say("Welcome to Subtraction within 100! Let's discover the secret connection between addition and subtraction.")
];
