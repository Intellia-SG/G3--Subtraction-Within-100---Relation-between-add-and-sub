// scripts/generate_audio.js
// Offline pre-generation script for ElevenLabs narration audio files.
// Strictly follows audio_generation_pipeline (5).md specifications.

import fs from 'fs';
import path from 'path';

// Helper to read environment variables without external dependencies
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...rest] = trimmed.split('=');
          const val = rest.join('=').replace(/^["']|["']$/g, '').trim();
          if (!process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      }
    }
  }
}

loadEnv();

const apiKey = process.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.log("ℹ️ Note: VITE_ELEVENLABS_API_KEY is not defined yet in .env.local.");
  console.log("Audio files can be generated whenever you add VITE_ELEVENLABS_API_KEY=your_key to .env.local.");
}

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice — Clear, Engaging Educator
const VOICE_MODEL = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  statement:     { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  instruction:   { stability: 0.65, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true },
  question:      { stability: 0.55, similarity_boost: 0.75, style: 0.50, use_speaker_boost: true },
  encouragement: { stability: 0.50, similarity_boost: 0.85, style: 0.60, use_speaker_boost: true },
  emphasis:      { stability: 0.75, similarity_boost: 0.90, style: 0.20, use_speaker_boost: true },
  thinking:      { stability: 0.70, similarity_boost: 0.78, style: 0.40, use_speaker_boost: true },
  celebration:   { stability: 0.45, similarity_boost: 0.85, style: 0.80, use_speaker_boost: true },
};

const phrases = [
  // ─── INTRO ────────────────────────────────────────────────────────────────
  { text: "Welcome to Addition and Subtraction Quest! Let's discover how addition unlocks subtraction!", style: 'celebration' },

  // ─── WONDER PHASE ────────────────────────────────────────────────────────
  { text: "Alex won sixty-three tokens at the school carnival. He played fun games and had twenty-seven tokens left.", style: 'statement' },
  { text: "How many tokens did he spend, and how can addition help us solve this subtraction puzzle without counting backwards?", style: 'question' },
  { text: "Let's investigate the power of Fact Families and inverse operations!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 1 ────────────────────────────────────────────────
  { text: "Alex had the best time at the school carnival, winning sixty-three shiny prize tokens!", style: 'statement' },
  { text: "He spent some tokens on the giant slide and carnival games.", style: 'statement' },
  { text: "When he checked his pocket, he had twenty-seven tokens left.", style: 'statement' },
  { text: "His friend Emma asked: How many tokens did you spend, Alex?", style: 'question' },
  { text: "Alex wondered how to find the missing part!", style: 'thinking' },

  // ─── STORY PHASE: PANEL 2 ────────────────────────────────────────────────
  { text: "Alex tried to count backwards one by one from sixty-three down to twenty-seven, but he kept losing track.", style: 'statement' },
  { text: "Emma smiled and said: You don't need to count backwards! You can use addition to unlock subtraction!", style: 'encouragement' },
  { text: "Addition and subtraction are partners that work together.", style: 'statement' },
  { text: "Twenty-seven plus what number equals sixty-three? Emma asked.", style: 'question' },
  { text: "Alex's eyes lit up with curiosity!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 3 ────────────────────────────────────────────────
  { text: "Emma drew a magical Fact Family Triangle.", style: 'statement' },
  { text: "At the top she wrote sixty-three — the whole total.", style: 'statement' },
  { text: "At the bottom corners, she wrote twenty-seven and thirty-six.", style: 'statement' },
  { text: "The two bottom parts always add up to the top whole! she explained.", style: 'statement' },
  { text: "So twenty-seven plus thirty-six equals sixty-three, which means sixty-three minus twenty-seven equals thirty-six!", style: 'celebration' },

  // ─── STORY PHASE: PANEL 4 ────────────────────────────────────────────────
  { text: "Alex was amazed! From just three numbers — sixty-three, twenty-seven, and thirty-six — he could write four complete facts.", style: 'statement' },
  { text: "Twenty-seven plus thirty-six is sixty-three. Thirty-six plus twenty-seven is sixty-three.", style: 'statement' },
  { text: "Sixty-three minus twenty-seven is thirty-six. And sixty-three minus thirty-six is twenty-seven.", style: 'statement' },
  { text: "They are a true fact family! Subtraction is simple when you know addition!", style: 'celebration' },

  // ─── SIMULATE STATION INTROS ─────────────────────────────────────────────
  { text: "Welcome to Station A — Apple Orchard and Basket Lab!", style: 'instruction' },
  { text: "Tap apples to place them into Basket A and Basket B to build the target whole. Then take away one basket to discover the inverse subtraction fact!", style: 'instruction' },
  { text: "Welcome to Station B — Fact Family Balance Scale and Triangle!", style: 'instruction' },
  { text: "Place the missing part weight onto the scale to level it with the whole. Once balanced, tap the number cards to reveal all four fact sentences!", style: 'instruction' },
  { text: "Welcome to Station C — The Math Inverse Machine!", style: 'instruction' },
  { text: "Feed an addition fact into the machine gears, pull the lever, and build the twin inverse subtraction facts with the dynamic bar model!", style: 'instruction' },
  { text: "Welcome to Station D — Fact Detective and Error Buster!", style: 'instruction' },
  { text: "Detective Pip found suspicious math scrolls with calculation mistakes. Inspect the clues, find the broken fact sentence, and fix it!", style: 'instruction' },

  // ─── FEEDBACK & HINTS ────────────────────────────────────────────────────
  { text: "Spot on! That's correct! 🎉", style: 'celebration' },
  { text: "Awesome! Three in a row! ⭐", style: 'celebration' },
  { text: "Incredible streak! You are unstoppable! 🔥", style: 'celebration' },
  { text: "Not quite — check the hint, think of the fact family triangle, and try again! 💡", style: 'thinking' },
  { text: "Here's your first hint! Remember that Part One plus Part Two equals the Whole.", style: 'encouragement' },
  { text: "Here's your final clue! Subtract the known part from the whole to find the missing part.", style: 'encouragement' },

  // ─── DISTRICT & BOSS BATTLES ─────────────────────────────────────────────
  { text: "World Complete! Spectacular job mastering this math world! 🌟", style: 'celebration' },
  { text: "The Boss Battle begins! Answer correctly to defeat the boss and claim your badge!", style: 'emphasis' },
  { text: "Victory! You defeated the boss and claimed the World Badge! 👑", style: 'celebration' },

  // ─── REFLECT PHASE ───────────────────────────────────────────────────────
  { text: "Welcome to the Reflect Phase! Let's review the key fact family rules and check your scorecard! 📓", style: 'statement' },
  { text: "Outstanding! You have mastered the relationship between addition and subtraction! You are a Grand Math Master! 🏆", style: 'celebration' },
];

const outputDir = './public/assets/audio';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function cleanString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 45).replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  console.log(`\n🎙️ Starting ElevenLabs Audio Generation Pipeline`);
  console.log(`Voice ID: ${VOICE_ID} | Model: ${VOICE_MODEL}`);
  console.log(`Total phrases to process: ${phrases.length}\n`);

  const mapping = {};

  for (let i = 0; i < phrases.length; i++) {
    const { text, style } = phrases[i];
    const cleanText = cleanString(text);
    const fileName = `audio_${cleanText}_${i}.mp3`;
    const destPath = path.join(outputDir, fileName);

    const relativeWebPath = `/assets/audio/${fileName}`;
    mapping[text] = relativeWebPath;

    if (fs.existsSync(destPath)) {
      console.log(`[${i + 1}/${phrases.length}] ⏩ Skipped (already exists): ${fileName}`);
      continue;
    }

    if (!apiKey) continue;

    console.log(`[${i + 1}/${phrases.length}] 🔊 Generating: "${text.substring(0, 40)}..." -> ${fileName}`);

    const settings = VOICE_SETTINGS[style] || VOICE_SETTINGS.statement;

    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: VOICE_MODEL,
          voice_settings: settings,
        }),
      });

      if (!response.ok) {
        const errBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errBody}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(destPath, buffer);
      console.log(`   ✅ Saved: ${destPath}`);
    } catch (e) {
      console.error(`   ❌ Failed to generate phrase "${text}":`, e.message);
    }
  }

  // Write mapping to src/utils/audioMap.js
  const mapContent = `// Auto-generated by generate_audio.js\n// Static asset mapping for offline generated narration phrases\n\nexport const audioMap = ${JSON.stringify(mapping, null, 2)};\n\nexport default audioMap;\n`;
  fs.writeFileSync('./src/utils/audioMap.js', mapContent);
  console.log("\n✨ Audio mapping updated in src/utils/audioMap.js!");
}

main().catch(console.error);
