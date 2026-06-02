/**
 * generate_audio.js
 * Generates all narration + SFX audio files via ElevenLabs API.
 *
 * Usage:
 *   VITE_ELEVENLABS_API_KEY=your_key node scripts/generate_audio.js
 *
 * Voice: Alice | ID: Xb7hH8MSUJpSbSDYk0k2 | Model: eleven_multilingual_v2
 * Output: public/assets/audio/
 */

import fs   from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR   = path.join(__dirname, '..', 'public', 'assets', 'audio');

const API_KEY  = process.env.VITE_ELEVENLABS_API_KEY;
const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2'; // Alice
const MODEL    = 'eleven_multilingual_v2';

if (!API_KEY) {
  console.error('❌  VITE_ELEVENLABS_API_KEY not set. Aborting.');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

// ── Text scripts ──────────────────────────────────────────────
const SCRIPTS = [
  { file: 'intro_welcome.mp3',        text: 'Welcome to Subtraction within 100! Let\'s discover the secret connection between addition and subtraction.' },
  { file: 'wonder_01.mp3',            text: 'Here\'s a mystery! If 48 plus 35 equals 83, can you find two hidden subtraction secrets inside?' },
  { file: 'wonder_02.mp3',            text: 'Addition and subtraction undo each other. They are called inverse operations, like a lock and its key!' },
  { file: 'wonder_03.mp3',            text: 'Knowing one addition fact gives you two subtraction facts instantly! Let\'s discover how.' },
  { file: 'story_intro.mp3',          text: 'Meet Lily and Max. They run a sandwich shop and have a very tricky maths problem to solve!' },
  { file: 'story_panel1.mp3',         text: 'Lily and Max baked 63 sandwiches one morning.' },
  { file: 'story_panel2.mp3',         text: 'By noon, only 27 sandwiches were left on the shelf.' },
  { file: 'story_panel3.mp3',         text: 'Max scratched his head. How many sandwiches did we sell? I can\'t figure it out!' },
  { file: 'story_panel4.mp3',         text: 'Lily had an idea! She drew a fact family triangle with 63 at the top, 27 on one side, and a question mark on the other.' },
  { file: 'story_panel5.mp3',         text: '63 minus 27 equals 36. They sold 36 sandwiches! One addition fact revealed the answer instantly!' },
  { file: 'story_panel6.mp3',         text: 'They wrote all four facts on the chalkboard: 27 plus 36 equals 63, 36 plus 27 equals 63, 63 minus 27 equals 36, and 63 minus 36 equals 27!' },
  { file: 'sim_a_intro.mp3',          text: 'Station A! Let\'s use base-ten blocks to take away and see subtraction in action.' },
  { file: 'sim_b_intro.mp3',          text: 'Station B! Use the fact family triangle to find the missing number.' },
  { file: 'sim_c_intro.mp3',          text: 'Station C! Can you write the subtraction sentence that matches the addition sentence?' },
  { file: 'feedback_correct_01.mp3',  text: 'Brilliant! You\'ve got it!' },
  { file: 'feedback_correct_02.mp3',  text: 'Excellent work! The inverse relationship helped you!' },
  { file: 'feedback_correct_03.mp3',  text: 'Outstanding! You\'re a subtraction superstar!' },
  { file: 'feedback_wrong_01.mp3',    text: 'Good try! Remember to use the fact family triangle.' },
  { file: 'feedback_wrong_02.mp3',    text: 'Not quite! Think about the inverse relationship.' },
  { file: 'badge_curious_coder.mp3',  text: 'Badge unlocked! Curious Coder! You completed the Wonder and Story phases!' },
  { file: 'badge_sim_scientist.mp3',  text: 'Badge unlocked! Sim Scientist! You completed all three simulation stations!' },
  { file: 'badge_sub_solver.mp3',     text: 'Badge unlocked! Sub Solver! You scored over 80 correct answers!' },
  { file: 'badge_inv_master.mp3',     text: 'Badge unlocked! Inverse Master! You scored perfect ten out of ten in a world!' },
  { file: 'badge_streak_champ.mp3',   text: 'Badge unlocked! Streak Champion! You answered 12 questions in a row correctly!' },
  { file: 'badge_journey_hero.mp3',   text: 'Badge unlocked! Journey Hero! You completed all five phases. What an achievement!' },
  { file: 'world_complete.mp3',       text: 'Wonderful! You completed this world! Keep going to unlock the next challenge!' },
  { file: 'all_worlds_done.mp3',      text: 'Amazing! You\'ve completed all ten worlds! You are a true Subtraction Master!' },
  { file: 'reflect_intro.mp3',        text: 'Let\'s take a moment to think about everything you\'ve learned today.' },
  { file: 'results_final.mp3',        text: 'Congratulations! You\'ve completed the Subtraction within 100 module. What a fantastic journey!' },
];

// ── TTS helper ────────────────────────────────────────────────
function tts(text, outPath) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id:      MODEL,
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });

    const req = https.request(
      {
        hostname: 'api.elevenlabs.io',
        path:     `/v1/text-to-speech/${VOICE_ID}`,
        method:   'POST',
        headers:  {
          'xi-api-key':    API_KEY,
          'Content-Type':  'application/json',
          'Accept':        'audio/mpeg',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          let err = '';
          res.on('data', (d) => (err += d));
          res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${err}`)));
          return;
        }
        const chunks = [];
        res.on('data', (d) => chunks.push(d));
        res.on('end', () => {
          fs.writeFileSync(outPath, Buffer.concat(chunks));
          resolve();
        });
      }
    );

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Main ──────────────────────────────────────────────────────
(async () => {
  console.log(`🎙️  Generating ${SCRIPTS.length} audio files…\n`);
  let ok = 0, skip = 0, fail = 0;

  for (const { file, text } of SCRIPTS) {
    const outPath = path.join(OUT_DIR, file);
    if (fs.existsSync(outPath)) {
      console.log(`  ⏭  ${file} (already exists)`);
      skip++;
      continue;
    }
    try {
      process.stdout.write(`  🔊 ${file} … `);
      await tts(text, outPath);
      console.log('✓');
      ok++;
      // Rate-limit: 2 req/s
      await new Promise((r) => setTimeout(r, 500));
    } catch (e) {
      console.log(`✗  ${e.message}`);
      fail++;
    }
  }

  // Generate audioMap.js dynamically
  const mapContent = {};
  for (const { file, text } of SCRIPTS) {
    mapContent[text] = `/assets/audio/${file}`;
  }
  const mapPath = path.join(__dirname, '..', 'src', 'utils', 'audioMap.js');
  fs.writeFileSync(
    mapPath,
    `export const audioMap = ${JSON.stringify(mapContent, null, 2)};\n`
  );
  console.log(`\n📝 Generated src/utils/audioMap.js successfully.`);

  console.log(`\n✅  Done — ${ok} generated, ${skip} skipped, ${fail} failed.`);
})();
