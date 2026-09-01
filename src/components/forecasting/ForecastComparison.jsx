import { forecastComparisons } from '../../data/forecastingData.js';

function ForecastComparison() {
  return (
    <section className="panel comparison-panel" aria-labelledby="forecast-comparison-title">
      <div className="panel__header"><div><span className="eyebrow">Scenario Comparison</span><h2 id="forecast-comparison-title">Forecast Comparison</h2></div></div>
      <div className="comparison-grid">{forecastComparisons.map((item) => <article className="comparison-item" key={item.label}><span>{item.label}</span><div><strong>{item.revenue}</strong><small>Margin {item.margin}</small></div><b>Risk {item.risk}</b></article>)}</div>
    </section>
  );
}

export default ForecastComparison;
