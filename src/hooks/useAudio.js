// src/hooks/useAudio.js
import { useEffect, useRef, useCallback } from 'react';
import { speak, narrate, stopAudio, setMuted } from '../utils/audio.js';

/**
 * Web Audio API synthesizer for instant zero-asset sound effects.
 */
function createSoundEngine() {
  let ctx = null;

  function getCtx() {
    if (!ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) ctx = new AudioContext();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  function playTone(freq, duration, type = 'sine', gainVal = 0.15) {
    try {
      const audioCtx = getCtx();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Ignore audio failure
    }
  }

  return {
    click: () => playTone(520, 0.08, 'sine', 0.1),
    correct: () => {
      playTone(523.25, 0.12, 'sine', 0.2); // C5
      setTimeout(() => playTone(659.25, 0.12, 'sine', 0.2), 90); // E5
      setTimeout(() => playTone(783.99, 0.22, 'sine', 0.25), 180); // G5
    },
    wrong: () => {
      playTone(280, 0.14, 'triangle', 0.2);
      setTimeout(() => playTone(220, 0.22, 'triangle', 0.22), 120);
    },
    levelUp: () => {
      const notes = [440, 554, 659, 880];
      notes.forEach((freq, i) => setTimeout(() => playTone(freq, 0.15, 'sine', 0.2), i * 80));
    },
    badge: () => {
      const notes = [523, 659, 783, 1046];
      notes.forEach((freq, i) => setTimeout(() => playTone(freq, 0.18, 'triangle', 0.25), i * 90));
    },
    defeat: () => {
      const notes = [350, 310, 270, 220];
      notes.forEach((freq, i) => setTimeout(() => playTone(freq, 0.2, 'sawtooth', 0.15), i * 110));
    },
  };
}

const sounds = createSoundEngine();

export function useAudio(audioEnabled = true) {
  const isEnabledRef = useRef(audioEnabled);

  useEffect(() => {
    isEnabledRef.current = audioEnabled;
    setMuted(!audioEnabled);
    if (!audioEnabled) {
      stopAudio();
    }
  }, [audioEnabled]);

  const speakText = useCallback(
    async (text, style = 'statement') => {
      if (!isEnabledRef.current) return;
      await speak(text, style);
    },
    []
  );

  const narrateSegments = useCallback(
    async (segments) => {
      if (!isEnabledRef.current) return;
      await narrate(segments);
    },
    []
  );

  const stopAll = useCallback(() => {
    stopAudio();
  }, []);

  return {
    speak: speakText,
    narrate: narrateSegments,
    stopAll,
    sounds: {
      click: () => isEnabledRef.current && sounds.click(),
      correct: () => isEnabledRef.current && sounds.correct(),
      wrong: () => isEnabledRef.current && sounds.wrong(),
      levelUp: () => isEnabledRef.current && sounds.levelUp(),
      badge: () => isEnabledRef.current && sounds.badge(),
      defeat: () => isEnabledRef.current && sounds.defeat(),
    },
  };
}
