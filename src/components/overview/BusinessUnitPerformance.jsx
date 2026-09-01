import { businessUnits } from '../../data/overviewData.js';

function BusinessUnitPerformance() {
  return (
    <section className="panel" aria-labelledby="business-unit-title">
      <div className="panel__header">
        <div>
          <span className="eyebrow">Business Units</span>
          <h2 id="business-unit-title">Ranked Performance</h2>
        </div>
      </div>

      <div className="unit-list">
        {businessUnits.map((unit, index) => (
          <article className="unit-row" key={unit.name}>
            <div className="unit-rank">{index + 1}</div>
            <div className="unit-details">
              <div>
                <h3>{unit.name}</h3>
                <span>Revenue: {unit.revenue}</span>
              </div>
              <strong>{unit.growth}</strong>
              <div className="progress-track" aria-label={`${unit.name} target attainment ${unit.attainment}%`}>
                <span style={{ width: `${Math.min(unit.attainment, 116)}%` }} />
              </div>
              <small>{unit.attainment}% target attainment</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BusinessUnitPerformance;
