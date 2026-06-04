import WorldMap           from './WorldMap.jsx';
import QuestionCard       from './QuestionCard.jsx';
import WorldCompleteModal from './WorldCompleteModal.jsx';

export default function PlayPhase({ state, dispatch, onDone }) {
  const allComplete = state.ws.every(w => w !== null);

  if (allComplete && state.showMap) {
    return (
      <div className="play-done glass-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: '4rem', marginBottom: 12 }}>🏆</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#fff', margin: '0 0 8px' }}>
          All 10 Worlds Complete!
        </h2>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)', marginBottom: 8 }}>
          {state.stars} ⭐
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
          {state.xp} XP · Best streak 🔥{state.maxStr}
        </p>
        <button className="btn btn-primary btn-lg" onClick={onDone}>
          ✨ Reflect on My Learning!
        </button>
      </div>
    );
  }

  if (state.worldResult && state.showMap) {
    return (
      <>
        <WorldMap state={state} dispatch={dispatch} />
        <WorldCompleteModal
          result={state.worldResult}
          worldIdx={state.cw}
          onContinue={() => dispatch({ t: 'SHOW_MAP' })}
        />
      </>
    );
  }

  if (state.showMap) return <WorldMap state={state} dispatch={dispatch} />;
  return <QuestionCard state={state} dispatch={dispatch} />;
}
