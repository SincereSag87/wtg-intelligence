import { operationsComparison } from '../../data/operationsData.js';

function OperationsComparison() {
  return (
    <section className="panel comparison-panel operations-comparison-panel" aria-labelledby="operations-comparison-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Current Period vs Previous Period</span>
          <h2 id="operations-comparison-title">Operations Comparison</h2>
        </div>
      </div>

      <div className="comparison-grid operations-comparison-grid">
        {operationsComparison.map((item) => (
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

export default OperationsComparison;
