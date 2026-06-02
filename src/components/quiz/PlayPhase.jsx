import WorldMap           from './WorldMap.jsx';
import QuestionCard        from './QuestionCard.jsx';
import WorldCompleteModal  from './WorldCompleteModal.jsx';

export default function PlayPhase({ state, dispatch, onDone }) {
  const allComplete = state.ws.every((w) => w !== null);

  // All worlds done
  if (allComplete && state.showMap) {
    return (
      <div>
        <div className="pbadge pb-play">Phase 4 · Play 🎮</div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 60, marginBottom: 8 }}>🏆</div>
          <h1>All 10 Worlds Done!</h1>
          <div style={{ fontFamily: 'Fredoka One, cursive', fontSize: 28, color: '#F5A623', margin: '6px 0' }}>
            {state.stars} ⭐
          </div>
          <p style={{ color: '#85929E', marginBottom: 18, fontSize: 13 }}>
            {state.xp} XP earned · Best streak: 🔥{state.maxStr}
          </p>
          <button className="btn btn-g btn-lg btn-full" onClick={onDone}>
            Reflect on My Learning! ✨
          </button>
        </div>
      </div>
    );
  }

  // Show world-complete modal on top of map
  if (state.worldResult && state.showMap) {
    return (
      <div>
        <WorldMap state={state} dispatch={dispatch} />
        <WorldCompleteModal
          result={state.worldResult}
          worldIdx={state.cw}
          onContinue={() => dispatch({ t: 'SHOW_MAP' })}
        />
      </div>
    );
  }

  if (state.showMap) return <WorldMap state={state} dispatch={dispatch} />;
  return <QuestionCard state={state} dispatch={dispatch} />;
}
