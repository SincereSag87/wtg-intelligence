import { periodComparison } from '../../data/revenueData.js';

function PeriodComparison() {
  return (
    <section className="panel comparison-panel" aria-labelledby="comparison-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Current Period vs Previous Period</span>
          <h2 id="comparison-title">Period Comparison</h2>
        </div>
      </div>

      <div className="comparison-grid">
        {periodComparison.map((item) => (
          <article className="comparison-item" key={item.label}>
            <span>{item.label}</span>
            <div>
              <strong>{item.current}</strong>
              <small>vs {item.previous}</small>
            </div>
            <b>{item.variance}</b>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PeriodComparison;
