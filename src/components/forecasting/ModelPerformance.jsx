import { modelPerformance } from '../../data/forecastingData.js';

function ModelPerformance() {
  return (
    <section className="panel revenue-table-panel" aria-labelledby="model-title">
      <div className="panel__header"><div><span className="eyebrow">Fictional Modeling Data</span><h2 id="model-title">Forecast Accuracy</h2></div><span className="health-score">{modelPerformance.current} Current</span></div>
      <div className="margin-highlights"><div><span>Last Quarter</span><strong>{modelPerformance.lastQuarter}</strong></div><div><span>Last 4 Quarters</span><strong>{modelPerformance.last4Quarters}</strong></div></div>
      <div className="table-wrap"><table className="data-table"><thead><tr><th>Quarter</th><th>Forecast</th><th>Actual</th><th>Absolute Variance</th></tr></thead><tbody>{modelPerformance.history.map((row) => <tr key={row.quarter}><th scope="row">{row.quarter}</th><td>${row.forecast.toFixed(2)}M</td><td>${row.actual.toFixed(2)}M</td><td>{row.variance}</td></tr>)}</tbody></table></div>
      <div className="health-list forecast-accuracy-list">{modelPerformance.categories.map((item) => <div className="health-metric" key={item.label}><div><span>{item.label}</span><strong>{item.value}%</strong></div><div className="progress-track"><span style={{ width: `${item.value}%` }} /></div></div>)}</div>
    </section>
  );
}

export default ModelPerformance;
