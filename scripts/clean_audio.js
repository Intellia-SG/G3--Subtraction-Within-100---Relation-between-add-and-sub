// scripts/clean_audio.js
import fs from 'fs';
import path from 'path';
import { audioMap } from '../src/utils/audioMap.js';

const audioDir = './public/assets/audio';

if (fs.existsSync(audioDir)) {
  const referencedFiles = new Set(Object.values(audioMap).map((p) => path.basename(p)));
  const existingFiles = fs.readdirSync(audioDir);

  let deletedCount = 0;
  for (const file of existingFiles) {
    if (file.endsWith('.mp3') && !referencedFiles.has(file)) {
      fs.unlinkSync(path.join(audioDir, file));
      console.log(`🗑️ Deleted orphaned audio: ${file}`);
      deletedCount++;
    }
  }

  console.log(`\n🧹 Cleaned up ${deletedCount} unused audio files.`);
} else {
  console.log('No audio directory found to clean.');
}
