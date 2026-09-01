import { revenueComposition } from '../../data/revenueData.js';

function RevenueComposition({ activeUnit }) {
  const visibleUnits = activeUnit === 'All Units' ? revenueComposition : revenueComposition.filter((unit) => unit.unit === activeUnit);

  return (
    <section className="panel" aria-labelledby="composition-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Contribution</span>
          <h2 id="composition-title">Revenue Composition</h2>
        </div>
      </div>

      <div className="composition-stack" aria-label="Revenue composition by business unit">
        {revenueComposition.map((unit) => (
          <span key={unit.unit} style={{ width: `${unit.percent}%` }} title={`${unit.unit}: ${unit.percent}%`} />
        ))}
      </div>

      <div className="composition-list">
        {visibleUnits.map((unit) => (
          <article className="composition-item" key={unit.unit}>
            <div>
              <h3>{unit.unit}</h3>
              <span>{unit.percent}% of total revenue</span>
            </div>
            <strong>${unit.revenue.toFixed(2)}M</strong>
            <div className="progress-track" aria-label={`${unit.unit} contribution ${unit.percent}%`}>
              <span style={{ width: `${unit.percent}%` }} />
            </div>
            <small>Growth +{unit.growth}% / Margin {unit.margin}%</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RevenueComposition;
