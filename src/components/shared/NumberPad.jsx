export default function NumberPad({ value, onChange, onSubmit, max = 100 }) {
  const append = (d) => {
    const n = parseInt((value || '') + d, 10);
    if (!isNaN(n) && n <= max) onChange(String(n));
  };

  return (
    <div>
      <div className="npd-display">{value || '□'}</div>
      <div className="npd">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
          <button key={d} className="npb" onClick={() => append(String(d))}>
            {d}
          </button>
        ))}
        <button className="npb npb-c" onClick={() => onChange('')}>C</button>
        <button className="npb npb-z" onClick={() => append('0')}>0</button>
        <button className="npb npb-s" onClick={onSubmit}>✓</button>
      </div>
    </div>
  );
}
