import { useReducer, useEffect, useRef, useState, useCallback } from 'react';
import './App.css';

import { reducer, mkFresh }    from './store/reducer.js';
import { BADGES }              from './data/badges.js';
import { useAudio }            from './hooks/useAudio.js';

import FloatingNumbers from './components/shared/FloatingNumbers.jsx';
import TopBar          from './components/shared/TopBar.jsx';
import BadgeToast      from './components/shared/BadgeToast.jsx';

import IntroScreen   from './components/phases/IntroScreen.jsx';
import WonderPhase   from './components/phases/WonderPhase.jsx';
import StoryPhase    from './components/phases/StoryPhase.jsx';
import SimulatePhase from './components/simulations/SimulatePhase.jsx';
import PlayPhase     from './components/quiz/PlayPhase.jsx';
import ReflectPhase  from './components/phases/ReflectPhase.jsx';
import ResultsScreen from './components/phases/ResultsScreen.jsx';

export default function App() {
  const [state, dispatch] = useReducer(reducer, null, mkFresh);
  const [toastBadges, setToastBadges] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { play } = useAudio();

  const playSfx = useCallback((key) => {
    if (soundEnabled) play(key);
  }, [play, soundEnabled]);

  const goHome = useCallback(() => {
    dispatch({ t: 'PHASE', v: 'intro' });
    playSfx('click');
  }, [playSfx]);

  /* ── Badge toasts ── */
  useEffect(() => {
    if (state.newBadges?.length > 0) {
      const names = state.newBadges.map(
        (id) => BADGES.find((b) => b.id === id)?.label || id
      );
      setToastBadges(names);
      playSfx('badge');
      dispatch({ t: 'CLEAR_BADGES' });
    }
  }, [state.newBadges, playSfx]);

  /* ── Audio on feedback ── */
  useEffect(() => {
    if (state.fb) playSfx(state.fb.ok ? 'correct' : 'wrong');
  }, [state.fb, playSfx]);

  /* ── Scroll to top on phase change ── */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.phase]);

  /* ── Helper: advance phase ── */
  const advance = useCallback((from, to) => {
    dispatch({ t: 'PHASE_DONE', v: from });
    dispatch({ t: 'PHASE',      v: to   });
    playSfx('phaseComplete');
  }, [playSfx]);

  const showNav = state.phase !== 'intro' && state.phase !== 'results';

  /* ── Phase renderer ── */
  const renderPhase = () => {
    switch (state.phase) {
      case 'intro':
        return (
          <IntroScreen
            onStart={() => dispatch({ t: 'PHASE', v: 'wonder' })}
            audioEnabled={soundEnabled}
            onToggleAudio={() => {
              setSoundEnabled((e) => !e);
              play('click');
            }}
          />
        );

      case 'wonder':
        return <WonderPhase onComplete={() => advance('wonder', 'story')} audioEnabled={soundEnabled} />;

      case 'story':
        return <StoryPhase onComplete={() => advance('story', 'simulate')} audioEnabled={soundEnabled} />;

      case 'simulate':
        return (
          <SimulatePhase
            state={state}
            dispatch={dispatch}
            onDone={() => dispatch({ t: 'PHASE', v: 'play' })}
            audioEnabled={soundEnabled}
          />
        );

      case 'play':
        return (
          <PlayPhase
            state={state}
            dispatch={dispatch}
            onDone={() => advance('play', 'reflect')}
            audioEnabled={soundEnabled}
          />
        );

      case 'reflect':
        return (
          <ReflectPhase
            state={state}
            onDone={() => advance('reflect', 'results')}
            audioEnabled={soundEnabled}
          />
        );

      case 'results':
        return <ResultsScreen state={state} dispatch={dispatch} audioEnabled={soundEnabled} />;

      default:
        return null;
    }
  };

  return (
    <>
      <FloatingNumbers />
      <div className="app-container">
        {/* Home button — hidden on intro/results */}
        {showNav && (
          <button className="home-btn" onClick={goHome} title="Go Home">
            🏠 Home
          </button>
        )}

        {/* Audio toggle — always visible except intro (it has its own) */}
        {showNav && (
          <button
            className="audio-toggle-btn"
            onClick={() => {
              setSoundEnabled((e) => !e);
              play('click');
            }}
            title={soundEnabled ? 'Mute audio' : 'Enable audio'}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
        )}

        {/* Journey progress bar */}
        {showNav && <TopBar state={state} />}

        {/* Main content */}
        <main id="main-content" style={{ width: '100%', maxWidth: 700, padding: '0 16px' }}>
          {renderPhase()}
        </main>

        <BadgeToast badges={toastBadges} onDone={() => setToastBadges([])} />
      </div>
    </>
  );
}
